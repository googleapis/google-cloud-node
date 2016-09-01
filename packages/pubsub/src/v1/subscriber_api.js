/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/pubsub/v1/pubsub.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var arguejs = require('arguejs');
var configData = require('./subscriber_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'pubsub.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

var PAGE_DESCRIPTORS = {
  listSubscriptions: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'subscriptions')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/pubsub'
];

/**
 * The service that an application uses to manipulate subscriptions and to
 * consume messages from a subscription via the `Pull` method.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link subscriberApi}
 *
 * @example
 * var pubsubV1 = require('@google-cloud/pubsub').v1({
 *   // optional auth parameters.
 * });
 * var api = pubsubV1.subscriberApi();
 *
 * @class
 */
function SubscriberApi(gaxGrpc, grpcClient, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var timeout = opts.timeout || DEFAULT_TIMEOUT;
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.Version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'nodejs/' + process.version].join(' ');

  var defaults = gaxGrpc.constructSettings(
      'google.pubsub.v1.Subscriber',
      configData,
      clientConfig,
      timeout,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.pubsub.v1.Subscriber,
      {sslCreds: sslCreds});
  var methods = [
    'createSubscription',
    'getSubscription',
    'listSubscriptions',
    'deleteSubscription',
    'modifyAckDeadline',
    'acknowledge',
    'pull',
    'modifyPushConfig'
  ];
  methods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
        stub.then(function(stub) { return stub[methodName].bind(stub); }),
        defaults[methodName]);
  }.bind(this));
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var SUBSCRIPTION_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/subscriptions/{subscription}');

var TOPIC_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/topics/{topic}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
SubscriberApi.prototype.projectPath = function projectPath(project) {
  return PROJECT_PATH_TEMPLATE.render({
    project: project
  });
};

/**
 * Parses the projectName from a project resource.
 * @param {String} projectName
 *   A fully-qualified path representing a project resources.
 * @returns {String} - A string representing the project.
 */
