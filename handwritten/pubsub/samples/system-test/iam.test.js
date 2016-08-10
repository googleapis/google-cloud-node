// Copyright 2015-2016, Google, Inc.
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

var uuid = require('node-uuid');
var gcloud = require('gcloud');
var pubsub = gcloud.pubsub();
var program = require('../iam');
var topicName = 'nodejs-docs-samples-test-' + uuid.v4();
var subscriptionName = 'nodejs-docs-samples-test-sub-' + uuid.v4();

describe('pubsub:iam', function () {
  before(function (done) {
    pubsub.topic(topicName).get({
      autoCreate: true
    }, function (err) {
      if (err) {
        return done(err);
      }
      var options = {
        reuseExisting: true
      };
      pubsub.subscribe(topicName, subscriptionName, options, done);
    });
  });

  after(function (done) {
    pubsub.subscription(subscriptionName).delete(function () {
      pubsub.topic(topicName).delete(done);
    });
  });

  describe('getTopicPolicy', function () {
    it('should get a topic\'s policy', function (done) {
      program.getTopicPolicy(topicName, function (err, policy) {
        assert.ifError(err);
        assert(policy);
        assert(console.log.calledWith('Got topic policy:', policy));
        done();
      });
    });
  });

  describe('getSubscriptionPolicy', function () {
    it('should get a subscriptions\'s policy', function (done) {
      program.getSubscriptionPolicy(subscriptionName, function (err, policy) {
        assert.ifError(err);
        assert(policy);
        assert(console.log.calledWith('Got subscription policy:', policy));
        done();
      });
    });
  });

  describe('testTopicPermissions', function () {
    it('should test a topic\'s permissions', function (done) {
      program.testTopicPermissions(topicName, function (err, permissions) {
        assert.ifError(err);
        assert(permissions);
        assert(console.log.calledWith('Tested permissions for topic: %s', topicName));
        done();
      });
    });
  });

  describe('testSubscriptionPermissions', function () {
    it('should test a subscriptions\'s permissions', function (done) {
      program.testSubscriptionPermissions(subscriptionName, function (err, permissions) {
        assert.ifError(err);
        assert(permissions);
        assert(console.log.calledWith('Tested permissions for subscription: %s', subscriptionName));
        done();
      });
    });
  });
});
