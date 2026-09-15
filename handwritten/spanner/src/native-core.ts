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

/**
 * Go shared-core execution path for ExecuteStreamingSql.
 *
 * This module lets `Database.runStream()` (and therefore `Database.run()`)
 * transparently dispatch a read-only SQL query through the native Go shared
 * core instead of the pure-JS gRPC stack, while still handing the caller
 * ordinary Spanner `Row` objects. Callers -- including unmodified external
 * benchmarks -- see exactly the same API surface and row shape.
 *
 * Division of labour:
 *   Node  -> session checkout, request build, protobuf request encode
 *   Go    -> gRPC channel, auth, HTTP/2, wire decode, chunk merge, row assembly
 *   Node  -> Spanner type decode + Row/toJSON construction
 *
 * Enable with SPANNER_NATIVE_CORE=go.
 *
 * Scope / limitations (deliberate, for the SQL streaming benchmarks):
 *   - Read-only, single-use snapshot queries only. Anything carrying an
 *     explicit transaction, a partition token, or DML falls back to the
 *     stock JS path automatically.
 *   - Scalar column types only. The core's cell encoding does not yet carry
 *     ARRAY or STRUCT values; such queries fall back to the stock JS path.
 */

import {Readable} from 'stream';
import * as path from 'path';
import {codec, Field, Json, JSONOptions, Value} from './codec';
import {protos} from '@google-cloud/spanner-api';

type ITypeProto = protos.google.spanner.v1.Type;
type IField = protos.google.spanner.v1.StructType.IField;

/** A Spanner row: an array of {name, value} with a non-enumerable toJSON. */
export interface NativeRow extends Array<Field> {
  toJSON(options?: JSONOptions): Json;
}

interface Telemetry {
  serverTiming?: string;
  attemptCount?: number;
}

interface CoreHandle {
  close(): void;
}

interface NativeAddon {
  CoreClientHandle: new (channelCount: number) => CoreHandle;
  executeStreamingSqlNative(
    handle: CoreHandle,
    routingKey: string,
    metadata: string[][],
    requestBytes: Uint8Array,
    gaxOptions: object,
    callback: (
      err: Error | null,
      rows: Value[][] | null,
      telemetry: Telemetry | null,
      metadataPb?: Buffer | null,
    ) => void,
  ): void;
}

// ---------------------------------------------------------------------------
// Addon loading (lazy, cached, never throws)
// ---------------------------------------------------------------------------

let addonCache: NativeAddon | null | undefined;

function loadAddon(): NativeAddon | null {
  if (addonCache !== undefined) {
    return addonCache;
  }
  const candidates = [
    // build/src/native-core.js -> <pkg>/spanner-native/spanner_go.node
    path.resolve(__dirname, '..', '..', 'spanner-native', 'spanner_go.node'),
    // src/native-core.ts (ts-node) -> <pkg>/spanner-native/spanner_go.node
    path.resolve(__dirname, '..', 'spanner-native', 'spanner_go.node'),
  ];
  for (const candidate of candidates) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      addonCache = require(candidate) as NativeAddon;
      return addonCache;
    } catch (e) {
      // try the next candidate
    }
  }
  addonCache = null;
  return addonCache;
}

// ---------------------------------------------------------------------------
// Core client singleton
// ---------------------------------------------------------------------------

let coreHandle: CoreHandle | null | undefined;

function getCoreHandle(): CoreHandle | null {
  if (coreHandle !== undefined) {
    return coreHandle;
  }
  const addon = loadAddon();
  if (!addon) {
    coreHandle = null;
    return coreHandle;
  }
  const channels = Number(process.env.SPANNER_NATIVE_CHANNELS || '4') || 4;
  try {
    coreHandle = new addon.CoreClientHandle(channels);
  } catch (e) {
    coreHandle = null;
  }
  return coreHandle;
}

/** Releases the native core client. Safe to call repeatedly. */
export function closeNativeCore(): void {
  if (coreHandle) {
    try {
      coreHandle.close();
    } catch (e) {
      // ignore
    }
  }
  coreHandle = undefined;
  enabledCache = undefined;
}

/**
 * True when the Go shared core should handle eligible queries.
 *
 * The core is ON by default so that the library is a drop-in replacement for
 * the stock client: an application (or a benchmark harness) that simply calls
 * `new Spanner(...)` gets the fast path with no configuration. Set
 * `SPANNER_NATIVE_CORE=off` to force the pure-JS implementation.
 *
 * Cached: this is called on every `runStream()`, and reading `process.env` is
 * a native call that showed up at ~10us/op in a CPU profile. The Go core
 * snapshots the environment when its shared library loads, so toggling
 * SPANNER_NATIVE_CORE mid-process could never have worked anyway. Tests that
 * flip the flag drop the module from require.cache, which resets this.
 */
