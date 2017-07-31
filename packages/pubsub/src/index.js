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

var common = require('@google-cloud/common');
var extend = require('extend');
var googleAuth = require('google-auto-auth');
var is = require('is');

var v1 = require('./v1');

/**
 * @type {module:pubsub/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

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
 * [Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Cloud
 * Platform.
 *
 * The `apiEndpoint` from options will set the host. If not set, the
 * `PUBSUB_EMULATOR_HOST` environment variable from the gcloud SDK is
 * honored, otherwise the actual API endpoint will be used.
 *
 * @constructor
 * @alias module:pubsub
 *
 * @resource [Cloud Pub/Sub overview]{@link https://developers.google.com/pubsub/overview}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function PubSub(options) {
  if (!(this instanceof PubSub)) {
    options = common.util.normalizeArguments(this, options);
    return new PubSub(options);
  }

  this.options = extend({
    scopes: v1.ALL_SCOPES
  }, options);

  this.determineBaseUrl_();

  this.api = {};
  this.auth = googleAuth(this.options);
  this.projectId = this.options.projectId || '{{projectId}}';
}

/**
 * Create a subscription to a topic.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/create}
 *
 * @throws {Error} If a Topic instance or topic name is not provided.
 * @throws {Error} If a subscription name is not provided.
 *
 * @param {module:pubsub/topic|string} topic - The Topic to create a
 *     subscription to.
 * @param {string=} name - The name of the subscription.
 * @param {object=} options - See a
 *     [Subscription resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions)
 * @param {number} options.ackDeadline - The maximum time after receiving a
 *     message that you must ack a message before it is redelivered.
 * @param {object} options.flowControl - Flow control configurations for
 *     receiving messages.
 * @param {number} options.flowControl.maxBytes - The maximum number of bytes
 *     in un-acked messages to allow before the subscription pauses incoming
 *     messages. Defaults to 20% of free memory.
 * @param {number} options.flowControl.maxMessages - The maximum number of
 *     un-acked messages to allow before the subscription pauses incoming
 *     messages. Default: Infinity.
 * @param {object} options.gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {number|date} options.messageRetentionDuration - Set this to override
 *     the default duration of 7 days. This value is expected in seconds.
 *     Acceptable values are in the range of 10 minutes and 7 days.
 * @param {string} options.pushEndpoint - A URL to a custom endpoint that
 *     messages should be pushed to.
 * @param {boolean} options.retainAckedMessages - If set, acked messages are
 *     retained in the subscription's backlog for 7 days (unless overriden by
 *     `options.messageRetentionDuration`). Default: `false`
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
 * var callback = function(err, subscription, apiResponse) {};
 *
 * pubsub.createSubscription(topic, name, callback);
 *
 * //-
 * // Customize the subscription.
 * //-
 * pubsub.createSubscription(topic, name, {
 *   ackDeadline: 90000 // 90 seconds
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.createSubscription(topic, name).then(function(data) {
 *   var subscription = data[0];
 *   var apiResponse = data[1];
 * });
 */
