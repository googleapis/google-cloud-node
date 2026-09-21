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
 * The identifier is chosen by transport, because semconv asks that error.type
 * be the identifier a reader of *that* protocol would recognise: the gRPC
 * status name on a gRPC call, and the response status on an HTTP one. A gRPC
 * span therefore never reports an HTTP status, and a fallback span reports the
 * status the server actually sent rather than the gRPC code gax mapped it to.
 * The mapping is lossy in both directions — `rpcCodeFromHttpStatusCode`
 * collapses every unmapped 4xx onto `FAILED_PRECONDITION` — so the two are
 * genuinely different facts, and both remain on the span as
 * `rpc.response.status_code` and `http.response.status_code`.
 *
 * Behind the status sit two fallbacks, in order:
 *
 * Node system errors (`ECONNREFUSED`, `ETIMEDOUT`, ...) carry a string `code`
 * that is already the low-cardinality identifier semconv is asking for, and is
 * the only description of such a failure: the class is the bare `Error`.
 *
 * The exception type is the last resort. On the fallback transport this is
 * what a failure that never received a response resolves to — an expired
 * deadline, a refused connection, an aborted request — because there is no
 * HTTP status to report and the mapped gRPC code is not this transport's
 * identifier. The gRPC status stays available as `rpc.response.status_code`.
 *
 * A zero code is treated as absent rather than as `OK`, matching
 * `GoogleError.parseHttpError`, which deletes the field because zero is the
 * proto3 default for an unset value. Without this a failed call could be
 * labelled `error.type: 'OK'`.
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
 * Resolves the OpenTelemetry `exception.type` for a failed call: the class of
 * the error that was raised, e.g. `GoogleError` or `TypeError`.
 *
 * semconv asks for the fully-qualified class name "if applicable". It is not
 * applicable here: JavaScript has no namespaces and attaches no module path to
 * a class, so the constructor name is the whole of a class's runtime identity.
 * A qualified name could only be synthesized from a hardcoded prefix, which
 * would be wrong for any error class gax did not define. semconv's own second
 * example, `OSError`, is likewise unqualified.
 *
 * The class is read from the constructor rather than from `name`, because
 * semconv asks for the dynamic type in preference to the static one, and
 * `name` is not a type at all: it is a mutable data property that any caller
 * may assign. `GoogleError` never assigns it, so it inherits the literal
 * `'Error'` and would otherwise hide the class that was actually raised.
 *
 * `name` is still consulted when the constructor yields the bare `'Error'`,
 * which carries no information: that is the shape grpc-js produces with
 * `Object.assign(new Error(msg), status)`, and it is the one case where a
 * caller-assigned `name` is the only description of the failure available.
 */
function resolveExceptionType(e: Error): string {
  const className = e.constructor?.name;
  if (className && className !== 'Error') {
    return className;
  }
  return e.name || 'Error';
}

