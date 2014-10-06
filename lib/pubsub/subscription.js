/*!
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

/*!
 * @module pubsub/subscription
 */

'use strict';

var events = require('events');
var nodeutil = require('util');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {object} options - Configuration object.
 * @param {boolean} options.autoAck - Automatically acknowledge the message
 *     once it's pulled. (default: false)
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {string} options.name - Name of the subscription.
 */
/**
 * A Subscription object will give you access to your Google Cloud Pub/Sub
 * subscription.
 *
 * Subscriptions are sometimes retrieved when using various methods:
 *
 * - {@linkcode module:pubsub#getSubscriptions}
 * - {@linkcode module:pubsub/topic#getSubscriptions}
 * - {@linkcode module:pubsub/topic#subscribe}
 *
 * Subscription objects may be created directly with:
 *
 * - {@linkcode module:pubsub/topic#subscription}
 *
 * All Subscription objects are instances of an
 * [EventEmitter]{@link http://nodejs.org/api/events.html}. The subscription
 * will pull for messages automatically as long as there is at least one
 * listener assigned for the `message` event.
 *
 * @alias pubsub/subscription
 * @constructor
 *
 * @example
 * //-
 * // From {@linkcode module:pubsub#getSubscriptions}:
 * //-
 * pubsub.getSubscriptions(function(err, subscriptions) {
 *   // `subscriptions` is an array of Subscription objects.
 * });
 *
 * //-
 * // From {@linkcode module:pubsub/topic#getSubscriptions}:
 * //-
 * var topic = pubsub.topic('my-existing-topic');
 * topic.getSubscriptions(function(err, subscriptions) {
 *   // `subscriptions` is an array of Subscription objects.
 * });
 *
 * //-
 * // From {@linkcode module:pubsub/topic#subscribe}:
 * //-
 * var topic = pubsub.topic('my-existing-topic');
 * topic.subscribe('new-subscription', function(err, subscription) {
 *   // `subscription` is a Subscription object.
 * });
 *
 * //-
 * // From {@linkcode module:pubsub/topic#subscription}:
 * //-
 * var topic = pubsub.topic('my-existing-topic');
 * var subscription = topic.subscription('my-existing-subscription');
 * // `subscription` is a Subscription object.
 *
 * //-
 * // Once you have obtained a subscription object, you may begin to register
 * // listeners. This will automatically trigger pulling for messages.
 * //-
 * // Register an error handler.
 * subscription.on('error', function(err) {});
 *
 * // Register a listener for `message` events.
 * function onMessage(message) {
 *   // Called every time a message is received.
 *   // message.id = ID used to acknowledge its receival.
 *   // message.data = Contents of the message.
 * }
 * subscription.on('message', onMessage);
 *
 * // Remove the listener from receiving `message` events.
 * subscription.removeListener('message', onMessage);
 */
function Subscription(pubsub, options) {
  events.EventEmitter.call(this);

  this.name = Subscription.formatName_(pubsub.projectId, options.name);
  this.makeReq_ = pubsub.makeReq_.bind(pubsub);

  this.autoAck = util.is(options.autoAck, 'boolean') ? options.autoAck : false;
  this.closed = false;
  this.interval = util.is(options.interval, 'number') ? options.interval : 10;

  this.listenForEvents_();
}

nodeutil.inherits(Subscription, events.EventEmitter);

/**
 * Format the name of a subscription. A subscription's full name is in the
 * format of /subscription/{projectId}/{name}.
 *
 * @private
 */
Subscription.formatName_ = function(projectId, name) {
  // Simple check if the name is already formatted.
  if (name.indexOf('/') > -1) {
    return name;
  }
  return '/subscriptions/' + projectId + '/' + name;
};

/**
 * Simplify a message from an API response to have two properties, `id` and
 * `data`. `data` is always converted to a string.
 *
 * @private
 */
Subscription.formatMessage_ = function(msg) {
  var message = {
    id: msg.ackId
  };
  if (msg.pubsubEvent && msg.pubsubEvent.message) {
    message.data =
      new Buffer(msg.pubsubEvent.message.data, 'base64').toString('utf-8');
    try {
      message.data = JSON.parse(message.data);
    } catch(e) {}
  }
  return message;
};

