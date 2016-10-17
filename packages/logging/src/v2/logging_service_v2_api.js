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
 * https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging.proto,
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

var configData = require('./logging_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';


var PAGE_DESCRIPTORS = {
  listLogEntries: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'entries'),
  listMonitoredResourceDescriptors: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'resourceDescriptors')
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
 * Service for ingesting and querying logs.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link loggingServiceV2Api}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var api = loggingV2.loggingServiceV2Api();
 *
 * @class
 */
function LoggingServiceV2Api(gaxGrpc, grpcClients, opts) {
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
      'google.logging.v2.LoggingServiceV2',
      configData,
      clientConfig,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var loggingServiceV2Stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.loggingServiceV2Client.google.logging.v2.LoggingServiceV2,
      {sslCreds: sslCreds});
  var loggingServiceV2StubMethods = [
    'deleteLog',
    'writeLogEntries',
    'listLogEntries',
    'listMonitoredResourceDescriptors'
  ];
  loggingServiceV2StubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      loggingServiceV2Stub.then(function(loggingServiceV2Stub) {
        return loggingServiceV2Stub[methodName].bind(loggingServiceV2Stub);
      }),
      defaults[methodName]);
  }.bind(this));
}

// Path templates

var PARENT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var LOG_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/logs/{log}');

/**
 * Returns a fully-qualified parent resource name string.
 * @param {String} project
 * @returns {String}
 */
LoggingServiceV2Api.prototype.parentPath = function(project) {
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
LoggingServiceV2Api.prototype.matchProjectFromParentName = function(parentName) {
  return PARENT_PATH_TEMPLATE.match(parentName).project;
};

/**
 * Returns a fully-qualified log resource name string.
 * @param {String} project
 * @param {String} log
 * @returns {String}
 */
LoggingServiceV2Api.prototype.logPath = function(project, log) {
  return LOG_PATH_TEMPLATE.render({
    project: project,
    log: log
  });
};

/**
 * Parses the logName from a log resource.
 * @param {String} logName
 *   A fully-qualified path representing a log resources.
 * @returns {String} - A string representing the project.
 */
LoggingServiceV2Api.prototype.matchProjectFromLogName = function(logName) {
  return LOG_PATH_TEMPLATE.match(logName).project;
};

/**
 * Parses the logName from a log resource.
 * @param {String} logName
 *   A fully-qualified path representing a log resources.
 * @returns {String} - A string representing the log.
 */
LoggingServiceV2Api.prototype.matchLogFromLogName = function(logName) {
  return LOG_PATH_TEMPLATE.match(logName).log;
};

// Service calls

/**
 * Deletes a log and all its log entries.
 * The log will reappear if it receives new entries.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.logName
 *   Required. The resource name of the log to delete.  Example:
 *   `"projects/my-project/logs/syslog"`.
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
 * var api = loggingV2.loggingServiceV2Api();
 * var formattedLogName = api.logPath("[PROJECT]", "[LOG]");
 * api.deleteLog({logName: formattedLogName}).catch(function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Api.prototype.deleteLog = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._deleteLog(request, options, callback);
};

/**
 * Writes log entries to Stackdriver Logging.  All log entries are
 * written by this method.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object[]} request.entries
 *   Required. The log entries to write. Values supplied for the fields
 *   `log_name`, `resource`, and `labels` in this `entries.write` request are
 *   added to those log entries that do not provide their own values for the
 *   fields.
 *
 *   To improve throughput and to avoid exceeding the
 *   [quota limit](https://cloud.google.com/logging/quota-policy) for calls to `entries.write`,
 *   you should write multiple log entries at once rather than
 *   calling this method for each individual log entry.
 *
 *   This object should have the same structure as [LogEntry]{@link LogEntry}
 * @param {string=} request.logName
 *   Optional. A default log resource name that is assigned to all log entries
 *   in `entries` that do not specify a value for `log_name`.  Example:
 *   `"projects/my-project/logs/syslog"`.  See
 *   {@link LogEntry}.
 * @param {Object=} request.resource
 *   Optional. A default monitored resource object that is assigned to all log
 *   entries in `entries` that do not specify a value for `resource`. Example:
 *
 *       { "type": "gce_instance",
 *         "labels": {
 *           "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
 *
 *   See {@link LogEntry}.
 *
 *   This object should have the same structure as [google.api.MonitoredResource]{@link external:"google.api.MonitoredResource"}
 * @param {Object.<string, string>=} request.labels
 *   Optional. Default labels that are added to the `labels` field of all log
 *   entries in `entries`. If a log entry already has a label with the same key
 *   as a label in this parameter, then the log entry's label is not changed.
 *   See {@link LogEntry}.
 * @param {boolean=} request.partialSuccess
 *   Optional. Whether valid entries should be written even if some other
 *   entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
 *   entry is not written, the response status will be the error associated
 *   with one of the failed entries and include error details in the form of
 *   WriteLogEntriesPartialErrors.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [WriteLogEntriesResponse]{@link WriteLogEntriesResponse}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 * var entries = [];
 * api.writeLogEntries({entries: entries}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Api.prototype.writeLogEntries = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._writeLogEntries(request, options, callback);
};

/**
 * Lists log entries.  Use this method to retrieve log entries from Cloud
 * Logging.  For ways to export log entries, see
 * [Exporting Logs](https://cloud.google.com/logging/docs/export).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string[]} request.projectIds
 *   Deprecated. One or more project identifiers or project numbers from which
 *   to retrieve log entries.  Examples: `"my-project-1A"`, `"1234567890"`. If
 *   present, these project identifiers are converted to resource format and
 *   added to the list of resources in `resourceNames`. Callers should use
 *   `resourceNames` rather than this parameter.
 * @param {string[]=} request.resourceNames
 *   Optional. One or more cloud resources from which to retrieve log entries.
 *   Example: `"projects/my-project-1A"`, `"projects/1234567890"`.  Projects
 *   listed in `projectIds` are added to this list.
 * @param {string=} request.filter
 *   Optional. A filter that chooses which log entries to return.  See [Advanced
 *   Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).  Only log entries that
 *   match the filter are returned.  An empty filter matches all log entries.
 * @param {string=} request.orderBy
 *   Optional. How the results should be sorted.  Presently, the only permitted
 *   values are `"timestamp asc"` (default) and `"timestamp desc"`. The first
 *   option returns entries in order of increasing values of
 *   `LogEntry.timestamp` (oldest first), and the second option returns entries
 *   in order of decreasing timestamps (newest first).  Entries with equal
 *   timestamps are returned in order of `LogEntry.insertId`.
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
 *   will be called with the response object representing [ListLogEntriesResponse]{@link ListLogEntriesResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [LogEntry]{@link LogEntry} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 * var projectIds = [];
 * // Iterate over all elements.
 * api.listLogEntries({projectIds: projectIds}).on('data', function(element) {
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
 *         api.listLogEntries({projectIds: projectIds}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listLogEntries({projectIds: projectIds}, {flattenPages: false}, callback);
 */
LoggingServiceV2Api.prototype.listLogEntries = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listLogEntries(request, options, callback);
};

