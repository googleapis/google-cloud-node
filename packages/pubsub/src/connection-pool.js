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
var extend = require('extend');
var is = require('is');
var util = require('util');
var uuid = require('uuid');

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
function ConnectionPool(subscription, options) {
  this.subscription = subscription;
  this.connections = new Map();
  this.isPaused = false;
  this.isOpen = false;

  this.settings = extend({
    maxConnections: 5,
    ackDeadline: 10000
  }, options);

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
    callback(new Error('Connection pool is closed.'));
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

  this.isOpen = false;
  callback = callback || common.util.noop;

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

    connection.on('error', function(err) {
      self.emit('error', err);
    });

    connection.on('data', function(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', self.createMessage(id, message));
      });
    });

    connection.once('metadata', function() {
      self.emit('connected', connection);
    });

    connection.once('close', function() {
      self.connections.delete(id);

      if (self.isOpen) {
        self.createConnection();
      }
    });

    if (self.isPaused) {
      connection.pause();
    }

    connection.write({
      subscription: self.subscription.name,
      streamAckDeadlineSeconds: self.settings.ackDeadline / 1000
    });

    self.connections.set(id, connection);
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

  return {
    connectionId: connectionId,
    ackId: resp.ackId,
    id: resp.message.messageId,
    data: resp.message.data,
    attributes: resp.message.attributes,
    publishTime: new Date(parseInt(pt.seconds, 10) * 1000 + milliseconds),
    received: Date.now(),
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
  for (var i = 0; i < this.settings.maxConnections; i++) {
    this.createConnection();
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
 * Calls resume on each connection, allowing `message` events to fire off again.
 */
ConnectionPool.prototype.resume = function() {
  this.isPaused = false;

  this.connections.forEach(function(connection) {
    connection.resume();
  });
};

module.exports = ConnectionPool;
