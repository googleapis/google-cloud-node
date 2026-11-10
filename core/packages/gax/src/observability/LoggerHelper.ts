/**
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

import {EventEmitter} from 'events';
import {context, TraceFlags} from '@opentelemetry/api';
import * as loggingUtils from 'google-logging-utils';
import {APICallback, GaxCallResult} from '../apitypes';
import {rpcCodeFromHttpStatusCode, Status} from '../status';
import {
  AttemptTraceContext,
  buildInitialAttributes,
  getActiveTraceContext,
  resolveEndpointAndDomain,
  resolveRpcMethod,
  StaticTraceContext,
} from './contextUtil';
import {
  isPreConnectionFailure,
  resolveErrorInfoDomain,
  resolveErrorInfoMetadataAttributes,
  resolveErrorResponsePayload,
  resolveErrorType,
  resolveExceptionMessage,
  resolveExceptionStacktrace,
  resolveExceptionType,
  resolveResponseStatusCode,
  resolveRpcStatusName,
} from './errorUtil';
import {getPromiseTarget, handlePromise, handleStream} from './TracerHelper';

export interface LogPayload {
  'rpc.system.name'?: 'grpc' | 'http';
  'rpc.method'?: string;
  'rpc.response.status_code'?: string;
  'http.response.status_code'?: number;
  'error.type'?: string;
  'gcp.errors.domain'?: string;
  [key: `gcp.errors.metadata.${string}`]: string | undefined;
  'gcp.client.repo'?: string;
  'gcp.client.artifact'?: string;
  'gcp.client.version'?: string;
  'gcp.client.language'?: 'node';
  'gcp.client.service'?: string;
  'url.domain'?: string;
  'server.address'?: string;
  'response.payload'?: string;
  'exception.type'?: string;
  'exception.message'?: string;
  'exception.stacktrace'?: string;
}

export type GaxLogFields = loggingUtils.LogFields &
  LogPayload & {
    trace_id?: string;
    span_id?: string;
    trace_sampled?: boolean;
  };

interface BuiltinBackendInternals extends loggingUtils.DebugLogBackend {
  filters?: string[];
  isEnabled?: (namespace: string) => boolean;
  upstream?: loggingUtils.DebugLogBackend;
}

const gaxLoggerCache = new Map<string, loggingUtils.AdhocDebugLogFunction>();
let fallbackNodeBackend: loggingUtils.DebugLogBackend | undefined;
let fallbackStructuredBackend: loggingUtils.DebugLogBackend | undefined;
const fallbackStructuredByUpstream = new WeakMap<
  loggingUtils.DebugLogBackend,
  loggingUtils.DebugLogBackend
>();
let nodeBackendPrototype: BuiltinBackendInternals | null | undefined;
let structuredBackendPrototype: BuiltinBackendInternals | null | undefined;

function getFallbackNodeBackend(): loggingUtils.DebugLogBackend {
  if (!fallbackNodeBackend) {
    const backend = loggingUtils.getNodeBackend() as BuiltinBackendInternals;
    if (Array.isArray(backend.filters)) {
      backend.filters = ['*'];
    }
    fallbackNodeBackend = backend;
  }
  return fallbackNodeBackend;
}

function getNodeBackendPrototype(): BuiltinBackendInternals | null {
  if (nodeBackendPrototype === undefined) {
    try {
      const proto = Object.getPrototypeOf(
        loggingUtils.getNodeBackend(),
      ) as BuiltinBackendInternals | null;
      nodeBackendPrototype = proto ?? null;
    } catch {
      nodeBackendPrototype = null;
    }
  }
  return nodeBackendPrototype;
}

function getStructuredBackendPrototype(): BuiltinBackendInternals | null {
  if (structuredBackendPrototype === undefined) {
    try {
      const proto = Object.getPrototypeOf(
        loggingUtils.getStructuredBackend(),
      ) as BuiltinBackendInternals | null;
      structuredBackendPrototype = proto ?? null;
    } catch {
      structuredBackendPrototype = null;
    }
  }
  return structuredBackendPrototype;
}

function getFallbackStructuredBackend(
  rawUpstream?: loggingUtils.DebugLogBackend,
): loggingUtils.DebugLogBackend {
  if (!rawUpstream) {
    if (!fallbackStructuredBackend) {
      const backend =
        loggingUtils.getStructuredBackend() as BuiltinBackendInternals;
      if (Array.isArray(backend.filters)) {
        backend.filters = ['*'];
      }
      fallbackStructuredBackend = backend;
    }
    return fallbackStructuredBackend;
  }

  const nodeProto = getNodeBackendPrototype();
  const resolvedUpstream =
    nodeProto && Object.getPrototypeOf(rawUpstream) === nodeProto
      ? getFallbackNodeBackend()
      : rawUpstream;

  let cached = fallbackStructuredByUpstream.get(resolvedUpstream);
  if (!cached) {
    const backend = loggingUtils.getStructuredBackend(
      resolvedUpstream,
    ) as BuiltinBackendInternals;
    if (Array.isArray(backend.filters)) {
      backend.filters = ['*'];
    }
    cached = backend;
    fallbackStructuredByUpstream.set(resolvedUpstream, backend);
  }
  return cached;
}

function rescueIfDroppedByBuiltinBackend(
  activeBackend: loggingUtils.DebugLogBackend,
  namespace: string,
  fields: loggingUtils.LogFields,
  args: unknown[],
): void {
  const nodeProto = getNodeBackendPrototype();
  const structuredProto = getStructuredBackendPrototype();
  const backendProto = Object.getPrototypeOf(activeBackend);
  const internalBackend = activeBackend as BuiltinBackendInternals;

  if (
    structuredProto !== null &&
    structuredProto !== nodeProto &&
    backendProto === structuredProto
  ) {
    const upstreamDropped =
      internalBackend.upstream !== undefined &&
      nodeProto !== null &&
      Object.getPrototypeOf(internalBackend.upstream) === nodeProto &&
      typeof (internalBackend.upstream as BuiltinBackendInternals).isEnabled ===
        'function' &&
      !(internalBackend.upstream as BuiltinBackendInternals).isEnabled!(
        namespace,
      );
    const dropped =
      (typeof internalBackend.isEnabled === 'function' &&
        !internalBackend.isEnabled(namespace)) ||
      upstreamDropped;
    if (dropped) {
      getFallbackStructuredBackend(internalBackend.upstream).log(
        namespace,
        fields,
        ...args,
      );
    }
    return;
  }

  if (nodeProto !== null && backendProto === nodeProto) {
    if (
      typeof internalBackend.isEnabled === 'function' &&
      !internalBackend.isEnabled(namespace)
    ) {
      getFallbackNodeBackend().log(namespace, fields, ...args);
    }
  }
}

function emitGaxLog(
  namespace: string,
  fields: loggingUtils.LogFields,
  ...args: unknown[]
): void {
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};
  const envKey = loggingUtils.env?.nodeEnables ?? 'GOOGLE_SDK_NODE_LOGGING';
  const envValue = env[envKey];

  const target = loggingUtils.log(namespace);
  if (target === loggingUtils.placeholder) {
    // When `setBackend(null)` was explicitly called, keep logging disabled.
    // When `GOOGLE_SDK_NODE_LOGGING` is unset/empty and no backend was cached,
    // fall back to an unfiltered `NodeBackend` so `{enableTelemetryLogging: true}`
    // delivers logs without requiring `GOOGLE_SDK_NODE_LOGGING` or mutating global state.
    if (loggingUtils.getBackend() !== null && !envValue) {
      getFallbackNodeBackend().log(namespace, fields, ...args);
    }
    return;
  }

  target(fields, ...args);

  const activeBackend = loggingUtils.getBackend();
  if (activeBackend && typeof activeBackend === 'object') {
    rescueIfDroppedByBuiltinBackend(activeBackend, namespace, fields, args);
  }
}

/**
 * Returns the `google-logging-utils` logger for the given GCP client service,
 * defaulting to the `'google-gax'` namespace when no service name is provided.
 *
 * Ensures telemetry logs are still delivered to `NodeBackend` when logging was
 * enabled via `{enableTelemetryLogging: true}` without `GOOGLE_SDK_NODE_LOGGING`
 * matching the namespace, while preserving any custom backend installed via
 * `loggingUtils.setBackend()`.
 *
 * @param {string} [serviceName] - The GCP client service name (e.g. 'storage').
 * @returns {loggingUtils.AdhocDebugLogFunction} The logger function.
 */
