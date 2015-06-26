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
var Topic = require('../../lib/pubsub/topic');
var util = require('../../lib/common/util.js');

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

    it('should set `autoCreate` to true by default', function() {
      assert.strictEqual(topic.autoCreate, true);
    });

    it('should allow overriding autoCreate', function() {
      var topic = new Topic(pubsubMock, {
        name: TOPIC_NAME,
        autoCreate: false
      });
      assert.strictEqual(topic.autoCreate, false);
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
        topic.publish(message);
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

  describe('makeReq_', function() {
    var method = 'POST';
    var path = '/path';
    var query = 'query';
    var body = 'body';

    it('should call through to pubsub.makeReq_', function(done) {
      topic.pubsub.makeReq_ = function(m, p, q, b) {
        assert.equal(m, method);
        assert.equal(p, path);
        assert.equal(q, query);
        assert.equal(b, body);

        done();
      };

      topic.makeReq_(method, path, query, body, util.noop);
    });

    describe('autoCreate: false', function() {
      it('should execute callback with response', function(done) {
        var error = new Error('Error.');
        var apiResponse = { a: 'b', c: 'd' };

        topic.pubsub.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };

        topic.makeReq_(method, path, query, body, function(err, apiResp) {
          assert.deepEqual(err, error);
          assert.deepEqual(apiResp, apiResponse);

          done();
        });
      });
    });

    describe('autoCreate: true', function() {
      it('should not create a topic if doing a DELETE', function(done) {
        var topicCreated = false;

        topic.pubsub.createTopic = function() {
          topicCreated = true;
        };

        topic.pubsub.makeReq_ = function(method, path, query, body, callback) {
          callback({ code: 404 });
        };

        topic.makeReq_('DELETE', path, query, body, function() {
          assert.strictEqual(topicCreated, false);

          done();
        });
      });

      it('should create a non-DELETE API request returns 404', function(done) {
        topic.pubsub.createTopic = function(topicName) {
          assert.equal(topicName, TOPIC_NAME);

          done();
        };

        topic.pubsub.makeReq_ = function(method, path, query, body, callback) {
          callback({ code: 404 });
        };

        topic.makeReq_(method, path, query, body, util.noop);
      });

      describe('creating topic failed', function() {
        var error = new Error('Error.');
        var apiResponse = { a: 'b', c: 'd' };

        beforeEach(function() {
          topic.pubsub.createTopic = function(topicName, callback) {
            callback(error, null, apiResponse);
          };

          topic.pubsub.makeReq_ = function(m, p, q, b, callback) {
            callback({ code: 404 });
          };
        });

        it('should execute the callback with error & apiResp', function(done) {
          topic.makeReq_(method, path, query, body, function(err, t, apiResp) {
            assert.deepEqual(err, error);
            assert.strictEqual(t, null);
            assert.deepEqual(apiResp, apiResponse);

            done();
          });
        });
      });

      describe('creating topic succeeded', function() {
        it('should call makeReq_ again with the original args', function(done) {
          topic.pubsub.createTopic = function(topicName, callback) {
            callback();
          };

          topic.pubsub.makeReq_ = function(m, p, q, b, callback) {
            // Overwrite the method to confirm it is called again.
            topic.pubsub.makeReq_ = function(m, p, q, b, callback) {
              assert.equal(m, method);
              assert.equal(p, path);
              assert.equal(q, query);
              assert.equal(b, body);

              callback(); // (should be the done function)
            };

            callback({ code: 404 });
          };

          topic.makeReq_(method, path, query, body, done);
        });
      });
    });
  });
});
