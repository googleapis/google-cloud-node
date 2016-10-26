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

const async = require(`async`);
const pubsub = require(`@google-cloud/pubsub`)();
const uuid = require(`node-uuid`);
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
  before((done) => {
    pubsub.createTopic(topicName, (err) => {
      assert.ifError(err);
      done();
    });
  });

  after((done) => {
    pubsub.subscription(subscriptionNameOne).delete(() => {
      // Ignore any error
      pubsub.subscription(subscriptionNameTwo).delete(() => {
        // Ignore any error
        pubsub.topic(topicName).delete(() => {
          // Ignore any error
          done();
        });
      });
    });
  });

  it(`should create a subscription`, (done) => {
    const output = run(`${cmd} create ${topicName} ${subscriptionNameOne}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameOne} created.`);
    pubsub.subscription(subscriptionNameOne).exists((err, exists) => {
      assert.ifError(err);
      assert.equal(exists, true);
      done();
    });
  });

  it(`should create a push subscription`, (done) => {
    const output = run(`${cmd} create-push ${topicName} ${subscriptionNameTwo}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameTwo} created.`);
    pubsub.subscription(subscriptionNameTwo).exists((err, exists) => {
      assert.ifError(err);
      assert.equal(exists, true);
      done();
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
      assert.notEqual(output.indexOf(`Subscriptions:`), -1);
      assert.notEqual(output.indexOf(fullSubscriptionNameOne), -1);
      assert.notEqual(output.indexOf(fullSubscriptionNameTwo), -1);
      done();
    }, 5000);
  });

  it(`should list subscriptions for a topic`, (done) => {
    // Listing is eventually consistent. Give the indexes time to update.
    const output = run(`${cmd} list ${topicName}`, cwd);
    assert.notEqual(output.indexOf(`Subscriptions for ${topicName}:`), -1);
    assert.notEqual(output.indexOf(fullSubscriptionNameOne), -1);
    assert.notEqual(output.indexOf(fullSubscriptionNameTwo), -1);
    done();
  });

  it(`should pull messages`, (done) => {
    const expected = `Hello, world!`;
    pubsub.topic(topicName).publish({ data: expected }, (err, messageIds) => {
      assert.ifError(err);
      setTimeout(() => {
        const output = run(`${cmd} pull ${subscriptionNameOne}`, cwd);
        const expectedOutput = `Received ${messageIds.length} messages.\n` +
          `* ${messageIds[0]} "${expected}" {}`;
        assert.equal(output, expectedOutput);
        done();
      }, 2000);
    });
  });

  it(`should pull ordered messages`, (done) => {
    const subscriptions = require('../subscriptions');
    const expected = `Hello, world!`;
    const publishedMessageIds = [];

    async.waterfall([
      (cb) => {
        pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '3' } }, cb);
      },
      (messageIds, apiResponse, cb) => {
        publishedMessageIds.push(messageIds[0]);
        setTimeout(() => subscriptions.pullOrderedMessages(subscriptionNameOne, cb), 2000);
      },
      (cb) => {
        assert.equal(console.log.callCount, 0);
        pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '1' } }, cb);
      },
      (messageIds, apiResponse, cb) => {
        publishedMessageIds.push(messageIds[0]);
        setTimeout(() => subscriptions.pullOrderedMessages(subscriptionNameOne, cb), 2000);
      },
      (cb) => {
        assert.equal(console.log.callCount, 1);
        assert.deepEqual(console.log.firstCall.args, [`* %d %j %j`, publishedMessageIds[1], expected, { counterId: '1' }]);
        pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '1' } }, cb);
      },
      (messageIds, apiResponse, cb) => {
        pubsub.topic(topicName).publish({ data: expected, attributes: { counterId: '2' } }, cb);
      },
      (messageIds, apiResponse, cb) => {
        publishedMessageIds.push(messageIds[0]);
        setTimeout(() => subscriptions.pullOrderedMessages(subscriptionNameOne, cb), 2000);
      },
      (cb) => {
        assert.equal(console.log.callCount, 3);
        assert.deepEqual(console.log.secondCall.args, [`* %d %j %j`, publishedMessageIds[2], expected, { counterId: '2' }]);
        assert.deepEqual(console.log.thirdCall.args, [`* %d %j %j`, publishedMessageIds[0], expected, { counterId: '3' }]);
        cb();
      }
    ], done);
  });

  it(`should set the IAM policy for a subscription`, (done) => {
    run(`${cmd} set-policy ${subscriptionNameOne}`, cwd);
    pubsub.subscription(subscriptionNameOne).iam.getPolicy((err, policy) => {
      assert.ifError(err);
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
      done();
    });
  });

  it(`should get the IAM policy for a subscription`, (done) => {
    pubsub.subscription(subscriptionNameOne).iam.getPolicy((err, policy) => {
      assert.ifError(err);
      const output = run(`${cmd} get-policy ${subscriptionNameOne}`, cwd);
      assert.equal(output, `Policy for subscription: ${JSON.stringify(policy.bindings)}.`);
      done();
    });
  });

  it(`should test permissions for a subscription`, () => {
    const output = run(`${cmd} test-permissions ${subscriptionNameOne}`, cwd);
    assert.notEqual(output.indexOf(`Tested permissions for subscription`), -1);
  });

  it(`should delete a subscription`, (done) => {
    const output = run(`${cmd} delete ${subscriptionNameOne}`, cwd);
    assert.equal(output, `Subscription ${fullSubscriptionNameOne} deleted.`);
    pubsub.subscription(subscriptionNameOne).exists((err, exists) => {
      assert.ifError(err);
      assert.equal(exists, false);
      done();
    });
  });
});
