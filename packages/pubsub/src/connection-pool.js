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
 * @type {module:pubsub/message}
 * @private
 */
var Message = require('./message.js');

/**
 *
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
 *
 */
ConnectionPool.prototype.acquire = function(id, callback) {
  var self = this;

  if (is.fn(id)) {
    callback = id;
    id = getFirstConnectionId();
  }

  id = id || getFirstConnectionId();

  if (!this.isOpen) {
    callback(new Error('Connection pool is closed.'));
    return;
  }

  if (this.connections.has(id)) {
    callback(null, this.connections.get(id));
    return;
  }

  this.once('connected', function() {
    self.acquire(id, callback);
  });

  function getFirstConnectionId() {
    return self.connections.keys().next().value;
  }
};

/**
 *
 */
ConnectionPool.prototype.createConnection = function(id) {
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

    var connection = requestFn();

    connection.on('error', function(err) {
      self.emit('error', err);
    });

    connection.on('data', function(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', new Message(self.subscription, id, message));
      });
    });

    connection.once('metadata', function() {
      self.connections.set(id, connection);
      self.emit('connected');
    });

    connection.once('close', function() {
      self.connections.delete(id);

      if (self.isOpen) {
        self.createConnection(id);
      }
    });

    if (self.isPaused) {
      connection.pause();
    }

    connection.write({
      subscription: self.subscription.name,
      streamAckDeadlineSeconds: self.settings.ackDeadline / 1000
    });
  });
};

/**
 *
 */
ConnectionPool.prototype.drain = function(callback) {
  var connections = Array.from(this.connections.values());

  this.isOpen = false;
  callback = callback || common.util.noop;

  each(connections, function(connection, onEndCallback) {
    connection.end(onEndCallback);
  }, callback);
};

/**
 *
 */
ConnectionPool.prototype.open = function() {
  for (var i = 0; i < this.settings.maxConnections; i++) {
    this.createConnection(i);
  }

  this.isOpen = true;
};

/**
 *
 */
ConnectionPool.prototype.pause = function() {
  this.isPaused = true;

  this.connections.forEach(function(connection) {
    connection.pause();
  });
};

/**
 *
 */
ConnectionPool.prototype.resume = function() {
  this.isPaused = false;

  this.connections.forEach(function(connection) {
    connection.resume();
  });
};

module.exports = ConnectionPool;
