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
 * @module pubsub/topic
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:pubsub/subscription}
 * @private
 */
var Subscription = require('./subscription.js');

/*! Developer Documentation
 *
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {object} options - Configuration object.
 * @param {string} options.name - Name of the topic.
 */
/**
 * A Topic object allows you to interact with a Google Cloud Pub/Sub topic. To
 * get this object, you will use the methods on the `pubsub` object,
 * {@linkcode module:pubsub#topic} and {@linkcode module:pubsub#createTopic}.
 *
 * @constructor
 * @alias module:pubsub/topic
 *
 * @example
 * // From pubsub.topic:
 * var topic = pubsub.topic('my-existing-topic');
 *
 * // From pubsub.createTopic:
 * pubsub.createTopic('my-new-topic', function(err, topic) {
 *   // `topic` is a Topic object.
 * });
 */
function Topic(pubsub, options) {
  this.makeReq_ = pubsub.makeReq_.bind(pubsub);
  this.name = Topic.formatName_(pubsub.projectId, options.name);
  this.projectId = pubsub.projectId;
  this.pubsub = pubsub;
}

/**
 * Format a message object as the upstream API expects it.
 *
 * @private
 *
 * @return {object}
 */
Topic.formatMessage_ = function(message) {
  if (!util.is(message.data, 'buffer')) {
    message.data = new Buffer(JSON.stringify(message.data));
  }

  message.data = message.data.toString('base64');

  return message;
};

/**
 * Format the name of a topic. A Topic's full name is in the format of
 * 'projects/{projectId}/topics/{topicName}.
 *
 * @private
 *
 * @return {string}
 */
Topic.formatName_ = function(projectId, name) {
  // Simple check if the name is already formatted.
  if (name.indexOf('/') > -1) {
    return name;
  }
  return 'projects/' + projectId + '/topics/' + name;
};

/**
 * Publish the provided message or array of messages. A message can be of any
 * type. On success, an array of messageIds is returned in the response.
 *
 * @throws {Error} If no message is provided.
 *
 * @param {object|object[]} message - The message(s) to publish.
 * @param {*} message.data - The contents of the message.
 * @param {array=} message.attributes - Key/value pair of attributes to apply to
 *     the message. All values must be strings.
 * @param {function=} callback - The callback function.
 *
 * @example
 * var registrationMessage = {
 *   data: {
 *     userId: 3,
 *     name: 'Stephen',
 *     event: 'new user'
 *   },
 *   attributes: {
 *     key: 'value',
 *     hello: 'world'
 *   }
 * };
 * topic.publish(registrationMessage, function(err, messageIds) {});
 *
 * //-
 * // You can publish a batch of messages at once by supplying an array.
 * //-
 * var purchaseMessage = {
 *   data: {
 *     userId: 3,
 *     product: 'computer',
 *     event: 'purchase'
 *   }
 * };
 *
 * topic.publish([
 *   registrationMessage,
 *   purchaseMessage
 * ], function(err, messageIds) {});
 */
Topic.prototype.publish = function(messages, callback) {
  messages = util.arrayize(messages);

  if (messages.length === 0) {
    throw new Error('Cannot publish without a message.');
  }

  callback = callback || util.noop;

  var body = {
    messages: messages.map(Topic.formatMessage_)
  };

  var path = this.name + ':publish';
  this.makeReq_('POST', path, null, body, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, result && result.messageIds || []);
  });
};

/**
 * Delete the topic. This will also delete any subscriptions to this topic.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * topic.delete(function(err) {});
 */
Topic.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', this.name, null, null, callback);
};

/**
 * Get a list of the subscriptions registered to this topic. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * Your provided callback will either be invoked with an error object, if an API
 * error occurred, or an array of {@linkcode module:pubsub/subscription}
 * objects.
 *
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.pageSize - Maximum number of results to return.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Get all subscriptions for this topic.
 * topic.getSubscriptions(function(err, subscriptions, nextQuery) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `topic.getSubscriptions(nextQuery, callback);`.
 * });
 *
 * // Customize the query.
 * topic.getSubscriptions({
 *   pageSize: 3
 * }, function(err, subscriptions, nextQuery) {});
 */
Topic.prototype.getSubscriptions = function(query, callback) {
  var self = this;
  if (util.is(query, 'function')) {
    callback = query;
    query = {};
  }

  var path = this.name + '/subscriptions';
  this.makeReq_('GET', path, query, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }

    var subscriptions = (result.subscriptions || []).map(function(name) {
      return new Subscription(self, {
        name: name
      });
    });
    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = query;
      nextQuery.pageToken = result.nextPageToken;
    }
    callback(null, subscriptions, nextQuery);
  });
};

/**
 * Create a subscription to this topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will either be invoked with an error object, if an API
 * error occurred, or a {@linkcode module:pubsub/subscription} object.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {number=} options.ackDeadlineSeconds - The maximum time after
 *     receiving a message that you must ack a message before it is redelivered.
 * @param {boolean=} options.autoAck - Automatically acknowledge the message
 *     once it's pulled. (default: false)
 * @param {number=} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {function} callback - The callback function.
 *
 * @example
 * // Without specifying any options.
 * topic.subscribe('new-subscription', function(err, subscription) {});
 *
 * // With options.
 * topic.subscribe('new-subscription', {
 *   ackDeadlineSeconds: 90,
 *   autoAck: true,
 *   interval: 30
 * }, function(err, subscription) {});
 */
Topic.prototype.subscribe = function(name, options, callback) {
  var self = this;
  if (!name) {
    throw new Error('A name is required for a new subscription.');
  }
  if (!callback) {
    callback = options;
    options = {};
  }

  var body = {
    topic: this.name
  };

  if (options.ackDeadlineSeconds) {
    body.ackDeadlineSeconds = options.ackDeadlineSeconds;
  }

  var path = Subscription.formatName_(this.projectId, name);
  this.makeReq_('PUT', path, null, body, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, self.subscription(name, options));
  });
};

/**
 * Create a Subscription object in reference to an existing subscription. This
 * command by itself will not run any API requests. You will receive a
 * {@linkcode module:pubsub/subscription} object, which will allow you to
 * interact with your subscription.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - Name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {boolean=} options.autoAck - Automatically acknowledge the message
 *     once it's pulled.
 * @param {number=} options.interval - Interval in milliseconds to check for new
 *     messages.
 * @return {module:pubsub/subscription}
 *
 * @example
 * var subscription = topic.subscription('my-existing-subscription');
 *
 * // Register a listener for `message` events.
 * subscription.on('message', function(message) {
 *   // Called every time a message is received.
 *   // message.id = ID used to acknowledge its receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 * });
 */
Topic.prototype.subscription = function(name, options) {
  if (!name) {
    throw new Error('The name of a subscription is required.');
  }
  options = options || {};
  options.name = name;
  return new Subscription(this.pubsub, options);
};

module.exports = Topic;
