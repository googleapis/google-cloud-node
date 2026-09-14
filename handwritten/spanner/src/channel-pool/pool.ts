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
import {context, ROOT_CONTEXT} from '@opentelemetry/api';
import {TransactionAffinity} from './affinity';
import {ChannelPoolOptions, normalizeChannelPoolOptions} from './config';
import {ChannelEntry, ChannelState} from './entry';
import {
  allocateSlot,
  calculateScaleUpCount,
  dialAndPrimeChannel,
  evaluateScaleDown,
  sweepDrainingChannels,
} from './scaler';

export type ChannelFactory = (
  target: string,
  credentials: grpc.ChannelCredentials,
  options: grpc.ChannelOptions,
) => grpc.Channel;

const SCALE_UP_EVALUATION_DEBOUNCE_MS = 100;

/**
 * Native dynamically scaling gRPC channel pool for Spanner.
 *
 * Implements the gRPC Channel interface so it can be passed directly as a channel override
 * to GAPIC stubs, while dynamically routing calls across channels via Power of Two Choices
 * (P2C) load balancing and caller-owned transaction affinity.
 */
export class ChannelPool {
  readonly config: Required<ChannelPoolOptions>;
  readonly target: string;
  readonly credentials: grpc.ChannelCredentials;
  readonly channelOptions: grpc.ChannelOptions;

  private readonly activeEntries: ChannelEntry[] = [];
  private readonly drainingEntries: ChannelEntry[] = [];
  private readonly channelFactory: ChannelFactory;
  private readonly primeExecutor?: (
    channel: grpc.Channel,
    sessionName: string,
    timeoutMs: number,
  ) => Promise<void>;

  private nextEntryId = 1;
  private nextChannelDialSequence: number;
  private consecutiveLowLoadChecks = 0;
  private lastScaleUpTime = 0;
  private lastScaleUpEvaluationTime = 0;
  private scaleUpInProgress = false;
  private _primeSessions: Map<string, string> = new Map();
  private _latestPrimeSession?: string;
  private scaleDownTimer?: NodeJS.Timeout;
  private closed = false;
  private readonly _isDynamic: boolean;

  constructor(
    target: string,
    credentials: grpc.ChannelCredentials,
    channelOptions: grpc.ChannelOptions = {},
    options?: ChannelPoolOptions,
    customChannelFactory?: ChannelFactory,
    primeExecutor?: (
      channel: grpc.Channel,
      sessionName: string,
      timeoutMs: number,
    ) => Promise<void>,
  ) {
    this.target = target;
    this.credentials = credentials;
    const sanitizedOptions = {...channelOptions};
    delete (sanitizedOptions as any)['grpc.spanner_channel_pool_holder'];
    delete (sanitizedOptions as any)['grpc.spanner_channel_pool_options'];
    delete (sanitizedOptions as any)['grpc.channelFactoryOverride'];
    delete (sanitizedOptions as any)['grpc.callInvocationTransformer'];
    this.channelOptions = sanitizedOptions;
    this.config = normalizeChannelPoolOptions(options);
    this.nextChannelDialSequence = this.config.initialChannels + 1;
    this._isDynamic = this.config.minChannels < this.config.maxChannels;
    this.channelFactory =
      customChannelFactory ||
      ((target, credentials, options) =>
        new (grpc.Channel as any)(target, credentials, options));
    this.primeExecutor = primeExecutor;

    // Eagerly initialize initialChannels
    for (let index = 0; index < this.config.initialChannels; index++) {
      const logicalChannelId = index + 1;
      const channel = this.channelFactory(this.target, this.credentials, {
        ...this.channelOptions,
        'grpc.client_channel.id': logicalChannelId,
        'grpc.use_local_subchannel_pool': 1,
      });
      const entry = new ChannelEntry(
        this.nextEntryId++,
        logicalChannelId,
        channel,
      );
      this.activeEntries.push(entry);
    }

    // Start background scale-down monitor only if dynamic scaling is active
    if (this.config.minChannels < this.config.maxChannels) {
      this.startScaleDownMonitor();
    }
  }

