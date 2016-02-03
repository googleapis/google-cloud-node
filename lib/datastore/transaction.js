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

var arrify = require('arrify');
var nodeutil = require('util');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:datastore/request}
 * @private
 */
var DatastoreRequest = require('./request.js');

var extend = require('extend');

/*! Developer Documentation
 *
 * @param {module:common/connection#Connection} connection - An authenticated
 *     connection to Google Cloud Datastore.
 * @param {string} datasetId - Dataset ID.
 *
 * @example
 * // This is how to create a transaction object directly using this Transaction
 * // class. The following transaction object is created for use in the examples
 * // in this file below.
 * var dataset = gcloud.datastore.dataset({ projectId: 'project-id' });
 * var Transaction = require('gcloud/lib/datastore/transaction');
 * var transaction = new Transaction(dataset, 'my-project-id');
 * transaction.id = '1234'; // Give the transaction an ID.
 */
/**
 * Build a Transaction object. Transactions will be created for you by
 * {module:datastore/dataset}. When you need to run a transactional
 * operation, use {module:datastore/dataset#runInTransaction}.
 *
 * @resource [Transactions Reference]{@link https://cloud.google.com/datastore/docs/concepts/transactions}
 *
 * @constructor
 * @alias module:datastore/transaction
 * @mixes module:datastore/request
 *
 * @example
 * var datastore = gcloud.datastore;
 *
 * var dataset = datastore.dataset({
 *   projectId: 'my-project',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * dataset.runInTransaction(function(transaction, done) {
 *   // `transaction` is a Transaction object.
 * }, function(err) {});
 */
function Transaction(dataset, datasetId) {
  this.id = null;
  this.apiEndpoint = dataset.apiEndpoint;
  this.makeAuthenticatedRequest_ = dataset.makeAuthenticatedRequest_;
  this.datasetId = datasetId;

  // A queue for entity modifications made during the transaction.
  this.modifiedEntities_ = [];

  // Queue the callbacks that process the API responses.
  this.requestCallbacks_ = [];

  // Queue the requests to make when we send the transactional commit.
  this.requests_ = [];
}

nodeutil.inherits(Transaction, DatastoreRequest);

/**
 * Begin a remote transaction and identify the current transaction instance with
 * the remote transaction's ID.
 *
 * @param {function} callback - The function to execute within the context of
 *     a transaction.
 *
 * @private
 *
 * @example
 * transaction.begin_(function(err) {
 *   // Perform Datastore operations as usual.
 * });
 */
Transaction.prototype.begin_ = function(callback) {
  var that = this;

  callback = callback || util.noop;

  this.makeReq_('beginTransaction', function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    that.id = resp.transaction;

    callback(null, resp);
  });
};

/**
 * Reverse a transaction remotely and finalize the current transaction instance.
 *
 * @resource [Datasets: rollback API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/rollback}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.rollback(function(err, apiResponse) {
 *     if (err) {
 *       // Transaction could not be rolled back.
 *     }
 *     done();
 *   });
 * });
 */
Transaction.prototype.rollback = function(callback) {
  var that = this;

  callback = callback || util.noop;

  this.makeReq_('rollback', function(err, resp) {
    that.skipCommit = true;

    callback(err || null, resp);
  });
};

/**
 * Commit the remote transaction and finalize the current transaction instance.
 * This function is provided as the `done` function in the callback of
 * `dataset.runInTransaction(function(transaction, done) {});`
 *
 * @param {function} callback - The callback function.
 *
 * @private
 *
 * @example
 * transaction.commit_(function(err, apiResponse) {
 *   if (err) {
 *     // Transaction could not be committed.
 *   }
 * });
 */
