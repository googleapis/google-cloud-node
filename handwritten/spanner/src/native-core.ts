/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as path from 'path';
import * as tls from 'tls';
import {Transform} from 'stream';
import * as streamEvents from 'stream-events';
import {grpc, GoogleError} from 'google-gax';
import {context, trace} from '@opentelemetry/api';
import {protos} from '@google-cloud/spanner-api';
import google = protos.google;
import {
  PartialResultStream,
  Row,
  RowImpl,
  RowOptions,
  createFieldDecoders,
  formatRow,
} from './partial-result-stream';
import {DeadlineError} from './transaction-runner';
import {codec, Int, Float, Numeric, Value} from './codec';
import {isTracingEnabled} from './instrument';
import {isAFEServerTimingEnabled} from './common';
import {MetricsTracer} from './metrics/metrics-tracer';
import {MetricsTracerFactory} from './metrics/metrics-tracer-factory';
import {craftRequestId} from './request_id_header';

const originalDecode = codec.decode;
const decodeTimestamp = codec.getDecoder({
  code: 'TIMESTAMP',
} as unknown as google.spanner.v1.Type);

interface NativeBatchResult {
  status: number; // 0 = OK, 1 = EOF (may also contain final rows), <0 = Error
  errorCode?: number;
  errorMessage?: string;
  retryInfoBytes?: Buffer;
  statusBytes?: Buffer;
  trailersJson?: string;
  metadataBytes?: Buffer;
  statsBytes?: Buffer;
  precommitBytes?: Buffer;
  hasReadTimestamp?: boolean;
  readTimestampSec?: number;
  readTimestampNanos?: number;
  schemaHash?: number;
  requestId?: string;
  numRows?: number;
  numCols?: number;
  cells?: Value[];
  gfeLatencyMs?: number;
  afeLatencyMs?: number;
  attemptCount?: number;
  directPathUsed?: boolean;
  logsJson?: string;
}

interface SpannerGoAddon {
  init(
    endpoint: string,
    numChannels: number,
    usePlaintext: number,
    disableBuiltInAuth: number,
    enableDirectAccess: number,
    userAgent: string,
    dcpEnabled?: number,
    dcpInitialChannels?: number,
    dcpMinChannels?: number,
    dcpMaxChannels?: number,
    dcpMaxRpcPerChannel?: number,
    dcpMinRpcPerChannel?: number,
    dcpSelectionStrategy?: number,
  ): number;
  close(serviceHandle: number): number;
  executeStreamingSql(
    serviceHandle: number,
    routingKey: string,
    reqBuffer: Buffer,
    headersJson: string,
    timeoutMs: number,
    skipMetadata: number,
    batchRowSize: number,
    callback?: (err: Error | null, res: NativeBatchResult) => boolean | void,
  ): number;
  nextBatch(
    streamHandle: number,
    callback: (err: Error | null, res: NativeBatchResult) => void,
  ): void;
  closeStream(streamHandle: number): void;
  pauseStream?(streamHandle: number): void;
  resumeStream?(streamHandle: number): void;
  setRootCertsPEM?(pem: string): void;
  setNextUniverseDomain?(ud: string): void;
  getLastInitError?(): string;
}

const PROTO_TO_OBJECT_OPTS = {
  longs: String,
  enums: String,
  bytes: Buffer,
  defaults: true,
  arrays: true,
  objects: true,
  oneofs: true,
};

const GRPC_CODE_NAMES: {[code: number]: string} = {
  0: 'OK',
  1: 'CANCELLED',
  2: 'UNKNOWN',
  3: 'INVALID_ARGUMENT',
  4: 'DEADLINE_EXCEEDED',
  5: 'NOT_FOUND',
  6: 'ALREADY_EXISTS',
  7: 'PERMISSION_DENIED',
  8: 'RESOURCE_EXHAUSTED',
  9: 'FAILED_PRECONDITION',
  10: 'ABORTED',
  11: 'OUT_OF_RANGE',
  12: 'UNIMPLEMENTED',
  13: 'INTERNAL',
  14: 'UNAVAILABLE',
  15: 'DATA_LOSS',
  16: 'UNAUTHENTICATED',
};

const TYPE_CODE_MAP: {[k: string]: number} = {
  TYPE_CODE_UNSPECIFIED: 0,
  BOOL: 1,
  INT64: 2,
  FLOAT64: 3,
  TIMESTAMP: 4,
  DATE: 5,
  STRING: 6,
  BYTES: 7,
  ARRAY: 8,
  STRUCT: 9,
  NUMERIC: 10,
  JSON: 11,
  PROTO: 13,
  ENUM: 14,
  FLOAT32: 15,
  INTERVAL: 16,
  UUID: 17,
};

const TYPE_ANNOTATION_MAP: {[k: string]: number} = {
  TYPE_ANNOTATION_CODE_UNSPECIFIED: 0,
  PG_NUMERIC: 2,
  PG_JSONB: 3,
  PG_OID: 4,
};

const QUERY_MODE_MAP: {[k: string]: number} = {
  NORMAL: 0,
  PLAN: 1,
  PROFILE: 2,
  WITH_STATS: 3,
  WITH_PLAN_AND_STATS: 4,
};

const PRIORITY_MAP: {[k: string]: number} = {
  PRIORITY_UNSPECIFIED: 0,
  PRIORITY_LOW: 1,
  PRIORITY_MEDIUM: 2,
  PRIORITY_HIGH: 3,
};

const ISOLATION_LEVEL_MAP: {[k: string]: number} = {
  ISOLATION_LEVEL_UNSPECIFIED: 0,
  SERIALIZABLE: 1,
  REPEATABLE_READ: 2,
};

const READ_LOCK_MODE_MAP: {[k: string]: number} = {
  READ_LOCK_MODE_UNSPECIFIED: 0,
  PESSIMISTIC: 1,
  OPTIMISTIC: 2,
};

const REPLICA_TYPE_MAP: {[k: string]: number} = {
  TYPE_UNSPECIFIED: 0,
  READ_WRITE: 1,
  READ_ONLY: 2,
};

const SCALAR_TYPE_PROTOS: {[k: string]: google.spanner.v1.IType} = {
  bool: {code: google.spanner.v1.TypeCode.BOOL},
  int64: {code: google.spanner.v1.TypeCode.INT64},
  float64: {code: google.spanner.v1.TypeCode.FLOAT64},
  float32: {code: google.spanner.v1.TypeCode.FLOAT32},
  string: {code: google.spanner.v1.TypeCode.STRING},
  numeric: {code: google.spanner.v1.TypeCode.NUMERIC},
};

const DEFAULT_STRONG_TX_SELECTOR: google.spanner.v1.ITransactionSelector = {
  singleUse: {
    readOnly: {
      returnReadTimestamp: true,
    },
  },
};

const EXPLICIT_STRONG_TX_SELECTOR: google.spanner.v1.ITransactionSelector = {
  singleUse: {
    readOnly: {
      strong: true,
      returnReadTimestamp: true,
    },
  },
};

const exactStalenessSelectorCache = new Map<
  number,
  google.spanner.v1.ITransactionSelector
>();

function encodeFastReadOnlySelector(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any,
): google.spanner.v1.ITransactionSelector | null {
  if (!options) {
    return DEFAULT_STRONG_TX_SELECTOR;
  }
  const exact = options.exactStaleness;
  if (typeof exact === 'number') {
    const rrt =
      typeof options.returnReadTimestamp === 'boolean'
        ? options.returnReadTimestamp
        : true;
    if (rrt) {
      let cached = exactStalenessSelectorCache.get(exact);
      if (!cached) {
        const secs = Math.floor(exact / 1000);
        const nanos = Math.round((exact % 1000) * 1e6);
        cached = {
          singleUse: {
            readOnly: {
              exactStaleness: {seconds: secs, nanos},
              returnReadTimestamp: true,
            },
          },
        };
        if (exactStalenessSelectorCache.size < 64) {
          exactStalenessSelectorCache.set(exact, cached);
        }
      }
      return cached;
    }
    const secs = Math.floor(exact / 1000);
    const nanos = Math.round((exact % 1000) * 1e6);
    return {
      singleUse: {
        readOnly: {
          exactStaleness: {seconds: secs, nanos},
          returnReadTimestamp: false,
        },
      },
    };
  }
  if (
    options.minReadTimestamp === undefined &&
    options.maxStaleness === undefined &&
    options.readTimestamp === undefined &&
    options.exactStaleness === undefined &&
    (options.strong === undefined || options.strong === true) &&
    (options.returnReadTimestamp === undefined ||
      options.returnReadTimestamp === true)
  ) {
    return options.strong === true
      ? EXPLICIT_STRONG_TX_SELECTOR
      : DEFAULT_STRONG_TX_SELECTOR;
  }
  return null;
}

const RUN_BATCH_ROW_SIZE = 2048;
const STREAM_BATCH_ROW_SIZE = 256;
const EMPTY_BUFFER = Buffer.alloc(0);

const MAX_SCHEMA_CACHE_ENTRIES = 1024;

interface CachedSchemaEntry {
  rowType: google.spanner.v1.IStructType;
  fields: google.spanner.v1.StructType.Field[];
  fieldNames: (string | null | undefined)[];
  defaultDecoders: Function[];
  schemaHash?: number;
}

interface GlobalNativeState {
  addon?: SpannerGoAddon | null;
  serviceHandles: Map<string, number>;
  schemaCache: Map<string, CachedSchemaEntry>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackedClients?: Set<any>;
  handleRefCounts?: Map<number, number>;
  generation?: number;
}

const GLOBAL_STATE_KEY = Symbol.for('__google_cloud_spanner_native_core_state__');

