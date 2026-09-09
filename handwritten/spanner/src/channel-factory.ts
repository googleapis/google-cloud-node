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

import {grpc} from 'google-gax';
import grpcGcpModule = require('grpc-gcp');

const grpcGcp = grpcGcpModule(grpc);

export interface ChannelFactoryWithWithoutAffinity {
  _withoutAffinity?: unknown;
}

/**
 * Creates a delegate for GcpChannelFactory that overrides getAffinityConfig
 * to return undefined. This causes grpc-gcp to skip affinity lookups and select
 * a channel using its native stream load balancer (getActiveStreamsCount).
 */
export function createChannelFactoryWithoutAffinity(
  channelFactory: object,
): object {
  const channelFactoryWithoutAffinity = Object.create(channelFactory);
  (
    channelFactoryWithoutAffinity as {getAffinityConfig?: () => undefined}
  ).getAffinityConfig = () => undefined;
  return channelFactoryWithoutAffinity;
}

/**
 * Custom channel factory override that pre-allocates a static delegate
 * without affinity lookup on the factory instance. This avoids any object
 * or closure allocations per request.
 */
export function spannerChannelFactoryOverride(
  address: string,
  credentials: grpc.ChannelCredentials,
  options: object,
) {
  const channelFactory = grpcGcp.gcpChannelFactoryOverride(
    address,
    credentials,
    options,
  );
  if (channelFactory) {
    (channelFactory as ChannelFactoryWithWithoutAffinity)._withoutAffinity =
      createChannelFactoryWithoutAffinity(channelFactory);
  }
  return channelFactory;
}

interface SingleUseTransactionArgument {
  transaction?: {
    singleUse?: unknown;
    single_use?: unknown;
  };
}

/**
 * Intercepts calls before dispatch. For single-use transactions (e.g. single queries),
 * routes through the pre-allocated delegate to distribute across channels in the pool.
 * For read/write and multi-use transactions, uses the standard channel factory so
 * requests adhere to session-to-channel affinity.
 */
export function spannerCallInvocationTransformer<RequestType, ResponseType>(
  callProperties: grpc.CallProperties<RequestType, ResponseType>,
): grpc.CallProperties<RequestType, ResponseType> {
  if (!callProperties) {
    return callProperties;
  }
  const argument = callProperties.argument as
    SingleUseTransactionArgument | undefined;
  if (argument?.transaction?.singleUse || argument?.transaction?.single_use) {
    const channelFactory =
      callProperties.channel as ChannelFactoryWithWithoutAffinity;
    if (channelFactory?._withoutAffinity) {
      callProperties.channel =
        channelFactory._withoutAffinity as typeof callProperties.channel;
    }
  }
  return grpcGcp.gcpCallInvocationTransformer(callProperties);
}
