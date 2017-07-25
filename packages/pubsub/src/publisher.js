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
 * @module pubsub/publisher
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var prop = require('propprop');

/**
 *
 */
function Publisher(topic, options) {
  options = extend(true, {
    batching: {
      maxBytes: Math.pow(1024, 2) * 5,
      maxMessages: 1000,
      maxMilliseconds: 1000
    }
  }, options);

  this.topic = topic;
  this.api = topic.api;

  this.inventory_ = {
    callbacks: [],
    queued: [],
    queuedBytes: 0
  };

  this.settings = {
    batching: {
      maxBytes: Math.min(options.batching.maxBytes, Math.pow(1024, 2) * 9),
      maxMessages: Math.min(options.batching.maxMessages, 1000),
      maxMilliseconds: options.maxMilliseconds
    }
  };

  this.timeoutHandle_ = null;
}

/**
 *
 */
Publisher.prototype.publish = function(data, attrs, callback) {
  if (!(data instanceof Buffer)) {
    throw new TypeError('Data must be in the form of a Buffer.');
  }

  if (is.fn(attrs)) {
    callback = attrs;
    attrs = {};
  }

  var opts = this.settings.batching;
  var newPayloadSize = this.inventory_.queueBytes + data.size;

  // if this message puts us over the maxBytes option, then let's ship
  // what we have and add it to the next batch
  if (newPayloadSize > opts.maxBytes) {
    this.publishImmediately_();
    this.queue_(data, attrs, callback);
    return;
  }

  // haven't hit maxBytes? add it to the queue!
  this.queue_(data, attrs, callback);

  // next lets check if this message brings us to the message cap or if we
  // magically hit the max byte limit
  var hasMaxMessages = this.inventory_.queued.length === opts.maxMessages;

  if (newPayloadSize === opts.maxBytes || hasMaxMessages) {
    this.publishImmediately_();
    return;
  }

  // otherwise let's set a timeout to send the next batch
  if (!this.timeoutHandle_) {
    this.timeoutHandle_ = setTimeout(
      this.publish_.bind(this), opts.maxMilliseconds);
  }
};

/**
 * This should never be called directly.
 */
Publisher.prototype.publish_ = function() {
  var self = this;

  var callbacks = this.inventory_.callbacks;
  var messages = this.inventory_.queued;

  this.inventory_.callbacks = [];
  this.inventory_.queued = [];
  this.inventory_.queuedBytes = 0;

  var reqOpts = {
    topic: this.topic.name,
    messages: messages
  };

  this.topic.request({
    client: 'publisherClient',
    method: 'publish',
    reqOpts: reqOpts
  }, function(err, resp) {
    var messageIds = arrify(resp && resp.messageIds);

    callbacks.forEach(function(callback, i) {
      callback(err, messageIds[i]);
    });
  });
};

/**
 *
 */
Publisher.prototype.publishImmediately_ = function() {
  clearTimeout(this.timeoutHandle_);
  this.timeoutHandle_ = null;
  this.publish_();
};

/**
 *
 */
Publisher.prototype.queue_ = function(data, attrs, callback) {
  this.inventory_.queued.push({
    data: data,
    attributes: attrs
  });

  this.inventory_.queueBytes += data.size;
  this.inventory_.callbacks.push(callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Publisher);

module.exports = Publisher;
