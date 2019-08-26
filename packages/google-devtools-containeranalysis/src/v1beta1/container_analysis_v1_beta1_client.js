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

const gapicConfig = require('./container_analysis_v1_beta1_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Retrieves analysis results of Cloud components such as Docker container
 * images. The Container Analysis API is an implementation of the
 * [Grafeas](https://grafeas.io) API.
 *
 * Analysis results are stored as a series of occurrences. An `Occurrence`
 * contains information about a specific analysis instance on a resource. An
 * occurrence refers to a `Note`. A note contains details describing the
 * analysis and is generally stored in a separate project, called a `Provider`.
 * Multiple occurrences can refer to the same note.
 *
 * For example, an SSL vulnerability could affect multiple images. In this case,
 * there would be one note for the vulnerability and an occurrence for each
 * image with the vulnerability referring to that note.
 *
 * @class
 * @memberof v1beta1
 */
class ContainerAnalysisV1Beta1Client {
  /**
   * Construct an instance of ContainerAnalysisV1Beta1Client.
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
      `gl-node/${process.versions.node}`,
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
      ['google/devtools/containeranalysis/v1beta1/containeranalysis.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      notePathTemplate: new gax.PathTemplate('projects/{project}/notes/{note}'),
      occurrencePathTemplate: new gax.PathTemplate(
        'projects/{project}/occurrences/{occurrence}'
      ),
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      scanConfigPathTemplate: new gax.PathTemplate(
        'projects/{project}/scanConfigs/{scan_config}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listScanConfigs: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'scanConfigs'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1.
    const containerAnalysisV1Beta1Stub = gaxGrpc.createStub(
      protos.google.devtools.containeranalysis.v1beta1.ContainerAnalysisV1Beta1,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const containerAnalysisV1Beta1StubMethods = [
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
      'getScanConfig',
      'listScanConfigs',
      'updateScanConfig',
    ];
    for (const methodName of containerAnalysisV1Beta1StubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        containerAnalysisV1Beta1Stub.then(
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
    return 'containeranalysis.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'containeranalysis.googleapis.com';
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
   * Sets the access control policy on the specified note or occurrence.
   * Requires `containeranalysis.notes.setIamPolicy` or
   * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
   * a note or an occurrence, respectively.
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being specified.
   *   See the operation documentation for the appropriate value for this field.
   * @param {Object} request.policy
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   *
   *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
   * const policy = {};
   * const request = {
   *   resource: formattedResource,
   *   policy: policy,
   * };
   * client.setIamPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setIamPolicy(request, options, callback) {
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
      resource: request.resource,
    });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }

  /**
   * Gets the access control policy for a note or an occurrence resource.
   * Requires `containeranalysis.notes.setIamPolicy` or
   * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
   * a note or occurrence, respectively.
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {Object} [request.options]
   *   OPTIONAL: A `GetPolicyOptions` object for specifying options to
   *   `GetIamPolicy`. This field is only used by Cloud IAM.
   *
   *   This object should have the same structure as [GetPolicyOptions]{@link google.iam.v1.GetPolicyOptions}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
   * client.getIamPolicy({resource: formattedResource})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIamPolicy(request, options, callback) {
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
      resource: request.resource,
    });

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  /**
   * Returns the permissions that a caller has on the specified note or
   * occurrence. Requires list permission on the project (for example,
   * `containeranalysis.notes.list`).
   *
   * The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for
   * notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for
   * occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {string[]} request.permissions
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
   * const permissions = [];
   * const request = {
   *   resource: formattedResource,
   *   permissions: permissions,
   * };
   * client.testIamPermissions(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  testIamPermissions(request, options, callback) {
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
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }

  /**
   * Gets the specified scan configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the scan configuration in the form of
   *   `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
   * client.getScanConfig({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getScanConfig(request, options, callback) {
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

    return this._innerApiCalls.getScanConfig(request, options, callback);
  }

  /**
   * Lists scan configurations for the specified project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project to list scan configurations for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   The second parameter to the callback is Array of [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListScanConfigsResponse]{@link google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListScanConfigsResponse]{@link google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listScanConfigs({parent: formattedParent})
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
   *     return client.listScanConfigs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listScanConfigs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listScanConfigs(request, options, callback) {
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

    return this._innerApiCalls.listScanConfigs(request, options, callback);
  }

  /**
   * Equivalent to {@link listScanConfigs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listScanConfigs} continuously
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
   *   The name of the project to list scan configurations for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   An object stream which emits an object representing [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig} on 'data' event.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listScanConfigsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listScanConfigsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listScanConfigs.createStream(
      this._innerApiCalls.listScanConfigs,
      request,
      options
    );
  }

  /**
   * Updates the specified scan configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the scan configuration in the form of
   *   `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
   * @param {Object} request.scanConfig
   *   The updated scan configuration.
   *
   *   This object should have the same structure as [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.ContainerAnalysisV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
   * const scanConfig = {};
   * const request = {
   *   name: formattedName,
   *   scanConfig: scanConfig,
   * };
   * client.updateScanConfig(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateScanConfig(request, options, callback) {
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

    return this._innerApiCalls.updateScanConfig(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified note resource name string.
   *
   * @param {String} project
   * @param {String} note
   * @returns {String}
   */
  notePath(project, note) {
    return this._pathTemplates.notePathTemplate.render({
      project: project,
      note: note,
    });
  }

  /**
   * Return a fully-qualified occurrence resource name string.
   *
   * @param {String} project
   * @param {String} occurrence
   * @returns {String}
   */
  occurrencePath(project, occurrence) {
    return this._pathTemplates.occurrencePathTemplate.render({
      project: project,
      occurrence: occurrence,
    });
  }

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
   * Return a fully-qualified scan_config resource name string.
   *
   * @param {String} project
   * @param {String} scanConfig
   * @returns {String}
   */
  scanConfigPath(project, scanConfig) {
    return this._pathTemplates.scanConfigPathTemplate.render({
      project: project,
      scan_config: scanConfig,
    });
  }

  /**
   * Parse the noteName from a note resource.
   *
   * @param {String} noteName
   *   A fully-qualified path representing a note resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromNoteName(noteName) {
    return this._pathTemplates.notePathTemplate.match(noteName).project;
  }

  /**
   * Parse the noteName from a note resource.
   *
   * @param {String} noteName
   *   A fully-qualified path representing a note resources.
   * @returns {String} - A string representing the note.
   */
  matchNoteFromNoteName(noteName) {
    return this._pathTemplates.notePathTemplate.match(noteName).note;
  }

  /**
   * Parse the occurrenceName from a occurrence resource.
   *
   * @param {String} occurrenceName
   *   A fully-qualified path representing a occurrence resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromOccurrenceName(occurrenceName) {
    return this._pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .project;
  }

  /**
   * Parse the occurrenceName from a occurrence resource.
   *
   * @param {String} occurrenceName
   *   A fully-qualified path representing a occurrence resources.
   * @returns {String} - A string representing the occurrence.
   */
  matchOccurrenceFromOccurrenceName(occurrenceName) {
    return this._pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .occurrence;
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
   * Parse the scanConfigName from a scan_config resource.
   *
   * @param {String} scanConfigName
   *   A fully-qualified path representing a scan_config resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromScanConfigName(scanConfigName) {
    return this._pathTemplates.scanConfigPathTemplate.match(scanConfigName)
      .project;
  }

  /**
   * Parse the scanConfigName from a scan_config resource.
   *
   * @param {String} scanConfigName
   *   A fully-qualified path representing a scan_config resources.
   * @returns {String} - A string representing the scan_config.
   */
  matchScanConfigFromScanConfigName(scanConfigName) {
    return this._pathTemplates.scanConfigPathTemplate.match(scanConfigName)
      .scan_config;
  }
}

module.exports = ContainerAnalysisV1Beta1Client;
