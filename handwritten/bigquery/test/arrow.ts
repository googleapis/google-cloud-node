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
 * Stubs `job.getQueryResults`, which the code awaits, with an async `impl`
 * that resolves to `[rows, nextQuery, response]` or rejects.
 */
function stubJobGetQueryResults(
  job: Job,
  impl: (
    opts: QueryResultsOptions,
  ) => Promise<[unknown[], null, bigquery.IGetQueryResultsResponse]>,
): void {
  job.getQueryResults = impl as unknown as Job['getQueryResults'];
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
 * Returns a fake ReadRows stream that emits `responses` on the next tick,
 * then ends, or fails with `err` once the consumer has read them.
 */
function fakeReadRowsStream(
  responses: object[] = [],
  err?: Error,
): EventEmitter {
  const grpcStream = new EventEmitter();
  process.nextTick(() => {
    for (const resp of responses) {
      grpcStream.emit('data', resp);
    }
    if (err) {
      setImmediate(() => grpcStream.emit('error', err));
    } else {
      grpcStream.emit('end');
    }
  });
  return grpcStream;
}

/** Returns an error with a gRPC status `code`, like google-gax emits. */
function grpcError(message: string, code: number): Error {
  return Object.assign(new Error(message), {code});
}

/** Returns a ReadRowsResponse carrying a serialized Arrow table as bytes. */
function toReadRowsResponse(payload: ReturnType<typeof serializeArrowTable>) {
  return {
    arrowSchema: {
      serializedSchema: Buffer.from(payload.serializedSchema, 'base64'),
    },
    arrowRecordBatch: {
      serializedRecordBatch: Buffer.from(
        payload.serializedRecordBatch,
        'base64',
      ),
    },
  };
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

/** The `arrowSerializationOptions` sent when the caller sets none. */
const DEFAULT_SERIALIZATION_OPTIONS: bigquery.IArrowSerializationOptions = {
  picosTimestampPrecision: 'TIMESTAMP_PRECISION_MICROS',
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
 * Stubs `bq.createQueryJob`, which the code awaits, with an async `impl`
 * that resolves to `[job, apiResponse]` or rejects.
 */
function stubCreateQueryJob(
  bq: BigQuery,
  impl: (opts: Query | string) => Promise<[Job, bigquery.IJob | undefined]>,
): void {
  bq.createQueryJob = impl as unknown as BigQuery['createQueryJob'];
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

    it('should fail instead of dropping rows when jobs.query returns a record batch without a schema', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          totalRows: '2',
          pageRowCount: '2',
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      // Verify the batch isn't silently replaced with an empty RecordBatch.
      await assert.rejects(
        bq.createQueryArrowStream('SELECT 1').toArray(),
        /Got an Arrow record batch before its schema\./,
      );
    });

    it('should treat an empty record batch without a schema like a missing one', async () => {
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          totalRows: '0',
          arrowRecordBatch: {
            // An empty Uint8Array is truthy but carries no rows.
            serializedRecordBatch: new Uint8Array(0) as unknown as string,
          },
        },
      });

      // Verify one 0-row, 0-column RecordBatch is emitted instead of an error.
      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT 1')
        .toArray();
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.strictEqual(batches[0].numCols, 0);
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
          arrowSerializationOptions: DEFAULT_SERIALIZATION_OPTIONS,
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
      stubJobGetQueryResults(fakeJob, async opts => {
        getQueryResultsCalls.push(opts);
        // Verify ReadRows has not been called while waiting for the job to complete.
        assert.strictEqual(capturedReadRowsReqs.length, 0);
        const isDone = getQueryResultsCalls.length >= 2;
        return [
          [],
          null,
          {jobComplete: isDone, totalRows: isDone ? '2' : undefined},
        ];
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
          arrowSerializationOptions: DEFAULT_SERIALIZATION_OPTIONS,
        },
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should fail with a timeout error when jobs.query returns jobComplete = false and timeoutMs was specified', async () => {
      const fakeJob = bq.job('job-timeout-1', {location: 'US'});
      let getQueryResultsCalled = false;
      stubJobGetQueryResults(fakeJob, async () => {
        getQueryResultsCalled = true;
        return [[], null, {jobComplete: true}];
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
      stubJobGetQueryResults(fakeJob, async () => {
        polls++;
        // The consumer gives up while this poll is in flight.
        stream.destroy();
        return [[], null, {jobComplete: false}];
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
      // Wait for the in-flight poll to resolve.
      await new Promise(resolve => setImmediate(resolve));

      // Verify the in-flight poll didn't start another one or call ReadRows.
      assert.strictEqual(polls, 1);
      assert.strictEqual(readRowsCalls, 0);
    });

    it('should wait for the job instead of failing when timeoutMs is 0, matching BigQuery#query', async () => {
      const fakeJob = bq.job('job-timeout-0', {location: 'US'});
      const getQueryResultsCalls: QueryResultsOptions[] = [];
      stubJobGetQueryResults(fakeJob, async opts => {
        getQueryResultsCalls.push(opts);
        return [[], null, {jobComplete: true}];
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
      stubJobGetQueryResults(fakeJob, async () => {
        throw new Error('Resources exceeded during query execution');
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
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true, totalRows: '0'},
      ]);
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
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true, totalRows: '0'},
      ]);
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

    it('should not create a read session if the stream is destroyed while reading the job metadata', async () => {
      const fakeJob = bq.job('job-empty-destroy', {location: 'US'});
      const stream = bq.createQueryArrowStream(
        'SELECT id FROM tbl WHERE FALSE',
      );
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true, totalRows: '0'},
      ]);
      fakeJob.getMetadata = (async () => {
        // The consumer gives up while jobs.get is in flight.
        stream.destroy();
        return [
          {
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
        ];
      }) as unknown as Job['getMetadata'];
      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: false,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-empty-destroy',
            location: 'US',
          },
        },
      });
      let readSessions = 0;
      stubStorageReadClient(bq, {
        createReadSession: async () => {
          readSessions++;
          return [{}];
        },
        readRows: () => fakeReadRowsStream(),
      });

      stream.resume();
      await new Promise(resolve => stream.once('close', resolve));
      // Let the query finish its work after jobs.get resolves.
      await new Promise(resolve => setImmediate(resolve));

      // Verify no read session was created for the destroyed stream.
      assert.strictEqual(readSessions, 0);
    });

    it('should forward jobs.get errors when reading the schema of a result without rows', async () => {
      const fakeJob = bq.job('job-empty-3', {location: 'US'});
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true, totalRows: '0'},
      ]);
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
      stubJobGetQueryResults(fakeJob, async opts => {
        getQueryResultsCalled = true;
        assert.strictEqual(capturedReadRowsReqs.length, 0);
        assert.deepStrictEqual(opts, {
          autoPaginate: false,
          maxResults: 0,
        });
        return [[], null, {jobComplete: true, totalRows: '2'}];
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
          arrowSerializationOptions: DEFAULT_SERIALIZATION_OPTIONS,
        },
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 2);
    });

    it('should not retry a failed jobs.query call as jobs.insert', async () => {
      stubJobsQuery(bq, {err: new Error('jobs.query failed')});
      let createQueryJobCalled = false;
      stubCreateQueryJob(bq, async () => {
        createQueryJobCalled = true;
        throw new Error('createQueryJob should not be called');
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
      stubJobGetQueryResults(fakeJob, async () => {
        getQueryResultsCalled = true;
        return [[], null, {jobComplete: true}];
      });
      stubCreateQueryJob(bq, async () => [fakeJob, fakeJob.metadata]);

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
      stubJobGetQueryResults(fakeJob, async opts => {
        waitOpts = opts;
        // Job.getQueryResults fails like this when timeoutMs passes before
        // the job completes.
        throw new Error('The query did not complete before 1000ms');
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
      stubJobGetQueryResults(fakeJob, async opts => {
        waitOpts.push(opts);
        throw new Error('stop after the first poll');
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

    it('should not emit job or wait for the job when the stream is destroyed during jobs.insert', async () => {
      const fakeJob = bq.job('destroyed-insert-job', {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'destroyed-insert-job',
          location: 'US',
        },
      };
      let getQueryResultsCalled = false;
      stubJobGetQueryResults(fakeJob, async () => {
        getQueryResultsCalled = true;
        return [[], null, {jobComplete: true}];
      });
      const stream = bq.createQueryArrowStream({
        query: 'SELECT 1',
        jobId: 'destroyed-insert-job',
      });
      stubCreateQueryJob(bq, async () => {
        // The consumer gives up while jobs.insert is in flight.
        stream.destroy();
        return [fakeJob, fakeJob.metadata];
      });
      let jobEmitted = false;
      stream.on('job', () => {
        jobEmitted = true;
      });

      stream.resume();
      await new Promise(resolve => stream.once('close', resolve));
      // Let the query finish its work after jobs.insert resolves.
      await new Promise(resolve => setImmediate(resolve));

      // Verify nothing happened on the destroyed stream.
      assert.strictEqual(jobEmitted, false);
      assert.strictEqual(stream.jobReference, undefined);
      assert.strictEqual(getQueryResultsCalled, false);
    });

    it('should forward createQueryJob errors to the stream', async () => {
      stubCreateQueryJob(bq, async () => {
        throw new Error('Permission denied creating job');
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
      stubJobGetQueryResults(fakeJob, async reqOpts => {
        opts?.onGetQueryResults?.(reqOpts);
        return [[], null, {jobComplete: true}];
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

    it('should emit the read session schema without calling ReadRows when maxResults is 0', async () => {
      const {destination} = stubDestinationJob('dest_tbl', 'dest-job-max-0');
      let readRowsCalled = false;
      stubStorageReadClient(bq, {
        createReadSession: async () => [
          {
            arrowSchema: SAMPLE_READ_ROWS_RESPONSE.arrowSchema,
            streams: [
              {
                name: 'projects/test-project/locations/US/sessions/sess-0/streams/stream-0',
              },
            ],
          },
        ],
        readRows: () => {
          readRowsCalled = true;
          return fakeReadRowsStream();
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          destination,
          maxResults: 0,
        })
        .toArray();

      assert.strictEqual(readRowsCalled, false);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
    });

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

      // Verify createReadSession was called with maxStreamCount: 1, dataFormat: 'ARROW', and default arrowSerializationOptions.
      assert.deepStrictEqual(capturedSessionReqs, [
        {
          parent: 'projects/test-project',
          readSession: {
            table: 'projects/dest-project/datasets/dest_ds/tables/dest_tbl',
            dataFormat: 'ARROW',
            readOptions: {
              arrowSerializationOptions: DEFAULT_SERIALIZATION_OPTIONS,
            },
          },
          maxStreamCount: 1,
        },
      ]);

      // Verify readRows was called on session.streams[0].name at offset = 0 (without arrowSerializationOptions on the session stream).
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

    it('should send WRITE_APPEND through createQueryJob and read the whole destination table through a read session', async () => {
      const {destination, getCapturedJobOpts} = stubDestinationJob(
        'append_tbl',
        'dest-append-1',
      );
      const sessionReqs: CreateReadSessionRequest[] = [];
      stubStorageReadClient(bq, {
        createReadSession: async req => {
          sessionReqs.push(req);
          return [
            {
              arrowSchema: SAMPLE_READ_ROWS_RESPONSE.arrowSchema,
              streams: [
                {
                  name: 'projects/test-project/locations/US/sessions/sess-2/streams/stream-0',
                },
              ],
            },
          ];
        },
        readRows: () =>
          fakeReadRowsStream([
            {arrowRecordBatch: SAMPLE_READ_ROWS_RESPONSE.arrowRecordBatch},
          ]),
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          destination,
          writeDisposition: 'WRITE_APPEND',
        })
        .toArray();

      // Verify WRITE_APPEND is sent to jobs.insert instead of being rejected.
      const queryConfig = getCapturedJobOpts()?.configuration?.query;
      assert.strictEqual(queryConfig?.writeDisposition, 'WRITE_APPEND');

      // Verify the stream reads the destination table, which holds the
      // existing rows plus the appended ones.
      assert.deepStrictEqual(
        sessionReqs.map(req => req.readSession.table),
        ['projects/test-project/datasets/dest_ds/tables/append_tbl'],
      );
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

    it('should fail with a clear error instead of creating a read session for projects/undefined', async () => {
      // Neither the job nor the client has a project ID.
      bq.projectId = '{{projectId}}';
      const fakeJob = bq.job('dest-no-project', {location: 'US'});
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true},
      ]);
      stubCreateQueryJob(bq, async () => [
        fakeJob,
        {
          jobReference: {jobId: 'dest-no-project', location: 'US'},
          configuration: {
            query: {
              destinationTable: {
                projectId: 'other-project',
                datasetId: 'dest_ds',
                tableId: 'tbl',
              },
            },
          },
        },
      ]);
      let readSessions = 0;
      stubStorageReadClient(bq, {
        createReadSession: async () => {
          readSessions++;
          return [{}];
        },
        readRows: () => new EventEmitter(),
      });

      await assert.rejects(
        bq
          .createQueryArrowStream({
            query: 'SELECT 1',
            destination: bq.dataset('dest_ds').table('tbl'),
          })
          .toArray(),
        /Cannot create an Arrow read session without a project ID\./,
      );
      assert.strictEqual(readSessions, 0);
    });
  });

  describe('BigQuery#createQueryArrowStream (stream resumption)', () => {
    const jobReference = {
      projectId: 'test-project',
      jobId: 'job-resume-1',
      location: 'US',
    };
    const readStream =
      'projects/test-project/locations/US/jobs/job-resume-1/streams/_default';
    const arrowSerializationOptions = DEFAULT_SERIALIZATION_OPTIONS;
    let bq: BigQuery;
    // The ReadRows streams opened, in order.
    let grpcStreams: EventEmitter[];

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
      grpcStreams = [];
    });

    const track = (grpcStream: EventEmitter) => {
      grpcStreams.push(grpcStream);
      return grpcStream;
    };

    // Stubs jobs.query to return `inline` as its first page out of
    // `totalRows`, so the remaining rows are read with ReadRows.
    const stubFirstPage = (
      totalRows: number,
      inline?: ReturnType<typeof serializeArrowTable>,
      inlineRows = 0,
    ) =>
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference,
          pageRowCount: String(inlineRows),
          totalRows: String(totalRows),
          arrowSchema: {serializedSchema: inline?.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: inline?.serializedRecordBatch,
          },
        },
      });

    it('should resume ReadRows at offset + rowsReceived on UNAVAILABLE and RST_STREAM errors without gaps or duplicates', async () => {
      stubFirstPage(4, serializeArrowTable(makeSampleTable([1], ['alice'])), 1);
      const page2 = toReadRowsResponse(
        serializeArrowTable(makeSampleTable([2, 3], ['bob', 'carol'])),
      );
      const page3 = toReadRowsResponse(
        serializeArrowTable(makeSampleTable([4], ['dave'])),
      );
      // Each ReadRows call's responses and the error it fails with, if any.
      const attempts: Array<[object[], Error?]> = [
        [[page2], grpcError('Service unavailable', 14)],
        [[], grpcError('Connection reset', 14)],
        [[], grpcError('Received RST_STREAM with code 2', 13)],
        // Without a schema, so the batch decodes with the one sent earlier.
        [[{arrowRecordBatch: page3.arrowRecordBatch}]],
      ];
      const requests: ReadRowsRequest[] = [];
      stubStorageReadClient(bq, {
        readRows: req => {
          const [responses, err] = attempts[requests.push(req) - 1];
          return track(fakeReadRowsStream(responses, err));
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream('SELECT id, name FROM tbl')
        .toArray();

      // Verify ReadRows started after the inline row, and every reopen
      // resumed after the 2 rows read before the first error.
      assert.deepStrictEqual(requests, [
        {readStream, offset: 1, arrowSerializationOptions},
        {readStream, offset: 3, arrowSerializationOptions},
        {readStream, offset: 3, arrowSerializationOptions},
        {readStream, offset: 3, arrowSerializationOptions},
      ]);
      // Verify all rows arrived in order without gaps or duplicates.
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
      // Verify each attempt, failed or not, kept none of our listeners.
      grpcStreams.forEach(assertReadRowsListenersRemoved);
    });

    it('should not retry DEADLINE_EXCEEDED, which means the caller deadline ran out', async () => {
      stubFirstPage(2);
      stubStorageReadClient(bq, {
        readRows: () =>
          track(fakeReadRowsStream([], grpcError('Deadline exceeded', 4))),
      });

      await assert.rejects(
        bq.createQueryArrowStream('SELECT id, name FROM tbl').toArray(),
        /Deadline exceeded/,
      );
      // Verify ReadRows wasn't reopened.
      assert.strictEqual(grpcStreams.length, 1);
      assertReadRowsListenersRemoved(grpcStreams[0]);
    });

    it('should surface non-retryable ReadRows errors after yielding earlier batches', async () => {
      stubFirstPage(3, serializeArrowTable(makeSampleTable([1], ['alice'])), 1);
      stubStorageReadClient(bq, {
        readRows: () =>
          track(
            fakeReadRowsStream(
              [
                toReadRowsResponse(
                  serializeArrowTable(makeSampleTable([2], ['bob'])),
                ),
              ],
              // INTERNAL without RST_STREAM isn't safe to resume.
              grpcError('Corrupted stream state', 13),
            ),
          ),
      });

      const batches: arrow.RecordBatch[] = [];
      await assert.rejects(async () => {
        for await (const batch of bq.createQueryArrowStream(
          'SELECT id, name FROM tbl',
        )) {
          batches.push(batch);
        }
      }, /Corrupted stream state/);

      // Verify the inline and streamed batches arrived, and ReadRows wasn't
      // reopened.
      assert.strictEqual(batches.length, 2);
      assert.strictEqual(grpcStreams.length, 1);
      assertReadRowsListenersRemoved(grpcStreams[0]);
    });

    it('should stop retrying and surface the error when consecutive retryable errors exceed MAX_STREAM_RETRIES', async () => {
      stubFirstPage(2);
      stubStorageReadClient(bq, {
        readRows: () =>
          track(
            fakeReadRowsStream([], grpcError('Persistent UNAVAILABLE', 14)),
          ),
      });

      await assert.rejects(
        bq.createQueryArrowStream('SELECT id, name FROM tbl').toArray(),
        /Persistent UNAVAILABLE/,
      );

      // Verify the first call and 3 retries each kept none of our listeners.
      assert.strictEqual(grpcStreams.length, 4);
      grpcStreams.forEach(assertReadRowsListenersRemoved);
    });

    it('should surface a synchronous readRows error when reopening ReadRows', async () => {
      stubFirstPage(1);
      let readRowsCalls = 0;
      stubStorageReadClient(bq, {
        readRows: () => {
          if (++readRowsCalls > 1) {
            throw new Error('readRows failed');
          }
          return fakeReadRowsStream([], grpcError('Service unavailable', 14));
        },
      });

      await assert.rejects(
        bq.createQueryArrowStream('SELECT id, name FROM tbl').toArray(),
        /readRows failed/,
      );
      assert.strictEqual(readRowsCalls, 2);
    });
  });

  describe('BigQuery#createQueryArrowStream (arrowSerializationOptions)', () => {
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    it('should default picosTimestampPrecision to TIMESTAMP_PRECISION_MICROS when unset or PICOS_TIMESTAMP_PRECISION_UNSPECIFIED', async () => {
      const getCapturedReq = stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          totalRows: '2',
          pageRowCount: '2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: SAMPLE_PAYLOAD.serializedRecordBatch,
          },
        },
      });

      await bq
        .createQueryArrowStream({
          query: 'SELECT 1',
          arrowSerializationOptions: {
            bufferCompression: 'COMPRESSION_UNSPECIFIED',
            picosTimestampPrecision: 'PICOS_TIMESTAMP_PRECISION_UNSPECIFIED',
          },
        })
        .toArray();

      // Verify PICOS_TIMESTAMP_PRECISION_UNSPECIFIED is normalized to TIMESTAMP_PRECISION_MICROS.
      assert.deepStrictEqual(
        getCapturedReq()?.arrowSerializationOptions,
        DEFAULT_SERIALIZATION_OPTIONS,
      );
    });

    it('should forward explicit picosTimestampPrecision consistently across jobs.query and streams/_default (including stream resumption)', async () => {
      const page1 = serializeArrowTable(makeSampleTable([1], ['alice']));
      const page2 = serializeArrowTable(makeSampleTable([2], ['bob']));
      const getCapturedReq = stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference: {
            projectId: 'test-project',
            jobId: 'job-picos-1',
            location: 'US',
          },
          pageRowCount: '1',
          totalRows: '2',
          arrowSchema: {serializedSchema: page1.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: page1.serializedRecordBatch,
          },
        },
      });

      const requests: ReadRowsRequest[] = [];
      stubStorageReadClient(bq, {
        readRows: req =>
          // Fail the first call so the resumed call is checked too.
          requests.push(req) === 1
            ? fakeReadRowsStream([], grpcError('Service unavailable', 14))
            : fakeReadRowsStream([toReadRowsResponse(page2)]),
      });

      const picos: bigquery.IArrowSerializationOptions = {
        picosTimestampPrecision: 'TIMESTAMP_PRECISION_PICOS',
      };
      await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          arrowSerializationOptions: picos,
        })
        .toArray();

      // Verify jobs.query, the initial ReadRows call, and the resumed ReadRows call all received TIMESTAMP_PRECISION_PICOS.
      assert.deepStrictEqual(
        getCapturedReq()?.arrowSerializationOptions,
        picos,
      );
      const readStream =
        'projects/test-project/locations/US/jobs/job-picos-1/streams/_default';
      assert.deepStrictEqual(requests, [
        {readStream, offset: 1, arrowSerializationOptions: picos},
        {readStream, offset: 1, arrowSerializationOptions: picos},
      ]);
    });

    it('should strip arrowSerializationOptions from jobs.insert configuration.query and forward it to CreateReadSession for destination tables', async () => {
      const fakeJob = bq.job('dest-nanos-1', {location: 'US'});
      fakeJob.metadata = {
        jobReference: {
          projectId: 'test-project',
          jobId: 'dest-nanos-1',
          location: 'US',
        },
        // jobs.insert echoes the destination table in the job configuration.
        configuration: {
          query: {
            destinationTable: {
              projectId: 'test-project',
              datasetId: 'dest_ds',
              tableId: 'dest_tbl_nanos',
            },
          },
        },
      };
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true},
      ]);
      let capturedJobOpts: JobOptions | undefined;
      stubCreateJob(bq, (reqOpts, cb) => {
        capturedJobOpts = reqOpts;
        process.nextTick(() => cb(null, fakeJob, fakeJob.metadata));
      });

      const sessionReqs: CreateReadSessionRequest[] = [];
      const readRowsReqs: ReadRowsRequest[] = [];
      const readStream =
        'projects/test-project/locations/US/sessions/sess-nanos/streams/stream-0';
      stubStorageReadClient(bq, {
        createReadSession: async req => {
          sessionReqs.push(req);
          return [
            {
              arrowSchema: SAMPLE_READ_ROWS_RESPONSE.arrowSchema,
              streams: [{name: readStream}],
            },
          ];
        },
        readRows: req => {
          readRowsReqs.push(req);
          return fakeReadRowsStream([
            {arrowRecordBatch: SAMPLE_READ_ROWS_RESPONSE.arrowRecordBatch},
          ]);
        },
      });

      const nanos: bigquery.IArrowSerializationOptions = {
        picosTimestampPrecision: 'TIMESTAMP_PRECISION_NANOS',
      };
      await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          destination: bq.dataset('dest_ds').table('dest_tbl_nanos'),
          arrowSerializationOptions: nanos,
        })
        .toArray();

      // Verify arrowSerializationOptions was stripped from jobs.insert
      // configuration.query and passed on CreateReadSession instead of
      // ReadRows.
      const queryConfig = capturedJobOpts?.configuration?.query;
      assert.ok(queryConfig);
      assert.strictEqual('arrowSerializationOptions' in queryConfig, false);
      assert.deepStrictEqual(sessionReqs, [
        {
          parent: 'projects/test-project',
          readSession: {
            table:
              'projects/test-project/datasets/dest_ds/tables/dest_tbl_nanos',
            dataFormat: 'ARROW',
            readOptions: {arrowSerializationOptions: nanos},
          },
          maxStreamCount: 1,
        },
      ]);
      assert.deepStrictEqual(readRowsReqs, [{readStream, offset: 0}]);
    });

    it('should reject LZ4_FRAME and ZSTD bufferCompression before sending a query request', async () => {
      const getCapturedReq = stubJobsQuery(bq, {});

      for (const compression of ['LZ4_FRAME', 'ZSTD'] as const) {
        await assert.rejects(
          bq
            .createQueryArrowStream({
              query: 'SELECT 1',
              arrowSerializationOptions: {bufferCompression: compression},
            })
            .toArray(),
          new RegExp(
            `Unsupported arrowSerializationOptions\\.bufferCompression "${compression}"`,
          ),
        );
      }

      // Verify no BigQuery API call was made when bufferCompression is unsupported.
      assert.strictEqual(getCapturedReq(), undefined);
    });
  });

  describe('BigQuery#createQueryArrowStream (maxResults)', () => {
    const jobReference = {
      projectId: 'test-project',
      jobId: 'job-max-1',
      location: 'US',
    };
    let bq: BigQuery;

    beforeEach(() => {
      bq = new BigQuery({projectId: 'test-project'});
    });

    // Stubs createReadSession and readRows, failing the test if ReadRows is
    // opened.
    const stubNoReadRows = (
      session: {arrowSchema?: {serializedSchema?: Uint8Array}} = {},
    ) =>
      stubStorageReadClient(bq, {
        createReadSession: async () => [session],
        readRows: () => assert.fail('ReadRows should not be opened'),
      });

    // Stubs jobs.insert (createJob) to create a finished job with `metadata`.
    const stubFinishedInsertJob = (
      jobId: string,
      metadata?: bigquery.IJob,
    ): (() => JobOptions | undefined) => {
      let capturedJobOpts: JobOptions | undefined;
      const fakeJob = bq.job(jobId, {location: 'US'});
      fakeJob.metadata = {jobReference: {...jobReference, jobId}};
      stubJobGetQueryResults(fakeJob, async () => [
        [],
        null,
        {jobComplete: true},
      ]);
      if (metadata) {
        stubJobGetMetadata(fakeJob, {metadata});
      }
      stubCreateJob(bq, (opts, cb) => {
        capturedJobOpts = opts;
        process.nextTick(() => cb(null, fakeJob, fakeJob.metadata));
      });
      return () => capturedJobOpts;
    };

    it('should slice the inline RecordBatch and skip opening ReadRows when maxResults is reached within the first page', async () => {
      const page1 = serializeArrowTable(
        makeSampleTable([1, 2, 3], ['alice', 'bob', 'carol']),
      );
      const getCapturedReq = stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference,
          pageRowCount: '3',
          totalRows: '10',
          arrowSchema: {serializedSchema: page1.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: page1.serializedRecordBatch,
          },
        },
      });
      stubNoReadRows();

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          maxResults: 2,
        })
        .toArray();

      // Verify maxResults was forwarded to jobs.query and the 3-row inline
      // batch was sliced to 2 rows.
      assert.strictEqual(getCapturedReq()?.maxResults, 2);
      const table = new arrow.Table(batches);
      assert.deepStrictEqual(
        Array.from(table.getChild('id')!.toArray()),
        [1, 2],
      );
      assert.deepStrictEqual(table.getChild('name')?.toJSON(), [
        'alice',
        'bob',
      ]);
    });

    it('should count rows across the inline page and ReadRows stream, slice the batch that reaches maxResults, and cancel the active ReadRows stream', async () => {
      const page1 = serializeArrowTable(
        makeSampleTable([1, 2], ['alice', 'bob']),
      );
      stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference,
          pageRowCount: '2',
          totalRows: '9',
          arrowSchema: {serializedSchema: page1.serializedSchema},
          arrowRecordBatch: {
            serializedRecordBatch: page1.serializedRecordBatch,
          },
        },
      });

      let cancelled = false;
      const requests: ReadRowsRequest[] = [];
      let grpcStream: EventEmitter | undefined;
      stubStorageReadClient(bq, {
        readRows: req => {
          requests.push(req);
          grpcStream = Object.assign(
            fakeReadRowsStream(
              [
                makeSampleTable([3, 4], ['carol', 'dave']),
                makeSampleTable([5, 6, 7], ['erin', 'frank', 'grace']),
                makeSampleTable([8, 9], ['heidi', 'ivan']),
              ].map(t => toReadRowsResponse(serializeArrowTable(t))),
            ),
            {
              cancel: () => {
                cancelled = true;
              },
            },
          );
          return grpcStream;
        },
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          maxResults: 5,
        })
        .toArray();

      // Verify 2 inline rows + 2 streamed rows + 1 sliced row = 5 rows, and
      // ReadRows was cancelled with none of our listeners left on it.
      assert.deepStrictEqual(
        requests.map(req => req.offset),
        [2],
      );
      const table = new arrow.Table(batches);
      assert.deepStrictEqual(
        Array.from(table.getChild('id')!.toArray()),
        [1, 2, 3, 4, 5],
      );
      assert.strictEqual(cancelled, true);
      assertReadRowsListenersRemoved(grpcStream!);
    });

    it('should emit a 0-row RecordBatch preserving schema without calling ReadRows when maxResults is 0', async () => {
      const getCapturedReq = stubJobsQuery(bq, {
        res: {
          jobComplete: true,
          jobReference,
          totalRows: '10',
          pageToken: 'page-2',
          arrowSchema: {serializedSchema: SAMPLE_PAYLOAD.serializedSchema},
        },
      });
      stubNoReadRows();

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          maxResults: 0,
        })
        .toArray();

      assert.strictEqual(getCapturedReq()?.maxResults, 0);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
    });

    it('should read the schema from the job when maxResults is 0 and jobs.query returns no arrowSchema', async () => {
      const fakeJob = bq.job(jobReference.jobId, {location: 'US'});
      stubJobGetMetadata(fakeJob, {
        metadata: {
          jobReference,
          configuration: {
            query: {
              destinationTable: {
                projectId: 'test-project',
                datasetId: '_anon',
                tableId: 'anon_tbl',
              },
            },
          },
        },
      });
      stubJobsQuery(bq, {
        job: fakeJob,
        res: {
          jobComplete: true,
          jobReference,
          totalRows: '10',
          pageToken: 'p2',
        },
      });
      stubNoReadRows({arrowSchema: SAMPLE_READ_ROWS_RESPONSE.arrowSchema});

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          maxResults: 0,
        })
        .toArray();

      // Verify the 0-row batch carries the schema of the job's result table.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
    });

    it('should reject a maxResults that is not a non-negative integer before sending a query', async () => {
      const getCapturedReq = stubJobsQuery(bq, {});
      for (const maxResults of [NaN, -1, 1.5]) {
        await assert.rejects(
          bq.createQueryArrowStream({query: 'SELECT 1', maxResults}).toArray(),
          /maxResults must be a non-negative integer/,
        );
      }
      assert.strictEqual(getCapturedReq(), undefined);
    });

    it('should strip maxResults from jobs.insert configuration.query and enforce it on ReadRows', async () => {
      const getCapturedJobOpts = stubFinishedInsertJob('job-insert-max');
      stubStorageReadClient(bq, {
        readRows: () => fakeReadRowsStream([SAMPLE_READ_ROWS_RESPONSE]),
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          jobTimeoutMs: 5000,
          maxResults: 1,
        })
        .toArray();

      const queryConfig = getCapturedJobOpts()?.configuration?.query;
      assert.ok(queryConfig);
      assert.strictEqual('maxResults' in queryConfig, false);
      assert.strictEqual(batches.length, 1);
      assert.deepStrictEqual(
        Array.from(batches[0].getChild('id')!.toArray()),
        [1],
      );
    });

    it('should read the schema from the destination table without calling ReadRows when maxResults is 0 on jobs.insert', async () => {
      stubFinishedInsertJob('job-insert-max-zero', {
        jobReference: {...jobReference, jobId: 'job-insert-max-zero'},
        configuration: {
          query: {
            destinationTable: {
              projectId: 'test-project',
              datasetId: '_anon',
              tableId: 'anon_tbl',
            },
          },
        },
      });
      const sessionTables: string[] = [];
      stubStorageReadClient(bq, {
        createReadSession: async req => {
          sessionTables.push(req.readSession.table);
          return [{arrowSchema: SAMPLE_READ_ROWS_RESPONSE.arrowSchema}];
        },
        readRows: () => assert.fail('ReadRows should not be opened'),
      });

      const batches: arrow.RecordBatch[] = await bq
        .createQueryArrowStream({
          query: 'SELECT id, name FROM tbl',
          jobTimeoutMs: 5000,
          maxResults: 0,
        })
        .toArray();

      assert.deepStrictEqual(sessionTables, [
        'projects/test-project/datasets/_anon/tables/anon_tbl',
      ]);
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['id', 'name'],
      );
    });
  });
});
