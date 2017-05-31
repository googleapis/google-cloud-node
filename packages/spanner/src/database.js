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
var util = require('util');

/**
 * @type {module:spanner/codec}
 * @private
 */
var codec = require('./codec.js');

/**
 * @type {module:spanner/partialResultStream}
 * @private
 */
var PartialResultStream = require('./partial-result-stream.js');

/**
 * @type {module:spanner/session}
 * @private
 */
var Session = require('./session.js');

/**
 * @type {module:spanner/sessionPool}
 * @private
 */
var SessionPool = require('./session-pool.js');

/**
 * @type {module:spanner/table}
 * @private
 */
var Table = require('./table.js');

/**
 * @type {module:spanner/transaction}
 * @private
 */
var TransactionRequest = require('./transaction-request.js');

/**
 * Create a Database object to interact with a Cloud Spanner database.
 *
 * @constructor
 * @alias module:spanner/database
 *
 * @param {string} name - Name of the database.
 * @param {object=} options - Session pool configuration options.
 * @param {number} options.acquireTimeout - Time in milliseconds before giving
 *     up trying to acquire a session. If the specified value is `0`, a timeout
 *     will not occur. (Default: `0`)
 * @param {boolean} options.fail - If set to true, an error will be thrown when
 *     there are no available sessions for a request. (Default: `false`)
 * @param {number} options.max - Maximum number of resources to create at any
 *     given time. (Default: Number.MAX_SAFE_INTEGER)
 * @param {number} options.maxIdle - Maximum number of idle resources to keep
 *     in the pool at any given time.
 * @param {number} options.min - Minimum number of resources to keep in the pool
 *     at any given time. (Default: `0`)
 * @param {number} options.keepAlive - How often to ping idle sessions, in
 *     minutes. Must be less than 1 hour.
 * @param {number} options.writes - Pre-allocate transactions for the number of
 *     sessions specified.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 * var database = instance.database('my-database');
 */
function Database(instance, name, poolOptions) {
  var self = this;

  this.api = instance.api;
  this.formattedName_ = Database.formatName_(instance.formattedName_, name);
  this.pool_ = new SessionPool(this, poolOptions);

  var methods = {
    /**
     * Create a database.
     *
     * @param {object=} options - See {module:spanner/instance#createDatabase}.
     *
     * @example
     * database.create(function(err, database, operation, apiResponse) {
     *   if (err) {
     *     // Error handling omitted.
     *   }
     *
     *   operation
     *     .on('error', function(err) {})
     *     .on('complete', function() {
     *       // Database created successfully.
     *     });
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * database.create()
     *   .then(function(data) {
     *     var operation = data[0];
     *     var apiResponse = data[1];
     *
     *     return operation.promise();
     *   })
     *   .then(function() {
     *     // Database created successfully.
     *   });
     */
    create: true,

    /**
     * Check if a database exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the database exists or not.
     *
     * @example
     * database.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * database.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a database if it exists.
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
     * database.get(function(err, database, apiResponse) {
     *   // `database.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * database.get().then(function(data) {
     *   var database = data[0];
     *   var apiResponse = data[0];
     * });
     */
    get: true
  };

  commonGrpc.ServiceObject.call(this, {
    parent: instance,
    id: name,
    methods: methods,
    createMethod: function(_, options, callback) {
      return instance.createDatabase(self.formattedName_, options, callback);
    }
  });
}

util.inherits(Database, commonGrpc.ServiceObject);

/**
 * Format the database name to include the instance name.
 *
 * @private
 *
 * @param {string} instanceName - The formatted instance name.
 * @param {string} name - The table name.
 *
 * @example
 * Database.formatName_(
 *   'projects/grape-spaceship-123/instances/my-instance',
 *   'my-database'
 * );
 * // 'projects/grape-spaceship-123/instances/my-instance/tables/my-database'
 */
Database.formatName_ = function(instanceName, name) {
  if (name.indexOf('/') > -1) {
    return name;
  }

  var databaseName = name.split('/').pop();

  return instanceName + '/databases/' + databaseName;
};

/**
 * Close the database connection and destroy all sessions associated with it.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 *
 * @example
 * database.close(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * });
 */
