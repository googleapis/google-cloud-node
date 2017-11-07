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
var common = require('@google-cloud/common');
var events = require('events');
var extend = require('extend');
var is = require('is');
var proxyquire = require('proxyquire');
var util = require('util');

var FAKE_FREE_MEM = 168222720;
var fakeOs = {
  freemem: function() {
    return FAKE_FREE_MEM;
  }
};

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Subscription') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['snapshot']);
  }
});

function FakeConnectionPool() {
  this.calledWith_ = [].slice.call(arguments);
  events.EventEmitter.call(this);
}

util.inherits(FakeConnectionPool, events.EventEmitter);

function FakeHistogram() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeIAM() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeSnapshot() {
  this.calledWith_ = [].slice.call(arguments);
}

describe('Subscription', function() {
  var Subscription;
  var subscription;

  var PROJECT_ID = 'test-project';
  var SUB_NAME = 'test-subscription';
  var SUB_FULL_NAME = 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME;

  var PUBSUB = {
    projectId: PROJECT_ID,
    request: fakeUtil.noop
  };

  before(function() {
    Subscription = proxyquire('../src/subscription.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      os: fakeOs,
      './connection-pool.js': FakeConnectionPool,
      './histogram.js': FakeHistogram,
      './iam.js': FakeIAM,
      './snapshot.js': FakeSnapshot
    });
  });

  beforeEach(function() {
    PUBSUB.request = fakeUtil.noop = function() {};
    subscription = new Subscription(PUBSUB, SUB_NAME);
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the pubsub object', function() {
      assert.strictEqual(subscription.pubsub, PUBSUB);
    });

    it('should localize the project id', function() {
      assert.strictEqual(subscription.projectId, PROJECT_ID);
    });

    it('should localize pubsub request method', function(done) {
      PUBSUB.request = function(callback) {
        callback(); // the done fn
      };

      var subscription = new Subscription(PUBSUB, SUB_NAME);
      subscription.request(done);
    });

    it('should create a histogram instance', function() {
      assert(subscription.histogram instanceof FakeHistogram);
    });

    it('should format the sub name', function() {
      var formattedName = 'a/b/c/d';
      var formatName = Subscription.formatName_;

      Subscription.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, SUB_NAME);

        Subscription.formatName_ = formatName;

        return formattedName;
      };

      var subscription = new Subscription(PUBSUB, SUB_NAME);
      assert.strictEqual(subscription.name, formattedName);
    });

    it('should honor configuration settings', function() {
      var options = {
        maxConnections: 2,
        flowControl: {
          maxBytes: 5,
          maxMessages: 10
        }
      };

      var subscription = new Subscription(PUBSUB, SUB_NAME, options);

      assert.strictEqual(subscription.maxConnections, options.maxConnections);

      assert.deepEqual(subscription.flowControl, {
        maxBytes: options.flowControl.maxBytes,
        maxMessages: options.flowControl.maxMessages
      });
    });

    it('should set sensible defaults', function() {
      assert.strictEqual(subscription.ackDeadline, 10000);
      assert.strictEqual(subscription.maxConnections, 5);
      assert.strictEqual(subscription.userClosed_, false);
      assert.strictEqual(subscription.messageListeners, 0);
      assert.strictEqual(subscription.isOpen, false);

      assert.deepEqual(subscription.flowControl, {
        maxBytes: FAKE_FREE_MEM * 0.2,
        maxMessages: Infinity
      });
    });

    it('should create an inventory object', function() {
      assert(is.object(subscription.inventory_));
      assert(is.array(subscription.inventory_.lease));
      assert(is.array(subscription.inventory_.ack));
      assert(is.array(subscription.inventory_.nack));
      assert.strictEqual(subscription.inventory_.bytes, 0);
    });

    it('should inherit from EventEmitter', function() {
      assert(subscription instanceof events.EventEmitter);
    });

    it('should make a create method if a topic is found', function(done) {
      var TOPIC_NAME = 'test-topic';

      PUBSUB.createSubscription = function(topic, subName, callback) {
        assert.strictEqual(topic, TOPIC_NAME);
        assert.strictEqual(subName, SUB_NAME);
        callback(); // the done function
      };

      var subscription = new Subscription(PUBSUB, SUB_NAME, {
        topic: TOPIC_NAME
      });

      subscription.create(done);
    });

    it('should create an IAM object', function() {
      assert(subscription.iam instanceof FakeIAM);

      var args = subscription.iam.calledWith_;

      assert.strictEqual(args[0], PUBSUB);
      assert.strictEqual(args[1], subscription.name);
    });

    it('should listen for events', function() {
      var called = false;
      var listenForEvents = Subscription.prototype.listenForEvents_;

      Subscription.prototype.listenForEvents_ = function() {
        Subscription.prototype.listenForEvents_ = listenForEvents;
        called = true;
      };

      new Subscription(PUBSUB, SUB_NAME);
      assert(called);
    });
  });

  describe('formatMetadata_', function() {
    it('should make a copy of the metadata', function() {
      var metadata = { a: 'a' };
      var formatted = Subscription.formatMetadata_(metadata);

      assert.deepEqual(metadata, formatted);
      assert.notStrictEqual(metadata, formatted);
    });

    it('should format messageRetentionDuration', function() {
      var threeDaysInSeconds = 3 * 24 * 60 * 60;

      var metadata = {
        messageRetentionDuration: threeDaysInSeconds
      };

      var formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.retainAckedMessages, true);
      assert.strictEqual(formatted.messageRetentionDuration.nanos, 0);

      assert.strictEqual(
        formatted.messageRetentionDuration.seconds,
        threeDaysInSeconds
      );
    });

    it('should format pushEndpoint', function() {
      var pushEndpoint = 'http://noop.com/push';

      var metadata = {
        pushEndpoint: pushEndpoint
      };

      var formatted = Subscription.formatMetadata_(metadata);

      assert.strictEqual(formatted.pushConfig.pushEndpoint, pushEndpoint);
      assert.strictEqual(formatted.pushEndpoint, undefined);
    });
  });

  describe('formatName_', function() {
    it('should format name', function() {
      var formattedName = Subscription.formatName_(PROJECT_ID, SUB_NAME);
      assert.equal(formattedName, SUB_FULL_NAME);
    });

    it('should format name when given a complete name', function() {
      var formattedName = Subscription.formatName_(PROJECT_ID, SUB_FULL_NAME);
      assert.equal(formattedName, SUB_FULL_NAME);
    });
  });

  describe('ack_', function() {
    var MESSAGE = {
      ackId: 'abc',
      received: 12345,
      connectionId: 'def'
    };

    beforeEach(function() {
      subscription.setFlushTimeout_ = fakeUtil.noop;
      subscription.breakLease_ = fakeUtil.noop;
      subscription.histogram.add = fakeUtil.noop;
      subscription.acknowledge_ = fakeUtil.noop;
    });

    it('should break the lease on the message', function(done) {
      subscription.breakLease_ = function(message) {
        assert.strictEqual(message, MESSAGE);
        done();
      };

      subscription.ack_(MESSAGE);
    });

    it('should add the time it took to ack to the histogram', function(done) {
      var fakeNow = 12381832;
      var now = global.Date.now;

      global.Date.now = function() {
        global.Date.now = now;
        return fakeNow;
      };

      subscription.histogram.add = function(time) {
        assert.strictEqual(time, fakeNow - MESSAGE.received);
        done();
      };

      subscription.ack_(MESSAGE);
    });

    it('should acknowledge if there is a connection', function(done) {
      subscription.isConnected_ = function() {
        return true;
      };

      subscription.acknowledge_ = function(ackId, connectionId) {
        assert.strictEqual(ackId, MESSAGE.ackId);
        assert.strictEqual(connectionId, MESSAGE.connectionId);
        done();
      };

      subscription.ack_(MESSAGE);
    });

    it('should queue the message to be acked if no connection', function(done) {
      subscription.isConnected_ = function() {
        return false;
      };

      subscription.setFlushTimeout_ = function() {
        assert(subscription.inventory_.ack.indexOf(MESSAGE.ackId) > -1);
        done();
      };

      subscription.ack_(MESSAGE);
    });
  });

  describe('acknowledge_', function() {
    var fakeAckIds = ['a', 'b', 'c'];

    describe('without streaming connection', function() {
      beforeEach(function() {
        subscription.isConnected_ = function() {
          return false;
        };
      });

      it('should make the correct request', function(done) {
        var fakePromisified = {
          call: function(context, config) {
            assert.strictEqual(context, subscription);
            assert.strictEqual(config.client, 'subscriberClient');
            assert.strictEqual(config.method, 'acknowledge');
            assert.strictEqual(config.reqOpts.subscription, subscription.name);
            assert.strictEqual(config.reqOpts.ackIds, fakeAckIds);

            setImmediate(done);

            return Promise.resolve();
          }
        };

        fakeUtil.promisify = function(fn) {
          assert.strictEqual(fn, subscription.request);
          return fakePromisified;
        };

        subscription.on('error', done);
        subscription.acknowledge_(fakeAckIds);
      });

      it('should emit any request errors', function(done) {
        var fakeError = new Error('err');
        var fakePromisified = {
          call: function() {
            return Promise.reject(fakeError);
          }
        };

        fakeUtil.promisify = function() {
          return fakePromisified;
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, fakeError);
          done();
        });

        subscription.acknowledge_(fakeAckIds);
      });
    });

    describe('with streaming connection', function() {
      var pool;

      beforeEach(function() {
        subscription.isConnected_ = function() {
          return true;
        };

        pool = subscription.connectionPool = {};
      });

      it('should send the correct request', function(done) {
        var fakeConnectionId = 'abc';
        var fakeConnection = {
          write: function(data) {
            assert.deepEqual(data, { ackIds: fakeAckIds });
            done();
          }
        };

        pool.acquire = function(connectionId, callback) {
          assert.strictEqual(connectionId, fakeConnectionId);
          callback(null, fakeConnection);
        };

        subscription.acknowledge_(fakeAckIds, fakeConnectionId);
      });

      it('should emit an error when unable to get a conn', function(done) {
        var error = new Error('err');

        pool.acquire = function(connectionId, callback) {
          callback(error);
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.acknowledge_(fakeAckIds);
      });
    });
  });

  describe('breakLease_', function() {
    var MESSAGE = {
      ackId: 'abc',
      data: new Buffer('hello'),
      length: 5
    };

    beforeEach(function() {
      subscription.inventory_.lease.push(MESSAGE.ackId);
      subscription.inventory_.bytes += MESSAGE.length;
    });

    it('should remove the message from the lease array', function() {
      assert.strictEqual(subscription.inventory_.lease.length, 1);
      assert.strictEqual(subscription.inventory_.bytes, MESSAGE.length);

      subscription.breakLease_(MESSAGE);

      assert.strictEqual(subscription.inventory_.lease.length, 0);
      assert.strictEqual(subscription.inventory_.bytes, 0);
    });

    it('should noop for unknown messages', function() {
      var message = {
        ackId: 'def',
        data: new Buffer('world'),
        length: 5
      };

      subscription.breakLease_(message);

      assert.strictEqual(subscription.inventory_.lease.length, 1);
      assert.strictEqual(subscription.inventory_.bytes, 5);
    });

    describe('with connection pool', function() {
      it('should resume receiving messages if paused', function(done) {
        subscription.connectionPool = {
          isPaused: true,
          resume: done
        };

        subscription.hasMaxMessages_ = function() {
          return false;
        };

        subscription.breakLease_(MESSAGE);
      });

      it('should not resume if it is not paused', function() {
        subscription.connectionPool = {
          isPaused: false,
          resume: function() {
            throw new Error('Should not be called.');
          }
        };

        subscription.hasMaxMessages_ = function() {
          return false;
        };

        subscription.breakLease_(MESSAGE);
      });

      it('should not resume if the max message limit is hit', function() {
        subscription.connectionPool = {
          isPaused: true,
          resume: function() {
            throw new Error('Should not be called.');
          }
        };

        subscription.hasMaxMessages_ = function() {
          return true;
        };

        subscription.breakLease_(MESSAGE);
      });
    });

    it('should quit auto-leasing if all leases are gone', function(done) {
      subscription.leaseTimeoutHandle_ = setTimeout(done, 1);
      subscription.breakLease_(MESSAGE);

      assert.strictEqual(subscription.leaseTimeoutHandle_, null);
      setImmediate(done);
    });

    it('should continue to auto-lease if leases exist', function(done) {
      subscription.inventory_.lease.push(MESSAGE.ackId);
      subscription.inventory_.lease.push('abcd');

      subscription.leaseTimeoutHandle_ = setTimeout(done, 1);
      subscription.breakLease_(MESSAGE);
    });
  });

  describe('close', function() {
    beforeEach(function() {
      subscription.flushQueues_ = function() {
        return Promise.resolve();
      };

      subscription.closeConnection_ = fakeUtil.noop;
    });

    it('should set the userClosed_ flag', function() {
      subscription.close();

      assert.strictEqual(subscription.userClosed_, true);
    });

    it('should dump the inventory', function() {
      subscription.inventory_ = {
        lease: [0, 1, 2],
        bytes: 123
      };

      subscription.close();

      assert.deepEqual(subscription.inventory_, {
        lease: [],
        bytes: 0
      });
    });

    it('should stop auto-leasing', function(done) {
      subscription.leaseTimeoutHandle_ = setTimeout(done, 1);
      subscription.close();

      assert.strictEqual(subscription.leaseTimeoutHandle_, null);
      setImmediate(done);
    });

    it('should flush immediately', function(done) {
      subscription.flushQueues_ = function() {
        setImmediate(done);
        return Promise.resolve();
      };

      subscription.close();
    });

    it('should call closeConnection_', function(done) {
      subscription.closeConnection_ = function(callback) {
        callback(); // the done fn
      };

      subscription.close(done);
    });
  });

  describe('closeConnection_', function() {
    afterEach(function() {
      fakeUtil.noop = function() {};
    });

    it('should set isOpen to false', function() {
      subscription.closeConnection_();
      assert.strictEqual(subscription.isOpen, false);
    });

    describe('with connection pool', function() {
      beforeEach(function() {
        subscription.connectionPool = {
          close: function(callback) {
            setImmediate(callback); // the done fn
          }
        };
      });

      it('should call close on the connection pool', function(done) {
        subscription.closeConnection_(done);
        assert.strictEqual(subscription.connectionPool, null);
      });

      it('should use a noop when callback is absent', function(done) {
        fakeUtil.noop = done;
        subscription.closeConnection_();
        assert.strictEqual(subscription.connectionPool, null);
      });
    });

    describe('without connection pool', function() {
      beforeEach(function() {
        subscription.connectionPool = null;
      });

      it('should exec the callback if one is passed in', function(done) {
        subscription.closeConnection_(done);
      });

      it('should optionally accept a callback', function() {
        subscription.closeConnection_();
      });
    });
  });

  describe('createSnapshot', function() {
    var SNAPSHOT_NAME = 'test-snapshot';

    beforeEach(function() {
      subscription.snapshot = function(name) {
        return {
          name: name
        };
      };
    });

    it('should throw an error if a snapshot name is not found', function() {
      assert.throws(function() {
        subscription.createSnapshot();
      }, /A name is required to create a snapshot\./);
    });

    it('should make the correct request', function(done) {
      subscription.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'createSnapshot');
        assert.deepEqual(config.reqOpts, {
          name: SNAPSHOT_NAME,
          subscription: subscription.name
        });
        done();
      };

      subscription.createSnapshot(SNAPSHOT_NAME, assert.ifError);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.createSnapshot(SNAPSHOT_NAME, gaxOpts, assert.ifError);
    });

    it('should pass back any errors to the callback', function(done) {
      var error = new Error('err');
      var apiResponse = {};

      subscription.request = function(config, callback) {
        callback(error, apiResponse);
      };

      subscription.createSnapshot(SNAPSHOT_NAME, function(err, snapshot, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(snapshot, null);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });

    it('should return a snapshot object with metadata', function(done) {
      var apiResponse = {};
      var fakeSnapshot = {};

      subscription.snapshot = function() {
        return fakeSnapshot;
      };

      subscription.request = function(config, callback) {
        callback(null, apiResponse);
      };

      subscription.createSnapshot(SNAPSHOT_NAME, function(err, snapshot, resp) {
        assert.ifError(err);
        assert.strictEqual(snapshot, fakeSnapshot);
        assert.strictEqual(snapshot.metadata, apiResponse);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should make the correct request', function(done) {
      subscription.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'deleteSubscription');
        assert.deepEqual(config.reqOpts, { subscription: subscription.name });
        done();
      };

      subscription.delete(assert.ifError);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.delete(gaxOpts, assert.ifError);
    });

    describe('success', function() {
      var apiResponse = {};

      beforeEach(function() {
        subscription.request = function(config, callback) {
          callback(null, apiResponse);
        };
      });

      it('should optionally accept a callback', function(done) {
        fakeUtil.noop = function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, apiResponse);
          done();
        };

        subscription.delete();
      });

      it('should return the api response', function(done) {
        subscription.delete(function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should remove all message listeners', function(done) {
        var called = false;

        subscription.removeAllListeners = function() {
          called = true;
        };

        subscription.delete(function(err) {
          assert.ifError(err);
          assert(called);
          done();
        });
      });

      it('should close the subscription', function(done) {
        var called = false;

        subscription.close = function() {
          called = true;
        };

        subscription.delete(function(err) {
          assert.ifError(err);
          assert(called);
          done();
        });
      });
    });

    describe('error', function() {
      var error = new Error('err');

      beforeEach(function() {
        subscription.request = function(config, callback) {
          callback(error);
        };
      });

      it('should return the error to the callback', function(done) {
        subscription.delete(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should not remove all the listeners', function(done) {
        subscription.removeAllListeners = function() {
          done(new Error('Should not be called.'));
        };

        subscription.delete(function() {
          done();
        });
      });

      it('should not close the subscription', function(done) {
        subscription.close = function() {
          done(new Error('Should not be called.'));
        };

        subscription.delete(function() {
          done();
        });
      });
    });
  });

  describe('exists', function() {
    it('should return true if it finds metadata', function(done) {
      subscription.getMetadata = function(callback) {
        callback(null, {});
      };

      subscription.exists(function(err, exists) {
        assert.ifError(err);
        assert(exists);
        done();
      });
    });

    it('should return false if a not found error occurs', function(done) {
      subscription.getMetadata = function(callback) {
        callback({ code: 5 });
      };

      subscription.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should pass back any other type of error', function(done) {
      var error = { code: 4 };

      subscription.getMetadata = function(callback) {
        callback(error);
      };

      subscription.exists(function(err, exists) {
        assert.strictEqual(err, error);
        assert.strictEqual(exists, undefined);
        done();
      });
    });
  });

  describe('flushQueues_', function() {
    it('should cancel any pending flushes', function() {
      var fakeHandle = 'abc';
      var cleared = false;

      var _clearTimeout = global.clearTimeout;

      global.clearTimeout = function(handle) {
        assert.strictEqual(handle, fakeHandle);
        cleared = true;
      };

      subscription.flushTimeoutHandle_ = fakeHandle;
      subscription.flushQueues_();

      assert.strictEqual(subscription.flushTimeoutHandle_, null);
      assert.strictEqual(cleared, true);

      global.clearTimeout = _clearTimeout;
    });

    it('should do nothing if theres nothing to ack/nack', function() {
      subscription.acknowledge_ = subscription.modifyAckDeadline_ = function() {
        throw new Error('Should not be called.');
      };

      return subscription.flushQueues_();
    });

    it('should send any pending acks', function() {
      var fakeAckIds = subscription.inventory_.ack = ['abc', 'def'];

      subscription.acknowledge_ = function(ackIds) {
        assert.strictEqual(ackIds, fakeAckIds);
        return Promise.resolve();
      };

      return subscription.flushQueues_().then(function() {
        assert.strictEqual(subscription.inventory_.ack.length, 0);
      });
    });

    it('should send any pending nacks', function() {
      var fakeAckIds = subscription.inventory_.nack = ['ghi', 'jkl'];

      subscription.modifyAckDeadline_ = function(ackIds, deadline) {
        assert.strictEqual(ackIds, fakeAckIds);
        assert.strictEqual(deadline, 0);
        return Promise.resolve();
      };

      return subscription.flushQueues_().then(function() {
        assert.strictEqual(subscription.inventory_.nack.length, 0);
      });
    });
  });

  describe('get', function() {
    beforeEach(function() {
      subscription.create = fakeUtil.noop;
    });

    it('should delete the autoCreate option', function(done) {
      var options = {
        autoCreate: true,
        a: 'a'
      };

      subscription.getMetadata = function(gaxOpts) {
        assert.strictEqual(gaxOpts, options);
        assert.strictEqual(gaxOpts.autoCreate, undefined);
        done();
      };

      subscription.get(options, assert.ifError);
    });

    describe('success', function() {
      var fakeMetadata = {};

      beforeEach(function() {
        subscription.getMetadata = function(gaxOpts, callback) {
          callback(null, fakeMetadata);
        };
      });

      it('should call through to getMetadata', function(done) {
        subscription.get(function(err, sub, resp) {
          assert.ifError(err);
          assert.strictEqual(sub, subscription);
          assert.strictEqual(resp, fakeMetadata);
          done();
        });
      });

      it('should optionally accept options', function(done) {
        var options = {};

        subscription.getMetadata = function(gaxOpts, callback) {
          assert.strictEqual(gaxOpts, options);
          callback(); // the done fn
        };

        subscription.get(options, done);
      });
    });

    describe('error', function() {
      it('should pass back errors when not auto-creating', function(done) {
        var error = { code: 4 };
        var apiResponse = {};

        subscription.getMetadata = function(gaxOpts, callback) {
          callback(error, apiResponse);
        };

        subscription.get(function(err, sub, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should pass back 404 errors if autoCreate is false', function(done) {
        var error = { code: 5 };
        var apiResponse = {};

        subscription.getMetadata = function(gaxOpts, callback) {
          callback(error, apiResponse);
        };

        subscription.get(function(err, sub, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should pass back 404 errors if create doesnt exist', function(done) {
        var error = { code: 5 };
        var apiResponse = {};

        subscription.getMetadata = function(gaxOpts, callback) {
          callback(error, apiResponse);
        };

        delete subscription.create;

        subscription.get(function(err, sub, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should create the sub if 404 + autoCreate is true', function(done) {
        var error = { code: 5 };
        var apiResponse = {};

        var fakeOptions = {
          autoCreate: true
        };

        subscription.getMetadata = function(gaxOpts, callback) {
          callback(error, apiResponse);
        };

        subscription.create = function(options, callback) {
          assert.strictEqual(options, fakeOptions);
          callback(); // the done fn
        };

        subscription.get(fakeOptions, done);
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct request', function(done) {
      subscription.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'getSubscription');
        assert.deepEqual(config.reqOpts, { subscription: subscription.name });
        done();
      };

      subscription.getMetadata(assert.ifError);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      subscription.getMetadata(gaxOpts, assert.ifError);
    });

    it('should pass back any errors that occur', function(done) {
      var error = new Error('err');
      var apiResponse = {};

      subscription.request = function(config, callback) {
        callback(error, apiResponse);
      };

      subscription.getMetadata(function(err, metadata) {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, apiResponse);
        done();
      });
    });

    it('should set the metadata if no error occurs', function(done) {
      var apiResponse = {};

      subscription.request = function(config, callback) {
        callback(null, apiResponse);
      };

      subscription.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata, apiResponse);
        assert.strictEqual(subscription.metadata, apiResponse);
        done();
      });
    });
  });

  describe('isConnected_', function() {
    it('should return false if there is no pool', function() {
      subscription.connectionPool = null;
      assert.strictEqual(subscription.isConnected_(), false);
    });

    it('should return false if the pool says its connected', function() {
      subscription.connectionPool = {
        isConnected: function() {
          return false;
        }
      };

      assert.strictEqual(subscription.isConnected_(), false);
    });

    it('should return true if the pool says its connected', function() {
      subscription.connectionPool = {
        isConnected: function() {
          return true;
        }
      };

      assert.strictEqual(subscription.isConnected_(), true);
    });
  });

  describe('hasMaxMessages_', function() {
    it('should return true if the number of leases >= maxMessages', function() {
      subscription.inventory_.lease = ['a', 'b', 'c'];
      subscription.flowControl.maxMessages = 3;

      assert(subscription.hasMaxMessages_());
    });

    it('should return true if bytes == maxBytes', function() {
      subscription.inventory_.bytes = 1000;
      subscription.flowControl.maxBytes = 1000;

      assert(subscription.hasMaxMessages_());
    });

    it('should return false if neither condition is met', function() {
      subscription.inventory_.lease = ['a', 'b'];
      subscription.flowControl.maxMessages = 3;

      subscription.inventory_.bytes = 900;
      subscription.flowControl.maxBytes = 1000;

      assert.strictEqual(subscription.hasMaxMessages_(), false);
    });
  });

  describe('leaseMessage_', function() {
    var MESSAGE = {
      ackId: 'abc',
      connectionId: 'def',
      data: new Buffer('hello'),
      length: 5
    };

    beforeEach(function() {
      subscription.setLeaseTimeout_ = fakeUtil.noop;
      subscription.modifyAckDeadline_ = fakeUtil.noop;
    });

    it('should immediately modAck the message', function(done) {
      subscription.modifyAckDeadline_ = function(ackId, deadline, connId) {
        assert.strictEqual(ackId, MESSAGE.ackId);
        assert.strictEqual(deadline, subscription.ackDeadline / 1000);
        assert.strictEqual(connId, MESSAGE.connectionId);
        done();
      };

      subscription.leaseMessage_(MESSAGE);
    });

    it('should add the ackId to the inventory', function() {
      subscription.leaseMessage_(MESSAGE);
      assert.deepEqual(subscription.inventory_.lease, [MESSAGE.ackId]);
    });

    it('should update the byte count', function() {
      assert.strictEqual(subscription.inventory_.bytes, 0);
      subscription.leaseMessage_(MESSAGE);
      assert.strictEqual(subscription.inventory_.bytes, MESSAGE.length);
    });

    it('should begin auto-leasing', function(done) {
      subscription.setLeaseTimeout_ = done;
      subscription.leaseMessage_(MESSAGE);
    });

    it('should return the message', function() {
      var message = subscription.leaseMessage_(MESSAGE);
      assert.strictEqual(message, MESSAGE);
    });
  });

  describe('listenForEvents_', function() {
    beforeEach(function() {
      subscription.openConnection_ = fakeUtil.noop;
      subscription.closeConnection_ = fakeUtil.noop;
    });

    describe('on new listener', function() {
      it('should increment messageListeners', function() {
        assert.strictEqual(subscription.messageListeners, 0);
        subscription.on('message', fakeUtil.noop);
        assert.strictEqual(subscription.messageListeners, 1);
      });

      it('should ignore non-message events', function() {
        subscription.on('data', fakeUtil.noop);
        assert.strictEqual(subscription.messageListeners, 0);
      });

      it('should open a connection', function(done) {
        subscription.openConnection_ = done;
        subscription.on('message', fakeUtil.noop);
      });

      it('should set the userClosed_ flag to false', function() {
        subscription.userClosed_ = true;
        subscription.on('message', fakeUtil.noop);
        assert.strictEqual(subscription.userClosed_, false);
      });

      it('should not open a connection when one exists', function() {
        subscription.connectionPool = {};

        subscription.openConnection_ = function() {
          throw new Error('Should not be called.');
        };

        subscription.on('message', fakeUtil.noop);
      });
    });

    describe('on remove listener', function() {
      var noop = function() {};

      it('should decrement messageListeners', function() {
        subscription.on('message', fakeUtil.noop);
        subscription.on('message', noop);
        assert.strictEqual(subscription.messageListeners, 2);

        subscription.removeListener('message', noop);
        assert.strictEqual(subscription.messageListeners, 1);
      });

      it('should ignore non-message events', function() {
        subscription.on('message', fakeUtil.noop);
        subscription.on('message', noop);
        assert.strictEqual(subscription.messageListeners, 2);

        subscription.removeListener('data', noop);
        assert.strictEqual(subscription.messageListeners, 2);
      });

      it('should close the connection when no listeners', function(done) {
        subscription.closeConnection_ = done;

        subscription.on('message', noop);
        subscription.removeListener('message', noop);
      });
    });
  });

  describe('modifyAckDeadline_', function() {
    var fakeAckIds = ['a', 'b', 'c'];
    var fakeDeadline = 123;

    describe('without streaming connection', function() {
      beforeEach(function() {
        subscription.isConnected_ = function() {
          return false;
        };
      });

      it('should make the correct request', function(done) {
        var fakePromisified = {
          call: function(context, config) {
            assert.strictEqual(context, subscription);
            assert.strictEqual(config.client, 'subscriberClient');
            assert.strictEqual(config.method, 'modifyAckDeadline');
            assert.strictEqual(config.reqOpts.subscription, subscription.name);
            assert.strictEqual(config.reqOpts.ackDeadlineSeconds, fakeDeadline);
            assert.strictEqual(config.reqOpts.ackIds, fakeAckIds);

            setImmediate(done);

            return Promise.resolve();
          }
        };

        fakeUtil.promisify = function(fn) {
          assert.strictEqual(fn, subscription.request);
          return fakePromisified;
        };

        subscription.on('error', done);
        subscription.modifyAckDeadline_(fakeAckIds, fakeDeadline);
      });

      it('should emit any request errors', function(done) {
        var fakeError = new Error('err');
        var fakePromisified = {
          call: function() {
            return Promise.reject(fakeError);
          }
        };

        fakeUtil.promisify = function() {
          return fakePromisified;
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, fakeError);
          done();
        });

        subscription.modifyAckDeadline_(fakeAckIds, fakeDeadline);
      });
    });

    describe('with streaming connection', function() {
      var pool;

      beforeEach(function() {
        subscription.isConnected_ = function() {
          return true;
        };

        pool = subscription.connectionPool = {};
      });

      it('should send the correct request', function(done) {
        var expectedDeadlines = Array(fakeAckIds.length).fill(fakeDeadline);
        var fakeConnId = 'abc';
        var fakeConnection = {
          write: function(data) {
            assert.strictEqual(data.modifyDeadlineAckIds, fakeAckIds);
            assert.deepEqual(data.modifyDeadlineSeconds, expectedDeadlines);
            done();
          }
        };

        pool.acquire = function(connectionId, callback) {
          assert.strictEqual(connectionId, fakeConnId);
          callback(null, fakeConnection);
        };

        subscription.modifyAckDeadline_(fakeAckIds, fakeDeadline, fakeConnId);
      });

      it('should emit an error when unable to get a conn', function(done) {
        var error = new Error('err');
        var fakeConnId = 'abc';

        pool.acquire = function(connectionId, callback) {
          callback(error);
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.modifyAckDeadline_(fakeAckIds, fakeDeadline, fakeConnId);
      });
    });
  });

  describe('modifyPushConfig', function() {
    var fakeConfig = {};

    it('should make the correct request', function(done) {
      subscription.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'modifyPushConfig');
        assert.deepEqual(config.reqOpts, {
          subscription: subscription.name,
          pushConfig: fakeConfig
        });
        callback(); // the done fn
      };

      subscription.modifyPushConfig(fakeConfig, done);
    });

    it('should optionally accept gaxOpts', function(done) {
      var gaxOpts = {};

      subscription.request = function(config, callback) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        callback(); // the done fn
      };

      subscription.modifyPushConfig(fakeConfig, gaxOpts, done);
    });
  });

  describe('nack_', function() {
    var MESSAGE = {
      ackId: 'abc',
      connectionId: 'def'
    };

    beforeEach(function() {
      subscription.setFlushTimeout_ = fakeUtil.noop;
      subscription.breakLease_ = fakeUtil.noop;
    });

    it('should break the lease on the message', function(done) {
      subscription.breakLease_ = function(message) {
        assert.strictEqual(message, MESSAGE);
        done();
      };

      subscription.nack_(MESSAGE);
    });

    it('should nack if there is a connection', function(done) {
      subscription.isConnected_ = function() {
        return true;
      };

      subscription.modifyAckDeadline_ = function(ackId, deadline, connId) {
        assert.strictEqual(ackId, MESSAGE.ackId);
        assert.strictEqual(deadline, 0);
        assert.strictEqual(connId, MESSAGE.connectionId);
        done();
      };

      subscription.nack_(MESSAGE);
    });

    it('should queue the message to be nacked if no conn', function(done) {
      subscription.isConnected_ = function() {
        return false;
      };

      subscription.setFlushTimeout_ = function() {
        assert(subscription.inventory_.nack.indexOf(MESSAGE.ackId) > -1);
        done();
      };

      subscription.nack_(MESSAGE);
    });
  });

  describe('openConnection_', function() {
    it('should create a ConnectionPool instance', function() {
      subscription.openConnection_();
      assert(subscription.connectionPool instanceof FakeConnectionPool);

      var args = subscription.connectionPool.calledWith_;
      assert.strictEqual(args[0], subscription);
    });

    it('should emit pool errors', function(done) {
      var error = new Error('err');

      subscription.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      subscription.openConnection_();
      subscription.connectionPool.emit('error', error);
    });

    it('should set isOpen to true', function() {
      subscription.openConnection_();
      assert.strictEqual(subscription.isOpen, true);
    });

    it('should lease & emit messages from pool', function(done) {
      var message = {};
      var leasedMessage = {};

      subscription.leaseMessage_ = function(message_) {
        assert.strictEqual(message_, message);
        return leasedMessage;
      };

      subscription.on('message', function(message) {
        assert.strictEqual(message, leasedMessage);
        done();
      });

      subscription.openConnection_();
      subscription.connectionPool.emit('message', message);
    });

    it('should pause the pool if sub is at max messages', function(done) {
      var message = { nack: fakeUtil.noop };
      var leasedMessage = {};

      subscription.leaseMessage_ = function() {
        return leasedMessage;
      };

      subscription.hasMaxMessages_ = function() {
        return true;
      };

      subscription.openConnection_();
      subscription.connectionPool.isPaused = false;
      subscription.connectionPool.pause = done;
      subscription.connectionPool.emit('message', message);
    });

    it('should not re-pause the pool', function(done) {
      var message = { nack: fakeUtil.noop };
      var leasedMessage = {};

      subscription.leaseMessage_ = function() {
        return leasedMessage;
      };

      subscription.hasMaxMessages_ = function() {
        return true;
      };

      subscription.openConnection_();
      subscription.connectionPool.isPaused = true;

      subscription.connectionPool.pause = function() {
        done(new Error('Should not have been called.'));
      };

      subscription.connectionPool.emit('message', message);
      done();
    });

    it('should nack messages if over limit', function(done) {
      var message = { nack: done };
      var leasedMessage = {};

      subscription.leaseMessage_ = function() {
        return leasedMessage;
      };

      subscription.hasMaxMessages_ = function() {
        return true;
      };

      subscription.openConnection_();
      subscription.connectionPool.isPaused = true;
      subscription.connectionPool.emit('message', message);
    });

    it('should flush the queue when connected', function(done) {
      subscription.flushQueues_ = done;

      subscription.openConnection_();
      subscription.connectionPool.emit('connected');
    });
  });

  describe('renewLeases_', function() {
    beforeEach(function() {
      subscription.modifyAckDeadline_ = function() {
        return Promise.resolve();
      };
    });

    var fakeDeadline = 9999;
    var fakeAckIds = ['abc', 'def'];

    beforeEach(function() {
      subscription.inventory_.lease = fakeAckIds;
      subscription.setLeaseTimeout_ = fakeUtil.noop;

      subscription.histogram.percentile = function() {
        return fakeDeadline;
      };
    });

    it('should clean up the old timeout handle', function() {
      var fakeHandle = 123;
      var clearTimeoutCalled = false;
      var _clearTimeout = global.clearTimeout;

      global.clearTimeout = function(handle) {
        assert.strictEqual(handle, fakeHandle);
        clearTimeoutCalled = true;
      };

      subscription.leaseTimeoutHandle_ = fakeHandle;
      subscription.renewLeases_();

      assert.strictEqual(subscription.leaseTimeoutHandle_, null);
      assert.strictEqual(clearTimeoutCalled, true);

      global.clearTimeout = _clearTimeout;
    });

    it('should update the ackDeadline', function() {
      subscription.request = subscription.setLeaseTimeout_ = fakeUtil.noop;

      subscription.histogram.percentile = function(percent) {
        assert.strictEqual(percent, 99);
        return fakeDeadline;
      };

      subscription.renewLeases_();
      assert.strictEqual(subscription.ackDeadline, fakeDeadline);
    });

    it('should set the auto-lease timeout', function(done) {
      subscription.request = fakeUtil.noop;
      subscription.setLeaseTimeout_ = done;
      subscription.renewLeases_();
    });

    it('should not renew leases if inventory is empty', function() {
      subscription.modifyAckDeadline_ = function() {
        throw new Error('Should not have been called.');
      };

      subscription.inventory_.lease = [];
      subscription.renewLeases_();
    });

    it('should modAck the leased messages', function(done) {
      subscription.modifyAckDeadline_ = function(ackIds, deadline) {
        assert.deepEqual(ackIds, fakeAckIds);
        assert.strictEqual(deadline, subscription.ackDeadline / 1000);

        setImmediate(done);

        return Promise.resolve();
      };

      subscription.renewLeases_();
    });

    it('should re-set the lease timeout', function(done) {
      subscription.setLeaseTimeout_ = done;
      subscription.renewLeases_();
    });
  });

  describe('seek', function() {
    var FAKE_SNAPSHOT_NAME = 'a';
    var FAKE_FULL_SNAPSHOT_NAME = 'a/b/c/d';

    beforeEach(function() {
      FakeSnapshot.formatName_ = function() {
        return FAKE_FULL_SNAPSHOT_NAME;
      };
    });

    it('should throw if a name or date is not provided', function() {
      assert.throws(function() {
        subscription.seek();
      }, /Either a snapshot name or Date is needed to seek to\./);
    });

    it('should make the correct api request', function(done) {
      FakeSnapshot.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, FAKE_SNAPSHOT_NAME);
        return FAKE_FULL_SNAPSHOT_NAME;
      };

      subscription.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'seek');
        assert.deepEqual(config.reqOpts, {
          subscription: subscription.name,
          snapshot: FAKE_FULL_SNAPSHOT_NAME
        });
        callback(); // the done fn
      };

      subscription.seek(FAKE_SNAPSHOT_NAME, done);
    });

    it('should optionally accept a Date object', function(done) {
      var date = new Date();

      subscription.request = function(config, callback) {
        assert.strictEqual(config.reqOpts.time, date);
        callback(); // the done fn
      };

      subscription.seek(date, done);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config, callback) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        callback(); // the done fn
      };

      subscription.seek(FAKE_SNAPSHOT_NAME, gaxOpts, done);
    });
  });

  describe('setFlushTimeout_', function() {
    var fakeTimeoutHandle = 1234;
    var globalSetTimeout;

    before(function() {
      globalSetTimeout = global.setTimeout;
    });

    after(function() {
      global.setTimeout = globalSetTimeout;
    });

    it('should set a timeout to call flushQueues', function(done) {
      subscription.flushQueues_ = done;

      global.setTimeout = function(callback, duration) {
        assert.strictEqual(duration, 1000);
        setImmediate(callback); // the done fn
        return fakeTimeoutHandle;
      };

      subscription.setFlushTimeout_();
      assert.strictEqual(subscription.flushTimeoutHandle_, fakeTimeoutHandle);
    });

    it('should not set a timeout if one already exists', function() {
      subscription.flushQueues_ = function() {
        throw new Error('Should not be called.');
      };

      global.setTimeout = function() {
        throw new Error('Should not be called.');
      };

      subscription.flushTimeoutHandle_ = fakeTimeoutHandle;
      subscription.setFlushTimeout_();
    });
  });

  describe('setLeaseTimeout_', function() {
    var fakeTimeoutHandle = 1234;
    var fakeRandom = 2;

    var globalSetTimeout;
    var globalMathRandom;

    before(function() {
      globalSetTimeout = global.setTimeout;
      globalMathRandom = global.Math.random;
    });

    beforeEach(function() {
      subscription.isOpen = true;
    });

    after(function() {
      global.setTimeout = globalSetTimeout;
      global.Math.random = globalMathRandom;
    });

    it('should set a timeout to call renewLeases_', function(done) {
      var ackDeadline = subscription.ackDeadline = 1000;

      global.Math.random = function() {
        return fakeRandom;
      };

      global.setTimeout = function(callback, duration) {
        assert.strictEqual(duration, fakeRandom * ackDeadline * 0.9);
        setImmediate(callback); // the done fn
        return fakeTimeoutHandle;
      };

      subscription.renewLeases_ = done;
      subscription.setLeaseTimeout_();
      assert.strictEqual(subscription.leaseTimeoutHandle_, fakeTimeoutHandle);
    });

    it('should not set a timeout if one already exists', function() {
      subscription.renewLeases_ = function() {
        throw new Error('Should not be called.');
      };

      global.Math.random = function() {
        throw new Error('Should not be called.');
      };

      global.setTimeout = function() {
        throw new Error('Should not be called.');
      };

      subscription.leaseTimeoutHandle_ = fakeTimeoutHandle;
      subscription.setLeaseTimeout_();
    });

    it('should not set a timeout if the sub is closed', function() {
      subscription.renewLeases_ = function() {
        throw new Error('Should not be called.');
      };

      global.Math.random = function() {
        throw new Error('Should not be called.');
      };

      global.setTimeout = function() {
        throw new Error('Should not be called.');
      };

      subscription.isOpen = false;
      subscription.setLeaseTimeout_();
    });
  });

  describe('setMetadata', function() {
    var METADATA = {
      pushEndpoint: 'http://noop.com/push'
    };

    beforeEach(function() {
      Subscription.formatMetadata_ = function(metadata) {
        return extend({}, metadata);
      };
    });

    it('should make the correct request', function(done) {
      var formattedMetadata = {
        pushConfig: {
          pushEndpoint: METADATA.pushEndpoint
        }
      };

      var expectedBody = extend({
        name: SUB_FULL_NAME
      }, formattedMetadata);

      Subscription.formatMetadata_ = function(metadata) {
        assert.strictEqual(metadata, METADATA);
        return formattedMetadata;
      };

      subscription.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'updateSubscription');
        assert.deepEqual(config.reqOpts.subscription, expectedBody);
        assert.deepEqual(config.reqOpts.updateMask, { paths: ['push_config'] });
        callback(); // the done fn
      };

      subscription.setMetadata(METADATA, done);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config, callback) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        callback(); // the done fn
      };

      subscription.setMetadata(METADATA, gaxOpts, done);
    });
  });

  describe('snapshot', function() {
    var SNAPSHOT_NAME = 'a';

    it('should call through to pubsub.snapshot', function(done) {
      PUBSUB.snapshot = function(name) {
        assert.strictEqual(this, subscription);
        assert.strictEqual(name, SNAPSHOT_NAME);
        done();
      };

      subscription.snapshot(SNAPSHOT_NAME);
    });
  });
});