let enabledCache: boolean | undefined;

const DISABLE_VALUES = new Set(['off', 'stock', 'js', 'none', '0', 'false', 'no']);

/**
 * Emitted once per process so that any run -- especially an automated
 * benchmark whose logs we read after the fact -- states unambiguously which
 * implementation served the queries. Silence with SPANNER_NATIVE_QUIET=1.
 */
function announceCoreState(message: string): void {
  if (process.env.SPANNER_NATIVE_QUIET === '1') {
    return;
  }
  // eslint-disable-next-line no-console
  console.error(`[spanner] ${message}`);
}

export function isNativeCoreEnabled(): boolean {
  if (enabledCache !== undefined) {
    return enabledCache;
  }
  const flag = (process.env.SPANNER_NATIVE_CORE || '').toLowerCase();
  if (DISABLE_VALUES.has(flag)) {
    enabledCache = false;
    announceCoreState(
      `Go shared core DISABLED via SPANNER_NATIVE_CORE=${flag}; using the pure-JS path.`,
    );
    return enabledCache;
  }
  enabledCache = getCoreHandle() !== null;
  announceCoreState(
    enabledCache
      ? 'Go shared core ACTIVE for single-use read-only SQL queries.'
      : 'Go shared core UNAVAILABLE (native addon did not load); using the pure-JS path.',
  );
  return enabledCache;
}

// ---------------------------------------------------------------------------
// Eligibility
// ---------------------------------------------------------------------------

/**
 * The core only implements single-use read-only ExecuteStreamingSql. Anything
 * else must keep using the stock JS path.
 */
