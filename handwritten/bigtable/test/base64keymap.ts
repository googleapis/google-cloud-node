// Copyright 2025 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as Long from 'long';
import * as proxyquire from 'proxyquire';
import * as sn from 'sinon';

import {RowStateEnum} from '../src/chunktransformer.js';
import {Mutation} from '../src/mutation.js';
import {Row} from '../src/row.js';
import {EncodedKeyMap, SqlValue} from '../src/execute-query/values.js';

describe('Bigtable/EncodedKeyMap', () => {
  describe('map tests', () => {
    it('test constructor', () => {
      const bufferKey = Buffer.from('exampleKey');
      const entries: [string | Buffer, string][] = [
        [bufferKey, 'valueForBufferKey'],
        ['stringKey', 'valueForStringKey'],
      ];

      const map = new EncodedKeyMap(entries);
      // get works with the same object
      assert.deepStrictEqual(map.get(bufferKey), 'valueForBufferKey');
      // get works with a new object
      assert.deepStrictEqual(
        map.get(Buffer.from('exampleKey')),
        'valueForBufferKey',
      );
      // get works with a regular string
      assert.deepStrictEqual(map.get('stringKey'), 'valueForStringKey');
    });
    it('test duplicate keys', () => {
      const bufferKey1 = Buffer.from('exampleKey');
      const bufferKey2 = Buffer.from('exampleKey');
      const bufferKey3 = Buffer.from('exampleKey');
      const entries: [string | Buffer, string][] = [
        [bufferKey1, 'valueForBufferKey1'],
        ['stringKey', 'valueForStringKey1'],
        [bufferKey2, 'valueForBufferKey2'],
        ['stringKey', 'valueForStringKey2'],
      ];

      const map = new EncodedKeyMap(entries);
      // get works with the same object
      assert.deepStrictEqual(map.get(bufferKey1), 'valueForBufferKey2');
      assert.deepStrictEqual(map.get(bufferKey2), 'valueForBufferKey2');
      // get works with a new object
      assert.deepStrictEqual(
        map.get(Buffer.from('exampleKey')),
        'valueForBufferKey2',
      );
      // get works with a regular string
      assert.deepStrictEqual(map.get('stringKey'), 'valueForStringKey2');

      // check that old value is replaced
      map.set(bufferKey3, 'valueForBufferKey3');
      assert.deepStrictEqual(
        map.get(Buffer.from('exampleKey')),
        'valueForBufferKey3',
      );
      map.set('stringKey', 'valueForStringKey3');
      assert.deepStrictEqual(map.get('stringKey'), 'valueForStringKey3');
    });
    it('test get/set', () => {
      const bufferKey = Buffer.from('exampleKey');
      const map = new EncodedKeyMap();
      map.set(bufferKey, 'valueForBufferKey');
      map.set('stringKey', 'valueForStringKey');
      // get works with the same object
      assert.deepStrictEqual(map.get(bufferKey), 'valueForBufferKey');
      // get works with a new object
      assert.deepStrictEqual(
        map.get(Buffer.from('exampleKey')),
        'valueForBufferKey',
      );
      // get works with a regular string
      assert.deepStrictEqual(map.get('stringKey'), 'valueForStringKey');
    });
    it('test null vs empty bytes', () => {
      const entries: [string | Buffer | null, string][] = [
        [null, 'valueForNull'],
        ['', 'valueForEmptyString'],
      ];

      // TS normally would not permit a null key, thus we pass entries as any
      const map = new EncodedKeyMap(entries as any);
      // get works with the same object
      assert.deepStrictEqual(map.get(''), 'valueForEmptyString');
      // get works with a regular string
      assert.deepStrictEqual(map.get(null as any), 'valueForNull');
    });
    it('test null vs empty bytes', () => {
      const entries: [string | Buffer | null, string][] = [
        [null, 'valueForNull'],
        [Buffer.from(''), 'valueForEmptyBuffer'],
      ];

      // TS normally would not permit a null key, thus we pass entries as any
      const map = new EncodedKeyMap(entries as any);
      // get works with the same object
      assert.deepStrictEqual(map.get(Buffer.from('')), 'valueForEmptyBuffer');
      // get works with a regular string
      assert.deepStrictEqual(map.get(null as any), 'valueForNull');
    });
    it('map builtin functions', () => {
      const entries: [string | Buffer | null, string][] = [
        [Buffer.from('Buffer1'), 'valueForBuffer1'],
        ['stringKey1', 'valueForString1'],
      ];

      // TS normally would not permit a null key, thus we pass entries as any
      const map = new EncodedKeyMap(entries as any);

      // get works with a buffer
      assert.deepStrictEqual(
        map.get(Buffer.from('Buffer1')),
        'valueForBuffer1',
      );
      // get works with a regular string
      assert.deepStrictEqual(map.get('stringKey1'), 'valueForString1');

      // delete, set, has, size

      map.set(Buffer.from('Buffer2'), 'valueForBuffer2');
      map.set('stringKey2', 'valueForString2');

      assert.deepStrictEqual(map.size, 4);

      assert.deepStrictEqual(
        map.get(Buffer.from('Buffer2')),
        'valueForBuffer2',
      );
      assert.deepStrictEqual(map.get('stringKey2'), 'valueForString2');

      assert.strictEqual(map.has('stringKey2'), true);
      assert.strictEqual(map.has(Buffer.from('Buffer2')), true);

      map.delete('stringKey2');
      map.delete(Buffer.from('Buffer2'));

      assert.strictEqual(map.has('stringKey2'), false);
      assert.strictEqual(map.has(Buffer.from('Buffer2')), false);

      assert.deepStrictEqual(map.size, 2);

      // iterators

      const keys = [...map.keys()];
      assert.deepStrictEqual(keys[0]?.toString(), 'Buffer1');
      assert.deepStrictEqual(keys[0] instanceof Buffer, true);
      assert.deepStrictEqual(keys[1], 'stringKey1');

      const values = [...map.values()];
      assert.deepStrictEqual(values[0], 'valueForBuffer1');
      assert.deepStrictEqual(values[1], 'valueForString1');

      const resultForEach: [string | bigint | Uint8Array | null, SqlValue][] =
        [];
      map.forEach((value, key) => {
        resultForEach.push([key, value]);
      });

      assert.deepStrictEqual(resultForEach[0][0]?.toString(), 'Buffer1');
      assert.deepStrictEqual(resultForEach[0][0] instanceof Buffer, true);
      assert.deepStrictEqual(resultForEach[0][1], 'valueForBuffer1');
      assert.deepStrictEqual(resultForEach[1][0], 'stringKey1');
      assert.deepStrictEqual(resultForEach[1][1], 'valueForString1');
    });
  });
});