PubSub.prototype.createSubscription = function(topic, name, options, callback) {
  if (!is.string(topic) && !(topic instanceof Topic)) {
    throw new Error('A Topic is required for a new subscription.');
  }

  if (!is.string(name)) {
    throw new Error('A subscription name is required.');
  }

  if (is.string(topic)) {
    topic = this.topic(topic);
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var subscription = this.subscription(name, options);

  var reqOpts = extend({
    topic: topic.name,
    name: subscription.name
  }, options);

  delete reqOpts.gaxOpts;

  if (options.ackDeadline) {
    reqOpts.ackDeadlineSeconds = options.ackDeadline / 1000;
    delete reqOpts.ackDeadline;
  }

  if (options.messageRetentionDuration) {
    reqOpts.retainAckedMessages = true;

    reqOpts.messageRetentionDuration = {
      seconds: options.messageRetentionDuration,
      nanos: 0
    };
  }

  if (options.pushEndpoint) {
    delete reqOpts.pushEndpoint;

    reqOpts.pushConfig = {
      pushEndpoint: options.pushEndpoint
    };
  }

  this.request({
    client: 'subscriberClient',
    method: 'createSubscription',
    reqOpts: reqOpts,
    gaxOpts: options.gaxOpts
  }, function(err, resp) {
    if (err && err.code !== 6) {
      callback(err, null, resp);
      return;
    }

    subscription.metadata = resp;
    callback(null, subscription, resp);
  });
};

/**
 * Create a topic with the given name.
 *
 * @resource [Topics: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/create}
 *
 * @param {string} name - Name of the topic.
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.createTopic('my-new-topic').then(function(data) {
 *   var topic = data[0];
 *   var apiResponse = data[1];
 * });
 */
PubSub.prototype.createTopic = function(name, gaxOpts, callback) {
  var topic = this.topic(name);

  var reqOpts = {
    name: topic.name
  };

  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  this.request({
    client: 'publisherClient',
    method: 'createTopic',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    topic.metadata = resp;
    callback(null, topic, resp);
  });
};

/**
 * Determine the appropriate endpoint to use for API requests, first trying the
 * local `apiEndpoint` parameter. If the `apiEndpoint` parameter is null we try
 * Pub/Sub emulator environment variable (PUBSUB_EMULATOR_HOST), otherwise the
 * default JSON API.
 *
 * @private
 */
PubSub.prototype.determineBaseUrl_ = function() {
  var apiEndpoint = this.options.apiEndpoint;

  if (!apiEndpoint && !process.env.PUBSUB_EMULATOR_HOST) {
    return;
  }

  var baseUrl = apiEndpoint || process.env.PUBSUB_EMULATOR_HOST;
  var leadingProtocol = new RegExp('^https*://');
  var trailingSlashes = new RegExp('/*$');

  var baseUrlParts = baseUrl
    .replace(leadingProtocol, '')
    .replace(trailingSlashes, '')
    .split(':');

  this.options.servicePath = baseUrlParts[0];
  this.options.port = baseUrlParts[1];
};

/**
 * Get a list of snapshots.
 *
 * @param {object=} options - Configuration object.
 * @param {object} options.gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {number} options.pageSize - Maximum number of results to return.
 * @param {string} options.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/snapshot[]} callback.snapshots - The list of snapshots
 *     in your project.
 *
 * @example
 * pubsub.getSnapshots(function(err, snapshots) {
 *   if (!err) {
 *     // snapshots is an array of Snapshot objects.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.getSnapshots().then(function(data) {
 *   var snapshots = data[0];
 * });
 */
PubSub.prototype.getSnapshots = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var reqOpts = extend({
    project: 'projects/' + this.projectId
  }, options);

  delete reqOpts.gaxOpts;

  this.request({
    client: 'subscriberClient',
    method: 'listSnapshots',
    reqOpts: reqOpts,
    gaxOpts: options.gaxOpts
  }, function() {
    var snapshots = arguments[1];

    if (snapshots) {
      arguments[1] = snapshots.map(function(snapshot) {
        var snapshotInstance = self.snapshot(snapshot.name);
        snapshotInstance.metadata = snapshot;
        return snapshotInstance;
      });
    }

    callback.apply(null, arguments);
  });
};

/**
 * Get a list of the {module:pubsub/snapshot} objects as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:pubsub#getSnapshots} for a complete list of options.
 * @return {stream}
 *
 * @example
 * pubsub.getSnapshotsStream()
 *   .on('error', console.error)
 *   .on('data', function(snapshot) {
 *     // snapshot is a Snapshot object.
 *   })
 *   .on('end', function() {
 *     // All snapshots retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * pubsub.getSnapshotsStream()
 *   .on('data', function(snapshot) {
 *     this.end();
 *   });
 */
PubSub.prototype.getSnapshotsStream =
  common.paginator.streamify('getSnapshots');

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
 * @resource [Subscriptions: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/list}
 *
 * @param {object=} options - Configuration object.
 * @param {object} options.gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {number} options.pageSize - Maximum number of results to return.
 * @param {string} options.pageToken - Page token.
 * @param {string|module:pubsub/topic} options.topic - The name of the topic to
 *     list subscriptions from.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/subscription[]} callback.subscriptions - The list of
 *     subscriptions in your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.getSubscriptions().then(function(data) {
 *   var subscriptions = data[0];
 * });
 */
PubSub.prototype.getSubscriptions = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var topic = options.topic;

  if (topic) {
    if (!(topic instanceof Topic)) {
      topic = this.topic(topic);
    }

    return topic.getSubscriptions(options, callback);
  }


  var reqOpts = extend({}, options);

  reqOpts.project = 'projects/' + this.projectId;
  delete reqOpts.gaxOpts;

  this.request({
    client: 'subscriberClient',
    method: 'listSubscriptions',
    reqOpts: reqOpts,
    gaxOpts: options.gaxOpts
  }, function() {
    var subscriptions = arguments[1];

    if (subscriptions) {
      arguments[1] = subscriptions.map(function(sub) {
        var subscriptionInstance = self.subscription(sub.name);
        subscriptionInstance.metadata = sub;
        return subscriptionInstance;
      });
    }

    callback.apply(null, arguments);
  });
};

/**
 * Get a list of the {module:pubsub/subscription} objects registered to all of
 * your project's topics as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:pubsub#getSubscriptions} for a complete list of options.
 * @return {stream}
 *
 * @example
 * pubsub.getSubscriptionsStream()
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
 * pubsub.getSubscriptionsStream()
 *   .on('data', function(subscription) {
 *     this.end();
 *   });
 */
PubSub.prototype.getSubscriptionsStream =
  common.paginator.streamify('getSubscriptions');

