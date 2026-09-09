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
import {AffinityKind, TransactionAffinity} from './affinity';
import {selectPowerOfTwo} from './p2c';
import {
  ChannelEntry,
  ChannelLease,
  ChannelPool,
  StaticChannelPoolOptions,
} from './types';

/**
 * Fixed-size channel pool that allocates N channels on startup and uses P2C selection.
 * Operates with zero background timers and predictable resource usage.
 */
export class StaticChannelPool implements ChannelPool {
  private readonly entries: ChannelEntry[];

  constructor(
    target: string,
    credentials: grpc.ChannelCredentials,
    channelOptions: Record<string, any>,
    options?: StaticChannelPoolOptions,
  ) {
    let count = options?.numChannels ?? 4;
    if (process.env.SPANNER_NUM_CHANNELS) {
      const parsed = parseInt(process.env.SPANNER_NUM_CHANNELS, 10);
      if (parsed > 0) {
        count = parsed;
      }
    }

    this.entries = [];
    for (let index = 0; index < count; index++) {
      const opts = Object.assign({}, channelOptions, {
        'grpc.channel_id': index + 1,
        'grpc_gcp.client_channel.id': index + 1,
      });
      const channel = new grpc.Channel(target, credentials, opts);
      this.entries.push({
        id: index + 1,
        channel,
        inFlightRpcs: 0,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: Date.now(),
      });
    }
  }

  acquire(affinity?: TransactionAffinity): ChannelLease {
    let entry: ChannelEntry;

    if (affinity?.pinnedEntry && affinity.pinnedEntry.state === 'ACTIVE') {
      entry = affinity.pinnedEntry;
    } else {
      entry = selectPowerOfTwo(this.entries);
      if (affinity) {
        affinity.pinnedEntry = entry;
        if (affinity.kind === AffinityKind.ReadWrite) {
          entry.activeRwTransactions++;
        }
      }
    }

    entry.inFlightRpcs++;
    entry.lastActivity = Date.now();

    let released = false;
    return {
      entry,
      release: () => {
        if (!released) {
          released = true;
          entry.inFlightRpcs = Math.max(0, entry.inFlightRpcs - 1);
          entry.lastActivity = Date.now();
        }
      },
    };
  }

  get size(): number {
    return this.entries.length;
  }

  get activeCount(): number {
    return this.entries.length;
  }

  getTarget(): string {
    return this.entries.length > 0 ? this.entries[0].channel.getTarget() : '';
  }

  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState {
    let hasReady = false;
    let hasConnecting = false;

    for (const entry of this.entries) {
      const state = entry.channel.getConnectivityState(tryToConnect ?? false);
      if (state === grpc.connectivityState.READY) {
        hasReady = true;
      } else if (state === grpc.connectivityState.CONNECTING) {
        hasConnecting = true;
      }
    }

    if (hasReady) {
      return grpc.connectivityState.READY;
    }
    if (hasConnecting) {
      return grpc.connectivityState.CONNECTING;
    }
    return grpc.connectivityState.IDLE;
  }

  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void,
  ): void {
    if (this.entries.length === 0) {
      callback(new Error('No channels in pool.'));
      return;
    }
    // Watch connectivity on the first channel as representative
    this.entries[0].channel.watchConnectivityState(
      currentState,
      deadline,
      callback,
    );
  }

  async close(): Promise<void> {
    for (const entry of this.entries) {
      entry.state = 'CLOSED';
      entry.channel.close();
    }
  }
}
