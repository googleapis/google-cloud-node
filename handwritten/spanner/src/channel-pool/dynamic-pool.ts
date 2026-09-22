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
  private nextPhysicalId = 1;
  private readonly target: string;
  private readonly credentials: grpc.ChannelCredentials;
  private readonly channelOptions: Record<string, any>;
  private readonly minChannels: number;
  private readonly maxChannels: number;
  private readonly maxRpcPerChannel: number;
  private readonly minRpcPerChannel: number;
  private readonly maxScaleUpPercent: number;
  private readonly maxRemoveChannels: number;
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
  private scaleUpPromise?: Promise<void>;
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

    const rawMin = options?.minChannels;
    let initialCount: number;
    if (typeof rawMin === 'number' && !Number.isNaN(rawMin)) {
      initialCount = Math.max(1, rawMin);
    } else if (process.env.SPANNER_NUM_CHANNELS) {
      const parsed = parseInt(process.env.SPANNER_NUM_CHANNELS, 10);
      initialCount = !Number.isNaN(parsed) && parsed > 0 ? parsed : 4;
    } else {
      initialCount = 4;
    }

    const rawMax = options?.maxChannels;
    const maxChannels =
      typeof rawMax === 'number' && !Number.isNaN(rawMax)
        ? Math.max(initialCount, rawMax)
        : Math.max(initialCount, 256);

    this.minChannels = initialCount;
    this.maxChannels = maxChannels;
    const rawMaxRpc = options?.maxRpcPerChannel;
    this.maxRpcPerChannel =
      typeof rawMaxRpc === 'number' && !Number.isNaN(rawMaxRpc)
        ? Math.max(1, rawMaxRpc)
        : 8;

    const defaultMinRpc = Math.min(2, Math.max(0, this.maxRpcPerChannel - 1));
    const rawMinRpc = options?.minRpcPerChannel;
    this.minRpcPerChannel =
      typeof rawMinRpc === 'number' && !Number.isNaN(rawMinRpc)
        ? Math.min(Math.max(0, rawMinRpc), this.maxRpcPerChannel - 1)
        : defaultMinRpc;
    this.maxScaleUpPercent =
      typeof options?.maxScaleUpPercent === 'number' &&
      !Number.isNaN(options.maxScaleUpPercent)
        ? options.maxScaleUpPercent
        : 100;
    this.maxRemoveChannels =
      typeof options?.maxRemoveChannels === 'number' &&
      !Number.isNaN(options.maxRemoveChannels)
        ? options.maxRemoveChannels
        : 4;
    this.scaleUpCooldownMs =
      typeof options?.scaleUpCooldownMs === 'number' &&
      !Number.isNaN(options.scaleUpCooldownMs)
        ? options.scaleUpCooldownMs
        : 1000;
    this.primeTimeoutMs =
      typeof options?.primeTimeoutMs === 'number' &&
      !Number.isNaN(options.primeTimeoutMs)
        ? options.primeTimeoutMs
        : 5000;
    this.primeFn = options?.primeFn;

    // Eagerly establish initial startup channels (unprimed, as session does not exist yet)
    for (let index = 0; index < this.minChannels; index++) {
      this.activeEntries.push(this.createEntry(index + 1));
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
    if (this.isClosed) {
      throw new Error('Channel pool is closed.');
    }

    let entry: ChannelEntry;

    if (
      affinity?.pinnedEntry &&
      (affinity.pinnedEntry.state === 'ACTIVE' ||
        (affinity.pinnedEntry.state === 'DRAINING' &&
          affinity.kind === AffinityKind.ReadWrite))
    ) {
      entry = affinity.pinnedEntry;
    } else {
      if (affinity?.pinnedEntry && affinity.kind === AffinityKind.ReadWrite) {
        affinity.pinnedEntry.activeRwTransactions = Math.max(
          0,
          affinity.pinnedEntry.activeRwTransactions - 1,
        );
      }
      entry = selectPowerOfTwo(this.activeEntries);
      if (affinity) {
        affinity.pinnedEntry = entry;
        affinity.onReset = (entryToDrain: ChannelEntry) => {
          if (entryToDrain.state === 'DRAINING') {
            this.checkDrainedEntry(entryToDrain);
          }
        };
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
          if (this.drainingEntries.length > 0) {
            for (
              let index = this.drainingEntries.length - 1;
              index >= 0;
              index--
            ) {
              this.checkDrainedEntry(this.drainingEntries[index]);
            }
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

  getChannels(): grpc.Channel[] {
    return [...this.activeEntries, ...this.drainingEntries].map(
      entry => entry.channel,
    );
  }

  get totalInFlight(): number {
    const activeSum = this.activeEntries.reduce(
      (sum, entry) => sum + entry.inFlightRpcs,
      0,
    );
    const drainingSum = this.drainingEntries.reduce(
      (sum, entry) => sum + entry.inFlightRpcs,
      0,
    );
    return activeSum + drainingSum;
  }

  get totalActiveRw(): number {
    const activeSum = this.activeEntries.reduce(
      (sum, entry) => sum + entry.activeRwTransactions,
      0,
    );
    const drainingSum = this.drainingEntries.reduce(
      (sum, entry) => sum + entry.activeRwTransactions,
      0,
    );
    return activeSum + drainingSum;
  }

  get entriesList(): ChannelEntry[] {
    return [...this.activeEntries, ...this.drainingEntries];
  }

  getConnectivityState(tryToConnect?: boolean): grpc.connectivityState {
    if (this.isClosed || this.activeEntries.length === 0) {
      return grpc.connectivityState.SHUTDOWN;
    }

    let hasReady = false;
    let hasConnecting = false;
    let hasTransientFailure = false;

    for (const entry of this.activeEntries) {
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
    if (this.activeEntries.length === 0) {
      process.nextTick(() => callback(new Error('No channels in pool.')));
      return;
    }
    const activeEntry = this.activeEntries.find(
      entry =>
        entry.channel.getConnectivityState(false) !==
        grpc.connectivityState.SHUTDOWN,
    );
    if (!activeEntry) {
      process.nextTick(() => callback());
      return;
    }
    const channel = activeEntry.channel;
    channel.watchConnectivityState(currentState, deadline, error => {
      if (error || this.isClosed) {
        callback(error);
        return;
      }
      const channelState = channel.getConnectivityState(false);
      if (
        channelState === grpc.connectivityState.SHUTDOWN &&
        !this.isClosed &&
        this.activeEntries.length > 0
      ) {
        if (this.getConnectivityState() !== currentState) {
          callback();
          return;
        }
        this.watchConnectivityState(currentState, deadline, callback);
        return;
      }
      callback(error);
    });
  }

  async close(): Promise<void> {
    this.isClosed = true;
    if (this.scaleDownTimer) {
      clearInterval(this.scaleDownTimer);
    }
    if (this.scaleUpPromise) {
      await this.scaleUpPromise;
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

  private allocateLogicalSlot(inProgressEntries: ChannelEntry[] = []): number {
    const occupiedSlots = new Set<number>();
    for (const entry of this.activeEntries) {
      occupiedSlots.add(entry.id);
    }
    for (const entry of this.drainingEntries) {
      if (entry.state !== 'CLOSED') {
        occupiedSlots.add(entry.id);
      }
    }
    for (const entry of inProgressEntries) {
      occupiedSlots.add(entry.id);
    }

    for (let slot = 1; slot <= this.maxChannels; slot++) {
      if (!occupiedSlots.has(slot)) {
        return slot;
      }
    }

    let slot = this.maxChannels + 1;
    while (occupiedSlots.has(slot)) {
      slot++;
    }
    return slot;
  }

  private createEntry(logicalId?: number): ChannelEntry {
    const id = logicalId ?? this.allocateLogicalSlot();
    const physicalId = this.nextPhysicalId++;
    const entryChannelOptions = Object.assign({}, this.channelOptions, {
      'grpc.channel_id': physicalId,
      'grpc_gcp.client_channel.id': physicalId,
    });
    const channel = new grpc.Channel(
      this.target,
      this.credentials,
      entryChannelOptions,
    );
    const now = Date.now();
    return {
      id,
      channel,
      inFlightRpcs: 0,
      activeRwTransactions: 0,
      state: 'ACTIVE',
      lastActivity: now,
      createdAt: now,
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

    this.scaleUpPromise = new Promise<void>(resolve => {
      setImmediate(async () => {
        try {
          if (this.isClosed || this.activeEntries.length >= this.maxChannels) {
            return;
          }

          const currentLength = this.activeEntries.length;
          let totalLoad = 0;
          for (const entry of this.activeEntries) {
            totalLoad += entry.inFlightRpcs;
          }
          const targetRpc = Math.max(
            1,
            Math.floor((this.minRpcPerChannel + this.maxRpcPerChannel) / 2),
          );
          const desiredChannels = Math.ceil(totalLoad / targetRpc);
          const maxToAddByPercent = Math.max(
            2,
            Math.ceil((currentLength * this.maxScaleUpPercent) / 100),
          );
          // Do NOT veto scale-up when average load is below max: if a channel exceeded maxRpcPerChannel,
          // we add at least 1 channel (and up to maxToAddByPercent bounded by maxChannels).
          const needed = Math.max(1, desiredChannels - currentLength);
          const count = Math.min(
            needed,
            maxToAddByPercent,
            this.maxChannels - currentLength,
          );

          if (count <= 0) {
            return;
          }

          const newEntries: ChannelEntry[] = [];
          for (let index = 0; index < count; index++) {
            const logicalId = this.allocateLogicalSlot(newEntries);
            newEntries.push(this.createEntry(logicalId));
          }

          // Prime newly created channels in parallel
          await Promise.all(
            newEntries.map(async entry => {
              try {
                await this.primeChannel(entry);
                if (
                  !this.isClosed &&
                  this.activeEntries.length < this.maxChannels
                ) {
                  this.activeEntries.push(entry);
                } else {
                  entry.state = 'CLOSED';
                  entry.channel.close();
                }
              } catch {
                // Discard and close channel if priming fails
                entry.state = 'CLOSED';
                entry.channel.close();
              }
            }),
          );
        } catch {
          // Prevent unhandled promise rejection in setImmediate callback
        } finally {
          this.isScalingUp = false;
          resolve();
        }
      });
    });
  }

  private async primeChannel(entry: ChannelEntry): Promise<void> {
    if (!this.primeSessionName || !this.primeFn) {
      return;
    }
    const maxAttempts = 2;
    let lastError: unknown;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      let timer: NodeJS.Timeout | undefined;
      try {
        const primePromise = this.primeFn(entry.channel, this.primeSessionName);
        const timeoutPromise = new Promise<never>((_resolve, reject) => {
          timer = setTimeout(() => {
            reject(new Error('Channel priming timed out.'));
          }, this.primeTimeoutMs);
          timer.unref();
        });
        await Promise.race([primePromise, timeoutPromise]);
        return;
      } catch (error) {
        lastError = error;
      } finally {
        if (timer) {
          clearTimeout(timer);
        }
      }
    }
    throw lastError;
  }

  private evaluateScaleDown(): void {
    if (
      this.isClosed ||
      this.isScalingUp ||
      Date.now() - this.lastScaleUpTime < this.scaleUpCooldownMs
    ) {
      return;
    }

    if (this.drainingEntries.length > 0) {
      for (let index = this.drainingEntries.length - 1; index >= 0; index--) {
        this.checkDrainedEntry(this.drainingEntries[index]);
      }
    }

    if (this.activeEntries.length <= this.minChannels) {
      this.consecutiveLowLoadChecks = 0;
      return;
    }

    let totalInFlight = 0;
    for (const entry of this.activeEntries) {
      totalInFlight += entry.inFlightRpcs;
    }
    const averageLoad = totalInFlight / this.activeEntries.length;

    if (averageLoad < this.minRpcPerChannel) {
      this.consecutiveLowLoadChecks++;
      if (this.consecutiveLowLoadChecks >= 3) {
        this.consecutiveLowLoadChecks = 0;
        this.drainChannels(totalInFlight);
      }
    } else {
      this.consecutiveLowLoadChecks = 0;
    }
  }

  private drainChannels(totalInFlight: number): void {
    if (this.activeEntries.length <= this.minChannels) {
      return;
    }

    const targetRpc = Math.max(
      1,
      Math.floor((this.minRpcPerChannel + this.maxRpcPerChannel) / 2),
    );
    const desiredChannels = Math.max(
      this.minChannels,
      Math.ceil(totalInFlight / targetRpc),
    );

    if (desiredChannels >= this.activeEntries.length) {
      return;
    }

    const excessChannels = this.activeEntries.length - desiredChannels;
    const channelsToRemove = Math.min(
      excessChannels,
      this.maxRemoveChannels,
      this.activeEntries.length - this.minChannels,
    );

    if (channelsToRemove <= 0) {
      return;
    }

    // Sort candidates so preferred drain victims are placed first:
    // 1. Lowest in-flight RPC load
    // 2. Lowest active Read/Write transactions
    // 3. Newer channels (prefer keeping older, warmer channels)
    this.activeEntries.sort((a, b) => {
      if (a.inFlightRpcs !== b.inFlightRpcs) {
        return a.inFlightRpcs - b.inFlightRpcs;
      }
      if (a.activeRwTransactions !== b.activeRwTransactions) {
        return a.activeRwTransactions - b.activeRwTransactions;
      }
      const aCreated = a.createdAt ?? a.id;
      const bCreated = b.createdAt ?? b.id;
      if (bCreated !== aCreated) {
        return bCreated - aCreated;
      }
      return b.id - a.id;
    });

    const draining = this.activeEntries.splice(0, channelsToRemove);
    for (const entry of draining) {
      entry.state = 'DRAINING';
      this.drainingEntries.push(entry);
      this.checkDrainedEntry(entry);
    }
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
