/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {logger} from './logger';

/*
 * @module firestore/backoff
 * @private
 * @internal
 *
 * Contains backoff logic to facilitate RPC error handling. This class derives
 * its implementation from the Firestore Mobile Web Client.
 *
 * @see https://github.com/firebase/firebase-js-sdk/blob/master/packages/firestore/src/remote/backoff.ts
 */

/*!
 * The default initial backoff time in milliseconds after an error.
 * Set to 1s according to https://cloud.google.com/apis/design/errors.
 */
export const DEFAULT_BACKOFF_INITIAL_DELAY_MS = 1000;

/*!
 * The default maximum backoff time in milliseconds.
 */
export const DEFAULT_BACKOFF_MAX_DELAY_MS = 60 * 1000;

/*!
 * The default factor to increase the backup by after each failed attempt.
 */
export const DEFAULT_BACKOFF_FACTOR = 1.5;

/*!
 * The default jitter to distribute the backoff attempts by (0 means no
 * randomization, 1.0 means +/-50% randomization).
 */
const DEFAULT_JITTER_FACTOR = 1.0;

/*!
 * The maximum number of retries that will be attempted by backoff
 * before stopping all retry attempts.
 */
export const MAX_RETRY_ATTEMPTS = 10;

/*!
 * The timeout handler used by `ExponentialBackoff` and `BulkWriter`.
 */
export let delayExecution: (f: () => void, ms: number) => NodeJS.Timeout =
  setTimeout;

/**
 * Allows overriding of the timeout handler used by the exponential backoff
 * implementation. If not invoked, we default to `setTimeout()`.
 *
 * Used only in testing.
 *
 * @private
 * @internal
 * @param {function} handler A handler than matches the API of `setTimeout()`.
 */
export function setTimeoutHandler(
  handler: (f: () => void, ms: number) => void,
): void {
  delayExecution = (f: () => void, ms: number) => {
    handler(f, ms);
    const timeout: NodeJS.Timeout = {
      hasRef: () => {
        throw new Error('For tests only. Not Implemented');
      },
      ref: () => {
        throw new Error('For tests only. Not Implemented');
      },
      refresh: () => {
        throw new Error('For tests only. Not Implemented');
      },
      unref: () => {
        throw new Error('For tests only. Not Implemented');
      },
      [Symbol.toPrimitive]: () => {
        throw new Error('For tests only. Not Implemented');
      },
    } as unknown as NodeJS.Timeout;
    // `NodeJS.Timeout` type signature change:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/66176/files#diff-e838d0ace9cd5f6516bacfbd3ad00d02cd37bd60f9993ce6223f52d889a1fdbaR122-R126
    //
    // Adding `[Symbol.dispose](): void;` cannot be done on older versions of
    // NodeJS. So we simply cast to `NodeJS.Timeout`.
    return timeout;
  };
}

/**
 * Configuration object to adjust the delays of the exponential backoff
 * algorithm.
 *
 * @private
 * @internal
 */
export interface ExponentialBackoffSetting {
  /** Optional override for the initial retry delay. */
  initialDelayMs?: number;
  /** Optional override for the exponential backoff factor. */
  backoffFactor?: number;
  /** Optional override for the maximum retry delay. */
  maxDelayMs?: number;
  /**
   * Optional override to control the itter factor by which to randomize
   * attempts (0 means no randomization, 1.0 means +/-50% randomization). It is
   * suggested not to exceed this range.
   */
  jitterFactor?: number;
}

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a "jitter" (+/- 50% by default)  that is calculated and
 * added to the base delay. This prevents clients from accidentally
 * synchronizing their delays causing spikes of load to the backend.
 *
 * @private
 * @internal
 */
export class ExponentialBackoff {
  /**
   * The initial delay (used as the base delay on the first retry attempt).
   * Note that jitter will still be applied, so the actual delay could be as
   * little as 0.5*initialDelayMs (based on a jitter factor of 1.0).
   *
   * @private
   * @internal
   */
  private readonly initialDelayMs: number;