function getGlobalState(): GlobalNativeState {
  const g = globalThis as unknown as {[key: symbol]: GlobalNativeState};
  if (!g[GLOBAL_STATE_KEY]) {
    g[GLOBAL_STATE_KEY] = {
      addon: undefined,
      serviceHandles: new Map<string, number>(),
      schemaCache: new Map<string, CachedSchemaEntry>(),
      trackedClients: new Set(),
      handleRefCounts: new Map<number, number>(),
      generation: 1,
    };
  }
  const st = g[GLOBAL_STATE_KEY];
  if (!st.trackedClients) {
    st.trackedClients = new Set();
  }
  if (!st.handleRefCounts) {
    st.handleRefCounts = new Map<number, number>();
  }
  if (!st.generation) {
    st.generation = 1;
  }
  return st;
}

function setSchemaCacheEntry(
  state: GlobalNativeState,
  key: string,
  entry: CachedSchemaEntry,
): void {
  if (
    !state.schemaCache.has(key) &&
    state.schemaCache.size >= MAX_SCHEMA_CACHE_ENTRIES
  ) {
    const oldestKey = state.schemaCache.keys().next().value;
    if (oldestKey !== undefined) {
      state.schemaCache.delete(oldestKey);
    }
  }
  state.schemaCache.set(key, entry);
}

function isTruthyFlag(val: string | undefined): boolean {
  if (!val) {
    return false;
  }
  const normalized = val.trim().toLowerCase();
  return (
    normalized === 'true' ||
    normalized === '1' ||
    normalized === 'go' ||
    normalized === 'yes' ||
    normalized === 'on'
  );
}

/**
 * Returns true if the Go Shared Core is enabled via environment variables:
 *   - NATIVE_CORE_ENABLED=true|1
 *   - SPANNER_ENABLE_NATIVE_CORE=true|1
 *   - SPANNER_NATIVE_CORE=go|true|1
 */
export function isNativeCoreEnabled(): boolean {
  if (process.env.NATIVE_CORE_ENABLED !== undefined) {
    return isTruthyFlag(process.env.NATIVE_CORE_ENABLED);
  }
  if (process.env.SPANNER_ENABLE_NATIVE_CORE !== undefined) {
    return isTruthyFlag(process.env.SPANNER_ENABLE_NATIVE_CORE);
  }
  if (process.env.SPANNER_NATIVE_CORE !== undefined) {
    return isTruthyFlag(process.env.SPANNER_NATIVE_CORE);
  }
  return false;
}

/**
 * Loads the compiled C++ N-API addon (`spanner_go.node`) on demand.
 */
