// Copyright 2023 Google LLC
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

import {strict as assert} from 'assert';
import * as sinon from 'sinon';

import {
  isValidFile,
  LRUCache,
  removeUndefinedValuesInObject,
} from '../src/util';
import {TestUtils} from './utils';

describe('util', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('LRUCache', () => {
    it('should set and get a cached item', () => {
      const expected = 'value';
      const lru = new LRUCache({capacity: 5});
      lru.set('sample', expected);

      assert.equal(lru.get('sample'), expected);
    });

    it('should evict oldest items when over capacity', () => {
      const capacity = 5;
      const overCapacity = 2;

      const lru = new LRUCache({capacity});

      for (let i = 0; i < capacity + overCapacity; i++) {
        lru.set(`${i}`, i);
      }

      // the first few shouldn't be there
      for (let i = 0; i < overCapacity; i++) {
        assert.equal(lru.get(`${i}`), undefined);
      }

      // the rest should be there
      for (let i = overCapacity; i < capacity + overCapacity; i++) {
        assert.equal(lru.get(`${i}`), i);
      }
    });

    it('should evict items older than a supplied `maxAge`', async () => {
      const maxAge = 50;

      sandbox.clock = TestUtils.useFakeTimers(sandbox);

      const lru = new LRUCache({capacity: 5, maxAge});

      lru.set('first', 1);
      lru.set('second', 2);

      // back to the future 🏎️
      sandbox.clock.tick(maxAge + 1);

      // just set, so should be fine
      lru.set('third', 3);
      assert.equal(lru.get('third'), 3);

      // these are too old
      assert.equal(lru.get('first'), undefined);
      assert.equal(lru.get('second'), undefined);
    });
  });

  describe('isValidFilePath', () => {
    it('should return true when valid file path', async () => {
      const isValidPath = await isValidFile('./test/fixtures/empty.json');
      assert.equal(isValidPath, true);
    });

    it('should return false when invalid file path', async () => {
      const isValidPath = await isValidFile('abc/pqr');
      assert.equal(isValidPath, false);
    });
  });
});

describe('util removeUndefinedValuesInObject', () => {
  it('remove undefined type values in object', () => {
    const object: {[key: string]: unknown} = {
      undefined: undefined,
      number: 1,
    };
    assert.deepEqual(removeUndefinedValuesInObject(object), {
      number: 1,
    });
  });
  it('remove undefined string values in object', () => {
    const object: {[key: string]: unknown} = {
      undefined: 'undefined',
      number: 1,
    };
    assert.deepEqual(removeUndefinedValuesInObject(object), {
      number: 1,
    });
  });
});
