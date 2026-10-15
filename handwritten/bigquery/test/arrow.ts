// Copyright 2026 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, after, beforeEach} from 'mocha';
import * as Module from 'module';
import * as arrow from 'apache-arrow';
import {BigQuery, Job, Query} from '../src';
import {checkArrowDependencies} from '../src/arrow';
import bigquery from '../src/types';

/**
 * Stand-in for `@google-cloud/bigquery-storage`, so the unit tests don't depend
 * on which copy of the package is installed (for example, an unbuilt in-repo
 * workspace link).
 */
const storageStub = {};

/**
 * Serializes an Arrow Table into separate base64 `serializedSchema` and
 * `serializedRecordBatch` strings matching BigQuery's REST `jobs.query` format.
 */
function serializeArrowTable(table: arrow.Table): {
  serializedSchema: string;
  serializedRecordBatch: string;
} {
  const emptyTable = new arrow.Table(table.schema);
  const schemaWithEos = Buffer.from(arrow.tableToIPC(emptyTable, 'stream'));
  // Strip the 8-byte Arrow IPC end-of-stream marker so record batches can follow.
  const schemaBuf = schemaWithEos.subarray(0, schemaWithEos.length - 8);

  const fullStream = Buffer.from(arrow.tableToIPC(table, 'stream'));
  const batchBuf = fullStream.subarray(schemaBuf.length, fullStream.length - 8);
  return {
    serializedSchema: schemaBuf.toString('base64'),
    serializedRecordBatch: batchBuf.toString('base64'),
  };
}

function makeSampleTable(ids: number[], names: string[]): arrow.Table {
  return new arrow.Table({
    id: arrow.makeVector(new Int32Array(ids)),
    name: arrow.vectorFromArray(names, new arrow.Utf8()),
  });
}

// Shared fixture used across inline jobs.query unit tests.
const SAMPLE_TABLE = makeSampleTable([1, 2], ['alice', 'bob']);
const SAMPLE_PAYLOAD = serializeArrowTable(SAMPLE_TABLE);

/**
 * Stubs `bq.request` for `/queries` (`jobs.query`) to return the given response
 * or error and returns a getter for the captured `IQueryRequest`.
 */
function stubJobsQuery(
  bq: BigQuery,
  outcome: {
    err?: Error;
    job?: Job | null;
    res?: bigquery.IQueryResponse;
  },
): () => bigquery.IQueryRequest | undefined {
  let capturedReq: bigquery.IQueryRequest | undefined;
  if (outcome.job) {
    bq.job = () => outcome.job!;
  }
  bq.request = (reqOpts, callback) => {
    capturedReq = reqOpts.json;
    callback(outcome.err || null, outcome.res || {});
  };
  return () => capturedReq;
}

