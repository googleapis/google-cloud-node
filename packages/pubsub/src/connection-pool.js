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
var is = require('is');
var util = require('util');
var uuid = require('uuid');

var CONFIG = require('./v1/subscriber_client_config.json')
  .interfaces['google.pubsub.v1.Subscriber'];

// deadline applied to streams
var STREAM_TIMEOUT = CONFIG.methods.StreamingPull.timeout_millis;

// codes to retry streams
var RETRY_CODES = [
  1, // canceled
  4, // deadline exceeded
  8, // resource exhausted
  13, // internal error
  14 // unavailable
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
  this.connections = new Map();

  this.isPaused = false;
  this.isOpen = false;

  this.failedConnectionAttempts = 0;
  this.lastKnownConnection = Date.now();

  this.settings = {
    maxConnections: subscription.maxConnections || 5,
    ackDeadline: subscription.ackDeadline || 10000
  };

  this.queue = Promise.resolve();
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
  var self = this;
  var connections = Array.from(this.connections.values());

  this.isOpen = false;
  self.connections.clear();
  callback = callback || common.util.noop;

  each(connections, function(connection, onEndCallback) {
    connection.end(onEndCallback);
  }, callback);
};

/**
 * Creates a connection. This is async but instead of providing a callback
 * a `connected` event will fire once the connection is ready.
 */
ConnectionPool.prototype.createConnection = function(callback) {
  var self = this;

  callback = callback || common.util.noop;

  if (!this.isOpen) {
    callback();
    return;
  }

  this.subscription.request({
    client: 'subscriberClient',
    method: 'streamingPull',
    returnFn: true
  }, function(err, requestFn) {
    if (err) {
      self.emit('error', err);
      return;
    }

    var id = uuid.v4();
    var connection = requestFn();
    var errorImmediateHandle;

    connection.on('error', function(err) {
      // since this is a bidi stream it's possible that we recieve errors from
      // reads or writes. We also want to try and cut down on the number of
      // errors that we emit if other connections are still open. So by using
      // setImmediate we're able to cancel the error message if it gets passed
      // to the `status` event where we can check if the connection should be
      // re-opened or if we should send the error to the user
      errorImmediateHandle = setImmediate(self.emit.bind(self), 'error', err);
    });

    connection.on('metadata', function(metadata) {
      if (metadata.get('date').length) {
        self.lastKnownConnection = Date.now();
        self.failedConnectionAttempts = 0;
        connection.isConnected = true;
      }
    });

    connection.on('status', function(status) {
      clearImmediate(errorImmediateHandle);

      if (!connection.isConnected) {
        self.failedConnectionAttempts += 1;
      }

      connection.end();
      self.connections.delete(id);

      if (self.shouldReconnect(status)) {
        self.queueConnection();
      } else if (self.isOpen && !self.connections.size) {
        var error = new Error(status.details);
        error.code = status.code;
        self.emit('error', error);
      }
    });

    connection.on('data', function(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', self.createMessage(id, message));
      });
    });

    if (self.isPaused) {
      connection.pause();
    }

    connection.write({
      subscription: self.subscription.name,
      streamAckDeadlineSeconds: self.settings.ackDeadline / 1000
    });

    self.connections.set(id, connection);
    callback();
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
  var data = resp.message.data;

  return {
    connectionId: connectionId,
    ackId: resp.ackId,
    id: resp.message.messageId,
    attributes: resp.message.attributes,
    publishTime: new Date(parseInt(pt.seconds, 10) * 1000 + milliseconds),
    received: Date.now(),
    // using get here to prevent user from overwriting data
    get data() {
      return data;
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
 * Creates specified number of connections and puts pool in open state.
 */
ConnectionPool.prototype.open = function() {
  var existing = this.connections.size;
  var max = this.settings.maxConnections;

  for (; existing < max; existing++) {
    this.queueConnection();
  }

  this.isOpen = true;
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

  var attempts = this.failedConnectionAttempts / this.settings.maxConnections;
  var delay = (Math.pow(2, Math.ceil(attempts)) * 1000) +
    (Math.floor(Math.random() * 1000));

  this.queue = this.queue.then(function() {
    return common.util.promisify(self.createConnection).call(self);
  }).then(function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  });
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

  // deadline exceeded errors are tricky because gax applies a deadline no
  // matter what, so it might not be an error at all, the stream could have just
  // been closed. That being said we need to check if it is a deadline error
  // and if it is only stop retrying if we've failed to make a connection
  var elapsed = Date.now() - this.lastKnownConnection;

  if (status.code === 4 && elapsed > (STREAM_TIMEOUT + 300000)) {
    return false;
  }

  return true;
};

module.exports = ConnectionPool;