/**
 * Lists the monitored resource descriptors used by Stackdriver Logging.
 *
 * @param {Object} request
 *   The request object that will be sent.
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
 *   will be called with the response object representing [ListMonitoredResourceDescriptorsResponse]{@link ListMonitoredResourceDescriptorsResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 *
 * // Iterate over all elements.
 * api.listMonitoredResourceDescriptors({}).on('data', function(element) {
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
 *         api.listMonitoredResourceDescriptors({}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listMonitoredResourceDescriptors({}, {flattenPages: false}, callback);
 */
LoggingServiceV2Api.prototype.listMonitoredResourceDescriptors = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listMonitoredResourceDescriptors(request, options, callback);
};

function LoggingServiceV2ApiBuilder(gaxGrpc) {
  if (!(this instanceof LoggingServiceV2ApiBuilder)) {
    return new LoggingServiceV2ApiBuilder(gaxGrpc);
  }

  var loggingServiceV2Client = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging.proto'
  }]);
  extend(this, loggingServiceV2Client.google.logging.v2);

  var grpcClients = {
    loggingServiceV2Client: loggingServiceV2Client
  };

  /**
   * Build a new instance of {@link LoggingServiceV2Api}.
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
  this.loggingServiceV2Api = function(opts) {
    return new LoggingServiceV2Api(gaxGrpc, grpcClients, opts);
  };
  extend(this.loggingServiceV2Api, LoggingServiceV2Api);
}
module.exports = LoggingServiceV2ApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;