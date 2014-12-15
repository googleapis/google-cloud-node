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

/*global describe, it, before, after */

'use strict';

var assert = require('assert');
var async = require('async');

var env = require('./env.js');
var gcloud = require('../lib')(env);

var Subscription = require('../lib/pubsub/subscription.js');

var pubsub = gcloud.pubsub();

describe('pubsub', function() {
  var topicNames = ['topic1', 'topic2', 'topic3'];

  function deleteAllTopics(callback) {
    // TODO: Handle pagination.
    pubsub.getTopics(function(err, topics) {
      if (err) {
        callback(err);
        return;
      }
      async.parallel(topics.map(function(topic) {
        return topic.delete.bind(topic);
      }), callback);
    });
  }

  before(function(done) {
    deleteAllTopics(function(err) {
      assert.ifError(err);
      // Create new topics.
      async.map(topicNames, pubsub.createTopic.bind(pubsub), done);
    });
  });

  after(deleteAllTopics);

  describe('Topic', function() {
    it('should be listed', function(done) {
      pubsub.getTopics(function(err, topics) {
        assert.ifError(err);
        assert(topics.length, topicNames.length);
        done();
      });
    });

    it('should return a nextQuery if there are more results', function(done) {
      pubsub.getTopics({
        maxResults: topicNames.length - 1
      }, function(err, topics, next) {
        assert.ifError(err);
        assert(topics.length, topicNames.length - 1);
        assert(next.maxResults, topicNames.length - 1);
        assert(!!next.pageToken, true);
        done();
      });
    });

    it('should be created', function(done) {
      pubsub.createTopic('new-topic-name', done);
    });

    it('should publish a message', function(done) {
      pubsub.topic(topicNames[0])
        .publish('message from me', done);
    });

    it('should be deleted', function(done) {
      pubsub.topic(topicNames[0])
        .delete(done);
    });
  });

  describe('Subscription', function() {
    var TOPIC_NAME = 'test-topic';
    var subscriptions = [
      {
        name: 'sub1',
        options: { ackDeadlineSeconds: 30 }
      },
      {
        name: 'sub2',
        options: { ackDeadlineSeconds: 60 }
      }
    ];
    var topic;

    function deleteAllTopics(callback) {
      pubsub.getTopics(function(err, topics) {
        if (err) {
          callback(err);
          return;
        }
        async.parallel(topics.map(function(topic) {
          return topic.delete.bind(topic);
        }), callback);
      });
    }

    function deleteAllSubscriptions(callback) {
      pubsub.getSubscriptions(function(err, subs) {
        if (err) {
          callback(err);
          return;
        }
        async.parallel(subs.map(function(sub) {
          return sub.delete.bind(sub);
        }), callback);
      });
    }

    before(function(done) {
      async.parallel([deleteAllTopics, deleteAllSubscriptions], function(err) {
        assert.ifError(err);
        // Create a new test topic.
        pubsub.createTopic(TOPIC_NAME, function(err, newTopic) {
          assert.ifError(err);
          topic = newTopic;
          // Create subscriptions.
          async.parallel(subscriptions.map(function(sub) {
            return topic.subscribe.bind(topic, sub.name, sub.options);
          }), done);
        });
      });
    });

    after(function(done) {
      topic.delete(done);
    });

    it('should list all subscriptions registered to the topic', function(done) {
      topic.getSubscriptions(function(err, subs) {
        assert.ifError(err);
        assert(subs[0] instanceof Subscription);
        assert.equal(subs.length, subscriptions.length);
        done();
      });
    });

    it('should allow creation of a topic', function(done) {
      topic.subscribe('new-subscription', function(err, sub) {
        assert.ifError(err);
        assert(sub instanceof Subscription);
        done();
      });
    });

    it('should error when using a non-existent subscription', function(done) {
      var subscription = topic.subscription('non-existent-subscription');
      subscription.pull(function(err) {
        assert.equal(err.code, 404);
        done();
      });
    });

    it('should be able to pull and ack', function(done) {
      var subscription = topic.subscription(subscriptions[0].name);
      subscription.pull({ returnImmediately: true }, function(err, msg) {
        assert.ifError(err);
        subscription.ack(msg.id, done);
      });
      topic.publish('hello', assert.ifError);
    });

    it('should receive the published message', function(done) {
      var subscription = topic.subscription(subscriptions[0].name);
      subscription.pull({ returnImmediately: true }, function(err, msg) {
        assert.ifError(err);
        assert.equal(msg.data, 'hello');
        subscription.ack(msg.id, done);
      });
      topic.publish('hello', assert.ifError);
    });

    it('should receive a raw published message', function(done) {
      var subscription = topic.subscription(subscriptions[0].name);
      subscription.pull({ returnImmediately: true }, function(err, msg) {
        assert.ifError(err);
        assert.equal(msg.data, 'hello');
        subscription.ack(msg.id, done);
      });
      topic.publishRaw({
        data: new Buffer('hello').toString('base64')
      }, assert.ifError);
    });
  });
});
