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
 * @module datastore/dataset
 */

'use strict';

var nodeutil = require('util');

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:datastore/entity
 * @private
 */
var entity = require('./entity.js');

/**
 * @type module:datastore/query
 * @private
 */
var Query = require('./query.js');

/**
 * @type module:datastore/transaction
 * @private
 */
var Transaction = require('./transaction.js');

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

/**
 * Scopes for Google Datastore access.
 * @const {array} SCOPES
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/datastore',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * Interact with a dataset from the
 * [Google Cloud Datastore]{@link https://developers.google.com/datastore/}.
 *
 * @constructor
 * @alias module:datastore/dataset
 * @mixes module:datastore/request
 *
 * @param {object=} options - Configuration object.
 * @param {string=} options.projectId - Dataset ID. This is your project ID from
 *     the Google Developers Console.
 * @param {string=} options.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} options.credentials - Credentials object, used in place of
 *     a `keyFilename`.
 * @param {string} options.namespace - Namespace to isolate transactions to.
 *
 * @example
 * var dataset = datastore.dataset({
 *   projectId: 'my-project',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
function Dataset(options) {
  if (!(this instanceof Dataset)) {
    return new Dataset(options);
  }

  options = options || {};

  this.connection = new conn.Connection({
    credentials: options.credentials,
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });

  this.projectId = options.projectId;
  this.namespace = options.namespace;
}

nodeutil.inherits(Dataset, DatastoreRequest);

/**
 * Helper to create a Key object, scoped to the dataset's namespace by default.
 *
 * You may also specify a configuration object to define a namespace and path.
 *
 * @param {...*=} options - Key path. To specify or override a namespace,
 *     you must use an object here to explicitly state it.
 * @param {object=} options - Configuration object.
 * @param {...*=} options.path - Key path.
 * @param {string=} options.namespace - Optional namespace.
 *
 * @example
 * var key;
 *
 * // Create an incomplete key from the dataset namespace, kind='Company'
 * key = dataset.key('Company');
 *
 * // A complete key from the dataset namespace, kind='Company', id=123
 * key = dataset.key(['Company', 123]);
 *
 * // A complete key from the dataset namespace, kind='Company', name='Google'
 * // Note: `id` is used for numeric identifiers and `name` is used otherwise
 * key = dataset.key(['Company', 'Google']);
 *
 * // A complete key from a provided namespace and path.
 * key = dataset.key({
 *   namespace: 'My-NS',
 *   path: ['Company', 123]
 * });
 *
 * @return {Key} A newly created Key from the options given.
 */
Dataset.prototype.key = function(options) {
  options = util.is(options, 'object') ? options : {
    namespace: this.namespace,
    path: util.arrayize(options)
  };
  return new entity.Key(options);
};

/**
 * Create a query from the current dataset to query the specified kinds, scoped
 * to the namespace provided at the initialization of the dataset.
 *
 * *Dataset query reference: {@link http://goo.gl/Cag0r6}*
 *
 * @borrows {module:datastore/query} as createQuery
 * @see {module:datastore/query}
 *
 * @param {string=} namespace - Optional namespace.
 * @param {string|array} kinds - Kinds to query.
 * @return {module:datastore/query}
 */
Dataset.prototype.createQuery = function(namespace, kinds) {
  if (arguments.length === 1) {
    kinds = util.arrayize(namespace);
    namespace = this.namespace;
  }
  return new Query(namespace, util.arrayize(kinds));
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
 * dataset.runInTransaction(function(transaction, done) {
 *   // From the `transaction` object, execute dataset methods as usual.
 *   // Call `done` when you're ready to commit all of the changes.
 *   transaction.get(dataset.key(['Company', 123]), function(err, entity) {
 *     if (err) {
 *       transaction.rollback(done);
 *       return;
 *     }
 *
 *     done();
 *   });
 * }, function(err) {});
 */
Dataset.prototype.runInTransaction = function(fn, callback) {
  var newTransaction = this.createTransaction_();
  newTransaction.begin(function(err) {
    if (err) {
      callback(err);
      return;
    }
    fn(newTransaction, newTransaction.finalize.bind(newTransaction, callback));
  });
};

/**
 * Create a new Transaction object using the existing connection and dataset.
 *
 * @return {module:datastore/transaction}
 * @private
 */
Dataset.prototype.createTransaction_ = function() {
  return new Transaction(this.connection, this.projectId);
};

module.exports = Dataset;
