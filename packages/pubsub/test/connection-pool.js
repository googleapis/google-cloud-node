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
var grpc = require('grpc');
var proxyquire = require('proxyquire');
var uuid = require('uuid');
var util = require('util');

var PKG = require('../package.json');
var v1 = require('../src/v1');

var fakeUtil = extend({}, common.util);
var fakeUuid = extend({}, uuid);
var fakeGrpc = extend({}, grpc);

var v1Override;
function fakeV1(options) {
  return (v1Override || v1)(options);
}

function FakeConnection() {
  this.isConnected = false;
  this.isPaused = false;
  this.ended = false;
  this.canceled = false;

  events.EventEmitter.call(this);
}

util.inherits(FakeConnection, events.EventEmitter);

FakeConnection.prototype.write = function() {};

FakeConnection.prototype.end = function() {
  this.ended = true;
};

FakeConnection.prototype.pause = function() {
  this.isPaused = true;
};

FakeConnection.prototype.resume = function() {
  this.isPaused = false;
};

FakeConnection.prototype.cancel = function() {
  this.canceled = true;
};

describe('ConnectionPool', function() {
  var ConnectionPool;
  var pool;

  var FAKE_PUBSUB_OPTIONS = {};
  var PROJECT_ID = 'grapce-spacheship-123';

  var PUBSUB = {
    projectId: PROJECT_ID,
    auth: {
      projectId: PROJECT_ID,
      getAuthClient: fakeUtil.noop
    },
    options: FAKE_PUBSUB_OPTIONS
  };

  var SUB_NAME = 'test-subscription';
  var SUBSCRIPTION = {
    projectId: PROJECT_ID,
    name: SUB_NAME,
    pubsub: PUBSUB,
    request: fakeUtil.noop
  };

  before(function() {
    ConnectionPool = proxyquire('../src/connection-pool.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      grpc: fakeGrpc,
      uuid: fakeUuid,
      './v1': fakeV1
    });
  });

  beforeEach(function() {
    SUBSCRIPTION.request = fakeUtil.noop;
    PUBSUB.auth.getAuthClient = fakeUtil.noop;

    pool = new ConnectionPool(SUBSCRIPTION);
    pool.queue.forEach(clearTimeout);
    pool.queue.length = 0;
  });

  afterEach(function() {
    if (pool.isOpen) {
      pool.close();
    }
  });

  describe('initialization', function() {
    it('should initialize internally used properties', function() {
      var open = ConnectionPool.prototype.open;
      ConnectionPool.prototype.open = fakeUtil.noop;

      var pool = new ConnectionPool(SUBSCRIPTION);

      assert.strictEqual(pool.subscription, SUBSCRIPTION);
      assert(pool.connections instanceof Map);
      assert.strictEqual(pool.isPaused, false);
      assert.strictEqual(pool.isOpen, false);
      assert.strictEqual(pool.isGettingChannelState, false);
      assert.strictEqual(pool.failedConnectionAttempts, 0);
      assert.strictEqual(pool.noConnectionsTime, 0);
      assert.strictEqual(pool.settings.maxConnections, 5);
      assert.strictEqual(pool.settings.ackDeadline, 10000);
      assert.deepEqual(pool.queue, []);

      ConnectionPool.prototype.open = open;
    });

    it('should create grpc metadata', function() {
      assert(pool.metadata_ instanceof grpc.Metadata);

      assert.deepEqual(pool.metadata_.get('x-goog-api-client'), [
        [
          'gl-node/' + process.versions.node,
          'gccl/' + PKG.version,
          'grpc/' + require('grpc/package.json').version
        ].join(' ')
      ]);
    });

    it('should respect user specified settings', function() {
      var options = {
        maxConnections: 10,
        ackDeadline: 100
      };

      var subscription = extend({}, SUBSCRIPTION, options);
      var subscriptionCopy = extend({}, subscription);
      var pool = new ConnectionPool(subscription);

      assert.deepEqual(pool.settings, options);
      assert.deepEqual(subscription, subscriptionCopy);
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
      var expectedErr = 'No connections available to make request.';

      pool.isOpen = false;

      pool.acquire(function(err) {
        assert(err instanceof Error);
        assert.strictEqual(err.message, expectedErr);
        done();
      });
    });

    it('should return a specified connection', function(done) {
      var id = 'a';
      var fakeConnection = new FakeConnection();

      pool.connections.set(id, fakeConnection);
      pool.connections.set('b', new FakeConnection());

      pool.acquire(id, function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should return any conn when the specified is missing', function(done) {
      var fakeConnection = new FakeConnection();

      pool.connections.set('a', fakeConnection);

      pool.acquire('b', function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should return any connection when id is missing', function(done) {
      var fakeConnection = new FakeConnection();

      pool.connections.set('a', fakeConnection);

      pool.acquire(function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });
    });

    it('should listen for connected event if no conn is ready', function(done) {
      var fakeConnection = new FakeConnection();

      pool.acquire(function(err, connection) {
        assert.ifError(err);
        assert.strictEqual(connection, fakeConnection);
        done();
      });

      pool.emit('connected', fakeConnection);
    });
  });

  describe('close',function() {
    it('should close the client', function(done) {
      pool.client = { close: done };
      pool.close();
    });

    it('should set isOpen to false', function() {
      pool.close();
      assert.strictEqual(pool.isOpen, false);
    });

    it('should set isGettingChannelState to false', function() {
      pool.isGettingChannelState = true;
      pool.close();

      assert.strictEqual(pool.isGettingChannelState, false);
    });

    it('should call end on all active connections', function() {
      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.close();

      assert.strictEqual(a.ended, true);
      assert.strictEqual(b.ended, true);
    });

    it('should clear the connections map', function(done) {
      pool.connections.clear = done;
      pool.close();
    });

    it('should clear any timeouts in the queue', function() {
      var _clearTimeout = global.clearTimeout;
      var clearCalls = 0;

      var fakeHandles = ['a', 'b', 'c', 'd'];

      global.clearTimeout = function(handle) {
        assert.strictEqual(handle, fakeHandles[clearCalls++]);
      };

      pool.queue = Array.from(fakeHandles);
      pool.close();

      assert.strictEqual(clearCalls, fakeHandles.length);
      assert.strictEqual(pool.queue.length, 0);

      global.clearTimeout = _clearTimeout;
    });

    it('should reset internally used props', function() {
      pool.failedConnectionAttempts = 100;
      pool.noConnectionsTime = Date.now();

      pool.close();

      assert.strictEqual(pool.failedConnectionAttempts, 0);
      assert.strictEqual(pool.noConnectionsTime, 0);
    });

    it('should remove event listeners', function() {
      pool
        .on('channel.ready', nope)
        .on('channel.error', nope)
        .on('newListener', nope);

      pool.close();

      assert.strictEqual(pool.listenerCount('channel.ready'), 0);
      assert.strictEqual(pool.listenerCount('channel.error'), 0);
      assert.strictEqual(pool.listenerCount('newListener'), 0);

      function nope() {
        throw new Error('Should not be called!');
      }
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
    var fakeClient;
    var fakeConnection;
    var fakeChannel;

    beforeEach(function() {
      fakeConnection = new FakeConnection();

      fakeChannel = {
        getConnectivityState: function() {
          return 2;
        }
      };

      fakeClient = {
        streamingPull: function() {
          return fakeConnection;
        },
        getChannel: function() {
          return fakeChannel;
        }
      };

      pool.getClient = function(callback) {
        callback(null, fakeClient);
      };
    });

    it('should make the correct request', function(done) {
      fakeClient.streamingPull = function(metadata) {
        assert.strictEqual(metadata, pool.metadata_);
        setImmediate(done);
        return fakeConnection;
      };

      pool.createConnection();
    });

    it('should emit any errors that occur when getting client', function(done) {
      var error = new Error('err');

      pool.getClient = function(callback) {
        callback(error);
      };

      pool.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      pool.createConnection();
    });

    describe('channel', function() {
      var channelReadyEvent = 'channel.ready';
      var channelErrorEvent = 'channel.error';

      describe('error', function() {
        it('should remove the channel ready event listener', function() {
          pool.createConnection();
          assert.strictEqual(pool.listenerCount(channelReadyEvent), 1);

          pool.emit(channelErrorEvent);
          assert.strictEqual(pool.listenerCount(channelReadyEvent), 0);
        });

        it('should cancel the connection', function() {
          pool.createConnection();
          pool.emit(channelErrorEvent);

          assert.strictEqual(fakeConnection.canceled, true);
        });
      });

      describe('success', function() {
        it('should remove the channel error event', function() {
          pool.createConnection();
          assert.strictEqual(pool.listenerCount(channelErrorEvent), 1);

          pool.emit(channelReadyEvent);
          assert.strictEqual(pool.listenerCount(channelErrorEvent), 0);
        });

        it('should set the isConnected flag to true', function() {
          pool.createConnection();
          pool.emit(channelReadyEvent);

          assert.strictEqual(fakeConnection.isConnected, true);
        });

        it('should reset internally used properties', function() {
          pool.noConnectionsTime = Date.now();
          pool.failedConnectionAttempts = 10;

          pool.createConnection();
          pool.emit(channelReadyEvent);

          assert.strictEqual(pool.noConnectionsTime, 0);
          assert.strictEqual(pool.failedConnectionAttempts, 0);
        });

        it('should emit a connected event', function(done) {
          pool.on('connected', function(connection) {
            assert.strictEqual(connection, fakeConnection);
            done();
          });

          pool.createConnection();
          pool.emit(channelReadyEvent);
        });
      });
    });

    describe('connection', function() {
      var TOKENIZED_SUB_NAME = 'project/p/subscriptions/' + SUB_NAME;
      var fakeId;

      beforeEach(function() {
        fakeId = uuid.v4();

        fakeUuid.v4 = function() {
          return fakeId;
        };

        fakeUtil.replaceProjectIdToken = common.util.replaceProjectIdToken;
      });

      it('should create a connection', function(done) {
        fakeUtil.replaceProjectIdToken = function(subName, projectId) {
          assert.strictEqual(subName, SUB_NAME);
          assert.strictEqual(projectId, PROJECT_ID);
          return TOKENIZED_SUB_NAME;
        };

        fakeConnection.write = function(reqOpts) {
          assert.deepEqual(reqOpts, {
            subscription: TOKENIZED_SUB_NAME,
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

      it('should pause the connection if the pool is paused', function(done) {
        fakeConnection.pause = done;
        pool.isPaused = true;
        pool.createConnection();
      });

      describe('error events', function() {
        it('should emit errors to the pool', function(done) {
          var error = new Error('err');

          pool.on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          });

          pool.createConnection();
          fakeConnection.emit('error', error);
        });
      });

      describe('status events', function() {
        beforeEach(function() {
          pool.connections.set('a', new FakeConnection());
        });

        it('should cancel any error events', function(done) {
          var fakeError = { code: 4 };

          pool.on('error', done); // should not fire
          pool.createConnection();

          fakeConnection.emit('error', fakeError);
          fakeConnection.emit('status', fakeError);

          done();
        });

        it('should close and delete the connection', function(done) {
          var endCalled = false;

          pool.createConnection();

          fakeConnection.end = function() {
            endCalled = true;
          };

          pool.connections.delete = function(id) {
            assert.strictEqual(id, fakeId);
            done();
          };

          fakeConnection.emit('status', {});
        });

        it('should increment the failed connection counter', function() {
          pool.failedConnectionAttempts = 0;
          fakeConnection.isConnected = false;

          pool.createConnection();
          fakeConnection.emit('status', {});

          assert.strictEqual(pool.failedConnectionAttempts, 1);
        });

        it('should not incr. the failed connection counter', function() {
          pool.failedConnectionAttempts = 0;
          fakeConnection.isConnected = true;

          pool.createConnection();
          fakeConnection.emit('status', {});

          assert.strictEqual(pool.failedConnectionAttempts, 0);
        });

        it('should capture the date when no connections are found', function() {
          var dateNow = global.Date.now;

          var fakeDate = Date.now();
          global.Date.now = function() {
            return fakeDate;
          };

          pool.noConnectionsTime = 0;
          pool.isConnected = function() {
            return false;
          };

          pool.createConnection();
          fakeConnection.emit('status', {});

          assert.strictEqual(pool.noConnectionsTime, fakeDate);
          global.Date.now = dateNow;
        });

        it('should not capture the date when already set', function() {
          pool.noConnectionsTime = 123;
          pool.isConnected = function() {
            return false;
          };

          pool.createConnection();
          fakeConnection.emit('status', {});

          assert.strictEqual(pool.noConnectionsTime, 123);
        });

        it('should not capture the date if a conn. is found', function() {
          pool.noConnectionsTime = 0;
          pool.isConnected = function() {
            return true;
          };

          pool.createConnection();
          fakeConnection.emit('status', {});

          assert.strictEqual(pool.noConnectionsTime, 0);
        });

        it('should queue a connection if status is retryable', function(done) {
          var fakeStatus = {};

          pool.shouldReconnect = function(status) {
            assert.strictEqual(status, fakeStatus);
            return true;
          };

          pool.queueConnection = done;

          pool.createConnection();
          fakeConnection.emit('status', fakeStatus);
        });

        it('should emit error if no pending conn. are found', function(done) {
          var error = {
            code: 4,
            details: 'Deadline Exceeded'
          };

          pool.shouldReconnect = function() {
            return false;
          };

          // will only emit status errors if pool is empty
          pool.connections = new Map();

          pool.on('error', function(err) {
            assert.strictEqual(err.code, error.code);
            assert.strictEqual(err.message, error.details);
            done();
          });

          pool.createConnection();
          fakeConnection.emit('status', error);
        });
      });

      describe('data events', function() {
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
      });
    });
  });

  describe('createMessage', function() {
    var message;
    var globalDateNow;

    var CONNECTION_ID = 'abc';
    var FAKE_DATE_NOW = Date.now();

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

    before(function() {
      globalDateNow = global.Date.now;
      global.Date.now = function() {
        return FAKE_DATE_NOW;
      };
    });

    beforeEach(function() {
      message = pool.createMessage(CONNECTION_ID, RESP);
    });

    after(function() {
      global.Date.now = globalDateNow;
    });

    it('should capture the connection id', function() {
      assert.strictEqual(message.connectionId, CONNECTION_ID);
    });

    it('should capture the message data', function() {
      var expectedPublishTime = new Date(
        parseInt(PT.seconds, 10) * 1000 + parseInt(PT.nanos, 10) / 1e6);

      assert.strictEqual(message.ackId, RESP.ackId);
      assert.strictEqual(message.id, RESP.message.messageId);
      assert.strictEqual(message.data, RESP.message.data);
      assert.strictEqual(message.attributes, RESP.message.attributes);
      assert.deepEqual(message.publishTime, expectedPublishTime);
      assert.strictEqual(message.received, FAKE_DATE_NOW);
    });

    it('should create a read-only message length property', function() {
      assert.strictEqual(message.length, RESP.message.data.length);

      assert.throws(function() {
        message.length = 3;
      });
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

  describe('getAndEmitChannelState', function() {
    var channelErrorEvent = 'channel.error';
    var channelReadyEvent = 'channel.ready';
    var channelReadyState = 2;
    var fakeChannelState;
    var dateNow;
    var fakeTimestamp;
    var fakeChannel = {};

    var fakeClient = {
      getChannel: function() {
        return fakeChannel;
      }
    };

    before(function() {
      dateNow = global.Date.now;
    });

    beforeEach(function() {
      fakeChannel.getConnectivityState = function() {
        return fakeChannelState;
      };

      fakeChannelState = 0;
      fakeClient.waitForReady = fakeUtil.noop;

      pool.getClient = function(callback) {
        callback(null, fakeClient);
      };

      fakeTimestamp = dateNow.call(global.Date);
      pool.noConnectionsTime = 0;

      global.Date.now = function() {
        return fakeTimestamp;
      };
    });

    after(function() {
      global.Date.now = dateNow;
    });

    it('should set the isGettingChannelState flag to true', function() {
      pool.getAndEmitChannelState();
      assert.strictEqual(pool.isGettingChannelState, true);
    });

    it('should emit any client errors', function(done) {
      var channelErrorEmitted = false;

      pool.on(channelErrorEvent, function() {
        channelErrorEmitted = true;
      });

      var fakeError = new Error('nope');
      var errorEmitted = false;

      pool.on('error', function(err) {
        assert.strictEqual(err, fakeError);
        errorEmitted = true;
      });

      pool.getClient = function(callback) {
        callback(fakeError);

        assert.strictEqual(pool.isGettingChannelState, false);
        assert.strictEqual(channelErrorEmitted, true);
        assert.strictEqual(errorEmitted, true);

        done();
      };

      pool.getAndEmitChannelState();
    });

    it('should emit the ready event if the channel is ready', function(done) {
      fakeChannelState = channelReadyState;

      fakeChannel.getConnectivityState = function(shouldConnect) {
        assert.strictEqual(shouldConnect, false);
        return fakeChannelState;
      };

      pool.on(channelReadyEvent, function() {
        assert.strictEqual(pool.isGettingChannelState, false);
        done();
      });

      pool.getAndEmitChannelState();
    });

    it('should wait for the channel to be ready', function(done) {
      var expectedDeadline = fakeTimestamp + 300000;

      fakeClient.waitForReady = function(deadline) {
        assert.strictEqual(deadline, expectedDeadline);
        done();
      };

      pool.getAndEmitChannelState();
    });

    it('should factor in the noConnectionsTime property', function(done) {
      pool.noConnectionsTime = 10;

      var fakeElapsedTime = fakeTimestamp - pool.noConnectionsTime;
      var expectedDeadline = fakeTimestamp + (300000 - fakeElapsedTime);

      fakeClient.waitForReady = function(deadline) {
        assert.strictEqual(deadline, expectedDeadline);
        done();
      };

      pool.getAndEmitChannelState();
    });

    it('should emit any waitForReady errors', function(done) {
      var fakeError = new Error('err');

      pool.on(channelErrorEvent, function(err) {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(pool.isGettingChannelState, false);
        done();
      });

      fakeClient.waitForReady = function(deadline, callback) {
        callback(fakeError);
      };

      pool.getAndEmitChannelState();
    });

    it('should emit the ready event when ready', function(done) {
      pool.on(channelReadyEvent, function() {
        assert.strictEqual(pool.isGettingChannelState, false);
        done();
      });

      fakeClient.waitForReady = function(deadline, callback) {
        callback(null);
      };

      pool.getAndEmitChannelState();
    });
  });

  describe('getClient', function() {
    var fakeCreds = {};

    function FakeSubscriber(address, creds, options) {
      this.address = address;
      this.creds = creds;
      this.options = options;
      this.closed = false;
    }

    FakeSubscriber.prototype.close = function() {
      this.closed = true;
    };

    beforeEach(function() {
      pool.getCredentials = function(callback) {
        callback(null, fakeCreds);
      };

      v1Override = function() {
        return {
          Subscriber: FakeSubscriber
        };
      };
    });

    it('should return the cached client when available', function(done) {
      var fakeClient = pool.client = new FakeSubscriber();

      pool.getClient(function(err, client) {
        assert.ifError(err);
        assert.strictEqual(client, fakeClient);
        done();
      });
    });

    it('should return any auth errors', function(done) {
      var error = new Error('err');

      pool.getCredentials = function(callback) {
        callback(error);
      };

      pool.getClient(function(err, client) {
        assert.strictEqual(err, error);
        assert.strictEqual(client, undefined);
        done();
      });
    });

    it('should create/use grpc credentials', function(done) {
      pool.getClient(function(err, client) {
        assert.ifError(err);
        assert(client instanceof FakeSubscriber);
        assert.strictEqual(client.creds, fakeCreds);
        done();
      });
    });

    it('should pass the pubsub options into the gax fn', function(done) {
      v1Override = function(options) {
        assert.strictEqual(options, FAKE_PUBSUB_OPTIONS);
        setImmediate(done);

        return {
          Subscriber: FakeSubscriber
        };
      };

      pool.getClient(assert.ifError);
    });

    it('should pass in the correct the args to the Subscriber', function(done) {
      var fakeAddress = 'a.b.c';
      fakeV1.SERVICE_ADDRESS = fakeAddress;

      var fakeUserAgent = 'a-b-c';
      fakeUtil.getUserAgentFromPackageJson = function(packageJson) {
        assert.deepEqual(packageJson, PKG);
        return fakeUserAgent;
      };

      pool.getClient(function(err, client) {
        assert.ifError(err);
        assert(client instanceof FakeSubscriber);
        assert.strictEqual(client.address, fakeAddress);
        assert.strictEqual(client.creds, fakeCreds);

        assert.deepEqual(client.options, {
          'grpc.keepalive_time_ms': 300000,
          'grpc.max_receive_message_length': 20000001,
          'grpc.primary_user_agent': fakeUserAgent
        });

        done();
      });
    });

    it('should respect the emulator service address', function(done) {
      fakeV1.SERVICE_ADDRESS = 'should.not.use';

      PUBSUB.isEmulator = true;
      PUBSUB.options.servicePath = 'should.use';

      pool.getClient(function(err, client) {
        assert.ifError(err);
        assert.strictEqual(client.address, 'should.use');
        done();
      });
    });

    it('should respect the emulator service port', function(done) {
      fakeV1.SERVICE_ADDRESS = 'should.not.use';

      PUBSUB.isEmulator = true;
      PUBSUB.options.servicePath = 'should.use';
      PUBSUB.options.port = 9999;

      pool.getClient(function(err, client) {
        assert.ifError(err);
        assert.strictEqual(client.address, 'should.use:9999');
        done();
      });
    });
  });

  describe('getCredentials', function() {
    beforeEach(function() {
      fakeGrpc.credentials = {
        createInsecure: fakeUtil.noop,
        createSsl: fakeUtil.noop,
        createFromGoogleCredential: fakeUtil.noop,
        combineChannelCredentials: fakeUtil.noop
      };
    });

    it('should return insecure creds for emulator usage', function(done) {
      var fakeCreds = {};
      fakeGrpc.credentials.createInsecure = function() {
        return fakeCreds;
      };

      PUBSUB.isEmulator = true;

      pool.getCredentials(function(err, creds) {
        assert.ifError(err);
        assert.strictEqual(creds, fakeCreds);
        done();
      });
    });

    it('should get grpc creds', function(done) {
      var fakeAuthClient = {};
      var fakeSslCreds = {};
      var fakeGoogCreds = {};
      var fakeCombinedCreds = {};

      PUBSUB.isEmulator = false;
      PUBSUB.auth.getAuthClient = function(callback) {
        callback(null, fakeAuthClient);
      };

      fakeGrpc.credentials = {
        createSsl: function() {
          return fakeSslCreds;
        },
        createFromGoogleCredential: function(authClient) {
          assert.strictEqual(authClient, fakeAuthClient);
          return fakeGoogCreds;
        },
        combineChannelCredentials: function(sslCreds, googCreds) {
          assert.strictEqual(sslCreds, fakeSslCreds);
          assert.strictEqual(googCreds, fakeGoogCreds);
          return fakeCombinedCreds;
        }
      };


      pool.getCredentials(function(err, creds) {
        assert.ifError(err);
        assert.strictEqual(creds, fakeCombinedCreds);
        done();
      });
    });

    it('should return getAuthClient errors', function(done) {
      var error = new Error('err');

      PUBSUB.auth.getAuthClient = function(callback) {
        callback(error);
      };

      pool.getCredentials(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should cache the project ID', function(done) {
      PUBSUB.auth.getAuthClient = function(callback) {
        PUBSUB.auth.projectId = PROJECT_ID;
        callback(null, {});
      };

      delete pool.projectId;

      pool.getCredentials(function(err) {
        assert.ifError(err);
        assert.strictEqual(pool.projectId, PROJECT_ID);
        done();
      });
    });
  });

  describe('isConnected', function() {
    it('should return true when at least one stream is connected', function() {
      var connections = pool.connections = new Map();

      connections.set('a', new FakeConnection());
      connections.set('b', new FakeConnection());
      connections.set('c', new FakeConnection());
      connections.set('d', new FakeConnection());

      var conn = new FakeConnection();
      conn.isConnected = true;
      connections.set('e', conn);

      assert(pool.isConnected());
    });

    it('should return false when there is no connection', function() {
      var connections = pool.connections = new Map();

      connections.set('a', new FakeConnection());
      connections.set('b', new FakeConnection());
      connections.set('c', new FakeConnection());
      connections.set('d', new FakeConnection());
      connections.set('e', new FakeConnection());

      assert(!pool.isConnected());
    });

    it('should return false when the map is empty', function() {
      pool.connections = new Map();
      assert(!pool.isConnected());
    });
  });

  describe('open', function() {
    beforeEach(function() {
      pool.queueConnection = fakeUtil.noop;
    });

    it('should make the specified number of connections', function() {
      var expectedCount = 5;
      var connectionCount = 0;

      pool.queueConnection = function() {
        connectionCount += 1;
      };

      pool.settings.maxConnections = expectedCount;
      pool.open();

      assert.strictEqual(expectedCount, connectionCount);
    });

    it('should set the isOpen flag to true', function() {
      pool.open();
      assert(pool.isOpen);
    });

    it('should reset internal used props', function() {
      var fakeDate = Date.now();
      var dateNow = Date.now;

      global.Date.now = function() {
        return fakeDate;
      };

      pool.failedConnectionAttempts = 100;
      pool.noConnectionsTime = 0;

      pool.open();

      assert.strictEqual(pool.failedConnectionAttempts, 0);
      assert.strictEqual(pool.noConnectionsTime, fakeDate);

      global.Date.now = dateNow;
    });

    it('should listen for newListener events', function() {
      pool.removeAllListeners('newListener');
      pool.open();

      assert.strictEqual(pool.listenerCount('newListener'), 1);
    });

    describe('newListener callback', function() {
      beforeEach(function() {
        pool.getAndEmitChannelState = function() {
          throw new Error('Should not be called!');
        };
      });

      it('should call getAndEmitChannelState', function(done) {
        pool.getAndEmitChannelState = done;
        pool.emit('newListener', 'channel.ready');
      });

      it('should do nothing for unknown events', function() {
        pool.emit('newListener', 'channel.error');
      });

      it('should do nothing when already getting state', function() {
        pool.isGettingChannelState = true;
        pool.emit('newListener', 'channel.ready');
      });
    });
  });

  describe('pause', function() {
    it('should set the isPaused flag to true', function() {
      pool.pause();
      assert(pool.isPaused);
    });

    it('should pause all the connections', function() {
      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.pause();

      assert(a.isPaused);
      assert(b.isPaused);
    });
  });

  describe('queueConnection', function() {
    var fakeTimeoutHandle = 123;

    var _setTimeout;
    var _random;
    var _open;

    before(function() {
      _setTimeout = global.setTimeout;
      _random = global.Math.random;

      _open = ConnectionPool.prototype.open;
      // prevent open from calling queueConnection
      ConnectionPool.prototype.open = fakeUtil.noop;
    });

    beforeEach(function() {
      Math.random = function() {
        return 1;
      };

      global.setTimeout = function(cb) {
        cb();
        return fakeTimeoutHandle;
      };

      pool.failedConnectionAttempts = 0;
      pool.createConnection = fakeUtil.noop;
    });

    after(function() {
      global.setTimeout = _setTimeout;
      global.Math.random = _random;
      ConnectionPool.prototype.open = _open;
    });

    it('should set a timeout to create the connection', function(done) {
      pool.createConnection = done;

      global.setTimeout = function(cb, delay) {
        assert.strictEqual(delay, 0);
        cb(); // should call the done fn
      };

      pool.queueConnection();
    });

    it('should factor in the number of failed requests', function(done) {
      pool.createConnection = done;
      pool.failedConnectionAttempts = 3;

      global.setTimeout = function(cb, delay) {
        assert.strictEqual(delay, 9000);
        cb(); // should call the done fn
      };

      pool.queueConnection();
    });

    it('should capture the timeout handle', function() {
      pool.queueConnection();
      assert.deepEqual(pool.queue, [fakeTimeoutHandle]);
    });

    it('should remove the timeout handle once it fires', function(done) {
      pool.createConnection = function() {
        assert.strictEqual(pool.queue.length, 0);
        done();
      };

      pool.queueConnection();
    });
  });

  describe('resume', function() {
    it('should set the isPaused flag to false', function() {
      pool.resume();
      assert.strictEqual(pool.isPaused, false);
    });

    it('should resume all the connections', function() {
      var a = new FakeConnection();
      var b = new FakeConnection();

      pool.connections.set('a', a);
      pool.connections.set('b', b);

      pool.resume();

      assert.strictEqual(a.isPaused, false);
      assert.strictEqual(b.isPaused, false);
    });
  });

  describe('shouldReconnect', function() {
    it('should not reconnect if the pool is closed', function() {
      pool.isOpen = false;
      assert.strictEqual(pool.shouldReconnect({}), false);
    });

    it('should return true for retryable errors', function() {
      assert(pool.shouldReconnect({ code: 0 })); // OK
      assert(pool.shouldReconnect({ code: 1 })); // Canceled
      assert(pool.shouldReconnect({ code: 4 })); // DeadlineExceeded
      assert(pool.shouldReconnect({ code: 8 })); // ResourceExhausted
      assert(pool.shouldReconnect({ code: 13 })); // Internal
      assert(pool.shouldReconnect({ code: 14 })); // Unavailable
    });

    it('should return false for non-retryable errors', function() {
      assert(!pool.shouldReconnect({ code: 2 })); // Unknown
      assert(!pool.shouldReconnect({ code: 3 })); // InvalidArgument
      assert(!pool.shouldReconnect({ code: 5 })); // NotFound
      assert(!pool.shouldReconnect({ code: 6 })); // AlreadyExists
      assert(!pool.shouldReconnect({ code: 7 })); // PermissionDenied
      assert(!pool.shouldReconnect({ code: 9 })); // FailedPrecondition
      assert(!pool.shouldReconnect({ code: 10 })); // Aborted
      assert(!pool.shouldReconnect({ code: 11 })); // OutOfRange
      assert(!pool.shouldReconnect({ code: 12 })); // Unimplemented
      assert(!pool.shouldReconnect({ code: 15 })); // DataLoss
      assert(!pool.shouldReconnect({ code: 16 })); // Unauthenticated
    });

    it('should not retry if no connection can be made', function() {
      var fakeStatus = {
        code: 4
      };

      pool.noConnectionsTime = Date.now() - 300001;

      assert.strictEqual(pool.shouldReconnect(fakeStatus), false);
    });

    it('should return true if all conditions are met', function() {
      var fakeStatus = {
        code: 4
      };

      pool.noConnectionsTime = 0;

      assert.strictEqual(pool.shouldReconnect(fakeStatus), true);
    });
  });
});
