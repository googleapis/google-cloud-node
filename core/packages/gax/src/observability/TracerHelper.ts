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
  Span,
  SpanKind,
  SpanStatusCode,
  trace,
  Tracer,
} from '@opentelemetry/api';
import {APICallback, GaxCallResult} from '../apitypes';
import {Status} from '../status';
import {
  ATTEMPT_SPAN_KEY,
  AttemptTraceContext,
  buildInitialAttributes,
  CLIENT_REQUEST_SPAN_KEY,
  DynamicTraceContext,
  getActiveTraceContext,
  StaticTraceContext,
} from './contextUtil';
import {
  isPreConnectionFailure,
  recordExceptionEvent,
  resolveErrorMessage,
  resolveErrorType,
  resolveHttpStatusCode,
  resolveRpcStatusName,
} from './errorUtil';

const attemptUrlTemplates = new WeakMap<Span, string>();
const clientRequestFirstAttempt = new WeakMap<Span, Span>();

/**
 * Formats the span name for an HTTP low level network attempt span as
 * `"{http.request.method} {url.template}"` when a URL template is available,
 * or `"{http.request.method}"` otherwise.
 *
 * @param {string} httpMethod - The HTTP request method (e.g. 'GET', 'POST').
 * @param {string} [urlTemplate] - Optional URL path template (e.g. '/v1/{name}:access').
 * @returns {string} The formatted HTTP attempt span name.
 */
function formatHttpAttemptSpanName(
  httpMethod: string,
  urlTemplate?: string,
): string {
  return urlTemplate ? `${httpMethod} ${urlTemplate}` : httpMethod;
}

/**
 * Propagates `url.template` from an HTTP attempt span to its parent client request span,
 * binding the parent span to the first child attempt span that resolves a URL template.
 *
 * @param {Span | undefined} clientRequestSpan - The parent client request span, if active.
 * @param {Span} attemptSpan - The child low level network HTTP attempt span.
 * @param {string | undefined} urlTemplate - The URL path template resolved for the attempt.
 */
function propagateUrlTemplateToClientSpan(
  clientRequestSpan: Span | undefined,
  attemptSpan: Span,
  urlTemplate: string | undefined,
): void {
  if (!clientRequestSpan || !urlTemplate) {
    return;
  }
  const boundAttempt = clientRequestFirstAttempt.get(clientRequestSpan);
  if (!boundAttempt) {
    clientRequestFirstAttempt.set(clientRequestSpan, attemptSpan);
    clientRequestSpan.setAttribute('url.template', urlTemplate);
  } else if (boundAttempt === attemptSpan) {
    clientRequestSpan.setAttribute('url.template', urlTemplate);
  }
}

/**
 * Updates the `http.request.method` attribute, optional `url.template` attribute,
 * and span name on the currently active low level network attempt span, and
 * propagates `url.template` to the active client request span if this is the first
 * attempt span to resolve a URL template.
 *
 * @param {string} httpMethod - The HTTP request method (e.g. 'GET', 'POST').
 * @param {string} [urlTemplate] - Optional URL path template (e.g. '/v1/{name}:access').
 */
