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

import {Message, PubSub} from '../src';
import * as assert from 'assert';
import {describe, it, after} from 'mocha';
import {TestResources} from './testResources';

describe('Combined Samples Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('pubsub_combined');

  function topicName(testId: string): string {
    return resources.generateName(testId);
  }

  function subName(testId: string): string {
    return resources.generateName(testId);
  }

  async function cleanSubs() {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map((x: any) => x.delete?.())
    );
  }

  async function cleanTopics() {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map((x: any) => x.delete?.())
    );
  }

  after(async () => {
    await cleanSubs();
    await cleanTopics();
  });

  it('should create a topic', async () => {
    const name = topicName('create');
    
    // --- From sample (createTopic.js) ---
    await pubsub.createTopic(name);
    console.log(`Topic ${name} created.`);
    
    // --- From test (topics.test.ts) ---
    const [topics] = await pubsub.getTopics();
    const exists = topics.some((t: any) => t.name.endsWith(name));
    assert.ok(exists, 'Topic was created');
  });

  it('should publish a message', async () => {
    const tname = topicName('publish');
    const sname = subName('publish');
    
    const [topic] = await pubsub.topic(tname).get({autoCreate: true});
    const [subscription] = await topic.subscription(sname).get({autoCreate: true});
    
    // --- From sample (publishMessage.js) ---
    const data = 'Hello, world!';
    const dataBuffer = Buffer.from(data);
    const messageId = await topic.publishMessage({data: dataBuffer});
    console.log(`Message ${messageId} published.`);
    
    // --- From test (topics.test.ts) ---
    const message = await new Promise<Message>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout')), 10000);
      subscription.once('message', (m: Message) => {
        clearTimeout(timeout);
        m.ack();
        resolve(m);
      });
    });
    
    assert.strictEqual(message.data.toString(), data);
  });

  it('should delete a topic', async () => {
    const name = topicName('delete');
    await pubsub.topic(name).get({autoCreate: true});
    
    // --- From sample (deleteTopic.js) ---
    await pubsub.topic(name).delete();
    console.log(`Topic ${name} deleted.`);
    
    // --- From test (topics.test.ts) ---
    const [exists] = await pubsub.topic(name).exists();
    assert.strictEqual(exists, false);
  });
});
