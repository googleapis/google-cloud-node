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
import {decorateHeaders, util} from '../../src/nodejs-common/util.js';
import {GaxiosError, GaxiosOptionsPrepared} from 'gaxios';
import {getModuleFormat} from '../../src/util.js';

describe('common/util', () => {
  describe('shouldRetryRequest', () => {
    it('should return false if there is no error', () => {
      assert.strictEqual(util.shouldRetryRequest(), false);
    });

    it('should return false from generic error', () => {
      const error = new GaxiosError(
        'Generic error with no code',
        {} as GaxiosOptionsPrepared,
      );
      assert.strictEqual(util.shouldRetryRequest(error), false);
    });

    it('should return true with error code 408', () => {
      const error = new GaxiosError('408', {} as GaxiosOptionsPrepared);
      error.status = 408;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 429', () => {
      const error = new GaxiosError('429', {} as GaxiosOptionsPrepared);
      error.status = 429;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 500', () => {
      const error = new GaxiosError('500', {} as GaxiosOptionsPrepared);
      error.status = 500;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 502', () => {
      const error = new GaxiosError('502', {} as GaxiosOptionsPrepared);
      error.status = 502;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 503', () => {
      const error = new GaxiosError('503', {} as GaxiosOptionsPrepared);
      error.status = 503;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should return true with error code 504', () => {
      const error = new GaxiosError('504', {} as GaxiosOptionsPrepared);
      error.status = 504;
      assert.strictEqual(util.shouldRetryRequest(error), true);
    });

    it('should detect rateLimitExceeded reason', () => {
      const rateLimitError = new GaxiosError(
        'Rate limit error without code.',
        {} as GaxiosOptionsPrepared,
      );
      rateLimitError.code = 'rateLimitExceeded';
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should detect userRateLimitExceeded reason', () => {
      const rateLimitError = new GaxiosError(
        'Rate limit error without code.',
        {} as GaxiosOptionsPrepared,
      );
      rateLimitError.code = 'userRateLimitExceeded';
      assert.strictEqual(util.shouldRetryRequest(rateLimitError), true);
    });

    it('should retry on EAI_AGAIN error code', () => {
      const eaiAgainError = new GaxiosError(
        'EAI_AGAIN',
        {} as GaxiosOptionsPrepared,
      );
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

  describe('decorateHeaders', () => {
    const X_GOOG_API_HEADER_REGEX =
      /^gl-node\/(?<nodeVersion>\S+) gccl\/(?<gccl>\S+) gccl-invocation-id\/(?<gcclInvocationId>\S+)$/;

    it('should return default headers when no headers are provided', () => {
      const result = decorateHeaders();
      assert(result.headers);
      assert.ok(result.idempotencyToken);
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        result.idempotencyToken,
      );
      assert.ok(result.headers['User-Agent']);
      const match = X_GOOG_API_HEADER_REGEX.exec(
        result.headers['x-goog-api-client'],
      );
      assert.ok(match);
      assert.strictEqual(
        match.groups!.gcclInvocationId,
        result.idempotencyToken,
      );
    });

    it('should preserve custom headers passed in', () => {
      const result = decorateHeaders({
        'X-Custom-Header': 'custom-value',
      });
      assert.strictEqual(result.headers['X-Custom-Header'], 'custom-value');
    });

    it('should not mutate the input headers object', () => {
      const inputHeaders = {
        'X-Goog-Gcs-Idempotency-Token': '',
        'X-Keep-Header': 'stay',
      };
      const result = decorateHeaders(inputHeaders);
      assert.strictEqual(inputHeaders['X-Goog-Gcs-Idempotency-Token'], '');
      assert.strictEqual(inputHeaders['X-Keep-Header'], 'stay');
      assert.strictEqual(
        result.headers['X-Goog-Gcs-Idempotency-Token'],
        undefined,
      );
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        result.idempotencyToken,
      );
    });

    it('should respect user-provided x-goog-gcs-idempotency-token case-insensitively and align it with gccl-invocation-id', () => {
      const customToken = 'Custom-Token-With-W-456';
      const result = decorateHeaders({
        'X-Goog-Gcs-Idempotency-Token': customToken,
      });
      assert.strictEqual(result.idempotencyToken, customToken);
      assert.strictEqual(
        result.headers['X-Goog-Gcs-Idempotency-Token'],
        customToken,
      );
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        undefined,
      );
      const match = X_GOOG_API_HEADER_REGEX.exec(
        result.headers['x-goog-api-client'],
      );
      assert.ok(match);
      assert.strictEqual(match.groups!.gcclInvocationId, customToken);
    });

    it('should ignore invalid user-provided idempotency tokens and fallback to generating a UUID', () => {
      const result = decorateHeaders({
        'X-Goog-Gcs-Idempotency-Token': '',
      });
      assert.ok(result.idempotencyToken);
      assert.strictEqual(
        result.headers['X-Goog-Gcs-Idempotency-Token'],
        undefined,
      );
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        result.idempotencyToken,
      );
      const match = X_GOOG_API_HEADER_REGEX.exec(
        result.headers['x-goog-api-client'],
      );
      assert.ok(match);
      assert.strictEqual(
        match.groups!.gcclInvocationId,
        result.idempotencyToken,
      );
    });

    it('should ignore whitespace-only user-provided idempotency tokens and fallback to generating a UUID', () => {
      const result = decorateHeaders({
        'X-Goog-Gcs-Idempotency-Token': '   ',
      });
      assert.ok(result.idempotencyToken);
      assert.strictEqual(
        result.headers['X-Goog-Gcs-Idempotency-Token'],
        undefined,
      );
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        result.idempotencyToken,
      );
      const match = X_GOOG_API_HEADER_REGEX.exec(
        result.headers['x-goog-api-client'],
      );
      assert.ok(match);
      assert.strictEqual(
        match.groups!.gcclInvocationId,
        result.idempotencyToken,
      );
    });

    it('should use provided fallback idempotencyToken when user token is not provided or invalid', () => {
      const fallback = 'my-fallback-uuid-123';
      const result = decorateHeaders(
        {
          'X-Goog-Gcs-Idempotency-Token': '',
        },
        {idempotencyToken: fallback},
      );
      assert.strictEqual(result.idempotencyToken, fallback);
      assert.strictEqual(
        result.headers['X-Goog-Gcs-Idempotency-Token'],
        undefined,
      );
      assert.strictEqual(
        result.headers['x-goog-gcs-idempotency-token'],
        fallback,
      );
      const match = X_GOOG_API_HEADER_REGEX.exec(
        result.headers['x-goog-api-client'],
      );
      assert.ok(match);
      assert.strictEqual(match.groups!.gcclInvocationId, fallback);
    });

    it('should append providedUserAgent if provided in options', () => {
      const result = decorateHeaders(undefined, {
        providedUserAgent: 'custom-agent/1.0.0',
      });
      assert.ok(result.headers['User-Agent'].startsWith('custom-agent/1.0.0 '));
    });

    it('should append gcclGcsCmd if provided in options', () => {
      const result = decorateHeaders(undefined, {
        gcclGcsCmd: 'Storage.createBucket',
      });
      assert.ok(
        result.headers['x-goog-api-client'].endsWith(
          ' gccl-gcs-cmd/Storage.createBucket',
        ),
      );
    });

    it('should use custom packageJson if provided in options', () => {
      const result = decorateHeaders(undefined, {
        packageJson: {name: 'custom-pkg', version: '7.7.7'},
      });
      assert.ok(
        result.headers['x-goog-api-client'].includes(
          `gccl/7.7.7-${getModuleFormat()}`,
        ),
      );
    });
  });
});