export function getGaxLogger(
  serviceName?: string,
): loggingUtils.AdhocDebugLogFunction {
  const namespace = serviceName || 'google-gax';
  const existing = gaxLoggerCache.get(namespace);
  if (existing) {
    return existing;
  }
  const wrapper = new loggingUtils.AdhocDebugLogger(
    namespace,
    (fields: loggingUtils.LogFields, ...args: unknown[]) => {
      emitGaxLog(namespace, fields, ...args);
    },
  ).func;
  wrapper.sublog = (sub: string) => getGaxLogger(`${namespace}:${sub}`);
  gaxLoggerCache.set(namespace, wrapper);
  return wrapper;
}

/**
 * Builds the structured `LogPayload` attributes for a failed RPC call or attempt.
 *
 * @param {unknown} err - The error thrown or reported for the call.
 * @param {AttemptTraceContext} dynamicArgs - Dynamic context for the RPC call or attempt.
 * @param {StaticTraceContext} [staticArgs={}] - Static context for the client library.
 * @param {boolean} [includeExceptionAttributes=true] - Whether to populate `exception.*`
 *   attributes (set on L3 client call logs, omitted on L4 transport attempt logs).
 * @returns {LogPayload} The populated log payload attributes with undefined fields omitted.
 */
export function buildLogAttributes(
  err: unknown,
  dynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext = {},
  includeExceptionAttributes = true,
): LogPayload {
  const {rawAddress, urlDomain} = resolveEndpointAndDomain(
    dynamicArgs,
    staticArgs,
  );
  const initialAttributes = buildInitialAttributes(
    dynamicArgs,
    staticArgs,
    urlDomain,
  );
  const attributes: LogPayload = {};
  for (const [key, value] of Object.entries(initialAttributes)) {
    if (value !== undefined) {
      (attributes as Record<string, unknown>)[key] = value;
    }
  }
  if (rawAddress !== undefined && !isPreConnectionFailure(err)) {
    attributes['server.address'] = rawAddress;
  }

  const rpcMethod = resolveRpcMethod(dynamicArgs);
  if (rpcMethod) {
    attributes['rpc.method'] = rpcMethod;
  }

  const {rpcStatusName, httpStatusCode} = resolveResponseStatusCode(
    dynamicArgs.rpcType,
    true,
    err,
  );
  const normalizedRpcStatusName =
    dynamicArgs.rpcType === 'http'
      ? httpStatusCode !== undefined
        ? (resolveRpcStatusName(err) ??
          Status[rpcCodeFromHttpStatusCode(httpStatusCode)])
        : undefined
      : rpcStatusName;
  if (normalizedRpcStatusName !== undefined) {
    attributes['rpc.response.status_code'] = normalizedRpcStatusName;
  }
  if (httpStatusCode !== undefined) {
    attributes['http.response.status_code'] = httpStatusCode;
  }

  attributes['error.type'] = resolveErrorType(err, dynamicArgs.rpcType);

  const errorDomain = resolveErrorInfoDomain(err);
  if (errorDomain !== undefined) {
    attributes['gcp.errors.domain'] = errorDomain;
  }
  Object.assign(attributes, resolveErrorInfoMetadataAttributes(err));

  if (includeExceptionAttributes) {
    attributes['exception.type'] = resolveExceptionType(err);
    attributes['exception.message'] = resolveExceptionMessage(
      err,
      dynamicArgs.rpcType,
    );
    const stacktrace = resolveExceptionStacktrace(err);
    if (stacktrace !== undefined) {
      attributes['exception.stacktrace'] = stacktrace;
    }
  }

  return attributes;
}

