/*!
 * Copyright 2019 Google LLC
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

import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {EventEmitter} from 'events';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as opentelemetry from '@opentelemetry/api';
import {Topic} from '../../src';
import * as p from '../../src/publisher';
import * as q from '../../src/publisher/message-queues';
import {PublishError} from '../../src/publisher/publish-error';
import * as util from '../../src/util';

import {defaultOptions} from '../../src/default-options';
import * as tracing from '../../src/telemetry-tracing';
import {exporter} from '../tracing';
import {SpanKind} from '@opentelemetry/api';

let promisified = false;
const fakeUtil = Object.assign({}, util, {
  promisifySome(
    class_: Function,
    classProtos: object,
    methods: string[],
    options: pfy.PromisifyAllOptions,
  ): void {
    if (class_.name === 'Publisher') {
      promisified = true;
      assert.deepStrictEqual(methods, ['flush', 'publishMessage']);
      assert.strictEqual(options.singular, true);
    }
    // Defeats the method name type check.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    util.promisifySome(class_, classProtos, methods as any, options);
  },
});

class FakeQueue extends EventEmitter {
  publisher: p.Publisher;
  constructor(publisher: p.Publisher) {
    super();
    this.publisher = publisher;
  }
  updateOptions() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(message: p.PubsubMessage, callback: p.PublishCallback): void {}
  async publish() {
    await this._publish([], []);
  }
  async publishDrain() {
    await this.publish();
  }
  async _publish(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    messages: p.PubsubMessage[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callbacks: p.PublishCallback[],
  ) {}
}

class FakeOrderedQueue extends FakeQueue {
  orderingKey: string;
  error?: Error;
  constructor(publisher: p.Publisher, key: string) {
    super(publisher);
    this.orderingKey = key;
  }
  resumePublishing(): void {}
  async publish() {
    await this._publish([], []);
  }
  async publishDrain() {
    await this.publish();
  }
  async _publish(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    messages: p.PubsubMessage[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callbacks: p.PublishCallback[],
  ) {}
}

describe('Publisher', () => {
  let sandbox: sinon.SinonSandbox;
  let spy: sinon.SinonSpy;
  const topicId = 'topic-name';
  const projectId = 'PROJECT_ID';
  const topic = {
    name: `projects/${projectId}/topics/${topicId}`,
    pubsub: {projectId},
  } as Topic;

  // tslint:disable-next-line variable-name
  let Publisher: typeof p.Publisher;
  let publisher: p.Publisher;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    spy = sandbox.spy();

    const mocked = proxyquire('../../src/publisher/index.js', {
      '../util': fakeUtil,
      './message-queues': {
        Queue: FakeQueue,
        OrderedQueue: FakeOrderedQueue,
      },
    });

    Publisher = mocked.Publisher;

    publisher = new Publisher(topic);
  });

  afterEach(() => {
    sandbox.restore();
    tracing.setGloballyEnabled(false);
  });

  describe('initialization', () => {
    it('should promisify some of the things', () => {
      assert(promisified);
    });

    it('should capture user options', () => {
      const stub = sandbox.stub(Publisher.prototype, 'setOptions');

      const options = {};
      publisher = new Publisher(topic, options);

      assert.ok(stub.calledWith(options));
    });

    it('should localize topic instance', () => {
      assert.strictEqual(publisher.topic, topic);
    });

    it('should create a message queue', () => {
      assert(publisher.queue instanceof FakeQueue);
      assert.strictEqual(publisher.queue.publisher, publisher);
    });

    it('should create a map for ordered queues', () => {
      assert(publisher.orderedQueues instanceof Map);
    });
  });

  describe('publish', () => {
    const buffer = Buffer.from('Hello, world!');

    it('should call through to publishMessage', () => {
      const stub = sandbox.stub(publisher, 'publishMessage');

      publisher.publish(buffer, spy);

      const [{data}, callback] = stub.lastCall.args;
      assert.strictEqual(data, buffer);
      assert.strictEqual(callback, spy);
    });

    it('should optionally accept attributes', () => {
      const stub = sandbox.stub(publisher, 'publishMessage');
      const attrs = {};

      publisher.publish(buffer, attrs, spy);

      const [{attributes}, callback] = stub.lastCall.args;
      assert.strictEqual(attributes, attrs);
      assert.strictEqual(callback, spy);
    });
  });

  describe('OpenTelemetry tracing', () => {
    let tracingPublisher: p.Publisher = {} as p.Publisher;
    const buffer = Buffer.from('Hello, world!');

    beforeEach(() => {
      exporter.reset();
    });

    it('export created spans', () => {
      tracing.setGloballyEnabled(true);

      // Setup trace exporting
      tracingPublisher = new Publisher(topic);
      const msg = {data: buffer} as p.PubsubMessage;
      void tracingPublisher.publishMessage(msg);

      // publishMessage is only the first part of the process now,
      // so we need to manually end the span.
      msg.parentSpan?.end();

      const spans = exporter.getFinishedSpans();
      assert.notStrictEqual(spans.length, 0, 'has span');
      const createdSpan = spans.concat().pop()!;
      assert.strictEqual(
        createdSpan.status.code,
        opentelemetry.SpanStatusCode.UNSET,
      );
      assert.strictEqual(
        createdSpan.attributes['messaging.system'],
        'gcp_pubsub',
      );
      assert.strictEqual(
        createdSpan.attributes['messaging.destination.name'],
        topicId,
      );
      assert.strictEqual(createdSpan.name, `${topicId} create`);
      assert.strictEqual(
        createdSpan.kind,
        SpanKind.PRODUCER,
        'span kind should be PRODUCER',
      );
      assert.ok(spans);
    });
  });

  describe('publishMessage', () => {
    const data = Buffer.from('hello, world!');

    it('should throw an error if data is not a Buffer', () => {
      const badData = {} as Buffer;
      assert.throws(
        () => publisher.publishMessage({data: badData}, spy),
        /Data must be in the form of a Buffer or Uint8Array\./,
      );
    });

    it('should throw an error if data and attributes are both empty', () => {
      assert.throws(
        () => publisher.publishMessage({}, spy),
        /at least one attribute must be present/,
      );
    });

    it('should allow sending only attributes', () => {
      const attributes = {foo: 'bar'} as {};
      assert.doesNotThrow(() => publisher.publishMessage({attributes}, spy));
    });

    it('should throw an error if attributes are wrong format', () => {
      const attributes = {foo: {bar: 'baz'}} as {};

      assert.throws(
        () => publisher.publishMessage({data, attributes}, spy),
        /All attributes must be in the form of a string.\n\nInvalid value of type "object" provided for "foo"\./,
      );
    });

    it('should add non-ordered messages to the message queue', done => {
      const stub = sandbox.stub(publisher.queue, 'add');
      const fakeMessage = {data};

      publisher.publishMessage(fakeMessage, done);

      const [message, callback] = stub.lastCall.args;
      assert.strictEqual(message, fakeMessage);

      // Because of publisher flow control indirection, we have to test
      // the callback this way.
      callback(null);
    });

    describe('ordered messages', () => {
      const orderingKey = 'foo';
      const fakeMessage = {data, orderingKey};

      let queue: FakeOrderedQueue;

      beforeEach(() => {
        queue = new FakeOrderedQueue(publisher, orderingKey);
        publisher.orderedQueues.set(
          orderingKey,
          queue as unknown as q.OrderedQueue,
        );
      });

      it('should create a new queue for a message if need be', () => {
        publisher.orderedQueues.clear();
        publisher.publishMessage(fakeMessage, spy);

        queue = publisher.orderedQueues.get(
          orderingKey,
        ) as unknown as FakeOrderedQueue;

        assert(queue instanceof FakeOrderedQueue);
        assert.strictEqual(queue.publisher, publisher);
        assert.strictEqual(queue.orderingKey, orderingKey);
      });

      it('should add the ordered message to the correct queue', done => {
        const stub = sandbox.stub(queue, 'add');

        publisher.publishMessage(fakeMessage, done);

        // Because of publisher flow control indirection, we can't test
        // the callback here.
        const [message, callback] = stub.lastCall.args;
        assert.strictEqual(message, fakeMessage);

        // Because of publisher flow control indirection, we have to test
        // the callback this way.
        callback(null);
      });

      it('should return an error if the queue encountered an error', done => {
        const error = new Error('err') as PublishError;
        sandbox
          .stub(queue, 'add')
          .callsFake((message, callback) => callback(error));

        publisher.publishMessage(fakeMessage, err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should delete the queue once it is empty', () => {
        publisher.orderedQueues.clear();
        publisher.publishMessage(fakeMessage, spy);

        queue = publisher.orderedQueues.get(
          orderingKey,
        ) as unknown as FakeOrderedQueue;
        queue.emit('drain');

        assert.strictEqual(publisher.orderedQueues.size, 0);
      });

      it('should drain any ordered queues on flush', done => {
        // We have to stub out the regular queue as well, so that the flush() operation finishes.
        sandbox.stub(FakeQueue.prototype, '_publish').callsFake(async () => {
          // Simulate the drain taking longer than the publishes. This can
          // happen if more messages are queued during the publish().
          process.nextTick(() => {
            publisher.queue.emit('drain');
          });
        });

        sandbox
          .stub(FakeOrderedQueue.prototype, '_publish')
          .callsFake(async () => {
            const queue = publisher.orderedQueues.get(
              orderingKey,
            ) as unknown as FakeOrderedQueue;
            // Simulate the drain taking longer than the publishes. This can
            // happen on some ordered queue scenarios, especially if we have more
            // than one queue to empty.
            process.nextTick(() => {
              queue.emit('drain');
            });
          });

        publisher.orderedQueues.clear();
        publisher.publishMessage(fakeMessage, spy);

        publisher.flush(err => {
          assert.strictEqual(err, null);
          assert.strictEqual(publisher.orderedQueues.size, 0);
          done();
        });
      });
    });
  });

  describe('resumePublishing', () => {
    it('should resume publishing for the provided ordering key', () => {
      const orderingKey = 'foo';
      const queue = new FakeOrderedQueue(publisher, orderingKey);
      const stub = sandbox.stub(queue, 'resumePublishing');

      publisher.orderedQueues.set(
        orderingKey,
        queue as unknown as q.OrderedQueue,
      );
      publisher.resumePublishing(orderingKey);

      assert.strictEqual(stub.callCount, 1);
    });
  });

  describe('setOptions', () => {
    it('should apply default values', () => {
      publisher.setOptions({});

      assert.deepStrictEqual(publisher.settings, {
        batching: {
          maxBytes: defaultOptions.publish.maxOutstandingBytes,
          maxMessages: defaultOptions.publish.maxOutstandingMessages,
          maxMilliseconds: defaultOptions.publish.maxDelayMillis,
        },
        messageOrdering: false,
        gaxOpts: {
          isBundling: false,
        },
        flowControlOptions: {
          maxOutstandingBytes: undefined,
          maxOutstandingMessages: undefined,
        },
      });
    });

    it('should capture user provided values', () => {
      const options = {
        batching: {
          maxBytes: 10,
          maxMessages: 10,
          maxMilliseconds: 1,
        },
        messageOrdering: true,
        gaxOpts: {
          isBundling: true,
        },
        flowControlOptions: {
          maxOutstandingBytes: 500,
          maxOutstandingMessages: 50,
        },
      };

      publisher.setOptions(options);

      assert.deepStrictEqual(publisher.settings, options);
    });

    it('should cap maxBytes at 9MB', () => {
      publisher.setOptions({
        batching: {
          maxBytes: Math.pow(1024, 2) * 10,
        },
      });

      const expected = Math.pow(1024, 2) * 9;
      assert.strictEqual(publisher.settings.batching!.maxBytes, expected);
    });

    it('should cap maxMessages at 1000', () => {
      publisher.setOptions({
        batching: {
          maxMessages: 1001,
        },
      });
      assert.strictEqual(publisher.settings.batching!.maxMessages, 1000);
    });

    it('should pass new option values into queues after construction', () => {
      // Make sure we have some ordering queues.
      publisher.orderedQueues.set('a', new q.OrderedQueue(publisher, 'a'));
      publisher.orderedQueues.set('b', new q.OrderedQueue(publisher, 'b'));

      const stubs = [sandbox.stub(publisher.queue, 'updateOptions')];
      assert.deepStrictEqual(publisher.orderedQueues.size, 2);
      stubs.push(
        ...Array.from(publisher.orderedQueues.values()).map(q =>
          sandbox.stub(q, 'updateOptions'),
        ),
      );

      const newOptions: p.PublishOptions = {
        batching: {},
      };
      publisher.setOptions(newOptions);

      stubs.forEach(s => assert.ok(s.calledOnce));
    });
  });

  describe('flush', () => {
    // The ordered queue drain test is above with the ordered queue tests.
    it('should drain the main publish queue', done => {
      sandbox.stub(publisher.queue, '_publish').callsFake(async () => {
        // Simulate the drain taking longer than the publishes. This can
        // happen if more messages are queued during the publish().
        process.nextTick(() => {
          publisher.queue.emit('drain');
        });
      });

      publisher.flush(err => {
        assert.strictEqual(err, null);
        assert.strictEqual(
          !publisher.queue.batch || publisher.queue.batch.messages.length === 0,
          true,
        );
        done();
      });
    });
  });
});
