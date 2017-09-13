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
 * https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto,
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

var configData = require('./spanner_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'spanner.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.0.5';

var STREAM_DESCRIPTORS = {
  executeStreamingSql: new gax.StreamDescriptor(gax.StreamType.SERVER_STREAMING),
  streamingRead: new gax.StreamDescriptor(gax.StreamType.SERVER_STREAMING)
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/spanner.data'
];

/**
 * Cloud Spanner API
 *
 * The Cloud Spanner API can be used to manage sessions and execute
 * transactions on data stored in Cloud Spanner databases.
 *
 *
 * @class
 */
function SpannerClient(gaxGrpc, grpcClients, opts) {
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
      'google.spanner.v1.Spanner',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var spannerStub = gaxGrpc.createStub(
      grpcClients.google.spanner.v1.Spanner,
      opts);
  var spannerStubMethods = [
    'createSession',
    'getSession',
    'deleteSession',
    'executeSql',
    'executeStreamingSql',
    'read',
    'streamingRead',
    'beginTransaction',
    'commit',
    'rollback'
  ];
  spannerStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      spannerStub.then(function(spannerStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return spannerStub[methodName].apply(spannerStub, args);
        };
      }),
      defaults[methodName],
      STREAM_DESCRIPTORS[methodName]);
  });
}

// Path templates

var DATABASE_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instances/{instance}/databases/{database}');

var SESSION_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instances/{instance}/databases/{database}/sessions/{session}');

/**
 * Returns a fully-qualified database resource name string.
 * @param {String} project
 * @param {String} instance
 * @param {String} database
 * @returns {String}
 */
SpannerClient.prototype.databasePath = function(project, instance, database) {
  return DATABASE_PATH_TEMPLATE.render({
    project: project,
    instance: instance,
    database: database
  });
};

/**
 * Returns a fully-qualified session resource name string.
 * @param {String} project
 * @param {String} instance
 * @param {String} database
 * @param {String} session
 * @returns {String}
 */
SpannerClient.prototype.sessionPath = function(project, instance, database, session) {
  return SESSION_PATH_TEMPLATE.render({
    project: project,
    instance: instance,
    database: database,
    session: session
  });
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the project.
 */
SpannerClient.prototype.matchProjectFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).project;
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the instance.
 */
SpannerClient.prototype.matchInstanceFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).instance;
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the database.
 */
SpannerClient.prototype.matchDatabaseFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).database;
};

/**
 * Parses the sessionName from a session resource.
 * @param {String} sessionName
 *   A fully-qualified path representing a session resources.
 * @returns {String} - A string representing the project.
 */
SpannerClient.prototype.matchProjectFromSessionName = function(sessionName) {
  return SESSION_PATH_TEMPLATE.match(sessionName).project;
};

/**
 * Parses the sessionName from a session resource.
 * @param {String} sessionName
 *   A fully-qualified path representing a session resources.
 * @returns {String} - A string representing the instance.
 */
SpannerClient.prototype.matchInstanceFromSessionName = function(sessionName) {
  return SESSION_PATH_TEMPLATE.match(sessionName).instance;
};

/**
 * Parses the sessionName from a session resource.
 * @param {String} sessionName
 *   A fully-qualified path representing a session resources.
 * @returns {String} - A string representing the database.
 */
SpannerClient.prototype.matchDatabaseFromSessionName = function(sessionName) {
  return SESSION_PATH_TEMPLATE.match(sessionName).database;
};

/**
 * Parses the sessionName from a session resource.
 * @param {String} sessionName
 *   A fully-qualified path representing a session resources.
 * @returns {String} - A string representing the session.
 */
SpannerClient.prototype.matchSessionFromSessionName = function(sessionName) {
  return SESSION_PATH_TEMPLATE.match(sessionName).session;
};

