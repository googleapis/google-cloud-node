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
import {
  Attributes,
  Span,
  SpanStatusCode,
  trace,
  Tracer,
} from '@opentelemetry/api';
import {APICallback, GaxCallResult} from '../apitypes';
import {GoogleError} from '../googleError';
import {Status} from '../status';
import {
  connectionCodes,
  decodeCodes,
  genericClasses,
  preConnectionCodes,
  redirectCodes,
  requestBodyCodes,
  requestCodes,
} from '../util';

/**
 * Static metadata about the Google Cloud client library used to populate
 * telemetry span attributes.
 */
export interface StaticTraceContext {
  /**
   * The target GCP service endpoint or domain (e.g. 'storage.googleapis.com').
   */
  gcpClientService?: string;
  /**
   * The version of the client library (e.g. '1.2.3').
   */
  gcpVersion?: string;
  /**
   * The GitHub repository name hosting the client library (e.g. 'googleapis/google-cloud-node').
   */
  gcpRepo?: string;
  /**
   * The NPM package name of the client library (e.g. '@google-cloud/storage').
   */
  gcpArtifact?: string;
  /**
   * Server domain name or IP address for the RPC call.
   */
  serverAddress?: string;
  /**
   * Server port number for the RPC call.
   */
  serverPort?: number;
}

/**
 * Dynamic metadata specific to the individual RPC invocation used to populate
 * telemetry span attributes.
 */
export interface DynamicTraceContext {
  /**
   * The name of the client class making the call (e.g. 'StorageClient').
   */
  clientName: string;
  /**
   * The name of the API method or RPC being invoked (e.g. 'GetObject').
   */
  methodName: string;
  /**
   * The transport protocol used for the RPC ('grpc' or 'http').
   */
  rpcType: 'grpc' | 'http';
  /**
   * Server domain name or IP address for the RPC call.
   */
  serverAddress?: string;
  /**
   * Server port number for the RPC call.
   */
  serverPort?: number;
}

/**
 * Reports that the request was sent again after a retryable failure.
 *
 * Handed to the traced operation, which calls it once per resend. gax retries
 * in more than one place — the unary retry loop and the server-streaming one —
 * and counting the calls rather than reading a counter keeps the tracer
 * independent of how each of them tracks its own attempts.
 */
export type ResendRecorder = () => void;

/**
 * Returns the OpenTelemetry Tracer instance for google-gax.
 *
 * @returns {Tracer} The OpenTelemetry Tracer.
 */
export function getGaxTracer(): Tracer {
  return trace.getTracer('google-gax');
}

/**
 * Resolves google.rpc.ErrorInfo reason if present on the error or its cause chain.
 * Corresponds to Tier 1 in the error.type hierarchy.
 */
export function resolveErrorInfoReason(e: unknown): string | undefined {
  if (!e || typeof e !== 'object') {
    return undefined;
  }

  // If e is a GoogleError with gRPC status details metadata that hasn't decoded yet, decode it:
  if (
    e instanceof GoogleError &&
    e.metadata &&
    typeof e.metadata.get === 'function' &&
    e.metadata.get('grpc-status-details-bin') &&
    !e.reason
  ) {
    GoogleError.parseGRPCStatusDetails(e);
  }

  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const err = current as {
      reason?: unknown;
      statusDetails?: unknown;
      errorInfo?: unknown;
      cause?: unknown;
    };

    if (typeof err.reason === 'string' && err.reason.length > 0) {
      return err.reason;
    }

    if (err.errorInfo && typeof err.errorInfo === 'object') {
      const infoReason = (err.errorInfo as {reason?: unknown}).reason;
      if (typeof infoReason === 'string' && infoReason.length > 0) {
        return infoReason;
      }
    }

    if (Array.isArray(err.statusDetails)) {
      for (const detail of err.statusDetails) {
        if (detail && typeof detail === 'object') {
          if (
            'reason' in detail &&
            typeof (detail as {reason?: unknown}).reason === 'string' &&
            (detail as {reason: string}).reason.length > 0
          ) {
            return (detail as {reason: string}).reason;
          }
          if (
            'errorInfo' in detail &&
            detail.errorInfo &&
            typeof (detail.errorInfo as {reason?: unknown}).reason === 'string'
          ) {
            return (detail.errorInfo as {reason: string}).reason;
          }
        }
      }
    }

    current = err.cause;
    depth++;
  }

  return undefined;
}

