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

/*global describe, it */

'use strict';

var assert = require('assert');
var util = require('../../lib/common/util.js');
var Topic = require('../../lib/pubsub/topic.js');
var Subscription = require('../../lib/pubsub/subscription.js');

describe('PubSub/Topic', function() {
  function getTopic(config, makeReqOverride) {
    if (typeof config === 'string') {
      config = { name: config };
    }
    config.pubsub = {
      id: 'test-project',
      makeReq: makeReqOverride || util.noop
    };
    return new Topic(config);
  }

  it('should throw error if the topic could not be created', function(done) {
    function makeReqOverride(method, path, qs, body, callback) {
      if (path === 'topics') {
        setTimeout(callback.bind(null, error), 1);
      }
    }
    var error = new Error('No way, Jose.');
    var topic = getTopic({
      name: 'topic-wont-work',
      autoCreate: true
    }, makeReqOverride);
    topic.on('error', function(err) {
      assert.equal(err, error);
      done();
    });
  });

  it('should attempt to get by default', function() {
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' && path === 'topics//topics/test-project/hi') {
        callback(null);
      }
    }
    var topic = getTopic({ name: 'hi' }, makeReqOverride);
    assert.strictEqual(topic.exists_, true);
  });

  it('should attempt to create with `autoCreate: true`', function() {
    var attemptedToCreate = false;
    var attemptedToGet = false;
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' && path === 'topics//topics/test-project/hi') {
        attemptedToGet = true;
        callback();
        return;
      }
      if (method === 'POST' && path === 'topics') {
        attemptedToCreate = true;
        callback();
        return;
      }
    }
    var config = {
      name: '/topics/test-project/hi',
      autoCreate: true
    };
    var topic = getTopic(config, makeReqOverride);
    assert.strictEqual(attemptedToCreate, true);
    assert.strictEqual(attemptedToGet, false);
    assert.strictEqual(topic.exists_, true);
  });

  it('should not attempt to create or get when specified not to', function() {
    var attemptedToCreate = false;
    var attemptedToGet = false;
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' && path === 'topics//topics/test-project/hi') {
        attemptedToGet = true;
        callback();
        return;
      }
      if (method === 'POST' && path === 'topics') {
        attemptedToCreate = true;
        callback();
        return;
      }
    }
    var config = {
      name: '/topics/test-project/hi',
      autoCreate: false
    };
    var topic = getTopic(config, makeReqOverride);
    assert.strictEqual(attemptedToCreate, false);
    assert.strictEqual(attemptedToGet, false);
    assert.strictEqual(topic.exists_, true);
  });

  describe('publishing', function() {
    var message = 'howdy';
    var messageBuffer = new Buffer(message).toString('base64');
    var messageRaw = {
      topic: 'lazy-confirm',
      message: {
        data: messageBuffer
      }
    };

    it('should convert simple messages into raw messages', function() {
      function makeReqOverride(method, path, qs, body, callback) {
        if (path === 'topics') {
          // confirm existence.
          callback(null);
          return;
        }
        if (path === 'topics/publish') {
          assert.equal(body.message.data, messageBuffer);
        }
      }
      var topic = getTopic('lazy-confirm', makeReqOverride);
      topic.on('error', assert.ifError);
      topic.publish(message, assert.ifError);
    });

    it('should accept raw messages', function() {
      function makeReqOverride(method, path, qs, body, callback) {
        if (path === 'topics') {
          // confirm existence.
          callback(null);
          return;
        }
        if (path === 'topics/publish') {
          assert.deepEqual(body, messageRaw);
        }
      }
      getTopic('lazy-confirm', makeReqOverride).publishRaw(messageRaw);
    });

    it('should publish a message once existence is confirmed', function() {
      function makeReqOverride(method, path, qs, body, callback) {
        if (method === 'GET' && path === 'topics//topics/test-project/hi') {
          // confirm existence.
          timesCheckedForExistence++;
          callback(null);
          return;
        }
        if (path === 'topics/publish') {
          timesAttemptedToPublish++;
          return;
        }
      }
      var timesCheckedForExistence = 0;
      var timesAttemptedToPublish = 0;
      var topic = getTopic('hi', makeReqOverride);
      topic.on('error', assert.ifError);

      topic.publish('Hi', assert.ifError);
      assert.equal(timesAttemptedToPublish, 1);
      topic.publishRaw(messageRaw, assert.ifError);
      assert.equal(timesAttemptedToPublish, 2);

      assert.equal(timesCheckedForExistence, 1);
    });

    it('should not try to publish a message if Topic does not exist',
        function(done) {
      function makeReqOverride(method, path, qs, body, callback) {
        if (method === 'GET' && path === 'topics//topics/test-project/hi') {
          // confirm non-existence.
          timesCheckedForExistence++;
          setTimeout(callback.bind(null, { code: 404 }), 1);
          return;
        }
        if (method === 'POST' && path === 'topics') {
          // deny creation of the topic.
          timesAttemptedToCreate++;
          callback(error);
          return;
        }
        if (path === 'topics/publish') {
          timesAttemptedToPublish++;
          return;
        }
      }
      var timesAttemptedToCreate = 0;
      var timesAttemptedToPublish = 0;
      var timesCheckedForExistence = 0;
      var error = new Error('No way, Jose.');
      var topic = getTopic('hi', makeReqOverride);
      topic.on('error', function() {/*ignore failed creation error.*/});
      topic.publish(message, function() {
        assert.equal(timesAttemptedToPublish, 0);
        assert.equal(timesCheckedForExistence, 1);
        assert.equal(timesAttemptedToCreate, 1);
      });
      topic.publishRaw(messageRaw, function() {
        assert.equal(timesAttemptedToPublish, 0);
        assert.equal(timesCheckedForExistence, 1);
        assert.equal(timesAttemptedToCreate, 1);
        done();
      });
    });
  });

  describe('subscribing', function() {
    var subNames = ['sub-name-1', 'sub-name-2', 'sub-name-3'];

    function createTopicAndRegisterSubscriptions(makeReqOverride) {
      var topic = getTopic('topic', makeReqOverride);
      subNames.forEach(function(subName) {
        topic.subscribe(subName);
      });
      return topic;
    }

    it('should create a new Subscription object', function() {
      assert(getTopic('topic').subscribe('sub-name') instanceof Subscription);
    });

    it('should return an individual subscription', function() {
      var subName = '/subscriptions/test-project/sub-name-1';
      function makeReqOverride(method, path, qs, body, callback) {
        if (path === 'topics' ||
            path === 'subscriptions' ||
            path === 'subscriptions/' + subName) {
          return callback();
        }
      }
      var topic = createTopicAndRegisterSubscriptions(makeReqOverride);
      topic.subscribe(subNames[0], function(err, sub) {
        assert.ifError(err);
        assert(sub instanceof Subscription);
        assert.equal(sub.name, subName);
      });
    });

    it('should return all subscriptions to the topic', function() {
      var topic = createTopicAndRegisterSubscriptions();
      topic.pubsub.getSubscriptions = function(query) {
        assert.equal(query.query,
            'pubsub.googleapis.com/topic in (/topics/test-project/topic)');
      };
      topic.getSubscriptions();
    });
  });
});
