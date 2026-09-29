/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as grpc from '@grpc/grpc-js';
import {TransactionAffinity} from './affinity';
import {ChannelLease, ChannelPool} from './types';

const CHANNEL_ID_STRINGS: string[] = Array.from({length: 256}, (_, index) =>
  String(index),
);

/**
 * Updates the channel ID component (index 3) of an x-goog-spanner-request-id header.
 * Uses index scan instead of splitting into string arrays to avoid memory allocations.
 */
function updateChannelIdInRequestId(
  requestId: string,
  channelId: number,
): string {
  let dotCount = 0;
  let thirdDotIndex = -1;
  let fourthDotIndex = -1;
  const length = requestId.length;
  for (let index = 0; index < length; index++) {
    if (requestId.charCodeAt(index) === 46 /* '.' */) {
      dotCount++;
      if (dotCount === 3) {
        thirdDotIndex = index;
      } else if (dotCount === 4) {
        fourthDotIndex = index;
        break;
      }
    }
  }
  if (thirdDotIndex !== -1 && fourthDotIndex !== -1) {
    if (
      channelId >= 0 &&
      channelId <= 9 &&
      fourthDotIndex - thirdDotIndex === 2 &&
      requestId.charCodeAt(thirdDotIndex + 1) === 48 + channelId
    ) {
      return requestId;
    }
    const channelIdString =
      channelId >= 0 && channelId < 256
        ? CHANNEL_ID_STRINGS[channelId]
        : String(channelId);
    if (
      requestId.slice(thirdDotIndex + 1, fourthDotIndex) === channelIdString
    ) {
      return requestId;
    }
    return (
      requestId.slice(0, thirdDotIndex + 1) +
      channelIdString +
      requestId.slice(fourthDotIndex)
    );
  }
  return `${requestId}.${channelId}`;
}

/**
 * Creates an interceptor that releases the acquired channel lease on call completion or cancellation.
 * Only implements start and cancel on Requester, and onReceiveStatus on Listener, allowing grpc-js
 * to use default pass-through implementations for all other methods without per-chunk wrapper closures.
 */
function createReleaseInterceptor(lease: ChannelLease): grpc.Interceptor {
  return (options, nextCall) => {
    const requester: grpc.Requester = {
      start: (metadata, listener, next) => {
        try {
          next(metadata, {
            onReceiveStatus: (status, nextStatus) => {
              lease.release();
              nextStatus(status);
            },
          });
        } catch (error) {
          lease.release();
          throw error;
        }
      },
      cancel: next => {
        lease.release();
        next();
      },
    };

    let nextCallResult: ReturnType<typeof nextCall>;
    try {
      nextCallResult = nextCall(options);
    } catch (error) {
      lease.release();
      throw error;
    }
    return new grpc.InterceptingCall(nextCallResult, requester);
  };
}

/**
 * Creates a gRPC CallInvocationTransformer that routes calls through a Spanner ChannelPool.
 *
 * @param pool The ChannelPool instance or a resolver returning the active ChannelPool.
 * @returns A gRPC CallInvocationTransformer function.
 */
export function createCallInvocationTransformer(
  poolOrResolver: ChannelPool | (() => ChannelPool | undefined),
) {
  let resolvedPool: ChannelPool | undefined =
    typeof poolOrResolver === 'function' ? undefined : poolOrResolver;

  return function spannerCallInvocationTransformer(
    callProperties: grpc.CallProperties<any, any>,
  ): grpc.CallProperties<any, any> {
    const pool =
      resolvedPool ??
      (resolvedPool =
        typeof poolOrResolver === 'function'
          ? poolOrResolver()
          : poolOrResolver);

    if (!pool) {
      return callProperties;
    }

    const rawCallOptions = callProperties.callOptions as any;
    const affinity: TransactionAffinity | undefined =
      rawCallOptions?.affinity ?? rawCallOptions?.otherArgs?.options?.affinity;
    const lease = pool.acquire(affinity);

    // Update logical channel ID in Spanner Request ID header if present
    if (callProperties.metadata) {
      const existing = callProperties.metadata.get('x-goog-spanner-request-id');
      if (existing.length > 0 && typeof existing[0] === 'string') {
        const updated = updateChannelIdInRequestId(existing[0], lease.entry.id);
        if (updated !== existing[0]) {
          callProperties.metadata.set('x-goog-spanner-request-id', updated);
        }
      }
    }

    const releaseInterceptor = createReleaseInterceptor(lease);
    const existingInterceptors = callProperties.callOptions?.interceptors;
    const interceptors = existingInterceptors
      ? [...existingInterceptors, releaseInterceptor]
      : [releaseInterceptor];

    if (callProperties.callOptions) {
      callProperties.callOptions = {
        ...callProperties.callOptions,
        interceptors,
      };
    } else {
      callProperties.callOptions = {interceptors};
    }
    callProperties.channel = lease.entry.channel;

    return callProperties;
  };
}