/**
 * Executes `fn` and attaches stream, promise, callback, or synchronous error
 * handlers to invoke `onError` at most once when the operation fails.
 */
function executeLoggedOperation<T>(
  fn: (loggedCallback?: APICallback) => T,
  onError: (err: unknown) => void,
  isStreamCall: boolean,
  userCallback?: APICallback,
): T {
  // Latch to emit at most one log per invocation across execution boundaries.
  let hasLogged = false;
  const logOnce = (err: unknown) => {
    if (hasLogged) {
      return;
    }
    hasLogged = true;
    try {
      onError(err);
    } catch {
      // Fail open: telemetry logging must never mask or replace application errors.
    }
  };

  // Wrap user callback to log RPC errors before forwarding.
  let callbackInvoked = false;
  const loggedCallback: APICallback | undefined = userCallback
    ? function (this: unknown, ...args: Parameters<APICallback>) {
        callbackInvoked = true;
        const err = args[0];
        if (err) {
          logOnce(err);
        }
        userCallback.apply(this, args);
      }
    : undefined;

  // Execute call and attach error handlers for streams, promises, or sync throws.
  try {
    const result = fn(loggedCallback);
    const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
    if (isStreamCall && result instanceof EventEmitter) {
      handleStream(result, logOnce, () => {}, Boolean(loggedCallback));
    } else if (promiseTarget) {
      handlePromise(promiseTarget, logOnce, () => {});
    }
    return result;
  } catch (syncErr) {
    // Avoid logging errors thrown inside userCallback after RPC completion.
    if (!callbackInvoked) {
      logOnce(syncErr);
    }
    throw syncErr;
  }
}

