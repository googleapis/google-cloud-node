/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
var common = require('@google-cloud/common');
var extend = require('extend');
var proxyquire = require('proxyquire');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name === 'Publisher') {
      assert.deepEqual(options, { singular: true });
      promisified = true;
    }
  }
});

describe('Publisher', function() {
  var Publisher;
  var publisher;
  var batchOpts;

  var TOPIC_NAME = 'test-topic';
  var TOPIC = {
    name: TOPIC_NAME,
    request: fakeUtil.noop
  };

  before(function() {
    Publisher = proxyquire('../src/publisher.js', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    TOPIC.request = fakeUtil.noop;
    publisher = new Publisher(TOPIC);
    batchOpts = publisher.settings.batching;
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the topic object', function() {
      assert.strictEqual(publisher.topic, TOPIC);
    });

    it('should create an inventory object', function() {
      assert.deepEqual(publisher.inventory_, {
        callbacks: [],
        queued: [],
        bytes: 0
      });
    });

    describe('options', function() {
      it('should provide default values for batching', function() {
        assert.deepEqual(publisher.settings.batching, {
          maxBytes: Math.pow(1024, 2) * 5,
          maxMessages: 1000,
          maxMilliseconds: 1000
        });
      });

      it('should capture user specified options', function() {
        var options = {
          maxBytes: 10,
          maxMessages: 11,
          maxMilliseconds: 12
        };
        var optionsCopy = extend({}, options);

        var publisher = new Publisher(TOPIC, {
          batching: options
        });

        assert.deepEqual(publisher.settings.batching, options);
        assert.deepEqual(options, optionsCopy);
      });

      it('should cap maxBytes', function() {
        var expected = Math.pow(1024, 2) * 9;

        var publisher = new Publisher(TOPIC, {
          batching: { maxBytes: expected + 1024 }
        });

        assert.strictEqual(publisher.settings.batching.maxBytes, expected);
      });

      it('should cap maxMessages', function() {
        var publisher = new Publisher(TOPIC, {
          batching: { maxMessages: 2000 }
        });

        assert.strictEqual(publisher.settings.batching.maxMessages, 1000);
      });
    });
  });

  describe('publish', function() {
    var DATA = new Buffer('hello');
    var ATTRS = { a: 'a' };

    var globalSetTimeout;

    before(function() {
      globalSetTimeout = global.setTimeout;
    });

    beforeEach(function() {
      publisher.publish_ = fakeUtil.noop;
      global.setTimeout = fakeUtil.noop;
    });

    after(function() {
      global.setTimeout = globalSetTimeout;
    });

    it('should throw an error when data is not a buffer', function() {
      assert.throws(function() {
        publisher.publish('hello', {}, fakeUtil.noop);
      }, /Data must be in the form of a Buffer\./);
    });

    it('should queue the data', function(done) {
      publisher.queue_ = function(data, attrs, callback) {
        assert.strictEqual(data, DATA);
        assert.strictEqual(attrs, ATTRS);
        callback(); // the done fn
      };

      publisher.publish(DATA, ATTRS, done);
    });

    it('should optionally accept attributes', function(done) {
      publisher.queue_ = function(data, attrs, callback) {
        assert.strictEqual(data, DATA);
        assert.deepEqual(attrs, {});
        callback(); // the done fn
      };

      publisher.publish(DATA, done);
    });

    it('should publish if data puts payload size over cap', function(done) {
      var queueCalled = false;

      publisher.publish_ = function() {
        assert.strictEqual(queueCalled, false);
        publisher.inventory_.bytes = 0;
      };

      publisher.queue_ = function(data, attrs, callback) {
        assert.strictEqual(publisher.inventory_.bytes, 0);
        queueCalled = true;
        callback(); // the done fn
      };

      publisher.inventory_.bytes = batchOpts.maxBytes - 1;
      publisher.publish(DATA, done);
    });

    it('should publish if data puts payload at size cap', function(done) {
      publisher.queue_ = function() {
        publisher.inventory_.bytes += DATA.length;
      };

      publisher.publish_ = done;
      publisher.inventory_.bytes = batchOpts.maxBytes - DATA.length;
      publisher.publish(DATA, fakeUtil.noop);
    });

    it('should publish if data puts payload at message cap', function(done) {
      var queueCalled = false;

      publisher.queue_ = function() {
        queueCalled = true;
      };

      publisher.publish_ = function() {
        assert(queueCalled);
        done();
      };

      publisher.inventory_.queued = Array(batchOpts.maxMessages).fill({});
      publisher.publish(DATA, fakeUtil.noop);
    });

    it('should set a timeout if a publish did not occur', function(done) {
      var globalSetTimeout = global.setTimeout;
      var fakeTimeoutHandle = 12345;

      global.setTimeout = function(callback, duration) {
        assert.strictEqual(duration, batchOpts.maxMilliseconds);
        global.setTimeout = globalSetTimeout;
        setImmediate(callback);
        return fakeTimeoutHandle;
      };

      publisher.publish_ = done;
      publisher.publish(DATA, fakeUtil.noop);

      assert.strictEqual(publisher.timeoutHandle_, fakeTimeoutHandle);
    });

    it('should not set a timeout if one exists', function() {
      var fakeTimeoutHandle = 'not-a-real-handle';

      publisher.timeoutHandle_ = 'not-a-real-handle';
      publisher.publish(DATA, fakeUtil.noop);
      assert.strictEqual(publisher.timeoutHandle_, fakeTimeoutHandle);
    });
  });

  describe('publish_', function() {
    it('should cancel any publish timeouts', function(done) {
      publisher.timeoutHandle_ = setTimeout(done, 1);
      publisher.publish_();
      assert.strictEqual(publisher.timeoutHandle_, null);
      done();
    });

    it('should reset the inventory object', function() {
      publisher.inventory_.callbacks.push(fakeUtil.noop);
      publisher.inventory_.queued.push({});
      publisher.inventory_.bytes = 5;

      publisher.publish_();

      assert.deepEqual(publisher.inventory_.callbacks, []);
      assert.deepEqual(publisher.inventory_.queued, []);
      assert.strictEqual(publisher.inventory_.bytes, 0);
    });

    it('should make the correct request', function(done) {
      var FAKE_MESSAGE = {};

      TOPIC.request = function(config) {
        assert.strictEqual(config.client, 'publisherClient');
        assert.strictEqual(config.method, 'publish');
        assert.deepEqual(config.reqOpts, {
          topic: TOPIC_NAME,
          messages: [FAKE_MESSAGE]
        });
        done();
      };

      publisher.inventory_.queued.push(FAKE_MESSAGE);
      publisher.publish_();
    });

    it('should pass back the err/msg id to correct callback', function(done) {
      var error = new Error('err');
      var FAKE_IDS = ['abc', 'def'];
      var callbackCalls = 0;

      publisher.inventory_.callbacks = [
        function(err, messageId) {
          assert.strictEqual(err, error);
          assert.strictEqual(messageId, FAKE_IDS[0]);
          callbackCalls += 1;
        },
        function(err, messageId) {
          assert.strictEqual(err, error);
          assert.strictEqual(messageId, FAKE_IDS[1]);
          callbackCalls += 1;
        },
        function(err, messageId) {
          assert.strictEqual(err, error);
          assert.strictEqual(messageId, undefined);
          assert.strictEqual(callbackCalls, 2);
          done();
        }
      ];

      TOPIC.request = function(config, callback) {
        callback(error, { messageIds: FAKE_IDS });
      };

      publisher.publish_();
    });
  });

  describe('queue_', function() {
    var DATA = new Buffer('hello');
    var ATTRS = { a: 'a' };

    it('should add the data and attrs to the inventory', function() {
      publisher.queue_(DATA, ATTRS, fakeUtil.noop);

      assert.deepEqual(publisher.inventory_.queued, [{
        data: DATA,
        attributes: ATTRS
      }]);
    });

    it('should update the inventory size', function() {
      publisher.queue_(DATA, ATTRS, fakeUtil.noop);

      assert.strictEqual(publisher.inventory_.bytes, DATA.length);
    });

    it('should capture the callback', function() {
      publisher.queue_(DATA, ATTRS, fakeUtil.noop);

      assert.deepEqual(publisher.inventory_.callbacks, [fakeUtil.noop]);
    });
  });
});
