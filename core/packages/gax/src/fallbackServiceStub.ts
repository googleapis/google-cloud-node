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
import {Status} from './status';
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
 * Reports an expired deadline the way the rest of gax expects.
 *
 * `retryCodes` matching, caller `err.code` comparisons and telemetry's
 * `error.type` all key off the numeric gRPC status, and gRPC reports this
 * condition as DEADLINE_EXCEEDED, so a REST deadline is surfaced identically
 * rather than leaking a transport-specific error for a failure both transports
 * share. The original error is kept as `cause`.
 *
 * Whether the deadline expired is passed in rather than inferred from `err`,
 * because the error carries no usable evidence of it. Measured against a server
 * that accepts a connection and never replies: node-fetch discards
 * `signal.reason` and throws its own AbortError, gaxios wraps that in a
 * GaxiosError which never sets `name` (so it stays the inherited 'Error') and
 * only copies `code` from a DOMException cause, which this is not. The result
 * is `name: 'Error'`, `code: undefined` — byte-identical to what `cancel()`
 * produces. Only the caller, which armed the timer, knows which happened.
 */
function toDeadlineExceeded(
  err: unknown,
  rpcName: string,
  timeoutMs: number | undefined,
  timedOut: boolean,
): unknown {
  if (!timedOut || timeoutMs === undefined) {
    return err;
  }
  const error = new GoogleError(
    `Deadline exceeded: ${rpcName} did not respond within ${timeoutMs} milliseconds.`,
    {cause: err},
  );
  error.code = Status.DEADLINE_EXCEEDED;
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
        timeoutMs = Math.max(0, callOptions.deadline.getTime() - Date.now());
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

      // Arm the deadline here rather than handing `timeout` to gaxios, which
      // would build the identical `AbortSignal.timeout` internally. The
      // difference is bookkeeping: both a deadline expiry and a `cancel()`
      // abort the same request and surface the same error, so unless we record
      // which one fired, the handlers below cannot tell them apart.
      let timedOut = false;
      let requestSignal = cancelSignal;
      if (timeoutMs !== undefined) {
        const timeoutSignal = AbortSignal.timeout(timeoutMs);
        timeoutSignal.addEventListener('abort', () => (timedOut = true), {
          once: true,
        });
        requestSignal = AbortSignal.any([cancelSignal, timeoutSignal]);
      }

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
      const streamArrayParser = new StreamArrayParser(rpc);
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
                if (
                  err &&
                  (!cancelRequested ||
                    (err instanceof Error && err.name !== 'AbortError'))
                ) {
                  if (callback) {
                    callback(err);
                  }
                  streamArrayParser.emit('error', err);
                }
              },
            );
            return;
          } else {
            return Promise.all([
              Promise.resolve(response.ok),
              response.arrayBuffer(),
            ])
              .then(([ok, buffer]: [boolean, Buffer | ArrayBuffer]) => {
                const response = responseDecoder(rpc, ok, buffer);
                callback!(null, response);
                return;
              })
              .catch((err: Error) => {
                // The deadline can expire after the response headers arrive but
                // before the body is fully read, which rejects here rather than
                // in the outer handler.
                const callErr = toDeadlineExceeded(
                  err,
                  rpcName,
                  timeoutMs,
                  timedOut,
                );
                // A caller that cancelled does not need the resulting abort
                // reported back to it, but a deadline always does. This used to
                // test `err.name !== 'AbortError'`; gaxios wraps node-fetch's
                // AbortError and never sets its own `name`, leaving the
                // inherited 'Error', so the check never matched and cancelled
                // calls still reported an error. Use the state we recorded.
                if (timedOut || !cancelRequested) {
                  if (rpc.responseStream) {
                    if (callback) {
                      callback(callErr);
                    }
                    streamArrayParser.emit('error', callErr);
                  } else {
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
                  }
                }
              });
          }
        })
        .catch((rawErr: unknown) => {
          // The usual timeout path: the deadline expired before any response
          // was received, so the fetch itself rejects.
          const err = toDeadlineExceeded(rawErr, rpcName, timeoutMs, timedOut);
          if (rpc.responseStream) {
            if (callback) {
              callback(err);
            }
            streamArrayParser.emit('error', err);
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
