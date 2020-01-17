// Copyright 2020 Google LLC
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

const gapicConfig = require('./service_monitoring_service_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Stackdriver Monitoring Service-Oriented Monitoring API has endpoints for
 * managing and querying aspects of a workspace's services. These include the
 * `Service`'s monitored resources, its Service-Level Objectives, and a taxonomy
 * of categorized Health Metrics.
 *
 * @class
 * @memberof v3
 */
class ServiceMonitoringServiceClient {
  /**
   * Construct an instance of ServiceMonitoringServiceClient.
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
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gaxModule.PathTemplate('projects/{project}'),
      servicePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/services/{service}'
      ),
      serviceLevelObjectivePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/services/{service}/serviceLevelObjectives/{service_level_objective}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listServices: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'services'
      ),
      listServiceLevelObjectives: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'serviceLevelObjectives'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.ServiceMonitoringService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.ServiceMonitoringService.
    const serviceMonitoringServiceStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.monitoring.v3.ServiceMonitoringService')
        : protos.google.monitoring.v3.ServiceMonitoringService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const serviceMonitoringServiceStubMethods = [
      'createService',
      'getService',
      'listServices',
      'updateService',
      'deleteService',
      'createServiceLevelObjective',
      'getServiceLevelObjective',
      'listServiceLevelObjectives',
      'updateServiceLevelObjective',
      'deleteServiceLevelObjective',
    ];
    for (const methodName of serviceMonitoringServiceStubMethods) {
      const innerCallPromise = serviceMonitoringServiceStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
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
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
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
   * Create a `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent workspace.
   *   Of the form `projects/{project_id}`.
   * @param {Object} request.service
   *   The `Service` to create.
   *
   *   This object should have the same structure as [Service]{@link google.monitoring.v3.Service}
   * @param {string} [request.serviceId]
   *   Optional. The Service id to use for this Service. If omitted, an id will be
   *   generated instead. Must match the pattern [a-z0-9\-]+
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Service]{@link google.monitoring.v3.Service}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Service]{@link google.monitoring.v3.Service}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const service = {};
   * const request = {
   *   parent: formattedParent,
   *   service: service,
   * };
   * client.createService(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createService(request, options, callback);
  }

  /**
   * Get the named `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the `Service`.
   *   Of the form `projects/{project_id}/services/{service_id}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Service]{@link google.monitoring.v3.Service}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Service]{@link google.monitoring.v3.Service}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.servicePath('[PROJECT]', '[SERVICE]');
   * client.getService({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getService(request, options, callback);
  }

  /**
   * List `Service`s for this workspace.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent `Workspace`.
   *   Of the form `projects/{project_id}`.
   * @param {string} [request.filter]
   *   A filter specifying what `Service`s to return. The filter currently
   *   supports the following fields:
   *
   *       - `identifier_case`
   *       - `app_engine.module_id`
   *       - `cloud_endpoints.service`
   *       - `cluster_istio.location`
   *       - `cluster_istio.cluster_name`
   *       - `cluster_istio.service_namespace`
   *       - `cluster_istio.service_name`
   *
   *   `identifier_case` refers to which option in the identifier oneof is
   *   populated. For example, the filter `identifier_case = "CUSTOM"` would match
   *   all services with a value for the `custom` field. Valid options are
   *   "CUSTOM", "APP_ENGINE", "CLOUD_ENDPOINTS", and "CLUSTER_ISTIO".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Service]{@link google.monitoring.v3.Service}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListServicesResponse]{@link google.monitoring.v3.ListServicesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Service]{@link google.monitoring.v3.Service}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Service]{@link google.monitoring.v3.Service} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListServicesResponse]{@link google.monitoring.v3.ListServicesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listServices({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listServices(nextRequest, options).then(callback);
   *   }
   * }
   * client.listServices({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listServices(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listServices(request, options, callback);
  }

  /**
   * Equivalent to {@link listServices}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listServices} continuously
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
   *   Resource name of the parent `Workspace`.
   *   Of the form `projects/{project_id}`.
   * @param {string} [request.filter]
   *   A filter specifying what `Service`s to return. The filter currently
   *   supports the following fields:
   *
   *       - `identifier_case`
   *       - `app_engine.module_id`
   *       - `cloud_endpoints.service`
   *       - `cluster_istio.location`
   *       - `cluster_istio.cluster_name`
   *       - `cluster_istio.service_namespace`
   *       - `cluster_istio.service_name`
   *
   *   `identifier_case` refers to which option in the identifier oneof is
   *   populated. For example, the filter `identifier_case = "CUSTOM"` would match
   *   all services with a value for the `custom` field. Valid options are
   *   "CUSTOM", "APP_ENGINE", "CLOUD_ENDPOINTS", and "CLUSTER_ISTIO".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Service]{@link google.monitoring.v3.Service} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listServicesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listServicesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listServices.createStream(
      this._innerApiCalls.listServices,
      request,
      options
    );
  }

  /**
   * Update this `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.service
   *   The `Service` to draw updates from.
   *   The given `name` specifies the resource to update.
   *
   *   This object should have the same structure as [Service]{@link google.monitoring.v3.Service}
   * @param {Object} [request.updateMask]
   *   A set of field paths defining which fields to use for the update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Service]{@link google.monitoring.v3.Service}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Service]{@link google.monitoring.v3.Service}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const service = {};
   * client.updateService({service: service})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'service.name': request.service.name,
    });

    return this._innerApiCalls.updateService(request, options, callback);
  }

  /**
   * Soft delete this `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the `Service` to delete.
   *   Of the form `projects/{project_id}/service/{service_id}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.servicePath('[PROJECT]', '[SERVICE]');
   * client.deleteService({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteService(request, options, callback);
  }

  /**
   * Create a `ServiceLevelObjective` for the given `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent `Service`.
   *   Of the form `projects/{project_id}/services/{service_id}`.
   * @param {Object} request.serviceLevelObjective
   *   The `ServiceLevelObjective` to create.
   *   The provided `name` will be respected if no `ServiceLevelObjective` exists
   *   with this name.
   *
   *   This object should have the same structure as [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}
   * @param {string} [request.serviceLevelObjectiveId]
   *   Optional. The ServiceLevelObjective id to use for this
   *   ServiceLevelObjective. If omitted, an id will be generated instead. Must
   *   match the pattern [a-z0-9\-]+
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.servicePath('[PROJECT]', '[SERVICE]');
   * const serviceLevelObjective = {};
   * const request = {
   *   parent: formattedParent,
   *   serviceLevelObjective: serviceLevelObjective,
   * };
   * client.createServiceLevelObjective(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createServiceLevelObjective(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createServiceLevelObjective(
      request,
      options,
      callback
    );
  }

  /**
   * Get a `ServiceLevelObjective` by name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the `ServiceLevelObjective` to get.
   *   Of the form
   *   `projects/{project_id}/services/{service_id}/serviceLevelObjectives/{slo_name}`.
   * @param {number} [request.view]
   *   View of the `ServiceLevelObjective` to return. If `DEFAULT`, return the
   *   `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
   *   `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
   *   `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
   *
   *   The number should be among the values of [View]{@link google.monitoring.v3.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.serviceLevelObjectivePath('[PROJECT]', '[SERVICE]', '[SERVICE_LEVEL_OBJECTIVE]');
   * client.getServiceLevelObjective({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getServiceLevelObjective(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getServiceLevelObjective(
      request,
      options,
      callback
    );
  }

  /**
   * List the `ServiceLevelObjective`s for the given `Service`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent `Service`.
   *   Of the form `projects/{project_id}/services/{service_id}`.
   * @param {string} [request.filter]
   *   A filter specifying what `ServiceLevelObjective`s to return.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.view]
   *   View of the `ServiceLevelObjective`s to return. If `DEFAULT`, return each
   *   `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
   *   `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
   *   `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
   *
   *   The number should be among the values of [View]{@link google.monitoring.v3.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListServiceLevelObjectivesResponse]{@link google.monitoring.v3.ListServiceLevelObjectivesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListServiceLevelObjectivesResponse]{@link google.monitoring.v3.ListServiceLevelObjectivesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.servicePath('[PROJECT]', '[SERVICE]');
   *
   * client.listServiceLevelObjectives({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.servicePath('[PROJECT]', '[SERVICE]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listServiceLevelObjectives(nextRequest, options).then(callback);
   *   }
   * }
   * client.listServiceLevelObjectives({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listServiceLevelObjectives(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listServiceLevelObjectives(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listServiceLevelObjectives}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listServiceLevelObjectives} continuously
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
   *   Resource name of the parent `Service`.
   *   Of the form `projects/{project_id}/services/{service_id}`.
   * @param {string} [request.filter]
   *   A filter specifying what `ServiceLevelObjective`s to return.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.view]
   *   View of the `ServiceLevelObjective`s to return. If `DEFAULT`, return each
   *   `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
   *   `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
   *   `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
   *
   *   The number should be among the values of [View]{@link google.monitoring.v3.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.servicePath('[PROJECT]', '[SERVICE]');
   * client.listServiceLevelObjectivesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listServiceLevelObjectivesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listServiceLevelObjectives.createStream(
      this._innerApiCalls.listServiceLevelObjectives,
      request,
      options
    );
  }

  /**
   * Update the given `ServiceLevelObjective`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.serviceLevelObjective
   *   The `ServiceLevelObjective` to draw updates from.
   *   The given `name` specifies the resource to update.
   *
   *   This object should have the same structure as [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}
   * @param {Object} [request.updateMask]
   *   A set of field paths defining which fields to use for the update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const serviceLevelObjective = {};
   * client.updateServiceLevelObjective({serviceLevelObjective: serviceLevelObjective})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateServiceLevelObjective(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'service_level_objective.name': request.serviceLevelObjective.name,
    });

    return this._innerApiCalls.updateServiceLevelObjective(
      request,
      options,
      callback
    );
  }

  /**
   * Delete the given `ServiceLevelObjective`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the `ServiceLevelObjective` to delete.
   *   Of the form
   *   `projects/{project_id}/services/{service_id}/serviceLevelObjectives/{slo_name}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.ServiceMonitoringServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.serviceLevelObjectivePath('[PROJECT]', '[SERVICE]', '[SERVICE_LEVEL_OBJECTIVE]');
   * client.deleteServiceLevelObjective({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteServiceLevelObjective(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteServiceLevelObjective(
      request,
      options,
      callback
    );
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
   * Return a fully-qualified service resource name string.
   *
   * @param {String} project
   * @param {String} service
   * @returns {String}
   */
  servicePath(project, service) {
    return this._pathTemplates.servicePathTemplate.render({
      project: project,
      service: service,
    });
  }

  /**
   * Return a fully-qualified service_level_objective resource name string.
   *
   * @param {String} project
   * @param {String} service
   * @param {String} serviceLevelObjective
   * @returns {String}
   */
  serviceLevelObjectivePath(project, service, serviceLevelObjective) {
    return this._pathTemplates.serviceLevelObjectivePathTemplate.render({
      project: project,
      service: service,
      service_level_objective: serviceLevelObjective,
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
   * Parse the serviceName from a service resource.
   *
   * @param {String} serviceName
   *   A fully-qualified path representing a service resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromServiceName(serviceName) {
    return this._pathTemplates.servicePathTemplate.match(serviceName).project;
  }

  /**
   * Parse the serviceName from a service resource.
   *
   * @param {String} serviceName
   *   A fully-qualified path representing a service resources.
   * @returns {String} - A string representing the service.
   */
  matchServiceFromServiceName(serviceName) {
    return this._pathTemplates.servicePathTemplate.match(serviceName).service;
  }

  /**
   * Parse the serviceLevelObjectiveName from a service_level_objective resource.
   *
   * @param {String} serviceLevelObjectiveName
   *   A fully-qualified path representing a service_level_objective resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromServiceLevelObjectiveName(serviceLevelObjectiveName) {
    return this._pathTemplates.serviceLevelObjectivePathTemplate.match(
      serviceLevelObjectiveName
    ).project;
  }

  /**
   * Parse the serviceLevelObjectiveName from a service_level_objective resource.
   *
   * @param {String} serviceLevelObjectiveName
   *   A fully-qualified path representing a service_level_objective resources.
   * @returns {String} - A string representing the service.
   */
  matchServiceFromServiceLevelObjectiveName(serviceLevelObjectiveName) {
    return this._pathTemplates.serviceLevelObjectivePathTemplate.match(
      serviceLevelObjectiveName
    ).service;
  }

  /**
   * Parse the serviceLevelObjectiveName from a service_level_objective resource.
   *
   * @param {String} serviceLevelObjectiveName
   *   A fully-qualified path representing a service_level_objective resources.
   * @returns {String} - A string representing the service_level_objective.
   */
  matchServiceLevelObjectiveFromServiceLevelObjectiveName(
    serviceLevelObjectiveName
  ) {
    return this._pathTemplates.serviceLevelObjectivePathTemplate.match(
      serviceLevelObjectiveName
    ).service_level_objective;
  }
}

module.exports = ServiceMonitoringServiceClient;
