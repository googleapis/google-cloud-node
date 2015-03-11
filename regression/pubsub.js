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
var uuid = require('node-uuid');

var env = require('./env.js');
var gcloud = require('../lib')(env);

var Subscription = require('../lib/pubsub/subscription.js');

var pubsub = gcloud.pubsub();

function generateTopicName() {
  return 'test-topic-' + uuid.v4();
}

function generateSubName() {
  return 'test-subscription-' + uuid.v4();
}

describe('pubsub', function() {
  var TOPIC_NAMES = [
    generateTopicName(),
    generateTopicName(),
    generateTopicName()
  ];

  var TOPICS = TOPIC_NAMES.map(pubsub.topic.bind(pubsub));

  var TOPIC_FULL_NAMES = TOPICS.map(function(topic) {
    return topic.name;
  });

  before(function(done) {
    // create all needed topics
    async.each(TOPIC_NAMES, function(name, cb) {
      pubsub.createTopic(name, cb);
    }, done);
  });

  after(function(done) {
    // Delete topics
    async.each(TOPICS, function(topic, callback) {
      topic.delete(callback);
    }, done);
  });

  describe('Topic', function() {

    it('should be listed', function(done) {
      pubsub.getTopics(function(err, topics) {
        assert.ifError(err);

        var results = topics.filter(function(topic) {
          return TOPIC_FULL_NAMES.indexOf(topic.name) !== -1;
        });

        // get all topics in list of known names
        assert.equal(results.length, TOPIC_NAMES.length);
        done();
      });
    });

    it('should return a nextQuery if there are more results', function(done) {
      pubsub.getTopics({
        pageSize: TOPIC_NAMES.length - 1
      }, function(err, topics, next) {
        assert.ifError(err);
        assert(topics.length, TOPIC_NAMES.length - 1);
        assert(next.pageSize, TOPIC_NAMES.length - 1);
        assert(!!next.pageToken, true);
        done();
      });
    });

    it('should be created and deleted', function(done) {
      var TOPIC_NAME = generateTopicName();
      pubsub.createTopic(TOPIC_NAME, function(err) {
        assert.ifError(err);
        pubsub.topic(TOPIC_NAME).delete(done);
      });
    });

    it('should publish a message', function(done) {
      var topic = pubsub.topic(TOPIC_NAMES[0]);
      topic.publish({ data: 'message from me' }, function(err, messageIds) {
        assert.ifError(err);
        assert.equal(messageIds.length, 1);
        done();
      });
    });
  });

  describe('Subscription', function() {
    var TOPIC_NAME = generateTopicName();

    var SUB_NAMES = [
      generateSubName(),
      generateSubName()
    ];

    var SUBSCRIPTIONS = [
      {
        name: SUB_NAMES[0],
        options: { ackDeadlineSeconds: 30 }
      },
      {
        name: SUB_NAMES[1],
        options: { ackDeadlineSeconds: 60 }
      }
    ];

    var topic;

    before(function(done) {
      // Create a new test topic.
      pubsub.createTopic(TOPIC_NAME, function(err, newTopic) {
        assert.ifError(err);
        topic = newTopic;

        // Create subscriptions.
        async.parallel(SUBSCRIPTIONS.map(function(sub) {
          return topic.subscribe.bind(topic, sub.name, sub.options);
        }), done);
      });
    });

    after(function(done) {
      var SUBS = SUB_NAMES.map(function(name) {
        return topic.subscription(name);
      });

      // Delete subscriptions
      async.each(SUBS, function(sub, callback) {
        sub.delete(callback);
      }, function(err) {
        assert.ifError(err);
        topic.delete(done);
      });
    });

    it('should list all subscriptions registered to the topic', function(done) {
      topic.getSubscriptions(function(err, subs) {
        assert.ifError(err);
        assert(subs[0] instanceof Subscription);
        assert.equal(subs.length, SUBSCRIPTIONS.length);
        done();
      });
    });

    it('should list all subscriptions regardless of topic', function(done) {
      pubsub.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);
        assert(subscriptions instanceof Array);
        done();
      });
    });

    it('should allow creation and deletion of a topic', function(done) {
      var subName = generateSubName();
      topic.subscribe(subName, function(err, sub) {
        assert.ifError(err);
        assert(sub instanceof Subscription);
        sub.delete(done);
      });
    });

    it('should error when using a non-existent subscription', function(done) {
      var subscription = topic.subscription(generateSubName());

      subscription.pull(function(err) {
        assert.equal(err.code, 404);
        done();
      });
    });

    it('should be able to pull and ack', function(done) {
      var subscription = topic.subscription(SUB_NAMES[0]);

      topic.publish({ data: 'hello' }, function(err) {
        assert.ifError(err);

        subscription.pull({
          returnImmediately: false,
          maxResults: 1
        }, function(err, msgs) {
          assert.ifError(err);
          subscription.ack(msgs[0].ackId, done);
        });
      });
    });

    it('should be able to set a new ack deadline', function(done) {
      var subscription = topic.subscription(SUB_NAMES[0]);

      topic.publish({ data: 'hello' }, function(err) {
        assert.ifError(err);

        subscription.pull({
          returnImmediately: false,
          maxResults: 1
        }, function(err, msgs) {
          assert.ifError(err);

          var options = {
            ackId: msgs[0].ackId,
            seconds: 10
          };
          subscription.setAckDeadline(options, done);
        });
      });
    });

    it('should receive the published message', function(done) {
      var subscription = topic.subscription(SUB_NAMES[1]);

      topic.publish([
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' }
      ], function(err) {
        assert.ifError(err);

        subscription.pull({
          returnImmediately: false,
          maxResults: 1
        }, function(err, msgs) {
          assert.ifError(err);
          assert.equal(msgs[0].data, 'hello');
          subscription.ack(msgs[0].ackId, done);
        });
      });
    });

    it('should receive a raw published message', function(done) {
      var subscription = topic.subscription(SUB_NAMES[0]);

      topic.publish([
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' }
      ], function(err) {
        assert.ifError(err);

        subscription.pull({
          returnImmediately: false,
          maxResults: 1
        }, function(err, msgs) {
          assert.ifError(err);
          assert.equal(msgs[0].data, 'hello');
          subscription.ack(msgs[0].ackId, done);
        });
      });
    });

    it('should receive the chosen amount of results', function(done) {
      var subscription = topic.subscription(SUB_NAMES[1]);
      var opts = { returnImmediately: false, maxResults: 3 };

      topic.publish([
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' },
        { data: 'hello' }
      ], function(err) {
        assert.ifError(err);

        subscription.pull(opts, function(err, messages) {
          assert.ifError(err);

          assert.equal(messages.length, opts.maxResults);

          var ackIds = messages.map(function(message) {
            return message.ackId;
          });

          subscription.ack(ackIds, done);
        });
      });
    });
  });
});
