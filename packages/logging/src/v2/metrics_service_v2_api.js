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
 * https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto,
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
var configData = require('./metrics_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

var PAGE_DESCRIPTORS = {
  listLogMetrics: new gax.PageDescriptor(
      'page_token',
      'next_page_token',
      'metrics')
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
 * Service for configuring logs-based metrics.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link metricsServiceV2Api}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var api = loggingV2.metricsServiceV2Api();
 *
 * @class
 */
function MetricsServiceV2Api(gaxGrpc, grpcClient, opts) {
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
      'google.logging.v2.MetricsServiceV2',
      configData,
      clientConfig,
      timeout,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.logging.v2.MetricsServiceV2,
      {sslCreds: sslCreds});
  var methods = [
    'listLogMetrics',
    'getLogMetric',
    'createLogMetric',
    'updateLogMetric',
    'deleteLogMetric'
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

var METRIC_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/metrics/{metric}');

/**
 * Returns a fully-qualified parent resource name string.
 * @param {String} project
 * @returns {String}
 */
MetricsServiceV2Api.prototype.parentPath = function parentPath(project) {
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
MetricsServiceV2Api.prototype.matchProjectFromParentName =
    function matchProjectFromParentName(parentName) {
  return PARENT_PATH_TEMPLATE.match(parentName).project;
};

/**
 * Returns a fully-qualified metric resource name string.
 * @param {String} project
 * @param {String} metric
 * @returns {String}
 */
MetricsServiceV2Api.prototype.metricPath = function metricPath(project, metric) {
  return METRIC_PATH_TEMPLATE.render({
    project: project,
    metric: metric
  });
};

/**
 * Parses the metricName from a metric resource.
 * @param {String} metricName
 *   A fully-qualified path representing a metric resources.
 * @returns {String} - A string representing the project.
 */
MetricsServiceV2Api.prototype.matchProjectFromMetricName =
    function matchProjectFromMetricName(metricName) {
  return METRIC_PATH_TEMPLATE.match(metricName).project;
};

/**
 * Parses the metricName from a metric resource.
 * @param {String} metricName
 *   A fully-qualified path representing a metric resources.
 * @returns {String} - A string representing the metric.
 */
MetricsServiceV2Api.prototype.matchMetricFromMetricName =
    function matchMetricFromMetricName(metricName) {
  return METRIC_PATH_TEMPLATE.match(metricName).metric;
};

// Service calls

/**
 * Lists logs-based metrics.
 *
 * @param {string} parent
 *   Required. The resource name containing the metrics.
 *   Example: `"projects/my-project-id"`.
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
 *   [LogMetric]{@link LogMetric} on 'data' event.
 *   This object can also be configured to emit
 *   pages of the responses through the options parameter.
 *
 * @example
 *
 * var api = loggingV2.metricsServiceV2Api();
 * var formattedParent = api.parentPath("[PROJECT]");
 * api.listLogMetrics(formattedParent).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 */
MetricsServiceV2Api.prototype.listLogMetrics = function listLogMetrics() {
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
  return this._listLogMetrics(req, args.options, args.callback);
};

/**
 * Gets a logs-based metric.
 *
 * @param {string} metricName
 *   The resource name of the desired metric.
 *   Example: `"projects/my-project-id/metrics/my-metric-id"`.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.metricsServiceV2Api();
 * var formattedMetricName = api.metricPath("[PROJECT]", "[METRIC]");
 * api.getLogMetric(formattedMetricName, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
MetricsServiceV2Api.prototype.getLogMetric = function getLogMetric() {
  var args = arguejs({
    metricName: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    metric_name: args.metricName
  };
  return this._getLogMetric(req, args.options, args.callback);
};

/**
 * Creates a logs-based metric.
 *
 * @param {string} parent
 *   The resource name of the project in which to create the metric.
 *   Example: `"projects/my-project-id"`.
 *
 *   The new metric must be provided in the request.
 * @param {Object} metric
 *   The new logs-based metric, which must not have an identifier that
 *   already exists.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.metricsServiceV2Api();
 * var formattedParent = api.parentPath("[PROJECT]");
 * var metric = {};
 * api.createLogMetric(formattedParent, metric, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
MetricsServiceV2Api.prototype.createLogMetric = function createLogMetric() {
  var args = arguejs({
    parent: String,
    metric: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    parent: args.parent,
    metric: args.metric
  };
  return this._createLogMetric(req, args.options, args.callback);
};

/**
 * Creates or updates a logs-based metric.
 *
 * @param {string} metricName
 *   The resource name of the metric to update.
 *   Example: `"projects/my-project-id/metrics/my-metric-id"`.
 *
 *   The updated metric must be provided in the request and have the
 *   same identifier that is specified in `metricName`.
 *   If the metric does not exist, it is created.
 * @param {Object} metric
 *   The updated metric, whose name must be the same as the
 *   metric identifier in `metricName`. If `metricName` does not
 *   exist, then a new metric is created.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = loggingV2.metricsServiceV2Api();
 * var formattedMetricName = api.metricPath("[PROJECT]", "[METRIC]");
 * var metric = {};
 * api.updateLogMetric(formattedMetricName, metric, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
MetricsServiceV2Api.prototype.updateLogMetric = function updateLogMetric() {
  var args = arguejs({
    metricName: String,
    metric: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    metric_name: args.metricName,
    metric: args.metric
  };
  return this._updateLogMetric(req, args.options, args.callback);
};

/**
 * Deletes a logs-based metric.
 *
 * @param {string} metricName
 *   The resource name of the metric to delete.
 *   Example: `"projects/my-project-id/metrics/my-metric-id"`.
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
 * var api = loggingV2.metricsServiceV2Api();
 * var formattedMetricName = api.metricPath("[PROJECT]", "[METRIC]");
 * api.deleteLogMetric(formattedMetricName, function(err) {
 *     if (err) {
 *         console.error(err);
 *     }
 * });
 */
MetricsServiceV2Api.prototype.deleteLogMetric = function deleteLogMetric() {
  var args = arguejs({
    metricName: String,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    metric_name: args.metricName
  };
  return this._deleteLogMetric(req, args.options, args.callback);
};

function MetricsServiceV2ApiBuilder(gaxGrpc) {
  if (!(this instanceof MetricsServiceV2ApiBuilder)) {
    return new MetricsServiceV2ApiBuilder(gaxGrpc);
  }

  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging_metrics.proto'
  }]);
  extend(this, grpcClient.google.logging.v2);

  /**
   * Build a new instance of {@link MetricsServiceV2Api}.
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
  this.metricsServiceV2Api = function(opts) {
    return new MetricsServiceV2Api(gaxGrpc, grpcClient, opts);
  };
  extend(this.metricsServiceV2Api, MetricsServiceV2Api);
}
module.exports = MetricsServiceV2ApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;