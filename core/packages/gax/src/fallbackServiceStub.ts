/**
 * Copyright 2021 Google LLC
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

import type {Response as NodeFetchResponse} from 'node-fetch' with {
  'resolution-mode': 'import',
};

import {AuthClient, GoogleAuth, gaxios} from 'google-auth-library';
import * as serializer from 'proto3-json-serializer';

import {isNodeJS} from './featureDetection';
import {StreamArrayParser} from './streamArrayParser';
import {defaultToObjectOptions} from './fallback';
import {GoogleError} from './googleError';
import {rpcCodeFromHttpStatusCode, Status} from './status';
import {pipeline, PipelineSource} from 'stream';
import type {Agent as HttpAgent} from 'http';
import type {Agent as HttpsAgent} from 'https';

// Node.js before v19 does not enable keepalive by default.
// We'll try to enable it very carefully to make sure we don't break possible non-Node use cases.
// TODO: remove this after Node 18 is EOL.
// More info:
// - https://github.com/node-fetch/node-fetch#custom-agent
// - https://github.com/googleapis/gax-nodejs/pull/1534
let agentOption:
  ((parsedUrl: {protocol: string}) => HttpAgent | HttpsAgent) | null = null;
if (isNodeJS()) {
  const http = require('http');
  const https = require('https');
  const httpAgent = new http.Agent({keepAlive: true});
  const httpsAgent = new https.Agent({keepAlive: true});
  agentOption = (parsedUrl: {protocol: string}) => {
    if (parsedUrl.protocol === 'http:') {
      return httpAgent;
    }
    return httpsAgent;
  };
}

export interface FallbackServiceStub {
  // Compatible with gRPC service stub
  [method: string]: (
    request: {},
    options?: {},
    metadata?: {},
    callback?: (err?: Error, response?: {} | undefined) => void,
  ) => StreamArrayParser | {cancel: () => void};
}

export type FetchParametersMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchParameters {
  headers: {[key: string]: string} | Headers;
  body: Buffer | Uint8Array | string;
  method: FetchParametersMethod;
  url: string;
}

// helper function used to properly format empty responses
// when the response code is 204
function _formatEmptyResponse(rpc: protobuf.Method) {
  // format the empty response the same way we format non-empty responses in fallbackRest.ts
  const emptyMessage = serializer.fromProto3JSON(
    rpc.resolvedResponseType!,
    JSON.parse('{}'),
  );
  const resp = rpc.resolvedResponseType!.toObject(
    emptyMessage!,
    defaultToObjectOptions,
  );
  return resp;
}

/**
 * State recorded by the caller about how a request ended.
 *
 * Passed in rather than inferred from the error, because the error carries no
 * usable evidence of it. Measured against a server that accepts a connection
 * and never replies: node-fetch discards `signal.reason` and throws its own
 * AbortError, gaxios wraps that in a GaxiosError which never sets `name` (so it
 * stays the inherited 'Error') and only copies `code` from a DOMException
 * cause, which this is not. A cancel and an expired deadline therefore arrive
 * here byte-identical — `name: 'Error'`, `code: undefined`, `cause.name:
 * 'AbortError'` for both. Only the caller, which armed the timer, knows which
 * one happened.
 */
interface CallOutcome {
  /** Whether the deadline armed for this call fired. */
  timedOut: boolean;
  /** Whether the caller invoked `cancel()`. */
  cancelRequested: boolean;
  /** Method name, for the deadline message. */
  rpcName: string;
  /** The deadline that was armed, for the deadline message. */
  timeoutMs?: number;
}

