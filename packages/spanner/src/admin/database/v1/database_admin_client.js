/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto,
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

var configData = require('./database_admin_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'spanner.googleapis.com.';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.7.1';

var PAGE_DESCRIPTORS = {
  listDatabases: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'databases')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/spanner.admin'
];

/**
 * Cloud Spanner Database Admin API
 *
 * The Cloud Spanner Database Admin API can be used to create, drop, and
 * list databases. It also enables updating the schema of pre-existing
 * databases.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link databaseAdminClient}
 *
 * @example
 * var spannerV1 = require('@google-cloud/spanner').admin.database.v1({
 *   // optional auth parameters.
 * });
 * var client = spannerV1.databaseAdminClient();
 *
 * @class
 */
function DatabaseAdminClient(gaxGrpc, grpcClients, opts) {
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


  this.operationsClient = new gax.lro({
    auth: gaxGrpc.auth,
    grpc: gaxGrpc.grpc
  }).operationsClient(opts);

  this.longrunningDescriptors = {
    createDatabase: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.spanner.admin.database.v1.Database.decode,
      grpcClients.google.spanner.admin.database.v1.CreateDatabaseMetadata.decode),
    updateDatabaseDdl: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.protobuf.Empty.decode,
      grpcClients.google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata.decode)
  };

  var defaults = gaxGrpc.constructSettings(
      'google.spanner.admin.database.v1.DatabaseAdmin',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var databaseAdminStub = gaxGrpc.createStub(
      grpcClients.google.spanner.admin.database.v1.DatabaseAdmin,
      opts);
  var databaseAdminStubMethods = [
    'listDatabases',
    'createDatabase',
    'getDatabase',
    'updateDatabaseDdl',
    'dropDatabase',
    'getDatabaseDdl',
    'setIamPolicy',
    'getIamPolicy',
    'testIamPermissions'
  ];
  databaseAdminStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      databaseAdminStub.then(function(databaseAdminStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return databaseAdminStub[methodName].apply(databaseAdminStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || self.longrunningDescriptors[methodName]);
  });
}

// Path templates

var INSTANCE_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instances/{instance}');

var DATABASE_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instances/{instance}/databases/{database}');

/**
 * Returns a fully-qualified instance resource name string.
 * @param {String} project
 * @param {String} instance
 * @returns {String}
 */
DatabaseAdminClient.prototype.instancePath = function(project, instance) {
  return INSTANCE_PATH_TEMPLATE.render({
    project: project,
    instance: instance
  });
};

/**
 * Parses the instanceName from a instance resource.
 * @param {String} instanceName
 *   A fully-qualified path representing a instance resources.
 * @returns {String} - A string representing the project.
 */
DatabaseAdminClient.prototype.matchProjectFromInstanceName = function(instanceName) {
  return INSTANCE_PATH_TEMPLATE.match(instanceName).project;
};

/**
 * Parses the instanceName from a instance resource.
 * @param {String} instanceName
 *   A fully-qualified path representing a instance resources.
 * @returns {String} - A string representing the instance.
 */
DatabaseAdminClient.prototype.matchInstanceFromInstanceName = function(instanceName) {
  return INSTANCE_PATH_TEMPLATE.match(instanceName).instance;
};

/**
 * Returns a fully-qualified database resource name string.
 * @param {String} project
 * @param {String} instance
 * @param {String} database
 * @returns {String}
 */
DatabaseAdminClient.prototype.databasePath = function(project, instance, database) {
  return DATABASE_PATH_TEMPLATE.render({
    project: project,
    instance: instance,
    database: database
  });
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the project.
 */
DatabaseAdminClient.prototype.matchProjectFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).project;
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the instance.
 */
DatabaseAdminClient.prototype.matchInstanceFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).instance;
};

/**
 * Parses the databaseName from a database resource.
 * @param {String} databaseName
 *   A fully-qualified path representing a database resources.
 * @returns {String} - A string representing the database.
 */
