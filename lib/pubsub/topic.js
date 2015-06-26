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

/*! Developer Documentation
 *
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {object} options - Configuration object.
 * @param {boolean=} options.autoCreate - Automatically create topic if it
 *     doesn't exist. Note that messages published to a topic with no
 *     subscribers will not be delivered. Default: true.
 * @param {string} options.name - Name of the topic.
 */
/**
 * A Topic object allows you to interact with a Google Cloud Pub/Sub topic.
 *
 * @constructor
 * @alias module:pubsub/topic
 *
 * @example
 * var pubsub = gcloud.pubsub({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var topic = pubsub.topic('my-topic');
 */
function Topic(pubsub, options) {
  this.autoCreate = options.autoCreate !== false;
  this.name = Topic.formatName_(pubsub.projectId, options.name);

  this.projectId = pubsub.projectId;
  this.pubsub = pubsub;
  this.unformattedName = options.name;
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
 * 'projects/{projectId}/topics/{topicName}'.
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
 * Publish the provided message or array of messages. On success, an array of
 * messageIds is returned in the response.
 *
 * @throws {Error} If no message is provided.
 * @throws {Error} If a message is missing a data property.
 *
 * @param {object|object[]} message - The message(s) to publish.
 * @param {*} message.data - The contents of the message.
 * @param {array=} message.attributes - Key/value pair of attributes to apply to
 *     the message. All values must be strings.
 * @param {function=} callback - The callback function.
 *
 * @example
 * topic.publish({
 *   data: 'Hello, world!'
 * }, function(err, messageIds, apiResponse) {});
 *
 * //-
 * // The data property can be a JSON object as well.
 * //-
 * var registerMessage = {
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
 *
 * topic.publish(registerMessage, function(err, messageIds, apiResponse) {});
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
 *   registerMessage,
 *   purchaseMessage
 * ], function(err, messageIds, apiResponse) {});
 */
Topic.prototype.publish = function(messages, callback) {
  messages = util.arrayize(messages);

  if (messages.length === 0) {
    throw new Error('Cannot publish without a message.');
  }

  if (!messages.every(util.prop('data'))) {
    throw new Error('Cannot publish message without a `data` property.');
  }

  callback = callback || util.noop;

  var body = {
    messages: messages.map(Topic.formatMessage_)
  };

  var path = this.name + ':publish';
  this.makeReq_('POST', path, null, body, function(err, result) {
    if (err) {
      callback(err, null, result);
      return;
    }
    callback(null, result && result.messageIds || [], result);
  });
};

/**
 * Delete the topic. This will not delete subscriptions to this topic.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * topic.delete(function(err, apiResponse) {});
 */
Topic.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', this.name, null, null, callback);
};

/**
 * Get a list of the subscriptions registered to this topic. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or an array of {@linkcode module:pubsub/subscription} objects.
 *
 * @param {object=} options - Configuration object.
 * @param {number=} options.pageSize - Maximum number of results to return.
 * @param {string=} options.pageToken - Page token.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, subscriptions, nextQuery, apiResponse) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `topic.getSubscriptions(nextQuery, callback);`.
 * };
 *
 * // Get all subscriptions for this topic.
 * topic.getSubscriptions(callback);
 *
 * // Customize the query.
 * topic.getSubscriptions({
 *   pageSize: 3
 * }, callback);
 */
Topic.prototype.getSubscriptions = function(options, callback) {
  if (!callback) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.topic = this;

  this.pubsub.getSubscriptions(options, callback);
};

/**
 * Create a subscription to this topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or a {@linkcode module:pubsub/subscription} object.
 *
 * @param {string} subName - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {number=} options.ackDeadlineSeconds - The maximum time after
 *     receiving a message that you must ack a message before it is redelivered.
 * @param {boolean=} options.autoAck - Automatically acknowledge the message
 *     once it's pulled. (default: false)
 * @param {number=} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {boolean=} options.reuseExisting - If the subscription already exists,
 *     reuse it. The options of the existing subscription are not changed. If
 *     false, attempting to create a subscription that already exists will fail.
 *     (default: false)
 * @param {function} callback - The callback function.
 *
 * @example
 * // Without specifying any options.
 * topic.subscribe('newMessages', function(err, subscription, apiResponse) {});
 *
 * // With options.
 * topic.subscribe('newMessages', {
 *   ackDeadlineSeconds: 90,
 *   autoAck: true,
 *   interval: 30
 * }, function(err, subscription, apiResponse) {});
 */
Topic.prototype.subscribe = function(subName, options, callback) {
  this.pubsub.subscribe(this, subName, options, callback);
};

/**
 * Create a Subscription object in reference to an existing subscription. This
 * command by itself will not run any API requests. You will receive a
 * {@linkcode module:pubsub/subscription} object, which will allow you to
 * interact with your subscription.
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
  return this.pubsub.subscription(name, options);
};

/**
 * Make an API request using the parent PubSub object's `makeReq_`. If the Topic
 * instance has `autoCreate: true` set, this method will first try to create the
 * Topic in the event of a 404.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Topic.prototype.makeReq_ = function(method, path, query, body, callback) {
  var self = this;

  function createTopicThenRetryRequest() {
    self.pubsub.createTopic(self.unformattedName, function(err, topic, res) {
      if (err) {
        callback(err, null, res);
        return;
      }

      self.pubsub.makeReq_(method, path, query, body, callback);
    });
  }

  this.pubsub.makeReq_(method, path, query, body, function(err, res) {
    if (self.autoCreate && err && err.code === 404 && method !== 'DELETE') {
      createTopicThenRetryRequest();
    } else {
      callback(err, res);
    }
  });
};

module.exports = Topic;
