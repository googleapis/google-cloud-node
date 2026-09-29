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
import {StaticChannelPool} from './static-pool';
import {DynamicChannelPool} from './dynamic-pool';
import {ChannelPool, ChannelPoolConfig} from './types';

export * from './types';
export * from './affinity';
export * from './p2c';
export * from './static-pool';
export * from './dynamic-pool';
export * from './transformer';
export * from './channel-adapter';

/**
 * Creates a ChannelPool instance based on user configuration.
 */
export function createChannelPool(
  address: string,
  credentials: grpc.ChannelCredentials,
  channelOptions: Record<string, any>,
  config?: ChannelPoolConfig,
): ChannelPool {
  if (config?.type === 'dynamic') {
    return new DynamicChannelPool(address, credentials, channelOptions, config);
  }
  return new StaticChannelPool(address, credentials, channelOptions, config);
}

/**
 * Type guard to check if an object implements ChannelPool.
 */
export function isChannelPool(obj: any): obj is ChannelPool {
  return Boolean(
    obj &&
    typeof obj === 'object' &&
    typeof obj.acquire === 'function' &&
    typeof obj.close === 'function',
  );
}
