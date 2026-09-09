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
import {ChannelPool} from './types';

/**
 * Creates a gRPC CallInvocationTransformer that routes calls through a Spanner ChannelPool.
 *
 * @param pool The ChannelPool instance or a resolver returning the active ChannelPool.
 * @returns A gRPC CallInvocationTransformer function.
 */
export function createCallInvocationTransformer(
  poolOrResolver: ChannelPool | (() => ChannelPool | undefined),
) {
  return function spannerCallInvocationTransformer(
    callProperties: grpc.CallProperties<any, any>,
  ): grpc.CallProperties<any, any> {
    const pool =
      typeof poolOrResolver === 'function' ? poolOrResolver() : poolOrResolver;

    if (!pool) {
      return callProperties;
    }

    const affinity: TransactionAffinity | undefined =
      (callProperties.callOptions as any)?.affinity ??
      (callProperties.callOptions as any)?.otherArgs?.options?.affinity;
    const lease = pool.acquire(affinity);

    // Update logical channel ID in Spanner Request ID header if present
    if (callProperties.metadata) {
      const existing = callProperties.metadata.get('x-goog-spanner-request-id');
      if (existing.length > 0 && typeof existing[0] === 'string') {
        const parts = existing[0].split('.');
        if (parts.length >= 6) {
          parts[3] = String(lease.entry.id);
          callProperties.metadata.set(
            'x-goog-spanner-request-id',
            parts.join('.'),
          );
        } else {
          callProperties.metadata.set(
            'x-goog-spanner-request-id',
            `${existing[0]}.${lease.entry.id}`,
          );
        }
      }
    }

    const releaseInterceptor: grpc.Interceptor = (options, nextCall) => {
      let released = false;
      const releaseOnce = () => {
        if (!released) {
          released = true;
          lease.release();
        }
      };

      const requester: grpc.Requester = {
        start: (metadata, listener, next) => {
          const newListener: grpc.Listener = {
            onReceiveMetadata: (meta, nextMeta) => {
              nextMeta(meta);
            },
            onReceiveMessage: (message, nextMessage) => {
              nextMessage(message);
            },
            onReceiveStatus: (status, nextStatus) => {
              releaseOnce();
              nextStatus(status);
            },
          };
          next(metadata, newListener);
        },
        sendMessage: (message, next) => {
          next(message);
        },
        halfClose: next => {
          next();
        },
        cancel: next => {
          releaseOnce();
          next();
        },
      };

      return new grpc.InterceptingCall(nextCall(options), requester);
    };

    const callOptions = Object.assign({}, callProperties.callOptions);
    callOptions.interceptors = (callOptions.interceptors || []).concat([
      releaseInterceptor,
    ]);

    return {
      argument: callProperties.argument,
      metadata: callProperties.metadata,
      call: callProperties.call,
      channel: lease.entry.channel,
      methodDefinition: callProperties.methodDefinition,
      callOptions,
      callback: callProperties.callback,
    };
  };
}
