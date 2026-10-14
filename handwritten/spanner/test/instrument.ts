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
import {getQueryTraceConfig} from '../src/instrument';

describe('instrument', () => {
  describe('getQueryTraceConfig', () => {
    it('should return empty object for null or undefined', () => {
      assert.deepStrictEqual(getQueryTraceConfig(null), {});
      assert.deepStrictEqual(getQueryTraceConfig(undefined), {});
      assert.deepStrictEqual(getQueryTraceConfig(), {});
    });

    it('should extract sql string without spreading characters', () => {
      const sql = 'SELECT 1';
      const result = getQueryTraceConfig(sql);

      assert.deepStrictEqual(result, {sql});
      assert.strictEqual((result as any)['0'], undefined);
    });

    it('should extract sql and requestTag from object query', () => {
      const query = {
        sql: 'SELECT * FROM Singers WHERE SingerId = @id',
        requestOptions: {
          requestTag: 'find-singers',
          transactionTag: 'read-tx',
        },
      };

      const result = getQueryTraceConfig(query);

      assert.deepStrictEqual(result, {
        sql: query.sql,
        requestTag: 'find-singers',
      });
    });

    it('should handle object query without requestOptions', () => {
      const query = {
        sql: 'SELECT 1',
      };

      const result = getQueryTraceConfig(query);

      assert.deepStrictEqual(result, {
        sql: 'SELECT 1',
        requestTag: undefined,
      });
    });

    it('should handle object query with empty requestOptions', () => {
      const query = {
        sql: 'SELECT 1',
        requestOptions: {},
      };

      const result = getQueryTraceConfig(query);

      assert.deepStrictEqual(result, {
        sql: 'SELECT 1',
        requestTag: undefined,
      });
    });

    it('should handle empty object query', () => {
      const result = getQueryTraceConfig({});

      assert.deepStrictEqual(result, {
        sql: undefined,
        requestTag: undefined,
      });
    });
  });
});
