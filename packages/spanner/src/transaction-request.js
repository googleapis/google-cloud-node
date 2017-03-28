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
 * @module spanner/transactionRequest
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');

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
 * Handle logic for Table/Transaction API operations.
 *
 * @constructor
 * @alias module:spanner/transactionRequest
 * @mixin
 *
 * @private
 *
 * @param {object=} options - Timestamp options.
 */
function TransactionRequest(options) {
  if (options) {
    this.options = TransactionRequest.formatTimestampOptions_(options);
  }
}

/**
 * Formats timestamp options into proto format.
 *
 * @private
 *
 * @param {object} options - The user supplied options.
 * @return {object}
 */
TransactionRequest.formatTimestampOptions_ = function(options) {
  var formatted = extend({}, options);

  if (options.minReadTimestamp) {
    formatted.minReadTimestamp = formatTimestamp(options.minReadTimestamp);
  }

  if (options.readTimestamp) {
    formatted.readTimestamp = formatTimestamp(options.readTimestamp);
  }

  if (is.number(options.maxStaleness)) {
    formatted.maxStaleness = {
      seconds: options.maxStaleness,
      nanos: 0
    };
  }

  if (is.number(options.exactStaleness)) {
    formatted.exactStaleness = {
      seconds: options.exactStaleness,
      nanos: 0
    };
  }

  return formatted;

  function formatTimestamp(date) {
    var seconds = date.getTime() / 1000;

    return {
      seconds: Math.floor(seconds),
      nanos: date.getMilliseconds() * 1e6
    };
  }
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
 * @param {*[]|*[][]} query.keys - The primary keys of the rows in this table to
 *     be yielded. If using a composite key, provide an array within this array.
 *     See the example below.
 * @param {string[]=} query.index - The name of an index on the table.
 * @param {number=} query.limit - The number of rows to yield.
 * @return {Stream}
 *
 * @example
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.createReadStream('Singers', {
 *       keys: ['1'],
 *       columns: ['SingerId', 'name']
 *     })
 *     .on('error', function(err) {})
 *     .on('data', function(row) {
 *       // row = [
 *       //   {
 *       //     name: 'SingerId',
 *       //     value: '1'
 *       //   },
 *       //   {
 *       //     name: 'Name',
 *       //     value: 'Eddie Wilson'
 *       //   }
 *       // ]
 *     })
 *     .on('end', function() {
 *       // All results retrieved.
 *     });
 * });
 *
 * //-
 * // Provide an array for `query.keys` to read with a composite key.
 * //-
 * var query = {
 *   keys: [
 *     [
 *       'Id1',
 *       'Name1'
 *     ],
 *     [
 *       'Id2',
 *       'Name2'
 *     ]
 *   ],
 *   // ...
 * };
 *
 * //-
 * // Rows are returned as an array of object arrays. Each object has a `name`
 * // and `value` property. To get a serialized object, call `toJSON()`.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.createReadStream('Singers', {
 *       keys: ['1'],
 *       columns: ['SingerId', 'name']
 *     })
 *     .on('error', function(err) {})
 *     .on('data', function(row) {
 *       // row.toJSON() = {
 *       //   SingerId: '1',
 *       //   Name: 'Eddie Wilson'
 *       // }
 *     })
 *     .on('end', function() {
 *       // All results retrieved.
 *     });
 * });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     transaction.createReadStream('Singers', {
 *         keys: ['1'],
 *         columns: ['SingerId', 'name']
 *       })
 *       .on('data', function(row) {
 *         this.end();
 *       });
 *   });
 */
TransactionRequest.prototype.createReadStream = function(table, query) {
  var self = this;

  if (is.array(query) || is.string(query)) {
    query = {
      keys: query
    };
  }

  var reqOpts = extend({
    table: table
  }, query);

  if (query.keys) {
    reqOpts.keySet = {
      keys: arrify(query.keys).map(function(key) {
        return {
          values: arrify(key).map(codec.encode)
        };
      })
    };
    delete reqOpts.keys;
  }

  function makeRequest(resumeToken) {
    return self.requestStream({
      reqOpts: extend(reqOpts, { resumeToken: resumeToken }),
      method: self.api.Spanner.streamingRead.bind(self.api.Spanner)
    });
  }

  return new PartialResultStream(makeRequest);
};

