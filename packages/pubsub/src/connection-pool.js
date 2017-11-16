/*!
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

/*!
 * @module pubsub/connectionPool
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var each = require('async-each');
var events = require('events');
var grpc = require('google-gax').grpc().grpc;
var is = require('is');
var util = require('util');
var uuid = require('uuid');

var PKG = require('../package.json');
var v1 = require('./v1');

var CHANNEL_READY_EVENT = 'channel.ready';
var CHANNEL_ERROR_EVENT = 'channel.error';

// if we can't establish a connection within 5 minutes, we need to back off
// and emit an error to the user.
var MAX_TIMEOUT = 300000;

// codes to retry streams
var RETRY_CODES = [
  0, // ok
  1, // canceled
  2, // unknown
  4, // deadline exceeded
  8, // resource exhausted
  10, // aborted
  13, // internal error
  14, // unavailable
  15 // dataloss
];

/**
 * ConnectionPool is used to manage the stream connections created via
 * StreamingPull rpc.
 *
 * @param {module:pubsub/subscription} subscription - The subscription to create
 *     connections for.
 * @param {object=} options - Pool options.
 * @param {number} options.maxConnections - Number of connections to create.
 *     Default: 5.
 * @param {number} options.ackDeadline - The ack deadline to send when
 *     creating a connection.
 */
function ConnectionPool(subscription) {
  this.subscription = subscription;
  this.projectId = subscription.projectId;

  this.connections = new Map();

  this.isPaused = false;
  this.isOpen = false;
  this.isGettingChannelState = false;

  this.failedConnectionAttempts = 0;
  this.noConnectionsTime = 0;

  this.settings = {
    maxConnections: subscription.maxConnections || 5,
    ackDeadline: subscription.ackDeadline || 10000
  };

  this.queue = [];

  // grpc related fields we need since we're bypassing gax
  this.metadata_ = new grpc.Metadata();

  this.metadata_.add('x-goog-api-client', [
    'gl-node/' + process.versions.node,
    'gccl/' + PKG.version,
    'grpc/' + require('grpc/package.json').version
  ].join(' '));

  events.EventEmitter.call(this);
  this.open();
}

util.inherits(ConnectionPool, events.EventEmitter);

/**
 * Acquires a connection from the pool. Optionally you can specify an id for a
 * specific connection, but if it is no longer available it will return the
 * first available connection.
 *
 * @param {string=} id - The id of the connection to retrieve.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while acquiring a
 *     connection.
 * @param {stream} callback.connection - A duplex stream.
 */
ConnectionPool.prototype.acquire = function(id, callback) {
  var self = this;

  if (is.fn(id)) {
    callback = id;
    id = null;
  }

  if (!this.isOpen) {
    callback(new Error('No connections available to make request.'));
    return;
  }

  // it's possible that by the time a user acks the connection could have
  // closed, so in that case we'll just return any connection
  if (!this.connections.has(id)) {
    id = getFirstConnectionId();
  }

  var connection = this.connections.get(id);

  if (connection) {
    callback(null, connection);
    return;
  }

  this.once('connected', function(connection) {
    callback(null, connection);
  });

  function getFirstConnectionId() {
    return self.connections.keys().next().value;
  }
};

/**
 * Ends each connection in the pool and closes the pool, preventing new
 * connections from being created.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.error - An error returned while closing the pool.
 */
ConnectionPool.prototype.close = function(callback) {
  var connections = Array.from(this.connections.values());

  callback = callback || common.util.noop;

  if (this.client) {
    this.client.close();
  }

  this.connections.clear();
  this.queue.forEach(clearTimeout);
  this.queue.length = 0;

  this.isOpen = false;
  this.isGettingChannelState = false;

  this.removeAllListeners('newListener')
    .removeAllListeners(CHANNEL_READY_EVENT)
    .removeAllListeners(CHANNEL_ERROR_EVENT);

  this.failedConnectionAttempts = 0;
  this.noConnectionsTime = 0;

  each(connections, function(connection, onEndCallback) {
    connection.end(onEndCallback);
  }, callback);
};

/**
 * Creates a connection. This is async but instead of providing a callback
 * a `connected` event will fire once the connection is ready.
 */