/**
 * Resolves a server error code received from the backend service:
 * - For HTTP: The HTTP status code string (e.g. '400', '403', '503').
 * - For gRPC: The canonical gRPC status code name in uppercase (e.g. 'PERMISSION_DENIED', 'UNAVAILABLE').
 * Corresponds to Tier 2 in the error.type hierarchy.
 */
export function resolveServerErrorCode(
  e: unknown,
  rpcType: 'grpc' | 'http',
): string | undefined {
  if (!isServerSideError(e, rpcType)) {
    return undefined;
  }
  if (rpcType === 'http') {
    const httpStatus = resolveHttpStatusCode(e);
    return httpStatus !== undefined ? httpStatus.toString() : undefined;
  }
  if (rpcType === 'grpc') {
    return resolveRpcStatusName(e);
  }
  return undefined;
}

/**
 * Resolves client-side network and operational errors to standard CLIENT_* identifiers.
 * Corresponds to Tier 3 in the error.type hierarchy.
 */
export function resolveClientNetworkOrOperationalError(
  e: unknown,
): string | undefined {
  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const err = current as {
      name?: unknown;
      code?: unknown;
      message?: unknown;
      cause?: unknown;
      constructor?: {name?: string};
    };

    const name = typeof err.name === 'string' ? err.name : undefined;
    const constructorName = err.constructor?.name;
    const code = typeof err.code === 'string' ? err.code : undefined;
    const message = typeof err.message === 'string' ? err.message : '';

    // 1. CLIENT_TIMEOUT
    if (
      name === 'TimeoutError' ||
      code === 'ETIMEDOUT' ||
      code === 'ESOCKETTIMEDOUT' ||
      /timeout.*exceeded|deadline.*exceeded|total timeout/i.test(message)
    ) {
      return 'CLIENT_TIMEOUT';
    }

    // 2. CLIENT_CONNECTION_ERROR
    if (
      (code && connectionCodes.includes(code)) ||
      (code && code.startsWith('ERR_SSL')) ||
      name === 'TLSError'
    ) {
      return 'CLIENT_CONNECTION_ERROR';
    }

    // 3. CLIENT_REQUEST_ERROR
    if (
      (code && requestCodes.includes(code)) ||
      name === 'URIError' ||
      constructorName === 'URIError'
    ) {
      return 'CLIENT_REQUEST_ERROR';
    }

    // 4. CLIENT_REQUEST_BODY_ERROR
    if (code && requestBodyCodes.includes(code)) {
      return 'CLIENT_REQUEST_BODY_ERROR';
    }

    // 5. CLIENT_RESPONSE_DECODE_ERROR
    if (
      (code && decodeCodes.includes(code)) ||
      name === 'DecodeError' ||
      constructorName === 'DecodeError' ||
      name === 'SyntaxError' ||
      constructorName === 'SyntaxError'
    ) {
      return 'CLIENT_RESPONSE_DECODE_ERROR';
    }

    // 6. CLIENT_REDIRECT_ERROR
    if (code && redirectCodes.includes(code)) {
      return 'CLIENT_REDIRECT_ERROR';
    }

    // 7. CLIENT_AUTHENTICATION_ERROR
    if (
      name === 'GoogleAuthError' ||
      constructorName === 'GoogleAuthError' ||
      code === 'ERR_NO_CREDENTIALS' ||
      code === 'MISSING_CREDENTIALS'
    ) {
      return 'CLIENT_AUTHENTICATION_ERROR';
    }

    current = err.cause;
    depth++;
  }

  return undefined;
}

/**
 * Resolves a language-specific error type name (e.g. AbortError, TypeError, RangeError, CustomRpcError).
 * Generic wrapper types (Error, GoogleError, Object, DOMException) are excluded and unwrap e.cause.
 * Corresponds to Tier 4 in the error.type hierarchy.
 */
