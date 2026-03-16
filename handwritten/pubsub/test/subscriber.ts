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

import {exporter} from './tracing';
import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {EventEmitter} from 'events';
import {common as protobuf} from 'protobufjs';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {PassThrough} from 'stream';
import * as uuid from 'uuid';
import * as opentelemetry from '@opentelemetry/api';
import {google} from '../protos/protos';
import * as defer from 'p-defer';

import {HistogramOptions} from '../src/histogram';
import {FlowControlOptions, LeaseManager} from '../src/lease-manager';
import {BatchOptions} from '../src/message-queues';
import {MessageStreamOptions} from '../src/message-stream';
import * as s from '../src/subscriber';
import {Subscription} from '../src/subscription';
import {SpanKind} from '@opentelemetry/api';
import {Duration} from '../src';
import * as tracing from '../src/telemetry-tracing';
import {FakeLog, TestUtils} from './test-utils';
import {loggingUtils} from 'google-gax';

type PullResponse = google.pubsub.v1.IStreamingPullResponse;

const stubs = new Map();

class FakeClient {}

interface ClientOptions {
  client: string;
}

interface ClientCallback {
  (error: null | Error, client: FakeClient): void;
}

class FakePubSub {
  client = new FakeClient();
  getClient_(options: ClientOptions, callback: ClientCallback): void {
    callback(null, this.client);
  }
}

const projectId = uuid.v4();
const subId = uuid.v4();

class FakeSubscription {
  name = `projects/${projectId}/subscriptions/${subId}`;
  pubsub = new FakePubSub();
}

interface PublicInventory {
  _inventory: LeaseManager;
}

