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
 * @module pubsub/batch
 */

'use strict';

var prop = require('propprop');

/**
 * Semi-generic Batch object used to queue up multiple requests while limiting
 * the number of concurrent requests.
 *
 * @constructor
 * @alias module:pubsub/batch
 *
 * @param {object} options - Batch configuration settings.
 * @param {number} options.maxBytes - Max size of data to be sent per request.
 * @param {number} options.maxMessages - Max number of messages to be sent per
 *     request.
 * @param {number} options.maxMilliseconds - Max time to wait before sending
 *     data.
 * @param {number} options.maxRequests - Max number of concurrent requests
 *     allowed.
 * @param {function(messages, callback)} options.sendHandler - Function to be
 *     called with message batch.
 *
 * @example
 * var batch = new Batch({
 *   maxBytes: Math.pow(1024, 2) * 5,
 *   maxMessages: 1000,
 *   maxMilliseconds: 1000,
 *   maxRequests: 5,
 *   send: function(messages, done) {
 *     var reqOpts = {
 *       topic: self.topic.name,
 *       messages = messages.map(function(message) {
 *         return {
 *           data: message.data,
 *           attributes: message.attrs
 *         };
 *       })
 *     };
 *
 *     return self.api.Publisher.publish(reqOpts, function(err, resp) {
 *       if (err) {
 *         done(err);
 *         return;
 *       }
 *
 *       done(null, {
 *         responses: resp.messageIds
 *       })
 *     });
 *   }
 * });
 */
function Batch(options) {
  this.maxBytes = options.maxBytes || Math.pow(1024, 2) * 5;
  this.maxMessages = options.maxMessages || 1000;
  this.maxMilliseconds = options.maxMilliseconds || 1000;
  this.maxRequests = options.maxRequests || 5;
  this.sendHandler = options.send;

  this.inventory = {
    queued: new Set(),
    inFlight: new Set()
  };

  Object.defineProperty(this.inventory, 'queueBytes', {
    get: function() {
      var size = 0;

      this.queued.forEach(function(message) {
        size += message.size;
      });

      return size;
    }
  });

  this.intervalHandle_ = null;
  this.activeRequests_ = 0;
}

/**
 * Adds message to the queue.
 *
 * @param {*} data - The message data.
 * @param {function} callback - Callback to be ran once message is sent.
 *
 * @example
 * batch.add(1234, function(err, resp) {});
 */
Batch.prototype.add = function(data, callback) {
  this.inventory.queued.add({
    data: data,
    callback: callback
  });

  var reachedMaxMessages = this.inventory.queued.size >= this.maxMessages;
  var reachedMaxBytes = this.inventory.queueBytes >= this.maxBytes;
  var reachedMaxRequests = this.activeRequests_ >= this.maxRequests;

  if ((reachedMaxMessages || reachedMaxBytes) && !reachedMaxRequests) {
    this.send(this.getNextMessageBatch());
  } else if (!this.intervalHandle_) {
    this.beginSending();
  }
};

/**
 * Starts the send interval.
 *
 * @example
 * batch.beginSending();
 */
Batch.prototype.beginSending = function() {
  if (this.intervalHandle_) {
    return;
  }

  var self = this;

  this.intervalHandle_ = setInterval(function() {
    self.send(self.getNextMessageBatch());

    if (self.inventory.queued.size === 0) {
      clearInterval(self.intervalHandle_);
      self.intervalHandle_ = null;
    }
  }, this.maxMilliseconds);
};

/**
 * Prepares next batch of messages to be sent.
 *
 * @return array
 *
 * @example
 * var messages = batch.getNextMessageBatch();
 * batch.send(messages);
 */
Batch.prototype.getNextMessageBatch = function() {
  var size = 0;
  var messages = [];

  var queued = this.inventory.queued[Symbol.iterator]();
  var message;

  while (message = queued.next().value) {
    var isOverSizeLimit = (size + message.size) > this.maxBytes;
    var isOverMessageLimit = (messages.length + 1) > this.maxMessages;

    if (isOverSizeLimit || isOverMessageLimit) {
      break;
    }

    this.inventory.queued.delete(message);
    messages.push(message);
  }

  return messages;
};

/**
 * Sends out messages
 *
 * @param {array} messages - Array of messages.
 *
 * @example
 * var messages = [{
 *   data: 123,
 *   callback: function(err, resp) {}
 * }];
 *
 * batch.send(messages);
 */
Batch.prototype.send = function(messages) {
  if (this.activeRequests_ >= this.maxRequests) {
    this.scheduleSend();
    return;
  }

  var self = this;

  messages.forEach(function(message) {
    self.inventory.inFlight.add(message);
  });

  this.activeRequests_ += 1;

  this.sendHandler(messages.map(prop('data')), function(err, resp) {
    self.activeRequests_ -= 1;

    messages.forEach(function(message, i) {
      var response = resp && resp.responses ? resp.responses[i] : resp;

      message.callback(err, response);
      self.inventory.inFlight.delete(message);
    });
  });
};

module.exports = Batch;
