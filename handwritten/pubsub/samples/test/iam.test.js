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
var policyMock = 'policy';
var permissionsMock = 'permissions';

function getSample () {
  var subscriptionMock = {
    iam: {
      getPolicy: sinon.stub().callsArgWith(0, null, policyMock),
      setPolicy: sinon.stub().callsArgWith(1, null, policyMock),
      testPermissions: sinon.stub().callsArgWith(1, null, permissionsMock)
    }
  };
  var topicMock = {
    iam: {
      getPolicy: sinon.stub().callsArgWith(0, null, policyMock),
      setPolicy: sinon.stub().callsArgWith(1, null, policyMock),
      testPermissions: sinon.stub().callsArgWith(1, null, permissionsMock)
    }
  };
  var pubsubMock = {
    topic: sinon.stub().returns(topicMock),
    subscription: sinon.stub().returns(subscriptionMock)
  };
  var PubSubMock = sinon.stub().returns(pubsubMock);
  return {
    program: proxyquire('../iam', {
      '@google-cloud/pubsub': PubSubMock
    }),
    mocks: {
      PubSub: PubSubMock,
      pubsub: pubsubMock,
      topic: topicMock,
      subscription: subscriptionMock
    }
  };
}

describe('pubsub:iam', function () {
  describe('getTopicPolicy', function () {
    it('should get a topic\'s policy', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.getTopicPolicy(topicName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], policyMock);
      assert(console.log.calledWith('Got topic policy:', policyMock));
    });
    it('should require topicName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.getTopicPolicy(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"topicName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.topic.iam.getPolicy.callsArgWith(0, error);

      sample.program.getTopicPolicy(topicName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('getSubscriptionPolicy', function () {
    it('should get a subscription\'s policy', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.getSubscriptionPolicy(subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], policyMock);
      assert(console.log.calledWith('Got subscription policy:', policyMock));
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.getSubscriptionPolicy(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.iam.getPolicy.callsArgWith(0, error);

      sample.program.getSubscriptionPolicy(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('setTopicPolicy', function () {
    it('should set a topic\'s policy', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.setTopicPolicy(topicName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], policyMock);
      assert(console.log.calledWith('Updated policy for topic: %s', topicName));
    });
    it('should require topicName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.setTopicPolicy(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"topicName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.topic.iam.setPolicy.callsArgWith(1, error);

      sample.program.setTopicPolicy(topicName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('setSubscriptionPolicy', function () {
    it('should set a subscription\'s policy', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.setSubscriptionPolicy(subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], policyMock);
      assert(console.log.calledWith('Updated policy for subscription: %s', subscriptionName));
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.setSubscriptionPolicy(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.iam.setPolicy.callsArgWith(1, error);

      sample.program.setSubscriptionPolicy(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
    });
  });

  describe('testTopicPermissions', function () {
    it('should test a topic\'s permissions', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.testTopicPermissions(topicName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], permissionsMock);
      assert(console.log.calledWith('Tested permissions for topic: %s', topicName));
    });
    it('should require topicName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.testTopicPermissions(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"topicName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.topic.iam.testPermissions.callsArgWith(1, error);

      sample.program.testTopicPermissions(topicName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
      assert.equal(callback.firstCall.args[1], undefined);
    });
  });

  describe('testSubscriptionPermissions', function () {
    it('should tests a subscription\'s permissions', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.testSubscriptionPermissions(subscriptionName, callback);

      assert.ifError(callback.firstCall.args[0]);
      assert.equal(callback.firstCall.args[1], permissionsMock);
      assert(console.log.calledWith('Tested permissions for subscription: %s', subscriptionName));
    });
    it('should require subscriptionName', function () {
      var sample = getSample();
      var callback = sinon.stub();

      sample.program.testSubscriptionPermissions(undefined, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message = '"subscriptionName" is required!');
      assert.equal(callback.firstCall.args[1], undefined);
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = new Error('error');
      var callback = sinon.stub();
      sample.mocks.subscription.iam.testPermissions.callsArgWith(1, error);

      sample.program.testSubscriptionPermissions(subscriptionName, callback);

      assert(callback.firstCall.args[0]);
      assert(callback.firstCall.args[0].message === 'error');
      assert.equal(callback.firstCall.args[1], undefined);
    });
  });

  describe('printUsage', function () {
    it('should print usage', function () {
      var program = getSample().program;

      program.printUsage();

      assert(console.log.calledWith('Usage: node iam RESOURCE COMMAND [ARGS...]'));
      assert(console.log.calledWith('\nResources:\n'));
      assert(console.log.calledWith('\ttopics'));
      assert(console.log.calledWith('\tsubscriptions'));
      assert(console.log.calledWith('\nCommands:\n'));
      assert(console.log.calledWith('\tget NAME'));
      assert(console.log.calledWith('\tset NAME'));
      assert(console.log.calledWith('\ttest NAME'));
      assert(console.log.calledWith('\nExamples:\n'));
      assert(console.log.calledWith('\tnode iam topics get my-topic'));
      assert(console.log.calledWith('\tnode iam topics set my-topic'));
      assert(console.log.calledWith('\tnode iam topics test my-topic'));
      assert(console.log.calledWith('\tnode iam subscriptions get my-subscription'));
      assert(console.log.calledWith('\tnode iam subscriptions set my-subscription'));
      assert(console.log.calledWith('\tnode iam subscriptions test my-subscription'));
    });
  });

  describe('main', function () {
    it('should call the right commands', function () {
      var program = getSample().program;

      sinon.stub(program, 'getTopicPolicy');
      program.main(['topics', 'get']);
      assert(program.getTopicPolicy.calledOnce);

      sinon.stub(program, 'getSubscriptionPolicy');
      program.main(['subscriptions', 'get']);
      assert(program.getSubscriptionPolicy.calledOnce);

      sinon.stub(program, 'setTopicPolicy');
      program.main(['topics', 'set']);
      assert(program.setTopicPolicy.calledOnce);

      sinon.stub(program, 'setSubscriptionPolicy');
      program.main(['subscriptions', 'set']);
      assert(program.setSubscriptionPolicy.calledOnce);

      sinon.stub(program, 'testTopicPermissions');
      program.main(['topics', 'test']);
      assert(program.testTopicPermissions.calledOnce);

      sinon.stub(program, 'testSubscriptionPermissions');
      program.main(['subscriptions', 'test']);
      assert(program.testSubscriptionPermissions.calledOnce);

      sinon.stub(program, 'printUsage');
      program.main(['--help']);
      assert(program.printUsage.calledOnce);

      program.main(['topics', '--help']);
      assert(program.printUsage.calledTwice);

      program.main(['subscriptions', '--help']);
      assert(program.printUsage.calledThrice);
    });
  });
});
