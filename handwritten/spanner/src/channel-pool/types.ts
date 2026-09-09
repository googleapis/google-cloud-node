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

/**
 * State of a channel entry within the channel pool.
 */
export type ChannelState = 'ACTIVE' | 'DRAINING' | 'CLOSED';

/**
 * Represents a single gRPC channel within the channel pool.
 */
export interface ChannelEntry {
  /** 1-based logical channel identifier (used for request IDs). */
  readonly id: number;
  /** Physical gRPC channel. */
  readonly channel: grpc.Channel;
  /** Number of currently in-flight RPCs on this channel. */
  inFlightRpcs: number;
  /** Number of active Read/Write transactions pinned to this channel. */
  activeRwTransactions: number;
  /** Current state of the channel. */
  state: ChannelState;
  /** Timestamp (epoch milliseconds) of the most recent activity. */
  lastActivity: number;
}

/**
 * Lease returned upon acquiring a channel from the pool.
 */
export interface ChannelLease {
  /** The leased channel entry. */
  readonly entry: ChannelEntry;
  /** Releases the in-flight lease when the RPC completes or is cancelled. */
  release(): void;
}

/**
 * Generic interface for a Spanner gRPC channel pool.
 */
export interface ChannelPool {
  /**
   * Acquires a channel from the pool.
   * If an affinity handle is provided and already pinned, routes to the pinned channel.
   * Otherwise, selects an active channel via Power of Two Choices (P2C).
   */
  acquire(affinity?: TransactionAffinity): ChannelLease;

  /** Total number of channels currently tracked (active + draining). */
  readonly size: number;

  /** Number of active channels available for new selections. */
  readonly activeCount: number;

  /** Closes all physical channels in the pool and shuts down background monitors. */
  close(): Promise<void>;

  /** Gets the overall connectivity state of the pool. */
  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState;

  /** Watches for connectivity state changes across the pool. */
  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void,
  ): void;

  /** Returns the target address of the channel pool. */
  getTarget(): string;

  /**
   * Sets or updates the active multiplexed session name used for channel priming.
   */
  setPrimeSession?(sessionName: string): void;
}

/**
 * Configuration options for StaticChannelPool.
 */
export interface StaticChannelPoolOptions {
  /** Number of channels to maintain in the pool. Defaults to 4. */
  numChannels?: number;
}

/**
 * Configuration options for DynamicChannelPool.
 */
export interface DynamicChannelPoolOptions {
  /** Minimum number of channels to retain in the pool. Defaults to 4. */
  minChannels?: number;
  /** Maximum number of channels allowed. Defaults to 10. */
  maxChannels?: number;
  /** Load threshold per channel (in-flight RPCs) to trigger scale-up. Defaults to 25. */
  maxRpcPerChannel?: number;
  /** Low-load threshold per channel used for scale-down checks. Defaults to 10. */
  minRpcPerChannel?: number;
  /** Interval in milliseconds between periodic scale-down evaluations. Defaults to 60,000 (1 min). */
  scaleDownIntervalMs?: number;
  /** Cooldown in milliseconds between consecutive scale-up attempts. Defaults to 500ms. */
  scaleUpCooldownMs?: number;
  /** Timeout in milliseconds for channel priming queries. Defaults to 5,000ms. */
  primeTimeoutMs?: number;
  /** Optional custom priming callback executing SELECT 1 on newly dialed channels. */
  primeFn?: (channel: grpc.Channel, sessionName: string) => Promise<void>;
}

/**
 * Union configuration type accepted in Spanner options.
 */
export type ChannelPoolConfig =
  | ({type: 'static'} & StaticChannelPoolOptions)
  | ({type: 'dynamic'} & DynamicChannelPoolOptions);