DatabaseAdminClient.prototype.matchDatabaseFromDatabaseName = function(databaseName) {
  return DATABASE_PATH_TEMPLATE.match(databaseName).database;
};

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
DatabaseAdminClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Lists Cloud Spanner databases.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The instance whose databases should be listed.
 *   Values are of the form `projects/<project>/instances/<instance>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [Database]{@link Database}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListDatabasesResponse]{@link ListDatabasesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Database]{@link Database}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [Database]{@link Database} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListDatabasesResponse]{@link ListDatabasesResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedParent = client.instancePath("[PROJECT]", "[INSTANCE]");
 * // Iterate over all elements.
 * client.listDatabases({parent: formattedParent}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listDatabases(nextRequest, options).then(callback);
 *     }
 * }
 * client.listDatabases({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
DatabaseAdminClient.prototype.listDatabases = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listDatabases(request, options, callback);
};

/**
 * Equivalent to {@link listDatabases}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listDatabases} continuously
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
 *   Required. The instance whose databases should be listed.
 *   Values are of the form `projects/<project>/instances/<instance>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [Database]{@link Database} on 'data' event.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedParent = client.instancePath("[PROJECT]", "[INSTANCE]");
 * client.listDatabasesStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.listDatabasesStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listDatabases.createStream(this._listDatabases, request, options);
};

