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
 * @module pubsub/message
 */

'use strict';

var common = require('@google-cloud/common');

/**
 *
 */
function Message(subscription, resp) {
  this.subscription = subscription;
  this.api = subscription.api;

  this.ackId = resp.ackId;

  this.id = resp.message.messageId;
  this.data = resp.message.data;
  this.attrs = resp.message.attributes;

  var pt = resp.message.publishTime;
  var milliseconds = parseInt(pt.nanos, 10) / 1e6;

  this.publishTime = new Date(parseInt(pt.seconds, 10) * 1000 + milliseconds);
}

/**
 *
 */
Message.prototype.ack = function(callback) {
  this.subscription.ack(this.ackId, callback)
};

/**
 *
 */
Message.prototype.modifyAckDeadline = function(milliseconds, callback) {
  var seconds = milliseconds / 1000;

  if (this.subscription.connection) {
    this.subscription.connection.write({
      modifyDeadlineAckIds: [this.ackId],
      modifyDeadlineSeconds: [seconds]
    });

    if (is.fn(callback)) {
      setImmediate(callback);
    }

    return;
  }

  callback = callback || common.util.noop;

  reqOpts = {
    subscription: this.subscription.name,
    ackIds: [this.ackId],
    ackDeadlineSeconds: seconds
  };

  this.subscription.request({
    client: 'subscriberClient',
    method: 'modifyAckDeadline',
    reqOpts: reqOpts
  }, callback)
};

/**
 *
 */
Message.prototype.nack = function(callback) {
  this.modifyAckDeadline(0, callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Message);

module.exports = Message;
