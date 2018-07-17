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

const gapicConfig = require('./entity_types_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Entities are extracted from user input and represent parameters that are
 * meaningful to your application. For example, a date range, a proper name
 * such as a geographic location or landmark, and so on. Entities represent
 * actionable data for your application.
 *
 * When you define an entity, you can also include synonyms that all map to
 * that entity. For example, "soft drink", "soda", "pop", and so on.
 *
 * There are three types of entities:
 *
 * *   **System** - entities that are defined by the Dialogflow API for common
 *     data types such as date, time, currency, and so on. A system entity is
 *     represented by the `EntityType` type.
 *
 * *   **Developer** - entities that are defined by you that represent
 *     actionable data that is meaningful to your application. For example,
 *     you could define a `pizza.sauce` entity for red or white pizza sauce,
 *     a `pizza.cheese` entity for the different types of cheese on a pizza,
 *     a `pizza.topping` entity for different toppings, and so on. A developer
 *     entity is represented by the `EntityType` type.
 *
 * *   **User** - entities that are built for an individual user such as
 *     favorites, preferences, playlists, and so on. A user entity is
 *     represented by the SessionEntityType type.
 *
 * For more information about entity types, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/entities).
 *
 * @class
 * @memberof v2beta1
 */
class EntityTypesClient {
  /**
   * Construct an instance of EntityTypesClient.
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
        'google/cloud/dialogflow/v2beta1/entity_type.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectAgentPathTemplate: new gax.PathTemplate(
        'projects/{project}/agent'
      ),
      entityTypePathTemplate: new gax.PathTemplate(
        'projects/{project}/agent/entityTypes/{entity_type}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listEntityTypes: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'entityTypes'
      ),
    };
    var protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/dialogflow/v2beta1/entity_type.proto'
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

    var batchUpdateEntityTypesResponse = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2beta1.BatchUpdateEntityTypesResponse'
    );
    var batchUpdateEntityTypesMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );
    var batchDeleteEntityTypesResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var batchDeleteEntityTypesMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );
    var batchCreateEntitiesResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var batchCreateEntitiesMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );
    var batchUpdateEntitiesResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var batchUpdateEntitiesMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );
    var batchDeleteEntitiesResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var batchDeleteEntitiesMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );

    this._descriptors.longrunning = {
      batchUpdateEntityTypes: new gax.LongrunningDescriptor(
        this.operationsClient,
        batchUpdateEntityTypesResponse.decode.bind(
          batchUpdateEntityTypesResponse
        ),
        batchUpdateEntityTypesMetadata.decode.bind(
          batchUpdateEntityTypesMetadata
        )
      ),
      batchDeleteEntityTypes: new gax.LongrunningDescriptor(
        this.operationsClient,
        batchDeleteEntityTypesResponse.decode.bind(
          batchDeleteEntityTypesResponse
        ),
        batchDeleteEntityTypesMetadata.decode.bind(
          batchDeleteEntityTypesMetadata
        )
      ),
      batchCreateEntities: new gax.LongrunningDescriptor(
        this.operationsClient,
        batchCreateEntitiesResponse.decode.bind(batchCreateEntitiesResponse),
        batchCreateEntitiesMetadata.decode.bind(batchCreateEntitiesMetadata)
      ),
      batchUpdateEntities: new gax.LongrunningDescriptor(
        this.operationsClient,
        batchUpdateEntitiesResponse.decode.bind(batchUpdateEntitiesResponse),
        batchUpdateEntitiesMetadata.decode.bind(batchUpdateEntitiesMetadata)
      ),
      batchDeleteEntities: new gax.LongrunningDescriptor(
        this.operationsClient,
        batchDeleteEntitiesResponse.decode.bind(batchDeleteEntitiesResponse),
        batchDeleteEntitiesMetadata.decode.bind(batchDeleteEntitiesMetadata)
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.EntityTypes',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.EntityTypes.
    var entityTypesStub = gaxGrpc.createStub(
      protos.google.cloud.dialogflow.v2beta1.EntityTypes,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var entityTypesStubMethods = [
      'listEntityTypes',
      'getEntityType',
      'createEntityType',
      'updateEntityType',
      'deleteEntityType',
      'batchUpdateEntityTypes',
      'batchDeleteEntityTypes',
      'batchCreateEntities',
      'batchUpdateEntities',
      'batchDeleteEntities',
    ];
    for (let methodName of entityTypesStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        entityTypesStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
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
   * Returns the list of all entity types in the specified agent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The agent to list all entity types from.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} [request.languageCode]
   *   Optional. The language to list entity synonyms for. If not specified,
   *   the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   *   The second parameter to the callback is Array of [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListEntityTypesResponse]{@link google.cloud.dialogflow.v2beta1.ListEntityTypesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListEntityTypesResponse]{@link google.cloud.dialogflow.v2beta1.ListEntityTypesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   *
   * client.listEntityTypes({parent: formattedParent})
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
   * var formattedParent = client.projectAgentPath('[PROJECT]');
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
   *     return client.listEntityTypes(nextRequest, options).then(callback);
   *   }
   * }
   * client.listEntityTypes({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listEntityTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listEntityTypes(request, options, callback);
  }

  /**
   * Equivalent to {@link listEntityTypes}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listEntityTypes} continuously
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
   *   Required. The agent to list all entity types from.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} [request.languageCode]
   *   Optional. The language to list entity synonyms for. If not specified,
   *   the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   *   An object stream which emits an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   * client.listEntityTypesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listEntityTypesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listEntityTypes.createStream(
      this._innerApiCalls.listEntityTypes,
      request,
      options
    );
  }

  /**
   * Retrieves the specified entity type.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entity type.
   *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
   * @param {string} [request.languageCode]
   *   Optional. The language to retrieve entity synonyms for. If not specified,
   *   the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * client.getEntityType({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getEntityType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getEntityType(request, options, callback);
  }

  /**
   * Creates an entity type in the specified agent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The agent to create a entity type for.
   *   Format: `projects/<Project ID>/agent`.
   * @param {Object} request.entityType
   *   Required. The entity type to create.
   *
   *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entity_type`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   * var entityType = {};
   * var request = {
   *   parent: formattedParent,
   *   entityType: entityType,
   * };
   * client.createEntityType(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createEntityType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createEntityType(request, options, callback);
  }

  /**
   * Updates the specified entity type.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.entityType
   *   Required. The entity type to update.
   *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
   *
   *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entity_type`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   *   The second parameter to the callback is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EntityType]{@link google.cloud.dialogflow.v2beta1.EntityType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var entityType = {};
   * client.updateEntityType({entityType: entityType})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateEntityType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateEntityType(request, options, callback);
  }

  /**
   * Deletes the specified entity type.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entity type to delete.
   *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
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
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * client.deleteEntityType({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteEntityType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteEntityType(request, options, callback);
  }

  /**
   * Updates/Creates multiple entity types in the specified agent.
   *
   * Operation <response: BatchUpdateEntityTypesResponse,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the agent to update or create entity types in.
   *   Format: `projects/<Project ID>/agent`.
   * @param {string} [request.entityTypeBatchUri]
   *   The URI to a Google Cloud Storage file containing entity types to update
   *   or create. The file format can either be a serialized proto (of
   *   EntityBatch type) or a JSON object. Note: The URI must start with
   *   "gs://".
   * @param {Object} [request.entityTypeBatchInline]
   *   The collection of entity type to update or create.
   *
   *   This object should have the same structure as [EntityTypeBatch]{@link google.cloud.dialogflow.v2beta1.EntityTypeBatch}
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entity_types`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   *
   * // Handle the operation using the promise pattern.
   * client.batchUpdateEntityTypes({parent: formattedParent})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchUpdateEntityTypes({parent: formattedParent})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  batchUpdateEntityTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchUpdateEntityTypes(
      request,
      options,
      callback
    );
  }

  /**
   * Deletes entity types in the specified agent.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the agent to delete all entities types for. Format:
   *   `projects/<Project ID>/agent`.
   * @param {string[]} request.entityTypeNames
   *   Required. The names entity types to delete. All names must point to the
   *   same agent as `parent`.
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
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   * var entityTypeNames = [];
   * var request = {
   *   parent: formattedParent,
   *   entityTypeNames: entityTypeNames,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchDeleteEntityTypes(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.projectAgentPath('[PROJECT]');
   * var entityTypeNames = [];
   * var request = {
   *   parent: formattedParent,
   *   entityTypeNames: entityTypeNames,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchDeleteEntityTypes(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  batchDeleteEntityTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchDeleteEntityTypes(
      request,
      options,
      callback
    );
  }

  /**
   * Creates multiple new entities in the specified entity type (extends the
   * existing collection of entries).
   *
   * Operation <response: google.protobuf.Empty>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the entity type to create entities in. Format:
   *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {Object[]} request.entities
   *   Required. The collection of entities to create.
   *
   *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2beta1.Entity}
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entities`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entities = [];
   * var request = {
   *   parent: formattedParent,
   *   entities: entities,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchCreateEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entities = [];
   * var request = {
   *   parent: formattedParent,
   *   entities: entities,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchCreateEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  batchCreateEntities(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchCreateEntities(request, options, callback);
  }

  /**
   * Updates entities in the specified entity type (replaces the existing
   * collection of entries).
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the entity type to update the entities in. Format:
   *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {Object[]} request.entities
   *   Required. The collection of new entities to replace the existing entities.
   *
   *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2beta1.Entity}
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entities`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entities = [];
   * var request = {
   *   parent: formattedParent,
   *   entities: entities,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchUpdateEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entities = [];
   * var request = {
   *   parent: formattedParent,
   *   entities: entities,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchUpdateEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  batchUpdateEntities(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchUpdateEntities(request, options, callback);
  }

  /**
   * Deletes entities in the specified entity type.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the entity type to delete entries for. Format:
   *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   * @param {string[]} request.entityValues
   *   Required. The canonical `values` of the entities to delete. Note that
   *   these are not fully-qualified names, i.e. they don't start with
   *   `projects/<Project ID>`.
   * @param {string} [request.languageCode]
   *   Optional. The language of entity synonyms defined in `entities`. If not
   *   specified, the agent's default language is used.
   *   [More than a dozen
   *   languages](https://dialogflow.com/docs/reference/language) are supported.
   *   Note: languages must be enabled in the agent, before they can be used.
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
   * var client = new dialogflow.v2beta1.EntityTypesClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entityValues = [];
   * var request = {
   *   parent: formattedParent,
   *   entityValues: entityValues,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchDeleteEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
   * var entityValues = [];
   * var request = {
   *   parent: formattedParent,
   *   entityValues: entityValues,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchDeleteEntities(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  batchDeleteEntities(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchDeleteEntities(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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
   * Return a fully-qualified entity_type resource name string.
   *
   * @param {String} project
   * @param {String} entityType
   * @returns {String}
   */
  entityTypePath(project, entityType) {
    return this._pathTemplates.entityTypePathTemplate.render({
      project: project,
      entity_type: entityType,
    });
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

  /**
   * Parse the entityTypeName from a entity_type resource.
   *
   * @param {String} entityTypeName
   *   A fully-qualified path representing a entity_type resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEntityTypeName(entityTypeName) {
    return this._pathTemplates.entityTypePathTemplate.match(entityTypeName)
      .project;
  }

  /**
   * Parse the entityTypeName from a entity_type resource.
   *
   * @param {String} entityTypeName
   *   A fully-qualified path representing a entity_type resources.
   * @returns {String} - A string representing the entity_type.
   */
  matchEntityTypeFromEntityTypeName(entityTypeName) {
    return this._pathTemplates.entityTypePathTemplate.match(entityTypeName)
      .entity_type;
  }
}

module.exports = EntityTypesClient;