/**
 * Begin listening for events on the subscription. This method keeps track of
 * how many message listeners are assigned, and then removed, making sure
 * polling is handled automatically.
 *
 * As long as there is one active message listener, the connection is open. As
 * soon as there are no more message listeners, the connection is closed.
 *
 * @private
 *
 * @example
 * this.listenForEvents_();
 */
Subscription.prototype.listenForEvents_ = function() {
  var that = this;
  var messageListeners = 0;

  this.on('newListener', function(event) {
    if (event === 'message') {
      messageListeners++;
      if (that.closed) {
        that.closed = false;
      }
      that.startPulling_();
    }
  });

  this.on('removeListener', function(event) {
    if (event === 'message' && --messageListeners === 0) {
      that.closed = true;
    }
  });
};

/**
 * Poll the backend for new messages. This runs a loop to ping the API at the
 * provided interval from the subscription's instantiation. If one wasn't
 * provided, the default value is 10 milliseconds.
 *
 * If messages are received, they are emitted on the `message` event.
 *
 * Note: This method is automatically called once a message event handler is
 * assigned to the description.
 *
 * To stop pulling, see {@linkcode module:pubsub/subscription#close}.
 *
 * @private
 *
 * @example
 * subscription.startPulling_();
 */
Subscription.prototype.startPulling_ = function() {
  var that = this;
  if (this.closed) {
    return;
  }
  this.pull({
    returnImmediately: false
  }, function(err, message) {
    if (err) {
      that.emit('error', err);
    }
    if (message) {
      that.emit('message', message);
    }
    setTimeout(that.startPulling_.bind(that), that.interval);
  });
};

/**
 * Acknowledge to the backend that the message was retrieved. You must provide
 * either a single ID, or an array of IDs.
 *
 * @throws {Error} If at least one id is not provided.
 *
 * @param {string|string[]} ids - An ID or array of message IDs.
 * @param {function} callback - The callback function.
 *
 * @example
 * subscription.ack('ePHEESyhuE8e...', function(err) {});
 */
Subscription.prototype.ack = function(ids, callback) {
  if (!ids || ids.length === 0) {
    throw new Error(
        'At least one ID must be specified before it can be acknowledged');
  }
  ids = util.arrayize(ids);
  var body = {
    subscription: this.name,
    ackId: ids
  };
  this.makeReq_('POST', 'subscriptions/acknowledge', null, body, callback);
};

/**
 * Delete the subscription. Pull requests from the current subscription will be
 * errored once unsubscription is complete.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * subscription.delete(function(err) {});
 */
Subscription.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_(
      'DELETE', 'subscriptions/' + this.name, null, true, function(err) {
    if (err) {
      callback(err);
      return;
    }
    this.closed = true;
    this.removeAllListeners();
    callback(null);
  }.bind(this));
};

/**
 * Pull messages from the subscribed topic. If messages were found, your
 * callback is executed with the message object.
 *
 * Note that messages are pulled automatically once you register your first
 * event listener to the subscription, thus the call to `pull` is handled for
 * you. If you don't want to start pulling, simply don't register a
 * `subscription.on('message', function() {})` event handler.
 *
 * @param {object=} options - Configuration object.
 * @param {boolean=} options.returnImmediately - If set, the system will respond
 *     immediately. Otherwise, wait until new messages are available. Returns if
 *     timeout is reached.
 * @param {function} callback - The callback function.
 *
 * @example
 * subscription.pull(function(err, message) {
 *   // message.id = ID used to acknowledge its receival.
 *   // message.data = Contents of the message.
 * });
 */
Subscription.prototype.pull = function(options, callback) {
  var that = this;
  // TODO(jbd): Should not be racing with other pull.
  if (!callback) {
    callback = options;
    options = {};
  }
  var body = {
    subscription: this.name,
    returnImmediately: !!options.returnImmediately
  };
  this.makeReq_(
      'POST', 'subscriptions/pull', null, body, function(err, message) {
    // TODO(jbd): Fix API to return a list of messages.
    if (err) {
      callback(err);
      return;
    }
    message = Subscription.formatMessage_(message);
    if (that.autoAck) {
      that.ack(message.id, function(err) {
        callback(err, message);
      });
    } else {
      callback(null, message);
    }
  });
};

module.exports = Subscription;
