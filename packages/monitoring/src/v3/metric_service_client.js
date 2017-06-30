/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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

var CODE_GEN_NAME_VERSION = 'gapic/0.3.0';

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
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/monitoring',
  'https://www.googleapis.com/auth/monitoring.read',
  'https://www.googleapis.com/auth/monitoring.write'
];

/**
 * Manages metric descriptors, monitored resource descriptors, and
 * time series data.
 *
 *
 * @class
 */
function MetricServiceClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );

  var defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.MetricService',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var metricServiceStub = gaxGrpc.createStub(
      grpcClients.google.monitoring.v3.MetricService,
      opts);
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
    self['_' + methodName] = gax.createApiCall(
      metricServiceStub.then(function(metricServiceStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return metricServiceStub[methodName].apply(metricServiceStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName]);
  });
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
MetricServiceClient.prototype.projectPath = function(project) {
  return PROJECT_PATH_TEMPLATE.render({
    project: project
  });
};

/**
 * Returns a fully-qualified metric_descriptor resource name string.
 * @param {String} project
 * @param {String} metricDescriptor
 * @returns {String}
 */
MetricServiceClient.prototype.metricDescriptorPath = function(project, metricDescriptor) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.render({
    project: project,
    metric_descriptor: metricDescriptor
  });
};

/**
 * Returns a fully-qualified monitored_resource_descriptor resource name string.
 * @param {String} project
 * @param {String} monitoredResourceDescriptor
 * @returns {String}
 */
MetricServiceClient.prototype.monitoredResourceDescriptorPath = function(project, monitoredResourceDescriptor) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.render({
    project: project,
    monitored_resource_descriptor: monitoredResourceDescriptor
  });
};

/**
 * Parses the projectName from a project resource.
 * @param {String} projectName
 *   A fully-qualified path representing a project resources.
 * @returns {String} - A string representing the project.
 */
MetricServiceClient.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Parses the metricDescriptorName from a metric_descriptor resource.
 * @param {String} metricDescriptorName
 *   A fully-qualified path representing a metric_descriptor resources.
 * @returns {String} - A string representing the project.
 */
MetricServiceClient.prototype.matchProjectFromMetricDescriptorName = function(metricDescriptorName) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.match(metricDescriptorName).project;
};

/**
 * Parses the metricDescriptorName from a metric_descriptor resource.
 * @param {String} metricDescriptorName
 *   A fully-qualified path representing a metric_descriptor resources.
 * @returns {String} - A string representing the metric_descriptor.
 */
MetricServiceClient.prototype.matchMetricDescriptorFromMetricDescriptorName = function(metricDescriptorName) {
  return METRIC_DESCRIPTOR_PATH_TEMPLATE.match(metricDescriptorName).metric_descriptor;
};

/**
 * Parses the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
 * @param {String} monitoredResourceDescriptorName
 *   A fully-qualified path representing a monitored_resource_descriptor resources.
 * @returns {String} - A string representing the project.
 */
MetricServiceClient.prototype.matchProjectFromMonitoredResourceDescriptorName = function(monitoredResourceDescriptorName) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.match(monitoredResourceDescriptorName).project;
};

/**
 * Parses the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
 * @param {String} monitoredResourceDescriptorName
 *   A fully-qualified path representing a monitored_resource_descriptor resources.
 * @returns {String} - A string representing the monitored_resource_descriptor.
 */
MetricServiceClient.prototype.matchMonitoredResourceDescriptorFromMonitoredResourceDescriptorName = function(monitoredResourceDescriptorName) {
  return MONITORED_RESOURCE_DESCRIPTOR_PATH_TEMPLATE.match(monitoredResourceDescriptorName).monitored_resource_descriptor;
};

/**
 * Get the project ID used by this class.
 * @param {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
MetricServiceClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
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
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * // Iterate over all elements.
 * var formattedName = client.projectPath("[PROJECT]");
 *
 * client.listMonitoredResourceDescriptors({name: formattedName}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var formattedName = client.projectPath("[PROJECT]");
 *
 *
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
 * client.listMonitoredResourceDescriptors({name: formattedName}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
MetricServiceClient.prototype.listMonitoredResourceDescriptors = function(request, options, callback) {
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
 * @return {Stream}
 *   An object stream which emits an object representing [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"} on 'data' event.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.projectPath("[PROJECT]");
 * client.listMonitoredResourceDescriptorsStream({name: formattedName})
 * .on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.log(err);
 * });
 */