/**
 * Get the project ID used by this class.
 * @param {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
SpannerClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Creates a new session. A session can be used to perform
 * transactions that read and/or modify data in a Cloud Spanner database.
 * Sessions are meant to be reused for many consecutive
 * transactions.
 *
 * Sessions can only execute one transaction at a time. To execute
 * multiple concurrent read-write/write-only transactions, create
 * multiple sessions. Note that standalone reads and queries use a
 * transaction internally, and count toward the one transaction
 * limit.
 *
 * Cloud Spanner limits the number of sessions that can exist at any given
 * time; thus, it is a good idea to delete idle and/or unneeded sessions.
 * Aside from explicit deletes, Cloud Spanner can delete sessions for which no
 * operations are sent for more than an hour. If a session is deleted,
 * requests to it return `NOT_FOUND`.
 *
 * Idle sessions can be kept alive by sending a trivial SQL query
 * periodically, e.g., `"SELECT 1"`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Required. The database in which the new session is created.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Session]{@link Session}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Session]{@link Session}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedDatabase = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * client.createSession({database: formattedDatabase}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.createSession = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createSession(request, options, callback);
};

/**
 * Gets a session. Returns `NOT_FOUND` if the session does not exist.
 * This is mainly useful for determining whether a session is still
 * alive.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the session to retrieve.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Session]{@link Session}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Session]{@link Session}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * client.getSession({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.getSession = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getSession(request, options, callback);
};

/**
 * Ends a session, releasing server resources associated with it.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the session to delete.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * client.deleteSession({name: formattedName}).catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.deleteSession = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteSession(request, options, callback);
};

/**
 * Executes an SQL query, returning all rows in a single reply. This
 * method cannot be used to return a result set larger than 10 MiB;
 * if the query yields more data than that, the query fails with
 * a `FAILED_PRECONDITION` error.
 *
 * Queries inside read-write transactions might return `ABORTED`. If
 * this occurs, the application should restart the transaction from
 * the beginning. See {@link Transaction} for more details.
 *
 * Larger result sets can be fetched in streaming fashion by calling
 * {@link ExecuteStreamingSql} instead.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the SQL query should be performed.
 * @param {string} request.sql
 *   Required. The SQL query string.
 * @param {Object=} request.transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 * @param {Object=} request.params
 *   The SQL query string can contain parameter placeholders. A parameter
 *   placeholder consists of `'@'` followed by the parameter
 *   name. Parameter names consist of any combination of letters,
 *   numbers, and underscores.
 *
 *   Parameters can appear anywhere that a literal value is expected.  The same
 *   parameter name can be used more than once, for example:
 *     `"WHERE id > @msg_id AND id < @msg_id + 100"`
 *
 *   It is an error to execute an SQL query with unbound parameters.
 *
 *   Parameter values are specified using `params`, which is a JSON
 *   object whose keys are parameter names, and whose values are the
 *   corresponding parameter values.
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 * @param {Object.<string, Object>=} request.paramTypes
 *   It is not always possible for Cloud Spanner to infer the right SQL type
 *   from a JSON value.  For example, values of type `BYTES` and values
 *   of type `STRING` both appear in {@link params} as JSON strings.
 *
 *   In these cases, `param_types` can be used to specify the exact
 *   SQL type for some or all of the SQL query parameters. See the
 *   definition of {@link Type} for more information
 *   about SQL types.
 * @param {string=} request.resumeToken
 *   If this request is resuming a previously interrupted SQL query
 *   execution, `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new SQL query execution to resume where the last one left
 *   off. The rest of the request parameters must exactly match the
 *   request that yielded this token.
 * @param {number=} request.queryMode
 *   Used to control the amount of debugging information returned in
 *   {@link ResultSetStats}.
 *
 *   The number should be among the values of [QueryMode]{@link QueryMode}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [ResultSet]{@link ResultSet}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ResultSet]{@link ResultSet}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var sql = '';
 * var request = {
 *     session: formattedSession,
 *     sql: sql
 * };
 * client.executeSql(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.executeSql = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._executeSql(request, options, callback);
};

/**
 * Like {@link ExecuteSql}, except returns the result
 * set as a stream. Unlike {@link ExecuteSql}, there
 * is no limit on the size of the returned result set. However, no
 * individual row in the result set can exceed 100 MiB, and no
 * column value can exceed 10 MiB.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the SQL query should be performed.
 * @param {string} request.sql
 *   Required. The SQL query string.
 * @param {Object=} request.transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 * @param {Object=} request.params
 *   The SQL query string can contain parameter placeholders. A parameter
 *   placeholder consists of `'@'` followed by the parameter
 *   name. Parameter names consist of any combination of letters,
 *   numbers, and underscores.
 *
 *   Parameters can appear anywhere that a literal value is expected.  The same
 *   parameter name can be used more than once, for example:
 *     `"WHERE id > @msg_id AND id < @msg_id + 100"`
 *
 *   It is an error to execute an SQL query with unbound parameters.
 *
 *   Parameter values are specified using `params`, which is a JSON
 *   object whose keys are parameter names, and whose values are the
 *   corresponding parameter values.
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 * @param {Object.<string, Object>=} request.paramTypes
 *   It is not always possible for Cloud Spanner to infer the right SQL type
 *   from a JSON value.  For example, values of type `BYTES` and values
 *   of type `STRING` both appear in {@link params} as JSON strings.
 *
 *   In these cases, `param_types` can be used to specify the exact
 *   SQL type for some or all of the SQL query parameters. See the
 *   definition of {@link Type} for more information
 *   about SQL types.
 * @param {string=} request.resumeToken
 *   If this request is resuming a previously interrupted SQL query
 *   execution, `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new SQL query execution to resume where the last one left
 *   off. The rest of the request parameters must exactly match the
 *   request that yielded this token.
 * @param {number=} request.queryMode
 *   Used to control the amount of debugging information returned in
 *   {@link ResultSetStats}.
 *
 *   The number should be among the values of [QueryMode]{@link QueryMode}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @returns {Stream}
 *   An object stream which emits [PartialResultSet]{@link PartialResultSet} on 'data' event.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var sql = '';
 * var request = {
 *     session: formattedSession,
 *     sql: sql
 * };
 * client.executeStreamingSql(request).on('data', function(response) {
 *   // doThingsWith(response)
 * });
 */
