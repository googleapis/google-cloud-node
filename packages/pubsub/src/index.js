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
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var is = require('is');
var util = require('util');

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
 * @type {object} - GAX's default configuration.
 * @private
 */
var GAX_CONFIG = {
  Publisher: require('./v1/publisher_client_config.json').
    interfaces['google.pubsub.v1.Publisher'],
  Subscriber: require('./v1/subscriber_client_config.json').
    interfaces['google.pubsub.v1.Subscriber']
};

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

  this.defaultBaseUrl_ = 'pubsub.googleapis.com';
  this.determineBaseUrl_(options.apiEndpoint);

  var config = {
    baseUrl: this.baseUrl_,
    customEndpoint: this.customEndpoint_,
    service: 'pubsub',
    apiVersion: 'v1',
    scopes: [
      'https://www.googleapis.com/auth/pubsub',
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
  };

  this.options = options;

  commonGrpc.Service.call(this, config, options);
}

util.inherits(PubSub, commonGrpc.Service);

/**
 * Create a topic with the given name.
 *
 * @resource [Topics: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/create}
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.createTopic('my-new-topic').then(function(data) {
 *   var topic = data[0];
 *   var apiResponse = data[1];
 * });
 */
PubSub.prototype.createTopic = function(name, callback) {
  var self = this;

  callback = callback || common.util.noop;

  var protoOpts = {
    service: 'Publisher',
    method: 'createTopic'
  };

  var reqOpts = {
    name: Topic.formatName_(this.projectId, name)
  };

  this.request(protoOpts, reqOpts, function(err, resp) {
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
 * Get a list of snapshots.
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
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
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, snapshots, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     pubsub.getSnapshots(nextQuery, callback);
 *   }
 * };
 *
 * pubsub.getSnapshots({
 *   autoPaginate: false
 * }, callback);
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

  var protoOpts = {
    service: 'Subscriber',
    method: 'listSnapshots'
  };

  var reqOpts = extend({}, options);

  reqOpts.project = 'projects/' + this.projectId;

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var snapshots = arrify(resp.snapshots).map(function(snapshot) {
      var snapshotInstance = self.snapshot(snapshot.name);
      snapshotInstance.metadata = snapshot;
      return snapshotInstance;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = options;
      nextQuery.pageToken = resp.nextPageToken;
    }

    callback(null, snapshots, nextQuery, resp);
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
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
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

  var protoOpts = {};
  var reqOpts = extend({}, options);

  if (options.topic) {
    protoOpts = {
      service: 'Publisher',
      method: 'listTopicSubscriptions'
    };

    if (options.topic instanceof Topic) {
      reqOpts.topic = options.topic.name;
    } else {
      reqOpts.topic = options.topic;
    }
  } else {
    protoOpts = {
      service: 'Subscriber',
      method: 'listSubscriptions'
    };

    reqOpts.project = 'projects/' + this.projectId;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
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
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.getTopics().then(function(data) {
 *   var topics = data[0];
 * });
 */
PubSub.prototype.getTopics = function(query, callback) {
  var self = this;

  if (!callback) {
    callback = query;
    query = {};
  }

  var protoOpts = {
    service: 'Publisher',
    method: 'listTopics'
  };

  var reqOpts = extend({
    project: 'projects/' + this.projectId
  }, query);

  this.request(protoOpts, reqOpts, function(err, result) {
    if (err) {
      callback(err, null, result);
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
 * Create a subscription to a topic.
 *
 * All generated subscription names share a common prefix, `autogenerated-`.
 *
 * @resource [Subscriptions: create API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/create}
 *
 * @throws {Error} If a Topic instance or topic name is not provided.
 * @throws {Error} If a subName is not provided.
 *
 * @param {module:pubsub/topic|string} topic - The Topic to create a
 *     subscription to.
 * @param {string=} subName - The name of the subscription. If a name is not
 *     provided, a random subscription name will be generated and created.
 * @param {object=} options - See a
 *     [Subscription resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions)
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
 * @param {number|date} options.messageRetentionDuration - Set this to override
 *     the default duration of 7 days. This value is expected in seconds.
 *     Acceptable values are in the range of 10 minutes and 7 days.
 * @param {string} options.pushEndpoint - A URL to a custom endpoint that
 *     messages should be pushed to.
 * @param {boolean} options.retainAckedMessages - If set, acked messages are
 *     retained in the subscription's backlog for 7 days (unless overriden by
 *     `options.messageRetentionDuration`). Default: `false`
 * @param {number} options.timeout - Set a maximum amount of time in
 *     milliseconds on an HTTP request to pull new messages to wait for a
 *     response before the connection is broken.
 * @param {boolean} options.json - If true (default), the body attempted to be
 *     parsed to JSON. If this is false, the body will not be parsed and will be
 *     a string. This is ignored if options.encoding is set.
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
 * // Omit the name to have one generated automatically. All generated names
 * // share a common prefix, `autogenerated-`.
 * //-
 * pubsub.subscribe(topic, function(err, subscription, apiResponse) {
 *   // subscription.name = The generated name.
 * });
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * pubsub.subscribe(topic, name).then(function(data) {
 *   var subscription = data[0];
 *   var apiResponse = data[1];
 * });
 */
PubSub.prototype.subscribe = function(topic, subName, options, callback) {
  if (!is.string(topic) && !(topic instanceof Topic)) {
    throw new Error('A Topic is required for a new subscription.');
  }

  if (is.string(topic)) {
    topic = this.topic(topic);
  }

  if (is.object(subName)) {
    callback = options;
    options = subName;
    subName = '';
  }

  if (is.fn(subName)) {
    callback = subName;
    subName = '';
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var subscription = this.subscription(subName, options);

  var protoOpts = {
    service: 'Subscriber',
    method: 'createSubscription',
    timeout: options.timeout
  };

  var reqOpts = extend(true, {}, options, {
    topic: topic.name,
    name: subscription.name
  });

  if (reqOpts.messageRetentionDuration) {
    reqOpts.retainAckedMessages = true;

    reqOpts.messageRetentionDuration = {
      seconds: reqOpts.messageRetentionDuration,
      nanos: 0
    };
  }

  if (reqOpts.pushEndpoint) {
    reqOpts.pushConfig = {
      pushEndpoint: reqOpts.pushEndpoint
    };
  }

  delete reqOpts.autoAck;
  delete reqOpts.encoding;
  delete reqOpts.interval;
  delete reqOpts.maxInProgress;
  delete reqOpts.pushEndpoint;
  delete reqOpts.timeout;

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err && err.code !== 409) {
      callback(err, null, resp);
      return;
    }

    callback(null, subscription, resp);
  });
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
 * All generated names share a common prefix, `autogenerated-`.
 *
 * @param {string=} name - The name of the subscription. If a name is not
 *     provided, a random subscription name will be generated.
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
 *   // message.id = ID of the message.
 *   // message.ackId = ID used to acknowledge the message receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 *   // message.timestamp = Timestamp when Pub/Sub received the message.
 * });
 */
PubSub.prototype.subscription = function(name, options) {
  if (is.object(name)) {
    options = name;
    name = undefined;
  }

  options = options || {};
  options.name = name;

  return new Subscription(this, options);
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
 * Intercept the call to {module:common/grpc-service#request}, making sure the
 * correct timeouts are set.
 *
 * @private
 */
PubSub.prototype.request = function(protoOpts) {
  var method = protoOpts.method;
  var camelCaseMethod = method[0].toUpperCase() + method.substr(1);
  var config = GAX_CONFIG[protoOpts.service].methods[camelCaseMethod];

  if (is.undefined(arguments[0].timeout)) {
    arguments[0].timeout = config.timeout_millis;
  }

  commonGrpc.Service.prototype.request.apply(this, arguments);
};

/**
 * Determine the appropriate endpoint to use for API requests, first trying the
 * local `apiEndpoint` parameter. If the `apiEndpoint` parameter is null we try
 * Pub/Sub emulator environment variable (PUBSUB_EMULATOR_HOST), otherwise the
 * default JSON API.
 *
 * @private
 */
PubSub.prototype.determineBaseUrl_ = function(apiEndpoint) {
  var baseUrl = this.defaultBaseUrl_;
  var leadingProtocol = new RegExp('^https*://');
  var trailingSlashes = new RegExp('/*$');

  if (apiEndpoint || process.env.PUBSUB_EMULATOR_HOST) {
    this.customEndpoint_ = true;
    baseUrl = apiEndpoint || process.env.PUBSUB_EMULATOR_HOST;
  }

  this.baseUrl_ = baseUrl
    .replace(leadingProtocol, '')
    .replace(trailingSlashes, '');
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

PubSub.Subscription = Subscription;
PubSub.Topic = Topic;

module.exports = PubSub;
module.exports.v1 = require('./v1');