export function setAttemptHttpMethod(
  httpMethod: string,
  urlTemplate?: string,
): void {
  const activeTrace = getActiveTraceContext();
  const attemptSpan = activeTrace?.attemptSpan;
  const clientRequestSpan = activeTrace?.clientRequestSpan;
  if (attemptSpan) {
    attemptSpan.setAttribute('http.request.method', httpMethod);
    if (urlTemplate) {
      attemptUrlTemplates.set(attemptSpan, urlTemplate);
      attemptSpan.setAttribute('url.template', urlTemplate);
      propagateUrlTemplateToClientSpan(
        clientRequestSpan,
        attemptSpan,
        urlTemplate,
      );
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
 * Checks if a value behaves like a Promise or Thenable.
 *
 * Note: It is not sufficient to check `result instanceof Promise` because:
 * 1. Custom classes implementing `CancellablePromise` or Thenables may not
 *    inherit directly from the native JavaScript `Promise` prototype.
 * 2. GAX callers or custom callers may return objects such as `OngoingCallPromise`
 *    that hold the actual promise on a `.promise` property.
 * 3. Promises originating from different execution realms (such as Node.js vm
 *    contexts or different package bundles) fail `instanceof Promise` checks.
 *
 * @template T
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if `value` is a Promise or Thenable.
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
 *
 * @template T
 * @param {unknown} value - The operation return value to inspect.
 * @returns {PromiseLike<T> | null} The underlying PromiseLike target, or null if not promise-like.
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
    stream.removeListener('end', endSpanOnce);
    stream.removeListener('close', endSpanOnce);
    stream.removeListener('finish', endSpanOnce);
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

  stream.on('error', onError);
  stream.on('end', endSpanOnce);
  stream.on('close', endSpanOnce);
  if (useFinish) {
    stream.on('finish', endSpanOnce);
  }
}

/**
 * Resolves and parses the server address, port, and target service domain (`url.domain`)
 * from dynamic and static trace contexts, splitting `"host:port"` or `"[ipv6]:port"`
 * strings. When `defaultPort` is provided (for low level network attempt spans), falls back to `url.domain`
 * for the server address and defaults the port to `defaultPort` if not otherwise specified.
 *
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the call or attempt.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {number} [defaultPort] - Optional default port (e.g. 443 for low level network attempt spans).
 * @returns {{rawAddress?: string; rawPort?: number; urlDomain?: string}} Resolved address, port, and domain.
 */
function resolveEndpointAndDomain(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  defaultPort?: number,
): {rawAddress?: string; rawPort?: number; urlDomain?: string} {
  let rawAddress = dynamicArgs.serverAddress ?? staticArgs.serverAddress;
  let rawPort = dynamicArgs.serverPort ?? staticArgs.serverPort;
  const splitHostAndPort = (addr: string) => {
    const match = addr.match(/^(\[[^\]]+\]|[^:]+):(\d+)$/);
    if (match) {
      rawAddress = match[1];
      rawPort = rawPort ?? Number(match[2]);
    } else {
      rawAddress = addr;
    }
  };

  if (rawAddress) {
    // Split embedded port from "host:port" or "[ipv6]:port" if present.
    splitHostAndPort(rawAddress);
  }

  let urlDomain = dynamicArgs.urlDomain ?? staticArgs.urlDomain ?? rawAddress;
  if (!urlDomain && staticArgs.gcpClientService) {
    // Append ".googleapis.com" when gcpClientService is a short service name.
    urlDomain = staticArgs.gcpClientService.includes('.')
      ? staticArgs.gcpClientService
      : `${staticArgs.gcpClientService}.googleapis.com`;
  }

  if (defaultPort !== undefined) {
    if (!rawAddress && urlDomain) {
      splitHostAndPort(urlDomain);
    }
    if (rawAddress) {
      rawPort = rawPort ?? defaultPort;
    }
  }

  return {rawAddress, rawPort, urlDomain};
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
 *
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @returns {string} The resend count attribute key (`gcp.grpc.resend_count` or `http.request.resend_count`).
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
 *
 * @param {Span} span - The span on which to set final attributes.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @param {string | undefined} rpcStatusName - Resolved gRPC status name, if any.
 * @param {number | undefined} httpStatusCode - Resolved HTTP status code, if any.
 * @param {string | undefined} rawAddress - Parsed server address, if configured.
 * @param {number | undefined} rawPort - Parsed server port, if configured.
 * @param {boolean} errorRecorded - Whether an error was recorded on the span.
 * @param {unknown} recordedError - The error recorded on the span, if any.
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
 * Records error attributes (`error.type`, `status.message`), `exception` span event,
 * and `ERROR` status on a span, returning the resolved transport status codes.
 *
 * @param {Span} span - The span on which to record the error.
 * @param {unknown} e - The error thrown or passed to the callback/stream/promise.
 * @param {'grpc' | 'http'} rpcType - The RPC transport protocol.
 * @param {boolean} [includeExceptionMessage=false] - Whether to include `exception.message`
 *   on the `exception` event (true for low level network attempt spans, false for client request spans).
 * @returns {{rpcStatusName?: string; httpStatusCode?: number}} The resolved status codes.
 */
function recordSpanError(
  span: Span,
  e: unknown,
  rpcType: 'grpc' | 'http',
  includeExceptionMessage = false,
): {rpcStatusName?: string; httpStatusCode?: number} {
  const rpcStatusName =
    rpcType === 'grpc' ? resolveRpcStatusName(e) : undefined;
  const httpStatusCode =
    rpcType === 'http' ? resolveHttpStatusCode(e) : undefined;
  const message = e instanceof Error ? e.message : resolveErrorMessage(e);
  span.setAttributes({
    'error.type': resolveErrorType(e, rpcType),
    'status.message': message,
  });
  if (e instanceof Error) {
    recordExceptionEvent(span, e, rpcType, includeExceptionMessage);
  }
  span.setStatus({code: SpanStatusCode.ERROR, message});
  return {rpcStatusName, httpStatusCode};
}

/**
 * Options for configuring span completion and error-recording handlers.
 */
interface SpanCompletionOptions {
  /** The span managed by the completion handlers. */
  span: Span;
  /** The RPC transport protocol ('grpc' or 'http'). */
  rpcType: 'grpc' | 'http';
  /** Parsed server address to record when the call is not a pre-connection failure. */
  rawAddress?: string;
  /** Parsed server port to record when the call is not a pre-connection failure. */
  rawPort?: number;
  /** Whether to include `exception.message` on `exception` span events (true for low level network spans). */
  includeExceptionMessage?: boolean;
}

/**
 * Creates `recordError`, `endSpan`, and `tracedCallback` handlers for a traced call or attempt.
 * Leaves span status unset on success per OpenTelemetry semantic conventions, and ends the span
 * before invoking the user callback so user callback errors are not attributed to the RPC.
 *
 * @param {SpanCompletionOptions} options - Span and transport options for the completion handlers.
 * @param {APICallback} [callback] - Optional user or attempt callback to wrap.
 * @returns {{recordError: (e: unknown) => void; endSpan: () => void; tracedCallback?: APICallback}}
 *   The error-recording, span-ending, and wrapped callback handlers.
 */
function createSpanCompletionHandlers(
  options: SpanCompletionOptions,
  callback?: APICallback,
): {
  recordError: (e: unknown) => void;
  endSpan: () => void;
  tracedCallback?: APICallback;
} {
  const {span, rpcType, rawAddress, rawPort, includeExceptionMessage} = options;
  let spanEnded = false;
  let errorRecorded = false;
  let recordedError: unknown;
  let rpcStatusName: string | undefined;
  let httpStatusCode: number | undefined;

  const recordError = (e: unknown) => {
    recordedError = e;
    errorRecorded = true;
    ({rpcStatusName, httpStatusCode} = recordSpanError(
      span,
      e,
      rpcType,
      includeExceptionMessage,
    ));
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
 * Executes `fn` within `executionContext` and attaches stream, promise, callback,
 * or synchronous completion handlers to its result.
 *
 * @template T
 * @param {Context} executionContext - The OpenTelemetry context to activate during `fn` execution.
 * @param {function} fn - The operation to execute, receiving `tracedCallback` if `callback` was provided.
 * @param {boolean} isStreamCall - Whether the operation returns a stream (`EventEmitter`).
 * @param {SpanCompletionOptions} options - Span completion options.
 * @param {APICallback} [callback] - Optional callback to wrap for completion tracking.
 * @returns {T} The return value of `fn`.
 */
function executeTracedOperation<T>(
  executionContext: Context,
  fn: (tracedCallback?: APICallback) => T,
  isStreamCall: boolean,
  options: SpanCompletionOptions,
  callback?: APICallback,
): T {
  const {recordError, endSpan, tracedCallback} = createSpanCompletionHandlers(
    options,
    callback,
  );
  try {
    const result = context.with(executionContext, () => fn(tracedCallback));
    const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
    if (isStreamCall && result instanceof EventEmitter) {
      handleStream(result, recordError, endSpan, !!tracedCallback);
    } else if (promiseTarget) {
      handlePromise(promiseTarget, recordError, endSpan);
    } else if (!tracedCallback) {
      endSpan();
    }
    return result;
  } catch (e) {
    recordError(e);
    endSpan();
    throw e;
  }
}

/**
 * Executes a function within an active OpenTelemetry client request span
 * (`"{clientName}.{methodName}"`), populating standard GCP client telemetry attributes
 * (`gcp.client.*`, `rpc.system.name`, `url.domain`, `server.address`, `server.port`,
 * `rpc.response.status_code` / `http.response.status_code`) and recording error
 * attributes (`error.type`, `status.message`, and `exception.type` event attribute)
 * if the operation fails. Child low level network attempt spans also propagate `rpc.method` and
 * `url.template` onto this span.
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
    const {rawAddress, rawPort, urlDomain} = resolveEndpointAndDomain(
      dynamicArgs,
      staticArgs,
    );
    span.setAttributes(
      buildInitialAttributes(dynamicArgs, staticArgs, urlDomain),
    );

    const activeContext = context
      .active()
      .setValue(CLIENT_REQUEST_SPAN_KEY, span);
    return executeTracedOperation(
      activeContext,
      fn,
      isStreamCall,
      {
        span,
        rpcType: dynamicArgs.rpcType,
        rawAddress,
        rawPort,
      },
      callback,
    );
  });
}

/**
 * Executes an individual RPC transport attempt within an active OpenTelemetry
 * CLIENT span (low level network span), parenting it to the active client request span
 * and recording per-attempt client (`gcp.client.*`), network (`rpc.system.name`, `rpc.method`,
 * `http.request.method`, `url.template`, `url.domain`, `server.address`, `server.port`),
 * resend (`gcp.grpc.resend_count` / `http.request.resend_count`), status
 * (`rpc.response.status_code` / `http.response.status_code`), and error (`error.type`,
 * `status.message`, and `exception.type` / `exception.message` event attributes) attributes
 * without injecting span context into outgoing headers.
 *
 * HTTP attempt spans are named `"{http.request.method} {url.template}"` when a URL
 * template is available or `"{http.request.method}"` otherwise; gRPC attempt spans
 * are named `"{apiName}/{methodName}"` or `"{methodName}"`. Also updates `rpc.method`
 * on the parent client request span to `"{apiName}/{methodName}"` for both transports,
 * and propagates `url.template` to the parent client request span from its first HTTP
 * attempt that resolves a URL template.
 *
 * @template T
 * @param {AttemptTraceContext} dynamicArgs - Dynamic trace context for the RPC attempt.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {function} fn - The transport attempt operation to trace.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream call.
 * @param {APICallback} [callback] - The attempt callback.
 * @param {Context} [parentContext] - Optional parent OpenTelemetry context (e.g. client request span context).
 * @returns {T} The result of the traced attempt.
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
  const urlTemplate = dynamicArgs.urlTemplate;
  const spanName =
    dynamicArgs.rpcType === 'http'
      ? formatHttpAttemptSpanName(httpMethod, urlTemplate)
      : rpcMethod;
  const baseContext = parentContext ?? context.active();
  const clientRequestSpan =
    getActiveTraceContext(baseContext)?.clientRequestSpan;
  return getGaxTracer().startActiveSpan(
    spanName,
    {kind: SpanKind.CLIENT},
    baseContext,
    (span: Span) => {
      // Update parent client request span rpc.method from this child attempt.
      if (clientRequestSpan && rpcMethod) {
        clientRequestSpan.setAttribute('rpc.method', rpcMethod);
      }

      const {rawAddress, rawPort, urlDomain} = resolveEndpointAndDomain(
        dynamicArgs,
        staticArgs,
        443,
      );
      const initialAttributes = buildInitialAttributes(
        dynamicArgs,
        staticArgs,
        urlDomain,
      );
      if (dynamicArgs.rpcType === 'grpc') {
        initialAttributes['rpc.method'] = rpcMethod;
      } else {
        initialAttributes['http.request.method'] = httpMethod;
        if (urlTemplate) {
          attemptUrlTemplates.set(span, urlTemplate);
          initialAttributes['url.template'] = urlTemplate;
          propagateUrlTemplateToClientSpan(
            clientRequestSpan,
            span,
            urlTemplate,
          );
        }
      }
      if (
        dynamicArgs.resendCount !== undefined &&
        dynamicArgs.resendCount > 0
      ) {
        initialAttributes[resolveResendCountAttribute(dynamicArgs.rpcType)] =
          dynamicArgs.resendCount;
      }
      span.setAttributes(initialAttributes);

      // Expose attempt span in context so HTTP transport can update method and URL template.
      const attemptContext = context.active().setValue(ATTEMPT_SPAN_KEY, span);
      return executeTracedOperation(
        attemptContext,
        fn,
        isStreamCall,
        {
          span,
          rpcType: dynamicArgs.rpcType,
          rawAddress,
          rawPort,
          includeExceptionMessage: true,
        },
        callback,
      );
    },
  );
}
