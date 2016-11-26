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

var configData = require('./metrics_service_v2_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'logging.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var PAGE_DESCRIPTORS = {
  listLogMetrics: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
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
 * @see {@link metricsServiceV2Client}
 *
 * @example
 * var loggingV2 = require('@google-cloud/logging').v2({
 *   // optional auth parameters.
 * });
 * var client = loggingV2.metricsServiceV2Client();
 *
 * @class
 */
function MetricsServiceV2Client(gaxGrpc, grpcClients, opts) {
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
      'google.logging.v2.MetricsServiceV2',
      configData,
      clientConfig,
      {'x-goog-api-client': googleApiClient});

  var metricsServiceV2Stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.metricsServiceV2Client.google.logging.v2.MetricsServiceV2,
      {sslCreds: sslCreds});
  var metricsServiceV2StubMethods = [
    'listLogMetrics',
    'getLogMetric',
    'createLogMetric',
    'updateLogMetric',
    'deleteLogMetric'
  ];
  metricsServiceV2StubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      metricsServiceV2Stub.then(function(metricsServiceV2Stub) {
        return metricsServiceV2Stub[methodName].bind(metricsServiceV2Stub);
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName]);
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
MetricsServiceV2Client.prototype.parentPath = function(project) {
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
MetricsServiceV2Client.prototype.matchProjectFromParentName = function(parentName) {
  return PARENT_PATH_TEMPLATE.match(parentName).project;
};

/**
 * Returns a fully-qualified metric resource name string.
 * @param {String} project
 * @param {String} metric
 * @returns {String}
 */
MetricsServiceV2Client.prototype.metricPath = function(project, metric) {
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
MetricsServiceV2Client.prototype.matchProjectFromMetricName = function(metricName) {
  return METRIC_PATH_TEMPLATE.match(metricName).project;
};

/**
 * Parses the metricName from a metric resource.
 * @param {String} metricName
 *   A fully-qualified path representing a metric resources.
 * @returns {String} - A string representing the metric.
 */
MetricsServiceV2Client.prototype.matchMetricFromMetricName = function(metricName) {
  return METRIC_PATH_TEMPLATE.match(metricName).metric;
};

// Service calls

/**
 * Lists logs-based metrics.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the project containing the metrics:
 *
 *       "projects/[PROJECT_ID]"
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
 *   The second parameter to the callback is Array of [LogMetric]{@link LogMetric}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListLogMetricsResponse]{@link ListLogMetricsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [LogMetric]{@link LogMetric}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [LogMetric]{@link LogMetric} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListLogMetricsResponse]{@link ListLogMetricsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedParent = client.parentPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listLogMetrics({parent: formattedParent}).then(function(responses) {
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
 *         return client.listLogMetrics(nextRequest, options).then(callback);
 *     }
 * }
 * client.listLogMetrics({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
MetricsServiceV2Client.prototype.listLogMetrics = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listLogMetrics(request, options, callback);
};

/**
 * Equivalent to {@link listLogMetrics}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listLogMetrics} continuously
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
 *   Required. The name of the project containing the metrics:
 *
 *       "projects/[PROJECT_ID]"
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
 *   An object stream which emits an object representing [LogMetric]{@link LogMetric} on 'data' event.
 *
 * @example
 *
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedParent = client.parentPath("[PROJECT]");
 * client.listLogMetricsStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
MetricsServiceV2Client.prototype.listLogMetricsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listLogMetrics.createStream(this._listLogMetrics, request, options);
};

/**
 * Gets a logs-based metric.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.metricName
 *   The resource name of the desired metric:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogMetric]{@link LogMetric}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedMetricName = client.metricPath("[PROJECT]", "[METRIC]");
 * client.getLogMetric({metricName: formattedMetricName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricsServiceV2Client.prototype.getLogMetric = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getLogMetric(request, options, callback);
};

/**
 * Creates a logs-based metric.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The resource name of the project in which to create the metric:
 *
 *       "projects/[PROJECT_ID]"
 *
 *   The new metric must be provided in the request.
 * @param {Object} request.metric
 *   The new logs-based metric, which must not have an identifier that
 *   already exists.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogMetric]{@link LogMetric}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedParent = client.parentPath("[PROJECT]");
 * var metric = {};
 * var request = {
 *     parent: formattedParent,
 *     metric: metric
 * };
 * client.createLogMetric(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricsServiceV2Client.prototype.createLogMetric = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createLogMetric(request, options, callback);
};

/**
 * Creates or updates a logs-based metric.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.metricName
 *   The resource name of the metric to update:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
 *
 *   The updated metric must be provided in the request and it's
 *   `name` field must be the same as `[METRIC_ID]` If the metric
 *   does not exist in `[PROJECT_ID]`, then a new metric is created.
 * @param {Object} request.metric
 *   The updated metric.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LogMetric]{@link LogMetric}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LogMetric]{@link LogMetric}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedMetricName = client.metricPath("[PROJECT]", "[METRIC]");
 * var metric = {};
 * var request = {
 *     metricName: formattedMetricName,
 *     metric: metric
 * };
 * client.updateLogMetric(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricsServiceV2Client.prototype.updateLogMetric = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateLogMetric(request, options, callback);
};

/**
 * Deletes a logs-based metric.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.metricName
 *   The resource name of the metric to delete:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
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
 * var client = loggingV2.metricsServiceV2Client();
 * var formattedMetricName = client.metricPath("[PROJECT]", "[METRIC]");
 * client.deleteLogMetric({metricName: formattedMetricName}).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricsServiceV2Client.prototype.deleteLogMetric = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteLogMetric(request, options, callback);
};

function MetricsServiceV2ClientBuilder(gaxGrpc) {
  if (!(this instanceof MetricsServiceV2ClientBuilder)) {
    return new MetricsServiceV2ClientBuilder(gaxGrpc);
  }

  var metricsServiceV2Client = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/logging/v2/logging_metrics.proto'
  }]);
  extend(this, metricsServiceV2Client.google.logging.v2);

  var grpcClients = {
    metricsServiceV2Client: metricsServiceV2Client
  };

  /**
   * Build a new instance of {@link MetricsServiceV2Client}.
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
  this.metricsServiceV2Client = function(opts) {
    return new MetricsServiceV2Client(gaxGrpc, grpcClients, opts);
  };
  extend(this.metricsServiceV2Client, MetricsServiceV2Client);
}
module.exports = MetricsServiceV2ClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;