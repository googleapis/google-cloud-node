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
 * @module spanner/transaction
 */

'use strict';

var common = require('@google-cloud/common');
var delay = require('delay');
var extend = require('extend');
var is = require('is');
var util = require('util');

/**
 * @type {module:spanner/coded}
 * @private
 */
var codec = require('./codec.js');

/**
 * @type {module:spanner/partialResultStream}
 * @private
 */
var PartialResultStream = require('./partial-result-stream.js');

/**
 * @type {module:spanner/transactionRequest}
 * @private
 */
var TransactionRequest = require('./transaction-request.js');

/**
 * The gRPC `ABORTED` error code.
 *
 * @private
 */
var ABORTED = 10;

/*! Developer Documentation
 *
 * @param {module:spanner/session} session - The parent Session object.
 */
/**
 * Use a Transaction object to read and write against inside of your Cloud
 * Spanner database.
 *
 * **This object is created and returned from
 * {module:database/runTransaction}.**
 *
 * @constructor
 * @alias module:spanner/transaction
 * @mixes module:spanner/transaction-request
 *
 * @param {object=} options - [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
 * @param {number} options.exactStaleness - Executes all reads at the timestamp
 *     that is `exactStaleness` old.
 * @param {date} options.minReadTimestamp - Executes all reads at a timestamp
 *     greater than or equal to this. This option can only be used for
 *     single-use transactions.
 * @param {number} options.maxStaleness - Read data at a timestamp that is
 *     greater than or equal to this. This option can only be used for
 *     single-use transactions.
 * @param {date} options.readTimestamp - Execute all reads at the given
 *     timestamp.
 * @param {boolean} options.returnReadTimestamp - If `true`, returns the read
 *     timestamp.
 * @param {boolean} options.strong - Read at the timestamp where all previously
 *     committed transactions are visible.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 * var database = instance.database('my-database');
 *
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // The `transaction` object is ready for use.
 * });
 */
function Transaction(session, options) {
  this.api = session.api;
  this.session = session;
  this.transaction = true;

  this.queuedMutations_ = [];
  this.retries_ = 0;
  this.runFn_ = null;

  TransactionRequest.call(this, options);
}

util.inherits(Transaction, TransactionRequest);

/**
 * Extract the retry info from the grpc error object.
 *
 * @private
 *
 * @param {error} err - The error object.
 * @return {number|null}
 */
Transaction.getRetryDelay_ = function(err) {
  if (!err.details) {
    return null;
  }

  var retryInfo = err.details.filter(function(elem) {
    var typeUrlParts = elem.typeUrl.split('/');

    return typeUrlParts.pop() === 'google.rpc.RetryInfo';
  });

  if (!retryInfo.length) {
    return null;
  }

  var duration = retryInfo[0].retryDelay;
  var milliseconds = parseInt(duration.nanos, 10) / 1e6;

  return parseInt(duration.seconds, 10) * 1000 + milliseconds;
};

/**
 * Begin a new transaction.
 *
 * @private
 *
 * @resource [BeginTransaction API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.BeginTransaction)
 *
 * @param {object=} options - Timestamp bound options.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * transaction.begin(function(err) {
 *   if (!err) {
 *     // Transaction began successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * transaction.begin()
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   });
 */
Transaction.prototype.begin = function(callback) {
  var self = this;
  var options;

  if (!this.options) {
    options = {
      readWrite: {}
    };
  } else {
    options = {
      readOnly: this.options
    };
  }

  var reqOpts = {
    options: options
  };

  this.request({
    reqOpts: reqOpts,
    method: this.api.Spanner.beginTransaction.bind(this.api.Spanner)
  }, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    self.id = resp.id;
    self.metadata = resp;

    callback(null, resp);
  });
};

/**
 * Commit the transaction.
 *
 * @resource [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue a mutation (note that there is no callback passed to `insert`).
 *   transaction.insert('Singers', {
 *     SingerId: 'Id3b',
 *     Name: 'Joe West'
 *   });
 *
 *   // Commit the transaction.
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // Mutations were committed successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // To use promises, simply return a Promise.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Queue a mutation (note that there is no callback passed to `insert`).
 *   transaction.insert('Singers', {
 *     SingerId: 'Id3b',
 *     Name: 'Joe West'
 *   });
 *
 *   return transaction.commit();
 * })
 * .then(function(data) {
 *   var apiResponse = data[0];
 *
 *   // Mutations were committed successfully.
 * });
 */
