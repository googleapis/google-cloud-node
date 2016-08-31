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

var arguejs = require('arguejs');
var configData = require('./logging_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

var PAGE_DESCRIPTORS = {
  listLogEntries: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'entries'),
  listMonitoredResourceDescriptors: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'resource_descriptors')
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
function LoggingServiceV2Api(gaxGrpc, grpcClient, opts) {
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
      'google.logging.v2.LoggingServiceV2',
      configData,
      clientConfig,
      timeout,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.logging.v2.LoggingServiceV2,
      {sslCreds: sslCreds});
  var methods = [
    'deleteLog',
    'writeLogEntries',
    'listLogEntries',
    'listMonitoredResourceDescriptors'
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

var LOG_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/logs/{log}');

/**
 * Returns a fully-qualified parent resource name string.
 * @param {String} project
 * @returns {String}
 */
LoggingServiceV2Api.prototype.parentPath = function parentPath(project) {
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
LoggingServiceV2Api.prototype.matchProjectFromParentName =
    function matchProjectFromParentName(parentName) {
  return PARENT_PATH_TEMPLATE.match(parentName).project;
};

/**
 * Returns a fully-qualified log resource name string.
 * @param {String} project
 * @param {String} log
 * @returns {String}
 */
LoggingServiceV2Api.prototype.logPath = function logPath(project, log) {
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
LoggingServiceV2Api.prototype.matchProjectFromLogName =
    function matchProjectFromLogName(logName) {
  return LOG_PATH_TEMPLATE.match(logName).project;
};

/**
 * Parses the logName from a log resource.
 * @param {String} logName
 *   A fully-qualified path representing a log resources.
 * @returns {String} - A string representing the log.
 */
LoggingServiceV2Api.prototype.matchLogFromLogName =
    function matchLogFromLogName(logName) {
  return LOG_PATH_TEMPLATE.match(logName).log;
};

// Service calls

/**
 * Deletes a log and all its log entries.
 * The log will reappear if it receives new entries.
 *
 * @param {string} logName
 *   Required. The resource name of the log to delete.  Example:
 *   `"projects/my-project/logs/syslog"`.
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
 * var api = loggingV2.loggingServiceV2Api();
 * var formattedLogName = api.logPath("[PROJECT]", "[LOG]");
 * api.deleteLog(formattedLogName, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
LoggingServiceV2Api.prototype.deleteLog = function deleteLog() {
  var args = arguejs({
    logName: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    log_name: args.logName
  };
  return this._deleteLog(req, args.options, args.callback);
};

/**
 * Writes log entries to Stackdriver Logging.  All log entries are
 * written by this method.
 *
 * @param {Object[]} entries
 *   Required. The log entries to write. The log entries must have values for
 *   all required fields.
 *
 *   To improve throughput and to avoid exceeding the quota limit for calls
 *   to `entries.write`, use this field to write multiple log entries at once
 *   rather than  // calling this method for each log entry.
 *
 *   This object should have the same structure as [LogEntry]{@link LogEntry}
 * @param {Object=} otherArgs
 * @param {string=} otherArgs.logName
 *   Optional. A default log resource name for those log entries in `entries`
 *   that do not specify their own `logName`.  Example:
 *   `"projects/my-project/logs/syslog"`.  See
 *   {@link LogEntry}.
 * @param {Object=} otherArgs.resource
 *   Optional. A default monitored resource for those log entries in `entries`
 *   that do not specify their own `resource`.
 *
 *   This object should have the same structure as [google.api.MonitoredResource]{@link external:"google.api.MonitoredResource"}
 * @param {Object.<string, string>=} otherArgs.labels
 *   Optional. User-defined `key:value` items that are added to
 *   the `labels` field of each log entry in `entries`, except when a log
 *   entry specifies its own `key:value` item with the same key.
 *   Example: `{ "size": "large", "color":"red" }`
 * @param {boolean=} otherArgs.partialSuccess
 *   Optional. Whether valid entries should be written even if some other
 *   entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
 *   entry is not written, the response status will be the error associated
 *   with one of the failed entries and include error details in the form of
 *   WriteLogEntriesPartialErrors.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [WriteLogEntriesResponse]{@link WriteLogEntriesResponse}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 * var entries = [];
 * api.writeLogEntries(entries, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
LoggingServiceV2Api.prototype.writeLogEntries = function writeLogEntries() {
  var args = arguejs({
    entries: Array,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    entries: args.entries
  };
  if ('logName' in args.otherArgs) {
    req.log_name = args.otherArgs.logName;
  }
  if ('resource' in args.otherArgs) {
    req.resource = args.otherArgs.resource;
  }
  if ('labels' in args.otherArgs) {
    req.labels = args.otherArgs.labels;
  }
  if ('partialSuccess' in args.otherArgs) {
    req.partial_success = args.otherArgs.partialSuccess;
  }
  return this._writeLogEntries(req, args.options, args.callback);
};

/**
 * Lists log entries.  Use this method to retrieve log entries from Cloud
 * Logging.  For ways to export log entries, see
 * [Exporting Logs](https://cloud.google.com/logging/docs/export).
 *
 * @param {string[]} projectIds
 *   Required. One or more project IDs or project numbers from which to retrieve
 *   log entries.  Examples of a project ID: `"my-project-1A"`, `"1234567890"`.
 * @param {Object=} otherArgs
 * @param {string=} otherArgs.filter
 *   Optional. An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced_filters).
 *   The filter is compared against all log entries in the projects specified by
 *   `projectIds`.  Only entries that match the filter are retrieved.  An empty
 *   filter matches all log entries.
 * @param {string=} otherArgs.orderBy
 *   Optional. How the results should be sorted.  Presently, the only permitted
 *   values are `"timestamp asc"` (default) and `"timestamp desc"`. The first
 *   option returns entries in order of increasing values of
 *   `LogEntry.timestamp` (oldest first), and the second option returns entries
 *   in order of decreasing timestamps (newest first).  Entries with equal
 *   timestamps are returned in order of `LogEntry.insertId`.
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
 *   [LogEntry]{@link LogEntry} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 * var projectIds = [];
 * api.listLogEntries(projectIds).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
LoggingServiceV2Api.prototype.listLogEntries = function listLogEntries() {
  var args = arguejs({
    projectIds: Array,
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    project_ids: args.projectIds
  };
  if ('filter' in args.otherArgs) {
    req.filter = args.otherArgs.filter;
  }
  if ('orderBy' in args.otherArgs) {
    req.order_by = args.otherArgs.orderBy;
  }
  if ('pageSize' in args.otherArgs) {
    req.page_size = args.otherArgs.pageSize;
  }
  return this._listLogEntries(req, args.options, args.callback);
};

/**
 * Lists the monitored resource descriptors used by Stackdriver Logging.
 *
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
 *   [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = loggingV2.loggingServiceV2Api();
 *
 * api.listMonitoredResourceDescriptors().on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
LoggingServiceV2Api.prototype.listMonitoredResourceDescriptors = function listMonitoredResourceDescriptors() {
  var args = arguejs({
    otherArgs: [Object, {}],
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
  };
  if ('pageSize' in args.otherArgs) {
    req.page_size = args.otherArgs.pageSize;
  }
  return this._listMonitoredResourceDescriptors(req, args.options, args.callback);
};

function LoggingServiceV2ApiBuilder(gaxGrpc) {
  if (!(this instanceof LoggingServiceV2ApiBuilder)) {
    return new LoggingServiceV2ApiBuilder(gaxGrpc);
  }

  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging.proto'
  }]);
  extend(this, grpcClient.google.logging.v2);

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
   * @param {number=} opts.timeout
   *   The default timeout, in seconds, for calls made through this client.
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.loggingServiceV2Api = function(opts) {
    return new LoggingServiceV2Api(gaxGrpc, grpcClient, opts);
  };
  extend(this.loggingServiceV2Api, LoggingServiceV2Api);
}
module.exports = LoggingServiceV2ApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;