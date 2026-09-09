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
    this.pool.close().catch(() => {});
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

  createCall(
    method: string,
    deadline: any,
    host: any,
    parentCall: any,
    propagateFlags: any,
  ): any {
    // Fallback if call is initiated outside of callInvocationTransformer
    const lease = this.pool.acquire();
    return (lease.entry.channel as any).createCall(
      method,
      deadline,
      host,
      parentCall,
      propagateFlags,
    );
  }
}