SubscriberApi.prototype.matchProjectFromProjectName =
    function matchProjectFromProjectName(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified subscription resource name string.
 * @param {String} project
 * @param {String} subscription
 * @returns {String}
 */
SubscriberApi.prototype.subscriptionPath = function subscriptionPath(project, subscription) {
  return SUBSCRIPTION_PATH_TEMPLATE.render({
    project: project,
    subscription: subscription
  });
};

/**
 * Parses the subscriptionName from a subscription resource.
 * @param {String} subscriptionName
 *   A fully-qualified path representing a subscription resources.
 * @returns {String} - A string representing the project.
 */
SubscriberApi.prototype.matchProjectFromSubscriptionName =
    function matchProjectFromSubscriptionName(subscriptionName) {
  return SUBSCRIPTION_PATH_TEMPLATE.match(subscriptionName).project;
};

/**
 * Parses the subscriptionName from a subscription resource.
 * @param {String} subscriptionName
 *   A fully-qualified path representing a subscription resources.
 * @returns {String} - A string representing the subscription.
 */
SubscriberApi.prototype.matchSubscriptionFromSubscriptionName =
    function matchSubscriptionFromSubscriptionName(subscriptionName) {
  return SUBSCRIPTION_PATH_TEMPLATE.match(subscriptionName).subscription;
};

/**
 * Returns a fully-qualified topic resource name string.
 * @param {String} project
 * @param {String} topic
 * @returns {String}
 */
SubscriberApi.prototype.topicPath = function topicPath(project, topic) {
  return TOPIC_PATH_TEMPLATE.render({
    project: project,
    topic: topic
  });
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the project.
 */
SubscriberApi.prototype.matchProjectFromTopicName =
    function matchProjectFromTopicName(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).project;
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the topic.
 */
SubscriberApi.prototype.matchTopicFromTopicName =
    function matchTopicFromTopicName(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).topic;
};

// Service calls

/**
 * Creates a subscription to a given topic for a given subscriber.
 * If the subscription already exists, returns `ALREADY_EXISTS`.
 * If the corresponding topic doesn't exist, returns `NOT_FOUND`.
 *
 * If the name is not provided in the request, the server will assign a random
 * name for this subscription on the same project as the topic.
 *
 * @param {string} name
 *   The name of the subscription. It must have the format
 *   `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
 *   start with a letter, and contain only letters (`[A-Za-z]`), numbers
 *   (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
 *   plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
 *   in length, and it must not start with `"goog"`.
 * @param {string} topic
 *   The name of the topic from which this subscription is receiving messages.
 *   The value of this field will be `_deleted-topic_` if the topic has been
 *   deleted.
 * @param {Object=} otherArgs
 * @param {Object=} otherArgs.pushConfig
 *   If push delivery is used with this subscription, this field is
 *   used to configure it. An empty `pushConfig` signifies that the subscriber
 *   will pull and ack messages using API methods.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 * @param {number=} otherArgs.ackDeadlineSeconds
 *   This value is the maximum time after a subscriber receives a message
 *   before the subscriber should acknowledge the message. After message
 *   delivery but before the ack deadline expires and before the message is
 *   acknowledged, it is an outstanding message and will not be delivered
 *   again during that time (on a best-effort basis).
 *
 *   For pull subscriptions, this value is used as the initial value for the ack
 *   deadline. To override this value for a given message, call
 *   `ModifyAckDeadline` with the corresponding `ack_id` if using
 *   pull.
 *
 *   For push delivery, this value is also used to set the request timeout for
 *   the call to the push endpoint.
 *
 *   If the subscriber never acknowledges the message, the Pub/Sub
 *   system will eventually redeliver the message.
 *
 *   If this parameter is not set, the default value of 10 seconds is used.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Subscription]{@link Subscription}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedName = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.createSubscription(formattedName, formattedTopic, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
SubscriberApi.prototype.createSubscription = function createSubscription() {
  var args = arguejs({
    name: String,
    topic: String,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    name: args.name,
    topic: args.topic
  };
  if ('pushConfig' in args.otherArgs) {
    req.push_config = args.otherArgs.pushConfig;
  }
  if ('ackDeadlineSeconds' in args.otherArgs) {
    req.ack_deadline_seconds = args.otherArgs.ackDeadlineSeconds;
  }
  return this._createSubscription(req, args.options, args.callback);
};

/**
 * Gets the configuration details of a subscription.
 *
 * @param {string} subscription
 *   The name of the subscription to get.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Subscription]{@link Subscription}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * api.getSubscription(formattedSubscription, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
SubscriberApi.prototype.getSubscription = function getSubscription() {
  var args = arguejs({
    subscription: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription
  };
  return this._getSubscription(req, args.options, args.callback);
};

/**
 * Lists matching subscriptions.
 *
 * @param {string} project
 *   The name of the cloud project that subscriptions belong to.
 * @param {Object=} otherArgs
 * @param {number=} otherArgs.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @returns {Stream}
 *   An object stream. By default, this emits an object representing
 *   [Subscription]{@link Subscription} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedProject = api.projectPath("[PROJECT]");
 * api.listSubscriptions(formattedProject).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
SubscriberApi.prototype.listSubscriptions = function listSubscriptions() {
  var args = arguejs({
    project: String,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    project: args.project
  };
  if ('pageSize' in args.otherArgs) {
    req.page_size = args.otherArgs.pageSize;
  }
  return this._listSubscriptions(req, args.options, args.callback);
};

/**
 * Deletes an existing subscription. All pending messages in the subscription
 * are immediately dropped. Calls to `Pull` after deletion will return
 * `NOT_FOUND`. After a subscription is deleted, a new one may be created with
 * the same name, but the new one has no association with the old
 * subscription, or its topic unless the same topic is specified.
 *
 * @param {string} subscription
 *   The subscription to delete.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * api.deleteSubscription(formattedSubscription, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
SubscriberApi.prototype.deleteSubscription = function deleteSubscription() {
  var args = arguejs({
    subscription: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription
  };
  return this._deleteSubscription(req, args.options, args.callback);
};

/**
 * Modifies the ack deadline for a specific message. This method is useful
 * to indicate that more time is needed to process a message by the
 * subscriber, or to make the message available for redelivery if the
 * processing was interrupted.
 *
 * @param {string} subscription
 *   The name of the subscription.
 * @param {string[]} ackIds
 *   List of acknowledgment IDs.
 * @param {number} ackDeadlineSeconds
 *   The new ack deadline with respect to the time this request was sent to
 *   the Pub/Sub system. Must be >= 0. For example, if the value is 10, the new
 *   ack deadline will expire 10 seconds after the `ModifyAckDeadline` call
 *   was made. Specifying zero may immediately make the message available for
 *   another pull request.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var ackIds = [];
 * var ackDeadlineSeconds = 0;
 * api.modifyAckDeadline(formattedSubscription, ackIds, ackDeadlineSeconds, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
SubscriberApi.prototype.modifyAckDeadline = function modifyAckDeadline() {
  var args = arguejs({
    subscription: String,
    ackIds: Array,
    ackDeadlineSeconds: Number,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription,
    ack_ids: args.ackIds,
    ack_deadline_seconds: args.ackDeadlineSeconds
  };
  return this._modifyAckDeadline(req, args.options, args.callback);
};

/**
 * Acknowledges the messages associated with the `ack_ids` in the
 * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
 * from the subscription.
 *
 * Acknowledging a message whose ack deadline has expired may succeed,
 * but such a message may be redelivered later. Acknowledging a message more
 * than once will not result in an error.
 *
 * @param {string} subscription
 *   The subscription whose message is being acknowledged.
 * @param {string[]} ackIds
 *   The acknowledgment ID for the messages being acknowledged that was returned
 *   by the Pub/Sub system in the `Pull` response. Must not be empty.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var ackIds = [];
 * api.acknowledge(formattedSubscription, ackIds, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
SubscriberApi.prototype.acknowledge = function acknowledge() {
  var args = arguejs({
    subscription: String,
    ackIds: Array,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription,
    ack_ids: args.ackIds
  };
  return this._acknowledge(req, args.options, args.callback);
};

/**
 * Pulls messages from the server. Returns an empty list if there are no
 * messages available in the backlog. The server may return `UNAVAILABLE` if
 * there are too many concurrent pull requests pending for the given
 * subscription.
 *
 * @param {string} subscription
 *   The subscription from which messages should be pulled.
 * @param {number} maxMessages
 *   The maximum number of messages returned for this request. The Pub/Sub
 *   system may return fewer than the number specified.
 * @param {Object=} otherArgs
 * @param {boolean=} otherArgs.returnImmediately
 *   If this is specified as true the system will respond immediately even if
 *   it is not able to return a message in the `Pull` response. Otherwise the
 *   system is allowed to wait until at least one message is available rather
 *   than returning no messages. The client may cancel the request if it does
 *   not wish to wait any longer for the response.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [PullResponse]{@link PullResponse}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var maxMessages = 0;
 * api.pull(formattedSubscription, maxMessages, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
SubscriberApi.prototype.pull = function pull() {
  var args = arguejs({
    subscription: String,
    maxMessages: Number,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription,
    max_messages: args.maxMessages
  };
  if ('returnImmediately' in args.otherArgs) {
    req.return_immediately = args.otherArgs.returnImmediately;
  }
  return this._pull(req, args.options, args.callback);
};

/**
 * Modifies the `PushConfig` for a specified subscription.
 *
 * This may be used to change a push subscription to a pull one (signified by
 * an empty `PushConfig`) or vice versa, or change the endpoint URL and other
 * attributes of a push subscription. Messages will accumulate for delivery
 * continuously through the call regardless of changes to the `PushConfig`.
 *
 * @param {string} subscription
 *   The name of the subscription.
 * @param {Object} pushConfig
 *   The push configuration for future deliveries.
 *
 *   An empty `pushConfig` indicates that the Pub/Sub system should
 *   stop pushing messages from the given subscription and allow
 *   messages to be pulled and acknowledged - effectively pausing
 *   the subscription if `Pull` is not called.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.subscriberApi();
 * var formattedSubscription = api.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var pushConfig = {};
 * api.modifyPushConfig(formattedSubscription, pushConfig, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
SubscriberApi.prototype.modifyPushConfig = function modifyPushConfig() {
  var args = arguejs({
    subscription: String,
    pushConfig: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    subscription: args.subscription,
    push_config: args.pushConfig
  };
  return this._modifyPushConfig(req, args.options, args.callback);
};

function SubscriberApiBuilder(gaxGrpc) {
  if (!(this instanceof SubscriberApiBuilder)) {
    return new SubscriberApiBuilder(gaxGrpc);
  }

  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/pubsub/v1/pubsub.proto'
  }]);
  extend(this, grpcClient.google.pubsub.v1);

  /**
   * Build a new instance of {@link SubscriberApi}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   * @param {number=} opts.timeout
   *   The default timeout, in seconds, for calls made through this client.
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.subscriberApi = function(opts) {
    return new SubscriberApi(gaxGrpc, grpcClient, opts);
  };
  extend(this.subscriberApi, SubscriberApi);
}
module.exports = SubscriberApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;