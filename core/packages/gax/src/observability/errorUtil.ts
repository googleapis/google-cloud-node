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

import {Attributes, Span} from '@opentelemetry/api';
import {GoogleError} from '../googleError';
import {Status} from '../status';
/**
 * System and network error codes mapped to CLIENT_CONNECTION_ERROR.
 */
export const connectionCodes = [
  'ENOTFOUND',
  'EAI_AGAIN',
  'ECONNREFUSED',
  'ECONNRESET',
  'EHOSTUNREACH',
  'ENETUNREACH',
  'ENETDOWN',
  'EPIPE',
  'UND_ERR_CONNECT_TIMEOUT',
  'UND_ERR_SOCKET',
  'CERT_HAS_EXPIRED',
  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
  'DEPTH_ZERO_SELF_SIGNED_CERT',
  'SELF_SIGNED_CERT_IN_CHAIN',
  'ERR_TLS_CERT_ALTNAME_INVALID',
  'UNABLE_TO_GET_ISSUER_CERT',
];

/**
 * System and client request error codes mapped to CLIENT_REQUEST_ERROR.
 */
export const requestCodes = [
  'ERR_INVALID_ARG_TYPE',
  'ERR_INVALID_URL',
  'ERR_HTTP_INVALID_HEADER_VALUE',
  'ERR_INVALID_HTTP_TOKEN',
  'ERR_INVALID_PROTOCOL',
  'ERR_INVALID_ARG_VALUE',
];

/**
 * Stream and body error codes mapped to CLIENT_REQUEST_BODY_ERROR.
 */
export const requestBodyCodes = [
  'ERR_STREAM_WRITE_AFTER_END',
  'ERR_STREAM_DESTROYED',
  'ERR_STREAM_ALREADY_FINISHED',
  'ERR_STREAM_CANNOT_PIPE',
  'ERR_STREAM_NULL_VALUES',
  'ERR_STREAM_PREMATURE_CLOSE',
];

/**
 * Buffer error codes mapped to CLIENT_RESPONSE_DECODE_ERROR.
 */
export const decodeCodes = ['ERR_BUFFER_OUT_OF_BOUNDS'];

/**
 * Redirect error codes mapped to CLIENT_REDIRECT_ERROR.
 */
export const redirectCodes = [
  'ERR_TOO_MANY_REDIRECTS',
  'ERR_FR_TOO_MANY_REDIRECTS',
];

/**
 * Generic class / constructor names that should be unwrapped to find more specific error causes.
 */
export const genericClasses = [
  'Error',
  'GoogleError',
  'Object',
  'DOMException',
];

/**
 * Error codes indicating failures prior to network connection establishment.
 */
export const preConnectionCodes = [
  'ENOTFOUND',
  'EAI_AGAIN',
  'ECONNREFUSED',
  'ECONNRESET',
  'EHOSTUNREACH',
  'ENETUNREACH',
  'ERR_INVALID_ARG_TYPE',
  'ERR_INVALID_URL',
];

/**
 * Maximum traversal depth for unwrapping nested error causes.
 */
export const DEPTH_TO_CHECK = 10;

/**
 * Decodes binary gRPC status details (`grpc-status-details-bin`) onto the error
 * object if present and not yet parsed.
 *
 * @param {unknown} e - The error to inspect and populate with parsed gRPC status details.
 */
