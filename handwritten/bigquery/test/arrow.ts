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
import {EventEmitter} from 'events';
import {describe, it, before, after, beforeEach} from 'mocha';
import * as Module from 'module';
import * as arrow from 'apache-arrow';
import {BigQuery, Job, Query} from '../src';
import {
  BigQueryReadClient,
  checkArrowDependencies,
  getStorageReadClient,
  StorageModule,
} from '../src/arrow';
import bigquery from '../src/types';

/**
 * Stand-in for `@google-cloud/bigquery-storage`, so the unit tests don't depend
 * on which copy of the package is installed (for example, an unbuilt in-repo
 * workspace link).
 */
const storageStub = {
  BigQueryReadClient: class {},
};

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

/**
 * Registers a stub `BigQueryReadClient` on `bq` via `getStorageReadClient`.
 */
type ReadRowsRequest = Parameters<BigQueryReadClient['readRows']>[0];

/**
 * A fake ReadRows stream. google-gax streams always have `cancel`, `pause`,
 * and `resume`; `stubStorageReadClient` adds no-op ones when a fake omits them.
 */
type FakeReadRowsStream = EventEmitter &
  Partial<Record<'cancel' | 'pause' | 'resume', () => void>>;

/**
 * Registers a fake `BigQueryReadClient` as the shared client for `bq`.
 */
function stubStorageReadClient(
  bq: BigQuery,
  client: {readRows: (req: ReadRowsRequest) => FakeReadRowsStream},
): BigQueryReadClient {
  const noop = () => {};
  return getStorageReadClient(bq, {
    BigQueryReadClient: class {
      readRows(req: ReadRowsRequest) {
        const grpcStream = client.readRows(req);
        return Object.assign(grpcStream, {
          cancel: grpcStream.cancel ?? noop,
          pause: grpcStream.pause ?? noop,
          resume: grpcStream.resume ?? noop,
        });
      }
    },
  });
}

/**
 * Asserts that only a no-op 'error' listener remains on a finished ReadRows
 * stream, so an error gRPC emits afterwards (e.g., CANCELLED after cancel())
 * is swallowed instead of crashing the process.
 */
