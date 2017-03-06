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

var configData = require('./publisher_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'pubsub.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var PAGE_DESCRIPTORS = {
  listTopics: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'topics'),
  listTopicSubscriptions: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
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
 * The service that an application uses to manipulate topics, and to send
 * messages to a topic.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link publisherClient}
 *
 * @example
 * var pubsubV1 = require('@google-cloud/pubsub').v1({
 *   // optional auth parameters.
 * });
 * var client = pubsubV1.publisherClient();
 *
 * @class
 */
function PublisherClient(gaxGrpc, grpcClients, opts) {
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

  var bundleDescriptors = {
    publish: new gax.BundleDescriptor(
      'messages',
      [
        'topic'
      ],
      'messageIds',
      gax.createByteLengthFunction(grpcClients.google.pubsub.v1.PubsubMessage))
  };

  var defaults = gaxGrpc.constructSettings(
      'google.pubsub.v1.Publisher',
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
      PAGE_DESCRIPTORS[methodName] || bundleDescriptors[methodName]);
  });

  var publisherStub = gaxGrpc.createStub(
      grpcClients.google.pubsub.v1.Publisher,
      opts);
  var publisherStubMethods = [
    'createTopic',
    'publish',
    'getTopic',
    'listTopics',
    'listTopicSubscriptions',
    'deleteTopic'
  ];
  publisherStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      publisherStub.then(function(publisherStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return publisherStub[methodName].apply(publisherStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || bundleDescriptors[methodName]);
  });
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var TOPIC_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/topics/{topic}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
PublisherClient.prototype.projectPath = function(project) {
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
PublisherClient.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified topic resource name string.
 * @param {String} project
 * @param {String} topic
 * @returns {String}
 */
PublisherClient.prototype.topicPath = function(project, topic) {
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
PublisherClient.prototype.matchProjectFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).project;
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the topic.
 */
PublisherClient.prototype.matchTopicFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).topic;
};

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
PublisherClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Creates the given topic with the given name.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the topic. It must have the format
 *   `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
 *   and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
 *   underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
 *   signs (`%`). It must be between 3 and 255 characters in length, and it
 *   must not start with `"goog"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Topic]{@link Topic}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedName = client.topicPath("[PROJECT]", "[TOPIC]");
 * client.createTopic({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.createTopic = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createTopic(request, options, callback);
};

/**
 * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
 * does not exist. The message payload must not be empty; it must contain
 *  either a non-empty data field, or at least one attribute.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.topic
 *   The messages in the request will be published on this topic.
 *   Format is `projects/{project}/topics/{topic}`.
 * @param {Object[]} request.messages
 *   The messages to publish.
 *
 *   This object should have the same structure as [PubsubMessage]{@link PubsubMessage}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [PublishResponse]{@link PublishResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [PublishResponse]{@link PublishResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * var data = '';
 * var messagesElement = {
 *     data : data
 * };
 * var messages = [messagesElement];
 * var request = {
 *     topic: formattedTopic,
 *     messages: messages
 * };
 * client.publish(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.publish = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._publish(request, options, callback);
};

/**
 * Gets the configuration of a topic.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.topic
 *   The name of the topic to get.
 *   Format is `projects/{project}/topics/{topic}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Topic]{@link Topic}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * client.getTopic({topic: formattedTopic}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.getTopic = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getTopic(request, options, callback);
};

/**
 * Lists matching topics.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.project
 *   The name of the cloud project that topics belong to.
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
 *   The second parameter to the callback is Array of [Topic]{@link Topic}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListTopicsResponse]{@link ListTopicsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Topic]{@link Topic}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [Topic]{@link Topic} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListTopicsResponse]{@link ListTopicsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listTopics({project: formattedProject}).then(function(responses) {
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
 *         return client.listTopics(nextRequest, options).then(callback);
 *     }
 * }
 * client.listTopics({project: formattedProject}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
PublisherClient.prototype.listTopics = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listTopics(request, options, callback);
};

/**
 * Equivalent to {@link listTopics}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listTopics} continuously
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
 *   The name of the cloud project that topics belong to.
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
 *   An object stream which emits an object representing [Topic]{@link Topic} on 'data' event.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedProject = client.projectPath("[PROJECT]");
 * client.listTopicsStream({project: formattedProject}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.listTopicsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listTopics.createStream(this._listTopics, request, options);
};

/**
 * Lists the name of the subscriptions for this topic.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.topic
 *   The name of the topic that subscriptions are attached to.
 *   Format is `projects/{project}/topics/{topic}`.
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
 *   The second parameter to the callback is Array of string.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListTopicSubscriptionsResponse]{@link ListTopicSubscriptionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of string.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of string in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListTopicSubscriptionsResponse]{@link ListTopicSubscriptionsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * // Iterate over all elements.
 * client.listTopicSubscriptions({topic: formattedTopic}).then(function(responses) {
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
 *         return client.listTopicSubscriptions(nextRequest, options).then(callback);
 *     }
 * }
 * client.listTopicSubscriptions({topic: formattedTopic}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
PublisherClient.prototype.listTopicSubscriptions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listTopicSubscriptions(request, options, callback);
};

/**
 * Equivalent to {@link listTopicSubscriptions}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listTopicSubscriptions} continuously
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
 * @param {string} request.topic
 *   The name of the topic that subscriptions are attached to.
 *   Format is `projects/{project}/topics/{topic}`.
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
 *   An object stream which emits a string on 'data' event.
 *
 * @example
 *
 * var client = pubsubV1.publisherClient();
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * client.listTopicSubscriptionsStream({topic: formattedTopic}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.listTopicSubscriptionsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listTopicSubscriptions.createStream(this._listTopicSubscriptions, request, options);
};

/**
 * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
 * does not exist. After a topic is deleted, a new topic may be created with
 * the same name; this is an entirely new topic with none of the old
 * configuration or subscriptions. Existing subscriptions to this topic are
 * not deleted, but their `topic` field is set to `_deleted-topic_`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.topic
 *   Name of the topic to delete.
 *   Format is `projects/{project}/topics/{topic}`.
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
 * var client = pubsubV1.publisherClient();
 * var formattedTopic = client.topicPath("[PROJECT]", "[TOPIC]");
 * client.deleteTopic({topic: formattedTopic}).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.deleteTopic = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteTopic(request, options, callback);
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
 * var client = pubsubV1.publisherClient();
 * var formattedResource = client.topicPath("[PROJECT]", "[TOPIC]");
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
PublisherClient.prototype.setIamPolicy = function(request, options, callback) {
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
 * var client = pubsubV1.publisherClient();
 * var formattedResource = client.topicPath("[PROJECT]", "[TOPIC]");
 * client.getIamPolicy({resource: formattedResource}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherClient.prototype.getIamPolicy = function(request, options, callback) {
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
 * var client = pubsubV1.publisherClient();
 * var formattedResource = client.topicPath("[PROJECT]", "[TOPIC]");
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
PublisherClient.prototype.testIamPermissions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._testIamPermissions(request, options, callback);
};

function PublisherClientBuilder(gaxGrpc) {
  if (!(this instanceof PublisherClientBuilder)) {
    return new PublisherClientBuilder(gaxGrpc);
  }

  var iamPolicyClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/iam/v1/iam_policy.proto'
  }]);
  extend(this, iamPolicyClient.google.iam.v1);

  var publisherClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/pubsub/v1/pubsub.proto'
  }]);
  extend(this, publisherClient.google.pubsub.v1);

  var grpcClients = extend(
    true,
    {},
    iamPolicyClient,
    publisherClient
  );

  /**
   * Build a new instance of {@link PublisherClient}.
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
  this.publisherClient = function(opts) {
    return new PublisherClient(gaxGrpc, grpcClients, opts);
  };
  extend(this.publisherClient, PublisherClient);
}
module.exports = PublisherClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
