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
var configData = require('./publisher_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'pubsub.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

var PAGE_DESCRIPTORS = {
  listTopics: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'topics'),
  listTopicSubscriptions: new gax.PageDescriptor(
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
function PublisherApi(gaxGrpc, grpcClient, opts) {
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


  var bundleDescriptors = {
    publish: new gax.BundleDescriptor(
        'messages',
        [
          'topic'
        ],
        'message_ids',
        gax.createByteLengthFunction(grpcClient.google.pubsub.v1.PubsubMessage))
  };
  var defaults = gaxGrpc.constructSettings(
      'google.pubsub.v1.Publisher',
      configData,
      clientConfig,
      timeout,
      PAGE_DESCRIPTORS,
      bundleDescriptors,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.pubsub.v1.Publisher,
      {sslCreds: sslCreds});
  var methods = [
    'createTopic',
    'publish',
    'getTopic',
    'listTopics',
    'listTopicSubscriptions',
    'deleteTopic'
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

var TOPIC_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/topics/{topic}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
PublisherApi.prototype.projectPath = function projectPath(project) {
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
PublisherApi.prototype.matchProjectFromProjectName =
    function matchProjectFromProjectName(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified topic resource name string.
 * @param {String} project
 * @param {String} topic
 * @returns {String}
 */
PublisherApi.prototype.topicPath = function topicPath(project, topic) {
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
PublisherApi.prototype.matchProjectFromTopicName =
    function matchProjectFromTopicName(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).project;
};

/**
 * Parses the topicName from a topic resource.
 * @param {String} topicName
 *   A fully-qualified path representing a topic resources.
 * @returns {String} - A string representing the topic.
 */
PublisherApi.prototype.matchTopicFromTopicName =
    function matchTopicFromTopicName(topicName) {
  return TOPIC_PATH_TEMPLATE.match(topicName).topic;
};

// Service calls

/**
 * Creates the given topic with the given name.
 *
 * @param {string} name
 *   The name of the topic. It must have the format
 *   `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
 *   and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
 *   underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
 *   signs (`%`). It must be between 3 and 255 characters in length, and it
 *   must not start with `"goog"`.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedName = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.createTopic(formattedName, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
PublisherApi.prototype.createTopic = function createTopic() {
  var args = arguejs({
    name: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    name: args.name
  };
  return this._createTopic(req, args.options, args.callback);
};

/**
 * Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic
 * does not exist. The message payload must not be empty; it must contain
 *  either a non-empty data field, or at least one attribute.
 *
 * @param {string} topic
 *   The messages in the request will be published on this topic.
 * @param {Object[]} messages
 *   The messages to publish.
 *
 *   This object should have the same structure as [PubsubMessage]{@link PubsubMessage}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [PublishResponse]{@link PublishResponse}
 * @returns {gax.BundleEventEmitter} - the event emitter to handle the call
 *   status. When isBundling: false is specified in the options, it still returns
 *   a gax.BundleEventEmitter but the API is immediately invoked, so it behaves same
 *   as a gax.EventEmitter does.
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
 * api.publish(formattedTopic, messages, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
PublisherApi.prototype.publish = function publish() {
  var args = arguejs({
    topic: String,
    messages: Array,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    topic: args.topic,
    messages: args.messages
  };
  return this._publish(req, args.options, args.callback);
};

/**
 * Gets the configuration of a topic.
 *
 * @param {string} topic
 *   The name of the topic to get.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Topic]{@link Topic}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.getTopic(formattedTopic, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
PublisherApi.prototype.getTopic = function getTopic() {
  var args = arguejs({
    topic: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    topic: args.topic
  };
  return this._getTopic(req, args.options, args.callback);
};

/**
 * Lists matching topics.
 *
 * @param {string} project
 *   The name of the cloud project that topics belong to.
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
 *   [Topic]{@link Topic} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedProject = api.projectPath("[PROJECT]");
 * api.listTopics(formattedProject).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
PublisherApi.prototype.listTopics = function listTopics() {
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
  return this._listTopics(req, args.options, args.callback);
};

/**
 * Lists the name of the subscriptions for this topic.
 *
 * @param {string} topic
 *   The name of the topic that subscriptions are attached to.
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
 *   An object stream. By default, this emits a string on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.listTopicSubscriptions(formattedTopic).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
PublisherApi.prototype.listTopicSubscriptions = function listTopicSubscriptions() {
  var args = arguejs({
    topic: String,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    topic: args.topic
  };
  if ('pageSize' in args.otherArgs) {
    req.page_size = args.otherArgs.pageSize;
  }
  return this._listTopicSubscriptions(req, args.options, args.callback);
};

/**
 * Deletes the topic with the given name. Returns `NOT_FOUND` if the topic
 * does not exist. After a topic is deleted, a new topic may be created with
 * the same name; this is an entirely new topic with none of the old
 * configuration or subscriptions. Existing subscriptions to this topic are
 * not deleted, but their `topic` field is set to `_deleted-topic_`.
 *
 * @param {string} topic
 *   Name of the topic to delete.
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
 * var api = pubsubV1.publisherApi();
 * var formattedTopic = api.topicPath("[PROJECT]", "[TOPIC]");
 * api.deleteTopic(formattedTopic, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
PublisherApi.prototype.deleteTopic = function deleteTopic() {
  var args = arguejs({
    topic: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    topic: args.topic
  };
  return this._deleteTopic(req, args.options, args.callback);
};

function PublisherApiBuilder(gaxGrpc) {
  if (!(this instanceof PublisherApiBuilder)) {
    return new PublisherApiBuilder(gaxGrpc);
  }

  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/pubsub/v1/pubsub.proto'
  }]);
  extend(this, grpcClient.google.pubsub.v1);

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
   * @param {number=} opts.timeout
   *   The default timeout, in seconds, for calls made through this client.
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.publisherApi = function(opts) {
    return new PublisherApi(gaxGrpc, grpcClient, opts);
  };
  extend(this.publisherApi, PublisherApi);
}
module.exports = PublisherApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;