export function ensureGrpcStatusDetailsParsed(e: unknown): void {
  if (!e || typeof e !== 'object') {
    return;
  }
  const errWithMeta = e as GoogleError & {statusDetails?: unknown};
  if (
    !errWithMeta.reason &&
    !errWithMeta.statusDetails &&
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
}

/**
 * Resolves google.rpc.ErrorInfo reason if present on the error or its cause chain.
 * Corresponds to Tier 1 in the error.type hierarchy.
 *
 * @param {unknown} e - The error to inspect.
 * @returns {string | undefined} The ErrorInfo reason string if found, or undefined.
 */
export function resolveErrorInfoReason(e: unknown): string | undefined {
  ensureGrpcStatusDetailsParsed(e);

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
            typeof detail.errorInfo === 'object' &&
            typeof (detail.errorInfo as {reason?: unknown}).reason ===
              'string' &&
            (detail.errorInfo as {reason: string}).reason.length > 0
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
 *
 * @param {unknown} e - The error to inspect.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @returns {string | undefined} The server error code string if the error came from the server, or undefined.
 */
export function resolveServerErrorCode(
  e: unknown,
  rpcType: 'grpc' | 'http',
): string | undefined {
  if (rpcType === 'http') {
    const httpStatus = resolveHttpStatusCode(e);
    return httpStatus !== undefined ? httpStatus.toString() : undefined;
  }
  if (rpcType === 'grpc') {
    if (
      isPreConnectionFailure(e) ||
      resolveClientNetworkOrOperationalError(e) !== undefined
    ) {
      return undefined;
    }
    // Exclude client-side aborts across the cause chain (timeouts are already
    // matched by resolveClientNetworkOrOperationalError above).
    let current: unknown = e;
    const seen = new Set<unknown>();
    for (let depth = 0; depth < DEPTH_TO_CHECK; depth++) {
      if (!current || typeof current !== 'object' || seen.has(current)) {
        break;
      }
      seen.add(current);
      const err = current as {name?: unknown; cause?: unknown};
      if (err.name === 'AbortError') {
        return undefined;
      }
      current = err.cause;
    }
    return resolveRpcStatusName(e);
  }
  return undefined;
}

/**
 * Resolves client-side network and operational errors to standard CLIENT_* identifiers.
 * Corresponds to Tier 3 in the error.type hierarchy.
 *
 * @param {unknown} e - The error to inspect.
 * @returns {string | undefined} The standardized CLIENT_* error type if matched, or undefined.
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
 *
 * @param {unknown} e - The error to inspect.
 * @returns {string | undefined} The language-specific error class or name if found, or undefined.
 */
export function resolveLanguageSpecificErrorType(
  e: unknown,
): string | undefined {
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
 *
 * @param {unknown} e - The error to classify.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @returns {string} The resolved `error.type` value.
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
 *
 * @param {Error} e - The Error instance.
 * @returns {string} The resolved `exception.type` string.
 */
export function resolveExceptionType(e: Error): string {
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
 *
 * @param {unknown} e - The error to inspect.
 * @returns {string | undefined} The system error code string if present, or undefined.
 */
export function resolveSystemErrorCode(e: unknown): string | undefined {
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
 *
 * @param {unknown} e - The error to inspect.
 * @returns {string | undefined} The canonical gRPC status name if present, or undefined.
 */
export function resolveRpcStatusName(e: unknown): string | undefined {
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
 *
 * @param {unknown} e - The error to inspect.
 * @returns {number | undefined} The numeric HTTP status code if present, or undefined.
 */
export function resolveHttpStatusCode(e: unknown): number | undefined {
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
 * Resolves the transport response status code for a completed call or attempt,
 * recorded as `rpc.response.status_code` (gRPC) or `http.response.status_code` (HTTP).
 * Successful calls resolve to `OK` (gRPC) or `200` (HTTP). Failed calls resolve the
 * status from the error, which is undefined when the error carries no status.
 *
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @param {boolean} failed - Whether the call or attempt failed.
 * @param {unknown} [e] - The error the call or attempt failed with, if it failed.
 * @returns {{rpcStatusName?: string; httpStatusCode?: number}} The gRPC status name
 *   (gRPC) or HTTP status code (HTTP) for the transport.
 */
export function resolveResponseStatusCode(
  rpcType: 'grpc' | 'http',
  failed: boolean,
  e?: unknown,
): {rpcStatusName?: string; httpStatusCode?: number} {
  if (rpcType === 'grpc') {
    return {
      rpcStatusName: failed ? resolveRpcStatusName(e) : Status[Status.OK],
    };
  }
  if (rpcType === 'http') {
    return {httpStatusCode: failed ? resolveHttpStatusCode(e) : 200};
  }
  return {};
}

/**
 * Determines if a failure occurred on the client side before DNS resolution
 * or connection establishment.
 *
 * @param {unknown} e - The error to inspect.
 * @returns {boolean} True if the error occurred before connection establishment.
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
 *
 * @param {unknown} e - The non-Error value thrown or reported.
 * @returns {string} The resolved error message string.
 */
export function resolveErrorMessage(e: unknown): string {
  const message = (e as {message?: unknown} | null)?.message;
  return typeof message === 'string' ? message : String(e);
}

/**
 * Determines whether a failure is a server-side error (i.e. a server response arrived),
 * excluding pre-connection failures, client network/operational errors, and aborts/timeouts.
 *
 * @param {unknown} e - The error to inspect.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @returns {boolean} True if a server error code was resolved for the transport.
 */
export function isServerSideError(
  e: unknown,
  rpcType: 'grpc' | 'http',
): boolean {
  return resolveServerErrorCode(e, rpcType) !== undefined;
}

/**
 * Checks whether a value is a Node.js Buffer instance.
 *
 * @param {unknown} val - The value to check.
 * @returns {boolean} True if `val` is a Buffer.
 */
function isBuffer(val: unknown): val is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(val);
}

/**
 * Safely converts a value to a JSON string without throwing exceptions on
 * circular references, BigInt values, or non-serializable properties.
 *
 * @param {unknown} value - The value to serialize.
 * @returns {string | undefined} The serialized JSON string, or undefined if `value` is undefined or unserializable.
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
 * Extracts and formats server-side error details (message, status details, and metadata)
 * attached by GFE/backend on server-side errors. Note that only `message` is used on
 * low level network `exception` span events (`exception.stacktrace` is not recorded on spans).
 *
 * @param {Error} e - The server Error instance.
 * @returns {{message: string; stacktrace?: string}} The resolved server message and formatted details string.
 */
export function resolveServerExceptionDetails(e: Error): {
  message: string;
  stacktrace?: string;
} {
  ensureGrpcStatusDetailsParsed(e);

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

  // Combine status details and metadata into a formatted stacktrace string.
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
 * Resolves the `exception.message` for a failed call or attempt. Server-side Error
 * instances prefer the server-provided error details over the generic error message
 * (see `resolveServerExceptionDetails`). All other values use their `message`, or the
 * stringified value for non-Error throws (see `resolveErrorMessage`).
 *
 * @param {unknown} e - The error or other value thrown or reported for the call.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @returns {string} The resolved `exception.message` string.
 */
export function resolveExceptionMessage(
  e: unknown,
  rpcType: 'grpc' | 'http',
): string {
  return e instanceof Error && isServerSideError(e, rpcType)
    ? resolveServerExceptionDetails(e).message
    : resolveErrorMessage(e);
}

/**
 * Records an `exception` span event with `exception.type` (and `exception.message`
 * when `includeMessage` is true, such as on low level network attempt spans).
 *
 * @param {Span} span - The span on which to record the exception event.
 * @param {Error} e - The error instance.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @param {boolean} [includeMessage=false] - Whether to include `exception.message` on the event
 *   (true for low level network attempt spans, false for client request spans).
 */
export function recordExceptionEvent(
  span: Span,
  e: Error,
  rpcType: 'grpc' | 'http',
  includeMessage = false,
): void {
  const attributes: Attributes = {
    'exception.type': resolveExceptionType(e),
  };
  if (includeMessage) {
    attributes['exception.message'] = resolveExceptionMessage(e, rpcType);
  }
  span.addEvent('exception', attributes);
}
