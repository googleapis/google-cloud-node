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
var pubsub = PubSub();
var program = require('../subscriptions');
var topicName = 'nodejs-docs-samples-test-' + uuid.v4();
var subscriptionName = 'nodejs-docs-samples-test-sub-' + uuid.v4();
var projectId = process.env.GCLOUD_PROJECT;
var name = 'projects/' + projectId + '/subscriptions/' + subscriptionName;

describe('pubsub:subscriptions', function () {
  before(function (done) {
    pubsub.topic(topicName).get({
      autoCreate: true
    }, done);
  });

  after(function (done) {
    pubsub.topic(topicName).delete(done);
  });

  describe('create', function () {
    it('should create a subscription', function (done) {
      program.create(topicName, subscriptionName, function (err, subscription) {
        assert.ifError(err);
        assert.equal(subscription.name, name);
        assert(console.log.calledWith('Created subscription %s to topic %s', subscriptionName, topicName));
        // The next test sometimes fails, so, slow this test down
        setTimeout(done, 5000);
      });
    });
  });

  describe('list', function () {
    it('should list subscriptions', function (done) {
      program.list(topicName, function (err, subscriptions) {
        assert.ifError(err);
        assert(Array.isArray(subscriptions));
        assert(subscriptions.length > 0);
        var recentlyCreatedSubscriptions = subscriptions.filter(function (subscription) {
          return subscription.name === name;
        });
        assert.equal(recentlyCreatedSubscriptions.length, 1, 'list has newly created subscription');
        assert(console.log.calledWith('Found %d subscriptions!', subscriptions.length));

        program.list(undefined, function (err, allSubscriptions) {
          assert.ifError(err);
          assert(Array.isArray(allSubscriptions));
          assert(allSubscriptions.length > 0);
          var recentlyCreatedAllSubscriptions = allSubscriptions.filter(function (subscription) {
            return subscription.name === name;
          });
          assert.equal(recentlyCreatedAllSubscriptions.length, 1, 'list has newly created subscription');
          assert(console.log.calledWith('Found %d subscriptions!', allSubscriptions.length));
          done();
        });
      });
    });
  });

  describe('pull', function () {
    var expected = 'Hello World!';

    before(function (done) {
      pubsub.topic(topicName).publish({ data: expected }, done);
    });

    it('should pull messages', function (done) {
      program.pull(subscriptionName, function (err, messages) {
        assert.ifError(err);
        assert(Array.isArray(messages));
        assert(messages.length > 0);
        assert(console.log.calledWith('Pulled %d messages!', messages.length));
        assert(console.log.calledWith('Acked %d messages!', messages.length));
        assert.equal(messages[0].data, expected);
        done();
      });
    });
  });

  describe('delete', function () {
    it('should delete a subscription', function (done) {
      program.delete(subscriptionName, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted subscription: %s', subscriptionName));
        done();
      });
    });
  });
});
