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
import {google} from '../../protos/protos';
import {Duration, atLeast, atMost} from '../temporal';

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
 * Maximum timeout for an individual hedged publish attempt (10s).
 */
export const MAX_HEDGE_ATTEMPT_TIMEOUT = Duration.from({seconds: 10});

/**
 * Zero duration constant for non-negative clamping and comparisons.
 */
export const ZERO_DURATION = Duration.from({milliseconds: 0});

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

/**
 * Outcome of a hedged publish batch.
 */
export interface HedgedPublishResult {
  readonly response?: google.pubsub.v1.IPublishResponse | null;
  readonly wasHedged: boolean;
  readonly successfulAttempt: number;
}

/**
 * Callback invoked by HedgingScheduler when a hedged attempt should be started.
 */
export type StartHedgedAttemptCallback = (
  attemptNumber: number,
  attemptTimeout: Duration,
) => void;

/**
 * Coordinates multiple publish attempts (attempt 0 = original, 1..N = hedged)
 * for a single batch of messages.
 */
export class CancellationSharer {
  readonly absoluteDeadline: Duration;
  readonly promise: Promise<HedgedPublishResult>;

  private readonly onSuccess: () => void;
  private readonly runningAttempts = new Map<number, AbortController>();
  private done = false;
  private successfulAttempt = -1;
  private lastError: unknown;
  private resolvePromise?: (result: HedgedPublishResult) => void;
  private rejectPromise?: (err: unknown) => void;

  constructor(absoluteDeadline: Duration, onSuccess: () => void) {
    this.absoluteDeadline = absoluteDeadline;
    this.onSuccess = onSuccess;
    this.promise = new Promise<HedgedPublishResult>((resolve, reject) => {
      this.resolvePromise = resolve;
      this.rejectPromise = reject;
    });
  }

  /**
   * Registers an in-flight publish attempt with this coordinator.
   */
  addAttempt(
    attemptNumber: number,
    abortController: AbortController,
    attemptPromise: Promise<
      google.pubsub.v1.IPublishResponse | null | undefined
    >,
  ): void {
    if (this.done) {
      abortController.abort();
      return;
    }

    this.runningAttempts.set(attemptNumber, abortController);

    attemptPromise
      .then(response => {
        this.handleAttemptSuccess(attemptNumber, response);
        return undefined;
      })
      .catch((err: unknown) => {
        this.handleAttemptFailure(attemptNumber, err);
      });
  }

  /**
   * Returns true if this batch has already completed (succeeded, failed, or cancelled).
   */
  isDone(): boolean {
    return this.done;
  }

  /**
   * Returns the attempt number that succeeded, or -1 if none has succeeded.
   */
  getSuccessfulAttempt(): number {
    return this.successfulAttempt;
  }

  /**
   * Cancels all running attempts and marks the coordinator as done.
   */
  cancel(): void {
    if (this.done) {
      return;
    }
    this.done = true;
    this.cancelAll();
  }

  private handleAttemptSuccess(
    attemptNumber: number,
    response?: google.pubsub.v1.IPublishResponse | null,
  ): void {
    if (this.done) {
      return;
    }
    this.done = true;
    this.successfulAttempt = attemptNumber;
    this.onSuccess();
    this.cancelAllExcept(attemptNumber);
    this.resolvePromise?.({
      response,
      wasHedged: attemptNumber > 0,
      successfulAttempt: attemptNumber,
    });
  }

  private handleAttemptFailure(attemptNumber: number, err: unknown): void {
    if (this.done) {
      return;
    }
    this.runningAttempts.delete(attemptNumber);
    this.lastError = err;

    if (attemptNumber === 0 || this.runningAttempts.size === 0) {
      this.done = true;
      this.cancelAll();
      this.rejectPromise?.(this.lastError);
    }
  }

  private cancelAll(): void {
    for (const controller of this.runningAttempts.values()) {
      controller.abort();
    }
    this.runningAttempts.clear();
  }

  private cancelAllExcept(winningAttempt: number): void {
    for (const [attempt, controller] of this.runningAttempts.entries()) {
      if (attempt !== winningAttempt) {
        controller.abort();
      }
    }
    this.runningAttempts.clear();
  }
}

