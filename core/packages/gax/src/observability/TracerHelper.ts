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
import {Status} from '../status';

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
}

/**
 * Returns the OpenTelemetry Tracer instance for google-gax.
 *
 * @returns {Tracer} The OpenTelemetry Tracer.
 */
export function getGaxTracer(): Tracer {
  return trace.getTracer('google-gax');
}

/**
 * Resolves the OpenTelemetry `error.type` attribute for a failed call.
 *
 * Per OpenTelemetry semantic conventions, uses the protocol-level status
 * (canonical gRPC status name for gRPC, HTTP status code for HTTP/fallback),
 * falling back to Node system error codes (e.g. `ECONNREFUSED`) or the
 * exception class name.
 */
function resolveErrorType(e: Error, rpcType: 'grpc' | 'http'): string {
  if (rpcType === 'grpc') {
    const statusName = grpcStatusName(e);
    if (statusName !== undefined) {
      return statusName;
    }
  } else {
    const httpStatusCode = resolveHttpStatusCode(e);
    if (httpStatusCode !== undefined) {
      return String(httpStatusCode);
    }
  }
  const code = (e as {code?: unknown}).code;
  if (typeof code === 'string' && code.length > 0) {
    return code;
  }
  return resolveExceptionType(e);
}

/**
 * Resolves the exception type name for a failed call. Prefers the error's
 * constructor name (e.g. `GoogleError`, `TypeError`) over `e.name`, falling
 * back to `e.name` when the constructor is the generic `Error`.
 */
function resolveExceptionType(e: Error): string {
  const className = e.constructor?.name;
  if (className && className !== 'Error') {
    return className;
  }
  return e.name || 'Error';
}

/**
 * Maps a failure's numeric gRPC status code to its canonical name. Status 0 (OK)
 * and codes outside the `Status` enum are treated as absent for failed calls.
 */
function grpcStatusName(e: unknown): string | undefined {
  const code = (e as {code?: unknown} | null)?.code;
  if (
    typeof code === 'number' &&
    code !== Status.OK &&
    Status[code] !== undefined
  ) {
    return Status[code];
  }
  return undefined;
}

/**
 * Resolves the canonical gRPC status name for a failed call, defaulting to `UNKNOWN`.
 */
function resolveRpcStatusName(e: unknown): string {
  return grpcStatusName(e) ?? Status[Status.UNKNOWN];
}

/**
 * Reads the HTTP response status recorded on a fallback error.
 */
function resolveHttpStatusCode(e: unknown): number | undefined {
  const code = (e as {httpStatusCode?: unknown} | null)?.httpStatusCode;
  return typeof code === 'number' ? code : undefined;
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
    span.setAttributes({
      'gcp.client.service': staticArgs.gcpClientService,
      'gcp.client.version': staticArgs.gcpVersion,
      'gcp.repo': staticArgs.gcpRepo,
      'gcp.artifact': staticArgs.gcpArtifact,
      'gcp.method.name': dynamicArgs.methodName,
      'gcp.method.type': dynamicArgs.rpcType,
    });

    let spanEnded = false;
    let errorRecorded = false;
    let rpcStatusName: string | undefined;
    let httpStatusCode: number | undefined;

    const setErrorStatus = (message: string) => {
      errorRecorded = true;
      span.setStatus({code: SpanStatusCode.ERROR, message});
    };

    const setStatusAttributes = () => {
      const attributes: Attributes = {
        'rpc.response.status_code': rpcStatusName,
      };
      if (dynamicArgs.rpcType === 'grpc') {
        attributes['grpc.response.status_code'] = rpcStatusName;
      } else if (httpStatusCode !== undefined) {
        attributes['http.response.status_code'] = httpStatusCode;
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
        span.end();
      }
    };

    const recordError = (e: unknown) => {
      rpcStatusName = resolveRpcStatusName(e);
      httpStatusCode = resolveHttpStatusCode(e);
      if (e instanceof Error) {
        span.setAttributes({
          'error.type': resolveErrorType(e, dynamicArgs.rpcType),
        });
        // Pass the resolved class name to avoid the OTel SDK deriving
        // exception.type from numeric error codes.
        span.recordException({
          name: resolveExceptionType(e),
          message: e.message,
          stack: e.stack,
        });
        setErrorStatus(e.message);
      } else {
        span.setAttributes({
          'error.type': '_OTHER',
        });
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
      const result = fn(tracedCallback);
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