export function resolveLanguageSpecificErrorType(
  e: unknown,
): string | undefined {
  if (!e || typeof e !== 'object') {
    return undefined;
  }

  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const err = current as {
      name?: unknown;
      constructor?: {name?: string};
      cause?: unknown;
    };

    if (err.name === 'AbortError') {
      return 'AbortError';
    }

    const className = err.constructor?.name;

    if (className && !genericClasses.includes(className)) {
      return className;
    }

    if (
      typeof err.name === 'string' &&
      err.name.length > 0 &&
      !genericClasses.includes(err.name)
    ) {
      return err.name;
    }

    current = err.cause;
    depth++;
  }

  return undefined;
}

/**
 * Resolves the OpenTelemetry `error.type` attribute according to the 5-tier hierarchy:
 * 1. google.rpc.ErrorInfo.reason
 * 2. Specific Server Error Code (HTTP status code or gRPC status name)
 * 3. Client-Side Network/Operational Errors (CLIENT_* standardized strings)
 * 4. Language-specific error type (e.g. AbortError, RangeError, TypeError, CustomRpcError)
 * 5. Internal Fallback ("INTERNAL")
 */
export function resolveErrorType(e: unknown, rpcType: 'grpc' | 'http'): string {
  // Tier 1: google.rpc.ErrorInfo.reason
  const errorInfoReason = resolveErrorInfoReason(e);
  if (errorInfoReason) {
    return errorInfoReason;
  }

  // Tier 2: Specific Server Error Code
  const serverErrorCode = resolveServerErrorCode(e, rpcType);
  if (serverErrorCode) {
    return serverErrorCode;
  }

  // Tier 3: Client-Side Network/Operational Errors
  const clientError = resolveClientNetworkOrOperationalError(e);
  if (clientError) {
    return clientError;
  }

  // Tier 4: Language-specific error type
  const languageError = resolveLanguageSpecificErrorType(e);
  if (languageError) {
    return languageError;
  }

  // Tier 5: Internal Fallback
  return 'INTERNAL';
}

/**
 * Resolves the exception type name for a failed call. Prefers specific
 * exception names (e.g. `AbortError`, `TimeoutError`, `TypeError`) and
 * constructor names over generic `Error`, falling back to `e.name` when
 * the constructor is generic or `DOMException`.
 */
function resolveExceptionType(e: Error): string {
  if (e.name && (e.name === 'AbortError' || e.name === 'TimeoutError')) {
    return e.name;
  }
  const className = e.constructor?.name;
  if (
    className &&
    className !== 'Error' &&
    className !== 'Object' &&
    className !== 'DOMException'
  ) {
    return className;
  }
  return e.name || 'Error';
}

/**
 * Resolves a Node system error code (e.g. `ECONNREFUSED`), checking the error
 * itself and any underlying cause attached by fallback wrapping.
 */
function resolveSystemErrorCode(e: unknown): string | undefined {
  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const code = (current as {code?: unknown}).code;
    if (typeof code === 'string' && code.length > 0) {
      return code;
    }
    current = (current as {cause?: unknown}).cause;
    depth++;
  }
  return undefined;
}

/**
 * Resolves the canonical gRPC status name for a failed call. Status 0 (OK)
 * and codes outside the `Status` enum are treated as absent for failed calls.
 */
function resolveRpcStatusName(e: unknown): string | undefined {
  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const code = (current as {code?: unknown}).code;
    if (
      typeof code === 'number' &&
      code !== Status.OK &&
      Status[code] !== undefined
    ) {
      return Status[code];
    }
    current = (current as {cause?: unknown}).cause;
    depth++;
  }
  return undefined;
}

/**
 * Reads the HTTP response status recorded on a fallback error.
 */
function resolveHttpStatusCode(e: unknown): number | undefined {
  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const code = (current as {httpStatusCode?: unknown}).httpStatusCode;
    if (typeof code === 'number') {
      return code;
    }
    current = (current as {cause?: unknown}).cause;
    depth++;
  }
  return undefined;
}

/**
 * Determines if a failure occurred on the client side before DNS resolution
 * or connection establishment.
 */
