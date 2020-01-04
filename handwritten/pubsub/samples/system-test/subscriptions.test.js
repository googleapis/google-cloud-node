// Copyright 2019 Google LLC
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

'use strict';

const {PubSub} = require('@google-cloud/pubsub');
const assertRejects = require('assert').rejects;
const {assert} = require('chai');
const {describe, it, before, after} = require('mocha');
const cp = require('child_process');
const uuid = require('uuid');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const execPromise = cmd =>
  new Promise((resolve, reject) => {
    cp.exec(cmd, {encoding: 'utf-8'}, (err, stdout, stderr) => {
      if (err) {
        err.stderr = stderr;
        reject(err);
        return;
      }
      resolve(stdout);
    });
  });

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

  before(() => {
    return Promise.all([
      pubsub.createTopic(topicNameOne),
      pubsub.createTopic(topicNameTwo),
    ]);
  });

  after(() => {
    return Promise.all([
      pubsub.subscription(subscriptionNameOne).delete(),
      pubsub.subscription(subscriptionNameTwo).delete(),
      pubsub.subscription(subscriptionNameThree).delete(),
      pubsub.subscription(subscriptionNameFour).delete(),
      pubsub.topic(topicNameOne).delete(),
      pubsub.topic(topicNameTwo).delete(),
    ]).catch(console.error);
  });

  it('should create a subscription', async () => {
    const output = execSync(
      `${cmd} create ${topicNameOne} ${subscriptionNameOne}`
    );
    assert.include(output, `Subscription ${subscriptionNameOne} created.`);
    const [subscriptions] = await pubsub.topic(topicNameOne).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubscriptionNameOne);
  });

  it('should create a push subscription', async () => {
    const output = execSync(
      `${cmd} create-push ${topicNameOne} ${subscriptionNameTwo}`
    );
    assert.include(output, `Subscription ${subscriptionNameTwo} created.`);
    const [subscriptions] = await pubsub.topic(topicNameOne).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubscriptionNameTwo));
  });

  it('should modify the config of an existing push subscription', async () => {
    const output = execSync(
      `${cmd} modify-config ${topicNameTwo} ${subscriptionNameTwo}`
    );
    assert.include(
      output,
      `Modified push config for subscription ${subscriptionNameTwo}.`
    );
  });

  it('should get metadata for a subscription', async () => {
    const output = execSync(`${cmd} get ${subscriptionNameOne}`);
    const expected =
      `Subscription: ${fullSubscriptionNameOne}` +
      `\nTopic: ${fullTopicNameOne}` +
      `\nPush config: ` +
      `\nAck deadline: 10s`;
    assert.include(output, expected);
  });

  it('should list all subscriptions', async () => {
    const output = execSync(`${cmd} list`);
    assert.match(output, /Subscriptions:/);
    assert.match(output, new RegExp(fullSubscriptionNameOne));
    assert.match(output, new RegExp(fullSubscriptionNameTwo));
  });

  it('should list subscriptions for a topic', async () => {
    const output = execSync(`${cmd} list ${topicNameOne}`);
    assert.match(output, new RegExp(`Subscriptions for ${topicNameOne}:`));
    assert.match(output, new RegExp(fullSubscriptionNameOne));
    assert.match(output, new RegExp(fullSubscriptionNameTwo));
  });

  it('should listen for messages', async () => {
    const messageIds = await pubsub
      .topic(topicNameOne)
      .publish(Buffer.from(`Hello, world!`));
    const output = execSync(`${cmd} listen-messages ${subscriptionNameOne}`);
    assert.match(output, new RegExp(`Received message ${messageIds}:`));
  });

  it('should listen for messages synchronously', async () => {
    pubsub.topic(topicNameOne).publish(Buffer.from(`Hello, world!`));
    const output = await execPromise(
      `${cmd} sync-pull ${projectId} ${subscriptionNameOne}`
    );
    assert.match(output, /Done./);
  });

  it('should listen to messages with flow control', async () => {
    const topicTwo = pubsub.topic(topicNameTwo);
    await topicTwo.subscription(subscriptionNameFour).get({autoCreate: true});
    await topicTwo.publish(Buffer.from(`Hello, world!`));

    const output = execSync(
      `${cmd} listen-flow-control ${subscriptionNameFour} -m 5`
    );
    assert.include(
      output,
      `ready to receive messages at a controlled volume of 5 messages.`
    );
    const [subscriptions] = await pubsub.topic(topicNameTwo).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubscriptionNameFour));
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
    const topicTwo = pubsub.topic(topicNameTwo);

    await topicTwo.subscription(subscriptionNameThree).get({autoCreate: true});

    let result = await topicTwo.publish(expectedBuffer, {counterId: '3'});
    publishedMessageIds.push(result);
    await subscriptions.listenForOrderedMessages(
      subscriptionNameThree,
      timeout
    );
    assert.strictEqual(spy.calls.length, 0);

    result = await topicTwo.publish(expectedBuffer, {counterId: '1'});
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

    result = await topicTwo.publish(expectedBuffer, {counterId: '1'});
    result = await topicTwo.publish(expectedBuffer, {counterId: '2'});
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
    console.log = log; // eslint-disable-line require-atomic-updates
  });

  it('should listen for error messages', async () => {
    assertRejects(
      () => execPromise(`${cmd} listen-errors nonexistent-subscription`),
      /Resource not found/
    );
  });

  it('should set the IAM policy for a subscription', async () => {
    execSync(`${cmd} set-policy ${subscriptionNameOne}`);
    const results = await pubsub
      .subscription(subscriptionNameOne)
      .iam.getPolicy();
    const policy = results[0];
    assert.deepStrictEqual(policy.bindings, [
      {
        role: `roles/pubsub.editor`,
        members: [`group:cloud-logs@google.com`],
        condition: null,
      },
      {
        role: `roles/pubsub.viewer`,
        members: [`allUsers`],
        condition: null,
      },
    ]);
  });

  it('should get the IAM policy for a subscription', async () => {
    const results = await pubsub
      .subscription(subscriptionNameOne)
      .iam.getPolicy();
    const output = execSync(`${cmd} get-policy ${subscriptionNameOne}`);
    assert.include(
      output,
      `Policy for subscription: ${JSON.stringify(results[0].bindings)}.`
    );
  });

  it('should test permissions for a subscription', async () => {
    const output = execSync(`${cmd} test-permissions ${subscriptionNameOne}`);
    assert.match(output, /Tested permissions for subscription/);
  });

  it('should delete a subscription', async () => {
    const output = execSync(`${cmd} delete ${subscriptionNameOne}`);
    assert.include(output, `Subscription ${subscriptionNameOne} deleted.`);
    const [subscriptions] = await pubsub.getSubscriptions();
    assert.ok(subscriptions);
    assert(subscriptions.every(s => s.name !== fullSubscriptionNameOne));
  });
});
