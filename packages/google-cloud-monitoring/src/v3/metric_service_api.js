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
 * https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto,
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

var configData = require('./metric_service_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'monitoring.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';


var PAGE_DESCRIPTORS = {
  listMonitoredResourceDescriptors: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'resourceDescriptors'),
  listMetricDescriptors: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'metricDescriptors'),
  listTimeSeries: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'timeSeries')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
];

/**
 * Manages metric descriptors, monitored resource descriptors, and
 * time series data.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link metricServiceApi}
 *
 * @example
 * var monitoringV3 = require('@google-cloud/monitoring').v3({
 *   // optional auth parameters.
 * });
 * var api = monitoringV3.metricServiceApi();
 *
 * @class
 */
function MetricServiceApi(gaxGrpc, grpcClients, opts) {
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
      'google.monitoring.v3.MetricService',
      configData,
      clientConfig,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var metricServiceStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.metricServiceClient.google.monitoring.v3.MetricService,
      {sslCreds: sslCreds});
  var metricServiceStubMethods = [
    'listMonitoredResourceDescriptors',
    'getMonitoredResourceDescriptor',
    'listMetricDescriptors',
    'getMetricDescriptor',
    'createMetricDescriptor',
    'deleteMetricDescriptor',
    'listTimeSeries',
    'createTimeSeries'
  ];
  metricServiceStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      metricServiceStub.then(function(metricServiceStub) {
        return metricServiceStub[methodName].bind(metricServiceStub);
      }),
      defaults[methodName]);
  }.bind(this));
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var METRIC_DESCRIPTOR_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/metricDescriptors/{metric_descriptor=**}');

var MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/monitoredResourceDescriptors/{monitored_resource_descriptor}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
MetricServiceApi.prototype.projectPath = function(project) {
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
MetricServiceApi.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified metric_descriptor resource name string.
 * @param {String} project
 * @param {String} metricDescriptor
 * @returns {String}
 */
MetricServiceApi.prototype.metricDescriptorPath = function(project, metricDescriptor) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.render({
    project: project,
    metric_descriptor: metricDescriptor
  });
};

/**
 * Parses the metricDescriptorName from a metric_descriptor resource.
 * @param {String} metricDescriptorName
 *   A fully-qualified path representing a metric_descriptor resources.
 * @returns {String} - A string representing the project.
 */
MetricServiceApi.prototype.matchProjectFromMetricDescriptorName = function(metricDescriptorName) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.match(metricDescriptorName).project;
};

/**
 * Parses the metricDescriptorName from a metric_descriptor resource.
 * @param {String} metricDescriptorName
 *   A fully-qualified path representing a metric_descriptor resources.
 * @returns {String} - A string representing the metric_descriptor.
 */
MetricServiceApi.prototype.matchMetricDescriptorFromMetricDescriptorName = function(metricDescriptorName) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.match(metricDescriptorName).metric_descriptor;
};

/**
 * Returns a fully-qualified monitored_resource_descriptor resource name string.
 * @param {String} project
 * @param {String} monitoredResourceDescriptor
 * @returns {String}
 */
MetricServiceApi.prototype.monitoredResourceDescriptorPath = function(project, monitoredResourceDescriptor) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.render({
    project: project,
    monitored_resource_descriptor: monitoredResourceDescriptor
  });
};

/**
 * Parses the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
 * @param {String} monitoredResourceDescriptorName
 *   A fully-qualified path representing a monitored_resource_descriptor resources.
 * @returns {String} - A string representing the project.
 */
MetricServiceApi.prototype.matchProjectFromMonitoredResourceDescriptorName = function(monitoredResourceDescriptorName) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.match(monitoredResourceDescriptorName).project;
};

/**
 * Parses the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
 * @param {String} monitoredResourceDescriptorName
 *   A fully-qualified path representing a monitored_resource_descriptor resources.
 * @returns {String} - A string representing the monitored_resource_descriptor.
 */
MetricServiceApi.prototype.matchMonitoredResourceDescriptorFromMonitoredResourceDescriptorName = function(monitoredResourceDescriptorName) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.match(monitoredResourceDescriptorName).monitored_resource_descriptor;
};

// Service calls

/**
 * Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 * @param {string=} request.filter
 *   An optional [filter](https://cloud.google.com/monitoring/api/v3/filters) describing
 *   the descriptors to be returned.  The filter can reference
 *   the descriptor's type and labels. For example, the
 *   following filter returns only Google Compute Engine descriptors
 *   that have an `id` label:
 *
 *       resource.type = starts_with("gce_") AND resource.label:id
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
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * api.listMonitoredResourceDescriptors({name: formattedName}).on('data', function(element) {
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
 *         api.listMonitoredResourceDescriptors({name: formattedName}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listMonitoredResourceDescriptors({name: formattedName}, {flattenPages: false}, callback);
 */
MetricServiceApi.prototype.listMonitoredResourceDescriptors = function(request, options, callback) {
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
 * Gets a single monitored resource descriptor. This method does not require a Stackdriver account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The monitored resource descriptor to get.  The format is
 *   `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`.
 *   The `{resource_type}` is a predefined type, such as
 *   `cloudsql_database`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.monitoredResourceDescriptorPath("[PROJECT]", "[MONITORED_RESOURCE_DESCRIPTOR]");
 * api.getMonitoredResourceDescriptor({name: formattedName}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceApi.prototype.getMonitoredResourceDescriptor = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._getMonitoredResourceDescriptor(request, options, callback);
};

/**
 * Lists metric descriptors that match a filter. This method does not require a Stackdriver account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 * @param {string=} request.filter
 *   If this field is empty, all custom and
 *   system-defined metric descriptors are returned.
 *   Otherwise, the [filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifies which metric descriptors are to be
 *   returned. For example, the following filter matches all
 *   [custom metrics](https://cloud.google.com/monitoring/custom-metrics):
 *
 *       metric.type = starts_with("custom.googleapis.com/")
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
 *   will be called with the response object representing [ListMetricDescriptorsResponse]{@link ListMetricDescriptorsResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * api.listMetricDescriptors({name: formattedName}).on('data', function(element) {
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
 *         api.listMetricDescriptors({name: formattedName}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listMetricDescriptors({name: formattedName}, {flattenPages: false}, callback);
 */
MetricServiceApi.prototype.listMetricDescriptors = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listMetricDescriptors(request, options, callback);
};

