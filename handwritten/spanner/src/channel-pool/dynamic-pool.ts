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
  DynamicChannelPoolOptions,
} from './types';

/**
 * Dynamic load-based channel pool that scales up under high concurrency
 * and gracefully drains channels during sustained idle periods.
 */
export class DynamicChannelPool implements ChannelPool {
  private readonly activeEntries: ChannelEntry[] = [];
  private readonly drainingEntries: ChannelEntry[] = [];
  private nextId = 1;
  private readonly target: string;
  private readonly credentials: grpc.ChannelCredentials;
  private readonly channelOptions: Record<string, any>;
  private readonly minChannels: number;
  private readonly maxChannels: number;
  private readonly maxRpcPerChannel: number;
  private readonly minRpcPerChannel: number;
  private readonly scaleUpCooldownMs: number;
  private readonly primeTimeoutMs: number;
  private readonly primeFn?: (
    channel: grpc.Channel,
    sessionName: string,
  ) => Promise<void>;

  private scaleDownTimer?: NodeJS.Timeout;
  private consecutiveLowLoadChecks = 0;
  private lastScaleUpTime = 0;
  private isScalingUp = false;
  private primeSessionName?: string;
  private isClosed = false;

  constructor(
    target: string,
    credentials: grpc.ChannelCredentials,
    channelOptions: Record<string, any>,
    options?: DynamicChannelPoolOptions,
  ) {
    this.target = target;
    this.credentials = credentials;
    this.channelOptions = Object.assign({}, channelOptions);

    let initialCount = options?.minChannels ?? 4;
    let maxChannels = options?.maxChannels ?? 10;
    if (process.env.SPANNER_NUM_CHANNELS) {
      const parsed = parseInt(process.env.SPANNER_NUM_CHANNELS, 10);
      if (parsed > 0) {
        initialCount = parsed;
        maxChannels = parsed;
      }
    }

    this.minChannels = initialCount;
    this.maxChannels = Math.max(initialCount, maxChannels);
    this.maxRpcPerChannel = options?.maxRpcPerChannel ?? 25;
    this.minRpcPerChannel = options?.minRpcPerChannel ?? 10;
    this.scaleUpCooldownMs = options?.scaleUpCooldownMs ?? 500;
    this.primeTimeoutMs = options?.primeTimeoutMs ?? 5000;
    this.primeFn = options?.primeFn;

    // Eagerly establish initial startup channels (unprimed, as session does not exist yet)
    for (let index = 0; index < this.minChannels; index++) {
      this.activeEntries.push(this.createEntry());
    }

    const intervalMs = options?.scaleDownIntervalMs ?? 60000;
    if (intervalMs > 0) {
      this.scaleDownTimer = setInterval(() => {
        this.evaluateScaleDown();
      }, intervalMs);
      this.scaleDownTimer.unref();
    }
  }

  /**
   * Sets or updates the active multiplexed session name used for channel priming.
   */
  setPrimeSession(sessionName: string): void {
    this.primeSessionName = sessionName;
  }

  acquire(affinity?: TransactionAffinity): ChannelLease {
    let entry: ChannelEntry;

    if (affinity?.pinnedEntry) {
      // 1. Hard affinity for Read/Write transactions (retains draining channel until commit/abort)
      // or healthy active channel for Read-Only transactions
      if (
        affinity.pinnedEntry.state === 'ACTIVE' ||
        (affinity.pinnedEntry.state === 'DRAINING' &&
          affinity.kind === AffinityKind.ReadWrite)
      ) {
        entry = affinity.pinnedEntry;
      } else {
        // Soft affinity fallback when pinned channel has closed or drained
        entry = selectPowerOfTwo(this.activeEntries);
        affinity.pinnedEntry = entry;
      }
    } else {
      // 2. Unpinned or first statement: P2C selection from active entries
      entry = selectPowerOfTwo(this.activeEntries);
      if (affinity) {
        affinity.pinnedEntry = entry;
        if (affinity.kind === AffinityKind.ReadWrite) {
          entry.activeRwTransactions++;
        }
      }
    }

    entry.inFlightRpcs++;
    entry.lastActivity = Date.now();

    // 3. Event-driven scale-up check
    if (entry.inFlightRpcs > this.maxRpcPerChannel) {
      this.maybeScaleUp();
    }

    let released = false;
    return {
      entry,
      release: () => {
        if (!released) {
          released = true;
          entry.inFlightRpcs = Math.max(0, entry.inFlightRpcs - 1);
          entry.lastActivity = Date.now();
          if (entry.state === 'DRAINING') {
            this.checkDrainedEntry(entry);
          }
        }
      },
    };
  }

  get size(): number {
    return this.activeEntries.length + this.drainingEntries.length;
  }

  get activeCount(): number {
    return this.activeEntries.length;
  }

