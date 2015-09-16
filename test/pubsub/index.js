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

var arrify = require('arrify');
var assert = require('assert');
var mockery = require('mockery');
var request = require('request');
var extend = require('extend');
var util = require('../../lib/common/util');
var Topic = require('../../lib/pubsub/topic.js');

var SubscriptionCached = require('../../lib/pubsub/subscription.js');
var SubscriptionOverride;

function Subscription(a, b) {
  var OverrideFn = SubscriptionOverride || SubscriptionCached;
  return new OverrideFn(a, b);
}

var requestCached = request;
var requestOverride;
function fakeRequest() {
  return (requestOverride || requestCached).apply(null, arguments);
}
fakeRequest.defaults = function() {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  return fakeRequest;
};

var fakeUtil = extend({}, util);

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'PubSub') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'PubSub');
    assert.deepEqual(methods, ['getSubscriptions', 'getTopics']);
    extended = true;
  }
};

describe('PubSub', function() {
  var PubSub;
  var PROJECT_ID = 'test-project';
  var pubsub;

  before(function() {
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../common/util.js', fakeUtil);
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
    SubscriptionOverride = null;
    requestOverride = null;
    pubsub = new PubSub({ projectId: PROJECT_ID });
    pubsub.makeReq_ = function(method, path, q, body, callback) {
      callback();
    };
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      PubSub.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });
  });

  describe('getTopics', function() {
    var topicName = 'fake-topic';
    var apiResponse = { topics: [{ name: topicName }]};

    beforeEach(function() {
      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, apiResponse);
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

    it('should return Topic instances with metadata', function(done) {
      var topic = {};

      pubsub.topic = function(name) {
        assert.strictEqual(name, topicName);
        return topic;
      };

      pubsub.getTopics(function(err, topics) {
        assert.ifError(err);
        assert.strictEqual(topics[0], topic);
        assert.strictEqual(topics[0].metadata, apiResponse.topics[0]);
        done();
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

    it('should pass the correct arguments to the API', function() {
      pubsub.makeReq_ = function(method, path, query) {
        assert.equal(method, 'GET');
        assert.equal(path, 'projects/' + PROJECT_ID + '/subscriptions');
        assert.equal(query.query, undefined);
      };

      pubsub.getSubscriptions(assert.ifError);
    });

    describe('topics', function() {
      var TOPIC;
      var TOPIC_NAME = 'topic';
      var TOPIC_SUBCRIPTION_NAME =
        'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME + '/subscriptions';

      before(function() {
        TOPIC = new Topic(pubsub, TOPIC_NAME);
      });

      it('should subscribe to a topic by string', function(done) {
        pubsub.makeReq_ = function(method, path) {
          assert.equal(path, TOPIC_SUBCRIPTION_NAME);
          done();
        };

        pubsub.getSubscriptions({ topic: TOPIC_NAME }, assert.ifError);
      });

      it('should subscribe to a topic by Topic instance', function(done) {
        pubsub.makeReq_ = function(method, path) {
          assert.equal(path, TOPIC_SUBCRIPTION_NAME);
          done();
        };

        pubsub.getSubscriptions({ topic: TOPIC }, assert.ifError);
      });
    });

    it('should pass options to API request', function(done) {
      var opts = { pageSize: 10, pageToken: 'abc' };

      pubsub.makeReq_ = function(method, path, query) {
        assert.equal(query.pageSize, opts.pageSize);
        assert.equal(query.pageToken, opts.pageToken);
        done();
      };

      pubsub.getSubscriptions(opts, assert.ifError);
    });

    it('should pass error & response if api returns an error', function(done) {
      var error = new Error('Error');
      var resp = { error: true };

      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(error, resp);
      };

      pubsub.getSubscriptions(function(err, subs, nextQuery, apiResponse) {
        assert.equal(err, error);
        assert.deepEqual(apiResponse, resp);
        done();
      });
    });

    describe('returning Subscription instances', function() {
      it('should handle subscriptions.list response', function(done) {
        pubsub.getSubscriptions(function(err, subscriptions) {
          assert.ifError(err);
          assert(subscriptions[0] instanceof SubscriptionCached);
          done();
        });
      });

      it('should handle topics.subscriptions.list response', function(done) {
        var subName = 'sub-name';
        var subFullName =
          'projects/' + PROJECT_ID + '/subscriptions/' + subName;

        pubsub.makeReq_ = function(method, path, query, body, callback) {
          callback(null, { subscriptions: [subName] });
        };

        pubsub.getSubscriptions(function(err, subscriptions) {
          assert.ifError(err);
          assert(subscriptions[0] instanceof SubscriptionCached);
          assert.equal(subscriptions[0].name, subFullName);
          done();
        });
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

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };

      pubsub.makeReq_ = function(method, path, q, body, callback) {
        callback(null, resp);
      };

      pubsub.getSubscriptions(function(err, subs, nextQuery, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });
  });

  describe('subscribe', function() {
    var TOPIC_NAME = 'topic';
    var TOPIC = {
      name: 'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME
    };

    var SUB_NAME = 'subscription';
    var SUBSCRIPTION = {
      name: 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME
    };

    it('should throw if no Topic is provided', function() {
      assert.throws(function() {
        pubsub.subscribe();
      }, /A Topic is required.*/);
    });

    it('should throw if no sub name is provided', function() {
      assert.throws(function() {
        pubsub.subscribe('topic');
      }, /A subscription name is required.*/);
    });

    it('should not require configuration options', function(done) {
      pubsub.makeReq_ = function(method, path, qs, body, callback) {
        callback();
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, done);
    });

    it('should cretae a topic object from a string', function(done) {
      pubsub.topic = function(topicName) {
        assert.equal(topicName, TOPIC_NAME);
        done();
        return TOPIC;
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, assert.ifError);
    });

    it('should create a subscription object from a string', function(done) {
      var opts = {};

      pubsub.subscription = function(subName, options) {
        assert.equal(subName, SUB_NAME);
        assert.deepEqual(options, opts);
        done();
        return SUBSCRIPTION;
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, opts, assert.ifError);
    });

    it('should pass options to a created subscription object', function(done) {
      var opts = { a: 'b', c: 'd' };

      pubsub.subscription = function(subName, options) {
        assert.equal(subName, SUB_NAME);
        assert.deepEqual(options, opts);
        done();
        return SUBSCRIPTION;
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, opts, assert.ifError);
    });

    it('should send correct request', function(done) {
      pubsub.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PUT');
        assert.equal(path, SUBSCRIPTION.name);
        assert.equal(body.topic, TOPIC.name);
        done();
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, assert.ifError);
    });

    it('should re-use existing subscription if specified', function(done) {
      pubsub.subscription = function() {
        return SUBSCRIPTION;
      };

      pubsub.makeReq_ = function(method, path, query, body, callback) {
        callback({ code: 409 });
      };

      // Don't re-use an existing subscription (error if one exists).
      pubsub.subscribe(TOPIC_NAME, SUB_NAME, function(err) {
        assert.equal(err.code, 409);
      });

      // Re-use an existing subscription (ignore error if one exists).
      var opts = { reuseExisting: true };
      pubsub.subscribe(TOPIC_NAME, SUB_NAME, opts, function(err, sub) {
        assert.ifError(err);
        assert.deepEqual(sub, SUBSCRIPTION);

        done();
      });
    });

    it('should return an api error to the callback', function(done) {
      var error = new Error('Error.');

      pubsub.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return apiResponse to the callback', function(done) {
      var resp = { success: true };

      pubsub.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, function(err, sub, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should pass options to the api request', function(done) {
      var opts = { ackDeadlineSeconds: 90 };

      pubsub.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(body.ackDeadlineSeconds, opts.ackDeadlineSeconds);
        done();
      };

      pubsub.subscribe(TOPIC_NAME, SUB_NAME, opts, assert.ifError);
    });
  });

  describe('subscription', function() {
    var SUB_NAME = 'new-sub-name';
    var CONFIG = { autoAck: true, interval: 90 };

    it('should throw if no name is provided', function() {
      assert.throws(function() {
        pubsub.subscription();
      }, /The name of a subscription is required/);
    });

    it('should return a Subscription object', function() {
      SubscriptionOverride = function() {};
      var subscription = pubsub.subscription(SUB_NAME, {});
      assert(subscription instanceof SubscriptionOverride);
    });

    it('should honor settings', function(done) {
      SubscriptionOverride = function(pubsub, options) {
        assert.deepEqual(options, CONFIG);
        done();
      };
      pubsub.subscription(SUB_NAME, CONFIG);
    });

    it('should pass specified name to the Subscription', function(done) {
      SubscriptionOverride = function(pubsub, options) {
        assert.equal(options.name, SUB_NAME);
        done();
      };
      pubsub.subscription(SUB_NAME, {});
    });

    it('should not require options', function() {
      assert.doesNotThrow(function() {
        pubsub.subscription(SUB_NAME);
      });
    });
  });

  describe('makeReq_', function() {
    it('should pass network requests to the connection object', function(done) {
      var pubsub = new PubSub({ projectId: PROJECT_ID });

      pubsub.makeAuthenticatedRequest_ = function() {
        done();
      };

      pubsub.makeReq_(null, null, null, null, assert.ifError);
    });
  });
});