  /**
   * Returns the count of active channels in the pool.
   */
  activeChannelCount(): number {
    return this.activeEntries.length;
  }

  /**
   * Returns the count of draining channels in the pool.
   */
  drainingChannelCount(): number {
    return this.drainingEntries.length;
  }

  /**
   * Returns a copy of the active channel entries.
   */
  activeChannels(): ChannelEntry[] {
    return [...this.activeEntries];
  }

  /**
   * Returns a copy of the draining channel entries.
   */
  drainingChannels(): ChannelEntry[] {
    return [...this.drainingEntries];
  }

  /**
   * Returns true if dynamic scaling is enabled (minChannels < maxChannels).
   */
  isDynamic(): boolean {
    return this._isDynamic;
  }

  /**
   * Returns the total count of in-flight RPCs across all active channels.
   */
  totalInFlightRpcs(): number {
    let total = 0;
    for (let i = 0; i < this.activeEntries.length; i++) {
      total += this.activeEntries[i].inFlight();
    }
    return total;
  }

  private _extractDatabasePath(sessionName: string): string {
    const match = sessionName.match(
      /^(projects\/[^/]+\/instances\/[^/]+\/databases\/[^/]+)/,
    );
    return match ? match[1] : sessionName;
  }

  /**
   * Sets the multiplexed session name used for warming new channels via SELECT 1.
   * Keyed per database so rotated sessions replace stale ones.
   *
   * @param sessionName Formatted multiplexed session name string.
   */
  setPrimeSession(sessionName: string): void {
    const db = this._extractDatabasePath(sessionName);
    this._primeSessions.set(db, sessionName);
    this._latestPrimeSession = sessionName;
  }

  /**
   * Clears registered prime session name(s).
   *
   * @param prefixOrName Optional session name or resource prefix to clear.
   * If omitted, clears all registered prime sessions.
   */
  clearPrimeSession(prefixOrName?: string): void {
    if (!prefixOrName) {
      this._primeSessions.clear();
      this._latestPrimeSession = undefined;
      return;
    }
    const targetDb = this._extractDatabasePath(prefixOrName);
    for (const [db, session] of this._primeSessions.entries()) {
      if (
        db === targetDb ||
        db === prefixOrName ||
        session === prefixOrName ||
        session.startsWith(`${prefixOrName}/`)
      ) {
        this._primeSessions.delete(db);
        if (this._latestPrimeSession === session) {
          this._latestPrimeSession = undefined;
        }
      }
    }
    if (!this._latestPrimeSession && this._primeSessions.size > 0) {
      for (const session of this._primeSessions.values()) {
        this._latestPrimeSession = session;
      }
    }
  }

  /**
   * Checks if a multiplexed session name is currently registered for priming.
   */
  hasPrimeSession(): boolean {
    return this._primeSessions.size > 0;
  }

  get primeSession(): string | undefined {
    return this._latestPrimeSession;
  }

  /**
   * Selects an active channel entry using Power of Two Choices (P2C) least-busy load balancing.
   *
   * Compares 2 random choices based on:
   * 1. in_flight_rpcs (lowest load)
   * 2. active_rw_transactions (tie-breaker 1)
   * 3. uniform random selection (tie-breaker 2; warmth tie-breaking is deliberately
   *    avoided to eliminate the hot-channel trap under sequential traffic)
   */
  pickEntry(): ChannelEntry {
    if (this.activeEntries.length === 0) {
      const error: any = new Error('ChannelPool has no active channels');
      error.code = (grpc.status as any).UNAVAILABLE;
      throw error;
    }

    if (this.activeEntries.length === 1) {
      return this.activeEntries[0];
    }

    const index1 = Math.floor(Math.random() * this.activeEntries.length);
    let index2 = Math.floor(Math.random() * (this.activeEntries.length - 1));
    if (index2 >= index1) {
      index2 += 1;
    }

    const entry1 = this.activeEntries[index1];
    const entry2 = this.activeEntries[index2];

    const load1 = entry1.inFlight();
    const load2 = entry2.inFlight();

    if (load1 < load2) {
      return entry1;
    } else if (load2 < load1) {
      return entry2;
    }

    // Tie-breaker 1: Active Read/Write transactions
    const readWriteCount1 = entry1.activeReadWriteTransactionCount();
    const readWriteCount2 = entry2.activeReadWriteTransactionCount();
    if (readWriteCount1 < readWriteCount2) {
      return entry1;
    } else if (readWriteCount2 < readWriteCount1) {
      return entry2;
    }

    // Tie-breaker 2: Uniformly random selection between sampled pair.
    // Since (entry1, entry2) is an unordered uniform random sample,
    // choosing entry1 directly provides exact 50/50 probability.
    return entry1;
  }

