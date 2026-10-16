/*!
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ResourceStream} from '@google-cloud/paginator';
import type {RecordBatch, Schema} from 'apache-arrow';
import type {BigQuery, Query} from './bigquery';
import type {Job} from './job';
import type bigquery from './types';

type ArrowModule = typeof import('apache-arrow');

interface IReadRowsResponse {
  arrowSchema?: {
    serializedSchema?: Uint8Array | string | null;
  } | null;
  arrowRecordBatch?: {
    serializedRecordBatch?: Uint8Array | string | null;
  } | null;
}

interface ReadRowsStream extends NodeJS.EventEmitter {
  cancel(): void;
  pause(): void;
  resume(): void;
}

export interface IReadSession {
  arrowSchema?: {
    serializedSchema?: Uint8Array | string | null;
  } | null;
  streams?: Array<{
    name?: string | null;
  }> | null;
}

export interface CreateReadSessionRequest {
  parent: string;
  readSession: {
    table: string;
    dataFormat: 'ARROW';
    readOptions?: {
      arrowSerializationOptions?: bigquery.IArrowSerializationOptions;
    };
  };
  maxStreamCount: number;
}

export interface BigQueryReadClient {
  createReadSession(
    request: CreateReadSessionRequest,
    callback: (err: Error | null, session?: IReadSession | null) => void,
  ): void;
  readRows(request: {
    readStream: string;
    offset?: number;
    arrowSerializationOptions?: bigquery.IArrowSerializationOptions;
  }): ReadRowsStream;
}

export interface StorageModule {
  BigQueryReadClient: new (
    options?: Record<string, unknown>,
  ) => BigQueryReadClient;
  protos?: {
    google: {
      cloud: {
        bigquery: {
          storage: {v1: {ReadRowsRequest: {prototype: object}}};
        };
      };
    };
  };
}

/**
 * [Beta] A stream of Apache Arrow `RecordBatch` objects returned by
 * {@link BigQuery#createQueryArrowStream}.
 *
 * `queryId` and `jobReference` are set once BigQuery responds to the query,
 * before the first batch is emitted.
 *
 * @beta
 */
export type ArrowRecordBatchStream = ResourceStream<RecordBatch> & {
  /** The query ID, when the query runs through `jobs.query`. */
  queryId?: string;
  /** The job reference, when BigQuery creates a job for the query. */
  jobReference?: bigquery.IJobReference;
};

/**
 * [Beta] Options for {@link BigQuery#createQueryArrowStream}: the
 * {@link Query} options plus options that only apply to Arrow queries.
 *
 * @beta
 */
export type ArrowQuery = Query & {
  /**
   * How long to wait for the query to complete, in milliseconds. If it doesn't
   * complete in time, the stream fails. If unset or 0, the stream waits until
   * the job completes.
   */
  timeoutMs?: number;
  /**
   * [Beta] Arrow serialization options sent on `jobs.query`, `ReadRows`, and
   * `CreateReadSession`, such as `picosTimestampPrecision`. Buffer compression
   * isn't supported.
   */
  arrowSerializationOptions?: ArrowSerializationOptions;
};

/**
 * [Beta] Arrow serialization options for
 * {@link BigQuery#createQueryArrowStream}.
 *
 * @beta
 */
export type ArrowSerializationOptions = bigquery.IArrowSerializationOptions;

/**
 * State shared by the helpers that stream rows for one
 * {@link BigQuery#createQueryArrowStream} call.
 */
interface ArrowStreamContext {
  bq: BigQuery;
  arrow: ArrowModule;
  storage: StorageModule;
  stream: ArrowRecordBatchStream;
  arrowSerializationOptions: ArrowSerializationOptions;
  /** Called when the consumer wants more batches. */
  onRead?: () => void;
  /** Rows left before the caller's `maxResults` limit; unset when unlimited. */
  remainingRows?: number;
}

const readClients = new WeakMap<BigQuery, BigQueryReadClient>();

// gRPC status codes safe to resume from a row offset on ReadRows.
const GRPC_STATUS_DEADLINE_EXCEEDED = 4;
const GRPC_STATUS_INTERNAL = 13;
const GRPC_STATUS_UNAVAILABLE = 14;

// How many times in a row a failed ReadRows call is reopened before the
// error is passed to the caller. Any received batch resets the count.
const MAX_STREAM_RETRIES = 3;
// Delay before the first reopen, doubled for each consecutive retry.
const RETRY_BASE_DELAY_MS = 100;

