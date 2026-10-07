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
  context,
  Context,
  createContextKey,
  Span,
  SpanKind,
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
  DEPTH_TO_CHECK,
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
  /**
   * Target service domain (e.g. 'cloudkms.googleapis.com').
   */
  urlDomain?: string;
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
  /**
   * Target service domain (e.g. 'cloudkms.googleapis.com').
   */
  urlDomain?: string;
}

/**
 * Dynamic metadata specific to an individual RPC transport attempt (low level network span).
 */
export interface AttemptTraceContext extends DynamicTraceContext {
  /**
   * The fully-qualified protobuf service name (e.g. 'google.cloud.kms.v1.KeyManagementService').
   */
  apiName?: string;
  /**
   * The ordinal resend count for this attempt (0 for the initial attempt, 1 for the first retry, etc.).
   * Omitted from span attributes when 0 or undefined.
   */
  resendCount?: number;
  /**
   * The HTTP request method for REST fallback attempts (e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE').
   */
  httpMethod?: string;
  /**
   * The URL path template for REST fallback attempts (e.g. '/v1/{name}:access').
   */
  urlTemplate?: string;
}

const CLIENT_REQUEST_SPAN_KEY = createContextKey(
  'google-gax-client-request-span',
);
const ATTEMPT_SPAN_KEY = createContextKey('google-gax-attempt-span');
const attemptUrlTemplates = new WeakMap<Span, string>();

/**
 * Formats the span name for an HTTP low level network attempt span as
 * `"{http.request.method} {url.template}"` when a URL template is available,
 * or `"{http.request.method}"` otherwise.
 */
function formatHttpAttemptSpanName(
  httpMethod: string,
  urlTemplate?: string,
): string {
  return urlTemplate ? `${httpMethod} ${urlTemplate}` : httpMethod;
}

/**
 * Updates the `http.request.method` attribute, optional `url.template` attribute,
 * and span name on the currently active low level network attempt span, if any.
 */
export function setAttemptHttpMethod(
  httpMethod: string,
  urlTemplate?: string,
): void {
  const attemptSpan = context.active().getValue(ATTEMPT_SPAN_KEY) as
    Span | undefined;
  if (attemptSpan) {
    attemptSpan.setAttribute('http.request.method', httpMethod);
    if (urlTemplate) {
      attemptUrlTemplates.set(attemptSpan, urlTemplate);
      attemptSpan.setAttribute('url.template', urlTemplate);
    }
    // Preserve any previously recorded URL template when updating the span name.
    const resolvedUrlTemplate =
      urlTemplate || attemptUrlTemplates.get(attemptSpan);
    attemptSpan.updateName(
      formatHttpAttemptSpanName(httpMethod, resolvedUrlTemplate),
    );
  }
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

  // Decode binary gRPC status details if present and not yet parsed.
  const errWithMeta = e as GoogleError;
  if (
    errWithMeta.metadata &&
    typeof errWithMeta.metadata.get === 'function' &&
    (errWithMeta.metadata.get('grpc-status-details-bin') as unknown[])?.length >
      0 &&
    !errWithMeta.reason
  ) {
    try {
      GoogleError.parseGRPCStatusDetails(errWithMeta);
    } catch {
      // Ignore decoding errors.
    }
  }

  let current: unknown = e;
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    // Guard against circular cause references.
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const err = current as {
      reason?: unknown;
      statusDetails?: unknown;
      errorInfo?: unknown;
      cause?: unknown;
    };

    // Check direct reason property on error.
    if (typeof err.reason === 'string' && err.reason.length > 0) {
      return err.reason;
    }

    // Check errorInfo object on error.
    if (err.errorInfo && typeof err.errorInfo === 'object') {
      const infoReason = (err.errorInfo as {reason?: unknown}).reason;
      if (typeof infoReason === 'string' && infoReason.length > 0) {
        return infoReason;
      }
    }

    // Inspect statusDetails array for reason or errorInfo.
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

    // Traverse error cause chain.
    current = err.cause;
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
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
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
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    // Guard against circular cause references.
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const err = current as {
      name?: unknown;
      constructor?: {name?: string};
      cause?: unknown;
    };

    // Prioritize AbortError regardless of class hierarchy.
    if (err.name === 'AbortError') {
      return 'AbortError';
    }

    // Prefer specific constructor class name over generic base wrappers.
    const className = err.constructor?.name;
    if (className && !genericClasses.includes(className)) {
      return className;
    }

    // Fall back to non-generic error name if available.
    if (
      typeof err.name === 'string' &&
      err.name.length > 0 &&
      !genericClasses.includes(err.name)
    ) {
      return err.name;
    }

    // Unwrap cause chain when encountering generic wrapper classes.
    current = err.cause;
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
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const code = (current as {code?: unknown}).code;
    if (typeof code === 'string' && code.length > 0) {
      return code;
    }
    current = (current as {cause?: unknown}).cause;
  }
  return undefined;
}

