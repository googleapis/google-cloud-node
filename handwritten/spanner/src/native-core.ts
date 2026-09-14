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
import {google} from '../protos/protos';

type ITypeProto = google.spanner.v1.Type;
type IField = google.spanner.v1.StructType.IField;

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
}

/** True when the caller asked for the Go shared core and it actually loaded. */
export function isNativeCoreEnabled(): boolean {
  const flag = (process.env.SPANNER_NATIVE_CORE || '').toLowerCase();
  if (flag !== 'go' && flag !== '1' && flag !== 'true') {
    return false;
  }
  return getCoreHandle() !== null;
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
  const ARRAY = google.spanner.v1.TypeCode.ARRAY;
  const STRUCT = google.spanner.v1.TypeCode.STRUCT;
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
    // Match the stock client: an implicit single-use strong read.
    transaction: {singleUse: {readOnly: {strong: true}}},
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
            google.spanner.v1.TypeCode as unknown as Record<string, number>
          )[typeObj.code];
        }
        paramTypes[key] = typeObj;
      }
    }
    requestMsg.params = {fields: encodedParams};
    requestMsg.paramTypes = paramTypes;
  }

  const message = google.spanner.v1.ExecuteSqlRequest.create(
    requestMsg as never,
  );
  return google.spanner.v1.ExecuteSqlRequest.encode(message).finish();
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
      requestBytes = buildRequestBytes(sessionName, query);
    } catch (e) {
      out.destroy(e as Error);
      return;
    }

    const metadata: string[][] = [
      [
        'x-goog-request-params',
        `session=${encodeURIComponent(sessionName)}`,
      ],
      ['x-goog-spanner-route-to-leader', 'true'],
    ];

    const gaxOptions = {
      retry: {
        retryCodes: [14, 13], // UNAVAILABLE, INTERNAL
        backoffSettings: {
          initialRetryDelayMillis: 100,
          maxRetryDelayMillis: 60000,
          retryDelayMultiplier: 1.3,
        },
      },
      timeoutMillis: 30000,
    };

    let createRow: ((values: Value[]) => NativeRow) | null = null;
    let fellBack = false;

    addon.executeStreamingSqlNative(
      handle,
      sessionName,
      metadata,
      requestBytes,
      gaxOptions,
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
            const decoded = google.spanner.v1.ResultSetMetadata.decode(
              metadataPb,
            );
            const fields = (decoded.rowType?.fields || []) as IField[];
            if (!allColumnsScalar(fields)) {
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
            createRow = makeRowFactory(fields);
            out.emit('response', {metadata: decoded});
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