/**
 * Validates and normalizes `arrowSerializationOptions`, rejecting compressed
 * Arrow buffers (`apache-arrow` doesn't bundle LZ4 or ZSTD codecs) and
 * defaulting `picosTimestampPrecision` to
 * `'TIMESTAMP_PRECISION_MICROS'`.
 *
 * @private
 */
function resolveArrowSerializationOptions(
  options?: ArrowSerializationOptions,
): ArrowSerializationOptions {
  if (
    options?.bufferCompression &&
    options.bufferCompression !== 'COMPRESSION_UNSPECIFIED'
  ) {
    throw new Error(
      `Unsupported arrowSerializationOptions.bufferCompression "${options.bufferCompression}": ` +
        'apache-arrow does not bundle LZ4 or ZSTD decompression codecs.',
    );
  }
  const precision = options?.picosTimestampPrecision;
  return {
    picosTimestampPrecision:
      precision && precision !== 'PICOS_TIMESTAMP_PRECISION_UNSPECIFIED'
        ? precision
        : 'TIMESTAMP_PRECISION_MICROS',
  };
}

/**
 * Throws if `options` request a non-default timestamp precision that the
 * installed `@google-cloud/bigquery-storage` can't send on `ReadRows`.
 * Releases whose `ReadRowsRequest` lacks `arrowSerializationOptions` (from
 * `@google-cloud/bigquery-storage-api` < 0.5.0) silently drop it, so rows read
 * after the first page would come back at microsecond precision. Remove this
 * check with the minimum version bump in {@link checkArrowDependencies}.
 *
 * @private
 */
function assertReadRowsSupportsOptions(
  storage: StorageModule,
  options: ArrowSerializationOptions,
): void {
  if (options.picosTimestampPrecision === 'TIMESTAMP_PRECISION_MICROS') {
    return;
  }
  const readRowsRequest =
    storage.protos?.google.cloud.bigquery.storage.v1.ReadRowsRequest;
  if (
    readRowsRequest &&
    Object.prototype.hasOwnProperty.call(
      readRowsRequest.prototype,
      'arrowSerializationOptions',
    )
  ) {
    return;
  }
  throw new Error(
    `arrowSerializationOptions.picosTimestampPrecision "${options.picosTimestampPrecision}" ` +
      'requires an @google-cloud/bigquery-storage release that sends ' +
      'arrowSerializationOptions on ReadRows (@google-cloud/bigquery-storage-api >= 0.5.0). ' +
      'Please upgrade using: npm install @google-cloud/bigquery-storage@latest',
  );
}

/**
 * Returns the first project ID from `candidates`, falling back to the
 * `BigQuery` client's project and ignoring the uninitialized `'{{projectId}}'`
 * placeholder.
 *
 * @private
 */
function resolveProjectId(
  bq: BigQuery,
  ...candidates: Array<string | null | undefined>
): string | undefined {
  for (const candidate of [...candidates, bq.projectId]) {
    if (candidate && candidate !== '{{projectId}}') {
      return candidate;
    }
  }
  return undefined;
}

/**
 * Requires a dependency and verifies its minimum major.minor version.
 *
 * @private
 */
function requireWithMinVersion<T = unknown>(
  requireFn: NodeRequire,
  pkgName: string,
  minMajor: number,
  minMinor = 0,
): T {
  const minVersion = `${minMajor}.${minMinor}.0`;
  let mod: T;
  let pkg: {version?: string};
  try {
    mod = requireFn(pkgName);
    pkg = requireFn(`${pkgName}/package.json`);
  } catch (err) {
    throw new Error(
      `Arrow support requires the "${pkgName}" package (>= ${minVersion}), ` +
        `but it could not be loaded: ${(err as Error).message}. ` +
        `Please install it using: npm install ${pkgName}`,
      {cause: err},
    );
  }

  const [majorStr, minorStr] = (pkg.version || '0.0.0').split('.');
  const major = Number.parseInt(majorStr, 10);
  const minor = Number.parseInt(minorStr, 10);
  const versionOk =
    !Number.isNaN(major) &&
    (major > minMajor ||
      (major === minMajor && !Number.isNaN(minor) && minor >= minMinor));

  if (!versionOk) {
    throw new Error(
      `Arrow support requires "${pkgName}" >= ${minVersion} (found ${pkg.version || 'unknown'}). ` +
        `Please upgrade using: npm install ${pkgName}@latest`,
    );
  }
  return mod;
}