  getTarget(): string {
    return this.target;
  }

  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState {
    let hasReady = false;
    let hasConnecting = false;

    for (const entry of this.activeEntries) {
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
    if (this.activeEntries.length === 0) {
      callback(new Error('No channels in pool.'));
      return;
    }
    this.activeEntries[0].channel.watchConnectivityState(
      currentState,
      deadline,
      callback,
    );
  }

  async close(): Promise<void> {
    this.isClosed = true;
    if (this.scaleDownTimer) {
      clearInterval(this.scaleDownTimer);
    }
    for (const entry of this.activeEntries) {
      entry.state = 'CLOSED';
      entry.channel.close();
    }
    for (const entry of this.drainingEntries) {
      entry.state = 'CLOSED';
      entry.channel.close();
    }
    this.activeEntries.length = 0;
    this.drainingEntries.length = 0;
  }

  private createEntry(): ChannelEntry {
    const id = this.nextId++;
    const opts = Object.assign({}, this.channelOptions, {
      'grpc.channel_id': id,
      'grpc_gcp.client_channel.id': id,
    });
    const channel = new grpc.Channel(this.target, this.credentials, opts);
    return {
      id,
      channel,
      inFlightRpcs: 0,
      activeRwTransactions: 0,
      state: 'ACTIVE',
      lastActivity: Date.now(),
    };
  }

  private maybeScaleUp(): void {
    if (
      this.isClosed ||
      this.isScalingUp ||
      this.activeEntries.length >= this.maxChannels
    ) {
      return;
    }

    const now = Date.now();
    if (now - this.lastScaleUpTime < this.scaleUpCooldownMs) {
      return;
    }
    this.lastScaleUpTime = now;
    this.isScalingUp = true;

    setImmediate(async () => {
      let newEntry: ChannelEntry | null = null;
      try {
        if (this.activeEntries.length < this.maxChannels && !this.isClosed) {
          newEntry = this.createEntry();
          // Prime channel with SELECT 1 before publishing to active pool
          await this.primeChannel(newEntry);
          if (!this.isClosed) {
            this.activeEntries.push(newEntry);
          } else {
            newEntry.state = 'CLOSED';
            newEntry.channel.close();
          }
        }
      } catch (err) {
        // If priming fails, discard and close the channel without publishing it
        if (newEntry) {
          newEntry.state = 'CLOSED';
          newEntry.channel.close();
        }
      } finally {
        this.isScalingUp = false;
      }
    });
  }

  private async primeChannel(entry: ChannelEntry): Promise<void> {
    if (!this.primeSessionName || !this.primeFn) {
      return;
    }
    const primePromise = this.primeFn(entry.channel, this.primeSessionName);
    let timer: NodeJS.Timeout;
    const timeoutPromise = new Promise<never>((_resolve, reject) => {
      timer = setTimeout(() => {
        reject(new Error('Channel priming timed out.'));
      }, this.primeTimeoutMs);
      timer.unref();
    });

    try {
      await Promise.race([primePromise, timeoutPromise]);
    } finally {
      clearTimeout(timer!);
    }
  }

  private evaluateScaleDown(): void {
    if (this.isClosed || this.activeEntries.length <= this.minChannels) {
      this.consecutiveLowLoadChecks = 0;
      return;
    }

    let totalLoad = 0;
    for (const entry of this.activeEntries) {
      totalLoad += entry.inFlightRpcs + entry.activeRwTransactions;
    }
    const averageLoad = totalLoad / this.activeEntries.length;

    if (averageLoad < this.minRpcPerChannel) {
      this.consecutiveLowLoadChecks++;
      if (this.consecutiveLowLoadChecks >= 3) {
        this.consecutiveLowLoadChecks = 0;
        this.drainOneChannel();
      }
    } else {
      this.consecutiveLowLoadChecks = 0;
    }
  }

  private drainOneChannel(): void {
    if (this.activeEntries.length <= this.minChannels) {
      return;
    }

    // Find the active entry with the lowest load
    let lowestIndex = 0;
    let lowestLoad = Infinity;

    for (let i = 0; i < this.activeEntries.length; i++) {
      const entry = this.activeEntries[i];
      const load = entry.inFlightRpcs + entry.activeRwTransactions;
      if (load < lowestLoad) {
        lowestLoad = load;
        lowestIndex = i;
      }
    }

    const [drainingEntry] = this.activeEntries.splice(lowestIndex, 1);
    drainingEntry.state = 'DRAINING';
    this.drainingEntries.push(drainingEntry);
    this.checkDrainedEntry(drainingEntry);
  }

  private checkDrainedEntry(entry: ChannelEntry): void {
    if (
      entry.state === 'DRAINING' &&
      entry.inFlightRpcs === 0 &&
      entry.activeRwTransactions === 0
    ) {
      entry.state = 'CLOSED';
      entry.channel.close();
      const index = this.drainingEntries.indexOf(entry);
      if (index !== -1) {
        this.drainingEntries.splice(index, 1);
      }
    }
  }
}
