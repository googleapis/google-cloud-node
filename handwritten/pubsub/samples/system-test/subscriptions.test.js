/**
 * Copyright 2016, Google, Inc.
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

require(`../../system-test/_setup`);

const pubsub = require(`@google-cloud/pubsub`)();
const uuid = require(`uuid`);
const path = require(`path`);

const cwd = path.join(__dirname, `..`);
const topicNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
const topicNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameOne = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameTwo = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameThree = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
const fullSubscriptionNameOne = `projects/${projectId}/subscriptions/${subscriptionNameOne}`;
const fullSubscriptionNameTwo = `projects/${projectId}/subscriptions/${subscriptionNameTwo}`;
const cmd = `node subscriptions.js`;

test.before(async () => {
  await Promise.all([
    pubsub.createTopic(topicNameOne),
    pubsub.createTopic(topicNameTwo)
  ]);
});

test.after.always(async () => {
  try {
    await pubsub.subscription(subscriptionNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.subscription(subscriptionNameTwo).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.subscription(subscriptionNameThree).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameTwo).delete();
  } catch (err) {} // ignore error
});

test.beforeEach(stubConsole);
test.afterEach.always(restoreConsole);

test.serial(`should create a subscription`, async (t) => {
  const output = await runAsync(`${cmd} create ${topicNameOne} ${subscriptionNameOne}`, cwd);
  t.is(output, `Subscription ${fullSubscriptionNameOne} created.`);
  const results = await pubsub.subscription(subscriptionNameOne).exists();
  t.true(results[0]);
});

test.serial(`should create a push subscription`, async (t) => {
  const output = await runAsync(`${cmd} create-push ${topicNameOne} ${subscriptionNameTwo}`, cwd);
  t.is(output, `Subscription ${fullSubscriptionNameTwo} created.`);
  const results = await pubsub.subscription(subscriptionNameTwo).exists();
  t.true(results[0]);
});

test.serial(`should get metadata for a subscription`, async (t) => {
  const output = await runAsync(`${cmd} get ${subscriptionNameOne}`, cwd);
  const expected = `Subscription: ${fullSubscriptionNameOne}` +
    `\nTopic: ${fullTopicNameOne}` +
    `\nPush config: ` +
    `\nAck deadline: 10s`;
  t.is(output, expected);
});

test.serial(`should list all subscriptions`, async (t) => {
  await tryTest(async () => {
    const output = await runAsync(`${cmd} list`, cwd);
    t.true(output.includes(`Subscriptions:`));
    t.true(output.includes(fullSubscriptionNameOne));
    t.true(output.includes(fullSubscriptionNameTwo));
  }).start();
});

test.serial(`should list subscriptions for a topic`, async (t) => {
  const output = await runAsync(`${cmd} list ${topicNameOne}`, cwd);
  t.true(output.includes(`Subscriptions for ${topicNameOne}:`));
  t.true(output.includes(fullSubscriptionNameOne));
  t.true(output.includes(fullSubscriptionNameTwo));
});

test.serial(`should pull messages`, async (t) => {
  const expected = `Hello, world!`;
  const results = await pubsub.topic(topicNameOne).publish(expected);
  const messageIds = results[0];
  const expectedOutput = `Received ${messageIds.length} messages.\n* ${messageIds[0]} "${expected}" {}`;
  const output = await runAsync(`${cmd} pull ${subscriptionNameOne}`, cwd);
  t.is(output, expectedOutput);
});

test.serial(`should pull ordered messages`, async (t) => {
  const subscriptions = require('../subscriptions');
  const expected = `Hello, world!`;
  const publishedMessageIds = [];
  await pubsub.topic(topicNameTwo).subscribe(subscriptionNameThree);
  let results = await pubsub.topic(topicNameTwo).publish({ data: expected, attributes: { counterId: '3' } }, { raw: true });
  publishedMessageIds.push(results[0][0]);
  await subscriptions.pullOrderedMessages(subscriptionNameThree);
  t.is(console.log.callCount, 0);
  results = await pubsub.topic(topicNameTwo).publish({ data: expected, attributes: { counterId: '1' } }, { raw: true });
  publishedMessageIds.push(results[0][0]);
  await subscriptions.pullOrderedMessages(subscriptionNameThree);
  t.is(console.log.callCount, 1);
  t.deepEqual(console.log.firstCall.args, [`* %d %j %j`, publishedMessageIds[1], expected, { counterId: '1' }]);
  results = await pubsub.topic(topicNameTwo).publish({ data: expected, attributes: { counterId: '1' } }, { raw: true });
  results = await pubsub.topic(topicNameTwo).publish({ data: expected, attributes: { counterId: '2' } }, { raw: true });
  publishedMessageIds.push(results[0][0]);
  await tryTest(async () => {
    await subscriptions.pullOrderedMessages(subscriptionNameThree);
    t.is(console.log.callCount, 3);
    t.deepEqual(console.log.secondCall.args, [`* %d %j %j`, publishedMessageIds[2], expected, { counterId: '2' }]);
    t.deepEqual(console.log.thirdCall.args, [`* %d %j %j`, publishedMessageIds[0], expected, { counterId: '3' }]);
  });
});

test.serial(`should set the IAM policy for a subscription`, async (t) => {
  await runAsync(`${cmd} set-policy ${subscriptionNameOne}`, cwd);
  const results = await pubsub.subscription(subscriptionNameOne).iam.getPolicy();
  const policy = results[0];
  t.deepEqual(policy.bindings, [
    {
      role: `roles/pubsub.editor`,
      members: [`group:cloud-logs@google.com`]
    },
    {
      role: `roles/pubsub.viewer`,
      members: [`allUsers`]
    }
  ]);
});

test.serial(`should get the IAM policy for a subscription`, async (t) => {
  const results = await pubsub.subscription(subscriptionNameOne).iam.getPolicy();
  const output = await runAsync(`${cmd} get-policy ${subscriptionNameOne}`, cwd);
  t.is(output, `Policy for subscription: ${JSON.stringify(results[0].bindings)}.`);
});

test.serial(`should test permissions for a subscription`, async (t) => {
  const output = await runAsync(`${cmd} test-permissions ${subscriptionNameOne}`, cwd);
  t.true(output.includes(`Tested permissions for subscription`));
});

test.serial(`should delete a subscription`, async (t) => {
  const output = await runAsync(`${cmd} delete ${subscriptionNameOne}`, cwd);
  t.is(output, `Subscription ${fullSubscriptionNameOne} deleted.`);
  const results = await pubsub.subscription(subscriptionNameOne).exists();
  t.false(results[0], false);
});
