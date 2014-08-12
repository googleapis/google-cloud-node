/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*global describe, it, before */

'use strict';

var assert = require('assert');
var async = require('async');

var env = require('./env.js');
var gcloud = require('../lib');

var Topic = require('../lib/pubsub/topic.js');
var Subscription = require('../lib/pubsub/subscription.js');

describe('PubSub', function() {
  var pubsub;

  before(function(done) {
    pubsub = new gcloud.PubSub(env);
    var topicNames = ['topic1', 'topic2', 'topic3'];
    // TODO: Handle pagination.
    pubsub.getTopics(function(err, topics) {
      assert.ifError(err);

      async.series(
        // delete existing topics.
        topics.map(function(topic) {
          return topic.delete.bind(topic);
        }),
        function(err) {
          assert.ifError(err);
          // create new topics.
          async.map(topicNames, function(topic, callback) {
            pubsub.topic(topic).on('ready', callback);
          }, done);
        });
    });
  });

  describe('Topic', function() {
    it('should return Topic instances for existing topics', function(done) {
      pubsub.getTopics(function(err, topics) {
        assert(topics.length, 3);
        topics.forEach(function(topic) {
          assert(topic instanceof Topic);
        });
        done(err);
      });
    });

    it('should return a nextQuery if there are more results', function(done) {
      pubsub.getTopics({ maxResults: 2 }, function(err, topics, next) {
        assert.ifError(err);
        assert.equal(topics.length, 2);
        assert.equal(next.maxResults, 2);
        assert.equal(!!next.pageToken, true);
        done();
      });
    });

    it('should be created', function(done) {
      var topic = pubsub.topic('topic-new');
      topic.on('error', assert.ifError);
      topic.on('ready', function() {
        assert.equal(topic.exists, true);
        done();
      });
    });

    it('should be gettable', function(done) {
      var topic = pubsub.getTopic('topic1');
      topic.on('error', assert.ifError);
      topic.on('ready', function() {
        assert.equal(topic.exists, true);
        done();
      });
    });

    it('should publish a message', function(done) {
      pubsub.getTopic('topic1').publish('message from me', function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('should be deleted', function(done) {
      pubsub.getTopic('topic1').delete(done);
    });
  });

  describe('Subscription', function() {
    var subscriptionObjects = [
      { name: 'sub1', ackDeadlineSeconds: 30 },
      { name: 'sub2', ackDeadlineSeconds: 60 }
    ];
    var topic;

    before(function(done) {
      topic = pubsub.getTopic('topic1');
      topic.on('error', assert.ifError);

      pubsub.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);

        async.series(
          // delete existing subscriptions.
          subscriptions.map(function(subscription) {
            return subscription.delete.bind(subscription);
          }),
          function(err) {
            assert.ifError(err);
            // re-subscribe.
            async.map(subscriptionObjects, function(subscriptionObj, callback) {
              var sub = topic.subscribe(subscriptionObj);
              sub.on('ready', function() {
                sub.close();
                callback();
              });
            }, done);
          });
      });
    });

    it('should return Subscription instances for existing subscriptions',
        function(done) {
      topic.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);
        assert.strictEqual(subscriptions.length, subscriptionObjects.length);
        subscriptions.forEach(function(subscription) {
          assert(subscription instanceof Subscription);
          subscription.close();
        });
        done();
      });
    });

    it('should be gettable',  function(done) {
      var sub = topic.getSubscription(subscriptionObjects[0].name);
      sub.on('error', assert.ifError);
      sub.on('ready', function(err) {
        assert.ifError(err);
        assert.strictEqual(
            sub.name, '/subscriptions/' + env.projectId + '/sub1');
        sub.close();
        done();
      });
    });

    it('should error while getting a non-existent subscription', function(done){
      topic.getSubscription('sub-nothing-is-here').on('error', function(err) {
        assert.strictEqual(err.code, 404);
        done();
      });
    });

    it('should create a subscription', function(done) {
      var newSub = topic.subscribe({ name: 'new-sub' });
      newSub.on('error', assert.ifError);
      newSub.on('ready', function() {
        newSub.close();
        done();
      });
    });

    it('should be able to pull and ack', function(done) {
      topic.publish('hello');
      var sub = topic.getSubscription(subscriptionObjects[0].name);
      sub.on('error', assert.ifError);
      sub.on('message', function(msg) {
        sub.ack(msg.ackId, function(err) {
          assert.ifError(err);
          sub.close();
          done();
        });
      });
      sub.pull();
    });
  });
});
