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

var configData = require('./config_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';


var PAGE_DESCRIPTORS = {
  listSinks: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
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
function ConfigServiceV2Api(gaxGrpc, grpcClients, opts) {
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

  var defaults = gaxGrpc.constructSettings(
      'google.logging.v2.ConfigServiceV2',
      configData,
      clientConfig,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var configServiceV2Stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.configServiceV2Client.google.logging.v2.ConfigServiceV2,
      {sslCreds: sslCreds});
  var configServiceV2StubMethods = [
    'listSinks',
    'getSink',
    'createSink',
    'updateSink',
    'deleteSink'
  ];
  configServiceV2StubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      configServiceV2Stub.then(function(configServiceV2Stub) {
        return configServiceV2Stub[methodName].bind(configServiceV2Stub);
      }),
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
 *   Required. The cloud resource containing the sinks.
 *   Example: `"projects/my-logging-project"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 *
 *   In addition, options may contain the following optional parameters.
 * @param {number=} options.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 *
 * @param {function(?Error, ?Object, ?string)=} callback
 *   When specified, the results are not streamed but this callback
 *   will be called with the response object representing [ListSinksResponse]{@link ListSinksResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|gax.EventEmitter}
 *   An object stream which emits an object representing
 *   [LogSink]{@link LogSink} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return an event emitter to handle the call status and the callback
 *   will be called with the response object.
 *
 * @example
 *
 * var api = loggingV2.configServiceV2Api();
 * var formattedParent = api.parentPath("[PROJECT]");
 * // Iterate over all elements.
 * api.listSinks(formattedParent).on('data', function(element) {
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
 *         api.listSinks(formattedParent, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listSinks(formattedParent, {flattenPages: false}, callback);
 */
ConfigServiceV2Api.prototype.listSinks = function listSinks(
    parent,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    parent: parent
  };
  if ('pageSize' in options) {
    req.pageSize = options.pageSize;
  }
  return this._listSinks(req, options, callback);
};

/**
 * Gets a sink.
 *
 * @param {string} sinkName
 *   Required. The resource name of the sink to return.
 *   Example: `"projects/my-project-id/sinks/my-sink-id"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
ConfigServiceV2Api.prototype.getSink = function getSink(
    sinkName,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    sinkName: sinkName
  };
  return this._getSink(req, options, callback);
};

/**
 * Creates a sink.
 *
 * @param {string} parent
 *   Required. The resource in which to create the sink.
 *   Example: `"projects/my-project-id"`.
 *   The new sink must be provided in the request.
 * @param {Object} sink
 *   Required. The new sink, whose `name` parameter is a sink identifier that
 *   is not already in use.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
ConfigServiceV2Api.prototype.createSink = function createSink(
    parent,
    sink,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    parent: parent,
    sink: sink
  };
  return this._createSink(req, options, callback);
};

/**
 * Updates or creates a sink.
 *
 * @param {string} sinkName
 *   Required. The resource name of the sink to update, including the parent
 *   resource and the sink identifier.  If the sink does not exist, this method
 *   creates the sink.  Example: `"projects/my-project-id/sinks/my-sink-id"`.
 * @param {Object} sink
 *   Required. The updated sink, whose name is the same identifier that appears
 *   as part of `sinkName`.  If `sinkName` does not exist, then
 *   this method creates a new sink.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
ConfigServiceV2Api.prototype.updateSink = function updateSink(
    sinkName,
    sink,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    sinkName: sinkName,
    sink: sink
  };
  return this._updateSink(req, options, callback);
};

/**
 * Deletes a sink.
 *
 * @param {string} sinkName
 *   Required. The resource name of the sink to delete, including the parent
 *   resource and the sink identifier.  Example:
 *   `"projects/my-project-id/sinks/my-sink-id"`.  It is an error if the sink
 *   does not exist.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
ConfigServiceV2Api.prototype.deleteSink = function deleteSink(
    sinkName,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    sinkName: sinkName
  };
  return this._deleteSink(req, options, callback);
};

function ConfigServiceV2ApiBuilder(gaxGrpc) {
  if (!(this instanceof ConfigServiceV2ApiBuilder)) {
    return new ConfigServiceV2ApiBuilder(gaxGrpc);
  }

  var configServiceV2Client = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging_config.proto'
  }]);
  extend(this, configServiceV2Client.google.logging.v2);

  var grpcClients = {
    configServiceV2Client: configServiceV2Client
  };

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
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.configServiceV2Api = function(opts) {
    return new ConfigServiceV2Api(gaxGrpc, grpcClients, opts);
  };
  extend(this.configServiceV2Api, ConfigServiceV2Api);
}
module.exports = ConfigServiceV2ApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;