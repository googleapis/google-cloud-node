/**
 * Copyright 2019, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {PubSub} = require('@google-cloud/pubsub');
const {assert} = require('chai');
const cp = require('child_process');
const uuid = require('uuid');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('topics', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const topicNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
  const topicNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subscriptionNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subscriptionNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subscriptionNameThree = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subscriptionNameFour = `nodejs-docs-samples-test-${uuid.v4()}`;
  const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
  const expectedMessage = {data: 'Hello, world!'};
  const cmd = 'node topics.js';

  before(async () => {
    await pubsub.createTopic(topicNameTwo).catch(console.error);
  });

  after(async () => {
    const rm = obj => obj.delete().catch(console.error);
    await rm(pubsub.subscription(subscriptionNameOne));
    await rm(pubsub.topic(topicNameOne));
    await rm(pubsub.subscription(subscriptionNameTwo));
    await rm(pubsub.subscription(subscriptionNameThree));
    await rm(pubsub.subscription(subscriptionNameFour));
    await rm(pubsub.topic(topicNameTwo));
  });

  // Helper function to pull one message
  const _pullOneMessage = (subscriptionObj, timeout) => {
    timeout = timeout || 10000; // 10 second timeout by default

    let message;
    return new Promise((resolve, reject) => {
      // First message received; ack it + resolve promise
      const messageHandler = received => {
        received.ack();
        message = received;
        return resolve(messageHandler);
      };

      // Listen for new messages
      subscriptionObj.on(`message`, messageHandler);

      // Timeout appropriately
      setTimeout(() => {
        return reject(new Error(`_pullOneMessage timed out`));
      }, timeout);
    }).then(messageHandler => {
      subscriptionObj.removeListener('message', messageHandler);
      return Promise.resolve(message);
    });
  };

  it('should create a topic', async () => {
    const output = execSync(`${cmd} create ${topicNameOne}`);
    assert.include(output, `Topic ${topicNameOne} created.`);
    const [topics] = await pubsub.getTopics();
    assert(topics.some(t => t.name === fullTopicNameOne));
  });

  it('should list topics', async () => {
    const output = execSync(`${cmd} list`);
    assert.match(output, /Topics:/);
    assert.match(output, new RegExp(fullTopicNameOne));
  });

  it('should publish a simple message', async () => {
    const [subscription] = await pubsub
      .topic(topicNameOne)
      .subscription(subscriptionNameOne)
      .get({autoCreate: true});
    execSync(`${cmd} publish ${topicNameOne} "${expectedMessage.data}"`);
    const receivedMessage = await _pullOneMessage(subscription);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
  });

  it('should publish a JSON message', async () => {
    const [subscription] = await pubsub
      .topic(topicNameOne)
      .subscription(subscriptionNameOne)
      .get({autoCreate: true});
    execSync(`${cmd} publish ${topicNameOne} "${expectedMessage.data}"`);
    const receivedMessage = await _pullOneMessage(subscription);
    assert.deepStrictEqual(
      receivedMessage.data.toString(),
      expectedMessage.data
    );
  });

  it('should publish a message with custom attributes', async () => {
    const [subscription] = await pubsub
      .topic(topicNameOne)
      .subscription(subscriptionNameOne)
      .get({autoCreate: true});
    execSync(
      `${cmd} publish-attributes ${topicNameOne} "${expectedMessage.data}"`
    );
    const receivedMessage = await _pullOneMessage(subscription);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
    assert.deepStrictEqual(receivedMessage.attributes, {
      origin: 'nodejs-sample',
      username: 'gcp',
    });
  });

  it('should publish ordered messages', async () => {
    const topics = require(`../topics`);

    const [subscription] = await pubsub
      .topic(topicNameTwo)
      .subscription(subscriptionNameTwo)
      .get({autoCreate: true});

    let messageId = await topics.publishOrderedMessage(
      topicNameTwo,
      expectedMessage.data
    );
    let message = await _pullOneMessage(subscription);
    assert.strictEqual(message.id, messageId);
    assert.strictEqual(message.data.toString(), expectedMessage.data);
    assert.strictEqual(message.attributes.counterId, '1');

    messageId = await topics.publishOrderedMessage(
      topicNameTwo,
      expectedMessage.data
    );
    message = await _pullOneMessage(subscription);
    assert.strictEqual(message.id, messageId);
    assert.strictEqual(message.data.toString(), expectedMessage.data);
    assert.strictEqual(message.attributes.counterId, '2');
    await topics.publishOrderedMessage(topicNameTwo, expectedMessage.data);
  });

  it('should publish with specific batch settings', async () => {
    const waitTime = 5000;
    const [subscription] = await pubsub
      .topic(topicNameOne)
      .subscription(subscriptionNameThree)
      .get({autoCreate: true});
    const startTime = Date.now();
    execSync(
      `${cmd} publish-batch ${topicNameOne} "${expectedMessage.data}" -w ${waitTime}`
    );

    const {data, publishTime} = await _pullOneMessage(subscription);
    const actualWait = publishTime.getTime() - startTime;

    assert.strictEqual(data.toString(), expectedMessage.data);
    assert(actualWait >= waitTime);
  });

  it('should publish with retry settings', async () => {
    const [subscription] = await pubsub
      .topic(topicNameOne)
      .subscription(subscriptionNameFour)
      .get({autoCreate: true});
    execSync(
      `${cmd} publish-retry ${projectId} ${topicNameOne} "${expectedMessage.data}"`
    );
    const receivedMessage = await _pullOneMessage(subscription);
    assert.strictEqual(receivedMessage.data.toString(), expectedMessage.data);
  });

  it('should set the IAM policy for a topic', async () => {
    execSync(`${cmd} set-policy ${topicNameOne}`);
    const results = await pubsub.topic(topicNameOne).iam.getPolicy();
    const [policy] = results;
    assert.deepStrictEqual(policy.bindings, [
      {
        role: `roles/pubsub.editor`,
        members: [`group:cloud-logs@google.com`],
      },
      {
        role: `roles/pubsub.viewer`,
        members: [`allUsers`],
      },
    ]);
  });

  it('should get the IAM policy for a topic', async () => {
    const [policy] = await pubsub.topic(topicNameOne).iam.getPolicy();
    const output = execSync(`${cmd} get-policy ${topicNameOne}`);
    assert.include(
      output,
      `Policy for topic: ${JSON.stringify(policy.bindings)}.`
    );
  });

  it('should test permissions for a topic', async () => {
    const output = execSync(`${cmd} test-permissions ${topicNameOne}`);
    assert.match(output, /Tested permissions for topic/);
  });

  it('should delete a topic', async () => {
    const output = execSync(`${cmd} delete ${topicNameOne}`);
    assert.include(output, `Topic ${topicNameOne} deleted.`);
    const [topics] = await pubsub.getTopics();
    assert(topics.every(s => s.name !== fullTopicNameOne));
  });
});