/**
 * Loads `apache-arrow` and the optional `@google-cloud/bigquery-storage`
 * (>= 6.1.0) package, verifying the latter's version.
 *
 * `apache-arrow` is a regular dependency, so its version is guaranteed by
 * `package.json`. It is loaded lazily so that only Arrow callers pay for it.
 *
 * @private
 */
export function checkArrowDependencies(requireFn: NodeRequire = require): {
  arrow: ArrowModule;
  storage: StorageModule;
} {
  const arrow: ArrowModule = requireFn('apache-arrow');
  // Package managers only warn when an installed version is outside an
  // optional peer range, and an older version's protos silently drop newer
  // request fields, so check the version here.
  // TODO: Bump minimum version (here and in package.json) once
  // @google-cloud/bigquery-storage is released with
  // @google-cloud/bigquery-storage-api >= 0.5.0.
  const storage = requireWithMinVersion<StorageModule>(
    requireFn,
    '@google-cloud/bigquery-storage',
    6,
    1,
  );
  return {arrow, storage};
}

/**
 * Returns the shared `BigQueryReadClient` for a `BigQuery` instance, creating
 * it lazily on first use with the `BigQuery` client's credentials, universe
 * domain, and gRPC keepalive settings.
 *
 * @private
 */
export function getStorageReadClient(
  bq: BigQuery,
  storage: StorageModule,
): BigQueryReadClient {
  let client = readClients.get(bq);
  if (!client) {
    client = new storage.BigQueryReadClient({
      auth: bq.authClient,
      projectId: resolveProjectId(bq),
      universeDomain: bq.universeDomain,
      // Ping while ReadRows is paused for a slow consumer, so a connection
      // silently dropped by a proxy or NAT errors instead of hanging.
      'grpc.keepalive_time_ms': 60_000,
      'grpc.keepalive_timeout_ms': 60_000,
    });
    readClients.set(bq, client);
  }
  return client;
}

/**
 * Converts a serialized Arrow IPC payload (base64 string or Uint8Array) to a
 * Uint8Array.
 *
 * @private
 */
function toUint8Array(serialized: Uint8Array | string): Uint8Array {
  return typeof serialized === 'string'
    ? Buffer.from(serialized, 'base64')
    : serialized;
}

/**
 * Creates a 0-row `RecordBatch` that preserves the provided Arrow `Schema`.
 *
 * @private
 */
export function createEmptyRecordBatch(
  arrow: ArrowModule,
  schema: Schema,
): RecordBatch {
  // Use makeBuilder so apache-arrow allocates valid 0-length typed array
  // buffers for every column (including nested Struct and List fields).
  const structData = arrow
    .makeBuilder({type: new arrow.Struct(schema.fields)})
    .finish()
    .flush();
  return new arrow.RecordBatch(schema, structData);
}

/**
 * Decodes serialized Arrow IPC schema and record batch bytes into `RecordBatch`
 * objects, emitting a single 0-row `RecordBatch` (preserving `schema` when
 * present) if no record batches are present.
 *
 * @private
 */
export function decodeArrowPayload(
  arrow: ArrowModule,
  serializedSchema?: Uint8Array | string,
  serializedRecordBatch?: Uint8Array | string,
): RecordBatch[] {
  if (!serializedSchema) {
    return [new arrow.RecordBatch({})];
  }
  // BigQuery returns the Arrow IPC Schema message and RecordBatch message as
  // separate fields; the reader accepts them as consecutive chunks of one IPC
  // stream, which avoids copying them into a single buffer.
  const chunks = serializedRecordBatch
    ? [toUint8Array(serializedSchema), toUint8Array(serializedRecordBatch)]
    : [toUint8Array(serializedSchema)];
  const reader = arrow.RecordBatchReader.from(chunks);
  reader.open();
  // With no record batch, the reader yields its own 0-row placeholder batch,
  // which leaves nested Struct children empty and List children undefined.
  return serializedRecordBatch
    ? [...reader]
    : [createEmptyRecordBatch(arrow, reader.schema)];
}

/**
 * Emits a 0-row `RecordBatch` (preserving `serializedSchema` when present) and
 * ends `stream`.
 *
 * @private
 */
function emitZeroRowBatchAndEnd(
  arrow: ArrowModule,
  stream: ArrowRecordBatchStream,
  serializedSchema?: Uint8Array | string,
): void {
  try {
    for (const batch of decodeArrowPayload(arrow, serializedSchema)) {
      if (stream._ended || stream.destroyed) {
        return;
      }
      stream.push(batch);
    }
    if (!stream._ended && !stream.destroyed) {
      stream.end();
    }
  } catch (parseErr) {
    stream.destroy(parseErr as Error);
  }
}

