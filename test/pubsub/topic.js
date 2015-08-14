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

'use strict';

var assert = require('assert');
var mockery = require('mockery');
var util = require('../../lib/common/util.js');
var Topic;

function FakeIAM() {
  this.calledWith_ = [].slice.call(arguments);
}

describe('Topic', function() {
  var PROJECT_ID = 'test-project';
  var TOPIC_NAME = 'test-topic';
  var TOPIC_FULL_NAME = 'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME;
  var pubsubMock = {
    projectId: PROJECT_ID,
    makeReq_: util.noop
  };
  var topic;

  before(function() {
    mockery.registerMock('./iam', FakeIAM);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    Topic = require('../../lib/pubsub/topic');
  });

  beforeEach(function() {
    topic = new Topic(pubsubMock, TOPIC_NAME);
  });

  describe('initialization', function() {
    it('should format name', function(done) {
      var formatName_ = Topic.formatName_;
      Topic.formatName_ = function() {
        Topic.formatName_ = formatName_;
        done();
      };
      new Topic(pubsubMock, TOPIC_NAME);
    });

    it('should assign projectId to `this`', function() {
      assert.equal(topic.projectId, PROJECT_ID);
    });

    it('should assign pubsub object to `this`', function() {
      assert.deepEqual(topic.pubsub, pubsubMock);
    });

    it('should create an iam object', function() {
      assert.deepEqual(topic.iam.calledWith_, [
        pubsubMock,
        TOPIC_FULL_NAME
      ]);
    });
  });

  describe('formatMessage_', function() {
    var messageString = 'string';
    var messageBuffer = new Buffer(messageString);

    var messageObjectWithString = { data: messageString };
    var messageObjectWithBuffer = { data: messageBuffer };

    it('should handle string data', function() {
      assert.deepEqual(
        Topic.formatMessage_(messageObjectWithString),
        { data: new Buffer(JSON.stringify(messageString)).toString('base64') }
      );
    });

    it('should handle buffer data', function() {
      assert.deepEqual(
        Topic.formatMessage_(messageObjectWithBuffer),
        { data: messageBuffer.toString('base64') }
      );
    });
  });

  describe('formatName_', function() {
    var fullName = 'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME;

    it('should format name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, TOPIC_NAME);
      assert.equal(formattedName, fullName);
    });

    it('should format name when given a complete name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, fullName);
      assert.equal(formattedName, fullName);
    });
  });

  describe('publish', function() {
    var message = 'howdy';
    var messageObject = { data: message };

    it('should throw if no message is provided', function() {
      assert.throws(function() {
        topic.publish();
      }, /Cannot publish without a message/);

      assert.throws(function() {
        topic.publish([]);
      }, /Cannot publish without a message/);
    });

    it('should throw if a message has no data', function() {
      assert.throws(function() {
        topic.publish({});
      }, /Cannot publish message without a `data` property/);
    });

    it('should send correct api request', function(done) {
      topic.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, topic.name + ':publish');
        assert.strictEqual(query, null);
        assert.deepEqual(body, {
          messages: [
            { data: new Buffer(JSON.stringify(message)).toString('base64') }
          ]
        });
        done();
      };

      topic.publish(messageObject, assert.ifError);
    });

    it('should execute callback', function(done) {
      topic.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };

      topic.publish(messageObject, done);
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      topic.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      topic.publish(messageObject, function(err, ackIds, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should delete a topic', function(done) {
      topic.makeReq_ = function(method, path) {
        assert.equal(method, 'DELETE');
        assert.equal(path, topic.name);
        done();
      };
      topic.delete();
    });

    it('should call the callback', function(done) {
      topic.makeReq_ = function(method, path, q, body, callback) {
        callback();
      };
      topic.delete(done);
    });

    it('should call the callback with apiResponse', function(done) {
      var resp = { success: true };
      topic.makeReq_ = function(method, path, q, body, callback) {
        callback(null, resp);
      };
      topic.delete(function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      topic.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, topic.name);
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      topic.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        topic.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        topic.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        topic.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should assign the response to the metadata property', function(done) {
        topic.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(topic.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata & API response', function(done) {
        topic.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('getSubscriptions', function() {
    it('should accept just a callback', function(done) {
      topic.pubsub.getSubscriptions = function(options, callback) {
        assert.deepEqual(options, { topic: topic });
        callback();
      };

      topic.getSubscriptions(done);
    });

    it('should pass correct args to pubsub#getSubscriptions', function(done) {
      var opts = { a: 'b', c: 'd' };

      topic.pubsub = {
        getSubscriptions: function(options, callback) {
          assert.deepEqual(options, opts);
          assert.deepEqual(options.topic, topic);
          callback();
        }
      };

      topic.getSubscriptions(opts, done);
    });
  });

  describe('subscribe', function() {
    it('should pass correct arguments to pubsub#subscribe', function(done) {
      var subscriptionName = 'subName';
      var opts = {};

      topic.pubsub.subscribe = function(t, subName, options, callback) {
        assert.deepEqual(t, topic);
        assert.equal(subName, subscriptionName);
        assert.deepEqual(options, opts);
        callback();
      };

      topic.subscribe(subscriptionName, opts, done);
    });
  });

  describe('subscription', function() {
    it('should pass correct arguments to pubsub#subscription', function(done) {
      var subscriptionName = 'subName';
      var opts = {};

      topic.pubsub.subscription = function(name, options) {
        assert.equal(name, subscriptionName);
        assert.deepEqual(options, opts);
        done();
      };

      topic.subscription(subscriptionName, opts);
    });

    it('should return the result', function(done) {
      topic.pubsub.subscription = function() {
        return done;
      };

      var doneFn = topic.subscription();
      doneFn();
    });
  });
});