Database.prototype.close = function(callback) {
  this.pool_.clear().then(function() {
    callback(null);
  }, function(err) {
    callback(err || new Error('Unable to close database connection.'));
  });
};

/**
 * Create a table.
 *
 * @param {string} schema - A DDL CREATE statement describing the table.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/table} callback.table - The Table object.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var schema =
 *   'CREATE TABLE Singers (' +
 *   '  SingerId INT64 NOT NULL,' +
 *   '  FirstName STRING(1024),' +
 *   '  LastName STRING(1024),' +
 *   '  SingerInfo BYTES(MAX),' +
 *   ') PRIMARY KEY(SingerId)';
 *
 * database.createTable(schema, function(err, table, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Table created successfully.
 *     });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.createTable(schema)
 *   .then(function(data) {
 *     var table = data[0];
 *     var operation = data[1];
 *
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Table created successfully.
 *   });
 */
Database.prototype.createTable = function(schema, callback) {
  var self = this;

  this.updateSchema(schema, function(err, operation, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var tableName = schema.match(/CREATE TABLE `*([^\s`(]+)/)[1];
    var table = self.table(tableName);

    callback(null, table, operation, resp);
  });
};

/**
 * Delete the database.
 *
 * @resource [DropDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.delete(function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Database was deleted successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Database.prototype.delete = function(callback) {
  return this.api.Database.dropDatabase({
    database: this.formattedName_
  }, callback);
};

/**
 * Get the database's metadata.
 *
 * @resource [GetDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The database's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.getMetadata(function(err, metadata, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Database was deleted successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 */
Database.prototype.getMetadata = function(callback) {
  return this.api.Database.getDatabase({
    name: this.formattedName_
  }, callback);
};

/**
 * Get this database's schema as a list of formatted DDL statements.
 *
 * @resource [Data Definition Language (DDL)](https://cloud.google.com/spanner/docs/data-definition-language)
 * @resource [GetDatabaseDdl API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {string[]} callback.statements - An array of database DDL statements.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.getSchema(function(err, statements, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.getSchema().then(function(data) {
 *   var statements = data[0];
 *   var apiResponse = data[1];
 * });
 */
Database.prototype.getSchema = function(callback) {
  this.api.Database.getDatabaseDdl({
    database: this.formattedName_
  }, function(err, statements) {
    if (statements) {
      arguments[1] = statements.statements;
    }

    callback.apply(null, arguments);
  });
};

/**
 * Execute a SQL statement on this database.
 *
 * @resource [Query Syntax](https://cloud.google.com/spanner/docs/query-syntax)
 * @resource [ExecuteSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteSql)
 *
 * @param {string|object} query - A SQL query or query object. See an
 *     [ExecuteSqlRequest](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *     object.
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {array[]} callback.rows - Rows are returned as an array of objects.
 *     Each object has a `name` and `value` property. To get a serialized
 *     object, call `toJSON()`.
 *
 * @example
 * var query = 'SELECT * FROM Singers';
 *
 * database.run(query, function(err, rows) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var row1 = rows[0];
 *
 *   // row1 = [
 *   //   {
 *   //     name: 'SingerId',
 *   //     value: '1'
 *   //   },
 *   //   {
 *   //     name: 'Name',
 *   //     value: 'Eddie Wilson'
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // Rows are returned as an array of object arrays. Each object has a `name`
 * // and `value` property. To get a serialized object, call `toJSON()`.
 * //-
 * database.run(query, function(err, rows) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var row1 = rows[0];
 *
 *   // row1.toJSON() = {
 *   //   SingerId: '1',
 *   //   Name: 'Eddie Wilson'
 *   // }
 * });
 *
 * //-
 * // The SQL query string can contain parameter placeholders. A parameter
 * // placeholder consists of '@' followed by the parameter name.
 * //-
 * var query = {
 *   sql: 'SELECT * FROM Singers WHERE name = @name',
 *   params: {
 *     name: 'Eddie Wilson'
 *   }
 * };
 *
 * database.run(query, function(err, rows) {});
 *
 * //-
 * // If you need to enforce a specific param type, a types map can be provided.
 * // This is typically useful if your param value can be null.
 * //-
 * var query = {
 *   sql: 'SELECT * FROM Singers WHERE name = @name AND id = @id',
 *   params: {
 *     id: spanner.int(8),
 *     name: null
 *   },
 *   types: {
 *     id: 'int64',
 *     name: 'string'
 *   }
 * };
 *
 * database.run(query, function(err, rows) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.run(query).then(function(data) {
 *   var rows = data[0];
 * });
 */