/**
 * Returns `true` once the caller's `maxResults` limit allows no more rows.
 *
 * @private
 */
function isRowLimitReached(ctx: ArrowStreamContext): boolean {
  return ctx.remainingRows !== undefined && ctx.remainingRows <= 0;
}

/**
 * Applies the caller's row limit (`ctx.remainingRows`) to `batch`, returning
 * the batch (sliced if it crosses the limit) and whether the limit is reached.
 *
 * @private
 */
function applyRowLimit(
  ctx: ArrowStreamContext,
  batch: RecordBatch,
): {batch: RecordBatch; limitReached: boolean} {
  const {remainingRows} = ctx;
  if (remainingRows === undefined || batch.numRows === 0) {
    return {batch, limitReached: false};
  }
  if (batch.numRows >= remainingRows) {
    ctx.remainingRows = 0;
    return {
      batch:
        batch.numRows > remainingRows ? batch.slice(0, remainingRows) : batch,
      limitReached: true,
    };
  }
  ctx.remainingRows = remainingRows - batch.numRows;
  return {batch, limitReached: false};
}

/**
 * Streams Arrow `RecordBatch`es from a job's sessionless default stream
 * (`projects/{projectId}/locations/{location}/jobs/{jobId}/streams/_default`)
 * starting at `offset`. Pass the finished `job` when reading from offset 0 so
 * a result without rows keeps its schema (see {@link readDestinationSchema}).
 *
 * @private
 */
function streamDefaultJobStream(
  ctx: ArrowStreamContext,
  jobRef: bigquery.IJobReference | undefined,
  offset: number,
  initialSchema?: Uint8Array | string,
  job?: Job,
): void {
  const {bq, stream} = ctx;
  const projectId = resolveProjectId(bq, jobRef?.projectId);
  const jobId = jobRef?.jobId;
  const location = jobRef?.location || bq.location;

  if (!projectId || !jobId || !location) {
    stream.destroy(
      new Error('Cannot stream remaining Arrow rows without a jobReference.'),
    );
    return;
  }

  const readStream = `projects/${projectId}/locations/${location}/jobs/${jobId}/streams/_default`;
  streamReadRows(ctx, {
    readStream,
    offset,
    initialSchema,
    includeSerializationOptions: true,
    job,
  });
}

/**
 * Creates an Arrow read session with a single stream on `table`, billed to
 * `parentProjectId`.
 *
 * @private
 */
function createArrowReadSession(
  ctx: ArrowStreamContext,
  parentProjectId: string | undefined,
  table: bigquery.ITableReference,
  callback: (err: Error | null, session?: IReadSession) => void,
): void {
  let readClient: BigQueryReadClient;
  try {
    readClient = getStorageReadClient(ctx.bq, ctx.storage);
  } catch (err) {
    callback(err as Error);
    return;
  }
  readClient.createReadSession(
    {
      parent: `projects/${parentProjectId}`,
      readSession: {
        table: `projects/${table.projectId}/datasets/${table.datasetId}/tables/${table.tableId}`,
        dataFormat: 'ARROW',
        readOptions: {
          arrowSerializationOptions: ctx.arrowSerializationOptions,
        },
      },
      // One stream keeps rows in the query's order (e.g., ORDER BY).
      maxStreamCount: 1,
    },
    (err, session) => callback(err, session ?? undefined),
  );
}

/**
 * Reads the Arrow schema of a finished query job's results from its
 * destination table. The default job stream sends no `ReadRowsResponse`, and
 * so no schema, for a result without rows, but a read session on the
 * destination table still returns it. Statements without a result table
 * (e.g., DML) have no destination table, so `callback` gets no schema.
 *
 * @private
 */
function readDestinationSchema(
  ctx: ArrowStreamContext,
  job: Job,
  callback: (err: Error | null, schema?: Uint8Array | string) => void,
): void {
  const {bq} = ctx;
  // A script's destination table is only set once the job finishes, so read
  // the job's current metadata instead of the response that created it.
  void job.getMetadata((err: Error | null, metadata?: bigquery.IJob) => {
    if (err) {
      callback(err);
      return;
    }
    const destRef = metadata?.configuration?.query?.destinationTable;
    if (!destRef) {
      callback(null);
      return;
    }
    createArrowReadSession(
      ctx,
      resolveProjectId(
        bq,
        metadata?.jobReference?.projectId,
        destRef.projectId,
      ),
      destRef,
      (err, session) => {
        callback(err, session?.arrowSchema?.serializedSchema || undefined);
      },
    );
  });
}