Transaction.prototype.commit = function(callback) {
  var self = this;

  var reqOpts = {
    mutations: this.queuedMutations_
  };

  if (this.id) {
    reqOpts.transactionId = this.id;
  } else {
    reqOpts.singleUseTransaction = {
      readWrite: {}
    };
  }

  this.request({
    reqOpts: reqOpts,
    method: this.api.Spanner.commit.bind(this.api.Spanner)
  }, function(err, resp) {
    if (!err) {
      self.end();
      callback(null, resp);
      return;
    }

    var delay = Transaction.getRetryDelay_(err) || self.createRetryDelay_();
    var shouldRetry = err.code === ABORTED && is.fn(self.runFn_) && delay;

    if (!shouldRetry) {
      self.end();
      callback(err, resp);
      return;
    }

    self.retry_(delay, callback);
  });
};

/**
 * Make a regular gRPC request to Spanner.
 *
 * @private
 *
 * @param {object} config - The request configuration.
 * @param {function} callback - The callback function.
 */
Transaction.prototype.request = function(config, callback) {
  var reqOpts = extend({
    session: this.session.formattedName_
  }, config.reqOpts);

  config.method(reqOpts, callback);
};

/**
 * Make a streaming gRPC request to Spanner.
 *
 * @private
 *
 * @param {object} config - The request configuration.
 * @return {stream}
 */
Transaction.prototype.requestStream = function(config) {
  var reqOpts = extend({
    session: this.session.formattedName_
  }, config.reqOpts);

  return config.method(reqOpts);
};

/**
 * Roll back a transaction, releasing any locks it holds. It is a good idea to
 * call this for any transaction that includes one or more queries that you
 * decide not to commit.
 *
 * @resource [Rollback API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Rollback)
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.rollback(function(err) {
 *     if (!err) {
 *       // Transaction rolled back successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // To use promises, simply return a Promise.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   return transaction.rollback();
 * })
 * .then(function() {
 *   // Transaction rolled back successfully.
 * });
 */
Transaction.prototype.rollback = function(callback) {
  var self = this;

  if (!this.id) {
    throw new Error('Transaction ID is unknown, nothing to rollback.');
  }

  var reqOpts = {
    transactionId: this.id
  };

  this.request({
    reqOpts: reqOpts,
    method: this.api.Spanner.rollback.bind(this.api.Spanner)
  }, function(err, resp) {
    if (!err) {
      self.end();
    }

    callback(err, resp);
  });
};

/**
 * Execute a SQL statement on this database inside of a transaction.
 *
 * <h4>Performance Considerations</h4>
 *
 * This method wraps the streaming method,
 * {module:spanner/transaction#run} for your convenience. All rows will
 * be stored in memory before being released to your callback. If you intend on
 * receiving a lot of results from your query, consider using the streaming
 * method, so you can free each result from memory after consuming it.
 *
 * @resource [ExecuteStreamingSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteStreamingSql)
 * @resource [ExecuteSqlRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *
 * @param {string|object} query - A SQL query or
 *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *     object.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.rows - The results from the SQL query.
 *
 * @example
 * var query = 'SELECT * FROM Singers';
 *
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.run(query, function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     // rows = [
 *     //   {
 *     //     SingerId: '1',
 *     //     Name: 'Eddie Wilson'
 *     //   }
 *     // ]
 *   });
 * });
 *
 * //-
 * // The SQL query string can contain parameter placeholders. A parameter
 * // placeholder consists of '@' followed by the parameter name.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var query = {
 *     sql: 'SELECT * FROM Singers WHERE name = @name',
 *     params: {
 *       name: 'Eddie Wilson'
 *     }
 *   };
 *
 *   transaction.run(query, function(err, rows) {});
 * });
 *
 * //-
 * // To use promises, simply return a Promise.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   return transaction.run(query)
 *     .then(function(data) {
 *       var rows = data[0];
 *     });
 * });
 */
Transaction.prototype.run = function(query, callback) {
  var rows = [];

  this.runStream(query)
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
 * @resource [ExecuteStreamingSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteStreamingSql)
 * @resource [ExecuteSqlRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *
 * @param {string|object} query - A SQL query or
 *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
 *     object.
 * @return {Stream}
 *
 * @example
 * var query = 'SELECT * FROM Singers';
 *
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.runStream(query)
 *     .on('error', function(err) {})
 *     .on('data', function(row) {
 *       // row = {
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
 * // The SQL query string can contain parameter placeholders. A parameter
 * // placeholder consists of '@' followed by the parameter name.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var query = {
 *     sql: 'SELECT * FROM Singers WHERE name = @name',
 *     params: {
 *       name: 'Eddie Wilson'
 *     }
 *   };
 *
 *   transaction.runStream(query)
 *     .on('error', function(err) {})
 *     .on('data', function(row) {})
 *     .on('end', function() {});
 * });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * database.runTransaction(function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.runStream(query)
 *     .on('data', function(row) {
 *       this.end();
 *     })
 *     .on('end', function() {
 *       // All results retrieved.
 *     });
 * });
 */
