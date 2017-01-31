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
var extend = require('extend');
var GrpcServiceObject = require('@google-cloud/common-grpc').ServiceObject;
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Topic') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['subscription']);
  }
});

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcServiceObject, GrpcServiceObject);

function FakeIAM() {
  this.calledWith_ = [].slice.call(arguments);
}

describe('Topic', function() {
  var Topic;
  var topic;

  var PROJECT_ID = 'test-project';
  var TOPIC_NAME = 'projects/' + PROJECT_ID + '/topics/test-topic';
  var TOPIC_UNFORMATTED_NAME = TOPIC_NAME.split('/').pop();
  var PUBSUB = {
    projectId: PROJECT_ID,
    createTopic: util.noop
  };

  before(function() {
    Topic = proxyquire('../src/topic.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      },
      './iam.js': FakeIAM
    });
  });

  beforeEach(function() {
    topic = new Topic(PUBSUB, TOPIC_NAME);
  });

  describe('initialization', function() {
    it('should inherit from GrpcServiceObject', function() {
      var pubsubInstance = extend({}, PUBSUB, {
        createTopic: {
          bind: function(context) {
            assert.strictEqual(context, pubsubInstance);
          }
        }
      });

      var topic = new Topic(pubsubInstance, TOPIC_NAME);
      assert(topic instanceof GrpcServiceObject);

      var calledWith = topic.calledWith_[0];

      assert.strictEqual(calledWith.parent, pubsubInstance);
      assert.strictEqual(calledWith.id, TOPIC_NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        delete: {
          protoOpts: {
            service: 'Publisher',
            method: 'deleteTopic'
          },
          reqOpts: {
            topic: TOPIC_NAME
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'Publisher',
            method: 'getTopic'
          },
          reqOpts: {
            topic: TOPIC_NAME
          }
        }
      });
    });

    it('should create an iam object', function() {
      assert.deepEqual(topic.iam.calledWith_, [PUBSUB, TOPIC_NAME]);
    });

    it('should format name', function(done) {
      var formatName_ = Topic.formatName_;
      Topic.formatName_ = function() {
        Topic.formatName_ = formatName_;
        done();
      };
      new Topic(PUBSUB, TOPIC_NAME);
    });

    it('should assign pubsub object to `this`', function() {
      assert.deepEqual(topic.pubsub, PUBSUB);
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
    it('should format name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, TOPIC_UNFORMATTED_NAME);
      assert.equal(formattedName, TOPIC_NAME);
    });

    it('should format name when given a complete name', function() {
      var formattedName = Topic.formatName_(PROJECT_ID, TOPIC_NAME);
      assert.equal(formattedName, TOPIC_NAME);
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

  describe('getSubscriptionsStream', function() {
    it('should return a stream', function(done) {
      var fakeStream = {};

      topic.pubsub.getSubscriptionsStream = function(options) {
        assert.deepEqual(options, { topic: topic });
        setImmediate(done);
        return fakeStream;
      };

      var stream = topic.getSubscriptionsStream();
      assert.strictEqual(stream, fakeStream);
    });

    it('should pass correct args to getSubscriptionsStream', function(done) {
      var opts = { a: 'b', c: 'd' };

      topic.pubsub = {
        getSubscriptionsStream: function(options) {
          assert.deepEqual(options, opts);
          assert.deepEqual(options.topic, topic);
          done();
        }
      };

      topic.getSubscriptionsStream(opts);
    });
  });

  describe('publish', function() {
    var message = 'howdy';
    var attributes = {
      key: 'value'
    };

    it('should throw if no message is provided', function() {
      assert.throws(function() {
        topic.publish();
      }, /Cannot publish without a message\./);

      assert.throws(function() {
        topic.publish([]);
      }, /Cannot publish without a message\./);
    });

    it('should send correct api request', function(done) {
      topic.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Publisher');
        assert.strictEqual(protoOpts.method, 'publish');

        assert.strictEqual(reqOpts.topic, topic.name);
        assert.deepEqual(reqOpts.messages, [
          { data: new Buffer(JSON.stringify(message)).toString('base64') }
        ]);

        done();
      };

      topic.publish(message, assert.ifError);
    });

    it('should send correct api request for raw message', function(done) {
      topic.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts.messages, [
          {
            data: new Buffer(JSON.stringify(message)).toString('base64'),
            attributes: attributes
          }
        ]);

        done();
      };

      topic.publish({
        data: message,
        attributes: attributes
      }, { raw: true }, assert.ifError);
    });

    it('should clone the provided message', function(done) {
      var message = {
        data: 'data'
      };
      var originalMessage = extend({}, message);

      topic.request = function() {
        assert.deepEqual(message, originalMessage);
        done();
      };

      topic.publish(message, { raw: true }, assert.ifError);
    });

    it('should execute callback', function(done) {
      topic.request = function(protoOpts, reqOpts, callback) {
        callback(null, {});
      };

      topic.publish(message, done);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      topic.request = function(protoOpts, reqOpts, callback) {
        callback(error, apiResponse);
      };

      topic.publish(message, function(err, ackIds, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(ackIds, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };

      topic.request = function(protoOpts, reqOpts, callback) {
        callback(null, resp);
      };

      topic.publish(message, function(err, ackIds, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
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

    it('should attach the topic instance to the options', function(done) {
      topic.pubsub.subscription = function(name, options) {
        assert.strictEqual(options.topic, topic);
        done();
      };

      topic.subscription();
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
