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

var arrify = require('arrify');
var is = require('is');
var prop = require('propprop');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:pubsub/iam}
 * @private
 */
var IAM = require('./iam');

/*! Developer Documentation
 *
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {string} name - Name of the topic.
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
function Topic(pubsub, name) {
  this.name = Topic.formatName_(pubsub.projectId, name);

  this.projectId = pubsub.projectId;
  this.pubsub = pubsub;
  this.unformattedName = name;

  this.makeReq_ = this.pubsub.makeReq_.bind(this.pubsub);

  /**
   * [IAM (Identity and Access Management)](https://cloud.google.com/pubsub/access_control)
   * allows you to set permissions on invidual resources and offers a wider
   * range of roles: editor, owner, publisher, subscriber, and viewer. This
   * gives you greater flexibility and allows you to set more fine-grained
   * access control.
   *
   * *The IAM access control features described in this document are Beta,
   * including the API methods to get and set IAM policies, and to test IAM
   * permissions. Google Cloud Pub/Sub's use of IAM features is not covered by
   * any SLA or deprecation policy, and may be subject to backward-incompatible
   * changes.*
   *
   * @mixes module:pubsub/iam
   *
   * @resource [Access Control Overview]{@link https://cloud.google.com/pubsub/access_control}
   * @resource [What is Cloud IAM?]{@link https://cloud.google.com/iam/}
   *
   * @example
   * //-
   * // Get the IAM policy for your topic.
   * //-
   * topic.iam.getPolicy(function(err, policy) {
   *   console.log(policy);
   * });
   */
  this.iam = new IAM(pubsub, this.name);
}

/**
 * Format a message object as the upstream API expects it.
 *
 * @private
 *
 * @return {object}
 */
Topic.formatMessage_ = function(message) {
  if (!(message.data instanceof Buffer)) {
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
 * @resource [Topics: publish API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/publish}
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
  messages = arrify(messages);

  if (messages.length === 0) {
    throw new Error('Cannot publish without a message.');
  }

  if (!messages.every(prop('data'))) {
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
 * @resource [Topics: delete API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/delete}
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
 * Get the official representation of this topic from the API.
 *
 * @resource [Topics: get API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/get}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The metadata of the Topic.
 * @param {object} callback.apiResponse - The full API response.
 */
Topic.prototype.getMetadata = function(callback) {
  var self = this;

  this.makeReq_('GET', this.name, null, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
};

/**
 * Get a list of the subscriptions registered to this topic. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or an array of {@linkcode module:pubsub/subscription} objects.
 *
 * @resource [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics.subscriptions/list}
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
 *
 * //-
 * // Get the subscriptions for this topic as a readable object stream.
 * //-
 * topic.getSubscriptions()
 *   .on('error', console.error)
 *   .on('data', function(subscription) {
 *     // subscription is a Subscription object.
 *   })
 *   .on('end', function() {
 *     // All subscriptions retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * topic.getSubscriptions()
 *   .on('data', function(subscription) {
 *     this.end();
 *   });
 */
Topic.prototype.getSubscriptions = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.topic = this;

  return this.pubsub.getSubscriptions(options, callback);
};

/**
 * Create a subscription to this topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or a {@linkcode module:pubsub/subscription} object.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions/create}
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

module.exports = Topic;
