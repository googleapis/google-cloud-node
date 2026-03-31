// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';

import {ExponentialRetry} from '../src/exponential-retry';
import {Duration} from '../src/temporal';
import {TestUtils} from './test-utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function introspect(obj: unknown): any {
  return obj;
}

interface TestItem {
  foo: string;
}

function makeItem() {
  return {
    foo: 'an item',
  };
}

describe('exponential retry class', () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => sandbox.restore());

  it('initializes correctly', () => {
    // This one is honestly not terribly interesting except that the
    // class is storing the durations as numbers internally.
    const er = new ExponentialRetry<string>(
      Duration.from({seconds: 1}),
      Duration.from({seconds: 2}),
    );

    const eri = introspect(er);
    assert.strictEqual(eri._backoffMs, 1000);
    assert.strictEqual(eri._maxBackoffMs, 2000);
  });

  it('makes the first callback', () => {
    const clock = TestUtils.useFakeTimers(sandbox);
    const er = new ExponentialRetry<TestItem>(
      Duration.from({milliseconds: 100}),
      Duration.from({milliseconds: 1000}),
    );
    sandbox.stub(global.Math, 'random').returns(0.75);

    const item = makeItem();
    let retried = false;
    er.retryLater(item, (s: typeof item, t: Duration) => {
      assert.strictEqual(s, item);
      assert.strictEqual(t.milliseconds, 125);
      retried = true;
    });

    clock.tick(125);

    const leftovers = er.close();
    assert.strictEqual(retried, true);
    assert.strictEqual(leftovers.length, 0);
  });

  it('closes gracefully', () => {
    const clock = TestUtils.useFakeTimers(sandbox);
    const er = new ExponentialRetry<TestItem>(
      Duration.from({milliseconds: 100}),
      Duration.from({milliseconds: 1000}),
    );
    sandbox.stub(global.Math, 'random').returns(0.75);

    let called = false;
    const item = makeItem();
    er.retryLater(item, (s: typeof item, t: Duration) => {
      assert.strictEqual(s, item);
      assert.strictEqual(t.milliseconds, 125);
      called = true;
    });

    clock.tick(5);

    const leftovers = er.close();

    clock.tick(125);

    assert.strictEqual(called, false);

    const eri = introspect(er);
    assert.strictEqual(eri._items.isEmpty(), true);

    assert.strictEqual(leftovers.length, 1);
  });

  it('backs off exponentially', () => {
    const clock = TestUtils.useFakeTimers(sandbox);
    const er = new ExponentialRetry<TestItem>(
      Duration.from({milliseconds: 100}),
      Duration.from({milliseconds: 1000}),
    );
    sandbox.stub(global.Math, 'random').returns(0.75);

    let callbackCount = 0;
    let callbackTime: Duration = Duration.from({milliseconds: 0});

    const item = makeItem();
    const callback = (s: TestItem, t: Duration) => {
      assert.strictEqual(s, item);
      callbackTime = t;
      callbackCount++;
      if (callbackCount === 1) {
        er.retryLater(item, callback);
      }
    };
    er.retryLater(item, callback);

    clock.tick(125);
    assert.strictEqual(callbackCount, 1);
    assert.strictEqual(callbackTime.milliseconds, 125);

    clock.tick(400);
    assert.strictEqual(callbackCount, 2);
    assert.strictEqual(callbackTime.milliseconds, 375);

    const leftovers = er.close();
    assert.strictEqual(leftovers.length, 0);
  });

  it('backs off exponentially until the max backoff', () => {
    const clock = TestUtils.useFakeTimers(sandbox);
    const item = makeItem();
    const er = new ExponentialRetry<TestItem>(
      Duration.from({milliseconds: 100}),
      Duration.from({milliseconds: 150}),
    );
    sandbox.stub(global.Math, 'random').returns(0.75);

    let callbackCount = 0;
    let callbackTime: Duration = Duration.from({milliseconds: 0});

    const callback = (s: TestItem, t: Duration) => {
      assert.strictEqual(s, item);
      callbackTime = t;
      callbackCount++;
      if (callbackCount === 1) {
        er.retryLater(item, callback);
      }
    };
    er.retryLater(item, callback);

    clock.tick(125);
    assert.strictEqual(callbackCount, 1);
    assert.strictEqual(callbackTime.milliseconds, 125);

    clock.tick(400);
    assert.strictEqual(callbackCount, 2);
    assert.strictEqual(callbackTime.milliseconds, 312);

    const leftovers = er.close();
    assert.strictEqual(leftovers.length, 0);
  });

  it('calls retries in the right order', () => {
    const clock = TestUtils.useFakeTimers(sandbox);
    const items = [makeItem(), makeItem()];

    const er = new ExponentialRetry<TestItem>(
      Duration.from({milliseconds: 100}),
      Duration.from({milliseconds: 1000}),
    );

    // Just disable the fuzz for this test.
    sandbox.stub(global.Math, 'random').returns(0.5);

    const callbackCounts = [0, 0];
    const callbackTimes: Duration[] = [
      Duration.from({milliseconds: 0}),
      Duration.from({milliseconds: 0}),
    ];

    const callback = (s: TestItem, t: Duration) => {
      const idx = s === items[0] ? 0 : 1;
      callbackCounts[idx]++;
      callbackTimes[idx] = t;

      if (callbackCounts[idx] < 2) {
        er.retryLater(items[idx], callback);
      }
    };

    // Load in the first item and get it retrying.
    er.retryLater(items[0], callback);

    clock.tick(300);
    assert.deepStrictEqual(callbackCounts, [2, 0]);
    assert.deepStrictEqual(
      callbackTimes.map(d => d.milliseconds),
      [300, 0],
    );

    // Load in the second item and get it retrying.
    er.retryLater(items[1], callback);

    clock.tick(125);

    // The first item should've retried twice and still be in the queue,
    // while the second item should've retried once and quit.
    assert.deepStrictEqual(callbackCounts, [2, 1]);
    assert.deepStrictEqual(
      callbackTimes.map(d => d.milliseconds),
      [300, 100],
    );

    // Make sure that we did in fact set another timer for the next event.
    const eri = introspect(er);
    assert.ok(eri._timer);

    const leftovers = er.close();
    assert.strictEqual(leftovers.length, 1);
  });
});
