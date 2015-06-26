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

/**
 * @type {module:pubsub/subscription}
 * @private
 */
var Subscription = require('./subscription.js');

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
var PUBSUB_BASE_URL = 'https://pubsub.googleapis.com/v1beta2/';

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
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use
 * it by filling the [Limited Preview application form](http://goo.gl/sO0wTu).
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
  options = options || {};

  if (!options.projectId) {
    throw util.missingProjectIdError;
  }

  this.makeAuthorizedRequest_ = util.makeAuthorizedRequestFactory({
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
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.pageSize - Max number of results to return.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/topic[]} callback.topics - The list of topics returned.
 * @param {object} callback.nextQuery - A query object representing the next
 *     page of topics.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * // Get all topics.
 * pubsub.getTopics(function(err, topics, nextQuery, apiResponse) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `pubsub.getTopics(nextQuery, callback);`.
 * });
 *
 * // Customize the query.
 * pubsub.getTopics({
 *   pageSize: 3
 * }, function(err, topics, nextQuery, apiResponse) {});
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
      return new Topic(self, {
        name: item.name
      });
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
 * @param {string} name - Name of the topic.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/topic} callback.topic - The newly created topic.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * pubsub.createTopic('my-new-topic', function(err, topic, apiResponse) {
 *   topic.publish({
 *     data: 'New message!'
 *   }, function(err) {});
 * });
 *
 * //-
 * // <strong>Note:</strong> For cases like the one above, it is simpler to use
 * // {module:pubsub#topic}, which will create the topic for you at the time you
 * // publish a message.
 * //-
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
  if (!util.is(topic, 'string') && !(topic instanceof Topic)) {
    throw new Error('A Topic is required for a new subscription.');
  }

  if (!util.is(subName, 'string')) {
    throw new Error('A subscription name is required for a new subscription.');
  }

  if (!callback) {
    callback = options;
    options = {};
  }

  options = options || {};

  if (util.is(topic, 'string')) {
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
 * Create a Topic object to reference an existing topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoCreate - Automatically create topic if it
 *     doesn't exist. Note that messages published to a topic with no
 *     subscribers will not be delivered. Default: true.
 * @return {module:pubsub/topic}
 *
 * @example
 * //-
 * // By default, it isn't required to specify a topic that already exists. The
 * // first time you publish a message, the topic will be created for you.
 * //
 * // This will only cost one additional API request at the time of publishing.
 * // If the topic doesn't need to be created, there is no performance penalty.
 * //-
 * var topic = pubsub.topic('my-topic');
 *
 * topic.publish({
 *   data: 'New message!'
 * }, function(err) {});
 *
 * //-
 * // If you prefer an error when trying to publish to a topic that doesn't
 * // exist, set `autoCreate` to `false`.
 * //-
 * var nonExistentTopic = pubsub.topic('my-non-existent-topic', {
 *   autoCreate: false
 * });
 *
 * nonExistentTopic.publish({
 *   data: 'New message!'
 * }, function(err) {
 *   if (err) {
 *     // API error from trying to publish a message to a non-existent topic.
 *   }
 * });
 */
PubSub.prototype.topic = function(name, options) {
  if (!name) {
    throw new Error('A name must be specified for a new topic.');
  }
  options = options || {};
  return new Topic(this, {
    name: name,
    autoCreate: options.autoCreate
  });
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
 * @param {object=} options - Configuration object.
 * @param {string|module:pubsub/topic} options.topic - The name of the topic to
 *     list subscriptions from.
 * @param {number} options.pageSize - Maximum number of results to return.
 * @param {string} options.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/subscription[]} callback.subscriptions - The list of
 *     subscriptions returned.
 * @param {object} callback.nextQuery - A query object representing the next
 *     page of topics.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * var callback = function(err, subscriptions, nextQuery, apiResponse) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `pubsub.getSubscriptions(nextQuery, callback);`.
 * };
 *
 * //-
 * // Get all subscriptions for this project.
 * //-
 * pubsub.getSubscriptions(callback);
 *
 * //-
 * // Customize the query.
 * //-
 * pubsub.getSubscriptions({
 *   pageSize: 3
 * }, callback);
 */
PubSub.prototype.getSubscriptions = function(options, callback) {
  var self = this;

  if (!callback) {
    callback = options;
    options = {};
  }

  options = options || {};

  var topicName;

  if (util.is(options.topic, 'string')) {
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

  var apiPath = util.format('{projectPath}{topicPath}/subscriptions', {
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

  this.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = PubSub;
