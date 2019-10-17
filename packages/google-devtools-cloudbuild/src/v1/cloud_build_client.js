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

const gapicConfig = require('./cloud_build_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Creates and manages builds on Google Cloud Platform.
 *
 * The main concept used by this API is a `Build`, which describes the location
 * of the source to build, how to build the source, and where to store the
 * built artifacts, if any.
 *
 * A user can list previously-requested builds or get builds by their ID to
 * determine the status of the build.
 *
 * @class
 * @memberof v1
 */
class CloudBuildClient {
  /**
   * Construct an instance of CloudBuildClient.
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

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listBuilds: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'builds'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.devtools.cloudbuild.v1.CloudBuild',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.devtools.cloudbuild.v1.CloudBuild.
    const cloudBuildStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.devtools.cloudbuild.v1.CloudBuild')
        : protos.google.devtools.cloudbuild.v1.CloudBuild,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const cloudBuildStubMethods = [
      'createBuild',
      'getBuild',
      'listBuilds',
      'cancelBuild',
      'createBuildTrigger',
      'getBuildTrigger',
      'listBuildTriggers',
      'deleteBuildTrigger',
      'updateBuildTrigger',
      'runBuildTrigger',
      'retryBuild',
      'createWorkerPool',
      'getWorkerPool',
      'deleteWorkerPool',
      'updateWorkerPool',
      'listWorkerPools',
    ];
    for (const methodName of cloudBuildStubMethods) {
      const innerCallPromise = cloudBuildStub.then(
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
    return 'cloudbuild.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'cloudbuild.googleapis.com';
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
   * Starts a build with the specified configuration.
   *
   * This method returns a long-running `Operation`, which includes the build
   * ID. Pass the build ID to `GetBuild` to determine the build status (such as
   * `SUCCESS` or `FAILURE`).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {Object} request.build
   *   Required. Build resource to create.
   *
   *   This object should have the same structure as [Build]{@link google.devtools.cloudbuild.v1.Build}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.longrunning.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const build = {};
   * const request = {
   *   projectId: projectId,
   *   build: build,
   * };
   * client.createBuild(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createBuild(request, options, callback) {
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
      project_id: request.projectId,
    });

    return this._innerApiCalls.createBuild(request, options, callback);
  }

  /**
   * Returns information about a previously requested build.
   *
   * The `Build` that is returned includes its status (such as `SUCCESS`,
   * `FAILURE`, or `WORKING`), and timing information.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {string} request.id
   *   Required. ID of the build.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Build]{@link google.devtools.cloudbuild.v1.Build}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Build]{@link google.devtools.cloudbuild.v1.Build}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const id = '';
   * const request = {
   *   projectId: projectId,
   *   id: id,
   * };
   * client.getBuild(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getBuild(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.getBuild(request, options, callback);
  }

  /**
   * Lists previously requested builds.
   *
   * Previously requested builds may still be in-progress, or may have finished
   * successfully or unsuccessfully.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   *   The raw filter text to constrain the results.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Build]{@link google.devtools.cloudbuild.v1.Build}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListBuildsResponse]{@link google.devtools.cloudbuild.v1.ListBuildsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Build]{@link google.devtools.cloudbuild.v1.Build}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Build]{@link google.devtools.cloudbuild.v1.Build} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListBuildsResponse]{@link google.devtools.cloudbuild.v1.ListBuildsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const projectId = '';
   *
   * client.listBuilds({projectId: projectId})
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
   * const projectId = '';
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
   *     return client.listBuilds(nextRequest, options).then(callback);
   *   }
   * }
   * client.listBuilds({projectId: projectId}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listBuilds(request, options, callback) {
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
      project_id: request.projectId,
    });

    return this._innerApiCalls.listBuilds(request, options, callback);
  }

  /**
   * Equivalent to {@link listBuilds}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listBuilds} continuously
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
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   *   The raw filter text to constrain the results.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Build]{@link google.devtools.cloudbuild.v1.Build} on 'data' event.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * client.listBuildsStream({projectId: projectId})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listBuildsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listBuilds.createStream(
      this._innerApiCalls.listBuilds,
      request,
      options
    );
  }

  /**
   * Cancels a build in progress.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {string} request.id
   *   Required. ID of the build.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Build]{@link google.devtools.cloudbuild.v1.Build}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Build]{@link google.devtools.cloudbuild.v1.Build}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const id = '';
   * const request = {
   *   projectId: projectId,
   *   id: id,
   * };
   * client.cancelBuild(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  cancelBuild(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.cancelBuild(request, options, callback);
  }

  /**
   * Creates a new `BuildTrigger`.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project for which to configure automatic builds.
   * @param {Object} request.trigger
   *   Required. `BuildTrigger` to create.
   *
   *   This object should have the same structure as [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const trigger = {};
   * const request = {
   *   projectId: projectId,
   *   trigger: trigger,
   * };
   * client.createBuildTrigger(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createBuildTrigger(request, options, callback) {
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
      project_id: request.projectId,
    });

    return this._innerApiCalls.createBuildTrigger(request, options, callback);
  }

  /**
   * Returns information about a `BuildTrigger`.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project that owns the trigger.
   * @param {string} request.triggerId
   *   Required. ID of the `BuildTrigger` to get.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const triggerId = '';
   * const request = {
   *   projectId: projectId,
   *   triggerId: triggerId,
   * };
   * client.getBuildTrigger(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getBuildTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.getBuildTrigger(request, options, callback);
  }

  /**
   * Lists existing `BuildTrigger`s.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project for which to list BuildTriggers.
   * @param {number} [request.pageSize]
   *   Number of results to return in the list.
   * @param {string} [request.pageToken]
   *   Token to provide to skip to a particular spot in the list.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListBuildTriggersResponse]{@link google.devtools.cloudbuild.v1.ListBuildTriggersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListBuildTriggersResponse]{@link google.devtools.cloudbuild.v1.ListBuildTriggersResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * client.listBuildTriggers({projectId: projectId})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listBuildTriggers(request, options, callback) {
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
      project_id: request.projectId,
    });

    return this._innerApiCalls.listBuildTriggers(request, options, callback);
  }

  /**
   * Deletes a `BuildTrigger` by its project ID and trigger ID.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project that owns the trigger.
   * @param {string} request.triggerId
   *   Required. ID of the `BuildTrigger` to delete.
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
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const triggerId = '';
   * const request = {
   *   projectId: projectId,
   *   triggerId: triggerId,
   * };
   * client.deleteBuildTrigger(request).catch(err => {
   *   console.error(err);
   * });
   */
  deleteBuildTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.deleteBuildTrigger(request, options, callback);
  }

  /**
   * Updates a `BuildTrigger` by its project ID and trigger ID.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project that owns the trigger.
   * @param {string} request.triggerId
   *   Required. ID of the `BuildTrigger` to update.
   * @param {Object} request.trigger
   *   Required. `BuildTrigger` to update.
   *
   *   This object should have the same structure as [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const triggerId = '';
   * const trigger = {};
   * const request = {
   *   projectId: projectId,
   *   triggerId: triggerId,
   *   trigger: trigger,
   * };
   * client.updateBuildTrigger(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateBuildTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.updateBuildTrigger(request, options, callback);
  }

  /**
   * Runs a `BuildTrigger` at a particular source revision.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {string} request.triggerId
   *   Required. ID of the trigger.
   * @param {Object} request.source
   *   Required. Source to build against this trigger.
   *
   *   This object should have the same structure as [RepoSource]{@link google.devtools.cloudbuild.v1.RepoSource}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.longrunning.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const triggerId = '';
   * const source = {};
   * const request = {
   *   projectId: projectId,
   *   triggerId: triggerId,
   *   source: source,
   * };
   * client.runBuildTrigger(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runBuildTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.runBuildTrigger(request, options, callback);
  }

  /**
   * Creates a new build based on the specified build.
   *
   * This method creates a new build using the original build request, which may
   * or may not result in an identical build.
   *
   * For triggered builds:
   *
   * * Triggered builds resolve to a precise revision; therefore a retry of a
   * triggered build will result in a build that uses the same revision.
   *
   * For non-triggered builds that specify `RepoSource`:
   *
   * * If the original build built from the tip of a branch, the retried build
   * will build from the tip of that branch, which may not be the same revision
   * as the original build.
   * * If the original build specified a commit sha or revision ID, the retried
   * build will use the identical source.
   *
   * For builds that specify `StorageSource`:
   *
   * * If the original build pulled source from Google Cloud Storage without
   * specifying the generation of the object, the new build will use the current
   * object, which may be different from the original build source.
   * * If the original build pulled source from Cloud Storage and specified the
   * generation of the object, the new build will attempt to use the same
   * object, which may or may not be available depending on the bucket's
   * lifecycle management settings.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. ID of the project.
   * @param {string} request.id
   *   Required. Build ID of the original build.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.longrunning.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const id = '';
   * const request = {
   *   projectId: projectId,
   *   id: id,
   * };
   * client.retryBuild(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  retryBuild(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.retryBuild(request, options, callback);
  }

  /**
   * Creates a `WorkerPool` to run the builds, and returns the new worker pool.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   ID of the parent project.
   * @param {Object} [request.workerPool]
   *   `WorkerPool` resource to create.
   *
   *   This object should have the same structure as [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.createWorkerPool({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createWorkerPool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.createWorkerPool(request, options, callback);
  }

  /**
   * Returns information about a `WorkerPool`.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   The field will contain name of the resource requested, for example:
   *   "projects/project-1/workerPools/workerpool-name"
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.getWorkerPool({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getWorkerPool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.getWorkerPool(request, options, callback);
  }

  /**
   * Deletes a `WorkerPool` by its project ID and WorkerPool name.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   The field will contain name of the resource requested, for example:
   *   "projects/project-1/workerPools/workerpool-name"
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
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.deleteWorkerPool({}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteWorkerPool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.deleteWorkerPool(request, options, callback);
  }

  /**
   * Update a `WorkerPool`.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   The field will contain name of the resource requested, for example:
   *   "projects/project-1/workerPools/workerpool-name"
   * @param {Object} [request.workerPool]
   *   `WorkerPool` resource to update.
   *
   *   This object should have the same structure as [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.updateWorkerPool({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateWorkerPool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.updateWorkerPool(request, options, callback);
  }

  /**
   * List project's `WorkerPool`s.
   *
   * This API is experimental.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   ID of the parent project.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListWorkerPoolsResponse]{@link google.devtools.cloudbuild.v1.ListWorkerPoolsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListWorkerPoolsResponse]{@link google.devtools.cloudbuild.v1.ListWorkerPoolsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const cloudbuild = require('@google-cloud/cloudbuild');
   *
   * const client = new cloudbuild.v1.CloudBuildClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listWorkerPools({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listWorkerPools(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.listWorkerPools(request, options, callback);
  }
}

module.exports = CloudBuildClient;