  /**
   * Directly acquires a channel entry for an RPC.
   * Increments the entry's in-flight count. The caller is responsible for calling
   * `entry.decrementInFlight()` when the RPC completes.
   *
   * @param affinity Optional transaction affinity handle.
   */
  acquireEntry(affinity?: TransactionAffinity): ChannelEntry {
    if (this.closed) {
      const error: any = new Error('ChannelPool is closed');
      error.code = (grpc.status as any).UNAVAILABLE;
      throw error;
    }

    if (!affinity) {
      const entry = this.pickEntry();
      entry.incrementInFlight();
      this.checkScaleUp(entry);
      return entry;
    }

    // 1. Direct reference fast-path: Check pinned entry if already pinned
    const pinned = affinity.pinnedEntry();
    if (pinned) {
      if (pinned.isActive()) {
        affinity.ensureReadWriteGuard(pinned);
        pinned.incrementInFlight();
        this.checkScaleUp(pinned);
        return pinned;
      }
      if (affinity.isReadWrite() && pinned.isDraining() && !pinned.isClosed()) {
        affinity.ensureReadWriteGuard(pinned);
        pinned.incrementInFlight();
        this.checkScaleUp(pinned);
        return pinned;
      }
    }

    // 2. Selection: Select a fresh channel from activeEntries via P2C
    const selectedEntry = this.pickEntry();
    affinity.pinEntry(selectedEntry);
    affinity.ensureReadWriteGuard(selectedEntry);
    selectedEntry.incrementInFlight();
    this.checkScaleUp(selectedEntry);
    return selectedEntry;
  }

  /**
   * Triggers an asynchronous scale-up evaluation and parallel channel dial & prime.
   */
  async triggerScaleUp(): Promise<void> {
    if (this.closed || this.scaleUpInProgress) {
      return;
    }

    const now = Date.now();
    if (
      now - this.lastScaleUpTime < this.config.scaleUpCooldownMs ||
      now - this.lastScaleUpEvaluationTime < SCALE_UP_EVALUATION_DEBOUNCE_MS
    ) {
      return;
    }

    const currentLen = this.activeEntries.length;
    const totalInFlight = this.totalInFlightRpcs();
    const channelsToAdd = calculateScaleUpCount(
      currentLen,
      totalInFlight,
      this.config,
    );

    if (channelsToAdd <= 0) {
      this.lastScaleUpEvaluationTime = now;
      return;
    }

    this.scaleUpInProgress = true;
    this.lastScaleUpTime = now;
    this.lastScaleUpEvaluationTime = now;

    try {
      const dialPromises: Array<Promise<grpc.Channel>> = [];
      for (let i = 0; i < channelsToAdd; i++) {
        dialPromises.push(
          dialAndPrimeChannel(
            this.target,
            this.credentials,
            this.channelOptions,
            this.primeSession,
            this.config.primeTimeoutMs,
            this.channelFactory,
            this.primeExecutor,
            this.nextChannelDialSequence++,
          ),
        );
      }

      const results = await Promise.allSettled(dialPromises);
      for (const result of results) {
        if (result.status !== 'fulfilled') {
          const reason: any = result.reason;
          if (
            reason?.code === (grpc.status as any).NOT_FOUND ||
            reason?.code === (grpc.status as any).UNAUTHENTICATED ||
            (typeof reason?.message === 'string' &&
              reason.message.includes('Session not found'))
          ) {
            const current = this.primeSession;
            if (current) {
              this.clearPrimeSession(current);
            }
          }
          if (
            typeof process !== 'undefined' &&
            typeof process.emitWarning === 'function'
          ) {
            process.emitWarning(
              `[ChannelPool] Scale-up channel dial/prime failed: ${reason?.message || reason}`,
              'SpannerChannelPoolWarning',
            );
          }
          continue;
        }
        const channel = result.value;
        if (this.closed) {
          try {
            channel.close();
          } catch {
            // Ignore
          }
          continue;
        }
        this.publishPrimedChannel(channel);
      }
    } finally {
      this.scaleUpInProgress = false;
    }
  }

