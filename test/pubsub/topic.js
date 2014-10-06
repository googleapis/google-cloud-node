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

/*global describe, it, beforeEach, afterEach */

'use strict';

var assert = require('assert');
var util = require('../../lib/common/util.js');

var SubscriptionCached = require('../../lib/pubsub/subscription.js');
var formatName_Cached = SubscriptionCached.formatName_;
var SubscriptionOverride;
var formatName_Override;

function Subscription(a, b) {
  var OverrideFn = SubscriptionOverride || SubscriptionCached;
  return new OverrideFn(a, b);
}

Subscription.formatName_ = function() {
  var args = [].slice.apply(arguments);
  return (formatName_Override || formatName_Cached).apply(null, args);
};

var Topic = require('sandboxed-module')
    .require('../../lib/pubsub/topic.js', {
      requires: {
        './subscription.js': Subscription
      }
    });

describe('Topic', function() {
  var PROJECT_ID = 'test-project';
  var TOPIC_NAME = 'test-topic';
  var pubsubMock = {
    projectId: PROJECT_ID,
    makeReq_: util.noop
  };
  var topic;

  beforeEach(function() {
    topic = new Topic(pubsubMock, { name: TOPIC_NAME });
  });

  afterEach(function() {
    SubscriptionOverride = null;
    formatName_Override = null;
  });

  describe('initialization', function() {
    it('should format name', function(done) {
      var formatName_ = Topic.formatName_;
      Topic.formatName_ = function() {
        Topic.formatName_ = formatName_;
        done();
      };
      new Topic(pubsubMock, { name: TOPIC_NAME });
    });

    it('should assign projectId to `this`', function() {
      assert.equal(topic.projectId, PROJECT_ID);
    });

    it('should assign pubsub object to `this`', function() {
      assert.deepEqual(topic.pubsub, pubsubMock);
    });
  });

  describe('formatName_', function() {
    var fullName = '/topics/' + PROJECT_ID + '/' + TOPIC_NAME;

    it('should format name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, TOPIC_NAME);
      assert.equal(formattedName, fullName);
    });

    it('should format name when given a complete name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, fullName);
      assert.equal(formattedName, fullName);
    });
  });

  describe('publishing', function() {
    var message = 'howdy';
    var messageBuffer = new Buffer(message);
    var messageRaw = { data: messageBuffer.toString('base64') };
    var messageObj = { test: 'object' };
    var messageObjDecoded =
            new Buffer(JSON.stringify(messageObj)).toString('base64');

    describe('publish', function() {
      it('should throw if no message is provided', function() {
        assert.throws(function() {
          topic.publish();
        }, /empty message/);
      });

      it('should convert string to raw message', function(done) {
        topic.publishRaw = function(msg) {
          assert.deepEqual(msg, messageRaw);
          done();
        };
        topic.publish(message, assert.ifError);
      });

      it('should convert buffer to raw message', function(done) {
        topic.publishRaw = function(msg) {
          assert.deepEqual(msg, messageRaw);
          done();
        };
        topic.publish(messageBuffer, assert.ifError);
      });

      it('should stringify non-strings & non-buffers', function(done) {
        topic.publishRaw = function(msg) {
          assert.deepEqual(msg.data, messageObjDecoded);
          done();
        };
        topic.publish(messageObj, assert.ifError);
      });

      it('should pass callback', function(done) {
        topic.publishRaw = function(msg, callback) {
          callback();
        };
        topic.publish(message, done);
      });
    });

    describe('publishRaw', function() {
      it('should throw if no message is provided', function() {
        assert.throws(function() {
          topic.publishRaw();
        }, /empty message/);
      });

      it('should stringify non-strings & non-buffers', function(done) {
        topic.makeReq_ = function(method, path, qs, body) {
          assert.deepEqual(body.data, messageObjDecoded);
          done();
        };
        topic.publishRaw({ data: messageObj }, assert.ifError);
      });

      it('should post raw messages to the api', function(done) {
        topic.makeReq_ = function(method, path, qs, body) {
          assert.equal(method, 'POST');
          assert.equal(path, 'topics/publish');
          assert.deepEqual(body.message, messageRaw.message);
          done();
        };
        topic.publishRaw(messageRaw, assert.ifError);
      });

      it('should attach topic name to the request', function(done) {
        topic.makeReq_ = function(method, path, qs, body) {
          assert.equal(body.topic, topic.name);
          done();
        };
        topic.publishRaw(messageRaw, assert.ifError);
      });
    });
  });

  describe('delete', function() {
    it('should delete a topic', function(done) {
      topic.makeReq_ = function(method, path) {
        assert.equal(method, 'DELETE');
        assert.equal(path, 'topics/' + topic.name);
        done();
      };
      topic.delete();
    });
  });

  describe('subscriptions', function() {
    var SUB_NAME = 'new-sub-name';
    var SUB_FULL_NAME = '/subscriptions/' + PROJECT_ID + '/' + SUB_NAME;
    var CONFIG = { autoAck: true, interval: 90 };

    describe('getSubscriptions', function() {
      it('should call parent getSubscriptions', function(done) {
        topic.pubsub.getSubscriptions = function() {
          done();
        };
        topic.getSubscriptions(assert.ifError);
      });

      it('should pass query', function(done) {
        var query = { pageToken: 1, maxResults: 3 };
        topic.pubsub.getSubscriptions = function(q) {
          assert.strictEqual(q.pageToken, query.pageToken);
          assert.strictEqual(q.maxResults, query.maxResults);
          done();
        };
        topic.getSubscriptions(query, assert.ifError);
      });

      it('should pass callback', function(done) {
        topic.pubsub.getSubscriptions = function(q, callback) {
          callback();
        };
        topic.getSubscriptions({}, done);
      });

      it('should attach scoped topic query to query object', function(done) {
        topic.pubsub.getSubscriptions = function(q) {
          assert.equal(
              q.query, 'pubsub.googleapis.com/topic in (' + topic.name + ')');
          done();
        };
        topic.getSubscriptions({}, assert.ifError);
      });
    });

    describe('subscribe', function() {
      it('should throw if no name is provided', function() {
        assert.throws(function() {
          topic.subscribe();
        }, /name.*required/);
      });

      it('should not require configuration options', function(done) {
        topic.makeReq_ = function(method, path, qs, body, callback) {
          callback();
        };
        topic.subscribe(SUB_NAME, done);
      });

      it('should format provided name', function(done) {
        formatName_Override = function() {
          done();
        };
        topic.subscribe(SUB_NAME, assert.ifError);
      });

      it('should send correct request', function(done) {
        topic.makeReq_ = function(method, path, qs, body) {
          assert.equal(method, 'POST');
          assert.equal(path, 'subscriptions');
          assert.equal(body.topic, topic.name);
          assert.equal(body.name, SUB_FULL_NAME);
          done();
        };
        topic.subscribe(SUB_NAME, assert.ifError);
      });

      it('should return an api error to the callback', function(done) {
        var error = new Error('Error.');
        topic.makeReq_ = function(method, path, qs, body, callback) {
          callback(error);
        };
        topic.subscribe(SUB_NAME, function(err) {
          assert.equal(err, error);
          done();
        });
      });

      it('should create a new subscription', function(done) {
        topic.subscription = function(name) {
          assert.equal(name, SUB_NAME);
          done();
        };
        topic.makeReq_ = function(method, path, qs, body, callback) {
          callback();
        };
        topic.subscribe(SUB_NAME, assert.ifError);
      });

      it('should honor settings on the api request', function(done) {
        var SEC = 90;
        topic.makeReq_ = function(method, path, qs, body) {
          assert.strictEqual(body.ackDeadlineSeconds, SEC);
          done();
        };
        topic.subscribe(SUB_NAME, { ackDeadlineSeconds: SEC }, assert.ifError);
      });

      it('should honor settings on the subscription object', function(done) {
        topic.subscription = function(name, options) {
          assert.deepEqual(options, CONFIG);
          done();
        };
        topic.makeReq_ = function(method, path, qs, body, callback) {
          callback();
        };
        topic.subscribe(SUB_NAME, CONFIG, assert.ifError);
      });
    });

    describe('subscription', function() {
      it('should throw if no name is provided', function() {
        assert.throws(function() {
          topic.subscription();
        }, /name.*required/);
      });

      it('should return a Subscription object', function() {
        SubscriptionOverride = function() {};
        var subscription = topic.subscription(SUB_NAME, {});
        assert(subscription instanceof SubscriptionOverride);
      });

      it('should honor settings', function(done) {
        SubscriptionOverride = function(pubsub, options) {
          assert.deepEqual(options, CONFIG);
          done();
        };
        topic.subscription(SUB_NAME, CONFIG);
      });

      it('should pass specified name to the Subscription', function(done) {
        SubscriptionOverride = function(pubsub, options) {
          assert.equal(options.name, SUB_NAME);
          done();
        };
        topic.subscription(SUB_NAME, {});
      });

      it('should not require options', function() {
        assert.doesNotThrow(function() {
          topic.subscription(SUB_NAME);
        });
      });
    });
  });
});
