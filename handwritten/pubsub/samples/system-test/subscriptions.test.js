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
var PubSub = require('@google-cloud/pubsub');
var program = require('../subscriptions');

var pubsub = PubSub();
var topicNameOne = 'nodejs-docs-samples-test-' + uuid.v4();
var topicNameTwo = 'nodejs-docs-samples-test-' + uuid.v4();
var subscriptionNameOne = 'nodejs-docs-samples-test-sub-' + uuid.v4();
var subscriptionNameTwo = 'nodejs-docs-samples-test-sub-' + uuid.v4();
var projectId = process.env.GCLOUD_PROJECT;
var fullSubscriptionNameOne = 'projects/' + projectId + '/subscriptions/' + subscriptionNameOne;
var fullSubscriptionNameTwo = 'projects/' + projectId + '/subscriptions/' + subscriptionNameTwo;

describe('pubsub:subscriptions', function () {
  before(function (done) {
    pubsub.topic(topicNameOne).get({
      autoCreate: true
    }, function (err) {
      assert.ifError(err, 'topic creation succeeded');

      pubsub.topic(topicNameTwo).get({
        autoCreate: true
      }, function (err, topic) {
        assert.ifError(err, 'topic creation succeeded');

        topic.subscribe(subscriptionNameTwo, function (err) {
          assert.ifError(err, 'subscription creation succeeded');

          done();
        });
      });
    });
  });

  after(function (done) {
    pubsub.topic(topicNameOne).delete(done);
  });

  describe('createSubscription', function () {
    it('should create a subscription', function (done) {
      program.createSubscription(topicNameOne, subscriptionNameOne, function (err, subscription, apiResponse) {
        assert.ifError(err);
        assert.equal(subscription.name, fullSubscriptionNameOne);
        assert(console.log.calledWith('Created subscription %s to topic %s', subscriptionNameOne, topicNameOne));
        assert.notEqual(apiResponse, undefined);
        // Listing is eventually consistent, so give the index time to update
        setTimeout(done, 5000);
      });
    });
  });

  describe('getSubscriptionMetadata', function () {
    it('should get metadata for a subscription', function (done) {
      program.getSubscriptionMetadata(subscriptionNameOne, function (err, metadata) {
        assert.ifError(err);
        assert.equal(metadata.name, fullSubscriptionNameOne);
        assert(console.log.calledWith('Got metadata for subscription: %s', subscriptionNameOne));
        done();
      });
    });
  });

  describe('listSubscriptions', function () {
    it('should list subscriptions', function (done) {
      program.listSubscriptions(topicNameOne, function (err, subscriptions) {
        assert.ifError(err);
        assert(Array.isArray(subscriptions));
        assert(subscriptions.length > 0);
        var recentlyCreatedSubscriptions = subscriptions.filter(function (subscription) {
          return subscription.name === fullSubscriptionNameOne || subscription.name === fullSubscriptionNameTwo;
        });
        assert.equal(recentlyCreatedSubscriptions.length, 1, 'list only has one newly created subscription');
        assert.equal(recentlyCreatedSubscriptions[0].name, fullSubscriptionNameOne, 'list has correct newly created subscription');
        assert(console.log.calledWith('Found %d subscription(s)!', subscriptions.length));
        done();
      });
    });
  });

  describe('listAllSubscriptions', function () {
    it('should list all subscriptions', function (done) {
      program.listAllSubscriptions(function (err, allSubscriptions) {
        assert.ifError(err);
        assert(Array.isArray(allSubscriptions));
        assert(allSubscriptions.length > 0);
        var recentlyCreatedAllSubscriptions = allSubscriptions.filter(function (subscription) {
          return subscription.name === fullSubscriptionNameOne || subscription.name === fullSubscriptionNameTwo;
        });
        assert.equal(recentlyCreatedAllSubscriptions.length, 2, 'list has both newly created subscriptions');
        assert(console.log.calledWith('Found %d subscription(s)!', allSubscriptions.length));
        done();
      });
    });
  });

  describe('pullMessages', function () {
    var expected = 'Hello World!';

    before(function (done) {
      pubsub.topic(topicNameOne).publish({ data: expected }, done);
    });

    it('should pull messages', function (done) {
      program.pullMessages(subscriptionNameOne, function (err, messages) {
        assert.ifError(err);
        assert(Array.isArray(messages));
        assert(messages.length > 0);
        assert(console.log.calledWith('Pulled %d message(s)!', messages.length));
        assert(console.log.calledWith('Acked %d message(s)!', messages.length));
        assert.equal(messages[0].data, expected);
        done();
      });
    });
  });

  describe('deleteSubscription', function () {
    it('should delete a subscription', function (done) {
      program.deleteSubscription(subscriptionNameOne, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted subscription: %s', subscriptionNameOne));
        done();
      });
    });
  });
});