  /**
   * Publishes a newly primed channel into the active pool, allocating the lowest available slot.
   */
  publishPrimedChannel(channel: grpc.Channel): ChannelEntry | null {
    if (this.closed) {
      try {
        channel.close();
      } catch {
        // Ignore channel close error
      }
      return null;
    }

    if (this.activeEntries.length >= this.config.maxChannels) {
      try {
        channel.close();
      } catch {
        // Ignore channel close error
      }
      return null;
    }

    const occupiedSlots = new Set<number>();
    for (const entry of this.activeEntries) {
      occupiedSlots.add(entry.logicalChannelId);
    }
    for (const entry of this.drainingEntries) {
      if (!entry.isClosed()) {
        occupiedSlots.add(entry.logicalChannelId);
      }
    }

    const logicalChannelId = allocateSlot(
      occupiedSlots,
      this.config.maxChannels,
    );
    const entry = new ChannelEntry(
      this.nextEntryId++,
      logicalChannelId,
      channel,
    );
    this.activeEntries.push(entry);
    this.consecutiveLowLoadChecks = 0;
    return entry;
  }

  /**
   * Executes a periodic scale-down check and draining sweep.
   */
  scaleDownEvaluation(): void {
    if (this.closed || this.scaleUpInProgress) {
      return;
    }

    // 1. Evaluate utilization and transition excess channels to DRAINING if debounced
    const evalResult = evaluateScaleDown(
      this.activeEntries,
      this.config,
      this.consecutiveLowLoadChecks,
    );
    this.consecutiveLowLoadChecks = evalResult.newLowLoadChecks;

    for (const candidate of evalResult.candidatesToRemove) {
      const index = this.activeEntries.indexOf(candidate);
      if (index !== -1) {
        this.activeEntries.splice(index, 1);
        candidate.setState(ChannelState.DRAINING);
        this.drainingEntries.push(candidate);
      }
    }

    // 2. Sweep draining channels and close those whose draining requirements are satisfied
    const sweepResult = sweepDrainingChannels(
      this.drainingEntries,
      this.config.drainIdleGraceMs,
    );

    this.drainingEntries.length = 0;
    this.drainingEntries.push(...sweepResult.retained);
  }

  private startScaleDownMonitor(): void {
    if (this.scaleDownTimer) {
      return;
    }
    this.scaleDownTimer = context.with(ROOT_CONTEXT, () =>
      setInterval(() => {
        this.scaleDownEvaluation();
      }, this.config.scaleDownIntervalMs),
    );

    // Unref timer so it does not block Node.js process termination
    if (this.scaleDownTimer.unref) {
      this.scaleDownTimer.unref();
    }
  }

  private stopScaleDownMonitor(): void {
    if (this.scaleDownTimer) {
      clearInterval(this.scaleDownTimer);
      this.scaleDownTimer = undefined;
    }
  }

  private checkScaleUp(entry: ChannelEntry): void {
    if (
      !this._isDynamic ||
      this.scaleUpInProgress ||
      entry.inFlight() <= this.config.maxRpcPerChannel
    ) {
      return;
    }
    const now = Date.now();
    if (
      now - this.lastScaleUpTime >= this.config.scaleUpCooldownMs &&
      now - this.lastScaleUpEvaluationTime >= SCALE_UP_EVALUATION_DEBOUNCE_MS
    ) {
      void this.triggerScaleUp().catch(error => {
        if (
          typeof process !== 'undefined' &&
          typeof process.emitWarning === 'function'
        ) {
          process.emitWarning(
            `[ChannelPool] Background scale-up failed: ${error?.message || error}`,
            'SpannerChannelPoolWarning',
          );
        }
      });
    }
  }

