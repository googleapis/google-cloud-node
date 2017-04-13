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

var configData = require('./subscriber_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'pubsub.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var PAGE_DESCRIPTORS = {
  listSubscriptions: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'subscriptions'),
  listSnapshots: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'snapshots')
};

var STREAM_DESCRIPTORS = {
  streamingPull: new gax.StreamDescriptor(gax.StreamType.BIDI_STREAMING)
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
 * @see {@link subscriberClient}
 *
 * @example
 * var pubsubV1 = require('@google-cloud/pubsub').v1({
 *   // optional auth parameters.
 * });
 * var client = pubsubV1.subscriberClient();
 *
 * @class
 */
function SubscriberClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );

  var defaults = gaxGrpc.constructSettings(
      'google.pubsub.v1.Subscriber',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var iamPolicyStub = gaxGrpc.createStub(
      grpcClients.google.iam.v1.IAMPolicy,
      opts);
  var iamPolicyStubMethods = [
    'setIamPolicy',
    'getIamPolicy',
    'testIamPermissions'
  ];
  iamPolicyStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      iamPolicyStub.then(function(iamPolicyStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return iamPolicyStub[methodName].apply(iamPolicyStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || STREAM_DESCRIPTORS[methodName]);
  });

  var subscriberStub = gaxGrpc.createStub(
      grpcClients.google.pubsub.v1.Subscriber,
      opts);
  var subscriberStubMethods = [
    'createSubscription',
    'getSubscription',
    'updateSubscription',
    'listSubscriptions',
    'deleteSubscription',
    'modifyAckDeadline',
    'acknowledge',
    'pull',
    'streamingPull',
    'modifyPushConfig',
    'listSnapshots',
    'createSnapshot',
    'deleteSnapshot',
    'seek'
  ];
  subscriberStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      subscriberStub.then(function(subscriberStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return subscriberStub[methodName].apply(subscriberStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || STREAM_DESCRIPTORS[methodName]);
  });
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var SNAPSHOT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/snapshots/{snapshot}');

var SUBSCRIPTION_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/subscriptions/{subscription}');

var TOPIC_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/topics/{topic}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
SubscriberClient.prototype.projectPath = function(project) {
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
SubscriberClient.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified snapshot resource name string.
 * @param {String} project
 * @param {String} snapshot
 * @returns {String}
 */
SubscriberClient.prototype.snapshotPath = function(project, snapshot) {
  return SNAPSHOT_PATH_TEMPLATE.render({
    project: project,
    snapshot: snapshot
  });
};

/**
 * Parses the snapshotName from a snapshot resource.
 * @param {String} snapshotName
 *   A fully-qualified path representing a snapshot resources.
 * @returns {String} - A string representing the project.
 */
SubscriberClient.prototype.matchProjectFromSnapshotName = function(snapshotName) {
  return SNAPSHOT_PATH_TEMPLATE.match(snapshotName).project;
};

/**
 * Parses the snapshotName from a snapshot resource.
 * @param {String} snapshotName
 *   A fully-qualified path representing a snapshot resources.
 * @returns {String} - A string representing the snapshot.
 */
SubscriberClient.prototype.matchSnapshotFromSnapshotName = function(snapshotName) {
  return SNAPSHOT_PATH_TEMPLATE.match(snapshotName).snapshot;
};

/**
 * Returns a fully-qualified subscription resource name string.
 * @param {String} project
 * @param {String} subscription
 * @returns {String}
 */
SubscriberClient.prototype.subscriptionPath = function(project, subscription) {
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
SubscriberClient.prototype.matchProjectFromSubscriptionName = function(subscriptionName) {
  return SUBSCRIPTION_PATH_TEMPLATE.match(subscriptionName).project;
};

/**
 * Parses the subscriptionName from a subscription resource.
 * @param {String} subscriptionName
 *   A fully-qualified path representing a subscription resources.
 * @returns {String} - A string representing the subscription.
 */
SubscriberClient.prototype.matchSubscriptionFromSubscriptionName = function(subscriptionName) {
  return SUBSCRIPTION_PATH_TEMPLATE.match(subscriptionName).subscription;
};

/**
 * Returns a fully-qualified topic resource name string.
 * @param {String} project
 * @param {String} topic
 * @returns {String}
 */
SubscriberClient.prototype.topicPath = function(project, topic) {
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
SubscriberClient.prototype.matchProjectFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).project;
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the topic.
 */
SubscriberClient.prototype.matchTopicFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).topic;
};

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
SubscriberClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Creates a subscription to a given topic.
 * If the subscription already exists, returns `ALREADY_EXISTS`.
 * If the corresponding topic doesn't exist, returns `NOT_FOUND`.
 *
 * If the name is not provided in the request, the server will assign a random
 * name for this subscription on the same project as the topic, conforming
 * to the
 * [resource name format](https://cloud.google.com/pubsub/docs/overview#names).
 * The generated name is populated in the returned Subscription object.
 * Note that for REST API requests, you must specify a name in the request.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the subscription. It must have the format
 *   `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
 *   start with a letter, and contain only letters (`[A-Za-z]`), numbers
 *   (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
 *   plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
 *   in length, and it must not start with `"goog"`.
 * @param {string} request.topic
 *   The name of the topic from which this subscription is receiving messages.
 *   Format is `projects/{project}/topics/{topic}`.
 *   The value of this field will be `_deleted-topic_` if the topic has been
 *   deleted.
 * @param {Object=} request.pushConfig
 *   If push delivery is used with this subscription, this field is
 *   used to configure it. An empty `pushConfig` signifies that the subscriber
 *   will pull and ack messages using API methods.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 * @param {number=} request.ackDeadlineSeconds
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
 *   The minimum custom deadline you can specify is 10 seconds.
 *   The maximum custom deadline you can specify is 600 seconds (10 minutes).
 *   If this parameter is 0, a default value of 10 seconds is used.
 *
 *   For push delivery, this value is also used to set the request timeout for
 *   the call to the push endpoint.
 *
 *   If the subscriber never acknowledges the message, the Pub/Sub
 *   system will eventually redeliver the message.
 * @param {boolean=} request.retainAckedMessages
 *   Indicates whether to retain acknowledged messages. If true, then
 *   messages are not expunged from the subscription's backlog, even if they are
 *   acknowledged, until they fall out of the `message_retention_duration`
 *   window.
 * @param {Object=} request.messageRetentionDuration
 *   How long to retain unacknowledged messages in the subscription's backlog,
 *   from the moment a message is published.
 *   If `retain_acked_messages` is true, then this also configures the retention
 *   of acknowledged messages, and thus configures how far back in time a `Seek`
 *   can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10
 *   minutes.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Subscription]{@link Subscription}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Subscription]{@link Subscription}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedName = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * var request = {
 *     name: formattedName,
 *     topic: formattedTopic
 * };
 * client.createSubscription(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.createSubscription = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createSubscription(request, options, callback);
};

/**
 * Gets the configuration details of a subscription.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The name of the subscription to get.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Subscription]{@link Subscription}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Subscription]{@link Subscription}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * client.getSubscription({subscription: formattedSubscription}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.getSubscription = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getSubscription(request, options, callback);
};

/**
 * Updates an existing subscription. Note that certain properties of a
 * subscription, such as its topic, are not modifiable.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.subscription
 *   The updated subscription object.
 *
 *   This object should have the same structure as [Subscription]{@link Subscription}
 * @param {Object} request.updateMask
 *   Indicates which fields in the provided subscription to update.
 *   Must be specified and non-empty.
 *
 *   This object should have the same structure as [google.protobuf.FieldMask]{@link external:"google.protobuf.FieldMask"}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Subscription]{@link Subscription}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Subscription]{@link Subscription}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var subscription = {};
 * var updateMask = {};
 * var request = {
 *     subscription: subscription,
 *     updateMask: updateMask
 * };
 * client.updateSubscription(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.updateSubscription = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateSubscription(request, options, callback);
};

/**
 * Lists matching subscriptions.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.project
 *   The name of the cloud project that subscriptions belong to.
 *   Format is `projects/{project}`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [Subscription]{@link Subscription}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListSubscriptionsResponse]{@link ListSubscriptionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Subscription]{@link Subscription}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [Subscription]{@link Subscription} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListSubscriptionsResponse]{@link ListSubscriptionsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listSubscriptions({project: formattedProject}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listSubscriptions(nextRequest, options).then(callback);
 *     }
 * }
 * client.listSubscriptions({project: formattedProject}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
SubscriberClient.prototype.listSubscriptions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listSubscriptions(request, options, callback);
};

/**
 * Equivalent to {@link listSubscriptions}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listSubscriptions} continuously
 * and invokes the callback registered for 'data' event for each element in the
 * responses.
 *
 * The returned object has 'end' method when no more elements are required.
 *
 * autoPaginate option will be ignored.
 *
 * @see {@link https://nodejs.org/api/stream.html}
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.project
 *   The name of the cloud project that subscriptions belong to.
 *   Format is `projects/{project}`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [Subscription]{@link Subscription} on 'data' event.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * client.listSubscriptionsStream({project: formattedProject}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.listSubscriptionsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listSubscriptions.createStream(this._listSubscriptions, request, options);
};

/**
 * Deletes an existing subscription. All messages retained in the subscription
 * are immediately dropped. Calls to `Pull` after deletion will return
 * `NOT_FOUND`. After a subscription is deleted, a new one may be created with
 * the same name, but the new one has no association with the old
 * subscription or its topic unless the same topic is specified.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The subscription to delete.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * client.deleteSubscription({subscription: formattedSubscription}).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.deleteSubscription = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteSubscription(request, options, callback);
};

/**
 * Modifies the ack deadline for a specific message. This method is useful
 * to indicate that more time is needed to process a message by the
 * subscriber, or to make the message available for redelivery if the
 * processing was interrupted. Note that this does not modify the
 * subscription-level `ackDeadlineSeconds` used for subsequent messages.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The name of the subscription.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {string[]} request.ackIds
 *   List of acknowledgment IDs.
 * @param {number} request.ackDeadlineSeconds
 *   The new ack deadline with respect to the time this request was sent to
 *   the Pub/Sub system. For example, if the value is 10, the new
 *   ack deadline will expire 10 seconds after the `ModifyAckDeadline` call
 *   was made. Specifying zero may immediately make the message available for
 *   another pull request.
 *   The minimum deadline you can specify is 0 seconds.
 *   The maximum deadline you can specify is 600 seconds (10 minutes).
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var ackIds = [];
 * var ackDeadlineSeconds = 0;
 * var request = {
 *     subscription: formattedSubscription,
 *     ackIds: ackIds,
 *     ackDeadlineSeconds: ackDeadlineSeconds
 * };
 * client.modifyAckDeadline(request).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.modifyAckDeadline = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._modifyAckDeadline(request, options, callback);
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
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The subscription whose message is being acknowledged.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {string[]} request.ackIds
 *   The acknowledgment ID for the messages being acknowledged that was returned
 *   by the Pub/Sub system in the `Pull` response. Must not be empty.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var ackIds = [];
 * var request = {
 *     subscription: formattedSubscription,
 *     ackIds: ackIds
 * };
 * client.acknowledge(request).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.acknowledge = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._acknowledge(request, options, callback);
};

/**
 * Pulls messages from the server. Returns an empty list if there are no
 * messages available in the backlog. The server may return `UNAVAILABLE` if
 * there are too many concurrent pull requests pending for the given
 * subscription.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The subscription from which messages should be pulled.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {number} request.maxMessages
 *   The maximum number of messages returned for this request. The Pub/Sub
 *   system may return fewer than the number specified.
 * @param {boolean=} request.returnImmediately
 *   If this field set to true, the system will respond immediately even if
 *   it there are no messages available to return in the `Pull` response.
 *   Otherwise, the system may wait (for a bounded amount of time) until at
 *   least one message is available, rather than returning no messages. The
 *   client may cancel the request if it does not wish to wait any longer for
 *   the response.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [PullResponse]{@link PullResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [PullResponse]{@link PullResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var maxMessages = 0;
 * var request = {
 *     subscription: formattedSubscription,
 *     maxMessages: maxMessages
 * };
 * client.pull(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.pull = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._pull(request, options, callback);
};

/**
 * (EXPERIMENTAL) StreamingPull is an experimental feature. This RPC will
 * respond with UNIMPLEMENTED errors unless you have been invited to test
 * this feature. Contact cloud-pubsub@google.com with any questions.
 *
 * Establishes a stream with the server, which sends messages down to the
 * client. The client streams acknowledgements and ack deadline modifications
 * back to the server. The server will close the stream and return the status
 * on any error. The server may close the stream with status `OK` to reassign
 * server-side resources, in which case, the client should re-establish the
 * stream. `UNAVAILABLE` may also be returned in the case of a transient error
 * (e.g., a server restart). These should also be retried by the client. Flow
 * control can be achieved by configuring the underlying RPC channel.
 *
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @returns {Stream}
 *   An object stream which is both readable and writable. It accepts objects
 *   representing [StreamingPullRequest]{@link StreamingPullRequest} for write() method, and
 *   will emit objects representing [StreamingPullResponse]{@link StreamingPullResponse} on 'data' event asynchronously.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var stream = client.streamingPull().on('data', function(response) {
 *     // doThingsWith(response);
 * });
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var streamAckDeadlineSeconds = 0;
 * var request = {
 *     subscription : formattedSubscription,
 *     streamAckDeadlineSeconds : streamAckDeadlineSeconds
 * };
 * var request = {
 *     root: request
 * };
 * // Write request objects.
 * stream.write(request);
 */
SubscriberClient.prototype.streamingPull = function(options) {
  if (options === undefined) {
    options = {};
  }

  return this._streamingPull(options);
};

/**
 * Modifies the `PushConfig` for a specified subscription.
 *
 * This may be used to change a push subscription to a pull one (signified by
 * an empty `PushConfig`) or vice versa, or change the endpoint URL and other
 * attributes of a push subscription. Messages will accumulate for delivery
 * continuously through the call regardless of changes to the `PushConfig`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The name of the subscription.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {Object} request.pushConfig
 *   The push configuration for future deliveries.
 *
 *   An empty `pushConfig` indicates that the Pub/Sub system should
 *   stop pushing messages from the given subscription and allow
 *   messages to be pulled and acknowledged - effectively pausing
 *   the subscription if `Pull` is not called.
 *
 *   This object should have the same structure as [PushConfig]{@link PushConfig}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var pushConfig = {};
 * var request = {
 *     subscription: formattedSubscription,
 *     pushConfig: pushConfig
 * };
 * client.modifyPushConfig(request).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.modifyPushConfig = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._modifyPushConfig(request, options, callback);
};

/**
 * Lists the existing snapshots.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.project
 *   The name of the cloud project that snapshots belong to.
 *   Format is `projects/{project}`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [Snapshot]{@link Snapshot}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListSnapshotsResponse]{@link ListSnapshotsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Snapshot]{@link Snapshot}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [Snapshot]{@link Snapshot} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListSnapshotsResponse]{@link ListSnapshotsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listSnapshots({project: formattedProject}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listSnapshots(nextRequest, options).then(callback);
 *     }
 * }
 * client.listSnapshots({project: formattedProject}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
SubscriberClient.prototype.listSnapshots = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listSnapshots(request, options, callback);
};

/**
 * Equivalent to {@link listSnapshots}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listSnapshots} continuously
 * and invokes the callback registered for 'data' event for each element in the
 * responses.
 *
 * The returned object has 'end' method when no more elements are required.
 *
 * autoPaginate option will be ignored.
 *
 * @see {@link https://nodejs.org/api/stream.html}
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.project
 *   The name of the cloud project that snapshots belong to.
 *   Format is `projects/{project}`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [Snapshot]{@link Snapshot} on 'data' event.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * client.listSnapshotsStream({project: formattedProject}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.listSnapshotsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listSnapshots.createStream(this._listSnapshots, request, options);
};

/**
 * Creates a snapshot from the requested subscription.
 * If the snapshot already exists, returns `ALREADY_EXISTS`.
 * If the requested subscription doesn't exist, returns `NOT_FOUND`.
 *
 * If the name is not provided in the request, the server will assign a random
 * name for this snapshot on the same project as the subscription, conforming
 * to the
 * [resource name format](https://cloud.google.com/pubsub/docs/overview#names).
 * The generated name is populated in the returned Snapshot object.
 * Note that for REST API requests, you must specify a name in the request.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Optional user-provided name for this snapshot.
 *   If the name is not provided in the request, the server will assign a random
 *   name for this snapshot on the same project as the subscription.
 *   Note that for REST API requests, you must specify a name.
 *   Format is `projects/{project}/snapshots/{snap}`.
 * @param {string} request.subscription
 *   The subscription whose backlog the snapshot retains.
 *   Specifically, the created snapshot is guaranteed to retain:
 *    (a) The existing backlog on the subscription. More precisely, this is
 *        defined as the messages in the subscription's backlog that are
 *        unacknowledged upon the successful completion of the
 *        `CreateSnapshot` request; as well as:
 *    (b) Any messages published to the subscription's topic following the
 *        successful completion of the CreateSnapshot request.
 *   Format is `projects/{project}/subscriptions/{sub}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Snapshot]{@link Snapshot}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Snapshot]{@link Snapshot}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedName = client.snapshotPath("[PROJECT]", "[SNAPSHOT]");
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var request = {
 *     name: formattedName,
 *     subscription: formattedSubscription
 * };
 * client.createSnapshot(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.createSnapshot = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createSnapshot(request, options, callback);
};

