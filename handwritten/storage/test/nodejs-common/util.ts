/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

import assert from 'assert';
import {describe, it} from 'mocha';
import {util} from '../../src/nodejs-common/util';
import {GaxiosError} from 'gaxios';

describe('common/util', () => {
  describe('shouldRetryRequest', () => {
    it('should return false if there is no error', () => {
      assert.strictEqual(util.shouldRetryRequest(), false);
    });

    it('should return false from generic error', () => {
      const error = new GaxiosError('Generic error with no code', {});
      assert.strictEqual(util.shouldRetryRequest(error), false);
    });

    it('should return true with error code 408', () => {
      const error = new GaxiosError('408', {});
      error.status = 408;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 429', () => {
      const error = new GaxiosError('429', {});
      error.status = 429;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 500', () => {
      const error = new GaxiosError('500', {});
      error.status = 500;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 502', () => {
      const error = new GaxiosError('502', {});
      error.status = 502;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 503', () => {
      const error = new GaxiosError('503', {});
      error.status = 503;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 504', () => {
      const error = new GaxiosError('504', {});
      error.status = 504;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should detect rateLimitExceeded reason', () => {
      const rateLimitError = new GaxiosError(
        'Rate limit error without code.',
        {},
      );
      rateLimitError.code = 'rateLimitExceeded';
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should detect userRateLimitExceeded reason', () => {
      const rateLimitError = new GaxiosError(
        'Rate limit error without code.',
        {},
      );
      rateLimitError.code = 'userRateLimitExceeded';
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should retry on EAI_AGAIN error code', () => {
      const eaiAgainError = new GaxiosError('EAI_AGAIN', {});
      eaiAgainError.code = 'getaddrinfo EAI_AGAIN pubsub.googleapis.com';
      assert.strictEqual(util.shouldRetryRequest(eaiAgainError), true);
    });
  });

  describe('isCustomType', () => {
    class PubSub {}

    class MiddleLayer {
      parent = new PubSub();
    }

    class Subscription {
      parent = new MiddleLayer();
    }

    const pubsub = new PubSub();
    const subscription = new Subscription();

    describe('Service objects', () => {
      it('should match by constructor name', () => {
        assert(util.isCustomType(pubsub, 'pubsub'));
      });

      it('should support any casing', () => {
        assert(util.isCustomType(pubsub, 'PubSub'));
      });

      it('should not match if the wrong Service', () => {
        assert(!util.isCustomType(subscription, 'BigQuery'));
      });
    });

    describe('ServiceObject objects', () => {
      it('should match by constructor names', () => {
        assert(util.isCustomType(subscription, 'pubsub'));
        assert(util.isCustomType(subscription, 'pubsub/subscription'));

        assert(util.isCustomType(subscription, 'middlelayer'));
        assert(util.isCustomType(subscription, 'middlelayer/subscription'));
      });

      it('should support any casing', () => {
        assert(util.isCustomType(subscription, 'PubSub/Subscription'));
      });

      it('should not match if the wrong ServiceObject', () => {
        assert(!util.isCustomType(subscription, 'pubsub/topic'));
      });
    });
  });

  describe('maybeOptionsOrCallback', () => {
    it('should allow passing just a callback', () => {
      const optionsOrCallback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(optionsOrCallback);
      assert.strictEqual(optionsOrCallback, cb);
      assert.deepStrictEqual(opts, {});
    });

    it('should allow passing both opts and callback', () => {
      const optionsOrCallback = {};
      const callback = () => {};
      const [opts, cb] = util.maybeOptionsOrCallback(
        optionsOrCallback,
        callback,
      );
      assert.strictEqual(opts, optionsOrCallback);
      assert.strictEqual(cb, callback);
    });
  });
});
