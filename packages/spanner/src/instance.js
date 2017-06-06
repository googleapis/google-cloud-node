/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*!
 * @module spanner/database
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var is = require('is');
var snakeCase = require('lodash.snakecase');
var util = require('util');

/**
 * @type {module:spanner/database}
 * @private
 */
var Database = require('./database.js');

/**
 * Create an Instance object to interact with a Cloud Spanner instance.
 *
 * @constructor
 * @alias module:spanner/instance
 *
 * @param {string} name - Name of the instance.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 */
function Instance(spanner, name) {
  var self = this;

  this.api = spanner.api;
  this.formattedName_ = Instance.formatName_(spanner.projectId, name);

  var methods = {
    /**
     * Create an instance.
     *
     * @param {object} config - See {module:spanner#createInstance}.
     *
     * @example
     * instance.create(function(err, instance, operation, apiResponse) {
     *   if (err) {
     *     // Error handling omitted.
     *   }
     *
     *   operation
     *     .on('error', function(err) {})
     *     .on('complete', function() {
     *       // Instance created successfully.
     *     });
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.create()
     *   .then(function(data) {
     *     var operation = data[0];
     *     var apiResponse = data[1];
     *
     *     return operation.promise();
     *   })
     *   .then(function() {
     *     // Instance created successfully.
     *   });
     */
    create: true,

    /**
     * Check if an instance exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the instance exists or not.
     *
     * @example
     * instance.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get an instance if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * instance.get(function(err, instance, apiResponse) {
     *   // `instance.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.get().then(function(data) {
     *   var instance = data[0];
     *   var apiResponse = data[0];
     * });
     */
    get: true
  };

  commonGrpc.ServiceObject.call(this, {
    parent: spanner,
    id: name,
    methods: methods,
    createMethod: function(_, options, callback) {
      spanner.createInstance(self.formattedName_, options, callback);
    }
  });
}

util.inherits(Instance, commonGrpc.ServiceObject);

/**
 * Cache of instance objects - while usually this isn't necessary, to avoid
 * re-creating session pools we need to cache both instance and database
 * objects so that the user does not have to.
 *
 * @private
 */
Instance.cache_ = {};

/**
 * Either creates a new instance or retrieves a pre-existing instance from
 * the instance cache.
 *
 * @private
 *
 * @param {object} parent - The parent object.
 * @param {string} name - The name of the instance.
 *
 * @return {module:spanner/instance}
 */
Instance.get_ = function(parent, name) {
  if (!Instance.cache_[name]) {
    Instance.cache_[name] = new Instance(parent, name)
  }

  return Instance.cache_[name];
};

/**
 * Format the instance name to include the project ID.
 *
 * @private
 *
 * @param {string} projectId - The project ID.
 * @param {string} name - The instance name.
 *
 * @example
 * Instance.formatName_('grape-spaceship-123', 'my-instance');
 * // 'projects/grape-spaceship-123/instances/my-instance'
 */
Instance.formatName_ = function(projectId, name) {
  if (name.indexOf('/') > -1) {
    return name;
  }

  var instanceName = name.split('/').pop();

  return 'projects/' + projectId + '/instances/' + instanceName;
};

/**
 * Create a database in this instance.
 *
 * @resource [CreateDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase)
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {name} name - The name of the database to create.
 * @param {object=} options - Configuration object.
 * @param {object} options.poolOptions - See {module:spanner/database#Database}
 *     for all of the available session pool configuration settings.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/database} callback.database - The newly created
 *     database.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * function callback(err, database, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Database created successfully.
 *     });
 * }
 *
 * instance.createDatabase('new-database-name', callback);
 *
 * //-
 * // Set the schema for the database.
 * //-
 * instance.createDatabase('new-database-name', {
 *   schema:
 *     'CREATE TABLE Singers (' +
 *     '  SingerId STRING(1024) NOT NULL,' +
 *     '  Name STRING(1024),' +
 *     ') PRIMARY KEY(SingerId)'
 * }, callback);

 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.createDatabase('new-database-name')
 *   .then(function(data) {
 *     var database = data[0];
 *     var operation = data[1];
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Database created successfully.
 *   });
 */