/**
 * Resolves the canonical gRPC status name for a failed call. Status 0 (OK)
 * and codes outside the `Status` enum are treated as absent for failed calls.
 */
function resolveRpcStatusName(e: unknown): string | undefined {
  let current: unknown = e;
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const code = (current as {code?: unknown}).code;
    if (
      typeof code === 'number' &&
      code !== Status.OK &&
      Status[code] !== undefined
    ) {
      return Status[code];
    }
    current = (current as {cause?: unknown}).cause;
  }
  return undefined;
}

/**
 * Reads the HTTP response status recorded on a fallback error.
 */
function resolveHttpStatusCode(e: unknown): number | undefined {
  let current: unknown = e;
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const code = (current as {httpStatusCode?: unknown}).httpStatusCode;
    if (typeof code === 'number') {
      return code;
    }
    current = (current as {cause?: unknown}).cause;
  }
  return undefined;
}

/**
 * Determines if a failure occurred on the client side before DNS resolution
 * or connection establishment.
 */
export function isPreConnectionFailure(e: unknown): boolean {
  let current: unknown = e;
  const seen = new Set<unknown>();

  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    // Server status code indicates a response was received.
    if (
      resolveHttpStatusCode(current) !== undefined ||
      resolveRpcStatusName(current) !== undefined
    ) {
      return false;
    }

    // Non-Error throws or objects without stack are client failures.
    if (
      !current ||
      !(
        current instanceof Error ||
        (typeof current === 'object' && 'stack' in current)
      )
    ) {
      return true;
    }

    // Guard against circular cause references.
    if (seen.has(current)) {
      return false;
    }
    seen.add(current);

    // Client-side validation errors happen before connection.
    const err = current as {name?: unknown; cause?: unknown};
    if (
      current instanceof TypeError ||
      current instanceof RangeError ||
      current instanceof URIError ||
      err.name === 'TypeError' ||
      err.name === 'RangeError' ||
      err.name === 'URIError'
    ) {
      return true;
    }

    // Check for network error codes occurring before connection establishment.
    const systemCode = resolveSystemErrorCode(current);
    if (systemCode && preConnectionCodes.includes(systemCode)) {
      return true;
    }

    // Unwrap GoogleError wrappers to inspect underlying cause.
    if (
      (current instanceof GoogleError ||
        (current as {constructor?: {name?: string}}).constructor?.name ===
          'GoogleError') &&
      err.cause
    ) {
      current = err.cause;
    } else {
      return false;
    }
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
 * Determines whether a failure is a server-side error (i.e. a server response arrived),
 * excluding pre-connection failures, client network/operational errors, and aborts/timeouts.
 */
export function isServerSideError(
  e: unknown,
  rpcType: 'grpc' | 'http',
): boolean {
  if (rpcType === 'http') {
    return resolveHttpStatusCode(e) !== undefined;
  }
  if (!e || typeof e !== 'object') {
    return false;
  }
  if (isPreConnectionFailure(e)) {
    return false;
  }
  if (resolveClientNetworkOrOperationalError(e) !== undefined) {
    return false;
  }
  // Exclude client-side aborts and timeouts across the cause chain.
  let current: unknown = e;
  const seen = new Set<unknown>();
  for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
    if (!current || typeof current !== 'object') {
      break;
    }
    if (seen.has(current)) {
      break;
    }
    seen.add(current);
    const err = current as {name?: unknown; cause?: unknown};
    if (err.name === 'AbortError' || err.name === 'TimeoutError') {
      return false;
    }
    current = err.cause;
  }
  if (rpcType === 'grpc') {
    return resolveRpcStatusName(e) !== undefined;
  }
  return false;
}