/**
 * Delete rows from a table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string} table - The name of the table.
 * @param {*[]|*[][]} keys - The keys for the rows to delete. If using a
 *     composite key, provide an array within this array. See the example below.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var keys = ['Id1', 'Id2', 'Id3'];
 *
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue this mutation until later calling `commit`.
 *   // Note that a callback is not passed to `deleteRows`.
 *   transaction.deleteRows('Singers', keys);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The rows were deleted successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // Provide an array for `keys` to read with a composite key.
 * //-
 * var keys = [
 *   [
 *     'Id1',
 *     'Name1'
 *   ],
 *   [
 *     'Id2',
 *     'Name2'
 *   ]
 * ];
 *
 * //-
 * // If you are using a Promise to retrieve the transaction.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     // Queue this mutation until later calling `commit`.
 *     // Note that a callback is not passed to `deleteRows`.
 *     transaction.deleteRows('Singers', keys);
 *
 *     // Commit the transaction.
 *     return transaction.commit();
 *   })
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *
 *     // The rows were deleted successfully.
 *   });
 */
TransactionRequest.prototype.deleteRows = function(table, keys, callback) {
  var mutation = {};

  mutation['delete'] = {
    table: table,
    keySet: {
      keys: arrify(keys).map(function(key) {
        return {
          values: arrify(key).map(codec.encode)
        };
      })
    }
  };

  if (this.transaction) {
    this.queue_(mutation);
    return;
  }

  var reqOpts = {
    singleUseTransaction: {
      readWrite: {}
    },
    mutations: [mutation]
  };

  return this.request({
    reqOpts: reqOpts,
    method: this.api.Spanner.commit.bind(this.api.Spanner)
  }, callback);
};

/**
 * Insert rows of data into this table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string} table - The name of the table.
 * @param {object|object[]} keyVals - A map of names to values of data to insert
 *     into this table.
 *
 * @example
 * var row = {
 *   SingerId: 'Id3',
 *   Name: 'Eddie Wilson'
 * };
 *
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue this mutation until later calling `commit`.
 *   // Note that a callback is not passed to `insert`.
 *   transaction.insert('Singers', row);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The row was inserted successfully.
 *     }
 *   });
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
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue multiple mutations until later calling `commit`.
 *   // Note that a callback is not passed to `insert`.
 *   transaction.insert('Singers', [
 *     row,
 *     row2
 *   ]);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The rows were inserted successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // If you are using a Promise to retrieve the transaction.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     // Queue this mutation until later calling `commit`.
 *     // Note that a callback is not passed to `insert`.
 *     transaction.insert('Singers', row);
 *
 *     // Commit the transaction.
 *     return transaction.commit();
 *   })
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *
 *     // The row was inserted successfully.
 *   });
 */
TransactionRequest.prototype.insert = function(table, keyVals, callback) {
  return this.mutate_('insert', table, keyVals, callback);
};

/**
 * Performs a read request against the specified Table.
 *
 * @param {string} table - The table to read from.
 * @param {object} query - Configuration object, describing what to read from
 *     the table.
 * @param {string[]} query.columns - The columns of the table to be returned for
 *     each row matching this query.
 * @param {*[]|*[][]} query.keys - The primary keys of the rows in this table to
 *     be yielded. If using a composite key, provide an array within this array.
 *     See the example below.
 * @param {string[]=} query.index - The name of an index on the table.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
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
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.read('Singers', query, function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     var row1 = rows[0];
 *
 *     // row1 = [
 *     //   {
 *     //     name: 'SingerId',
 *     //     value: '1'
 *     //   },
 *     //   {
 *     //     name: 'Name',
 *     //     value: 'Eddie Wilson'
 *     //   }
 *     // ]
 *
 *     // End the transaction. Note that no callback is provided.
 *     transaction.end();
 *   });
 * });
 *
 * //-
 * // Provide an array for `query.keys` to read with a composite key.
 * //-
 * var query = {
 *   keys: [
 *     [
 *       'Id1',
 *       'Name1'
 *     ],
 *     [
 *       'Id2',
 *       'Name2'
 *     ]
 *   ],
 *   // ...
 * };
 *
 * //-
 * // Rows are returned as an array of object arrays. Each object has a `name`
 * // and `value` property. To get a serialized object, call `toJSON()`.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.read('Singers', query, function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     var row1 = rows[0];
 *
 *     // row1.toJSON() = {
 *     //   SingerId: '1',
 *     //   Name: 'Eddie Wilson'
 *     // }
 *
 *     // End the transaction. Note that no callback is provided.
 *     transaction.end();
 *   });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     return transaction.read('Singers', query)
 *       .then(function(data) {
 *         var rows = data[0];
 *
 *         // End the transaction. Note that no callback is provided.
 *         transaction.end();
 *       });
 *   });
 */
