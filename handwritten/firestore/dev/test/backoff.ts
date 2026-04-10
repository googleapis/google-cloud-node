// Copyright 2017 Google LLC
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

import {describe, it, beforeEach, before, after} from 'mocha';
import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import {ExponentialBackoff, setTimeoutHandler} from '../src/backoff';

use(chaiAsPromised);

const nop = () => {};

describe('ExponentialBackoff', () => {
  let observedDelays: number[] = [];

  before(() => {
    setTimeoutHandler((callback, timeout) => {
      observedDelays.push(timeout);
      callback();
    });
  });

  beforeEach(() => {
    observedDelays = [];
  });

  after(() => setTimeoutHandler(setTimeout));

  function assertDelayEquals(expected: number) {
    expect(observedDelays.shift()).to.equal(expected);
  }

  function assertDelayBetween(low: number, high: number) {
    const actual = observedDelays.shift()!;
    expect(actual).to.be.at.least(low);
    expect(actual).to.be.at.most(high);
  }

  it("doesn't delay first attempt", async () => {
    const backoff = new ExponentialBackoff();
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
  });

  it('respects the initial retry delay', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      jitterFactor: 0,
    });
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(10);
  });

  it('exponentially increases the delay', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      backoffFactor: 2,
      jitterFactor: 0,
    });
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(10);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(20);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(40);
  });

  it('increases until maximum', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      backoffFactor: 2,
      maxDelayMs: 35,
      jitterFactor: 0,
    });
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(10);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(20);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(35);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(35);
  });

  it('can reset delay', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      backoffFactor: 2,
      maxDelayMs: 35,
      jitterFactor: 0,
    });
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(10);
    backoff.reset();
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(10);
  });

  it('can reset delay to maximum', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      maxDelayMs: 35,
      jitterFactor: 0,
    });
    backoff.resetToMax();
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(35);
  });

  it('applies jitter', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      backoffFactor: 2,
      jitterFactor: 0.1,
    });
    await backoff.backoffAndWait().then(nop);
    assertDelayEquals(0);
    await backoff.backoffAndWait().then(nop);
    assertDelayBetween(9, 11);
    await backoff.backoffAndWait().then(nop);
    assertDelayBetween(18, 22);
    await backoff.backoffAndWait().then(nop);
    assertDelayBetween(36, 44);
  });

  it('tracks the number of retry attempts', async () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 10,
      backoffFactor: 2,
      jitterFactor: 0.1,
    });
    expect(backoff.retryCount).to.equal(0);
    await backoff.backoffAndWait().then(nop);
    expect(backoff.retryCount).to.equal(1);
    await backoff.backoffAndWait().then(nop);
    expect(backoff.retryCount).to.equal(2);
    backoff.reset();
    expect(backoff.retryCount).to.equal(0);
  });

  it('cannot queue two backoffAndWait() operations simultaneously', async () => {
    const backoff = new ExponentialBackoff();

    // The timeout handler for this test simply idles forever.
    setTimeoutHandler(() => {});

    void backoff.backoffAndWait().then(nop);
    await expect(backoff.backoffAndWait()).to.eventually.be.rejectedWith(
      'A backoff operation is already in progress.',
    );
  });
});
