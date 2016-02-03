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
 * @module pubsub
 */

'use strict';

var arrify = require('arrify');
var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:common/service}
 * @private
 */
var Service = require('../common/service.js');

/**
 * @type {module:pubsub/subscription}
 * @private
 */
var Subscription = require('./subscription.js');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * @type {module:pubsub/topic}
 * @private
 */
var Topic = require('./topic.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * [Google Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Google Cloud
 * Platform.
 *
 * The `PUBSUB_HOST` environment variable from the gcloud SDK is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @constructor
 * @alias module:pubsub
 *
 * The `gcloud.pubsub` method will return a `pubsub` object, allowing you to
 * create topics, publish messages, subscribe to topics, and more.
 *
 * To learn more about Pub/Sub, see the
 * [Google Cloud Pub/Sub overview](https://developers.google.com/pubsub/overview).
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var pubsub = gcloud.pubsub();
 */
function PubSub(options) {
  if (!(this instanceof PubSub)) {
    options = util.normalizeArguments(this, options);
    return new PubSub(options);
  }

  var config = {
    baseUrl: process.env.PUBSUB_HOST || 'https://pubsub.googleapis.com/v1',
    scopes: [
      'https://www.googleapis.com/auth/pubsub',
      'https://www.googleapis.com/auth/cloud-platform'
    ]
  };

  Service.call(this, config, options);
}

nodeutil.inherits(PubSub, Service);

/**
 * Create a topic with the given name.
 *
 * @resource [Topics: create API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/create}
 *
 * @param {string} name - Name of the topic.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/topic} callback.topic - The newly created topic.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * pubsub.createTopic('my-new-topic', function(err, topic, apiResponse) {
 *   if (!err) {
 *     // The topic was created successfully.
 *   }
 * });
 */
PubSub.prototype.createTopic = function(name, callback) {
  var self = this;

  callback = callback || util.noop;

  this.request({
    method: 'PUT',
    uri: '/topics/' + name,
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var topic = self.topic(name);
    topic.metadata = resp;

    callback(null, topic, resp);
  });
};

/**
 * Get a list of the subscriptions registered to all of your project's topics.
 * You may optionally provide a query object as the first argument to customize
 * the response.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or an array of {module:pubsub/subscription} objects.
 *
 * To get subscriptions for a topic, see {module:pubsub/topic}.
 *
 * @resource [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions/list}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string|module:pubsub/topic} options.topic - The name of the topic to
 *     list subscriptions from.
 * @param {number} options.pageSize - Maximum number of results to return.
 * @param {string} options.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/subscription[]} callback.subscriptions - The list of
 *     subscriptions returned.
 * @param {?object} callback.nextQuery - A query object representing the next
 *     page of topics.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * pubsub.getSubscriptions(function(err, subscriptions) {
 *   if (!err) {
 *     // subscriptions is an array of Subscription objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, subscriptions, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     pubsub.getSubscriptions(nextQuery, callback);
 *   }
 * };
 *
 * pubsub.getSubscriptions({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the subscriptions as a readable object stream.
 * //-
 * pubsub.getSubscriptions()
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
 * pubsub.getSubscriptions()
 *   .on('data', function(topic) {
 *     this.end();
 *   });
 */
PubSub.prototype.getSubscriptions = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var topicName;

  if (is.string(options.topic)) {
    topicName = options.topic;
  } else if (options.topic instanceof Topic) {
    topicName = options.topic.unformattedName;
  }

  var query = {};

  if (options.pageSize) {
    query.pageSize = options.pageSize;
  }

  if (options.pageToken) {
    query.pageToken = options.pageToken;
  }

  this.request({
    uri: (topicName ? '/topics/' + topicName : '') + '/subscriptions',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var subscriptions = arrify(resp.subscriptions).map(function(sub) {
      // Depending on if we're using a subscriptions.list or
      // topics.subscriptions.list API endpoint, we will get back a
      // Subscription resource or just the name of the subscription.
      var subscriptionInstance = self.subscription(sub.name || sub);

      if (sub.name) {
        subscriptionInstance.metadata = sub;
      }

      return subscriptionInstance;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = options;
      nextQuery.pageToken = resp.nextPageToken;
    }

    callback(null, subscriptions, nextQuery, resp);
  });
};

/**
 * Get a list of the topics registered to your project. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * @resource [Topics: list API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.topics/list}
 *
 * @param {object=} query - Query object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.pageSize - Max number of results to return.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/topic[]} callback.topics - The list of topics returned.
 * @param {?object} callback.nextQuery - A query object representing the next
 *     page of topics.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * pubsub.getTopics(function(err, topics) {
 *   if (!err) {
 *     // topics is an array of Topic objects.
 *   }
 * });
 *
 * //-
 * // Customize the query.
 * //-
 * pubsub.getTopics({
 *   pageSize: 3
 * }, function(err, topics) {});
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, rows, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     pubsub.getTopics(nextQuery, callback);
 *   }
 * };
 *
 * pubsub.getTopics({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the topics as a readable object stream.
 * //-
 * pubsub.getTopics()
 *   .on('error', console.error)
 *   .on('data', function(topic) {
 *     // topic is a Topic object.
 *   })
 *   .on('end', function() {
 *     // All topics retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * pubsub.getTopics()
 *   .on('data', function(topic) {
 *     this.end();
 *   });
 */
PubSub.prototype.getTopics = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  this.request({
    uri: '/topics',
    qs: query
  }, function(err, result) {
    if (err) {
      callback(err, null, null, result);
      return;
    }

    var topics = arrify(result.topics).map(function(topic) {
      var topicInstance = self.topic(topic.name);
      topicInstance.metadata = topic;
      return topicInstance;
    });

    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = query;
      nextQuery.pageToken = result.nextPageToken;
    }

    callback(null, topics, nextQuery, result);
  });
};

