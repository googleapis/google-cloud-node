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

const gapicConfig = require('./uptime_check_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The UptimeCheckService API is used to manage (list, create, delete, edit)
 * uptime check configurations in the Stackdriver Monitoring product. An uptime
 * check is a piece of configuration that determines which resources and
 * services to monitor for availability. These configurations can also be
 * configured interactively by navigating to the [Cloud Console]
 * (http://console.cloud.google.com), selecting the appropriate project,
 * clicking on "Monitoring" on the left-hand side to navigate to Stackdriver,
 * and then clicking on "Uptime".
 *
 * @class
 * @memberof v3
 */
class UptimeCheckServiceClient {
  /**
   * Construct an instance of UptimeCheckServiceClient.
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
    var gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version}`,
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
        'google/monitoring/v3/uptime_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      uptimeCheckConfigPathTemplate: new gax.PathTemplate(
        'projects/{project}/uptimeCheckConfigs/{uptime_check_config}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listUptimeCheckConfigs: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'uptimeCheckConfigs'
      ),
      listUptimeCheckIps: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'uptimeCheckIps'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.UptimeCheckService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.UptimeCheckService.
    var uptimeCheckServiceStub = gaxGrpc.createStub(
      protos.google.monitoring.v3.UptimeCheckService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var uptimeCheckServiceStubMethods = [
      'listUptimeCheckConfigs',
      'getUptimeCheckConfig',
      'createUptimeCheckConfig',
      'updateUptimeCheckConfig',
      'deleteUptimeCheckConfig',
      'listUptimeCheckIps',
    ];
    for (let methodName of uptimeCheckServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        uptimeCheckServiceStub.then(
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
   * Lists the existing valid uptime check configurations for the project,
   * leaving out any invalid configurations.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project whose uptime check configurations are listed. The format
   *     is `projects/[PROJECT_ID]`.
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
   *   The second parameter to the callback is Array of [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListUptimeCheckConfigsResponse]{@link google.monitoring.v3.ListUptimeCheckConfigsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListUptimeCheckConfigsResponse]{@link google.monitoring.v3.ListUptimeCheckConfigsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listUptimeCheckConfigs({parent: formattedParent})
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
   * var formattedParent = client.projectPath('[PROJECT]');
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
   *     return client.listUptimeCheckConfigs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listUptimeCheckConfigs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listUptimeCheckConfigs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listUptimeCheckConfigs(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listUptimeCheckConfigs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listUptimeCheckConfigs} continuously
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
   *   The project whose uptime check configurations are listed. The format
   *     is `projects/[PROJECT_ID]`.
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
   *   An object stream which emits an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectPath('[PROJECT]');
   * client.listUptimeCheckConfigsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listUptimeCheckConfigsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listUptimeCheckConfigs.createStream(
      this._innerApiCalls.listUptimeCheckConfigs,
      request,
      options
    );
  }

  /**
   * Gets a single uptime check configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The uptime check configuration to retrieve. The format
   *     is `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.uptimeCheckConfigPath('[PROJECT]', '[UPTIME_CHECK_CONFIG]');
   * client.getUptimeCheckConfig({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getUptimeCheckConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getUptimeCheckConfig(request, options, callback);
  }

  /**
   * Creates a new uptime check configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project in which to create the uptime check. The format
   *     is `projects/[PROJECT_ID]`.
   * @param {Object} request.uptimeCheckConfig
   *   The new uptime check configuration.
   *
   *   This object should have the same structure as [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectPath('[PROJECT]');
   * var uptimeCheckConfig = {};
   * var request = {
   *   parent: formattedParent,
   *   uptimeCheckConfig: uptimeCheckConfig,
   * };
   * client.createUptimeCheckConfig(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createUptimeCheckConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createUptimeCheckConfig(
      request,
      options,
      callback
    );
  }

  /**
   * Updates an uptime check configuration. You can either replace the entire
   * configuration with a new one or replace only certain fields in the current
   * configuration by specifying the fields to be updated via `"updateMask"`.
   * Returns the updated configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.uptimeCheckConfig
   *   Required. If an `"updateMask"` has been specified, this field gives
   *   the values for the set of fields mentioned in the `"updateMask"`. If an
   *   `"updateMask"` has not been given, this uptime check configuration replaces
   *   the current configuration. If a field is mentioned in `"updateMask"` but
   *   the corresonding field is omitted in this partial uptime check
   *   configuration, it has the effect of deleting/clearing the field from the
   *   configuration on the server.
   *
   *   The following fields can be updated: `display_name`,
   *   `http_check`, `tcp_check`, `timeout`, `content_matchers`, and
   *   `selected_regions`.
   *
   *   This object should have the same structure as [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}
   * @param {Object} [request.updateMask]
   *   Optional. If present, only the listed fields in the current uptime check
   *   configuration are updated with values from the new configuration. If this
   *   field is empty, then the current configuration is completely replaced with
   *   the new configuration.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var uptimeCheckConfig = {};
   * client.updateUptimeCheckConfig({uptimeCheckConfig: uptimeCheckConfig})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateUptimeCheckConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateUptimeCheckConfig(
      request,
      options,
      callback
    );
  }

  /**
   * Deletes an uptime check configuration. Note that this method will fail
   * if the uptime check configuration is referenced by an alert policy or
   * other dependent configs that would be rendered invalid by the deletion.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The uptime check configuration to delete. The format
   *     is `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
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
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.uptimeCheckConfigPath('[PROJECT]', '[UPTIME_CHECK_CONFIG]');
   * client.deleteUptimeCheckConfig({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteUptimeCheckConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteUptimeCheckConfig(
      request,
      options,
      callback
    );
  }

  /**
   * Returns the list of IPs that checkers run from
   *
   * @param {Object} request
   *   The request object that will be sent.
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
   *   The second parameter to the callback is Array of [UptimeCheckIp]{@link google.monitoring.v3.UptimeCheckIp}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListUptimeCheckIpsResponse]{@link google.monitoring.v3.ListUptimeCheckIpsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [UptimeCheckIp]{@link google.monitoring.v3.UptimeCheckIp}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [UptimeCheckIp]{@link google.monitoring.v3.UptimeCheckIp} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListUptimeCheckIpsResponse]{@link google.monitoring.v3.ListUptimeCheckIpsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * client.listUptimeCheckIps({})
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
   *     return client.listUptimeCheckIps(nextRequest, options).then(callback);
   *   }
   * }
   * client.listUptimeCheckIps({}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listUptimeCheckIps(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listUptimeCheckIps(request, options, callback);
  }

  /**
   * Equivalent to {@link listUptimeCheckIps}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listUptimeCheckIps} continuously
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
   *   An object stream which emits an object representing [UptimeCheckIp]{@link google.monitoring.v3.UptimeCheckIp} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.UptimeCheckServiceClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listUptimeCheckIpsStream({})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listUptimeCheckIpsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listUptimeCheckIps.createStream(
      this._innerApiCalls.listUptimeCheckIps,
      request,
      options
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
   * Return a fully-qualified uptime_check_config resource name string.
   *
   * @param {String} project
   * @param {String} uptimeCheckConfig
   * @returns {String}
   */
  uptimeCheckConfigPath(project, uptimeCheckConfig) {
    return this._pathTemplates.uptimeCheckConfigPathTemplate.render({
      project: project,
      uptime_check_config: uptimeCheckConfig,
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
   * Parse the uptimeCheckConfigName from a uptime_check_config resource.
   *
   * @param {String} uptimeCheckConfigName
   *   A fully-qualified path representing a uptime_check_config resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromUptimeCheckConfigName(uptimeCheckConfigName) {
    return this._pathTemplates.uptimeCheckConfigPathTemplate.match(
      uptimeCheckConfigName
    ).project;
  }

  /**
   * Parse the uptimeCheckConfigName from a uptime_check_config resource.
   *
   * @param {String} uptimeCheckConfigName
   *   A fully-qualified path representing a uptime_check_config resources.
   * @returns {String} - A string representing the uptime_check_config.
   */
  matchUptimeCheckConfigFromUptimeCheckConfigName(uptimeCheckConfigName) {
    return this._pathTemplates.uptimeCheckConfigPathTemplate.match(
      uptimeCheckConfigName
    ).uptime_check_config;
  }
}

module.exports = UptimeCheckServiceClient;
