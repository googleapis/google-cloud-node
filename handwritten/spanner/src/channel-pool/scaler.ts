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
import {ChannelPoolOptions, MAX_SUPPORTED_CHANNELS} from './config';
import {
  ChannelEntry,
  ChannelState,
  SPANNER_RW_TRANSACTION_IDLE_TIMEOUT_MS,
} from './entry';

import {protos} from '@google-cloud/spanner-api';

/**
 * Evaluates scale-up eligibility, enforces capacity bounds, and calculates how many channels to add.
 *
 * @param currentActiveCount Current number of active channels in the pool.
 * @param totalInFlight Current sum of in-flight RPCs across active channels.
 * @param config Normalized channel pool configuration.
 * @returns Number of channels to add in this scale-up batch.
 */
/**
 * Computes the midpoint target RPC capacity per channel (e.g. (15 + 25) / 2 = 20).
 * Matches Rust's `DynamicChannelPoolConfig::target_rpc_per_channel`.
 */
export function calculateTargetRpcPerChannel(
  config: Required<ChannelPoolOptions>,
): number {
  const midpoint = Math.floor(
    (config.minRpcPerChannel + config.maxRpcPerChannel) / 2,
  );
  return Math.max(1, midpoint);
}

export function calculateScaleUpCount(
  currentActiveCount: number,
  totalInFlight: number,
  config: Required<ChannelPoolOptions>,
): number {
  if (currentActiveCount >= config.maxChannels) {
    return 0;
  }

  // Sizing calculation matching Rust: desiredChannels = ceil(totalInFlight / targetRpc)
  const targetRpc = calculateTargetRpcPerChannel(config);
  const desiredChannels = Math.ceil(totalInFlight / targetRpc);
  if (desiredChannels <= currentActiveCount) {
    return 0;
  }

  // Rate limiting: Add at most maxScaleUpPercent (default 30%, minimum 2 channels) per event,
  // bounded by maxChannels ceiling.
  const maxToAddByPercent = Math.max(
    2,
    Math.ceil((currentActiveCount * config.maxScaleUpPercent) / 100),
  );

  const channelsToAdd = Math.min(
    desiredChannels - currentActiveCount,
    maxToAddByPercent,
    config.maxChannels - currentActiveCount,
  );

  return Math.max(0, channelsToAdd);
}

/**
 * Result of evaluating periodic scale-down.
 */
export interface ScaleDownEvaluationResult {
  candidatesToRemove: ChannelEntry[];
  newLowLoadChecks: number;
}

/**
 * Evaluates load across active channels, applies consecutive low-load debouncing,
 * and selects candidate channels to transition to DRAINING.
 *
 * @param activeEntries Current active channel entries.
 * @param config Normalized channel pool configuration.
 * @param consecutiveLowLoadChecks Current debounce count of consecutive low-load cycles.
 * @returns Candidates to remove and updated consecutive low load checks count.
 */
export function evaluateScaleDown(
  activeEntries: ChannelEntry[],
  config: Required<ChannelPoolOptions>,
  consecutiveLowLoadChecks: number,
): ScaleDownEvaluationResult {
  // Do not scale down below minChannels floor.
  if (activeEntries.length <= config.minChannels) {
    return {candidatesToRemove: [], newLowLoadChecks: 0};
  }

  const totalInFlight = activeEntries.reduce(
    (sum, entry) => sum + entry.inFlight(),
    0,
  );
  const avgLoad = totalInFlight / activeEntries.length;

  // Debouncing: Reset if average load is at or above minRpcPerChannel threshold.
  if (avgLoad >= config.minRpcPerChannel) {
    return {candidatesToRemove: [], newLowLoadChecks: 0};
  }

  const newLowLoadChecks = consecutiveLowLoadChecks + 1;
  if (newLowLoadChecks < config.consecutiveLowLoadChecks) {
    return {candidatesToRemove: [], newLowLoadChecks};
  }

  // Downscale candidate count calculation:
  // desiredChannels = max(minChannels, ceil(totalInFlight / minRpcPerChannel))
  const desiredChannels = Math.max(
    config.minChannels,
    Math.ceil(totalInFlight / config.minRpcPerChannel),
  );

  if (desiredChannels >= activeEntries.length) {
    return {candidatesToRemove: [], newLowLoadChecks: 0};
  }

  const channelsToRemove = Math.min(
    activeEntries.length - desiredChannels,
    config.maxRemoveChannels,
  );

  // Candidate sorting:
  // 1. inFlight: lowest active RPC load drained first.
  // 2. activeRwCount: prefer draining channels with 0 active Read/Write transactions.
  // 3. createdAt (descending): prefer newer channels, preserving older/warmer channels.
  const sorted = [...activeEntries].sort((channelA, channelB) => {
    if (channelA.inFlight() !== channelB.inFlight()) {
      return channelA.inFlight() - channelB.inFlight();
    }
    if (
      channelA.activeReadWriteTransactionCount() !==
      channelB.activeReadWriteTransactionCount()
    ) {
      return (
        channelA.activeReadWriteTransactionCount() -
        channelB.activeReadWriteTransactionCount()
      );
    }
    return channelB.createdAt - channelA.createdAt;
  });

  const candidatesToRemove = sorted.slice(0, channelsToRemove);
  return {candidatesToRemove, newLowLoadChecks: 0};
}

