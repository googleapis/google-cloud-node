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

import type {Response as NodeFetchResponse} from 'node-fetch' with {'resolution-mode': 'import'};

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
  | ((parsedUrl: {protocol: string}) => HttpAgent | HttpsAgent)
  | null = null;
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
  // Compatible with gRPC service stub, so the argument order is gax's
  // `UnaryCall`: (request, metadata, options, callback). Note that the third
  // argument is what gRPC calls `options`, and it is the one carrying the
  // deadline; the second is the metadata that becomes request headers.
  [method: string]: (
    request: {},
    metadata?: {},
    callOptions?: {deadline?: Date},
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
 * Translates a timed-out request into the error the rest of gax expects.
 *
 * When the forwarded deadline expires, gaxios aborts the request with a
 * DOMException named 'TimeoutError' and republishes that name as
 * `GaxiosError.code`. Nothing downstream understands that shape: `retryCodes`
 * matching, caller `err.code` comparisons and telemetry's `error.type` all key
 * off the numeric gRPC status. gRPC reports this exact condition as
 * DEADLINE_EXCEEDED, so report it identically here instead of leaking a
 * transport-specific error for a failure both transports share.
 *
 * Everything else is returned untouched, including the 'AbortError' raised by
 * `cancel()`, and no translation happens at all when no deadline was forwarded,
 * so this never claims a deadline was exceeded when none was set.
 */
function toDeadlineExceeded(
  err: unknown,
  rpcName: string,
  timeoutMs?: number,
): unknown {
  if (timeoutMs === undefined) {
    return err;
  }
  const name = err instanceof Error ? err.name : undefined;
  const code = (err as {code?: unknown} | null | undefined)?.code;
  if (name !== 'TimeoutError' && code !== 'TimeoutError') {
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
    serviceStub[rpcName] = (
      request: {},
      metadata?: {[name: string]: string},
      callOptions?: {deadline?: Date},
      callback?: Function,
    ) => {
      metadata ??= {};

      // `addTimeoutArg` sets a deadline on every call and `CallSettings.timeout`
      // defaults to 30s, so one is essentially always present. gRPC enforces its
      // own deadline, but nothing here ever read this one, so an endpoint that
      // accepted the connection and then went quiet left the request — and the
      // promise or callback waiting on it — outstanding forever. Convert it to
      // the remaining duration for gaxios, which arms an `AbortSignal.timeout`
      // and merges it with the cancel signal below.
      //
      // Server-streaming RPCs are deliberately excluded. Their response is
      // long-lived by design and the signal stays armed once the body starts
      // flowing, so forwarding the deadline would abort a healthy stream
      // mid-read. Bounding those is a separate, user-visible change.
      let timeoutMs: number | undefined;
      if (callOptions?.deadline && !rpc.responseStream) {
        // gaxios treats `timeout: 0` as "no timeout", so an already-expired
        // deadline must not round down to zero and disable the very thing it
        // asked for. Such a request is aborted almost immediately instead.
        timeoutMs = Math.max(1, callOptions.deadline.getTime() - Date.now());
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
      const url = fetchParameters.url;
      const headers = new Headers(fetchParameters.headers);
      for (const key of Object.keys(metadata)) {
        headers.set(key, metadata[key][0]);
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
        signal: cancelSignal,
        responseType: 'stream', // ensure gaxios returns the data directly so that it handle data/streams itself
        agent: agentOption || undefined,
        ...(timeoutMs !== undefined && {timeout: timeoutMs}),
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
              })
              .catch((err: Error) => {
                // The deadline can expire after the response headers arrive but
                // before the body is fully read, which rejects here rather than
                // in the outer handler. `err` itself is kept for the cancel
                // check below, since only the reported error should change.
                const callErr = toDeadlineExceeded(err, rpcName, timeoutMs);
                if (!cancelRequested || err.name !== 'AbortError') {
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
          const err = toDeadlineExceeded(rawErr, rpcName, timeoutMs);
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