SpannerClient.prototype.executeStreamingSql = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return this._executeStreamingSql(request, options);
};

/**
 * Reads rows from the database using key lookups and scans, as a
 * simple key/value style alternative to
 * {@link ExecuteSql}.  This method cannot be used to
 * return a result set larger than 10 MiB; if the read matches more
 * data than that, the read fails with a `FAILED_PRECONDITION`
 * error.
 *
 * Reads inside read-write transactions might return `ABORTED`. If
 * this occurs, the application should restart the transaction from
 * the beginning. See {@link Transaction} for more details.
 *
 * Larger result sets can be yielded in streaming fashion by calling
 * {@link StreamingRead} instead.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the read should be performed.
 * @param {string} request.table
 *   Required. The name of the table in the database to be read.
 * @param {string[]} request.columns
 *   The columns of {@link table} to be returned for each row matching
 *   this request.
 * @param {Object} request.keySet
 *   Required. `key_set` identifies the rows to be yielded. `key_set` names the
 *   primary keys of the rows in {@link table} to be yielded, unless {@link index}
 *   is present. If {@link index} is present, then {@link key_set} instead names
 *   index keys in {@link index}.
 *
 *   Rows are yielded in table primary key order (if {@link index} is empty)
 *   or index key order (if {@link index} is non-empty).
 *
 *   It is not an error for the `key_set` to name rows that do not
 *   exist in the database. Read yields nothing for nonexistent rows.
 *
 *   This object should have the same structure as [KeySet]{@link KeySet}
 * @param {Object=} request.transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 * @param {string=} request.index
 *   If non-empty, the name of an index on {@link table}. This index is
 *   used instead of the table primary key when interpreting {@link key_set}
 *   and sorting result rows. See {@link key_set} for further information.
 * @param {number=} request.limit
 *   If greater than zero, only the first `limit` rows are yielded. If `limit`
 *   is zero, the default is no limit.
 * @param {string=} request.resumeToken
 *   If this request is resuming a previously interrupted read,
 *   `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new read to resume where the last read left off. The
 *   rest of the request parameters must exactly match the request
 *   that yielded this token.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [ResultSet]{@link ResultSet}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ResultSet]{@link ResultSet}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var table = '';
 * var columns = [];
 * var keySet = {};
 * var request = {
 *     session: formattedSession,
 *     table: table,
 *     columns: columns,
 *     keySet: keySet
 * };
 * client.read(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.read = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._read(request, options, callback);
};

/**
 * Like {@link Read}, except returns the result set as a
 * stream. Unlike {@link Read}, there is no limit on the
 * size of the returned result set. However, no individual row in
 * the result set can exceed 100 MiB, and no column value can exceed
 * 10 MiB.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the read should be performed.
 * @param {string} request.table
 *   Required. The name of the table in the database to be read.
 * @param {string[]} request.columns
 *   The columns of {@link table} to be returned for each row matching
 *   this request.
 * @param {Object} request.keySet
 *   Required. `key_set` identifies the rows to be yielded. `key_set` names the
 *   primary keys of the rows in {@link table} to be yielded, unless {@link index}
 *   is present. If {@link index} is present, then {@link key_set} instead names
 *   index keys in {@link index}.
 *
 *   Rows are yielded in table primary key order (if {@link index} is empty)
 *   or index key order (if {@link index} is non-empty).
 *
 *   It is not an error for the `key_set` to name rows that do not
 *   exist in the database. Read yields nothing for nonexistent rows.
 *
 *   This object should have the same structure as [KeySet]{@link KeySet}
 * @param {Object=} request.transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 * @param {string=} request.index
 *   If non-empty, the name of an index on {@link table}. This index is
 *   used instead of the table primary key when interpreting {@link key_set}
 *   and sorting result rows. See {@link key_set} for further information.
 * @param {number=} request.limit
 *   If greater than zero, only the first `limit` rows are yielded. If `limit`
 *   is zero, the default is no limit.
 * @param {string=} request.resumeToken
 *   If this request is resuming a previously interrupted read,
 *   `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new read to resume where the last read left off. The
 *   rest of the request parameters must exactly match the request
 *   that yielded this token.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @returns {Stream}
 *   An object stream which emits [PartialResultSet]{@link PartialResultSet} on 'data' event.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var table = '';
 * var columns = [];
 * var keySet = {};
 * var request = {
 *     session: formattedSession,
 *     table: table,
 *     columns: columns,
 *     keySet: keySet
 * };
 * client.streamingRead(request).on('data', function(response) {
 *   // doThingsWith(response)
 * });
 */