Instance.prototype.createDatabase = function(name, options, callback) {
  var self = this;

  if (!name) {
    throw new Error('A name is required to create a database.');
  }

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var poolOptions = options.poolOptions;
  delete options.poolOptions;

  var reqOpts = extend({
    parent: this.formattedName_,
    createStatement: 'CREATE DATABASE `' + name.split('/').pop() + '`'
  }, options);

  if (reqOpts.schema) {
    reqOpts.extraStatements = arrify(reqOpts.schema);
    delete reqOpts.schema;
  }

  this.api.Database.createDatabase(reqOpts, function(err, operation, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var database = self.database(name, poolOptions);

    callback(null, database, operation, resp);
  });
};

/**
 * Get a reference to a Database object.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the instance.
 * @param {object} poolOptions - See {module:spanner/database#Database} for all
 *     of the available session pool configuration settings.
 * @return {module:spanner/database} - A Database object.
 *
 * @example
 * var database = instance.database('my-database');
 */
Instance.prototype.database = function(name, poolOptions) {
  if (!name) {
    throw new Error('A name is required to access a Database object.');
  }

  return Database.get_(this, name, poolOptions);
};

/**
 * Delete the instance.
 *
 * @resource [DeleteInstance API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instance.delete(function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Instance was deleted successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Instance.prototype.delete = function(callback) {
  var self = this;

  var reqOpts = {
    name: this.formattedName_
  };

  return this.api.Instance.deleteInstance(reqOpts, function(err, resp) {
    if (!err) {
      delete Instance.cache_[self.id];
    }

    callback(err, resp);
  });
};

/**
 * Get a list of databases.
 *
 * @resource [ListDatabases API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases)
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.pageSize - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/instance[]} callback.instances - List of all
 *     instances.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instance.getDatabases(function(err, databases) {
 *   // `databases` is an array of `Database` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, databases, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     instance.getDatabases(nextQuery, callback);
 *   }
 * }
 *
 * instance.getDatabases({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.getDatabases().then(function(data) {
 *   var databases = data[0];
 * });
 */
Instance.prototype.getDatabases = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  var reqOpts = extend({}, query, {
    parent: this.formattedName_
  });

  this.api.Database.listDatabases(reqOpts, query, function(err, databases) {
    if (databases) {
      arguments[1] = databases.map(function(database) {
        var databaseInstance = self.database(database.name);
        databaseInstance.metadata = database;
        return databaseInstance;
      });
    }

    callback.apply(null, arguments);
  });
};

/**
 * Get a list of databases as a readable object stream.
 *
 * @resource [ListDatabases API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases)
 *
 * @param {object=} options - Configuration object. See
 *     {module:spanner/instance#getDatabases} for a complete list of options.
 * @return {stream}
 *
 * @example
 * instance.getDatabasesStream()
 *   .on('error', console.error)
 *   .on('data', function(database) {
 *     // `database` is a `Database` object.
 *   })
 *   .on('end', function() {
 *     // All databases retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * instance.getDatabasesStream()
 *   .on('data', function(database) {
 *     this.end();
 *   });
 */
Instance.prototype.getDatabasesStream =
  common.paginator.streamify('getDatabases');

/**
 * Get the instance's metadata.
 *
 * @resource [GetInstance API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.GetInstance)
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The instance's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instance.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 */
Instance.prototype.getMetadata = function(callback) {
  return this.api.Instance.getInstance({
    name: this.formattedName_
  }, callback);
};

/**
 * Update the metadata for this instance. Note that this method follows PATCH
 * semantics, so previously-configured settings will persist.
 *
 * @resource [UpdateInstance API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance)
 *
 * @param {object} metadata - New metadata.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   displayName: 'My Instance'
 * };
 *
 * instance.setMetadata(metadata, function(err, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Metadata updated successfully.
 *     });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.setMetadata(metadata).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Instance.prototype.setMetadata = function(metadata, callback) {
  return this.api.Instance.updateInstance({
    instance: extend({
      name: this.formattedName_
    }, metadata),
    fieldMask: {
      paths: Object.keys(metadata).map(snakeCase)
    }
  }, callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Instance, {
  exclude: [
    'database',
    'delete',
    'getMetadata',
    'setMetadata'
  ]
});

module.exports = Instance;