TransactionRequest.prototype.read = function(table, keyVals, callback) {
  var rows = [];

  this.createReadStream(table, keyVals)
    .on('error', callback)
    .on('data', function(row) {
      rows.push(row);
    })
    .on('end', function() {
      callback(null, rows);
    });
};

/**
 * Replace rows of data within a table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string} table - The table to read from.
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
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue this mutation until later calling `commit`.
 *   // Note that a callback is not passed to `replace`.
 *   transaction.replace('Singers', row);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The row was replaced successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // If you are using a Promise to retrieve the transaction.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     // Queue this mutation until later calling `commit`.
 *     // Note that a callback is not passed to `replace`.
 *     transaction.replace('Singers', row);
 *
 *     // Commit the transaction.
 *     return transaction.commit();
 *   })
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *
 *     // The row was replaced successfully.
 *   });
 */
TransactionRequest.prototype.replace = function(table, keyVals, callback) {
  return this.mutate_('replace', table, keyVals, callback);
};

/**
 * Abstract method, should be overridden in child class.
 *
 * @private
 *
 * @throws {error}
 */
TransactionRequest.prototype.request = function() {};

/**
 * Abstract method, should be overridden in child class.
 *
 * @private
 *
 * @throws {error}
 */
TransactionRequest.prototype.requestStream = function() {};

/**
 * Update rows of data within a table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string} table - The table to read from.
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
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue this mutation until later calling `commit`.
 *   // Note that a callback is not passed to `update`.
 *   transaction.update('Singers', row);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The row was updated successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // If you are using a Promise to retrieve the transaction.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     // Queue this mutation until later calling `commit`.
 *     // Note that a callback is not passed to `update`.
 *     transaction.update('Singers', row);
 *
 *     // Commit the transaction.
 *     return transaction.commit();
 *   })
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *
 *     // The row was updated successfully.
 *   });
 */
TransactionRequest.prototype.update = function(table, keyVals, callback) {
  return this.mutate_('update', table, keyVals, callback);
};

/**
 * Insert or update rows of data within a table.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {string} table - The table to read from.
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
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue this mutation until later calling `commit`.
 *   // Note that a callback is not passed to `upsert`.
 *   transaction.upsert('Singers', row);
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // The row was updated or inserted successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // If you are using a Promise to retrieve the transaction.
 * //-
 * database.runTransaction()
 *   .then(function(data) {
 *     var transaction = data[0];
 *
 *     // Queue this mutation until later calling `commit`.
 *     // Note that a callback is not passed to `upsert`.
 *     transaction.upsert('Singers', row);
 *
 *     // Commit the transaction.
 *     return transaction.commit();
 *   })
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *
 *     // The row was updated or inserted successfully.
 *   });
 */
TransactionRequest.prototype.upsert = function(table, keyVals, callback) {
  return this.mutate_('insertOrUpdate', table, keyVals, callback);
};

/**
 * Processes the mutations. If a queue is detected it will not make a commit,
 * otherwise it will send mutations in the form of
 * {module:spanner/transaction#commit}.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @private
 *
 * @param {string} method - CRUD method (insert, update, etc.).
 * @param {string} table - Table to perform mutations in.
 * @param {object} keyVals - Hash of key value pairs.
 * @param {function} cb - The callback function.
 */
TransactionRequest.prototype.mutate_ = function(method, table, keyVals, cb) {
  keyVals = arrify(keyVals);

  var mutation = {};

  mutation[method] = {
    table: table,
    columns: Object.keys(keyVals[0]),
    values: keyVals.map(function(keyVal) {
      return Object.keys(keyVal).map(function(key) {
        return codec.encode(keyVal[key]);
      });
    })
  };

  if (this.transaction) {
    this.queue_(mutation);
    return;
  }

  var reqOpts = {
    singleUseTransaction: {
      readWrite: {}
    },
    mutations: [mutation]
  };

  return this.request({
    reqOpts: reqOpts,
    method: this.api.Spanner.commit.bind(this.api.Spanner)
  }, cb);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(TransactionRequest);

module.exports = TransactionRequest;