function isPreConnectionFailure(e: unknown): boolean {
  if (!e || !(e instanceof Error || (typeof e === 'object' && 'stack' in e))) {
    return true;
  }
  if (resolveHttpStatusCode(e) !== undefined) {
    return false;
  }
  const err = e as {name?: unknown; cause?: unknown};
  if (
    e instanceof TypeError ||
    e instanceof RangeError ||
    e instanceof URIError ||
    err.name === 'TypeError' ||
    err.name === 'RangeError' ||
    err.name === 'URIError'
  ) {
    return true;
  }
  const systemCode = resolveSystemErrorCode(e);
  if (systemCode && preConnectionCodes.includes(systemCode)) {
    return true;
  }
  if (
    (e instanceof GoogleError ||
      (e as {constructor?: {name?: string}}).constructor?.name ===
        'GoogleError') &&
    (e as {cause?: unknown}).cause
  ) {
    return isPreConnectionFailure((e as {cause?: unknown}).cause);
  }
  return false;
}

/**
 * Resolves a human-readable description for non-Error throws, extracting
 * `message` if present or falling back to `String(e)`.
 */
function resolveErrorMessage(e: unknown): string {
  const message = (e as {message?: unknown} | null)?.message;
  return typeof message === 'string' ? message : String(e);
}

/**
 * Determines whether a failure is a server-side error (i.e. a server response arrived).
 */
export function isServerSideError(
  e: unknown,
  rpcType: 'grpc' | 'http',
): boolean {
  if (!e || !(e instanceof Error || (typeof e === 'object' && 'stack' in e))) {
    return false;
  }
  if (rpcType === 'http') {
    return resolveHttpStatusCode(e) !== undefined;
  }
  if (isPreConnectionFailure(e)) {
    return false;
  }
  if (resolveClientNetworkOrOperationalError(e) !== undefined) {
    return false;
  }
  let current: unknown = e;
  let depth = 0;
  while (current && typeof current === 'object' && depth < 10) {
    const err = current as {name?: unknown; cause?: unknown};
    if (err.name === 'AbortError' || err.name === 'TimeoutError') {
      return false;
    }
    current = err.cause;
    depth++;
  }
  if (rpcType === 'grpc') {
    return resolveRpcStatusName(e) !== undefined;
  }
  return false;
}

function isBuffer(val: unknown): val is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(val);
}

/**
 * Extracts and formats status details and metadata attached by GFE/backend on server-side errors,
 * returning the server error message and a formatted stacktrace string.
 */
export function resolveServerExceptionDetails(e: Error): {
  message: string;
  stacktrace?: string;
} {
  const errObj = e as {
    details?: unknown;
    statusDetails?: unknown;
    metadata?: unknown;
    cause?: unknown;
  };

  const causeObj =
    errObj.cause && typeof errObj.cause === 'object'
      ? (errObj.cause as {
          details?: unknown;
          statusDetails?: unknown;
          metadata?: unknown;
        })
      : undefined;

  // If e is a GoogleError with gRPC metadata that hasn't decoded statusDetails yet, parse it:
  if (
    !errObj.statusDetails &&
    e instanceof GoogleError &&
    e.metadata &&
    typeof e.metadata.get === 'function' &&
    e.metadata.get('grpc-status-details-bin')
  ) {
    GoogleError.parseGRPCStatusDetails(e);
  }

  // Server error details: prefer details if non-empty string, else message
  const serverDetails = errObj.details ?? causeObj?.details;
  const message =
    typeof serverDetails === 'string' && serverDetails.length > 0
      ? serverDetails
      : e.message;

  // Status details
  const rawStatusDetails = errObj.statusDetails ?? causeObj?.statusDetails;
  let statusDetailsStr: string | undefined;
  if (rawStatusDetails !== undefined && rawStatusDetails !== null) {
    statusDetailsStr =
      typeof rawStatusDetails === 'string'
        ? rawStatusDetails
        : JSON.stringify(rawStatusDetails);
  }

  // Metadata attached by GFE / backend
  const rawMetadata = errObj.metadata ?? causeObj?.metadata;
  let metadataStr: string | undefined;
  if (rawMetadata && typeof rawMetadata === 'object') {
    let map: Record<string, unknown>;
    if (typeof (rawMetadata as {getMap?: unknown}).getMap === 'function') {
      map = (rawMetadata as {getMap: () => Record<string, unknown>}).getMap();
    } else {
      map = rawMetadata as Record<string, unknown>;
    }
    const cleanMap: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(map)) {
      if (isBuffer(val)) {
        cleanMap[key] = val.toString('base64');
      } else if (Array.isArray(val)) {
        cleanMap[key] = val.map(item =>
          isBuffer(item) ? item.toString('base64') : item,
        );
      } else {
        cleanMap[key] = val;
      }
    }
    metadataStr = JSON.stringify(cleanMap);
  }

  // Format status details and metadata as exception.stacktrace (replacing the local client stack trace)
  const stacktraceParts: string[] = [];
  if (statusDetailsStr) {
    stacktraceParts.push(`status_details: ${statusDetailsStr}`);
  }
  if (metadataStr) {
    stacktraceParts.push(`metadata: ${metadataStr}`);
  }
  const stacktrace =
    stacktraceParts.length > 0 ? stacktraceParts.join('\n') : undefined;

  return {
    message,
    stacktrace,
  };
}

