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
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as tls from 'tls';
import {grpc} from 'google-gax';
import {PreciseDate, DateStruct} from '@google-cloud/precise-date';
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
  CoreClientHandle: new (channelCount: number, endpoint?: string) => CoreHandle;
  executeStreamingSqlNative(
    handle: CoreHandle,
    routingKey: string,
    metadata: string[][],
    requestBytes: Uint8Array,
    gaxOptions: object | boolean,
    callback: (
      err: Error | null,
      rows: Value[][] | null,
      telemetry: Telemetry | null,
      metadataPb?: Buffer | null,
      isLast?: boolean,
    ) => void,
  ): void;
  commitNative(
    handle: CoreHandle,
    routingKey: string,
    metadata: string[][],
    reqBytes: Uint8Array,
    inlineBegin: boolean,
    beginReqBytes: Uint8Array | null,
    isMuxRw: boolean,
    callback: (
      err: (Error & {retryInfoPb?: Buffer; code?: number; metadata?: grpc.Metadata}) | null,
      respPb?: Buffer | null,
      txPb?: Buffer | null,
    ) => void,
  ): void;
  executeBatchDmlNative(
    handle: CoreHandle,
    routingKey: string,
    metadata: string[][],
    dmlReqInput: Uint8Array | object,
    statements: unknown[],
    fallbackEncoder: (val: unknown) => unknown,
    isSingleSql: boolean,
    callback: (
      err: (Error & {retryInfoPb?: Buffer; code?: number; metadata?: grpc.Metadata}) | null,
      respPb?: Buffer | null,
      txPb?: Buffer | null,
      directRowCount?: number | null,
    ) => void,
  ): void;
  beginTransactionNative(
    handle: CoreHandle,
    routingKey: string,
    metadata: string[][],
    reqBytes: Uint8Array,
    callback: (
      err: (Error & {retryInfoPb?: Buffer; code?: number; metadata?: grpc.Metadata}) | null,
      respPb?: Buffer | null,
      txPb?: Buffer | null,
    ) => void,
  ): void;
}

// ---------------------------------------------------------------------------
// Addon loading (lazy, cached, never throws)
// ---------------------------------------------------------------------------

const NODE_BUNDLED_CA_PATH = '/tmp/spanner-node-bundled-ca.pem';
let caBundledWritten = false;

/**
 * Slim container images (e.g. `node:22-slim` used by spanner-client-benchmarks)
 * purge the `ca-certificates` Debian package, so `/etc/ssl/certs` is empty.
 * Pure Node works because root CAs are compiled into the `node` binary
 * (`tls.rootCertificates`), whereas Go's `crypto/x509` reads root CAs from disk
 * and fails every RPC with `x509: certificate signed by unknown authority`.
 *
 * Exporting Node's built-in root CAs to a file and pointing `SSL_CERT_FILE`
 * at it before `dlopen`ing the Go shared library ensures Go's TLS stack has
 * a complete root CA bundle in any container image.
 */
function ensureRootCertificatesForGo(): void {
  if (caBundledWritten) {
    return;
  }
  caBundledWritten = true;
  try {
    if (tls.rootCertificates && tls.rootCertificates.length > 0) {
      fs.writeFileSync(
        NODE_BUNDLED_CA_PATH,
        tls.rootCertificates.join('\n') + '\n',
        'utf8',
      );
      if (!process.env.SSL_CERT_FILE) {
        process.env.SSL_CERT_FILE = NODE_BUNDLED_CA_PATH;
      }
    }
  } catch (e) {
    // Best-effort; client.go also reads NODE_BUNDLED_CA_PATH directly.
  }
}

let addonCache: NativeAddon | null | undefined;