/**
 * Returns `true` if a `ReadRows` gRPC stream error is transient and safe to
 * resume from the next unread row offset.
 *
 * @private
 */
function isRetryableStreamError(err: Error & {code?: number}): boolean {
  if (
    err.code === GRPC_STATUS_DEADLINE_EXCEEDED ||
    err.code === GRPC_STATUS_UNAVAILABLE
  ) {
    return true;
  }
  // Long-lived HTTP/2 streams closed by the server with RST_STREAM surface as
  // INTERNAL (code 13) in gRPC and are safe to reconnect at the next offset.
  if (err.code === GRPC_STATUS_INTERNAL && err.message.includes('RST_STREAM')) {
    return true;
  }
  return false;
}

/**
 * Ends the stream with a single 0-row `RecordBatch` carrying `schema`, or the
 * schema of `job`'s destination table when `schema` isn't known.
 *
 * @private
 */
function endWithSchemaOnly(
  ctx: ArrowStreamContext,
  schema: Uint8Array | string | undefined,
  job: Job | undefined,
): void {
  const {arrow, stream} = ctx;
  if (schema || !job) {
    emitZeroRowBatchAndEnd(arrow, stream, schema);
    return;
  }
  readDestinationSchema(ctx, job, (err, destSchema) => {
    if (stream._ended || stream.destroyed) {
      return;
    }
    if (err) {
      stream.destroy(err);
      return;
    }
    emitZeroRowBatchAndEnd(arrow, stream, destSchema);
  });
}

/**
 * Streams Arrow `RecordBatch`es from a Storage Read API stream starting at
 * `offset`, pausing `ReadRows` while the consumer is behind and resuming at
 * `offset + rowsReceived` if the gRPC stream fails with a retryable error.
 *
 * @private
 */