  /**
   * Creates a CallInvocationTransformer for @grpc/grpc-js clients.
   */
  createCallInvocationTransformer(): (callProperties: any) => any {
    return callInvocationTransformer;
  }

  // --- grpc.Channel API Implementation ---

  close(): void {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this._primeSessions.clear();
    this.consecutiveLowLoadChecks = 0;
    this.scaleUpInProgress = false;
    this.stopScaleDownMonitor();

    for (const entry of this.activeEntries) {
      entry.close();
    }
    this.activeEntries.length = 0;

    for (const entry of this.drainingEntries) {
      entry.close();
    }
    this.drainingEntries.length = 0;
  }

  isClosed(): boolean {
    return this.closed;
  }

  getTarget(): string {
    return this.target;
  }

  getConnectivityState(tryToConnect: boolean): grpc.connectivityState {
    if (this.activeEntries.length === 0) {
      return (grpc.connectivityState as any).SHUTDOWN;
    }
    // Return READY if any channel is ready, otherwise first channel's state
    for (const entry of this.activeEntries) {
      const state = entry.channel.getConnectivityState(tryToConnect);
      if (state === (grpc.connectivityState as any).READY) {
        return state;
      }
    }
    return this.activeEntries[0].channel.getConnectivityState(tryToConnect);
  }

  watchConnectivityState(
    currentState: grpc.connectivityState,
    deadline: Date | number,
    callback: (error?: Error) => void,
  ): void {
    if (this.activeEntries.length === 0) {
      callback(new Error('ChannelPool has no active channels'));
      return;
    }
    let triggered = false;
    const onStateChange = (error?: Error) => {
      if (!triggered) {
        triggered = true;
        callback(error);
      }
    };
    for (const entry of this.activeEntries) {
      entry.channel.watchConnectivityState(
        currentState,
        deadline,
        onStateChange,
      );
    }
  }

  /**
   * Returns the Channelz reference of the primary active channel, or null if the pool has no active channels.
   */
  getChannelzRef(): any {
    if (this.activeEntries.length === 0) {
      return null;
    }
    return (this.activeEntries[0].channel as any).getChannelzRef?.() ?? null;
  }

  /**
   * Fallback implementation of grpc.Channel.createCall.
   *
   * Note on call interception (P7):
   * In standard operation with @grpc/grpc-js, all RPC invocations are intercepted by
   * callInvocationTransformer, which performs Power of Two Choices (P2C) load balancing,
   * affinity resolution, and in-flight counter tracking. createCall serves as an untransformed
   * fallback for non-GAPIC callers or auxiliary tooling directly calling channel methods.
   */
  createCall(
    method: string,
    deadline: any,
    host: string | null | undefined,
    parentCall: any,
    propagateFlags: number | null | undefined,
  ): any {
    if (this.activeEntries.length === 0) {
      throw new Error('ChannelPool has no active channels');
    }
    const entry =
      this.activeEntries[Math.floor(Math.random() * this.activeEntries.length)];
    return (entry.channel as any).createCall(
      method,
      deadline,
      host,
      parentCall,
      propagateFlags,
    );
  }
}

/**
 * Standalone CallInvocationTransformer for gRPC clients using ChannelPool.
 */
