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

var format = require('string-format-obj');
var is = require('is');

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
 * @const {string} Base URL for Pub/Sub API.
 * @private
 */
var PUBSUB_BASE_URL = 'https://pubsub.googleapis.com/v1/';

/**
 * @const {array} Required scopes for Pub/Sub API.
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/pubsub',
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * [Google Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Google Cloud
 * Platform.
 *
 * @constructor
 * @alias module:pubsub
 *
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
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

  this.makeAuthenticatedRequest_ = util.makeAuthenticatedRequestFactory({
    credentials: options.credentials,
    keyFile: options.keyFilename,
    scopes: SCOPES,
    email: options.email
  });

  this.projectId = options.projectId;
  this.projectName = 'projects/' + this.projectId;
}

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
  var path = this.projectName + '/topics';
  this.makeReq_('GET', path, query, true, function(err, result) {
    if (err) {
      callback(err, null, null, result);
      return;
    }
    var topics = (result.topics || []).map(function(item) {
      var topicInstance = self.topic(item.name);
      topicInstance.metadata = item;
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
  callback = callback || util.noop;
  var topic = this.topic(name);
  var path = this.projectName + '/topics/' + name;
  this.makeReq_('PUT', path, null, null, function(err, result) {
    if (err) {
      callback(err, null, result);
      return;
    }
    callback(null, topic, result);
  });
};

/**
 * Create a subscription to a topic. You may optionally provide an object to
 * customize the subscription.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or a {@linkcode module:pubsub/subscription} object.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/reference/rest/v1/projects.subscriptions/create}
 *
 * @throws {Error} If a Topic instance or topic name is not provided.
 * @throws {Error} If a subName is not provided.
 *
 * @param {module:pubsub/topic|string} - topic - The Topic to create a
 *     subscription to.
 * @param {string} subName - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {number} options.ackDeadlineSeconds - The maximum time after receiving
 *     a message that you must ack a message before it is redelivered.
 * @param {boolean} options.autoAck - Automatically acknowledge the message once
 *     it's pulled. (default: false)
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages. (default: 10)
 * @param {boolean} options.reuseExisting - If the subscription already exists,
 *     reuse it. The options of the existing subscription are not changed. If
 *     false, attempting to create a subscription that already exists will fail.
 *     (default: false)
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

  options = options || {};

  if (is.string(topic)) {
    topic = this.topic(topic);
  }

  var body = {
    topic: topic.name
  };

  if (options.ackDeadlineSeconds) {
    body.ackDeadlineSeconds = options.ackDeadlineSeconds;
  }

  var subscription = this.subscription(subName, options);

  this.makeReq_('PUT', subscription.name, null, body, function(err, result) {
    if (err && !(err.code === 409 && options.reuseExisting)) {
      callback(err, null, result);
      return;
    }

    callback(null, subscription, result);
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
 * @param {string} name - The name of the subscription.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoAck - Automatically acknowledge the message once
 *     it's pulled.
 * @param {number} options.interval - Interval in milliseconds to check for new
 *     messages.
 * @return {module:pubsub/subscription}
 *
 * @example
 * var subscription = pubsub.subscription('my-existing-subscription');
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
 * Create a Topic object to reference an existing topic. See
 * {module:pubsub/createTopic} to create a topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @return {module:pubsub/topic}
 *
 * @example
 * var topic = pubsub.topic('my-existing-topic');
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

/**
 * Get a list of the subscriptions registered to all of your project's topics.
 * You may optionally provide a query object as the first argument to customize
 * the response.
 *
 * Your provided callback will be invoked with an error object if an API error
 * occurred or an array of {@linkcode module:pubsub/subscription} objects.
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

  var apiPath = format('{projectPath}{topicPath}/subscriptions', {
    projectPath: 'projects/' + this.projectId,
    topicPath: topicName ? '/topics/' + topicName : ''
  });

  this.makeReq_('GET', apiPath, query, null, function(err, result) {
    if (err) {
      callback(err, null, null, result);
      return;
    }

    var subscriptions = (result.subscriptions || []).map(function(sub) {
      return new Subscription(self, {
        // Depending on if we're using a subscriptions.list or
        // topics.subscriptions.list API endpoint, we will get back a
        // Subscription resource or just the name of the subscription.
        name: sub.name || sub
      });
    });

    var nextQuery = null;

    if (result.nextPageToken) {
      nextQuery = options;
      nextQuery.pageToken = result.nextPageToken;
    }

    callback(null, subscriptions, nextQuery, result);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
PubSub.prototype.makeReq_ = function(method, path, q, body, callback) {
  var reqOpts = {
    method: method,
    qs: q,
    uri: PUBSUB_BASE_URL + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.makeAuthenticatedRequest_(reqOpts, callback);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(PubSub, ['getSubscriptions', 'getTopics']);

module.exports = PubSub;
