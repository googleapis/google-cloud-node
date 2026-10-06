/*!
 * Copyright 2026 Google LLC
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

import {CallOptions} from 'google-gax';
import {Duration} from '../temporal';

/**
 * Default hedging delay (1000ms).
 */
export const DEFAULT_HEDGE_DELAY = Duration.from({milliseconds: 1000});

/**
 * Minimum allowed hedging delay (100ms).
 */
export const MIN_HEDGE_DELAY = Duration.from({milliseconds: 100});

/**
 * Maximum allowed hedging delay (10s).
 */
export const MAX_HEDGE_DELAY = Duration.from({seconds: 10});

/**
 * Default maximum number of tokens in the hedging token bucket.
 */
export const DEFAULT_MAX_TOKENS = 50;

/**
 * Minimum allowed maxTokens value.
 */
export const MIN_MAX_TOKENS = 1;

/**
 * Maximum allowed maxTokens value.
 */
export const MAX_MAX_TOKENS = 250;

/**
 * Default token refill ratio per successful publish batch.
 */
export const DEFAULT_REFILL_RATIO = 0.1;

/**
 * Minimum allowed refill ratio.
 */
export const MIN_REFILL_RATIO = 0.001;

/**
 * Maximum allowed refill ratio.
 */
export const MAX_REFILL_RATIO = 0.2;

/**
 * Default initial RPC timeout for Publish calls (from publisher_client_config.json).
 */
export const DEFAULT_INITIAL_RPC_TIMEOUT = Duration.from({seconds: 60});

/**
 * Default total timeout for Publish calls (from publisher_client_config.json).
 */
export const DEFAULT_TOTAL_TIMEOUT = Duration.from({seconds: 600});

/**
 * Scale factor to represent decimal token values (e.g. 0.1 refill ratio) as
 * integers inside the token bucket. A scale of 1000 allows representing decimal
 * ratios down to 0.001 (1.0 logical token = 1000).
 */
export const HEDGE_TOKEN_SCALE = 1000;

/**
 * Settings for configuring publish hedging.
 */
export interface HedgingOptions {
  /**
   * Delay before sending a hedged (backup) publish RPC.
   * Default: 1000ms. Must satisfy 100ms <= hedgeDelay <= 10s.
   */
  hedgeDelay?: Duration;

  /**
   * Maximum number of tokens in the token bucket rate limiter.
   * Default: 50. Must satisfy 0 < maxTokens <= 250 (integer).
   */
  maxTokens?: number;

  /**
   * Token bucket refill ratio per successful publish batch.
   * Default: 0.1. Must satisfy 0.001 <= refillRatio <= 0.2.
   */
  refillRatio?: number;
}

/**
 * Validated and defaulted hedging configuration.
 */
export interface ResolvedHedgingOptions {
  readonly hedgeDelay: Duration;
  readonly maxTokens: number;
  readonly refillRatio: number;
}

/**
 * Resolves the effective initial RPC timeout Duration from CallOptions.
 */
export function resolveInitialRpcTimeout(gaxOpts?: CallOptions): Duration {
  const initialRpcTimeoutMillis =
    gaxOpts?.retry?.backoffSettings?.initialRpcTimeoutMillis ??
    gaxOpts?.timeout;
  if (typeof initialRpcTimeoutMillis === 'number') {
    return Duration.from({milliseconds: initialRpcTimeoutMillis});
  }
  return DEFAULT_INITIAL_RPC_TIMEOUT;
}

/**
 * Resolves the effective total timeout Duration from CallOptions.
 */
export function resolveTotalTimeout(gaxOpts?: CallOptions): Duration {
  const totalTimeoutMillis =
    gaxOpts?.retry?.backoffSettings?.totalTimeoutMillis ?? gaxOpts?.timeout;
  if (typeof totalTimeoutMillis === 'number') {
    return Duration.from({milliseconds: totalTimeoutMillis});
  }
  return DEFAULT_TOTAL_TIMEOUT;
}

/**
 * Validates user-supplied HedgingOptions, applies defaults, and verifies
 * compatibility with messageOrdering and RPC/total timeouts.
 */
