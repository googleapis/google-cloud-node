/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import {EventEmitter} from 'events';
import {CallOptions, GoogleError, loggingUtils, Status} from 'google-gax';
import * as sinon from 'sinon';
import * as uuid from 'uuid';
import defer = require('p-defer');

import * as messageTypes from '../src/message-queues';
import {BatchError} from '../src/message-queues';
import {Message, Subscriber} from '../src/subscriber';
import {DebugMessage} from '../src/debug';
import {FakeLog, TestUtils} from './test-utils';

class FakeClient {
  async acknowledge(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reqOpts: {subscription: string; ackIds: string[]},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callOptions: CallOptions,
  ): Promise<void> {}
  async modifyAckDeadline(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reqOpts: {
      subscription: string;
      ackIds: string[];
      ackDeadlineSeconds: number;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callOptions: CallOptions,
  ): Promise<void> {}
}

class FakeSubscriber extends EventEmitter {
  name: string;
  client: FakeClient;
  iEOS: boolean;

  constructor() {
    super();

    this.name = `projects/test/subscriptions/${uuid.v4()}`;
    this.client = new FakeClient();
    this.iEOS = false;
  }
  async getClient(): Promise<FakeClient> {
    return this.client;
  }
  get isExactlyOnceDelivery(): boolean {
    return this.iEOS;
  }
}

class FakeMessage {
  ackId: string;
  constructor() {
    this.ackId = uuid.v4();
  }
}

function fakeMessage() {
  return new FakeMessage() as unknown as Message;
}

class MessageQueue extends messageTypes.MessageQueue {
  batches: messageTypes.QueuedMessages[] = [];
  protected getType(): string {
    return 'test';
  }
  async _sendBatch(
    batch: messageTypes.QueuedMessages,
  ): Promise<messageTypes.QueuedMessages> {
    this.batches.push(batch);
    return [];
  }
}

class AckQueue extends messageTypes.AckQueue {
  get requests() {
    return this._requests;
  }
}

class ModAckQueue extends messageTypes.ModAckQueue {
  get requests() {
    return this._requests;
  }
}

describe('MessageQueues', () => {
  const sandbox = sinon.createSandbox();

  let fakeSubscriber: FakeSubscriber;
  let subscriber: Subscriber;

  before(() => {});

  beforeEach(() => {
    fakeSubscriber = new FakeSubscriber();
    subscriber = fakeSubscriber as unknown as Subscriber;
  });

  afterEach(() => sandbox.restore());

  describe('MessageQueue', () => {
    let messageQueue: MessageQueue;

    beforeEach(() => {
      messageQueue = new MessageQueue(subscriber);
    });

    describe('initialization', () => {
      it('should default numPendingRequests', () => {
        assert.strictEqual(messageQueue.numPendingRequests, 0);
      });

      it('should set any provided options', () => {
        const fakeOptions = {};
        const stub = sandbox.stub(MessageQueue.prototype, 'setOptions');
        new MessageQueue(subscriber, fakeOptions);

        const [options] = stub.lastCall.args;
        assert.strictEqual(options, fakeOptions);
      });
    });

    describe('maxMilliseconds', () => {
      it('should return the maxMilliseconds option', () => {
        const maxMilliseconds = 101;

        messageQueue.setOptions({maxMilliseconds});
        assert.strictEqual(messageQueue.maxMilliseconds, maxMilliseconds);
      });
    });

    describe('add', () => {
      it('should increase the number of pending requests', () => {
        void messageQueue.add(new FakeMessage() as Message);
        assert.strictEqual(messageQueue.numPendingRequests, 1);
      });

      it('should flush the queue if at capacity', () => {
        const stub = sandbox.stub(messageQueue, 'flush');

        messageQueue.setOptions({maxMessages: 1});
        void messageQueue.add(new FakeMessage() as Message);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should flush the queue if at byte capacity', () => {
        const stub = sandbox.stub(messageQueue, 'flush');

        messageQueue.bytes = messageTypes.MAX_BATCH_BYTES - 10;
        void messageQueue.add(new FakeMessage() as Message);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should schedule a flush if needed', () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        const stub = sandbox.stub(messageQueue, 'flush');
        const delay = 1000;

        messageQueue.setOptions({maxMilliseconds: delay});
        void messageQueue.add(new FakeMessage() as Message);

        assert.strictEqual(stub.callCount, 0);
        clock.tick(delay);
        assert.strictEqual(stub.callCount, 1);
      });

      it('should return a Promise that resolves when the ack is sent', async () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        const delay = 1000;
        messageQueue.setOptions({maxMilliseconds: delay});

        sandbox
          .stub(messageQueue, '_sendBatch')
          .callsFake((batch: messageTypes.QueuedMessages) => {
            batch.forEach(m => {
              m.responsePromise?.resolve();
            });
            return Promise.resolve([]);
          });

        const completion = messageQueue.add(new FakeMessage() as Message);
        clock.tick(delay);
        await completion;
      });
    });

    describe('flush', () => {
      it('should cancel scheduled flushes', () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        const spy = sandbox.spy(messageQueue, 'flush');
        const delay = 1000;

        messageQueue.setOptions({maxMilliseconds: delay});
        void messageQueue.add(new FakeMessage() as Message);
        void messageQueue.flush('test');
        clock.tick(delay);

        assert.strictEqual(spy.callCount, 1);
      });

      it('should remove the messages from the queue', () => {
        void messageQueue.add(new FakeMessage() as Message);
        void messageQueue.flush('test');

        assert.strictEqual(messageQueue.numPendingRequests, 0);
      });

      it('should remove the bytes of messages from the queue', () => {
        void messageQueue.add(new FakeMessage() as Message);
        void messageQueue.flush('test');

        assert.strictEqual(messageQueue.bytes, 0);
      });

      it('should send the batch', () => {
        const message = new FakeMessage();
        const deadline = 10;

        void messageQueue.add(message as Message, deadline);
        void messageQueue.flush('test');

        const [batch] = messageQueue.batches;
        assert.strictEqual(batch[0].message.ackId, message.ackId);
        assert.strictEqual(batch[0].deadline, deadline);
        assert.ok(batch[0].responsePromise?.resolve);
      });

      it('should emit any errors as debug events', done => {
        const fakeError = new Error('err');

        sandbox.stub(messageQueue.batches, 'push').throws(fakeError);

        subscriber.on('debug', msg => {
          assert.strictEqual(msg.message, fakeError.message);
          done();
        });

        void messageQueue.flush('test');
      });

      it('should resolve any pending promises', async () => {
        const promise = messageQueue.onFlush();
        setImmediate(async () => await messageQueue.flush('test'));
        return promise;
      });

      it('should resolve onDrain only after all in-flight messages have been flushed', async () => {
        const log: string[] = [];
        const sendDone = defer();
        sandbox.stub(messageQueue, '_sendBatch').callsFake(async () => {
          log.push('send:start');
          await sendDone.promise;
          log.push('send:end');
          return [];
        });

        const message = new FakeMessage();
        const deadline = 10;
        const onDrainBeforeFlush = messageQueue
          .onDrain()
          .then(() => log.push('drain1'));
        void messageQueue.add(message as Message, deadline);
        void messageQueue.flush('test');
        assert.deepStrictEqual(log, ['send:start']);
        sendDone.resolve();
        await messageQueue.onDrain().then(() => log.push('drain2'));
        await onDrainBeforeFlush;

        assert.deepStrictEqual(log, [
          'send:start',
          'send:end',
          'drain1',
          'drain2',
        ]);
      });
    });

    describe('onFlush', () => {
      it('should create a promise', () => {
        const promise = messageQueue.onFlush();

        assert(promise instanceof Promise);
      });

      it('should re-use existing promises', () => {
        const promise1 = messageQueue.onFlush();
        const promise2 = messageQueue.onFlush();

        assert.strictEqual(promise1, promise2);
      });
    });

    describe('onDrain', () => {
      it('should create a promise', () => {
        const promise = messageQueue.onDrain();

        assert(promise instanceof Promise);
      });

      it('should re-use existing promises', () => {
        const promise1 = messageQueue.onDrain();
        const promise2 = messageQueue.onDrain();

        assert.strictEqual(promise1, promise2);
      });
    });

    describe('setOptions', () => {
      it('should default maxMessages to 3000', () => {
        const stub = sandbox.stub(messageQueue, 'flush');

        for (let i = 0; i < 3000; i++) {
          assert.strictEqual(stub.callCount, 0);
          void messageQueue.add(fakeMessage());
        }

        assert.strictEqual(stub.callCount, 1);
      });

      it('should respect user supplied maxMessages', () => {
        const stub = sandbox.stub(messageQueue, 'flush');
        const maxMessages = 100;

        messageQueue.setOptions({maxMessages});

        for (let i = 0; i < maxMessages; i++) {
          assert.strictEqual(stub.callCount, 0);
          void messageQueue.add(fakeMessage());
        }

        assert.strictEqual(stub.callCount, 1);
      });

      it('should default maxMilliseconds to 100', () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        const stub = sandbox.stub(messageQueue, 'flush');

        void messageQueue.add(fakeMessage());
        clock.tick(100);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should respect user supplied maxMilliseconds', () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        const stub = sandbox.stub(messageQueue, 'flush');
        const maxMilliseconds = 10000;

        messageQueue.setOptions({maxMilliseconds});
        void messageQueue.add(fakeMessage());
        clock.tick(maxMilliseconds);

        assert.strictEqual(stub.callCount, 1);
      });
    });
  });

  describe('AckQueue', () => {
    let ackQueue: AckQueue;

    beforeEach(() => {
      ackQueue = new AckQueue(subscriber);
    });

    it('should send batches via Client#acknowledge', async () => {
      const messages = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];

      const stub = sandbox
        .stub(fakeSubscriber.client, 'acknowledge')
        .resolves();
      const expectedReqOpts = {
        subscription: subscriber.name,
        ackIds: messages.map(({ackId}) => ackId),
      };

      messages.forEach(message => ackQueue.add(message as Message));
      await ackQueue.flush('test');

      const [reqOpts] = stub.lastCall.args;
      assert.deepStrictEqual(reqOpts, expectedReqOpts);
    });

    it('should make a log message about batch sends', async () => {
      const messages = [new FakeMessage()];

      sandbox.stub(fakeSubscriber.client, 'acknowledge').resolves();
      const fakeLog = new FakeLog(messageTypes.logs.ackBatch);

      messages.forEach(message => ackQueue.add(message as Message));
      await ackQueue.flush('logtest');

      fakeLog.remove();

      assert.strictEqual(fakeLog.called, true);
      assert.strictEqual(
        fakeLog.fields!.severity,
        loggingUtils.LogSeverity.INFO,
      );
      assert.strictEqual(fakeLog.args![1] as string, 'logtest');
    });

    it('should send call options', async () => {
      const fakeCallOptions = {timeout: 10000};
      const stub = sandbox
        .stub(fakeSubscriber.client, 'acknowledge')
        .resolves();

      ackQueue.setOptions({callOptions: fakeCallOptions});
      await ackQueue.flush('test');

      const [, callOptions] = stub.lastCall.args;
      assert.strictEqual(callOptions, fakeCallOptions);
    });

    it('should throw a BatchError on "debug" if unable to ack due to grpc error', done => {
      const messages = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];

      const ackIds = messages.map(message => message.ackId);

      const fakeError = new Error('Err.') as GoogleError;
      fakeError.code = Status.DATA_LOSS;

      // Since this runs without EOS enabled, we should get the old error handling.
      const expectedMessage = 'Failed to "ack" for 3 message(s). Reason: Err.';

      sandbox.stub(fakeSubscriber.client, 'acknowledge').rejects(fakeError);

      subscriber.on('debug', (msg: DebugMessage) => {
        try {
          assert.strictEqual(msg.message, expectedMessage);
          const batchError = msg.error! as unknown as BatchError;
          assert.strictEqual(batchError.message, expectedMessage);
          assert.deepStrictEqual(batchError.ackIds, ackIds);
          assert.strictEqual(batchError.code, fakeError.code);
          done();
        } catch (e) {
          // I'm unsure why Mocha's regular handler doesn't work here,
          // but manually throw the exception from asserts.
          done(e);
        }
      });

      messages.forEach(message => ackQueue.add(message as Message));
      void ackQueue.flush('test');
    });

    // The analogous modAck version is very similar, so please sync changes.
    describe('handle ack responses when !isExactlyOnceDelivery', () => {
      it('should appropriately resolve result promises when !isExactlyOnceDelivery', async () => {
        const fakeError = new Error('Err.') as GoogleError;
        fakeError.code = Status.DATA_LOSS;

        const stub = sandbox
          .stub(fakeSubscriber.client, 'acknowledge')
          .rejects(fakeError);

        const message = new FakeMessage() as Message;
        const completion = ackQueue.add(message);
        await ackQueue.flush('test');
        assert.strictEqual(stub.callCount, 1);
        await assert.doesNotReject(completion);
      });
    });

    // The analogous modAck version is very similar, so please sync changes.
    describe('handle ack responses for exactly-once delivery', () => {
      beforeEach(() => {
        fakeSubscriber.iEOS = true;
      });

      it('should trigger Promise resolves on no errors', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];
        messages.forEach(m => ackQueue.add(m));

        sandbox.stub(fakeSubscriber.client, 'acknowledge').resolves();
        const proms = ackQueue.requests.map(
          (r: messageTypes.QueuedMessage) => r.responsePromise!.promise,
        );
        await ackQueue.flush('test');
        const results = await Promise.allSettled(proms);
        const oneSuccess = {status: 'fulfilled', value: undefined};
        assert.deepStrictEqual(results, [oneSuccess, oneSuccess, oneSuccess]);
      });

      it('should trigger Promise failures on grpc errors', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];

        const fakeError = new Error('Err.') as GoogleError;
        fakeError.code = Status.DATA_LOSS;
        fakeError.errorInfoMetadata = {
          // These should be routed by the errorInfo resolver.
          [messages[0].ackId]: 'TRANSIENT_CAT_ATE_HOMEWORK',
        };

        messages.forEach(m => ackQueue.add(m));

        sandbox.stub(fakeSubscriber.client, 'acknowledge').rejects(fakeError);
        const proms = ackQueue.requests.map(
          (r: messageTypes.QueuedMessage) => r.responsePromise!.promise,
        );
        void proms.shift();
        await ackQueue.flush('test');

        const results = await Promise.allSettled<void>(proms);
        assert.strictEqual(results[0].status, 'rejected');
        assert.strictEqual(results[0].reason?.errorCode, 'OTHER');
        assert.strictEqual(results[1].status, 'rejected');
        assert.strictEqual(results[1].reason?.errorCode, 'OTHER');

        // Make sure the one handled by errorInfo was retried.
        assert.strictEqual(ackQueue.numInRetryRequests, 1);
      });

      it('should correctly handle a mix of errors and successes', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];

        const fakeError = new Error('Err.') as GoogleError;
        delete fakeError.code;
        fakeError.errorInfoMetadata = {
          [messages[0].ackId]: 'PERMANENT_FAILURE_INVALID_ACK_ID',
          [messages[1].ackId]: 'TRANSIENT_CAT_ATE_HOMEWORK',
        };

        messages.forEach(m => ackQueue.add(m));

        sandbox.stub(fakeSubscriber.client, 'acknowledge').rejects(fakeError);

        const proms = [
          ackQueue.requests[0].responsePromise!.promise,
          ackQueue.requests[2].responsePromise!.promise,
        ];
        await ackQueue.flush('test');

        const results = await Promise.allSettled<void>(proms);
        assert.strictEqual(results[0].status, 'rejected');
        assert.strictEqual(results[0].reason?.errorCode, 'INVALID');

        // Since there's no RPC error, the last one should've succeeded.
        const oneSuccess = {status: 'fulfilled', value: undefined};
        assert.deepStrictEqual(results[1], oneSuccess);

        // Make sure the transient one was retried.
        assert.strictEqual(ackQueue.numInRetryRequests, 1);
      });

      // This is separate because the retry mechanism itself could fail, and
      // we want to make sure that transients actually make it back into the
      // queue for retry.
      //
      // This doesn't need to be duplicated down to modAck because it's just
      // testing common code.
      it('should retry transient failures', async () => {
        const clock = TestUtils.useFakeTimers(sandbox);
        sandbox.stub(global.Math, 'random').returns(0.5);

        const message = fakeMessage();
        const fakeError = new Error('Err.') as GoogleError;
        fakeError.code = Status.DATA_LOSS;
        fakeError.errorInfoMetadata = {
          // These should be routed by the errorInfo resolver.
          [message.ackId]: 'TRANSIENT_CAT_ATE_HOMEWORK',
        };

        sandbox.stub(fakeSubscriber.client, 'acknowledge').rejects(fakeError);
        void ackQueue.add(message);
        await ackQueue.flush('test');

        // Make sure the one handled by errorInfo was retried.
        assert.strictEqual(ackQueue.numInRetryRequests, 1);

        // And wait for a second attempt.
        clock.tick(1000);

        assert.strictEqual(ackQueue.requests.length, 1);
        assert.strictEqual(ackQueue.requests[0].message.ackId, message.ackId);
        assert.strictEqual(ackQueue.numInRetryRequests, 0);
        assert.strictEqual(ackQueue.numPendingRequests, 1);
      });
    });

    it('should appropriately resolve result promises', async () => {
      const stub = sandbox
        .stub(fakeSubscriber.client, 'acknowledge')
        .resolves();

      const message = new FakeMessage() as Message;
      const completion = ackQueue.add(message);
      await ackQueue.flush('test');
      assert.strictEqual(stub.callCount, 1);
      await completion;
    });

    it('should appropriately reject result promises', async () => {
      const stub = sandbox
        .stub(fakeSubscriber.client, 'acknowledge')
        .resolves();

      const message = new FakeMessage() as Message;
      const completion = ackQueue.add(message);
      await ackQueue.flush('test');
      assert.strictEqual(stub.callCount, 1);
      await completion;
    });
  });

  describe('ModAckQueue', () => {
    let modAckQueue: ModAckQueue;

    beforeEach(() => {
      modAckQueue = new ModAckQueue(subscriber);
    });

    it('should send batches via Client#modifyAckDeadline', async () => {
      const deadline = 600;
      const messages = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];

      const stub = sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .resolves();

      const expectedReqOpts = {
        subscription: subscriber.name,
        ackDeadlineSeconds: deadline,
        ackIds: messages.map(({ackId}) => ackId),
      };

      messages.forEach(message =>
        modAckQueue.add(message as Message, deadline),
      );
      await modAckQueue.flush('test');

      const [reqOpts] = stub.lastCall.args;
      assert.deepStrictEqual(reqOpts, expectedReqOpts);
    });

    it('should make a log message about batch sends', async () => {
      const messages = [new FakeMessage()];

      sandbox.stub(fakeSubscriber.client, 'modifyAckDeadline').resolves();
      const fakeLog = new FakeLog(messageTypes.logs.ackBatch);

      messages.forEach(message => modAckQueue.add(message as Message));
      await modAckQueue.flush('logtest');

      fakeLog.remove();

      assert.strictEqual(fakeLog.called, true);
      assert.strictEqual(
        fakeLog.fields!.severity,
        loggingUtils.LogSeverity.INFO,
      );
      assert.strictEqual(fakeLog.args![1] as string, 'logtest');
    });

    it('should group ackIds by deadline', async () => {
      const deadline1 = 600;
      const deadline2 = 1000;

      const messages1 = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];
      const messages2 = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];

      const stub = sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .resolves();

      const expectedReqOpts1 = {
        subscription: subscriber.name,
        ackDeadlineSeconds: deadline1,
        ackIds: messages1.map(({ackId}) => ackId),
      };

      const expectedReqOpts2 = {
        subscription: subscriber.name,
        ackDeadlineSeconds: deadline2,
        ackIds: messages2.map(({ackId}) => ackId),
      };

      messages1.forEach(message =>
        modAckQueue.add(message as Message, deadline1),
      );
      messages2.forEach(message =>
        modAckQueue.add(message as Message, deadline2),
      );
      await modAckQueue.flush('test');

      const [reqOpts1] = stub.getCall(0).args;
      assert.deepStrictEqual(reqOpts1, expectedReqOpts1);

      const [reqOpts2] = stub.getCall(1).args;
      assert.deepStrictEqual(reqOpts2, expectedReqOpts2);
    });

    it('should send call options', async () => {
      const fakeCallOptions = {timeout: 10000};
      const stub = sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .resolves();

      modAckQueue.setOptions({callOptions: fakeCallOptions});
      await modAckQueue.add(new FakeMessage() as Message, 10);
      await modAckQueue.flush('test');

      const [, callOptions] = stub.lastCall.args;
      assert.strictEqual(callOptions, fakeCallOptions);
    });

    it('should throw a BatchError on "debug" if unable to modAck due to gRPC error', done => {
      const messages = [
        new FakeMessage(),
        new FakeMessage(),
        new FakeMessage(),
      ];

      const ackIds = messages.map(message => message.ackId);

      const fakeError = new Error('Err.') as GoogleError;
      fakeError.code = Status.DATA_LOSS;

      // Since this runs without EOS enabled, we should get the old error handling.
      const expectedMessage =
        'Failed to "modAck" for 3 message(s). Reason: Err.';

      sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .rejects(fakeError);

      subscriber.on('debug', (msg: DebugMessage) => {
        try {
          assert.strictEqual(msg.message, expectedMessage);
          const batchError = msg.error! as unknown as BatchError;
          assert.strictEqual(batchError.message, expectedMessage);
          assert.deepStrictEqual(batchError.ackIds, ackIds);
          assert.strictEqual(batchError.code, fakeError.code);
          done();
        } catch (e) {
          // I'm unsure why Mocha's regular handler doesn't work here,
          // but manually throw the exception from asserts.
          done(e);
        }
      });

      messages.forEach(message => modAckQueue.add(message as Message));
      void modAckQueue.flush('test');
    });

    describe('handle modAck responses when !isExactlyOnceDelivery', () => {
      it('should appropriately resolve result promises when !isExactlyOnceDelivery', async () => {
        const fakeError = new Error('Err.') as GoogleError;
        fakeError.code = Status.DATA_LOSS;

        const stub = sandbox
          .stub(fakeSubscriber.client, 'modifyAckDeadline')
          .rejects(fakeError);

        const message = new FakeMessage() as Message;
        const completion = modAckQueue.add(message);
        await modAckQueue.flush('test');
        assert.strictEqual(stub.callCount, 1);
        await assert.doesNotReject(completion);
      });
    });

    // The analogous ack version is very similar, so please sync changes.
    describe('handle modAck responses for exactly-once delivery', () => {
      beforeEach(() => {
        fakeSubscriber.iEOS = true;
      });

      it('should trigger Promise resolves on no errors', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];
        messages.forEach(m => modAckQueue.add(m));

        sandbox.stub(fakeSubscriber.client, 'modifyAckDeadline').resolves();
        const proms = modAckQueue.requests.map(
          (r: messageTypes.QueuedMessage) => r.responsePromise!.promise,
        );
        await modAckQueue.flush('test');
        const results = await Promise.allSettled(proms);
        const oneSuccess = {status: 'fulfilled', value: undefined};
        assert.deepStrictEqual(results, [oneSuccess, oneSuccess, oneSuccess]);
      });

      it('should trigger Promise failures on grpc errors', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];

        const fakeError = new Error('Err.') as GoogleError;
        fakeError.code = Status.DATA_LOSS;
        fakeError.errorInfoMetadata = {
          // These should be routed by the errorInfo resolver.
          [messages[0].ackId]: 'TRANSIENT_CAT_ATE_HOMEWORK',
        };

        messages.forEach(m => modAckQueue.add(m));

        sandbox
          .stub(fakeSubscriber.client, 'modifyAckDeadline')
          .rejects(fakeError);
        const proms = modAckQueue.requests.map(
          (r: messageTypes.QueuedMessage) => r.responsePromise!.promise,
        );
        void proms.shift();
        await modAckQueue.flush('test');

        const results = await Promise.allSettled<void>(proms);
        assert.strictEqual(results[0].status, 'rejected');
        assert.strictEqual(results[0].reason?.errorCode, 'OTHER');
        assert.strictEqual(results[1].status, 'rejected');
        assert.strictEqual(results[1].reason?.errorCode, 'OTHER');

        // Make sure the one handled by errorInfo was retried.
        assert.strictEqual(modAckQueue.numInRetryRequests, 1);
      });

      it('should correctly handle a mix of errors and successes', async () => {
        const messages = [fakeMessage(), fakeMessage(), fakeMessage()];

        const fakeError = new Error('Err.') as GoogleError;
        delete fakeError.code;
        fakeError.errorInfoMetadata = {
          [messages[0].ackId]: 'PERMANENT_FAILURE_INVALID_ACK_ID',
          [messages[1].ackId]: 'TRANSIENT_CAT_ATE_HOMEWORK',
        };

        messages.forEach(m => modAckQueue.add(m));

        sandbox
          .stub(fakeSubscriber.client, 'modifyAckDeadline')
          .rejects(fakeError);

        const proms = [
          modAckQueue.requests[0].responsePromise!.promise,
          modAckQueue.requests[2].responsePromise!.promise,
        ];
        await modAckQueue.flush('test');

        const results = await Promise.allSettled<void>(proms);
        assert.strictEqual(results[0].status, 'rejected');
        assert.strictEqual(results[0].reason?.errorCode, 'INVALID');

        // Since there's no RPC error, the last one should've succeeded.
        const oneSuccess = {status: 'fulfilled', value: undefined};
        assert.deepStrictEqual(results[1], oneSuccess);

        // Make sure the transient one was retried.
        assert.strictEqual(modAckQueue.numInRetryRequests, 1);
      });
    });

    it('should appropriately resolve result promises', async () => {
      const stub = sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .resolves();

      const message = new FakeMessage() as Message;
      const completion = modAckQueue.add(message);
      await modAckQueue.flush('test');
      assert.strictEqual(stub.callCount, 1);
      await completion;
    });

    it('should appropriately reject result promises', async () => {
      const stub = sandbox
        .stub(fakeSubscriber.client, 'modifyAckDeadline')
        .resolves();

      const message = new FakeMessage() as Message;
      const completion = modAckQueue.add(message);
      await modAckQueue.flush('test');
      assert.strictEqual(stub.callCount, 1);
      await completion;
    });
  });
});
