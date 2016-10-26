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

const proxyquire = require('proxyquire').noCallThru();

describe(`pubsub:subscriptions`, () => {
  it(`should handle errors`, () => {
    const topicName = `foo`;
    const subscriptionName = `bar`;
    const error = new Error(`error`);
    const callback = sinon.spy();
    const subscriptionMock = {
      delete: sinon.stub().yields(error),
      getMetadata: sinon.stub().yields(error),
      pull: sinon.stub().yields(error),
      iam: {
        getPolicy: sinon.stub().yields(error),
        setPolicy: sinon.stub().yields(error),
        testPermissions: sinon.stub().yields(error)
      }
    };
    const topicMock = {
      subscribe: sinon.stub().yields(error),
      getSubscriptions: sinon.stub().yields(error)
    };
    const pubsubMock = {
      topic: sinon.stub().returns(topicMock),
      subscription: sinon.stub().returns(subscriptionMock),
      getSubscriptions: sinon.stub().yields(error)
    };
    const PubSubMock = sinon.stub().returns(pubsubMock);
    const program = proxyquire(`../subscriptions`, {
      '@google-cloud/pubsub': PubSubMock
    });

    program.createSubscription(topicName, subscriptionName, callback);
    program.createPushSubscription(topicName, subscriptionName, callback);
    program.deleteSubscription(subscriptionName, callback);
    program.getSubscription(subscriptionName, callback);
    program.listSubscriptions(callback);
    program.listTopicSubscriptions(topicName, callback);
    program.pullMessages(subscriptionName, callback);
    program.pullOrderedMessages(subscriptionName, callback);
    program.getSubscriptionPolicy(subscriptionName, callback);
    program.setSubscriptionPolicy(subscriptionName, callback);
    program.testSubscriptionPermissions(subscriptionName, callback);

    assert.equal(callback.callCount, 11);
    assert.equal(callback.alwaysCalledWithExactly(error), true);
  });
});