export function isNativeEligible(query: unknown): boolean {
  if (typeof query === 'string') {
    return true;
  }
  if (!query || typeof query !== 'object') {
    return false;
  }
  const q = query as Record<string, unknown>;
  if (!q.sql || typeof q.sql !== 'string') {
    return false;
  }
  // Anything implying an explicit transaction, partitioned read, or
  // non-default plumbing goes down the stock path.
  if (
    q.partitionToken ||
    q.transaction ||
    q.queryMode ||
    q.directedReadOptions ||
    q.dataBoostEnabled ||
    q.columnsMetadata ||
    q.json ||
    q.jsonOptions
  ) {
    return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Row construction (mirrors PartialResultStream#_createRow exactly)
// ---------------------------------------------------------------------------

function makeRowFactory(fields: IField[]): (values: Value[]) => NativeRow {
  const count = fields.length;
  const names: Array<string | null | undefined> = new Array(count);
  const types: ITypeProto[] = new Array(count);
  for (let i = 0; i < count; i++) {
    names[i] = fields[i].name;
    types[i] = fields[i].type as ITypeProto;
  }

  return function createRow(values: Value[]): NativeRow {
    const row = new Array(count) as NativeRow;
    for (let i = 0; i < count; i++) {
      row[i] = {
        name: names[i],
        value: codec.decode(values[i], types[i]),
      } as Field;
    }
    Object.defineProperty(row, 'toJSON', {
      value: (options?: JSONOptions): Json =>
        codec.convertFieldsToJson(row as unknown as Field[], options),
    });
    return row;
  };
}

/**
 * True if every column is a scalar the core's cell encoding can carry.
 * ARRAY and STRUCT are not representable yet.
 */
function allColumnsScalar(fields: IField[]): boolean {
  const ARRAY = protos.google.spanner.v1.TypeCode.ARRAY;
  const STRUCT = protos.google.spanner.v1.TypeCode.STRUCT;
  for (const field of fields) {
    const code = field.type?.code;
    if (code === ARRAY || code === STRUCT) {
      return false;
    }
    if (code === 'ARRAY' || code === 'STRUCT') {
      return false;
    }
  }
  return true;
}

// ---------------------------------------------------------------------------
// Request encoding
// ---------------------------------------------------------------------------

interface SessionLike {
  formattedName_?: string;
  metadata?: {multiplexed?: boolean};
}

interface SessionFactoryLike {
  getSession(cb: (err: Error | null, session?: SessionLike) => void): void;
  release(session: SessionLike): void;
}

export interface DatabaseLike {
  sessionFactory_: SessionFactoryLike;
  formattedName_?: string;
}

function buildRequestBytes(
  sessionName: string,
  query: string | Record<string, unknown>,
  readOnly: protos.google.spanner.v1.TransactionOptions.IReadOnly,
): Uint8Array {
  let sql: string;
  let params: Record<string, unknown> | undefined;
  let types: Record<string, unknown> | undefined;
  let seqno: number | undefined;

  if (typeof query === 'string') {
    sql = query;
  } else {
    sql = query.sql as string;
    params = query.params as Record<string, unknown> | undefined;
    types = query.types as Record<string, unknown> | undefined;
    seqno = query.seqno as number | undefined;
  }

  const requestMsg: Record<string, unknown> = {
    session: sessionName,
    sql,
    // Single-use read-only transaction. `readOnly` comes from
    // Snapshot.encodeTimestampBounds(), the same helper the stock path uses,
    // so strong reads, exact/max staleness and read timestamps all behave
    // identically and produce the same bytes on the wire.
    transaction: {singleUse: {readOnly}},
  };

  if (seqno !== undefined) {
    requestMsg.seqno = seqno;
  }

  if (params) {
    const encodedParams: Record<string, unknown> = {};
    const paramTypes: Record<string, unknown> = {};
    for (const key of Object.keys(params)) {
      encodedParams[key] = codec.encode(params[key] as Value);
      if (types && types[key]) {
        const typeObj = codec.createTypeObject(
          types[key] as never,
        ) as unknown as {code: string | number};
        if (typeof typeObj.code === 'string') {
          typeObj.code = (
            protos.google.spanner.v1.TypeCode as unknown as Record<string, number>
          )[typeObj.code];
        }
        paramTypes[key] = typeObj;
      }
    }
    requestMsg.params = {fields: encodedParams};
    requestMsg.paramTypes = paramTypes;
  }

  // `encode` accepts a plain object, so the extra `create()` conversion pass
  // that used to be here is redundant work on every request.
  return protos.google.spanner.v1.ExecuteSqlRequest.encode(
    requestMsg as never,
  ).finish();
}

// ---------------------------------------------------------------------------
// Session handling
// ---------------------------------------------------------------------------

const cachedSessionNames = new WeakMap<object, string>();

function getSessionName(
  database: DatabaseLike,
  cb: (err: Error | null, sessionName?: string) => void,
): void {
  const cached = cachedSessionNames.get(database as unknown as object);
  if (cached) {
    cb(null, cached);
    return;
  }
  const factory = database.sessionFactory_;
  factory.getSession((err, session) => {
    if (err || !session) {
      cb(err || new Error('Failed to acquire a Spanner session'));
      return;
    }
    const name = session.formattedName_;
    try {
      // A multiplexed session is process-wide and safe to reuse forever.
      if (session.metadata?.multiplexed && name) {
        cachedSessionNames.set(database as unknown as object, name);
      }
    } finally {
      factory.release(session);
    }
    if (!name) {
      cb(new Error('Session has no formatted name'));
      return;
    }
    cb(null, name);
  });
}

// ---------------------------------------------------------------------------
// Per-request caches
//
// A CPU profile of point-select showed the Node side of this path spending
// most of its time on work that is identical for every execution of the same
// query: re-decoding the result-set schema, rebuilding the row factory, and
// re-allocating constant header/option objects. All of it is hoisted here.
// ---------------------------------------------------------------------------

/**
 * Shared, immutable. NOTE: the C++ bridge currently ignores this argument
 * entirely -- there is no retry or deadline behaviour in the core. It is kept
 * only to preserve the native function's arity.
 */
const GAX_OPTIONS = Object.freeze({
  retry: {
    retryCodes: [14, 13], // UNAVAILABLE, INTERNAL
    backoffSettings: {
      initialRetryDelayMillis: 100,
      maxRetryDelayMillis: 60000,
      retryDelayMultiplier: 1.3,
    },
  },
  timeoutMillis: 30000,
});

/** gRPC metadata headers, keyed by session name. */
const metadataBySession = new Map<string, string[][]>();

interface SchemaCacheEntry {
  /** The exact ResultSetMetadata bytes this entry was built from. */
  bytes: Buffer;
  createRow: (values: Value[]) => NativeRow;
  /** False when the result set contains ARRAY/STRUCT and must fall back. */
  scalar: boolean;
  decoded: protos.google.spanner.v1.ResultSetMetadata;
}

/**
 * Row factories keyed by SQL text.
 *
 * Decoding ResultSetMetadata and rebuilding the column decoders on every
 * request is pure waste when the same statement is executed repeatedly. The
 * cached entry is only reused after a memcmp against the incoming metadata
 * bytes, so a schema change (ALTER TABLE, different column set) is detected
 * and the entry rebuilt -- this is a fast-path optimisation, never a
 * correctness assumption.
 */
const schemaCache = new Map<string, SchemaCacheEntry>();
const SCHEMA_CACHE_MAX = 256;

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

/**
 * Runs a SQL query through the Go shared core and returns a Readable that
 * emits ordinary Spanner `Row` objects.
 *
 * `onFallback` is invoked if the query turns out at runtime to be unsupported
 * -- currently only when the result set contains ARRAY/STRUCT columns, which
 * the core's cell encoding cannot represent. It must return the equivalent
 * stock JS stream, which is then piped into the returned stream. This always
 * happens before any row has been emitted, so the consumer never observes a
 * partial result.
 */
export function runStreamNative(
  database: DatabaseLike,
  query: string | Record<string, unknown>,
  onFallback?: () => NodeJS.ReadableStream,
  readOnly: protos.google.spanner.v1.TransactionOptions.IReadOnly = {returnReadTimestamp: true},
): Readable {
  const out = new Readable({
    objectMode: true,
    read() {
      // The core pushes as data arrives; backpressure is handled by the
      // 100-row batching inside the core.
    },
  });

  const addon = loadAddon();
  const handle = getCoreHandle();
  if (!addon || !handle) {
    process.nextTick(() =>
      out.destroy(new Error('Spanner Go shared core is not available')),
    );
    return out;
  }

  getSessionName(database, (err, sessionName) => {
    if (err || !sessionName) {
      out.destroy(err || new Error('No session'));
      return;
    }

    let requestBytes: Uint8Array;
    try {
      requestBytes = buildRequestBytes(sessionName, query, readOnly);
    } catch (e) {
      out.destroy(e as Error);
      return;
    }

    // Headers depend only on the session, which is stable for the life of the
    // process, so build them once per session instead of once per query.
    let metadata = metadataBySession.get(sessionName);
    if (!metadata) {
      metadata = [
        ['x-goog-request-params', `session=${encodeURIComponent(sessionName)}`],
        // NOTE: deliberately no 'x-goog-spanner-route-to-leader'. The stock
        // client adds that header only for readWrite/partitionedDml
        // transactions (see Snapshot#begin in transaction.ts). Sending it on a
        // single-use read-only query would route to the leader region and make
        // the two paths incomparable.
      ];
      metadataBySession.set(sessionName, metadata);
    }

    let createRow: ((values: Value[]) => NativeRow) | null = null;
    let fellBack = false;

    // The result-set schema is a function of the statement text, so that is
    // the cache key. Validated by memcmp against the returned bytes below.
    const cacheKey = typeof query === 'string' ? query : (query.sql as string);

    addon.executeStreamingSqlNative(
      handle,
      sessionName,
      metadata,
      requestBytes,
      GAX_OPTIONS,
      (cbErr, rows, telemetry, metadataPb) => {
        if (fellBack) {
          return;
        }
        if (cbErr) {
          out.destroy(cbErr);
          return;
        }

        // First batch carries the serialized ResultSetMetadata.
        if (metadataPb && metadataPb.length > 0 && !createRow) {
          try {
            // Fast path: same statement, same schema bytes as last time.
            // A memcmp is far cheaper than decoding the descriptor and
            // rebuilding every column decoder, and it still detects a schema
            // change rather than assuming one cannot happen.
            let entry = cacheKey ? schemaCache.get(cacheKey) : undefined;
            if (entry && !entry.bytes.equals(metadataPb)) {
              entry = undefined;
            }

            if (!entry) {
              const decoded =
                protos.google.spanner.v1.ResultSetMetadata.decode(metadataPb);
              const fields = (decoded.rowType?.fields || []) as IField[];
              const scalar = allColumnsScalar(fields);
              entry = {
                bytes: Buffer.from(metadataPb),
                createRow: scalar
                  ? makeRowFactory(fields)
                  : (null as unknown as (values: Value[]) => NativeRow),
                scalar,
                decoded,
              };
              if (cacheKey) {
                if (schemaCache.size >= SCHEMA_CACHE_MAX) {
                  schemaCache.clear();
                }
                schemaCache.set(cacheKey, entry);
              }
            }

            if (!entry.scalar) {
              // The core cannot represent ARRAY/STRUCT cells. Hand control
              // back to the stock JS path and relay its output. No row has
              // been emitted yet, so this is transparent to the consumer.
              fellBack = true;
              if (onFallback) {
                const stock = onFallback();
                stock.on('data', (row: unknown) => out.push(row));
                stock.on('end', () => out.push(null));
                stock.on('error', (e: Error) => out.destroy(e));
              } else {
                out.destroy(
                  new Error(
                    'Spanner Go shared core does not support ARRAY/STRUCT columns',
                  ),
                );
              }
              return;
            }

            createRow = entry.createRow;
            out.emit('response', {metadata: entry.decoded});
          } catch (e) {
            out.destroy(e as Error);
            return;
          }
        }

        if (rows === null || rows === undefined) {
          // End of stream.
          out.push(null);
          return;
        }

        if (telemetry) {
          out.emit('telemetry', telemetry);
        }

        if (!createRow) {
          out.destroy(
            new Error('Received result rows before result-set metadata'),
          );
          return;
        }

        for (let i = 0; i < rows.length; i++) {
          out.push(createRow(rows[i]));
        }
      },
    );
  });

  return out;
}
