/**
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

/* eslint-disable quote-props */
/* quote-props causes errors on quoted property names in the data like
 * 'foo_retry' or 'initial_retry_delay_millis' in this file. However,
 * allowing that causes another errors of non-camelcase symbols anyways.
 * Therefore quote-props is disabled explicitly only in this file. */

/* eslint-disable @typescript-eslint/ban-ts-comment */

import assert from 'assert';
import {describe, it} from 'mocha';
import * as gax from '../../src/gax';

const SERVICE_NAME = 'test.interface.v1.api';

const A_CONFIG = {
  interfaces: {},
};

//@ts-ignore
A_CONFIG.interfaces[SERVICE_NAME] = {
  retry_codes: {
    foo_retry: ['code_a', 'code_b'],
    bar_retry: ['code_c'],
  },
  retry_params: {
    default: {
      initial_retry_delay_millis: 100,
      retry_delay_multiplier: 1.2,
      max_retry_delay_millis: 1000,
      initial_rpc_timeout_millis: 300,
      rpc_timeout_multiplier: 1.3,
      max_rpc_timeout_millis: 3000,
      total_timeout_millis: 30000,
    },
  },
  methods: {
    BundlingMethod: {
      timeout_millis: 40000,
      retry_codes_name: 'foo_retry',
      retry_params_name: 'default',
      bundling: {
        element_count_threshold: 6,
        element_count_limit: 10,
      },
    },
    PageStreamingMethod: {
      retry_codes_name: 'bar_retry',
      retry_params_name: 'default',
    },
  },
};

const RETRY_DICT = {
  code_a: 1,
  code_b: 2,
  code_c: 3,
};

function expectRetryOptions(obj: gax.RetryOptions) {
  assert.ok(obj instanceof Object);
  ['retryCodes', 'backoffSettings'].forEach(k =>
    // eslint-disable-next-line no-prototype-builtins
    assert.ok(obj.hasOwnProperty(k)),
  );
  assert.ok(Array.isArray(obj.retryCodes));
  expectBackoffSettings(obj.backoffSettings);
}

function expectBackoffSettings(obj: gax.BackoffSettings) {
  assert.ok(obj instanceof Object);
  [
    'initialRetryDelayMillis',
    'retryDelayMultiplier',
    'maxRetryDelayMillis',
    'initialRpcTimeoutMillis',
    'rpcTimeoutMultiplier',
    'maxRpcTimeoutMillis',
    'totalTimeoutMillis',
  ].forEach(k => {
    // eslint-disable-next-line no-prototype-builtins
    assert.ok(obj.hasOwnProperty(k));
  });
}

describe('gax construct settings', () => {
  it('creates settings', () => {
    const otherArgs = {key: 'value'};
    const defaults = gax.constructSettings(
      SERVICE_NAME,
      A_CONFIG,
      {},
      RETRY_DICT,
      otherArgs,
    );
    let settings = defaults.bundlingMethod;
    assert.strictEqual(settings.timeout, 40000);
    assert.strictEqual(settings.apiName, SERVICE_NAME);
    expectRetryOptions(settings.retry);
    assert.deepStrictEqual(settings.retry.retryCodes, [1, 2]);
    assert.strictEqual(settings.otherArgs, otherArgs);

    settings = defaults.pageStreamingMethod;
    assert.strictEqual(settings.timeout, 30000);
    expectRetryOptions(settings.retry);
    assert.deepStrictEqual(settings.retry.retryCodes, [3]);
    assert.strictEqual(settings.otherArgs, otherArgs);
  });

  it('overrides settings', () => {
    const overrides = {interfaces: {}};
    //@ts-ignore
    overrides.interfaces[SERVICE_NAME] = {
      methods: {
        PageStreamingMethod: null,
        BundlingMethod: {
          bundling: null,
        },
      },
    };
    const defaults = gax.constructSettings(
      SERVICE_NAME,
      A_CONFIG,
      overrides,
      RETRY_DICT,
    );
    let settings = defaults.bundlingMethod;
    assert.strictEqual(settings.timeout, 40000);

    settings = defaults.pageStreamingMethod;
    assert.strictEqual(settings.timeout, 30000);
    assert.strictEqual(settings.retry, null);
  });

  it('overrides settings more precisely', () => {
    const overrides = {interfaces: {}};
    //@ts-ignore
    overrides.interfaces[SERVICE_NAME] = {
      retry_codes: {
        bar_retry: [],
        baz_retry: ['code_a'],
      },
      retry_params: {
        default: {
          initial_retry_delay_millis: 1000,
          retry_delay_multiplier: 1.2,
          max_retry_delay_millis: 10000,
          initial_rpc_timeout_millis: 3000,
          rpc_timeout_multiplier: 1.3,
          max_rpc_timeout_millis: 30000,
          total_timeout_millis: 300000,
        },
      },
      methods: {
        BundlingMethod: {
          retry_params_name: 'default',
          retry_codes_name: 'baz_retry',
          timeout_millis: 50000,
        },
      },
    };

    const defaults = gax.constructSettings(
      SERVICE_NAME,
      A_CONFIG,
      overrides,
      RETRY_DICT,
    );

    let settings = defaults.bundlingMethod;
    let backoff = settings.retry.backoffSettings;
    assert.strictEqual(backoff.initialRetryDelayMillis, 1000);
    assert.deepStrictEqual(settings.retry.retryCodes, [RETRY_DICT.code_a]);
    assert.strictEqual(settings.timeout, 50000);

    /* page_streaming_method is unaffected because it's not specified in
     * overrides. 'bar_retry' or 'default' definitions in overrides should
     * not affect the methods which are not in the overrides. */
    settings = defaults.pageStreamingMethod;
    backoff = settings.retry.backoffSettings;
    assert.strictEqual(backoff.initialRetryDelayMillis, 100);
    assert.strictEqual(backoff.retryDelayMultiplier, 1.2);
    assert.strictEqual(backoff.maxRetryDelayMillis, 1000);
    assert.deepStrictEqual(settings.retry.retryCodes, [RETRY_DICT.code_c]);
  });
});
