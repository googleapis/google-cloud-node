/*!
 * Copyright 2020 Google LLC
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
import * as assert from 'assert';
import {logger} from './logger';

/**
 * A helper that uses the Token Bucket algorithm to rate limit the number of
 * operations that can be made in a second.
 *
 * Before a given request containing a number of operations can proceed,
 * RateLimiter determines doing so stays under the provided rate limits. It can
 * also determine how much time is required before a request can be made.
 *
 * RateLimiter can also implement a gradually increasing rate limit. This is
 * used to enforce the 500/50/5 rule
 * (https://firebase.google.com/docs/firestore/best-practices#ramping_up_traffic).
 *
 * @private
 * @internal
 */
export class RateLimiter {
  // Number of tokens available. Each operation consumes one token.
  availableTokens: number;

  // When the token bucket was last refilled.
  lastRefillTimeMillis: number;

  // The last operations per second capacity that was calculated. Used to log
  // changes to the maximum QPS.
  previousCapacity: number;

  /**
   * @param initialCapacity Initial maximum number of operations per second.
   * @param multiplier Rate by which to increase the capacity.
   * @param multiplierMillis How often the capacity should increase in
   * milliseconds.
   * @param maximumCapacity Maximum number of allowed operations per second.
   * The number of tokens added per second will never exceed this number.
   * @param startTimeMillis The starting time in epoch milliseconds that the
   * rate limit is based on. Used for testing the limiter.
   */
  constructor(
    private readonly initialCapacity: number,
    private readonly multiplier: number,
    private readonly multiplierMillis: number,
    readonly maximumCapacity: number,
    private readonly startTimeMillis = Date.now(),
  ) {
    this.availableTokens = initialCapacity;
    this.lastRefillTimeMillis = startTimeMillis;
    this.previousCapacity = initialCapacity;
  }

  /**
   * Tries to make the number of operations. Returns true if the request
   * succeeded and false otherwise.
   *
   * @param requestTimeMillis The time used to calculate the number of available
   * tokens. Used for testing the limiter.
   * @private
   * @internal
   */
  tryMakeRequest(
    numOperations: number,
    requestTimeMillis = Date.now(),
  ): boolean {
    this.refillTokens(requestTimeMillis);
    if (numOperations <= this.availableTokens) {
      this.availableTokens -= numOperations;
      return true;
    }
    return false;
  }

  /**
   * Returns the number of ms needed to make a request with the provided number
   * of operations. Returns 0 if the request can be made with the existing
   * capacity. Returns -1 if the request is not possible with the current
   * capacity.
   *
   * @param requestTimeMillis The time used to calculate the number of available
   * tokens. Used for testing the limiter.
   * @private
   * @internal
   */
  getNextRequestDelayMs(
    numOperations: number,
    requestTimeMillis = Date.now(),
  ): number {
    this.refillTokens(requestTimeMillis);
    if (numOperations < this.availableTokens) {
      return 0;
    }

    const capacity = this.calculateCapacity(requestTimeMillis);
    if (capacity < numOperations) {
      return -1;
    }

    const requiredTokens = numOperations - this.availableTokens;
    return Math.ceil((requiredTokens * 1000) / capacity);
  }

  /**
   * Refills the number of available tokens based on how much time has elapsed
   * since the last time the tokens were refilled.
   *
   * @param requestTimeMillis The time used to calculate the number of available
   * tokens. Used for testing the limiter.
   * @private
   * @internal
   */
  private refillTokens(requestTimeMillis: number): void {
    if (requestTimeMillis >= this.lastRefillTimeMillis) {
      const elapsedTime = requestTimeMillis - this.lastRefillTimeMillis;
      const capacity = this.calculateCapacity(requestTimeMillis);
      const tokensToAdd = Math.floor((elapsedTime * capacity) / 1000);
      if (tokensToAdd > 0) {
        this.availableTokens = Math.min(
          capacity,
          this.availableTokens + tokensToAdd,
        );
        this.lastRefillTimeMillis = requestTimeMillis;
      }
    } else {
      throw new Error(
        'Request time should not be before the last token refill time.',
      );
    }
  }

  /**
   * Calculates the maximum capacity based on the provided date.
   *
   * @private
   * @internal
   */
  // Visible for testing.
  calculateCapacity(requestTimeMillis: number): number {
    assert(
      requestTimeMillis >= this.startTimeMillis,
      'startTime cannot be after currentTime',
    );
    const millisElapsed = requestTimeMillis - this.startTimeMillis;
    const operationsPerSecond = Math.min(
      Math.floor(
        Math.pow(
          this.multiplier,
          Math.floor(millisElapsed / this.multiplierMillis),
        ) * this.initialCapacity,
      ),
      this.maximumCapacity,
    );

    if (operationsPerSecond !== this.previousCapacity) {
      logger(
        'RateLimiter.calculateCapacity',
        null,
        `New request capacity: ${operationsPerSecond} operations per second.`,
      );
    }

    this.previousCapacity = operationsPerSecond;
    return operationsPerSecond;
  }
}