function streamReadRows(
  ctx: ArrowStreamContext,
  options: {
    readStream: string;
    offset: number;
    initialSchema?: Uint8Array | string;
    includeSerializationOptions?: boolean;
    /** The finished job, to read the schema of a result without rows. */
    job?: Job;
  },
): void {
  const {bq, arrow, storage, stream, arrowSerializationOptions} = ctx;
  const {readStream, offset, initialSchema, includeSerializationOptions, job} =
    options;

  // maxResults is 0: emit only the schema without opening ReadRows.
  if (isRowLimitReached(ctx)) {
    endWithSchemaOnly(ctx, initialSchema, job);
    return;
  }

  let readClient: BigQueryReadClient;
  try {
    readClient = getStorageReadClient(bq, storage);
  } catch (err) {
    stream.destroy(err as Error);
    return;
  }

  let activeGrpcStream: ReadRowsStream | undefined;
  let detachActiveGrpcStream: (() => void) | undefined;
  let retryTimer: NodeJS.Timeout | undefined;

  // Cancel only the active ReadRows gRPC stream if the caller ends iteration
  // early, keeping the shared BigQueryReadClient open for subsequent queries.
  let finished = false;
  const cancelGrpcStream = () => {
    if (!finished) {
      finished = true;
      clearTimeout(retryTimer);
      detachActiveGrpcStream?.();
      activeGrpcStream?.cancel();
    }
  };
  stream.once('close', cancelGrpcStream);

  const fail = (err: Error) => {
    stream.removeListener('close', cancelGrpcStream);
    finished = true;
    stream.destroy(err);
  };

  // ReadRows is paused when push() reports a full buffer; resume it when the
  // consumer asks for more so slow consumers don't buffer the whole result.
  ctx.onRead = () => activeGrpcStream?.resume();

  let serializedSchema: Uint8Array | undefined = initialSchema
    ? toUint8Array(initialSchema)
    : undefined;
  let emittedBatch = false;
  let currentOffset = offset;
  let retries = 0;

  const openGrpcStream = () => {
    let grpcStream: ReadRowsStream;
    try {
      grpcStream = readClient.readRows({
        readStream,
        offset: currentOffset,
        ...(includeSerializationOptions ? {arrowSerializationOptions} : {}),
      });
    } catch (err) {
      fail(err as Error);
      return;
    }
    activeGrpcStream = grpcStream;

    const onData = (resp: IReadRowsResponse) => {
      if (stream._ended || stream.destroyed) {
        cancelGrpcStream();
        return;
      }
      // The Storage Read API sends arrowSchema on the first ReadRowsResponse and
      // may also emit responses without record batch bytes (e.g., heartbeats).
      if (resp.arrowSchema?.serializedSchema) {
        serializedSchema = toUint8Array(resp.arrowSchema.serializedSchema);
      }
      const rawBatch = resp.arrowRecordBatch?.serializedRecordBatch;
      const hasBatchBytes =
        rawBatch &&
        (typeof rawBatch === 'string'
          ? rawBatch.length > 0
          : rawBatch.byteLength > 0);
      if (!hasBatchBytes) {
        return;
      }
      try {
        const batches = decodeArrowPayload(arrow, serializedSchema, rawBatch);
        for (const batch of batches) {
          if (stream._ended || stream.destroyed) {
            cancelGrpcStream();
            return;
          }
          // A reconnect resumes at the next unread row, and any progress
          // resets the count of consecutive retries.
          retries = 0;
          currentOffset += batch.numRows;
          emittedBatch = true;
          const limited = applyRowLimit(ctx, batch);
          if (!stream.push(limited.batch)) {
            grpcStream.pause();
          }
          if (limited.limitReached) {
            cancelGrpcStream();
            stream.end();
            return;
          }
        }
      } catch (parseErr) {
        cancelGrpcStream();
        stream.destroy(parseErr as Error);
      }
    };

    const onError = (err: Error & {code?: number}) => {
      if (finished || stream._ended || stream.destroyed) {
        return;
      }
      if (isRetryableStreamError(err) && retries < MAX_STREAM_RETRIES) {
        // Abandon the failed stream and reopen ReadRows from currentOffset.
        retries++;
        detach();
        // Wait before reopening so a brief network blip doesn't use up every
        // retry at once.
        retryTimer = setTimeout(
          openGrpcStream,
          RETRY_BASE_DELAY_MS * 2 ** (retries - 1),
        );
        return;
      }
      fail(err);
    };

    const onEnd = () => {
      stream.removeListener('close', cancelGrpcStream);
      finished = true;
      if (stream._ended || stream.destroyed) {
        return;
      }
      // When reading from offset = 0 (e.g., after waiting for an unfinished job)
      // and the stream finishes with 0 rows, still emit a 0-row RecordBatch.
      if (offset === 0 && !emittedBatch) {
        endWithSchemaOnly(ctx, serializedSchema, job);
        return;
      }
      stream.end();
    };

    // Removes only our listeners from an abandoned stream. A cancelled
    // google-gax stream emits a gRPC CANCELLED (code 1) 'error' later, and an
    // 'error' event with no listener would crash the process.
    const detach = () => {
      grpcStream.removeListener('data', onData);
      grpcStream.removeListener('error', onError);
      grpcStream.removeListener('end', onEnd);
      grpcStream.on('error', () => {});
    };
    detachActiveGrpcStream = detach;

    grpcStream.on('data', onData);
    grpcStream.on('error', onError);
    grpcStream.on('end', onEnd);
  };

  openGrpcStream();
}

/**
 * Creates a Storage Read API session for an explicit destination table and
 * streams Arrow `RecordBatch`es from its single stream.
 *
 * @private
 */
function streamDestinationTable(
  ctx: ArrowStreamContext,
  jobRef: bigquery.IJobReference | undefined,
  table: bigquery.ITableReference,
): void {
  const {bq, arrow, stream} = ctx;
  // The session is billed to the job's project; the table can be in another.
  createArrowReadSession(
    ctx,
    resolveProjectId(bq, jobRef?.projectId),
    table,
    (err, session) => {
      if (err) {
        stream.destroy(err);
        return;
      }
      if (stream._ended || stream.destroyed) {
        return;
      }

      const sessionSchema = session?.arrowSchema?.serializedSchema || undefined;
      const readStream = session?.streams?.[0]?.name;
      if (!readStream) {
        // An empty destination table returns 0 streams; emit a single 0-row
        // RecordBatch carrying the session's Arrow schema.
        emitZeroRowBatchAndEnd(arrow, stream, sessionSchema);
        return;
      }

      // Session streams inherit arrowSerializationOptions from CreateReadSession;
      // ReadRowsRequest.arrowSerializationOptions is only supported on streams/_default.
      streamReadRows(ctx, {
        readStream,
        offset: 0,
        initialSchema: sessionSchema,
      });
    },
  );
}