ConnectionPool.prototype.createConnection = function() {
  var self = this;

  this.getClient(function(err, client) {
    if (err) {
      self.emit('error', err);
      return;
    }

    var id = uuid.v4();
    var connection = client.streamingPull(self.metadata_);
    var errorImmediateHandle;

    if (self.isPaused) {
      connection.pause();
    }

    self
      .once(CHANNEL_ERROR_EVENT, onChannelError)
      .once(CHANNEL_READY_EVENT, onChannelReady);

    connection
      .on('error', onConnectionError)
      .on('data', onConnectionData)
      .on('status', onConnectionStatus)
      .write({
        subscription: common.util.replaceProjectIdToken(
          self.subscription.name, self.projectId),
        streamAckDeadlineSeconds: self.settings.ackDeadline / 1000
      });

    self.connections.set(id, connection);

    function onChannelError() {
      self.removeListener(CHANNEL_READY_EVENT, onChannelReady);

      connection.cancel();
    }

    function onChannelReady() {
      self.removeListener(CHANNEL_ERROR_EVENT, onChannelError);

      connection.isConnected = true;

      self.noConnectionsTime = 0;
      self.failedConnectionAttempts = 0;

      self.emit('connected', connection);
    }

    // since this is a bidi stream it's possible that we recieve errors from
    // reads or writes. We also want to try and cut down on the number of
    // errors that we emit if other connections are still open. So by using
    // setImmediate we're able to cancel the error message if it gets passed
    // to the `status` event where we can check if the connection should be
    // re-opened or if we should send the error to the user
    function onConnectionError(err) {
      errorImmediateHandle = setImmediate(self.emit.bind(self), 'error', err);
    }

    function onConnectionData(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', self.createMessage(id, message));
      });
    }

    function onConnectionStatus(status) {
      clearImmediate(errorImmediateHandle);

      connection.end();
      self.connections.delete(id);

      if (!connection.isConnected) {
        self.failedConnectionAttempts += 1;
      }

      if (!self.isConnected() && !self.noConnectionsTime) {
        self.noConnectionsTime = Date.now();
      }

      if (self.shouldReconnect(status)) {
        self.queueConnection();
      } else if (self.isOpen && !self.connections.size) {
        var error = new Error(status.details);
        error.code = status.code;
        self.emit('error', error);
      }
    }
  });
};

/**
 * Creates a message object for the user.
 *
 * @param {string} connectionId - The connection id that the message was
 *     received on.
 * @param {object} resp - The message response data from StreamingPull.
 * @return {object} message - The message object.
 */
ConnectionPool.prototype.createMessage = function(connectionId, resp) {
  var self = this;

  var pt = resp.message.publishTime;
  var milliseconds = parseInt(pt.nanos, 10) / 1e6;
  var originalDataLength = resp.message.data.length;

  return {
    connectionId: connectionId,
    ackId: resp.ackId,
    id: resp.message.messageId,
    attributes: resp.message.attributes,
    publishTime: new Date(parseInt(pt.seconds, 10) * 1000 + milliseconds),
    received: Date.now(),
    data: resp.message.data,
    // using get here to prevent user from overwriting data
    get length() {
      return originalDataLength;
    },
    ack: function() {
      self.subscription.ack_(this);
    },
    nack: function() {
      self.subscription.nack_(this);
    }
  };
};

/**
 * Gets the channels connectivity state and emits channel events accordingly.
 *
 * @fires CHANNEL_ERROR_EVENT
 * @fires CHANNEL_READY_EVENT
 */
ConnectionPool.prototype.getAndEmitChannelState = function() {
  var self = this;

  this.isGettingChannelState = true;

  this.getClient(function(err, client) {
    if (err) {
      self.isGettingChannelState = false;
      self.emit(CHANNEL_ERROR_EVENT);
      self.emit('error', err);
      return;
    }

    var READY_STATE = 2;

    var channel = client.getChannel();
    var connectivityState = channel.getConnectivityState(false);

    if (connectivityState === READY_STATE) {
      self.isGettingChannelState = false;
      self.emit(CHANNEL_READY_EVENT);
      return;
    }

    var elapsedTimeWithoutConnection = 0;
    var now = Date.now();
    var deadline;

    if (self.noConnectionsTime) {
      elapsedTimeWithoutConnection = now - self.noConnectionsTime;
    }

    deadline = now + (MAX_TIMEOUT - elapsedTimeWithoutConnection);

    client.waitForReady(deadline, function(err) {
      self.isGettingChannelState = false;

      if (err) {
        self.emit(CHANNEL_ERROR_EVENT, err);
        return;
      }

      self.emit(CHANNEL_READY_EVENT);
    });
  });
};

/**
 * Gets the Subscriber client. We need to bypass GAX until they allow deadlines
 * to be optional.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while getting the client.
 * @param {object} callback.client - The Subscriber client.
 */
