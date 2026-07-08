// Copyright 2014 Google LLC
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
import {describe, it, before, after} from 'mocha';
import * as crypto from 'crypto';
import defer = require('p-defer');

import {promises as fs} from 'fs';

import {
  Message,
  PubSub,
  ServiceError,
  Snapshot,
  Subscription,
  Topic,
  SchemaTypes,
  SchemaViews,
  ISchema,
  Duration,
  Schema,
  SubscriptionOptions,
} from '../src';
import {MessageOptions} from '../src/topic';
import {TestResources} from '../test/testResources';
import {GoogleError} from 'google-gax';

const pubsub = new PubSub();

interface UsedTopic {
  name: string;
  fullName: string;
  topic: Topic;
}

interface UsedSub {
  name: string;
  fullName: string;
  sub: Subscription;
}

describe('pubsub', () => {
  const resources = new TestResources('ps-sys');

  async function generateTopic(test: string): Promise<UsedTopic> {
    const name = resources.generateName(test);
    const [topic] = await pubsub.topic(name).get({autoCreate: true});
    const fullName = topic.name;
    return {name, topic, fullName};
  }

  async function generateSub(test: string, topicName: string, opts: SubscriptionOptions = {}): Promise<UsedSub> {
    const name = resources.generateName(test);
    const sub = pubsub.topic(topicName).subscription(name, opts);
    await sub.create();
    const fullName = sub.name;
    return {name, sub, fullName};
  }

  function generateSnapshotName(test: string) {
    return resources.generateName(`ss-${test}`);
  }

  function generateSubName(test: string) {
    return resources.generateName(`sub-${test}`);
  }

  function generateSchemaName(test: string) {
    return resources.generateName(`sch-${test}`);
  }

  function generateTopicName(test: string) {
    return resources.generateName(`top-${test}`);
  }

  async function deleteTestResources(): Promise<void> {
    const [subs] = await pubsub.getSubscriptions();
    const [topics] = await pubsub.getTopics();
    const [snaps] = await pubsub.getSnapshots();

    // Close out schemas first, since other things may be
    // depending on them.
    const schemas: Schema[] = [];
    for await (const s of pubsub.listSchemas()) {
      schemas.push(pubsub.schema(s.name!));
    }
    await Promise.all(
      resources.filterForCleanup(schemas).map(x => x.delete?.())
    );

    // Snapshots.
    await Promise.all(
      resources.filterForCleanup(snaps).map(x => x.delete?.())
    )

    // Subscriptions next.
    await Promise.all(
      resources.filterForCleanup(subs).map(x => x.delete?.())
    );

    // Finally topics.
    await Promise.all(
      resources.filterForCleanup(topics).map(x => x.delete?.())
    );
  }

  async function publishPop(test: string, message: MessageOptions) {
    const topic = await generateTopic(test);
    const sub = await generateSub(test, topic.name);
    for (let i = 0; i < 6; i++) {
      await topic.topic.publishMessage(message);
    }
    return new Promise<Message>((resolve, reject) => {
      sub.sub.on('error', reject);
      sub.sub.once('message', resolve);
    });
  }

  before(async () => {
    await deleteTestResources();
  });

  after(() => {
    return deleteTestResources();
  });

  describe('Topic', () => {
    it('should be listed', async () => {
      const testTopics = [
        await generateTopic('should-list'),
        await generateTopic('should-list'),
      ];
      const [topics] = await pubsub.getTopics();
      const results = topics.filter(topic => {
        return testTopics.findIndex(t => t.fullName === topic.name) >= 0;
      });
      assert.strictEqual(results.length, testTopics.length);
    });

    it('should list topics in a stream', async () => {
      const testTopics = [
        await generateTopic('stream-list'),
        await generateTopic('stream-list'),
      ];
      const topicsEmitted = new Array<Topic>();
      await new Promise<void>((res, rej) => {
        pubsub
          .getTopicsStream()
          .on('error', rej)
          .on('data', (topic: Topic) => {
            topicsEmitted.push(topic);
          })
          .on('end', () => {
            const results = topicsEmitted.filter(topic => {
              return testTopics.findIndex(t => t.fullName === topic.name) >= 0;
            });

            assert.strictEqual(results.length, testTopics.length);
            res();
          });
      });
    });

    it('should allow manual paging', async () => {
      const testTopics = [
        await generateTopic('man-page'),
        await generateTopic('man-page'),
      ];
      const [topics] = await pubsub.getTopics({
        pageSize: 1,
        gaxOpts: {autoPaginate: false},
      });
      assert.strictEqual(topics.length, 1);
    });

    it('should be created and deleted', async () => {
      const testTopic = await generateTopic('c-and-d');
      await testTopic.topic.delete();
    });

    it('should honor the autoCreate option', done => {
      const topic = pubsub.topic(generateTopicName('auto'));

      topic.get({autoCreate: true}, done);
    });

    it('should confirm if a topic exists', async () => {
      const testTopic = await generateTopic('c-e');
      const topic = pubsub.topic(testTopic.name);

      const [exists] = await topic.exists();
      assert.strictEqual(exists, true);
    });

    it('should confirm if a topic does not exist', done => {
      const topic = pubsub.topic('should-not-exist');

      topic.exists(
        (err: Error | null | undefined, exists: boolean | null | undefined) => {
          assert.ifError(err);
          assert.strictEqual(exists, false);
          done();
        }
      );
    });

    it('should publish a message', async () => {
      const testTopic = await generateTopic('pub-msg');
      const topic = testTopic.topic;
      const message = {
        data: Buffer.from('message from me'),
        orderingKey: 'a',
      };

      const result = await topic.publishMessage(message);
    });

    it('should publish a message with attributes', async () => {
      const data = Buffer.from('raw message data');
      const attributes = {
        customAttribute: 'value',
      };
      const message = await publishPop('pub-attr', {data, attributes});
      assert.deepStrictEqual(message.data, data);
      assert.deepStrictEqual(message.attributes, attributes);
    });

    it('should get the metadata of a topic', async () => {
      const testTopic = await generateTopic('md-topic');
      const topic = testTopic.topic;
      const [meta] = await topic.getMetadata();
      assert.strictEqual(meta.name, topic.name);
    });

    it('should set metadata for a topic', async () => {
      const threeDaysInSeconds = 3 * 24 * 60 * 60;
      const testTopic = await generateTopic('md-set');

      const topic = testTopic.topic;
      await topic.setMetadata({
        messageRetentionDuration: {
          seconds: threeDaysInSeconds,
        },
      });
      const [metadata] = await topic.getMetadata();
      const {seconds, nanos} = metadata.messageRetentionDuration!;

      assert.strictEqual(Number(seconds), threeDaysInSeconds);
      assert.strictEqual(Number(nanos), 0);
    });

    describe('ordered messages', () => {
      interface Expected {
        key: string;
        messages: string[];
      }

      interface Input {
        key: string;
        message: string;
      }

      interface Pending {
        [key: string]: string[];
      }

      it('should pass the acceptance tests', async () => {
        const testTopic = await generateTopic('ordered');
        const topic = testTopic.topic;
        const [subscription] = await topic.createSubscription(
          generateSubName('ordered'),
          {
            enableMessageOrdering: true,
          }
        );
        const {
          input,
          expected,
          // eslint-disable-next-line @typescript-eslint/no-var-requires
        } = require('../../system-test/fixtures/ordered-messages.json');

        const pending: Pending = {};

        expected.forEach(({key, messages}: Expected) => {
          pending[key] = messages;
        });

        const deferred = defer();

        // Make sure we're listening when the lease manager throws the messages at us.
        subscription
          .on('error', deferred.reject)
          .on('message', (message: Message) => {
            const key = message.orderingKey || '';
            const data = message.data.toString();
            const messages = pending[key];

            if (!messages) {
              deferred.reject(
                new Error(
                  `Unknown key "${key}" for test data: ${JSON.stringify(
                    pending,
                    null,
                    4
                  )}`
                )
              );
              subscription.close();
              return;
            }

            const expected = messages[0];

            if (key && data !== expected) {
              deferred.reject(
                new Error(
                  `Expected "${expected}" but received "${data}" for key "${key}"`
                )
              );
              subscription.close();
              return;
            }

            message.ack();
            messages.splice(messages.indexOf(data), 1);

            if (!pending[key].length) delete pending[key];
            if (!Object.keys(pending).length) {
              deferred.resolve();
            }
          });

        const publishes = input.map(({key, message}: Input) => {
          const options: MessageOptions = {
            data: Buffer.from(message),
          };

          if (key) {
            options.orderingKey = key;
          }

          return topic.publishMessage(options);
        });
        await Promise.all(publishes);

        await deferred.promise;
      });
    });
  });

  describe('Subscription', () => {
    async function subPop(testName: string, count: number) {
      const testTopic = await generateTopic(testName);
      const topic = testTopic.topic;

      const testSubProms: Promise<UsedSub>[] = [];
      for (let i = 0; i < count; i++) {
        testSubProms.push(generateSub(testName, testTopic.name, {
          minAckDeadline: Duration.from({seconds: 60}),
          maxAckDeadline: Duration.from({seconds: 60}),
        }));
      }
      const testSubs = await Promise.all(testSubProms);
      const subs = testSubs.map(t => t.sub);
      for (let i = 0; i < 10; i++) {
        const data = Buffer.from('hello');
        await topic.publishMessage({data});
      }
      await new Promise(r => setTimeout(r, 2500));

      return {
        testTopic,
        topic,
        testSubs,
        subs,
      };
    }

    it('should return error if creating an existing subscription', async () => {
      // Use a new topic...
      const topic = await generateTopic('sub-dup');

      // And make a sub...
      const existing = await generateSub('sub-dup', topic.name);

      // ...another but with the same subscription name that we already created...
      const subscription = topic.topic.subscription(existing.name);

      try {
        await subscription.create();
        assert.fail('Should not have created subscription successfully.');
      } catch (e) {
        // ...and it should fail, because the subscription name is unique to the
        // project, and not the topic.
        const err = e as GoogleError;
        assert.strictEqual(err!.code, 6);
      }
    });

    it('should list all subscriptions registered to the topic', async () => {
      const pop = await subPop('list-subs', 2);
      const [subs] = await pop.topic.getSubscriptions();
      assert.strictEqual(subs!.length, 2);
      assert(subs![0] instanceof Subscription);
    });

    it('should list all topic subscriptions as a stream', async () => {
      const pop = await subPop('list-subs', 2);

      await new Promise<void>((res, rej) => {
        const subscriptionsEmitted: Array<{}> = [];
        pop.topic
          .getSubscriptionsStream()
          .on('error', rej)
          .on('data', (subscription: {}) => {
            subscriptionsEmitted.push(subscription);
          })
          .on('end', () => {
            assert.strictEqual(subscriptionsEmitted.length, 2);
            res();
          });
      });
    });

    it('should list all subscriptions regardless of topic', async () => {
      // Make sure there are some subs.
      await subPop('all-subs', 1);

      const [results] = await pubsub.getSubscriptions();
      assert(results instanceof Array);
    });

    it('should list all subscriptions as a stream', async () => {
      // Make sure there are some subs.
      await subPop('all-subs', 1);

      await new Promise<void>((res, rej) => {
        let subscriptionEmitted = false;

        pubsub
          .getSubscriptionsStream()
          .on('error', rej)
          .on('data', (subscription: Subscription) => {
            subscriptionEmitted = subscription instanceof Subscription;
          })
          .on('end', () => {
            assert.strictEqual(subscriptionEmitted, true);
            res();
          });
      });
    });

    it('should allow creation and deletion of a subscription', async () => {
      const testTopic = await generateTopic('c-d-sub');
      const subName = generateSubName('c-d-sub');
      const [sub] = await testTopic.topic.createSubscription(subName);
      assert(sub instanceof Subscription);
      await sub.delete();
    });

    it('should honor the autoCreate option', async () => {
      const testTopic = await generateTopic('auto-c');
      const sub = testTopic.topic.subscription(generateSubName('auto-c'));

      await sub.get({autoCreate: true});
    });

    it('should confirm if a sub exists', async () => {
      const testTopic = await generateTopic('exists');
      const testSub = await generateSub('exists', testTopic.name);
      const sub = testSub.sub;

      const [exists] = await sub.exists();
      assert.strictEqual(exists, true);
    });

    it('should confirm if a sub does not exist', async () => {
      const testTopic = await generateTopic('dne');
      const sub = testTopic.topic.subscription('should-not-exist');

      const [exists] = await sub.exists();
      assert.strictEqual(exists, false);
    });

    it('should create a subscription with message retention', async () => {
      const subName = generateSubName('sub-ret');
      const threeDaysInSeconds = 3 * 24 * 60 * 60;
      const callOptions = {
        messageRetentionDuration: threeDaysInSeconds,
        topic: '',
        name: '',
      };

      const testTopic = await generateTopic('msg-ret');
      const [sub] = await testTopic.topic.createSubscription(subName, callOptions);
      const [metadata] = await sub.getMetadata();
      assert.strictEqual(
        Number(metadata!.messageRetentionDuration!.seconds),
        threeDaysInSeconds
      );
      assert.strictEqual(
        Number(metadata!.messageRetentionDuration!.nanos),
        0
      );
    });

    it('should set metadata for a subscription', async () => {
      const testTopic = await generateTopic('met-sub');
      const subscription = testTopic.topic.subscription(generateSubName('met-sub'));
      const threeDaysInSeconds = 3 * 24 * 60 * 60;

      await subscription.create();
      await subscription.setMetadata({
        messageRetentionDuration: threeDaysInSeconds,
      });
      const [metadata] = await subscription.getMetadata();
      const {seconds, nanos} = metadata.messageRetentionDuration!;

      assert.strictEqual(Number(seconds), threeDaysInSeconds);
      assert.strictEqual(Number(nanos), 0);
    });

    it('should error when using a non-existent subscription', async () => {
      const testTopic = await generateTopic('dne-sub');
      const subscription = testTopic.topic.subscription(generateSubName('dne-sub'));

      await new Promise((res, rej) => {
        subscription.on('error', (err: {code: number}) => {
          assert.strictEqual(err.code, 5);
          subscription.close(res);
        });

        subscription.on('message', () => {
          rej(new Error('Should not have been called.'));
        });
      });
    });

    it('should receive the published messages', async () => {
      const pop = await subPop('recv', 1);
      let messageCount = 0;
      const subscription = pop.subs[0];

      await new Promise((res, rej) => {
        subscription.on('error', rej);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        subscription.on('message', message => {
          assert.deepStrictEqual(message.data, Buffer.from('hello'));
          message.ack();

          if (++messageCount === 10) {
            subscription.close(res);
          }
        });
      });
    });

    it('should ack the message', async () => {
      const pop = await subPop('ack', 1);
      const subscription = pop.subs[0];

      await new Promise((res, rej) => {
        let finished = false;
        subscription.on('error', () => {
          if (!finished) {
            finished = true;
            subscription.close(rej);
          }
        });
        subscription.on('message', ack);

        function ack(message: Message) {
          if (!finished) {
            finished = true;
            message.ack();
            subscription.close(res);
          }
        }
      });
    });

    it('should nack the message', async () => {
      const pop = await subPop('nack', 1);
      const subscription = pop.subs[0];

      await new Promise((res, rej) => {
        let finished = false;
        subscription.on('error', () => {
          if (!finished) {
            finished = true;
            subscription.close(rej);
          }
        });
        subscription.on('message', nack);

        function nack(message: Message) {
          if (!finished) {
            finished = true;
            message.nack();
            subscription.close(res);
          }
        }
      });
    });

    it('should respect flow control limits', async () => {
      const maxMessages = 3;
      let messageCount = 0;

      const pop = await subPop('fcl', 1);
      const subscription = pop.topic.subscription(pop.testSubs[0].name, {
        flowControl: {maxMessages, allowExcessMessages: false},
      });

      await new Promise((res, rej) => {
        subscription.on('error', rej);
        subscription.on('message', onMessage);

        function onMessage() {
          if (++messageCount < maxMessages) {
            return;
          }

          subscription.close(res);
        }
      });
    });

    it('should send and receive large messages', async () => {
      const pop = await subPop('large', 1);
      const subscription = pop.subs[0];
      const data = crypto.randomBytes(9000000); // 9mb

      const messageId = await pop.topic.publishMessage({data});
      await new Promise((res, rej) => {
        subscription.on('error', rej).on('message', (message: Message) => {
          if (message.id !== messageId) {
            return;
          }

          assert.deepStrictEqual(data, message.data);
          subscription.close(res);
        });
      });
    });

    it('should detach subscriptions', async () => {
      const pop = await subPop('detach', 1);
      const subscription = pop.subs[0];
      const [before] = await subscription.detached();
      assert.strictEqual(before, false);
      await pubsub.detachSubscription(subscription.name);
      const [after] = await subscription.detached();
      assert.strictEqual(after, true);
    });

    // can be ran manually to test options/memory usage/etc.
    it.skip('should handle a large volume of messages', async function () {
      const MESSAGES = 200000;

      const deferred = defer();
      const messages = new Set();

      let duplicates = 0;

      this.timeout(0);

      const pop = await subPop('many', 1);
      const topic = pop.topic;
      const subscription = pop.subs[0];

      topic.setPublishOptions({batching: {maxMessages: 999}});
      await publish(MESSAGES);

      const startTime = Date.now();
      subscription.on('error', deferred.reject).on('message', onmessage);

      return deferred.promise;

      function onmessage(message: Message) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const testid = (message.attributes as any).testid;

        if (!testid) {
          return;
        }

        message.ack();

        if (messages.has(testid)) {
          messages.delete(testid);
        } else {
          duplicates += 1;
        }

        if (messages.size > 0) {
          return;
        }

        const total = MESSAGES + duplicates;
        const duration = (Date.now() - startTime) / 1000 / 60;
        const acksPerMin = Math.floor(total / duration);

        console.log(`${total} messages processed.`);
        console.log(`${duplicates} messages redelivered.`);
        console.log(`${acksPerMin} acks/m on average.`);

        subscription.close((err: unknown) => {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
      }

      function publish(messageCount: number) {
        const data = Buffer.from('Hello, world!');
        const promises: Array<Promise<string>> = [];

        let id = 0;

        for (let i = 0; i < messageCount; i++) {
          const testid = String(++id);
          const attributes = {testid};
          messages.add(testid);
          promises.push(topic.publishMessage({data, attributes}));
        }

        return Promise.all(promises);
      }
    });
  });

  describe('IAM', () => {
    it('should get a policy', async () => {
      const testTopic = await generateTopic('get-pol');
      const topic = testTopic.topic;

      const [policy] = await topic.iam.getPolicy();
      assert.deepStrictEqual(policy!.bindings, []);
      assert.strictEqual(policy!.version, 0);
    });

    it('should set a policy', async () => {
      const testTopic = await generateTopic('set-pol');
      const topic = testTopic.topic;
      const policy = {
        bindings: [
          {
            role: 'roles/pubsub.publisher',
            members: [
              'serviceAccount:gmail-api-push@system.gserviceaccount.com',
            ],
          },
        ],
      };

      const [newPolicy] = await topic.iam.setPolicy(policy);
      const expectedBindings = policy.bindings.map(binding =>
        Object.assign({condition: null}, binding)
      );
      assert.deepStrictEqual(newPolicy!.bindings, expectedBindings);
    });

    it('should test the iam permissions', async () => {
      const testTopic = await generateTopic('set-pol');
      const topic = testTopic.topic;
      const testPermissions = ['pubsub.topics.get', 'pubsub.topics.update'];

      const [permissions] = await topic.iam.testPermissions(testPermissions);
      assert.deepStrictEqual(permissions, {
        'pubsub.topics.get': true,
        'pubsub.topics.update': true,
      });
    });
  });

  describe('Snapshot', () => {
    async function snapshotPop(test: string) {
      const topic: Topic = (await generateTopic('snap')).topic;
      const subscription: Subscription = (await generateSub('snap', topic.name)).sub;
      const snapshotId: string = generateSnapshotName('snap');
      const snapshot: Snapshot = subscription.snapshot(snapshotId);

      await snapshot.create();

      return {
        topic,
        subscription,
        snapshotId,
        snapshot,
      };
    }


    function getSnapshotName({name}: {name: string}) {
      return name.split('/').pop();
    }

    before(async () => {
      await deleteTestResources();
    });

    after(async () => {
      await deleteTestResources();
    });

    it('should get a list of snapshots', async () => {
      const pop = await snapshotPop('list');
      const [snapshots] = await pubsub.getSnapshots();
      assert(snapshots!.length > 0);
      const names = snapshots!.map(getSnapshotName);
      assert(names.includes(pop.snapshotId));
    });

    it('should get a list of snapshots as a stream', async () => {
      const pop = await snapshotPop('list-s');
      const snapshots = await new Promise<Snapshot[]>((res, rej) => {
        const snaps = new Array<Snapshot>();
        pubsub
          .getSnapshotsStream()
          .on('error', rej)
          .on('data', (snapshot: Snapshot) => snaps.push(snapshot))
          .on('end', () => {
            res(snaps);
          });
      });
      assert(snapshots.length > 0);
      const names = snapshots.map(getSnapshotName);
      assert(names.includes(pop.snapshotId));
    });

    describe('seeking', () => {
      async function seekPop(test: string) {
        const pop = await snapshotPop(test);
        const errorPromise = new Promise((_, reject) =>
          pop.subscription.on('error', reject)
        );

        return {
          errorPromise,
          ...pop,
        };
      }

      // This creates a Promise that hooks the 'message' callback of the
      // subscription above, and resolves when that callback calls `resolve`.
      type WorkCallback = (arg: Message, resolve: Function) => void;
      function makeMessagePromise(subscription: Subscription, workCallback: WorkCallback): Promise<void> {
        return new Promise(resolve => {
          subscription.on('message', (arg: Message) => {
            workCallback(arg, resolve);
          });
        });
      }

      async function publishTestMessage(topic: Topic) {
        return await topic.publishMessage({data: Buffer.from('Hello, world!')});
      }

      it('should seek to a snapshot', async () => {
        const pop = await seekPop('sn-seek');
        let messageCount = 0;

        type EventParameter = {id: string; ack: () => void};
        let messageId: string;
        const messagePromise = makeMessagePromise(
          pop.subscription,
          async (message: EventParameter, resolve) => {
            if (message.id !== messageId) {
              return;
            }
            message.ack();

            if (++messageCount === 1) {
              await pop.snapshot.seek();
              return;
            }

            assert.strictEqual(messageCount, 2);
            await pop.subscription.close();

            resolve();
          }
        );

        messageId = await publishTestMessage(pop.topic);
        await Promise.race([pop.errorPromise, messagePromise]);
      });

      it('should seek to a date', async () => {
        const pop = await seekPop('sn-seek-date');
        let messageCount = 0;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type EventParameter = {id: string; ack: () => void; publishTime: any};
        let messageId: string;
        const messagePromise = makeMessagePromise(
          pop.subscription,
          async (message: EventParameter, resolve) => {
            if (message.id !== messageId) {
              return;
            }

            message.ack();

            if (++messageCount === 1) {
              pop.subscription.seek(
                message.publishTime,
                (err: ServiceError | null) => {
                  assert.ifError(err);
                }
              );
              return;
            }

            assert.strictEqual(messageCount, 2);
            await pop.subscription.close();

            resolve();
          }
        );

        messageId = await publishTestMessage(pop.topic);
        await Promise.race([pop.errorPromise, messagePromise]);
      });

      it('should seek to a future date (purge)', async () => {
        const pop = await seekPop('sn-purge');
        const testText = 'Oh no!';

        await publishTestMessage(pop.topic);

        // Forward-seek to remove any messages from the queue (those were
        // placed there in before()).
        //
        // We... probably won't be using this in 3000?
        await pop.subscription.seek(new Date('3000-01-01'));

        // Drop a second message and make sure it's the right ID.
        await pop.topic.publishMessage({data: Buffer.from(testText)});

        type EventParameter = {data: {toString: () => string}; ack: () => void};
        const messagePromise = makeMessagePromise(
          pop.subscription,
          async (message: EventParameter, resolve) => {
            // If we get the default message from before() then this fails.
            assert.equal(message.data.toString(), testText);
            message.ack();
            await pop.subscription.close();

            resolve();
          }
        );

        await Promise.race([pop.errorPromise, messagePromise]);
      });
    });
  });

  describe('schema', () => {
    // This should really be handled by a standard method of Array(), imo, but it's not.
    async function aiToArray(
      iterator: AsyncIterable<ISchema>,
      nameFilter?: string
    ): Promise<ISchema[]> {
      const result = [] as ISchema[];
      for await (const i of iterator) {
        if (!nameFilter || (nameFilter && i.name?.endsWith(nameFilter))) {
          result.push(i);
        }
      }

      return result;
    }

    const getSchemaDef = async () => {
      const schemaDef = (
        await fs.readFile('system-test/fixtures/provinces.avsc')
      ).toString();

      return schemaDef;
    };

    const setupTestSchema = async (test: string) => {
      const schemaDef = await getSchemaDef();
      const schemaId = generateSchemaName(test);
      await pubsub.createSchema(schemaId, SchemaTypes.Avro, schemaDef);
      return schemaId;
    };

    it('should create a schema', async () => {
      const schemaId = await setupTestSchema('sc-create');
      const schemaList = await aiToArray(pubsub.listSchemas(), schemaId);
      assert.strictEqual(schemaList.length, 1);
    });

    it('should delete a schema', async () => {
      const schemaId = await setupTestSchema('sc-del');

      // Validate that we created one, because delete() doesn't throw, and we
      // might end up causing a false negative.
      const preSchemaList = await aiToArray(pubsub.listSchemas(), schemaId);
      assert.strictEqual(preSchemaList.length, 1);

      await pubsub.schema(schemaId).delete();

      const postSchemaList = await aiToArray(pubsub.listSchemas(), schemaId);
      assert.strictEqual(postSchemaList.length, 0);
    });

    it('should list schemas', async () => {
      const schemaId = await setupTestSchema('sc-list');

      const basicList = await aiToArray(
        pubsub.listSchemas(SchemaViews.Basic),
        schemaId
      );
      assert.strictEqual(basicList.length, 1);
      assert.strictEqual(basicList[0].definition, '');

      const fullList = await aiToArray(
        pubsub.listSchemas(SchemaViews.Full),
        schemaId
      );
      assert.strictEqual(fullList.length, 1);
      assert.ok(fullList[0].definition);
    });

    it('should get a schema', async () => {
      const schemaId = await setupTestSchema('sc-get');
      const schema = pubsub.schema(schemaId);
      const info = await schema.get(SchemaViews.Basic);
      assert.strictEqual(info.definition, '');

      const fullInfo = await schema.get(SchemaViews.Full);
      assert.ok(fullInfo.definition);
    });

    it('should validate a schema', async () => {
      const schemaDef = await getSchemaDef();

      try {
        await pubsub.validateSchema({
          type: SchemaTypes.Avro,
          definition: schemaDef,
        });
      } catch (e) {
        assert.strictEqual(e, undefined, 'Error thrown by validateSchema');
      }

      const badSchemaDef = '{"not_actually":"avro"}';
      try {
        await pubsub.validateSchema({
          type: SchemaTypes.Avro,
          definition: badSchemaDef,
        });
      } catch (e) {
        assert.ok(e);
      }

      const fakeSchemaDef = 'woohoo i am a schema, no really';

      try {
        await pubsub.validateSchema({
          type: SchemaTypes.Avro,
          definition: fakeSchemaDef,
        });
      } catch (e) {
        assert.ok(e);
      }
    });

    // The server doesn't seem to be returning proper responses for this.
    // Commenting out for now, until it can be discussed.
    // TODO(feywind): Uncomment this later. May be solved by b/188927641.
    /* it('should validate a message', async () => {
      const schemaId = await setupTestSchema();
      const schema = pubsub.schema(schemaId);
      const testMessage = (
        await fs.readFile('system-test/fixtures/province.json')
      ).toString();

      try {
        await schema.validateMessage(testMessage, Encodings.Json);
      } catch (e) {
        console.log(e, e.message, e.toString());
        assert.strictEqual(e, undefined, 'Error thrown by validateSchema');
      }

      const badMessage = '{"foo":"bar"}';

      try {
        await schema.validateMessage(badMessage, Encodings.Json);
      } catch (e) {
        assert.ok(e);
      }

      const fakeMessage = 'woohoo i am a message, no really';

      try {
        await schema.validateMessage(fakeMessage, Encodings.Json);
      } catch (e) {
        assert.ok(e);
      }
    }); */
  });

  it('should allow closing of publisher clients', async () => {
    // The full call stack of close() is tested in unit tests; this is mostly
    // to verify that the close() method is actually there and doesn't error.
    const localPubsub = new PubSub();

    // Just use the client object to make sure it has opened a connection.
    await pubsub.getTopics();

    // Tell it to close, and validate that it's marked closed.
    await localPubsub.close();
    assert.strictEqual(localPubsub.isOpen, false);
  });
});
