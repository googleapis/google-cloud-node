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
      'resourceDescriptors'),
  listLogs: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'logNames')
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
 * @see {@link loggingServiceV2Client}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var client = loggingV2.loggingServiceV2Client();
 *
 * @class
 */
function LoggingServiceV2Client(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node,
    CODE_GEN_NAME_VERSION
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );

  var bundleDescriptors = {
    writeLogEntries: new gax.BundleDescriptor(
      'entries',
      [
        'logName',
        'resource',
        'labels'
      ],
      null,
      gax.createByteLengthFunction(grpcClients.google.logging.v2.LogEntry))
  };

  var defaults = gaxGrpc.constructSettings(
      'google.logging.v2.LoggingServiceV2',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var loggingServiceV2Stub = gaxGrpc.createStub(
      grpcClients.google.logging.v2.LoggingServiceV2,
      opts);
  var loggingServiceV2StubMethods = [
    'deleteLog',
    'writeLogEntries',
    'listLogEntries',
    'listMonitoredResourceDescriptors',
    'listLogs'
  ];
  loggingServiceV2StubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      loggingServiceV2Stub.then(function(loggingServiceV2Stub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return loggingServiceV2Stub[methodName].apply(loggingServiceV2Stub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || bundleDescriptors[methodName]);
  });
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var LOG_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/logs/{log}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
LoggingServiceV2Client.prototype.projectPath = function(project) {
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
LoggingServiceV2Client.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified log resource name string.
 * @param {String} project
 * @param {String} log
 * @returns {String}
 */
LoggingServiceV2Client.prototype.logPath = function(project, log) {
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
LoggingServiceV2Client.prototype.matchProjectFromLogName = function(logName) {
  return LOG_PATH_TEMPLATE.match(logName).project;
};

/**
 * Parses the logName from a log resource.
 * @param {String} logName
 *   A fully-qualified path representing a log resources.
 * @returns {String} - A string representing the log.
 */
LoggingServiceV2Client.prototype.matchLogFromLogName = function(logName) {
  return LOG_PATH_TEMPLATE.match(logName).log;
};

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
LoggingServiceV2Client.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Deletes all the log entries in a log.
 * The log reappears if it receives new entries.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.logName
 *   Required. The resource name of the log to delete:
 *
 *       "projects/[PROJECT_ID]/logs/[LOG_ID]"
 *       "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
 *
 *   `[LOG_ID]` must be URL-encoded. For example,
 *   `"projects/my-project-id/logs/syslog"`,
 *   `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
 *   For more information about log names, see
 *   {@link LogEntry}.
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
 * var client = loggingV2.loggingServiceV2Client();
 * var formattedLogName = client.logPath("[PROJECT]", "[LOG]");
 * client.deleteLog({logName: formattedLogName}).catch(function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Client.prototype.deleteLog = function(request, options, callback) {
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
 *   in `entries` that do not specify a value for `log_name`:
 *
 *       "projects/[PROJECT_ID]/logs/[LOG_ID]"
 *       "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
 *
 *   `[LOG_ID]` must be URL-encoded. For example,
 *   `"projects/my-project-id/logs/syslog"` or
 *   `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
 *   For more information about log names, see
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
 *   The second parameter to the callback is an object representing [WriteLogEntriesResponse]{@link WriteLogEntriesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [WriteLogEntriesResponse]{@link WriteLogEntriesResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 * var entries = [];
 * client.writeLogEntries({entries: entries}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Client.prototype.writeLogEntries = function(request, options, callback) {
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
 * Lists log entries.  Use this method to retrieve log entries from
 * Stackdriver Logging.  For ways to export log entries, see
 * [Exporting Logs](https://cloud.google.com/logging/docs/export).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string[]} request.resourceNames
 *   Required. Names of one or more resources from which to retrieve log
 *   entries:
 *
 *       "projects/[PROJECT_ID]"
 *       "organizations/[ORGANIZATION_ID]"
 *
 *   Projects listed in the `project_ids` field are added to this list.
 * @param {string[]=} request.projectIds
 *   Deprecated. Use `resource_names` instead.  One or more project identifiers
 *   or project numbers from which to retrieve log entries.  Example:
 *   `"my-project-1A"`. If present, these project identifiers are converted to
 *   resource name format and added to the list of resources in
 *   `resource_names`.
 * @param {string=} request.filter
 *   Optional. A filter that chooses which log entries to return.  See [Advanced
 *   Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).  Only log entries that
 *   match the filter are returned.  An empty filter matches all log entries in
 *   the resources listed in `resource_names`. Referencing a parent resource
 *   that is not listed in `resource_names` will cause the filter to return no
 *   results.
 *   The maximum length of the filter is 20000 characters.
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
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [LogEntry]{@link LogEntry}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListLogEntriesResponse]{@link ListLogEntriesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [LogEntry]{@link LogEntry}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [LogEntry]{@link LogEntry} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListLogEntriesResponse]{@link ListLogEntriesResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 * var resourceNames = [];
 * // Iterate over all elements.
 * client.listLogEntries({resourceNames: resourceNames}).then(function(responses) {
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
 *         return client.listLogEntries(nextRequest, options).then(callback);
 *     }
 * }
 * client.listLogEntries({resourceNames: resourceNames}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
LoggingServiceV2Client.prototype.listLogEntries = function(request, options, callback) {
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
 * Equivalent to {@link listLogEntries}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listLogEntries} continuously
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
 * @param {string[]} request.resourceNames
 *   Required. Names of one or more resources from which to retrieve log
 *   entries:
 *
 *       "projects/[PROJECT_ID]"
 *       "organizations/[ORGANIZATION_ID]"
 *
 *   Projects listed in the `project_ids` field are added to this list.
 * @param {string[]=} request.projectIds
 *   Deprecated. Use `resource_names` instead.  One or more project identifiers
 *   or project numbers from which to retrieve log entries.  Example:
 *   `"my-project-1A"`. If present, these project identifiers are converted to
 *   resource name format and added to the list of resources in
 *   `resource_names`.
 * @param {string=} request.filter
 *   Optional. A filter that chooses which log entries to return.  See [Advanced
 *   Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).  Only log entries that
 *   match the filter are returned.  An empty filter matches all log entries in
 *   the resources listed in `resource_names`. Referencing a parent resource
 *   that is not listed in `resource_names` will cause the filter to return no
 *   results.
 *   The maximum length of the filter is 20000 characters.
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
 * @return {Stream}
 *   An object stream which emits an object representing [LogEntry]{@link LogEntry} on 'data' event.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 * var resourceNames = [];
 * client.listLogEntriesStream({resourceNames: resourceNames}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Client.prototype.listLogEntriesStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listLogEntries.createStream(this._listLogEntries, request, options);
};

/**
 * Lists the descriptors for monitored resource types used by Stackdriver
 * Logging.
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
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListMonitoredResourceDescriptorsResponse]{@link ListMonitoredResourceDescriptorsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListMonitoredResourceDescriptorsResponse]{@link ListMonitoredResourceDescriptorsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 *
 * // Iterate over all elements.
 * client.listMonitoredResourceDescriptors({}).then(function(responses) {
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
 *         return client.listMonitoredResourceDescriptors(nextRequest, options).then(callback);
 *     }
 * }
 * client.listMonitoredResourceDescriptors({}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
LoggingServiceV2Client.prototype.listMonitoredResourceDescriptors = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listMonitoredResourceDescriptors(request, options, callback);
};

/**
 * Equivalent to {@link listMonitoredResourceDescriptors}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listMonitoredResourceDescriptors} continuously
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
 *   An object stream which emits an object representing [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"} on 'data' event.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 *
 * client.listMonitoredResourceDescriptorsStream({}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Client.prototype.listMonitoredResourceDescriptorsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listMonitoredResourceDescriptors.createStream(this._listMonitoredResourceDescriptors, request, options);
};

/**
 * Lists the logs in projects or organizations.
 * Only logs that have entries are listed.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The resource name that owns the logs:
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
 *   The second parameter to the callback is Array of string.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListLogsResponse]{@link ListLogsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of string.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of string in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListLogsResponse]{@link ListLogsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 * var formattedParent = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listLogs({parent: formattedParent}).then(function(responses) {
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
 *         return client.listLogs(nextRequest, options).then(callback);
 *     }
 * }
 * client.listLogs({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
LoggingServiceV2Client.prototype.listLogs = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listLogs(request, options, callback);
};

/**
 * Equivalent to {@link listLogs}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listLogs} continuously
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
 *   Required. The resource name that owns the logs:
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
 *   An object stream which emits a string on 'data' event.
 *
 * @example
 *
 * var client = loggingV2.loggingServiceV2Client();
 * var formattedParent = client.projectPath("[PROJECT]");
 * client.listLogsStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
LoggingServiceV2Client.prototype.listLogsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listLogs.createStream(this._listLogs, request, options);
};

function LoggingServiceV2ClientBuilder(gaxGrpc) {
  if (!(this instanceof LoggingServiceV2ClientBuilder)) {
    return new LoggingServiceV2ClientBuilder(gaxGrpc);
  }

  var loggingServiceV2Client = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging.proto'
  }]);
  extend(this, loggingServiceV2Client.google.logging.v2);


  /**
   * Build a new instance of {@link LoggingServiceV2Client}.
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
  this.loggingServiceV2Client = function(opts) {
    return new LoggingServiceV2Client(gaxGrpc, loggingServiceV2Client, opts);
  };
  extend(this.loggingServiceV2Client, LoggingServiceV2Client);
}
module.exports = LoggingServiceV2ClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;