SpannerClient.prototype.streamingRead = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return this._streamingRead(request, options);
};

/**
 * Begins a new transaction. This step can often be skipped:
 * {@link Read}, {@link ExecuteSql} and
 * {@link Commit} can begin a new transaction as a
 * side-effect.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the transaction runs.
 * @param {Object} request.options
 *   Required. Options for the new transaction.
 *
 *   This object should have the same structure as [TransactionOptions]{@link TransactionOptions}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Transaction]{@link Transaction}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Transaction]{@link Transaction}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var options = {};
 * var request = {
 *     session: formattedSession,
 *     options: options
 * };
 * client.beginTransaction(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.beginTransaction = function(request, options, callback) {
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
 * Commits a transaction. The request includes the mutations to be
 * applied to rows in the database.
 *
 * `Commit` might return an `ABORTED` error. This can occur at any time;
 * commonly, the cause is conflicts with concurrent
 * transactions. However, it can also happen for a variety of other
 * reasons. If `Commit` returns `ABORTED`, the caller should re-attempt
 * the transaction from the beginning, re-using the same session.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the transaction to be committed is running.
 * @param {Object[]} request.mutations
 *   The mutations to be executed when this transaction commits. All
 *   mutations are applied atomically, in the order they appear in
 *   this list.
 *
 *   This object should have the same structure as [Mutation]{@link Mutation}
 * @param {string=} request.transactionId
 *   Commit a previously-started transaction.
 * @param {Object=} request.singleUseTransaction
 *   Execute mutations in a temporary transaction. Note that unlike
 *   commit of a previously-started transaction, commit with a
 *   temporary transaction is non-idempotent. That is, if the
 *   `CommitRequest` is sent to Cloud Spanner more than once (for
 *   instance, due to retries in the application, or in the
 *   transport library), it is possible that the mutations are
 *   executed more than once. If this is undesirable, use
 *   {@link BeginTransaction} and
 *   {@link Commit} instead.
 *
 *   This object should have the same structure as [TransactionOptions]{@link TransactionOptions}
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
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var mutations = [];
 * var request = {
 *     session: formattedSession,
 *     mutations: mutations
 * };
 * client.commit(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.commit = function(request, options, callback) {
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
 * Rolls back a transaction, releasing any locks it holds. It is a good
 * idea to call this for any transaction that includes one or more
 * {@link Read} or {@link ExecuteSql} requests and
 * ultimately decides not to commit.
 *
 * `Rollback` returns `OK` if it successfully aborts the transaction, the
 * transaction was already aborted, or the transaction is not
 * found. `Rollback` never returns `ABORTED`.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.session
 *   Required. The session in which the transaction to roll back is running.
 * @param {string} request.transactionId
 *   Required. The transaction to roll back.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var spanner = require('@google-cloud/spanner');
 *
 * var client = spanner.v1({
 *   // optional auth parameters.
 * });
 *
 * var formattedSession = client.sessionPath("[PROJECT]", "[INSTANCE]", "[DATABASE]", "[SESSION]");
 * var transactionId = '';
 * var request = {
 *     session: formattedSession,
 *     transactionId: transactionId
 * };
 * client.rollback(request).catch(function(err) {
 *     console.error(err);
 * });
 */
SpannerClient.prototype.rollback = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._rollback(request, options, callback);
};

function SpannerClientBuilder(gaxGrpc) {
  if (!(this instanceof SpannerClientBuilder)) {
    return new SpannerClientBuilder(gaxGrpc);
  }

  var spannerClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/spanner/v1/spanner.proto'
  }]);
  extend(this, spannerClient.google.spanner.v1);


  /**
   * Build a new instance of {@link SpannerClient}.
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
  this.spannerClient = function(opts) {
    return new SpannerClient(gaxGrpc, spannerClient, opts);
  };
  extend(this.spannerClient, SpannerClient);
}
module.exports = SpannerClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;