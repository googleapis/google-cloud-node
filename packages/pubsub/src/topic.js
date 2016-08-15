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
var common = require('@google-cloud/common');
var is = require('is');
var prop = require('propprop');
var util = require('util');

/**
 * @type {module:pubsub/iam}
 * @private
 */
var IAM = require('./iam.js');

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
 * var topic = pubsub.topic('my-topic');
 */
function Topic(pubsub, name) {
  this.name = Topic.formatName_(pubsub.projectId, name);
  this.pubsub = pubsub;

  var methods = {
    /**
     * Create a topic.
     *
     * @param {object=} config - See {module:pubsub#createTopic}.
     *
     * @example
     * topic.create(function(err, topic, apiResponse) {
     *   if (!err) {
     *     // The topic was created successfully.
     *   }
     * });
     */
    create: true,

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
    delete: {
      protoOpts: {
        service: 'Publisher',
        method: 'deleteTopic'
      },
      reqOpts: {
        topic: this.name
      }
    },

    /**
     * Check if the topic exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the topic exists or not.
     *
     * @example
     * topic.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a topic if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * topic.get(function(err, topic, apiResponse) {
     *   // `topic.metadata` has been populated.
     * });
     */
    get: true,

    /**
     * Get the official representation of this topic from the API.
     *
     * @resource [Topics: get API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The metadata of the Topic.
     * @param {object} callback.apiResponse - The full API response.
     */
    getMetadata: {
      protoOpts: {
        service: 'Publisher',
        method: 'getTopic'
      },
      reqOpts: {
        topic: this.name
      }
    }
  };

  common.GrpcServiceObject.call(this, {
    parent: pubsub,
    id: this.name,
    createMethod: pubsub.createTopic.bind(pubsub),
    methods: methods
  });

  /**
   * [IAM (Identity and Access Management)](https://cloud.google.com/pubsub/access_control)
   * allows you to set permissions on individual resources and offers a wider
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

util.inherits(Topic, common.GrpcServiceObject);

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
 * Get a list of the subscriptions registered to this topic. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or an array of {module:pubsub/subscription} objects.
 *
 * @resource [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics.subscriptions/list}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {number} options.pageSize - Maximum number of results to return.
 * @param {string} options.pageToken - Page token.
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

  callback = callback || common.util.noop;

  var protoOpts = {
    service: 'Publisher',
    method: 'publish',
  };

  var reqOpts = {
    topic: this.name,
    messages: messages.map(Topic.formatMessage_)
  };

  this.request(protoOpts, reqOpts, function(err, result) {
    if (err) {
      callback(err, null, result);
      return;
    }

    callback(null, arrify(result.messageIds), result);
  });
};

/**
 * Create a subscription to this topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or a {module:pubsub/subscription} object.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions/create}
 *
 * @param {string} subName - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {number=} options.ackDeadlineSeconds - The maximum time after
 *     receiving a message that you must ack a message before it is redelivered.
 * @param {boolean=} options.autoAck - Automatically acknowledge the message
 *     once it's pulled. (default: false)
 * @param {string} options.encoding - When pulling for messages, this type is
 *     used when converting a message's data to a string. (default: 'utf-8')
 * @param {number=} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {number} options.maxInProgress - Maximum messages to consume
 *     simultaneously.
 * @param {boolean=} options.reuseExisting - If the subscription already exists,
 *     reuse it. The options of the existing subscription are not changed. If
 *     false, attempting to create a subscription that already exists will fail.
 *     (default: false)
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds on an HTTP request to pull new messages to wait for a
 *     response before the connection is broken.
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
 * Create a Subscription object. This command by itself will not run any API
 * requests. You will receive a {module:pubsub/subscription} object,
 * which will allow you to interact with a subscription.
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
 * var subscription = topic.subscription('my-subscription');
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
  options = options || {};
  options.topic = this;

  return this.pubsub.subscription(name, options);
};

module.exports = Topic;