/**
 * Creates a new Cloud Spanner database and starts to prepare it for serving.
 * The returned {@link long-running operation} will
 * have a name of the format `<database_name>/operations/<operation_id>` and
 * can be used to track preparation of the database. The
 * {@link metadata} field type is
 * {@link CreateDatabaseMetadata}. The
 * {@link response} field type is
 * {@link Database}, if successful.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the instance that will serve the new database.
 *   Values are of the form `projects/<project>/instances/<instance>`.
 * @param {string} request.createStatement
 *   Required. A `CREATE DATABASE` statement, which specifies the ID of the
 *   new database.  The database ID must conform to the regular expression
 *   `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length.
 * @param {string[]=} request.extraStatements
 *   An optional list of DDL statements to run inside the newly created
 *   database. Statements can create tables, indexes, etc. These
 *   statements execute atomically with the creation of the database:
 *   if there is an error in any statement, the database is not created.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedParent = client.instancePath("[PROJECT]", "[INSTANCE]");
 * var createStatement = '';
 * var request = {
 *     parent: formattedParent,
 *     createStatement: createStatement
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.createDatabase(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.createDatabase(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.createDatabase = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createDatabase(request, options, callback);
};

/**
 * Gets the state of a Cloud Spanner database.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the requested database. Values are of the form
 *   `projects/<project>/instances/<instance>/databases/<database>`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Database]{@link Database}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Database]{@link Database}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedName = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * client.getDatabase({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.getDatabase = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getDatabase(request, options, callback);
};

/**
 * Updates the schema of a Cloud Spanner database by
 * creating/altering/dropping tables, columns, indexes, etc. The returned
 * {@link long-running operation} will have a name of
 * the format `<database_name>/operations/<operation_id>` and can be used to
 * track execution of the schema change(s). The
 * {@link metadata} field type is
 * {@link UpdateDatabaseDdlMetadata}.  The operation has no response.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Required. The database to update.
 * @param {string[]} request.statements
 *   DDL statements to be applied to the database.
 * @param {string=} request.operationId
 *   If empty, the new update request is assigned an
 *   automatically-generated operation ID. Otherwise, `operation_id`
 *   is used to construct the name of the resulting
 *   {@link Operation}.
 *
 *   Specifying an explicit operation ID simplifies determining
 *   whether the statements were executed in the event that the
 *   {@link UpdateDatabaseDdl} call is replayed,
 *   or the return value is otherwise lost: the {@link database} and
 *   `operation_id` fields can be combined to form the
 *   {@link name} of the resulting
 *   {@link longrunning.Operation}: `<database>/operations/<operation_id>`.
 *
 *   `operation_id` should be unique within the database, and must be
 *   a valid identifier: `[a-z][a-z0-9_]*`. Note that
 *   automatically-generated operation IDs always begin with an
 *   underscore. If the named operation already exists,
 *   {@link UpdateDatabaseDdl} returns
 *   `ALREADY_EXISTS`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedDatabase = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * var statements = [];
 * var request = {
 *     database: formattedDatabase,
 *     statements: statements
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.updateDatabaseDdl(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.updateDatabaseDdl(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.updateDatabaseDdl = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateDatabaseDdl(request, options, callback);
};

/**
 * Drops (aka deletes) a Cloud Spanner database.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Required. The database to be dropped.
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
 * var client = spannerV1.databaseAdminClient();
 * var formattedDatabase = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * client.dropDatabase({database: formattedDatabase}).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.dropDatabase = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._dropDatabase(request, options, callback);
};

/**
 * Returns the schema of a Cloud Spanner database as a list of formatted
 * DDL statements. This method does not show pending schema updates, those may
 * be queried using the {@link Operations} API.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.database
 *   Required. The database whose schema we wish to get.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [GetDatabaseDdlResponse]{@link GetDatabaseDdlResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [GetDatabaseDdlResponse]{@link GetDatabaseDdlResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedDatabase = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * client.getDatabaseDdl({database: formattedDatabase}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.getDatabaseDdl = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getDatabaseDdl(request, options, callback);
};

/**
 * Sets the access control policy on a database resource. Replaces any
 * existing policy.
 *
 * Authorization requires `spanner.databases.setIamPolicy` permission on
 * {@link resource}.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy is being specified.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {Object} request.policy
 *   REQUIRED: The complete policy to be applied to the `resource`. The size of
 *   the policy is limited to a few 10s of KB. An empty policy is a
 *   valid policy but certain Cloud Platform services (such as Projects)
 *   might reject them.
 *
 *   This object should have the same structure as [Policy]{@link Policy}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedResource = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * var policy = {};
 * var request = {
 *     resource: formattedResource,
 *     policy: policy
 * };
 * client.setIamPolicy(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.setIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._setIamPolicy(request, options, callback);
};

/**
 * Gets the access control policy for a database resource. Returns an empty
 * policy if a database exists but does not have a policy set.
 *
 * Authorization requires `spanner.databases.getIamPolicy` permission on
 * {@link resource}.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedResource = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * client.getIamPolicy({resource: formattedResource}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.getIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getIamPolicy(request, options, callback);
};

/**
 * Returns permissions that the caller has on the specified database resource.
 *
 * Attempting this RPC on a non-existent Cloud Spanner database will result in
 * a NOT_FOUND error if the user has `spanner.databases.list` permission on
 * the containing Cloud Spanner instance. Otherwise returns an empty set of
 * permissions.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy detail is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {string[]} request.permissions
 *   The set of permissions to check for the `resource`. Permissions with
 *   wildcards (such as '*' or 'storage.*') are not allowed. For more
 *   information see
 *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.databaseAdminClient();
 * var formattedResource = client.databasePath("[PROJECT]", "[INSTANCE]", "[DATABASE]");
 * var permissions = [];
 * var request = {
 *     resource: formattedResource,
 *     permissions: permissions
 * };
 * client.testIamPermissions(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
DatabaseAdminClient.prototype.testIamPermissions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._testIamPermissions(request, options, callback);
};

function DatabaseAdminClientBuilder(gaxGrpc) {
  if (!(this instanceof DatabaseAdminClientBuilder)) {
    return new DatabaseAdminClientBuilder(gaxGrpc);
  }

  var databaseAdminClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/spanner/admin/database/v1/spanner_database_admin.proto'
  }]);
  extend(this, databaseAdminClient.google.spanner.admin.database.v1);


  /**
   * Build a new instance of {@link DatabaseAdminClient}.
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
  this.databaseAdminClient = function(opts) {
    return new DatabaseAdminClient(gaxGrpc, databaseAdminClient, opts);
  };
  extend(this.databaseAdminClient, DatabaseAdminClient);
}
module.exports = DatabaseAdminClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
