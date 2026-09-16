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
import {Span, SpanStatusCode, trace, Tracer} from '@opentelemetry/api';
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
 * The error's class name is not usable on its own here, because the same
 * logical failure arrives as a different class depending on the transport:
 * grpc-js builds failures with a plain `Object.assign(new Error(msg), status)`,
 * so it reports `Error`, while the REST path builds a real `GoogleError` via
 * `GoogleError.parseHttpError`. `GoogleError` also never assigns `this.name`,
 * so `name` is the inherited literal `'Error'` on both paths.
 *
 * The gRPC status code is the stable, low-cardinality identifier that is
 * consistent across both transports, so it is preferred. Node system errors
 * (`ECONNREFUSED`, `ETIMEDOUT`, ...) already carry a suitable string code and
 * are used as-is. The class name remains a last-resort fallback.
 *
 * A zero code is treated as absent rather than as `OK`, matching
 * `GoogleError.parseHttpError`, which deletes the field because zero is the
 * proto3 default for an unset value. Without this a failed call could be
 * labelled `error.type: 'OK'`.
 */
function resolveErrorType(e: Error): string {
  const code = (e as {code?: unknown}).code;
  if (
    typeof code === 'number' &&
    code !== Status.OK &&
    Status[code] !== undefined
  ) {
    return Status[code];
  }
  if (typeof code === 'string' && code.length > 0) {
    return code;
  }
  return e.constructor?.name ?? e.name;
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

  // Client-streaming calls hand back a write-only stream: the readable side is
  // never opened, so 'end' never fires, and when the transport also suppresses
  // 'close' then 'finish' is the only signal left that the call completed.
  //
  // 'finish' must NOT be used for readable streams. On bidi streams it fires as
  // soon as the caller stops writing, which is typically long before the server
  // has finished streaming responses back, so ending the span there would
  // truncate it and drop the entire response phase.
  //
  // Detect "has a write side but no read side". The readable check is
  // `!== true` rather than `=== false`: duplexify-based streams report
  // `readable === false`, but a plain Writable leaves it `undefined`.
  const isWriteOnly =
    'writable' in stream &&
    stream.writable === true &&
    (!('readable' in stream) || stream.readable !== true);

  // A supplied callback is the authoritative completion signal: it fires when
  // the server has responded, and traceCall wraps it so that it ends the span.
  // 'finish' only means the client stopped writing, which on a callback-driven
  // client-streaming call happens before the response arrives, so subscribing
  // to it would end the span early and hide any error reported through the
  // callback. 'end', 'close' and 'error' stay attached either way.
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
 * Callback-style invocations need special handling. The API callers
 * all return `new OngoingCall(callback)` when a callback is
 * supplied, and `OngoingCall` has no `promise` property.
 *
 * To avoid spans ending prematurely with callback functions, pass the user's
 * `callback` as the fifth argument. `fn` then receives a traced replacement
 * to hand to the RPC, and on a non-stream call the span stays open until that
 * callback fires.
 *
 * Stream calls are wrapped too. The stream's events and the callback then both
 * race to finish the span, and whichever fires first wins because `endSpan` is
 * idempotent. That is the point: a callback-driven client-streaming call
 * reports completion through the callback, while a plain stream reports it
 * through 'end'/'close', and neither has to know which one is in play.
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

    // Marks the span failed. Kept separate from recordError so paths that are
    // failures but not exceptions can set the status without emitting a
    // misleading exception event.
    const setErrorStatus = (message: string) => {
      errorRecorded = true;
      span.setStatus({code: SpanStatusCode.ERROR, message});
    };

    // Every path ends here, so the status is resolved in one place: ERROR if
    // anything reported a failure, OK otherwise.
    const endSpan = () => {
      if (!spanEnded) {
        spanEnded = true;
        if (!errorRecorded) {
          span.setStatus({code: SpanStatusCode.OK});
        }
        span.end();
      }
    };

    const recordError = (e: unknown) => {
      if (e instanceof Error) {
        span.setAttributes({
          'error.message': e.message,
          'error.type': resolveErrorType(e),
        });
        // recordException emits the `exception` event, which carries
        // exception.type, exception.message and exception.stacktrace. Per OTel
        // semconv those belong on that event and not on the span, so they are
        // deliberately not copied up here.
        span.recordException(e);
        setErrorStatus(e.message);
      } else {
        const message = String(e);
        span.setAttributes({
          'error.message': message,
        });
        span.recordException(message);
        setErrorStatus(message);
      }
    };

    // For callback-style invocations the span's lifetime is bound to the
    // callback rather than to a promise. Declared as a `function` and
    // forwarding `arguments` via `apply` so the caller's `this` binding and the
    // full argument list (err, response, next, rawResponse) are preserved.
    //
    // The span is ended *before* the user callback runs so the span measures the
    // RPC itself, and so a throwing user callback cannot leak the span.
    //
    // Stream calls are wrapped as well. `handleStream` still watches the
    // stream, so the two simply race and `endSpan` keeps the result idempotent.
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