export function callInvocationTransformer(callProperties: any): any {
  if (
    !callProperties.channel ||
    !(callProperties.channel instanceof ChannelPool)
  ) {
    return callProperties;
  }

  const pool = callProperties.channel as ChannelPool;

  if (pool.isClosed() || pool.activeChannelCount() === 0) {
    const errorDetails = pool.isClosed()
      ? 'ChannelPool is closed'
      : 'ChannelPool has no active channels';
    const failingInterceptor = () => {
      const requester = {
        start: (_metadata: any, listener: any) => {
          process.nextTick(() => {
            listener.onReceiveStatus({
              code: (grpc.status as any).UNAVAILABLE,
              details: errorDetails,
              metadata: new grpc.Metadata(),
            });
          });
        },
      };
      return new (grpc as any).InterceptingCall(
        {
          start: () => {},
          sendMessage: () => {},
          sendMessageWithContext: () => {},
          startRead: () => {},
          halfClose: () => {},
          cancelWithStatus: () => {},
          getPeer: () => '',
          getAuthContext: () => ({}),
        },
        requester,
      );
    };

    // Overriding callOptions.interceptors on the terminal closed/empty pool path
    // directly delivers status.UNAVAILABLE without invoking downstream transport.
    const callOptions = Object.assign({}, callProperties.callOptions);
    callOptions.interceptors = [failingInterceptor];
    delete callOptions.interceptor_providers;
    callProperties.callOptions = callOptions;
    return callProperties;
  }

  const affinity =
    callProperties.callOptions?.affinity ??
    callProperties.callOptions?.otherArgs?.options?.affinity;

  const entry = pool.acquireEntry(affinity);
  callProperties.channel = entry.channel;

  let released = false;
  const releaseEntry = () => {
    if (!released) {
      released = true;
      entry.decrementInFlight();
    }
  };

  try {
    const call = callProperties.call;
    if (call && typeof call.once === 'function') {
      call.once('status', releaseEntry);
      call.once('error', releaseEntry);
      if (typeof call.destroy === 'function') {
        call.once('close', releaseEntry);
      }
    } else if (call && typeof call.on === 'function') {
      call.on('status', releaseEntry);
      call.on('error', releaseEntry);
      if (typeof call.destroy === 'function') {
        call.on('close', releaseEntry);
      }
    } else {
      const requester = {
        start: (metadata: any, listener: any, next: any) => {
          const newListener = {
            onReceiveStatus: (status: any, nextStatus: any) => {
              releaseEntry();
              nextStatus(status);
            },
          };
          try {
            next(metadata, newListener);
          } catch (error) {
            releaseEntry();
            throw error;
          }
        },
        cancel: (next: any) => {
          releaseEntry();
          next();
        },
      };

      const postProcessInterceptor = (options: any, nextCall: any) => {
        try {
          return new (grpc as any).InterceptingCall(
            nextCall(options),
            requester,
          );
        } catch (error) {
          releaseEntry();
          throw error;
        }
      };

      const callOptions = Object.assign({}, callProperties.callOptions);
      if (
        callOptions.interceptor_providers &&
        callOptions.interceptor_providers.length > 0
      ) {
        const existingProviders = callOptions.interceptor_providers.slice();
        callOptions.interceptor_providers = [
          () => postProcessInterceptor,
          ...existingProviders,
        ];
      } else {
        const existingInterceptors = callOptions.interceptors
          ? callOptions.interceptors.slice()
          : [];
        callOptions.interceptors = [
          postProcessInterceptor,
          ...existingInterceptors,
        ];
      }
      callProperties.callOptions = callOptions;
    }

    return callProperties;
  } catch (error) {
    releaseEntry();
    throw error;
  }
}

export interface ChannelPoolHolder {
  pool?: ChannelPool;
  pools?: Map<string, ChannelPool>;
}

/**
 * Standard gRPC channelFactoryOverride callback creating or reusing a ChannelPool.
 */
export function channelFactoryOverride(
  address: string,
  credentials: grpc.ChannelCredentials,
  channelOptions: grpc.ChannelOptions,
): grpc.Channel {
  const holder = (channelOptions as any)?.[
    'grpc.spanner_channel_pool_holder'
  ] as ChannelPoolHolder | undefined;

  if (holder) {
    if (!holder.pools) {
      holder.pools = new Map();
      if (holder.pool) {
        holder.pools.set(holder.pool.target, holder.pool);
      }
    }
    const existing = holder.pools.get(address);
    if (existing) {
      return existing as unknown as grpc.Channel;
    }
  }

  const poolOptions = (channelOptions as any)?.[
    'grpc.spanner_channel_pool_options'
  ] as ChannelPoolOptions | undefined;

  const pool = new ChannelPool(
    address,
    credentials,
    channelOptions,
    poolOptions,
  );

  if (holder) {
    holder.pool = pool;
    if (holder.pools) {
      holder.pools.set(address, pool);
    }
  }
  return pool as unknown as grpc.Channel;
}
