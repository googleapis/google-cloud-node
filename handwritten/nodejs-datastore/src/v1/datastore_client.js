// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const gapicConfig = require('./datastore_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Each RPC normalizes the partition IDs of the keys in its input entities,
 * and always returns entities with keys with normalized partition IDs.
 * This applies to all keys and entities, including those in values, except keys
 * with both an empty path and an empty or unset partition ID. Normalization of
 * input keys sets the project ID (if not already set) to the project ID from
 * the request.
 *
 * @class
 * @memberof v1
 */
class DatastoreClient {
  /**
   * Construct an instance of DatastoreClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *   usaing a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option above is not necessary.
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
      `gl-node/${process.version.node}`,
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
        'google/datastore/v1/datastore.proto'
      )
    );

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.datastore.v1.Datastore',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.datastore.v1.Datastore.
    var datastoreStub = gaxGrpc.createStub(
      protos.google.datastore.v1.Datastore,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var datastoreStubMethods = [
      'lookup',
      'runQuery',
      'beginTransaction',
      'commit',
      'rollback',
      'allocateIds',
      'reserveIds',
    ];
    for (let methodName of datastoreStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        datastoreStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        null
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'datastore.googleapis.com';
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
      'https://www.googleapis.com/auth/datastore',
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
   * Looks up entities by key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {Object[]} request.keys
   *   Keys of entities to look up.
   *
   *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
   * @param {Object} [request.readOptions]
   *   The options for this lookup request.
   *
   *   This object should have the same structure as [ReadOptions]{@link google.datastore.v1.ReadOptions}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [LookupResponse]{@link google.datastore.v1.LookupResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [LookupResponse]{@link google.datastore.v1.LookupResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var keys = [];
   * var request = {
   *   projectId: projectId,
   *   keys: keys,
   * };
   * client.lookup(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  lookup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.lookup(request, options, callback);
  }

  /**
   * Queries for entities.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {Object} request.partitionId
   *   Entities are partitioned into subsets, identified by a partition ID.
   *   Queries are scoped to a single partition.
   *   This partition ID is normalized with the standard default context
   *   partition ID.
   *
   *   This object should have the same structure as [PartitionId]{@link google.datastore.v1.PartitionId}
   * @param {Object} [request.readOptions]
   *   The options for this query.
   *
   *   This object should have the same structure as [ReadOptions]{@link google.datastore.v1.ReadOptions}
   * @param {Object} [request.query]
   *   The query to run.
   *
   *   This object should have the same structure as [Query]{@link google.datastore.v1.Query}
   * @param {Object} [request.gqlQuery]
   *   The GQL query to run.
   *
   *   This object should have the same structure as [GqlQuery]{@link google.datastore.v1.GqlQuery}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [RunQueryResponse]{@link google.datastore.v1.RunQueryResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [RunQueryResponse]{@link google.datastore.v1.RunQueryResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var partitionId = {};
   * var request = {
   *   projectId: projectId,
   *   partitionId: partitionId,
   * };
   * client.runQuery(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runQuery(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.runQuery(request, options, callback);
  }

  /**
   * Begins a new transaction.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {Object} [request.transactionOptions]
   *   Options for a new transaction.
   *
   *   This object should have the same structure as [TransactionOptions]{@link google.datastore.v1.TransactionOptions}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BeginTransactionResponse]{@link google.datastore.v1.BeginTransactionResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BeginTransactionResponse]{@link google.datastore.v1.BeginTransactionResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * client.beginTransaction({projectId: projectId})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  beginTransaction(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.beginTransaction(request, options, callback);
  }

  /**
   * Commits a transaction, optionally creating, deleting or modifying some
   * entities.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {number} request.mode
   *   The type of commit to perform. Defaults to `TRANSACTIONAL`.
   *
   *   The number should be among the values of [Mode]{@link google.datastore.v1.Mode}
   * @param {Object[]} request.mutations
   *   The mutations to perform.
   *
   *   When mode is `TRANSACTIONAL`, mutations affecting a single entity are
   *   applied in order. The following sequences of mutations affecting a single
   *   entity are not permitted in a single `Commit` request:
   *
   *   - `insert` followed by `insert`
   *   - `update` followed by `insert`
   *   - `upsert` followed by `insert`
   *   - `delete` followed by `update`
   *
   *   When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single
   *   entity.
   *
   *   This object should have the same structure as [Mutation]{@link google.datastore.v1.Mutation}
   * @param {string} [request.transaction]
   *   The identifier of the transaction associated with the commit. A
   *   transaction identifier is returned by a call to
   *   Datastore.BeginTransaction.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CommitResponse]{@link google.datastore.v1.CommitResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CommitResponse]{@link google.datastore.v1.CommitResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var mode = 'MODE_UNSPECIFIED';
   * var mutations = [];
   * var request = {
   *   projectId: projectId,
   *   mode: mode,
   *   mutations: mutations,
   * };
   * client.commit(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  commit(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.commit(request, options, callback);
  }

  /**
   * Rolls back a transaction.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {string} request.transaction
   *   The transaction identifier, returned by a call to
   *   Datastore.BeginTransaction.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [RollbackResponse]{@link google.datastore.v1.RollbackResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [RollbackResponse]{@link google.datastore.v1.RollbackResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var transaction = '';
   * var request = {
   *   projectId: projectId,
   *   transaction: transaction,
   * };
   * client.rollback(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  rollback(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.rollback(request, options, callback);
  }

  /**
   * Allocates IDs for the given keys, which is useful for referencing an entity
   * before it is inserted.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {Object[]} request.keys
   *   A list of keys with incomplete key paths for which to allocate IDs.
   *   No key may be reserved/read-only.
   *
   *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AllocateIdsResponse]{@link google.datastore.v1.AllocateIdsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AllocateIdsResponse]{@link google.datastore.v1.AllocateIdsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var keys = [];
   * var request = {
   *   projectId: projectId,
   *   keys: keys,
   * };
   * client.allocateIds(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  allocateIds(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.allocateIds(request, options, callback);
  }

  /**
   * Prevents the supplied keys' IDs from being auto-allocated by Cloud
   * Datastore.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The ID of the project against which to make the request.
   * @param {Object[]} request.keys
   *   A list of keys with complete key paths whose numeric IDs should not be
   *   auto-allocated.
   *
   *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
   * @param {string} [request.databaseId]
   *   If not empty, the ID of the database against which to make the request.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ReserveIdsResponse]{@link google.datastore.v1.ReserveIdsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ReserveIdsResponse]{@link google.datastore.v1.ReserveIdsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datastore = require('@google-cloud/datastore');
   *
   * var client = new datastore.v1.DatastoreClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var keys = [];
   * var request = {
   *   projectId: projectId,
   *   keys: keys,
   * };
   * client.reserveIds(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  reserveIds(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.reserveIds(request, options, callback);
  }
}

module.exports = DatastoreClient;