/**
 * Checks whether a value is a Node.js Buffer instance.
 */
function isBuffer(val: unknown): val is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(val);
}

/**
 * Safely converts a value to a JSON string without throwing exceptions on
 * circular references, BigInt values, or non-serializable properties.
 */
export function safeJsonStringify(value: unknown): string | undefined {
  if (value === undefined) {
    return undefined;
  }
  try {
    const ancestors: unknown[] = [];
    return JSON.stringify(
      value,
      function (this: unknown, _key: string, val: unknown) {
        if (typeof val === 'bigint') {
          return val.toString();
        }
        if (typeof val !== 'object' || val === null) {
          return val;
        }
        // Track object ancestry to replace circular references.
        if (ancestors.includes(this)) {
          while (
            ancestors.length > 0 &&
            ancestors[ancestors.length - 1] !== this
          ) {
            ancestors.pop();
          }
        }
        if (ancestors.includes(val)) {
          return '[Circular]';
        }
        ancestors.push(val);
        return val;
      },
    );
  } catch {
    try {
      return String(value);
    } catch {
      return undefined;
    }
  }
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

  // Decode binary gRPC status details if not yet parsed.
  const errWithMeta = e as GoogleError;
  if (
    !errObj.statusDetails &&
    errWithMeta.metadata &&
    typeof errWithMeta.metadata.get === 'function' &&
    (errWithMeta.metadata.get('grpc-status-details-bin') as unknown[])?.length >
      0
  ) {
    try {
      GoogleError.parseGRPCStatusDetails(errWithMeta);
    } catch {
      // Ignore decoding errors.
    }
  }

  // Prefer server error details over generic error message.
  const serverDetails = errObj.details ?? causeObj?.details;
  const message =
    typeof serverDetails === 'string' && serverDetails.length > 0
      ? serverDetails
      : e.message;

  // Serialize status details if present.
  const rawStatusDetails = errObj.statusDetails ?? causeObj?.statusDetails;
  let statusDetailsStr: string | undefined;
  if (rawStatusDetails !== undefined && rawStatusDetails !== null) {
    statusDetailsStr =
      typeof rawStatusDetails === 'string'
        ? rawStatusDetails
        : safeJsonStringify(rawStatusDetails);
  }

  // Serialize backend metadata, encoding Buffer values as base64.
  const rawMetadata = errObj.metadata ?? causeObj?.metadata;
  let metadataStr: string | undefined;
  if (rawMetadata && typeof rawMetadata === 'object') {
    try {
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
      metadataStr = safeJsonStringify(cleanMap);
    } catch {
      metadataStr = safeJsonStringify(rawMetadata);
    }
  }

  // Combine status details and metadata into exception.stacktrace.
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
    // Record server error details and metadata instead of local stack trace.
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
    // Record local client error message and stack trace.
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
  // Unwrap `.promise` property on wrappers like OngoingCallPromise.
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
 * Manages span lifecycle for Promise-based operations, ending the span on
 * resolution or recording the error and ending the span on rejection.
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
 * For client-streaming calls without a callback, `'finish'` is used as the completion
 * signal because readable events (`'end'`) never fire on write-only streams.
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

  // Use 'finish' only for write-only streams without a callback.
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
 * Resolves and parses the server address and port from dynamic and static trace contexts,
 * splitting `"host:port"` or `"[ipv6]:port"` strings and applying an optional fallback
 * address and default port.
 */
function resolveServerAddressAndPort(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fallbackAddress?: string,
  defaultPort?: number,
): {rawAddress?: string; rawPort?: number} {
  let rawAddress =
    dynamicArgs.serverAddress ?? staticArgs.serverAddress ?? fallbackAddress;
  let rawPort = dynamicArgs.serverPort ?? staticArgs.serverPort;
  if (rawAddress) {
    // Split embedded port from "host:port" or "[ipv6]:port" if present.
    const match = rawAddress.match(/^(\[[^\]]+\]|[^:]+):(\d+)$/);
    if (match) {
      rawAddress = match[1];
      rawPort = rawPort ?? Number(match[2]);
    }
    if (defaultPort !== undefined) {
      rawPort = rawPort ?? defaultPort;
    }
  }
  return {rawAddress, rawPort};
}