describe('Arrow Support', () => {
  let originalRequire: typeof Module.prototype.require;

  before(() => {
    originalRequire = Module.prototype.require;
    Module.prototype.require = Object.assign(function (
      this: NodeModule,
      id: string,
    ) {
      if (id === '@google-cloud/bigquery-storage') {
        return storageStub;
      }
      if (id === '@google-cloud/bigquery-storage/package.json') {
        return {version: '6.1.0'};
      }
      return originalRequire.call(this, id);
    }, originalRequire);
  });

  after(() => {
    Module.prototype.require = originalRequire;
  });

  describe('checkArrowDependencies', () => {
    it('should succeed when apache-arrow >= 21.0.0 and @google-cloud/bigquery-storage >= 6.1.0 are installed', () => {
      const arrowMod = checkArrowDependencies();
      // Verify the returned module exposes the Arrow RecordBatchReader API.
      assert.strictEqual(typeof arrowMod.RecordBatchReader.from, 'function');
    });

    it('should throw an actionable error when a required package is missing', () => {
      for (const pkg of ['apache-arrow', '@google-cloud/bigquery-storage']) {
        const fakeRequire = ((id: string) => {
          if (id.startsWith(pkg)) {
            throw new Error(`Cannot find module '${id}'`);
          }
          return require(id);
        }) as NodeRequire;

        // Verify the error tells the user how to install the missing package.
        assert.throws(
          () => checkArrowDependencies(fakeRequire),
          new RegExp(`npm install ${pkg.replace('/', '\\/')}`),
        );
      }
    });

    it('should throw an actionable error when a required package is below the minimum version', () => {
      const cases = [
        {
          pkgJson: 'apache-arrow/package.json',
          oldVersion: '20.0.0',
          expected: /requires "apache-arrow" >= 21\.0\.0 \(found 20\.0\.0\)/,
        },
        {
          pkgJson: '@google-cloud/bigquery-storage/package.json',
          oldVersion: '6.0.0',
          expected:
            /requires "@google-cloud\/bigquery-storage" >= 6\.1\.0 \(found 6\.0\.0\)/,
        },
      ];

      for (const {pkgJson, oldVersion, expected} of cases) {
        const fakeRequire = ((id: string) => {
          if (id === pkgJson) {
            return {version: oldVersion};
          }
          return require(id);
        }) as NodeRequire;

        // Verify outdated package versions are rejected with upgrade instructions.
        assert.throws(() => checkArrowDependencies(fakeRequire), expected);
      }
    });

    it('should include the underlying error when an installed package fails to load', () => {
      const loadError = new Error(
        "Cannot find module '/repo/bigquery-storage/build/src/index.js'",
      );
      const fakeRequire = ((id: string) => {
        if (id === '@google-cloud/bigquery-storage') {
          throw loadError;
        }
        return require(id);
      }) as NodeRequire;

      // Verify the load failure is reported instead of being masked.
      assert.throws(
        () => checkArrowDependencies(fakeRequire),
        (err: Error) =>
          err.cause === loadError && err.message.includes(loadError.message),
      );
    });
  });

  describe('BigQuery#createQueryArrowStream (inline jobs.query)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    it('should default jobCreationMode to JOB_CREATION_OPTIONAL and set queryResultsFormat to ARROW', async () => {
      const getCapturedReq = stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          queryId: 'stateless-query-123',
          totalRows: '2',
          pageRowCount: '2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      const stream = bq.createQueryArrowStream(
        'SELECT 1 AS id, "alice" AS name',
      );
      let jobEmitted = false;
      stream.on('job', () => {
        jobEmitted = true;
      });

      const batches: arrow.RecordBatch[] = await stream.toArray();

      // Verify the request sent to jobs.query used JOB_CREATION_OPTIONAL and ARROW format.
      assert.strictEqual(
        getCapturedReq()?.jobCreationMode,
        'JOB_CREATION_OPTIONAL',
      );
      assert.strictEqual(getCapturedReq()?.queryResultsFormat, 'ARROW');

      // Verify stateless query metadata is populated without emitting a job event.
      assert.strictEqual(stream.queryId, 'stateless-query-123');
      assert.strictEqual(stream.jobReference, undefined);
      assert.strictEqual(jobEmitted, false);

      // Verify the decoded Arrow RecordBatch contents match the serialized table.
      assert.strictEqual(batches.length, 1);
      const resultTable = new arrow.Table(batches);
      assert.deepStrictEqual(
        Array.from(resultTable.getChild('id')!.toArray()),
        [1, 2],
      );
      assert.deepStrictEqual(resultTable.getChild('name')?.toArray(), [
        'alice',
        'bob',
      ]);
    });

    it('should preserve client defaultJobCreationMode and emit job when jobReference is returned', async () => {
      bq = new BigQuery({
        projectId: 'test-project',
        defaultJobCreationMode: 'JOB_CREATION_REQUIRED',
      });

      const expectedJobRef: bigquery.IJobReference = {
        projectId: 'test-project',
        jobId: 'job-abc',
        location: 'US',
      };
      const fakeJob = bq.job('job-abc', {location: 'US'});
      const getCapturedReq = stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: true,
          queryId: 'query-abc',
          jobReference: expectedJobRef,
          totalRows: '2',
          pageRowCount: '2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      const stream = bq.createQueryArrowStream(
        'SELECT 1 AS id, "alice" AS name',
      );
      let emittedJob: Job | undefined;
      stream.on('job', (j: Job) => {
        emittedJob = j;
      });

      const batches: arrow.RecordBatch[] = await stream.toArray();

      // Verify the client's defaultJobCreationMode was not overwritten.
      assert.strictEqual(
        getCapturedReq()?.jobCreationMode,
        'JOB_CREATION_REQUIRED',
      );
      // Verify stream.jobReference and the 'job' event were populated.
      assert.deepStrictEqual(stream.jobReference, expectedJobRef);
      assert.strictEqual(emittedJob, fakeJob);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should emit a 0-row RecordBatch preserving the schema when arrowSchema is present without arrowRecordBatch', async () => {
      // Include nested Struct and List fields to verify 0-row buffer initialization.
      const schema = new arrow.Schema([
        new arrow.Field('id', new arrow.Int64()),
        new arrow.Field(
          'nested',
          new arrow.Struct([new arrow.Field('sub', new arrow.Int32())]),
        ),
        new arrow.Field(
          'tags',
          new arrow.List(new arrow.Field('item', new arrow.Utf8())),
        ),
      ]);
      const {serializedSchema} = serializeArrowTable(new arrow.Table(schema));

      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          queryId: 'empty-query',
          totalRows: '0',
          arrowSchema: {serializedSchema},
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, nested, tags FROM tbl WHERE FALSE')
        .toArray();

      // Verify a single 0-row RecordBatch is emitted with the full schema intact
      // and valid empty column vectors.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'nested', 'tags'],
      );
      assert.strictEqual(batches[0].getChild('id')?.toArray().length, 0);
      assert.strictEqual(batches[0].getChild('nested')?.toArray().length, 0);
      assert.strictEqual(batches[0].getChild('tags')?.toArray().length, 0);
    });

    it('should emit a 0-row, 0-column RecordBatch when both arrowSchema and arrowRecordBatch are absent', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          queryId: 'ddl-query',
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('DECLARE x INT64 DEFAULT 1;')
        .toArray();

      // Verify DDL/script queries emit a single 0-row, 0-column RecordBatch.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.strictEqual(batches[0].numCols, 0);
    });

    it('should fail before sending the query when writeDisposition is WRITE_APPEND', async () => {
      const getCapturedReq = stubJobsQuery(bq, {});

      // Verify WRITE_APPEND is rejected before executing the query on BigQuery.
      await assert.rejects(
        bq
          .createQueryArrowStream({
            query: 'SELECT 1',
            writeDisposition: 'WRITE_APPEND',
          })
          .toArray(),
        /WRITE_APPEND is not supported with Arrow query results/,
      );
      assert.strictEqual(getCapturedReq(), undefined);
    });

    it('should fail when a SQL query string is not provided', async () => {
      // Verify missing query string emits an error on the stream.
      await assert.rejects(
        bq.createQueryArrowStream({} as Query).toArray(),
        /A SQL query string is required\./,
      );
    });

    it('should forward jobs.query errors to the stream error event', async () => {
      stubJobsQuery(bq, {err: new Error('syntax error in SQL')});

      // Verify API errors from jobs.query reject stream consumption.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT INVALID').toArray(),
        /syntax error in SQL/,
      );
    });

    it('should fail when an explicit destination table is specified', async () => {
      const destination = bq.dataset('ds').table('tbl');

      // TODO: Replace with explicit destination table (CreateReadSession) tests once added.
      await assert.rejects(
        bq.createQueryArrowStream({query: 'SELECT 1', destination}).toArray(),
        /Explicit destination tables are not yet supported in createQueryArrowStream\./,
      );
    });

    it('should fail when the query configuration cannot be executed via jobs.query', async () => {
      // TODO: Replace with jobs.insert (createQueryJob) fallback tests once added.
      await assert.rejects(
        bq
          .createQueryArrowStream({query: 'SELECT 1', jobId: 'custom-job-1'})
          .toArray(),
        /Query configuration cannot be executed via jobs\.query\./,
      );
    });

    it('should forward errors thrown while building the jobs.query request', async () => {
      // A null parameter without an explicit type makes buildQueryRequest_ throw.
      await assert.rejects(
        bq
          .createQueryArrowStream({query: 'SELECT ?', params: [null]})
          .toArray(),
        /Parameter types must be provided for null values/,
      );
    });

    it('should fail when jobs.query returns jobComplete = false', async () => {
      stubJobsQuery(bq, {res: {jobComplete: false}});

      // TODO: Replace with job wait (jobComplete === false) tests once unfinished job polling is added.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Query did not complete within the jobs\.query timeout\./,
      );
    });

    it('should fail when jobs.query does not return all rows inline', async () => {
      stubJobsQuery(bq, {
        res: {jobComplete: true, pageRowCount: '2', totalRows: '5'},
      });

      // TODO: Replace with default job stream (pageRowCount < totalRows) tests once added.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Query results were not returned inline in the jobs\.query response\./,
      );
    });

    it('should fail when jobs.query returns a pageToken with totalRows = 0', async () => {
      // Cached multi-page results can report totalRows "0" and omit pageRowCount.
      stubJobsQuery(bq, {
        res: {jobComplete: true, totalRows: '0', pageToken: 'token-1'},
      });

      // TODO: Replace with default job stream (pageToken) tests once added.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Query results were not returned inline in the jobs\.query response\./,
      );
    });
  });
});