/**
 * Gets a single metric descriptor. This method does not require a Stackdriver account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The metric descriptor on which to execute the request. The format is
 *   `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
 *   An example value of `{metric_id}` is
 *   `"compute.googleapis.com/instance/disk/read_bytes_count"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
 * api.getMetricDescriptor({name: formattedName}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceApi.prototype.getMetricDescriptor = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._getMetricDescriptor(request, options, callback);
};

/**
 * Creates a new metric descriptor.
 * User-created metric descriptors define
 * [custom metrics](https://cloud.google.com/monitoring/custom-metrics).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 * @param {Object} request.metricDescriptor
 *   The new [custom metric](https://cloud.google.com/monitoring/custom-metrics)
 *   descriptor.
 *
 *   This object should have the same structure as [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * var metricDescriptor = {};
 * var request = {
 *     name: formattedName,
 *     metricDescriptor: metricDescriptor
 * };
 * api.createMetricDescriptor(request).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceApi.prototype.createMetricDescriptor = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._createMetricDescriptor(request, options, callback);
};

/**
 * Deletes a metric descriptor. Only user-created
 * [custom metrics](https://cloud.google.com/monitoring/custom-metrics) can be deleted.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The metric descriptor on which to execute the request. The format is
 *   `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
 *   An example of `{metric_id}` is:
 *   `"custom.googleapis.com/my_test_metric"`.
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
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
 * api.deleteMetricDescriptor({name: formattedName}).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceApi.prototype.deleteMetricDescriptor = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._deleteMetricDescriptor(request, options, callback);
};

/**
 * Lists time series that match a filter. This method does not require a Stackdriver account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project on which to execute the request. The format is
 *   "projects/{project_id_or_number}".
 * @param {string} request.filter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that specifies which time
 *   series should be returned.  The filter must specify a single metric type,
 *   and can additionally specify metric labels and other information. For
 *   example:
 *
 *       metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND
 *           metric.label.instance_name = "my-instance-name"
 * @param {Object} request.interval
 *   The time interval for which results should be returned. Only time series
 *   that contain data points in the specified interval are included
 *   in the response.
 *
 *   This object should have the same structure as [TimeInterval]{@link TimeInterval}
 * @param {number} request.view
 *   Specifies which information is returned about the time series.
 *
 *   The number should be among the values of [TimeSeriesView]{@link TimeSeriesView}
 * @param {Object=} request.aggregation
 *   By default, the raw time series data is returned.
 *   Use this field to combine multiple time series for different
 *   views of the data.
 *
 *   This object should have the same structure as [Aggregation]{@link Aggregation}
 * @param {string=} request.orderBy
 *   Specifies the order in which the points of the time series should
 *   be returned.  By default, results are not ordered.  Currently,
 *   this field must be left blank.
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
 *   will be called with the response object representing [ListTimeSeriesResponse]{@link ListTimeSeriesResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [TimeSeries]{@link TimeSeries} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * var filter = '';
 * var interval = {};
 * var view = TimeSeriesView.FULL;
 * var request = {
 *     name: formattedName,
 *     filter: filter,
 *     interval: interval,
 *     view: view
 * };
 * // Iterate over all elements.
 * api.listTimeSeries(request).on('data', function(element) {
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
 *         api.listTimeSeries(request, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listTimeSeries(request, {flattenPages: false}, callback);
 */
MetricServiceApi.prototype.listTimeSeries = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listTimeSeries(request, options, callback);
};

/**
 * Creates or adds data to one or more time series.
 * The response is empty if all time series in the request were written.
 * If any time series could not be written, a corresponding failure message is
 * included in the error response.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 * @param {Object[]} request.timeSeries
 *   The new data to be added to a list of time series.
 *   Adds at most one data point to each of several time series.  The new data
 *   point must be more recent than any other point in its time series.  Each
 *   `TimeSeries` value must fully specify a unique time series by supplying
 *   all label values for the metric and the monitored resource.
 *
 *   This object should have the same structure as [TimeSeries]{@link TimeSeries}
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
 * var api = monitoringV3.metricServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * var timeSeries = [];
 * var request = {
 *     name: formattedName,
 *     timeSeries: timeSeries
 * };
 * api.createTimeSeries(request).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceApi.prototype.createTimeSeries = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._createTimeSeries(request, options, callback);
};

function MetricServiceApiBuilder(gaxGrpc) {
  if (!(this instanceof MetricServiceApiBuilder)) {
    return new MetricServiceApiBuilder(gaxGrpc);
  }

  var metricServiceClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/monitoring/v3/metric_service.proto'
  }]);
  extend(this, metricServiceClient.google.monitoring.v3);

  var grpcClients = {
    metricServiceClient: metricServiceClient
  };

  /**
   * Build a new instance of {@link MetricServiceApi}.
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
  this.metricServiceApi = function(opts) {
    return new MetricServiceApi(gaxGrpc, grpcClients, opts);
  };
  extend(this.metricServiceApi, MetricServiceApi);
}
module.exports = MetricServiceApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
