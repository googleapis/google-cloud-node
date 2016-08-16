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
      sample.program.create(topicName, subscriptionName, function (err, subscription) {
        assert.ifError(err);
        assert.strictEqual(subscription, sample.mocks.subscription);
        assert(console.log.calledWith('Created subscription %s to topic %s', subscriptionName, topicName));
      });
    });
    it('should require topicName', function () {
      var sample = getSample();
      sample.program.create(undefined, undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"topicName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.create(topicName, undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.pubsub.subscribe.callsArgWith(3, new Error(error));
      sample.program.create(topicName, subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('delete', function () {
    it('should delete a subscription', function () {
      var sample = getSample();
      sample.program.delete(subscriptionName, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted subscription: %s', subscriptionName));
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.delete(undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.delete.callsArgWith(0, new Error(error));
      sample.program.delete(subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('list', function () {
    it('should list all subscriptions', function () {
      var sample = getSample();
      sample.program.list(undefined, function (err, subscriptions) {
        assert.ifError(err);
        assert.strictEqual(subscriptions, sample.mocks.subscriptions);
        assert(console.log.calledWith('Found %d subscriptions!', subscriptions.length));
      });
    });
    it('should list all subscriptions of a topic', function () {
      var sample = getSample();
      sample.program.list(topicName, function (err, subscriptions) {
        assert.ifError(err);
        assert.strictEqual(subscriptions, sample.mocks.subscriptions);
        assert(console.log.calledWith('Found %d subscriptions!', subscriptions.length));
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.pubsub.getSubscriptions.callsArgWith(1, new Error(error));
      sample.program.list(undefined, function (err, subscriptions) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(subscriptions, undefined);
      });
    });
  });

  describe('pull', function () {
    it('should pull messages', function () {
      var sample = getSample();
      sample.program.pull(subscriptionName, function (err, messages) {
        assert.ifError(err);
        assert.strictEqual(messages, sample.mocks.messages);
        assert(console.log.calledWith('Pulled %d messages!', messages.length));
        assert(console.log.calledWith('Acked %d messages!', messages.length));
      });
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      sample.program.pull(undefined, function (err, subscription) {
        assert(err);
        assert(err.message = '"subscriptionName" is required!');
        assert.equal(subscription, undefined);
      });
    });
    it('should handle pull error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.pull.callsArgWith(1, new Error(error));
      sample.program.pull(subscriptionName, function (err, messages) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(messages, undefined);
      });
    });
    it('should handle ack error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.subscription.ack.callsArgWith(1, new Error(error));
      sample.program.pull(subscriptionName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('printUsage', function () {
    it('should print usage', function () {
      var program = getSample().program;

      program.printUsage();

      assert(console.log.calledWith('Usage: node subscriptions COMMAND [ARGS...]'));
      assert(console.log.calledWith('\nCommands:\n'));
      assert(console.log.calledWith('\tcreate TOPIC_NAME SUBSCRIPTION_NAME'));
      assert(console.log.calledWith('\tdelete SUBSCRIPTION_NAME'));
      assert(console.log.calledWith('\tpull SUBSCRIPTION_NAME'));
      assert(console.log.calledWith('\tlist [TOPIC_NAME]'));
      assert(console.log.calledWith('\nExamples:\n'));
      assert(console.log.calledWith('\tnode subscriptions create my-topic my-subscription'));
      assert(console.log.calledWith('\tnode subscriptions delete my-subscription'));
      assert(console.log.calledWith('\tnode subscriptions pull my-subscription'));
      assert(console.log.calledWith('\tnode subscriptions list'));
      assert(console.log.calledWith('\tnode subscriptions list my-topic'));
    });
  });

  describe('main', function () {
    it('should call the right commands', function () {
      var program = getSample().program;

      sinon.stub(program, 'create');
      program.main(['create']);
      assert(program.create.calledOnce);

      sinon.stub(program, 'delete');
      program.main(['delete']);
      assert(program.delete.calledOnce);

      sinon.stub(program, 'list');
      program.main(['list']);
      assert(program.list.calledOnce);

      sinon.stub(program, 'pull');
      program.main(['pull']);
      assert(program.pull.calledOnce);

      sinon.stub(program, 'printUsage');
      program.main(['--help']);
      assert(program.printUsage.calledOnce);
    });
  });
});