class FakeHistogram {
  options?: HistogramOptions;
  constructor(options?: HistogramOptions) {
    this.options = options;

    const key = options ? 'histogram' : 'latencies';
    stubs.set(key, this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(seconds: number): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  percentile(percentile: number): number {
    return 10;
  }
}

class FakeLeaseManager extends EventEmitter {
  options: FlowControlOptions;
  constructor(sub: s.Subscriber, options: FlowControlOptions) {
    super();
    this.options = options;
    stubs.set('inventory', this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(message: s.Message): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOptions(options: FlowControlOptions): void {}
  clear(): s.Message[] {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(message: s.Message): void {}

  _isEmpty = true;
  isEmpty(): boolean {
    return this._isEmpty;
  }
}

class FakeQueue {
  options: BatchOptions;
  numPendingRequests = 0;
  numInFlightRequests = 0;
  maxMilliseconds = 100;
  constructor(sub: s.Subscriber, options: BatchOptions) {
    this.options = options;
  }
  close() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async add(message: s.Message, deadline?: number): Promise<s.AckResponse> {
    return s.AckResponses.Success;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOptions(options: BatchOptions) {}
  async flush(): Promise<void> {}
  async onFlush(): Promise<void> {}
  async onDrain(): Promise<void> {}
}

class FakeAckQueue extends FakeQueue {
  constructor(sub: s.Subscriber, options: BatchOptions) {
    super(sub, options);
    stubs.set('ackQueue', this);
  }
}

class FakeModAckQueue extends FakeQueue {
  constructor(sub: s.Subscriber, options: BatchOptions) {
    super(sub, options);
    stubs.set('modAckQueue', this);
  }
}

class FakeMessageStream extends PassThrough {
  options: MessageStreamOptions;
  constructor(sub: s.Subscriber, options: MessageStreamOptions) {
    super({objectMode: true});
    this.options = options;
    stubs.set('messageStream', this);
  }
  setStreamAckDeadline(): void {}
  _destroy(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _error: Error | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _callback: (error: Error | null) => void,
  ): void {}
  async start() {}
}

class FakePreciseDate {
  value: protobuf.ITimestamp;
  constructor(date: protobuf.ITimestamp) {
    this.value = date;
  }
}

const RECEIVED_MESSAGE = {
  ackId: uuid.v4(),
  message: {
    attributes: {},
    data: Buffer.from('Hello, world!'),
    messageId: uuid.v4(),
    orderingKey: 'ordering-key',
    publishTime: {seconds: 12, nanos: 32},
  },
};

interface SubInternals {
  _stream: FakeMessageStream;
  _inventory: FakeLeaseManager;
  _onData(response: PullResponse): void;
  _discardMessage(message: s.Message): void;
  _waitForFlush(timeout?: Duration): Promise<void>;
}

function getSubInternals(sub: s.Subscriber) {
  return sub as unknown as SubInternals;
}

describe('Subscriber', () => {
  let sandbox: sinon.SinonSandbox;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fakeProjectify: any;
  let subscription: Subscription;

  // tslint:disable-next-line variable-name
  let Message: typeof s.Message;
  let message: s.Message;
  // tslint:disable-next-line variable-name
  let Subscriber: typeof s.Subscriber;
  let subscriber: s.Subscriber;

  let fakeLog: FakeLog | undefined;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    fakeProjectify = {
      replaceProjectIdToken: sandbox
        .stub()
        .callsFake((name: string, projectId: string) => {
          if (name.indexOf('/') >= 0) {
            return name;
          } else {
            return `projects/${projectId}/name/${name}`;
          }
        }),
    };

    const s = proxyquire('../src/subscriber.js', {
      '@google-cloud/precise-date': {PreciseDate: FakePreciseDate},
      '@google-cloud/projectify': fakeProjectify,
      './histogram': {Histogram: FakeHistogram},
      './lease-manager': {LeaseManager: FakeLeaseManager},
      './message-queues': {
        AckQueue: FakeAckQueue,
        ModAckQueue: FakeModAckQueue,
      },
      './message-stream': {MessageStream: FakeMessageStream},
    });

    Message = s.Message;
    Subscriber = s.Subscriber;

    // Create standard instance
    subscription = new FakeSubscription() as {} as Subscription;
    subscriber = new Subscriber(subscription);
    message = new Message(subscriber, RECEIVED_MESSAGE);
    subscriber.open();
  });

  afterEach(async () => {
    fakeLog?.remove();
    fakeLog = undefined;
    sandbox.restore();
    await subscriber.close();
    tracing.setGloballyEnabled(false);
  });

  describe('initialization', () => {
    it('should default ackDeadline to 10', () => {
      assert.strictEqual(subscriber.ackDeadline, 10);
    });

    it('should default maxMessages to 1000', () => {
      assert.strictEqual(subscriber.maxMessages, 1000);
    });

    it('should default maxBytes to 100MB', () => {
      assert.strictEqual(subscriber.maxBytes, 100 * 1024 * 1024);
    });

    it('should set isOpen to false', () => {
      const s = new Subscriber(subscription);
      assert.strictEqual(s.isOpen, false);
    });

    it('should set any options passed in', () => {
      const options = {
        streamingOptions: {},
      };
      const subscriber = new Subscriber(subscription, options);
      assert.strictEqual(
        subscriber.getOptions().streamingOptions,
        options.streamingOptions,
      );
    });
  });

  describe('receive', () => {
    it('should add incoming messages to inventory w/o exactly-once', () => {
      const sub = new Subscriber(subscription);
      sub.isOpen = true;
      const subint = getSubInternals(sub);
      const modAckStub = sandbox.stub(sub, 'modAck');
      subint._inventory = new FakeLeaseManager(sub, {});
      const addStub = sandbox.stub(subint._inventory, 'add');
      subint._onData({
        subscriptionProperties: {
          exactlyOnceDeliveryEnabled: false,
          messageOrderingEnabled: false,
        },
        receivedMessages: [
          {
            ackId: 'ackack',
            message: {
              data: 'foo',
              attributes: {},
            },
          },
        ],
      });

      assert.ok(modAckStub.calledOnce);
      assert.ok(addStub.calledOnce);
    });

    it('should add incoming messages to inventory w/exactly-once, success', async () => {
      const sub = new Subscriber(subscription);
      sub.isOpen = true;
      const subint = getSubInternals(sub);
      subint._stream = new FakeMessageStream(sub, {});
      subint._inventory = new FakeLeaseManager(sub, {});
      const modAckStub = sandbox.stub(sub, 'modAckWithResponse');
      modAckStub.callsFake(async () => s.AckResponses.Success);
      const addStub = sandbox.stub(subint._inventory, 'add');
      const done = defer();
      addStub.callsFake(() => {
        assert.ok(modAckStub.calledOnce);
        done.resolve();
      });
      subint._onData({
        subscriptionProperties: {
          exactlyOnceDeliveryEnabled: true,
          messageOrderingEnabled: false,
        },
        receivedMessages: [
          {
            ackId: 'ackack',
            message: {
              data: 'foo',
              attributes: {},
            },
          },
        ],
      });

      await done.promise;
    });

    it('should add incoming messages to inventory w/exactly-once, permanent failure', async () => {
      const sub = new Subscriber(subscription);
      sub.isOpen = true;
      const subint = getSubInternals(sub);
      subint._stream = new FakeMessageStream(sub, {});
      subint._inventory = new FakeLeaseManager(sub, {});

      const done = defer();

      const modAckStub = sandbox.stub(sub, 'modAckWithResponse');
      modAckStub.rejects(new s.AckError(s.AckResponses.Invalid));
      const addStub = sandbox.stub(subint._inventory, 'add');
      const discardStub = sandbox.stub(subint, '_discardMessage');
      discardStub.callsFake(() => {
        assert.ok(modAckStub.calledOnce);
        assert.ok(addStub.notCalled);
        done.resolve();
      });

      subint._onData({
        subscriptionProperties: {
          exactlyOnceDeliveryEnabled: true,
          messageOrderingEnabled: false,
        },
        receivedMessages: [
          {
            ackId: 'ackack',
            message: {
              data: 'foo',
              attributes: {},
            },
          },
        ],
      });

      await done.promise;
    });
  });

  describe('modAckLatency', () => {
    it('should get the 99th percentile latency', () => {
      const latencies: FakeHistogram = stubs.get('latencies');
      const fakeLatency = 234;

      sandbox.stub(latencies, 'percentile').withArgs(99).returns(fakeLatency);

      const maxMilliseconds = stubs.get('modAckQueue').maxMilliseconds;
      const expectedLatency = fakeLatency * 1000 + maxMilliseconds;

      assert.strictEqual(subscriber.modAckLatency, expectedLatency);
    });
  });

  describe('name', () => {
    it('should replace the project id token', () => {
      const fakeName = 'abcd';

      fakeProjectify.replaceProjectIdToken
        .withArgs(subscription.name, subscription.projectId)
        .returns(fakeName);

      const name = subscriber.name;
      assert.strictEqual(name, fakeName);
    });

    it('should cache the name', () => {
      const fakeName = 'abcd';
      const stub = fakeProjectify.replaceProjectIdToken
        .withArgs(subscription.name, subscription.projectId)
        .returns(fakeName);

      const name = subscriber.name;
      assert.strictEqual(name, fakeName);

      const name2 = subscriber.name;
      assert.strictEqual(name, name2);
      assert.strictEqual(stub.callCount, 1);
    });
  });

  describe('ack', () => {
    it('should update the ack histogram/deadline', async () => {
      const histogram: FakeHistogram = stubs.get('histogram');
      const now = Date.now();

      message.received = 23842328;
      sandbox.stub(global.Date, 'now').returns(now);

      const expectedSeconds = (now - message.received) / 1000;
      const addStub = sandbox.stub(histogram, 'add').withArgs(expectedSeconds);

      const fakeDeadline = 598;

      sandbox.stub(histogram, 'percentile').withArgs(99).returns(fakeDeadline);

      await subscriber.ack(message);

      assert.strictEqual(addStub.callCount, 1);
      assert.strictEqual(subscriber.ackDeadline, fakeDeadline);
    });

    it('should log on ack completion', async () => {
      fakeLog = new FakeLog(s.logs.ackNack);

      await subscriber.ack(message);

      assert.strictEqual(fakeLog.called, true);
      assert.strictEqual(
        fakeLog.fields!.severity,
        loggingUtils.LogSeverity.INFO,
      );
      assert.strictEqual(fakeLog.args![1], message.id);
    });

    it('should log if the ack time is longer than the 99th percentile', async () => {
      const histogram: FakeHistogram = stubs.get('histogram');
      TestUtils.useFakeTimers(sandbox, Date.now());

      message.received = 0;
      sandbox.stub(histogram, 'percentile').withArgs(99).returns(10);
      fakeLog = new FakeLog(s.logs.slowAck);

      await subscriber.ack(message);

      assert.strictEqual(fakeLog.called, true);
      assert.strictEqual(
        fakeLog.fields!.severity,
        loggingUtils.LogSeverity.INFO,
      );
      assert.strictEqual(fakeLog.args![1], message.id);
    });

    it('should bound ack deadlines if min/max are specified', async () => {
      const histogram: FakeHistogram = stubs.get('histogram');
      const now = Date.now();

      message.received = 23842328;
      sandbox.stub(global.Date, 'now').returns(now);

      const expectedSeconds = (now - message.received) / 1000;
      const addStub = sandbox.stub(histogram, 'add').withArgs(expectedSeconds);

      let fakeDeadline = 312123;
      sandbox
        .stub(histogram, 'percentile')
        .withArgs(99)
        .callsFake(() => fakeDeadline);

      subscriber.setOptions({
        maxAckDeadline: Duration.from({seconds: 60}),
      });
      await subscriber.ack(message);

      assert.strictEqual(addStub.callCount, 1);
      assert.strictEqual(subscriber.ackDeadline, 60);

      subscriber.setOptions({
        minAckDeadline: Duration.from({seconds: 10}),
      });
      fakeDeadline = 1;
      await subscriber.ack(message);

      assert.strictEqual(subscriber.ackDeadline, 10);
    });

    it('should default to 60s min for exactly-once delivery subscriptions', async () => {
      subscriber.setSubscriptionProperties({exactlyOnceDeliveryEnabled: true});

      const histogram: FakeHistogram = stubs.get('histogram');
      const now = Date.now();

      message.received = 23842328;
      sandbox.stub(global.Date, 'now').returns(now);

      const expectedSeconds = (now - message.received) / 1000;
      const addStub = sandbox.stub(histogram, 'add').withArgs(expectedSeconds);

      const fakeDeadline = 10;
      sandbox.stub(histogram, 'percentile').withArgs(99).returns(fakeDeadline);

      await subscriber.ack(message);

      assert.strictEqual(addStub.callCount, 1);
      assert.strictEqual(subscriber.ackDeadline, 60);

      // Also check that if we set a different min, it's honoured.
      subscriber.setOptions({
        minAckDeadline: Duration.from({seconds: 5}),
      });
      await subscriber.ack(message);

      assert.strictEqual(subscriber.ackDeadline, 10);
    });

    it('should not update the deadline if user specified', () => {
      const histogram: FakeHistogram = stubs.get('histogram');
      const ackDeadline = 543;
      const maxMessages = 20;
      const maxBytes = 20000;

      sandbox.stub(histogram, 'add').throws();
      sandbox.stub(histogram, 'percentile').throws();

      const deadlineTime = Duration.from({seconds: ackDeadline});
      subscriber.setOptions({
        minAckDeadline: deadlineTime,
        maxAckDeadline: deadlineTime,
        flowControl: {maxMessages: maxMessages, maxBytes: maxBytes},
      });
      void subscriber.ack(message);

      assert.strictEqual(subscriber.ackDeadline, ackDeadline);
    });

    it('should add the message to the ack queue', () => {
      const ackQueue: FakeAckQueue = stubs.get('ackQueue');
      const stub = sandbox.stub(ackQueue, 'add').withArgs(message);

      void subscriber.ack(message);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should remove the message from inv. after queue flushes', done => {
      const ackQueue: FakeAckQueue = stubs.get('ackQueue');
      const inventory: FakeLeaseManager = stubs.get('inventory');

      const onFlushStub = sandbox.stub(ackQueue, 'onFlush').resolves();

      sandbox
        .stub(inventory, 'remove')
        .withArgs(message)
        .callsFake(() => {
          assert.strictEqual(onFlushStub.callCount, 1);
          done();
        });

      void subscriber.ack(message);
    });
  });

  describe('close', () => {
    it('should noop if not open', () => {
      const s = new Subscriber(subscription);
      const stream: FakeMessageStream = stubs.get('messageStream');

      sandbox
        .stub(stream, 'destroy')
        .rejects(new Error('should not be called.'));

      return s.close();
    });

    it('should set isOpen to false', async () => {
      await subscriber.close();
      assert.strictEqual(subscriber.isOpen, false);
    });

    it('should destroy the message stream', async () => {
      const stream: FakeMessageStream = stubs.get('messageStream');
      const stub = sandbox.stub(stream, 'destroy');

      await subscriber.close();
      assert.strictEqual(stub.callCount, 1);
    });

    it('should clear the inventory', async () => {
      const message = new Message(subscriber, RECEIVED_MESSAGE);
      const shutdownStub = sandbox.stub(tracing.PubsubEvents, 'shutdown');
      const inventory: FakeLeaseManager = stubs.get('inventory');
      const stub = sandbox.stub(inventory, 'clear').returns([message]);

      // The leaser would've immediately called dispatched(). Pretend that
      // we're user code.
      message.ack();

      await subscriber.close();
      assert.strictEqual(stub.callCount, 1);
      assert.strictEqual(shutdownStub.callCount, 1);
    });

    it('should emit a close event', done => {
      subscriber.on('close', done);
      void subscriber.close();
    });

    it('should nack any messages that come in after', async () => {
      const stream: FakeMessageStream = stubs.get('messageStream');
      const stub = sandbox.stub(subscriber, 'nack');
      const shutdownStub = sandbox.stub(tracing.PubsubEvents, 'shutdown');
      const pullResponse = {receivedMessages: [RECEIVED_MESSAGE]};

      await subscriber.close();
      stream.emit('data', pullResponse);

      const [{ackId}] = stub.lastCall.args;
      assert.strictEqual(ackId, RECEIVED_MESSAGE.ackId);
      assert.strictEqual(shutdownStub.callCount, 1);
    });

    describe('flushing the queues', () => {
      it('should wait for any pending acks', async () => {
        const ackQueue: FakeAckQueue = stubs.get('ackQueue');
        const ackOnFlush = sandbox.stub(ackQueue, 'onFlush').resolves();
        const acksFlush = sandbox.stub(ackQueue, 'flush').resolves();

        ackQueue.numPendingRequests = 1;
        await subscriber.close();

        assert.strictEqual(ackOnFlush.callCount, 1);
        assert.strictEqual(acksFlush.callCount, 1);
      });

      it('should wait for any pending modAcks', async () => {
        const modAckQueue: FakeModAckQueue = stubs.get('modAckQueue');
        const modAckOnFlush = sandbox.stub(modAckQueue, 'onFlush').resolves();
        const modAckFlush = sandbox.stub(modAckQueue, 'flush').resolves();

        modAckQueue.numPendingRequests = 1;
        await subscriber.close();

        assert.strictEqual(modAckOnFlush.callCount, 1);
        assert.strictEqual(modAckFlush.callCount, 1);
      });

      it('should resolve if no messages are pending', async () => {
        const ackQueue: FakeAckQueue = stubs.get('ackQueue');

        sandbox.stub(ackQueue, 'flush').rejects();
        sandbox.stub(ackQueue, 'onFlush').rejects();
        sandbox.stub(ackQueue, 'onDrain').rejects();

        const modAckQueue: FakeModAckQueue = stubs.get('modAckQueue');

        sandbox.stub(modAckQueue, 'flush').rejects();
        sandbox.stub(modAckQueue, 'onFlush').rejects();

        await subscriber.close();
      });

      it('should wait for in-flight messages to drain', async () => {
        const ackQueue: FakeAckQueue = stubs.get('ackQueue');
        const modAckQueue: FakeModAckQueue = stubs.get('modAckQueue');
        const ackOnDrain = sandbox.stub(ackQueue, 'onDrain').resolves();
        const modAckOnDrain = sandbox.stub(modAckQueue, 'onDrain').resolves();

        ackQueue.numInFlightRequests = 1;
        modAckQueue.numInFlightRequests = 1;
        await subscriber.close();

        assert.strictEqual(ackOnDrain.callCount, 1);
        assert.strictEqual(modAckOnDrain.callCount, 1);
      });
    });

    describe('close with timeout', () => {
      let clock: sinon.SinonFakeTimers;
      let inventory: FakeLeaseManager;
      let ackQueue: FakeAckQueue;
      let modAckQueue: FakeModAckQueue;
      let subInternals: SubInternals;

      beforeEach(() => {
        clock = sandbox.useFakeTimers();
        inventory = stubs.get('inventory');
        ackQueue = stubs.get('ackQueue');
        modAckQueue = stubs.get('modAckQueue');

        // Ensure subscriber is open before each test
        if (!subscriber.isOpen) {
          subscriber.open();
        }

        subInternals = subscriber as unknown as SubInternals;
      });

      afterEach(() => {
        clock.restore();
      });

      it('should do nothing if isOpen = false', async () => {
        const destroySpy = sandbox.spy(subInternals._stream, 'destroy');
        subscriber.isOpen = false;
        await subscriber.close();
        assert.strictEqual(destroySpy.callCount, 0);
      });

      it('should clear inventory and bail for timeout = 0', async () => {
        const clearSpy = sandbox.spy(inventory, 'clear');
        const onSpy = sandbox.spy(inventory, 'on');
        subscriber.setOptions({
          closeOptions: {
            timeout: Duration.from({milliseconds: 0}),
          },
        });
        await subscriber.close();
        assert.strictEqual(clearSpy.callCount, 1);
        assert.strictEqual(onSpy.callCount, 0);
      });

      it('should not wait for an empty inventory in NackImmediately', async () => {
        const onSpy = sandbox.spy(inventory, 'on');
        subscriber.setOptions({
          closeOptions: {
            behavior: s.SubscriberCloseBehaviors.NackImmediately,
            timeout: Duration.from({milliseconds: 100}),
          },
        });
        await subscriber.close();
        assert.strictEqual(onSpy.callCount, 0);
      });

      it('should not wait for an empty inventory in WaitForProcessing if empty', async () => {
        const onSpy = sandbox.spy(inventory, 'on');
        subscriber.setOptions({
          closeOptions: {
            behavior: s.SubscriberCloseBehaviors.WaitForProcessing,
            timeout: Duration.from({milliseconds: 100}),
          },
        });
        await subscriber.close();
        assert.strictEqual(onSpy.callCount, 0);
      });

      it('should wait for an empty inventory in WaitForProcessing if not empty', async () => {
        inventory._isEmpty = false;
        const onSpy = sandbox.spy(inventory, 'on');
        subscriber.setOptions({
          closeOptions: {
            behavior: s.SubscriberCloseBehaviors.WaitForProcessing,
            timeout: Duration.from({seconds: 2}),
          },
        });
        const prom = subscriber.close();
        assert.strictEqual(onSpy.callCount, 1);
        clock.tick(3000);
        await prom;
      });

      it('should nack remaining messages if timeout is non-zero', async () => {
        const mockMessages = [
          new Message(subscriber, RECEIVED_MESSAGE),
          new Message(subscriber, RECEIVED_MESSAGE),
        ];
        sandbox.stub(inventory, 'clear').returns(mockMessages);
        const nackSpy = sandbox.spy(subscriber, 'nack');

        subscriber.setOptions({
          closeOptions: {
            timeout: Duration.from({seconds: 5}),
          },
        });
        const prom = subscriber.close();
        clock.tick(6000);
        await prom;

        assert.strictEqual(nackSpy.callCount, mockMessages.length);
        mockMessages.forEach((msg, i) => {
          assert.strictEqual(nackSpy.getCall(i).args[0], msg);
        });
      });

      it('should wait for drain promises and respect timeout', async () => {
        const ackDrainDeferred = defer<void>();
        const modAckDrainDeferred = defer<void>();
        sandbox.stub(ackQueue, 'onDrain').returns(ackDrainDeferred.promise);
        sandbox
          .stub(modAckQueue, 'onDrain')
          .returns(modAckDrainDeferred.promise);
        ackQueue.numInFlightRequests = 1; // Ensure drain is waited for
        modAckQueue.numInFlightRequests = 1;

        let closed = false;
        subscriber.setOptions({
          closeOptions: {
            behavior: s.SubscriberCloseBehaviors.NackImmediately,
            timeout: Duration.from({milliseconds: 100}),
          },
        });
        const prom = subscriber.close().then(() => {
          closed = true;
        });

        // Advance time past the timeout
        clock.tick(200);
        await prom;

        // Promise should resolve even though drains haven't
        assert.strictEqual(closed, true);

        // Resolve drains afterwards to prevent hanging tests if logic fails
        ackDrainDeferred.resolve();
        modAckDrainDeferred.resolve();
      });

      it('should resolve early if drain completes before timeout', async () => {
        const ackDrainDeferred = defer<void>();
        const modAckDrainDeferred = defer<void>();
        sandbox.stub(ackQueue, 'onDrain').returns(ackDrainDeferred.promise);
        sandbox
          .stub(modAckQueue, 'onDrain')
          .returns(modAckDrainDeferred.promise);
        ackQueue.numInFlightRequests = 1; // Ensure drain is waited for
        modAckQueue.numInFlightRequests = 1;

        let closed = false;
        subscriber.setOptions({
          closeOptions: {
            timeout: Duration.from({milliseconds: 100}),
          },
        });
        const prom = subscriber.close().then(() => {
          closed = true;
        });

        // Resolve drains quickly
        ackDrainDeferred.resolve();
        modAckDrainDeferred.resolve();

        // Advance time slightly, but less than the timeout
        clock.tick(50);
        await prom;

        // Promise should resolve.
        assert.strictEqual(closed, true);
      });
    });
  });

  describe('getClient', () => {
    it('should get a subscriber client', async () => {
      const pubsub = subscription.pubsub as {} as FakePubSub;
      const spy = sandbox.spy(pubsub, 'getClient_');
      const client = await subscriber.getClient();
      const [options] = spy.lastCall.args;
      assert.deepStrictEqual(options, {client: 'SubscriberClient'});
      assert.strictEqual(client, pubsub.client);
    });
  });

  describe('modAck', () => {
    const deadline = 600;

    it('should add the message/deadline to the modAck queue', () => {
      const modAckQueue: FakeModAckQueue = stubs.get('modAckQueue');
      const stub = sandbox.stub(modAckQueue, 'add').withArgs(message, deadline);

      void subscriber.modAck(message, deadline);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should capture latency after queue flush', async () => {
      const modAckQueue: FakeModAckQueue = stubs.get('modAckQueue');
      const latencies: FakeHistogram = stubs.get('latencies');

      const start = 1232123;
      const end = 34838243;
      const expectedSeconds = (end - start) / 1000;

      const dateStub = sandbox.stub(global.Date, 'now');

      dateStub.onCall(0).returns(start);
      dateStub.onCall(1).returns(end);

      sandbox.stub(modAckQueue, 'onFlush').resolves();
      const addStub = sandbox.stub(latencies, 'add').withArgs(expectedSeconds);

      await subscriber.modAck(message, deadline);

      assert.strictEqual(addStub.callCount, 1);
    });
  });

  describe('nack', () => {
    it('should modAck the message with a 0 deadline', async () => {
      const stub = sandbox.stub(subscriber, 'modAck');

      await subscriber.nack(message);

      const [msg, deadline] = stub.lastCall.args;

      assert.strictEqual(msg, message);
      assert.strictEqual(deadline, 0);
    });

    it('should log on ack completion', async () => {
      fakeLog = new FakeLog(s.logs.ackNack);

      await subscriber.nack(message);

      assert.strictEqual(fakeLog.called, true);
      assert.strictEqual(
        fakeLog.fields!.severity,
        loggingUtils.LogSeverity.INFO,
      );
      assert.strictEqual(fakeLog.args![1], message.id);
    });

    it('should remove the message from the inventory', async () => {
      const inventory: FakeLeaseManager = stubs.get('inventory');
      const stub = sandbox.stub(inventory, 'remove').withArgs(message);

      await subscriber.nack(message);

      assert.strictEqual(stub.callCount, 1);
    });
  });

  describe('open', () => {
    beforeEach(() => subscriber.close());

    it('should pass in batching options', () => {
      const batching = {maxMessages: 100};

      subscriber.setOptions({batching});
      subscriber.open();

      const ackQueue: FakeAckQueue = stubs.get('ackQueue');
      const modAckQueue: FakeAckQueue = stubs.get('modAckQueue');

      assert.strictEqual(ackQueue.options, batching);
      assert.strictEqual(modAckQueue.options, batching);
    });

    it('should pass in flow control options', () => {
      const flowControl = {maxMessages: 100};

      subscriber.setOptions({flowControl});
      subscriber.open();

      const inventory: FakeLeaseManager = stubs.get('inventory');

      assert.strictEqual(inventory.options, flowControl);
    });

    it('should pass in streaming options', () => {
      const streamingOptions = {maxStreams: 3};

      subscriber.setOptions({streamingOptions});
      subscriber.open();

      const stream: FakeMessageStream = stubs.get('messageStream');

      assert.strictEqual(stream.options, streamingOptions);
    });

    it('should emit stream errors', done => {
      subscriber.open();

      const stream: FakeMessageStream = stubs.get('messageStream');
      const fakeError = new Error('err');

      subscriber.on('error', err => {
        assert.strictEqual(err, fakeError);
        done();
      });

      stream.emit('error', fakeError);
    });

    it('should close the subscriber if stream closes unexpectedly', done => {
      const stub = sandbox.stub(subscriber, 'close');
      const stream: FakeMessageStream = stubs.get('messageStream');

      stream.emit('close');

      process.nextTick(() => {
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should add messages to the inventory', done => {
      const message = new Message(subscriber, RECEIVED_MESSAGE);

      subscriber.open();

      const modAckStub = sandbox.stub(subscriber, 'modAck');

      const stream: FakeMessageStream = stubs.get('messageStream');
      const pullResponse = {receivedMessages: [RECEIVED_MESSAGE]};

      const inventory: FakeLeaseManager = stubs.get('inventory');
      const addStub = sandbox.stub(inventory, 'add').callsFake(() => {
        const [addMsg] = addStub.lastCall.args;

        // OTel is enabled during tests, so we need to delete the baggage.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const [addMsgAny, msgAny] = [addMsg as any, message as any];
        delete addMsgAny.parentSpan;
        delete addMsgAny.subSpans;
        delete msgAny.parentSpan;
        delete msgAny.subSpans;

        // Delete baggage for discovering unprocessed messages.
        delete addMsgAny._handledPromise;
        delete msgAny._handledPromise;

        assert.deepStrictEqual(addMsg, message);

        // test for receipt
        const [modAckMsg, deadline] = modAckStub.lastCall.args;
        assert.strictEqual(addMsg, modAckMsg);
        assert.strictEqual(deadline, subscriber.ackDeadline);

        done();
      });

      sandbox.stub(global.Date, 'now').returns(message.received);
      stream.emit('data', pullResponse);
    });

    it('should pause the stream when full', () => {
      const inventory: FakeLeaseManager = stubs.get('inventory');
      const stream: FakeMessageStream = stubs.get('messageStream');

      const pauseStub = sandbox.stub(stream, 'pause');

      inventory.emit('full');

      assert.strictEqual(pauseStub.callCount, 1);
    });

    it('should resume the stream when not full', () => {
      const inventory: FakeLeaseManager = stubs.get('inventory');
      const stream: FakeMessageStream = stubs.get('messageStream');

      const resumeStub = sandbox.stub(stream, 'resume');

      inventory.emit('free');

      assert.strictEqual(resumeStub.callCount, 1);
    });

    it('should set isOpen to false', () => {
      subscriber.open();
      assert.strictEqual(subscriber.isOpen, true);
    });
  });

  describe('setOptions', () => {
    beforeEach(() => subscriber.close());

    it('should capture the ackDeadline', () => {
      const ackDeadline = Duration.from({seconds: 1232});

      subscriber.setOptions({
        minAckDeadline: ackDeadline,
        maxAckDeadline: ackDeadline,
      });
      assert.strictEqual(subscriber.ackDeadline, ackDeadline.totalOf('second'));
    });

    it('should not set maxStreams higher than maxMessages', () => {
      const maxMessages = 3;
      const flowControl = {maxMessages};

      subscriber.setOptions({flowControl});
      subscriber.open();

      const stream: FakeMessageStream = stubs.get('messageStream');

      assert.strictEqual(stream.options.maxStreams, maxMessages);
    });

    it('should pass through the max extension time', () => {
      const maxExtensionTime = Duration.from({seconds: 1232});
      subscriber.setOptions({
        maxExtensionTime,
      });
      assert.strictEqual(
        subscriber.maxExtensionTime.seconds,
        maxExtensionTime.seconds,
      );
    });
  });

  describe('OpenTelemetry tracing', () => {
    beforeEach(() => {
      exporter.reset();
    });

    afterEach(async () => {
      tracing.setGloballyEnabled(false);
      exporter.reset();
      await subscriber.close();
    });

    it('exports a span once it is created', () => {
      tracing.setGloballyEnabled(true);

      subscription = new FakeSubscription() as {} as Subscription;
      subscriber = new Subscriber(subscription, {});
      message = new Message(subscriber, RECEIVED_MESSAGE);
      subscriber.open();

      // Construct mock of received message with span context
      const parentSpanContext: opentelemetry.SpanContext = {
        traceId: 'd4cda95b652f4a1592b449d5929fda1b',
        spanId: '6e0c63257de34c92',
        traceFlags: opentelemetry.TraceFlags.SAMPLED,
      };
      const parentSpan = opentelemetry.trace.getSpan(
        tracing.spanContextToContext(parentSpanContext)!,
      );
      const messageWithSpanContext = {
        ackId: uuid.v4(),
        message: {
          attributes: {
            [tracing.modernAttributeName]: JSON.stringify(parentSpanContext),
          },
          data: Buffer.from('Hello, world!'),
          messageId: uuid.v4(),
          orderingKey: 'ordering-key',
          publishTime: {seconds: 12, nanos: 32},
        },
      };
      tracing.injectSpan(parentSpan!, messageWithSpanContext.message);
      const pullResponse: s.PullResponse = {
        receivedMessages: [messageWithSpanContext],
      };

      const openedSub = subscriber as unknown as PublicInventory;
      sandbox.stub(openedSub._inventory, 'add').callsFake((m: s.Message) => {
        message = m;
      });

      // Receive message and assert that it was exported
      const msgStream = stubs.get('messageStream');
      msgStream.emit('data', pullResponse);

      message.endParentSpan();

      const spans = exporter.getFinishedSpans();
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].events.length, 2);
      const firstSpan = spans.pop();
      assert.ok(firstSpan);
      assert.strictEqual(firstSpan.parentSpanId, parentSpanContext.spanId);
      assert.strictEqual(
        firstSpan.name,
        `${subId} subscribe`,
        'name of span should match',
      );
      assert.strictEqual(
        firstSpan.kind,
        SpanKind.CONSUMER,
        'span kind should be CONSUMER',
      );
    });

    it('exports a span even when a span context is not present on message', () => {
      tracing.setGloballyEnabled(true);

      subscriber = new Subscriber(subscription, {});
      subscriber.open();

      const pullResponse: s.PullResponse = {
        receivedMessages: [RECEIVED_MESSAGE],
      };

      const openedSub = subscriber as unknown as PublicInventory;
      sandbox.stub(openedSub._inventory, 'add').callsFake((m: s.Message) => {
        message = m;
      });

      // Receive message and assert that it was exported
      const stream: FakeMessageStream = stubs.get('messageStream');
      stream.emit('data', pullResponse);

      message.endParentSpan();
      assert.strictEqual(exporter.getFinishedSpans().length, 1);
    });
  });

  describe('Message', () => {
    describe('initialization', () => {
      it('should localize ackId', () => {
        assert.strictEqual(message.ackId, RECEIVED_MESSAGE.ackId);
      });

      it('should localize attributes', () => {
        assert.strictEqual(
          message.attributes,
          RECEIVED_MESSAGE.message.attributes,
        );
      });

      it('should localize data', () => {
        assert.strictEqual(message.data, RECEIVED_MESSAGE.message.data);
      });

      it('should localize id', () => {
        assert.strictEqual(message.id, RECEIVED_MESSAGE.message.messageId);
      });

      it('should localize orderingKey', () => {
        assert.strictEqual(
          message.orderingKey,
          RECEIVED_MESSAGE.message.orderingKey,
        );
      });

      it('should localize publishTime', () => {
        const m = new Message(subscriber, RECEIVED_MESSAGE);
        const timestamp = m.publishTime as unknown as FakePreciseDate;

        assert(timestamp instanceof FakePreciseDate);
        assert.strictEqual(
          timestamp.value,
          RECEIVED_MESSAGE.message.publishTime,
        );
      });

      it('should localize received time', () => {
        const now = Date.now();

        sandbox.stub(global.Date, 'now').returns(now);

        const m = new Message(subscriber, RECEIVED_MESSAGE);

        assert.strictEqual(m.received, now);
      });
    });

    describe('deliveryAttempt', () => {
      it('should store the delivery attempt', () => {
        const deliveryAttempt = 10;
        const message = Object.assign({deliveryAttempt}, RECEIVED_MESSAGE);
        const m = new Message(subscriber, message);
        const attempt = m.deliveryAttempt;
        assert.strictEqual(attempt, deliveryAttempt);
      });

      it('should default to 0', () => {
        const m = new Message(subscriber, RECEIVED_MESSAGE);
        const attempt = m.deliveryAttempt;
        assert.strictEqual(attempt, 0);
      });
    });

    describe('length', () => {
      it('should return the data length', () => {
        assert.strictEqual(message.length, message.data.length);
      });

      it('should preserve the original data lenght', () => {
        const originalLength = message.data.length;

        message.data = Buffer.from('ohno');
        assert.notStrictEqual(message.length, message.data.length);
        assert.strictEqual(message.length, originalLength);
      });
    });

    describe('ack', () => {
      it('should ack the message', () => {
        const stub = sandbox.stub(subscriber, 'ack');

        message.ack();

        const [msg] = stub.lastCall.args;
        assert.strictEqual(msg, message);
      });

      it('should ack the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'ackWithResponse');

        stub.resolves(s.AckResponses.Success);
        const response = await message.ackWithResponse();
        assert.strictEqual(response, s.AckResponses.Success);
      });

      it('should fail to ack the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'ackWithResponse');

        stub.rejects(new s.AckError(s.AckResponses.Invalid));
        await assert.rejects(message.ackWithResponse());

        // Should cache the result also.
        await assert.rejects(message.ackWithResponse());
        assert.strictEqual(stub.callCount, 1);
      });

      it('should not ack the message if its been handled', () => {
        const stub = sandbox.stub(subscriber, 'ack');

        message.nack();
        message.ack();

        assert.strictEqual(stub.callCount, 0);
      });
    });

    describe('modAck', () => {
      it('should modAck the message', () => {
        const fakeDeadline = 10;
        const stub = sandbox.stub(subscriber, 'modAck');

        message.modAck(fakeDeadline);

        const [msg, deadline] = stub.lastCall.args;
        assert.strictEqual(msg, message);
        assert.strictEqual(deadline, fakeDeadline);
      });

      it('should modAck the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'modAckWithResponse');

        stub.resolves(s.AckResponses.Success);
        const response = await message.modAckWithResponse(0);
        assert.strictEqual(response, s.AckResponses.Success);
      });

      it('should fail to modAck the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'modAckWithResponse');

        stub.rejects(new s.AckError(s.AckResponses.Invalid));
        await assert.rejects(message.modAckWithResponse(0));

        // Should cache the result also.
        await assert.rejects(message.modAckWithResponse(0));
        assert.strictEqual(stub.callCount, 1);
      });

      it('should not modAck the message if its been handled', () => {
        const deadline = 10;
        const stub = sandbox.stub(subscriber, 'modAck');

        message.ack();
        message.modAck(deadline);

        assert.strictEqual(stub.callCount, 0);
      });
    });

    describe('nack', () => {
      it('should nack the message', () => {
        const stub = sandbox.stub(subscriber, 'modAck');

        message.nack();

        const [msg, delay] = stub.lastCall.args;
        assert.strictEqual(msg, message);
        assert.strictEqual(delay, 0);
      });

      it('should nack the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'nackWithResponse');

        stub.resolves(s.AckResponses.Success);
        const response = await message.nackWithResponse();
        assert.strictEqual(response, s.AckResponses.Success);
      });

      it('should fail to nack the message with response', async () => {
        subscriber.subscriptionProperties = {exactlyOnceDeliveryEnabled: true};
        const stub = sandbox.stub(subscriber, 'nackWithResponse');

        stub.rejects(new s.AckError(s.AckResponses.Invalid));
        await assert.rejects(message.nackWithResponse());

        // Should cache the result also.
        await assert.rejects(message.nackWithResponse());
        assert.strictEqual(stub.callCount, 1);
      });

      it('should not nack the message if its been handled', () => {
        const stub = sandbox.stub(subscriber, 'modAck');

        message.ack();
        message.nack();

        assert.strictEqual(stub.callCount, 0);
      });
    });
  });

