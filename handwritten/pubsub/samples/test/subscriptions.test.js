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
      var callback = sinon.stub();

      sample.program.createSubscription(topicName, subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.subscription);
      assert(console.log.calledWith('Created subscription %s to topic %s', subscriptionName, topicName));
    });
    it('should require topicName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.createSubscription(undefined, undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"topicName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.createSubscription(topicName, undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.pubsub.subscribe.callsArgWith(3, error);

      sample.program.createSubscription(topicName, subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('delete', function () {
    it('should delete a subscription', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.deleteSubscription(subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert(console.log.calledWith('Deleted subscription: %s', subscriptionName));
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.deleteSubscription(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.delete.callsArgWith(0, error);

      sample.program.deleteSubscription(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('list', function () {
    it('should list all subscriptions', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.listSubscriptions(undefined, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.subscriptions);
      assert(console.log.calledWith('Found %d subscriptions!', callback.firstCall.args[1].length));
    });
    it('should list all subscriptions of a topic', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.listSubscriptions(topicName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.subscriptions);
      assert(console.log.calledWith('Found %d subscriptions!', callback.firstCall.args[1].length));
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.pubsub.getSubscriptions.callsArgWith(1, error);

      sample.program.listSubscriptions(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
      assert.equal(callback.firstCall.args[1], undefined);
    });
  });

  describe('pull', function () {
    it('should pull messages', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.pullMessages(subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.strictEqual(callback.firstCall.args[1], sample.mocks.messages);
      assert(console.log.calledWith('Pulled %d messages!', callback.firstCall.args[1].length));
      assert(console.log.calledWith('Acked %d messages!', callback.firstCall.args[1].length));
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.pullMessages(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle pull error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.pull.callsArgWith(1, error);

      sample.program.pullMessages(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle ack error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.ack.callsArgWith(1, error);

      sample.program.pullMessages(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
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
