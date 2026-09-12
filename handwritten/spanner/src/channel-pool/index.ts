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

export {AffinityKind, TransactionAffinity} from './affinity';

export {
  ChannelPoolOptions,
  DEFAULT_CHANNEL_POOL_OPTIONS,
  MAX_SUPPORTED_CHANNELS,
  normalizeChannelPoolOptions,
} from './config';

export {
  ChannelEntry,
  ChannelState,
  SPANNER_RW_TRANSACTION_IDLE_TIMEOUT_MS,
} from './entry';

export {
  ChannelFactory,
  ChannelPool,
  ChannelPoolHolder,
  callInvocationTransformer,
  channelFactoryOverride,
} from './pool';

export {
  ScaleDownEvaluationResult,
  SweepDrainingResult,
  allocateSlot,
  calculateScaleUpCount,
  calculateTargetRpcPerChannel,
  dialAndPrimeChannel,
  evaluateScaleDown,
  executeSelectOne,
  sweepDrainingChannels,
} from './scaler';