export function validateAndResolveHedgingOptions(
  hedging?: HedgingOptions,
  messageOrdering?: boolean,
  gaxOpts?: CallOptions,
): ResolvedHedgingOptions | undefined {
  if (!hedging) {
    return undefined;
  }

  if (messageOrdering) {
    throw new Error(
      'Publish hedging and message ordering cannot be enabled at the same time.',
    );
  }

  const hedgeDelay = hedging.hedgeDelay
    ? Duration.from(hedging.hedgeDelay)
    : DEFAULT_HEDGE_DELAY;

  if (
    Duration.compare(hedgeDelay, MIN_HEDGE_DELAY) < 0 ||
    Duration.compare(hedgeDelay, MAX_HEDGE_DELAY) > 0
  ) {
    throw new RangeError(
      'hedgeDelay must be greater than or equal to 100ms and less than or equal to 10s',
    );
  }

  const maxTokens = hedging.maxTokens ?? DEFAULT_MAX_TOKENS;
  if (
    !Number.isInteger(maxTokens) ||
    maxTokens < MIN_MAX_TOKENS ||
    maxTokens > MAX_MAX_TOKENS
  ) {
    throw new RangeError(
      'maxTokens must be greater than 0 and less than or equal to 250',
    );
  }

  const refillRatio = hedging.refillRatio ?? DEFAULT_REFILL_RATIO;
  if (
    typeof refillRatio !== 'number' ||
    Number.isNaN(refillRatio) ||
    refillRatio < MIN_REFILL_RATIO ||
    refillRatio > MAX_REFILL_RATIO
  ) {
    throw new RangeError(
      `refillRatio must be greater than or equal to ${MIN_REFILL_RATIO} and less than or equal to ${MAX_REFILL_RATIO}`,
    );
  }

  const initialRpcTimeout = resolveInitialRpcTimeout(gaxOpts);
  if (Duration.compare(hedgeDelay, initialRpcTimeout) >= 0) {
    throw new RangeError(
      `hedgeDelay (${hedgeDelay.milliseconds}ms) must be strictly less than the initial RPC timeout duration (${initialRpcTimeout.milliseconds}ms)`,
    );
  }

  const totalTimeout = resolveTotalTimeout(gaxOpts);
  if (Duration.compare(hedgeDelay, totalTimeout) >= 0) {
    throw new RangeError(
      `hedgeDelay (${hedgeDelay.milliseconds}ms) must be strictly less than the total timeout duration (${totalTimeout.milliseconds}ms)`,
    );
  }

  return {
    hedgeDelay,
    maxTokens,
    refillRatio,
  };
}

/**
 * Fixed-point token bucket rate limiter for publish hedging.
 *
 * Starts empty (0 tokens), refills by `refillRatio` on each successful publish
 * batch (capped at `maxTokens`), and requires 1.0 token per hedged attempt.
 */
export class HedgingTokenBucket {
  private hedgeTokenBucket = 0;
  private readonly scaledMaxHedgeTokens: number;
  private readonly scaledHedgeRefillAmount: number;

  constructor(options: ResolvedHedgingOptions) {
    this.scaledMaxHedgeTokens = options.maxTokens * HEDGE_TOKEN_SCALE;
    this.scaledHedgeRefillAmount = Math.round(
      options.refillRatio * HEDGE_TOKEN_SCALE,
    );
  }

  /**
   * Refills the token bucket after a successful publish batch.
   */
  refillTokenBucket(): void {
    this.hedgeTokenBucket = Math.min(
      this.scaledMaxHedgeTokens,
      this.hedgeTokenBucket + this.scaledHedgeRefillAmount,
    );
  }

  /**
   * Attempts to consume 1.0 token for a hedged request.
   * Returns true if a token was available and consumed, false otherwise.
   */
  tryAcquireHedgeToken(): boolean {
    if (this.hedgeTokenBucket < HEDGE_TOKEN_SCALE) {
      return false;
    }
    this.hedgeTokenBucket -= HEDGE_TOKEN_SCALE;
    return true;
  }

  /**
   * Returns the current logical token balance (for testing/inspection).
   */
  getTokenBalance(): number {
    return this.hedgeTokenBucket / HEDGE_TOKEN_SCALE;
  }
}
