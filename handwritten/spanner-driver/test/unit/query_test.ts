// Copyright 2026 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {Query} from '../../src/lib/query.js';

describe('Query Class', () => {
  it('should initialize Query with text string and positional values', () => {
    const q = new Query('SELECT $1', [42]);
    assert.strictEqual(q.text, 'SELECT $1');
    assert.deepStrictEqual(q.values, [42]);
  });

  it('should initialize Query from QueryConfig object', () => {
    const q = new Query({
      text: 'SELECT * FROM users WHERE status = $1',
      values: ['ACTIVE'],
      rowMode: 'array',
    });
    assert.strictEqual(q.text, 'SELECT * FROM users WHERE status = $1');
    assert.deepStrictEqual(q.values, ['ACTIVE']);
    assert.strictEqual(q.rowMode, 'array');
  });

  it('should copy properties when constructed from existing Query instance', () => {
    const orig = new Query('SELECT 1', [10]);
    const q = new Query(orig);
    assert.strictEqual(q.text, 'SELECT 1');
    assert.deepStrictEqual(q.values, [10]);
  });

  it('should handle callback argument overload correctly', () => {
    const callbackFn = () => {};
    const q = new Query('SELECT 1', callbackFn);
    assert.strictEqual(q.text, 'SELECT 1');
    assert.strictEqual(q.values, undefined);
    assert.strictEqual(q.callback, callbackFn);
  });

  it('should resolve thenable promise on .then()', async () => {
    const q = new Query<{rowCount: number}>('SELECT 1');
    q.setPromise(Promise.resolve({rowCount: 1}));
    const res = await q;
    assert.strictEqual(res.rowCount, 1);
  });

  it('should reject thenable promise on .catch()', async () => {
    const q = new Query('SELECT 1');
    q.setPromise(Promise.reject(new Error('Query failed')));
    try {
      await q;
      assert.fail('Should have rejected');
    } catch (err: unknown) {
      assert.strictEqual((err as Error).message, 'Query failed');
    }
  });

  it('should invoke .finally() callback', async () => {
    const q = new Query<{rowCount: number}>('SELECT 1');
    q.setPromise(Promise.resolve({rowCount: 1}));
    let finallyInvoked = false;
    await q.finally(() => {
      finallyInvoked = true;
    });
    assert.strictEqual(finallyInvoked, true);
  });
});
