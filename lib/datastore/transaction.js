/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @module datastore/transaction
 */

'use strict';

var nodeutil = require('util');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @type module:datastore/request
 * @private
 */
var DatastoreRequest = require('./request.js');


/*! Developer Documentation
 *
 * @param {module:common/connection#Connection} connection - An authorized
 *     connection to Google Cloud Datastore.
 * @param {string} projectId - Dataset ID. This is your project ID from the
 *     Google Developers Console.
 */
/**
 * Build a Transaction object. Transactions will be created for you by
 * {@linkcode module:datastore/dataset}. When you need to run a transactional
 * operation, use {@linkcode module:datastore/dataset#runInTransaction}.
 *
 * *Reference: {@link http://goo.gl/n4oSjt}*
 *
 * @constructor
 * @alias module:datastore/transaction
 * @mixes module:datastore/request
 *
 * @example
 * dataset.runInTransaction(function(transaction, done) {
 *   // `transaction` is a Transaction object.
 * });
 */
function Transaction(connection, projectId) {
  this.connection = connection;
  this.id = null;
  this.isFinalized = false;
  this.projectId = projectId;
}

nodeutil.inherits(Transaction, DatastoreRequest);

/**
 * Begin a remote transaction and identify the current transaction instance with
 * the remote transaction's ID.
 *
 * @param {function} callback - The function to execute within the context of
 *     a transaction.
 *
 * @example
 * transaction.begin(function(err) {
 *   // Perform Datastore operations as usual.
 *   transaction.get(dataset.key(['Company', 123]), function(err, entity) {
 *     // Commit the transaction.
 *     transaction.finalize(function(err) {});
 *
 *     // Rollback the transaction.
 *     transaction.rollback(function(err) {});
 *   });
 * });
 */
Transaction.prototype.begin = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('beginTransaction', function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    this.id = resp.transaction;
    callback(null);
  }.bind(this));
};

/**
 * Reverse a transaction remotely and finalize the current transaction instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * transaction.begin(function(err) {
 *   transaction.rollback(function(err) {
 *     if (err) {
 *       // Transaction could not be rolled back.
 *     }
 *   });
 * });
 */
Transaction.prototype.rollback = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('rollback', function(err) {
    this.isFinalized = true;
    callback(err || null);
  }.bind(this));
};

/**
 * Commit the remote transaction and finalize the current transaction instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * transaction.begin(function(err) {
 *   transaction.commit(function(err) {
 *     if (err) {
 *       // Transaction could not be committed.
 *     }
 *   });
 * });
 */
Transaction.prototype.commit = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('commit', function(err) {
    if (err) {
      callback(err);
      return;
    }
    this.isFinalized = true;
    callback(null);
  }.bind(this));
};

/**
 * Commit a transaction if it's not finalized yet.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * transaction.begin(function(err) {
 *   transaction.finalize(function(err) {
 *     if (err) {
 *       // Transaction could not be finalized.
 *     }
 *   });
 * });
 */
Transaction.prototype.finalize = function(callback) {
  if (!this.isFinalized) {
    this.commit(callback);
    return;
  }
  setImmediate(callback);
};

/**
 * mapQuery
 *
 * @todo Implement.
 *
 * @private
 */
Transaction.prototype.mapQuery = function() {
  throw new Error('not yet implemented');
};

module.exports = Transaction;