Transaction.prototype.commit_ = function(callback) {
  var that = this;

  callback = callback || util.noop;

  if (this.skipCommit) {
    setImmediate(callback);
    return;
  }

  var keys = {};

  this.modifiedEntities_

    // Reverse the order of the queue to respect the "last queued request wins"
    // behavior.
    .reverse()

    // Limit the operations we're going to send through to only the most
    // recently queued operations. E.g., if a user tries to save with the same
    // key they just asked to be deleted, the delete request will be ignored,
    // giving preference to the save operation.
    .filter(function(modifiedEntity) {
      var key = JSON.stringify(modifiedEntity.entity.key);

      if (!keys[key]) {
        keys[key] = true;
        return true;
      }
    })

    // Group entities together by action (delete or save).
    .sort(function(a, b) {
      return a.method > b.method ? 1 : a.method < b.method ? -1 : 0;
    })

    // Group arguments together so that we only make one call to each method.
    // This is important for `DatastoreRequest.save`, especially, as that method
    // handles assigning auto-generated IDs to the original keys passed in. When
    // we eventually execute the `save` method's API callback, having all the
    // keys together is necessary to maintain order.
    .reduce(function(acc, entityObject) {
      var lastEntityObject = acc[acc.length - 1];
      var sameMethod = lastEntityObject &&
        entityObject.method === lastEntityObject.method;

      if (!lastEntityObject || !sameMethod) {
        acc.push(entityObject);
      } else {
        lastEntityObject.args = lastEntityObject.args.concat(entityObject.args);
      }

      return acc;
    }, [])

    // Call each of the mutational methods (DatastoreRequest[save,delete]) to
    // build up a `req` array on this instance. This will also build up a
    // `callbacks` array, that is the same callback that would run if we were
    // using `save` and `delete` outside of a transaction, to process the
    // response from the API.
    .forEach(function(modifiedEntity) {
      var method = modifiedEntity.method;
      var args = modifiedEntity.args.reverse();

      DatastoreRequest.prototype[method].call(that, args, util.noop);
    });

  // Take the `req` array built previously, and merge them into one request to
  // send as the final transactional commit.
  var req = this.requests_.reduce(function(acc, req) {
    return extend(true, acc, req);
  }, {});

  this.makeReq_('commit', req, function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    // The `callbacks` array was built previously. These are the callbacks that
    // handle the API response normally when using the DatastoreRequest.save and
    // .delete methods.
    that.requestCallbacks_.forEach(function(cb) {
      cb(null, resp);
    });

    callback(null, resp);
  });
};

/*! Developer Documentation
 *
 * Below, we override two methods that we inherit from DatastoreRequest:
 * `delete` and `save`. This is done because:
 *
 *   A) the documentation needs to be different for a transactional save, and
 *   B) we build up a "modifiedEntities_" array on this object, used to build
 *      the final commit request with.
 */
/**
 * Delete all entities identified with the specified key(s) in the current
 * transaction.
 *
 * @resource [Datasets: commit API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/commit#mutation.delete}
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 *
 * @example
 * dataset.runInTransaction(function(transaction, done) {
 *   // Delete a single entity.
 *   transaction.delete(dataset.key(['Company', 123]));
 *
 *   // Delete multiple entities at once.
 *   transaction.delete([
 *     dataset.key(['Company', 123]),
 *     dataset.key(['Product', 'Computer'])
 *   ]);
 *
 *   done();
 * });
 */
Transaction.prototype.delete = function(entities) {
  var that = this;

  arrify(entities).forEach(function(ent) {
    that.modifiedEntities_.push({
      entity: {
        key: ent
      },
      method: 'delete',
      args: [ent]
    });
  });
};

/**
 * Insert or update the specified object(s) in the current transaction. If a key
 * is incomplete, its associated object is inserted and the original Key object
 * is updated to contain the generated ID.
 *
 * This method will determine the correct Datastore method to execute (`upsert`,
 * `insert`, `update`, and `insertAutoId`) by using the key(s) provided. For
 * example, if you provide an incomplete key (one without an ID), the request
 * will create a new entity and have its ID automatically assigned. If you
 * provide a complete key, the entity will be updated with the data specified.
 *
 * By default, all properties are indexed. To prevent a property from being
 * included in *all* indexes, you must supply an entity's `data` property as an
 * array. See below for an example.
 *
 * @resource [Datasets: commit API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/commit}
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 *
 * @example
 * //-
 * // Save a single entity.
 * //
 * // Notice that we are providing an incomplete key. After the transaction is
 * // committed, the Key object held by the `key` variable will be populated
 * // with a path containing its generated ID.
 * //-
 * var key = dataset.key('Company');
 *
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.save({
 *     key: key,
 *     data: {
 *       rating: '10'
 *     }
 *   });
 *
 *   done();
 * });
 *
 * //-
 * // To specify an `excludeFromIndexes` value for a Datastore entity, pass in
 * // an array for the key's data. The above example would then look like:
 * //-
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.save({
 *     key: key,
 *     data: [
 *       {
 *         name: 'rating',
 *         value: '10',
 *         excludeFromIndexes: false
 *       }
 *     ]
 *   });
 *
 *   done();
 * });
 *
 * //-
 * // Save multiple entities at once.
 * //-
 * var companyKey = dataset.key(['Company', 123]);
 * var productKey = dataset.key(['Product', 'Computer']);
 *
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.save([
 *     {
 *       key: companyKey,
 *       data: {
 *         HQ: 'Dallas, TX'
 *       }
 *     },
 *     {
 *       key: productKey,
 *       data: {
 *         vendor: 'Dell'
 *       }
 *     }
 *   ]);
 *
 *   done();
 * });
 */
Transaction.prototype.save = function(entities) {
  var that = this;

  arrify(entities).forEach(function(ent) {
    that.modifiedEntities_.push({
      entity: {
        key: ent.key
      },
      method: 'save',
      args: [ent]
    });
  });
};

module.exports = Transaction;
