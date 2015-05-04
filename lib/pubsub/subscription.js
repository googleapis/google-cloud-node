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
 * @type {module:common/util}
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
 * [EventEmitter](http://nodejs.org/api/events.html). The subscription will pull
 * for messages automatically as long as there is at least one listener assigned
 * for the `message` event.
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
 *   // message.id = ID of the message.
 *   // message.ackId = ID used to acknowledge the message receival.
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
 * format of projects/{projectId}/subscriptions/{subName}.
 *
 * @private
 */
Subscription.formatName_ = function(projectId, name) {
  // Simple check if the name is already formatted.
  if (name.indexOf('/') > -1) {
    return name;
  }
  return 'projects/' + projectId + '/subscriptions/' + name;
};

/**
 * Simplify a message from an API response to have three properties, `id`,
 * `data` and `attributes`. `data` is always converted to a string.
 *
 * @private
 */
Subscription.formatMessage_ = function(msg) {
  var innerMessage = msg.message;
  var message = {
    ackId: msg.ackId
  };

  if (innerMessage) {
    message.id = innerMessage.messageId;

    if (innerMessage.data) {
      message.data = new Buffer(innerMessage.data, 'base64').toString('utf-8');

      try {
        message.data = JSON.parse(message.data);
      } catch(e) {}
    }

    if (innerMessage.attributes) {
      message.attributes = innerMessage.attributes;
    }
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
  var self = this;
  var messageListeners = 0;

  this.on('newListener', function(event) {
    if (event === 'message') {
      messageListeners++;
      if (self.closed) {
        self.closed = false;
      }
      self.startPulling_();
    }
  });

  this.on('removeListener', function(event) {
    if (event === 'message' && --messageListeners === 0) {
      self.closed = true;
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
  var self = this;
  if (this.closed) {
    return;
  }
  this.pull({
    returnImmediately: false
  }, function(err, messages, apiResponse) {
    if (err) {
      self.emit('error', err, apiResponse);
    }
    if (messages) {
      messages.forEach(function(message) {
        self.emit('message', message, apiResponse);
      });
    }
    setTimeout(self.startPulling_.bind(self), self.interval);
  });
};

/**
 * Acknowledge to the backend that the message was retrieved. You must provide
 * either a single ackId or an array of ackIds.
 *
 * @throws {Error} If at least one ackId is not provided.
 *
 * @param {string|string[]} ackIds - An ackId or array of ackIds.
 * @param {function=} callback - The callback function.
 *
 * @example
 * subscription.ack('ePHEESyhuE8e...', function(err, apiResponse) {});
 */
Subscription.prototype.ack = function(ackIds, callback) {
  if (!ackIds || ackIds.length === 0) {
    throw new Error(
        'At least one ID must be specified before it can be acknowledged.');
  }
  ackIds = util.arrayize(ackIds);
  var body = {
    ackIds: ackIds
  };
  var path = this.name + ':acknowledge';
  this.makeReq_('POST', path, null, body, callback || util.noop);
};

/**
 * Delete the subscription. Pull requests from the current subscription will be
 * errored once unsubscription is complete.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * subscription.delete(function(err, apiResponse) {});
 */
Subscription.prototype.delete = function(callback) {
  var self = this;
  callback = callback || util.noop;
  this.makeReq_('DELETE', this.name, null, true, function(err, result) {
    if (err) {
      callback(err, result);
      return;
    }
    self.closed = true;
    self.removeAllListeners();
    callback(null, result);
  });
};

/**
 * Pull messages from the subscribed topic. If messages were found, your
 * callback is executed with an array of message objects.
 *
 * Note that messages are pulled automatically once you register your first
 * event listener to the subscription, thus the call to `pull` is handled for
 * you. If you don't want to start pulling, simply don't register a
 * `subscription.on('message', function() {})` event handler.
 *
 * @todo Should not be racing with other pull.
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.returnImmediately - If set, the system will respond
 *     immediately. Otherwise, wait until new messages are available. Returns if
 *     timeout is reached.
 * @param {number} options.maxResults - Limit the amount of messages pulled.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Pull all available messages.
 * //-
 * subscription.pull(function(err, messages) {
 *   // messages = [
 *   //   {
 *   //     ackId: '',     // ID used to acknowledge its receival.
 *   //     id: '',        // Unique message ID.
 *   //     data: '',      // Contents of the message.
 *   //     attributes: {} // Attributes of the message.
 *   //   },
 *   //   // ...
 *   // ]
 * });
 *
 * //-
 * // Pull a single message.
 * //-
 * var opts = {
 *   maxResults: 1
 * };
 *
 * subscription.pull(opts, function(err, messages, apiResponse) {});
 */
Subscription.prototype.pull = function(options, callback) {
  var self = this;
  var MAX_EVENTS_LIMIT = 1000;

  if (!callback) {
    callback = options;
    options = {};
  }

  if (!util.is(options.maxResults, 'number')) {
    options.maxResults = MAX_EVENTS_LIMIT;
  }

  var body = {
    returnImmediately: !!options.returnImmediately,
    maxMessages: options.maxResults
  };

  var path = this.name + ':pull';
  this.makeReq_('POST', path, null, body, function(err, response) {
    if (err) {
      callback(err, null, response);
      return;
    }

    var messages = response.receivedMessages || [];
    messages = messages.map(Subscription.formatMessage_);

    if (self.autoAck && messages.length !== 0) {
      var ackIds = messages.map(function(message) {
        return message.ackId;
      });

      self.ack(ackIds, function(err) {
        callback(err, messages, response);
      });
    } else {
      callback(null, messages, response);
    }
  });
};

/**
 * Modify the ack deadline for a specific message. This method is useful to
 * indicate that more time is needed to process a message by the subscriber, or
 * to make the message available for redelivery if the processing was
 * interrupted.
 *
 * @param {object} options - The configuration object.
 * @param {number} options.ackId - The ack id to change.
 * @param {number} options.seconds - Number of seconds after call is made to
 *     set the deadline of the ack.
 * @param {Function=} callback - The callback function.
 *
 * @example
 * var options = {
 *   ackId: 123,
 *   seconds: 10 // Expire in 10 seconds from call.
 * };
 * subscription.setAckDeadline(options, function(err, apiResponse) {});
 */
Subscription.prototype.setAckDeadline = function(options, callback) {
  var body = {
    ackId: options.ackId,
    ackDeadlineSeconds: options.seconds
  };

  callback = callback || util.noop;

  var path = this.name + ':modifyAckDeadline';
  this.makeReq_('POST', path, null, body, callback);
};

module.exports = Subscription;
