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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var PubSub = require('../../lib/pubsub/index.js');
var Subscription = require('../../lib/pubsub/subscription.js');
var Topic = require('../../lib/pubsub/topic.js');

describe('PubSub', function() {
  var PROJECT_ID = 'test-project';
  var pubsub;

  beforeEach(function() {
    pubsub = new PubSub({ projectId: PROJECT_ID });
    pubsub.makeReq_ = function(method, path, q, body, callback) {
      callback();
    };
  });

  describe('getTopics', function() {
    beforeEach(function() {
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, { topic: [{ name: 'fake-topic' }] });
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getTopics({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getTopics(done);
    });

    it('should build a project-wide query', function() {
      pubsub.makeReq_ = function(method, path, q) {
        var query =
            'cloud.googleapis.com/project in (/projects/' + PROJECT_ID + ')';
        assert.equal(method, 'GET');
        assert.equal(path, 'topics');
        assert.equal(q.query, query);
      };
      pubsub.getTopics(function() {});
    });

    it('should return Topic instances', function() {
      pubsub.getTopics(function(err, topics) {
        assert.ifError(err);
        assert(topics[0] instanceof Topic);
      });
    });

    it('should return a query if more results exist', function() {
      var token = 'next-page-token';
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, { nextPageToken: token });
      };
      var query = { maxResults: 1 };
      pubsub.getTopics(query, function(err, topics, nextQuery) {
        assert.ifError(err);
        assert.strictEqual(query.maxResults, nextQuery.maxResults);
        assert.equal(query.pageToken, token);
      });
    });

    it('should pass error if api returns an error', function() {
      var error = new Error('Error');
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(error);
      };
      pubsub.getTopics(function(err) {
        assert.equal(err, error);
      });
    });
  });

  describe('createTopic', function() {
    it('should create a topic', function() {
      var topicName = 'new-topic-name';
      pubsub.makeReq_ = function(method, path, q, body) {
        assert.equal(method, 'POST');
        assert.equal(path, 'topics');
        assert.equal(body.name, '/topics/' + PROJECT_ID + '/' + topicName);
      };
      pubsub.createTopic(topicName, function() {});
    });

    it('should return a Topic object', function() {
      pubsub.createTopic('new-topic', function(err, topic) {
        assert.ifError(err);
        assert(topic instanceof Topic);
      });
    });
  });

  describe('topic', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        pubsub.topic();
      }, /name must be specified/);
    });

    it('should return a Topic object', function() {
      assert(pubsub.topic('new-topic') instanceof Topic);
    });
  });

  describe('getSubscriptions', function() {
    beforeEach(function() {
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, { subscription: [{ name: 'fake-subscription' }] });
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getSubscriptions({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getSubscriptions(done);
    });

    it('should build a project-wide query', function() {
      pubsub.makeReq_ = function(method, path, q) {
        var query =
            'cloud.googleapis.com/project in (/projects/' + PROJECT_ID + ')';
        assert.equal(method, 'GET');
        assert.equal(path, 'subscriptions');
        assert.equal(q.query, query);
      };
      pubsub.getSubscriptions(function() {});
    });

    it('should return Subscription instances', function() {
      pubsub.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);
        assert(subscriptions[0] instanceof Subscription);
      });
    });

    it('should return a query if more results exist', function() {
      var token = 'next-page-token';
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, { nextPageToken: token });
      };
      var query = { maxResults: 1 };
      pubsub.getSubscriptions(query, function(err, subscriptions, nextQuery) {
        assert.ifError(err);
        assert.strictEqual(query.maxResults, nextQuery.maxResults);
        assert.equal(query.pageToken, token);
      });
    });

    it('should pass error if api returns an error', function() {
      var error = new Error('Error');
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(error);
      };
      pubsub.getSubscriptions(function(err) {
        assert.equal(err, error);
      });
    });
  });

  it('should pass network requests to the connection object', function(done) {
    var pubsub = new PubSub();
    pubsub.connection.req = done.bind(null, null);
    pubsub.makeReq_();
  });
});