ConnectionPool.prototype.getClient = function(callback) {
  if (this.client) {
    callback(null, this.client);
    return;
  }

  var self = this;
  var pubsub = this.subscription.pubsub;

  this.getCredentials(function(err, credentials) {
    if (err) {
      callback(err);
      return;
    }

    var Subscriber = v1(pubsub.options).Subscriber;
    var address = v1.SERVICE_ADDRESS;

    if (pubsub.isEmulator) {
      address = pubsub.options.servicePath;

      if (pubsub.options.port) {
        address += ':' + pubsub.options.port;
      }
    }

    self.client = new Subscriber(address, credentials, {
      'grpc.keepalive_time_ms': MAX_TIMEOUT,
      'grpc.max_receive_message_length': 20000001,
      'grpc.primary_user_agent': common.util.getUserAgentFromPackageJson(PKG)
    });

    callback(null, self.client);
  });
};

/**
 * Get/create client credentials.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while getting the client.
 * @param {object} callback.credentials - The client credentials.
 */
ConnectionPool.prototype.getCredentials = function(callback) {
  var self = this;
  var pubsub = this.subscription.pubsub;

  if (pubsub.isEmulator) {
    setImmediate(callback, null, grpc.credentials.createInsecure());
    return;
  }

  pubsub.auth.getAuthClient(function(err, authClient) {
    if (err) {
      callback(err);
      return;
    }

    var credentials = grpc.credentials.combineChannelCredentials(
      grpc.credentials.createSsl(),
      grpc.credentials.createFromGoogleCredential(authClient)
    );

    self.projectId = pubsub.auth.projectId;
    callback(null, credentials);
  });
};

/**
 * Check to see if at least one stream in the pool is connected.
 * @return {boolean}
 */
ConnectionPool.prototype.isConnected = function() {
  var interator = this.connections.values();
  var connection = interator.next().value;

  while (connection) {
    if (connection.isConnected) {
      return true;
    }

    connection = interator.next().value;
  }

  return false;
};

/**
 * Creates specified number of connections and puts pool in open state.
 */
ConnectionPool.prototype.open = function() {
  var self = this;

  var existing = this.connections.size;
  var max = this.settings.maxConnections;

  for (; existing < max; existing++) {
    this.queueConnection();
  }

  this.isOpen = true;
  this.failedConnectionAttempts = 0;
  this.noConnectionsTime = Date.now();

  this.on('newListener', function(eventName) {
    if (eventName === CHANNEL_READY_EVENT && !self.isGettingChannelState) {
      self.getAndEmitChannelState();
    }
  });
};

/**
 * Pauses each of the connections, causing `message` events to stop firing.
 */
ConnectionPool.prototype.pause = function() {
  this.isPaused = true;

  this.connections.forEach(function(connection) {
    connection.pause();
  });
};

/**
 * Queues a connection to be created. If any previous connections have failed,
 * it will apply a back off based on the number of failures.
 */
ConnectionPool.prototype.queueConnection = function() {
  var self = this;
  var delay = 0;

  if (this.failedConnectionAttempts > 0) {
    delay = (Math.pow(2, this.failedConnectionAttempts) * 1000) +
      (Math.floor(Math.random() * 1000));
  }

  var timeoutHandle = setTimeout(createConnection, delay);
  this.queue.push(timeoutHandle);

  function createConnection() {
    self.createConnection();
    self.queue.splice(self.queue.indexOf(timeoutHandle), 1);
  }
};

/**
 * Calls resume on each connection, allowing `message` events to fire off again.
 */
ConnectionPool.prototype.resume = function() {
  this.isPaused = false;

  this.connections.forEach(function(connection) {
    connection.resume();
  });
};

/**
 * Inspects a status object to determine whether or not we should try and
 * reconnect.
 *
 * @param {object} status - The gRPC status object.
 * @return {boolean}
 */
ConnectionPool.prototype.shouldReconnect = function(status) {
  // If the pool was closed, we should definitely not reconnect
  if (!this.isOpen) {
    return false;
  }

  // We should check to see if the status code is a non-recoverable error
  if (RETRY_CODES.indexOf(status.code) === -1) {
    return false;
  }

  var exceededRetryLimit = this.noConnectionsTime &&
    Date.now() - this.noConnectionsTime > MAX_TIMEOUT;

  if (exceededRetryLimit) {
    return false;
  }

  return true;
};

module.exports = ConnectionPool;
