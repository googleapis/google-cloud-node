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

const {PubSub} = require('@google-cloud/pubsub');
const {assert} = require('chai');
const execa = require('execa');
const uuid = require('uuid');

const exec = async cmd => (await execa.shell(cmd)).stdout;

describe('subscriptions', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});

  const topicNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
  const topicNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subscriptionNameOne = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
  const subscriptionNameTwo = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
  const subscriptionNameThree = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
  const subscriptionNameFour = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
  const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
  const fullSubscriptionNameOne = `projects/${projectId}/subscriptions/${subscriptionNameOne}`;
  const fullSubscriptionNameTwo = `projects/${projectId}/subscriptions/${subscriptionNameTwo}`;
  const fullSubscriptionNameFour = `projects/${projectId}/subscriptions/${subscriptionNameFour}`;
  const cmd = `node subscriptions.js`;

  before(async () => {
    await Promise.all([
      pubsub.createTopic(topicNameOne),
      pubsub.createTopic(topicNameTwo),
    ]);
  });

  after(async () => {
    const rm = obj => obj.delete().catch(console.error);
    await rm(pubsub.subscription(subscriptionNameOne));
    await rm(pubsub.subscription(subscriptionNameTwo));
    await rm(pubsub.subscription(subscriptionNameThree));
    await rm(pubsub.topic(topicNameOne));
    await rm(pubsub.topic(topicNameTwo));
  });

  it('should create a subscription', async () => {
    const output = await exec(
      `${cmd} create ${topicNameOne} ${subscriptionNameOne}`
    );
    assert.strictEqual(output, `Subscription ${subscriptionNameOne} created.`);
    const [subscriptions] = await pubsub.topic(topicNameOne).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubscriptionNameOne);
  });

  it('should create a push subscription', async () => {
    const output = await exec(
      `${cmd} create-push ${topicNameOne} ${subscriptionNameTwo}`
    );
    assert.strictEqual(output, `Subscription ${subscriptionNameTwo} created.`);
    const [subscriptions] = await pubsub.topic(topicNameOne).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubscriptionNameTwo));
  });

  it('should modify the config of an existing push subscription', async () => {
    const output = await exec(
      `${cmd} modify-config ${topicNameTwo} ${subscriptionNameTwo}`
    );
    assert.strictEqual(
      output,
      `Modified push config for subscription ${subscriptionNameTwo}.`
    );
  });

  it('should get metadata for a subscription', async () => {
    const output = await exec(`${cmd} get ${subscriptionNameOne}`);
    const expected =
      `Subscription: ${fullSubscriptionNameOne}` +
      `\nTopic: ${fullTopicNameOne}` +
      `\nPush config: ` +
      `\nAck deadline: 10s`;
    assert.strictEqual(output, expected);
  });

  it('should list all subscriptions', async () => {
    const output = await exec(`${cmd} list`);
    assert.match(output, /Subscriptions:/);
    assert.match(output, new RegExp(fullSubscriptionNameOne));
    assert.match(output, new RegExp(fullSubscriptionNameTwo));
  });

  it('should list subscriptions for a topic', async () => {
    const output = await exec(`${cmd} list ${topicNameOne}`);
    assert.match(output, new RegExp(`Subscriptions for ${topicNameOne}:`));
    assert.match(output, new RegExp(fullSubscriptionNameOne));
    assert.match(output, new RegExp(fullSubscriptionNameTwo));
  });

  it('should listen for messages', async () => {
    const messageIds = await pubsub
      .topic(topicNameOne)
      .publisher()
      .publish(Buffer.from(`Hello, world!`));
    const output = await exec(`${cmd} listen-messages ${subscriptionNameOne}`);
    assert.match(output, new RegExp(`Received message ${messageIds}:`));
  });

  it('should listen for messages synchronously', async () => {
    pubsub
      .topic(topicNameOne)
      .publisher()
      .publish(Buffer.from(`Hello, world!`));
    const output = await exec(
      `${cmd} sync-pull ${projectId} ${subscriptionNameOne}`
    );
    assert.match(output, /Done./);
  });

  it('should listen for ordered messages', async () => {
    const timeout = 5;
    const subscriptions = require('../subscriptions');
    const spy = {calls: []};
    const log = console.log;
    console.log = (...args) => {
      spy.calls.push(args);
      log(...args);
    };
    const expected = `Hello, world!`;
    const expectedBuffer = Buffer.from(expected);
    const publishedMessageIds = [];
    const publisherTwo = pubsub.topic(topicNameTwo).publisher();

    await pubsub
      .topic(topicNameTwo)
      .subscription(subscriptionNameThree)
      .get({autoCreate: true});
    let result = await publisherTwo.publish(expectedBuffer, {counterId: '3'});
    publishedMessageIds.push(result);
    await subscriptions.listenForOrderedMessages(
      subscriptionNameThree,
      timeout
    );
    assert.strictEqual(spy.calls.length, 0);

    result = await publisherTwo.publish(expectedBuffer, {counterId: '1'});
    publishedMessageIds.push(result);
    await subscriptions.listenForOrderedMessages(
      subscriptionNameThree,
      timeout
    );
    assert.strictEqual(spy.calls.length, 1);
    assert.deepStrictEqual(spy.calls[0], [
      `* %d %j %j`,
      publishedMessageIds[1],
      expected,
      {counterId: '1'},
    ]);

    result = await publisherTwo.publish(expectedBuffer, {counterId: '1'});
    result = await publisherTwo.publish(expectedBuffer, {counterId: '2'});
    publishedMessageIds.push(result);
    await subscriptions.listenForOrderedMessages(
      subscriptionNameThree,
      timeout
    );
    assert.strictEqual(spy.calls.length, 3);
    assert.deepStrictEqual(spy.calls[1], [
      `* %d %j %j`,
      publishedMessageIds[2],
      expected,
      {counterId: '2'},
    ]);
    assert.deepStrictEqual(spy.calls[2], [
      `* %d %j %j`,
      publishedMessageIds[0],
      expected,
      {counterId: '3'},
    ]);
    console.log = log;
  });

  it('should listen for error messages', async () => {
    const {stderr} = await execa.shell(
      `${cmd} listen-errors nonexistent-subscription`
    );
    assert.match(stderr, /Resource not found/);
  });

  it('should set the IAM policy for a subscription', async () => {
    await exec(`${cmd} set-policy ${subscriptionNameOne}`);
    const results = await pubsub
      .subscription(subscriptionNameOne)
      .iam.getPolicy();
    const policy = results[0];
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

  it('should get the IAM policy for a subscription', async () => {
    const results = await pubsub
      .subscription(subscriptionNameOne)
      .iam.getPolicy();
    const output = await exec(`${cmd} get-policy ${subscriptionNameOne}`);
    assert.strictEqual(
      output,
      `Policy for subscription: ${JSON.stringify(results[0].bindings)}.`
    );
  });

  it('should test permissions for a subscription', async () => {
    const output = await exec(`${cmd} test-permissions ${subscriptionNameOne}`);
    assert.match(output, /Tested permissions for subscription/);
  });

  it('should delete a subscription', async () => {
    const output = await exec(`${cmd} delete ${subscriptionNameOne}`);
    assert.strictEqual(output, `Subscription ${subscriptionNameOne} deleted.`);
    const [subscriptions] = await pubsub.getSubscriptions();
    assert.ok(subscriptions);
    assert(subscriptions.every(s => s.name !== fullSubscriptionNameOne));
  });

  it('should create a subscription with flow control', async () => {
    const output = await exec(
      `${cmd} create-flow ${topicNameTwo} ${subscriptionNameFour} -m 5 -b 1024`
    );
    assert.strictEqual(
      output,
      `Subscription ${fullSubscriptionNameFour} created with a maximum of 5 unprocessed messages.`
    );
    const [subscriptions] = await pubsub.topic(topicNameTwo).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubscriptionNameFour));
  });
});