/**
 * Records an `exception` span event. For client-side errors, records local client
 * stack trace and client error message. For server-side errors, records server
 * error details and formats status details and metadata as `exception.stacktrace`
 * (replacing the local client stack trace).
 */
function recordExceptionEvent(
  span: Span,
  e: Error,
  rpcType: 'grpc' | 'http',
): void {
  const exceptionType = resolveExceptionType(e);

  if (isServerSideError(e, rpcType)) {
    const {message, stacktrace} = resolveServerExceptionDetails(e);

    const attributes: Attributes = {
      'exception.type': exceptionType,
      'exception.message': message,
    };
    if (stacktrace) {
      attributes['exception.stacktrace'] = stacktrace;
    }
    span.addEvent('exception', attributes);
  } else {
    // Client-side error: records local client stack trace & client error message
    const attributes: Attributes = {
      'exception.type': exceptionType,
      'exception.message': e.message,
    };
    if (e.stack) {
      attributes['exception.stacktrace'] = e.stack;
    }
    span.addEvent('exception', attributes);
  }
}

/**
 * Checks if a value behaves like a Promise or Thenable.
 *
 * Note: It is not sufficient to check `result instanceof Promise` because:
 * 1. Custom classes implementing `CancellablePromise` or Thenables may not
 *    inherit directly from the native JavaScript `Promise` prototype.
 * 2. GAX callers or custom callers may return objects such as `OngoingCallPromise`
 *    that hold the actual promise on a `.promise` property.
 * 3. Promises originating from different execution realms (such as Node.js vm
 *    contexts or different package bundles) fail `instanceof Promise` checks.
 */
function isPromiseLike<T = unknown>(value: unknown): value is PromiseLike<T> {
  return (
    value instanceof Promise ||
    (value !== null &&
      (typeof value === 'object' || typeof value === 'function') &&
      typeof (value as {then?: unknown}).then === 'function')
  );
}

/**
 * Extracts a PromiseLike target from a value, supporting native Promises,
 * custom Thenables, classes implementing CancellablePromise, and OngoingCallPromise wrappers.
 */
function getPromiseTarget<T = unknown>(value: unknown): PromiseLike<T> | null {
  if (isPromiseLike<T>(value)) {
    return value;
  }
  if (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    'promise' in (value as object) &&
    isPromiseLike<T>((value as {promise?: unknown}).promise)
  ) {
    return (value as {promise: PromiseLike<T>}).promise;
  }
  return null;
}

/**
 * Manages span lifecycle for Promise-based operations.
 *
 * @template T
 * @param {T} promise - The promise returned from the traced operation.
 * @param {function} recordError - Callback to record errors on the span.
 * @param {function} endSpan - Callback to end the span idempotently.
 */
export function handlePromise<T>(
  promise: T,
  recordError: (err: unknown) => void,
  endSpan: () => void,
): void {
  let spanEnded = false;
  const endSpanOnce = () => {
    if (!spanEnded) {
      spanEnded = true;
      endSpan();
    }
  };

  const target = getPromiseTarget(promise) ?? promise;
  Promise.resolve(target)
    .then(() => {
      endSpanOnce();
      return null;
    })
    .catch(err => {
      if (!spanEnded) {
        recordError(err);
        endSpanOnce();
      }
    });
}

