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

/**
 * Configuration options for the Spanner native gRPC channel pool.
 */
export interface ChannelPoolOptions {
  /**
   * Number of channels established eagerly at client startup.
   * Defaults to 4.
   */
  initialChannels?: number;

  /**
   * Lower bound on the number of channels retained during scale-down.
   * Defaults to 4.
   */
  minChannels?: number;

  /**
   * Upper bound on the number of channels created during scale-up.
   * Defaults to 10.
   */
  maxChannels?: number;

  /**
   * High-load threshold of in-flight RPCs per channel triggering dynamic scale-up.
   * Defaults to 25.
   */
  maxRpcPerChannel?: number;

  /**
   * Low-load threshold of in-flight RPCs per channel triggering scale-down evaluation.
   * Defaults to 10.
   */
  minRpcPerChannel?: number;

  /**
   * Maximum percentage of current pool size added per scale-up event (minimum 2 channels).
   * Defaults to 30.
   */
  maxScaleUpPercent?: number;

  /**
   * Maximum number of channels marked draining per scale-down cycle.
   * Defaults to 2.
   */
  maxRemoveChannels?: number;

  /**
   * Interval in milliseconds between periodic scale-down evaluations.
   * Defaults to 60,000 (1 minute).
   */
  scaleDownIntervalMs?: number;

  /**
   * Number of consecutive low-load check cycles required before scale-down is executed.
   * Defaults to 3.
   */
  consecutiveLowLoadChecks?: number;

  /**
   * Cooldown period in milliseconds between consecutive scale-up bursts.
   * Defaults to 10,000 (10 seconds).
   */
  scaleUpCooldownMs?: number;

  /**
   * Idle duration in milliseconds before a draining channel with 0 in-flight RPCs is closed.
   * For draining channels with active Read/Write transactions, closure occurs when in-flight RPCs
   * are 0 and either active transactions drop to 0 or 15 seconds have elapsed since last activity
   * (incorporating Spanner's 10-second backend server abort timeout plus this 5-second buffer).
   * Defaults to 5,000 (5 seconds).
   */
  drainIdleGraceMs?: number;

  /**
   * Timeout in milliseconds for SELECT 1 priming queries on newly dialed channels.
   * Defaults to 10,000 (10 seconds).
   */
  primeTimeoutMs?: number;
}

/**
 * Default channel pool settings aligned with Go and Rust reference implementations.
 */
export const DEFAULT_CHANNEL_POOL_OPTIONS: Required<ChannelPoolOptions> = {
  initialChannels: 4,
  minChannels: 4,
  maxChannels: 10,
  minRpcPerChannel: 10,
  maxRpcPerChannel: 25,
  maxScaleUpPercent: 30,
  maxRemoveChannels: 2,
  scaleDownIntervalMs: 60000,
  consecutiveLowLoadChecks: 3,
  scaleUpCooldownMs: 10000,
  drainIdleGraceMs: 5000,
  primeTimeoutMs: 10000,
};

/**
 * Maximum supported channel count ceiling for slot allocation.
 */
export const MAX_SUPPORTED_CHANNELS = 256;

/**
 * Validates and normalizes channel pool options, applying default values for unspecified options.
 *
 * @param options User-specified channel pool configuration options.
 * @returns Fully validated configuration with all default values resolved.
 */
export function normalizeChannelPoolOptions(
  options?: ChannelPoolOptions,
): Required<ChannelPoolOptions> {
  const merged: Required<ChannelPoolOptions> = {
    ...DEFAULT_CHANNEL_POOL_OPTIONS,
    ...(options || {}),
  };

  if (!Number.isInteger(merged.minChannels) || merged.minChannels < 1) {
    throw new Error('minChannels must be an integer of at least 1');
  }
  if (
    !Number.isInteger(merged.maxChannels) ||
    merged.maxChannels < merged.minChannels
  ) {
    throw new Error(
      'maxChannels must be an integer greater than or equal to minChannels',
    );
  }
  if (merged.maxChannels > MAX_SUPPORTED_CHANNELS) {
    throw new Error(
      `maxChannels cannot exceed maximum supported limit of ${MAX_SUPPORTED_CHANNELS}`,
    );
  }
  if (
    !Number.isInteger(merged.initialChannels) ||
    merged.initialChannels < merged.minChannels ||
    merged.initialChannels > merged.maxChannels
  ) {
    throw new Error(
      'initialChannels must be an integer between minChannels and maxChannels',
    );
  }
  if (
    !Number.isFinite(merged.minRpcPerChannel) ||
    merged.minRpcPerChannel <= 0
  ) {
    throw new Error('minRpcPerChannel must be a finite number greater than 0');
  }
  if (
    !Number.isFinite(merged.maxRpcPerChannel) ||
    merged.maxRpcPerChannel <= merged.minRpcPerChannel
  ) {
    throw new Error(
      'maxRpcPerChannel must be a finite number strictly greater than minRpcPerChannel',
    );
  }
  if (
    !Number.isFinite(merged.maxScaleUpPercent) ||
    merged.maxScaleUpPercent <= 0
  ) {
    throw new Error('maxScaleUpPercent must be greater than 0');
  }
  if (
    !Number.isInteger(merged.maxRemoveChannels) ||
    merged.maxRemoveChannels < 1
  ) {
    throw new Error('maxRemoveChannels must be an integer of at least 1');
  }
  if (
    !Number.isInteger(merged.consecutiveLowLoadChecks) ||
    merged.consecutiveLowLoadChecks < 1
  ) {
    throw new Error(
      'consecutiveLowLoadChecks must be an integer of at least 1',
    );
  }
  if (
    !Number.isFinite(merged.scaleDownIntervalMs) ||
    merged.scaleDownIntervalMs <= 0
  ) {
    throw new Error('scaleDownIntervalMs must be greater than 0');
  }
  if (
    !Number.isFinite(merged.scaleUpCooldownMs) ||
    merged.scaleUpCooldownMs < 0
  ) {
    throw new Error('scaleUpCooldownMs must be non-negative');
  }
  if (
    !Number.isFinite(merged.drainIdleGraceMs) ||
    merged.drainIdleGraceMs <= 0
  ) {
    throw new Error('drainIdleGraceMs must be greater than 0');
  }
  if (!Number.isFinite(merged.primeTimeoutMs) || merged.primeTimeoutMs <= 0) {
    throw new Error('primeTimeoutMs must be greater than 0');
  }

  return merged;
}
