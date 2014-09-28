/**
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

/**
 * @private
 * @module datastore/transaction
 */

'use strict';

var nodeutil = require('util');

/** @type module:datastore/pb */
var pb = require('./pb.js');

/** @type module:common/util */
var util = require('../common/util.js');

/** @type module:datastore/request */
var DatastoreRequest = require('./request.js');

/**
 * Build a Transaction object. Transactions will generally be built for you by
 * {@linkcode module:datastore/dataset}. When you need to run a transactional
 * operation, you use {@linkcode module:datastore/dataset#runInTransaction}.
 *
 * *Reference: {@link http://goo.gl/n4oSjt}*
 *
 * @constructor
 * @alias module:datastore/transaction
 *
 * @param {module:common/connection.Connection} conn - An authorized connection
 *     to Google Cloud Datastore.
 * @param {string} projectId - Dataset ID. This is your project ID from the
 *     Google Developers Console.
 *
 * @example
 * var Connection = require('lib/common/connection.js').Connection;
 * var myConnection = new Connection({});
 * var transaction = new Transaction(myConnection, 'my-project-id');
 */
function Transaction(conn, projectId) {
  this.connection = conn;
  this.projectId = projectId;
  // the default transaction has no id.
  // if id is not set, run operations non-transactional.
  this.id = null;
  this.isFinalized = false;
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
  var that = this;
  var req = new pb.BeginTransactionRequest();
  var res = pb.BeginTransactionResponse;
  this.createRequest('beginTransaction', req, res, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    that.id = resp.transaction;
    callback(null);
  });
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
  var that = this;
  var req = new pb.RollbackRequest({ transaction: this.id });
  var res = pb.RollbackResponse;
  this.createRequest('rollback', req, res, function(err) {
    if (err) {
      callback(err);
      return;
    }
    that.isFinalized = true;
    callback(null);
  });
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
  var that = this;
  var req = new pb.CommitRequest({ transaction: this.id });
  var res = pb.CommitResponse;
  this.createRequest('commit', req, res, function(err) {
    if (err) {
      callback(err);
      return;
    }
    that.isFinalized = true;
    callback(null);
  });
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
 */
Transaction.prototype.mapQuery = function() {
  throw new Error('not yet implemented');
};

/**
 * Exports Transaction
 * @type {Transaction}
 */
module.exports = Transaction;