/**
 * Manages span lifecycle for Stream-based operations and cleans up event listeners.
 *
 * @param {EventEmitter} stream - The stream returned from the traced operation.
 * @param {function} recordError - Callback to record errors on the span.
 * @param {function} endSpan - Callback to end the span idempotently.
 * @param {boolean} [hasCallback=false] - Whether the caller supplied a callback
 *   for this call. When true, 'finish' is not treated as a completion signal.
 */
export function handleStream(
  stream: EventEmitter,
  recordError: (err: unknown) => void,
  endSpan: () => void,
  hasCallback = false,
): void {
  let spanEnded = false;

  // For client-streaming calls without a callback, 'finish' signals completion
  // because readable events ('end') never fire on write-only streams.
  const isWriteOnly =
    'writable' in stream &&
    stream.writable === true &&
    (!('readable' in stream) || stream.readable !== true);
  const useFinish = isWriteOnly && !hasCallback;

  const cleanup = () => {
    stream.removeListener('error', onError);
    stream.removeListener('end', onEnd);
    stream.removeListener('close', onClose);
    stream.removeListener('finish', onFinish);
  };

  const endSpanOnce = () => {
    if (!spanEnded) {
      spanEnded = true;
      cleanup();
      endSpan();
    }
  };

  const onError = (err: unknown) => {
    if (!spanEnded) {
      recordError(err);
      endSpanOnce();
    }
  };

  const onEnd = () => {
    endSpanOnce();
  };

  const onClose = () => {
    endSpanOnce();
  };

  const onFinish = () => {
    endSpanOnce();
  };

  stream.on('error', onError);
  stream.on('end', onEnd);
  stream.on('close', onClose);
  if (useFinish) {
    stream.on('finish', onFinish);
  }
}

/**
 * Executes a function within an active OpenTelemetry span, populating standard
 * GCP telemetry attributes and recording errors/exceptions if thrown.
 *
 * For callback-style invocations, pass the user's `callback` as the fifth
 * argument so the span stays open until the callback or stream events finish.
 *
 * @template T
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {function} fn - The operation to trace. Receives the traced callback
 *   when `callback` is supplied, otherwise `undefined`, and a
 *   {@link ResendRecorder} to call once for every retryable resend it makes.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream call (true) or promise call (false).
 * @param {APICallback} [callback] - The user callback for callback-style invocations.
 * @returns {T} The result of the traced operation.
 */
