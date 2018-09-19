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

const gapicConfig = require('./documents_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Manages documents of a knowledge base.
 *
 * @class
 * @memberof v2beta1
 */
class DocumentsClient {
  /**
   * Construct an instance of DocumentsClient.
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
    const protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/dialogflow/v2beta1/document.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      knowledgeBasePathTemplate: new gax.PathTemplate(
        'projects/{project}/knowledgeBases/{knowledge_base}'
      ),
      documentPathTemplate: new gax.PathTemplate(
        'projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listDocuments: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'documents'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/dialogflow/v2beta1/document.proto'
      ),
      protoFilesRoot
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const createDocumentResponse = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2beta1.Document'
    );
    const createDocumentMetadata = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata'
    );
    const deleteDocumentResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const deleteDocumentMetadata = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata'
    );

    this._descriptors.longrunning = {
      createDocument: new gax.LongrunningDescriptor(
        this.operationsClient,
        createDocumentResponse.decode.bind(createDocumentResponse),
        createDocumentMetadata.decode.bind(createDocumentMetadata)
      ),
      deleteDocument: new gax.LongrunningDescriptor(
        this.operationsClient,
        deleteDocumentResponse.decode.bind(deleteDocumentResponse),
        deleteDocumentMetadata.decode.bind(deleteDocumentMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.Documents',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.Documents.
    const documentsStub = gaxGrpc.createStub(
      protos.google.cloud.dialogflow.v2beta1.Documents,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const documentsStubMethods = [
      'listDocuments',
      'getDocument',
      'createDocument',
      'deleteDocument',
    ];
    for (let methodName of documentsStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        documentsStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
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
   * Returns the list of all documents of the knowledge base.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The knowledge base to list all documents for.
   *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
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
   *   The second parameter to the callback is Array of [Document]{@link google.cloud.dialogflow.v2beta1.Document}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDocumentsResponse]{@link google.cloud.dialogflow.v2beta1.ListDocumentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Document]{@link google.cloud.dialogflow.v2beta1.Document}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Document]{@link google.cloud.dialogflow.v2beta1.Document} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDocumentsResponse]{@link google.cloud.dialogflow.v2beta1.ListDocumentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.DocumentsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   *
   * client.listDocuments({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
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
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listDocuments(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDocuments({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDocuments(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listDocuments(request, options, callback);
  }

  /**
   * Equivalent to {@link listDocuments}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDocuments} continuously
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
   *   Required. The knowledge base to list all documents for.
   *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
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
   *   An object stream which emits an object representing [Document]{@link google.cloud.dialogflow.v2beta1.Document} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.DocumentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   * client.listDocumentsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDocumentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDocuments.createStream(
      this._innerApiCalls.listDocuments,
      request,
      options
    );
  }

  /**
   * Retrieves the specified document.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the document to retrieve.
   *   Format `projects/<Project ID>/knowledgeBases/<Knowledge Base
   *   ID>/documents/<Document ID>`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Document]{@link google.cloud.dialogflow.v2beta1.Document}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Document]{@link google.cloud.dialogflow.v2beta1.Document}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.DocumentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.documentPath('[PROJECT]', '[KNOWLEDGE_BASE]', '[DOCUMENT]');
   * client.getDocument({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDocument(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getDocument(request, options, callback);
  }

  /**
   * Creates a new document.
   *
   * Operation <response: Document,
   *            metadata: KnowledgeOperationMetadata>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The knoweldge base to create a document for.
   *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
   * @param {Object} request.document
   *   Required. The document to create.
   *
   *   This object should have the same structure as [Document]{@link google.cloud.dialogflow.v2beta1.Document}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.DocumentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   * const document = {};
   * const request = {
   *   parent: formattedParent,
   *   document: document,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createDocument(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.knowledgeBasePath('[PROJECT]', '[KNOWLEDGE_BASE]');
   * const document = {};
   * const request = {
   *   parent: formattedParent,
   *   document: document,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createDocument(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
   */
  createDocument(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createDocument(request, options, callback);
  }

  /**
   * Deletes the specified document.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: KnowledgeOperationMetadata>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the document to delete.
   *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base
   *   ID>/documents/<Document ID>`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.DocumentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.documentPath('[PROJECT]', '[KNOWLEDGE_BASE]', '[DOCUMENT]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteDocument({name: formattedName})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedName = client.documentPath('[PROJECT]', '[KNOWLEDGE_BASE]', '[DOCUMENT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteDocument({name: formattedName})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
   */
  deleteDocument(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteDocument(request, options, callback);
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
   * Return a fully-qualified document resource name string.
   *
   * @param {String} project
   * @param {String} knowledgeBase
   * @param {String} document
   * @returns {String}
   */
  documentPath(project, knowledgeBase, document) {
    return this._pathTemplates.documentPathTemplate.render({
      project: project,
      knowledge_base: knowledgeBase,
      document: document,
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
   * Parse the documentName from a document resource.
   *
   * @param {String} documentName
   *   A fully-qualified path representing a document resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDocumentName(documentName) {
    return this._pathTemplates.documentPathTemplate.match(documentName).project;
  }

  /**
   * Parse the documentName from a document resource.
   *
   * @param {String} documentName
   *   A fully-qualified path representing a document resources.
   * @returns {String} - A string representing the knowledge_base.
   */
  matchKnowledgeBaseFromDocumentName(documentName) {
    return this._pathTemplates.documentPathTemplate.match(documentName)
      .knowledge_base;
  }

  /**
   * Parse the documentName from a document resource.
   *
   * @param {String} documentName
   *   A fully-qualified path representing a document resources.
   * @returns {String} - A string representing the document.
   */
  matchDocumentFromDocumentName(documentName) {
    return this._pathTemplates.documentPathTemplate.match(documentName)
      .document;
  }
}

module.exports = DocumentsClient;