/**
 * Translates an error thrown by the underlying fetch implementation into a
 * {@link GoogleError} carrying a numeric gRPC status code.
 *
 * Retry logic (see `normalCalls/retries.ts`) and user code both match on
 * numeric gRPC status codes. An untranslated error from `auth.fetch()` carries
 * either a system error string (e.g. `'ECONNRESET'` for a socket hang up) or an
 * HTTP status number, so it never matches a retry code and is silently treated
 * as a permanent failure.
 *
 * An error carrying an HTTP status maps through `rpcCodeFromHttpStatusCode`.
 * Otherwise the call failed before producing a response, which is reported as
 * UNAVAILABLE, except for an explicit cancellation (CANCELLED) or an elapsed
 * deadline (DEADLINE_EXCEEDED).
 *
 * @param err The error thrown by `auth.fetch()`.
 * @param outcome What the caller recorded about how the call ended.
 * @returns A GoogleError with a numeric `code`, or the original value if it is
 *   not an Error.
 */
function _toGoogleError(err: unknown, outcome: CallOutcome): unknown {
  if (err instanceof GoogleError) {
    return err;
  }
  if (!(err instanceof Error)) {
    return err;
  }

  const error = new GoogleError(err.message);
  error.cause = err;

  // `GaxiosError` shape, described structurally to avoid depending on the
  // error instance originating from any particular copy of gaxios.
  const fetchError = err as Partial<{
    status: number;
    response: {status?: number};
    code: string | number;
  }>;

  // Errors that carry an HTTP status map through the standard HTTP-to-gRPC
  // table. Checked first: a response arrived, so it outranks the abort
  // bookkeeping below. The received status is also kept as-is, because the
  // table is lossy — it collapses whole ranges — and this is the only place it
  // can be recorded for a 401 or a 403, which `validateStatus` rejects on
  // purpose (see below) and which therefore never reach the decoder.
  const httpStatus =
    typeof fetchError.status === 'number'
      ? fetchError.status
      : fetchError.response?.status;
  if (typeof httpStatus === 'number') {
    error.code = rpcCodeFromHttpStatusCode(httpStatus);
    error.httpStatusCode = httpStatus;
    return error;
  }

  // An explicit cancellation and an elapsed deadline are distinct conditions in
  // gRPC. They are resolved from the state the caller recorded, because — as
  // described on `CallOutcome` — the error itself cannot distinguish them on
  // the node-fetch path gaxios currently takes.
  if (outcome.timedOut) {
    const timedOutError = new GoogleError(
      `Deadline exceeded: ${outcome.rpcName} did not respond within ${outcome.timeoutMs} milliseconds.`,
      {cause: err},
    );
    timedOutError.code = Status.DEADLINE_EXCEEDED;
    return timedOutError;
  }
  if (outcome.cancelRequested) {
    error.code = Status.CANCELLED;
    return error;
  }

  // Retained for the case the recorded state does not cover: a future gaxios on
  // native fetch reports both conditions as a DOMException, where `code` is a
  // numeric DOMException value (20 and 23) rather than a string, so match on
  // `name` as the rest of this file does when it detects cancellation. A string
  // `code` is also accepted, because gaxios normalizes a DOMException's name
  // onto `code`.
  if (err.name === 'AbortError' || fetchError.code === 'AbortError') {
    error.code = Status.CANCELLED;
    return error;
  }
  if (err.name === 'TimeoutError' || fetchError.code === 'TimeoutError') {
    error.code = Status.DEADLINE_EXCEEDED;
    return error;
  }

  // Anything else that rejects here failed before producing a response, which
  // gRPC reports as UNAVAILABLE irrespective of the underlying system error:
  // @grpc/grpc-js defaults transport failures to UNAVAILABLE and only inspects
  // errno to refine an HTTP/2 INTERNAL_ERROR. Enumerating errnos here would
  // classify anything left off the list as non-retryable, so follow gRPC and
  // treat the whole category uniformly. Errors raised while decoding a response
  // are handled nearer the decoder and do not reach this point.
  error.code = Status.UNAVAILABLE;
  return error;
}