export function traceCall(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (
    tracedCallback?: APICallback,
    recordResend?: ResendRecorder,
  ) => GaxCallResult,
  isStreamCall?: boolean,
  callback?: APICallback,
): GaxCallResult;
export function traceCall<T extends EventEmitter>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback, recordResend?: ResendRecorder) => T,
  isStreamCall: true,
  callback?: APICallback,
): T;
export function traceCall<T>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback, recordResend?: ResendRecorder) => T,
  isStreamCall?: false,
  callback?: APICallback,
): T;
export function traceCall(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (
    tracedCallback?: APICallback,
    recordResend?: ResendRecorder,
  ) => GaxCallResult,
  isStreamCall = false,
  callback?: APICallback,
): GaxCallResult {
  const spanName = `${dynamicArgs.clientName}.${dynamicArgs.methodName}`;
  return getGaxTracer().startActiveSpan(spanName, {}, (span: Span) => {
    span.setAttributes({
      'gcp.client.service': staticArgs.gcpClientService,
      'gcp.client.version': staticArgs.gcpVersion,
      'gcp.repo': staticArgs.gcpRepo,
      'gcp.artifact': staticArgs.gcpArtifact,
      'gcp.method.name': dynamicArgs.methodName,
      'gcp.method.type': dynamicArgs.rpcType,
    });

    let rawAddress = dynamicArgs.serverAddress ?? staticArgs.serverAddress;
    let rawPort = dynamicArgs.serverPort ?? staticArgs.serverPort;
    if (rawAddress) {
      const match = rawAddress.match(/^(\[[^\]]+\]|[^:]+):(\d+)$/);
      if (match) {
        rawAddress = match[1];
        rawPort = rawPort ?? Number(match[2]);
      }
    }

    let spanEnded = false;
    let errorRecorded = false;
    let recordedError: unknown;
    let rpcStatusName: string | undefined;
    let httpStatusCode: number | undefined;

    // Counts resends, not attempts. The initial send is not a resend, so a
    // call that succeeded first time is 0 and the first retry is 1.
    //
    // Omitted when the call was never resent (resendCount is 0), per
    // OpenTelemetry semantic conventions.
    //
    // Reported on the call span rather than per attempt because gax opens one
    // span for the whole call, retries included. OpenTelemetry's HTTP
    // convention instead expects one span per attempt, each carrying the
    // ordinal of that attempt. The two agree on the value that matters: the
    // ordinal on the last attempt's span equals the total number of resends,
    // and gax's single span is the one that ends the call.
    let resendCount = 0;
    const recordResend: ResendRecorder = () => {
      resendCount++;
    };

    // Named per transport, the same way the status attributes below are.
    // `http.request.resend_count` is the stable OpenTelemetry attribute for
    // exactly this quantity, so the fallback uses it rather than inventing a
    // parallel name. gRPC has no standard equivalent, so it takes the gcp.*
    // name instead of borrowing the http.* one, which would claim a protocol
    // the call never spoke.
    const resendCountAttribute =
      dynamicArgs.rpcType === 'grpc'
        ? 'gcp.grpc.resend_count'
        : 'http.request.resend_count';

    // Marks the span failed. Kept separate from recordError so paths that are
    // failures but not exceptions can set the status without emitting a
    // misleading exception event.
    const setErrorStatus = (message: string) => {
      errorRecorded = true;
      span.setStatus({code: SpanStatusCode.ERROR, message});
    };

    const setStatusAttributes = () => {
      const attributes: Attributes = {};
      if (rpcStatusName !== undefined) {
        attributes['rpc.response.status_code'] = rpcStatusName;
        if (dynamicArgs.rpcType === 'grpc') {
          attributes['grpc.response.status_code'] = rpcStatusName;
        }
      }
      if (dynamicArgs.rpcType === 'http' && httpStatusCode !== undefined) {
        attributes['http.response.status_code'] = httpStatusCode;
      }
      // server.address and server.port are present on server-side errors and successful calls,
      // but absent on client-side failures that occur before DNS resolution or connection establishment.
      if (
        rawAddress !== undefined &&
        (!errorRecorded || !isPreConnectionFailure(recordedError))
      ) {
        attributes['server.address'] = rawAddress;
        if (rawPort !== undefined) {
          attributes['server.port'] = rawPort;
        }
      }
      span.setAttributes(attributes);
    };

    // Span status is left unset on success per OpenTelemetry semantic conventions.
    const endSpan = () => {
      if (!spanEnded) {
        spanEnded = true;
        if (!errorRecorded) {
          rpcStatusName = Status[Status.OK];
          httpStatusCode = 200;
        }
        setStatusAttributes();
        if (resendCount > 0) {
          span.setAttribute(resendCountAttribute, resendCount);
        }
        span.end();
      }
    };

    const recordError = (e: unknown) => {
      recordedError = e;
      rpcStatusName = resolveRpcStatusName(e);
      httpStatusCode = resolveHttpStatusCode(e);
      span.setAttributes({
        'error.type': resolveErrorType(e, dynamicArgs.rpcType),
      });
      if (e instanceof Error) {
        recordExceptionEvent(span, e, dynamicArgs.rpcType);
        setErrorStatus(e.message);
      } else {
        setErrorStatus(resolveErrorMessage(e));
      }
    };

    // End the span before executing the user callback so user errors are not
    // attributed to the RPC and cannot leak the span.
    const tracedCallback: APICallback | undefined = callback
      ? function (this: unknown, ...args: Parameters<APICallback>) {
          const err = args[0];
          if (err) {
            recordError(err);
          }
          endSpan();
          callback.apply(this, args);
        }
      : undefined;

    try {
      const result = fn(tracedCallback, recordResend);
      const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
      if (isStreamCall && result instanceof EventEmitter) {
        handleStream(result, recordError, endSpan, !!callback);
      } else if (promiseTarget) {
        handlePromise(promiseTarget, recordError, endSpan);
      } else if (tracedCallback) {
        // Span stays open; tracedCallback ends it when the RPC completes.
        // Ending it here would close the span before the RPC is even sent.
      } else {
        endSpan();
      }
      return result;
    } catch (e) {
      recordError(e);
      endSpan();
      throw e;
    }
  });
}