/**
 * Waits for an unfinished BigQuery job to complete using `job.getQueryResults`
 * without fetching any `STRUCT_ENCODING` rows (`maxResults: 0`). If `timeoutMs`
 * is set, fails like {@link BigQuery#query} when the job doesn't complete in
 * time instead of polling again.
 *
 * @private
 */
function waitForJobCompletion(
  job: Job,
  stream: ArrowRecordBatchStream,
  onComplete: () => void,
  timeoutMs?: number,
): void {
  const poll = () => {
    if (stream._ended || stream.destroyed) {
      return;
    }
    // Set maxResults: 0 so jobs.getQueryResults blocks up to the server's
    // default wait interval and surfaces job errors without returning JSON rows.
    job.getQueryResults(
      {
        autoPaginate: false,
        maxResults: 0,
        // 0 means no limit, as in BigQuery#query. Sending 0 would make
        // jobs.getQueryResults return at once and this loop spin.
        ...(timeoutMs && {timeoutMs}),
      },
      (err, _rows, _nextQuery, res) => {
        if (err) {
          stream.destroy(err);
          return;
        }
        if (stream._ended || stream.destroyed) {
          return;
        }
        if (res?.jobComplete === false) {
          poll();
          return;
        }
        onComplete();
      },
    );
  };
  poll();
}

/**
 * Executes a query and returns a stream of `apache-arrow` `RecordBatch` objects.
 *
 * @private
 */
