// Copyright 2020 Google LLC
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

import {describe, it, beforeEach} from 'mocha';
import {expect} from 'chai';

import {RateLimiter} from '../src/rate-limiter';

describe('RateLimiter', () => {
  let limiter: RateLimiter;

  beforeEach(() => {
    limiter = new RateLimiter(
      /* initialCapacity= */ 500,
      /* multiplier= */ 1.5,
      /* multiplierMillis= */ 5 * 60 * 1000,
      /* maximumCapacity= */ 1000000,
      /* startTime= */ new Date(0).getTime(),
    );
  });

  it('accepts and rejects requests based on capacity', () => {
    expect(limiter.tryMakeRequest(250, new Date(0).getTime())).to.be.true;
    expect(limiter.tryMakeRequest(250, new Date(0).getTime())).to.be.true;

    // Once tokens have been used, further requests should fail.
    expect(limiter.tryMakeRequest(1, new Date(0).getTime())).to.be.false;

    // Tokens will only refill up to max capacity.
    expect(limiter.tryMakeRequest(501, new Date(1 * 1000).getTime())).to.be
      .false;
    expect(limiter.tryMakeRequest(500, new Date(1 * 1000).getTime())).to.be
      .true;

    // Tokens will refill incrementally based on the number of ms elapsed.
    expect(limiter.tryMakeRequest(250, new Date(1 * 1000 + 499).getTime())).to
      .be.false;
    expect(limiter.tryMakeRequest(249, new Date(1 * 1000 + 500).getTime())).to
      .be.true;

    // Scales with multiplier.
    expect(limiter.tryMakeRequest(751, new Date((5 * 60 - 1) * 1000).getTime()))
      .to.be.false;
    expect(limiter.tryMakeRequest(751, new Date(5 * 60 * 1000).getTime())).to.be
      .false;
    expect(limiter.tryMakeRequest(750, new Date(5 * 60 * 1000).getTime())).to.be
      .true;

    // Tokens will never exceed capacity.
    expect(limiter.tryMakeRequest(751, new Date((5 * 60 + 3) * 1000).getTime()))
      .to.be.false;

    // Rejects requests made before lastRefillTime
    expect(() =>
      limiter.tryMakeRequest(751, new Date((5 * 60 + 2) * 1000).getTime()),
    ).to.throw('Request time should not be before the last token refill time.');
  });

  it('calculates the number of ms needed to place the next request', () => {
    // Should return 0 if there are enough tokens for the request to be made.
    let timestamp = new Date(0).getTime();
    expect(limiter.getNextRequestDelayMs(500, timestamp)).to.equal(0);

    // Should factor in remaining tokens when calculating the time.
    expect(limiter.tryMakeRequest(250, timestamp)).to.be.true;
    expect(limiter.getNextRequestDelayMs(500, timestamp)).to.equal(500);

    // Once tokens have been used, should calculate time before next request.
    timestamp = new Date(1 * 1000).getTime();
    expect(limiter.tryMakeRequest(500, timestamp)).to.be.true;
    expect(limiter.getNextRequestDelayMs(100, timestamp)).to.equal(200);
    expect(limiter.getNextRequestDelayMs(250, timestamp)).to.equal(500);
    expect(limiter.getNextRequestDelayMs(500, timestamp)).to.equal(1000);
    expect(limiter.getNextRequestDelayMs(501, timestamp)).to.equal(-1);

    // Scales with multiplier.
    timestamp = new Date(5 * 60 * 1000).getTime();
    expect(limiter.tryMakeRequest(750, timestamp)).to.be.true;
    expect(limiter.getNextRequestDelayMs(250, timestamp)).to.equal(334);
    expect(limiter.getNextRequestDelayMs(500, timestamp)).to.equal(667);
    expect(limiter.getNextRequestDelayMs(750, timestamp)).to.equal(1000);
    expect(limiter.getNextRequestDelayMs(751, timestamp)).to.equal(-1);
  });

  it('calculates the maximum number of operations correctly', async () => {
    expect(limiter.calculateCapacity(new Date(0).getTime())).to.equal(500);
    expect(
      limiter.calculateCapacity(new Date(5 * 60 * 1000).getTime()),
    ).to.equal(750);
    expect(
      limiter.calculateCapacity(new Date(10 * 60 * 1000).getTime()),
    ).to.equal(1125);
    expect(
      limiter.calculateCapacity(new Date(15 * 60 * 1000).getTime()),
    ).to.equal(1687);
    expect(
      limiter.calculateCapacity(new Date(90 * 60 * 1000).getTime()),
    ).to.equal(738945);

    // Check that maximum rate limit is enforced.
    expect(
      limiter.calculateCapacity(new Date(1000 * 60 * 1000).getTime()),
    ).to.equal(1000000);
  });
});
