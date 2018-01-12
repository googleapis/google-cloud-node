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
const subscriptionNameOne = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameTwo = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameThree = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameFour = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
const fullSubscriptionNameOne = `projects/${projectId}/subscriptions/${subscriptionNameOne}`;
const fullSubscriptionNameTwo = `projects/${projectId}/subscriptions/${subscriptionNameTwo}`;
const fullSubscriptionNameFour = `projects/${projectId}/subscriptions/${subscriptionNameFour}`;
const cmd = `node subscriptions.js`;

test.before(tools.checkCredentials);
test.before(async () => {
  await Promise.all([
    pubsub.createTopic(topicNameOne),
    pubsub.createTopic(topicNameTwo),
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

test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.serial(`should create a subscription`, async t => {
  t.plan(1);
  const output = await tools.runAsync(
    `${cmd} create ${topicNameOne} ${subscriptionNameOne}`,
    cwd
  );
  t.is(output, `Subscription ${fullSubscriptionNameOne} created.`);
  await tools
    .tryTest(async assert => {
      const [subscriptions] = await pubsub
        .topic(topicNameOne)
        .getSubscriptions();
      assert.equal(subscriptions[0].name, fullSubscriptionNameOne);
    })
    .start();
});

test.serial(`should create a push subscription`, async t => {
  const output = await tools.runAsync(
    `${cmd} create-push ${topicNameOne} ${subscriptionNameTwo}`,
    cwd
  );
  t.is(output, `Subscription ${fullSubscriptionNameTwo} created.`);
  await tools
    .tryTest(async assert => {
      const [subscriptions] = await pubsub
        .topic(topicNameOne)
        .getSubscriptions();
      assert(subscriptions.some(s => s.name === fullSubscriptionNameTwo));
    })
    .start();
});

test.serial(
  `should modify the config of an existing push subscription`,
  async t => {
    t.plan(1);
    const output = await tools.runAsync(
      `${cmd} modify-config ${topicNameTwo} ${subscriptionNameTwo}`,
      cwd
    );
    t.is(
      output,
      `Modified push config for subscription ${subscriptionNameTwo}.`
    );
  }
);

test.serial(`should get metadata for a subscription`, async t => {
  const output = await tools.runAsync(`${cmd} get ${subscriptionNameOne}`, cwd);
  const expected =
    `Subscription: ${fullSubscriptionNameOne}` +
    `\nTopic: ${fullTopicNameOne}` +
    `\nPush config: ` +
    `\nAck deadline: 10s`;
  t.is(output, expected);
});

test.serial(`should list all subscriptions`, async t => {
  t.plan(0);
  await tools
    .tryTest(async assert => {
      const output = await tools.runAsync(`${cmd} list`, cwd);
      assert(output.includes(`Subscriptions:`));
      assert(output.includes(fullSubscriptionNameOne));
      assert(output.includes(fullSubscriptionNameTwo));
    })
    .start();
});

test.serial(`should list subscriptions for a topic`, async t => {
  t.plan(0);
  await tools
    .tryTest(async assert => {
      const output = await tools.runAsync(`${cmd} list ${topicNameOne}`, cwd);
      assert(output.includes(`Subscriptions for ${topicNameOne}:`));
      assert(output.includes(fullSubscriptionNameOne));
      assert(output.includes(fullSubscriptionNameTwo));
    })
    .start();
});

test.serial(`should listen for messages`, async t => {
  const messageIds = await pubsub
    .topic(topicNameOne)
    .publisher()
    .publish(Buffer.from(`Hello, world!`));
  const output = await tools.runAsync(
    `${cmd} listen-messages ${subscriptionNameOne}`,
    cwd
  );
  t.true(output.includes(`Received message ${messageIds}:`));
});

test.serial(`should listen for ordered messages`, async t => {
  const timeout = 5;
  const subscriptions = require('../subscriptions');
  const expected = `Hello, world!`;
  const expectedBuffer = Buffer.from(expected);
  const publishedMessageIds = [];
  const publisherTwo = pubsub.topic(topicNameTwo).publisher();

  await pubsub.topic(topicNameTwo).createSubscription(subscriptionNameThree);
  let [result] = await publisherTwo.publish(expectedBuffer, {counterId: '3'});
  publishedMessageIds.push(result);
  await subscriptions.listenForOrderedMessages(subscriptionNameThree, timeout);
  t.is(console.log.callCount, 0);

  result = await publisherTwo.publish(expectedBuffer, {counterId: '1'});
  publishedMessageIds.push(result);
  await subscriptions.listenForOrderedMessages(subscriptionNameThree, timeout);
  t.is(console.log.callCount, 1);
  t.deepEqual(console.log.firstCall.args, [
    `* %d %j %j`,
    publishedMessageIds[1],
    expected,
    {counterId: '1'},
  ]);

  [result] = await publisherTwo.publish(expectedBuffer, {counterId: '1'});
  [result] = await publisherTwo.publish(expectedBuffer, {counterId: '2'});
  publishedMessageIds.push(result);
  await tools.tryTest(async assert => {
    await subscriptions.listenForOrderedMessages(
      subscriptionNameThree,
      timeout
    );
    assert.equal(console.log.callCount, 3);
    assert.deepEqual(console.log.secondCall.args, [
      `* %d %j %j`,
      publishedMessageIds[2],
      expected,
      {counterId: '2'},
    ]);
    assert.deepEqual(console.log.thirdCall.args, [
      `* %d %j %j`,
      publishedMessageIds[0],
      expected,
      {counterId: '3'},
    ]);
  });
});

test.serial(`should listen for error messages`, async t => {
  const output = await tools.runAsyncWithIO(
    `${cmd} listen-errors nonexistent-subscription -t 3`,
    cwd
  );
  t.true(output.stderr.includes(`Resource not found`));
});

test.serial(`should set the IAM policy for a subscription`, async t => {
  await tools.runAsync(`${cmd} set-policy ${subscriptionNameOne}`, cwd);
  const results = await pubsub
    .subscription(subscriptionNameOne)
    .iam.getPolicy();
  const policy = results[0];
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

test.serial(`should get the IAM policy for a subscription`, async t => {
  const results = await pubsub
    .subscription(subscriptionNameOne)
    .iam.getPolicy();
  const output = await tools.runAsync(
    `${cmd} get-policy ${subscriptionNameOne}`,
    cwd
  );
  t.is(
    output,
    `Policy for subscription: ${JSON.stringify(results[0].bindings)}.`
  );
});

test.serial(`should test permissions for a subscription`, async t => {
  const output = await tools.runAsync(
    `${cmd} test-permissions ${subscriptionNameOne}`,
    cwd
  );
  t.true(output.includes(`Tested permissions for subscription`));
});

test.serial(`should delete a subscription`, async t => {
  t.plan(1);
  const output = await tools.runAsync(
    `${cmd} delete ${subscriptionNameOne}`,
    cwd
  );
  t.is(output, `Subscription ${subscriptionNameOne} deleted.`);
  await tools
    .tryTest(async assert => {
      const [subscriptions] = await pubsub.getSubscriptions();
      assert.ok(subscriptions);
      assert(subscriptions.every(s => s.name !== fullSubscriptionNameOne));
    })
    .start();
});

test.serial(`should create a subscription with flow control`, async t => {
  t.plan(1);
  const output = await tools.runAsync(
    `${cmd} create-flow ${topicNameTwo} ${subscriptionNameFour} -m 5 -b 1024`,
    cwd
  );
  t.is(
    output,
    `Subscription ${fullSubscriptionNameFour} created with a maximum of 5 unprocessed messages.`
  );
  await tools
    .tryTest(async assert => {
      const [subscriptions] = await pubsub
        .topic(topicNameTwo)
        .getSubscriptions();
      assert(subscriptions.some(s => s.name === fullSubscriptionNameFour));
    })
    .start();
});