/**
 * Removes an existing snapshot. All messages retained in the snapshot
 * are immediately dropped. After a snapshot is deleted, a new one may be
 * created with the same name, but the new one has no association with the old
 * snapshot or its subscription, unless the same subscription is specified.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.snapshot
 *   The name of the snapshot to delete.
 *   Format is `projects/{project}/snapshots/{snap}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSnapshot = client.snapshotPath("[PROJECT]", "[SNAPSHOT]");
 * client.deleteSnapshot({snapshot: formattedSnapshot}).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.deleteSnapshot = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteSnapshot(request, options, callback);
};

/**
 * Seeks an existing subscription to a point in time or to a given snapshot,
 * whichever is provided in the request.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.subscription
 *   The subscription to affect.
 * @param {Object=} request.time
 *   The time to seek to.
 *   Messages retained in the subscription that were published before this
 *   time are marked as acknowledged, and messages retained in the
 *   subscription that were published after this time are marked as
 *   unacknowledged. Note that this operation affects only those messages
 *   retained in the subscription (configured by the combination of
 *   `message_retention_duration` and `retain_acked_messages`). For example,
 *   if `time` corresponds to a point before the message retention
 *   window (or to a point before the system's notion of the subscription
 *   creation time), only retained messages will be marked as unacknowledged,
 *   and already-expunged messages will not be restored.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 * @param {string=} request.snapshot
 *   The snapshot to seek to. The snapshot's topic must be the same as that of
 *   the provided subscription.
 *   Format is `projects/{project}/snapshots/{snap}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [SeekResponse]{@link SeekResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SeekResponse]{@link SeekResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedSubscription = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * client.seek({subscription: formattedSubscription}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.seek = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._seek(request, options, callback);
};

/**
 * Sets the access control policy on the specified resource. Replaces any
 * existing policy.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy is being specified.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {Object} request.policy
 *   REQUIRED: The complete policy to be applied to the `resource`. The size of
 *   the policy is limited to a few 10s of KB. An empty policy is a
 *   valid policy but certain Cloud Platform services (such as Projects)
 *   might reject them.
 *
 *   This object should have the same structure as [Policy]{@link Policy}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedResource = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var policy = {};
 * var request = {
 *     resource: formattedResource,
 *     policy: policy
 * };
 * client.setIamPolicy(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.setIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._setIamPolicy(request, options, callback);
};

/**
 * Gets the access control policy for a resource.
 * Returns an empty policy if the resource exists and does not have a policy
 * set.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedResource = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * client.getIamPolicy({resource: formattedResource}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.getIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getIamPolicy(request, options, callback);
};

/**
 * Returns permissions that a caller has on the specified resource.
 * If the resource does not exist, this will return an empty set of
 * permissions, not a NOT_FOUND error.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy detail is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {string[]} request.permissions
 *   The set of permissions to check for the `resource`. Permissions with
 *   wildcards (such as '*' or 'storage.*') are not allowed. For more
 *   information see
 *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.subscriberClient();
 * var formattedResource = client.subscriptionPath("[PROJECT]", "[SUBSCRIPTION]");
 * var permissions = [];
 * var request = {
 *     resource: formattedResource,
 *     permissions: permissions
 * };
 * client.testIamPermissions(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SubscriberClient.prototype.testIamPermissions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._testIamPermissions(request, options, callback);
};

function SubscriberClientBuilder(gaxGrpc) {
  if (!(this instanceof SubscriberClientBuilder)) {
    return new SubscriberClientBuilder(gaxGrpc);
  }

  var iamPolicyClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/iam/v1/iam_policy.proto'
  }]);
  extend(this, iamPolicyClient.google.iam.v1);

  var subscriberClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/pubsub/v1/pubsub.proto'
  }]);
  extend(this, subscriberClient.google.pubsub.v1);

  var grpcClients = extend(
    true,
    {},
    iamPolicyClient,
    subscriberClient
  );

  /**
   * Build a new instance of {@link SubscriberClient}.
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
   */
  this.subscriberClient = function(opts) {
    return new SubscriberClient(gaxGrpc, grpcClients, opts);
  };
  extend(this.subscriberClient, SubscriberClient);
}
module.exports = SubscriberClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