/**
 * Result of sweeping draining channels.
 */
export interface SweepDrainingResult {
  retained: ChannelEntry[];
  closed: ChannelEntry[];
}

/**
 * Sweeps draining channels and determines which channels should be closed or retained.
 *
 * Closure Rules (Design Doc §4.4):
 * 1. Channels with in-flight RPCs remain in DRAINING state until all in-flight RPCs complete.
 * 2. Channels with 0 in-flight RPCs and 0 active Read/Write transactions close immediately.
 * 3. Channels with 0 in-flight RPCs and active Read/Write transactions close once 15 seconds
 *    have elapsed without activity (incorporating Spanner's 10-second backend transaction
 *    abort timeout plus a 5-second buffer to reclaim abandoned transactions).
 *
 * Note on socket capacity during scale-down (C2):
 * During scale-down transitions, channels moved to the DRAINING state remain open until all
 * active in-flight RPCs complete or the 15-second idle transaction abort buffer expires.
 * Consequently, the total count of open TCP sockets (activeEntries.length + drainingEntries.length)
 * can temporarily exceed maxChannels while existing operations drain gracefully.
 *
 * @param drainingEntries Current draining channel entries.
 * @param drainIdleGraceMs Additional idle grace duration in milliseconds.
 * @param now Current timestamp in milliseconds.
 */
/**
 * Diagnostic threshold in milliseconds after which a draining channel retained with active in-flight RPCs
 * emits a runtime warning to aid in observability without forcefully severing active analytical queries.
 */
export const SPANNER_DRAIN_DIAGNOSTIC_TIMEOUT_MS = 15 * 60 * 1000;

export function sweepDrainingChannels(
  drainingEntries: ChannelEntry[],
  drainIdleGraceMs = 5000,
  now: number = Date.now(),
): SweepDrainingResult {
  const retained: ChannelEntry[] = [];
  const closed: ChannelEntry[] = [];

  for (const entry of drainingEntries) {
    const elapsed = entry.elapsedSinceActivity(now);
    if (entry.inFlight() > 0) {
      if (elapsed >= SPANNER_DRAIN_DIAGNOSTIC_TIMEOUT_MS) {
        if (
          typeof process !== 'undefined' &&
          typeof process.emitWarning === 'function'
        ) {
          process.emitWarning(
            `[ChannelPool] Draining channel ${entry.id} retained with ${entry.inFlight()} in-flight RPCs for ${Math.round(elapsed / 1000)}s`,
            'SpannerChannelPoolWarning',
          );
        }
      }
      retained.push(entry);
      continue;
    }
    const requiredIdle =
      entry.activeReadWriteTransactionCount() > 0
        ? SPANNER_RW_TRANSACTION_IDLE_TIMEOUT_MS + drainIdleGraceMs
        : 0;

    if (elapsed >= requiredIdle) {
      entry.setState(ChannelState.CLOSED);
      entry.close();
      closed.push(entry);
    } else {
      retained.push(entry);
    }
  }

  return {retained, closed};
}

/**
 * Allocates the lowest available 1-based logical slot number not currently occupied.
 *
 * Searches 1..=maxChannels first. If lower slots are temporarily occupied by draining
 * channels, allocates temporary higher slots up to MAX_SUPPORTED_CHANNELS to avoid collision.
 *
 * @param occupiedSlots Set of logical channel IDs currently occupied by active and non-closed draining channels.
 * @param maxChannels Configured maximum channel capacity ceiling.
 */