Database.prototype.run = function(query, options, callback) {
  var rows = [];

  if (is.fn(options)) {
    callback = options;
    options = null;
  }

  this.runStream(query, options)
    .on('error', callback)
    .on('data', function(row) {
      rows.push(row);
    })
    .on('end', function() {
      callback(null, rows);
    });
};

/**
 * Create a readable object stream to receive resulting rows from a SQL
 * statement.
 *
 * @resource [Query Syntax](https://cloud.google.com/spanner/docs/query-syntax)
 * @resource [ExecuteSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteSql)
 *
 * @param {string|object} query - A SQL query or query object. See an
 *     [ExecuteSqlRequest](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *     object.
 * @param {object=} query.params - A map of parameter name to values.
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 * @return {Stream}
 *
 * @example
 * var query = 'SELECT * FROM Singers';
 *
 * database.runStream(query)
 *   .on('error', function(err) {})
 *   .on('data', function(row) {
 *     // row = [
 *     //   {
 *     //     name: 'SingerId',
 *     //     value: '1'
 *     //   },
 *     //   {
 *     //     name: 'Name',
 *     //     value: 'Eddie Wilson'
 *     //   }
 *     // ]
 *   // ]
 *   })
 *   .on('end', function() {
 *     // All results retrieved.
 *   });
 *
 * //-
 * // Rows are returned as an array of objects. Each object has a `name` and
 * // `value` property. To get a serialized object, call `toJSON()`.
 * //-
 * database.runStream(query)
 *   .on('error', function(err) {})
 *   .on('data', function(row) {
 *     // row.toJSON() = {
 *     //   SingerId: '1',
 *     //   Name: 'Eddie Wilson'
 *     // }
 *   })
 *   .on('end', function() {
 *     // All results retrieved.
 *   });
 *
 * //-
 * // The SQL query string can contain parameter placeholders. A parameter
 * // placeholder consists of '@' followed by the parameter name.
 * //-
 * var query = {
 *   sql: 'SELECT * FROM Singers WHERE name = @name',
 *   params: {
 *     name: 'Eddie Wilson'
 *   }
 * };
 *
 * database.runStream(query)
 *   .on('error', function(err) {})
 *   .on('data', function(row) {})
 *   .on('end', function() {});
 *
 * //-
 * // If you need to enforce a specific param type, a types map can be provided.
 * // This is typically useful if your param value can be null.
 * //-
 * var query = {
 *   sql: 'SELECT * FROM Singers WHERE name = @name',
 *   params: {
 *     name: 'Eddie Wilson'
 *   },
 *   types: {
 *     name: 'string'
 *   }
 * };
 *
 * database.runStream(query)
 *   .on('error', function(err) {})
 *   .on('data', function(row) {})
 *   .on('end', function() {});
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * database.runStream(query)
 *   .on('data', function(row) {
 *     this.end();
 *   });
 */
Database.prototype.runStream = function(query, options) {
  var self = this;

  if (is.string(query)) {
    query = {
      sql: query
    };
  }

  var reqOpts = extend({}, query, {
    session: this.formattedName_
  });

  var fields = {};
  var prop;

  if (reqOpts.params) {
    reqOpts.types = reqOpts.types || {};

    for (prop in reqOpts.params) {
      var field = reqOpts.params[prop];

      if (!reqOpts.types[prop]) {
        reqOpts.types[prop] = codec.getType(field);
      }

      fields[prop] = codec.encode(field);
    }

    reqOpts.params = {
      fields: fields
    };
  }

  if (reqOpts.types) {
    var types = {};

    for (prop in reqOpts.types) {
      var type = reqOpts.types[prop];
      var childType;
      var child;

      // if a type is an ARRAY, then we'll accept an object specifying
      // the type and the child type
      if (is.object(type)) {
        childType = type.child;
        child = codec.TYPES.indexOf(childType);
        type = type.type;
      }

      var code = codec.TYPES.indexOf(type);

      if (code === -1) {
        throw new Error('Unknown param type: ' + type);
      }

      types[prop] = { code: code };

      if (child === -1) {
        throw new Error('Unknown param type: ' + childType);
      }

      if (is.number(child)) {
        types[prop].arrayElementType = { code: child };
      }
    }

    reqOpts.paramTypes = types;
    delete reqOpts.types;
  }

  if (options) {
    reqOpts.transaction = {
      singleUse: {
        readOnly: TransactionRequest.formatTimestampOptions_(options)
      }
    };
  }

  function makeRequest(resumeToken) {
    return self.pool_.requestStream({
      reqOpts: extend(reqOpts, { resumeToken: resumeToken }),
      method: self.api.Spanner.executeStreamingSql.bind(self.api.Spanner)
    });
  }

  return new PartialResultStream(makeRequest);
};

