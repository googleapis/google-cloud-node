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
 * @module spanner/table
 */

'use strict';

var common = require('@google-cloud/common');
var is = require('is');
var util = require('util');

/**
 * @type {module:spanner/transactionRequest}
 * @private
 */
var TransactionRequest = require('./transaction-request.js');

/**
 * Create a Table object to interact with a table in a Cloud Spanner
 * database.
 *
 * @constructor
 * @alias module:spanner/table
 *
 * @param {string} name - Name of the table.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 * var database = instance.database('my-database');
 * var table = database.table('my-table');
 */
function Table(database, name) {
  this.api = database.api;
  this.database = database;
  this.name = name;

  var pool = database.pool_;
  this.request = pool.request.bind(pool);
  this.requestStream = pool.requestStream.bind(pool);

  TransactionRequest.call(this);
}

util.inherits(Table, TransactionRequest);

/**
 * Create a table.
 *
 * @param {string} schema - See {module:database#createTable}.
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
 * table.create(schema, function(err, table, operation, apiResponse) {
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
 * table.create(schema)
 *   .then(function(data) {
 *     var table = data[0];
 *     var operation = data[1];
 *
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Table created successfully.
 *   });
 * });
 */
Table.prototype.create = function(schema, callback) {
  this.database.createTable(schema, callback);
};

/**
 * Create a readable object stream to receive rows from the database using key
 * lookups and scans.
 *
 * @resource [StreamingRead API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.StreamingRead)
 * @resource [ReadRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest)
 *
 * @param {string} table - The table to read from.
 * @param {object} query - Configuration object. See
 *     [`ReadRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest).
 * @param {string[]} query.columns - The columns of the table to be returned for
 *     each row matching this query.
 * @param {string[]} query.keys - The primary keys of the rows in this table to
 *     be yielded.
 * @param {string[]=} query.index - The name of an index on the table.
 * @param {number} query.limit - The number of rows to return.
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.minReadTimestamp - Executes all reads at a timestamp
 *     greater than or equal to this.
 * @param {number} options.maxStaleness - Read data at a timestamp that is
 *     greater than or equal to this.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnReadTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 * @return {Stream}
 *
 * @example
 * table.createReadStream({
 *     keys: ['1'],
 *     columns: ['SingerId', 'name']
 *   })
 *   .on('error', function(err) {})
 *   .on('data', function(row) {
 *     // row = {
 *     //   SingerId: '1',
 *     //   Name: 'Eddie Wilson'
 *     // }
 *   })
 *   .on('end', function() {
 *     // All results retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * table.createReadStream()
 *   .on('data', function(row) {
 *     this.end();
 *   });
 */
Table.prototype.createReadStream = function(query, options) {
  if (is.array(query) || is.string(query)) {
    query = {
      keys: query
    };
  }

  if (options) {
    query.transaction = {
      begin: TransactionRequest.formatTimestampOptions_(options)
    };
  }

  return TransactionRequest.prototype
    .createReadStream.call(this, this.name, query);
};

/**
 * Delete the table.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * table.delete(function(err, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Table deleted successfully.
 *     });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.delete()
 *   .then(function(data) {
 *     var operation = data[0];
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Table deleted successfully.
 *   });
 */
Table.prototype.delete = function(callback) {
  return this.database.updateSchema('DROP TABLE `' + this.name + '`', callback);
};

/**
 * Delete rows from this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string[]} keys - The keys for the rows to delete.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var keys = ['Id1', 'Id2', 'Id3'];
 *
 * table.deleteRows(keys, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.deleteRows(keys)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.deleteRows = function(keys, callback) {
  return TransactionRequest.prototype
    .deleteRows.call(this, this.name, keys, callback);
};

/**
 * Insert rows of data into this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {object|object[]} keyVals - A map of names to values of data to insert
 *     into this table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var row = {
 *   SingerId: 'Id3',
 *   Name: 'Eddie Wilson'
 * };
 *
 * table.insert(row, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Rows inserted successfully.
 * });
 *
 * //-
 * // Multiple rows can be inserted at once.
 * //-
 * var row2 = {
 *   SingerId: 'Id3b',
 *   Name: 'Joe West'
 * };
 *
 * table.insert([
 *   row,
 *   row2
 * ], function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.insert(row)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.insert = function(keyVals, callback) {
  return this.mutate_('insert', this.name, keyVals, callback);
};

/**
 * Receive rows from the database using key lookups and scans.
 *
 * <h4>Performance Considerations</h4>
 *
 * This method wraps the streaming method,
 * {module:spanner/table#createReadStream} for your convenience. All rows will
 * be stored in memory before being released to your callback. If you intend on
 * receiving a lot of results from your query, consider using the streaming
 * method, so you can free each result from memory after consuming it.
 *
 * @param {object} query - Configuration object, describing what to read from
 *     the table.
 * @param {string[]} query.columns - The columns of the table to be returned for
 *     each row matching this query.
 * @param {string[]} query.keys - The primary keys of the rows in this table to
 *     be yielded.
 * @param {string[]=} query.index - The name of an index on the table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {number} query.limit - The number of rows to return.
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.minReadTimestamp - Executes all reads at a timestamp
 *     greater than or equal to this.
 * @param {number} options.maxStaleness - Read data at a timestamp that is
 *     greater than or equal to this.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnReadTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 * @param {array[]} callback.rows - Rows are returned as an array of object
 *     arrays. Each object has a `name` and `value` property. To get a
 *     serialized object, call `toJSON()`.
 *
 * @example
 * var query = {
 *   keys: ['1'],
 *   columns: ['SingerId', 'name']
 * };
 *
 * table.read(query, function(err, rows) {
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
 * table.read(query, function(err, rows) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var row1 = rows[0];
 *
 *   // rows1.toJSON() = {
 *   //   SingerId: '1',
 *   //   Name: 'Eddie Wilson'
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.read(query)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.read = function(keyVals, options, callback) {
  var rows = [];

  if (is.fn(options)) {
    callback = options;
    options = null;
  }

  this.createReadStream(keyVals, options)
    .on('error', callback)
    .on('data', function(row) {
      rows.push(row);
    })
    .on('end', function() {
      callback(null, rows);
    });
};

/**
 * Replace rows of data within this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {object|object[]} keyVals - A map of names to values of data to insert
 *     into this table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var row = {
 *   SingerId: 'Id3',
 *   Name: 'Joe West'
 * };
 *
 * table.replace(row, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Row replaced successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.replace(row)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.replace = function(keyVals, callback) {
  return this.mutate_('replace', this.name, keyVals, callback);
};

/**
 * Update rows of data within this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {object|object[]} keyVals - A map of names to values of data to insert
 *     into this table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var row = {
 *   SingerId: 'Id3',
 *   Name: 'Joe West'
 * };
 *
 * table.update(row, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Row updated successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.update(row)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.update = function(keyVals, callback) {
  return this.mutate_('update', this.name, keyVals, callback);
};

/**
 * Insert or update rows of data within this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {object|object[]} keyVals - A map of names to values of data to insert
 *     into this table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var row = {
 *   SingerId: 'Id3',
 *   Name: 'Joe West'
 * };
 *
 * table.update(row, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Row inserted or updated successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.update(row)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Table.prototype.upsert = function(keyVals, callback) {
  return this.mutate_('insertOrUpdate', this.name, keyVals, callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Table, {
  exclude: [
    'delete'
  ]
});

module.exports = Table;