/**
 * Get a list of the topics registered to your project. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * @resource [Topics: list API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/list}
 *
 * @param {object=} query - Query object.
 * @param {object} options.gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {number} query.pageSize - Max number of results to return.
 * @param {string} query.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/topic[]} callback.topics - The list of topics returned.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.getTopics().then(function(data) {
 *   var topics = data[0];
 * });
 */
PubSub.prototype.getTopics = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var reqOpts = extend({
    project: 'projects/' + this.projectId
  }, options);

  delete reqOpts.gaxOpts;

  this.request({
    client: 'publisherClient',
    method: 'listTopics',
    reqOpts: reqOpts,
    gaxOpts: options.gaxOpts
  }, function() {
    var topics = arguments[1];

    if (topics) {
      arguments[1] = topics.map(function(topic) {
        var topicInstance = self.topic(topic.name);
        topicInstance.metadata = topic;
        return topicInstance;
      });
    }

    callback.apply(null, arguments);
  });
};

/**
 * Get a list of the {module:pubsub/topic} objects registered to your project as
 * a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:pubsub#getTopics} for a complete list of options.
 * @return {stream}
 *
 * @example
 * pubsub.getTopicsStream()
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
 * pubsub.getTopicsStream()
 *   .on('data', function(topic) {
 *     this.end();
 *   });
 */
PubSub.prototype.getTopicsStream = common.paginator.streamify('getTopics');

/**
 * Funnel all API requests through this method, to be sure we have a project ID.
 *
 * @private
 *
 * @param {object} config - Configuration object.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @param {boolean} config.returnFn - Return function as opposed to calling it.
 * @param {function=} callback - The callback function.
 */
PubSub.prototype.request = function(config, callback) {
  var self = this;

  if (config.returnFn) {
    prepareGaxRequest(callback);
  } else {
    makeRequestCallback();
  }

  function prepareGaxRequest(callback) {
    if (global.GCLOUD_SANDBOX_ENV) {
      return;
    }

    self.auth.getProjectId(function(err, projectId) {
      if (err) {
        callback(err);
        return;
      }

      var gaxClient = self.api[config.client];

      if (!gaxClient) {
        // Lazily instantiate client.
        gaxClient = v1(self.options)[config.client](self.options);
        self.api[config.client] = gaxClient;
      }

      var reqOpts = extend(true, {}, config.reqOpts);
      reqOpts = common.util.replaceProjectIdToken(reqOpts, projectId);

      var requestFn = gaxClient[config.method].bind(
        gaxClient,
        reqOpts,
        config.gaxOpts
      );

      callback(null, requestFn);
    });
  }

  function makeRequestCallback() {
    prepareGaxRequest(function(err, requestFn) {
      if (err) {
        callback(err);
        return;
      }

      requestFn(callback);
    });
  }
};

/**
 * Create a Snapshot object. See {module:pubsub/subscription#createSnapshot} to
 * create a snapshot.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the snapshot.
 * @return {module:pubsub/snapshot}
 *
 * @example
 * var snapshot = pubsub.snapshot('my-snapshot');
 */
PubSub.prototype.snapshot = function(name) {
  if (!is.string(name)) {
    throw new Error('You must supply a valid name for the snapshot.');
  }

  return new Snapshot(this, name);
};

/**
 * Create a Subscription object. This command by itself will not run any API
 * requests. You will receive a {module:pubsub/subscription} object,
 * which will allow you to interact with a subscription.
 *
 * @throws {Error} If subscription name is omitted.
 *
 * @param {string} name - Name of the subscription.
 * @param {object=} options - Configuration object.
 * @return {module:pubsub/subscription}
 *
 * @example
 * var subscription = pubsub.subscription('my-subscription');
 *
 * // Register a listener for `message` events.
 * subscription.on('message', function(message) {
 *   // Called every time a message is received.
 *   // message.id = ID of the message.
 *   // message.ackId = ID used to acknowledge the message receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 *   // message.publishTime = Timestamp when Pub/Sub received the message.
 * });
 */
PubSub.prototype.subscription = function(name, options) {
  if (!name) {
    throw new Error('A name must be specified for a subscription.');
  }

  return new Subscription(this, name, options);
};

/**
 * Create a Topic object. See {module:pubsub#createTopic} to create a topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @return {module:pubsub/topic}
 *
 * @example
 * var topic = pubsub.topic('my-topic');
 */
PubSub.prototype.topic = function(name, options) {
  if (!name) {
    throw new Error('A name must be specified for a topic.');
  }

  return new Topic(this, name, options);
};

/*! Developer Documentation
 *
 * These methods can be agto-paginated.
 */
common.paginator.extend(PubSub, [
  'getSnapshots',
  'getSubscriptions',
  'getTopics'
]);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(PubSub, {
  exclude: [
    'request',
    'snapshot',
    'subscription',
    'topic'
  ]
});

module.exports = PubSub;
module.exports.v1 = v1;