/**
 * A transaction in Cloud Spanner is a set of reads and writes that execute
 * atomically at a single logical point in time across columns, rows, and tables
 * in a database.
 *
 * The callback you provide to this function will become the "run function". It
 * will be executed with either an error or a {module:spanner/transaction}
 * object. The Transaction object will let you run queries and queue mutations
 * until you are ready to {module:spanner/transaction#commit}.
 *
 * For a more complete listing of functionality available to a Transaction, see
 * the {module:spanner/transaction} API documentation. For a general overview of
 * transactions within Cloud Spanner, see
 * [Transactions](https://cloud.google.com/spanner/docs/transactions) from the
 * official Cloud Spanner documentation.
 *
 * @resource [Transactions](https://cloud.google.com/spanner/docs/transactions)
 * @resource [Timestamp Bounds](https://cloud.google.com/spanner/docs/timestamp-bounds)
 *
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.timeout - Specify a timeout for the transaction. The
 *     transaction will be ran in its entirety, however if an abort error is
 *     returned the transaction will be retried if the timeout has not been met.
 *     Default: `60000` (milliseconds)
 * @param {boolean} options.readOnly - Specifies if the transaction is
 *     read-only.
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 * @param {function} runFn - A function to execute in the context of a
 *     transaction.
 * @param {?error} runFn.err - An error returned while making this request.
 * @param {module:spanner/transaction} runFn.transaction - The Transaction
 *     object. The transaction has already been created, and is ready to be
 *     queried and committed against.
 *
 * @example
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Run a transactional query.
 *   transaction.run('SELECT * FROM Singers', function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     // Queue a mutation (note that there is no callback passed to `insert`).
 *     transaction.insert('Singers', {
 *       SingerId: 'Id3b',
 *       Name: 'Joe West'
 *     });
 *
 *     // Commit the transaction.
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 *
 * //-
 * // For read-only transactions, use the `transaction.end()` function to
 * // release the transaction.
 * //-
 * var options = {
 *   readOnly: true,
 *   strong: true
 * };
 *
 * database.runTransaction(options, function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.run('SELECT * FROM Singers', function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     // End the transaction. Note that no callback is provided.
 *     transaction.end();
 *   });
 * });
 */
Database.prototype.runTransaction = function(options, runFn) {
  if (is.fn(options)) {
    runFn = options;
    options = null;
  }

  options = extend({}, options);

  this.getTransaction_(options, function(err, transaction) {
    if (err) {
      runFn(err);
      return;
    }

    transaction.beginTime_ = Date.now();
    transaction.runFn_ = runFn;

    if (options && options.timeout) {
      transaction.timeout_ = options.timeout;
      delete options.timeout;
    }

    runFn(null, transaction);
  });
};

/**
 * Get a reference to a Table object.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the table.
 * @return {module:spanner/table} - A Table object.
 *
 * @example
 * var table = database.table('Singers');
 */
Database.prototype.table = function(name) {
  if (!name) {
    throw new Error('A name is required to access a Table object.');
  }

  return new Table(this, name);
};