export function createQueryArrowStream_(
  bq: BigQuery,
  query?: ArrowQuery | string,
): ArrowRecordBatchStream {
  const stream = new ResourceStream<RecordBatch>(
    {},
    () => {},
  ) as ArrowRecordBatchStream;

  let started = false;
  // Set once the query starts, so later reads can resume the active ReadRows.
  let readCtx: ArrowStreamContext | undefined;
  stream._read = () => {
    if (started) {
      readCtx?.onRead?.();
      return;
    }
    started = true;

    let arrow: ArrowModule;
    let storage: StorageModule;
    try {
      ({arrow, storage} = checkArrowDependencies());
    } catch (err) {
      stream.destroy(err as Error);
      return;
    }

    if (!query || (typeof query === 'object' && !query.query)) {
      stream.destroy(new Error('A SQL query string is required.'));
      return;
    }

    // Keep arrowSerializationOptions and maxResults out of queryObj so they
    // never reach the jobs.insert configuration; they're applied explicitly.
    const {
      arrowSerializationOptions: requestedSerializationOptions,
      maxResults,
      ...queryObj
    }: ArrowQuery = typeof query === 'string' ? {query} : query;

    // NaN would never reach the row limit, and a negative limit would run
    // the whole query just to return no rows.
    if (
      maxResults !== undefined &&
      (!Number.isInteger(maxResults) || maxResults < 0)
    ) {
      stream.destroy(new Error('maxResults must be a non-negative integer.'));
      return;
    }

    let arrowSerializationOptions: ArrowSerializationOptions;
    try {
      arrowSerializationOptions = resolveArrowSerializationOptions(
        requestedSerializationOptions,
      );
      // Destination tables read through a read session, which takes the
      // options on CreateReadSession instead of ReadRows.
      if (!queryObj.destination) {
        assertReadRowsSupportsOptions(storage, arrowSerializationOptions);
      }
    } catch (err) {
      stream.destroy(err as Error);
      return;
    }

    const ctx: ArrowStreamContext = {
      bq,
      arrow,
      storage,
      stream,
      arrowSerializationOptions,
      remainingRows: maxResults,
    };
    readCtx = ctx;

    let queryReq: bigquery.IQueryRequest | undefined;
    try {
      queryReq = bq.buildQueryRequest_(queryObj, {
        timeoutMs: queryObj.timeoutMs,
      });
    } catch (err) {
      // For example, invalid query parameters.
      stream.destroy(err as Error);
      return;
    }
    if (!queryReq) {
      // buildQueryRequest_ returns undefined when the query sets an option
      // that only jobs.insert accepts (e.g., destination, jobId, dryRun, or
      // jobTimeoutMs), or when FAST_QUERY_PATH=DISABLED. timeoutMs only bounds
      // the wait below, and jobCreationMode only applies to jobs.query, so
      // keep both out of the job configuration.
      const {timeoutMs, ...jobQuery} = queryObj;
      delete jobQuery.jobCreationMode;
      try {
        bq.createQueryJob(jobQuery, (err, job, resp) => {
          if (err || !job) {
            stream.destroy(err ?? new Error('jobs.insert returned no job.'));
            return;
          }

          stream.jobReference = resp?.jobReference;
          // For a dry run, job.metadata holds the query's statistics.
          stream.emit('job', job);

          // A dry run validates the query without running it.
          if (queryObj.dryRun) {
            emitZeroRowBatchAndEnd(arrow, stream);
            return;
          }

          // Wait for the job to finish, then read the explicit destination
          // table through a read session, or streams/_default at offset = 0.
          waitForJobCompletion(
            job,
            stream,
            () => {
              // BigQuery echoes the caller's destination table, with its
              // resolved project, in the job's configuration.
              const destinationTable =
                resp?.configuration?.query?.destinationTable;
              if (queryObj.destination && destinationTable) {
                streamDestinationTable(
                  ctx,
                  resp?.jobReference,
                  destinationTable,
                );
                return;
              }
              streamDefaultJobStream(
                ctx,
                resp?.jobReference,
                0,
                undefined,
                job,
              );
            },
            timeoutMs,
          );
        });
      } catch (err) {
        // For example, a destination that isn't a Table, or invalid parameters.
        stream.destroy(err as Error);
      }
      return;
    }

    // Default to JOB_CREATION_OPTIONAL unless overridden on the query or client.
    if (!queryReq.jobCreationMode) {
      queryReq.jobCreationMode = 'JOB_CREATION_OPTIONAL';
    }
    queryReq.queryResultsFormat = 'ARROW';
    queryReq.arrowSerializationOptions = arrowSerializationOptions;
    // Set directly: buildQueryRequest_ drops a maxResults of 0.
    queryReq.maxResults = maxResults;

    void bq.runJobsQuery(queryReq, (err, job, res) => {
      if (err) {
        stream.destroy(err);
        return;
      }

      if (res?.queryId) {
        stream.queryId = res.queryId;
      }
      if (res?.jobReference && job) {
        stream.jobReference = res.jobReference;
        stream.emit('job', job);
      }

      if (res?.jobComplete === false) {
        // Match BigQuery#query: if the caller provided a non-zero timeoutMs,
        // fail immediately instead of polling jobs.getQueryResults.
        if (queryReq.timeoutMs) {
          stream.destroy(
            new Error(
              `The query did not complete before ${queryReq.timeoutMs}ms`,
            ),
          );
          return;
        }
        if (!res.jobReference || !job) {
          stream.destroy(
            new Error(
              'Cannot wait for an incomplete query without a jobReference.',
            ),
          );
          return;
        }
        waitForJobCompletion(job, stream, () => {
          streamDefaultJobStream(ctx, res.jobReference, 0, undefined, job);
        });
        return;
      }

      if (isRowLimitReached(ctx)) {
        emitZeroRowBatchAndEnd(
          arrow,
          stream,
          res?.arrowSchema?.serializedSchema || undefined,
        );
        return;
      }

      // pageRowCount and totalRows are returned as uint64 strings in REST JSON.
      const inlineRowsCount = BigInt(res?.pageRowCount ?? 0);
      const totalRowsCount = BigInt(res?.totalRows ?? 0);
      // Also check pageToken: on cached multi-page results, jobs.query can
      // return totalRows "0" and omit pageRowCount while setting pageToken.
      const hasRemainingRows =
        Boolean(res?.pageToken) || inlineRowsCount < totalRowsCount;

      // Emit the inline first page (or 0-row schema-preserving batch when totalRows is 0)
      // before resuming remaining rows from streams/_default at offset = pageRowCount.
      if (!hasRemainingRows || inlineRowsCount > 0n) {
        try {
          const batches = decodeArrowPayload(
            arrow,
            res?.arrowSchema?.serializedSchema,
            res?.arrowRecordBatch?.serializedRecordBatch,
          );
          for (const batch of batches) {
            if (stream._ended || stream.destroyed) {
              return;
            }
            const limited = applyRowLimit(ctx, batch);
            stream.push(limited.batch);
            if (limited.limitReached) {
              stream.end();
              return;
            }
          }
        } catch (parseErr) {
          stream.destroy(parseErr as Error);
          return;
        }
      }

      if (!hasRemainingRows) {
        if (!stream._ended && !stream.destroyed) {
          stream.end();
        }
        return;
      }

      if (stream._ended || stream.destroyed) {
        return;
      }

      streamDefaultJobStream(
        ctx,
        res?.jobReference,
        Number(inlineRowsCount),
        res?.arrowSchema?.serializedSchema,
      );
    });
  };

  return stream;
}