Transaction.prototype.runStream = function(query) {
  var self = this;

  if (is.string(query)) {
    query = {
      sql: query
    };
  }

  var reqOpts = extend({
    transaction: {}
  }, query);

  if (reqOpts.params) {
    var fields = {};

    for (var prop in reqOpts.params) {
      var field = reqOpts.params[prop];
      fields[prop] = codec.encode(field);
    }

    reqOpts.params = {
      fields: fields
    };
  }

  if (this.id) {
    reqOpts.transaction.id = this.id;
  } else {
    reqOpts.transaction.singleUse = {
      readOnly: this.options || {}
    };
  }

  function makeRequest(resumeToken) {
    return self.requestStream({
      reqOpts: extend({}, reqOpts, { resumeToken: resumeToken }),
      method: self.api.Spanner.executeStreamingSql.bind(self.api.Spanner)
    });
  }

  return new PartialResultStream(makeRequest);
};

/**
 * Create a retry backoff time based on the number of attempts already made.
 *
 * @private
 *
 * @return {?number}
 */
Transaction.prototype.createRetryDelay_ = function() {
  var MAX_RETRIES = 2;

  if (this.retries_ >= MAX_RETRIES) {
    return null;
  }

  return (Math.pow(2, this.retries_) * 1000) + Math.floor(Math.random() * 1000);
};

/**
 * Let the client know you're done with a particular transaction. This should
 * only be called for read-only transactions.
 *
 * @example
 * var options = {
 *   readOnly: true
 * };
 *
 * database.runTransaction(options, function(err, transaction) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.runQuery('SELECT * FROM Singers', function(err, rows) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     // End the transaction. Note that no callback is provided.
 *     transaction.end();
 *   });
 * });
 */
Transaction.prototype.end = function() {
  this.queuedMutations_ = [];
  this.retries_ = 0;
  this.runFn_ = null;
  delete this.id;
};

/**
 * Queue a mutation until {module:spanner/transaction#commit} is called.
 *
 * @private
 */
Transaction.prototype.queue_ = function(mutation) {
  this.queuedMutations_.push(mutation);
};

/**
 * Retry the transaction by running the original "runFn" after a pre-
 * determined delay.
 *
 * @private
 */
Transaction.prototype.retry_ = function(timeout, callback) {
  var self = this;

  this.retries_++;

  this.begin()
    .then(delay(timeout))
    .then(function() {
      self.queuedMutations_ = [];
      return self.runFn_();
    })
    .then(function(data) {
      data = data || [];
      data.unshift(null);
      callback.apply(null, data);
    }, callback);
};

/**
 * Run a set of reads/writes and then commits all changes. In the event of a
 * concurrency issue where the commit is aborted, it will retry running all
 * reads/writes.
 *
 * Call {module:spanner/transaction#rollback} to cancel any queued mutations.
 *
 * @private
 *
 * @param {function} fn - The function containing the read/write logic.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * transaction.run_(function() {
 *   transaction.run('SELECT * FROM Singers', function(err) {
 *     if (err) {
 *       done(err);
 *       return;
 *     }
 *
 *     transaction.insert('Singers', {
 *       SingerId: 'Id3b',
 *       Name: 'Joe West'
 *     });
 *
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction has successfully been committed.
 *       }
 *     });
 *   });
 * });
 *
 * //-
 * // You can also omit the callback and return a Promise.
 * //-
 * transaction.run_(function() {
 *   return transaction.run('SELECT * FROM Singers')
 *     .then(function() {
 *       transaction.insert('Singers', {
 *         SingerId: 'Id3b',
 *         Name: 'Joe West'
 *       });
 *
 *       return transaction.commit();
 *     });
 * }).then(function() {
 *   // Transaction committed successfully.
 * });
 */
Transaction.prototype.run_ = function(fn) {
  this.runFn_ = fn;
  return fn();
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Transaction);

module.exports = Transaction;