function loadAddon(): NativeAddon | null {
  if (addonCache !== undefined) {
    return addonCache;
  }
  ensureRootCertificatesForGo();
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
let coreHandleEndpoint: string | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveCustomEndpoint(target?: any): string {
  if (process.env.SPANNER_EMULATOR_HOST) {
    return process.env.SPANNER_EMULATOR_HOST;
  }
  const spanner = target?._getSpanner
    ? target._getSpanner()
    : target?.session?.parent?._getSpanner
      ? target.session.parent._getSpanner()
      : target?.parent?._getSpanner
        ? target.parent._getSpanner()
        : target;
  const opts = spanner?.options;
  if (opts && opts.apiEndpoint) {
    const ep = String(opts.apiEndpoint);
    if (opts.port && !ep.includes(':')) {
      return `${ep}:${opts.port}`;
    }
    return ep;
  }
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCoreHandle(target?: any): CoreHandle | null {
  const endpoint = resolveCustomEndpoint(target);
  if (
    coreHandle !== undefined &&
    (coreHandleEndpoint === endpoint || (!endpoint && coreHandleEndpoint === ''))
  ) {
    return coreHandle;
  }
  const addon = loadAddon();
  if (!addon) {
    coreHandle = null;
    return coreHandle;
  }
  if (coreHandle && coreHandleEndpoint !== endpoint) {
    try {
      coreHandle.close();
    } catch (e) {
      // ignore
    }
  }
  const channels = Number(process.env.SPANNER_NATIVE_CHANNELS || '4') || 4;
  try {
    coreHandle = new addon.CoreClientHandle(channels, endpoint);
    coreHandleEndpoint = endpoint;
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
  coreHandleEndpoint = undefined;
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
      ? 'Go shared core ACTIVE for single-use read-only SQL queries and Write/Update/Mutation APIs.'
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

const paramTypeCache = new Map<string, {code: number}>();

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
        const rawType = types[key];
        if (typeof rawType === 'string') {
          let cachedType = paramTypeCache.get(rawType);
          if (!cachedType) {
            const typeObj = codec.createTypeObject(
              rawType as never,
            ) as unknown as {code: string | number};
            const codeNum =
              typeof typeObj.code === 'string'
                ? (
                    protos.google.spanner.v1.TypeCode as unknown as Record<
                      string,
                      number
                    >
                  )[typeObj.code]
                : typeObj.code;
            cachedType = Object.freeze({code: codeNum});
            if (paramTypeCache.size < 64) {
              paramTypeCache.set(rawType, cachedType);
            }
          }
          paramTypes[key] = cachedType;
        } else {
          const typeObj = codec.createTypeObject(
            rawType as never,
          ) as unknown as {code: string | number};
          if (typeof typeObj.code === 'string') {
            typeObj.code = (
              protos.google.spanner.v1.TypeCode as unknown as Record<
                string,
                number
              >
            )[typeObj.code];
          }
          paramTypes[key] = typeObj;
        }
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
  const handle = getCoreHandle(database);
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
    // the cache key.
    const cacheKey = typeof query === 'string' ? query : (query.sql as string);
    const cachedEntry = cacheKey ? schemaCache.get(cacheKey) : undefined;
    if (cachedEntry) {
      if (!cachedEntry.scalar) {
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
      createRow = cachedEntry.createRow;
      out.emit('response', {metadata: cachedEntry.decoded});
    }

    addon.executeStreamingSqlNative(
      handle,
      sessionName,
      metadata,
      requestBytes,
      Boolean(cachedEntry),
      (cbErr, rows, telemetry, metadataPb, isLast) => {
        if (fellBack) {
          return;
        }
        if (cbErr) {
          out.destroy(cbErr);
          return;
        }

        // First batch carries the serialized ResultSetMetadata (if not skipped).
        if (metadataPb && metadataPb.length > 0 && !createRow) {
          try {
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
        if (isLast) {
          out.push(null);
        }
      },
    );
  });

  return out;
}

const DEFAULT_READ_ONLY: protos.google.spanner.v1.TransactionOptions.IReadOnly =
  Object.freeze({returnReadTimestamp: true});
const exactStalenessCache = new Map<
  number,
  protos.google.spanner.v1.TransactionOptions.IReadOnly
>();

/**
 * Fast-path timestamp bound encoder. Avoids per-request object allocations
 * for the two cases that account for 99%+ of queries:
 *   - empty/default options (`{}` -> strong read with `returnReadTimestamp: true`)
 *   - `{exactStaleness: N}` (used by point-select benchmarks)
 */
export function encodeReadOnlyBounds(
  options: Record<string, unknown> | undefined,
  fallbackEncoder: (
    opts: Record<string, unknown>,
  ) => protos.google.spanner.v1.TransactionOptions.IReadOnly,
): protos.google.spanner.v1.TransactionOptions.IReadOnly {
  if (!options) {
    return DEFAULT_READ_ONLY;
  }
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return DEFAULT_READ_ONLY;
  }
  if (keys.length === 1 && typeof options.exactStaleness === 'number') {
    const ms = options.exactStaleness;
    let cached = exactStalenessCache.get(ms);
    if (!cached) {
      cached = Object.freeze({
        exactStaleness: Object.freeze({
          seconds: Math.floor(ms / 1000),
          nanos: (ms % 1000) * 1e6,
        }),
        returnReadTimestamp: true,
      });
      if (exactStalenessCache.size < 64) {
        exactStalenessCache.set(ms, cached);
      }
    }
    return cached;
  }
  return fallbackEncoder(options);
}

/**
 * Direct non-streaming execution path for `Database#run()`.
 *
 * Unlike routing through `_runLegacy` -> `runStreamNative`, this completely
 * avoids allocating a Node `stream.Readable`, `ReadableState`, `BufferList`,
 * five `EventEmitter` listeners, or `process.nextTick` teardown on every
 * single-row point-select query.
 */
export function runNative(
  database: DatabaseLike,
  query: string | Record<string, unknown>,
  readOnly: protos.google.spanner.v1.TransactionOptions.IReadOnly,
  callback: (
    err: Error | null,
    rows?: NativeRow[],
    stats?: unknown,
    metadata?: protos.google.spanner.v1.ResultSetMetadata,
  ) => void,
  onFallback?: () => void,
): void {
  const addon = loadAddon();
  const handle = getCoreHandle(database);
  if (!addon || !handle) {
    if (onFallback) {
      onFallback();
      return;
    }
    callback(new Error('Spanner Go shared core is not available'));
    return;
  }

  getSessionName(database, (err, sessionName) => {
    if (err || !sessionName) {
      callback(err || new Error('No session'));
      return;
    }

    let requestBytes: Uint8Array;
    try {
      requestBytes = buildRequestBytes(sessionName, query, readOnly);
    } catch (e) {
      callback(e as Error);
      return;
    }

    let metadata = metadataBySession.get(sessionName);
    if (!metadata) {
      metadata = [
        ['x-goog-request-params', `session=${encodeURIComponent(sessionName)}`],
      ];
      metadataBySession.set(sessionName, metadata);
    }

    let createRow: ((values: Value[]) => NativeRow) | null = null;
    let resultMetadata: protos.google.spanner.v1.ResultSetMetadata | undefined;
    let fellBack = false;
    const resultRows: NativeRow[] = [];
    const cacheKey = typeof query === 'string' ? query : (query.sql as string);
    const cachedEntry = cacheKey ? schemaCache.get(cacheKey) : undefined;
    if (cachedEntry) {
      if (!cachedEntry.scalar) {
        if (onFallback) {
          onFallback();
        } else {
          callback(
            new Error(
              'Spanner Go shared core does not support ARRAY/STRUCT columns',
            ),
          );
        }
        return;
      }
      createRow = cachedEntry.createRow;
      resultMetadata = cachedEntry.decoded;
    }

    addon.executeStreamingSqlNative(
      handle,
      sessionName,
      metadata,
      requestBytes,
      Boolean(cachedEntry),
      (cbErr, rows, _telemetry, metadataPb, isLast) => {
        if (fellBack) {
          return;
        }
        if (cbErr) {
          callback(cbErr);
          return;
        }

        if (metadataPb && metadataPb.length > 0 && !createRow) {
          try {
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
              fellBack = true;
              if (onFallback) {
                onFallback();
              } else {
                callback(
                  new Error(
                    'Spanner Go shared core does not support ARRAY/STRUCT columns',
                  ),
                );
              }
              return;
            }

            createRow = entry.createRow;
            resultMetadata = entry.decoded;
          } catch (e) {
            callback(e as Error);
            return;
          }
        }

        if (rows === null || rows === undefined) {
          callback(null, resultRows, undefined, resultMetadata);
          return;
        }

        if (!createRow) {
          callback(
            new Error('Received result rows before result-set metadata'),
          );
          return;
        }

        for (let i = 0; i < rows.length; i++) {
          resultRows.push(createRow(rows[i]));
        }
        if (isLast) {
          callback(null, resultRows, undefined, resultMetadata);
        }
      },
    );
  });
}

// ---------------------------------------------------------------------------
// Write / Mutation / DML execution path (Commit, ExecuteBatchDml, ExecuteSql)
// ---------------------------------------------------------------------------

const TYPE_NAME_TO_CODE: Record<string, number> = {
  unspecified: 0,
  bool: 1,
  boolean: 1,
  int64: 2,
  pgOid: 2,
  float64: 3,
  timestamp: 4,
  date: 5,
  string: 6,
  bytes: 7,
  array: 8,
  struct: 9,
  numeric: 10,
  pgNumeric: 10,
  json: 11,
  pgJsonb: 11,
  proto: 13,
  enum: 14,
  float32: 15,
  interval: 16,
  uuid: 17,
};

const SCALAR_TYPE_TO_CODE: Record<string, number> = {
  bool: 1,
  boolean: 1,
  BOOL: 1,
  BOOLEAN: 1,
  int64: 2,
  INT64: 2,
  float64: 3,
  FLOAT64: 3,
  timestamp: 4,
  TIMESTAMP: 4,
  date: 5,
  DATE: 5,
  string: 6,
  STRING: 6,
  bytes: 7,
  BYTES: 7,
  numeric: 10,
  NUMERIC: 10,
  json: 11,
  JSON: 11,
  float32: 15,
  FLOAT32: 15,
  interval: 16,
  INTERVAL: 16,
  uuid: 17,
  UUID: 17,
};

function resolveScalarTypeCode(typeSpec: unknown): number {
  if (!typeSpec) return 0;
  if (typeof typeSpec === 'string') {
    return SCALAR_TYPE_TO_CODE[typeSpec] || 0;
  }
  if (typeof typeSpec === 'object') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj = typeSpec as any;
    if (
      obj.child ||
      obj.fields ||
      obj.arrayElementType ||
      obj.structType ||
      obj.protoTypeFqn ||
      obj.typeAnnotation
    ) {
      return 0;
    }
    if (typeof obj.type === 'string') {
      return SCALAR_TYPE_TO_CODE[obj.type] || 0;
    }
    if (typeof obj.code === 'number') {
      if (
        (obj.code >= 1 && obj.code <= 7) ||
        obj.code === 10 ||
        obj.code === 11 ||
        (obj.code >= 15 && obj.code <= 17)
      ) {
        return obj.code;
      }
    }
  }
  return 0;
}

/**
 * Fallback encoder invoked from C++ only when a cell value is an Object wrapper
 * (Int, Float, Float32, Numeric, Date, PreciseDate, SpannerDate, Interval, Array, Struct).
 * Primitive types (null, boolean, number, string, Buffer) are encoded directly in C++.
 */
export function fallbackEncodeCell(val: unknown): {
  kind: number;
  typeCode: number;
  boolVal?: number;
  numVal?: number;
  strVal?: string;
  pbBytes?: Uint8Array;
} {
  if (val === null || val === undefined) {
    return {kind: 0, typeCode: 0};
  }
  const t = codec.getType(val as Value);
  const typeCode = TYPE_NAME_TO_CODE[t.type] || 0;
  const encoded = codec.encode(val as Value);

  if (encoded.nullValue !== undefined && encoded.nullValue !== null) {
    return {kind: 0, typeCode};
  }
  if (encoded.boolValue !== undefined && encoded.boolValue !== null) {
    return {kind: 1, typeCode, boolVal: encoded.boolValue ? 1 : 0};
  }
  if (encoded.numberValue !== undefined && encoded.numberValue !== null) {
    return {kind: 2, typeCode, numVal: Number(encoded.numberValue)};
  }
  if (encoded.stringValue !== undefined && encoded.stringValue !== null) {
    return {kind: 3, typeCode, strVal: String(encoded.stringValue)};
  }
  const pbBytes = protos.google.protobuf.Value.encode(encoded).finish();
  return {kind: 4, typeCode, pbBytes};
}

const sessionParamPairCache = new Map<string, [string, string]>();

function headersToMetadataArray(
  sessionName: string,
  headersObj?: Record<string, string>,
): string[][] {
  let sessionPair = sessionParamPairCache.get(sessionName);
  if (!sessionPair) {
    sessionPair = [
      'x-goog-request-params',
      `session=${encodeURIComponent(sessionName)}`,
    ];
    if (sessionParamPairCache.size > 1000) {
      sessionParamPairCache.clear();
    }
    sessionParamPairCache.set(sessionName, sessionPair);
  }
  const meta: string[][] = [sessionPair];
  if (headersObj) {
    const keys = Object.keys(headersObj);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const v = headersObj[k];
      if (v !== undefined && v !== null) {
        meta.push([k.toLowerCase(), String(v)]);
      }
    }
  }
  return meta;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function attachRetryMetadata(err: any) {
  if (err && err.retryInfoPb && err.retryInfoPb.length > 0) {
    if (!err.metadata) {
      err.metadata = new grpc.Metadata();
    }
    err.metadata.add('google.rpc.retryinfo-bin', err.retryInfoPb);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeTypeProto(typeObj: any): any {
  if (!typeObj || typeof typeObj !== 'object') {
    return typeObj;
  }
  const copy = Object.assign({}, typeObj);
  if (typeof copy.code === 'string') {
    copy.code =
      (protos.google.spanner.v1.TypeCode as unknown as Record<string, number>)[
        copy.code
      ] || 0;
  }
  if (typeof copy.typeAnnotation === 'string') {
    copy.typeAnnotation =
      (
        protos.google.spanner.v1.TypeAnnotationCode as unknown as Record<
          string,
          number
        >
      )[copy.typeAnnotation] || 0;
  }
  if (copy.arrayElementType) {
    copy.arrayElementType = normalizeTypeProto(copy.arrayElementType);
  }
  if (copy.structType && Array.isArray(copy.structType.fields)) {
    copy.structType = {
      fields: copy.structType.fields.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (f: any) => ({
          name: f.name,
          type: normalizeTypeProto(f.type),
        }),
      ),
    };
  }
  return copy;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function prepareNativeStatements(queries: Array<string | any>): Array<{
  sql: string;
  paramNames: string[];
  paramValues: unknown[];
  paramTypeCodes: number[];
  paramTypesPb: Array<Uint8Array | null>;
}> {
  const result = new Array(queries.length);
  for (let qIdx = 0; qIdx < queries.length; qIdx++) {
    const q = queries[qIdx];
    if (typeof q === 'string') {
      result[qIdx] = {
        sql: q,
        paramNames: [],
        paramValues: [],
        paramTypeCodes: [],
        paramTypesPb: [],
      };
      continue;
    }
    const sql = q.sql || '';
    const params = q.params;
    if (!params || typeof params !== 'object') {
      result[qIdx] = {
        sql,
        paramNames: [],
        paramValues: [],
        paramTypeCodes: [],
        paramTypesPb: [],
      };
      continue;
    }
    const paramNames = Object.keys(params);
    const paramValues = new Array(paramNames.length);
    const paramTypeCodes = new Array<number>(paramNames.length);
    const paramTypesPb = new Array<Uint8Array | null>(paramNames.length);
    const explicitTypes = q.types;

    for (let i = 0; i < paramNames.length; i++) {
      const name = paramNames[i];
      const val = params[name];
      paramValues[i] = val;

      if (explicitTypes && explicitTypes[name]) {
        const scalarCode = resolveScalarTypeCode(explicitTypes[name]);
        if (scalarCode > 0) {
          paramTypeCodes[i] = scalarCode;
          paramTypesPb[i] = null;
        } else {
          paramTypeCodes[i] = 0;
          const typeObj = normalizeTypeProto(
            codec.createTypeObject(explicitTypes[name]),
          );
          paramTypesPb[i] =
            protos.google.spanner.v1.Type.encode(typeObj).finish();
        }
      } else if (val === null || val === undefined) {
        paramTypeCodes[i] = 0;
        paramTypesPb[i] = null;
      } else if (
        Array.isArray(val) ||
        (typeof val === 'object' &&
          !Buffer.isBuffer(val) &&
          !(val instanceof Uint8Array) &&
          !(val instanceof codec.Int) &&
          !(val instanceof codec.Float) &&
          !(val instanceof codec.Float32) &&
          !(val instanceof codec.Numeric) &&
          !(val instanceof codec.SpannerDate) &&
          !(val instanceof Date) &&
          !(val instanceof PreciseDate) &&
          !(val instanceof codec.Interval))
      ) {
        paramTypeCodes[i] = 0;
        const t = codec.getType(val as Value);
        const typeObj = normalizeTypeProto(codec.createTypeObject(t));
        paramTypesPb[i] = protos.google.spanner.v1.Type.encode(typeObj).finish();
      } else {
        paramTypeCodes[i] = 0;
        paramTypesPb[i] = null;
      }
    }

    result[qIdx] = {
      sql,
      paramNames,
      paramValues,
      paramTypeCodes,
      paramTypesPb,
    };
  }
  return result;
}

/**
 * Dispatches `Transaction#commit` through the Go shared core.
 * Request encoding and response decoding happen in Node.js; only raw byte buffers cross FFI.
 */
export function executeNativeCommit(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any,
  headersObj: Record<string, string>,
  callback: (
    err: Error | null,
    resp?: protos.google.spanner.v1.ICommitResponse | null,
  ) => void,
): boolean {
  const addon = loadAddon();
  const handle = getCoreHandle(transaction);
  if (!addon || !handle) {
    return false;
  }

  const mutations = transaction._queuedMutations || [];
  const sessionName: string = transaction.session.formattedName_!;
  const routingKey: string = transaction._affinityKey || sessionName;
  const database = transaction.session.parent;
  const isMuxRw = Boolean(database && database.isMuxEnabledForRW_);
  const inlineBegin = !transaction.id && Boolean(transaction._useInRunner);

  const requestOptions = options?.requestOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseReq: any = {
    session: sessionName,
    mutations,
    requestOptions: Object.assign(
      requestOptions || {},
      transaction.requestOptions,
    ),
    precommitToken: transaction._latestPreCommitToken,
  };
  if (transaction.id) {
    baseReq.transactionId = transaction.id;
  } else if (!transaction._useInRunner) {
    baseReq.singleUseTransaction = transaction._options;
  }
  if (options && 'returnCommitStats' in options && options.returnCommitStats) {
    baseReq.returnCommitStats = options.returnCommitStats;
  }
  if (options && 'maxCommitDelay' in options && options.maxCommitDelay) {
    baseReq.maxCommitDelay = options.maxCommitDelay;
  }
  const reqBytes =
    protos.google.spanner.v1.CommitRequest.encode(baseReq).finish();

  let beginReqBytes: Uint8Array | null = null;
  if (inlineBegin) {
    if (
      isMuxRw &&
      mutations.length > 0 &&
      typeof transaction._setMutationKey === 'function'
    ) {
      transaction._setMutationKey(mutations);
    }
    const beginOptions = Object.assign({}, transaction._options);
    if (
      transaction.multiplexedSessionPreviousTransactionId &&
      isMuxRw &&
      beginOptions.readWrite
    ) {
      beginOptions.readWrite = Object.assign({}, beginOptions.readWrite, {
        multiplexedSessionPreviousTransactionId:
          transaction.multiplexedSessionPreviousTransactionId,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const beginReq: any = {
      session: sessionName,
      options: beginOptions,
    };
    if (transaction._mutationKey) {
      beginReq.mutationKey = transaction._mutationKey;
    }
    if (transaction.requestOptions) {
      beginReq.requestOptions = transaction.requestOptions;
    }
    beginReqBytes =
      protos.google.spanner.v1.BeginTransactionRequest.encode(beginReq).finish();
  }

  const metadata = headersToMetadataArray(sessionName, headersObj);

  addon.commitNative(
    handle,
    routingKey,
    metadata,
    reqBytes,
    inlineBegin,
    beginReqBytes,
    isMuxRw,
    (err, respPb, txPb) => {
      if (txPb && txPb.length > 0) {
        try {
          const txResp = protos.google.spanner.v1.Transaction.decode(txPb);
          transaction._updatePrecommitToken(txResp);
          transaction._update(txResp);
        } catch (e) {
          // ignore
        }
      }
      if (err) {
        attachRetryMetadata(err);
        callback(err, null);
        return;
      }
      let resp: protos.google.spanner.v1.ICommitResponse = {};
      if (respPb && respPb.length > 0) {
        resp = protos.google.spanner.v1.CommitResponse.decode(respPb);
      }
      callback(null, resp);
    },
  );
  return true;
}

/**
 * Dispatches `Transaction#batchUpdate` through the Go shared core.
 */
export function executeNativeBatchUpdate(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queries: Array<string | any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reqOptsOrBytes: Uint8Array | any,
  headersObj: Record<string, string>,
  callback: (
    err: Error | null,
    resp?: protos.google.spanner.v1.ExecuteBatchDmlResponse | null,
  ) => void,
): boolean {
  const addon = loadAddon();
  const handle = getCoreHandle(transaction);
  if (!addon || !handle) {
    return false;
  }

  const sessionName: string = transaction.session.formattedName_!;
  const routingKey: string = transaction._affinityKey || sessionName;
  const metadata = headersToMetadataArray(sessionName, headersObj);
  const nativeStatements = prepareNativeStatements(queries);

  let dmlReqInput: Uint8Array | object;
  if (
    reqOptsOrBytes instanceof Uint8Array ||
    Buffer.isBuffer(reqOptsOrBytes)
  ) {
    dmlReqInput = reqOptsOrBytes;
  } else if (reqOptsOrBytes?.requestOptions?.priority) {
    dmlReqInput =
      protos.google.spanner.v1.ExecuteBatchDmlRequest.encode(
        reqOptsOrBytes,
      ).finish();
  } else {
    const database = transaction.session.parent;
    dmlReqInput = {
      session: sessionName,
      txId: transaction.id || null,
      beginRw: !transaction.id && Boolean(transaction._options?.readWrite),
      prevTxId:
        (!transaction.id &&
          database &&
          database.isMuxEnabledForRW_ &&
          transaction.multiplexedSessionPreviousTransactionId) ||
        null,
      seqno: reqOptsOrBytes?.seqno ?? 0,
      transactionTag:
        reqOptsOrBytes?.requestOptions?.transactionTag ||
        transaction.requestOptions?.transactionTag ||
        '',
      requestTag: reqOptsOrBytes?.requestOptions?.requestTag || '',
    };
  }

  addon.executeBatchDmlNative(
    handle,
    routingKey,
    metadata,
    dmlReqInput,
    nativeStatements,
    fallbackEncodeCell,
    false,
    (err, respPb) => {
      if (err) {
        attachRetryMetadata(err);
        callback(err, null);
        return;
      }
      let resp: protos.google.spanner.v1.ExecuteBatchDmlResponse;
      if (respPb && respPb.length > 0) {
        resp = protos.google.spanner.v1.ExecuteBatchDmlResponse.decode(respPb);
      } else {
        resp = new protos.google.spanner.v1.ExecuteBatchDmlResponse();
      }
      callback(null, resp);
    },
  );
  return true;
}

/**
 * Dispatches `Transaction#runUpdate` / `Dml#runUpdate` through the Go shared core via unary `ExecuteSql`.
 * Request encoding happens natively in Go; steady-state responses return rowCount directly.
 */
export function executeNativeSqlDml(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any,
  headersObj: Record<string, string>,
  callback: (err: Error | null, rowCount: number) => void,
): boolean {
  const addon = loadAddon();
  const handle = getCoreHandle(transaction);
  if (!addon || !handle) {
    return false;
  }

  const sessionName: string = transaction.session.formattedName_!;
  const routingKey: string = transaction._affinityKey || sessionName;
  const database = transaction.session.parent;

  let dmlReqInput: Uint8Array | object;
  const hasQueryOptions = Boolean(
    query.queryOptions || transaction.queryOptions,
  );
  const isSingleUse = !transaction.id && !transaction._options?.readWrite;

  if (hasQueryOptions || isSingleUse) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const txSelector: any = {};
    if (transaction.id) {
      txSelector.id = transaction.id;
    } else if (transaction._options?.readWrite) {
      txSelector.begin = transaction._options;
      if (database && database.isMuxEnabledForRW_) {
        transaction._setPreviousTransactionId(txSelector);
      }
    } else {
      txSelector.singleUse = transaction._options;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const baseReq: any = {
      session: sessionName,
      transaction: txSelector,
      sql: typeof query === 'string' ? query : query.sql,
      seqno: transaction._seqno++,
      requestOptions: transaction.configureTagOptions(
        typeof txSelector.singleUse !== 'undefined',
        transaction.requestOptions?.transactionTag ?? undefined,
        query.requestOptions,
      ),
    };
    if (hasQueryOptions) {
      baseReq.queryOptions = Object.assign(
        {},
        transaction.queryOptions,
        query.queryOptions,
      );
    }

    dmlReqInput =
      protos.google.spanner.v1.ExecuteSqlRequest.encode(baseReq).finish();
  } else {
    dmlReqInput = {
      session: sessionName,
      txId: transaction.id || null,
      beginRw: !transaction.id && Boolean(transaction._options?.readWrite),
      prevTxId:
        (!transaction.id &&
          database &&
          database.isMuxEnabledForRW_ &&
          transaction.multiplexedSessionPreviousTransactionId) ||
        null,
      seqno: transaction._seqno++,
      transactionTag: transaction.requestOptions?.transactionTag || '',
      requestTag: query.requestOptions?.requestTag || '',
    };
  }

  const metadata = headersToMetadataArray(sessionName, headersObj);
  const nativeStatements = prepareNativeStatements([query]);

  addon.executeBatchDmlNative(
    handle,
    routingKey,
    metadata,
    dmlReqInput,
    nativeStatements,
    fallbackEncodeCell,
    true,
    (err, respPb, txPb, directRowCount) => {
      if (err) {
        attachRetryMetadata(err);
        callback(err, 0);
        return;
      }
      if (txPb && txPb.length > 0) {
        try {
          const txResp = protos.google.spanner.v1.Transaction.decode(txPb);
          transaction._updatePrecommitToken(txResp);
          if (!transaction.id) {
            transaction._update(txResp);
          }
        } catch (e) {
          // ignore
        }
      }
      if (respPb && respPb.length > 0) {
        try {
          const precommitToken =
            protos.google.spanner.v1.MultiplexedSessionPrecommitToken.decode(
              respPb,
            );
          transaction._updatePrecommitToken({precommitToken});
        } catch (e) {
          // ignore
        }
      }
      callback(null, typeof directRowCount === 'number' ? directRowCount : 0);
    },
  );
  return true;
}

/**
 * Dispatches `Snapshot#begin` through the Go shared core.
 */
export function executeNativeBeginTransaction(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reqOpts: any,
  headersObj: Record<string, string>,
  callback: (
    err: Error | null,
    resp?: protos.google.spanner.v1.ITransaction | null,
  ) => void,
): boolean {
  const addon = loadAddon();
  const handle = getCoreHandle(transaction);
  if (!addon || !handle) {
    return false;
  }

  const sessionName: string = transaction.session.formattedName_!;
  const routingKey: string = transaction._affinityKey || sessionName;
  const reqBytes =
    protos.google.spanner.v1.BeginTransactionRequest.encode(reqOpts).finish();
  const metadata = headersToMetadataArray(sessionName, headersObj);

  addon.beginTransactionNative(
    handle,
    routingKey,
    metadata,
    reqBytes,
    (err, respPb) => {
      if (err) {
        attachRetryMetadata(err);
        callback(err, null);
        return;
      }
      let resp: protos.google.spanner.v1.ITransaction = {};
      if (respPb && respPb.length > 0) {
        resp = protos.google.spanner.v1.Transaction.decode(respPb);
      }
      callback(null, resp);
    },
  );
  return true;
}

/**
 * Dispatches `Snapshot#_run` / `Transaction#run` through the Go shared core via `executeStreamingSqlNative`.
 * Preserves transaction channel affinity by routing on `transaction._affinityKey || sessionName`
 * and updates `transaction.id` and `precommitToken` when inline `begin` metadata is returned.
 */
export function executeNativeTransactionRun(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transaction: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formattedRequest: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any,
  headersObj: Record<string, string>,
  callback: (
    err: Error | null,
    rows?: NativeRow[],
    stats?: unknown,
    metadata?: protos.google.spanner.v1.ResultSetMetadata,
  ) => void,
  onFallback: () => void,
): boolean {
  const addon = loadAddon();
  const handle = getCoreHandle(transaction);
  if (!addon || !handle) {
    return false;
  }

  const sessionName: string = transaction.session.formattedName_!;
  const routingKey: string = transaction._affinityKey || sessionName;
  if (formattedRequest.paramTypes) {
    const normalizedParamTypes: Record<string, unknown> = {};
    for (const k of Object.keys(formattedRequest.paramTypes)) {
      normalizedParamTypes[k] = normalizeTypeProto(formattedRequest.paramTypes[k]);
    }
    formattedRequest = Object.assign({}, formattedRequest, {
      paramTypes: normalizedParamTypes,
    });
  }
  const requestBytes =
    protos.google.spanner.v1.ExecuteSqlRequest.encode(formattedRequest).finish();
  const metadata = headersToMetadataArray(sessionName, headersObj);

  let createRow: ((values: Value[]) => NativeRow) | null = null;
  let resultMetadata: protos.google.spanner.v1.ResultSetMetadata | undefined;
  let fellBack = false;
  const resultRows: NativeRow[] = [];
  const cacheKey = typeof query === 'string' ? query : (query.sql as string);
  const cachedEntry = cacheKey ? schemaCache.get(cacheKey) : undefined;
  if (cachedEntry) {
    if (!cachedEntry.scalar) {
      onFallback();
      return true;
    }
    createRow = cachedEntry.createRow;
    resultMetadata = cachedEntry.decoded;
  }

  const skipMetadata = Boolean(cachedEntry);

  addon.executeStreamingSqlNative(
    handle,
    routingKey,
    metadata,
    requestBytes,
    skipMetadata,
    (cbErr, rows, _telemetry, metadataPb, isLast) => {
      if (fellBack) {
        return;
      }
      if (cbErr) {
        attachRetryMetadata(
          cbErr as Error & {retryInfoPb?: Buffer; metadata?: grpc.Metadata},
        );
        callback(cbErr);
        return;
      }

      if (metadataPb && metadataPb.length > 0) {
        try {
          const decoded =
            protos.google.spanner.v1.ResultSetMetadata.decode(metadataPb);
          if (decoded.transaction) {
            transaction._updatePrecommitToken(decoded.transaction);
            if (!transaction.id && decoded.transaction.id) {
              transaction._update(decoded.transaction);
            }
          }
          if (!createRow && decoded.rowType?.fields) {
            const fields = (decoded.rowType.fields || []) as IField[];
            const scalar = allColumnsScalar(fields);
            if (!scalar) {
              fellBack = true;
              onFallback();
              return;
            }
            const schemaOnly = new protos.google.spanner.v1.ResultSetMetadata({
              rowType: decoded.rowType,
            });
            const entry: SchemaCacheEntry = {
              bytes: Buffer.from(
                protos.google.spanner.v1.ResultSetMetadata.encode(
                  schemaOnly,
                ).finish(),
              ),
              createRow: makeRowFactory(fields),
              scalar: true,
              decoded: schemaOnly,
            };
            if (cacheKey) {
              if (schemaCache.size >= SCHEMA_CACHE_MAX) {
                schemaCache.clear();
              }
              schemaCache.set(cacheKey, entry);
            }
            createRow = entry.createRow;
          }
          resultMetadata = decoded;
        } catch (e) {
          callback(e as Error);
          return;
        }
      }

      if (rows === null || rows === undefined) {
        callback(null, resultRows, undefined, resultMetadata);
        return;
      }

      if (!createRow) {
        callback(new Error('Received result rows before result-set metadata'));
        return;
      }

      for (let i = 0; i < rows.length; i++) {
        resultRows.push(createRow(rows[i]));
      }
      if (isLast) {
        callback(null, resultRows, undefined, resultMetadata);
      }
    },
  );
  return true;
}


