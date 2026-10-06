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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {Duration} from '../../src/temporal';
import {
  DEFAULT_HEDGE_DELAY,
  DEFAULT_MAX_TOKENS,
  DEFAULT_REFILL_RATIO,
  HedgingTokenBucket,
  validateAndResolveHedgingOptions,
} from '../../src/publisher/hedging';

describe('Publisher Hedging (Options & Token Bucket)', () => {
  describe('validateAndResolveHedgingOptions', () => {
    it('returns undefined when hedging options are not provided', () => {
      assert.strictEqual(
        validateAndResolveHedgingOptions(undefined),
        undefined,
      );
    });

    it('applies default settings when an empty hedging object is provided', () => {
      const resolved = validateAndResolveHedgingOptions({});
      assert.ok(resolved);
      assert.strictEqual(
        resolved.hedgeDelay.milliseconds,
        DEFAULT_HEDGE_DELAY.milliseconds,
      );
      assert.strictEqual(resolved.maxTokens, DEFAULT_MAX_TOKENS);
      assert.strictEqual(resolved.refillRatio, DEFAULT_REFILL_RATIO);
    });

    it('accepts valid custom hedging settings', () => {
      const customDelay = Duration.from({milliseconds: 250});
      const resolved = validateAndResolveHedgingOptions({
        hedgeDelay: customDelay,
        maxTokens: 100,
        refillRatio: 0.05,
      });
      assert.ok(resolved);
      assert.strictEqual(resolved.hedgeDelay.milliseconds, 250);
      assert.strictEqual(resolved.maxTokens, 100);
      assert.strictEqual(resolved.refillRatio, 0.05);
    });

    it('throws RangeError when hedgeDelay is less than 100ms', () => {
      assert.throws(
        () =>
          validateAndResolveHedgingOptions({
            hedgeDelay: Duration.from({milliseconds: 99}),
          }),
        RangeError,
      );
    });

    it('throws RangeError when hedgeDelay is greater than 10s', () => {
      assert.throws(
        () =>
          validateAndResolveHedgingOptions({
            hedgeDelay: Duration.from({milliseconds: 10001}),
          }),
        RangeError,
      );
    });

    it('throws RangeError when maxTokens is out of bounds or non-integer', () => {
      assert.throws(
        () => validateAndResolveHedgingOptions({maxTokens: 0}),
        RangeError,
      );
      assert.throws(
        () => validateAndResolveHedgingOptions({maxTokens: -5}),
        RangeError,
      );
      assert.throws(
        () => validateAndResolveHedgingOptions({maxTokens: 251}),
        RangeError,
      );
      assert.throws(
        () => validateAndResolveHedgingOptions({maxTokens: 10.5}),
        RangeError,
      );
    });

    it('throws RangeError when refillRatio is out of bounds or NaN', () => {
      assert.throws(
        () => validateAndResolveHedgingOptions({refillRatio: 0.0009}),
        RangeError,
      );
      assert.throws(
        () => validateAndResolveHedgingOptions({refillRatio: 0.21}),
        RangeError,
      );
      assert.throws(
        () => validateAndResolveHedgingOptions({refillRatio: Number.NaN}),
        RangeError,
      );
    });

    it('throws Error when both hedging and messageOrdering are enabled', () => {
      assert.throws(
        () => validateAndResolveHedgingOptions({}, true),
        /Publish hedging and message ordering cannot be enabled at the same time\./,
      );
    });

    it('throws RangeError when hedgeDelay is greater than or equal to initialRpcTimeoutMillis', () => {
      assert.throws(
        () =>
          validateAndResolveHedgingOptions(
            {hedgeDelay: Duration.from({milliseconds: 500})},
            false,
            {
              retry: {
                backoffSettings: {
                  initialRetryDelayMillis: 100,
                  retryDelayMultiplier: 1.3,
                  maxRetryDelayMillis: 60000,
                  initialRpcTimeoutMillis: 500,
                  rpcTimeoutMultiplier: 1,
                  maxRpcTimeoutMillis: 60000,
                  totalTimeoutMillis: 600000,
                },
              },
            },
          ),
        /strictly less than the initial RPC timeout duration/,
      );
    });

    it('throws RangeError when hedgeDelay is greater than or equal to totalTimeoutMillis', () => {
      assert.throws(
        () =>
          validateAndResolveHedgingOptions(
            {hedgeDelay: Duration.from({milliseconds: 1000})},
            false,
            {
              retry: {
                backoffSettings: {
                  initialRetryDelayMillis: 100,
                  retryDelayMultiplier: 1.3,
                  maxRetryDelayMillis: 60000,
                  initialRpcTimeoutMillis: 5000,
                  rpcTimeoutMultiplier: 1,
                  maxRpcTimeoutMillis: 60000,
                  totalTimeoutMillis: 1000,
                },
              },
            },
          ),
        /strictly less than the total timeout duration/,
      );
    });
  });

  describe('HedgingTokenBucket', () => {
    it('starts empty and cannot acquire a token initially', () => {
      const resolved = validateAndResolveHedgingOptions({});
      assert.ok(resolved);
      const bucket = new HedgingTokenBucket(resolved);
      assert.strictEqual(bucket.getTokenBalance(), 0);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), false);
    });

    it('refills tokens on success and consumes 1.0 token per acquisition', () => {
      const resolved = validateAndResolveHedgingOptions({
        maxTokens: 2,
        refillRatio: 0.2,
      });
      assert.ok(resolved);
      const bucket = new HedgingTokenBucket(resolved);

      for (let i = 0; i < 4; i++) {
        bucket.refillTokenBucket();
      }
      assert.strictEqual(bucket.getTokenBalance(), 0.8);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), false);

      bucket.refillTokenBucket();
      assert.strictEqual(bucket.getTokenBalance(), 1.0);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), true);
      assert.strictEqual(bucket.getTokenBalance(), 0);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), false);
    });

    it('caps token balance at maxTokens', () => {
      const resolved = validateAndResolveHedgingOptions({
        maxTokens: 1,
        refillRatio: 0.2,
      });
      assert.ok(resolved);
      const bucket = new HedgingTokenBucket(resolved);

      for (let i = 0; i < 10; i++) {
        bucket.refillTokenBucket();
      }
      assert.strictEqual(bucket.getTokenBalance(), 1.0);
    });

    it('maintains exact fixed-point precision for 0.001 refillRatio', () => {
      const resolved = validateAndResolveHedgingOptions({
        maxTokens: 10,
        refillRatio: 0.001,
      });
      assert.ok(resolved);
      const bucket = new HedgingTokenBucket(resolved);

      for (let i = 0; i < 999; i++) {
        bucket.refillTokenBucket();
      }
      assert.strictEqual(bucket.tryAcquireHedgeToken(), false);

      bucket.refillTokenBucket();
      assert.strictEqual(bucket.getTokenBalance(), 1.0);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), true);
      assert.strictEqual(bucket.getTokenBalance(), 0);
    });
  });
});
