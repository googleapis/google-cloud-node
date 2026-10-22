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
import type {BigQuery, JobsQueryResponse, Query} from './bigquery';
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

interface IReadSession {
  arrowSchema?: {
    serializedSchema?: Uint8Array | string | null;
  } | null;
  streams?: Array<{
    name?: string | null;
  }> | null;
}

/**
 * The `CreateReadSession` request that {@link BigQuery#createQueryArrowStream}
 * sends. Exported for tests.
 *
 * @private
 */
export interface CreateReadSessionRequest {
  parent: string;
  readSession: {
    table: string;
    dataFormat: 'ARROW';
    readOptions?: {
      arrowSerializationOptions?: ArrowSerializationOptions;
    };
  };
  maxStreamCount: number;
}

/**
 * The part of `@google-cloud/bigquery-storage`'s `BigQueryReadClient` that
 * {@link BigQuery#createQueryArrowStream} uses. Exported for tests.
 *
 * @private
 */
export interface BigQueryReadClient {
  createReadSession(
    request: CreateReadSessionRequest,
  ): Promise<[IReadSession, ...unknown[]]>;
  readRows(request: {
    readStream: string;
    offset?: number;
    arrowSerializationOptions?: ArrowSerializationOptions;
  }): ReadRowsStream;
}

/**
 * The part of the `@google-cloud/bigquery-storage` module that
 * {@link BigQuery#createQueryArrowStream} uses. Exported for tests.
 *
 * @private
 */
