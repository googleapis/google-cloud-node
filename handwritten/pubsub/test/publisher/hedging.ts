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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as defer from 'p-defer';
import {google} from '../../protos/protos';
import {defaultOptions} from '../../src/default-options';
import {Duration} from '../../src/temporal';
import {
  CancellationSharer,
  HedgingScheduler,
  HedgingTokenBucket,
} from '../../src/publisher/hedging';
import {TestUtils} from '../test-utils';

describe('Publisher Hedging', () => {
  describe('validateAndResolveHedgingOptions', () => {
    it('returns undefined when hedging options are not provided', () => {
      assert.strictEqual(
        HedgingTokenBucket.validateAndResolveHedgingOptions(undefined),
        undefined,
      );
    });

    it('applies default settings when an empty hedging object is provided', () => {
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({});
      assert.ok(resolved);
      assert.strictEqual(
        resolved.hedgeDelay.milliseconds,
        defaultOptions.publish.hedging.hedgeDelay.milliseconds,
      );
      assert.strictEqual(
        resolved.maxTokens,
        defaultOptions.publish.hedging.maxTokens,
      );
      assert.strictEqual(
        resolved.refillRatio,
        defaultOptions.publish.hedging.refillRatio,
      );
    });

    it('accepts valid custom hedging settings', () => {
      const customDelay = Duration.from({milliseconds: 250});
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({
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
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            hedgeDelay: Duration.from({milliseconds: 99}),
          }),
        RangeError,
      );
    });

    it('throws RangeError when hedgeDelay is greater than 10s', () => {
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            hedgeDelay: Duration.from({milliseconds: 10001}),
          }),
        RangeError,
      );
    });

    it('throws RangeError when maxTokens is out of bounds or non-integer', () => {
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({maxTokens: 0}),
        RangeError,
      );
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({maxTokens: -5}),
        RangeError,
      );
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({maxTokens: 251}),
        RangeError,
      );
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            maxTokens: 10.5,
          }),
        RangeError,
      );
    });

    it('throws RangeError when refillRatio is out of bounds or NaN', () => {
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            refillRatio: 0.0009,
          }),
        RangeError,
      );
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            refillRatio: 0.21,
          }),
        RangeError,
      );
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions({
            refillRatio: Number.NaN,
          }),
        RangeError,
      );
    });

    it('throws Error when both hedging and messageOrdering are enabled', () => {
      assert.throws(
        () => HedgingTokenBucket.validateAndResolveHedgingOptions({}, true),
        /Publish hedging and message ordering cannot be enabled at the same time\./,
      );
    });

    it('throws RangeError when hedgeDelay is greater than or equal to initialRpcTimeoutMillis', () => {
      assert.throws(
        () =>
          HedgingTokenBucket.validateAndResolveHedgingOptions(
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
          HedgingTokenBucket.validateAndResolveHedgingOptions(
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
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({});
      assert.ok(resolved);
      const bucket = new HedgingTokenBucket(resolved);
      assert.strictEqual(bucket.getTokenBalance(), 0);
      assert.strictEqual(bucket.tryAcquireHedgeToken(), false);
    });

    it('refills tokens on success and consumes 1.0 token per acquisition', () => {
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({
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
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({
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
      const resolved = HedgingTokenBucket.validateAndResolveHedgingOptions({
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

  describe('CancellationSharer', () => {
    const deadline = Duration.from({seconds: 100});

    it('resolves when original attempt succeeds and aborts hedged attempts', async () => {
      let successCalled = 0;
      const coordinator = new CancellationSharer(deadline, () => {
        successCalled++;
      });

      const attempt0 = defer<google.pubsub.v1.IPublishResponse>();
      const attempt1 = defer<google.pubsub.v1.IPublishResponse>();
      const controller0 = new AbortController();
      const controller1 = new AbortController();

      coordinator.addAttempt(0, controller0, attempt0.promise);
      coordinator.addAttempt(1, controller1, attempt1.promise);

      attempt0.resolve({messageIds: ['msg-0']});

      const result = await coordinator.promise;
      assert.deepStrictEqual(result.response, {messageIds: ['msg-0']});
      assert.strictEqual(result.wasHedged, false);
      assert.strictEqual(result.successfulAttempt, 0);
      assert.strictEqual(coordinator.successfulAttempt, 0);
      assert.strictEqual(successCalled, 1);
      assert.strictEqual(controller0.signal.aborted, false);
      assert.strictEqual(controller1.signal.aborted, true);
    });

    it('resolves when hedged attempt succeeds first and aborts original attempt', async () => {
      let successCalled = 0;
      const coordinator = new CancellationSharer(deadline, () => {
        successCalled++;
      });

      const attempt0 = defer<google.pubsub.v1.IPublishResponse>();
      const attempt1 = defer<google.pubsub.v1.IPublishResponse>();
      const controller0 = new AbortController();
      const controller1 = new AbortController();

      coordinator.addAttempt(0, controller0, attempt0.promise);
      coordinator.addAttempt(1, controller1, attempt1.promise);

      attempt1.resolve({messageIds: ['msg-1']});

      const result = await coordinator.promise;
      assert.deepStrictEqual(result.response, {messageIds: ['msg-1']});
      assert.strictEqual(result.wasHedged, true);
      assert.strictEqual(result.successfulAttempt, 1);
      assert.strictEqual(coordinator.successfulAttempt, 1);
      assert.strictEqual(successCalled, 1);
      assert.strictEqual(controller0.signal.aborted, true);
      assert.strictEqual(controller1.signal.aborted, false);
    });

    it('discards hedged attempt failure while original attempt is still running', async () => {
      const coordinator = new CancellationSharer(deadline, () => {});

      const attempt0 = defer<google.pubsub.v1.IPublishResponse>();
      const attempt1 = defer<google.pubsub.v1.IPublishResponse>();
      const controller0 = new AbortController();
      const controller1 = new AbortController();

      coordinator.addAttempt(0, controller0, attempt0.promise);
      coordinator.addAttempt(1, controller1, attempt1.promise);

      attempt1.reject(new Error('hedged failure'));
      await Promise.resolve();
      assert.strictEqual(coordinator.isDone, false);
      assert.strictEqual(coordinator.successfulAttempt, undefined);

      attempt0.resolve({messageIds: ['msg-0']});
      const result = await coordinator.promise;
      assert.deepStrictEqual(result.response, {messageIds: ['msg-0']});
      assert.strictEqual(result.wasHedged, false);
    });

    it('immediately rejects and aborts running hedged attempts when original attempt fails', async () => {
      const coordinator = new CancellationSharer(deadline, () => {});

      const attempt0 = defer<google.pubsub.v1.IPublishResponse>();
      const attempt1 = defer<google.pubsub.v1.IPublishResponse>();
      const controller0 = new AbortController();
      const controller1 = new AbortController();

      coordinator.addAttempt(0, controller0, attempt0.promise);
      coordinator.addAttempt(1, controller1, attempt1.promise);

      const originalError = new Error('original permanent failure');
      attempt0.reject(originalError);

      await assert.rejects(coordinator.promise, originalError);
      assert.strictEqual(controller1.signal.aborted, true);
    });

    it('immediately aborts an attempt added after coordinator is already done', async () => {
      const coordinator = new CancellationSharer(deadline, () => {});
      const controller0 = new AbortController();
      coordinator.addAttempt(
        0,
        controller0,
        Promise.resolve({messageIds: ['1']}),
      );
      await coordinator.promise;

      const lateController = new AbortController();
      const lateAttempt = defer<google.pubsub.v1.IPublishResponse>();
      coordinator.addAttempt(1, lateController, lateAttempt.promise);
      assert.strictEqual(lateController.signal.aborted, true);
    });
  });

  describe('HedgingScheduler', () => {
    interface RecordedAttempt {
      attempt: number;
      timeoutMs: number;
    }

    let sandbox: sinon.SinonSandbox;
    let clock: sinon.SinonFakeTimers;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      clock = TestUtils.useFakeTimers(sandbox, 10000);
    });

    afterEach(() => {
      clock.restore();
      sandbox.restore();
    });

    it('fires hedged attempts at hedgeDelay intervals (multiple hedging) while tokens are available', () => {
      const options = HedgingTokenBucket.validateAndResolveHedgingOptions({
        hedgeDelay: Duration.from({milliseconds: 200}),
        maxTokens: 10,
        refillRatio: 0.2,
      });
      assert.ok(options);
      const bucket = new HedgingTokenBucket(options);
      for (let i = 0; i < 10; i++) {
        bucket.refillTokenBucket();
      }
      assert.strictEqual(bucket.getTokenBalance(), 2.0);

      let rateLimitedCount = 0;
      const scheduler = new HedgingScheduler(options, bucket, () => {
        rateLimitedCount++;
      });

      const absoluteDeadline = Duration.from({milliseconds: Date.now()}).add(
        Duration.from({seconds: 25}),
      );
      const coordinator = new CancellationSharer(absoluteDeadline, () => {});

      const startedAttempts: RecordedAttempt[] = [];
      scheduler.scheduleFirstHedge(
        coordinator,
        (attemptNumber, attemptTimeout) => {
          startedAttempts.push({
            attempt: attemptNumber,
            timeoutMs: attemptTimeout.milliseconds,
          });
        },
      );

      clock.tick(199);
      assert.strictEqual(startedAttempts.length, 0);

      // At +200ms, attempt 1 fires (timeout capped at 10000ms)
      clock.tick(1);
      assert.deepStrictEqual(startedAttempts, [{attempt: 1, timeoutMs: 10000}]);
      assert.strictEqual(bucket.getTokenBalance(), 1.0);

      // At +400ms, attempt 2 fires (consuming the second token)
      clock.tick(200);
      assert.deepStrictEqual(startedAttempts, [
        {attempt: 1, timeoutMs: 10000},
        {attempt: 2, timeoutMs: 10000},
      ]);
      assert.strictEqual(bucket.getTokenBalance(), 0);

      // At +600ms, bucket is empty so attempt 3 is rate-limited and not re-queued
      clock.tick(200);
      assert.strictEqual(startedAttempts.length, 2);
      assert.strictEqual(rateLimitedCount, 1);

      scheduler.clear();
    });

    it('caps hedged attempt timeout at remainingTimeout when less than 10s', () => {
      const options = HedgingTokenBucket.validateAndResolveHedgingOptions({
        hedgeDelay: Duration.from({milliseconds: 500}),
        maxTokens: 10,
        refillRatio: 0.2,
      });
      assert.ok(options);
      const bucket = new HedgingTokenBucket(options);
      for (let i = 0; i < 5; i++) {
        bucket.refillTokenBucket();
      }

      const scheduler = new HedgingScheduler(options, bucket);
      const absoluteDeadline = Duration.from({milliseconds: Date.now()}).add(
        Duration.from({milliseconds: 3000}),
      );
      const coordinator = new CancellationSharer(absoluteDeadline, () => {});

      let observedTimeout: Duration | undefined;
      scheduler.scheduleFirstHedge(coordinator, (_attempt, attemptTimeout) => {
        observedTimeout = attemptTimeout;
      });

      clock.tick(500);
      assert.ok(observedTimeout);
      assert.strictEqual(observedTimeout.milliseconds, 2500);
    });

    it('skips hedging if coordinator completes before hedgeDelay', async () => {
      const options = HedgingTokenBucket.validateAndResolveHedgingOptions({
        hedgeDelay: Duration.from({milliseconds: 500}),
        maxTokens: 10,
        refillRatio: 0.2,
      });
      assert.ok(options);
      const bucket = new HedgingTokenBucket(options);
      for (let i = 0; i < 5; i++) {
        bucket.refillTokenBucket();
      }

      const scheduler = new HedgingScheduler(options, bucket);
      const absoluteDeadline = Duration.from({milliseconds: Date.now()}).add(
        Duration.from({seconds: 60}),
      );
      const coordinator = new CancellationSharer(absoluteDeadline, () => {});

      let hedgeFired = false;
      scheduler.scheduleFirstHedge(coordinator, () => {
        hedgeFired = true;
      });

      coordinator.cancel();
      await assert.rejects(coordinator.promise, /Cancelled/);
      clock.tick(500);
      assert.strictEqual(hedgeFired, false);
      assert.strictEqual(bucket.getTokenBalance(), 1.0);
    });

    it('does not schedule hedge if coordinator is already done', async () => {
      const options = HedgingTokenBucket.validateAndResolveHedgingOptions({
        hedgeDelay: Duration.from({milliseconds: 500}),
        maxTokens: 10,
        refillRatio: 0.2,
      });
      assert.ok(options);
      const bucket = new HedgingTokenBucket(options);
      for (let i = 0; i < 5; i++) {
        bucket.refillTokenBucket();
      }

      const scheduler = new HedgingScheduler(options, bucket);
      const absoluteDeadline = Duration.from({milliseconds: Date.now()}).add(
        Duration.from({seconds: 60}),
      );
      const coordinator = new CancellationSharer(absoluteDeadline, () => {});
      coordinator.cancel();
      await assert.rejects(coordinator.promise, /Cancelled/);

      let hedgeFired = false;
      scheduler.scheduleFirstHedge(coordinator, () => {
        hedgeFired = true;
      });

      clock.tick(500);
      assert.strictEqual(hedgeFired, false);
      assert.strictEqual(bucket.getTokenBalance(), 1.0);
    });
  });
});