/**
 * Maps a failure's numeric gRPC status code to its canonical name, or
 * `undefined` when it carries no usable one.
 *
 * Zero is treated as absent rather than as `OK`: it is the proto3 default for
 * an unset field, so a failed call must not be labelled `OK`. A code outside
 * the `Status` enum is treated as absent too, since there is no name to report.
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
 * Resolves the gRPC status reported for a failed call, as its name.
 *
 * Unlike `error.type` this is reported on both transports and for every
 * failure, so a call with no usable status is reported as `UNKNOWN` rather
 * than left out.
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
 * Resolves the human-readable description for a failure that is not an Error.
 *
 * `code` and `httpStatusCode` above are read off whatever was thrown rather
 * than off an `Error`, because being handed an error-shaped non-Error is a
 * real occurrence: a value crossing a realm boundary fails `instanceof` (the
 * same hazard `isPromiseLike` documents below), and so does a plain object
 * built by a custom transport. `message` is read the same way and for the same
 * reason — `String()` on such an object yields '[object Object]', discarding a
 * description that was right there.
 *
 * Anything without a string `message` falls back to `String(e)`, which is all
 * a bare string, number, `null` or `undefined` can offer.
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

    // Resolved from the error when one is reported, and defaulted to success
    // in endSpan otherwise. Held here rather than written immediately so that
    // every completion path — promise, stream, callback, synchronous throw —
    // emits them from the same place.
    let rpcStatusName: string | undefined;
    let httpStatusCode: number | undefined;

    // Marks the span failed. Kept separate from recordError so paths that are
    // failures but not exceptions can set the status without emitting a
    // misleading exception event.
    //
    // The human-readable message is reported here and nowhere else. There is
    // deliberately no `error.message` attribute: semconv deprecated it and
    // calls it NOT RECOMMENDED on spans, because it has unbounded cardinality
    // and restates the status description that already carries it.
    const setErrorStatus = (message: string) => {
      errorRecorded = true;
      span.setStatus({code: SpanStatusCode.ERROR, message});
    };

    // The gRPC status is reported for both transports, because it is the one
    // status gax resolves on every call and the only one a caller can compare
    // across them. The transport-specific attribute is an alias of it on gRPC,
    // and the received HTTP status on the fallback, which is a different value
    // rather than a restatement of the same one.
    //
    // Written from one place so the two can never disagree.
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

    // Every path ends here, so the outcome is resolved in one place: ERROR if
    // anything reported a failure, and left unset otherwise.
    //
    // A successful call deliberately does not set OK. Per OTel semconv the
    // span status "MUST be left unset if the instrumented operation has ended
    // without any errors"; `OK` is reserved for an application explicitly
    // overriding the instrumentation's judgement, and a library must never
    // claim it on the application's behalf. Unset already reads as success.
    const endSpan = () => {
      if (!spanEnded) {
        spanEnded = true;
        if (!errorRecorded) {
          rpcStatusName = Status[Status.OK];
          // Nothing carries the response status back on a successful fallback
          // call, and success means a 2xx, so 200 is the only value available.
          // A legacy Apiary 204 is therefore also reported as 200.
          httpStatusCode = 200;
        }
        setStatusAttributes();
        span.end();
      }
    };

    const recordError = (e: unknown) => {
      // Resolved for every failure, including non-Error throws: those carry no
      // status, and resolveRpcStatusName reports UNKNOWN for them, which is
      // the right answer for a call that failed for an unmapped reason.
      rpcStatusName = resolveRpcStatusName(e);
      httpStatusCode = resolveHttpStatusCode(e);
      if (e instanceof Error) {
        span.setAttributes({
          'error.type': resolveErrorType(e, dynamicArgs.rpcType),
        });
        // recordException emits the `exception` event, which carries
        // exception.type, exception.message and exception.stacktrace. Per OTel
        // semconv those belong on that event and not on the span, so they are
        // deliberately not copied up here.
        //
        // The error is not handed over as-is, because the SDK derives
        // exception.type from `code` before `name`, and every status-bearing
        // gax error carries a numeric `code`. That reports the stringified
        // number — '5' for NOT_FOUND — as the exception's type, which names no
        // type at all. Passing the resolved class under `name`, with no `code`
        // for it to prefer, is what puts the class on the event. The message
        // and the stack are forwarded unchanged, so the event is otherwise
        // exactly what the SDK would have built.
        span.recordException({
          name: resolveExceptionType(e),
          message: e.message,
          stack: e.stack,
        });
        setErrorStatus(e.message);
      } else {
        // A non-Error throw has no class worth reporting, so error.type falls
        // back to `_OTHER`, the value semconv defines for exactly this.
        // Reporting something matters: error.type is the dimension error-rate
        // queries group on, so a failure missing it is invisible to them.
        //
        // The description is still resolved from a `message` property when one
        // is there, so an error-shaped object is not reduced to
        // '[object Object]'.
        //
        // No exception event is emitted here. recordException on a value that
        // is not an Error yields an event with no exception.type and no
        // stacktrace, which adds nothing the status description does not
        // already carry.
        span.setAttributes({
          'error.type': '_OTHER',
        });
        setErrorStatus(resolveErrorMessage(e));
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
