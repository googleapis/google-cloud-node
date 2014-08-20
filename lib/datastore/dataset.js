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
 * @module datastore/dataset
 */

'use strict';

/** @type module:common/connection */
var conn = require('../common/connection.js');

/** @type module:datastore/entity */
var entity = require('./entity.js');

/** @type module:datastore/pb */
var pb = require('./pb.js');

/** @type module:datastore/query */
var Query = require('./query.js');

/** @type module:datastore/transaction */
var Transaction = require('./transaction.js');

/** @type module:common/util */
var util = require('../common/util.js');

/**
 * Scopes for Google Datastore access.
 * @const {array} SCOPES
 */
var SCOPES = [
  'https://www.googleapis.com/auth/datastore',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * Intract with a dataset from the
 * [Google Cloud Datastore]{@link https://developers.google.com/datastore/}.
 *
 * @constructor
 * @alias module:datastore/dataset
 *
 * @param {object} options
 * @param {string} options.projectId - Dataset ID. This is your project ID from
 *     the Google Developers Console.
 * @param {string} options.keyFileName - Full path to the JSON key downloaded
 *     from the Google Developers Console.
 * @param {string=} options.namespace - Namespace. If none provided, the default
 *     namespace is used.
 *
 * @example
 * ```js
 * var dataset = new Dataset({
 *   projectId: 'my-project',
 *   keyFileName: '/path/to/keyfile.json'
 * });
 * ```
 */
function Dataset(opts) {
  opts = opts || {};

  this.connection = new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  });
  this.id = opts.projectId;
  this.namespace = opts.namespace || null;
  this.transaction = this.createTransaction_();
}

/**
 * Create a query from the current dataset to query the specified kinds.
 *
 * @borrows {module:datastore/query} as createQuery
 *
 * @example
 * ```js
 * var query = dataset.createQuery(['Lion', 'Chimp']);
 * ```
 * @return {module:datastore/query}
 */
Dataset.prototype.createQuery = function(kinds) {
  kinds = util.arrayize(kinds);
  return new Query(kinds);
};

/**
 * @borrows {module:datastore/transaction#get} as get
 */
Dataset.prototype.get = function(key, callback) {
  this.transaction.get(key, callback);
};

/**
 * @borrows {module:datastore/transaction#save} as save
 */
Dataset.prototype.save = function(key, obj, callback) {
  this.transaction.save(key, obj, callback);
};

/**
 * @borrows {module:datastore/transaction#delete} as delete
 */
Dataset.prototype.delete = function(key, callback) {
  this.transaction.delete(key, callback);
};

/**
 * @borrows {module:datastore/transaction#runQuery} as runQuery
 */
Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

/**
 * Run a function in the context of a new transaction. Transactions allow you to
 * perform multiple operations, committing your changes atomically.
 *
 * @borrows {module:datastore/transaction#begin} as runInTransaction
 *
 * @param {function} fn - The function to run in the context of a transaction.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * dataset.transaction(function(transaction, done) {
 *   // From the `transaction` object, execute dataset methods as usual.
 *   // Call `done` when you're ready to commit all of the changes.
 *   transaction.get(ds.key('Company', 123), function(err, entity) {
 *     if (err) {
 *       transaction.rollback(done);
 *       return;
 *     }
 *
 *     done();
 *   });
 * }, function(err) {});
 * ```
 */
Dataset.prototype.runInTransaction = function(fn, callback) {
  var newTransaction = this.createTransaction_();
  newTransaction.begin(function(err) {
    if (err) {
      return callback(err);
    }
    fn(newTransaction, newTransaction.finalize.bind(newTransaction, callback));
  });
};

/**
 * Generate IDs without creating entities.
 *
 * @param {Key} incompleteKey - The key object to complete.
 * @param {number} n - How many IDs to generate.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // The following call will create 100 new IDs from the Company kind, which
 * // exists under the dataset's namespace.
 * var incompleteKey = ds.key('Company', null);
 * dataset.allocateIds(incompleteKey, 100, function(err, keys) {});
 * ```
 */
Dataset.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.');
  }
  // TODO(jbd): Add namespace to keys.
  var incompleteKeys = [];
  var proto = entity.keyToKeyProto(incompleteKey);
  for (var i = 0; i < n; i++) {
    incompleteKeys.push(proto);
  }
  this.transaction.makeReq(
      'allocateIds',
      new pb.AllocateIdsRequest({ key: incompleteKeys }),
      pb.AllocateIdsResponse, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var keys = [];
    (resp.key || []).forEach(function(k) {
      keys.push(entity.keyFromKeyProto(k));
    });
    callback(null ,keys);
  });
};

/**
 * @borrows {module:datastore/entity~Key} as key
 *
 * @example
 * ```js
 * var key = ds.key('Company', 123);
 * ```
 */
Dataset.prototype.key = function() {
  return new entity.Key(this.namespace, [].slice.call(arguments));
};

/**
 * @borrows {module:datastore/entity~Int} as int
 *
 * @example
 * ```js
 * var anInteger = ds.int(7);
 * ```
 */
Dataset.prototype.int = function(value) {
  return new entity.Int(value);
};

/**
 * Helper function to get a Datastore Double object.
 *
 * @borrows {module:datastore/entity~Double} as double
 *
 * @example
 * ```js
 * var aDouble = ds.double(7);
 * ```
 */
Dataset.prototype.double = function(value) {
  return new entity.Double(value);
};

/**
 * Create a new Transaction object using the existing connection and dataset.
 *
 * @private
 * @return {module:datastore/transaction}
 */
Dataset.prototype.createTransaction_ = function() {
  return new Transaction(this.connection, this.id, this.namespace);
};

/**
 * Exports Dataset.
 * @type {Dataset}
 */
module.exports = Dataset;
