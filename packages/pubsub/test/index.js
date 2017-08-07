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
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var v1 = require('../src/v1/index.js');

var SubscriptionCached = require('../src/subscription.js');
var SubscriptionOverride;

function Subscription(a, b, c) {
  var OverrideFn = SubscriptionOverride || SubscriptionCached;
  return new OverrideFn(a, b, c);
}

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'PubSub') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, [
      'request',
      'snapshot',
      'subscription',
      'topic'
    ]);
  }
});

function FakeSnapshot() {
  this.calledWith_ = arguments;
}

function FakeTopic() {
  this.calledWith_ = arguments;
}

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'PubSub') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'PubSub');
    assert.deepEqual(methods, [
      'getSnapshots',
      'getSubscriptions',
      'getTopics'
    ]);

    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
  }
};

var googleAutoAuthOverride;
function fakeGoogleAutoAuth() {
  return (googleAutoAuthOverride || util.noop).apply(null, arguments);
}

var v1Override;
function fakeV1() {
  return (v1Override || util.noop).apply(null, arguments);
}

var GAX_CONFIG_PUBLISHER_OVERRIDE = {};
var GAX_CONFIG_SUBSCRIBER_OVERRIDE = {};

var GAX_CONFIG = {
  Publisher: {
    interfaces: {
      'google.pubsub.v1.Publisher': GAX_CONFIG_PUBLISHER_OVERRIDE
    }
  },
  Subscriber: {
    interfaces: {
      'google.pubsub.v1.Subscriber': GAX_CONFIG_SUBSCRIBER_OVERRIDE
    }
  }
};

