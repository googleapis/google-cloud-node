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

const gapicConfig = require('./intents_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * An intent represents a mapping between input from a user and an action to
 * be taken by your application. When you pass user input to the
 * DetectIntent (or
 * StreamingDetectIntent) method, the
 * Dialogflow API analyzes the input and searches
 * for a matching intent. If no match is found, the Dialogflow API returns a
 * fallback intent (`is_fallback` = true).
 *
 * You can provide additional information for the Dialogflow API to use to
 * match user input to an intent by adding the following to your intent.
 *
 * *   **Contexts** - provide additional context for intent analysis. For
 *     example, if an intent is related to an object in your application that
 *     plays music, you can provide a context to determine when to match the
 *     intent if the user input is "turn it off". You can include a context
 *     that matches the intent when there is previous user input of
 *     "play music", and not when there is previous user input of
 *     "turn on the light".
 *
 * *   **Events** - allow for matching an intent by using an event name
 *     instead of user input. Your application can provide an event name and
 *     related parameters to the Dialogflow API to match an intent. For
 *     example, when your application starts, you can send a welcome event
 *     with a user name parameter to the Dialogflow API to match an intent with
 *     a personalized welcome message for the user.
 *
 * *   **Training phrases** - provide examples of user input to train the
 *     Dialogflow API agent to better match intents.
 *
 * For more information about intents, see the
 * [Dialogflow
 * documentation](https://cloud.google.com/dialogflow/docs/intents-overview).
 *
 * @class
 * @memberof v2
 */
class IntentsClient {
  /**
   * Construct an instance of IntentsClient.
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
      agentPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agents/{agent}'
      ),
      intentPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent/intents/{intent}'
      ),
      projectAgentPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/agent'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listIntents: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'intents'
      ),
    };

    const protoFilesRoot = opts.fallback
      ? gaxModule.protobuf.Root.fromJSON(require('../../protos/protos.json'))
      : gaxModule.protobuf.loadSync(nodejsProtoPath);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gaxModule.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const batchUpdateIntentsResponse = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2.BatchUpdateIntentsResponse'
    );
    const batchUpdateIntentsMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );
    const batchDeleteIntentsResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const batchDeleteIntentsMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );

    this._descriptors.longrunning = {
      batchUpdateIntents: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        batchUpdateIntentsResponse.decode.bind(batchUpdateIntentsResponse),
        batchUpdateIntentsMetadata.decode.bind(batchUpdateIntentsMetadata)
      ),
      batchDeleteIntents: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        batchDeleteIntentsResponse.decode.bind(batchDeleteIntentsResponse),
        batchDeleteIntentsMetadata.decode.bind(batchDeleteIntentsMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2.Intents',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2.Intents.
    const intentsStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.dialogflow.v2.Intents')
        : protos.google.cloud.dialogflow.v2.Intents,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const intentsStubMethods = [
      'listIntents',
      'getIntent',
      'createIntent',
      'updateIntent',
      'deleteIntent',
      'batchUpdateIntents',
      'batchDeleteIntents',
    ];
    for (const methodName of intentsStubMethods) {
      const innerCallPromise = intentsStub.then(
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
        this._descriptors.page[methodName] ||
          this._descriptors.longrunning[methodName]
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
   * Returns the list of all intents in the specified agent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The agent to list all intents from.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} [request.languageCode]
   *   Optional. The language to list training phrases, parameters and rich
   *   messages for. If not specified, the agent's default language is used.
   *   [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
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
   *   The second parameter to the callback is Array of [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListIntentsResponse]{@link google.cloud.dialogflow.v2.ListIntentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Intent]{@link google.cloud.dialogflow.v2.Intent} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListIntentsResponse]{@link google.cloud.dialogflow.v2.ListIntentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   *
   * client.listIntents({parent: formattedParent})
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
   * const formattedParent = client.projectAgentPath('[PROJECT]');
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
   *     return client.listIntents(nextRequest, options).then(callback);
   *   }
   * }
   * client.listIntents({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listIntents(request, options, callback) {
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

    return this._innerApiCalls.listIntents(request, options, callback);
  }

  /**
   * Equivalent to {@link listIntents}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listIntents} continuously
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
   *   Required. The agent to list all intents from.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} [request.languageCode]
   *   Optional. The language to list training phrases, parameters and rich
   *   messages for. If not specified, the agent's default language is used.
   *   [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
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
   *   An object stream which emits an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * client.listIntentsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listIntentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listIntents.createStream(
      this._innerApiCalls.listIntents,
      request,
      options
    );
  }

  /**
   * Retrieves the specified intent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the intent.
   *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   * @param {string} [request.languageCode]
   *   Optional. The language to retrieve training phrases, parameters and rich
   *   messages for. If not specified, the agent's default language is used.
   *   [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
   * client.getIntent({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIntent(request, options, callback) {
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

    return this._innerApiCalls.getIntent(request, options, callback);
  }

  /**
   * Creates an intent in the specified agent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The agent to create a intent for.
   *   Format: `projects/<Project ID>/agent`.
   * @param {Object} request.intent
   *   Required. The intent to create.
   *
   *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2.Intent}
   * @param {string} [request.languageCode]
   *   Optional. The language of training phrases, parameters and rich messages
   *   defined in `intent`. If not specified, the agent's default language is
   *   used. [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const intent = {};
   * const request = {
   *   parent: formattedParent,
   *   intent: intent,
   * };
   * client.createIntent(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createIntent(request, options, callback) {
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

    return this._innerApiCalls.createIntent(request, options, callback);
  }

  /**
   * Updates the specified intent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.intent
   *   Required. The intent to update.
   *
   *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2.Intent}
   * @param {string} request.languageCode
   *   Optional. The language of training phrases, parameters and rich messages
   *   defined in `intent`. If not specified, the agent's default language is
   *   used. [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {Object} [request.updateMask]
   *   Optional. The mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Intent]{@link google.cloud.dialogflow.v2.Intent}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const intent = {};
   * const languageCode = '';
   * const request = {
   *   intent: intent,
   *   languageCode: languageCode,
   * };
   * client.updateIntent(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateIntent(request, options, callback) {
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
      'intent.name': request.intent.name,
    });

    return this._innerApiCalls.updateIntent(request, options, callback);
  }

  /**
   * Deletes the specified intent and its direct or indirect followup intents.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the intent to delete. If this intent has direct or
   *   indirect followup intents, we also delete them.
   *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
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
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
   * client.deleteIntent({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteIntent(request, options, callback) {
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

    return this._innerApiCalls.deleteIntent(request, options, callback);
  }

  /**
   * Updates/Creates multiple intents in the specified agent.
   *
   * Operation <response: BatchUpdateIntentsResponse>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the agent to update or create intents in.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} request.languageCode
   *   Optional. The language of training phrases, parameters and rich messages
   *   defined in `intents`. If not specified, the agent's default language is
   *   used. [Many
   *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
   *   are supported. Note: languages must be enabled in the agent before they can
   *   be used.
   * @param {string} [request.intentBatchUri]
   *   The URI to a Google Cloud Storage file containing intents to update or
   *   create. The file format can either be a serialized proto (of IntentBatch
   *   type) or JSON object. Note: The URI must start with "gs://".
   * @param {Object} [request.intentBatchInline]
   *   The collection of intents to update or create.
   *
   *   This object should have the same structure as [IntentBatch]{@link google.cloud.dialogflow.v2.IntentBatch}
   * @param {Object} [request.updateMask]
   *   Optional. The mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.intentView]
   *   Optional. The resource view to apply to the returned intent.
   *
   *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2.IntentView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const languageCode = '';
   * const request = {
   *   parent: formattedParent,
   *   languageCode: languageCode,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchUpdateIntents(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const languageCode = '';
   * const request = {
   *   parent: formattedParent,
   *   languageCode: languageCode,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchUpdateIntents(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const languageCode = '';
   * const request = {
   *   parent: formattedParent,
   *   languageCode: languageCode,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.batchUpdateIntents(request);
   *
   * const [response] = await operation.promise();
   */
  batchUpdateIntents(request, options, callback) {
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

    return this._innerApiCalls.batchUpdateIntents(request, options, callback);
  }

  /**
   * Deletes intents in the specified agent.
   *
   * Operation <response: google.protobuf.Empty>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the agent to delete all entities types for. Format:
   *   `projects/<Project ID>/agent`.
   * @param {Object[]} request.intents
   *   Required. The collection of intents to delete. Only intent `name` must be
   *   filled in.
   *
   *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2.Intent}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2.IntentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const intents = [];
   * const request = {
   *   parent: formattedParent,
   *   intents: intents,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchDeleteIntents(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const intents = [];
   * const request = {
   *   parent: formattedParent,
   *   intents: intents,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchDeleteIntents(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectAgentPath('[PROJECT]');
   * const intents = [];
   * const request = {
   *   parent: formattedParent,
   *   intents: intents,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.batchDeleteIntents(request);
   *
   * const [response] = await operation.promise();
   */
  batchDeleteIntents(request, options, callback) {
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

    return this._innerApiCalls.batchDeleteIntents(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified agent resource name string.
   *
   * @param {String} project
   * @param {String} agent
   * @returns {String}
   */
  agentPath(project, agent) {
    return this._pathTemplates.agentPathTemplate.render({
      project: project,
      agent: agent,
    });
  }

  /**
   * Return a fully-qualified intent resource name string.
   *
   * @param {String} project
   * @param {String} intent
   * @returns {String}
   */
  intentPath(project, intent) {
    return this._pathTemplates.intentPathTemplate.render({
      project: project,
      intent: intent,
    });
  }

  /**
   * Return a fully-qualified project_agent resource name string.
   *
   * @param {String} project
   * @returns {String}
   */
  projectAgentPath(project) {
    return this._pathTemplates.projectAgentPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the agentName from a agent resource.
   *
   * @param {String} agentName
   *   A fully-qualified path representing a agent resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAgentName(agentName) {
    return this._pathTemplates.agentPathTemplate.match(agentName).project;
  }

  /**
   * Parse the agentName from a agent resource.
   *
   * @param {String} agentName
   *   A fully-qualified path representing a agent resources.
   * @returns {String} - A string representing the agent.
   */
  matchAgentFromAgentName(agentName) {
    return this._pathTemplates.agentPathTemplate.match(agentName).agent;
  }

  /**
   * Parse the intentName from a intent resource.
   *
   * @param {String} intentName
   *   A fully-qualified path representing a intent resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromIntentName(intentName) {
    return this._pathTemplates.intentPathTemplate.match(intentName).project;
  }

  /**
   * Parse the intentName from a intent resource.
   *
   * @param {String} intentName
   *   A fully-qualified path representing a intent resources.
   * @returns {String} - A string representing the intent.
   */
  matchIntentFromIntentName(intentName) {
    return this._pathTemplates.intentPathTemplate.match(intentName).intent;
  }

  /**
   * Parse the projectAgentName from a project_agent resource.
   *
   * @param {String} projectAgentName
   *   A fully-qualified path representing a project_agent resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectAgentName(projectAgentName) {
    return this._pathTemplates.projectAgentPathTemplate.match(projectAgentName)
      .project;
  }
}

module.exports = IntentsClient;
