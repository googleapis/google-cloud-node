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

import {Message, PubSub, PublishOptions} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';

describe('Batch and Flow Control Samples System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-batch');

  let topicName: string;
  let subName: string;

  before(async () => {
    topicName = resources.generateName('topic');
    subName = resources.generateName('sub');
  });

  after(async () => {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );

    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map((x: any) => x.delete?.())
    );
  });

  it('should publish batched messages', async () => {
    const [topic] = await pubsub.createTopic(topicName);
    const [subscription] = await topic.createSubscription(subName);

    const publishOptions: PublishOptions = {
      batching: {
        maxMessages: 10,
        maxMilliseconds: 2000,
      },
    };
    const batchPublisher = pubsub.topic(topicName, publishOptions);

    const promises: Promise<string>[] = [];
    for (let i = 0; i < 10; i++) {
      promises.push(batchPublisher.publishMessage({data: Buffer.from(`message ${i}`)}));
    }

    const messageIds = await Promise.all(promises);
    assert.strictEqual(messageIds.length, 10);

    const messages: Message[] = [];
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for batched messages')), 15000);
      subscription.on('message', (m: Message) => {
        m.ack();
        messages.push(m);
        if (messages.length === 10) {
          clearTimeout(timeout);
          subscription.removeAllListeners('message');
          resolve();
        }
      });
    });

    assert.strictEqual(messages.length, 10);
  });

  it('should publish with flow control', async () => {
    const flowTopicName = resources.generateName('flow');
    const flowSubName = resources.generateName('flowsub');

    const [topic] = await pubsub.createTopic(flowTopicName);
    const [subscription] = await topic.createSubscription(flowSubName);

    const options = {
      flowControlOptions: {
        maxOutstandingMessages: 5,
        maxOutstandingBytes: 1024,
      },
    };

    const topicWithFlow = pubsub.topic(flowTopicName, options);
    const flow = topicWithFlow.flowControlled();

    for (let i = 0; i < 10; i++) {
      const wait = flow.publish({data: Buffer.from('flow control message')});
      if (wait) {
        await wait;
      }
    }

    const messageIds = await flow.all();
    assert.strictEqual(messageIds.length, 10);

    const messages: Message[] = [];
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for flow control messages')), 15000);
      subscription.on('message', (m: Message) => {
        m.ack();
        messages.push(m);
        if (messages.length === 10) {
          clearTimeout(timeout);
          subscription.removeAllListeners('message');
          resolve();
        }
      });
    });

    assert.strictEqual(messages.length, 10);
  });
});
