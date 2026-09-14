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
 */
export function handleStream(
  stream: EventEmitter,
  recordError: (err: unknown) => void,
  endSpan: () => void,
): void {
  let spanEnded = false;

  // Client-streaming calls hand back a write-only stream: the readable side is
  // never opened, so 'end' and 'close' never fire and 'finish' is the only
  // signal that the call completed. Without it the span would leak.
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

  const cleanup = () => {
    stream.removeListener('error', onError);
    stream.removeListener('end', onEnd);
    stream.removeListener('close', onClose);
    // No isWriteOnly guard needed: removeListener is a no-op when onFinish was
    // never registered, and it only ever matches our own closure.
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
  if (isWriteOnly) {
    stream.on('finish', onFinish);
  }
}

/**
 * Executes a function within an active OpenTelemetry span, populating standard
 * GCP telemetry attributes and recording errors/exceptions if thrown.
 *
 * Callback-style invocations need special handling. The API callers
 * (`NormalApiCaller`, `BundleApiCaller`, `LongrunningApiCaller` and
 * `PagedApiCaller`) all return `new OngoingCall(callback)` when a callback is
 * supplied, and `OngoingCall` has no `promise` property. Their `result()` then
 * hands back `canceller.promise`, which is `undefined`. With no promise and no
 * stream to await, the span would otherwise be ended synchronously, before the
 * RPC had even been sent.
 *
 * To avoid that, pass the user's `callback` as the fifth argument. `fn` then
 * receives a traced replacement to hand to the RPC, and the span stays open
 * until that callback fires.
 *
 * Because the span's lifetime is then bound entirely to the callback, a
 * callback that never fires would leave the span open forever, and an unended
 * span is never exported. Transports normally prevent this: gRPC enforces the
 * deadline itself and cancels with DEADLINE_EXCEEDED. But `addTimeoutArg` only
 * forwards a deadline, it does not synthesize a callback, so a call made with
 * no timeout against an unresponsive transport has nothing to bound it. Pass
 * `maxDurationMs` to opt into a backstop for that case.
 *
 * @template T
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {function} fn - The operation to trace. Receives the traced callback
 *   when `callback` is supplied, otherwise `undefined`.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream call (true) or promise call (false).
 * @param {APICallback} [callback] - The user callback for callback-style invocations.
 * @param {number} [maxDurationMs] - Opt-in backstop, in milliseconds. Applies
 *   only to callback-style invocations. If the callback has not fired by then
 *   the span is marked abandoned and ended, so it is still exported rather than
 *   lost. The user callback is always forwarded, even if it arrives later.
 * @returns {T} The result of the traced operation.
 */
export function traceAttempt(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => GaxCallResult,
  isStreamCall?: boolean,
  callback?: APICallback,
  maxDurationMs?: number,
): GaxCallResult;
export function traceAttempt<T extends EventEmitter>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall: true,
  callback?: APICallback,
  maxDurationMs?: number,
): T;
export function traceAttempt<T>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall?: false,
  callback?: APICallback,
  maxDurationMs?: number,
): T;
export function traceAttempt(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: (tracedCallback?: APICallback) => GaxCallResult,
  isStreamCall = false,
  callback?: APICallback,
  maxDurationMs?: number,
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
    let backstopTimer: ReturnType<typeof setTimeout> | undefined;

    // Marks the span failed. Kept separate from recordError so paths that are
    // failures but not exceptions (such as backstop abandonment) can set the
    // status without emitting a misleading exception event.
    const setErrorStatus = (message: string) => {
      errorRecorded = true;
      span.setStatus({code: SpanStatusCode.ERROR, message});
    };

    // Every path ends here, so the status is resolved in one place: ERROR if
    // anything reported a failure, OK otherwise.
    const endSpan = () => {
      if (!spanEnded) {
        spanEnded = true;
        if (backstopTimer !== undefined) {
          clearTimeout(backstopTimer);
          backstopTimer = undefined;
        }
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
          'error.type': e.constructor?.name ?? e.name,
        });
        span.recordException(e);
        if (e.name) {
          span.setAttribute('exception.type', e.name);
        }
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
    // callback rather than to a promise or stream. Declared as a `function` and
    // forwarding `arguments` via `apply` so the caller's `this` binding and the
    // full argument list (err, response, next, rawResponse) are preserved.
    //
    // The span is ended *before* the user callback runs so the span measures the
    // RPC itself, and so a throwing user callback cannot leak the span.
    const tracedCallback: APICallback | undefined =
      !isStreamCall && callback
        ? function (this: unknown, ...args: Parameters<APICallback>) {
            const err = args[0];
            // If the backstop already ended the span, don't mutate it further;
            // the OpenTelemetry SDK ignores writes to an ended span. The user
            // callback is still forwarded below.
            if (err && !spanEnded) {
              recordError(err);
            }
            endSpan();
            callback.apply(this, args);
          }
        : undefined;

    // Opt-in backstop, callback-style only. Promise and stream invocations are
    // bound to settlement/stream events and are not covered here.
    if (tracedCallback && maxDurationMs !== undefined && maxDurationMs > 0) {
      backstopTimer = setTimeout(() => {
        backstopTimer = undefined;
        const message = `Callback did not fire within ${maxDurationMs}ms; span abandoned.`;
        span.setAttributes({
          'gcp.span.abandoned': true,
          'error.message': message,
        });
        setErrorStatus(message);
        endSpan();
      }, maxDurationMs);
      // Never let the backstop keep the process alive.
      backstopTimer.unref?.();
    }

    try {
      const result = fn(tracedCallback);
      // Use getPromiseTarget instead of `result instanceof Promise` to ensure custom
      // thenables, CancellablePromise implementations, and OngoingCallPromise wrappers
      // are properly tracked rather than leaving spans unclosed or ending them prematurely.
      const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
      if (isStreamCall && result instanceof EventEmitter) {
        handleStream(result, recordError, endSpan);
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
