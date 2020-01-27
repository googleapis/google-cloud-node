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

const gapicConfig = require('./contexts_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A context represents additional information included with user input or with
 * an intent returned by the Dialogflow API. Contexts are helpful for
 * differentiating user input which may be vague or have a different meaning
 * depending on additional details from your application such as user setting
 * and preferences, previous user input, where the user is in your application,
 * geographic location, and so on.
 *
 * You can include contexts as input parameters of a
 * DetectIntent (or
 * StreamingDetectIntent) request,
 * or as output contexts included in the returned intent.
 * Contexts expire when an intent is matched, after the number of `DetectIntent`
 * requests specified by the `lifespan_count` parameter, or after 20 minutes
 * if no intents are matched for a `DetectIntent` request.
 *
 * For more information about contexts, see the
 * [Dialogflow
 * documentation](https://cloud.google.com/dialogflow/docs/contexts-overview).
 *
 * @class
 * @memberof v2beta1
 */
class ContextsClient {
  /**
   * Construct an instance of ContextsClient.
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
      contextPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent/sessions/{session}/contexts/{context}'
      ),
      environmentContextPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}/contexts/{context}'
      ),
      environmentSessionPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}'
      ),
      sessionPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent/sessions/{session}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listContexts: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'contexts'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.Contexts',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.Contexts.
    const contextsStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.dialogflow.v2beta1.Contexts')
        : protos.google.cloud.dialogflow.v2beta1.Contexts,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const contextsStubMethods = [
      'listContexts',
      'getContext',
      'createContext',
      'updateContext',
      'deleteContext',
      'deleteAllContexts',
    ];
    for (const methodName of contextsStubMethods) {
      const innerCallPromise = contextsStub.then(
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
    return 'dialogflow.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'dialogflow.googleapis.com';
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
      'https://www.googleapis.com/auth/dialogflow',
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
   * Returns the list of all contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to list all contexts from.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
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
   *   The second parameter to the callback is Array of [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListContextsResponse]{@link google.cloud.dialogflow.v2beta1.ListContextsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Context]{@link google.cloud.dialogflow.v2beta1.Context} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListContextsResponse]{@link google.cloud.dialogflow.v2beta1.ListContextsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   *
   * client.listContexts({parent: formattedParent})
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
   * const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
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
   *     return client.listContexts(nextRequest, options).then(callback);
   *   }
   * }
   * client.listContexts({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listContexts(request, options, callback) {
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

    return this._innerApiCalls.listContexts(request, options, callback);
  }

  /**
   * Equivalent to {@link listContexts}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listContexts} continuously
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
   *   Required. The session to list all contexts from.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
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
   *   An object stream which emits an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   * client.listContextsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listContextsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listContexts.createStream(
      this._innerApiCalls.listContexts,
      request,
      options
    );
  }

  /**
   * Retrieves the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the context. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
   *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
   *   not specified, we assume default 'draft' environment. If `User ID` is not
   *   specified, we assume default '-' user.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.contextPath('[PROJECT]', '[SESSION]', '[CONTEXT]');
   * client.getContext({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getContext(request, options, callback) {
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

    return this._innerApiCalls.getContext(request, options, callback);
  }

  /**
   * Creates a context.
   *
   * If the specified context already exists, overrides the context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to create a context for.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we assume
   *   default '-' user.
   * @param {Object} request.context
   *   Required. The context to create.
   *
   *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   * const context = {};
   * const request = {
   *   parent: formattedParent,
   *   context: context,
   * };
   * client.createContext(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createContext(request, options, callback) {
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

    return this._innerApiCalls.createContext(request, options, callback);
  }

  /**
   * Updates the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.context
   *   Required. The context to update.
   *
   *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
   * @param {Object} [request.updateMask]
   *   Optional. The mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2beta1.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const context = {};
   * client.updateContext({context: context})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateContext(request, options, callback) {
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
      'context.name': request.context.name,
    });

    return this._innerApiCalls.updateContext(request, options, callback);
  }

  /**
   * Deletes the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the context to delete. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
   *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
   *   not specified, we assume default 'draft' environment. If `User ID` is not
   *   specified, we assume default '-' user.
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
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.contextPath('[PROJECT]', '[SESSION]', '[CONTEXT]');
   * client.deleteContext({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteContext(request, options, callback) {
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

    return this._innerApiCalls.deleteContext(request, options, callback);
  }

  /**
   * Deletes all active contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the session to delete all contexts from. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
   *   ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
   *   ID>`. If `Environment ID` is not specified we assume default 'draft'
   *   environment. If `User ID` is not specified, we assume default '-' user.
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
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   * client.deleteAllContexts({parent: formattedParent}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAllContexts(request, options, callback) {
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

    return this._innerApiCalls.deleteAllContexts(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified context resource name string.
   *
   * @param {String} project
   * @param {String} session
   * @param {String} context
   * @returns {String}
   */
  contextPath(project, session, context) {
    return this._pathTemplates.contextPathTemplate.render({
      project: project,
      session: session,
      context: context,
    });
  }

  /**
   * Return a fully-qualified environment_context resource name string.
   *
   * @param {String} project
   * @param {String} environment
   * @param {String} user
   * @param {String} session
   * @param {String} context
   * @returns {String}
   */
  environmentContextPath(project, environment, user, session, context) {
    return this._pathTemplates.environmentContextPathTemplate.render({
      project: project,
      environment: environment,
      user: user,
      session: session,
      context: context,
    });
  }

  /**
   * Return a fully-qualified environment_session resource name string.
   *
   * @param {String} project
   * @param {String} environment
   * @param {String} user
   * @param {String} session
   * @returns {String}
   */
  environmentSessionPath(project, environment, user, session) {
    return this._pathTemplates.environmentSessionPathTemplate.render({
      project: project,
      environment: environment,
      user: user,
      session: session,
    });
  }

  /**
   * Return a fully-qualified session resource name string.
   *
   * @param {String} project
   * @param {String} session
   * @returns {String}
   */
  sessionPath(project, session) {
    return this._pathTemplates.sessionPathTemplate.render({
      project: project,
      session: session,
    });
  }

  /**
   * Parse the contextName from a context resource.
   *
   * @param {String} contextName
   *   A fully-qualified path representing a context resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromContextName(contextName) {
    return this._pathTemplates.contextPathTemplate.match(contextName).project;
  }

  /**
   * Parse the contextName from a context resource.
   *
   * @param {String} contextName
   *   A fully-qualified path representing a context resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromContextName(contextName) {
    return this._pathTemplates.contextPathTemplate.match(contextName).session;
  }

  /**
   * Parse the contextName from a context resource.
   *
   * @param {String} contextName
   *   A fully-qualified path representing a context resources.
   * @returns {String} - A string representing the context.
   */
  matchContextFromContextName(contextName) {
    return this._pathTemplates.contextPathTemplate.match(contextName).context;
  }

  /**
   * Parse the environmentContextName from a environment_context resource.
   *
   * @param {String} environmentContextName
   *   A fully-qualified path representing a environment_context resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEnvironmentContextName(environmentContextName) {
    return this._pathTemplates.environmentContextPathTemplate.match(
      environmentContextName
    ).project;
  }

  /**
   * Parse the environmentContextName from a environment_context resource.
   *
   * @param {String} environmentContextName
   *   A fully-qualified path representing a environment_context resources.
   * @returns {String} - A string representing the environment.
   */
  matchEnvironmentFromEnvironmentContextName(environmentContextName) {
    return this._pathTemplates.environmentContextPathTemplate.match(
      environmentContextName
    ).environment;
  }

  /**
   * Parse the environmentContextName from a environment_context resource.
   *
   * @param {String} environmentContextName
   *   A fully-qualified path representing a environment_context resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromEnvironmentContextName(environmentContextName) {
    return this._pathTemplates.environmentContextPathTemplate.match(
      environmentContextName
    ).user;
  }

  /**
   * Parse the environmentContextName from a environment_context resource.
   *
   * @param {String} environmentContextName
   *   A fully-qualified path representing a environment_context resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromEnvironmentContextName(environmentContextName) {
    return this._pathTemplates.environmentContextPathTemplate.match(
      environmentContextName
    ).session;
  }

  /**
   * Parse the environmentContextName from a environment_context resource.
   *
   * @param {String} environmentContextName
   *   A fully-qualified path representing a environment_context resources.
   * @returns {String} - A string representing the context.
   */
  matchContextFromEnvironmentContextName(environmentContextName) {
    return this._pathTemplates.environmentContextPathTemplate.match(
      environmentContextName
    ).context;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).project;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the environment.
   */
  matchEnvironmentFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).environment;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).user;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).session;
  }

  /**
   * Parse the sessionName from a session resource.
   *
   * @param {String} sessionName
   *   A fully-qualified path representing a session resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromSessionName(sessionName) {
    return this._pathTemplates.sessionPathTemplate.match(sessionName).project;
  }

  /**
   * Parse the sessionName from a session resource.
   *
   * @param {String} sessionName
   *   A fully-qualified path representing a session resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromSessionName(sessionName) {
    return this._pathTemplates.sessionPathTemplate.match(sessionName).session;
  }
}

module.exports = ContextsClient;