/**
 * Resolves the target service domain (`url.domain`) from dynamic and static trace contexts,
 * checking explicit `urlDomain` values first, then `serverAddress`, and finally `gcpClientService`.
 */
function resolveUrlDomain(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
): string | undefined {
  const explicit = dynamicArgs.urlDomain ?? staticArgs.urlDomain;
  if (explicit) {
    return explicit;
  }
  const {rawAddress} = resolveServerAddressAndPort(dynamicArgs, staticArgs);
  if (rawAddress) {
    return rawAddress;
  }
  // Append ".googleapis.com" when gcpClientService is a short service name.
  if (staticArgs.gcpClientService) {
    return staticArgs.gcpClientService.includes('.')
      ? staticArgs.gcpClientService
      : `${staticArgs.gcpClientService}.googleapis.com`;
  }
  return undefined;
}

/**
 * Returns the transport-specific resend count attribute key.
 *
 * Named per transport, the same way the status attributes are.
 * `http.request.resend_count` is the stable OpenTelemetry attribute for
 * exactly this quantity, so the fallback uses it rather than inventing a
 * parallel name. gRPC has no standard equivalent, so it takes the gcp.*
 * name instead of borrowing the http.* one, which would claim a protocol
 * the call never spoke.
 */
function resolveResendCountAttribute(rpcType: 'grpc' | 'http'): string {
  return rpcType === 'grpc'
    ? 'gcp.grpc.resend_count'
    : 'http.request.resend_count';
}

/**
 * Sets final response status code and server endpoint attributes on a span.
 * `server.address` and `server.port` are present on server-side errors and successful calls,
 * but omitted on client-side failures that occur before DNS resolution or connection establishment.
 */
function setFinalStatusAttributes(
  span: Span,
  rpcType: 'grpc' | 'http',
  rpcStatusName: string | undefined,
  httpStatusCode: number | undefined,
  rawAddress: string | undefined,
  rawPort: number | undefined,
  errorRecorded: boolean,
  recordedError: unknown,
): void {
  const attributes: Attributes = {};
  if (rpcType === 'grpc' && rpcStatusName !== undefined) {
    attributes['rpc.response.status_code'] = rpcStatusName;
  }
  if (rpcType === 'http' && httpStatusCode !== undefined) {
    attributes['http.response.status_code'] = httpStatusCode;
  }
  // Omit server endpoint on client-side pre-connection failures.
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
}

/**
 * Records error attributes (`error.type`, `status.message`), exception event,
 * and `ERROR` status on a span, returning the resolved transport status codes.
 */
function recordSpanError(
  span: Span,
  e: unknown,
  rpcType: 'grpc' | 'http',
): {rpcStatusName?: string; httpStatusCode?: number} {
  const rpcStatusName = resolveRpcStatusName(e);
  const httpStatusCode = resolveHttpStatusCode(e);
  const message = e instanceof Error ? e.message : resolveErrorMessage(e);
  span.setAttributes({
    'error.type': resolveErrorType(e, rpcType),
    'status.message': message,
  });
  if (e instanceof Error) {
    recordExceptionEvent(span, e, rpcType);
  }
  span.setStatus({code: SpanStatusCode.ERROR, message});
  return {rpcStatusName, httpStatusCode};
}

interface SpanCompletionOptions {
  span: Span;
  rpcType: 'grpc' | 'http';
  rawAddress?: string;
  rawPort?: number;
  onBeforeEnd?: () => void;
}

/**
 * Creates `recordError`, `endSpan`, and `tracedCallback` handlers for a traced call or attempt.
 * Leaves span status unset on success per OpenTelemetry semantic conventions, and ends the span
 * before invoking the user callback so user callback errors are not attributed to the RPC.
 */