/**
 * Executes an API call and emits a single `WARNING` log entry if the logical
 * request fails across promise, callback, stream, or synchronous execution boundaries.
 *
 * @template T
 * @param {AttemptTraceContext} dynamicArgs - Dynamic context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static context for the client library.
 * @param {function} fn - The operation to execute. Receives the wrapped callback
 *   when `userCallback` is supplied, otherwise `undefined`.
 * @param {boolean} [isStreamCall=false] - Whether the operation returns a stream (`EventEmitter`).
 * @param {APICallback} [userCallback] - Optional user callback for callback-style invocations.
 * @returns {T} The return value of `fn`.
 */
export function logCall<T = GaxCallResult>(
  dynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext,
  fn: (loggedCallback?: APICallback) => T,
  isStreamCall = false,
  userCallback?: APICallback,
): T {
  // Snapshot initial context in case async rejection loses active context.
  let initialContext: ReturnType<typeof context.active> | undefined;
  try {
    initialContext = context.active();
  } catch {
    // Fail open if active context retrieval throws.
  }

  const emitL3WarnLog = (err: unknown) => {
    // Resolve logger and active T3 client request span (or outer OpenTelemetry span when GAX tracing is disabled).
    const logger = getGaxLogger(staticArgs?.gcpClientService);
    const activeTrace = getActiveTraceContext();
    const initialTrace = initialContext
      ? getActiveTraceContext(initialContext)
      : undefined;
    const activeSpan =
      activeTrace?.clientRequestSpan ??
      initialTrace?.clientRequestSpan ??
      activeTrace?.span ??
      initialTrace?.span;
    const spanContext = activeSpan?.spanContext();
    const traceId = spanContext?.traceId;
    const spanId = spanContext?.spanId;
    const traceSampled = spanContext
      ? (spanContext.traceFlags & TraceFlags.SAMPLED) === TraceFlags.SAMPLED
      : undefined;

    // Build structured log attributes with exception details.
    const attributes = buildLogAttributes(err, dynamicArgs, staticArgs);

    // Emit structured WARNING log.
    const logFields: GaxLogFields = {
      severity: loggingUtils.LogSeverity.WARNING,
      ...(traceId ? {trace_id: traceId} : {}),
      ...(spanId ? {span_id: spanId} : {}),
      ...(traceId && traceSampled !== undefined
        ? {trace_sampled: traceSampled}
        : {}),
      ...attributes,
    };
    logger(
      logFields,
      'Client API call failed: %s',
      attributes['exception.message'] || err,
    );
  };

  return executeLoggedOperation(fn, emitL3WarnLog, isStreamCall, userCallback);
}

