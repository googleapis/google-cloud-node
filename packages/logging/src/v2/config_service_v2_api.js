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
 * https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_config.proto,
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
var configData = require('./config_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

var PAGE_DESCRIPTORS = {
  listSinks: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'sinks')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/cloud-platform.read-only',
  'https://www.googleapis.com/auth/logging.admin',
  'https://www.googleapis.com/auth/logging.read',
  'https://www.googleapis.com/auth/logging.write'
];

/**
 * Service for configuring sinks used to export log entries outside Stackdriver
 * Logging.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link configServiceV2Api}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var api = loggingV2.configServiceV2Api();
 *
 * @class
 */
function ConfigServiceV2Api(gaxGrpc, grpcClient, opts) {
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
      'google.logging.v2.ConfigServiceV2',
      configData,
      clientConfig,
      timeout,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.logging.v2.ConfigServiceV2,
      {sslCreds: sslCreds});
  var methods = [
    'listSinks',
    'getSink',
    'createSink',
    'updateSink',
    'deleteSink'
  ];
  methods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
        stub.then(function(stub) { return stub[methodName].bind(stub); }),
        defaults[methodName]);
  }.bind(this));
}

// Path templates

var PARENT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var SINK_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/sinks/{sink}');

/**
 * Returns a fully-qualified parent resource name string.
 * @param {String} project
 * @returns {String}
 */
ConfigServiceV2Api.prototype.parentPath = function parentPath(project) {
  return PARENT_PATH_TEMPLATE.render({
    project: project
  });
};

/**
 * Parses the parentName from a parent resource.
 * @param {String} parentName
 *   A fully-qualified path representing a parent resources.
 * @returns {String} - A string representing the project.
 */
ConfigServiceV2Api.prototype.matchProjectFromParentName =
    function matchProjectFromParentName(parentName) {
  return PARENT_PATH_TEMPLATE.match(parentName).project;
};

/**
 * Returns a fully-qualified sink resource name string.
 * @param {String} project
 * @param {String} sink
 * @returns {String}
 */
ConfigServiceV2Api.prototype.sinkPath = function sinkPath(project, sink) {
  return SINK_PATH_TEMPLATE.render({
    project: project,
    sink: sink
  });
};

/**
 * Parses the sinkName from a sink resource.
 * @param {String} sinkName
 *   A fully-qualified path representing a sink resources.
 * @returns {String} - A string representing the project.
 */
ConfigServiceV2Api.prototype.matchProjectFromSinkName =
    function matchProjectFromSinkName(sinkName) {
  return SINK_PATH_TEMPLATE.match(sinkName).project;
};

/**
 * Parses the sinkName from a sink resource.
 * @param {String} sinkName
 *   A fully-qualified path representing a sink resources.
 * @returns {String} - A string representing the sink.
 */
ConfigServiceV2Api.prototype.matchSinkFromSinkName =
    function matchSinkFromSinkName(sinkName) {
  return SINK_PATH_TEMPLATE.match(sinkName).sink;
};

// Service calls

/**
 * Lists sinks.
 *
 * @param {string} parent
 *   Required. The resource name containing the sinks.
 *   Example: `"projects/my-logging-project"`.
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
 *   [LogSink]{@link LogSink} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = loggingV2.configServiceV2Api();
 * var formattedParent = api.parentPath("[PROJECT]");
 * api.listSinks(formattedParent).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
ConfigServiceV2Api.prototype.listSinks = function listSinks() {
  var args = arguejs({
    parent: String,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    parent: args.parent
  };
  if ('pageSize' in args.otherArgs) {
    req.page_size = args.otherArgs.pageSize;
  }
  return this._listSinks(req, args.options, args.callback);
};

/**
 * Gets a sink.
 *
 * @param {string} sinkName
 *   The resource name of the sink to return.
 *   Example: `"projects/my-project-id/sinks/my-sink-id"`.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.configServiceV2Api();
 * var formattedSinkName = api.sinkPath("[PROJECT]", "[SINK]");
 * api.getSink(formattedSinkName, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
ConfigServiceV2Api.prototype.getSink = function getSink() {
  var args = arguejs({
    sinkName: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    sink_name: args.sinkName
  };
  return this._getSink(req, args.options, args.callback);
};

/**
 * Creates a sink.
 *
 * @param {string} parent
 *   The resource in which to create the sink.
 *   Example: `"projects/my-project-id"`.
 *
 *   The new sink must be provided in the request.
 * @param {Object} sink
 *   The new sink, which must not have an identifier that already
 *   exists.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.configServiceV2Api();
 * var formattedParent = api.parentPath("[PROJECT]");
 * var sink = {};
 * api.createSink(formattedParent, sink, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
ConfigServiceV2Api.prototype.createSink = function createSink() {
  var args = arguejs({
    parent: String,
    sink: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    parent: args.parent,
    sink: args.sink
  };
  return this._createSink(req, args.options, args.callback);
};

/**
 * Creates or updates a sink.
 *
 * @param {string} sinkName
 *   The resource name of the sink to update.
 *   Example: `"projects/my-project-id/sinks/my-sink-id"`.
 *
 *   The updated sink must be provided in the request and have the
 *   same name that is specified in `sinkName`.  If the sink does not
 *   exist, it is created.
 * @param {Object} sink
 *   The updated sink, whose name must be the same as the sink
 *   identifier in `sinkName`.  If `sinkName` does not exist, then
 *   this method creates a new sink.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.configServiceV2Api();
 * var formattedSinkName = api.sinkPath("[PROJECT]", "[SINK]");
 * var sink = {};
 * api.updateSink(formattedSinkName, sink, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
ConfigServiceV2Api.prototype.updateSink = function updateSink() {
  var args = arguejs({
    sinkName: String,
    sink: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    sink_name: args.sinkName,
    sink: args.sink
  };
  return this._updateSink(req, args.options, args.callback);
};

/**
 * Deletes a sink.
 *
 * @param {string} sinkName
 *   The resource name of the sink to delete.
 *   Example: `"projects/my-project-id/sinks/my-sink-id"`.
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
 * var api = loggingV2.configServiceV2Api();
 * var formattedSinkName = api.sinkPath("[PROJECT]", "[SINK]");
 * api.deleteSink(formattedSinkName, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
ConfigServiceV2Api.prototype.deleteSink = function deleteSink() {
  var args = arguejs({
    sinkName: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    sink_name: args.sinkName
  };
  return this._deleteSink(req, args.options, args.callback);
};

function ConfigServiceV2ApiBuilder(gaxGrpc) {
  if (!(this instanceof ConfigServiceV2ApiBuilder)) {
    return new ConfigServiceV2ApiBuilder(gaxGrpc);
  }

  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging_config.proto'
  }]);
  extend(this, grpcClient.google.logging.v2);

  /**
   * Build a new instance of {@link ConfigServiceV2Api}.
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
  this.configServiceV2Api = function(opts) {
    return new ConfigServiceV2Api(gaxGrpc, grpcClient, opts);
  };
  extend(this.configServiceV2Api, ConfigServiceV2Api);
}
module.exports = ConfigServiceV2ApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;