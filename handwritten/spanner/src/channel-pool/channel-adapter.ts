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
import {ChannelPool} from './types';

/**
 * Adapter that presents a ChannelPool as a grpc.Channel to the gRPC client runtime.
 */
export class ChannelPoolChannelAdapter implements grpc.ChannelInterface {
  constructor(readonly pool: ChannelPool) {}

  close(): void {
    // No-op: the underlying ChannelPool lifecycle is managed by its owner
    // (e.g. Spanner or caller), not by individual client stubs using this adapter.
  }

  getTarget(): string {
    return this.pool.getTarget();
  }

  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState {
    return this.pool.getConnectivityState(tryToConnect);
  }

  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void,
  ): void {
    this.pool.watchConnectivityState(currentState, deadline, callback);
  }

  getChannelzRef(): any {
    return null;
  }

  get channelRefs(): Array<{channel: grpc.Channel}> {
    return this.pool.getChannels().map(channel => ({channel}));
  }

  get totalInFlight(): number | undefined {
    return this.pool.totalInFlight;
  }

  get totalActiveRw(): number | undefined {
    return this.pool.totalActiveRw;
  }

  createCall(
    method: string,
    deadline: grpc.Deadline,
    host?: string | null,
    parentCall?: any,
    propagateFlags?: number | null,
  ): any {
    // Fallback if call is initiated outside of callInvocationTransformer
    const lease = this.pool.acquire();
    let released = false;
    const releaseOnce = () => {
      if (!released) {
        released = true;
        lease.release();
      }
    };
    let call: any;
    try {
      call = (lease.entry.channel as any).createCall(
        method,
        deadline,
        host,
        parentCall,
        propagateFlags,
      );
    } catch (error) {
      releaseOnce();
      throw error;
    }
    return new grpc.InterceptingCall(call, {
      start: (metadata, listener, next) => {
        try {
          next(metadata, {
            onReceiveMetadata: (receivedMetadata, nextMetadata) => {
              nextMetadata(receivedMetadata);
            },
            onReceiveMessage: (message, nextMessage) => {
              nextMessage(message);
            },
            onReceiveStatus: (status, nextStatus) => {
              releaseOnce();
              nextStatus(status);
            },
          });
        } catch (error) {
          releaseOnce();
          throw error;
        }
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
    });
  }
}