/**
 * Update the schema of the database by creating/altering/dropping tables,
 * columns, indexes, etc.
 *
 * This method immediately responds with an Operation object. Register event
 * handlers for the "error" and "complete" events to see how the operation
 * finishes. Follow along with the examples below.
 *
 * @resource [Data Definition Language (DDL)](https://cloud.google.com/spanner/docs/data-definition-language)
 * @resource [Schema and Data Model](https://cloud.google.com/spanner/docs/schema-and-data-model)
 * @resource [UpdateDatabaseDdl API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.UpdateDatabaseDdlRequest)
 *
 * @param {string|string[]|object} statements - An array of database DDL
 *     statements, or an
 *     [`UpdateDatabaseDdlRequest` object](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.UpdateDatabaseDdlRequest).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var statements = [
 *   'CREATE TABLE Singers (' +
 *   '  SingerId INT64 NOT NULL,' +
 *   '  FirstName STRING(1024),' +
 *   '  LastName STRING(1024),' +
 *   '  SingerInfo BYTES(MAX),' +
 *   ') PRIMARY KEY(SingerId)'
 * ];
 *
 * database.updateSchema(statements, function(err, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Database schema updated successfully.
 *     });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.updateSchema(statements)
 *   .then(function(data) {
 *     var operation = data[0];
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Database schema updated successfully.
 *   });
 */
Database.prototype.updateSchema = function(statements, callback) {
  if (!is.object(statements)) {
    statements = {
      statements: arrify(statements)
    };
  }

  var reqOpts = extend({
    database: this.formattedName_
  }, statements);

  return this.api.Database.updateDatabaseDdl(reqOpts, callback);
};

/**
 * Create a new session, which can be used to perform transactions that read
 * and/or modify data.
 *
 * Sessions can only execute one transaction at a time. To execute multiple
 * concurrent read-write/write-only transactions, create multiple sessions.
 * Note that standalone reads and queries use a transaction internally, and
 * count toward the one transaction limit.
 *
 * It is unlikely you will need to interact with sessions directly. By default,
 * sessions are created and utilized for maximum performance automatically.
 *
 * @private
 *
 * @resource [CreateSession API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.CreateSession)
 *
 * @param {object=} options - Configuration object.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/session} callback.session - The newly created session.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.createSession_(function(err, session, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // `session` is a Session object.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.createSession_().then(function(data) {
 *   var session = data[0];
 *   var apiResponse = data[1];
 * });
 */
Database.prototype.createSession_ = function(options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.api.Spanner.createSession({
    database: this.formattedName_
  }, options, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var session = self.session_(resp.name);
    session.metadata = resp;

    callback(null, session, resp);
  });
};

/**
 * Get a database session.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while getting the session.
 * @param {module:spanner/session} session - The session object.
 *
 * @example
 * database.getSession(function(err, session) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.getSession_().then(function(data) {
 *   var session = data[0];
 * });
 */
Database.prototype.getSession_ = function(callback) {
  this.pool_.getSession(callback);
};

/**
 * Get a read/write ready Transaction object.
 *
 * @private
 *
 * @param {object=} options - Transaction options.
 * @param {boolean} options.readOnly - Specifies if the transaction is read
 *     only.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while getting the
 *     transaction object.
 * @param {module:spanner/transaction} transaction - The transaction object.
 *
 * @example
 * database.getTransaction(function(err, transaction) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.getTransaction().then(function(data) {
 *   var transaction = data[0];
 * });
 */
Database.prototype.getTransaction_ = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = null;
  }

  if (!options || !options.readOnly) {
    this.pool_.getWriteSession(function(err, session, transaction) {
      callback(err, transaction);
    });
    return;
  }

  this.pool_.getSession(function(err, session) {
    if (err) {
      callback(err);
      return;
    }

    options = extend({}, options);
    delete options.readOnly;

    var transaction = self.pool_.createTransaction_(session, options);

    transaction.begin(function(err) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, transaction);
    });
  });
};

/**
 * Create a Session object.
 *
 * It is unlikely you will need to interact with sessions directly. By default,
 * sessions are created and utilized for maximum performance automatically.
 *
 * @private
 *
 * @param {string=} name - The name of the session. If not provided, it is
 *     assumed you are going to create it.
 * @return {module:spanner/session} - A Session object.
 *
 * @example
 * var session = database.session_('session-name');
 */
Database.prototype.session_ = function(name) {
  return new Session(this, name);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Database, {
  exclude: [
    'delete',
    'getMetadata',
    'runTransaction',
    'table',
    'updateSchema',
    'session_'
  ]
});

module.exports = Database;
