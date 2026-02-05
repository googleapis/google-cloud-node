// Copyright 2022 Google LLC
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import {randomBytes} from 'crypto';
import * as sinon from 'sinon';
import * as b from '../src/rowBatch';

describe('RowBatch', () => {
  let batch: b.RowBatch;

  const sandbox = sinon.createSandbox();

  const options = {
    maxBytes: 1000,
    maxRows: 100,
    maxMilliseconds: 10,
  };

  beforeEach(() => {
    batch = new b.RowBatch(Object.assign({}, options));
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
    it('should localize options', () => {
      assert.deepStrictEqual(batch.batchOptions, options);
    });

    it('should create a row array', () => {
      assert.deepStrictEqual(batch.rows, []);
    });

    it('should create a callback array', () => {
      assert.deepStrictEqual(batch.callbacks, []);
    });

    it('should capture the creation time', () => {
      const now = Date.now();

      sandbox.stub(Date, 'now').returns(now);
      batch = new b.RowBatch(options);

      assert.strictEqual(batch.created, now);
    });

    it('should initialize bytes to 0', () => {
      assert.strictEqual(batch.bytes, 0);
    });
  });

  describe('add', () => {
    const callback = sandbox.spy();
    const row = {
      name: 'Turing',
    };

    it('should add the row to the row array', () => {
      batch.add(row, callback);
      assert.deepStrictEqual(batch.rows, [row]);
    });

    it('should add the callback to the callback array', () => {
      batch.add(row, callback);
      assert.deepStrictEqual(batch.callbacks, [callback]);
    });
  });

  describe('canFit', () => {
    const row = {
      name: 'Turing',
    };

    it('should return false if too many rows', () => {
      batch.batchOptions.maxRows = 0;
      const canFit = batch.canFit(row);
      assert.strictEqual(canFit, false);
    });

    it('should return true if it can fit', () => {
      const canFit = batch.canFit(row);
      assert.strictEqual(canFit, true);
    });
  });

  describe('isAtMax', () => {
    it('should return true if at max row limit', () => {
      Array(50000)
        .fill({
          data: Buffer.from('Hello!'),
        })
        .forEach(row => {
          batch.add(row, () => {});
        });

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, true);
    });

    it('should return true if at max byte limit', () => {
      const row = {
        name: randomBytes(Math.pow(1024, 2) * 9),
      };

      batch.add(row, sandbox.spy());

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, true);
    });

    it('should return false if it is not full', () => {
      const row = {
        name: randomBytes(500),
      };

      batch.add(row, sandbox.spy());

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, false);
    });
  });

  describe('isFull', () => {
    const row = {
      name: 'Turing',
    };

    it('should return true if at max row limit', () => {
      batch.batchOptions.maxRows = 1;
      batch.add(row, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, true);
    });

    it('should return true if at max byte limit', () => {
      batch.batchOptions.maxBytes = row.name.length;
      batch.add(row, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, true);
    });

    it('should return false if it is not full', () => {
      batch.add(row, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, false);
    });
  });
});
