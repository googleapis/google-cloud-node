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

/*global describe, it, beforeEach, before, after */

'use strict';

var assert = require('assert');
var mockery = require('mockery');
var request = require('request');
var Subscription = require('../../lib/pubsub/subscription.js');
var Topic = require('../../lib/pubsub/topic.js');

var request_Cached = request;
var request_Override;

function fakeRequest() {
  var args = [].slice.apply(arguments);
  var results = (request_Override || request_Cached).apply(null, args);
  return results;
}

describe('PubSub', function() {
  var PubSub;
  var PROJECT_ID = 'test-project';
  var pubsub;

  before(function() {
    mockery.registerMock('./subscription.js', Subscription);
    mockery.registerMock('./topic.js', Topic);
    mockery.registerMock('request', fakeRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    PubSub = require('../../lib/pubsub');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    request_Override = null;
    pubsub = new PubSub({ projectId: PROJECT_ID });
    pubsub.makeReq_ = function(method, path, q, body, callback) {
      callback();
    };
  });

  describe('getTopics', function() {
    beforeEach(function() {
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, { topics: [{ name: 'fake-topic' }] });
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getTopics({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getTopics(done);
    });

    it('should build the right request', function() {
      pubsub.makeReq_ = function(method, path) {
        assert.equal(method, 'GET');
        assert.equal(path, 'projects/' + PROJECT_ID + '/topics');
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
      var query = { pageSize: 1 };
      pubsub.getTopics(query, function(err, topics, nextQuery) {
        assert.ifError(err);
        assert.strictEqual(query.pageSize, nextQuery.pageSize);
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

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, resp);
      };
      pubsub.getTopics(function(err, topics, nextQuery, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });
  });

  describe('createTopic', function() {
    it('should create a topic', function() {
      var topicName = 'new-topic-name';
      pubsub.makeReq_ = function(method, path, q, body) {
        assert.equal(method, 'PUT');
        assert.equal(path, 'projects/' + PROJECT_ID + '/topics/' + topicName);
        assert.equal(body, null);
      };
      pubsub.createTopic(topicName, function() {});
    });

    it('should return a Topic object', function() {
      pubsub.createTopic('new-topic', function(err, topic) {
        assert.ifError(err);
        assert(topic instanceof Topic);
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, resp);
      };
      pubsub.createTopic('new-topic', function(err, topic, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
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
        callback(null, { subscriptions: [{ name: 'fake-subscription' }] });
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getSubscriptions({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getSubscriptions(done);
    });

    it('should pass the right parameters', function() {
      pubsub.makeReq_ = function(method, path, q) {
        assert.equal(method, 'GET');
        assert.equal(path, 'projects/' + PROJECT_ID + '/subscriptions');
        assert.equal(q.query, undefined);
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

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, resp);
      };
      pubsub.getSubscriptions(function(err, topics, nextQuery, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });
  });

  describe('makeReq_', function() {
    it('should pass network requests to the connection object', function(done) {
      var pubsub = new PubSub();

      pubsub.makeAuthorizedRequest_ = function() {
        done();
      };

      pubsub.makeReq_(null, null, null, null, assert.ifError);
    });
  });
});
