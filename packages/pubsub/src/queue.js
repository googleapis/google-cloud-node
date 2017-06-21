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
 * @module pubsub/queue
 */

'use strict';

var prop = require('propprop');

/**
 * Semi-generic Queue object used to queue up multiple requests while limiting
 * the number of concurrent requests.
 *
 * @constructor
 * @alias module:pubsub/queue
 *
 * @param {object} options - Queue configuration settings.
 * @param {number} options.maxBytes - Max size of data to be sent per request.
 * @param {number} options.maxMessages - Max number of messages to be sent per
 *     request.
 * @param {number} options.maxMilliseconds - Max time to wait before sending
 *     data.
 * @param {number} options.maxRequests - Max number of concurrent requests
 *     allowed.
 * @param {function(messages, callback)} options.sendHandler - Function to be
 *     called with message queue.
 *
 * @example
 * var queue = new Queue({
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
function Queue(options) {
  this.maxBytes = options.maxBytes || Math.pow(1024, 2) * 5;
  this.maxMessages = options.maxMessages || 1000;
  this.maxMilliseconds = options.maxMilliseconds || 1000;
  this.sendHandler = options.send;

  this.inventory = {
    queued: new Set(),
    inFlight: new Set()
  };

  Object.defineProperty(this.inventory, 'queueBytes', {
    get: function() {
      var size = 0;

      this.queued.forEach(function(message) {
        size += message.data.size;
      });

      return size;
    }
  });

  this.intervalHandle_ = null;
}

/**
 * Adds message to the queue.
 *
 * @param {*} data - The message data.
 * @param {function} callback - Callback to be ran once message is sent.
 *
 * @example
 * queue.add(1234, function(err, resp) {});
 */
Queue.prototype.add = function(data, callback) {
  var hasMaxMessages = (this.inventory.queued.size + 1) >= this.maxMessages;
  var hasMaxBytes = (this.inventory.queueBytes + data.size) >= this.maxBytes;

  if (hasMaxMessages || hasMaxBytes) {
    this.send(this.getNextMessageBatch());
  } else if (!this.intervalHandle_) {
    this.startSendInterval();
  }

  this.inventory.queued.add({
    data: data,
    callback: callback
  });
};

/**
 * Starts the send interval.
 *
 * @example
 * queue.startSendInterval();
 */
Queue.prototype.startSendInterval = function() {
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
 * Prepares next queue of messages to be sent.
 *
 * @return array
 *
 * @example
 * var messages = queue.getNextMessageBatch();
 * queue.send(messages);
 */
Queue.prototype.getNextMessageBatch = function() {
  var messages = Array.from(this.inventory.queued);

  this.inventory.queued.clear();
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
 * queue.send(messages);
 */
Queue.prototype.send = function(messages) {
  if (this.activeRequests_ >= this.maxRequests) {
    this.scheduleSend();
    return;
  }

  var self = this;

  messages.forEach(function(message) {
    self.inventory.inFlight.add(message);
  });

  this.sendHandler(messages.map(prop('data')), function(err, resp) {
    messages.forEach(function(message, i) {
      var response = resp && resp.responses ? resp.responses[i] : resp;

      message.callback(err, response);
      self.inventory.inFlight.delete(message);
    });
  });
};

module.exports = Queue;
