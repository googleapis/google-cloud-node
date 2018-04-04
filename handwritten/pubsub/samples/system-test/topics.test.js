/**
 * Copyright 2017, Google, Inc.
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

const path = require(`path`);
const pubsub = require(`@google-cloud/pubsub`)();
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const cwd = path.join(__dirname, `..`);
const topicNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
const topicNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameThree = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
const expectedMessage = {data: `Hello, world!`};
const cmd = `node topics.js`;

test.before(tools.checkCredentials);
test.before(async () => {
  try {
    await pubsub.createTopic(topicNameTwo);
  } catch (err) {} // ignore error
});

test.after.always(async () => {
  try {
    await pubsub.subscription(subscriptionNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.subscription(subscriptionNameTwo).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.subscription(subscriptionNameThree).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameTwo).delete();
  } catch (err) {} // ignore error
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

test.serial(`should create a topic`, async t => {
  t.plan(1);
  const output = await tools.runAsync(`${cmd} create ${topicNameOne}`, cwd);
  t.is(output, `Topic ${fullTopicNameOne} created.`);
  await tools
    .tryTest(async assert => {
      const [topics] = await pubsub.getTopics();
      assert(topics.some(s => s.name === fullTopicNameOne));
    })
    .start();
});

test.serial(`should list topics`, async t => {
  await tools
    .tryTest(async () => {
      const output = await tools.runAsync(`${cmd} list`, cwd);
      t.true(output.includes(`Topics:`));
      t.true(output.includes(fullTopicNameOne));
    })
    .start();
});

test.serial(`should publish a simple message`, async t => {
  t.plan(1);
  const [subscription] = await pubsub
    .topic(topicNameOne)
    .createSubscription(subscriptionNameOne);
  await tools.runAsync(
    `${cmd} publish ${topicNameOne} "${expectedMessage.data}"`,
    cwd
  );
  const receivedMessage = await _pullOneMessage(subscription);
  t.is(receivedMessage.data.toString(), expectedMessage.data);
});

test.serial(`should publish a JSON message`, async t => {
  const [subscription] = await pubsub
    .topic(topicNameOne)
    .createSubscription(subscriptionNameOne);
  await tools.runAsync(
    `${cmd} publish ${topicNameOne} '${JSON.stringify(expectedMessage)}'`,
    cwd
  );
  const receivedMessage = await _pullOneMessage(subscription);
  t.deepEqual(JSON.parse(receivedMessage.data.toString()), expectedMessage);
});

test.serial(`should publish a message with custom attributes`, async t => {
  t.plan(2);
  const [subscription] = await pubsub
    .topic(topicNameOne)
    .createSubscription(subscriptionNameOne);
  await tools.runAsync(
    `${cmd} publish-attributes ${topicNameOne} "${expectedMessage.data}"`,
    cwd
  );
  const receivedMessage = await _pullOneMessage(subscription);
  t.is(receivedMessage.data.toString(), expectedMessage.data);
  t.deepEqual(receivedMessage.attributes, {
    origin: 'nodejs-sample',
    username: 'gcp',
  });
});

test.serial(`should publish ordered messages`, async t => {
  const topics = require(`../topics`);

  const [subscription] = await pubsub
    .topic(topicNameTwo)
    .createSubscription(subscriptionNameTwo);

  let messageId = await topics.publishOrderedMessage(
    topicNameTwo,
    expectedMessage.data
  );
  let message = await _pullOneMessage(subscription);
  t.is(message.id, messageId);
  t.is(message.data.toString(), expectedMessage.data);
  t.is(message.attributes.counterId, '1');

  messageId = await topics.publishOrderedMessage(
    topicNameTwo,
    expectedMessage.data
  );
  message = await _pullOneMessage(subscription);
  t.is(message.id, messageId);
  t.is(message.data.toString(), expectedMessage.data);
  t.is(message.attributes.counterId, '2');
  await topics.publishOrderedMessage(topicNameTwo, expectedMessage.data);
});

test.serial(`should publish with specific batch settings`, async t => {
  t.plan(2);
  const expectedWait = 1000;
  const [subscription] = await pubsub
    .topic(topicNameOne)
    .createSubscription(subscriptionNameThree);
  const startTime = Date.now();
  await tools.runAsync(
    `${cmd} publish-batch ${topicNameOne} "${
      expectedMessage.data
    }" -w ${expectedWait}`,
    cwd
  );
  const receivedMessage = await _pullOneMessage(subscription);
  const publishTime = Date.parse(receivedMessage.publishTime);
  t.is(receivedMessage.data.toString(), expectedMessage.data);
  t.true(publishTime - startTime > expectedWait);
});

test.serial(`should set the IAM policy for a topic`, async t => {
  await tools.runAsync(`${cmd} set-policy ${topicNameOne}`, cwd);
  const results = await pubsub.topic(topicNameOne).iam.getPolicy();
  const [policy] = results;
  t.deepEqual(policy.bindings, [
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

test.serial(`should get the IAM policy for a topic`, async t => {
  const [policy] = await pubsub.topic(topicNameOne).iam.getPolicy();
  const output = await tools.runAsync(`${cmd} get-policy ${topicNameOne}`, cwd);
  t.is(output, `Policy for topic: ${JSON.stringify(policy.bindings)}.`);
});

test.serial(`should test permissions for a topic`, async t => {
  const output = await tools.runAsync(
    `${cmd} test-permissions ${topicNameOne}`,
    cwd
  );
  t.true(output.includes(`Tested permissions for topic`));
});

test.serial(`should delete a topic`, async t => {
  t.plan(1);
  const output = await tools.runAsync(`${cmd} delete ${topicNameOne}`, cwd);
  t.is(output, `Topic ${topicNameOne} deleted.`);
  await tools
    .tryTest(async assert => {
      const [topics] = await pubsub.getTopics();
      assert(topics.every(s => s.name !== fullTopicNameOne));
    })
    .start();
});
