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

class StaticChannelLease implements ChannelLease {
  private isReleased = false;

  constructor(readonly entry: ChannelEntry) {}

  release(): void {
    if (!this.isReleased) {
      this.isReleased = true;
      if (this.entry.inFlightRpcs > 0) {
        this.entry.inFlightRpcs--;
      }
    }
  }
}

/**
 * Fixed-size channel pool that allocates N channels on startup and uses P2C selection.
 * Operates with zero background timers and predictable resource usage.
 */
export class StaticChannelPool implements ChannelPool {
  private readonly entries: ChannelEntry[];
  private readonly target: string;
  private isClosed = false;

  constructor(
    target: string,
    credentials: grpc.ChannelCredentials,
    channelOptions: Record<string, any>,
    options?: StaticChannelPoolOptions,
  ) {
    this.target = target;
    const rawNumChannels = options?.numChannels;
    let count: number;
    if (typeof rawNumChannels === 'number' && !Number.isNaN(rawNumChannels)) {
      count = Math.max(1, rawNumChannels);
    } else if (process.env.SPANNER_NUM_CHANNELS) {
      const parsed = parseInt(process.env.SPANNER_NUM_CHANNELS, 10);
      count = !Number.isNaN(parsed) && parsed > 0 ? parsed : 4;
    } else {
      count = 4;
    }

    this.entries = [];
    for (let index = 0; index < count; index++) {
      const entryChannelOptions = Object.assign({}, channelOptions, {
        'grpc.channel_id': index + 1,
        'grpc_gcp.client_channel.id': index + 1,
      });
      const channel = new grpc.Channel(
        target,
        credentials,
        entryChannelOptions,
      );
      const now = Date.now();
      this.entries.push({
        id: index + 1,
        channel,
        inFlightRpcs: 0,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: now,
        createdAt: now,
      });
    }
  }

  acquire(affinity?: TransactionAffinity): ChannelLease {
    if (this.isClosed) {
      throw new Error('Channel pool is closed.');
    }

    let entry: ChannelEntry;

    if (affinity?.pinnedEntry && affinity.pinnedEntry.state === 'ACTIVE') {
      entry = affinity.pinnedEntry;
    } else {
      if (affinity?.pinnedEntry && affinity.kind === AffinityKind.ReadWrite) {
        if (affinity.pinnedEntry.activeRwTransactions > 0) {
          affinity.pinnedEntry.activeRwTransactions--;
        }
      }
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

    return new StaticChannelLease(entry);
  }

  get size(): number {
    return this.entries.length;
  }

  get activeCount(): number {
    return this.entries.length;
  }

  getTarget(): string {
    return this.target;
  }

  getChannels(): grpc.Channel[] {
    return this.entries.map(entry => entry.channel);
  }

  get totalInFlight(): number {
    return this.entries.reduce((sum, entry) => sum + entry.inFlightRpcs, 0);
  }

  get totalActiveRw(): number {
    return this.entries.reduce(
      (sum, entry) => sum + entry.activeRwTransactions,
      0,
    );
  }

  get entriesList(): ChannelEntry[] {
    return [...this.entries];
  }

  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState {
    if (this.isClosed || this.entries.length === 0) {
      return grpc.connectivityState.SHUTDOWN;
    }

    let hasReady = false;
    let hasConnecting = false;
    let hasTransientFailure = false;

    for (const entry of this.entries) {
      const state = entry.channel.getConnectivityState(tryToConnect ?? false);
      if (state === grpc.connectivityState.READY) {
        hasReady = true;
      } else if (state === grpc.connectivityState.CONNECTING) {
        hasConnecting = true;
      } else if (state === grpc.connectivityState.TRANSIENT_FAILURE) {
        hasTransientFailure = true;
      }
    }

    if (hasReady) {
      return grpc.connectivityState.READY;
    }
    if (hasConnecting) {
      return grpc.connectivityState.CONNECTING;
    }
    if (hasTransientFailure) {
      return grpc.connectivityState.TRANSIENT_FAILURE;
    }
    return grpc.connectivityState.IDLE;
  }

  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void,
  ): void {
    if (this.entries.length === 0) {
      process.nextTick(() => callback(new Error('No channels in pool.')));
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
    this.isClosed = true;
    for (const entry of this.entries) {
      entry.state = 'CLOSED';
      entry.channel.close();
    }
    this.entries.length = 0;
  }
}