MetricServiceClient.prototype.listMonitoredResourceDescriptorsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listMonitoredResourceDescriptors.createStream(this._listMonitoredResourceDescriptors, request, options);
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
 *   The second parameter to the callback is an object representing [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [google.api.MonitoredResourceDescriptor]{@link external:"google.api.MonitoredResourceDescriptor"}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.monitoredResourceDescriptorPath("[PROJECT]", "[MONITORED_RESOURCE_DESCRIPTOR]");
 * client.getMonitoredResourceDescriptor({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceClient.prototype.getMonitoredResourceDescriptor = function(request, options, callback) {
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
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListMetricDescriptorsResponse]{@link ListMetricDescriptorsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListMetricDescriptorsResponse]{@link ListMetricDescriptorsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * // Iterate over all elements.
 * var formattedName = client.projectPath("[PROJECT]");
 *
 * client.listMetricDescriptors({name: formattedName}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var formattedName = client.projectPath("[PROJECT]");
 *
 *
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
 *         return client.listMetricDescriptors(nextRequest, options).then(callback);
 *     }
 * }
 * client.listMetricDescriptors({name: formattedName}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
MetricServiceClient.prototype.listMetricDescriptors = function(request, options, callback) {
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
 * Equivalent to {@link listMetricDescriptors}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listMetricDescriptors} continuously
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
 * @return {Stream}
 *   An object stream which emits an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"} on 'data' event.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.projectPath("[PROJECT]");
 * client.listMetricDescriptorsStream({name: formattedName})
 * .on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.log(err);
 * });
 */
MetricServiceClient.prototype.listMetricDescriptorsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listMetricDescriptors.createStream(this._listMetricDescriptors, request, options);
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
 *   The second parameter to the callback is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
 * client.getMetricDescriptor({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceClient.prototype.getMetricDescriptor = function(request, options, callback) {
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
 *   The second parameter to the callback is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [google.api.MetricDescriptor]{@link external:"google.api.MetricDescriptor"}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.projectPath("[PROJECT]");
 * var metricDescriptor = {};
 * var request = {
 *     name: formattedName,
 *     metricDescriptor: metricDescriptor
 * };
 * client.createMetricDescriptor(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceClient.prototype.createMetricDescriptor = function(request, options, callback) {
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
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.metricDescriptorPath("[PROJECT]", "[METRIC_DESCRIPTOR]");
 * client.deleteMetricDescriptor({name: formattedName}).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceClient.prototype.deleteMetricDescriptor = function(request, options, callback) {
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
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [TimeSeries]{@link TimeSeries}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListTimeSeriesResponse]{@link ListTimeSeriesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [TimeSeries]{@link TimeSeries}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [TimeSeries]{@link TimeSeries} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListTimeSeriesResponse]{@link ListTimeSeriesResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * // Iterate over all elements.
 * var formattedName = client.projectPath("[PROJECT]");
 * var filter = '';
 * var interval = {};
 * var view = monitoring.v3.types.ListTimeSeriesRequest.TimeSeriesView.FULL;
 * var request = {
 *     name: formattedName,
 *     filter: filter,
 *     interval: interval,
 *     view: view
 * };
 *
 * client.listTimeSeries(request).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var formattedName = client.projectPath("[PROJECT]");
 * var filter = '';
 * var interval = {};
 * var view = monitoring.v3.types.ListTimeSeriesRequest.TimeSeriesView.FULL;
 * var request = {
 *     name: formattedName,
 *     filter: filter,
 *     interval: interval,
 *     view: view
 * };
 *
 *
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
 *         return client.listTimeSeries(nextRequest, options).then(callback);
 *     }
 * }
 * client.listTimeSeries(request, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
MetricServiceClient.prototype.listTimeSeries = function(request, options, callback) {
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
 * Equivalent to {@link listTimeSeries}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listTimeSeries} continuously
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
 * @return {Stream}
 *   An object stream which emits an object representing [TimeSeries]{@link TimeSeries} on 'data' event.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.projectPath("[PROJECT]");
 * var filter = '';
 * var interval = {};
 * var view = monitoring.v3.types.ListTimeSeriesRequest.TimeSeriesView.FULL;
 * var request = {
 *     name: formattedName,
 *     filter: filter,
 *     interval: interval,
 *     view: view
 * };
 * client.listTimeSeriesStream(request)
 * .on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.log(err);
 * });
 */
MetricServiceClient.prototype.listTimeSeriesStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listTimeSeries.createStream(this._listTimeSeries, request, options);
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
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var monitoring = require('@google-cloud/monitoring');
 *
 * var client = monitoring.v3.metric({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.projectPath("[PROJECT]");
 * var timeSeries = [];
 * var request = {
 *     name: formattedName,
 *     timeSeries: timeSeries
 * };
 * client.createTimeSeries(request).catch(function(err) {
 *     console.error(err);
 * });
 */
MetricServiceClient.prototype.createTimeSeries = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createTimeSeries(request, options, callback);
};

function MetricServiceClientBuilder(gaxGrpc) {
  if (!(this instanceof MetricServiceClientBuilder)) {
    return new MetricServiceClientBuilder(gaxGrpc);
  }

  var metricServiceClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/monitoring/v3/metric_service.proto'
  }]);
  extend(this, metricServiceClient.google.monitoring.v3);


  /**
   * Build a new instance of {@link MetricServiceClient}.
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
  this.metricServiceClient = function(opts) {
    return new MetricServiceClient(gaxGrpc, metricServiceClient, opts);
  };
  extend(this.metricServiceClient, MetricServiceClient);
}
module.exports = MetricServiceClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;