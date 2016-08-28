// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var proxyquire = require('proxyquire').noCallThru();
var topicName = 'foo';
var subscriptionName = 'bar';

function getSample () {
  var messagesMock = [
    {
      data: 'Hello World!'
    }
  ];
  var subscriptionMock = {
    get: sinon.stub(),
    delete: sinon.stub().callsArgWith(0, null),
    pull: sinon.stub().callsArgWith(1, null, messagesMock),
    ack: sinon.stub().callsArgWith(1, null)
  };
  subscriptionMock.get.callsArgWith(1, null, subscriptionMock);
  var topicMock = {
    get: sinon.stub(),
    subscription: sinon.stub().returns(subscriptionMock)
  };
  topicMock.get.callsArgWith(1, null, topicMock);
  var subscriptionsMock = [
    {
      name: subscriptionName
    }
  ];

  var pubsubMock = {
    topic: sinon.stub().returns(topicMock),
    subscription: sinon.stub().returns(subscriptionMock),
    subscribe: sinon.stub().callsArgWith(3, null, subscriptionMock),
    getSubscriptions: sinon.stub().callsArgWith(1, null, subscriptionsMock)
  };
  var PubSubMock = sinon.stub().returns(pubsubMock);
  return {
    program: proxyquire('../subscriptions', {
      '@google-cloud/pubsub': PubSubMock
    }),
    mocks: {
      PubSub: PubSubMock,
      pubsub: pubsubMock,
      topic: topicMock,
      subscription: subscriptionMock,
      subscriptions: subscriptionsMock,
      messages: messagesMock
    }
  };
}

describe('pubsub:subscriptions', function () {
  describe('create', function () {
    it('should create a subscription', function () {
      var sample = getSample();
      sample.program.createSubscription(topicName, subscriptionName, function (err, subscription) {
        assert.ifError(err);
        assert.strictEqual(subscription, sample.mocks.subscription);
        assert(console.log.calledWith('Created subscription %s to topic %s', subscriptionName, topicName));
      });
    });
    it('should require topicName', function () {
      var sample = getSample();
      sample.program.createSubscription(undefined, undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"topicName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.createSubscription(topicName, undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.pubsub.subscribe.callsArgWith(3, new Error(error));
      sample.program.createSubscription(topicName, subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('delete', function () {
    it('should delete a subscription', function () {
      var sample = getSample();
      sample.program.deleteSubscription(subscriptionName, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted subscription: %s', subscriptionName));
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.deleteSubscription(undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.delete.callsArgWith(0, new Error(error));
      sample.program.deleteSubscription(subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('list', function () {
    it('should list all subscriptions', function () {
      var sample = getSample();
      sample.program.listSubscriptions(undefined, function (err, subscriptions) {
        assert.ifError(err);
        assert.strictEqual(subscriptions, sample.mocks.subscriptions);
        assert(console.log.calledWith('Found %d subscriptions!', subscriptions.length));
      });
    });
    it('should list all subscriptions of a topic', function () {
      var sample = getSample();
      sample.program.listSubscriptions(topicName, function (err, subscriptions) {
        assert.ifError(err);
        assert.strictEqual(subscriptions, sample.mocks.subscriptions);
        assert(console.log.calledWith('Found %d subscriptions!', subscriptions.length));
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.pubsub.getSubscriptions.callsArgWith(1, new Error(error));
      sample.program.listSubscriptions(undefined, function (err, subscriptions) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(subscriptions, undefined);
      });
    });
  });

  describe('pull', function () {
    it('should pull messages', function () {
      var sample = getSample();
      sample.program.pullMessages(subscriptionName, function (err, messages) {
        assert.ifError(err);
        assert.strictEqual(messages, sample.mocks.messages);
        assert(console.log.calledWith('Pulled %d messages!', messages.length));
        assert(console.log.calledWith('Acked %d messages!', messages.length));
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.pullMessages(undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle pull error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.pull.callsArgWith(1, new Error(error));
      sample.program.pullMessages(subscriptionName, function (err, messages) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(messages, undefined);
      });
    });
    it('should handle ack error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.ack.callsArgWith(1, new Error(error));
      sample.program.pullMessages(subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('main', function () {
    it('should call createSubscription', function () {
      var program = getSample().program;

      sinon.stub(program, 'createSubscription');
      program.main(['create', topicName, subscriptionName]);
      assert.equal(program.createSubscription.calledOnce, true);
      assert.deepEqual(program.createSubscription.firstCall.args.slice(0, -1), [topicName, subscriptionName]);
    });

    it('should call deleteSubscription', function () {
      var program = getSample().program;

      sinon.stub(program, 'deleteSubscription');
      program.main(['delete', subscriptionName]);
      assert.equal(program.deleteSubscription.calledOnce, true);
      assert.deepEqual(program.deleteSubscription.firstCall.args.slice(0, -1), [subscriptionName]);
    });

    it('should call listSubscriptions', function () {
      var program = getSample().program;
      sinon.stub(program, 'listSubscriptions');

      program.main(['list']);
      assert.equal(program.listSubscriptions.calledOnce, true);
      assert.deepEqual(program.listSubscriptions.firstCall.args.slice(0, -1), [undefined]);
    });

    it('should call listSubscriptions and filter by topic', function () {
      var program = getSample().program;
      sinon.stub(program, 'listSubscriptions');

      program.main(['list', topicName]);
      assert.equal(program.listSubscriptions.calledOnce, true);
      assert.deepEqual(program.listSubscriptions.firstCall.args.slice(0, -1), [topicName]);
    });

    it('should call pullMessages', function () {
      var program = getSample().program;

      sinon.stub(program, 'pullMessages');
      program.main(['pull', subscriptionName]);
      assert.equal(program.pullMessages.calledOnce, true);
      assert.deepEqual(program.pullMessages.firstCall.args.slice(0, -1), [subscriptionName]);
    });
  });
});
