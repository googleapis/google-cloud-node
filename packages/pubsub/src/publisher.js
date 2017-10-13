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
var each = require('async-each');
var extend = require('extend');
var is = require('is');

/*! Developer Documentation.
 *
 * @param {module:pubsub/topic} topic - The topic associated with this
 *     publisher.
 */
/**
 * A Publisher object allows you to publish messages to a specific topic.
 *
 * @constructor
 * @alias module:pubsub/publisher
 *
 * @resource [Topics: publish API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/publish}
 *
 * @param {object=} options - Configuration object.
 * @param {object} options.batching - Batching settings.
 * @param {number} options.batching.maxBytes - The maximum number of bytes to
 *     buffer before sending a payload.
 * @param {number} options.batching.maxMessages - The maximum number of messages
 *     to buffer before sending a payload.
 * @param {number} options.batching.maxMilliseconds - The maximum duration to
 *     wait before sending a payload.
 *
 * @example
 * var topic = pubsub.topic('my-topic');
 * var publisher = topic.publisher();
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

  // this object keeps track of all messages scheduled to be published
  // queued is essentially the `messages` field for the publish rpc req opts
  // bytes is used to track the size of the combined payload
  // callbacks is an array of callbacks - each callback is associated with a
  // specific message.
  this.inventory_ = {
    callbacks: [],
    queued: [],
    bytes: 0
  };

  this.settings = {
    batching: {
      maxBytes: Math.min(options.batching.maxBytes, Math.pow(1024, 2) * 9),
      maxMessages: Math.min(options.batching.maxMessages, 1000),
      maxMilliseconds: options.batching.maxMilliseconds
    }
  };

  this.timeoutHandle_ = null;
}

/**
 * Publish the provided message.
 *
 * @throws {TypeError} If data is not a Buffer object.
 *
 * @param {buffer} data - The message data. This must come in the form of a
 *     Buffer object.
 * @param {object=} attributes - Optional attributes for this message.
 * @param {function=} callback - The callback function. If omitted a Promise
 *     will be returned.
 * @param {?error} callback.error - An error returned while making this request.
 * @param {string} callback.messageId - The id for the message.
 *
 * @example
 * var data = new Buffer('Hello, world!');
 *
 * var callback = function(err, messageId) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * };
 *
 * publisher.publish(data, callback);
 *
 * //-
 * // Optionally you can provide an object containing attributes for the
 * // message.
 * //-
 * var attributes = {
 *   key: 'value'
 * };
 *
 * publisher.publish(data, attributes, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * publisher.publish(data).then(function(messageId) {});
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

  // if this message puts us over the maxBytes option, then let's ship
  // what we have and add it to the next batch
  if ((this.inventory_.bytes + data.length) > opts.maxBytes) {
    this.publish_();
  }

  // add it to the queue!
  this.queue_(data, attrs, callback);

  // next lets check if this message brings us to the message cap or if we
  // magically hit the max byte limit
  var hasMaxMessages = this.inventory_.queued.length === opts.maxMessages;

  if (this.inventory_.bytes === opts.maxBytes || hasMaxMessages) {
    this.publish_();
    return;
  }

  // otherwise let's set a timeout to send the next batch
  if (!this.timeoutHandle_) {
    this.timeoutHandle_ = setTimeout(
      this.publish_.bind(this), opts.maxMilliseconds);
  }
};

/**
 * This publishes a batch of messages and should never be called directly.
 *
 * @private
 */
Publisher.prototype.publish_ = function() {
  var callbacks = this.inventory_.callbacks;
  var messages = this.inventory_.queued;

  this.inventory_.callbacks = [];
  this.inventory_.queued = [];
  this.inventory_.bytes = 0;

  clearTimeout(this.timeoutHandle_);
  this.timeoutHandle_ = null;

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

    each(callbacks, function(callback, next) {
      var messageId = messageIds[callbacks.indexOf(callback)];

      callback(err, messageId);
      next();
    });
  });
};

/**
 * Queues message to be sent to the server.
 *
 * @private
 *
 * @param {buffer} data - The message data.
 * @param {object} attributes - The message attributes.
 * @param {function} callback - The callback function.
 */
Publisher.prototype.queue_ = function(data, attrs, callback) {
  this.inventory_.queued.push({
    data: data,
    attributes: attrs
  });

  this.inventory_.bytes += data.length;
  this.inventory_.callbacks.push(callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Publisher, {
  singular: true
});

module.exports = Publisher;
