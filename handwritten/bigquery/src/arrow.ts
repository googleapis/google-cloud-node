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

/**
 * The part of `@google-cloud/bigquery-storage`'s `BigQueryReadClient` that
 * {@link BigQuery#createQueryArrowStream} uses. Exported for tests.
 *
 * @private
 */
export interface BigQueryReadClient {
  readRows(request: {readStream: string; offset?: number}): ReadRowsStream;
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
 * State shared by the helpers that stream rows for one
 * {@link BigQuery#createQueryArrowStream} call.
 */
interface ArrowStreamContext {
  bq: BigQuery;
  arrow: ArrowModule;
  storage: StorageModule;
  stream: ArrowRecordBatchStream;
  /** Called when the consumer wants more batches. */
  onRead?: () => void;
}

const readClients = new WeakMap<BigQuery, BigQueryReadClient>();

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
 * Streams Arrow `RecordBatch`es from a job's sessionless default stream
 * (`projects/{projectId}/locations/{location}/jobs/{jobId}/streams/_default`)
 * starting at `offset`.
 *
 * @private
 */
async function streamDefaultJobStream(
  ctx: ArrowStreamContext,
  jobRef: bigquery.IJobReference | undefined,
  offset: number,
  initialSchema?: Uint8Array | string,
): Promise<void> {
  const {bq} = ctx;
  const projectId = resolveProjectId(bq, jobRef?.projectId);
  const jobId = jobRef?.jobId;
  const location = jobRef?.location || bq.location;

  if (!projectId || !jobId || !location) {
    throw new Error(
      'Cannot stream remaining Arrow rows without a jobReference.',
    );
  }

  const readStream = `projects/${projectId}/locations/${location}/jobs/${jobId}/streams/_default`;
  await streamReadRows(ctx, {readStream, offset, initialSchema});
}

/**
 * Streams Arrow `RecordBatch`es from a Storage Read API stream starting at
 * `offset`, pausing `ReadRows` while the consumer is behind.
 *
 * Resolves when `ReadRows` ends or the consumer destroys the stream, and
 * rejects on a `ReadRows` or decode error. In every case, the listeners added
 * here are removed, and `ReadRows` is cancelled unless it already finished.
 *
 * @private
 */
function streamReadRows(
  ctx: ArrowStreamContext,
  options: {
    readStream: string;
    offset: number;
    initialSchema?: Uint8Array | string;
  },
): Promise<void> {
  const {bq, arrow, storage, stream} = ctx;
  const {readStream, offset, initialSchema} = options;

  return new Promise((resolve, reject) => {
    const grpcStream = getStorageReadClient(bq, storage).readRows({
      readStream,
      offset,
    });

    let serializedSchema: Uint8Array | undefined = initialSchema
      ? toUint8Array(initialSchema)
      : undefined;

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
      // would crash the process if no 'error' listener were attached.
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
          if (stream.destroyed) {
            settle({cancel: true});
            return;
          }
          if (!stream.push(batch)) {
            grpcStream.pause();
          }
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
 * Executes a query and returns a stream of `apache-arrow` `RecordBatch` objects.
 *
 * @private
 */
export function createQueryArrowStream_(
  bq: BigQuery,
  query?: Query | string,
): ArrowRecordBatchStream {
  const stream = new ResourceStream<RecordBatch>(
    {},
    () => {},
  ) as ArrowRecordBatchStream;

  let started = false;
  // Set once the query starts, so later reads can resume the active ReadRows.
  let readCtx: ArrowStreamContext | undefined;

  // Runs the query and pushes its batches. The returned promise settles once
  // all batches are pushed, the consumer destroys the stream, or a step fails.
  const runQuery = async (): Promise<void> => {
    const {arrow, storage} = checkArrowDependencies();

    if (!query || (typeof query === 'object' && !query.query)) {
      throw new Error('A SQL query string is required.');
    }

    const queryObj: Query = typeof query === 'string' ? {query} : {...query};

    if (queryObj.writeDisposition === 'WRITE_APPEND') {
      throw new Error(
        'WRITE_APPEND is not supported with Arrow query results because reading ' +
          'the destination table via the Storage Read API would include pre-existing rows.',
      );
    }

    if (queryObj.destination) {
      // TODO: Support explicit destination tables via CreateReadSession.
      throw new Error(
        'Explicit destination tables are not yet supported in createQueryArrowStream.',
      );
    }

    const ctx: ArrowStreamContext = {bq, arrow, storage, stream};
    readCtx = ctx;

    // Throws for an invalid request, for example invalid query parameters.
    const queryReq = bq.buildQueryRequest_(queryObj, {});
    if (!queryReq) {
      // TODO: Route queries that cannot use jobs.query through jobs.insert (createQueryJob).
      throw new Error('Query configuration cannot be executed via jobs.query.');
    }

    // Default to JOB_CREATION_OPTIONAL unless overridden on the query or client.
    if (!queryReq.jobCreationMode) {
      queryReq.jobCreationMode = 'JOB_CREATION_OPTIONAL';
    }
    queryReq.queryResultsFormat = 'ARROW';

    const [job, res] = (await bq.runJobsQuery(queryReq)) as JobsQueryResponse;

    if (res?.queryId) {
      stream.queryId = res.queryId;
    }
    if (res?.jobReference && job) {
      stream.jobReference = res.jobReference;
      stream.emit('job', job);
    }

    if (res?.jobComplete === false) {
      // TODO: Wait for unfinished jobs before streaming Arrow results.
      throw new Error('Query did not complete within the jobs.query timeout.');
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
      const batches = decodeArrowPayload(
        arrow,
        res?.arrowSchema?.serializedSchema,
        res?.arrowRecordBatch?.serializedRecordBatch,
      );
      for (const batch of batches) {
        if (stream.destroyed) {
          return;
        }
        stream.push(batch);
      }
    }

    if (!hasRemainingRows || stream.destroyed) {
      return;
    }

    await streamDefaultJobStream(
      ctx,
      res?.jobReference,
      Number(inlineRowsCount),
      res?.arrowSchema?.serializedSchema,
    );
  };

  stream._read = () => {
    if (started) {
      readCtx?.onRead?.();
      return;
    }
    started = true;
    // The only place that ends or destroys the stream.
    void (async () => {
      try {
        await runQuery();
      } catch (err) {
        stream.destroy(err as Error);
        return;
      }
      if (!stream.destroyed) {
        stream.end();
      }
    })();
  };

  return stream;
}
