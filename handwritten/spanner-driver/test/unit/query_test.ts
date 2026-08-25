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

  it('should handle null argument safely in Query constructor', () => {
    // @ts-expect-error Testing runtime null text argument
    const q = new Query(null);
    assert.strictEqual(q.text, null);
    assert.strictEqual(q.values, undefined);
  });

  it('should copy properties when constructed from existing Query instance', () => {
    const orig = new Query('SELECT 1', [10]);
    const q = new Query(orig);
    assert.strictEqual(q.text, 'SELECT 1');
    assert.deepStrictEqual(q.values, [10]);
  });

  it('should allow overriding values and callback when constructed from existing Query instance', () => {
    const orig = new Query('SELECT $1');
    const cb = () => {};
    const q = new Query(orig, [99], cb);
    assert.strictEqual(q.text, 'SELECT $1');
    assert.deepStrictEqual(q.values, [99]);
    assert.strictEqual(q.callback, cb);
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

  it('should clear promiseResolver after setPromise is called to prevent memory retention on multiple calls', async () => {
    const q = new Query<{rowCount: number}>('SELECT 1');
    assert.notStrictEqual(
      (q as unknown as {promiseResolver: unknown}).promiseResolver,
      undefined,
    );
    q.setPromise(Promise.resolve({rowCount: 1}));
    assert.strictEqual(
      (q as unknown as {promiseResolver: unknown}).promiseResolver,
      undefined,
    );
    q.setPromise(Promise.resolve({rowCount: 2}));
    const res = await q;
    assert.strictEqual(res.rowCount, 2);
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

  it('should not throw TypeError when calling catch() or then() on a newly constructed Query', () => {
    const q = new Query('SELECT 1');
    assert.doesNotThrow(() => {
      q.catch(() => {});
    });
  });

  it('should resolve thenable promise via query.resolve()', async () => {
    const q = new Query<{rowCount: number}>('SELECT 1');
    q.resolve({rowCount: 5});
    const res = await q;
    assert.strictEqual(res.rowCount, 5);
  });

  it('should ignore duplicate query.resolve() calls and retain first resolved value', async () => {
    const q = new Query<{rowCount: number}>('SELECT 1');
    q.resolve({rowCount: 5});
    q.resolve({rowCount: 10});
    const res = await q;
    assert.strictEqual(res.rowCount, 5);
  });

  it('should ignore duplicate query.reject() calls and retain first rejection error', async () => {
    const q = new Query('SELECT 1');
    q.reject(new Error('First rejection'));
    q.reject(new Error('Second rejection'));
    try {
      await q;
      assert.fail('Expected query promise to reject');
    } catch (err: unknown) {
      assert.strictEqual((err as Error).message, 'First rejection');
    }
  });
});
