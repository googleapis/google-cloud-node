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
 * @type module:datastore/pb
 * @private
 */
var pb = require('./pb.js');

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
 *
 * @param {object=} options
 * @param {string} options.projectId - Dataset ID. This is your project ID from
 *     the Google Developers Console.
 * @param {string=} options.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} options.credentials - Credentials object, used in place of
 *     a `keyFilename`.
 * @param {string} options.namespace - Namespace to isolate transactions to.
 *
 * @example
 * var dataset = new datastore.Dataset({
 *   projectId: 'my-project',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
function Dataset(options) {
  options = options || {};

  this.connection = new conn.Connection({
    credentials: options.credentials,
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });
  this.id = options.projectId;
  this.namespace = options.namespace;
  this.transaction = this.createTransaction_();
}

/**
 * Helper to create a Key object, scoped to the dataset's namespace by default.
 *
 * You may also specify a configuration object to define a namespace and path.
 *
 * @example
 * var key;
 *
 * // Create a key from the dataset's namespace.
 * key = dataset.key('Company', 123);
 *
 * // Create a key from a provided namespace and path.
 * key = dataset.key({
 *   namespace: 'My-NS',
 *   path: ['Company', 123]
 * });
 */
Dataset.prototype.key = function(keyConfig) {
  if (!util.is(keyConfig, 'object')) {
    keyConfig = {
      namespace: this.namespace,
      path: util.toArray(arguments)
    };
  }
  return new entity.Key(keyConfig);
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
 * Retrieve the entities identified with the specified key(s) in the current
 * transaction. Get operations require a valid key to retrieve the
 * key-identified entity from Datastore.
 *
 * @borrows {module:datastore/transaction#get} as get
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * dataset.get([
 *   dataset.key('Company', 123),
 *   dataset.key('Product', 'Computer')
 * ], function(err, entities) {});
 */
Dataset.prototype.get = function(key, callback) {
  this.transaction.get(key, callback);
};

/**
 * Insert or update the specified object(s) in the current transaction. If a
 * key is incomplete, its associated object is inserted and its generated
 * identifier is returned to the callback.
 *
 * @borrows {module:datastore/transaction#save} as save
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object} entities.data - Data to save with the provided key.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Save a single entity.
 * dataset.save({
 *   key: dataset.key('Company', null),
 *   data: {
 *     rating: '10'
 *   }
 * }, function(err, key) {
 *   // Because we gave an incomplete key as an argument, `key` will be
 *   // populated with the complete, generated key.
 * });
 *
 * // Save multiple entities at once.
 * dataset.save([
 *   {
 *     key: dataset.key('Company', 123),
 *     data: {
 *       HQ: 'Dallas, TX'
 *     }
 *   },
 *   {
 *     key: dataset.key('Product', 'Computer'),
 *     data: {
 *       vendor: 'Dell'
 *     }
 *   }
 * ], function(err, keys) {});
 */
Dataset.prototype.save = function(key, obj, callback) {
  this.transaction.save(key, obj, callback);
};

/**
 * Delete all entities identified with the specified key(s) in the current
 * transaction.
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @borrows {module:datastore/transaction#delete} as delete
 *
 * @example
 * // Delete a single entity.
 * dataset.delete(dataset.key('Company', 123), function(err) {});
 *
 * // Delete multiple entities at once.
 * dataset.delete([
 *   dataset.key('Company', 123),
 *   dataset.key('Product', 'Computer')
 * ], function(err) {});
 */
Dataset.prototype.delete = function(key, callback) {
  this.transaction.delete(key, callback);
};

/**
 * Datastore allows you to query entities by kind, filter them by property
 * filters, and sort them by a property name. Projection and pagination are also
 * supported. If more results are available, a query to retrieve the next page
 * is provided to the callback function.
 *
 * @borrows {module:datastore/transaction#runQuery} as runQuery
 *
 * @param {module:datastore/query} query - Query object.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Retrieve 5 companies.
 * dataset.runQuery(queryObject, function(err, entities, nextQuery) {
 *   // `nextQuery` is not null if there are more results.
 *   if (nextQuery) {
 *     dataset.runQuery(nextQuery, function(err, entities, nextQuery) {});
 *   }
 * });
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
 * dataset.runInTransaction(function(transaction, done) {
 *   // From the `transaction` object, execute dataset methods as usual.
 *   // Call `done` when you're ready to commit all of the changes.
 *   transaction.get(dataset.key('Company', 123), function(err, entity) {
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
 * Generate IDs without creating entities.
 *
 * @param {Key} incompleteKey - The key object to complete.
 * @param {number} n - How many IDs to generate.
 * @param {function} callback - The callback function.
 *
 * @example
 * // The following call will create 100 new IDs from the Company kind, which
 * // exists under the default namespace.
 * var incompleteKey = dataset.key('Company', null);
 * dataset.allocateIds(incompleteKey, 100, function(err, keys) {});
 *
 * // You may prefer to create IDs from a non-default namespace by providing an
 * // incomplete key with a namespace. Similar to the previous example, the call
 * // below will create 100 new IDs, but from the Company kind that exists under
 * // the "ns-test" namespace.
 * var incompleteKey = dataset.key('ns-test', 'Company', null);
 * dataset.allocateIds(incompleteKey, 100, function(err, keys) {});
 */
Dataset.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.');
  }
  var incompleteKeys = [];
  for (var i = 0; i < n; i++) {
    incompleteKeys.push(entity.keyToKeyProto(incompleteKey));
  }
  this.transaction.makeReq(
      'allocateIds',
      new pb.AllocateIdsRequest({ key: incompleteKeys }),
      pb.AllocateIdsResponse, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var keys = [];
    (resp.key || []).forEach(function(k) {
      keys.push(entity.keyFromKeyProto(k));
    });
    callback(null ,keys);
  });
};

/**
 * Create a new Transaction object using the existing connection and dataset.
 *
 * @return {module:datastore/transaction}
 * @private
 */
Dataset.prototype.createTransaction_ = function() {
  return new Transaction(this.connection, this.id);
};

module.exports = Dataset;