export function loadNativeAddon(): SpannerGoAddon | null {
  const state = getGlobalState();
  if (state.addon !== undefined) {
    return state.addon;
  }

  const candidatePaths = [
    path.resolve(
      __dirname,
      '../../spanner-native/build/Release/spanner_go.node',
    ),
    path.resolve(__dirname, '../spanner-native/build/Release/spanner_go.node'),
  ];

  for (const candidate of candidatePaths) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const loaded = require(candidate) as SpannerGoAddon;
      if (loaded && typeof loaded.executeStreamingSql === 'function') {
        if (
          typeof loaded.setRootCertsPEM === 'function' &&
          tls.rootCertificates?.length
        ) {
          try {
            loaded.setRootCertsPEM(tls.rootCertificates.join('\n'));
          } catch (_) {
            // Ignore root cert initialization errors
          }
        }
        state.addon = loaded;
        return loaded;
      }
    } catch (_) {
      // Continue trying candidate paths
    }
  }

  state.addon = null;
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isClientSupportedByNativeCore(spanner: any): boolean {
  if (!spanner || typeof spanner.prepareGapicRequest_ !== 'function') {
    return false;
  }
  const opts = spanner.options || {};
  const hasCustomAuthOrTls =
    opts.credentials ||
    opts.keyFilename ||
    opts.keyFile ||
    opts.authClient ||
    opts.token ||
    opts.clientConfig ||
    (!spanner._isInSecureCredentials &&
      opts.sslCreds &&
      opts.sslCreds._isSecure?.() !== false);
  if (hasCustomAuthOrTls) {
    const emulatorHost = process.env.SPANNER_EMULATOR_HOST;
    if (!emulatorHost) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGaxOptionsSupportedByNativeCore(gaxOptions: any): boolean {
  if (!gaxOptions) {
    return true;
  }
  if (gaxOptions.retry || gaxOptions.retryRequestOptions) {
    return false;
  }
  const otherOpts = gaxOptions.otherArgs?.options;
  if (otherOpts && Object.keys(otherOpts).length > 0) {
    return false;
  }
  const hdrs = gaxOptions.otherArgs?.headers;
  if (hdrs && typeof hdrs === 'object') {
    for (const [k, v] of Object.entries(hdrs)) {
      if (
        k.toLowerCase().endsWith('-bin') ||
        Buffer.isBuffer(v) ||
        /[\r\n]/.test(k) ||
        (typeof v === 'string' && /[\r\n]/.test(v))
      ) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks whether a Snapshot / Transaction instance should execute via the
 * Go Shared Core. Automatically yields to the pure-JS path if the user or a
 * unit test has stubbed or replaced `requestStream` with a mock/Sinon spy.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function canUseNativeCore(snapshot: any): boolean {
  if (!isNativeCoreEnabled()) {
    return false;
  }
  if (!loadNativeAddon()) {
    return false;
  }
  const session = snapshot?.session;
  const database = session?.parent;
  const instance = database?.parent;
  const spanner = instance?.parent;

  if (!session || !database || !spanner) {
    return false;
  }
  if (!isClientSupportedByNativeCore(spanner)) {
    return false;
  }
  if (
    snapshot?.requestStream?.isSinonProxy ||
    session?.requestStream?.isSinonProxy ||
    database?.requestStream?.isSinonProxy ||
    spanner?.requestStream?.isSinonProxy
  ) {
    return false;
  }
  if (
    (snapshot._defaultRequestStream &&
      snapshot.requestStream !== snapshot._defaultRequestStream) ||
    (!snapshot._defaultRequestStream &&
      Object.prototype.hasOwnProperty.call(snapshot, 'requestStream')) ||
    Object.prototype.hasOwnProperty.call(spanner, 'requestStream')
  ) {
    return false;
  }
  return getOrCreateServiceHandle(spanner) > 0;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOrCreateServiceHandle(spanner: any): number {
  const state = getGlobalState();
  if (spanner && typeof spanner._nativeServiceHandle === 'number') {
    if (
      spanner._nativeServiceGen === state.generation &&
      spanner._nativeServiceHandle !== 0
    ) {
      return spanner._nativeServiceHandle;
    }
    const cachedKey = spanner._nativeServiceCacheKey;
    if (
      cachedKey &&
      state.serviceHandles.get(cachedKey) === spanner._nativeServiceHandle
    ) {
      spanner._nativeServiceGen = state.generation;
      return spanner._nativeServiceHandle;
    }
    spanner._nativeServiceHandle = undefined;
    spanner._nativeServiceCacheKey = undefined;
    spanner._nativeServiceGen = undefined;
  }
  if (!isClientSupportedByNativeCore(spanner)) {
    return -1;
  }
  const addon = loadNativeAddon();
  if (!addon) {
    return -1;
  }

  const opts = spanner?.options || {};
  const emulatorHost = process.env.SPANNER_EMULATOR_HOST;
  const universeDomain: string =
    spanner?._universeDomain ||
    opts.universeDomain ||
    opts.universe_domain ||
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN ||
    'googleapis.com';
  let endpoint: string;
  let usePlaintext = 0;

  if (emulatorHost && emulatorHost.length > 0) {
    endpoint = emulatorHost;
    usePlaintext = 1;
  } else {
    const rawHost: string =
      opts.servicePath ||
      opts.apiEndpoint ||
      spanner?.baseUrl_ ||
      `spanner.${universeDomain}`;
    const port: number = opts.port || 443;
    endpoint = rawHost.includes(':') ? rawHost : `${rawHost}:${port}`;
    if (
      spanner?._isInSecureCredentials ||
      opts.sslCreds?._isSecure?.() === false
    ) {
      usePlaintext = 1;
    }
  }

  const numChannels = Number(opts.numChannels) > 0 ? Number(opts.numChannels) : 4;
  const disableBuiltInAuth =
    usePlaintext ||
    opts.disableBuiltInAuth === true ||
    spanner?.disableBuiltInAuth === true
      ? 1
      : 0;
  const enableDirectAccess = isTruthyFlag(
    process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS,
  )
    ? 1
    : 0;
  const userAgent =
    opts.libName && opts.libVersion
      ? `${opts.libName}/${opts.libVersion}`
      : '';

  const dcpCfg =
    opts.dynamicChannelPoolConfig || opts.DynamicChannelPoolConfig || {};
  const dcpEnabled =
    dcpCfg.enabled === true || dcpCfg.DCPEnabled === true ? 1 : 0;
  const dcpInitialChannels =
    Number(dcpCfg.initialChannels ?? dcpCfg.DCPInitialChannels) > 0
      ? Number(dcpCfg.initialChannels ?? dcpCfg.DCPInitialChannels)
      : 0;
  const dcpMinChannels =
    Number(dcpCfg.minChannels ?? dcpCfg.DCPMinChannels) > 0
      ? Number(dcpCfg.minChannels ?? dcpCfg.DCPMinChannels)
      : 0;
  const dcpMaxChannels =
    Number(dcpCfg.maxChannels ?? dcpCfg.DCPMaxChannels) > 0
      ? Number(dcpCfg.maxChannels ?? dcpCfg.DCPMaxChannels)
      : 0;
  const dcpMaxRpcPerChannel =
    Number(dcpCfg.maxRpcPerChannel ?? dcpCfg.DCPMaxRPCPerChannel) > 0
      ? Number(dcpCfg.maxRpcPerChannel ?? dcpCfg.DCPMaxRPCPerChannel)
      : 0;
  const dcpMinRpcPerChannel =
    Number(dcpCfg.minRpcPerChannel ?? dcpCfg.DCPMinRPCPerChannel) > 0
      ? Number(dcpCfg.minRpcPerChannel ?? dcpCfg.DCPMinRPCPerChannel)
      : 0;
  const rawStrategy = dcpCfg.selectionStrategy ?? dcpCfg.DCPSelectionStrategy;
  const dcpSelectionStrategy =
    rawStrategy === 1 || rawStrategy === 'ROUND_ROBIN' ? 1 : 0;

  const cacheKey = `${endpoint}|${universeDomain}|${numChannels}|${usePlaintext}|${disableBuiltInAuth}|${enableDirectAccess}|${userAgent}|${dcpEnabled}|${dcpInitialChannels}|${dcpMinChannels}|${dcpMaxChannels}|${dcpMaxRpcPerChannel}|${dcpMinRpcPerChannel}|${dcpSelectionStrategy}`;
  const existing = state.serviceHandles.get(cacheKey);
  if (existing === -1) {
    if (spanner) {
      spanner._nativeServiceHandle = -1;
      spanner._nativeServiceCacheKey = cacheKey;
      spanner._nativeServiceGen = state.generation;
    }
    return -1;
  }
  if (existing !== undefined && existing > 0) {
    if (spanner) {
      spanner._nativeServiceHandle = existing;
      spanner._nativeServiceCacheKey = cacheKey;
      spanner._nativeServiceGen = state.generation;
      if (!state.trackedClients!.has(spanner)) {
        state.trackedClients!.add(spanner);
        try {
          addon.setNextUniverseDomain?.(universeDomain);
          addon.init(
            endpoint,
            numChannels,
            usePlaintext,
            disableBuiltInAuth,
            enableDirectAccess,
            userAgent,
            dcpEnabled,
            dcpInitialChannels,
            dcpMinChannels,
            dcpMaxChannels,
            dcpMaxRpcPerChannel,
            dcpMinRpcPerChannel,
            dcpSelectionStrategy,
          );
          state.handleRefCounts!.set(
            existing,
            (state.handleRefCounts!.get(existing) || 1) + 1,
          );
        } catch (_) {
          // Ignore ref increment errors
        }
      }
    }
    return existing;
  }

  let handle = -1;
  try {
    addon.setNextUniverseDomain?.(universeDomain);
    handle = addon.init(
      endpoint,
      numChannels,
      usePlaintext,
      disableBuiltInAuth,
      enableDirectAccess,
      userAgent,
      dcpEnabled,
      dcpInitialChannels,
      dcpMinChannels,
      dcpMaxChannels,
      dcpMaxRpcPerChannel,
      dcpMinRpcPerChannel,
      dcpSelectionStrategy,
    );
  } catch (initErr) {
    handle = -1;
    if (process.env.SPANNER_NATIVE_QUIET !== '1') {
      process.emitWarning(
        `[Spanner Native Core] Failed to initialize Go Shared Core (${(initErr as Error)?.message || initErr}); falling back to pure JS.`,
        'SpannerNativeCoreInitWarning',
      );
    }
  }
  if (handle > 0) {
    state.serviceHandles.set(cacheKey, handle);
    state.handleRefCounts!.set(handle, 1);
    if (spanner) {
      spanner._nativeServiceHandle = handle;
      spanner._nativeServiceCacheKey = cacheKey;
      spanner._nativeServiceGen = state.generation;
      state.trackedClients!.add(spanner);
    }
  } else {
    state.serviceHandles.set(cacheKey, -1);
    if (spanner) {
      spanner._nativeServiceHandle = -1;
      spanner._nativeServiceCacheKey = cacheKey;
      spanner._nativeServiceGen = state.generation;
    }
    if (process.env.SPANNER_NATIVE_QUIET !== '1') {
      const detail =
        addon.getLastInitError?.() || 'failed to create Go Shared Core service';
      process.emitWarning(
        `[Spanner Native Core] Failed to initialize Go Shared Core (${detail}); falling back to pure JS.`,
        'SpannerNativeCoreInitWarning',
      );
    }
  }
  return handle;
}

/**
 * Eagerly initializes the Go Shared Core service handle and starts non-blocking
 * background gRPC channel handshakes during `Spanner` / `Database` construction
 * when `NATIVE_CORE_ENABLED` is enabled.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prewarmNativeCore(spanner: any): void {
  if (!spanner || spanner._nativeClosed || spanner._nativePrewarmTimer) {
    return;
  }
  if (!isNativeCoreEnabled()) {
    return;
  }
  if (!isClientSupportedByNativeCore(spanner)) {
    return;
  }
  if (
    spanner?.requestStream?.isSinonProxy ||
    Object.prototype.hasOwnProperty.call(spanner, 'requestStream')
  ) {
    return;
  }
  const timer = setImmediate(() => {
    spanner._nativePrewarmTimer = undefined;
    if (spanner._nativeClosed) {
      return;
    }
    try {
      getOrCreateServiceHandle(spanner);
    } catch (_) {
      // Ignore prewarm errors
    }
  });
  spanner._nativePrewarmTimer = timer;
  if (typeof timer.unref === 'function') {
    timer.unref();
  }
}

/**
 * Releases the Go Shared Core service handle associated with a single `Spanner`
 * client instance when `spanner.close()` is called.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function closeNativeCoreForClient(spanner: any): void {
  if (!spanner) {
    return;
  }
  spanner._nativeClosed = true;
  if (spanner._nativePrewarmTimer) {
    clearImmediate(spanner._nativePrewarmTimer);
    spanner._nativePrewarmTimer = undefined;
  }
  const state = getGlobalState();
  const handle = spanner._nativeServiceHandle;
  const cacheKey = spanner._nativeServiceCacheKey;
  spanner._nativeServiceHandle = undefined;
  spanner._nativeServiceCacheKey = undefined;
  spanner._nativeServiceGen = undefined;
  if (!state.trackedClients?.has(spanner)) {
    return;
  }
  state.trackedClients.delete(spanner);
  if (typeof handle === 'number' && handle > 0) {
    const addon = state.addon;
    try {
      addon?.close(handle);
    } catch (_) {
      // Ignore teardown errors
    }
    const prevRefs = state.handleRefCounts?.get(handle) || 1;
    if (prevRefs <= 1) {
      state.handleRefCounts?.delete(handle);
      if (cacheKey && state.serviceHandles.get(cacheKey) === handle) {
        state.serviceHandles.delete(cacheKey);
      }
    } else {
      state.handleRefCounts?.set(handle, prevRefs - 1);
    }
  }
}

/**
 * Closes all initialized Go Shared Core service handles and clears caches.
 */
export function closeNativeCore(): void {
  const state = getGlobalState();
  state.generation = (state.generation || 1) + 1;
  const addon = state.addon;
  if (addon) {
    for (const handle of state.serviceHandles.values()) {
      if (handle <= 0) {
        continue;
      }
      const refs = state.handleRefCounts?.get(handle) || 1;
      for (let i = 0; i < refs; i++) {
        try {
          addon.close(handle);
        } catch (_) {
          // Ignore teardown errors
        }
      }
    }
  }
  if (state.trackedClients) {
    for (const client of state.trackedClients) {
      if (client) {
        if (client._nativePrewarmTimer) {
          clearImmediate(client._nativePrewarmTimer);
          client._nativePrewarmTimer = undefined;
        }
        client._nativeServiceHandle = undefined;
        client._nativeServiceCacheKey = undefined;
        client._nativeServiceGen = undefined;
      }
    }
    state.trackedClients.clear();
  }
  state.handleRefCounts?.clear();
  state.serviceHandles.clear();
  state.schemaCache.clear();
}

function buildHeadersString(
  rawHeaders?: {[k: string]: string},
  cachedBase?: string,
  checkActiveSpan = true,
): string {
  let base = cachedBase;
  if (base === undefined) {
    if (!rawHeaders) {
      base = '';
    } else {
      const keys = Object.keys(rawHeaders);
      let s = '';
      for (let i = 0; i < keys.length; i++) {
        const rawKey = keys[i];
        const v = rawHeaders[rawKey];
        if (v !== undefined && v !== null) {
          const k = rawKey.replace(/[\r\n]+/g, '');
          const cleanVal = String(v).replace(/[\r\n]+/g, ' ');
          s = s ? `${s}\n${k}:${cleanVal}` : `${k}:${cleanVal}`;
        }
      }
      base = s;
    }
  }

  if (!checkActiveSpan) {
    return base;
  }

  try {
    const spanCtx = trace.getSpanContext(context.active());
    if (
      spanCtx &&
      spanCtx.traceId &&
      spanCtx.spanId &&
      spanCtx.traceId !== '00000000000000000000000000000000' &&
      (!rawHeaders || !rawHeaders.traceparent)
    ) {
      const flags = (spanCtx.traceFlags || 0).toString(16).padStart(2, '0');
      const tp = `traceparent:00-${spanCtx.traceId}-${spanCtx.spanId}-${flags}`;
      return base ? `${base}\n${tp}` : tp;
    }
  } catch (_) {
    // Ignore OpenTelemetry context extraction errors
  }
  return base;
}

function createGrpcServiceError(
  batch: NativeBatchResult,
  fallbackReqId?: string,
): grpc.ServiceError {
  const code = batch.errorCode ?? grpc.status.UNKNOWN;
  const codeName = GRPC_CODE_NAMES[code] || 'UNKNOWN';
  const details = batch.errorMessage || 'Unknown Spanner native core error';
  const message = `${code} ${codeName}: ${details}`;
  const metadata = new grpc.Metadata();
  if (batch.trailersJson) {
    try {
      const tr = JSON.parse(batch.trailersJson) as Record<
        string,
        string[] | string
      >;
      for (const [k, v] of Object.entries(tr)) {
        const isBin = k.toLowerCase().endsWith('-bin');
        if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) {
            const item = v[i];
            if (item !== undefined && item !== null) {
              metadata.add(
                k,
                isBin ? Buffer.from(String(item), 'base64') : String(item),
              );
            }
          }
        } else if (v !== undefined && v !== null) {
          metadata.add(k, isBin ? Buffer.from(String(v), 'base64') : String(v));
        }
      }
    } catch (_) {
      // Ignore trailer JSON parse errors
    }
  }
  if (batch.statusBytes && batch.statusBytes.length > 0) {
    metadata.set('grpc-status-details-bin', batch.statusBytes);
  }
  if (batch.retryInfoBytes && batch.retryInfoBytes.length > 0) {
    metadata.set('google.rpc.retryinfo-bin', batch.retryInfoBytes);
  }
  let err = new Error(message) as grpc.ServiceError;
  err.code = code;
  err.details = details;
  err.metadata = metadata;
  if (batch.statusBytes && batch.statusBytes.length > 0) {
    try {
      err = GoogleError.parseGRPCStatusDetails(
        err as unknown as GoogleError,
      ) as unknown as grpc.ServiceError;
      err.code = code;
      err.details = details;
      err.metadata = metadata;
    } catch (_) {
      // Ignore status details parse errors
    }
  }
  const reqId = batch.requestId || fallbackReqId;
  if (reqId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err as any).requestID = reqId;
  }
  return err;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeNativeDecodeError(err: any): grpc.ServiceError {
  const e =
    err instanceof Error
      ? (err as grpc.ServiceError)
      : (new Error(String(err)) as grpc.ServiceError);
  if (e.code === undefined) {
    e.code = grpc.status.UNKNOWN;
  }
  if (e.details === undefined) {
    e.details = e.message;
  }
  if (e.metadata === undefined) {
    e.metadata = new grpc.Metadata();
  }
  return e;
}

function normalizeTimeoutMs(rawTimeout: number | undefined): number {
  if (rawTimeout === 0 || Number.isNaN(rawTimeout)) {
    return 30000;
  }
  if (
    rawTimeout === undefined ||
    rawTimeout === null ||
    !Number.isFinite(rawTimeout)
  ) {
    return 0;
  }
  if (rawTimeout < 0) {
    return -1;
  }
  if (rawTimeout > 0 && rawTimeout < 1) {
    return 1;
  }
  if (rawTimeout > 2147483000) {
    return 2147483000;
  }
  return Math.floor(rawTimeout);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getOrCreateFastMetricsTracer(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spanner: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  database: any,
  routingKey: string,
): MetricsTracer | null {
  if (!spanner?._metricsEnabled) {
    return null;
  }
  const projectId = spanner.projectId_;
  if (!projectId || projectId === '{{projectId}}') {
    return null;
  }
  const factory = MetricsTracerFactory?.getInstance(projectId);
  if (!factory || !MetricsTracerFactory.enabled) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meterProvider = (factory as any)._meterProvider;
  if (
    database &&
    database._nativeCachedMetricsTracer &&
    database._nativeCachedMeterProvider === meterProvider
  ) {
    return database._nativeCachedMetricsTracer;
  }
  const tracer = factory.createMetricsTracer(
    'executeStreamingSql',
    database?.formattedName_ || routingKey,
  );
  if (database && tracer) {
    database._nativeCachedMetricsTracer = tracer;
    database._nativeCachedMeterProvider = meterProvider;
  }
  return tracer;
}

function recordNativeMetricsCompletion(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spanner: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  database: any,
  routingKey: string,
  metricStartMs: number,
  metricsTracer: MetricsTracer | null,
  batch: NativeBatchResult | undefined,
  statusCode: number,
): void {
  const tracer =
    metricsTracer || getOrCreateFastMetricsTracer(spanner, database, routingKey);
  if (!tracer || !tracer.enabled) {
    return;
  }
  try {
    const attempts =
      batch?.attemptCount && batch.attemptCount > 0 ? batch.attemptCount : 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extractGfeProxied = Boolean((MetricsTracer.prototype.extractGfeLatency as any)?.isSinonProxy);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extractAfeProxied = Boolean((MetricsTracer.prototype.extractAfeLatency as any)?.isSinonProxy);
    const gfeLat: number | null =
      batch?.gfeLatencyMs !== undefined && batch.gfeLatencyMs >= 0
        ? batch.gfeLatencyMs
        : extractGfeProxied
          ? tracer.extractGfeLatency('')
          : null;
    const afeLat: number | null =
      batch?.afeLatencyMs !== undefined && batch.afeLatencyMs >= 0
        ? batch.afeLatencyMs
        : extractAfeProxied
          ? tracer.extractAfeLatency('')
          : null;

    if (metricsTracer) {
      for (let i = 1; i < attempts; i++) {
        metricsTracer.recordAttemptCompletion(grpc.status.UNAVAILABLE);
        metricsTracer.recordAttemptStart();
      }
      if (gfeLat !== null) {
        metricsTracer.gfeLatency = gfeLat;
      }
      if (afeLat !== null) {
        metricsTracer.afeLatency = afeLat;
      }
      metricsTracer.recordAttemptCompletion(statusCode);
      if (metricsTracer.gfeLatency !== null) {
        metricsTracer.recordGfeLatency(statusCode);
      } else {
        metricsTracer.recordGfeConnectivityErrorCount(statusCode);
      }
      if (isAFEServerTimingEnabled()) {
        if (metricsTracer.afeLatency !== null) {
          metricsTracer.recordAfeLatency(statusCode);
        } else {
          metricsTracer.recordAfeConnectivityErrorCount(statusCode);
        }
      }
      metricsTracer.recordOperationCompletion();
      return;
    }

    // Fast allocation-free recording path using the per-Database cached MetricsTracer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = tracer as any;
    const elapsedMs =
      metricStartMs >= 0 ? Math.max(0, performance.now() - metricStartMs) : 0;
    const attemptElapsed = attempts > 1 ? elapsedMs / attempts : elapsedMs;
    for (let i = 1; i < attempts; i++) {
      const unavailAttrs = t._getAttributesForStatus(grpc.status.UNAVAILABLE);
      t._instrumentAttemptLatency?.record(attemptElapsed, unavailAttrs);
      t._instrumentAttemptCounter?.add(1, unavailAttrs);
    }
    const finalAttrs = t._getAttributesForStatus(statusCode);
    t._instrumentAttemptLatency?.record(attemptElapsed, finalAttrs);
    t._instrumentAttemptCounter?.add(1, finalAttrs);
    if (gfeLat !== null && Number.isFinite(gfeLat) && gfeLat >= 0) {
      t._instrumentGfeLatency?.record(gfeLat, finalAttrs);
    } else {
      t._instrumentGfeConnectivityErrorCount?.add(1, finalAttrs);
    }
    if (isAFEServerTimingEnabled()) {
      if (afeLat !== null && Number.isFinite(afeLat) && afeLat >= 0) {
        t._instrumentAfeLatency?.record(afeLat, finalAttrs);
      } else {
        t._instrumentAfeConnectivityErrorCount?.add(1, finalAttrs);
      }
    }
    t._instrumentOperationCounter?.add(1, finalAttrs);
    t._instrumentOperationLatency?.record(elapsedMs, finalAttrs);
  } catch (_) {
    // Ignore telemetry recording errors
  }
}

function decodeResultSetMetadata(
  metadataBytes: Buffer,
): google.spanner.v1.ResultSetMetadata {
  const decoded =
    google.spanner.v1.ResultSetMetadata.decode(metadataBytes);
  return google.spanner.v1.ResultSetMetadata.toObject(
    decoded,
    PROTO_TO_OBJECT_OPTS,
  ) as unknown as google.spanner.v1.ResultSetMetadata;
}

function decodeResultSetStats(
  statsBytes: Buffer,
): google.spanner.v1.ResultSetStats {
  const decoded = google.spanner.v1.ResultSetStats.decode(statsBytes);
  return google.spanner.v1.ResultSetStats.toObject(
    decoded,
    PROTO_TO_OBJECT_OPTS,
  ) as unknown as google.spanner.v1.ResultSetStats;
}

function decodePrecommitToken(
  precommitBytes: Buffer,
): google.spanner.v1.IMultiplexedSessionPrecommitToken {
  const decoded =
    google.spanner.v1.MultiplexedSessionPrecommitToken.decode(precommitBytes);
  return google.spanner.v1.MultiplexedSessionPrecommitToken.toObject(
    decoded,
    PROTO_TO_OBJECT_OPTS,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeTypeProtoInPlace(t: any): void {
  if (!t || typeof t !== 'object') {
    return;
  }
  if (typeof t.code === 'string') {
    t.code = TYPE_CODE_MAP[t.code] ?? 0;
  }
  if (typeof t.typeAnnotation === 'string') {
    t.typeAnnotation = TYPE_ANNOTATION_MAP[t.typeAnnotation] ?? 0;
  }
  if (t.arrayElementType) {
    normalizeTypeProtoInPlace(t.arrayElementType);
  }
  if (t.structType?.fields) {
    const fields = t.structType.fields;
    for (let i = 0; i < fields.length; i++) {
      if (fields[i]?.type) {
        normalizeTypeProtoInPlace(fields[i].type);
      }
    }
  }
}

function encodeExecuteSqlRequest(
  formattedRequest: google.spanner.v1.IExecuteSqlRequest,
  typesAlreadyNormalized = false,
): Buffer {
  // Normalize string enum values so ExecuteSqlRequest.encode() runs in
  // a single pass without ExecuteSqlRequest.fromObject() deep-cloning the request.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let req = formattedRequest as any;
  if (typeof req.queryMode === 'string') {
    req.queryMode = QUERY_MODE_MAP[req.queryMode] ?? 0;
  }
  if (req.requestOptions && typeof req.requestOptions.priority === 'string') {
    req.requestOptions = Object.assign({}, req.requestOptions, {
      priority: PRIORITY_MAP[req.requestOptions.priority] ?? 0,
    });
  }
  if (req.transaction?.begin) {
    const begin = req.transaction.begin;
    if (typeof begin.isolationLevel === 'string') {
      begin.isolationLevel = ISOLATION_LEVEL_MAP[begin.isolationLevel] ?? 0;
    }
    if (begin.readWrite && typeof begin.readWrite.readLockMode === 'string') {
      begin.readWrite.readLockMode =
        READ_LOCK_MODE_MAP[begin.readWrite.readLockMode] ?? 0;
    }
  }
  if (req.directedReadOptions) {
    const dro = req.directedReadOptions;
    const includeSels = dro.includeReplicas?.replicaSelections;
    const excludeSels = dro.excludeReplicas?.replicaSelections;
    if (
      Array.isArray(includeSels) &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      includeSels.some((s: any) => s && typeof s.type === 'string')
    ) {
      req = Object.assign({}, req, {
        directedReadOptions: Object.assign({}, dro, {
          includeReplicas: Object.assign({}, dro.includeReplicas, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            replicaSelections: includeSels.map((s: any) =>
              s && typeof s.type === 'string'
                ? Object.assign({}, s, {type: REPLICA_TYPE_MAP[s.type] ?? 0})
                : s,
            ),
          }),
        }),
      });
    } else if (
      Array.isArray(excludeSels) &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      excludeSels.some((s: any) => s && typeof s.type === 'string')
    ) {
      req = Object.assign({}, req, {
        directedReadOptions: Object.assign({}, dro, {
          excludeReplicas: Object.assign({}, dro.excludeReplicas, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            replicaSelections: excludeSels.map((s: any) =>
              s && typeof s.type === 'string'
                ? Object.assign({}, s, {type: REPLICA_TYPE_MAP[s.type] ?? 0})
                : s,
            ),
          }),
        }),
      });
    }
  }
  if (!typesAlreadyNormalized && req.paramTypes) {
    const keys = Object.keys(req.paramTypes);
    for (let i = 0; i < keys.length; i++) {
      normalizeTypeProtoInPlace(req.paramTypes[keys[i]]);
    }
  }
  const finished = google.spanner.v1.ExecuteSqlRequest.encode(req).finish();
  return Buffer.isBuffer(finished)
    ? finished
    : Buffer.from(finished.buffer, finished.byteOffset, finished.byteLength);
}

function decodeCellsIntoRows(
  cells: Value[],
  numRows: number,
  numCols: number,
  fields: google.spanner.v1.StructType.Field[],
  fieldNames: (string | null | undefined)[] | undefined,
  decoders: Function[],
  rowOptions: RowOptions,
  targetRows: Row[],
): void {
  if (
    !rowOptions.json &&
    !rowOptions.columnsMetadata &&
    codec.decode === originalDecode &&
    fieldNames
  ) {
    for (let r = 0; r < numRows; r++) {
      const baseOffset = r * numCols;
      const row = new RowImpl(numCols);
      for (let c = 0; c < numCols; c++) {
        row[c] = {
          name: fieldNames[c] as string,
          value: decoders[c](cells[baseOffset + c]),
        };
      }
      targetRows.push(row);
    }
    return;
  }

  const scratchRow: Value[] = new Array(numCols);
  for (let r = 0; r < numRows; r++) {
    const baseOffset = r * numCols;
    for (let c = 0; c < numCols; c++) {
      scratchRow[c] = cells[baseOffset + c];
    }
    targetRows.push(formatRow(fields, decoders, scratchRow, rowOptions));
  }
}

export interface NativeTransactionRunParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snapshot: any;
  sanitizeRequest: () => google.spanner.v1.IExecuteSqlRequest;
  headers?: {[k: string]: string};
  rowOptions: RowOptions;
  timeoutMs?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  streamSpan: any;
  onSuccess: (
    rows: Row[],
    stats?: google.spanner.v1.ResultSetStats,
    metadata?: google.spanner.v1.ResultSetMetadata,
  ) => void;
  onError: (
    err: grpc.ServiceError,
    rows: Row[],
    stats?: google.spanner.v1.ResultSetStats,
    metadata?: google.spanner.v1.ResultSetMetadata,
  ) => void;
}

/**
 * Ultra-fast direct path for single-use `Database#run` queries on a multiplexed
 * session when OpenTelemetry tracing is not actively recording. Completely
 * avoids allocating a throwaway `Snapshot` (`GrpcServiceObject`, `EventEmitter`,
 * `uuid.v4()`, `snapshot.end()`), avoids `PreciseDate` readTimestamp
 * construction when not requested, and caches session headers and staleness selectors.
 *
 * Returns `true` if the query was dispatched via the fast path, or `false` if
 * the caller should fall back to `Database#_executeRunOnSession`.
 */
export function executeNativeDatabaseRun(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  database: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: any,
): boolean {
  if (isTracingEnabled(database?._traceConfig?.opts)) {
    return false;
  }
  const session = database?.sessionFactory_?.getSessionSync?.();
  if (!session || !session.metadata?.multiplexed) {
    return false;
  }
  const spanner = database?.parent?.parent;
  if (
    !spanner ||
    !isClientSupportedByNativeCore(spanner) ||
    typeof spanner.prepareGapicRequest_ !== 'function' ||
    session.requestStream?.isSinonProxy ||
    database.requestStream?.isSinonProxy ||
    spanner.requestStream?.isSinonProxy ||
    Object.prototype.hasOwnProperty.call(spanner, 'requestStream')
  ) {
    return false;
  }
  // If a unit test stubbed session.snapshot (e.g. Sinon stub in test/database.ts),
  // fall back to _executeRunOnSession so the stub is invoked.
  if (session.snapshot?.isSinonProxy || Object.prototype.hasOwnProperty.call(session, 'snapshot')) {
    return false;
  }

  const addon = loadNativeAddon();
  const serviceHandle = getOrCreateServiceHandle(spanner);
  if (!addon || serviceHandle <= 0) {
    return false;
  }

  const txSelector = encodeFastReadOnlySelector(options);
  if (!txSelector) {
    return false;
  }

  const sessionName: string = session.formattedName_ || '';
  const dbName: string = database.formattedName_ || '';
  if (!sessionName || !dbName) {
    return false;
  }

  let sql: string;
  let rowOptions: RowOptions = {};
  const timeoutMs = 0;
  let reqObj: google.spanner.v1.IExecuteSqlRequest;

  if (typeof query === 'string') {
    sql = query;
    reqObj = {
      session: sessionName,
      sql,
      transaction: txSelector,
      seqno: 1,
      queryOptions: database.queryOptions_,
      directedReadOptions: spanner.directedReadOptions || undefined,
    };
  } else if (query && typeof query === 'object') {
    // If complex options or non-scalar params are used, let Snapshot#_run handle them
    // unless we can encode them cleanly here.
    if (
      query.columnsMetadata ||
      query.gaxOptions ||
      query.maxResumeRetries !== undefined ||
      query.DirectedReadOptions ||
      query.directedReadOptions ||
      database.directedReadOptions_
    ) {
      return false;
    }
    sql = query.sql || '';
    if (query.json || query.jsonOptions) {
      rowOptions = {
        json: query.json,
        jsonOptions: query.jsonOptions,
      };
    }

    let paramsProto: google.protobuf.IStruct | undefined;
    let paramTypesProto: {[k: string]: google.spanner.v1.IType} | undefined;

    if (query.params) {
      const paramKeys = Object.keys(query.params);
      if (paramKeys.length > 0) {
        const fieldsMap: {[k: string]: google.protobuf.IValue} = {};
        paramTypesProto = {};
        const explicitTypes = query.types;
        for (let i = 0; i < paramKeys.length; i++) {
          const k = paramKeys[i];
          const v = query.params[k];
          const explicitType = explicitTypes ? explicitTypes[k] : undefined;
          if (
            explicitType !== undefined &&
            typeof explicitType !== 'string'
          ) {
            return false;
          }
          const explicitTypeProto =
            typeof explicitType === 'string'
              ? SCALAR_TYPE_PROTOS[explicitType.toLowerCase()]
              : undefined;
          if (explicitType !== undefined && !explicitTypeProto) {
            return false;
          }
          if (typeof v === 'string') {
            if (
              v.length === 36 &&
              !explicitTypeProto &&
              process.env.SPANNER_ENABLE_UUID_AS_UNTYPED?.toLowerCase() ===
                'true'
            ) {
              return false;
            }
            fieldsMap[k] = {stringValue: v};
            paramTypesProto[k] = explicitTypeProto || SCALAR_TYPE_PROTOS.string;
          } else if (typeof v === 'boolean') {
            fieldsMap[k] = {boolValue: v};
            paramTypesProto[k] = explicitTypeProto || SCALAR_TYPE_PROTOS.bool;
          } else if (typeof v === 'number') {
            if (
              explicitTypeProto === SCALAR_TYPE_PROTOS.float64 ||
              explicitTypeProto === SCALAR_TYPE_PROTOS.float32
            ) {
              fieldsMap[k] = Number.isFinite(v)
                ? {numberValue: v}
                : {stringValue: v.toString()};
              paramTypesProto[k] = explicitTypeProto;
            } else if (Number.isInteger(v)) {
              fieldsMap[k] = {stringValue: String(v)};
              paramTypesProto[k] =
                explicitTypeProto || SCALAR_TYPE_PROTOS.int64;
            } else if (!explicitTypeProto) {
              fieldsMap[k] = Number.isFinite(v)
                ? {numberValue: v}
                : {stringValue: v.toString()};
              paramTypesProto[k] = SCALAR_TYPE_PROTOS.float64;
            } else {
              return false;
            }
          } else if (v instanceof Int) {
            fieldsMap[k] = {stringValue: String(v.value)};
            paramTypesProto[k] = explicitTypeProto || SCALAR_TYPE_PROTOS.int64;
          } else if (v instanceof Float) {
            fieldsMap[k] = Number.isFinite(v.value)
              ? {numberValue: v.value}
              : {stringValue: String(v.value)};
            paramTypesProto[k] =
              explicitTypeProto || SCALAR_TYPE_PROTOS.float64;
          } else if (v instanceof Numeric) {
            fieldsMap[k] = {stringValue: v.value};
            paramTypesProto[k] =
              explicitTypeProto || SCALAR_TYPE_PROTOS.numeric;
          } else {
            // Fall back to Snapshot#_run for arrays, structs, dates, bytes, nulls, etc.
            return false;
          }
        }
        paramsProto = {fields: fieldsMap};
      }
    }

    reqObj = {
      session: sessionName,
      sql,
      transaction: txSelector,
      params: paramsProto,
      paramTypes: paramTypesProto,
      queryMode: query.queryMode,
      partitionToken: query.partitionToken,
      seqno: 1,
      queryOptions: query.queryOptions
        ? Object.assign({}, database.queryOptions_, query.queryOptions)
        : database.queryOptions_,
      requestOptions: query.requestOptions,
      directedReadOptions: spanner.directedReadOptions || undefined,
      dataBoostEnabled: query.dataBoostEnabled,
    };
  } else {
    return false;
  }

  let reqBuffer: Buffer;
  try {
    reqBuffer = encodeExecuteSqlRequest(reqObj, true);
  } catch (_) {
    return false;
  }

  if (!session._nativeHeadersStr) {
    let base = '';
    const commonHdrs = session.commonHeaders_ || database.commonHeaders_;
    if (commonHdrs && typeof commonHdrs === 'object') {
      for (const [hk, hv] of Object.entries(commonHdrs)) {
        if (hk !== 'x-goog-request-params' && hv !== undefined && hv !== null) {
          base = base ? `${base}\n${hk}:${hv}` : `${hk}:${hv}`;
        }
      }
    }
    if (!base) {
      base = `google-cloud-resource-prefix:${dbName}\nx-goog-spanner-enable-afe-server-timing:true`;
    }
    session._nativeHeadersStr = base;
  }
  const nthReq: number | undefined =
    typeof database._nextNthRequest === 'function'
      ? database._nextNthRequest()
      : undefined;
  const reqId: string | undefined =
    nthReq !== undefined
      ? database._requestIdPrefix
        ? `${database._requestIdPrefix}${nthReq}.1`
        : craftRequestId(
            database._clientId ?? database._nthClientId ?? 1,
            database._channelId ?? 1,
            nthReq,
            1,
          )
      : undefined;
  const headersStr: string = reqId
    ? `${session._nativeHeadersStr}\nx-goog-spanner-request-id:${reqId}`
    : session._nativeHeadersStr;

  const metricsEnabled = Boolean(spanner?._metricsEnabled);
  const metricStartMs = metricsEnabled ? performance.now() : -1;
  let metricsTracer: MetricsTracer | null = null;
  if (
    metricsEnabled &&
    typeof spanner._initMetricsTracer === 'function' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (spanner._initMetricsTracer as any).isSinonProxy
  ) {
    metricsTracer = spanner._initMetricsTracer({
      client: 'SpannerClient',
      method: 'executeStreamingSql',
      reqOpts: {session: sessionName},
      headers: reqId ? {'x-goog-spanner-request-id': reqId} : undefined,
    });
    metricsTracer?.recordAttemptStart();
  }

  const state = getGlobalState();
  const sqlKey = sql ? `${dbName}::${sql}` : '';
  const cachedSchema = sqlKey ? state.schemaCache.get(sqlKey) : undefined;
  const skipTxBit = options?.returnReadTimestamp === false ? 2 : 0;
  const metricsBit = metricsEnabled ? 8 : 0;
  const schemaHashBits = (cachedSchema?.schemaHash || 0) << 8;
  const skipMetadata =
    (cachedSchema ? 1 | skipTxBit : 0) | 4 | metricsBit | schemaHashBits;

  const allRows: Row[] = [];
  let metadata: google.spanner.v1.ResultSetMetadata | undefined = cachedSchema
    ? ({rowType: cachedSchema.rowType} as google.spanner.v1.ResultSetMetadata)
    : undefined;
  let stats: google.spanner.v1.ResultSetStats | undefined;
  let finished = false;
  let fields: google.spanner.v1.StructType.Field[] | undefined =
    cachedSchema?.fields;
  let fieldNames: (string | null | undefined)[] | undefined =
    cachedSchema?.fieldNames;
  let decoders: Function[] | undefined =
    cachedSchema &&
    !rowOptions.json &&
    !rowOptions.jsonOptions &&
    codec.decode === originalDecode
      ? cachedSchema.defaultDecoders
      : cachedSchema
        ? createFieldDecoders(cachedSchema.fields, rowOptions)
        : undefined;

  const streamHandle = addon.executeStreamingSql(
    serviceHandle,
    sessionName,
    reqBuffer,
    headersStr,
    timeoutMs,
    skipMetadata,
    RUN_BATCH_ROW_SIZE,
    (napiErr, batch) => {
      if (finished) {
        return false;
      }
      if (napiErr) {
        finished = true;
        recordNativeMetricsCompletion(
          spanner,
          database,
          sessionName,
          metricStartMs,
          metricsTracer,
          batch,
          (napiErr as grpc.ServiceError).code ?? grpc.status.UNKNOWN,
        );
        callback(napiErr as grpc.ServiceError, allRows, stats, metadata);
        return false;
      }

      if (batch.status < 0) {
        finished = true;
        const grpcErr = createGrpcServiceError(batch, reqId);
        recordNativeMetricsCompletion(
          spanner,
          database,
          sessionName,
          metricStartMs,
          metricsTracer,
          batch,
          grpcErr.code ?? grpc.status.UNKNOWN,
        );
        callback(grpcErr, allRows, stats, metadata);
        return false;
      }

      if (batch.metadataBytes && batch.metadataBytes.length > 0) {
        const decodedMeta = decodeResultSetMetadata(batch.metadataBytes);
        const schemaChanged =
          batch.schemaHash &&
          cachedSchema &&
          batch.schemaHash !== cachedSchema.schemaHash;
        if (
          cachedSchema &&
          !schemaChanged &&
          (!decodedMeta.rowType || !decodedMeta.rowType.fields?.length)
        ) {
          decodedMeta.rowType = cachedSchema.rowType;
        }
        metadata = decodedMeta;

        if ((!fields || schemaChanged) && metadata.rowType?.fields) {
          fields =
            metadata.rowType.fields as google.spanner.v1.StructType.Field[];
          fieldNames = fields.map(f => f.name);
          const defaultDecoders = createFieldDecoders(fields, {});
          if (sqlKey && fields.length > 0) {
            setSchemaCacheEntry(state, sqlKey, {
              rowType: metadata.rowType,
              fields,
              fieldNames,
              defaultDecoders,
              schemaHash: batch.schemaHash,
            });
          }
          decoders =
            !rowOptions.json &&
            !rowOptions.jsonOptions &&
            codec.decode === originalDecode
              ? defaultDecoders
              : createFieldDecoders(fields, rowOptions);
        }
      } else if (batch.hasReadTimestamp) {
        const secNum = batch.readTimestampSec || 0;
        const nanosNum = batch.readTimestampNanos || 0;
        metadata = {
          rowType: cachedSchema?.rowType,
          transaction: {
            id: EMPTY_BUFFER,
            readTimestamp: {
              seconds: String(secNum),
              nanos: nanosNum,
            },
          } as unknown as google.spanner.v1.ITransaction,
        } as unknown as google.spanner.v1.ResultSetMetadata;
      }

      if (batch.statsBytes && batch.statsBytes.length > 0) {
        stats = decodeResultSetStats(batch.statsBytes);
      }

      if (
        batch.cells &&
        batch.numRows &&
        batch.numCols &&
        fields &&
        decoders
      ) {
        try {
          decodeCellsIntoRows(
            batch.cells,
            batch.numRows,
            batch.numCols,
            fields,
            fieldNames,
            decoders,
            rowOptions,
            allRows,
          );
        } catch (decodeErr) {
          finished = true;
          addon.closeStream(streamHandle);
          const normErr = normalizeNativeDecodeError(decodeErr);
          recordNativeMetricsCompletion(
            spanner,
            database,
            sessionName,
            metricStartMs,
            metricsTracer,
            batch,
            normErr.code ?? grpc.status.UNKNOWN,
          );
          callback(normErr, allRows, stats, metadata);
          return false;
        }
      }

      if (batch.status === 1) {
        finished = true;
        recordNativeMetricsCompletion(
          spanner,
          database,
          sessionName,
          metricStartMs,
          metricsTracer,
          batch,
          grpc.status.OK,
        );
        callback(null, allRows, stats, metadata);
      }
      return true;
    },
  );

  return true;
}

/**
 * Executes a non-streaming `Snapshot#_run` / `Database#run` query directly via
 * the Go Shared Core without allocating a Node `Readable` stream pipeline.
 */
export function executeNativeTransactionRun(
  params: NativeTransactionRunParams,
): void {
  const {
    snapshot,
    sanitizeRequest,
    headers,
    rowOptions,
    timeoutMs,
    streamSpan,
    onSuccess,
    onError,
  } = params;

  const startExecution = (waitErr?: Error) => {
    if (waitErr) {
      onError(waitErr as grpc.ServiceError, []);
      return;
    }

    let formattedRequest: google.spanner.v1.IExecuteSqlRequest;
    try {
      formattedRequest = sanitizeRequest();
    } catch (e) {
      setImmediate(() => onError(e as grpc.ServiceError, []));
      return;
    }

    const session = snapshot.session;
    const database = session?.parent;
    const spanner = database?.parent?.parent;
    const addon = loadNativeAddon();
    const serviceHandle = getOrCreateServiceHandle(spanner);

    if (!addon || serviceHandle <= 0) {
      setImmediate(() =>
        onError(
          Object.assign(
            new Error('Failed to initialize Spanner Go Shared Core'),
            {
              code: grpc.status.INTERNAL,
            },
          ) as grpc.ServiceError,
          [],
        ),
      );
      return;
    }

    const reqBuffer = encodeExecuteSqlRequest(formattedRequest);

    const state = getGlobalState();
    const dbName: string = database?.formattedName_ || '';
    const routingKey = formattedRequest.session || dbName;
    const reqId = headers?.['x-goog-spanner-request-id'];

    const metricsEnabled = Boolean(spanner?._metricsEnabled);
    const metricStartMs = metricsEnabled ? performance.now() : -1;
    let metricsTracer: MetricsTracer | null = null;
    if (
      metricsEnabled &&
      typeof spanner._initMetricsTracer === 'function' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (spanner._initMetricsTracer as any).isSinonProxy
    ) {
      metricsTracer = spanner._initMetricsTracer({
        client: 'SpannerClient',
        method: 'executeStreamingSql',
        reqOpts: {session: routingKey},
        headers: reqId ? {'x-goog-spanner-request-id': reqId} : undefined,
      });
      metricsTracer?.recordAttemptStart();
    }

    const sqlKey =
      dbName && formattedRequest.sql
        ? `${dbName}::${formattedRequest.sql}`
        : '';
    const cachedSchema = sqlKey ? state.schemaCache.get(sqlKey) : undefined;
    const metricsBit = metricsEnabled ? 8 : 0;
    const schemaHashBits = (cachedSchema?.schemaHash || 0) << 8;
    const skipMetadata =
      (cachedSchema ? 1 : 0) | 4 | metricsBit | schemaHashBits;

    const headersStr = buildHeadersString(
      headers,
      undefined,
      Boolean(streamSpan),
    );

    const allRows: Row[] = [];
    let metadata: google.spanner.v1.ResultSetMetadata | undefined;
    let stats: google.spanner.v1.ResultSetStats | undefined;
    let finished = false;
    let emittedRetryEvents = false;
    let fields: google.spanner.v1.StructType.Field[] | undefined =
      cachedSchema?.fields;
    let fieldNames: (string | null | undefined)[] | undefined =
      cachedSchema?.fieldNames;
    let decoders: Function[] | undefined =
      cachedSchema &&
      !rowOptions.json &&
      !rowOptions.jsonOptions &&
      !rowOptions.columnsMetadata &&
      codec.decode === originalDecode
        ? cachedSchema.defaultDecoders
        : cachedSchema
          ? createFieldDecoders(cachedSchema.fields, rowOptions)
          : undefined;

    if (cachedSchema) {
      metadata = {
        rowType: cachedSchema.rowType,
      } as google.spanner.v1.ResultSetMetadata;
    }

    const streamHandle = addon.executeStreamingSql(
      serviceHandle,
      routingKey,
      reqBuffer,
      headersStr,
      normalizeTimeoutMs(timeoutMs),
      skipMetadata,
      RUN_BATCH_ROW_SIZE,
      (napiErr, batch) => {
        if (finished) {
          return false;
        }
        if (
          !emittedRetryEvents &&
          streamSpan &&
          batch?.attemptCount &&
          batch.attemptCount > 1
        ) {
          emittedRetryEvents = true;
          streamSpan.addEvent?.('Re-attempting start stream', {attempt: 2});
          for (let a = 3; a <= batch.attemptCount; a++) {
            streamSpan.addEvent?.('Resuming stream', {
              resume_token: '',
              attempt: a,
            });
          }
        }
        if (napiErr) {
          finished = true;
          recordNativeMetricsCompletion(
            spanner,
            database,
            routingKey,
            metricStartMs,
            metricsTracer,
            batch,
            (napiErr as grpc.ServiceError).code ?? grpc.status.UNKNOWN,
          );
          onError(napiErr as grpc.ServiceError, allRows, stats, metadata);
          return false;
        }

        if (batch.status < 0) {
          finished = true;
          const grpcErr = createGrpcServiceError(batch, reqId);
          recordNativeMetricsCompletion(
            spanner,
            database,
            routingKey,
            metricStartMs,
            metricsTracer,
            batch,
            grpcErr.code ?? grpc.status.UNKNOWN,
          );
          onError(grpcErr, allRows, stats, metadata);
          return false;
        }

        if (batch.metadataBytes && batch.metadataBytes.length > 0) {
          const decodedMeta = decodeResultSetMetadata(batch.metadataBytes);
          const schemaChanged =
            batch.schemaHash &&
            cachedSchema &&
            batch.schemaHash !== cachedSchema.schemaHash;
          if (
            cachedSchema &&
            !schemaChanged &&
            (!decodedMeta.rowType || !decodedMeta.rowType.fields?.length)
          ) {
            decodedMeta.rowType = cachedSchema.rowType;
          }
          metadata = decodedMeta;

          if (metadata.transaction && !snapshot.id) {
            snapshot._update(metadata.transaction, streamSpan);
          }

          if ((!fields || schemaChanged) && metadata.rowType?.fields) {
            fields =
              metadata.rowType.fields as google.spanner.v1.StructType.Field[];
            fieldNames = fields.map(f => f.name);
            const defaultDecoders = createFieldDecoders(fields, {});
            if (sqlKey && fields.length > 0) {
              setSchemaCacheEntry(state, sqlKey, {
                rowType: metadata.rowType,
                fields,
                fieldNames,
                defaultDecoders,
                schemaHash: batch.schemaHash,
              });
            }
            decoders =
              !rowOptions.json &&
              !rowOptions.jsonOptions &&
              !rowOptions.columnsMetadata &&
              codec.decode === originalDecode
                ? defaultDecoders
                : createFieldDecoders(fields, rowOptions);
          }
        } else if (batch.hasReadTimestamp) {
          const secNum = batch.readTimestampSec || 0;
          const nanosNum = batch.readTimestampNanos || 0;
          const readTsProto = {
            seconds: String(secNum),
            nanos: nanosNum,
          };
          const txObj = {
            id: EMPTY_BUFFER,
            readTimestamp: readTsProto,
          } as unknown as google.spanner.v1.ITransaction;
          if (!snapshot.id) {
            snapshot.id = EMPTY_BUFFER;
            snapshot.metadata = txObj;
            streamSpan?.addEvent?.('Transaction Creation Done', {id: ''});
            snapshot.readTimestampProto = readTsProto;
            snapshot.readTimestamp = decodeTimestamp({
              seconds: secNum,
              nanos: nanosNum,
            });
            snapshot._releaseWaitingRequests?.();
          }
          metadata = {
            rowType: cachedSchema?.rowType,
            transaction: txObj,
          } as unknown as google.spanner.v1.ResultSetMetadata;
        }

        if (batch.precommitBytes && batch.precommitBytes.length > 0) {
          const precommitToken = decodePrecommitToken(batch.precommitBytes);
          snapshot._updatePrecommitToken({precommitToken});
        }

        if (batch.statsBytes && batch.statsBytes.length > 0) {
          stats = decodeResultSetStats(batch.statsBytes);
        }

        if (
          batch.cells &&
          batch.numRows &&
          batch.numCols &&
          fields &&
          decoders
        ) {
          try {
            decodeCellsIntoRows(
              batch.cells,
              batch.numRows,
              batch.numCols,
              fields,
              fieldNames,
              decoders,
              rowOptions,
              allRows,
            );
          } catch (decodeErr) {
            finished = true;
            addon.closeStream(streamHandle);
            const normErr = normalizeNativeDecodeError(decodeErr);
            recordNativeMetricsCompletion(
              spanner,
              database,
              routingKey,
              metricStartMs,
              metricsTracer,
              batch,
              normErr.code ?? grpc.status.UNKNOWN,
            );
            onError(normErr, allRows, stats, metadata);
            return false;
          }
        }

        if (batch.status === 1) {
          finished = true;
          recordNativeMetricsCompletion(
            spanner,
            database,
            routingKey,
            metricStartMs,
            metricsTracer,
            batch,
            grpc.status.OK,
          );
          onSuccess(allRows, stats, metadata);
        }
        return true;
      },
    );
  };

  if (!snapshot.id && snapshot._options?.readWrite) {
    if (!snapshot._inlineBeginStarted) {
      snapshot._inlineBeginStarted = true;
      startExecution();
    } else {
      snapshot._waitingRequests.push(startExecution);
    }
  } else {
    startExecution();
  }
}

export interface NativeStreamParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snapshot: any;
  sanitizeRequest: () => google.spanner.v1.IExecuteSqlRequest;
  getHeaders: () => {[k: string]: string};
  rowOptions: RowOptions;
  timeoutMs?: number;
}

/**
 * Creates a `PartialResultStream`-compatible Transform object-mode stream
 * backed by the Go Shared Core (`SpannerCoreExecuteStreamingSqlAsync`).
 */
export function runStreamNative(
  params: NativeStreamParams,
): PartialResultStream {
  const {snapshot, sanitizeRequest, getHeaders, rowOptions, timeoutMs} = params;

  let streamHandle = 0;
  let started = false;
  let finishedReading = false;
  let eofReceived = false;
  let emittedResponse = false;
  let nativeStreamPaused = false;

  let metadata: google.spanner.v1.ResultSetMetadata | undefined;
  let fields: google.spanner.v1.StructType.Field[] | undefined;
  let fieldNames: (string | null | undefined)[] | undefined;
  let decoders: Function[] | undefined;
  const rowBuffer: Row[] = [];

  const pauseNativeIfNeeded = () => {
    if (!nativeStreamPaused && streamHandle > 0 && !eofReceived && !finishedReading) {
      nativeStreamPaused = true;
      loadNativeAddon()?.pauseStream?.(streamHandle);
    }
  };

  const resumeNativeIfNeeded = () => {
    if (nativeStreamPaused && streamHandle > 0 && !eofReceived && !finishedReading) {
      nativeStreamPaused = false;
      loadNativeAddon()?.resumeStream?.(streamHandle);
    }
  };

  const readable = new Transform({
    objectMode: true,
    read() {
      drainBufferOrStart();
    },
    transform(_chunk, _enc, cb) {
      cb();
    },
    destroy(err, cb) {
      finishedReading = true;
      rowBuffer.length = 0;
      if (streamHandle > 0) {
        const addon = loadNativeAddon();
        const handleToClose = streamHandle;
        streamHandle = 0;
        addon?.closeStream(handleToClose);
      }
      cb(err);
    },
  });

  readable.on('pause', () => {
    pauseNativeIfNeeded();
  });
  readable.on('resume', () => {
    drainBufferOrStart();
  });

  const userStream = streamEvents(readable) as unknown as PartialResultStream;
  // Provide abort() method for PartialResultStream compatibility
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (userStream as any).abort = () => {
    userStream.destroy();
  };

  function drainBufferOrStart() {
    if (finishedReading || userStream.destroyed) {
      return;
    }

    try {
      while (rowBuffer.length > 0) {
        const nextRow = rowBuffer.shift()!;
        if (!readable.push(nextRow)) {
          pauseNativeIfNeeded();
          return;
        }
      }
    } catch (pushErr) {
      finishedReading = true;
      rowBuffer.length = 0;
      if (streamHandle > 0) {
        const addon = loadNativeAddon();
        const handleToClose = streamHandle;
        streamHandle = 0;
        addon?.closeStream(handleToClose);
      }
      readable.destroy(pushErr as Error);
      return;
    }

    if (eofReceived) {
      finishedReading = true;
      readable.push(null);
      if (!readable.writableEnded) {
        readable.end();
      }
      return;
    }

    if (nativeStreamPaused && rowBuffer.length === 0) {
      resumeNativeIfNeeded();
    }

    if (!started) {
      started = true;
      initStream();
    }
  }

  function initStream() {
    const beginStream = (waitErr?: Error) => {
      if (waitErr) {
        readable.destroy(waitErr);
        return;
      }
      if (finishedReading || userStream.destroyed) {
        return;
      }

      let formattedRequest: google.spanner.v1.IExecuteSqlRequest;
      try {
        formattedRequest = sanitizeRequest();
      } catch (e) {
        setImmediate(() => readable.destroy(e as Error));
        return;
      }

      const session = snapshot.session;
      const database = session?.parent;
      const spanner = database?.parent?.parent;
      const addon = loadNativeAddon();
      const serviceHandle = getOrCreateServiceHandle(spanner);

      if (!addon || serviceHandle <= 0) {
        setImmediate(() =>
          readable.destroy(
            Object.assign(
              new Error('Failed to initialize Spanner Go Shared Core'),
              {code: grpc.status.INTERNAL},
            ),
          ),
        );
        return;
      }

      const reqBuffer = encodeExecuteSqlRequest(formattedRequest);
      const rawHeaders = getHeaders();
      const reqId = rawHeaders?.['x-goog-spanner-request-id'];
      const headersStr = buildHeadersString(rawHeaders);
      const dbName: string = database?.formattedName_ || '';
      const routingKey = formattedRequest.session || dbName;

      const metricsEnabled = Boolean(spanner?._metricsEnabled);
      const metricStartMs = metricsEnabled ? performance.now() : -1;
      let metricsTracer: MetricsTracer | null = null;
      if (
        metricsEnabled &&
        typeof spanner._initMetricsTracer === 'function' &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (spanner._initMetricsTracer as any).isSinonProxy
      ) {
        metricsTracer = spanner._initMetricsTracer({
          client: 'SpannerClient',
          method: 'executeStreamingSql',
          reqOpts: {session: routingKey},
          headers: reqId ? {'x-goog-spanner-request-id': reqId} : undefined,
        });
        metricsTracer?.recordAttemptStart();
      }
      const skipMetadata = metricsEnabled ? 8 : 0;
      const startTime = Date.now();
      const effectiveTimeout =
        timeoutMs === 0
          ? 30000
          : timeoutMs !== undefined && Number.isFinite(timeoutMs)
            ? timeoutMs
            : Infinity;

      streamHandle = addon.executeStreamingSql(
        serviceHandle,
        routingKey,
        reqBuffer,
        headersStr,
        normalizeTimeoutMs(timeoutMs),
        skipMetadata,
        STREAM_BATCH_ROW_SIZE,
        (napiErr, batch) => {
          if (finishedReading || userStream.destroyed) {
            return false;
          }

          if (napiErr) {
            finishedReading = true;
            streamHandle = 0;
            recordNativeMetricsCompletion(
              spanner,
              database,
              routingKey,
              metricStartMs,
              metricsTracer,
              batch,
              (napiErr as grpc.ServiceError).code ?? grpc.status.UNKNOWN,
            );
            readable.destroy(napiErr);
            return false;
          }

          if (batch.status < 0) {
            finishedReading = true;
            streamHandle = 0;
            const grpcErr = createGrpcServiceError(batch, reqId);
            recordNativeMetricsCompletion(
              spanner,
              database,
              routingKey,
              metricStartMs,
              metricsTracer,
              batch,
              grpcErr.code ?? grpc.status.UNKNOWN,
            );
            const finalErr =
              grpcErr.code === grpc.status.DEADLINE_EXCEEDED &&
              (effectiveTimeout < 1 ||
                Date.now() - startTime >= effectiveTimeout - 15)
                ? new DeadlineError(grpcErr)
                : grpcErr;
            readable.destroy(finalErr);
            return false;
          }

          let decodedStats: google.spanner.v1.ResultSetStats | undefined;
          let decodedPrecommit:
            | google.spanner.v1.IMultiplexedSessionPrecommitToken
            | undefined;

          if (batch.metadataBytes && batch.metadataBytes.length > 0) {
            metadata = decodeResultSetMetadata(batch.metadataBytes);
            if (!fields && metadata.rowType?.fields) {
              fields =
                metadata.rowType.fields as google.spanner.v1.StructType.Field[];
              fieldNames = fields.map(f => f.name);
              decoders = createFieldDecoders(fields, rowOptions);
            }
          }

          if (batch.precommitBytes && batch.precommitBytes.length > 0) {
            decodedPrecommit = decodePrecommitToken(batch.precommitBytes);
          }

          if (batch.statsBytes && batch.statsBytes.length > 0) {
            decodedStats = decodeResultSetStats(batch.statsBytes);
          }

          if (
            !emittedResponse &&
            (metadata || decodedStats || decodedPrecommit)
          ) {
            emittedResponse = true;
            userStream.emit('response', {
              metadata,
              stats: decodedStats,
              precommitToken: decodedPrecommit,
            } as unknown as google.spanner.v1.PartialResultSet);
          } else if (decodedPrecommit) {
            userStream.emit('response', {
              precommitToken: decodedPrecommit,
            } as unknown as google.spanner.v1.PartialResultSet);
          }

          if (
            batch.cells &&
            batch.numRows &&
            batch.numCols &&
            fields &&
            decoders
          ) {
            try {
              decodeCellsIntoRows(
                batch.cells,
                batch.numRows,
                batch.numCols,
                fields,
                fieldNames,
                decoders,
                rowOptions,
                rowBuffer,
              );
            } catch (decodeErr) {
              finishedReading = true;
              const handleToClose = streamHandle;
              streamHandle = 0;
              addon.closeStream(handleToClose);
              const normErr = normalizeNativeDecodeError(decodeErr);
              recordNativeMetricsCompletion(
                spanner,
                database,
                routingKey,
                metricStartMs,
                metricsTracer,
                batch,
                normErr.code ?? grpc.status.UNKNOWN,
              );
              readable.destroy(normErr);
              return false;
            }
          }

          if (decodedStats) {
            userStream.emit('stats', decodedStats);
          }

          if (batch.status === 1) {
            eofReceived = true;
            streamHandle = 0;
            recordNativeMetricsCompletion(
              spanner,
              database,
              routingKey,
              metricStartMs,
              metricsTracer,
              batch,
              grpc.status.OK,
            );
          }

          try {
            while (rowBuffer.length > 0) {
              if (!readable.push(rowBuffer.shift()!)) {
                pauseNativeIfNeeded();
                return true;
              }
            }
          } catch (pushErr) {
            finishedReading = true;
            rowBuffer.length = 0;
            if (streamHandle > 0) {
              const handleToClose = streamHandle;
              streamHandle = 0;
              addon.closeStream(handleToClose);
            }
            recordNativeMetricsCompletion(
              spanner,
              database,
              routingKey,
              metricStartMs,
              metricsTracer,
              batch,
              (pushErr as grpc.ServiceError)?.code ?? grpc.status.UNKNOWN,
            );
            readable.destroy(pushErr as Error);
            return false;
          }

          if (eofReceived && !finishedReading) {
            finishedReading = true;
            readable.push(null);
            if (!readable.writableEnded) {
              readable.end();
            }
          }
          return true;
        },
      );
    };

    if (!snapshot.id && snapshot._options?.readWrite) {
      if (!snapshot._inlineBeginStarted) {
        snapshot._inlineBeginStarted = true;
        beginStream();
      } else {
        snapshot._waitingRequests.push(beginStream);
      }
    } else {
      beginStream();
    }
  }

  return userStream;
}