  /**
   * The multiplier to use to determine the extended base delay after each
   * attempt.
   *
   * @private
   * @internal
   */
  private readonly backoffFactor: number;

  /**
   * The maximum base delay after which no further backoff is performed.
   * Note that jitter will still be applied, so the actual delay could be as
   * much as 1.5*maxDelayMs (based on a jitter factor of 1.0).
   *
   * @private
   * @internal
   */
  private readonly maxDelayMs: number;

  /**
   * The jitter factor that controls the random distribution of the backoff
   * points.
   *
   * @private
   * @internal
   */
  private readonly jitterFactor: number;

  /**
   * The number of retries that has been attempted.
   *
   * @private
   * @internal
   */
  private _retryCount = 0;

  /**
   * The backoff delay of the current attempt.
   *
   * @private
   * @internal
   */
  private currentBaseMs = 0;

  /**
   * Whether we are currently waiting for backoff to complete.
   *
   * @private
   * @internal
   */
  private awaitingBackoffCompletion = false;

  constructor(options: ExponentialBackoffSetting = {}) {
    this.initialDelayMs =
      options.initialDelayMs !== undefined
        ? options.initialDelayMs
        : DEFAULT_BACKOFF_INITIAL_DELAY_MS;
    this.backoffFactor =
      options.backoffFactor !== undefined
        ? options.backoffFactor
        : DEFAULT_BACKOFF_FACTOR;
    this.maxDelayMs =
      options.maxDelayMs !== undefined
        ? options.maxDelayMs
        : DEFAULT_BACKOFF_MAX_DELAY_MS;
    this.jitterFactor =
      options.jitterFactor !== undefined
        ? options.jitterFactor
        : DEFAULT_JITTER_FACTOR;
  }

  /**
   * Resets the backoff delay and retry count.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   *
   * @private
   * @internal
   */
  reset(): void {
    this._retryCount = 0;
    this.currentBaseMs = 0;
  }

  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   *
   * @private
   * @internal
   */
  resetToMax(): void {
    this.currentBaseMs = this.maxDelayMs;
  }

  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts.
   *
   * @returns A Promise that resolves when the current delay elapsed.
   * @private
   * @internal
   */
  backoffAndWait(): Promise<void> {
    if (this.awaitingBackoffCompletion) {
      return Promise.reject(
        new Error('A backoff operation is already in progress.'),
      );
    }

    if (this.retryCount > MAX_RETRY_ATTEMPTS) {
      return Promise.reject(
        new Error('Exceeded maximum number of retries allowed.'),
      );
    }
    // First schedule using the current base (which may be 0 and should be
    // honored as such).
    const delayWithJitterMs = this.currentBaseMs + this.jitterDelayMs();
    if (this.currentBaseMs > 0) {
      logger(
        'ExponentialBackoff.backoffAndWait',
        null,
        `Backing off for ${delayWithJitterMs} ms ` +
          `(base delay: ${this.currentBaseMs} ms)`,
      );
    }

    // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.currentBaseMs *= this.backoffFactor;
    this.currentBaseMs = Math.max(this.currentBaseMs, this.initialDelayMs);
    this.currentBaseMs = Math.min(this.currentBaseMs, this.maxDelayMs);
    this._retryCount += 1;

    return new Promise(resolve => {
      this.awaitingBackoffCompletion = true;

      delayExecution(() => {
        this.awaitingBackoffCompletion = false;
        resolve();
      }, delayWithJitterMs);
    });
  }

  // Visible for testing.
  get retryCount(): number {
    return this._retryCount;
  }

  /**
   * Returns a randomized "jitter" delay based on the current base and jitter
   * factor.
   *
   * @returns {number} The jitter to apply based on the current delay.
   * @private
   * @internal
   */
  private jitterDelayMs(): number {
    return (Math.random() - 0.5) * this.jitterFactor * this.currentBaseMs;
  }
}
