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

var events = require('events');
var nodeutil = require('util');
var util = require('../common/util.js');

function Subscription(options) {
  events.EventEmitter.call(this);

  if (!options.name) {
    throw new Error('A name must be specified to register a subscription.');
  }

  this.pubsub = options.pubsub;
  this.topic = options.topic;

  this.name = options.name;
  if (this.name.substr(0, '/subscriptions/'.length) !== '/subscriptions/') {
    this.name = '/subscriptions/' + this.pubsub.id + '/' + this.name;
  }

  this.ackDeadlineSeconds = options.ackDeadlineSeconds;
  this.autoAck = options.autoAck || false;
  this.autoPull = true;
  this.closed = false;
  this.pullIntervalInMs = options.pullIntervalInMs || 10;

  if (typeof options.autoPull === 'boolean') {
    this.autoPull = options.autoPull;
  }

  util.LazyCreate.call(this, options);
}

nodeutil.inherits(Subscription, events.EventEmitter);

Subscription.prototype.onReady = function() {
  this.exists_ = true;
  if (this.autoPull === true) {
    this.startPulling();
  }
};

Subscription.prototype.create = function() {
  var subscription = {
    name: this.name,
    topic: this.topic.name,
    ackDeadlineSeconds: this.ackDeadlineSeconds
  };
  this.pubsub.makeReq(
      'POST', 'subscriptions', null, subscription, function(err) {
    if (err) {
      this.emit('error', err);
      return;
    }
    this.emit('ready');
  }.bind(this));
};

Subscription.prototype.get = function() {
  this.pubsub.makeReq(
      'GET', 'subscriptions/' + this.name, null, true, function(err, res) {
    if (err) {
      if (err.code === 404) {
      // Subscription doesn't exist. Try to create the Subscription instead.
        this.create();
      } else {
        this.emit('error', err);
      }
      return;
    }
    if (this.ackDeadlineSeconds &&
        res.ackDeadlineSeconds !== this.ackDeadlineSeconds) {
      this.exists_ = true;
      this.delete(this.create.bind(this));
      return;
    }
    this.emit('ready');
  }.bind(this));
};

/**
 * Acknowledges the backend that message is retrieved.
 * @param  {Array<String>}  ids      A list of message IDs.
 * @param  {Function}       callback Callback function.
 */
Subscription.prototype.ack = function(ids, callback) {
  ids = util.arrayize(ids);
  var body = {
    subscription: this.name,
    ackId: ids
  };
  this.makeReq('POST', 'subscriptions/acknowledge', null, body, callback);
};

/**
 * Pulls from the subscribed topic.
 * @param  {Boolean}   opts.returnImmediately  If set, the system will respond
 *                                             immediately. Otherwise, wait
 *                                             until new messages are available.
 *                                             Returns if timeout is reached.
 * @param  {Function}  callback                Callback.
 */
Subscription.prototype.pull = function(opts, callback) {
  // TODO(jbd): Should not be racing with other pull.
  // TOOD(jbd): Make opts optional.
  opts = opts || {};
  callback = callback || util.noop;
  var that = this;
  var body = {
    subscription: this.name,
    returnImmediately: !!opts.returnImmediately
  };
  this.makeReq(
      'POST', 'subscriptions/pull', null, body, function(err, message) {
    // TODO(jbd): Fix API to return a list of messages.
    if (err) {
      that.emit('error', err);
      callback(err);
      return;
    }
    if (!that.autoAck) {
      that.emitMessage_(message);
      callback();
      return;
    }
    that.ack(message.ackId, function(err) {
      if (err) {
        that.emit('error', err);
        callback(err);
        return;
      }
      that.emitMessage_(message);
      callback();
    });
  });
};

/**
 * Polls the backend for new messages.
 */
Subscription.prototype.startPulling = function() {
  var that = this;
  var pullFn = function() {
    if (that.closed) {
      return;
    }
    that.pull({ returnImmediately: false }, function(err) {
      // TODO(jbd): Fix API to return a more explicit error code or message.
      if (err && err.message.indexOf('has no more messages') === -1) {
        that.emit('error', err);
      }
      setTimeout(pullFn, that.pullIntervalInMs);
    });
  };
  pullFn();
};

/**
 * Deletes the current subscription. Pull requests from the current
 * subscription will be errored once unsubscription is done.
 * @param  {Function} callback Optional callback.
 */
Subscription.prototype.delete = function(callback) {
  callback = callback || util.noop;
  var path = util.format('subscriptions/{fullName}', {
    fullName: this.name
  });
  this.makeReq('DELETE', path, null, true, function(err) {
    if (err) {
      this.emit('error', err);
      callback(err);
      return;
    }
    this.close();
    this.exists_ = false;
    callback();
  }.bind(this));
};

/**
 * Closes the subscription.
 */
Subscription.prototype.close = function() {
  this.closed = true;
};

/**
 * Emits a 'message' event with the provided message.
 */
Subscription.prototype.emitMessage_ = function(msg) {
  if (msg.pubsubEvent && msg.pubsubEvent.message) {
    var data = msg.pubsubEvent.message.data;
    msg.pubsubEvent.message.data = new Buffer(data, 'base64').toString('utf-8');
  }
  this.emit('message', msg);
};

/**
 * Overwrite makeReq method to be sure the Subscription exists
 * before making any requests.
 */
 Subscription.prototype.makeReq = function(method, path, q, body, callback) {
  var that = this;
  if (!this.exists_) {
    // Queue the request until we know the Subscription exists.
    this.on('error', callback);
    this.on('ready', makeReq);
    return;
  }
  function makeReq() {
    that.pubsub.makeReq(method, path, q, body, callback);
  }
  makeReq();
};

module.exports = Subscription;
