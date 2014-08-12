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
var Subscription = require('./subscription.js');

/**
 * Represents a Google Cloud Pub/Sub API topic.
 * @param {object}    options
 * @param {Function=} callback
 */
function Topic(options) {
  events.EventEmitter.call(this);

  this.exists = options.exists;
  this.pubsub = options.pubsub;

  this.name = options.name;
  if (this.name.substr(0, '/topics/'.length) !== '/topics/') {
    this.name = '/topics/' + this.pubsub.id + '/' + this.name;
  }

  this.on('ready', this.onReady.bind(this));

  if (this.exists) {
    this.emit('ready');
  } else {
    if (options.getTopic) {
      this.get();
    } else {
      this.create();
    }
  }
}

nodeutil.inherits(Topic, events.EventEmitter);

Topic.prototype.onReady = function() {
  this.exists = true;
};

Topic.prototype.create = function() {
  var callback = this.existenceCallback.bind(this);
  this.pubsub.makeReq('POST', 'topics', null, { name: this.name }, callback);
};

Topic.prototype.get = function() {
  var callback = this.existenceCallback.bind(this);
  this.pubsub.makeReq('GET', 'topics/' + this.name, null, true, callback);
};

Topic.prototype.existenceCallback = function(err) {
  if (err) {
    this.emit('error', err);
    this.emit('existence-denied', err);
    return;
  }
  this.emit('ready');
};

/**
 * Publishes the provided string message.
 * @param  {string}   message      String message to publish.
 * @param  {Function} callback     Optional callback.
 */
Topic.prototype.publish = function(message, callback) {
  callback = callback || util.noop;
  this.publishRaw({
    topic: this.name,
    message: {
      data: new Buffer(message).toString('base64')
    }
  }, callback);
};

/**
 * Publishes a raw message.
 * @param  {message}  message       Raw message to publish.
 * @param  {Function} callback      Optional callback.
 */
Topic.prototype.publishRaw = function(message, callback) {
  callback = callback || util.noop;
  message.topic = this.name;
  this.makeReq('POST', 'topics/publish', null, message, callback);
};

/**
 * Deletes a topic.
 * @param  {Function} callback Optional callback.
 */
Topic.prototype.delete = function(callback) {
  callback = callback || {};
  this.makeReq('DELETE', 'topics/' + this.name, null, true, callback);
};

/**
 * Subscribe to this topic.
 * @param  {object}   options
 */
Topic.prototype.subscribe = function(options) {
  if (typeof options === 'string') {
    options = {
      name: options
    };
  }
  options = options || {};
  options.name = options.name.replace(/.*\//, '');
  options.topic = this;
  options.pubsub = this.pubsub;
  return new Subscription(options);
};

Topic.prototype.getSubscription = function(options) {
  if (typeof options === 'string') {
    options = {
      name: options
    };
  }
  options = options || {};
  options.getSubscription = true;
  return this.subscribe(options);
};

/**
 * Gets subscriptions.
 * @param  {string}   query.pageToken     Page token.
 * @param  {Number}   query.maxResults    Max number of results to return.
 * @param  {Function} callback            Callback function.
 */
Topic.prototype.getSubscriptions = function(query, callback) {
  if (arguments.length < 2) {
    callback = query;
    query = {};
  }
  query = query || {};
  query.query = query.query ||
      'pubsub.googleapis.com/topic in (' + this.name + ')';
  this.pubsub.getSubscriptions(query, callback);
};

/**
 * Overwrite makeReq method to be sure the Topic exists
 * before making any requests.
 */
Topic.prototype.makeReq = function(method, path, q, body, callback) {
  var that = this;
  if (!this.exists) {
    // Queue the request until we know the Topic exists.
    this.on('ready', makeReq);
    this.on('existence-denied', callback);
    return;
  }
  function makeReq() {
    that.pubsub.makeReq(method, path, q, body, callback);
  }
  makeReq();
};

module.exports = Topic;
