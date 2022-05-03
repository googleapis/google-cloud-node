// Copyright 2019-2021 Google LLC
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

import {Message, PubSub, Topic, Subscription} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, after} from 'mocha';
import {execSync, commandFor} from './common';
import {TestResources} from './testResources';

interface TSPair {
  tname: string;
  t: Topic;
  s: Subscription;
}

describe('topics', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const expectedMessage = {data: 'Hello, world!'};

  const resources = new TestResources('pubsub-topics');

  function topicName(testId: string): string {
    return resources.generateName(testId);
  }

  function subName(testId: string): string {
    return resources.generateName(testId);
  }

  function fullTopicName(name: string): string {
    return `projects/${projectId}/topics/${name}`;
  }

  async function createPair(testId: string): Promise<TSPair> {
    const tname = topicName(testId),
      sname = subName(testId);
    const [topic] = await pubsub.topic(tname).get({autoCreate: true});
    const [sub] = await topic.subscription(sname).get({autoCreate: true});

    return {t: topic, tname, s: sub};
  }

  async function cleanSubs() {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );
  }

  async function cleanTopics() {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map(x => x.delete?.())
    );
  }

  after(async () => {
    await cleanSubs();
    await cleanTopics();
  });

  // Helper function to pull one message.
  // Times out after 55 seconds.
  const _pullOneMessage = (subscriptionObj: Subscription): Promise<Message> => {
    return new Promise((resolve, reject) => {
      const timeoutHandler = setTimeout(() => {
        reject(new Error('_pullOneMessage timed out'));
      }, 55000);

      subscriptionObj.once('error', reject).once('message', message => {
        message.ack();
        clearTimeout(timeoutHandler);
        resolve(message);
      });
    });
  };

  it('should create a topic', async () => {
    const name = topicName('create');
    const output = execSync(`${commandFor('createTopic')} ${name}`);
    assert.include(output, `Topic ${name} created.`);
    const [topics] = await pubsub.getTopics();
    const exists = topics.some(t => t.name === fullTopicName(name));
    assert.ok(exists, 'Topic was created');
  });

  it('should list topics', async () => {
    const pair = await createPair('list');
    const output = execSync(`${commandFor('listAllTopics')}`);
    assert.include(output, 'Topics:');
    assert.include(output, pair.t.name);
  });

  it('should publish a simple message', async () => {
    const pair = await createPair('publish');
    execSync(
      `${commandFor('publishMessage')} ${pair.tname} "${expectedMessage.data}"`
    );
    const receivedMessage = await _pullOneMessage(pair.s);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
  });

  it('should publish with flow control', async () => {
    const pair = await createPair('pub_flow');
    const output = execSync(
      `${commandFor('publishWithFlowControl')} ${pair.tname}`
    );
    const receivedMessage = await _pullOneMessage(pair.s);
    assert.strictEqual(receivedMessage.data.toString(), 'test!');
    assert.include(output, 'Published 1000 with flow control settings');
  });

  it('should publish a JSON message', async () => {
    const pair = await createPair('pub_json');
    execSync(
      `${commandFor('publishMessage')} ${pair.tname} "${expectedMessage.data}"`
    );
    const receivedMessage = await _pullOneMessage(pair.s);
    assert.deepStrictEqual(
      receivedMessage.data.toString(),
      expectedMessage.data
    );
  });

  it('should publish a message with custom attributes', async () => {
    const pair = await createPair('pub_attrs');
    execSync(
      `${commandFor('publishMessageWithCustomAttributes')} ${pair.tname} "${
        expectedMessage.data
      }"`
    );
    const receivedMessage = await _pullOneMessage(pair.s);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
    assert.deepStrictEqual(receivedMessage.attributes, {
      origin: 'nodejs-sample',
      username: 'gcp',
    });
  });

  it('should publish ordered messages', async () => {
    const pair = await createPair('pub_ordered');
    execSync(
      `${commandFor('publishOrderedMessage')} ${pair.tname} "${
        expectedMessage.data
      }" my-key`
    );
    const message = await _pullOneMessage(pair.s);
    assert.strictEqual(message.orderingKey, 'my-key');
    assert.strictEqual(message.data.toString(), expectedMessage.data);
  });

  it('should publish with specific batch settings', async () => {
    const maxMessages = 10;
    const waitTime = 1000;
    const pair = await createPair('pub_batch');
    const startTime = Date.now();
    execSync(
      `${commandFor('publishBatchedMessages')} ${pair.tname} "${
        expectedMessage.data
      }" ${maxMessages} ${waitTime}`
    );

    const {data, publishTime} = await _pullOneMessage(pair.s);
    const actualWait = publishTime.getTime() - startTime;
    const acceptableLatency = 300;

    assert.strictEqual(data.toString(), expectedMessage.data);
    assert.isAtMost(
      actualWait,
      waitTime + acceptableLatency,
      'read is within acceptable latency'
    );
  });

  it('should resume publish', async () => {
    const pair = await createPair('pub_resume');
    execSync(
      `${commandFor('resumePublish')} ${pair.tname} "${
        expectedMessage.data
      }" my-key`
    );
    const message = await _pullOneMessage(pair.s);
    assert.strictEqual(message.orderingKey, 'my-key');
    assert.strictEqual(message.data.toString(), expectedMessage.data);
  });

  it('should publish with retry settings', async () => {
    const pair = await createPair('pub_retry');
    execSync(
      `${commandFor('publishWithRetrySettings')} ${projectId} ${pair.tname} "${
        expectedMessage.data
      }"`
    );
    const receivedMessage = await _pullOneMessage(pair.s);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
  });

  it('should set the IAM policy for a topic', async () => {
    const pair = await createPair('set_iam');

    execSync(`${commandFor('setTopicPolicy')} ${pair.tname}`);
    const results = await pair.t.iam.getPolicy();
    const [policy] = results;
    assert.deepStrictEqual(policy.bindings, [
      {
        role: 'roles/pubsub.editor',
        members: ['group:cloud-logs@google.com'],
        condition: null,
      },
      {
        role: 'roles/pubsub.viewer',
        members: ['allUsers'],
        condition: null,
      },
    ]);
  });

  it('should get the IAM policy for a topic', async () => {
    const pair = await createPair('get_iam');
    const [policy] = await pair.t.iam.getPolicy();
    const output = execSync(`${commandFor('getTopicPolicy')} ${pair.tname}`);
    assert.include(
      output,
      `Policy for topic: ${JSON.stringify(policy.bindings)}.`
    );
  });

  it('should test permissions for a topic', async () => {
    const pair = await createPair('test_perms');
    const output = execSync(
      `${commandFor('testTopicPermissions')} ${pair.tname}`
    );
    assert.match(output, /Tested permissions for topic/);
  });

  it('should delete a topic', async () => {
    const name = topicName('delete');
    await pubsub.topic(name).get({autoCreate: true});
    const output = execSync(`${commandFor('deleteTopic')} ${name}`);
    assert.include(output, `Topic ${name} deleted.`);
    const [exists] = await pubsub.topic(name).exists();
    assert.strictEqual(exists, false);
  });
});