function createSpanCompletionHandlers(
  options: SpanCompletionOptions,
  callback?: APICallback,
): {
  recordError: (e: unknown) => void;
  endSpan: () => void;
  tracedCallback?: APICallback;
} {
  const {span, rpcType, rawAddress, rawPort, onBeforeEnd} = options;
  let spanEnded = false;
  let errorRecorded = false;
  let recordedError: unknown;
  let rpcStatusName: string | undefined;
  let httpStatusCode: number | undefined;

  const recordError = (e: unknown) => {
    recordedError = e;
    errorRecorded = true;
    ({rpcStatusName, httpStatusCode} = recordSpanError(span, e, rpcType));
  };

  const endSpan = () => {
    if (!spanEnded) {
      spanEnded = true;
      // Default to OK / 200 when no error was recorded.
      if (!errorRecorded) {
        rpcStatusName = Status[Status.OK];
        httpStatusCode = 200;
      }
      setFinalStatusAttributes(
        span,
        rpcType,
        rpcStatusName,
        httpStatusCode,
        rawAddress,
        rawPort,
        errorRecorded,
        recordedError,
      );
      onBeforeEnd?.();
      span.end();
    }
  };

  // End span before invoking user callback so callback errors are not recorded.
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

  return {recordError, endSpan, tracedCallback};
}

/**
 * Attaches stream, promise, or synchronous completion handlers to a traced operation's result.
 * When a callback is supplied without a stream or promise, the span stays open until
 * `tracedCallback` completes.
 */
function handleCallResult<T>(
  result: T,
  isStreamCall: boolean,
  hasCallback: boolean,
  recordError: (e: unknown) => void,
  endSpan: () => void,
): T {
  const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
  if (isStreamCall && result instanceof EventEmitter) {
    handleStream(result, recordError, endSpan, hasCallback);
  } else if (promiseTarget) {
    handlePromise(promiseTarget, recordError, endSpan);
  } else if (hasCallback) {
    // Span remains open until tracedCallback is invoked.
  } else {
    endSpan();
  }
  return result;
}

/**
 * Executes a function within an active OpenTelemetry client request span, populating
 * standard GCP telemetry attributes and recording errors/exceptions if thrown.
 *
 * For callback-style invocations, pass the user's `callback` as the fifth
 * argument so the span stays open until the callback or stream events finish.
 *
 * @template T
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {function} fn - The operation to trace. Receives the traced callback
 *   when `callback` is supplied, otherwise `undefined`.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream call (true) or promise call (false).
 * @param {APICallback} [callback] - The user callback for callback-style invocations.
 * @returns {T} The result of the traced operation.
 */
export function traceCall(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => GaxCallResult,
  isStreamCall?: boolean,
  callback?: APICallback,
): GaxCallResult;
export function traceCall<T extends EventEmitter>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall: true,
  callback?: APICallback,
): T;
export function traceCall<T>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall?: false,
  callback?: APICallback,
): T;
export function traceCall(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => GaxCallResult,
  isStreamCall = false,
  callback?: APICallback,
): GaxCallResult {
  const spanName = `${dynamicArgs.clientName}.${dynamicArgs.methodName}`;
  return getGaxTracer().startActiveSpan(spanName, {}, (span: Span) => {
    // Populate initial client, method, and domain attributes.
    const urlDomain = resolveUrlDomain(dynamicArgs, staticArgs);
    const initialAttributes: Attributes = {
      'gcp.client.service': staticArgs.gcpClientService,
      'gcp.client.version': staticArgs.gcpVersion,
      'gcp.repo': staticArgs.gcpRepo,
      'gcp.artifact': staticArgs.gcpArtifact,
      'gcp.method.name': dynamicArgs.methodName,
      'gcp.method.type': dynamicArgs.rpcType,
    };
    if (urlDomain !== undefined) {
      initialAttributes['url.domain'] = urlDomain;
    }
    span.setAttributes(initialAttributes);

    // Parse server address and port.
    const {rawAddress, rawPort} = resolveServerAddressAndPort(
      dynamicArgs,
      staticArgs,
    );

    const {recordError, endSpan, tracedCallback} = createSpanCompletionHandlers(
      {
        span,
        rpcType: dynamicArgs.rpcType,
        rawAddress,
        rawPort,
      },
      callback,
    );

    try {
      // Run operation with active client request span in context.
      const activeContext = trace
        .setSpan(context.active(), span)
        .setValue(CLIENT_REQUEST_SPAN_KEY, span);
      const result = context.with(activeContext, () => fn(tracedCallback));
      return handleCallResult(
        result,
        isStreamCall,
        !!tracedCallback,
        recordError,
        endSpan,
      );
    } catch (e) {
      recordError(e);
      endSpan();
      throw e;
    }
  });
}