export function allocateSlot(
  occupiedSlots: Set<number>,
  maxChannels: number,
): number {
  for (let slot = 1; slot <= MAX_SUPPORTED_CHANNELS; slot++) {
    if (!occupiedSlots.has(slot)) {
      return slot;
    }
  }
  return maxChannels;
}

/**
 * Dials and primes a physical gRPC channel, executing SELECT 1 on the multiplexed session.
 * Enforces failure isolation: if priming fails, the channel is closed and discarded immediately.
 *
 * Note on multiplexed session priming (P8):
 * Channel warmup (priming) executes SELECT 1 against a multiplexed session. If multiplexed
 * sessions are disabled (e.g. GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS=false), primeSession
 * is undefined, and newly dialed channels are published directly to the active pool without
 * pre-warming.
 *
 * @param target Server address target string.
 * @param credentials gRPC channel credentials.
 * @param channelOptions gRPC channel options.
 * @param primeSession Optional multiplexed session name string used for priming.
 * @param timeoutMs Priming execution timeout in milliseconds.
 * @param channelFactory Channel factory function.
 * @param primeExecutor Optional custom executor for SELECT 1 priming (useful for testing).
 */
export async function dialAndPrimeChannel(
  target: string,
  credentials: grpc.ChannelCredentials,
  channelOptions: grpc.ChannelOptions,
  primeSession: string | undefined,
  timeoutMs: number,
  channelFactory: (
    target: string,
    credentials: grpc.ChannelCredentials,
    options: grpc.ChannelOptions,
  ) => grpc.Channel,
  primeExecutor?: (
    channel: grpc.Channel,
    sessionName: string,
    timeoutMs: number,
  ) => Promise<void>,
  dialSequence?: number,
): Promise<grpc.Channel> {
  const options = {
    ...channelOptions,
    'grpc.client_channel.id':
      dialSequence ?? channelOptions['grpc.client_channel.id'] ?? 1,
    'grpc.use_local_subchannel_pool': 1,
  };
  const channel = channelFactory(target, credentials, options);

  if (!primeSession) {
    return channel;
  }

  try {
    if (primeExecutor) {
      await primeExecutor(channel, primeSession, timeoutMs);
    } else {
      // Default priming: Execute SELECT 1 over the new channel
      await executeSelectOne(
        target,
        credentials,
        channelOptions,
        channel,
        primeSession,
        timeoutMs,
      );
    }
    return channel;
  } catch (error) {
    // Failure isolation: If priming fails, close and discard the channel immediately
    try {
      channel.close();
    } catch {
      // Ignore close error on broken channel
    }
    throw error;
  }
}

/**
 * Executes a SELECT 1 query on a specific physical channel using ExecuteSql RPC.
 */
export function executeSelectOne(
  target: string,
  credentials: grpc.ChannelCredentials,
  channelOptions: grpc.ChannelOptions,
  channel: grpc.Channel,
  sessionName: string,
  timeoutMs: number,
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const client = new grpc.Client(target, credentials, {
        ...channelOptions,
        channelOverride: channel,
      });
      const deadline = new Date(Date.now() + timeoutMs);
      const metadata = new grpc.Metadata();
      const databaseMatch = sessionName.match(
        /^(projects\/[^/]+\/instances\/[^/]+\/databases\/[^/]+)/,
      );
      if (databaseMatch) {
        metadata.set('google-cloud-resource-prefix', databaseMatch[1]);
      }
      const request = {
        session: sessionName,
        sql: 'SELECT 1',
      };

      const serialize = (val: any) =>
        Buffer.from(
          protos.google.spanner.v1.ExecuteSqlRequest.encode(val).finish(),
        );
      const deserialize = (buf: Buffer) =>
        protos.google.spanner.v1.ResultSet.decode(buf);

      client.makeUnaryRequest(
        '/google.spanner.v1.Spanner/ExecuteSql',
        serialize,
        deserialize,
        request,
        metadata,
        {deadline},
        (error: grpc.ServiceError | null) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        },
      );
    } catch (error) {
      reject(error);
    }
  });
}
