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

const gapicConfig = require('./contexts_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
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
 * requests specified by the `lifespan_count` parameter, or after 10 minutes
 * if no intents are matched for a `DetectIntent` request.
 *
 * For more information about contexts, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/contexts).
 *
 * @class
 * @memberof v2
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
        'google/cloud/dialogflow/v2/context.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      sessionPathTemplate: new gax.PathTemplate(
        'projects/{project}/agent/sessions/{session}'
      ),
      contextPathTemplate: new gax.PathTemplate(
        'projects/{project}/agent/sessions/{session}/contexts/{context}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listContexts: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'contexts'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2.Contexts',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2.Contexts.
    var contextsStub = gaxGrpc.createStub(
      protos.google.cloud.dialogflow.v2.Contexts,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var contextsStubMethods = [
      'listContexts',
      'getContext',
      'createContext',
      'updateContext',
      'deleteContext',
      'deleteAllContexts',
    ];
    for (let methodName of contextsStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        contextsStub.then(
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
   * Returns the list of all contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to list all contexts from.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
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
   *   The second parameter to the callback is Array of [Context]{@link google.cloud.dialogflow.v2.Context}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListContextsResponse]{@link google.cloud.dialogflow.v2.ListContextsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Context]{@link google.cloud.dialogflow.v2.Context}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Context]{@link google.cloud.dialogflow.v2.Context} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListContextsResponse]{@link google.cloud.dialogflow.v2.ListContextsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   *
   * client.listContexts({parent: formattedParent})
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
   * var formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
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
    options = options || {};

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
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
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
   *   An object stream which emits an object representing [Context]{@link google.cloud.dialogflow.v2.Context} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
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
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.contextPath('[PROJECT]', '[SESSION]', '[CONTEXT]');
   * client.getContext({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
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
    options = options || {};

    return this._innerApiCalls.getContext(request, options, callback);
  }

  /**
   * Creates a context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The session to create a context for.
   *   Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
   * @param {Object} request.context
   *   Required. The context to create.
   *
   *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2.Context}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   * var context = {};
   * var request = {
   *   parent: formattedParent,
   *   context: context,
   * };
   * client.createContext(request)
   *   .then(responses => {
   *     var response = responses[0];
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
    options = options || {};

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
   *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2.Context}
   * @param {Object} [request.updateMask]
   *   Optional. The mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Context]{@link google.cloud.dialogflow.v2.Context}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var context = {};
   * client.updateContext({context: context})
   *   .then(responses => {
   *     var response = responses[0];
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
    options = options || {};

    return this._innerApiCalls.updateContext(request, options, callback);
  }

  /**
   * Deletes the specified context.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the context to delete. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
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
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.contextPath('[PROJECT]', '[SESSION]', '[CONTEXT]');
   * client.deleteContext({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteContext(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteContext(request, options, callback);
  }

  /**
   * Deletes all active contexts in the specified session.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the session to delete all contexts from. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>`.
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
   * const dialogflow = require('dialogflow.v2');
   *
   * var client = new dialogflow.v2.ContextsClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
   * client.deleteAllContexts({parent: formattedParent}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAllContexts(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteAllContexts(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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
}

module.exports = ContextsClient;