describe('PubSub', function() {
  var PubSub;
  var PROJECT_ID = 'test-project';
  var pubsub;
  var OPTIONS = { projectId: PROJECT_ID };

  var PUBSUB_EMULATOR_HOST = process.env.PUBSUB_EMULATOR_HOST;

  before(function() {
    delete process.env.PUBSUB_EMULATOR_HOST;
    PubSub = proxyquire('../', {
      '@google-cloud/common': {
        paginator: fakePaginator,
        util: fakeUtil
      },
      'google-auto-auth': fakeGoogleAutoAuth,
      './snapshot.js': FakeSnapshot,
      './subscription.js': Subscription,
      './topic.js': FakeTopic,
      './v1': fakeV1,
      './v1/publisher_client_config.json': GAX_CONFIG.Publisher,
      './v1/subscriber_client_config.json': GAX_CONFIG.Subscriber
    });
  });

  after(function() {
    if (PUBSUB_EMULATOR_HOST) {
      process.env.PUBSUB_EMULATOR_HOST = PUBSUB_EMULATOR_HOST;
    }
  });

  beforeEach(function() {
    v1Override = null;
    googleAutoAuthOverride = null;
    SubscriptionOverride = null;
    pubsub = new PubSub(OPTIONS);
    pubsub.projectId = PROJECT_ID;
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(pubsub.getSnapshotsStream, 'getSnapshots');
      assert.strictEqual(pubsub.getSubscriptionsStream, 'getSubscriptions');
      assert.strictEqual(pubsub.getTopicsStream, 'getTopics');
    });

    it('should promisify all the things', function() {
      assert(promisified);
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

    it('should attempt to determine the service path and port', function() {
      var determineBaseUrl_ = PubSub.prototype.determineBaseUrl_;
      var called = false;

      PubSub.prototype.determineBaseUrl_ = function() {
        PubSub.prototype.determineBaseUrl_ = determineBaseUrl_;
        called = true;
      };

      new PubSub({});
      assert(called);
    });

    it('should initialize the API object', function() {
      assert.deepEqual(pubsub.api, {});
    });

    it('should cache a local google-auto-auth instance', function() {
      var fakeGoogleAutoAuthInstance = {};
      var options = {
        a: 'b',
        c: 'd'
      };

      googleAutoAuthOverride = function(options_) {
        assert.deepEqual(options_, extend({
          scopes: v1.ALL_SCOPES
        }, options));
        return fakeGoogleAutoAuthInstance;
      };

      var pubsub = new PubSub(options);
      assert.strictEqual(pubsub.auth, fakeGoogleAutoAuthInstance);
    });

    it('should localize the options provided', function() {
      assert.deepEqual(pubsub.options, extend({
        scopes: v1.ALL_SCOPES
      }, OPTIONS));
    });

    it('should set the projectId', function() {
      assert.strictEqual(pubsub.projectId, PROJECT_ID);
    });

    it('should default the projectId to the token', function() {
      var pubsub = new PubSub({});
      assert.strictEqual(pubsub.projectId, '{{projectId}}');
    });
  });


  describe('createSubscription', function() {
    var TOPIC_NAME = 'topic';
    var TOPIC = extend(new FakeTopic(), {
      name: 'projects/' + PROJECT_ID + '/topics/' + TOPIC_NAME
    });

    var SUB_NAME = 'subscription';
    var SUBSCRIPTION = {
      name: 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME
    };

    var apiResponse = {
      name: 'subscription-name'
    };

    it('should throw if no Topic is provided', function() {
      assert.throws(function() {
        pubsub.createSubscription();
      }, /A Topic is required for a new subscription\./);
    });

    it('should throw if no subscription name is provided', function() {
      assert.throws(function() {
        pubsub.createSubscription(TOPIC_NAME);
      }, /A subscription name is required./);
    });

    it('should not require configuration options', function(done) {
      pubsub.request = function(config, callback) {
        callback(null, apiResponse);
      };

      pubsub.createSubscription(TOPIC, SUB_NAME, done);
    });

    it('should allow undefined/optional configuration options', function(done) {
      pubsub.request = function(config, callback) {
        callback(null, apiResponse);
      };

      pubsub.createSubscription(TOPIC, SUB_NAME, undefined, done);
    });

    it('should create a Subscription', function(done) {
      var opts = { a: 'b', c: 'd' };

      pubsub.request = util.noop;

      pubsub.subscription = function(subName, options) {
        assert.strictEqual(subName, SUB_NAME);
        assert.deepEqual(options, opts);
        setImmediate(done);
        return SUBSCRIPTION;
      };

      pubsub.createSubscription(TOPIC, SUB_NAME, opts, assert.ifError);
    });

    it('should create a Topic object from a string', function(done) {
      pubsub.request = util.noop;

      pubsub.topic = function(topicName) {
        assert.strictEqual(topicName, TOPIC_NAME);
        setImmediate(done);
        return TOPIC;
      };

      pubsub.createSubscription(TOPIC_NAME, SUB_NAME, assert.ifError);
    });

    it('should send correct request', function(done) {
      var options = {
        gaxOpts: {}
      };

      pubsub.topic = function(topicName) {
        return {
          name: topicName
        };
      };

      pubsub.subscription = function(subName) {
        return {
          name: subName
        };
      };

      pubsub.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'createSubscription');
        assert.strictEqual(config.reqOpts.topic, TOPIC.name);
        assert.strictEqual(config.reqOpts.name, SUB_NAME);
        assert.strictEqual(config.gaxOpts, options.gaxOpts);
        done();
      };

      pubsub.createSubscription(TOPIC, SUB_NAME, options, assert.ifError);
    });

    it('should pass options to the api request', function(done) {
      var options = {
        ackDeadline: 90000,
        retainAckedMessages: true,
        pushEndpoint: 'https://domain/push',
      };

      var expectedBody = extend({
        topic: TOPIC.name,
        name: SUB_NAME
      }, options, {
        pushConfig: {
          pushEndpoint: options.pushEndpoint
        },
        ackDeadlineSeconds: options.ackDeadline / 1000
      });

      delete expectedBody.ackDeadline;
      delete expectedBody.pushEndpoint;

      pubsub.topic = function() {
        return {
          name: TOPIC_NAME
        };
      };

      pubsub.subscription = function() {
        return {
          name: SUB_NAME
        };
      };

      pubsub.request = function(config) {
        assert.notStrictEqual(config.reqOpts, options);
        assert.deepEqual(config.reqOpts, expectedBody);
        done();
      };

      pubsub.createSubscription(TOPIC, SUB_NAME, options, assert.ifError);
    });

    describe('message retention', function() {
      it('should accept a number', function(done) {
        var threeDaysInSeconds = 3 * 24 * 60 * 60;

        pubsub.request = function(config) {
          assert.strictEqual(config.reqOpts.retainAckedMessages, true);

          assert.strictEqual(
            config.reqOpts.messageRetentionDuration.seconds,
            threeDaysInSeconds
          );

          assert.strictEqual(config.reqOpts.messageRetentionDuration.nanos, 0);

          done();
        };

        pubsub.createSubscription(TOPIC_NAME, SUB_NAME, {
          messageRetentionDuration: threeDaysInSeconds
        }, assert.ifError);
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { name: SUB_NAME };

      beforeEach(function() {
        pubsub.request = function(config, callback) {
          callback(error, apiResponse);
        };
      });

      it('should re-use existing subscription', function(done) {
        var apiResponse = { code: 6 };

        pubsub.subscription = function() {
          return SUBSCRIPTION;
        };

        pubsub.request = function(config, callback) {
          callback({ code: 6 }, apiResponse);
        };

        pubsub.createSubscription(TOPIC_NAME, SUB_NAME, function(err, sub) {
          assert.ifError(err);
          assert.strictEqual(sub, SUBSCRIPTION);
          done();
        });
      });

      it('should return error & API response to the callback', function(done) {
        pubsub.request = function(config, callback) {
          callback(error, apiResponse);
        };

        function callback(err, sub, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        }

        pubsub.createSubscription(TOPIC_NAME, SUB_NAME, callback);
      });
    });

    describe('success', function() {
      var apiResponse = { name: SUB_NAME };

      beforeEach(function() {
        pubsub.request = function(config, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return Subscription & resp to the callback', function(done) {
        var subscription = {};

        pubsub.subscription = function() {
          return subscription;
        };

        pubsub.request = function(config, callback) {
          callback(null, apiResponse);
        };

        function callback(err, sub, resp) {
          assert.ifError(err);
          assert.strictEqual(sub, subscription);
          assert.strictEqual(resp, apiResponse);
          done();
        }

        pubsub.createSubscription(TOPIC_NAME, SUB_NAME, callback);
      });
    });
  });

  describe('createTopic', function() {
    it('should make the correct API request', function(done) {
      var topicName = 'new-topic-name';
      var formattedName = 'formatted-name';
      var gaxOpts = {};

      pubsub.topic = function(name) {
        assert.strictEqual(name, topicName);

        return {
          name: formattedName
        };
      };

      pubsub.request = function(config) {
        assert.strictEqual(config.client, 'publisherClient');
        assert.strictEqual(config.method, 'createTopic');
        assert.deepEqual(config.reqOpts, { name: formattedName });
        assert.deepEqual(config.gaxOpts, gaxOpts);
        done();
      };

      pubsub.createTopic(topicName, gaxOpts, function() {});
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        pubsub.request = function(config, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error & API response', function(done) {
        pubsub.createTopic('new-topic', function(err, topic, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(topic, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {};

      beforeEach(function() {
        pubsub.request = function(config, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return a Topic object', function(done) {
        var topicName = 'new-topic';
        var topicInstance = {};

        pubsub.topic = function(name) {
          assert.strictEqual(name, topicName);
          return topicInstance;
        };

        pubsub.createTopic(topicName, function(err, topic) {
          assert.ifError(err);
          assert.strictEqual(topic, topicInstance);
          done();
        });
      });

      it('should pass apiResponse to callback', function(done) {
        pubsub.createTopic('new-topic', function(err, topic, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('determineBaseUrl_', function() {
    function setHost(host) {
      process.env.PUBSUB_EMULATOR_HOST = host;
    }

    beforeEach(function() {
      delete process.env.PUBSUB_EMULATOR_HOST;
    });

    it('should do nothing if correct options are not set', function() {
      pubsub.determineBaseUrl_();

      assert.strictEqual(pubsub.options.servicePath, undefined);
      assert.strictEqual(pubsub.options.port, undefined);
    });

    it('should use the apiEndpoint option', function() {
      var defaultBaseUrl_ = 'defaulturl';
      var testingUrl = 'localhost:8085';

      setHost(defaultBaseUrl_);
      pubsub.options.apiEndpoint = testingUrl;
      pubsub.determineBaseUrl_();

      assert.strictEqual(pubsub.options.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, '8085');
    });

    it('should remove slashes from the baseUrl', function() {
      setHost('localhost:8080/');
      pubsub.determineBaseUrl_();
      assert.strictEqual(pubsub.options.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, '8080');

      setHost('localhost:8081//');
      pubsub.determineBaseUrl_();
      assert.strictEqual(pubsub.options.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, '8081');
    });

    it('should set the port to undefined if not set', function() {
      setHost('localhost');
      pubsub.determineBaseUrl_();
      assert.strictEqual(pubsub.options.servicePath, 'localhost');
      assert.strictEqual(pubsub.options.port, undefined);
    });

    describe('with PUBSUB_EMULATOR_HOST environment variable', function() {
      var PUBSUB_EMULATOR_HOST = 'localhost:9090';

      beforeEach(function() {
        setHost(PUBSUB_EMULATOR_HOST);
      });

      after(function() {
        delete process.env.PUBSUB_EMULATOR_HOST;
      });

      it('should use the PUBSUB_EMULATOR_HOST env var', function() {
        pubsub.determineBaseUrl_();
        assert.strictEqual(pubsub.options.servicePath, 'localhost');
        assert.strictEqual(pubsub.options.port, '9090');
      });
    });
  });

  describe('getSnapshots', function() {
    var SNAPSHOT_NAME = 'fake-snapshot';
    var apiResponse = { snapshots: [{ name: SNAPSHOT_NAME }]};

    beforeEach(function() {
      pubsub.request = function(config, callback) {
        callback(null, apiResponse.snapshots, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getSnapshots({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getSnapshots(done);
    });

    it('should build the right request', function(done) {
      var options = {
        a: 'b',
        c: 'd',
        gaxOpts: {
          e: 'f'
        },
        autoPaginate: false
      };

      var expectedOptions = extend({}, options, {
        project: 'projects/' + pubsub.projectId
      });

      var expectedGaxOpts = extend({
        autoPaginate: options.autoPaginate
      }, options.gaxOpts);

      delete expectedOptions.gaxOpts;
      delete expectedOptions.autoPaginate;

      pubsub.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'listSnapshots');
        assert.deepEqual(config.reqOpts, expectedOptions);
        assert.deepEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getSnapshots(options, assert.ifError);
    });

    it('should return Snapshot instances with metadata', function(done) {
      var snapshot = {};

      pubsub.snapshot = function(name) {
        assert.strictEqual(name, SNAPSHOT_NAME);
        return snapshot;
      };

      pubsub.getSnapshots(function(err, snapshots) {
        assert.ifError(err);
        assert.strictEqual(snapshots[0], snapshot);
        assert.strictEqual(snapshots[0].metadata, apiResponse.snapshots[0]);
        done();
      });
    });

    it('should pass back all parameters', function(done) {
      var err_ = new Error('abc');
      var snapshots_ = null;
      var nextQuery_ = {};
      var apiResponse_ = {};

      pubsub.request = function(config, callback) {
        callback(err_, snapshots_, nextQuery_, apiResponse_);
      };

      pubsub.getSnapshots(function(err, snapshots, nextQuery, apiResponse) {
        assert.strictEqual(err, err_);
        assert.deepEqual(snapshots, snapshots_);
        assert.strictEqual(nextQuery, nextQuery_);
        assert.strictEqual(apiResponse, apiResponse_);
        done();
      });
    });
  });

  describe('getSubscriptions', function() {
    var apiResponse = { subscriptions: [{ name: 'fake-subscription' }] };

    beforeEach(function() {
      pubsub.request = function(config, callback) {
        callback(null, apiResponse.subscriptions, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getSubscriptions({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getSubscriptions(done);
    });

    it('should pass the correct arguments to the API', function(done) {
      var options = {
        gaxOpts: {
          a: 'b'
        },
        autoPaginate: false
      };

      var expectedGaxOpts = extend({
        autoPaginate: options.autoPaginate
      }, options.gaxOpts);

      var project = 'projects/' + pubsub.projectId;

      pubsub.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'listSubscriptions');
        assert.deepEqual(config.reqOpts, { project: project });
        assert.deepEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getSubscriptions(options, assert.ifError);
    });

    it('should pass options to API request', function(done) {
      var opts = { pageSize: 10, pageToken: 'abc' };

      pubsub.request = function(config) {
        var reqOpts = config.reqOpts;
        assert.strictEqual(reqOpts.pageSize, opts.pageSize);
        assert.strictEqual(reqOpts.pageToken, opts.pageToken);
        done();
      };

      pubsub.getSubscriptions(opts, assert.ifError);
    });

    it('should return Subscription instances', function(done) {
      pubsub.getSubscriptions(function(err, subscriptions) {
        assert.ifError(err);
        assert(subscriptions[0] instanceof SubscriptionCached);
        done();
      });
    });

    it('should pass back all params', function(done) {
      var err_ = new Error('err');
      var subs_ = false;
      var nextQuery_ = {};
      var apiResponse_ = {};

      pubsub.request = function(config, callback) {
        callback(err_, subs_, nextQuery_, apiResponse_);
      };

      pubsub.getSubscriptions(function(err, subs, nextQuery, apiResponse) {
        assert.strictEqual(err, err_);
        assert.deepEqual(subs, subs_);
        assert.strictEqual(nextQuery, nextQuery_);
        assert.strictEqual(apiResponse, apiResponse_);
        done();
      });
    });

    describe('with topic', function() {
      var TOPIC_NAME = 'topic-name';

      it('should call topic.getSubscriptions', function(done) {
        var topic = new FakeTopic();

        var opts = {
          topic: topic
        };

        topic.getSubscriptions = function(options, callback) {
          assert.strictEqual(options, opts);
          callback(); // the done fn
        };

        pubsub.getSubscriptions(opts, done);
      });

      it('should create a topic instance from a name', function(done) {
        var opts = {
          topic: TOPIC_NAME
        };

        var fakeTopic = {
          getSubscriptions: function(options, callback) {
            assert.strictEqual(options, opts);
            callback(); // the done fn
          }
        };

        pubsub.topic = function(name) {
          assert.strictEqual(name, TOPIC_NAME);
          return fakeTopic;
        };

        pubsub.getSubscriptions(opts, done);
      });
    });
  });

  describe('getTopics', function() {
    var topicName = 'fake-topic';
    var apiResponse = { topics: [{ name: topicName }]};

    beforeEach(function() {
      pubsub.request = function(config, callback) {
        callback(null, apiResponse.topics, {}, apiResponse);
      };
    });

    it('should accept a query and a callback', function(done) {
      pubsub.getTopics({}, done);
    });

    it('should accept just a callback', function(done) {
      pubsub.getTopics(done);
    });

    it('should build the right request', function(done) {
      var options = {
        a: 'b',
        c: 'd',
        gaxOpts: {
          e: 'f'
        },
        autoPaginate: false
      };

      var expectedOptions = extend({}, options, {
        project: 'projects/' + pubsub.projectId
      });

      var expectedGaxOpts = extend({
        autoPaginate: options.autoPaginate
      }, options.gaxOpts);

      delete expectedOptions.gaxOpts;
      delete expectedOptions.autoPaginate;

      pubsub.request = function(config) {
        assert.strictEqual(config.client, 'publisherClient');
        assert.strictEqual(config.method, 'listTopics');
        assert.deepEqual(config.reqOpts, expectedOptions);
        assert.deepEqual(config.gaxOpts, expectedGaxOpts);
        done();
      };

      pubsub.getTopics(options, assert.ifError);
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

    it('should pass back all params', function(done) {
      var err_ = new Error('err');
      var topics_ = false;
      var nextQuery_ = {};
      var apiResponse_ = {};

      pubsub.request = function(config, callback) {
        callback(err_, topics_, nextQuery_, apiResponse_);
      };

      pubsub.getTopics(function(err, topics, nextQuery, apiResponse) {
        assert.strictEqual(err, err_);
        assert.deepEqual(topics, topics_);
        assert.strictEqual(nextQuery, nextQuery_);
        assert.strictEqual(apiResponse, apiResponse_);
        done();
      });
    });
  });

  describe('request', function() {
    var CONFIG = {
      client: 'fakeClient',
      method: 'fakeMethod',
      reqOpts: { a: 'a' },
      gaxOpts: {}
    };

    beforeEach(function() {
      pubsub.auth = {
        getProjectId: function(callback) {
          callback(null, PROJECT_ID);
        }
      };

      pubsub.api = {
        fakeClient: {
          fakeMethod: function(reqOpts, gaxOpts, callback) {
            callback(); // in most cases, the done fn
          }
        }
      };

      fakeUtil.replaceProjectIdToken = function(reqOpts) {
        return reqOpts;
      };
    });

    it('should get the project id', function(done) {
      pubsub.auth.getProjectId = function(callback) {
        assert.strictEqual(typeof callback, 'function');
        done();
      };

      pubsub.request(CONFIG, assert.ifError);
    });

    it('should return auth errors to the callback', function(done) {
      var error = new Error('err');

      pubsub.auth.getProjectId = function(callback) {
        callback(error);
      };

      pubsub.request(CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should replace the project id token on reqOpts', function(done) {
      fakeUtil.replaceProjectIdToken = function(reqOpts, projectId) {
        assert.deepEqual(reqOpts, CONFIG.reqOpts);
        assert.strictEqual(projectId, PROJECT_ID);
        done();
      };

      pubsub.request(CONFIG, assert.ifError);
    });

    it('should call the specified method', function(done) {
      pubsub.api.fakeClient.fakeMethod = function(reqOpts, gaxOpts, callback) {
        assert.deepEqual(reqOpts, CONFIG.reqOpts);
        assert.strictEqual(gaxOpts, CONFIG.gaxOpts);
        callback(); // the done function
      };

      pubsub.request(CONFIG, done);
    });

    it('should instantiate the client lazily', function(done) {
      var fakeClientInstance = {
        fakeMethod: function(reqOpts, gaxOpts, callback) {
          assert.strictEqual(pubsub.api.fakeClient, fakeClientInstance);
          callback(); // the done function
        }
      };

      v1Override = function(options) {
        assert.strictEqual(options, pubsub.options);

        return {
          fakeClient: function(options) {
            assert.strictEqual(options, pubsub.options);
            return fakeClientInstance;
          }
        };
      };

      delete pubsub.api.fakeClient;
      pubsub.request(CONFIG, done);
    });

    it('should return the rpc function when returnFn is set', function(done) {
      var config = extend({
        returnFn: true
      }, CONFIG);

      pubsub.request(config, function(err, requestFn) {
        assert.ifError(err);
        requestFn(done);
      });
    });

    it('should do nothing if sandbox env var is set', function(done) {
      global.GCLOUD_SANDBOX_ENV = true;
      pubsub.request(CONFIG, done); // should not fire done
      global.GCLOUD_SANDBOX_ENV = false;
      done();
    });
  });

  describe('snapshot', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        pubsub.snapshot();
      }, /You must supply a valid name for the snapshot\./);
    });

    it('should return a Snapshot object', function() {
      var SNAPSHOT_NAME = 'new-snapshot';
      var snapshot = pubsub.snapshot(SNAPSHOT_NAME);
      var args = snapshot.calledWith_;

      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(args[0], pubsub);
      assert.strictEqual(args[1], SNAPSHOT_NAME);
    });
  });

  describe('subscription', function() {
    var SUB_NAME = 'new-sub-name';
    var CONFIG = {};

    it('should return a Subscription object', function() {
      SubscriptionOverride = function() {};
      var subscription = pubsub.subscription(SUB_NAME, {});
      assert(subscription instanceof SubscriptionOverride);
    });

    it('should pass specified name to the Subscription', function(done) {
      SubscriptionOverride = function(pubsub, name) {
        assert.equal(name, SUB_NAME);
        done();
      };
      pubsub.subscription(SUB_NAME);
    });

    it('should honor settings', function(done) {
      SubscriptionOverride = function(pubsub, name, options) {
        assert.strictEqual(options, CONFIG);
        done();
      };
      pubsub.subscription(SUB_NAME, CONFIG);
    });

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        return pubsub.subscription();
      }, /A name must be specified for a subscription\./);
    });
  });

  describe('topic', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        pubsub.topic();
      }, /A name must be specified for a topic\./);
    });

    it('should return a Topic object', function() {
      assert(pubsub.topic('new-topic') instanceof FakeTopic);
    });
  });
});
