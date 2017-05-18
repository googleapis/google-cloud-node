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

  this.timeout_ = 60000;
  this.beginTime_ = null;

  TransactionRequest.call(this, options);
}

util.inherits(Transaction, TransactionRequest);

/**
 * In the event that a Transaction is aborted and the deadline has been
 * exceeded, we'll alter the error from aborted to deadline exceeded.
 *
 * @private
 *
 * @param {error} err - The original error.
 * @return {object}
 */
Transaction.createDeadlineError_ = function(err) {
  return extend({}, err, {
    code: 4,
    message: 'Deadline for Transaction exceeded.'
  });
};

/**
 * Create a retry backoff time based on the number of attempts already made.
 *
 * @private
 *
 * @return {?number}
 */
Transaction.createRetryDelay_ = function(retries) {
  return (Math.pow(2, retries) * 1000) + Math.floor(Math.random() * 1000);
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
      readOnly: extend({
        returnReadTimestamp: true
      }, this.options)
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

    if (resp.readTimestamp) {
      self.readTimestamp = TransactionRequest.fromProtoTimestamp_(
        resp.readTimestamp
      );
    }

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
    }

    callback(err, resp);
  });
};

/**
 * Let the client know you're done with a particular transaction. This should
 * only be called for read-only transactions.
 *
 * @param {function=} callback - Optional callback function to be called after
 *     transaction has ended.
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
Transaction.prototype.end = function(callback) {
  this.queuedMutations_ = [];
  this.retries_ = 0;
  this.runFn_ = null;
  delete this.id;

  if (is.fn(callback)) {
    callback();
  }
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
 * Make a regular gRPC request to Spanner.
 *
 * @private
 *
 * @param {object} config - The request configuration.
 * @param {function} callback - The callback function.
 */
Transaction.prototype.request = function(config, callback) {
  var self = this;

  var reqOpts = extend({
    session: this.session.formattedName_
  }, config.reqOpts);

  var gaxOptions = reqOpts.gaxOptions;
  delete reqOpts.gaxOptions;

  config.method(reqOpts, gaxOptions, function(err, resp) {
    if (err && err.code === ABORTED) {
      if (self.shouldRetry_(err)) {
        self.retry_();
        return;
      }

      self.runFn_(Transaction.createDeadlineError_(err));
      return;
    }

    callback(err, resp);
  });
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

  var gaxOptions = reqOpts.gaxOptions;
  delete reqOpts.gaxOptions;

  return config.method(reqOpts, gaxOptions);
};

/**
 * Retry the transaction by running the original "runFn" after a pre-
 * determined delay.
 *
 * @private
 */
Transaction.prototype.retry_ = function() {
  var self = this;

  this.begin(function(err) {
    if (err) {
      self.runFn_(err);
      return;
    }

    var timeout = Transaction.createRetryDelay_(self.retries_);

    self.retries_ += 1;
    self.queuedMutations_ = [];

    setTimeout(function() {
      self.runFn_(null, self);
    }, timeout)
  });
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
 *     .on('end', function() {});
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
    transaction: {},
    session: this.formattedName_
  }, query);

  var fields = {};

  if (reqOpts.params) {
    reqOpts.types = reqOpts.types || {};

    for (var prop in reqOpts.params) {
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

    for (var prop in reqOpts.types) {
      var type = reqOpts.types[prop]
      var child;

      if (is.object(type)) {
        child = codec.TYPES.indexOf(type.child);
        type = type.type;
      }

      var code = codec.TYPES.indexOf(type);

      if (code === -1) {
        code = 0; // unspecified
      }

      types[prop] = { code: code };

      if (child === -1) {
        child = 0; // unspecified
      }

      if (is.number(child)) {
        types[prop].arrayElementType = { code: child };
      }
    }

    reqOpts.paramTypes = types;
    delete reqOpts.types;
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
 * Determines whether or not this Transaction should be retried in the event
 * of an ABORTED error.
 *
 * @param {error} err - The request error.
 * @return {boolean}
 */
Transaction.prototype.shouldRetry_ = function(err) {
  return err.code === ABORTED && is.fn(this.runFn_) &&
    (Date.now() - this.beginTime_ < this.timeout_);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Transaction);

module.exports = Transaction;
