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
var PubSub = require('../../lib/pubsub/index.js');
var Topic = require('../../lib/pubsub/topic.js');

describe('PubSub', function() {
  function getPubSub(config, makeReqOverride) {
    if (typeof config === 'string' || !config) {
      config = { projectId: config || 'test-project' };
    }
    var pubsub = new PubSub(config);
    pubsub.makeReq = makeReqOverride || util.noop;
    return pubsub;
  }

  describe('topics', function() {
    var topicNames = ['topic-name-1', 'topic-name-2', 'topic-name-3'];

    function createPubSubAndRegisterTopics(makeReqOverride) {
      var pubsub = getPubSub('test-project', makeReqOverride);
      topicNames.forEach(pubsub.topic.bind(pubsub));
      return pubsub;
    }

    it('should accept a string', function() {
      var topicName = 'topic-name';
      var topic = getPubSub().topic(topicName);
      assert.equal(topic.name, '/topics/test-project/' + topicName);
    });

    it('should accept an object', function() {
      var topicName = 'topic-name';
      var topic = getPubSub().topic({ name: topicName });
      assert.equal(topic.name, '/topics/test-project/' + topicName);
    });

    it('should create a new Topic object', function() {
      assert(getPubSub().topic('topic-name') instanceof Topic);
    });

    it('should return an individual topic', function() {
      var topicName = '/topics/test-project/topic-name-1';
      function makeReqOverride(method, path, qs, body, callback) {
        if (path === 'topics' || path === 'topics/' + topicName) {
          return callback();
        }
      }
      var pubsub = createPubSubAndRegisterTopics(makeReqOverride);
      pubsub.getTopic(topicNames[0], function(err, topic) {
        assert.ifError(err);
        assert(topic instanceof Topic);
        assert.equal(topic.name, topicName);
      });
    });

    it('should return all topics', function() {
      function makeReqOverride(method, path, qs, body, callback) {
        if (path === 'topics') {
          if (method === 'POST') {
            return callback();
          }
          if (method === 'GET') {
            return callback(null, {
                topic: topicNames.map(function(topic) {
                  return { name: topic };
                })
              });
          }
        }
      }
      var pubsub = createPubSubAndRegisterTopics(makeReqOverride);
      pubsub.getTopics(function(err, subscriptions) {
        assert.ifError(err);
        assert.equal(subscriptions.length, topicNames.length);
        subscriptions.forEach(function(sub, index) {
          // ignore the fullName formatting
          assert.equal(sub.name.split('/')[3], topicNames[index]);
        });
      });
    });
  });

  it('should pass network requests to the connection object', function() {
    var called = false;
    var pubsub = new PubSub({ projectId: 'test-project' });
    pubsub.conn.req = function () {
      called = true;
    };
    pubsub.makeReq();
    assert.strictEqual(called, true);
  });
});
