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
import {context} from '@opentelemetry/api';
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

interface NodeBackendInternals extends loggingUtils.DebugLogBackend {
  filters?: string[];
  isEnabled?: (namespace: string) => boolean;
}

const gaxLoggerCache = new Map<string, loggingUtils.AdhocDebugLogFunction>();
let fallbackNodeBackend: loggingUtils.DebugLogBackend | undefined;
let nodeBackendPrototype: NodeBackendInternals | null | undefined;

function getFallbackNodeBackend(): loggingUtils.DebugLogBackend {
  if (!fallbackNodeBackend) {
    const backend = loggingUtils.getNodeBackend() as NodeBackendInternals;
    if (Array.isArray(backend.filters)) {
      backend.filters = ['*'];
    }
    fallbackNodeBackend = backend;
  }
  return fallbackNodeBackend;
}

function getNodeBackendPrototype(): NodeBackendInternals | null {
  if (nodeBackendPrototype === undefined) {
    try {
      const proto = Object.getPrototypeOf(
        loggingUtils.getNodeBackend(),
      ) as NodeBackendInternals | null;
      nodeBackendPrototype = proto ?? null;
    } catch {
      nodeBackendPrototype = null;
    }
  }
  return nodeBackendPrototype;
}

function emitGaxLog(
  namespace: string,
  fields: loggingUtils.LogFields,
  ...args: unknown[]
): void {
  const target = loggingUtils.log(namespace);
  if (target === loggingUtils.placeholder) {
    const env: Record<string, string | undefined> =
      typeof process === 'object' && typeof process.env === 'object'
        ? process.env
        : {};
    const envKey = loggingUtils.env?.nodeEnables ?? 'GOOGLE_SDK_NODE_LOGGING';
    // When `GOOGLE_SDK_NODE_LOGGING` is non-empty, `loggingUtils.log()` only returns
    // `placeholder` if the backend was explicitly disabled via `setBackend(null)`.
    // When unset/empty, `loggingUtils.log()` returns `placeholder` whenever no backend
    // was cached, so fall back to an unfiltered `NodeBackend` so `{enableTelemetryLogging: true}`
    // delivers logs without requiring `GOOGLE_SDK_NODE_LOGGING` or mutating global state.
    if (!env[envKey]) {
      getFallbackNodeBackend().log(namespace, fields, ...args);
    }
    return;
  }

  const nodeProto = getNodeBackendPrototype();
  if (!nodeProto || typeof nodeProto.log !== 'function') {
    target(fields, ...args);
    return;
  }

  // Detect when the active backend is `google-logging-utils`'s built-in `NodeBackend`
  // dropping an unmatched namespace (e.g. `{enableTelemetryLogging: true}` paired with
  // `GOOGLE_SDK_NODE_LOGGING=spanner` or `=false`), without interfering with custom
  // backends set via `setBackend()`.
  let droppedByNodeBackend = false;
  let dispatchDepth = 0;
  const originalNodeLog = nodeProto.log;
  const hadOwnLog = Object.prototype.hasOwnProperty.call(nodeProto, 'log');
  const wrappedNodeLog: typeof nodeProto.log = function (
    this: NodeBackendInternals,
    ns: string,
    logFields: loggingUtils.LogFields,
    ...logArgs: unknown[]
  ) {
    dispatchDepth++;
    try {
      originalNodeLog.call(this, ns, logFields, ...logArgs);
      if (
        dispatchDepth === 1 &&
        ns === namespace &&
        typeof this.isEnabled === 'function' &&
        !this.isEnabled(ns)
      ) {
        droppedByNodeBackend = true;
      }
    } finally {
      dispatchDepth--;
    }
  };

  let patched = false;
  try {
    nodeProto.log = wrappedNodeLog;
    patched = true;
  } catch {
    // Prototype may be frozen; dispatch directly.
  }

  try {
    target(fields, ...args);
  } finally {
    if (patched && nodeProto.log === wrappedNodeLog) {
      if (hadOwnLog) {
        nodeProto.log = originalNodeLog;
      } else {
        delete (nodeProto as {log?: unknown}).log;
      }
    }
  }

  if (droppedByNodeBackend) {
    getFallbackNodeBackend().log(namespace, fields, ...args);
  }
}

/**
 * Resolves a `LogSeverity` enum value. Until a `google-logging-utils` release
 * containing #9718 is published to npm (this repo uses `link-workspace-packages=false`),
 * the published package exports `LogSeverity` as a type only while each enum member's
 * runtime value equals its uppercase level string.
 */
function resolveLogSeverity(
  level: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR',
): loggingUtils.LogSeverity {
  return level as loggingUtils.LogSeverity;
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
  attributes['gcp.client.language'] = 'node';
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

    // Build structured log attributes with exception details.
    const attributes = buildLogAttributes(err, dynamicArgs, staticArgs);

    // Emit structured WARNING log.
    logger(
      {
        severity: resolveLogSeverity('WARNING'),
        ...(traceId ? {telemetryTraceId: traceId} : {}),
        ...(spanId ? {telemetrySpanId: spanId} : {}),
        other: attributes,
      },
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
    logger(
      {
        severity: resolveLogSeverity('DEBUG'),
        ...(traceId ? {telemetryTraceId: traceId} : {}),
        ...(spanId ? {telemetrySpanId: spanId} : {}),
        other: attributes,
      },
      'RPC attempt failed: %s',
      message || err,
    );
  };

  // Intercept and dispatch execution boundaries for the attempt.
  return executeLoggedOperation(fn, emitL4DebugLog, isStreamCall, userCallback);
}