export interface StorageModule {
  BigQueryReadClient: new (
    options?: Record<string, unknown>,
  ) => BigQueryReadClient;
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
   * Arrow serialization options sent on `jobs.query`, `ReadRows`, and
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
const GRPC_STATUS_INTERNAL = 13;
const GRPC_STATUS_UNAVAILABLE = 14;

// How many times in a row a failed ReadRows call is reopened before the
// error is passed to the caller. Any rows read reset the count.
const MAX_STREAM_RETRIES = 3;

/**
 * Validates and normalizes `arrowSerializationOptions`, rejecting compressed
 * Arrow buffers (`apache-arrow` doesn't bundle LZ4 or ZSTD codecs) and
 * defaulting `picosTimestampPrecision` to `'TIMESTAMP_PRECISION_MICROS'`.
 * Other options aren't forwarded, so every batch stays decodable.
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
 * (>= 6.3.0) package, verifying the latter's version.
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
  const storage = requireWithMinVersion<StorageModule>(
    requireFn,
    '@google-cloud/bigquery-storage',
    6,
    3,
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
  const hasSchema =
    serializedSchema !== undefined && serializedSchema.length > 0;
  const hasBatch =
    serializedRecordBatch !== undefined && serializedRecordBatch.length > 0;
  if (!hasSchema) {
    // Without a schema the batch can't be decoded; returning an empty batch
    // would silently drop its rows.
    if (hasBatch) {
      throw new Error('Got an Arrow record batch before its schema.');
    }
    return [new arrow.RecordBatch({})];
  }
  // BigQuery returns the Arrow IPC Schema message and RecordBatch message as
  // separate fields; the reader accepts them as consecutive chunks of one IPC
  // stream, which avoids copying them into a single buffer.
  const chunks = hasBatch
    ? [toUint8Array(serializedSchema), toUint8Array(serializedRecordBatch)]
    : [toUint8Array(serializedSchema)];
  const reader = arrow.RecordBatchReader.from(chunks);
  reader.open();
  // With no record batch, the reader yields its own 0-row placeholder batch,
  // which leaves nested Struct children empty and List children undefined.
  return hasBatch
    ? [...reader]
    : [createEmptyRecordBatch(arrow, reader.schema)];
}

/**
 * Pushes `batches` to `stream`, stopping if the consumer destroys it.
 *
 * @private
 */
function pushBatches(
  stream: ArrowRecordBatchStream,
  batches: RecordBatch[],
): void {
  for (const batch of batches) {
    if (stream.destroyed) {
      return;
    }
    stream.push(batch);
  }
}

/**
 * Cuts `batches` at the caller's `maxResults` limit, slicing the batch that
 * crosses it and counting the kept rows against `ctx.remainingRows`. Always
 * keeps the first batch, so a result cut to 0 rows still carries its schema.
 *
 * @private
 */
function limitRows(
  ctx: ArrowStreamContext,
  batches: RecordBatch[],
): RecordBatch[] {
  if (ctx.remainingRows === undefined) {
    return batches;
  }
  const kept: RecordBatch[] = [];
  for (const batch of batches) {
    if (kept.length > 0 && ctx.remainingRows === 0) {
      break;
    }
    const rows = Math.min(batch.numRows, ctx.remainingRows);
    kept.push(rows < batch.numRows ? batch.slice(0, rows) : batch);
    ctx.remainingRows -= rows;
  }
  return kept;
}

/**
 * Streams Arrow `RecordBatch`es from a job's sessionless default stream
 * (`projects/{projectId}/locations/{location}/jobs/{jobId}/streams/_default`)
 * starting at `offset`. Pass the finished `job` when reading from offset 0 so
 * a result without rows keeps its schema (see {@link readDestinationSchema}).
 *
 * @private
 */
async function streamDefaultJobStream(
  ctx: ArrowStreamContext,
  jobRef: bigquery.IJobReference | undefined,
  offset: number,
  initialSchema?: Uint8Array | string,
  job?: Job,
): Promise<void> {
  const {bq, arrow, stream} = ctx;
  const projectId = resolveProjectId(bq, jobRef?.projectId);
  const jobId = jobRef?.jobId;
  const location = jobRef?.location || bq.location;

  if (!projectId || !jobId || !location) {
    throw new Error(
      'Cannot stream remaining Arrow rows without a jobReference.',
    );
  }

  const readStream = `projects/${projectId}/locations/${location}/jobs/${jobId}/streams/_default`;
  const {emittedBatch, serializedSchema} = await streamReadRows(ctx, {
    readStream,
    offset,
    initialSchema,
    arrowSerializationOptions: ctx.arrowSerializationOptions,
  });

  // When reading from offset = 0 (e.g., after waiting for an unfinished job)
  // and the stream finishes with 0 rows, still emit a 0-row RecordBatch.
  if (offset !== 0 || emittedBatch || stream.destroyed) {
    return;
  }
  const schema =
    serializedSchema ?? (job && (await readDestinationSchema(ctx, job)));
  pushBatches(stream, decodeArrowPayload(arrow, schema));
}

/**
 * Creates an Arrow read session with a single stream on `table`, billed to
 * `parentProjectId`.
 *
 * @private
 */
async function createArrowReadSession(
  ctx: ArrowStreamContext,
  parentProjectId: string | undefined,
  table: bigquery.ITableReference,
): Promise<IReadSession | undefined> {
  if (!parentProjectId) {
    throw new Error(
      'Cannot create an Arrow read session without a project ID.',
    );
  }
  const [session] = await getStorageReadClient(
    ctx.bq,
    ctx.storage,
  ).createReadSession({
    parent: `projects/${parentProjectId}`,
    readSession: {
      table: `projects/${table.projectId}/datasets/${table.datasetId}/tables/${table.tableId}`,
      dataFormat: 'ARROW',
      readOptions: {arrowSerializationOptions: ctx.arrowSerializationOptions},
    },
    // One stream keeps rows in the query's order (e.g., ORDER BY) for a table
    // the query just wrote.
    maxStreamCount: 1,
  });
  return session ?? undefined;
}

/**
 * Reads the Arrow schema of a finished query job's results from its
 * destination table. The default job stream sends no `ReadRowsResponse`, and
 * so no schema, for a result without rows, but a read session on the
 * destination table still returns it. Statements without a result table
 * (e.g., DML) have no destination table, so this resolves to `undefined`.
 *
 * @private
 */
async function readDestinationSchema(
  ctx: ArrowStreamContext,
  job: Job,
): Promise<Uint8Array | string | undefined> {
  // A script's destination table is only set once the job finishes, so read
  // the job's current metadata instead of the response that created it.
  const [metadata] = await job.getMetadata();
  const destRef = metadata?.configuration?.query?.destinationTable;
  // Skip the read session if the consumer destroyed the stream meanwhile.
  if (!destRef || ctx.stream.destroyed) {
    return undefined;
  }
  const session = await createArrowReadSession(
    ctx,
    resolveProjectId(
      ctx.bq,
      metadata?.jobReference?.projectId,
      destRef.projectId,
    ),
    destRef,
  );
  return session?.arrowSchema?.serializedSchema || undefined;
}

/**
 * Returns `true` if a `ReadRows` gRPC stream error is transient and safe to
 * resume from the next unread row offset.
 *
 * @private
 */
function isRetryableStreamError(err: Error & {code?: number}): boolean {
  // DEADLINE_EXCEEDED isn't retried: it means the caller's deadline ran out.
  if (err.code === GRPC_STATUS_UNAVAILABLE) {
    return true;
  }
  // Long-lived HTTP/2 streams closed by the server with RST_STREAM surface as
  // INTERNAL (code 13) in gRPC and are safe to reconnect at the next offset.
  return (
    err.code === GRPC_STATUS_INTERNAL &&
    Boolean(err.message?.includes('RST_STREAM'))
  );
}

/**
 * Progress through a Storage Read API stream, kept across reconnects.
 *
 * @private
 */
interface ReadRowsProgress {
  // The next unread row.
  offset: number;
  emittedBatch: boolean;
  // The last Arrow schema seen, needed to decode later record batches.
  serializedSchema?: Uint8Array;
}

/**
 * Streams Arrow `RecordBatch`es from a Storage Read API stream starting at
 * `offset`. If `ReadRows` fails with a transient error, reopens it at the next
 * unread row.
 *
 * Resolves when the stream ends or the consumer destroys it, with whether any
 * batch was emitted and the last Arrow schema seen. Rejects with the error
 * once it isn't retryable or the retries run out.
 *
 * @private
 */
async function streamReadRows(
  ctx: ArrowStreamContext,
  options: {
    readStream: string;
    offset: number;
    initialSchema?: Uint8Array | string;
    // Only the default job stream accepts these on ReadRows.
    arrowSerializationOptions?: ArrowSerializationOptions;
  },
): Promise<{emittedBatch: boolean; serializedSchema?: Uint8Array}> {
  const {offset, initialSchema, ...request} = options;
  const progress: ReadRowsProgress = {
    offset,
    emittedBatch: false,
    serializedSchema: initialSchema ? toUint8Array(initialSchema) : undefined,
  };

  let retries = 0;
  // Also stops at the caller's maxResults, without opening ReadRows for 0.
  while (!ctx.stream.destroyed && ctx.remainingRows !== 0) {
    const attemptOffset = progress.offset;
    try {
      await readRowsOnce(ctx, request, progress);
      break;
    } catch (err) {
      if (progress.offset > attemptOffset) {
        retries = 0;
      }
      if (
        !isRetryableStreamError(err as Error & {code?: number}) ||
        retries >= MAX_STREAM_RETRIES
      ) {
        throw err;
      }
      retries++;
    }
  }
  const {emittedBatch, serializedSchema} = progress;
  return {emittedBatch, serializedSchema};
}

/**
 * Opens one `ReadRows` call at `progress.offset` and pushes its Arrow
 * `RecordBatch`es, pausing `ReadRows` while the consumer is behind. Updates
 * `progress` for each batch, so a retry resumes at the next unread row.
 *
 * Resolves when `ReadRows` ends or the consumer destroys the stream, and
 * rejects on a `ReadRows` or decode error. In every case, the listeners added
 * here are removed, and `ReadRows` is cancelled unless it already finished.
 *
 * @private
 */
async function readRowsOnce(
  ctx: ArrowStreamContext,
  request: {
    readStream: string;
    arrowSerializationOptions?: ArrowSerializationOptions;
  },
  progress: ReadRowsProgress,
): Promise<void> {
  const {bq, arrow, storage, stream} = ctx;

  return new Promise((resolve, reject) => {
    const grpcStream = getStorageReadClient(bq, storage).readRows({
      ...request,
      offset: progress.offset,
    });

    let settled = false;
    // Detaches every listener added here and settles the promise. Cancels
    // only this ReadRows call, keeping the shared BigQueryReadClient open.
    const settle = (opts: {cancel: boolean; err?: Error}) => {
      if (settled) {
        return;
      }
      settled = true;
      grpcStream.removeListener('data', onData);
      grpcStream.removeListener('error', onError);
      grpcStream.removeListener('end', onEnd);
      stream.removeListener('close', onClose);
      ctx.onRead = undefined;
      // cancel() makes gRPC emit a CANCELLED 'error' on a later tick, which
      // would crash the process if no 'error' listener were attached. This
      // listener swallows every later error on this ReadRows call, not just
      // CANCELLED: we're done with the call, so there's no value in
      // surfacing them.
      grpcStream.on('error', () => {});
      if (opts.cancel) {
        grpcStream.cancel();
      }
      if (opts.err) {
        reject(opts.err);
      } else {
        resolve();
      }
    };

    const onData = (resp: IReadRowsResponse) => {
      if (stream.destroyed) {
        settle({cancel: true});
        return;
      }
      // The Storage Read API sends arrowSchema on the first ReadRowsResponse
      // and may also emit responses without record batch bytes (e.g.,
      // heartbeats).
      if (resp.arrowSchema?.serializedSchema) {
        progress.serializedSchema = toUint8Array(
          resp.arrowSchema.serializedSchema,
        );
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
        const batches = limitRows(
          ctx,
          decodeArrowPayload(arrow, progress.serializedSchema, rawBatch),
        );
        for (const batch of batches) {
          if (stream.destroyed) {
            settle({cancel: true});
            return;
          }
          progress.offset += batch.numRows;
          progress.emittedBatch = true;
          if (!stream.push(batch)) {
            grpcStream.pause();
          }
        }
        // Reached maxResults, so the rest of the stream isn't needed.
        if (ctx.remainingRows === 0) {
          settle({cancel: true});
        }
      } catch (parseErr) {
        settle({cancel: true, err: parseErr as Error});
      }
    };
    const onError = (err: Error) => settle({cancel: false, err});
    const onEnd = () => settle({cancel: false});
    // The consumer destroyed the stream (e.g., ended iteration early).
    const onClose = () => settle({cancel: true});

    // ReadRows is paused when push() reports a full buffer; resume it when the
    // consumer asks for more so slow consumers don't buffer the whole result.
    ctx.onRead = () => grpcStream.resume();

    grpcStream.on('data', onData);
    grpcStream.on('error', onError);
    grpcStream.on('end', onEnd);
    stream.on('close', onClose);
  });
}

/**
 * Creates a Storage Read API session for an explicit destination table and
 * streams Arrow `RecordBatch`es from its single stream.
 *
 * @private
 */
async function streamDestinationTable(
  ctx: ArrowStreamContext,
  jobRef: bigquery.IJobReference | undefined,
  table: bigquery.ITableReference,
): Promise<void> {
  const {arrow, stream} = ctx;
  // The session is billed to the job's project; the table can be in another.
  const session = await createArrowReadSession(
    ctx,
    resolveProjectId(ctx.bq, jobRef?.projectId),
    table,
  );
  const sessionSchema = session?.arrowSchema?.serializedSchema || undefined;
  const streams = session?.streams ?? [];
  const readStream = streams[0]?.name;
  if (streams.length === 0 || !readStream) {
    // An empty destination table returns 0 streams; emit a single 0-row
    // RecordBatch carrying the session's Arrow schema.
    pushBatches(stream, decodeArrowPayload(arrow, sessionSchema));
    return;
  }

  // Session streams use the options passed to CreateReadSession.
  const {emittedBatch, serializedSchema} = await streamReadRows(ctx, {
    readStream,
    offset: 0,
    initialSchema: sessionSchema,
  });
  // A stream that ends without rows still yields a 0-row RecordBatch.
  if (!emittedBatch && !stream.destroyed) {
    pushBatches(stream, decodeArrowPayload(arrow, serializedSchema));
  }
}

/**
 * Waits for an unfinished BigQuery job to complete using `job.getQueryResults`
 * without fetching any `STRUCT_ENCODING` rows (`maxResults: 0`). Returns early
 * if the consumer destroys `stream`. If `timeoutMs` is set, fails like
 * {@link BigQuery#query} when the job doesn't complete in time instead of
 * polling again.
 *
 * @private
 */
async function waitForJobCompletion(
  job: Job,
  stream: ArrowRecordBatchStream,
  timeoutMs?: number,
): Promise<void> {
  while (!stream.destroyed) {
    // Set maxResults: 0 so jobs.getQueryResults blocks up to the server's
    // default wait interval (about 10s) and surfaces job errors without
    // returning JSON rows, so polling again right away doesn't spin.
    const [, , res] = await job.getQueryResults({
      autoPaginate: false,
      maxResults: 0,
      // 0 means no limit, as in BigQuery#query. Sending 0 would make
      // jobs.getQueryResults return at once and this loop spin.
      ...(timeoutMs && {timeoutMs}),
    });
    if (res?.jobComplete !== false) {
      return;
    }
  }
}

/**
 * Waits for `job` to finish, then streams all of its rows: from
 * `destinationTable` through a read session when the caller set one, or from
 * the default job stream otherwise. An unfinished jobs.query and jobs.insert
 * return no rows or schema, so the default job stream is read from offset 0,
 * passing the job to look up the schema of an empty result.
 *
 * @private
 */
async function streamJobWhenComplete(
  ctx: ArrowStreamContext,
  job: Job,
  jobRef: bigquery.IJobReference | undefined,
  timeoutMs?: number,
  destinationTable?: bigquery.ITableReference,
): Promise<void> {
  await waitForJobCompletion(job, ctx.stream, timeoutMs);
  if (ctx.stream.destroyed) {
    return;
  }
  if (destinationTable) {
    await streamDestinationTable(ctx, jobRef, destinationTable);
    return;
  }
  await streamDefaultJobStream(ctx, jobRef, 0, undefined, job);
}

/**
 * Runs `queryObj` with `jobs.insert` and streams its results. A dry run emits
 * one 0-row, 0-column `RecordBatch` without waiting or streaming.
 *
 * @private
 */
async function streamQueryJob(
  ctx: ArrowStreamContext,
  queryObj: ArrowQuery,
): Promise<void> {
  const {bq, arrow, stream} = ctx;
  // timeoutMs only bounds the wait below, and jobCreationMode only applies to
  // jobs.query, so keep both out of the job configuration.
  const {timeoutMs, ...jobQuery} = queryObj;
  delete jobQuery.jobCreationMode;
  // Throws for an invalid request, for example a destination that isn't a
  // Table, or invalid parameters.
  const [job, resp] = await bq.createQueryJob(jobQuery);
  // The consumer may have destroyed the stream while jobs.insert ran.
  if (stream.destroyed) {
    return;
  }
  if (!job) {
    throw new Error('jobs.insert returned no job.');
  }

  stream.jobReference = resp?.jobReference;
  // For a dry run, job.metadata holds the query's statistics.
  stream.emit('job', job);

  // A dry run validates the query without running it.
  if (queryObj.dryRun) {
    pushBatches(stream, decodeArrowPayload(arrow));
    return;
  }

  // BigQuery echoes the caller's destination table, with its resolved
  // project, in the job's configuration.
  const destinationTable = queryObj.destination
    ? (resp?.configuration?.query?.destinationTable ?? undefined)
    : undefined;
  await streamJobWhenComplete(
    ctx,
    job,
    resp?.jobReference,
    timeoutMs,
    destinationTable,
  );
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
  let started = false;
  // Set once the query starts, so later reads can resume the active ReadRows.
  let readCtx: ArrowStreamContext | undefined;

  const stream = new ResourceStream<RecordBatch>(
    {
      streamOptions: {
        // Buffer at most one decoded RecordBatch ahead of the consumer, since
        // each batch can hold many rows.
        highWaterMark: 1,
        // Called when the consumer wants more batches: the first call starts
        // the query, and later calls resume a paused ReadRows call.
        read: () => {
          if (started) {
            readCtx?.onRead?.();
            return;
          }
          started = true;
          void runQuery();
        },
      },
    },
    () => {},
  ) as ArrowRecordBatchStream;

  // Runs the query and pushes its batches. The returned promise settles once
  // all batches are pushed, the consumer destroys the stream, or a step fails.
  const streamQueryResults = async (): Promise<void> => {
    const {arrow, storage} = checkArrowDependencies();

    if (!query || (typeof query === 'object' && !query.query)) {
      throw new Error('A SQL query string is required.');
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
      throw new Error('maxResults must be a non-negative integer.');
    }

    const ctx: ArrowStreamContext = {
      bq,
      arrow,
      storage,
      stream,
      arrowSerializationOptions: resolveArrowSerializationOptions(
        requestedSerializationOptions,
      ),
      remainingRows: maxResults,
    };
    readCtx = ctx;

    // Throws for an invalid request, for example invalid query parameters.
    const queryReq = bq.buildQueryRequest_(queryObj, {
      timeoutMs: queryObj.timeoutMs,
    });
    if (!queryReq) {
      // buildQueryRequest_ returns undefined when the query sets an option
      // that only jobs.insert accepts (e.g., destination, jobId, dryRun, or
      // jobTimeoutMs), or when FAST_QUERY_PATH=DISABLED.
      await streamQueryJob(ctx, queryObj);
      return;
    }

    // Default to JOB_CREATION_OPTIONAL unless overridden on the query or client.
    if (!queryReq.jobCreationMode) {
      queryReq.jobCreationMode = 'JOB_CREATION_OPTIONAL';
    }
    queryReq.queryResultsFormat = 'ARROW';
    queryReq.arrowSerializationOptions = ctx.arrowSerializationOptions;
    // Set directly: buildQueryRequest_ drops a maxResults of 0.
    queryReq.maxResults = maxResults;

    const [job, res] = (await bq.runJobsQuery(queryReq)) as JobsQueryResponse;
    // The consumer may have destroyed the stream while jobs.query ran.
    if (stream.destroyed) {
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
      // jobs.query already waited (about 10s by default) and the query is
      // still running, so this depends on how long the query runs, not on
      // how many rows it returns.
      // Match BigQuery#query: if the caller provided a non-zero timeoutMs,
      // fail immediately instead of polling jobs.getQueryResults.
      if (queryReq.timeoutMs) {
        throw new Error(
          `The query did not complete before ${queryReq.timeoutMs}ms`,
        );
      }
      if (!res.jobReference || !job) {
        throw new Error(
          'Cannot wait for an incomplete query without a jobReference.',
        );
      }
      await streamJobWhenComplete(ctx, job, res.jobReference);
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
      pushBatches(
        stream,
        limitRows(
          ctx,
          decodeArrowPayload(
            arrow,
            res?.arrowSchema?.serializedSchema,
            res?.arrowRecordBatch?.serializedRecordBatch,
          ),
        ),
      );
    }

    if (!hasRemainingRows || stream.destroyed) {
      return;
    }

    await streamDefaultJobStream(
      ctx,
      res?.jobReference,
      Number(inlineRowsCount),
      res?.arrowSchema?.serializedSchema,
      job ?? undefined,
    );
  };

  // The only place that ends or destroys the stream.
  const runQuery = async (): Promise<void> => {
    try {
      await streamQueryResults();
    } catch (err) {
      stream.destroy(err as Error);
      return;
    }
    if (!stream.destroyed) {
      stream.end();
    }
  };

  return stream;
}