/**
 * Executes an individual RPC transport attempt within an active OpenTelemetry
 * CLIENT span (low level network span), parenting it to the active client request span
 * and recording per-attempt network, status, and error attributes without
 * injecting span context into outgoing headers.
 *
 * HTTP attempt spans are named `"{http.request.method} {url.template}"` when a URL
 * template is available or `"{http.request.method}"` otherwise; gRPC attempt spans
 * are named `"{apiName}/{methodName}"` or `"{methodName}"`. Also updates `rpc.method`
 * on the parent client request span to `"{apiName}/{methodName}"` for both transports.
 *
 * @param {AttemptTraceContext} dynamicArgs - Dynamic trace context for the RPC attempt.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {function} fn - The transport attempt operation to trace.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream call.
 * @param {APICallback} [callback] - The attempt callback.
 * @param {Context} [parentContext] - Optional parent OpenTelemetry context (e.g. client request span context).
 * @returns {GaxCallResult} The result of the traced attempt.
 */
export function traceAttempt<T = GaxCallResult>(
  dynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall = false,
  callback?: APICallback,
  parentContext?: Context,
): T {
  // Resolve RPC method and transport-specific span name.
  const rpcMethod = dynamicArgs.apiName
    ? `${dynamicArgs.apiName}/${dynamicArgs.methodName}`
    : dynamicArgs.methodName;
  const httpMethod = dynamicArgs.httpMethod ?? 'POST';
  const urlTemplate =
    dynamicArgs.urlTemplate ??
    (dynamicArgs as {'url.template'?: string})['url.template'];
  const spanName =
    dynamicArgs.rpcType === 'http'
      ? formatHttpAttemptSpanName(httpMethod, urlTemplate)
      : rpcMethod;
  const baseContext = parentContext ?? context.active();
  const clientRequestSpan = baseContext.getValue(CLIENT_REQUEST_SPAN_KEY) as
    Span | undefined;
  return getGaxTracer().startActiveSpan(
    spanName,
    {kind: SpanKind.CLIENT},
    baseContext,
    (span: Span) => {
      // Update parent client request span rpc.method from this child attempt.
      if (clientRequestSpan && rpcMethod) {
        clientRequestSpan.setAttribute('rpc.method', rpcMethod);
      }

      // Populate initial transport, method, domain, and retry attributes.
      const urlDomain = resolveUrlDomain(dynamicArgs, staticArgs);
      const initialAttributes: Attributes = {
        'rpc.system': dynamicArgs.rpcType,
      };
      if (dynamicArgs.rpcType === 'grpc') {
        initialAttributes['rpc.method'] = rpcMethod;
      } else {
        initialAttributes['http.request.method'] = httpMethod;
        if (urlTemplate) {
          attemptUrlTemplates.set(span, urlTemplate);
          initialAttributes['url.template'] = urlTemplate;
        }
      }
      if (urlDomain !== undefined) {
        initialAttributes['url.domain'] = urlDomain;
      }
      if (
        dynamicArgs.resendCount !== undefined &&
        dynamicArgs.resendCount > 0
      ) {
        initialAttributes[resolveResendCountAttribute(dynamicArgs.rpcType)] =
          dynamicArgs.resendCount;
      }
      span.setAttributes(initialAttributes);

      // Parse server address and port, defaulting to port 443.
      const {rawAddress, rawPort} = resolveServerAddressAndPort(
        dynamicArgs,
        staticArgs,
        urlDomain,
        443,
      );

      const {recordError, endSpan, tracedCallback} =
        createSpanCompletionHandlers(
          {
            span,
            rpcType: dynamicArgs.rpcType,
            rawAddress,
            rawPort,
            onBeforeEnd: () => {
              if (clientRequestSpan && rpcMethod) {
                clientRequestSpan.setAttribute('rpc.method', rpcMethod);
              }
            },
          },
          callback,
        );

      try {
        // Expose attempt span in context so HTTP transport can update method and URL template.
        const attemptContext = context
          .active()
          .setValue(ATTEMPT_SPAN_KEY, span);
        const result = context.with(attemptContext, () => fn(tracedCallback));
        return handleCallResult(
          result,
          isStreamCall,
          !!tracedCallback,
          recordError,
          endSpan,
        );
      } catch (e) {
        recordError(e);
        endSpan();
        throw e;
      }
    },
  );
}
