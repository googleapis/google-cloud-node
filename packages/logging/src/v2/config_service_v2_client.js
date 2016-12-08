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
 * Service for configuring sinks used to export log entries outside of
 * Stackdriver Logging.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link configServiceV2Client}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var client = loggingV2.configServiceV2Client();
 *
 * @class
 */
function ConfigServiceV2Client(gaxGrpc, grpcClients, opts) {
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
      {'x-goog-api-client': googleApiClient});

  var configServiceV2Stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.google.logging.v2.ConfigServiceV2,
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
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName]);
  }.bind(this));
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var SINK_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/sinks/{sink}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
ConfigServiceV2Client.prototype.projectPath = function(project) {
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
ConfigServiceV2Client.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified sink resource name string.
 * @param {String} project
 * @param {String} sink
 * @returns {String}
 */
ConfigServiceV2Client.prototype.sinkPath = function(project, sink) {
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
ConfigServiceV2Client.prototype.matchProjectFromSinkName = function(sinkName) {
  return SINK_PATH_TEMPLATE.match(sinkName).project;
};

/**
 * Parses the sinkName from a sink resource.
 * @param {String} sinkName
 *   A fully-qualified path representing a sink resources.
 * @returns {String} - A string representing the sink.
 */
ConfigServiceV2Client.prototype.matchSinkFromSinkName = function(sinkName) {
  return SINK_PATH_TEMPLATE.match(sinkName).sink;
};

// Service calls

/**
 * Lists sinks.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name where this sink was created:
 *
 *       "projects/[PROJECT_ID]"
 *       "organizations/[ORGANIZATION_ID]"
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
 *   The second parameter to the callback is Array of [LogSink]{@link LogSink}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListSinksResponse]{@link ListSinksResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [LogSink]{@link LogSink}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [LogSink]{@link LogSink} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListSinksResponse]{@link ListSinksResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.configServiceV2Client();
 * var formattedParent = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listSinks({parent: formattedParent}).then(function(responses) {
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
 *         return client.listSinks(nextRequest, options).then(callback);
 *     }
 * }
 * client.listSinks({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
ConfigServiceV2Client.prototype.listSinks = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listSinks(request, options, callback);
};

/**
 * Equivalent to {@link listSinks}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listSinks} continuously
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
 * @param {string} request.parent
 *   Required. The resource name where this sink was created:
 *
 *       "projects/[PROJECT_ID]"
 *       "organizations/[ORGANIZATION_ID]"
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
 *   An object stream which emits an object representing [LogSink]{@link LogSink} on 'data' event.
 *
 * @example
 *
 * var client = loggingV2.configServiceV2Client();
 * var formattedParent = client.projectPath("[PROJECT]");
 * client.listSinksStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
ConfigServiceV2Client.prototype.listSinksStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listSinks.createStream(this._listSinks, request, options);
};

/**
 * Gets a sink.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.sinkName
 *   Required. The resource name of the sink to return:
 *
 *       "projects/[PROJECT_ID]/sinks/[SINK_ID]"
 *       "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogSink]{@link LogSink}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.configServiceV2Client();
 * var formattedSinkName = client.sinkPath("[PROJECT]", "[SINK]");
 * client.getSink({sinkName: formattedSinkName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
ConfigServiceV2Client.prototype.getSink = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getSink(request, options, callback);
};

/**
 * Creates a sink.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource in which to create the sink:
 *
 *       "projects/[PROJECT_ID]"
 *       "organizations/[ORGANIZATION_ID]"
 * @param {Object} request.sink
 *   Required. The new sink, whose `name` parameter is a sink identifier that
 *   is not already in use.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {boolean=} request.uniqueWriterIdentity
 *   Optional. Whether the sink will have a dedicated service account returned
 *   in the sink's writer_identity. Set this field to be true to export
 *   logs from one project to a different project. This field is ignored for
 *   non-project sinks (e.g. organization sinks) because those sinks are
 *   required to have dedicated service accounts.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogSink]{@link LogSink}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.configServiceV2Client();
 * var formattedParent = client.projectPath("[PROJECT]");
 * var sink = {};
 * var request = {
 *     parent: formattedParent,
 *     sink: sink
 * };
 * client.createSink(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
ConfigServiceV2Client.prototype.createSink = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createSink(request, options, callback);
};

/**
 * Updates or creates a sink.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.sinkName
 *   Required. The resource name of the sink to update, including the parent
 *   resource and the sink identifier:
 *
 *       "projects/[PROJECT_ID]/sinks/[SINK_ID]"
 *       "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
 *
 *   Example: `"projects/my-project-id/sinks/my-sink-id"`.
 * @param {Object} request.sink
 *   Required. The updated sink, whose name is the same identifier that appears
 *   as part of `sinkName`.  If `sinkName` does not exist, then
 *   this method creates a new sink.
 *
 *   This object should have the same structure as [LogSink]{@link LogSink}
 * @param {boolean=} request.uniqueWriterIdentity
 *   Optional. Whether the sink will have a dedicated service account returned
 *   in the sink's writer_identity. Set this field to be true to export
 *   logs from one project to a different project. This field is ignored for
 *   non-project sinks (e.g. organization sinks) because those sinks are
 *   required to have dedicated service accounts.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogSink]{@link LogSink}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogSink]{@link LogSink}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.configServiceV2Client();
 * var formattedSinkName = client.sinkPath("[PROJECT]", "[SINK]");
 * var sink = {};
 * var request = {
 *     sinkName: formattedSinkName,
 *     sink: sink
 * };
 * client.updateSink(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
ConfigServiceV2Client.prototype.updateSink = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateSink(request, options, callback);
};

/**
 * Deletes a sink.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.sinkName
 *   Required. The resource name of the sink to delete, including the parent
 *   resource and the sink identifier:
 *
 *       "projects/[PROJECT_ID]/sinks/[SINK_ID]"
 *       "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
 *
 *   It is an error if the sink does not exist.
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
 * var client = loggingV2.configServiceV2Client();
 * var formattedSinkName = client.sinkPath("[PROJECT]", "[SINK]");
 * client.deleteSink({sinkName: formattedSinkName}).catch(function(err) {
 *     console.error(err);
 * });
 */
ConfigServiceV2Client.prototype.deleteSink = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteSink(request, options, callback);
};

function ConfigServiceV2ClientBuilder(gaxGrpc) {
  if (!(this instanceof ConfigServiceV2ClientBuilder)) {
    return new ConfigServiceV2ClientBuilder(gaxGrpc);
  }

  var configServiceV2Client = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging_config.proto'
  }]);
  extend(this, configServiceV2Client.google.logging.v2);


  /**
   * Build a new instance of {@link ConfigServiceV2Client}.
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
  this.configServiceV2Client = function(opts) {
    return new ConfigServiceV2Client(gaxGrpc, configServiceV2Client, opts);
  };
  extend(this.configServiceV2Client, ConfigServiceV2Client);
}
module.exports = ConfigServiceV2ClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;