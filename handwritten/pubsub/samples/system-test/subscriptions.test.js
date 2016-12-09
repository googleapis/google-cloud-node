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

const pubsub = require(`@google-cloud/pubsub`)();
const uuid = require(`uuid`);
const path = require(`path`);
const run = require(`../../utils`).run;

const cwd = path.join(__dirname, `..`);
const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameOne = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const subscriptionNameTwo = `nodejs-docs-samples-test-sub-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicName = `projects/${projectId}/topics/${topicName}`;
const fullSubscriptionNameOne = `projects/${projectId}/subscriptions/${subscriptionNameOne}`;
const fullSubscriptionNameTwo = `projects/${projectId}/subscriptions/${subscriptionNameTwo}`;
const cmd = `node subscriptions.js`;

describe(`pubsub:subscriptions`, () => {
  before(() => pubsub.createTopic(topicName));

  after(() => {
    return pubsub.subscription(subscriptionNameOne).delete()
      .then(() => pubsub.subscription(subscriptionNameTwo).delete(), () => {})
      .then(() => pubsub.topic(topicName).delete(), () => {})
      .catch(() => {});
  });

  it(`should create a subscription`, () => {
    const output = run(`${cmd} create ${topicName} ${subscriptionNameOne}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameOne} created.`);
    return pubsub.subscription(subscriptionNameOne).exists()
      .then((results) => {
        const exists = results[0];
        assert.equal(exists, true);
      });
  });

  it(`should create a push subscription`, () => {
    const output = run(`${cmd} create-push ${topicName} ${subscriptionNameTwo}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameTwo} created.`);
    return pubsub.subscription(subscriptionNameTwo).exists()
      .then((results) => {
        const exists = results[0];
        assert.equal(exists, true);
      });
  });

  it(`should get metadata for a subscription`, () => {
    const output = run(`${cmd} get ${subscriptionNameOne}`, cwd);
    const expected = `Subscription: ${fullSubscriptionNameOne}` +
      `\nTopic: ${fullTopicName}` +
      `\nPush config: ` +
      `\nAck deadline: 10s`;
    assert.equal(output, expected);
  });

  it(`should list all subscriptions`, (done) => {
    // Listing is eventually consistent. Give the indexes time to update.
    setTimeout(() => {
      const output = run(`${cmd} list`, cwd);
      assert.equal(output.includes(`Subscriptions:`), true);
      assert.equal(output.includes(fullSubscriptionNameOne), true);
      assert.equal(output.includes(fullSubscriptionNameTwo), true);
      done();
    }, 5000);
  });

  it(`should list subscriptions for a topic`, () => {
    const output = run(`${cmd} list ${topicName}`, cwd);
    assert.equal(output.includes(`Subscriptions for ${topicName}:`), true);
    assert.equal(output.includes(fullSubscriptionNameOne), true);
    assert.equal(output.includes(fullSubscriptionNameTwo), true);
  });

  it(`should pull messages`, () => {
    const expected = `Hello, world!`;
    return pubsub.topic(topicName).publish(expected)
      .then((results) => {
        const messageIds = results[0];
        const output = run(`${cmd} pull ${subscriptionNameOne}`, cwd);
        const expectedOutput = `Received ${messageIds.length} messages.\n` +
          `* ${messageIds[0]} "${expected}" {}`;
        assert.equal(output, expectedOutput);
      });
  });

  it(`should pull ordered messages`, () => {
    const subscriptions = require('../subscriptions');
    const expected = `Hello, world!`;
    const publishedMessageIds = [];

    return pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '3' } }, { raw: true })
      .then((results) => {
        const messageIds = results[0];
        publishedMessageIds.push(messageIds[0]);
        return subscriptions.pullOrderedMessages(subscriptionNameOne);
      })
      .then(() => {
        assert.equal(console.log.callCount, 0);
        return pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '1' } }, { raw: true });
      })
      .then((results) => {
        const messageIds = results[0];
        publishedMessageIds.push(messageIds[0]);
        return subscriptions.pullOrderedMessages(subscriptionNameOne);
      })
      .then(() => {
        assert.equal(console.log.callCount, 1);
        assert.deepEqual(console.log.firstCall.args, [`* %d %j %j`, publishedMessageIds[1], expected, { counterId: '1' }]);
        return pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '1' } }, { raw: true });
      })
      .then((results) => {
        return pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '2' } }, { raw: true });
      })
      .then((results) => {
        const messageIds = results[0];
        publishedMessageIds.push(messageIds[0]);
        return subscriptions.pullOrderedMessages(subscriptionNameOne);
      })
      .then(() => {
        assert.equal(console.log.callCount, 3);
        assert.deepEqual(console.log.secondCall.args, [`* %d %j %j`, publishedMessageIds[2], expected, { counterId: '2' }]);
        assert.deepEqual(console.log.thirdCall.args, [`* %d %j %j`, publishedMessageIds[0], expected, { counterId: '3' }]);
      });
  });

  it(`should set the IAM policy for a subscription`, () => {
    run(`${cmd} set-policy ${subscriptionNameOne}`, cwd);
    return pubsub.subscription(subscriptionNameOne).iam.getPolicy()
      .then((results) => {
        const policy = results[0];
        assert.deepEqual(policy.bindings, [
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
  });

  it(`should get the IAM policy for a subscription`, () => {
    pubsub.subscription(subscriptionNameOne).iam.getPolicy()
      .then((results) => {
        const policy = results[0];
        const output = run(`${cmd} get-policy ${subscriptionNameOne}`, cwd);
        assert.equal(output, `Policy for subscription: ${JSON.stringify(policy.bindings)}.`);
      });
  });

  it(`should test permissions for a subscription`, () => {
    const output = run(`${cmd} test-permissions ${subscriptionNameOne}`, cwd);
    assert.equal(output.includes(`Tested permissions for subscription`), true);
  });

  it(`should delete a subscription`, () => {
    const output = run(`${cmd} delete ${subscriptionNameOne}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameOne} deleted.`);
    return pubsub.subscription(subscriptionNameOne).exists()
      .then((results) => {
        const exists = results[0];
        assert.equal(exists, false);
      });
  });
});
