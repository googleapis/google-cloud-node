// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {RetryableCodeMap, Code} from '../../src/schema/retryable-code-map.js';
import assert from 'assert';
import {describe, it} from 'mocha';

describe('src/schema/retryable-code-map.ts', () => {
  describe('Retry codes', () => {
    it('has readable names for common code lists', () => {
      const map = new RetryableCodeMap();
      assert.strictEqual(map.getRetryableCodesName([]), 'non_idempotent');
      assert.strictEqual(
        map.getRetryableCodesName([Code.UNAVAILABLE, Code.DEADLINE_EXCEEDED]),
        'idempotent',
      );
    });

    it('generates the same readable name for the same set of parameters', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getRetryableCodesName([
        Code.FAILED_PRECONDITION,
        Code.ALREADY_EXISTS,
        Code.INVALID_ARGUMENT,
      ]);
      const name2 = map.getRetryableCodesName([
        Code.INVALID_ARGUMENT,
        Code.ALREADY_EXISTS,
        Code.FAILED_PRECONDITION,
      ]);
      assert.strictEqual(name1, name2);
      assert.notStrictEqual(name1, 'idempotent');
      assert.notStrictEqual(name1, 'non_idempotent');
      assert.notStrictEqual(name2, 'idempotent');
      assert.notStrictEqual(name2, 'non_idempotent');
    });

    it('generates different readable names for different sets of parameters', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getRetryableCodesName([
        Code.FAILED_PRECONDITION,
        Code.ALREADY_EXISTS,
        Code.INVALID_ARGUMENT,
      ]);
      const name2 = map.getRetryableCodesName([
        Code.INVALID_ARGUMENT,
        Code.FAILED_PRECONDITION,
      ]);
      assert.notStrictEqual(name1, name2);
      assert.notStrictEqual(name1, 'idempotent');
      assert.notStrictEqual(name1, 'non_idempotent');
      assert.notStrictEqual(name2, 'idempotent');
      assert.notStrictEqual(name2, 'non_idempotent');
    });

    it('returns list of all readable names', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getRetryableCodesName([Code.ABORTED]);
      const name2 = map.getRetryableCodesName([Code.ALREADY_EXISTS]);
      const names = map.getPrettyCodesNames();
      assert.strictEqual(names.length, 4);
      assert.notStrictEqual(name1, name2);
      assert.notStrictEqual(name1, 'idempotent');
      assert.notStrictEqual(name1, 'non_idempotent');
      assert.notStrictEqual(name2, 'idempotent');
      assert.notStrictEqual(name2, 'non_idempotent');
      assert(names.includes('idempotent'));
      assert(names.includes('non_idempotent'));
      assert(names.includes(name1));
      assert(names.includes(name2));
    });

    it('allows to suggest a name', () => {
      const map = new RetryableCodeMap();
      const name = map.getRetryableCodesName([Code.ABORTED], 'suggested_name');
      assert.strictEqual(name, 'suggested_name');
    });

    it('returns valid JSON list of codes by name', () => {
      const map = new RetryableCodeMap();
      const name = map.getRetryableCodesName([
        Code.FAILED_PRECONDITION,
        Code.ALREADY_EXISTS,
        Code.INVALID_ARGUMENT,
      ]);
      const jsonString = map.getCodesJSON(name);
      const json = JSON.parse(jsonString);
      assert(Array.isArray(json));
      assert.strictEqual(json.length, 3);
      assert(json.includes('FAILED_PRECONDITION'));
      assert(json.includes('ALREADY_EXISTS'));
      assert(json.includes('INVALID_ARGUMENT'));
    });
  });

  describe('Retry options', () => {
    it('has a readable name for default retry options', () => {
      const map = new RetryableCodeMap();
      assert.strictEqual(
        map.getParamsName({
          initial_retry_delay_millis: 100,
          retry_delay_multiplier: 1.3,
          max_retry_delay_millis: 60000,
          initial_rpc_timeout_millis: 60000,
          rpc_timeout_multiplier: 1.0,
          max_rpc_timeout_millis: 60000,
          total_timeout_millis: 600000,
        }),
        'default',
      );
    });

    it('generates the same name for the same set of options', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getParamsName({a: 10, b: 20});
      const name2 = map.getParamsName({b: 20.0, a: 10.0});
      assert.strictEqual(name1, name2);
      assert.notStrictEqual(name1, 'default');
      assert.notStrictEqual(name2, 'default');
    });

    it('generates different names for different sets of parameters', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getParamsName({a: 1});
      const name2 = map.getParamsName({a: 2});
      assert.notStrictEqual(name1, name2);
      assert.notStrictEqual(name1, 'default');
      assert.notStrictEqual(name2, 'default');
    });

    it('returns list of all names', () => {
      const map = new RetryableCodeMap();
      const name1 = map.getParamsName({a: 1});
      const name2 = map.getParamsName({a: 2});
      const names = map.getPrettyParamsNames();
      assert.strictEqual(names.length, 3);
      assert.notStrictEqual(name1, name2);
      assert.notStrictEqual(name1, 'default');
      assert.notStrictEqual(name2, 'default');
      assert(names.includes('default'));
      assert(names.includes(name1));
      assert(names.includes(name2));
    });

    it('allows to suggest a name', () => {
      const map = new RetryableCodeMap();
      const name = map.getParamsName({a: 1}, 'suggested_name');
      assert.strictEqual(name, 'suggested_name');
    });

    it('returns valid JSON object of parameters by name', () => {
      const map = new RetryableCodeMap();
      const param = {a: 1, b: 2};
      const name = map.getParamsName(param);
      const jsonString = map.getParamsJSON(name);
      const json = JSON.parse(jsonString);
      assert.deepStrictEqual(json, param);
    });
  });
});
