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
var events = require('events');
var extend = require('extend');
var proxyquire = require('proxyquire');
var uuid = require('uuid');

var fakeUtil = extend({}, common.util);
var fakeUuid = extend({}, uuid);

describe('ConnectionPool', function() {
  var ConnectionPool;
  var pool;

  var SUB_NAME = 'test-subscription';
  var SUBSCRIPTION = {
    name: SUB_NAME,
    request: fakeUtil.noop
  };

  before(function() {
    ConnectionPool = proxyquire('../src/connection-pool.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      uuid: fakeUuid
    });
  });

  beforeEach(function() {
    SUBSCRIPTION.request = fakeUtil.noop;
    pool = new ConnectionPool(SUBSCRIPTION);
  });

  describe('initialization', function() {
    it('should localize the subscription', function() {
      assert.strictEqual(pool.subscription, SUBSCRIPTION);
    });

    it('should create a map for the connections', function() {
      assert(pool.connections instanceof Map);
    });

    it('should set isPaused to false', function() {
      assert.strictEqual(pool.isPaused, false);
    });

    it('should set isOpen to false', function() {
      var open = ConnectionPool.prototype.open;

      ConnectionPool.prototype.open = function() {
        ConnectionPool.prototype.open = open;
      };

      var pool = new ConnectionPool(SUBSCRIPTION);
      assert.strictEqual(pool.isOpen, false);
    });

    it('should provide default settings', function() {
      assert.strictEqual(pool.settings.maxConnections, 5);
      assert.strictEqual(pool.settings.ackDeadline, 10000);
    });

    it('should respect user specified settings', function() {
      var options = {
        maxConnections: 10,
        ackDeadline: 100
      };

      var pool = new ConnectionPool(SUBSCRIPTION, options);

      assert.deepEqual(pool.settings, options);
    });

    it('should inherit from EventEmitter', function() {
      assert(pool instanceof events.EventEmitter);
    });

    it('should call open', function(done) {
      var open = ConnectionPool.prototype.open;

      ConnectionPool.prototype.open = function() {
        ConnectionPool.prototype.open = open;
        done();
      };

      new ConnectionPool(SUBSCRIPTION);
    });
  });

  describe('acquire', function() {
    it('should return an error if the pool is closed', function(done) {
      pool.isOpen = false;

      pool.acquire(function(err) {
        assert(err instanceof Error);
        assert.strictEqual(err.message, 'Connection pool is closed.');
        done();
      });
    });

    it('should return a specified connection', function(done) {
      var id = 'a';
      var fakeConnection = {};

      pool.connections.set(id, fakeConnection);
      pool.connections.set('b', {});

      pool.acquire(id, function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should return any conn when the specified is missing', function(done) {
      var fakeConnection = {};

      pool.connections.set('a', fakeConnection);

      pool.acquire('b', function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should return any connection when id is missing', function(done) {
      var fakeConnection = {};

      pool.connections.set('a', fakeConnection);

      pool.acquire(function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should listen for connected event if no conn is ready', function(done) {
      var fakeConnection = {};

      pool.acquire(function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });

      pool.emit('connected', fakeConnection);
    });
  });

  describe('close',function() {
    it('should set isOpen to false', function() {
      pool.close();
      assert.strictEqual(pool.isOpen, false);
    });

    it('should call end on all active connections', function() {
      function FakeConnection() {
        this.endCalled = false;
      }

      FakeConnection.prototype.end = function(cb) {
        this.endCalled = true;
        cb();
      };

      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.close();

      assert.strictEqual(a.endCalled, true);
      assert.strictEqual(b.endCalled, true);
    });

    it('should exec a callback when finished closing', function(done) {
      pool.close(done);
    });

    it('should use noop when callback is omitted', function(done) {
      fakeUtil.noop = function() {
        fakeUtil.noop = function() {};
        done();
      };

      pool.close();
    });
  });

  describe('createConnection', function() {
    it('should make the correct request', function(done) {
      pool.subscription.request = function(config) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'streamingPull');
        assert(config.returnFn);
        done();
      };

      pool.createConnection();
    });

    it('should emit any error that occurs', function(done) {
      var error = new Error('err');

      pool.subscription.request = function(config, callback) {
        callback(error);
      };

      pool.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      pool.createConnection();
    });

    describe('connection', function() {
      var fakeConnection;
      var fakeId;

      beforeEach(function() {
        fakeConnection = new events.EventEmitter();
        fakeConnection.write = fakeUtil.noop;

        fakeId = uuid.v4();

        fakeUuid.v4 = function() {
          return fakeId;
        };

        pool.subscription.request = function(config, callback) {
          callback(null, function() {
            return fakeConnection;
          });
        };
      });

      it('should create a connection', function(done) {
        fakeConnection.write = function(reqOpts) {
          assert.deepEqual(reqOpts, {
            subscription: SUB_NAME,
            streamAckDeadlineSeconds: pool.settings.ackDeadline / 1000
          });
        };

        pool.connections.set = function(id, connection) {
          assert.strictEqual(id, fakeId);
          assert.strictEqual(connection, fakeConnection);
          done();
        };

        pool.createConnection();
      });

      it('should emit errors to the pool', function(done) {
        var error = new Error('err');

        pool.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        pool.createConnection();
        fakeConnection.emit('error', error);
      });

      it('should emit messages', function(done) {
        var fakeResp = {};
        var fakeMessage = {};

        pool.createMessage = function(id, resp) {
          assert.strictEqual(id, fakeId);
          assert.strictEqual(resp, fakeResp);
          return fakeMessage;
        };

        pool.on('message', function(message) {
          assert.strictEqual(message, fakeMessage);
          done();
        });

        pool.createConnection();
        fakeConnection.emit('data', { receivedMessages: [fakeResp] });
      });

      it('should emit connected when ready', function(done) {
        pool.on('connected', function(connection) {
          assert.strictEqual(connection, fakeConnection);
          done();
        });

        pool.createConnection();
        fakeConnection.emit('metadata');
      });

      it('should create a new connection if the pool is open', function(done) {
        var deleted = false;

        pool.connections.delete = function(id) {
          assert.strictEqual(id, fakeId);
          deleted = true;
        };

        pool.createConnection();

        pool.createConnection = function() {
          assert(deleted);
          done();
        };

        pool.isOpen = true;
        fakeConnection.emit('close');
      });

      it('should not create a conn if the pool is closed', function(done) {
        pool.createConnection();

        pool.connections.delete = function() {
          done();
        };

        pool.createConnection = done; // should not be called

        pool.isOpen = false;
        fakeConnection.emit('close');
      });

      it('should pause the connection if the pool is paused', function(done) {
        fakeConnection.pause = done;
        pool.isPaused = true;
        pool.createConnection();
      });
    });
  });

  describe('createMessage', function() {
    var message;

    var CONNECTION_ID = 'abc';

    var PT = {
      seconds: 6838383,
      nanos: 20323838
    };

    var RESP = {
      ackId: 'def',
      message: {
        messageId: 'ghi',
        data: new Buffer('hello'),
        attributes: {
          a: 'a'
        },
        publishTime: PT
      }
    };

    beforeEach(function() {
      message = pool.createMessage(CONNECTION_ID, RESP);
    });

    it('should capture the connection id', function() {
      assert.strictEqual(message.connectionId, CONNECTION_ID);
    });

    it('should capture the message data', function() {
      var expectedPublishTime = new Date(
        parseInt(PT.seconds, 10) * 1000 + parseInt(PT.nanos, 10) / 1e6);
      var dateNowValue = Date.now();

      assert.strictEqual(message.ackId, RESP.ackId);
      assert.strictEqual(message.id, RESP.message.messageId);
      assert.strictEqual(message.data, RESP.message.data);
      assert.strictEqual(message.attributes, RESP.message.attributes);
      assert.deepEqual(message.publishTime, expectedPublishTime);
      assert.strictEqual(message.received, dateNowValue);
    });

    it('should create an ack method', function(done) {
      SUBSCRIPTION.ack_ = function(message_) {
        assert.strictEqual(message_, message);
        done();
      };

      message.ack();
    });

    it('should create a nack method', function(done) {
      SUBSCRIPTION.nack_ = function(message_) {
        assert.strictEqual(message_, message);
        done();
      };

      message.nack();
    });
  });

  describe('open', function() {
    it('should make the specified number of connections', function() {
      var connectionCount = 0;

      pool.createConnection = function() {
        connectionCount += 1;
      };

      pool.open();
      assert.strictEqual(pool.settings.maxConnections, connectionCount);
    });

    it('should set the isOpen flag to true', function() {
      pool.open();
      assert(pool.isOpen);
    });
  });

  describe('pause', function() {
    it('should set the isPaused flag to true', function() {
      pool.pause();
      assert(pool.isPaused);
    });

    it('should pause all the connections', function() {
      function FakeConnection() {
        this.isPaused = false;
      }

      FakeConnection.prototype.pause = function() {
        this.isPaused = true;
      };

      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.pause();

      assert(a.isPaused);
      assert(b.isPaused);
    });
  });

  describe('resume', function() {
    it('should set the isPaused flag to false', function() {
      pool.resume();
      assert.strictEqual(pool.isPaused, false);
    });

    it('should resume all the connections', function() {
      function FakeConnection() {
        this.isPaused = true;
      }

      FakeConnection.prototype.resume = function() {
        this.isPaused = false;
      };

      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.resume();

      assert.strictEqual(a.isPaused, false);
      assert.strictEqual(b.isPaused, false);
    });
  });
});
