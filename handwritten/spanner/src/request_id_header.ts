/**
 * Copyright 2025 Google LLC. All Rights Reserved.
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

import {randomBytes} from 'crypto';
// eslint-disable-next-line n/no-extraneous-import
import * as grpc from '@grpc/grpc-js';
import {getActiveOrNoopSpan} from './instrument';
const randIdForProcess = randomBytes(8).toString('hex');
const REQUEST_HEADER_VERSION = 1;

function getProcessId(): string {
  return (
    process.env.SPANNER_PROCESS_ID ||
    process.env.GOOGLE_CLOUD_SPANNER_PROCESS_ID ||
    randIdForProcess
  );
}
const X_GOOG_SPANNER_REQUEST_ID_HEADER = 'x-goog-spanner-request-id';

class AtomicCounter {
  private readonly backingBuffer: Uint32Array;

  constructor(initialValue?: number) {
    this.backingBuffer = new Uint32Array(
      new SharedArrayBuffer(Uint32Array.BYTES_PER_ELEMENT),
    );
    if (initialValue) {
      this.increment(initialValue);
    }
  }

  public increment(n?: number): number {
    if (!n) {
      n = 1;
    }
    Atomics.add(this.backingBuffer, 0, n);
    return this.value();
  }

  public value(): number {
    return Atomics.load(this.backingBuffer, 0);
  }

  public toString(): string {
    return `${this.value()}`;
  }

  public reset() {
    Atomics.store(this.backingBuffer, 0, 0);
  }
}

function craftRequestId(
  nthClientId: number,
  channelId: number,
  nthRequest: number,
  attempt: number,
) {
  return `${REQUEST_HEADER_VERSION}.${getProcessId()}.${nthClientId}.${channelId}.${nthRequest}.${attempt}`;
}

const nthClientId = new AtomicCounter();

// Only exported for deterministic testing.
export function resetNthClientId() {
  nthClientId.reset();
}

/*
 * nextSpannerClientId increments the internal
 * counter for created SpannerClients, for use
 * with x-goog-spanner-request-id.
 */
function nextSpannerClientId(): number {
  nthClientId.increment(1);
  return nthClientId.value();
}

function newAtomicCounter(n?: number): AtomicCounter {
  return new AtomicCounter(n);
}

interface withHeaders {
  headers: {[k: string]: string};
}

function extractRequestID(config: any): string {
  if (!config) {
    return '';
  }

  const hdrs = config as withHeaders;
  if (hdrs && hdrs.headers) {
    return hdrs.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER];
  }
  return '';
}

function injectRequestIDIntoError(config: any, err: Error) {
  if (!err) {
    return;
  }

  // Inject that RequestID into the actual
  // error object regardless of the type.
  const requestID = extractRequestID(config);
  if (requestID) {
    Object.assign(err, {requestID: requestID});
    if (err.message && !err.message.includes(requestID)) {
      err.message = `${err.message} (x-goog-spanner-request-id: ${requestID})`;
    }
  }
}

function injectRequestIDIntoHeaders(
  headers: {[k: string]: string},
  session: any,
  nthRequest?: number,
  attempt?: number,
) {
  if (!session) {
    return {...headers};
  }
  const actualDatabase =
    session && typeof session._nextNthRequest === 'function'
      ? session
      : session?.parent;
  if (!nthRequest) {
    if (
      !actualDatabase ||
      typeof actualDatabase._nextNthRequest !== 'function'
    ) {
      return {...headers};
    }
    nthRequest = actualDatabase._nextNthRequest();
  }
  const clientId = actualDatabase
    ? actualDatabase._clientId || actualDatabase._nthClientId || 1
    : 1;
  const channelId =
    actualDatabase && actualDatabase._channelId !== undefined
      ? actualDatabase._channelId
      : 0;

  const withReqId = {...headers};
  withReqId[X_GOOG_SPANNER_REQUEST_ID_HEADER] = craftRequestId(
    clientId,
    channelId,
    nthRequest || 1,
    attempt || 1,
  );
  return withReqId;
}

function createRequestIdInterceptor(config: any) {
  let attemptCount = 0;
  return (options: any, nextCall: any) => {
    return new grpc.InterceptingCall(nextCall(options), {
      start: function (metadata: grpc.Metadata, listener: any, next: any) {
        attemptCount++;
        const currentReqIds = metadata.get(X_GOOG_SPANNER_REQUEST_ID_HEADER);
        if (currentReqIds && currentReqIds.length > 0) {
          const currentReqId = String(currentReqIds[0]);
          const lastDot = currentReqId.lastIndexOf('.');
          if (lastDot !== -1) {
            const base = currentReqId.substring(0, lastDot);
            const parsedAttempt = parseInt(
              currentReqId.substring(lastDot + 1),
              10,
            );
            const initialAttempt = isNaN(parsedAttempt) ? 1 : parsedAttempt;
            const newAttempt = initialAttempt + (attemptCount - 1);
            const newReqId = `${base}.${newAttempt}`;
            metadata.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, newReqId);
            if (config && config.headers) {
              config.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER] = newReqId;
            }
          }
        }
        next(metadata, listener);
      },
    });
  };
}

function nextNthRequest(database): number {
  if (database && typeof database._nextNthRequest === 'function') {
    return database._nextNthRequest();
  }
  return 1;
}

export interface RequestIDError extends grpc.ServiceError {
  requestID: string;
}

const X_GOOG_SPANNER_REQUEST_ID_SPAN_ATTR = 'x_goog_spanner_request_id';

/*
 * attributeXGoogSpannerRequestIdToActiveSpan extracts the x-goog-spanner-request-id
 * from config, if possible and then adds it as an attribute to the current/active span.
 * Since x-goog-spanner-request-id is associated with RPC invoking methods, it is invoked
 * long after tracing has been performed.
 */
function attributeXGoogSpannerRequestIdToActiveSpan(config: any) {
  const reqId = extractRequestID(config);
  if (!(reqId && reqId.length > 0)) {
    return;
  }
  const span = getActiveOrNoopSpan();
  span.setAttribute(X_GOOG_SPANNER_REQUEST_ID_SPAN_ATTR, reqId);
}

const X_GOOG_REQ_ID_REGEX = /^1\.[0-9A-Fa-f]{16}(\.\d+){3}\.\d+$/;

export {
  AtomicCounter,
  X_GOOG_REQ_ID_REGEX,
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  X_GOOG_SPANNER_REQUEST_ID_SPAN_ATTR,
  attributeXGoogSpannerRequestIdToActiveSpan,
  craftRequestId,
  createRequestIdInterceptor,
  getProcessId,
  injectRequestIDIntoError,
  injectRequestIDIntoHeaders,
  nextNthRequest,
  nextSpannerClientId,
  newAtomicCounter,
  randIdForProcess,
};
