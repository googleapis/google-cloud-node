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
var os = require('os');
var proxyquire = require('proxyquire');
var util = require('util');

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
        ackDeadline: 5000,
        maxConnections: 2,
        flowControl: {
          maxBytes: 5,
          maxMessages: 10
        }
      };

      var subscription = new Subscription(PUBSUB, SUB_NAME, options);

      assert.strictEqual(subscription.ackDeadline, options.ackDeadline);
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

      assert.deepEqual(subscription.flowControl, {
        maxBytes: os.freemem() * 0.2,
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

    describe('without connection pool', function() {
      it('should store the ack id in the inventory object', function(done) {
        subscription.setFlushTimeout_ = function() {
          assert.deepEqual(subscription.inventory_.ack, [MESSAGE.ackId]);
          done();
        };

        subscription.ack_(MESSAGE);
      });
    });

    describe('with connection pool', function() {
      beforeEach(function() {
        subscription.setFlushTimeout_ = function() {
          throw new Error('Should not be called.');
        };
      });

      it('should write to the connection it came in on', function(done) {
        var fakeConnection = {
          write: function(data) {
            assert.deepEqual(data, { ackIds: [MESSAGE.ackId] });
            done();
          }
        };

        subscription.connectionPool = {
          acquire: function(connectionId, callback) {
            assert.strictEqual(connectionId, MESSAGE.connectionId);
            callback(null, fakeConnection);
          }
        };

        subscription.ack_(MESSAGE);
      });

      it('should emit an error when unable to get a conn', function(done) {
        var error = new Error('err');

        subscription.connectionPool = {
          acquire: function(connectionId, callback) {
            callback(error);
          }
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.ack_(MESSAGE);
      });
    });
  });

  describe('breakLease_', function() {
    var MESSAGE = {
      ackId: 'abc',
      data: new Buffer('hello')
    };

    beforeEach(function() {
      subscription.inventory_.lease.push(MESSAGE.ackId);
      subscription.inventory_.bytes += MESSAGE.data.length;
    });

    it('should remove the message from the lease array', function() {
      assert.strictEqual(subscription.inventory_.lease.length, 1);
      assert.strictEqual(subscription.inventory_.bytes, MESSAGE.data.length);

      subscription.breakLease_(MESSAGE);

      assert.strictEqual(subscription.inventory_.lease.length, 0);
      assert.strictEqual(subscription.inventory_.bytes, 0);
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
    it('should set the userClosed_ flag', function() {
      subscription.close();

      assert.strictEqual(subscription.userClosed_, true);
    });

    it('should stop auto-leasing', function(done) {
      subscription.leaseTimeoutHandle_ = setTimeout(done, 1);
      subscription.close();

      assert.strictEqual(subscription.leaseTimeoutHandle_, null);
      setImmediate(done);
    });

    it('should stop any queued flushes', function(done) {
      subscription.flushTimeoutHandle_ = setTimeout(done, 1);
      subscription.close();

      assert.strictEqual(subscription.flushTimeoutHandle_, null);
      setImmediate(done);
    });

    it('should flush immediately', function(done) {
      subscription.flushQueues_ = done;
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

  describe('flushQueues_', function() {
    beforeEach(function() {
      subscription.inventory_.ack = ['abc', 'def'];
      subscription.inventory_.nack = ['ghi', 'jkl'];
    });

    it('should do nothing if theres nothing to ack/nack', function() {
      subscription.inventory_.ack = [];
      subscription.inventory_.nack = [];

      subscription.connectionPool = {
        acquire: function() {
          throw new Error('Should not be called.');
        }
      };

      subscription.flushQueues_();
    });

    describe('with connection pool', function() {
      var fakeConnection;

      beforeEach(function() {
        fakeConnection = {
          write: fakeUtil.noop
        };

        subscription.connectionPool = {
          acquire: function(callback) {
            callback(null, fakeConnection);
          }
        };
      });

      it('should emit any connection acquiring errors', function(done) {
        var error = new Error('err');

        subscription.connectionPool.acquire = function(callback) {
          callback(error);
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.flushQueues_();
      });

      it('should write the acks to the connection', function(done) {
        fakeConnection.write = function(reqOpts) {
          assert.deepEqual(reqOpts, {
            ackIds: ['abc', 'def']
          });
          done();
        };

        subscription.inventory_.nack = [];
        subscription.flushQueues_();
      });

      it('should write the nacks to the connection', function(done) {
        fakeConnection.write = function(reqOpts) {
          assert.deepEqual(reqOpts, {
            modifyDeadlineAckIds: ['ghi', 'jkl'],
            modifyDeadlineSeconds: [0, 0]
          });
          done();
        };

        subscription.inventory_.ack = [];
        subscription.flushQueues_();
      });

      it('should clear the inventory after writing', function() {
        subscription.flushQueues_();

        assert.strictEqual(subscription.inventory_.ack.length, 0);
        assert.strictEqual(subscription.inventory_.nack.length, 0);
      });
    });

    describe('without connection pool', function() {
      describe('acking', function() {
        beforeEach(function() {
          subscription.inventory_.nack = [];
        });

        it('should make the correct request', function(done) {
          subscription.request = function(config) {
            assert.strictEqual(config.client, 'subscriberClient');
            assert.strictEqual(config.method, 'acknowledge');
            assert.deepEqual(config.reqOpts, {
              subscription: subscription.name,
              ackIds: ['abc', 'def']
            });
            done();
          };

          subscription.flushQueues_();
        });

        it('should emit any request errors', function(done) {
          var error = new Error('err');

          subscription.request = function(config, callback) {
            callback(error);
          };

          subscription.on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          });

          subscription.flushQueues_();
        });

        it('should clear the inventory on success', function(done) {
          subscription.request = function(config, callback) {
            callback(null);
            assert.strictEqual(subscription.inventory_.ack.length, 0);
            done();
          };

          subscription.flushQueues_();
        });
      });

      describe('nacking', function() {
        beforeEach(function() {
          subscription.inventory_.ack = [];
        });

        it('should make the correct request', function(done) {
          subscription.request = function(config) {
            assert.strictEqual(config.client, 'subscriberClient');
            assert.strictEqual(config.method, 'modifyAckDeadline');
            assert.deepEqual(config.reqOpts, {
              subscription: subscription.name,
              ackIds: ['ghi', 'jkl'],
              ackDeadlineSeconds: 0
            });
            done();
          };

          subscription.flushQueues_();
        });

        it('should emit any request errors', function(done) {
          var error = new Error('err');

          subscription.request = function(config, callback) {
            callback(error);
          };

          subscription.on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          });

          subscription.flushQueues_();
        });

        it('should clear the inventory on success', function(done) {
          subscription.request = function(config, callback) {
            callback(null);
            assert.strictEqual(subscription.inventory_.nack.length, 0);
            done();
          };

          subscription.flushQueues_();
        });
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct request', function(done) {
      subscription.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'getSubscription');
        assert.deepEqual(config.reqOpts, { subscription: subscription.name });
        callback(); // the done fn
      };

      subscription.getMetadata(done);
    });

    it('should optionally accept gax options', function(done) {
      var gaxOpts = {};

      subscription.request = function(config, callback) {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        callback(); // the done fn
      };

      subscription.getMetadata(gaxOpts, done);
    });
  });

  describe('hasMaxMessages_', function() {
    it('should return true if the number of leases == maxMessages', function() {
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
      data: new Buffer('hello')
    };

    beforeEach(function() {
      subscription.setLeaseTimeout_ = fakeUtil.noop;
    });

    it('should add the ackId to the inventory', function() {
      subscription.leaseMessage_(MESSAGE);
      assert.deepEqual(subscription.inventory_.lease, [MESSAGE.ackId]);
    });

    it('should update the byte count', function() {
      assert.strictEqual(subscription.inventory_.bytes, 0);
      subscription.leaseMessage_(MESSAGE);
      assert.strictEqual(subscription.inventory_.bytes, MESSAGE.data.length);
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

    describe('without connection pool', function() {
      it('should store the ack id in the inventory object', function(done) {
        subscription.setFlushTimeout_ = function() {
          assert.deepEqual(subscription.inventory_.nack, [MESSAGE.ackId]);
          done();
        };

        subscription.nack_(MESSAGE);
      });
    });

    describe('with connection pool', function() {
      beforeEach(function() {
        subscription.setFlushTimeout_ = function() {
          throw new Error('Should not be called.');
        };
      });

      it('should write to the connection it came in on', function(done) {
        var fakeConnection = {
          write: function(data) {
            assert.deepEqual(data, {
              modifyDeadlineAckIds: [MESSAGE.ackId],
              modifyDeadlineSeconds: [0]
            });
            done();
          }
        };

        subscription.connectionPool = {
          acquire: function(connectionId, callback) {
            assert.strictEqual(connectionId, MESSAGE.connectionId);
            callback(null, fakeConnection);
          }
        };

        subscription.nack_(MESSAGE);
      });

      it('should emit an error when unable to get a conn', function(done) {
        var error = new Error('err');

        subscription.connectionPool = {
          acquire: function(connectionId, callback) {
            callback(error);
          }
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.nack_(MESSAGE);
      });
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
      var message = {};
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
      var message = {};
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

    it('should flush the queue when connected', function(done) {
      subscription.flushQueues_ = function() {
        assert.strictEqual(subscription.flushTimeoutHandle_, null);
        done();
      };

      subscription.flushTimeoutHandle_ = setTimeout(done, 1);
      subscription.openConnection_();
      subscription.connectionPool.emit('connected');
    });
  });

  describe('renewLeases_', function() {
    var fakeDeadline = 9999;

    beforeEach(function() {
      subscription.inventory_.lease = ['abc', 'def'];
      subscription.setLeaseTimeout_ = fakeUtil.noop;

      subscription.histogram.percentile = function() {
        return fakeDeadline;
      };
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
      subscription.connectionPool = {
        acquire: function() {
          throw new Error('Should not have been called.');
        }
      };

      subscription.inventory_.lease = [];
      subscription.renewLeases_();
    });

    describe('with connection pool', function() {
      var fakeConnection;

      beforeEach(function() {
        fakeConnection = {
          acquire: fakeUtil.noop
        };

        subscription.connectionPool = {
          acquire: function(callback) {
            callback(null, fakeConnection);
          }
        };
      });

      it('should emit any pool acquiring errors', function(done) {
        var error = new Error('err');

        subscription.connectionPool.acquire = function(callback) {
          callback(error);
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.renewLeases_();
      });

      it('should write to the connection', function(done) {
        fakeConnection.write = function(reqOpts) {
          assert.deepEqual(reqOpts, {
            modifyDeadlineAckIds: ['abc', 'def'],
            modifyDeadlineSeconds: Array(2).fill(fakeDeadline / 1000)
          });
          done();
        };

        subscription.renewLeases_();
      });
    });

    describe('without connection pool', function() {
      it('should make the correct request', function(done) {
        subscription.request = function(config, callback) {
          assert.strictEqual(config.client, 'subscriberClient');
          assert.strictEqual(config.method, 'modifyAckDeadline');
          assert.deepEqual(config.reqOpts, {
            subscription: subscription.name,
            ackIds: ['abc', 'def'],
            ackDeadlineSeconds: fakeDeadline / 1000
          });
          callback();
          done();
        };

        subscription.on('error', function(err) {
          done(err);
        });

        subscription.renewLeases_();
      });

      it('should emit any request errors', function(done) {
        var error = new Error('err');

        subscription.request = function(config, callback) {
          callback(error);
        };

        subscription.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        subscription.renewLeases_();
      });
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
  });

  describe('setMetadata', function() {
    var METADATA = {};

    it('should make the correct request', function(done) {
      subscription.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'updateSubscription');
        assert.deepEqual(config.reqOpts, {
          subscription: subscription.name,
          updateMask: METADATA
        });
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
