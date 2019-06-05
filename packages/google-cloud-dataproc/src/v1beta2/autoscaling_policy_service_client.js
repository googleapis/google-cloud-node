// Copyright 2019 Google LLC
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

const gapicConfig = require('./autoscaling_policy_service_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The API interface for managing autoscaling policies in the
 * Google Cloud Dataproc API.
 *
 * @class
 * @memberof v1beta2
 */
class AutoscalingPolicyServiceClient {
  /**
   * Construct an instance of AutoscalingPolicyServiceClient.
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
    opts = opts || {};
    this._descriptors = {};

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
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = gaxGrpc.loadProto(
      path.join(__dirname, '..', '..', 'protos'),
      ['google/cloud/dataproc/v1beta2/autoscaling_policies.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      autoscalingPolicyPathTemplate: new gax.PathTemplate(
        'projects/{project}/regions/{region}/autoscalingPolicies/{autoscaling_policy}'
      ),
      regionPathTemplate: new gax.PathTemplate(
        'projects/{project}/regions/{region}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listAutoscalingPolicies: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'policies'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dataproc.v1beta2.AutoscalingPolicyService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1beta2.AutoscalingPolicyService.
    const autoscalingPolicyServiceStub = gaxGrpc.createStub(
      protos.google.cloud.dataproc.v1beta2.AutoscalingPolicyService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const autoscalingPolicyServiceStubMethods = [
      'createAutoscalingPolicy',
      'updateAutoscalingPolicy',
      'getAutoscalingPolicy',
      'listAutoscalingPolicies',
      'deleteAutoscalingPolicy',
    ];
    for (const methodName of autoscalingPolicyServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        autoscalingPolicyServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            },
          err =>
            function() {
              throw err;
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
    return 'dataproc.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'dataproc.googleapis.com';
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
    return ['https://www.googleapis.com/auth/cloud-platform'];
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
   * Creates new autoscaling policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`.
   * @param {Object} request.policy
   *   The autoscaling policy to create.
   *
   *   This object should have the same structure as [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * const policy = {};
   * const request = {
   *   parent: formattedParent,
   *   policy: policy,
   * };
   * client.createAutoscalingPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createAutoscalingPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createAutoscalingPolicy(
      request,
      options,
      callback
    );
  }

  /**
   * Updates (replaces) autoscaling policy.
   *
   * Disabled check for update_mask, because all updates will be full
   * replacements.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.policy
   *   Required. The updated autoscaling policy.
   *
   *   This object should have the same structure as [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const policy = {};
   * client.updateAutoscalingPolicy({policy: policy})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateAutoscalingPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'policy.name': request.policy.name,
    });

    return this._innerApiCalls.updateAutoscalingPolicy(
      request,
      options,
      callback
    );
  }

  /**
   * Retrieves autoscaling policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The "resource name" of the autoscaling policy, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.autoscalingPolicyPath('[PROJECT]', '[REGION]', '[AUTOSCALING_POLICY]');
   * client.getAutoscalingPolicy({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAutoscalingPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getAutoscalingPolicy(request, options, callback);
  }

  /**
   * Lists autoscaling policies in the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
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
   *   The second parameter to the callback is Array of [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAutoscalingPoliciesResponse]{@link google.cloud.dataproc.v1beta2.ListAutoscalingPoliciesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAutoscalingPoliciesResponse]{@link google.cloud.dataproc.v1beta2.ListAutoscalingPoliciesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   *
   * client.listAutoscalingPolicies({parent: formattedParent})
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
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
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
   *     return client.listAutoscalingPolicies(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAutoscalingPolicies({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAutoscalingPolicies(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listAutoscalingPolicies(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listAutoscalingPolicies}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAutoscalingPolicies} continuously
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
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
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
   *   An object stream which emits an object representing [AutoscalingPolicy]{@link google.cloud.dataproc.v1beta2.AutoscalingPolicy} on 'data' event.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * client.listAutoscalingPoliciesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAutoscalingPoliciesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAutoscalingPolicies.createStream(
      this._innerApiCalls.listAutoscalingPolicies,
      request,
      options
    );
  }

  /**
   * Deletes an autoscaling policy. It is an error to delete an autoscaling
   * policy that is in use by one or more clusters.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The "resource name" of the autoscaling policy, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`.
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.AutoscalingPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.autoscalingPolicyPath('[PROJECT]', '[REGION]', '[AUTOSCALING_POLICY]');
   * client.deleteAutoscalingPolicy({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAutoscalingPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteAutoscalingPolicy(
      request,
      options,
      callback
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified autoscaling_policy resource name string.
   *
   * @param {String} project
   * @param {String} region
   * @param {String} autoscalingPolicy
   * @returns {String}
   */
  autoscalingPolicyPath(project, region, autoscalingPolicy) {
    return this._pathTemplates.autoscalingPolicyPathTemplate.render({
      project: project,
      region: region,
      autoscaling_policy: autoscalingPolicy,
    });
  }

  /**
   * Return a fully-qualified region resource name string.
   *
   * @param {String} project
   * @param {String} region
   * @returns {String}
   */
  regionPath(project, region) {
    return this._pathTemplates.regionPathTemplate.render({
      project: project,
      region: region,
    });
  }

  /**
   * Parse the autoscalingPolicyName from a autoscaling_policy resource.
   *
   * @param {String} autoscalingPolicyName
   *   A fully-qualified path representing a autoscaling_policy resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAutoscalingPolicyName(autoscalingPolicyName) {
    return this._pathTemplates.autoscalingPolicyPathTemplate.match(
      autoscalingPolicyName
    ).project;
  }

  /**
   * Parse the autoscalingPolicyName from a autoscaling_policy resource.
   *
   * @param {String} autoscalingPolicyName
   *   A fully-qualified path representing a autoscaling_policy resources.
   * @returns {String} - A string representing the region.
   */
  matchRegionFromAutoscalingPolicyName(autoscalingPolicyName) {
    return this._pathTemplates.autoscalingPolicyPathTemplate.match(
      autoscalingPolicyName
    ).region;
  }

  /**
   * Parse the autoscalingPolicyName from a autoscaling_policy resource.
   *
   * @param {String} autoscalingPolicyName
   *   A fully-qualified path representing a autoscaling_policy resources.
   * @returns {String} - A string representing the autoscaling_policy.
   */
  matchAutoscalingPolicyFromAutoscalingPolicyName(autoscalingPolicyName) {
    return this._pathTemplates.autoscalingPolicyPathTemplate.match(
      autoscalingPolicyName
    ).autoscaling_policy;
  }

  /**
   * Parse the regionName from a region resource.
   *
   * @param {String} regionName
   *   A fully-qualified path representing a region resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromRegionName(regionName) {
    return this._pathTemplates.regionPathTemplate.match(regionName).project;
  }

  /**
   * Parse the regionName from a region resource.
   *
   * @param {String} regionName
   *   A fully-qualified path representing a region resources.
   * @returns {String} - A string representing the region.
   */
  matchRegionFromRegionName(regionName) {
    return this._pathTemplates.regionPathTemplate.match(regionName).region;
  }
}

module.exports = AutoscalingPolicyServiceClient;
