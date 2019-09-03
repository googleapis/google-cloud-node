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

const gapicConfig = require('./knowledge_bases_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Manages knowledge bases.
 *
 * Allows users to setup and maintain knowledge bases with their knowledge data.
 *
 * @class
 * @memberof v2beta1
 */
class KnowledgeBasesClient {
  /**
   * Construct an instance of KnowledgeBasesClient.
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
      knowledgeBasePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/knowledgeBases/{knowledge_base}'
      ),
      projectPathTemplate: new gaxModule.PathTemplate('projects/{project}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listKnowledgeBases: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'knowledgeBases'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.KnowledgeBases',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.KnowledgeBases.
    const knowledgeBasesStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.dialogflow.v2beta1.KnowledgeBases')
        : protos.google.cloud.dialogflow.v2beta1.KnowledgeBases,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const knowledgeBasesStubMethods = [
      'listKnowledgeBases',
      'getKnowledgeBase',
      'createKnowledgeBase',
      'deleteKnowledgeBase',
      'updateKnowledgeBase',
    ];
    for (const methodName of knowledgeBasesStubMethods) {
      const innerCallPromise = knowledgeBasesStub.then(
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
   * Returns the list of all knowledge bases of the specified agent.
   *
   * Note: The `projects.agent.knowledgeBases` resource is deprecated;
   * only use `projects.knowledgeBases`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project to list of knowledge bases for.
   *   Format: `projects/<Project ID>`.
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
   *   The second parameter to the callback is Array of [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListKnowledgeBasesResponse]{@link google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListKnowledgeBasesResponse]{@link google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listKnowledgeBases({parent: formattedParent})
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
   *     return client.listKnowledgeBases(nextRequest, options).then(callback);
   *   }
   * }
   * client.listKnowledgeBases({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listKnowledgeBases(request, options, callback) {
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

    return this._innerApiCalls.listKnowledgeBases(request, options, callback);
  }

  /**
   * Equivalent to {@link listKnowledgeBases}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listKnowledgeBases} continuously
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
   *   Required. The project to list of knowledge bases for.
   *   Format: `projects/<Project ID>`.
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
   *   An object stream which emits an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listKnowledgeBasesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listKnowledgeBasesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listKnowledgeBases.createStream(
      this._innerApiCalls.listKnowledgeBases,
      request,
      options
    );
  }

  /**
   * Retrieves the specified knowledge base.
   *
   * Note: The `projects.agent.knowledgeBases` resource is deprecated;
   * only use `projects.knowledgeBases`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the knowledge base to retrieve.
   *   Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   * client.getKnowledgeBase({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getKnowledgeBase(request, options, callback) {
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

    return this._innerApiCalls.getKnowledgeBase(request, options, callback);
  }

  /**
   * Creates a knowledge base.
   *
   * Note: The `projects.agent.knowledgeBases` resource is deprecated;
   * only use `projects.knowledgeBases`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project to create a knowledge base for.
   *   Format: `projects/<Project ID>`.
   * @param {Object} request.knowledgeBase
   *   Required. The knowledge base to create.
   *
   *   This object should have the same structure as [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const knowledgeBase = {};
   * const request = {
   *   parent: formattedParent,
   *   knowledgeBase: knowledgeBase,
   * };
   * client.createKnowledgeBase(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createKnowledgeBase(request, options, callback) {
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

    return this._innerApiCalls.createKnowledgeBase(request, options, callback);
  }

  /**
   * Deletes the specified knowledge base.
   *
   * Note: The `projects.agent.knowledgeBases` resource is deprecated;
   * only use `projects.knowledgeBases`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the knowledge base to delete.
   *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
   * @param {boolean} [request.force]
   *   Optional. Force deletes the knowledge base. When set to true, any documents
   *   in the knowledge base are also deleted.
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
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   * client.deleteKnowledgeBase({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteKnowledgeBase(request, options, callback) {
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

    return this._innerApiCalls.deleteKnowledgeBase(request, options, callback);
  }

  /**
   * Updates the specified knowledge base.
   *
   * Note: The `projects.agent.knowledgeBases` resource is deprecated;
   * only use `projects.knowledgeBases`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.knowledgeBase
   *   Required. The knowledge base to update.
   *
   *   This object should have the same structure as [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}
   * @param {Object} [request.updateMask]
   *   Optional. Not specified means `update all`.
   *   Currently, only `display_name` can be updated, an InvalidArgument will be
   *   returned for attempting to update other fields.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow');
   *
   * const client = new dialogflow.v2beta1.KnowledgeBasesClient({
   *   // optional auth parameters.
   * });
   *
   * const knowledgeBase = {};
   * client.updateKnowledgeBase({knowledgeBase: knowledgeBase})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateKnowledgeBase(request, options, callback) {
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
      'knowledge_base.name': request.knowledgeBase.name,
    });

    return this._innerApiCalls.updateKnowledgeBase(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified knowledge_base resource name string.
   *
   * @param {String} project
   * @param {String} knowledgeBase
   * @returns {String}
   */
  knowledgeBasePath(project, knowledgeBase) {
    return this._pathTemplates.knowledgeBasePathTemplate.render({
      project: project,
      knowledge_base: knowledgeBase,
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
   * Parse the knowledgeBaseName from a knowledge_base resource.
   *
   * @param {String} knowledgeBaseName
   *   A fully-qualified path representing a knowledge_base resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromKnowledgeBaseName(knowledgeBaseName) {
    return this._pathTemplates.knowledgeBasePathTemplate.match(
      knowledgeBaseName
    ).project;
  }

  /**
   * Parse the knowledgeBaseName from a knowledge_base resource.
   *
   * @param {String} knowledgeBaseName
   *   A fully-qualified path representing a knowledge_base resources.
   * @returns {String} - A string representing the knowledge_base.
   */
  matchKnowledgeBaseFromKnowledgeBaseName(knowledgeBaseName) {
    return this._pathTemplates.knowledgeBasePathTemplate.match(
      knowledgeBaseName
    ).knowledge_base;
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
}

module.exports = KnowledgeBasesClient;