/**
 * Executes an individual RPC transport attempt and emits a `DEBUG` log entry
 * if the attempt fails across promise, callback, stream, or synchronous execution boundaries.
 *
 * @template T
 * @param {AttemptTraceContext} attemptDynamicArgs - Dynamic context for the RPC attempt.
 * @param {StaticTraceContext} staticArgs - Static context for the client library.
 * @param {function} fn - The transport attempt operation to execute. Receives the wrapped
 *   callback when `userCallback` is supplied, otherwise `undefined`.
 * @param {boolean} [isStreamCall=false] - Whether the operation returns a stream (`EventEmitter`).
 * @param {APICallback} [userCallback] - Optional attempt callback.
 * @returns {T} The return value of `fn`.
 */
export function logNetworkAttempt<T = GaxCallResult>(
  attemptDynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext,
  fn: (loggedCallback?: APICallback) => T,
  isStreamCall = false,
  userCallback?: APICallback,
): T {
  // Snapshot attempt context in case async rejection loses active context.
  let initialContext: ReturnType<typeof context.active> | undefined;
  try {
    initialContext = context.active();
  } catch {
    // Fail open if active context retrieval throws.
  }

  const emitL4DebugLog = (err: unknown) => {
    // Resolve logger and active T4 attempt span (or outer OpenTelemetry span when GAX tracing is disabled).
    const logger = getGaxLogger(staticArgs?.gcpClientService);
    const activeTrace = getActiveTraceContext();
    const initialTrace = initialContext
      ? getActiveTraceContext(initialContext)
      : undefined;
    const attemptSpan =
      activeTrace?.attemptSpan ??
      initialTrace?.attemptSpan ??
      activeTrace?.span ??
      initialTrace?.span;
    const spanContext = attemptSpan?.spanContext();
    const traceId = spanContext?.traceId;
    const spanId = spanContext?.spanId;
    const traceSampled = spanContext
      ? (spanContext.traceFlags & TraceFlags.SAMPLED) === TraceFlags.SAMPLED
      : undefined;

    // Build structured log attributes without exception details and attach raw attempt response payload when present.
    const attributes = buildLogAttributes(
      err,
      attemptDynamicArgs,
      staticArgs,
      false,
    );
    const responsePayload = resolveErrorResponsePayload(err);
    if (responsePayload !== undefined) {
      attributes['response.payload'] = responsePayload;
    }

    // Emit structured DEBUG log for the failed attempt.
    const message = resolveExceptionMessage(err, attemptDynamicArgs.rpcType);
    const logFields: GaxLogFields = {
      severity: loggingUtils.LogSeverity.DEBUG,
      ...(traceId ? {trace_id: traceId} : {}),
      ...(spanId ? {span_id: spanId} : {}),
      ...(traceId && traceSampled !== undefined
        ? {trace_sampled: traceSampled}
        : {}),
      ...attributes,
    };
    logger(logFields, 'RPC attempt failed: %s', message || err);
  };

  // Intercept and dispatch execution boundaries for the attempt.
  return executeLoggedOperation(fn, emitL4DebugLog, isStreamCall, userCallback);
}
