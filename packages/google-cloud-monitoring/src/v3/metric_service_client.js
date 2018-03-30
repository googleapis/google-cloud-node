// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const gapicConfig = require('./metric_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Manages metric descriptors, monitored resource descriptors, and
 * time series data.
 *
 * @class
 * @memberof v3
 */
class MetricServiceClient {
  /**
   * Construct an instance of MetricServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    var gaxGrpc = gax.grpc(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version.node}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    var protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/monitoring/v3/metric_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      metricDescriptorPathTemplate: new gax.PathTemplate(
        'projects/{project}/metricDescriptors/{metric_descriptor=**}'
      ),
      monitoredResourceDescriptorPathTemplate: new gax.PathTemplate(
        'projects/{project}/monitoredResourceDescriptors/{monitored_resource_descriptor}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listMonitoredResourceDescriptors: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'resourceDescriptors'
      ),
      listMetricDescriptors: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'metricDescriptors'
      ),
      listTimeSeries: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'timeSeries'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.MetricService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.MetricService.
    var metricServiceStub = gaxGrpc.createStub(
      protos.google.monitoring.v3.MetricService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var metricServiceStubMethods = [
      'listMonitoredResourceDescriptors',
      'getMonitoredResourceDescriptor',
      'listMetricDescriptors',
      'getMetricDescriptor',
      'createMetricDescriptor',
      'deleteMetricDescriptor',
      'listTimeSeries',
      'createTimeSeries',
    ];
    for (let methodName of metricServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        metricServiceStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.page[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'monitoring.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/monitoring',
      'https://www.googleapis.com/auth/monitoring.read',
      'https://www.googleapis.com/auth/monitoring.write',
    ];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project on which to execute the request. The format is
   *   `"projects/{project_id_or_number}"`.
   * @param {string} [request.filter]
   *   An optional [filter](https://cloud.google.com/monitoring/api/v3/filters) describing
   *   the descriptors to be returned.  The filter can reference
   *   the descriptor's type and labels. For example, the
   *   following filter returns only Google Compute Engine descriptors
   *   that have an `id` label:
   *
   *       resource.type = starts_with("gce_") AND resource.label:id
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListMonitoredResourceDescriptorsResponse]{@link google.monitoring.v3.ListMonitoredResourceDescriptorsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListMonitoredResourceDescriptorsResponse]{@link google.monitoring.v3.ListMonitoredResourceDescriptorsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   * client.listMonitoredResourceDescriptors({name: formattedName})
   *   .then(responses => {
   *     var resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   *
   * var options = {autoPaginate: false};
   * var callback = responses => {
   *   // The actual resources in a response.
   *   var resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   var nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // var rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listMonitoredResourceDescriptors(nextRequest, options).then(callback);
   *   }
   * }
   * client.listMonitoredResourceDescriptors({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listMonitoredResourceDescriptors(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listMonitoredResourceDescriptors(
      request,
      options,
      callback
    );
  }

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
   * @param {string} [request.filter]
   *   An optional [filter](https://cloud.google.com/monitoring/api/v3/filters) describing
   *   the descriptors to be returned.  The filter can reference
   *   the descriptor's type and labels. For example, the
   *   following filter returns only Google Compute Engine descriptors
   *   that have an `id` label:
   *
   *       resource.type = starts_with("gce_") AND resource.label:id
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * client.listMonitoredResourceDescriptorsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listMonitoredResourceDescriptorsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listMonitoredResourceDescriptors.createStream(
      this._innerApiCalls.listMonitoredResourceDescriptors,
      request,
      options
    );
  }

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
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.monitoredResourceDescriptorPath('[PROJECT]', '[MONITORED_RESOURCE_DESCRIPTOR]');
   * client.getMonitoredResourceDescriptor({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getMonitoredResourceDescriptor(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getMonitoredResourceDescriptor(
      request,
      options,
      callback
    );
  }

  /**
   * Lists metric descriptors that match a filter. This method does not require a Stackdriver account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project on which to execute the request. The format is
   *   `"projects/{project_id_or_number}"`.
   * @param {string} [request.filter]
   *   If this field is empty, all custom and
   *   system-defined metric descriptors are returned.
   *   Otherwise, the [filter](https://cloud.google.com/monitoring/api/v3/filters)
   *   specifies which metric descriptors are to be
   *   returned. For example, the following filter matches all
   *   [custom metrics](https://cloud.google.com/monitoring/custom-metrics):
   *
   *       metric.type = starts_with("custom.googleapis.com/")
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [MetricDescriptor]{@link google.api.MetricDescriptor}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListMetricDescriptorsResponse]{@link google.monitoring.v3.ListMetricDescriptorsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [MetricDescriptor]{@link google.api.MetricDescriptor}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [MetricDescriptor]{@link google.api.MetricDescriptor} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListMetricDescriptorsResponse]{@link google.monitoring.v3.ListMetricDescriptorsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   * client.listMetricDescriptors({name: formattedName})
   *   .then(responses => {
   *     var resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   *
   * var options = {autoPaginate: false};
   * var callback = responses => {
   *   // The actual resources in a response.
   *   var resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   var nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // var rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listMetricDescriptors(nextRequest, options).then(callback);
   *   }
   * }
   * client.listMetricDescriptors({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listMetricDescriptors(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listMetricDescriptors(
      request,
      options,
      callback
    );
  }

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
   * @param {string} [request.filter]
   *   If this field is empty, all custom and
   *   system-defined metric descriptors are returned.
   *   Otherwise, the [filter](https://cloud.google.com/monitoring/api/v3/filters)
   *   specifies which metric descriptors are to be
   *   returned. For example, the following filter matches all
   *   [custom metrics](https://cloud.google.com/monitoring/custom-metrics):
   *
   *       metric.type = starts_with("custom.googleapis.com/")
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [MetricDescriptor]{@link google.api.MetricDescriptor} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * client.listMetricDescriptorsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listMetricDescriptorsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listMetricDescriptors.createStream(
      this._innerApiCalls.listMetricDescriptors,
      request,
      options
    );
  }

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
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [MetricDescriptor]{@link google.api.MetricDescriptor}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [MetricDescriptor]{@link google.api.MetricDescriptor}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.metricDescriptorPath('[PROJECT]', '[METRIC_DESCRIPTOR]');
   * client.getMetricDescriptor({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getMetricDescriptor(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getMetricDescriptor(request, options, callback);
  }

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
   *   This object should have the same structure as [MetricDescriptor]{@link google.api.MetricDescriptor}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [MetricDescriptor]{@link google.api.MetricDescriptor}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [MetricDescriptor]{@link google.api.MetricDescriptor}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * var metricDescriptor = {};
   * var request = {
   *   name: formattedName,
   *   metricDescriptor: metricDescriptor,
   * };
   * client.createMetricDescriptor(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createMetricDescriptor(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createMetricDescriptor(
      request,
      options,
      callback
    );
  }

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
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.metricDescriptorPath('[PROJECT]', '[METRIC_DESCRIPTOR]');
   * client.deleteMetricDescriptor({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteMetricDescriptor(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteMetricDescriptor(
      request,
      options,
      callback
    );
  }

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
   *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
   * @param {number} request.view
   *   Specifies which information is returned about the time series.
   *
   *   The number should be among the values of [TimeSeriesView]{@link google.monitoring.v3.TimeSeriesView}
   * @param {Object} [request.aggregation]
   *   By default, the raw time series data is returned.
   *   Use this field to combine multiple time series for different
   *   views of the data.
   *
   *   This object should have the same structure as [Aggregation]{@link google.monitoring.v3.Aggregation}
   * @param {string} [request.orderBy]
   *   Specifies the order in which the points of the time series should
   *   be returned.  By default, results are not ordered.  Currently,
   *   this field must be left blank.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [TimeSeries]{@link google.monitoring.v3.TimeSeries}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTimeSeriesResponse]{@link google.monitoring.v3.ListTimeSeriesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [TimeSeries]{@link google.monitoring.v3.TimeSeries}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [TimeSeries]{@link google.monitoring.v3.TimeSeries} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTimeSeriesResponse]{@link google.monitoring.v3.ListTimeSeriesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.projectPath('[PROJECT]');
   * var filter = '';
   * var interval = {};
   * var view = 'FULL';
   * var request = {
   *   name: formattedName,
   *   filter: filter,
   *   interval: interval,
   *   view: view,
   * };
   *
   * client.listTimeSeries(request)
   *   .then(responses => {
   *     var resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * var formattedName = client.projectPath('[PROJECT]');
   * var filter = '';
   * var interval = {};
   * var view = 'FULL';
   * var request = {
   *   name: formattedName,
   *   filter: filter,
   *   interval: interval,
   *   view: view,
   * };
   *
   *
   * var options = {autoPaginate: false};
   * var callback = responses => {
   *   // The actual resources in a response.
   *   var resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   var nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // var rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listTimeSeries(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTimeSeries(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTimeSeries(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listTimeSeries(request, options, callback);
  }

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
   *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
   * @param {number} request.view
   *   Specifies which information is returned about the time series.
   *
   *   The number should be among the values of [TimeSeriesView]{@link google.monitoring.v3.TimeSeriesView}
   * @param {Object} [request.aggregation]
   *   By default, the raw time series data is returned.
   *   Use this field to combine multiple time series for different
   *   views of the data.
   *
   *   This object should have the same structure as [Aggregation]{@link google.monitoring.v3.Aggregation}
   * @param {string} [request.orderBy]
   *   Specifies the order in which the points of the time series should
   *   be returned.  By default, results are not ordered.  Currently,
   *   this field must be left blank.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [TimeSeries]{@link google.monitoring.v3.TimeSeries} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * var filter = '';
   * var interval = {};
   * var view = 'FULL';
   * var request = {
   *   name: formattedName,
   *   filter: filter,
   *   interval: interval,
   *   view: view,
   * };
   * client.listTimeSeriesStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTimeSeriesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTimeSeries.createStream(
      this._innerApiCalls.listTimeSeries,
      request,
      options
    );
  }

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
   *   This object should have the same structure as [TimeSeries]{@link google.monitoring.v3.TimeSeries}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.MetricServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * var timeSeries = [];
   * var request = {
   *   name: formattedName,
   *   timeSeries: timeSeries,
   * };
   * client.createTimeSeries(request).catch(err => {
   *   console.error(err);
   * });
   */
  createTimeSeries(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createTimeSeries(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {String} project
   * @returns {String}
   */
  projectPath(project) {
    return this._pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Return a fully-qualified metric_descriptor resource name string.
   *
   * @param {String} project
   * @param {String} metricDescriptor
   * @returns {String}
   */
  metricDescriptorPath(project, metricDescriptor) {
    return this._pathTemplates.metricDescriptorPathTemplate.render({
      project: project,
      metric_descriptor: metricDescriptor,
    });
  }

  /**
   * Return a fully-qualified monitored_resource_descriptor resource name string.
   *
   * @param {String} project
   * @param {String} monitoredResourceDescriptor
   * @returns {String}
   */
  monitoredResourceDescriptorPath(project, monitoredResourceDescriptor) {
    return this._pathTemplates.monitoredResourceDescriptorPathTemplate.render({
      project: project,
      monitored_resource_descriptor: monitoredResourceDescriptor,
    });
  }

  /**
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Parse the metricDescriptorName from a metric_descriptor resource.
   *
   * @param {String} metricDescriptorName
   *   A fully-qualified path representing a metric_descriptor resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromMetricDescriptorName(metricDescriptorName) {
    return this._pathTemplates.metricDescriptorPathTemplate.match(
      metricDescriptorName
    ).project;
  }

  /**
   * Parse the metricDescriptorName from a metric_descriptor resource.
   *
   * @param {String} metricDescriptorName
   *   A fully-qualified path representing a metric_descriptor resources.
   * @returns {String} - A string representing the metric_descriptor.
   */
  matchMetricDescriptorFromMetricDescriptorName(metricDescriptorName) {
    return this._pathTemplates.metricDescriptorPathTemplate.match(
      metricDescriptorName
    ).metric_descriptor;
  }

  /**
   * Parse the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
   *
   * @param {String} monitoredResourceDescriptorName
   *   A fully-qualified path representing a monitored_resource_descriptor resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromMonitoredResourceDescriptorName(
    monitoredResourceDescriptorName
  ) {
    return this._pathTemplates.monitoredResourceDescriptorPathTemplate.match(
      monitoredResourceDescriptorName
    ).project;
  }

  /**
   * Parse the monitoredResourceDescriptorName from a monitored_resource_descriptor resource.
   *
   * @param {String} monitoredResourceDescriptorName
   *   A fully-qualified path representing a monitored_resource_descriptor resources.
   * @returns {String} - A string representing the monitored_resource_descriptor.
   */
  matchMonitoredResourceDescriptorFromMonitoredResourceDescriptorName(
    monitoredResourceDescriptorName
  ) {
    return this._pathTemplates.monitoredResourceDescriptorPathTemplate.match(
      monitoredResourceDescriptorName
    ).monitored_resource_descriptor;
  }
}

module.exports = MetricServiceClient;
