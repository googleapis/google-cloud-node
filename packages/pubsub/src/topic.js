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
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var is = require('is');
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
 * A Topic object allows you to interact with a Cloud Pub/Sub topic.
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * topic.create().then(function(data) {
     *   var topic = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * Delete the topic. This will not delete subscriptions to this topic.
     *
     * @resource [Topics: delete API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/delete}
     *
     * @param {function=} callback - The callback function.
     *
     * @example
     * topic.delete(function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * topic.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * topic.exists().then(function(data) {
     *   var exists = data[0];
     * });
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * topic.get().then(function(data) {
     *   var topic = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the official representation of this topic from the API.
     *
     * @resource [Topics: get API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The metadata of the Topic.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * topic.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * topic.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
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

  commonGrpc.ServiceObject.call(this, {
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
   * permissions. Cloud Pub/Sub's use of IAM features is not covered by
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
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * topic.iam.getPolicy().then(function(data) {
   *   var policy = data[0];
   *   var apiResponse = data[1];
   * });
   */
  this.iam = new IAM(pubsub, this.name);
}

util.inherits(Topic, commonGrpc.ServiceObject);

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
 * @resource [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics.subscriptions/list}
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
 * topic.getSubscriptions(function(err, subscriptions) {
 *   // subscriptions is an array of `Subscription` objects.
 * });
 *
 * // Customize the query.
 * topic.getSubscriptions({
 *   pageSize: 3
 * }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, subscriptions, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     topic.getSubscriptions(nextQuery, callback);
 *   }
 * }
 *
 * topic.getSubscriptions({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * topic.getSubscriptions().then(function(data) {
 *   var subscriptions = data[0];
 * });
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
 * Get a list of the {module:pubsub/subscription} objects registered to this
 * topic as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:pubsub/topic#getSubscriptions} for a complete list of options.
 * @return {stream}
 *
 * @example
 * topic.getSubscriptionsStream()
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
 * topic.getSubscriptionsStream()
 *   .on('data', function(subscription) {
 *     this.end();
 *   });
 */
Topic.prototype.getSubscriptionsStream = function(options) {
  options = options || {};
  options.topic = this;

  return this.pubsub.getSubscriptionsStream(options);
};

/**
 * Publish the provided message or array of messages. On success, an array of
 * messageIds is returned in the response.
 *
 * @resource [Topics: publish API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/publish}
 *
 * @throws {Error} If no message is provided.
 *
 * @param {*|*[]} message - The message(s) to publish. If you need to
 *     provide attributes for the message, you must enable `options.raw`, then
 *     box your message in to an object with a `data` and `attributes` property.
 *     `data` will be the raw message value you want to publish, and
 *     `attributes` is a key/value pair of attributes to apply to the message.
 *     All messages not provided as `Buffer` will be published in JSON format.
 *     If your receiving end uses another library, make sure it parses the
 *     message properly.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.raw - Enable if you require setting attributes on
 *     your messages.
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds before giving up if no response is received.
 * @param {function=} callback - The callback function.
 *
 * @example
 * topic.publish('Hello, world!', function(err, messageIds, apiResponse) {});
 *
 * //-
 * // You can also publish a JSON object.
 * //-
 * var registerMessage = {
 *   userId: 3,
 *   name: 'Stephen',
 *   event: 'new user'
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
 *
 * //-
 * // Set attributes with your message.
 * //-
 * var message = {
 *   data: {
 *     userId: 3,
 *     product: 'book',
 *     event: 'rent'
 *   },
 *   attributes: {
 *     key: 'value',
 *     hello: 'world'
 *   }
 * };
 *
 * var options = {
 *   raw: true
 * };
 *
 * topic.publish(message, options, function(err, messageIds, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * topic.publish(message).then(function(data) {
 *   var messageIds = data[0];
 *   var apiResponse = data[1];
 * });
 *
 */
Topic.prototype.publish = function(messages, options, callback) {
  messages = arrify(messages);

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};
  callback = callback || common.util.noop;

  if (messages.length === 0) {
    throw new Error('Cannot publish without a message.');
  }

  var protoOpts = {
    service: 'Publisher',
    method: 'publish',
  };

  if (is.number(options.timeout)) {
    protoOpts.timeout = options.timeout;
  }

  var reqOpts = {
    topic: this.name,
    messages: messages
      .map(function(message) {
        if (is.object(message)) {
          message = extend(true, {}, message);
        }
        return options.raw ? message : { data: message };
      })
      .map(Topic.formatMessage_)
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
 * Create a subscription to this topic.
 *
 * All generated subscription names share a common prefix, `autogenerated-`.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/create}
 *
 * @param {string=} subName - The name of the subscription. If a name is not
 *     provided, a random subscription name will be generated and created.
 * @param {object=} options - See a
 *     [Subscription resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions)
 * @param {number} options.ackDeadlineSeconds - The maximum time after
 *     receiving a message that you must ack a message before it is redelivered.
 * @param {boolean=} options.autoAck - Automatically acknowledge the message
 *     once it's pulled. (default: false)
 * @param {string} options.encoding - When pulling for messages, this type is
 *     used when converting a message's data to a string. (default: 'utf-8')
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {number} options.maxInProgress - Maximum messages to consume
 *     simultaneously.
 * @param {string} options.pushEndpoint - A URL to a custom endpoint that
 *     messages should be pushed to.
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds on an HTTP request to pull new messages to wait for a
 *     response before the connection is broken.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Without specifying any options.
 * topic.subscribe('newMessages', function(err, subscription, apiResponse) {});
 *
 * //-
 * // Omit the name to have one generated automatically. All generated names
 * // share a common prefix, `autogenerated-`.
 * //-
 * topic.subscribe(function(err, subscription, apiResponse) {
 *   // subscription.name = The generated name.
 * });
 *
 * // With options.
 * topic.subscribe('newMessages', {
 *   ackDeadlineSeconds: 90,
 *   autoAck: true,
 *   interval: 30
 * }, function(err, subscription, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * topic.subscribe('newMessages').then(function(data) {
 *   var subscription = data[0];
 *   var apiResponse = data[1];
 * });
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
 *   // message.id = ID of the message.
 *   // message.ackId = ID used to acknowledge the message receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 *   // message.timestamp = Timestamp when Pub/Sub received the message.
 * });
 */
Topic.prototype.subscription = function(name, options) {
  options = options || {};
  options.topic = this;

  return this.pubsub.subscription(name, options);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Topic, {
  exclude: ['subscription']
});

module.exports = Topic;
