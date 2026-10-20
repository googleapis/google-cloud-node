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
import {
  BigQuery,
  Job,
  JobCallback,
  JobOptions,
  Query,
  QueryResultsOptions,
  QueryRowsCallback,
} from '../src';
import {
  BigQueryReadClient,
  checkArrowDependencies,
  CreateReadSessionRequest,
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
  client: {
    readRows: (req: ReadRowsRequest) => FakeReadRowsStream;
    createReadSession?: BigQueryReadClient['createReadSession'];
  },
): BigQueryReadClient {
  const noop = () => {};
  const notStubbed = (): never => {
    throw new Error('createReadSession is not stubbed');
  };
  return getStorageReadClient(bq, {
    BigQueryReadClient: class {
      createReadSession = client.createReadSession ?? notStubbed;
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

/**
 * Stubs `job.getQueryResults` with a callback-style `impl`, returning a
 * promise because the code calls the promisified method.
 */
function stubJobGetQueryResults(
  job: Job,
  impl: (opts: QueryResultsOptions, cb: QueryRowsCallback) => void,
): void {
  job.getQueryResults = ((opts: QueryResultsOptions) =>
    new Promise((resolve, reject) => {
      impl(opts, (err, rows, nextQuery, res) =>
        err ? reject(err) : resolve([rows, nextQuery, res]),
      );
    })) as unknown as Job['getQueryResults'];
}

/**
 * Stubs `job.getMetadata` (`jobs.get`) to resolve with the given job resource
 * or reject with the given error.
 */
function stubJobGetMetadata(
  job: Job,
  outcome: {err?: Error; metadata?: bigquery.IJob},
): void {
  job.getMetadata = (async () => {
    if (outcome.err) {
      throw outcome.err;
    }
    return [outcome.metadata];
  }) as unknown as Job['getMetadata'];
}

/**
 * Returns a fake ReadRows stream that emits `responses`, then ends, on the
 * next tick.
 */
function fakeReadRowsStream(responses: object[] = []): EventEmitter {
  const grpcStream = new EventEmitter();
  process.nextTick(() => {
    for (const resp of responses) {
      grpcStream.emit('data', resp);
    }
    grpcStream.emit('end');
  });
  return grpcStream;
}

/** A ReadRowsResponse carrying `SAMPLE_PAYLOAD` as bytes. */
const SAMPLE_READ_ROWS_RESPONSE = {
  arrowSchema: {
    serializedSchema: Buffer.from(SAMPLE_PAYLOAD.serializedSchema, 'base64'),
  },
  arrowRecordBatch: {
    serializedRecordBatch: Buffer.from(
      SAMPLE_PAYLOAD.serializedRecordBatch,
      'base64',
    ),
  },
};

/**
 * Stubs `bq.createJob` for callback-based `jobs.insert` tests.
 */
function stubCreateJob(
  bq: BigQuery,
  impl: (opts: JobOptions, cb: JobCallback) => void,
): void {
  bq.createJob = impl as BigQuery['createJob'];
}

/**
 * Stubs `bq.createQueryJob` with a callback-style `impl`, returning a promise
 * because the code calls the promisified method.
 */
function stubCreateQueryJob(
  bq: BigQuery,
  impl: (opts: Query | string, cb: JobCallback) => void,
): void {
  bq.createQueryJob = ((opts: Query | string) =>
    new Promise((resolve, reject) => {
      impl(opts, (err, job, resp) =>
        err ? reject(err) : resolve([job, resp]),
      );
    })) as unknown as BigQuery['createQueryJob'];
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

    it('should forward jobs.query errors to the stream error event', async () => {
      stubJobsQuery(bq, {err: new Error('syntax error in SQL')});

      // Verify API errors from jobs.query reject stream consumption.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT INVALID').toArray(),
        /syntax error in SQL/,
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
          createReadSession(): never {
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
            // (highWaterMark 16), before the consumer can read any of them.
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
            createReadSession(): never {
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

  describe('BigQuery#createQueryArrowStream (job wait)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    it('should poll job.getQueryResults with maxResults = 0 and call ReadRows at offset = 0 only after the job completes', async () => {
      const fakeJob = bq.job('job-wait-1', {location: 'US'});
      const getQueryResultsCalls: QueryResultsOptions[] = [];
      const capturedReadRowsReqs: Array<{
        readStream?: string;
        offset?: number;
      }> = [];

      // First poll returns jobComplete: false; second poll returns jobComplete: true.
      stubJobGetQueryResults(fakeJob, (opts, cb) => {
        getQueryResultsCalls.push(opts);
        // Verify ReadRows has not been called while waiting for the job to complete.
        assert.strictEqual(capturedReadRowsReqs.length, 0);
        const isDone = getQueryResultsCalls.length >= 2;
        process.nextTick(() => {
          cb(null, [], null, {
            jobComplete: isDone,
            totalRows: isDone ? '2' : undefined,
          });
        });
      });

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-wait-1',
            location: 'US',
          },
        },
      });

      stubStorageReadClient(bq, {
        readRows: (req: {readStream?: string; offset?: number}) => {
          capturedReadRowsReqs.push(req);
          return fakeReadRowsStream([SAMPLE_READ_ROWS_RESPONSE]);
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl')
        .toArray();

      // Verify job.getQueryResults was polled twice with maxResults: 0 and autoPaginate: false.
      assert.strictEqual(getQueryResultsCalls.length, 2);
      for (const opts of getQueryResultsCalls) {
        assert.deepStrictEqual(opts, {
          autoPaginate: false,
          maxResults: 0,
        });
      }

      // Verify ReadRows was called at offset = 0 only after the job completed.
      assert.deepStrictEqual(capturedReadRowsReqs, [
        {
          readStream:
            'projects/test-project/locations/US/jobs/job-wait-1/streams/_default',
          offset: 0,
        },
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should fail with a timeout error when jobs.query returns jobComplete = false and timeoutMs was specified', async () => {
      const fakeJob = bq.job('job-timeout-1', {location: 'US'});
      let getQueryResultsCalled = false;
      stubJobGetQueryResults(fakeJob, () => {
        getQueryResultsCalled = true;
      });

      const getCapturedReq = stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-timeout-1',
            location: 'US',
          },
        },
      });

      // Verify caller-provided timeoutMs fails immediately when jobComplete is false.
      await assert.rejects(
        bq
          .createQueryArrowStream({query: 'SELECT 1', timeoutMs: 250})
          .toArray(),
        /The query did not complete before 250ms/,
      );
      assert.strictEqual(getCapturedReq()?.timeoutMs, 250);
      assert.strictEqual(getQueryResultsCalled, false);
    });

    it('should fail when jobs.query returns jobComplete = false without a jobReference', async () => {
      stubJobsQuery(bq, {res: {jobComplete: false, queryId: 'stateless-1'}});

      // Verify an actionable error instead of waiting on a job that doesn't exist.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Cannot wait for an incomplete query without a jobReference\./,
      );
    });

    it('should stop polling and never call ReadRows when the stream is destroyed during the wait', async () => {
      const fakeJob = bq.job('job-wait-destroy', {location: 'US'});
      const stream = bq.createQueryArrowStream('SELECT id, name FROM tbl');
      let polls = 0;
      stubJobGetQueryResults(fakeJob, (_opts, cb) => {
        polls++;
        // The consumer gives up while this poll is in flight.
        stream.destroy();
        process.nextTick(() => cb(null, [], null, {jobComplete: false}));
      });
      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-wait-destroy',
            location: 'US',
          },
        },
      });
      let readRowsCalls = 0;
      stubStorageReadClient(bq, {
        readRows: () => {
          readRowsCalls++;
          return new EventEmitter();
        },
      });

      stream.resume();
      // The poll's callback runs on the next tick; wait past it.
      await new Promise(resolve => setImmediate(resolve));

      // Verify the in-flight poll didn't start another one or call ReadRows.
      assert.strictEqual(polls, 1);
      assert.strictEqual(readRowsCalls, 0);
    });

    it('should wait for the job instead of failing when timeoutMs is 0, matching BigQuery#query', async () => {
      const fakeJob = bq.job('job-timeout-0', {location: 'US'});
      const getQueryResultsCalls: QueryResultsOptions[] = [];
      stubJobGetQueryResults(fakeJob, (opts, cb) => {
        getQueryResultsCalls.push(opts);
        process.nextTick(() => cb(null, [], null, {jobComplete: true}));
      });

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-timeout-0',
            location: 'US',
          },
        },
      });

      stubStorageReadClient(bq, {
        readRows: () => fakeReadRowsStream([SAMPLE_READ_ROWS_RESPONSE]),
      });

      // BigQuery#query treats a falsy timeoutMs as "no override", so 0 must
      // not reject with "did not complete before 0ms"; poll and stream instead.
      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({query: 'SELECT 1', timeoutMs: 0})
        .toArray();
      assert.deepStrictEqual(getQueryResultsCalls, [
        {autoPaginate: false, maxResults: 0},
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should forward job.getQueryResults errors to the stream without calling ReadRows', async () => {
      const fakeJob = bq.job('job-err-1', {location: 'US'});
      stubJobGetQueryResults(fakeJob, (_opts, cb) => {
        process.nextTick(() => {
          cb(new Error('Resources exceeded during query execution'));
        });
      });

      let readRowsCalled = false;
      stubStorageReadClient(bq, {
        readRows: () => {
          readRowsCalled = true;
          return new EventEmitter();
        },
      });

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-err-1',
            location: 'US',
          },
        },
      });

      // Verify errors from job.getQueryResults reject stream consumption and skip ReadRows.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Resources exceeded during query execution/,
      );
      assert.strictEqual(readRowsCalled, false);
    });

    it('should emit a 0-row, 0-column RecordBatch when ReadRows at offset = 0 ends without rows and the job has no destination table', async () => {
      const fakeJob = bq.job('job-empty-1', {location: 'US'});
      stubJobGetQueryResults(fakeJob, (_opts, cb) => {
        process.nextTick(() => {
          cb(null, [], null, {jobComplete: true, totalRows: '0'});
        });
      });
      // Statements without a result table, like DECLARE, have no destination.
      stubJobGetMetadata(fakeJob, {metadata: {configuration: {query: {}}}});

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-empty-1',
            location: 'US',
          },
        },
      });

      // createReadSession isn't stubbed, so calling it fails the test.
      stubStorageReadClient(bq, {
        readRows: () => fakeReadRowsStream(),
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('DECLARE x INT64 DEFAULT 1')
        .toArray();

      // Verify a 0-row RecordBatch is still emitted when streams/_default returns 0 messages at offset = 0.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.strictEqual(batches[0].numCols, 0);
    });

    it('should read the schema from the destination table when ReadRows at offset = 0 ends without rows or a schema', async () => {
      // streams/_default sends no ReadRowsResponse for a result without rows,
      // so the schema has to come from a read session on the destination table.
      const fakeJob = bq.job('job-empty-2', {location: 'US'});
      stubJobGetQueryResults(fakeJob, (_opts, cb) => {
        process.nextTick(() => {
          cb(null, [], null, {jobComplete: true, totalRows: '0'});
        });
      });
      stubJobGetMetadata(fakeJob, {
        metadata: {
          jobReference: {projectId: 'test-project', jobId: 'job-empty-2'},
          configuration: {
            query: {
              destinationTable: {
                projectId: 'test-project',
                datasetId: '_anon',
                tableId: 'anon_table',
              },
            },
          },
        },
      });

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-empty-2',
            location: 'US',
          },
        },
      });

      const sessionReqs: CreateReadSessionRequest[] = [];
      stubStorageReadClient(bq, {
        createReadSession: async req => {
          sessionReqs.push(req);
          return [
            {
              arrowSchema: {
                serializedSchema: Buffer.from(
                  SAMPLE_PAYLOAD.serializedSchema,
                  'base64',
                ),
              },
            },
          ];
        },
        readRows: () => fakeReadRowsStream(),
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl WHERE FALSE')
        .toArray();

      // Verify the 0-row RecordBatch carries the destination table's schema.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
      assert.strictEqual(sessionReqs.length, 1);
      assert.strictEqual(sessionReqs[0].parent, 'projects/test-project');
      assert.strictEqual(
        sessionReqs[0].readSession.table,
        'projects/test-project/datasets/_anon/tables/anon_table',
      );
      assert.strictEqual(sessionReqs[0].maxStreamCount, 1);
    });

    it('should forward jobs.get errors when reading the schema of a result without rows', async () => {
      const fakeJob = bq.job('job-empty-3', {location: 'US'});
      stubJobGetQueryResults(fakeJob, (_opts, cb) => {
        process.nextTick(() => {
          cb(null, [], null, {jobComplete: true, totalRows: '0'});
        });
      });
      stubJobGetMetadata(fakeJob, {err: new Error('jobs.get failed')});

      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-empty-3',
            location: 'US',
          },
        },
      });

      stubStorageReadClient(bq, {
        readRows: () => fakeReadRowsStream(),
      });

      // Verify the jobs.get error reaches the stream instead of a schema-less batch.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT id FROM tbl WHERE FALSE').toArray(),
        /jobs.get failed/,
      );
    });
  });

  describe('BigQuery#createQueryArrowStream (jobs.insert)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    it('should route jobs.insert-only options through createQueryJob without queryResultsFormat, wait for completion, and stream from streams/_default at offset = 0', async () => {
      const getCapturedQueryReq = stubJobsQuery(bq, {res: {}});

      let capturedJobOpts: JobOptions | undefined;
      let getQueryResultsCalled = false;
      const capturedReadRowsReqs: Array<{
        readStream?: string;
        offset?: number;
      }> = [];

      const fakeJob = bq.job('custom-job-1', {location: 'EU'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'custom-job-1',
          location: 'EU',
        },
      };
      stubJobGetQueryResults(fakeJob, (opts, cb) => {
        getQueryResultsCalled = true;
        assert.strictEqual(capturedReadRowsReqs.length, 0);
        assert.deepStrictEqual(opts, {
          autoPaginate: false,
          maxResults: 0,
        });
        process.nextTick(() => {
          cb(null, [], null, {jobComplete: true, totalRows: '2'});
        });
      });

      // Intercept createJob (called by createQueryJob) to inspect the outgoing jobs.insert payload.
      stubCreateJob(bq, (reqOpts, cb) => {
        capturedJobOpts = reqOpts;
        process.nextTick(() => {
          cb(null, fakeJob, fakeJob.metadata);
        });
      });

      stubStorageReadClient(bq, {
        readRows: (req: {readStream?: string; offset?: number}) => {
          capturedReadRowsReqs.push(req);
          const grpcStream = new EventEmitter();
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
            grpcStream.emit('end');
          });
          return grpcStream;
        },
      });

      let emittedJob: Job | undefined;
      const stream = bq.createQueryArrowStream({
        query: 'SELECT id, name FROM tbl',
        jobId: 'custom-job-1',
        location: 'EU',
        jobCreationMode: 'JOB_CREATION_OPTIONAL',
      });
      stream.on('job', j => {
        emittedJob = j;
      });

      const batches: arrow.RecordBatch[] = await stream.toArray();

      // Verify jobs.query was bypassed and jobs.insert did not receive queryResultsFormat or jobCreationMode.
      assert.strictEqual(getCapturedQueryReq(), undefined);
      const queryConfig = capturedJobOpts?.configuration?.query;
      assert.ok(queryConfig);
      assert.strictEqual(queryConfig.query, 'SELECT id, name FROM tbl');
      assert.strictEqual('queryResultsFormat' in queryConfig, false);
      assert.strictEqual('jobCreationMode' in queryConfig, false);

      // Verify metadata, job wait, and ReadRows at offset = 0 in the job's EU location.
      assert.strictEqual(stream.queryId, undefined);
      assert.deepStrictEqual(stream.jobReference, {
        projectId: 'test-project',
        jobId: 'custom-job-1',
        location: 'EU',
      });
      assert.strictEqual(emittedJob, fakeJob);
      assert.strictEqual(getQueryResultsCalled, true);
      assert.deepStrictEqual(capturedReadRowsReqs, [
        {
          readStream:
            'projects/test-project/locations/EU/jobs/custom-job-1/streams/_default',
          offset: 0,
        },
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should not retry a failed jobs.query call as jobs.insert', async () => {
      stubJobsQuery(bq, {err: new Error('jobs.query failed')});
      let createQueryJobCalled = false;
      stubCreateQueryJob(bq, () => {
        createQueryJobCalled = true;
      });

      // Verify a failed jobs.query surfaces its error directly without falling back to jobs.insert.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /jobs\.query failed/,
      );
      assert.strictEqual(createQueryJobCalled, false);
    });

    it('should emit a 0-row, 0-column RecordBatch without waiting or calling ReadRows when dryRun is true', async () => {
      const fakeJob = bq.job('dry-run-job-1', {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'dry-run-job-1',
          location: 'US',
        },
      };
      let getQueryResultsCalled = false;
      stubJobGetQueryResults(fakeJob, () => {
        getQueryResultsCalled = true;
      });
      stubCreateQueryJob(bq, (_opts, cb) => {
        process.nextTick(() => {
          cb(null, fakeJob, fakeJob.metadata);
        });
      });

      const stream = bq.createQueryArrowStream({
        query: 'SELECT 1',
        dryRun: true,
      });
      const batches: arrow.RecordBatch[] = await stream.toArray();

      // Verify dryRun emits an empty batch immediately without polling getQueryResults.
      assert.strictEqual(getQueryResultsCalled, false);
      assert.strictEqual(stream.jobReference?.jobId, 'dry-run-job-1');
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.strictEqual(batches[0].numCols, 0);
    });

    it('should bound the jobs.insert wait with timeoutMs and keep timeoutMs out of configuration.query', async () => {
      const fakeJob = bq.job('timeout-job-1', {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'timeout-job-1',
          location: 'US',
        },
      };
      let waitOpts: QueryResultsOptions | undefined;
      stubJobGetQueryResults(fakeJob, (opts, cb) => {
        waitOpts = opts;
        // Job.getQueryResults fails like this when timeoutMs passes before
        // the job completes.
        process.nextTick(() => {
          cb(new Error('The query did not complete before 1000ms'), null);
        });
      });
      let capturedJobOpts: JobOptions | undefined;
      stubCreateJob(bq, (reqOpts, cb) => {
        capturedJobOpts = reqOpts;
        process.nextTick(() => {
          cb(null, fakeJob, fakeJob.metadata);
        });
      });

      // Verify the wait fails like BigQuery#query when timeoutMs passes.
      await assert.rejects(
        bq
          .createQueryArrowStream({
            query: 'SELECT 1',
            jobTimeoutMs: 60000,
            timeoutMs: 1000,
          })
          .toArray(),
        /The query did not complete before 1000ms/,
      );
      // Verify timeoutMs bounded jobs.getQueryResults and wasn't sent as a
      // jobs.insert configuration field.
      assert.strictEqual(waitOpts?.timeoutMs, 1000);
      assert.strictEqual(
        (capturedJobOpts?.configuration?.query as Record<string, unknown>)
          ?.timeoutMs,
        undefined,
      );
    });

    it('should wait without a timeout when timeoutMs is 0 on the jobs.insert path', async () => {
      const fakeJob = bq.job('timeout-zero-job', {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'timeout-zero-job',
          location: 'US',
        },
      };
      const waitOpts: QueryResultsOptions[] = [];
      stubJobGetQueryResults(fakeJob, (opts, cb) => {
        waitOpts.push(opts);
        process.nextTick(() =>
          cb(new Error('stop after the first poll'), null),
        );
      });
      stubCreateJob(bq, (_reqOpts, cb) => {
        process.nextTick(() => cb(null, fakeJob, fakeJob.metadata));
      });

      await assert.rejects(
        bq
          .createQueryArrowStream({
            query: 'SELECT 1',
            jobTimeoutMs: 60000,
            timeoutMs: 0,
          })
          .toArray(),
        /stop after the first poll/,
      );
      // Verify 0 means "no limit", as in BigQuery#query: sending timeoutMs: 0
      // would make jobs.getQueryResults return at once and poll in a loop.
      assert.deepStrictEqual(waitOpts, [{autoPaginate: false, maxResults: 0}]);
    });

    it('should forward errors thrown synchronously by createQueryJob', async () => {
      // jobId forces jobs.insert; a null parameter without a type makes
      // createQueryJob throw before sending the request.
      await assert.rejects(
        bq
          .createQueryArrowStream({
            query: 'SELECT ?',
            jobId: 'custom-job-throw',
            params: [null],
          })
          .toArray(),
        /Parameter types must be provided for null values/,
      );
    });

    it('should forward createQueryJob errors to the stream', async () => {
      stubCreateQueryJob(bq, (_opts, cb) => {
        process.nextTick(() => {
          cb(new Error('Permission denied creating job'), null);
        });
      });

      // Verify errors from createQueryJob reject stream consumption.
      await assert.rejects(
        bq
          .createQueryArrowStream({query: 'SELECT 1', jobId: 'custom-err-1'})
          .toArray(),
        /Permission denied creating job/,
      );
    });
  });

  describe('BigQuery#createQueryArrowStream (destination table)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    function stubDestinationJob(
      tableId: string,
      jobId: string,
      opts?: {
        destinationTable?: bigquery.ITableReference;
        onGetQueryResults?: (reqOpts: QueryResultsOptions) => void;
      },
    ) {
      const destination = bq.dataset('dest_ds').table(tableId);
      let capturedJobOpts: JobOptions | undefined;

      const fakeJob = bq.job(jobId, {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId,
          location: 'US',
        },
        // jobs.insert echoes the destination table in the job configuration.
        configuration: {
          query: {
            destinationTable: opts?.destinationTable ?? {
              projectId: 'test-project',
              datasetId: 'dest_ds',
              tableId,
            },
          },
        },
      };
      stubJobGetQueryResults(fakeJob, (reqOpts, cb) => {
        opts?.onGetQueryResults?.(reqOpts);
        process.nextTick(() => {
          cb(null, [], null, {jobComplete: true});
        });
      });
      stubCreateJob(bq, (reqOpts, cb) => {
        capturedJobOpts = reqOpts;
        process.nextTick(() => {
          cb(null, fakeJob, fakeJob.metadata);
        });
      });

      return {
        destination,
        getCapturedJobOpts: () => capturedJobOpts,
      };
    }

    it('should preserve the Table instance through createQueryJob, call createReadSession with maxStreamCount = 1 and dataFormat = ARROW, and stream from streams[0].name', async () => {
      const capturedSessionReqs: CreateReadSessionRequest[] = [];
      const capturedReadRowsReqs: Array<{
        readStream?: string;
        offset?: number;
      }> = [];

      const {destination, getCapturedJobOpts} = stubDestinationJob(
        'dest_tbl',
        'dest-job-1',
        {
          destinationTable: {
            projectId: 'dest-project',
            datasetId: 'dest_ds',
            tableId: 'dest_tbl',
          },
          onGetQueryResults: opts => {
            // Verify createReadSession has not been called before the destination job completes.
            assert.strictEqual(capturedSessionReqs.length, 0);
            assert.strictEqual(opts.maxResults, 0);
          },
        },
      );

      stubStorageReadClient(bq, {
        createReadSession: async req => {
          capturedSessionReqs.push(req);
          return [
            {
              arrowSchema: {
                serializedSchema: Buffer.from(
                  SAMPLE_PAYLOAD.serializedSchema,
                  'base64',
                ),
              },
              streams: [
                {
                  name: 'projects/test-project/locations/US/sessions/sess-1/streams/stream-0',
                },
              ],
            },
          ];
        },
        readRows: (req: {readStream?: string; offset?: number}) => {
          capturedReadRowsReqs.push(req);
          // Omit arrowSchema on the ReadRows message to verify session.arrowSchema is used as initialSchema.
          return fakeReadRowsStream([
            {arrowRecordBatch: SAMPLE_READ_ROWS_RESPONSE.arrowRecordBatch},
          ]);
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          destination,
          writeDisposition: 'WRITE_TRUNCATE',
        })
        .toArray();

      // Verify createQueryJob translated destination into configuration.query.destinationTable.
      const queryConfig = getCapturedJobOpts()?.configuration?.query;
      assert.deepStrictEqual(queryConfig?.destinationTable, {
        datasetId: 'dest_ds',
        projectId: 'test-project',
        tableId: 'dest_tbl',
      });
      assert.strictEqual(queryConfig?.writeDisposition, 'WRITE_TRUNCATE');

      // Verify createReadSession was called with maxStreamCount: 1 and dataFormat: 'ARROW'.
      assert.deepStrictEqual(capturedSessionReqs, [
        {
          parent: 'projects/test-project',
          readSession: {
            table: 'projects/dest-project/datasets/dest_ds/tables/dest_tbl',
            dataFormat: 'ARROW',
          },
          maxStreamCount: 1,
        },
      ]);

      // Verify readRows was called on session.streams[0].name at offset = 0.
      assert.deepStrictEqual(capturedReadRowsReqs, [
        {
          readStream:
            'projects/test-project/locations/US/sessions/sess-1/streams/stream-0',
          offset: 0,
        },
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should emit a 0-row RecordBatch preserving session.arrowSchema when createReadSession returns no streams', async () => {
      const {destination} = stubDestinationJob('empty_tbl', 'dest-empty-1');

      let readRowsCalled = false;
      stubStorageReadClient(bq, {
        createReadSession: async () => [
          {
            arrowSchema: {
              serializedSchema: Buffer.from(
                SAMPLE_PAYLOAD.serializedSchema,
                'base64',
              ),
            },
            streams: [],
          },
        ],
        readRows: () => {
          readRowsCalled = true;
          return new EventEmitter();
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl WHERE FALSE',
          destination,
        })
        .toArray();

      // Verify an empty destination table emits a single 0-row RecordBatch with the session's schema without calling readRows.
      assert.strictEqual(readRowsCalled, false);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
    });

    it('should forward createReadSession errors to the stream', async () => {
      const {destination} = stubDestinationJob('err_tbl', 'dest-err-1');

      stubStorageReadClient(bq, {
        createReadSession: async () => {
          throw new Error('bigquery.readsessions.create denied');
        },
        readRows: () => new EventEmitter(),
      });

      // Verify errors from createReadSession reject stream consumption.
      await assert.rejects(
        bq.createQueryArrowStream({query: 'SELECT 1', destination}).toArray(),
        /bigquery\.readsessions\.create denied/,
      );
    });
  });
});
