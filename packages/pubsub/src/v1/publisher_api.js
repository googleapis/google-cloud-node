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
 * @see {@link publisherApi}
 *
 * @example
 * var pubsubV1 = require('@google-cloud/pubsub').v1({
 *   // optional auth parameters.
 * });
 * var api = pubsubV1.publisherApi();
 *
 * @class
 */
function PublisherApi(gaxGrpc, grpcClients, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'nodejs/' + process.version].join(' ');


  var bundleDescriptors = {
    publish: new gax.BundleDescriptor(
        'messages',
        [
          'topic'
        ],
        'messageIds',
        gax.createByteLengthFunction(grpcClients.publisherClient.google.pubsub.v1.PubsubMessage))
  };
  var defaults = gaxGrpc.constructSettings(
      'google.pubsub.v1.Publisher',
      configData,
      clientConfig,
      PAGE_DESCRIPTORS,
      bundleDescriptors,
      {'x-goog-api-client': googleApiClient});

  var iamPolicyStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.iamPolicyClient.google.iam.v1.IAMPolicy,
      {sslCreds: sslCreds});
  var iamPolicyStubMethods = [
    'setIamPolicy',
    'getIamPolicy',
    'testIamPermissions'
  ];
  iamPolicyStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      iamPolicyStub.then(function(iamPolicyStub) {
        return iamPolicyStub[methodName].bind(iamPolicyStub);
      }),
      defaults[methodName]);
  }.bind(this));

  var publisherStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.publisherClient.google.pubsub.v1.Publisher,
      {sslCreds: sslCreds});
  var publisherStubMethods = [
    'createTopic',
    'publish',
    'getTopic',
    'listTopics',
    'listTopicSubscriptions',
    'deleteTopic'
  ];
  publisherStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      publisherStub.then(function(publisherStub) {
        return publisherStub[methodName].bind(publisherStub);
      }),
      defaults[methodName]);
  }.bind(this));
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
PublisherApi.prototype.projectPath = function(project) {
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
PublisherApi.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified topic resource name string.
 * @param {String} project
 * @param {String} topic
 * @returns {String}
 */
PublisherApi.prototype.topicPath = function(project, topic) {
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
PublisherApi.prototype.matchProjectFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).project;
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the topic.
 */
PublisherApi.prototype.matchTopicFromTopicName = function(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).topic;
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
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedName = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.createTopic({name: formattedName}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.createTopic = function(request, options, callback) {
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
 *   The second parameter to the callback is an object representing [PublishResponse]{@link PublishResponse}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * var data = '';
 * var messagesElement = {
 *     data : data
 * };
 * var messages = [messagesElement];
 * var request = {
 *     topic: formattedTopic,
 *     messages: messages
 * };
 * api.publish(request).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.publish = function(request, options, callback) {
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
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.getTopic({topic: formattedTopic}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.getTopic = function(request, options, callback) {
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
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object, ?string)=} callback
 *   When specified, the results are not streamed but this callback
 *   will be called with the response object representing [ListTopicsResponse]{@link ListTopicsResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [Topic]{@link Topic} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedProject = api.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * api.listTopics({project: formattedProject}).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 *
 * // Or obtain the paged response through the callback.
 * function callback(err, response, nextPageToken) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 *     if (nextPageToken) {
 *         // fetch the next page.
 *         api.listTopics({project: formattedProject}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listTopics({project: formattedProject}, {flattenPages: false}, callback);
 */
PublisherApi.prototype.listTopics = function(request, options, callback) {
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
 * Lists the name of the subscriptions for this topic.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.topic
 *   The name of the topic that subscriptions are attached to.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object, ?string)=} callback
 *   When specified, the results are not streamed but this callback
 *   will be called with the response object representing [ListTopicSubscriptionsResponse]{@link ListTopicSubscriptionsResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits a string on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * // Iterate over all elements.
 * api.listTopicSubscriptions({topic: formattedTopic}).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 *
 * // Or obtain the paged response through the callback.
 * function callback(err, response, nextPageToken) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 *     if (nextPageToken) {
 *         // fetch the next page.
 *         api.listTopicSubscriptions({topic: formattedTopic}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listTopicSubscriptions({topic: formattedTopic}, {flattenPages: false}, callback);
 */
PublisherApi.prototype.listTopicSubscriptions = function(request, options, callback) {
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
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.deleteTopic({topic: formattedTopic}).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.deleteTopic = function(request, options, callback) {
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
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedResource = api.topicPath("[PROJECT]", "[TOPIC]");
 * var policy = {};
 * var request = {
 *     resource: formattedResource,
 *     policy: policy
 * };
 * api.setIamPolicy(request).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.setIamPolicy = function(request, options, callback) {
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
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedResource = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.getIamPolicy({resource: formattedResource}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.getIamPolicy = function(request, options, callback) {
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
 *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedResource = api.topicPath("[PROJECT]", "[TOPIC]");
 * var permissions = [];
 * var request = {
 *     resource: formattedResource,
 *     permissions: permissions
 * };
 * api.testIamPermissions(request).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
PublisherApi.prototype.testIamPermissions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._testIamPermissions(request, options, callback);
};

function PublisherApiBuilder(gaxGrpc) {
  if (!(this instanceof PublisherApiBuilder)) {
    return new PublisherApiBuilder(gaxGrpc);
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

  var grpcClients = {
    iamPolicyClient: iamPolicyClient,
    publisherClient: publisherClient
  };

  /**
   * Build a new instance of {@link PublisherApi}.
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
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.publisherApi = function(opts) {
    return new PublisherApi(gaxGrpc, grpcClients, opts);
  };
  extend(this.publisherApi, PublisherApi);
}
module.exports = PublisherApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;