/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import {randomBytes} from 'crypto';
import * as sinon from 'sinon';

import {MessageBatch} from '../../src/publisher/message-batch';
import {PubsubMessage} from '../../src/publisher';

describe('MessageBatch', () => {
  let batch: MessageBatch;

  const sandbox = sinon.createSandbox();

  const options = {
    maxBytes: 1000,
    maxMessages: 100,
  };

  beforeEach(() => {
    batch = new MessageBatch(Object.assign({}, options), 'topicName');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
    it('should localize options', () => {
      assert.deepStrictEqual(batch.options, options);
    });

    it('should create a message array', () => {
      assert.deepStrictEqual(batch.messages, []);
    });

    it('should create a callback array', () => {
      assert.deepStrictEqual(batch.callbacks, []);
    });

    it('should capture the creation time', () => {
      const now = Date.now();

      sandbox.stub(Date, 'now').returns(now);
      batch = new MessageBatch(options, 'topicName');

      assert.strictEqual(batch.created, now);
    });

    it('should initialize bytes to 0', () => {
      assert.strictEqual(batch.bytes, 0);
    });
  });

  describe('add', () => {
    const callback = sandbox.spy();
    let message: PubsubMessage;
    let messageSize: number;
    beforeEach(() => {
      message = {
        data: Buffer.from('Hello, world!'),
      };
      messageSize = message.data!.length;
    });

    it('should add the message to the message array', () => {
      batch.add(message, callback);
      assert.deepStrictEqual(batch.messages, [message]);
    });

    it('should add the callback to the callback array', () => {
      batch.add(message, callback);
      assert.deepStrictEqual(batch.callbacks, [callback]);
    });

    it('should adjust the byte count', () => {
      batch.add(message, callback);
      assert.strictEqual(batch.bytes, messageSize);
    });
  });

  describe('canFit', () => {
    let message: PubsubMessage;
    let messageSize: number;
    beforeEach(() => {
      message = {
        data: Buffer.from('Hello, world!'),
      };
      messageSize = message.data!.length;
    });

    it('should return false if too many messages', () => {
      batch.options.maxMessages = 0;
      const canFit = batch.canFit(message);
      assert.strictEqual(canFit, false);
      assert.strictEqual(batch.canFitCount(), false);
      assert.strictEqual(batch.canFitSize(message), true);
    });

    it('should return false if too many bytes', () => {
      batch.options.maxBytes = messageSize - 1;
      const canFit = batch.canFit(message);
      assert.strictEqual(canFit, false);
      assert.strictEqual(batch.canFitCount(), true);
      assert.strictEqual(batch.canFitSize(message), false);
    });

    it('should return true if it can fit', () => {
      const canFit = batch.canFit(message);
      assert.strictEqual(canFit, true);
      assert.strictEqual(batch.canFitCount(), true);
      assert.strictEqual(batch.canFitSize(message), true);
    });
  });

  describe('isAtMax', () => {
    it('should return true if at max message limit', () => {
      // tslint:disable-next-line ban
      Array(1000)
        .fill({
          data: Buffer.from('Hello!'),
        })
        .forEach(message => {
          batch.add(message, sandbox.spy());
        });

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, true);
    });

    it('should return true if at max byte limit', () => {
      const message = {
        data: randomBytes(Math.pow(1024, 2) * 9),
      };

      batch.add(message, sandbox.spy());

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, true);
    });

    it('should return false if it is not full', () => {
      const message = {
        data: randomBytes(500),
      };

      batch.add(message, sandbox.spy());

      const isAtMax = batch.isAtMax();
      assert.strictEqual(isAtMax, false);
    });
  });

  describe('isFull', () => {
    let message: PubsubMessage;
    let messageSize: number;
    beforeEach(() => {
      message = {
        data: Buffer.from('Hello, world!'),
      };
      messageSize = message.data!.length;
    });

    it('should return true if at max message limit', () => {
      batch.options.maxMessages = 1;
      batch.add(message, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, true);
      assert.strictEqual(batch.isFullMessages(), true);
      assert.strictEqual(batch.isFullSize(), false);
    });

    it('should return true if at max byte limit', () => {
      batch.options.maxBytes = messageSize;
      batch.add(message, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, true);
      assert.strictEqual(batch.isFullMessages(), false);
      assert.strictEqual(batch.isFullSize(), true);
    });

    it('should return false if it is not full', () => {
      batch.add(message, sandbox.spy());
      const isFull = batch.isFull();
      assert.strictEqual(isFull, false);
      assert.strictEqual(batch.isFullMessages(), false);
      assert.strictEqual(batch.isFullSize(), false);
    });
  });

  describe('setOptions', () => {
    it('updates the options', () => {
      const newOptions = {};
      batch.setOptions(newOptions);
      assert.strictEqual(newOptions, batch.options);
    });
  });

  it('returns data from end()', () => {
    const output = batch.end();
    assert.strictEqual(output.messages, batch.messages);
    assert.strictEqual(output.callbacks, batch.callbacks);
  });
});