/**
 * Represents a pending hedging check in the publisher's hedging queue.
 */
export class HedgedRequest {
  readonly coordinator: CancellationSharer;
  readonly attemptNumber: number;
  readonly sendAfter: Duration;
  readonly startHedgedAttempt: StartHedgedAttemptCallback;

  constructor(
    coordinator: CancellationSharer,
    attemptNumber: number,
    sendAfter: Duration,
    startHedgedAttempt: StartHedgedAttemptCallback,
  ) {
    this.coordinator = coordinator;
    this.attemptNumber = attemptNumber;
    this.sendAfter = sendAfter;
    this.startHedgedAttempt = startHedgedAttempt;
  }
}

/**
 * Event-driven FIFO queue and single-timer scheduler for publish hedging.
 */
export class HedgingScheduler {
  private readonly options: ResolvedHedgingOptions;
  private readonly tokenBucket: HedgingTokenBucket;
  private readonly onRateLimited?: () => void;
  private readonly hedgingQueue: HedgedRequest[] = [];
  private queueProcessingTimer?: NodeJS.Timeout;

  constructor(
    options: ResolvedHedgingOptions,
    tokenBucket: HedgingTokenBucket,
    onRateLimited?: () => void,
  ) {
    this.options = options;
    this.tokenBucket = tokenBucket;
    this.onRateLimited = onRateLimited;
  }

  /**
   * Returns the current wall-clock time as a Duration since epoch.
   */
  nowDuration(): Duration {
    return Duration.from({milliseconds: Date.now()});
  }

  /**
   * Schedules the initial hedge check (attempt 1) for a newly started publish batch.
   */
  scheduleFirstHedge(
    coordinator: CancellationSharer,
    startHedgedAttempt: StartHedgedAttemptCallback,
  ): void {
    const sendAfter = this.nowDuration().add(this.options.hedgeDelay);
    const request = new HedgedRequest(
      coordinator,
      1,
      sendAfter,
      startHedgedAttempt,
    );
    this.hedgingQueue.push(request);
    this.scheduleQueueProcessing();
  }

  /**
   * Clears any scheduled timer and empties the pending hedging queue.
   */
  clear(): void {
    if (this.queueProcessingTimer) {
      clearTimeout(this.queueProcessingTimer);
      this.queueProcessingTimer = undefined;
    }
    this.hedgingQueue.length = 0;
  }

  private scheduleQueueProcessing(): void {
    if (this.queueProcessingTimer) {
      return;
    }
    const nextItem = this.hedgingQueue[0];
    if (!nextItem) {
      return;
    }
    const delay = atLeast(
      nextItem.sendAfter.subtract(this.nowDuration()),
      ZERO_DURATION,
    );
    this.queueProcessingTimer = setTimeout(() => {
      this.processQueue();
    }, delay.milliseconds);
  }

  private processQueue(): void {
    this.queueProcessingTimer = undefined;
    const now = this.nowDuration();

    while (
      this.hedgingQueue.length > 0 &&
      Duration.compare(this.hedgingQueue[0].sendAfter, now) <= 0
    ) {
      const item = this.hedgingQueue.shift();
      if (!item || item.coordinator.isDone()) {
        continue;
      }

      const remainingTimeout = item.coordinator.absoluteDeadline.subtract(
        this.nowDuration(),
      );
      if (Duration.compare(remainingTimeout, ZERO_DURATION) <= 0) {
        continue;
      }

      const attemptTimeout = atMost(
        remainingTimeout,
        MAX_HEDGE_ATTEMPT_TIMEOUT,
      );

      if (this.tokenBucket.tryAcquireHedgeToken()) {
        const nextItem = new HedgedRequest(
          item.coordinator,
          item.attemptNumber + 1,
          now.add(this.options.hedgeDelay),
          item.startHedgedAttempt,
        );
        this.hedgingQueue.push(nextItem);
        item.startHedgedAttempt(item.attemptNumber, attemptTimeout);
      } else {
        this.onRateLimited?.();
      }
    }

    this.scheduleQueueProcessing();
  }
}