/**
 * Create a subscription to a topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or a {module:pubsub/subscription} object.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions/create}
 *
 * @throws {Error} If a Topic instance or topic name is not provided.
 * @throws {Error} If a subName is not provided.
 *
 * @param {module:pubsub/topic|string} - topic - The Topic to create a
 *     subscription to.
 * @param {string} subName - The name of the subscription.
 * @param {object=} options - See a
 *     [Subscription resource](https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions)
 * @param {number} options.ackDeadlineSeconds - The maximum time after receiving
 *     a message that you must ack a message before it is redelivered.
 * @param {boolean} options.autoAck - Automatically acknowledge the message once
 *     it's pulled. (default: false)
 * @param {string} options.encoding - When pulling for messages, this type is
 *     used when converting a message's data to a string. (default: 'utf-8')
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {number} options.maxInProgress - Maximum messages to consume
 *     simultaneously.
 * @param {boolean} options.reuseExisting - If the subscription already exists,
 *     reuse it. The options of the existing subscription are not changed. If
 *     false, attempting to create a subscription that already exists will fail.
 *     (default: false)
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds on an HTTP request to pull new messages to wait for a
 *     response before the connection is broken.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:pubsub/subscription} callback.subscription - The subscription.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Subscribe to a topic. (Also see {module:pubsub/topic#subscribe}).
 * //-
 * var topic = 'messageCenter';
 * var name = 'newMessages';
 *
 * pubsub.subscribe(topic, name, function(err, subscription, apiResponse) {});
 *
 * //-
 * // Customize the subscription.
 * //-
 * pubsub.subscribe(topic, name, {
 *   ackDeadlineSeconds: 90,
 *   autoAck: true,
 *   interval: 30
 * }, function(err, subscription, apiResponse) {});
 *
 * //-
 * // Create a subscription to a topic from another project.
 * //-
 * var anotherProject = gcloud.pubsub({
 *   projectId: 'another-project'
 * });
 *
 * var topic = anotherProject.topic('messageCenter');
 *
 * pubsub.subscribe(topic, name, function(err, subscription, apiResponse) {});
 */
PubSub.prototype.subscribe = function(topic, subName, options, callback) {
  var self = this;

  if (!is.string(topic) && !(topic instanceof Topic)) {
    throw new Error('A Topic is required for a new subscription.');
  }

  if (!is.string(subName)) {
    throw new Error('A subscription name is required for a new subscription.');
  }

  if (!callback) {
    callback = options;
    options = {};
  }

  if (is.string(topic)) {
    topic = this.topic(topic);
  }

  var body = extend(true, {}, options, {
    topic: topic.name
  });

  delete body.autoAck;
  delete body.encoding;
  delete body.interval;
  delete body.maxInProgress;
  delete body.reuseExisting;
  delete body.timeout;

  this.request({
    method: 'PUT',
    uri: '/subscriptions/' + subName,
    json: body
  }, function(err, resp) {
    if (err && !(err.code === 409 && options.reuseExisting)) {
      callback(err, null, resp);
      return;
    }

    var subscription = self.subscription(subName, options);
    callback(null, subscription, resp);
  });
};

/**
 * Create a Subscription object. This command by itself will not run any API
 * requests. You will receive a {module:pubsub/subscription} object,
 * which will allow you to interact with a subscription.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoAck - Automatically acknowledge the message once
 *     it's pulled. (default: false)
 * @param {string} options.encoding - When pulling for messages, this type is
 *     used when converting a message's data to a string. (default: 'utf-8')
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {number} options.maxInProgress - Maximum messages to consume
 *     simultaneously.
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds on an HTTP request to pull new messages to wait for a
 *     response before the connection is broken.
 * @return {module:pubsub/subscription}
 *
 * @example
 * var subscription = pubsub.subscription('my-subscription');
 *
 * // Register a listener for `message` events.
 * subscription.on('message', function(message) {
 *   // Called every time a message is received.
 *   // message.id = ID used to acknowledge its receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 * });
 */
PubSub.prototype.subscription = function(name, options) {
  if (!name) {
    throw new Error('The name of a subscription is required.');
  }

  options = options || {};
  options.name = name;
  return new Subscription(this, options);
};

/**
 * Create a Topic object. See {module:pubsub/createTopic} to create a topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @return {module:pubsub/topic}
 *
 * @example
 * var topic = pubsub.topic('my-topic');
 *
 * topic.publish({
 *   data: 'New message!'
 * }, function(err) {});
 */
PubSub.prototype.topic = function(name) {
  if (!name) {
    throw new Error('A name must be specified for a new topic.');
  }

  return new Topic(this, name);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(PubSub, ['getSubscriptions', 'getTopics']);

module.exports = PubSub;