  describe('SubscriberSpans', () => {
    const message: tracing.MessageWithAttributes = {
      attributes: {},
      parentSpan: undefined,
    };
    const spans = new s.SubscriberSpans(message);
    const fakeSpan = {
      end() {},
    } as unknown as opentelemetry.Span;

    it('starts a flow span', () => {
      const stub = sandbox
        .stub(tracing.PubsubSpans, 'createReceiveFlowSpan')
        .returns(fakeSpan);
      spans.flowStart();
      assert.strictEqual(stub.calledOnce, true);
      assert.strictEqual(stub.args[0][0], message);
      spans.flowStart();
      assert.strictEqual(stub.calledOnce, true);
    });

    it('ends a flow span', () => {
      sandbox
        .stub(tracing.PubsubSpans, 'createReceiveFlowSpan')
        .returns(fakeSpan);
      spans.flowStart();
      const spy = sandbox.spy(fakeSpan, 'end');
      spans.flowEnd();
      assert.strictEqual(spy.calledOnce, true);
      spans.flowEnd();
      assert.strictEqual(spy.calledOnce, true);
    });

    it('fires a modAck start event', () => {
      const stub = sandbox.stub(tracing.PubsubEvents, 'modAckStart');
      spans.modAckStart(Duration.from({seconds: 10}), true);
      assert.strictEqual(stub.args[0][0], message);
      assert.strictEqual(stub.args[0][1].totalOf('second'), 10);
      assert.strictEqual(stub.args[0][2], true);
      assert.strictEqual(stub.calledOnce, true);
    });

    it('fires a modAck end event', () => {
      const stub = sandbox.stub(tracing.PubsubEvents, 'modAckEnd');
      spans.modAckEnd();
      assert.strictEqual(stub.args[0][0], message);
      assert.strictEqual(stub.calledOnce, true);
    });

    it('starts a scheduler span', () => {
      const stub = sandbox
        .stub(tracing.PubsubSpans, 'createReceiveSchedulerSpan')
        .returns(fakeSpan);
      spans.schedulerStart();
      assert.strictEqual(stub.args[0][0], message);
      assert.strictEqual(stub.calledOnce, true);
      spans.schedulerStart();
      assert.strictEqual(stub.calledOnce, true);
    });

    it('ends a scheduler span', () => {
      sandbox
        .stub(tracing.PubsubSpans, 'createReceiveSchedulerSpan')
        .returns(fakeSpan);
      spans.schedulerStart();
      const spy = sandbox.spy(fakeSpan, 'end');
      spans.schedulerEnd();
      assert.strictEqual(spy.calledOnce, true);
      spans.schedulerEnd();
      assert.strictEqual(spy.calledOnce, true);
    });

    it('starts a processing span', () => {
      const stub = sandbox
        .stub(tracing.PubsubSpans, 'createReceiveProcessSpan')
        .returns(fakeSpan);
      const subName = 'foozle';
      spans.processingStart(subName);
      assert.strictEqual(stub.args[0][0], message);
      assert.strictEqual(stub.args[0][1], subName);
      assert.strictEqual(stub.calledOnce, true);
      spans.processingStart('boo');
      assert.strictEqual(stub.calledOnce, true);
    });

    it('ends a processing span', () => {
      sandbox
        .stub(tracing.PubsubSpans, 'createReceiveSchedulerSpan')
        .returns(fakeSpan);
      spans.processingStart('foozle');
      const spy = sandbox.spy(fakeSpan, 'end');
      spans.processingEnd();
      assert.strictEqual(spy.calledOnce, true);
      spans.processingEnd();
      assert.strictEqual(spy.calledOnce, true);
    });
  });
});