export function generateServiceStub(
  rpcs: {[name: string]: protobuf.Method},
  protocol: string,
  servicePath: string,
  servicePort: number,
  auth: GoogleAuth | AuthClient,
  requestEncoder: (
    rpc: protobuf.Method,
    protocol: string,
    servicePath: string,
    servicePort: number,
    request: {},
    numericEnums: boolean,
    minifyJson: boolean,
  ) => FetchParameters,
  responseDecoder: (
    rpc: protobuf.Method,
    ok: boolean,
    response: Buffer | ArrayBuffer,
    httpStatusCode?: number,
  ) => {},
  numericEnums: boolean,
  minifyJson: boolean,
) {
  const serviceStub: FallbackServiceStub = {
    // close method should close all cancel controllers. If this feature request in the future, we can have a cancelControllerFactory that tracks created cancel controllers, and abort them all in close method.
    close: () => {
      return {cancel: () => {}};
    },
  };
  for (const [rpcName, rpc] of Object.entries(rpcs)) {
    // Named for what gax actually passes, which is its `UnaryCall` order:
    // (request, metadata, options, callback). `FallbackServiceStub` declares
    // the middle two the other way round, so the third argument — the one gRPC
    // calls `options`, carrying the deadline — reads as metadata there and was
    // long ignored as such.
    serviceStub[rpcName] = (
      request: {},
      metadata?: {[name: string]: string | string[]},
      callOptions?: {deadline?: Date},
      callback?: Function,
    ) => {
      metadata ??= {};

      // `addTimeoutArg` sets a deadline on every call and `CallSettings.timeout`
      // defaults to 30s, so one is essentially always present. gRPC enforces its
      // own deadline, but nothing here ever read this one, so an endpoint that
      // accepted the connection and then went quiet left the request — and the
      // promise or callback waiting on it — outstanding forever. Convert it to
      // the remaining duration and arm an abort signal with it below.
      //
      // Server-streaming RPCs are deliberately excluded. Their response is
      // long-lived by design and the signal stays armed once the body starts
      // flowing, so forwarding the deadline would abort a healthy stream
      // mid-read. Bounding those is a separate, user-visible change.
      let timeoutMs: number | undefined;
      if (callOptions?.deadline && !rpc.responseStream) {
        // `AbortSignal.timeout` rejects a negative delay with a RangeError, so
        // an already-expired deadline is clamped. Zero is a fine value here: it
        // aborts on the next tick, which is the right answer for a deadline
        // that has already passed.
        const deadlineMs =
          callOptions.deadline instanceof Date
            ? callOptions.deadline.getTime()
            : Number(callOptions.deadline);
        if (Number.isFinite(deadlineMs)) {
          timeoutMs = Math.max(0, Math.trunc(deadlineMs - Date.now()));
        }
      }

      // We cannot use async-await in this function because we need to return the canceller object as soon as possible.
      // Using plain old promises instead.

      let fetchParameters: FetchParameters;
      try {
        fetchParameters = requestEncoder(
          rpc,
          protocol,
          servicePath,
          servicePort,
          request,
          numericEnums,
          minifyJson,
        );
      } catch (err) {
        // we could not encode parameters; pass error to the callback
        // and return a no-op canceler object.
        if (callback) {
          callback(err);
        }
        return {
          cancel() {},
        };
      }

      const cancelController = new AbortController();
      const cancelSignal = cancelController.signal as AbortSignal;
      let cancelRequested = false;

      // Constructed up here, ahead of the request, so that the cancel signal it
      // carries can be composed into the one the request is made with below.
      const streamArrayParser = new StreamArrayParser(rpc);

      // Arm the deadline here rather than handing `timeout` to gaxios, which
      // would build the identical `AbortSignal.timeout` internally. The
      // difference is bookkeeping: both a deadline expiry and a `cancel()`
      // abort the same request and surface the same error, so unless we record
      // which one fired, the handlers below cannot tell them apart.
      let timedOut = false;
      const requestSignals: AbortSignal[] = [cancelSignal];
      if (timeoutMs !== undefined) {
        const timeoutSignal = AbortSignal.timeout(timeoutMs);
        timeoutSignal.addEventListener('abort', () => (timedOut = true), {
          once: true,
        });
        requestSignals.push(timeoutSignal);
      }

      // A server-streaming call is handed the parser itself rather than a
      // canceller object, so `StreamArrayParser.cancel()` is the only way a
      // caller can end one. It has always aborted a controller of its own, but
      // nothing ever listened to it — the request was made with `cancelSignal`
      // above — so a cancel ended the local stream and left the request in
      // flight, and the pipeline then reported the resulting teardown as a
      // spurious 'Premature close' error. Compose the two signals, and record
      // the cancel the way the unary canceller does so that the handlers below
      // recognise it as one.
      if (rpc.responseStream) {
        streamArrayParser.cancelSignal.addEventListener(
          'abort',
          () => (cancelRequested = true),
          {once: true},
        );
        requestSignals.push(streamArrayParser.cancelSignal);
      }

      const requestSignal =
        requestSignals.length === 1
          ? cancelSignal
          : AbortSignal.any(requestSignals);

      const url = fetchParameters.url;
      const headers = new Headers(fetchParameters.headers);
      // gRPC metadata is multi-valued, and `buildMetadata` normalizes every
      // value to an array for exactly that reason. This used to read
      // `metadata[key][0]`, which dropped every value after the first and, for
      // a value that was a plain string rather than an array, sent only its
      // first character. Replace whatever the request encoder set, as the
      // single-value `set` did, then keep all of the values.
      for (const key of Object.keys(metadata)) {
        const value = metadata[key];
        if (Array.isArray(value)) {
          headers.delete(key);
          for (const item of value) {
            headers.append(key, String(item));
          }
        } else {
          headers.set(key, String(value));
        }
      }
      let response204Ok = false;
      const fetchRequest: gaxios.GaxiosOptions = {
        headers: headers,
        body:
          typeof fetchParameters.body === 'string'
            ? fetchParameters.body
            : Buffer.from(fetchParameters.body),
        method: fetchParameters.method,
        signal: requestSignal,
        responseType: 'stream', // ensure gaxios returns the data directly so that it handle data/streams itself
        // Error responses must resolve so that they are decoded below into a
        // GoogleError carrying a gRPC status code. 401 and 403 keep rejecting
        // so that the auth client can refresh credentials and retry.
        //
        // Those two therefore never reach the decoder: they are mapped from the
        // HTTP status alone, so an ErrorInfo or statusDetails payload in a 401
        // or 403 body is not promoted onto the error the way it is for every
        // other failing status.
        validateStatus: (status: number) => status !== 401 && status !== 403,
        agent: agentOption || undefined,
      };

      if (
        fetchParameters.method === 'GET' ||
        fetchParameters.method === 'DELETE'
      ) {
        delete fetchRequest['body'];
      }

      auth
        .fetch(url, fetchRequest)
        .then((response: Response | NodeFetchResponse) => {
          // There is a legacy Apiary configuration that some services
          // use which allows 204 empty responses on success instead of
          // a 200 OK. This most commonly is seen in delete RPCs,
          // but does occasionally show up in other endpoints. We
          // need to allow this behavior so that these clients do not throw an error
          // when the call actually succeeded
          // See b/411675301 for more context
          if (response.status === 204 && response.ok) {
            response204Ok = true;
          }
          if (response.ok && rpc.responseStream) {
            pipeline(
              response.body as PipelineSource<unknown>,
              streamArrayParser,
              (err: unknown) => {
                // A caller that cancelled has already torn this stream down
                // and is not waiting to be told about the consequences. The
                // teardown does not arrive as an AbortError, which is what
                // this used to test for: ending the parser makes `pipeline`
                // destroy the response body and report 'Premature close', an
                // ordinary Error. That check therefore never matched and every
                // cancelled stream emitted a spurious error. Use the recorded
                // state, as the handlers below do.
                if (err && (timedOut || !cancelRequested)) {
                  if (callback) {
                    callback(err);
                  }
                  streamArrayParser.emit('error', err);
                }
              },
            );
            return;
          } else {
            // Captured here because the decoded value below is also named
            // `response` and shadows the fetch response.
            const httpStatusCode = response.status;
            return Promise.all([
              Promise.resolve(response.ok),
              response.arrayBuffer(),
            ])
              .then(([ok, buffer]: [boolean, Buffer | ArrayBuffer]) => {
                const response = responseDecoder(
                  rpc,
                  ok,
                  buffer,
                  httpStatusCode,
                );
                callback!(null, response);
                return;
              })
              .catch((err: Error) => {
                // The deadline can expire after the response headers arrive but
                // before the body is fully read, which rejects here rather than
                // in the outer handler.
                const callErr = _toGoogleError(err, {
                  timedOut,
                  cancelRequested,
                  rpcName,
                  timeoutMs,
                });
                if (rpc.responseStream) {
                  // A caller that cancelled a stream has already torn it down
                  // and stopped listening, so reporting the resulting abort
                  // would surface as an unhandled 'error' event. A deadline is
                  // always reported, because nobody asked for it.
                  //
                  // This used to test `err.name !== 'AbortError'`; gaxios wraps
                  // node-fetch's AbortError and never sets its own `name`,
                  // leaving the inherited 'Error', so the check never matched
                  // and cancelled streams reported an error anyway. Use the
                  // state we recorded.
                  if (timedOut || !cancelRequested) {
                    if (callback) {
                      callback(callErr);
                    }
                    streamArrayParser.emit('error', callErr);
                  }
                  return;
                }

                // A unary call must always be settled, a cancellation included.
                // Once a canceller is registered, `OngoingCall.cancel()` only
                // invokes it and reports nothing itself (see `call.ts`); it is
                // the transport calling back that rejects
                // `OngoingCallPromise.promise` and runs the traced callback
                // that ends the OpenTelemetry span. Staying silent here would
                // leave both outstanding for the lifetime of the process.
                //
                // `_toGoogleError` has already mapped a cancellation that beat
                // the deadline to CANCELLED, which is the status
                // `OngoingCall.cancel()` reports when no canceller is set.
                //
                // This supports a legacy Apiary behavior that allows
                // empty 204 responses. If we do not intercept this potential error
                // from decodeResponse in fallbackRest
                // it will cause libraries to erroneously throw an
                // error when the call succeeded. This error cannot be checked in
                // fallbackRest.ts because decodeResponse does not have the necessary
                // context about the response to validate the status code + ok-ness
                if (!response204Ok) {
                  // by this point, we're guaranteed to have added a callback
                  // it is added in the library before calling this.innerApiCalls
                  callback!(callErr);
                } else {
                  const resp = _formatEmptyResponse(rpc);
                  // by this point, we're guaranteed to have added a callback
                  // it is added in the library before calling this.innerApiCalls
                  callback!(null, resp);
                }
              });
          }
        })
        .catch((rawErr: unknown) => {
          // The usual failure path: the request rejected before any response
          // was received — an expired deadline, a cancellation, or a transport
          // error — so it is translated to a gRPC status here.
          const err = _toGoogleError(rawErr, {
            timedOut,
            cancelRequested,
            rpcName,
            timeoutMs,
          });
          if (rpc.responseStream) {
            // Now that a stream cancel aborts the request, this handler is
            // where that abort lands when it happens before any response
            // arrives. Same reasoning as the two handlers above: the caller
            // ended the stream, so it does not need the abort reported, and
            // emitting here would raise an unhandled 'error' on a stream
            // nobody is listening to any more.
            if (timedOut || !cancelRequested) {
              if (callback) {
                callback(err);
              }
              streamArrayParser.emit('error', err);
            }
          } else if (callback) {
            callback(err);
          } else {
            throw err;
          }
        });

      if (rpc.responseStream) {
        return streamArrayParser;
      }
      return {
        cancel: () => {
          cancelRequested = true;
          cancelController.abort();
        },
      };
    };
  }

  return serviceStub;
}