function assertReadRowsListenersRemoved(grpcStream: EventEmitter): void {
  assert.strictEqual(grpcStream.listenerCount('data'), 0);
  assert.strictEqual(grpcStream.listenerCount('end'), 0);
  assert.strictEqual(grpcStream.listenerCount('error'), 1);
  const cancelled = Object.assign(new Error('1 CANCELLED'), {code: 1});
  assert.doesNotThrow(() => grpcStream.emit('error', cancelled));
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
        return {version: '6.3.0'};
      }
      return originalRequire.call(this, id);
    }, originalRequire);
  });

  after(() => {
    Module.prototype.require = originalRequire;
  });

  describe('checkArrowDependencies', () => {
    it('should succeed when @google-cloud/bigquery-storage >= 6.3.0 is installed', () => {
      const {arrow: arrowMod, storage} = checkArrowDependencies();
      // Verify the returned modules expose RecordBatchReader and BigQueryReadClient.
      assert.strictEqual(typeof arrowMod.RecordBatchReader.from, 'function');
      assert.strictEqual(typeof storage.BigQueryReadClient, 'function');
    });

    it('should throw an actionable error when @google-cloud/bigquery-storage is missing', () => {
      const pkg = '@google-cloud/bigquery-storage';
      const fakeRequire = ((id: string) => {
        if (id.startsWith(pkg)) {
          throw new Error(`Cannot find module '${id}'`);
        }
        return require(id);
      }) as NodeRequire;

      // Verify the error tells the user how to install the missing package.
      assert.throws(
        () => checkArrowDependencies(fakeRequire),
        /npm install @google-cloud\/bigquery-storage/,
      );
    });

    it('should throw an actionable error when @google-cloud/bigquery-storage is below the minimum version', () => {
      const fakeRequire = ((id: string) => {
        if (id === '@google-cloud/bigquery-storage/package.json') {
          return {version: '6.2.0'};
        }
        return require(id);
      }) as NodeRequire;

      // Verify outdated package versions are rejected with upgrade instructions.
      assert.throws(
        () => checkArrowDependencies(fakeRequire),
        /requires "@google-cloud\/bigquery-storage" >= 6\.3\.0 \(found 6\.2\.0\)/,
      );
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
      // Verify nested Struct children are readable; apache-arrow's own 0-row
      // placeholder batch has none, so this throws if it is returned.
      assert.strictEqual(
        batches[0].getChild('nested')?.getChild('sub')?.toArray().length,
        0,
      );
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

    it('should not emit job or push batches when the stream is destroyed during jobs.query', async () => {
      const fakeJob = bq.job('job-destroyed-1', {location: 'US'});
      bq.job = () => fakeJob;
      const stream = bq.createQueryArrowStream('SELECT 1');
      bq.request = (reqOpts, callback) => {
        // The consumer gives up while jobs.query is in flight.
        stream.destroy();
        callback(null, {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-destroyed-1',
            location: 'US',
          },
          totalRows: '2',
          pageRowCount: '2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        });
      };
      let jobEmitted = false;
      stream.on('job', () => {
        jobEmitted = true;
      });
      const batches: arrow.RecordBatch[] = [];
      stream.on('data', batch => batches.push(batch));
      stream.resume();
      await new Promise(resolve => stream.once('close', resolve));
      // Let the query finish its work after jobs.query returns.
      await new Promise(resolve => setImmediate(resolve));

      // Verify nothing is emitted on the destroyed stream.
      assert.strictEqual(jobEmitted, false);
      assert.strictEqual(stream.jobReference, undefined);
      assert.strictEqual(batches.length, 0);
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
  });

  describe('BigQuery#createQueryArrowStream (default job stream)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({
        projectId: 'test-project',
        universeDomain: 'example.universe.goog',
      });
    });

    it('should lazily create and reuse one BigQueryReadClient with credentials, universeDomain, and keepalive', () => {
      const capturedOpts: Array<Record<string, unknown>> = [];
      const fakeStorage: StorageModule = {
        BigQueryReadClient: class FakeReadClient {
          constructor(opts?: Record<string, unknown>) {
            capturedOpts.push(opts || {});
          }
          readRows(): never {
            throw new Error('not called');
          }
        },
      };

      const client1 = getStorageReadClient(bq, fakeStorage);
      const client2 = getStorageReadClient(bq, fakeStorage);

      // Verify the same BigQueryReadClient instance is reused across queries on the same BigQuery client.
      assert.strictEqual(client1, client2);
      assert.strictEqual(capturedOpts.length, 1);
      assert.strictEqual(capturedOpts[0].auth, bq.authClient);
      assert.strictEqual(capturedOpts[0].projectId, 'test-project');
      assert.strictEqual(
        capturedOpts[0].universeDomain,
        'example.universe.goog',
      );
      assert.strictEqual(capturedOpts[0]['grpc.keepalive_time_ms'], 60_000);
      assert.strictEqual(capturedOpts[0]['grpc.keepalive_timeout_ms'], 60_000);
    });

    it('should emit inline batches first and stream remaining rows from streams/_default at offset = pageRowCount', async () => {
      const page2Payload = serializeArrowTable(
        makeSampleTable([3, 4], ['carol', 'dave']),
      );

      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          queryId: 'multi-page-query',
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-multi-1',
            location: 'EU',
          },
          pageRowCount: '2',
          totalRows: '4',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      const capturedReadRowsReqs: Array<{
        readStream?: string;
        offset?: number;
      }> = [];
      let readRowsStream: EventEmitter | undefined;
      stubStorageReadClient(bq, {
        readRows: (req: {readStream?: string; offset?: number}) => {
          capturedReadRowsReqs.push(req);
          const grpcStream = new EventEmitter();
          readRowsStream = grpcStream;
          process.nextTick(() => {
            grpcStream.emit('data', {
              arrowSchema: {
                serializedSchema: Buffer.from(
                  page2Payload.serializedSchema,
                  'base64',
                ),
              },
              arrowRecordBatch: {
                serializedRecordBatch: Buffer.from(
                  page2Payload.serializedRecordBatch,
                  'base64',
                ),
              },
            });
            grpcStream.emit('end');
          });
          return grpcStream;
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl')
        .toArray();

      // Verify ReadRows was called on streams/_default using the job's EU location and offset = pageRowCount (2).
      assert.deepStrictEqual(capturedReadRowsReqs, [
        {
          readStream:
            'projects/test-project/locations/EU/jobs/job-multi-1/streams/_default',
          offset: 2,
        },
      ]);

      // Verify both the inline batch and streamed batch are emitted in order.
      assert.strictEqual(batches.length, 2);
      const table = new arrow.Table(batches);
      assert.deepStrictEqual(
        Array.from(table.getChild('id')!.toArray()),
        [1, 2, 3, 4],
      );
      assert.deepStrictEqual(table.getChild('name')!.toArray(), [
        'alice',
        'bob',
        'carol',
        'dave',
      ]);
      // Verify the ReadRows listeners were removed once it ended.
      assertReadRowsListenersRemoved(readRowsStream!);
    });

    it('should pause ReadRows while the consumer is behind and resume it when the consumer reads', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-backpressure-1',
            location: 'US',
          },
          pageRowCount: '2',
          totalRows: '42',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      const streamedBatches = 20;
      const page2Payload = serializeArrowTable(
        makeSampleTable([3, 4], ['carol', 'dave']),
      );
      const flowEvents: string[] = [];
      stubStorageReadClient(bq, {
        readRows: () => {
          let ended = false;
          const grpcStream = Object.assign(new EventEmitter(), {
            pause: () => flowEvents.push('pause'),
            // Like a real paused gRPC stream, only finish once resumed.
            resume: () => {
              flowEvents.push('resume');
              if (flowEvents.includes('pause') && !ended) {
                ended = true;
                process.nextTick(() => grpcStream.emit('end'));
              }
            },
          });
          process.nextTick(() => {
            // Emit more batches in one tick than the output stream buffers
            // (highWaterMark 1), before the consumer can read any of them.
            for (let i = 0; i < streamedBatches; i++) {
              grpcStream.emit('data', {
                arrowSchema: {
                  serializedSchema: Buffer.from(
                    page2Payload.serializedSchema,
                    'base64',
                  ),
                },
                arrowRecordBatch: {
                  serializedRecordBatch: Buffer.from(
                    page2Payload.serializedRecordBatch,
                    'base64',
                  ),
                },
              });
            }
          });
          return grpcStream;
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl')
        .toArray();

      // Verify ReadRows was paused once the buffer filled, resumed when the
      // consumer read, and no batches were lost.
      const firstPause = flowEvents.indexOf('pause');
      assert.ok(firstPause >= 0, 'expected ReadRows to be paused');
      assert.ok(
        flowEvents.indexOf('resume', firstPause) > firstPause,
        'expected ReadRows to be resumed after pausing',
      );
      assert.strictEqual(batches.length, 1 + streamedBatches);
    });

    it('should cancel only the active ReadRows stream when the caller ends iteration early', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-cancel-1',
            location: 'US',
          },
          pageRowCount: '2',
          totalRows: '6',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      let cancelCount = 0;
      let readRowsStream: EventEmitter | undefined;
      const sharedClient = stubStorageReadClient(bq, {
        readRows: () => {
          const grpcStream = new EventEmitter() as EventEmitter & {
            cancel: () => void;
          };
          readRowsStream = grpcStream;
          grpcStream.cancel = () => {
            cancelCount++;
          };
          process.nextTick(() => {
            grpcStream.emit('data', {
              arrowSchema: {
                serializedSchema: Buffer.from(
                  SAMPLE_PAYLOAD.serializedSchema,
                  'base64',
                ),
              },
              arrowRecordBatch: {
                serializedRecordBatch: Buffer.from(
                  SAMPLE_PAYLOAD.serializedRecordBatch,
                  'base64',
                ),
              },
            });
          });
          return grpcStream;
        },
      });

      const stream = bq.createQueryArrowStream('SELECT id, name FROM tbl');
      const received: arrow.RecordBatch[] = [];
      for await (const batch of stream) {
        received.push(batch);
        if (received.length === 2) {
          break;
        }
      }

      // ReadRows is cancelled from the stream's 'close' event, which Node emits
      // on the next tick after the loop destroys the stream.
      await new Promise(resolve => setImmediate(resolve));
      // Verify breaking out of the stream cancels the active gRPC stream while keeping the shared client.
      assert.strictEqual(received.length, 2);
      assert.strictEqual(cancelCount, 1);
      assert.strictEqual(
        getStorageReadClient(bq, {
          BigQueryReadClient: class {
            readRows(): never {
              throw new Error('should not instantiate a new client');
            }
          },
        }),
        sharedClient,
      );
      // Verify the ReadRows listeners were removed and the CANCELLED error
      // that follows cancel() doesn't crash the process.
      assertReadRowsListenersRemoved(readRowsStream!);
    });

    it('should raise a ReadRows error after the batches already emitted', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-err-1',
            location: 'US',
          },
          pageRowCount: '2',
          totalRows: '4',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });
      const readRowsError = Object.assign(new Error('permission denied'), {
        code: 7,
      });
      let readRowsStream: EventEmitter | undefined;
      stubStorageReadClient(bq, {
        readRows: () => {
          const grpcStream = new EventEmitter();
          readRowsStream = grpcStream;
          process.nextTick(() => grpcStream.emit('error', readRowsError));
          return grpcStream;
        },
      });

      const stream = bq.createQueryArrowStream('SELECT id, name FROM tbl');
      const received: arrow.RecordBatch[] = [];
      const errors: Error[] = [];
      stream.on('data', batch => received.push(batch));
      stream.on('error', err => errors.push(err));
      stream.on('end', () => errors.push(new Error('unexpected end')));
      // The error and 'close' are emitted on later ticks.
      await new Promise(resolve => stream.once('close', resolve));

      // Verify the inline batch was delivered, then exactly one terminal event:
      // the ReadRows error.
      assert.strictEqual(received.length, 1);
      assert.deepStrictEqual(errors, [readRowsError]);
      // Verify the ReadRows listeners were removed after the error.
      assertReadRowsListenersRemoved(readRowsStream!);
      // Verify the 'close' listener added to the Arrow stream was removed too
      // (the test's own once('close') listener has already fired).
      assert.strictEqual(stream.listenerCount('close'), 0);
    });

    it('should cancel ReadRows and raise the error when a streamed batch fails to decode', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-bad-1',
            location: 'US',
          },
          totalRows: '2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
        },
      });
      let cancelCount = 0;
      let readRowsStream: EventEmitter | undefined;
      stubStorageReadClient(bq, {
        readRows: () => {
          const grpcStream = Object.assign(new EventEmitter(), {
            cancel: () => cancelCount++,
          });
          readRowsStream = grpcStream;
          process.nextTick(() =>
            grpcStream.emit('data', {
              arrowRecordBatch: {
                serializedRecordBatch: Buffer.from('not an arrow batch'),
              },
            }),
          );
          return grpcStream;
        },
      });

      // Verify the decode error is raised, the gRPC stream is cancelled, and
      // its listeners are removed.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT id, name FROM tbl').toArray(),
      );
      assert.strictEqual(cancelCount, 1);
      assertReadRowsListenersRemoved(readRowsStream!);
    });

    it('should fail when remaining rows must be streamed but jobReference is missing', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          pageRowCount: '2',
          totalRows: '5',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      // Verify an actionable error is raised if BigQuery omits jobReference on a multi-page response.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Cannot stream remaining Arrow rows without a jobReference\./,
      );
    });

    it('should stream from streams/_default at offset 0 when jobs.query returns a pageToken with totalRows = 0', async () => {
      // Cached multi-page ARROW results can report totalRows "0", omit
      // pageRowCount, and return no inline rows while setting pageToken.
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-cached-1',
            location: 'US',
          },
          totalRows: '0',
          pageToken: 'token-1',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
        },
      });

      const capturedOffsets: Array<number | undefined> = [];
      stubStorageReadClient(bq, {
        readRows: (req: {offset?: number}) => {
          capturedOffsets.push(req.offset);
          const grpcStream = new EventEmitter();
          process.nextTick(() => {
            grpcStream.emit('data', {
              arrowRecordBatch: {
                serializedRecordBatch: Buffer.from(
                  SAMPLE_PAYLOAD.serializedRecordBatch,
                  'base64',
                ),
              },
            });
            grpcStream.emit('end');
          });
          return grpcStream;
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl')
        .toArray();

      // Verify the rows are read from the start of the default stream instead
      // of returning an empty result.
      assert.deepStrictEqual(capturedOffsets, [0]);
      assert.strictEqual(new arrow.Table(batches).numRows, 2);
    });
  });
});
