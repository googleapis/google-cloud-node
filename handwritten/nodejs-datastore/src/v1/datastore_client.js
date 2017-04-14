/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var configData = require('./datastore_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'datastore.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.7.1';

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/datastore'
];

/**
 * Each RPC normalizes the partition IDs of the keys in its input entities,
 * and always returns entities with keys with normalized partition IDs.
 * This applies to all keys and entities, including those in values, except keys
 * with both an empty path and an empty or unset partition ID. Normalization of
 * input keys sets the project ID (if not already set) to the project ID from
 * the request.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link datastoreClient}
 *
 * @example
 * var datastoreV1 = require('@google-cloud/datastore').v1({
 *   // optional auth parameters.
 * });
 * var client = datastoreV1.datastoreClient();
 *
 * @class
 */
function DatastoreClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );

  var defaults = gaxGrpc.constructSettings(
      'google.datastore.v1.Datastore',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var datastoreStub = gaxGrpc.createStub(
      grpcClients.google.datastore.v1.Datastore,
      opts);
  var datastoreStubMethods = [
    'lookup',
    'runQuery',
    'beginTransaction',
    'commit',
    'rollback',
    'allocateIds'
  ];
  datastoreStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      datastoreStub.then(function(datastoreStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return datastoreStub[methodName].apply(datastoreStub, args);
        };
      }),
      defaults[methodName],
      null);
  });
}

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
DatastoreClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Looks up entities by key.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.projectId
 *   The ID of the project against which to make the request.
 * @param {Object} request.readOptions
 *   The options for this lookup request.
 *
 *   This object should have the same structure as [ReadOptions]{@link ReadOptions}
 * @param {Object[]} request.keys
 *   Keys of entities to look up.
 *
 *   This object should have the same structure as [Key]{@link Key}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [LookupResponse]{@link LookupResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LookupResponse]{@link LookupResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * var readOptions = {};
 * var keys = [];
 * var request = {
 *     projectId: projectId,
 *     readOptions: readOptions,
 *     keys: keys
 * };
 * client.lookup(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.lookup = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._lookup(request, options, callback);
};

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
 *   This object should have the same structure as [PartitionId]{@link PartitionId}
 * @param {Object} request.readOptions
 *   The options for this query.
 *
 *   This object should have the same structure as [ReadOptions]{@link ReadOptions}
 * @param {Object=} request.query
 *   The query to run.
 *
 *   This object should have the same structure as [Query]{@link Query}
 * @param {Object=} request.gqlQuery
 *   The GQL query to run.
 *
 *   This object should have the same structure as [GqlQuery]{@link GqlQuery}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [RunQueryResponse]{@link RunQueryResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [RunQueryResponse]{@link RunQueryResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * var partitionId = {};
 * var readOptions = {};
 * var request = {
 *     projectId: projectId,
 *     partitionId: partitionId,
 *     readOptions: readOptions
 * };
 * client.runQuery(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.runQuery = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._runQuery(request, options, callback);
};

/**
 * Begins a new transaction.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.projectId
 *   The ID of the project against which to make the request.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [BeginTransactionResponse]{@link BeginTransactionResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [BeginTransactionResponse]{@link BeginTransactionResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * client.beginTransaction({projectId: projectId}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.beginTransaction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._beginTransaction(request, options, callback);
};

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
 *   The number should be among the values of [Mode]{@link Mode}
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
 *   This object should have the same structure as [Mutation]{@link Mutation}
 * @param {string=} request.transaction
 *   The identifier of the transaction associated with the commit. A
 *   transaction identifier is returned by a call to
 *   {@link Datastore.BeginTransaction}.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [CommitResponse]{@link CommitResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [CommitResponse]{@link CommitResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * var mode = datastoreV1.CommitRequest.Mode.MODE_UNSPECIFIED;
 * var mutations = [];
 * var request = {
 *     projectId: projectId,
 *     mode: mode,
 *     mutations: mutations
 * };
 * client.commit(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.commit = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._commit(request, options, callback);
};

/**
 * Rolls back a transaction.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.projectId
 *   The ID of the project against which to make the request.
 * @param {string} request.transaction
 *   The transaction identifier, returned by a call to
 *   {@link Datastore.BeginTransaction}.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [RollbackResponse]{@link RollbackResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [RollbackResponse]{@link RollbackResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * var transaction = '';
 * var request = {
 *     projectId: projectId,
 *     transaction: transaction
 * };
 * client.rollback(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.rollback = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._rollback(request, options, callback);
};

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
 *   This object should have the same structure as [Key]{@link Key}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AllocateIdsResponse]{@link AllocateIdsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AllocateIdsResponse]{@link AllocateIdsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = datastoreV1.datastoreClient();
 * var projectId = '';
 * var keys = [];
 * var request = {
 *     projectId: projectId,
 *     keys: keys
 * };
 * client.allocateIds(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatastoreClient.prototype.allocateIds = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._allocateIds(request, options, callback);
};

function DatastoreClientBuilder(gaxGrpc) {
  if (!(this instanceof DatastoreClientBuilder)) {
    return new DatastoreClientBuilder(gaxGrpc);
  }

  var datastoreClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/datastore/v1/datastore.proto'
  }]);
  extend(this, datastoreClient.google.datastore.v1);


  /**
   * Build a new instance of {@link DatastoreClient}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   */
  this.datastoreClient = function(opts) {
    return new DatastoreClient(gaxGrpc, datastoreClient, opts);
  };
  extend(this.datastoreClient, DatastoreClient);
}
module.exports = DatastoreClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
