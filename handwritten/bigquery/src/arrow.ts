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
  };
  maxStreamCount: number;
}

export interface BigQueryReadClient {
  createReadSession(
    request: CreateReadSessionRequest,
    callback: (err: Error | null, session?: IReadSession | null) => void,
  ): void;
  readRows(request: {readStream: string; offset?: number}): ReadRowsStream;
}

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
  streamReadRows(ctx, {readStream, offset, initialSchema, job});
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
 * Streams Arrow `RecordBatch`es from a Storage Read API stream starting at
 * `offset`, pausing `ReadRows` while the consumer is behind.
 *
 * @private
 */
function streamReadRows(
  ctx: ArrowStreamContext,
  options: {
    readStream: string;
    offset: number;
    initialSchema?: Uint8Array | string;
    /** The finished job, to read the schema of a result without rows. */
    job?: Job;
  },
): void {
  const {bq, arrow, storage, stream} = ctx;
  const {readStream, offset, initialSchema, job} = options;

  let readClient: BigQueryReadClient;
  try {
    readClient = getStorageReadClient(bq, storage);
  } catch (err) {
    stream.destroy(err as Error);
    return;
  }

  const grpcStream = readClient.readRows({
    readStream,
    offset,
  });

  // Cancel only the active ReadRows gRPC stream if the caller ends iteration
  // early, keeping the shared BigQueryReadClient open for subsequent queries.
  let finished = false;
  const cancelGrpcStream = () => {
    if (!finished) {
      finished = true;
      grpcStream.cancel();
    }
  };
  stream.once('close', cancelGrpcStream);

  // ReadRows is paused when push() reports a full buffer; resume it when the
  // consumer asks for more so slow consumers don't buffer the whole result.
  ctx.onRead = () => grpcStream.resume();

  let serializedSchema: Uint8Array | undefined = initialSchema
    ? toUint8Array(initialSchema)
    : undefined;
  let emittedBatch = false;

  grpcStream.on('data', (resp: IReadRowsResponse) => {
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
        emittedBatch = true;
        if (!stream.push(batch)) {
          grpcStream.pause();
        }
      }
    } catch (parseErr) {
      cancelGrpcStream();
      stream.destroy(parseErr as Error);
    }
  });

  grpcStream.on('error', (err: Error) => {
    stream.removeListener('close', cancelGrpcStream);
    if (finished || stream._ended || stream.destroyed) {
      return;
    }
    finished = true;
    stream.destroy(err);
  });

  grpcStream.on('end', () => {
    stream.removeListener('close', cancelGrpcStream);
    finished = true;
    if (stream._ended || stream.destroyed) {
      return;
    }
    // When reading from offset = 0 (e.g., after waiting for an unfinished job)
    // and the stream finishes with 0 rows, still emit a 0-row RecordBatch.
    if (offset === 0 && !emittedBatch) {
      if (serializedSchema || !job) {
        emitZeroRowBatchAndEnd(arrow, stream, serializedSchema);
        return;
      }
      readDestinationSchema(ctx, job, (err, schema) => {
        if (stream._ended || stream.destroyed) {
          return;
        }
        if (err) {
          stream.destroy(err);
          return;
        }
        emitZeroRowBatchAndEnd(arrow, stream, schema);
      });
      return;
    }
    stream.end();
  });
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

    const queryObj: ArrowQuery =
      typeof query === 'string' ? {query} : {...query};

    if (queryObj.writeDisposition === 'WRITE_APPEND') {
      stream.destroy(
        new Error(
          'WRITE_APPEND is not supported with Arrow query results because reading ' +
            'the destination table via the Storage Read API would include pre-existing rows.',
        ),
      );
      return;
    }

    const ctx: ArrowStreamContext = {bq, arrow, storage, stream};
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
            stream.push(batch);
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
