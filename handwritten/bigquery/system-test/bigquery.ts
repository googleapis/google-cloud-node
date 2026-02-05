// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ApiError} from '@google-cloud/common';
import {
  DecorateRequestOptions,
  GoogleErrorBody,
} from '@google-cloud/common/build/src/util';
import {Storage} from '@google-cloud/storage';
import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import * as Big from 'big.js';
import * as fs from 'fs';
import {randomUUID} from 'crypto';
import {Readable} from 'stream';

import {
  BigQuery,
  Dataset,
  Job,
  Model,
  RowMetadata,
  Routine,
  Table,
  InsertRowsStreamResponse,
  QueryOptions,
} from '../src';
import bq from '../src/types';

const bigquery = new BigQuery();
const storage = new Storage();

describe('BigQuery', () => {
  const GCLOUD_TESTS_PREFIX = 'nodejs_bq_test';
  const minCreationTime = Date.now().toString();

  const dataset = bigquery.dataset(generateName('dataset'));
  const table = dataset.table(generateName('table'));
  const bucket = storage.bucket(generateName('bucket'));

  const query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT 100';

  const SCHEMA = [
    {
      name: 'place',
      type: 'GEOGRAPHY',
    },
    {
      name: 'id',
      type: 'INTEGER',
    },
    {
      name: 'breed',
      type: 'STRING',
    },
    {
      name: 'name',
      type: 'STRING',
    },
    {
      name: 'dob',
      type: 'TIMESTAMP',
    },
    {
      name: 'around',
      type: 'BOOLEAN',
    },
    {
      name: 'buffer',
      type: 'BYTES',
    },
    {
      name: 'arrayOfInts',
      type: 'INTEGER',
      mode: 'REPEATED',
    },
    {
      name: 'recordOfRecords',
      type: 'RECORD',
      fields: [
        {
          name: 'records',
          type: 'RECORD',
          mode: 'REPEATED',
          fields: [
            {
              name: 'record',
              type: 'BOOLEAN',
            },
          ],
        },
      ],
    },
  ];

  before(async () => {
    // Remove buckets created for the tests.
    await deleteBuckets();

    // Remove datasets created for the tests.
    await deleteDatasets();

    // Create the test dataset with a label tagging this as a test run.
    await dataset.create({labels: {[GCLOUD_TESTS_PREFIX]: ''}});

    // Create the test table.
    await table.create({schema: SCHEMA});

    // Create a Bucket.
    await bucket.create();
  });

  after(async () => {
    await Promise.all([
      // Remove buckets created for the tests.
      deleteBuckets(),

      // Remove datasets created for the tests.
      deleteDatasets(),
    ]);
  });

  it('should get a list of datasets', done => {
    bigquery.getDatasets((err, datasets) => {
      assert(datasets!.length > 0);
      assert(datasets![0] instanceof Dataset);
      done();
    });
  });

  it('should allow limiting API calls', done => {
    const maxApiCalls = 1;
    let numRequestsMade = 0;
    const bigquery = new BigQuery();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bigquery as any).interceptors.push({
      request: (reqOpts: DecorateRequestOptions) => {
        numRequestsMade++;
        return reqOpts;
      },
    });

    bigquery.getDatasets({maxApiCalls}, err => {
      assert.ifError(err);
      assert.strictEqual(numRequestsMade, 1);
      done();
    });
  });

  it('should return a promise', () => {
    return bigquery.getDatasets().then(data => {
      const datasets = data[0];
      assert(datasets.length > 0);
      assert(datasets[0] instanceof Dataset);
    });
  });

  it('should allow limiting API calls via promises', () => {
    const maxApiCalls = 1;
    let numRequestsMade = 0;
    const bigquery = new BigQuery();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bigquery as any).interceptors.push({
      request: (reqOpts: DecorateRequestOptions) => {
        numRequestsMade++;
        return reqOpts;
      },
    });

    return bigquery
      .getDatasets({
        maxApiCalls,
      })
      .then(() => {
        assert.strictEqual(numRequestsMade, maxApiCalls);
      });
  });

  it('should allow for manual pagination in promise mode', async () => {
    const [datasets, , apiResponse] = await bigquery.getDatasets({
      autoPaginate: false,
      filter: `labels.${GCLOUD_TESTS_PREFIX}`,
    });
    assert(datasets[0] instanceof Dataset);
    assert(apiResponse);
  });

  it('should list datasets as a stream', done => {
    let datasetEmitted = false;

    bigquery
      .getDatasetsStream()
      .on('error', done)
      .on('data', dataset => {
        datasetEmitted = dataset instanceof Dataset;
      })
      .on('end', () => {
        assert.strictEqual(datasetEmitted, true);
        done();
      });
  });

  it('should run a query job, then get results', done => {
    bigquery.createQueryJob(query, (err, job) => {
      assert.ifError(err);
      assert(job instanceof Job);

      job!.getQueryResults((err, rows) => {
        assert.ifError(err);
        assert.strictEqual(rows!.length, 100);
        assert.strictEqual(typeof rows![0].url, 'string');
        done();
      });
    });
  });

  it('should run a query job as a promise', () => {
    let job: Job;

    return bigquery
      .createQueryJob(query)
      .then(response => {
        job = response[0];
        return job.promise();
      })
      .then(() => {
        return job.getQueryResults();
      })
      .then(response => {
        const rows = response[0];
        assert.strictEqual(rows!.length, 100);
        assert.strictEqual(typeof rows[0].url, 'string');
      });
  });

  it('should get query results as a stream', done => {
    bigquery.createQueryJob(query, (err, job) => {
      assert.ifError(err);
      const rowsEmitted = new Array<RowMetadata>();
      job!
        .getQueryResultsStream()
        .on('error', done)
        .on('data', row => rowsEmitted.push(row))
        .on('end', () => {
          assert.strictEqual(rowsEmitted.length, 100);
          assert.strictEqual(typeof rowsEmitted[0].url, 'string');
          done();
        });
    });
  });

  it('should honor the job prefix option', done => {
    const options = {
      query,
      jobPrefix: 'hi-im-a-prefix',
    };

    bigquery.createQueryJob(options, (err, job) => {
      assert.ifError(err);
      assert.strictEqual(job!.id!.indexOf(options.jobPrefix), 0);

      job!.getQueryResults((err, rows) => {
        assert.ifError(err);
        assert.strictEqual(rows!.length, 100);
        assert.strictEqual(typeof rows![0].url, 'string');
        done();
      });
    });
  });

  it('should honor the job id option', done => {
    const jobId = `hi-im-a-job-id-${randomUUID()}`;
    const options = {query, jobId};

    bigquery.createQueryJob(options, (err, job) => {
      assert.ifError(err);
      assert.strictEqual(job!.id, jobId);

      job!.getQueryResults(done);
    });
  });

  it('should honor the dryRun option', done => {
    const options = {
      query,
      dryRun: true,
    };

    bigquery.createQueryJob(options, (err, job) => {
      assert.ifError(err);
      assert(job!.metadata.statistics);
      done();
    });
  });

  it('should honor the labels option', done => {
    const options = {
      query,
      labels: {foo: 'bar'},
    };

    bigquery.createQueryJob(options, (err, _, job) => {
      assert.ifError(err);
      assert(job!.configuration!.labels);
      done();
    });
  });

  it('should query as a stream', done => {
    let rowsEmitted = 0;

    bigquery
      .createQueryStream(query)
      .on('data', row => {
        rowsEmitted++;
        assert.strictEqual(typeof row.url, 'string');
      })
      .on('error', done)
      .on('end', () => {
        assert.strictEqual(rowsEmitted, 100);
        done();
      });
  });

  it('should query', done => {
    bigquery.query(query, (err, rows) => {
      assert.ifError(err);
      assert.strictEqual(rows!.length, 100);
      done();
    });
  });

  it('should query with jobs.query and return all PagedResponse as positional parameters', async () => {
    const [rows, q, response] = await bigquery.query(query);
    const res: bq.IQueryResponse = response!;
    assert.strictEqual(rows!.length, 100);
    assert.notEqual(q?.job?.id, undefined);
    assert.notEqual(res, undefined);
    assert.strictEqual(res.kind, 'bigquery#queryResponse');
    assert.notEqual(res.queryId, undefined);
    assert.strictEqual(res.totalRows, '100');
  });

  it('should query without jobs.query and return all PagedResponse as positional parameters', async () => {
    // force jobs.getQueryResult instead of fast query path
    const jobId = generateName('job');
    const qOpts: QueryOptions = {
      job: bigquery.job(jobId),
    };
    const [rows, q, response] = await bigquery.query(query, qOpts);
    const res: bq.IGetQueryResultsResponse = response!;
    assert.strictEqual(rows!.length, 100);
    assert.strictEqual(q?.job?.id, jobId);
    assert.notEqual(res, undefined);
    assert.strictEqual(res.kind, 'bigquery#getQueryResultsResponse');
    assert.strictEqual(res.totalRows, '100');
  });

  describe('Query timeout', () => {
    let longRunningQuery = '';

    beforeEach(() => {
      const tableId = generateName('table');
      longRunningQuery = `CREATE TABLE ${dataset.projectId}.${dataset.id}.${tableId} AS SELECT num FROM UNNEST(GENERATE_ARRAY(1,1000000)) as num`;
    });

    it('should throw a timeout error with jobs.query', async () => {
      const qOpts: QueryOptions = {
        timeoutMs: 1000,
      };
      let foundError: Error | null = null;
      try {
        await bigquery.query(longRunningQuery, qOpts);
      } catch (error: unknown) {
        foundError = error as Error;
      }
      assert.notEqual(foundError, null);
      assert.equal(
        foundError?.message,
        'The query did not complete before 1000ms',
      );
    });

    it('should throw a timeout error without jobs.query', async () => {
      const jobId = generateName('job');
      const qOpts: QueryOptions = {
        job: bigquery.job(jobId),
        timeoutMs: 1000,
      };
      let foundError: Error | null = null;
      try {
        await bigquery.query(longRunningQuery, qOpts);
      } catch (error: unknown) {
        foundError = error as Error;
      }
      assert.notEqual(foundError, null);
      assert.equal(
        foundError?.message,
        'The query did not complete before 1000ms',
      );
    });
  });

  it('should allow querying in series', done => {
    bigquery.query(
      query,
      {
        maxResults: 10,
      },
      (err, rows, nextQuery) => {
        assert.ifError(err);
        assert.strictEqual(rows!.length, 10);
        assert.strictEqual(typeof nextQuery!.pageToken, 'string');
        done();
      },
    );
  });

  it('should accept the dryRun option', done => {
    bigquery.query(
      {
        query,
        dryRun: true,
      },
      (err, rows, resp) => {
        assert.ifError(err);
        assert.deepStrictEqual(rows, []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert((resp as any).statistics.query);
        done();
      },
    );
  });

  it('should get a list of jobs', done => {
    bigquery.getJobs({minCreationTime}, (err, jobs) => {
      assert.ifError(err);
      assert(jobs![0] instanceof Job);
      done();
    });
  });

  it('should list jobs as a stream', done => {
    let jobEmitted = false;

    bigquery
      .getJobsStream({minCreationTime})
      .on('error', done)
      .on('data', job => {
        jobEmitted = job instanceof Job;
      })
      .on('end', () => {
        assert.strictEqual(jobEmitted, true);
        done();
      });
  });

  it('should cancel a job', done => {
    const query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT 10';

    bigquery.createQueryJob(query, (err, job) => {
      assert.ifError(err);

      job!.cancel(err => {
        assert.ifError(err);

        job!.on('error', done).on('complete', () => {
          done();
        });
      });
    });
  });

  describe('BigQuery/Dataset', () => {
    it('should set & get metadata', async () => {
      const metadata = {
        description: 'yay description',
      };
      await dataset.setMetadata(metadata);
      const [result] = await dataset.getMetadata();
      assert.strictEqual(result.description, metadata.description);
    });

    it('should use etags for locking', async () => {
      await dataset.getMetadata();
      const etag = dataset.metadata.etag;
      await dataset.setMetadata({
        etag,
        description: 'another description',
      });
      // the etag should be updated
      assert.notStrictEqual(etag, dataset.metadata.etag);
    });

    it('should error out for bad etags', async () => {
      await assert.rejects(
        () =>
          dataset.setMetadata({
            etag: 'a-fake-etag',
            description: 'oh no!',
          }),
        /precondition/i,
      );
    });

    it('should get tables', done => {
      dataset.getTables((err, tables) => {
        assert.ifError(err);
        assert(tables![0] instanceof Table);
        done();
      });
    });

    it('should get tables as a stream', done => {
      let tableEmitted = false;

      dataset
        .getTablesStream()
        .on('error', done)
        .on('data', table => (tableEmitted = table instanceof Table))
        .on('end', () => {
          assert.strictEqual(tableEmitted, true);
          done();
        });
    });

    it('should create a Table with a nested schema', async () => {
      const table = dataset.table(generateName('table'));
      const schema = {
        fields: [
          {
            name: 'id',
            type: 'INTEGER',
          },
          {
            name: 'details',
            type: 'RECORD',
            fields: [
              {
                name: 'nested_id',
                type: 'INTEGER',
              },
            ],
          },
        ],
      };
      await table.create({schema});
      const [metadata] = await table.getMetadata();
      assert.deepStrictEqual(metadata.schema, schema);
    });

    describe('location', () => {
      const LOCATION = 'asia-northeast1';

      const dataset = bigquery.dataset(generateName('dataset'), {
        location: LOCATION,
      });

      const table = dataset.table(generateName('table'));
      let job: Job;

      const QUERY = `SELECT * FROM \`${table.id}\``;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const SCHEMA = require('../../system-test/data/schema.json');
      const TEST_DATA_FILE =
        require.resolve('../../system-test/data/location-test-data.json');

      before(async () => {
        // create a dataset in a certain location will cascade the location
        // to any jobs created through it
        await dataset.create();
        await table.create({schema: SCHEMA});
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        job = ((await table.createLoadJob(TEST_DATA_FILE)) as any)[0];
        await job.promise();
      });

      it('should create a load job in the correct location', () => {
        assert.strictEqual(job.location, LOCATION);
      });

      describe('job.get', async () => {
        it('should fail to reload if the location is not set', async () => {
          const badJob = bigquery.job(job.id!);
          await assert.rejects(() => badJob.getMetadata(), {code: 404});
        });

        it('should fail to reload if the location is wrong', async () => {
          const badJob = bigquery.job(job.id!, {location: 'US'});
          await assert.rejects(() => badJob.getMetadata(), {code: 404});
        });

        it('should reload if the location matches', async () => {
          const goodJob = bigquery.job(job.id!, {location: LOCATION});
          await goodJob.getMetadata();
          assert.strictEqual(goodJob.location, LOCATION);
        });
      });

      describe('job.cancel', () => {
        let job: Job;

        before(() => {
          return dataset.createQueryJob(QUERY).then(data => {
            job = data[0];
          });
        });

        it('should fail if the job location is incorrect', done => {
          const badJob = bigquery.job(job.id!, {location: 'US'});

          badJob.cancel(err => {
            assert.strictEqual((err as ApiError).code, 404);
            done();
          });
        });

        it('should cancel a job', done => {
          job.cancel(done);
        });
      });

      describe('job.getQueryResults', () => {
        it('should fail if the job location is incorrect', done => {
          const badDataset = bigquery.dataset(dataset.id!, {location: 'US'});

          badDataset.createQueryJob(
            {
              query: QUERY,
            },
            (e, job) => {
              const err = e as {} as GoogleErrorBody;
              assert.strictEqual(err.errors![0].reason, 'notFound');
              assert.strictEqual(job!.location, 'US');
              done();
            },
          );
        });

        it('should get query results', async () => {
          const [job] = await dataset.createQueryJob(QUERY);
          assert.strictEqual(job.location, LOCATION);
          await job.promise();
          const [rows] = await job.getQueryResults();
          assert(rows!.length > 0);
        });

        it('should return error if timeout passed', async () => {
          const [job] = await dataset.createQueryJob(QUERY);
          assert.strictEqual(job.location, LOCATION);
          await job.promise();
          const options = {timeoutMs: 1};
          await job.getQueryResults(options);
        });
      });

      describe('job.insert', () => {
        describe('copy', () => {
          const otherTable = dataset.table(generateName('table'));

          it('should fail if the job location is incorrect', done => {
            const badTable = dataset.table(table.id!, {location: 'US'});

            badTable.createCopyJob(otherTable, err => {
              assert.notEqual(err, null); // TODO(alvarowolfx): check for 404 ?
              done();
            });
          });

          it('should copy the table', () => {
            return table.createCopyJob(otherTable).then(data => {
              const job = data[0];

              assert.strictEqual(job.location, LOCATION);
              return job.promise();
            });
          });
        });

        describe('extract', () => {
          const bucket = storage.bucket(generateName('bucket'));
          const extractFile = bucket.file('location-extract-data.json');

          before(() => {
            return bucket.create({location: LOCATION});
          });

          it('should fail if the job location is incorrect', done => {
            const badTable = dataset.table(table.id!, {location: 'US'});

            badTable.createExtractJob(extractFile, err => {
              assert.strictEqual((err as ApiError).code, 404);
              done();
            });
          });

          it('should extract a table', () => {
            return table.createExtractJob(extractFile).then(data => {
              const job = data[0];

              assert.strictEqual(job.location, LOCATION);
              return job.promise();
            });
          });
        });
      });
    });
  });

  describe('BigQuery/Job', () => {
    it('should delete a job', async () => {
      const opts = {
        configuration: {
          query: {
            query: 'SELECT 100 as foo',
          },
        },
        location: 'us-east1',
      };

      const [job] = await bigquery.createJob(opts);
      // Job must finish before we can delete.  Wait for results.
      await job.getQueryResults();

      const [resp] = await job.delete();
      const [exists] = await job.exists();
      assert.deepStrictEqual(resp, {});
      assert.strictEqual(exists, false);
    });
  });

  describe('BigQuery/Model', () => {
    let model: Model;
    const bucket = storage.bucket(generateName('bucket'));
    const extractDest =
      'gs://' + bucket.name + '/' + generateName('model-export');

    before(async () => {
      await bucket.create();

      model = dataset.model('testmodel');
      return bigquery.query(`
        CREATE MODEL \`${dataset.id}.${model.id}\`
        OPTIONS (
          model_type='linear_reg',
          max_iterations=1,
          learn_rate=0.4,
          learn_rate_strategy='constant'
        ) AS (
          SELECT 'a' AS f1, 2.0 AS label
          UNION ALL
          SELECT 'b' AS f2, 3.8 AS label
        )
      `);
    });

    after(() => model.delete());

    it('should get a list of models', async () => {
      const [models] = await dataset.getModels();
      assert.strictEqual(models.length, 1);
      assert.ok(models[0] instanceof Model);
    });

    it('should check if a model exists', async () => {
      const [exists] = await model.exists();
      assert.ok(exists);
    });

    it('should get a model', async () => {
      const [model2] = await model.get();
      assert.deepStrictEqual(model, model2);
    });

    it('should get a model metadata', async () => {
      const [metadata] = await model.getMetadata();
      assert.deepStrictEqual(metadata, model.metadata);
    });

    it('should set model metadata', async () => {
      const friendlyName = 'modelfriend';
      await model.setMetadata({friendlyName});
      const [metadata] = await model.getMetadata();
      assert.strictEqual(metadata.friendlyName, friendlyName);
    });

    it('should extract a model', async () => {
      const jobId = generateName('model-export-job');

      const [job] = await model.createExtractJob(extractDest, {jobId});
      assert.strictEqual(job.id, jobId);
    });
  });

  describe('BigQuery/Routine', () => {
    before(() => {
      const routineId = `${bigquery.projectId}.${dataset.id}.my_ddl_routine`;

      return bigquery.query(`
        CREATE FUNCTION \`${routineId}\`(
          arr ARRAY<STRUCT<name STRING, val INT64>>
        ) AS (
          (SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem)
        )
      `);
    });

    after(async () => {
      const [routines] = await dataset.getRoutines();
      return Promise.all(routines.map(routine => routine.delete()));
    });

    it('should create a routine via insert', () => {
      return dataset.createRoutine('my_routine', {
        arguments: [
          {
            name: 'x',
            dataType: {
              typeKind: 'INT64',
            },
          },
        ],
        definitionBody: 'x * 3',
        routineType: 'SCALAR_FUNCTION',
        returnType: {
          typeKind: 'INT64',
        },
      });
    });

    it('should list all the routines', async () => {
      const [routines] = await dataset.getRoutines();
      assert.ok(routines.length > 0);
      assert.ok(routines[0] instanceof Routine);
    });

    it('should get the routines as a stream', done => {
      const routines: Routine[] = [];

      dataset
        .getRoutinesStream()
        .on('error', done)
        .on('data', routine => {
          routines.push(routine);
        })
        .on('end', () => {
          assert.ok(routines.length > 0);
          assert.ok(routines[0] instanceof Routine);
          done();
        });
    });

    it('should check to see if a routine exists', async () => {
      const routine = dataset.routine('my_ddl_routine');
      const [exists] = await routine.exists();
      assert.ok(exists);
    });

    it('should update an existing routine', async () => {
      const routine = dataset.routine('my_ddl_routine');
      const description = 'A routine!';

      await routine.setMetadata({description});
      assert.strictEqual(routine.metadata.description, description);
    });
  });

  describe('BigQuery/Table', () => {
    const TEST_DATA_JSON_PATH =
      require.resolve('../../system-test/data/kitten-test-data.json');

    it('should have created the correct schema', () => {
      assert.deepStrictEqual(table.metadata.schema.fields, SCHEMA);
    });

    it('should get the rows in a table', done => {
      table.getRows((err, rows) => {
        assert.ifError(err);
        assert(Array.isArray(rows));
        done();
      });
    });

    // Empty results sets will not fetch table schema
    it('should get the rows from an empty table', async () => {
      const emptyTableId = generateName('empty-table');
      await dataset.createTable(emptyTableId, {
        schema: [{name: 'id', type: 'STRING'}],
      });
      const emptyTable = dataset.table(emptyTableId);
      const [rows] = await emptyTable.getRows();
      assert(Array.isArray(rows));
      assert.equal(rows.length, 0);
    });

    it('should get the rows in a table via stream', done => {
      table
        .createReadStream()
        .on('error', done)
        .on('data', () => {})
        .on('end', done);
    });

    it('should insert rows via stream', done => {
      let job: Job;

      fs.createReadStream(TEST_DATA_JSON_PATH)
        .pipe(table.createWriteStream('json'))
        .on('error', done)
        .on('complete', _job => {
          job = _job;
        })
        .on('finish', () => {
          assert.strictEqual(job.metadata.status.state, 'DONE');
          done();
        });
    });

    it('should insert rows with null values', () => {
      return table.insert({
        id: 1,
        name: null,
      });
    });

    it('should insert rows via insert stream', done => {
      const stream = new Readable({objectMode: true});
      stream._read = () => {};

      for (let i = 0; i < 10; i++) {
        stream.push({name: 'foo', id: i});
      }

      const expectedResponse = 'bigquery#tableDataInsertAllResponse';

      stream
        .pipe(table.createInsertStream())
        .on('response', (response: InsertRowsStreamResponse) => {
          assert.deepStrictEqual(response.kind, expectedResponse);
          done();
        });
    });

    it('should return errors from insert stream', done => {
      const stream = new Readable({objectMode: true});
      stream._read = () => {};

      stream.push({wrong_name: 'foo', id: 1});

      stream.pipe(table.createInsertStream()).on('error', (err: Error) => {
        assert.deepStrictEqual(err.name, 'PartialFailureError');
        done();
      });
    });

    it('should set & get metadata', async () => {
      const description = 'catsandstuff';
      await table.setMetadata({description});
      const [metadata] = await table.getMetadata();
      const metadataProps = Object.keys(metadata);
      assert.strictEqual(metadataProps.includes('numBytes'), true);
      assert.notStrictEqual(metadata.numBytes, undefined);
      assert.strictEqual(metadataProps.includes('lastModifiedTime'), true);
      assert.notStrictEqual(metadata.lastModifiedTime, undefined);
      assert.strictEqual(metadata.description, description);
    });

    it('should set & get partial metadata', async () => {
      const options = {
        view: 'BASIC',
      };
      const [basicMetadata] = await table.get(options);
      const basicMetadataProps = Object.values(
        Object.keys(basicMetadata.metadata),
      );

      assert.strictEqual(basicMetadataProps.includes('numBytes'), false);
      assert.strictEqual(basicMetadata.metadata.numBytes, undefined);
      assert.strictEqual(
        basicMetadataProps.includes('lastModifiedTime'),
        false,
      );
      assert.strictEqual(basicMetadata.metadata.lastModifiedTime, undefined);
    });

    it('should create a table with a numeric field having picosecond precision', async () => {
      const table = dataset.table(generateName('numeric-precision-table'));
      const schema = {
        fields: [
          {
            name: 'numeric_field',
            type: 'NUMERIC',
            precision: 12, // 12 indicates picosecond precision
            scale: 2,
          },
        ],
      };
      try {
        await table.create({schema});
        const [metadata] = await table.getMetadata();
        assert.deepStrictEqual(metadata.schema.fields[0].precision, '12');
        assert.deepStrictEqual(metadata.schema.fields[0].scale, '2');
      } catch (e) {
        assert.ifError(e);
      }
    });

    it('should create a table with timestampPrecision', async () => {
      const table = dataset.table(generateName('timestamp-precision-table'));
      const schema = {
        fields: [
          {
            name: 'ts_field',
            type: 'TIMESTAMP',
            timestampPrecision: 12,
          },
        ],
      };
      try {
        await table.create({schema});
        const [metadata] = await table.getMetadata();
        assert.deepStrictEqual(
          metadata.schema.fields[0].timestampPrecision,
          '12',
        );
      } catch (e) {
        assert.ifError(e);
      }
    });

    describe('copying', () => {
      interface TableItem {
        data?: {tableId?: number};
        table: Table;
      }
      const TABLES = [{data: {tableId: 1}}, {}] as {} as TableItem[];

      const SCHEMA = 'tableId:integer';

      before(async () => {
        TABLES.forEach(t => (t.table = dataset.table(generateName('table'))));
        await Promise.all(
          TABLES.map(tableItem => {
            const tableInstance = tableItem.table;
            return tableInstance!.create({schema: SCHEMA});
          }),
        );
        const table1Instance = TABLES[0].table;
        await table1Instance.insert(TABLES[0].data);
      });

      it('should start copying data from current table', done => {
        const table1 = TABLES[0];
        const table1Instance = table1.table;

        const table2 = TABLES[1];
        const table2Instance = table2.table;

        table1Instance.createCopyJob(table2Instance, (err, job) => {
          assert.ifError(err);

          job!.on('error', done).on('complete', () => {
            // Data may take up to 90 minutes to be copied*, so we cannot test
            // to see that anything but the request was successful.
            // *https://cloud.google.com/bigquery/streaming-data-into-bigquery
            done();
          });
        });
      });

      it('should copy data from current table', done => {
        const table1 = TABLES[0];
        const table1Instance = table1.table;

        const table2 = TABLES[1];
        const table2Instance = table2.table;

        table1Instance.copy(table2Instance, (err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp!.status!.state, 'DONE');
          done();
        });
      });

      it('should start copying data from another table', done => {
        const table1 = TABLES[0];
        const table1Instance = table1.table;

        const table2 = TABLES[1];
        const table2Instance = table2.table;

        table2Instance.createCopyFromJob(table1Instance, (err, job) => {
          assert.ifError(err);

          job!.on('error', done).on('complete', () => {
            // Data may take up to 90 minutes to be copied*, so we cannot test
            // to see that anything but the request was successful.
            // *https://cloud.google.com/bigquery/streaming-data-into-bigquery
            done();
          });
        });
      });

      it('should copy data from another table', done => {
        const table1 = TABLES[0];
        const table1Instance = table1.table;

        const table2 = TABLES[1];
        const table2Instance = table2.table;

        table2Instance.copyFrom(table1Instance, (err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp!.status!.state, 'DONE');
          done();
        });
      });
    });

    describe('loading & extracting', () => {
      const file = bucket.file('kitten-test-data-backup.json');

      before(done => {
        fs.createReadStream(TEST_DATA_JSON_PATH)
          .pipe(file.createWriteStream({}))
          .on('error', done)
          .on('finish', done);
      });

      after(done => {
        file.delete(done);
      });

      it('should start to load data from a storage file', done => {
        table.createLoadJob(file, (err, job) => {
          assert.ifError(err);
          job!.on('error', done).on('complete', () => {
            done();
          });
        });
      });

      it('should load data from a storage file', done => {
        table.load(file, (err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp!.status!.state, 'DONE');
          done();
        });
      });

      it('should load data from a file via promises', () => {
        return table.load(file).then(results => {
          const metadata = results[0];
          assert.strictEqual(metadata!.status!.state, 'DONE');
        });
      });

      it('should return partial errors', done => {
        const data = {
          name: 'dave',
        };

        const improperData = {
          name: true,
        };

        table.insert([data, improperData], e => {
          const err = e as {} as GoogleErrorBody;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          assert.strictEqual((err as any).name, 'PartialFailureError');

          assert.deepStrictEqual(err.errors![0], {
            errors: [
              {
                message: 'Conversion from bool to std::string is unsupported.',
                reason: 'invalid',
              },
            ],
            row: improperData,
          });

          assert.deepStrictEqual(err.errors![1], {
            errors: [
              {
                message: '',
                reason: 'stopped',
              },
            ],
            row: data,
          });

          done();
        });
      });

      it('should create tables upon insert', () => {
        const table = dataset.table(generateName('does-not-exist'));

        const row = {
          name: 'stephen',
        };

        const options = {
          schema: SCHEMA,
        };

        return table
          .insert(row, options)
          .then(() => {
            // getting rows immediately after insert
            // results in an empty array
            return new Promise(resolve => {
              setTimeout(resolve, 2500);
            });
          })
          .then(() => {
            return table.getRows();
          })
          .then(data => {
            const rows = data[0];

            assert.strictEqual(rows!.length, 1);
            assert.strictEqual(rows[0].name, row.name);
          });
      });

      describe('SQL parameters', () => {
        describe('positional', () => {
          it('should work with strings', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE repository.owner = ?',
                  'LIMIT 1',
                ].join(' '),
                params: ['google'],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with ints', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE repository.forks > ?',
                  'LIMIT 1',
                ].join(' '),
                params: [1],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with floats', done => {
            bigquery.query(
              {
                query: [
                  'SELECT snow_depth',
                  'FROM `publicdata.samples.gsod`',
                  'WHERE snow_depth >= ?',
                  'LIMIT 1',
                ].join(' '),
                params: [12.5],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with numerics', done => {
            bigquery.query(
              {
                query: [
                  'SELECT x',
                  'FROM UNNEST([NUMERIC "1", NUMERIC "2", NUMERIC "3"]) x',
                  'WHERE x = ?',
                ].join(' '),
                params: [new Big('2')],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with booleans', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE public = ?',
                  'LIMIT 1',
                ].join(' '),
                params: [true],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with arrays', done => {
            bigquery.query(
              {
                query: 'SELECT * FROM UNNEST (?)',
                params: [[25, 26, 27, 28, 29]],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 5);
                done();
              },
            );
          });

          it('should work with empty arrays', async () => {
            const [rows] = await bigquery.query({
              query: 'SELECT * FROM UNNEST (?)',
              params: [[]],
              types: [['INT64']],
            });
            assert.strictEqual(rows.length, 0);
          });

          it('should work with structs', done => {
            bigquery.query(
              {
                query: 'SELECT ? obj',
                params: [
                  {
                    b: true,
                    arr: [2, 3, 4],
                    d: bigquery.date('2016-12-7'),
                    f: 3.14,
                    nested: {
                      a: 3,
                    },
                  },
                ],
                types: [
                  {
                    b: 'BOOL',
                    arr: ['INT64'],
                    d: 'DATE',
                    f: 'FLOAT64',
                    nested: {
                      a: 'INT64',
                    },
                  },
                ],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with TIMESTAMP types', done => {
            bigquery.query(
              {
                query: 'SELECT ? timestamp',
                params: [new Date()],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with DATE types', done => {
            bigquery.query(
              {
                query: 'SELECT ? date',
                params: [bigquery.date('2016-12-7')],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with DATETIME types', done => {
            bigquery.query(
              {
                query: 'SELECT ? datetime',
                params: [bigquery.datetime('2016-12-7 14:00:00')],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with TIME types', done => {
            bigquery.query(
              {
                query: 'SELECT ? time',
                params: [bigquery.time('14:00:00')],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with GEOGRAPHY types', done => {
            bigquery.query(
              {
                query: 'SELECT ? geography',
                params: [bigquery.geography('POINT(1 2)')],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with RANGE types', done => {
            bigquery.query(
              {
                query: 'SELECT ? r',
                params: [
                  bigquery.range(
                    '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)',
                    'TIMESTAMP',
                  ),
                ],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with multiple types', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url FROM `publicdata.samples.github_nested`',
                  'WHERE repository.owner = ?',
                  'AND repository.forks > ?',
                  'AND public = ?',
                  'LIMIT 1',
                ].join(' '),
                params: ['google', 1, true],
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });
        });

        describe('named', () => {
          it('should work with strings', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url FROM `publicdata.samples.github_nested`',
                  'WHERE repository.owner = @owner',
                  'LIMIT 1',
                ].join(' '),
                params: {
                  owner: 'google',
                },
                types: {
                  owner: 'STRING',
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with ints', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE repository.forks > @forks',
                  'LIMIT 1',
                ].join(' '),
                params: {
                  forks: 1,
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with floats', done => {
            bigquery.query(
              {
                query: [
                  'SELECT snow_depth',
                  'FROM `publicdata.samples.gsod`',
                  'WHERE snow_depth >= @depth',
                  'LIMIT 1',
                ].join(' '),
                params: {
                  depth: 12.5,
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with numerics', done => {
            bigquery.query(
              {
                query: [
                  'SELECT x',
                  'FROM UNNEST([NUMERIC "1", NUMERIC "2", NUMERIC "3"]) x',
                  'WHERE x = @num',
                ].join(' '),
                params: {
                  num: new Big('2'),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with booleans', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE public = @isPublic',
                  'LIMIT 1',
                ].join(' '),
                params: {
                  isPublic: true,
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with arrays', done => {
            bigquery.query(
              {
                query: 'SELECT * FROM UNNEST (@nums)',
                params: {
                  nums: [25, 26, 27, 28, 29],
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 5);
                done();
              },
            );
          });

          it('should work with empty arrays', async () => {
            const [rows] = await bigquery.query({
              query: 'SELECT * FROM UNNEST (@nums)',
              params: {
                nums: [],
              },
              types: {nums: ['INT64']},
            });
            assert.strictEqual(rows.length, 0);
          });

          it('should work with structs', done => {
            bigquery.query(
              {
                query: 'SELECT @obj obj',
                params: {
                  obj: {
                    b: true,
                    arr: [2, 3, 4],
                    d: bigquery.date('2016-12-7'),
                    f: 3.14,
                    nested: {
                      a: 3,
                    },
                  },
                },
                types: {
                  obj: {
                    b: 'BOOL',
                    arr: ['INT64'],
                    d: 'DATE',
                    f: 'FLOAT64',
                    nested: {
                      a: 'INT64',
                    },
                  },
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with TIMESTAMP types', done => {
            bigquery.query(
              {
                query: 'SELECT @time timestamp',
                params: {
                  time: new Date(),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with DATE types', done => {
            bigquery.query(
              {
                query: 'SELECT @date date',
                params: {
                  date: bigquery.date('2016-12-7'),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with DATETIME types', done => {
            bigquery.query(
              {
                query: 'SELECT @datetime datetime',
                params: {
                  datetime: bigquery.datetime('2016-12-7 14:00:00'),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with TIME types', done => {
            bigquery.query(
              {
                query: 'SELECT @time time',
                params: {
                  time: bigquery.time('14:00:00'),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with GEOGRAPHY types', done => {
            bigquery.query(
              {
                query: 'SELECT @place geography',
                params: {
                  place: bigquery.geography('POINT(1 2)'),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with RANGE types', done => {
            bigquery.query(
              {
                query: 'SELECT @r r',
                params: {
                  r: bigquery.range(
                    '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)',
                    'TIMESTAMP',
                  ),
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });

          it('should work with multiple types', done => {
            bigquery.query(
              {
                query: [
                  'SELECT url',
                  'FROM `publicdata.samples.github_nested`',
                  'WHERE repository.owner = @owner',
                  'AND repository.forks > @forks',
                  'AND public = @isPublic',
                  'LIMIT 1',
                ].join(' '),
                params: {
                  owner: 'google',
                  forks: 1,
                  isPublic: true,
                },
              },
              (err, rows) => {
                assert.ifError(err);
                assert.strictEqual(rows!.length, 1);
                done();
              },
            );
          });
        });
      });

      it('should start extracting data to a storage file', done => {
        const file = bucket.file('kitten-test-data-backup.json');
        table.createExtractJob(file, (err, job) => {
          assert.ifError(err);
          job!.on('error', done).on('complete', () => {
            done();
          });
        });
      });

      it('should extract data to a storage file', done => {
        const file = bucket.file('kitten-test-data-backup.json');
        table.extract(file, (err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp!.status!.state, 'DONE');
          done();
        });
      });
    });
  });

  describe('Custom Types', () => {
    let table: Table;

    const DATE = bigquery.date('2017-01-01');
    const DATETIME = bigquery.datetime('2017-01-01 13:00:00');
    const TIME = bigquery.time('14:00:00');
    const TIMESTAMP = bigquery.timestamp(new Date());
    const NUMERIC = new Big('123.456');
    const GEOGRAPHY = bigquery.geography('POINT(1 2)');
    const RANGE = bigquery.range(
      '[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)',
      'TIMESTAMP',
    );

    before(() => {
      table = dataset.table(generateName('table'));
      return table.create({
        schema: [
          {name: 'date', type: 'DATE'},
          {name: 'datetime', type: 'DATETIME'},
          {name: 'time', type: 'TIME'},
          {name: 'timestamp', type: 'TIMESTAMP'},
          {name: 'numeric', type: 'NUMERIC'},
          {name: 'geography', type: 'GEOGRAPHY'},
          {
            name: 'range',
            type: 'RANGE',
            rangeElementType: {type: 'TIMESTAMP'},
          },
        ],
      });
    });

    it('inserts with custom types', () => {
      return table.insert({
        date: DATE,
        datetime: DATETIME,
        time: TIME,
        timestamp: TIMESTAMP,
        numeric: NUMERIC,
        geography: GEOGRAPHY,
        range: RANGE,
      });
    });
  });

  describe('Provided Tests', () => {
    const table = dataset.table(generateName('table'));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const schema = require('../../system-test/data/schema.json');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const testData = require('../../system-test/data/schema-test-data.json');

    const EXPECTED_ROWS = {
      Bilbo: {
        Name: 'Bilbo',
        Age: 111,
        Weight: 67.2,
        IsMagic: false,
        Spells: [],
        TeaTime: bigquery.time('10:00:00'),
        NextVacation: bigquery.date('2017-09-22'),
        FavoriteTime: bigquery.datetime('2031-04-01T05:09:27'),
        FavoriteNumeric: new Big('123.45'),
      },

      Gandalf: {
        Name: 'Gandalf',
        Age: 1000,
        Weight: 198.6,
        IsMagic: true,
        Spells: [
          {
            Name: 'Skydragon',
            LastUsed: bigquery.timestamp('2015-10-31T23:59:56.000Z'),
            DiscoveredBy: 'Firebreather',
            Properties: [
              {
                Name: 'Flying',
                Power: 1,
              },
              {
                Name: 'Creature',
                Power: 1,
              },
              {
                Name: 'Explodey',
                Power: 11,
              },
            ],
            Icon: Buffer.from(testData[1].Spells[0].Icon, 'base64'),
          },
        ],
        TeaTime: bigquery.time('15:00:00'),
        NextVacation: bigquery.date('2666-06-06'),
        FavoriteTime: bigquery.datetime('2001-12-19T23:59:59'),
        FavoriteNumeric: new Big('-111.222'),
      },

      Sabrina: {
        Name: 'Sabrina',
        Age: 17,
        Weight: 128.3,
        IsMagic: true,
        Spells: [
          {
            Name: 'Talking cats',
            LastUsed: bigquery.timestamp('2017-02-14T12:07:23.000Z'),
            DiscoveredBy: 'Salem',
            Properties: [
              {
                Name: 'Makes you look crazy',
                Power: 1,
              },
            ],
            Icon: Buffer.from(testData[2].Spells[0].Icon, 'base64'),
          },
        ],
        TeaTime: bigquery.time('12:00:00'),
        NextVacation: bigquery.date('2017-03-14'),
        FavoriteTime: bigquery.datetime('2000-10-31T23:27:46'),
        FavoriteNumeric: new Big('-3.14'),
      },
    };

    before(async () => {
      await table.create({schema});
      await table.insert(testData);
      await new Promise(r => setTimeout(r, 15000));
    });

    after(done => {
      table.delete(done);
    });

    it('should convert rows back correctly', done => {
      table.getRows((err, rows) => {
        assert.ifError(err);

        if (rows!.length === 0) {
          done(new Error('Rows not returned from the API.'));
          return;
        }

        rows!.forEach(row => {
          const expectedRow = (EXPECTED_ROWS as {[index: string]: {}})[
            row.Name
          ];
          assert.deepStrictEqual(row, expectedRow);
        });

        done();
      });
    });
  });

  function generateName(resourceType: string) {
    return `${GCLOUD_TESTS_PREFIX}_${resourceType}_${randomUUID()}`.replace(
      /-/g,
      '_',
    );
  }

  // Only delete a resource if it is older than 24 hours. That will prevent
  // collisions with parallel CI test runs.
  function isResourceStale(creationTime: number | string) {
    const oneDayMs = 86400000;
    const now = new Date();
    const created = new Date(creationTime);
    return now.getTime() - created.getTime() >= oneDayMs;
  }

  async function deleteBuckets() {
    const [buckets] = await storage.getBuckets({
      prefix: GCLOUD_TESTS_PREFIX,
    });

    const deleteBucketPromises = buckets
      .filter(bucket => {
        try {
          if (typeof bucket.metadata.timeCreated === 'string') {
            isResourceStale(bucket.metadata.timeCreated);
          }
        } catch {
          throw Error('timeCreated on type BucketMetadata cannot be undefined');
        }
      })
      .map(async b => {
        const [files] = await b.getFiles();
        await Promise.all(files.map(f => f.delete()));
        await b.delete();
      });

    await Promise.all(deleteBucketPromises);
  }

  async function deleteDatasets() {
    const [datasets] = await bigquery.getDatasets({
      filter: `labels.${GCLOUD_TESTS_PREFIX}`,
    });

    for (const dataset of datasets) {
      const [metadata] = await dataset.getMetadata();
      const creationTime = Number(metadata.creationTime);

      if (isResourceStale(creationTime)) {
        try {
          await dataset.delete({force: true});
        } catch (e) {
          console.log(`dataset(${dataset.id}).delete() failed`);
          console.log(e);
        }
      }
    }
  }
});
