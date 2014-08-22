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
 * @module datastore/transaction
 */

'use strict';

var https = require('https');

/** @type module:datastore/entity */
var entity = require('./entity.js');

/** @type module:datastore/pb */
var pb = require('./pb.js');

/** @type module:common/util */
var util = require('../common/util.js');

/** @const {string} Host to send with API requests. */
var GOOGLE_APIS_HOST = 'www.googleapis.com';

/** @const {string} Non-transaction mode key. */
var MODE_NON_TRANSACTIONAL = 'NON_TRANSACTIONAL';

/** @const {string} Transaction mode key. */
var MODE_TRANSACTIONAL = 'TRANSACTIONAL';

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
 * @param {string} datasetId - Dataset ID. This is your project ID from the
 *     Google Developers Console.
 *
 * @example
 * ```js
 * var Connection = require('lib/common/connection.js').Connection;
 * var myConnection = new Connection({});
 * var transaction = new Transaction(myConnection, 'my-project-id');
 * ```
 */
function Transaction(conn, datasetId) {
  this.conn = conn;
  this.datasetId = datasetId;
  // the default transaction has no id.
  // if id is not set, run operations non-transactional.
  this.id = null;
  this.isFinalized = false;
}

/**
 * Begin a remote transaction and identify the current transaction instance with
 * the remote transaction's ID.
 *
 * @param {function} callback - The function to execute within the context of
 *     a transaction.
 *
 * @example
 * ```js
 * transaction.begin(function(err) {
 *   // Perform Datastore operations as usual.
 *   transaction.get(datastore.key('Company', 123), function(err, entity) {
 *     // Commit the transaction.
 *     transaction.finalize(function(err) {});
 *
 *     // Rollback the transaction.
 *     transaction.rollback(function(err) {});
 *   });
 * });
 * ```
 */
Transaction.prototype.begin = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var req = new pb.BeginTransactionRequest();
  var res = pb.BeginTransactionResponse;
  this.makeReq('beginTransaction', req, res, function(err, resp) {
    if (!err) {
      that.id = resp.transaction;
    }
    callback(err);
  });
};

/**
 * Reverse a transaction remotely and finalize the current transaction instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * transaction.begin(function(err) {
 *   transaction.rollback(function(err) {
 *     if (err) {
 *       // Transaction could not be rolled back.
 *     }
 *   });
 * });
 * ```
 */
Transaction.prototype.rollback = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var req = new pb.RollbackRequest({ transaction: this.id });
  var res = pb.RollbackResponse;
  this.makeReq('rollback', req, res, function(err) {
    if (!err) {
      that.isFinalized = true;
    }
    callback(err);
  });
};

/**
 * Commit the remote transaction and finalize the current transaction instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * transaction.begin(function(err) {
 *   transaction.commit(function(err) {
 *     if (err) {
 *       // Transaction could not be committed.
 *     }
 *   });
 * });
 * ```
 */
Transaction.prototype.commit = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var req = new pb.CommitRequest({ transaction: this.id });
  var res = pb.CommitResponse;
  this.makeReq('commit', req, res, function(err) {
    if (!err) {
      that.isFinalized = true;
    }
    callback(err);
  });
};

/**
 * Commit a transaction if it's not finalized yet.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * transaction.begin(function(err) {
 *   transaction.finalize(function(err) {
 *     if (err) {
 *       // Transaction could not be finalized.
 *     }
 *   });
 * });
 * ```
 */
Transaction.prototype.finalize = function(callback) {
  if (!this.isFinalized) {
    return this.commit(callback);
  }
  callback();
};

/**
 * Retrieve the entities identified with the specified key(s) in the current
 * transaction. Get operations require a valid key to retrieve the
 * key-identified entity from Datastore.
 *
 * @param {module:datastore/entity~Key|module:datastore/entity~Key[]} key -
 *     Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Get a single entity.
 * transaction.get(datastore.key('Company', 123), function(err, entity));
 *
 * // Get multiple entities at once.
 * transaction.get([
 *   datastore.key('Company', 123),
 *   datastore.key('Product', 'Computer')
 * ], function(err, entities) {});
 * ```
 */
Transaction.prototype.get = function(keys, callback) {
  var isMultipleRequest = Array.isArray(keys);
  keys = isMultipleRequest ? keys : [keys];
  callback = callback || util.noop;
  var req = new pb.LookupRequest({
    key: keys.map(entity.keyToKeyProto)
  });
  var res = pb.LookupResponse;
  if (this.id) {
    req.transaction = this.id;
  }
  this.makeReq('lookup', req, res, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var response = entity.formatArray(resp.found);
    callback(null, isMultipleRequest ? response : response[0]);
  });
};

/**
 * Insert or update the specified object(s) in the current transaction. If a
 * key is incomplete, its associated object is inserted and its generated
 * identifier is returned to the callback.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object} entities.data - Data to save with the provided key.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Save a single entity.
 * transaction.save({
 *   key: datastore.key('Company', null),
 *   data: {
 *     rating: '10'
 *   }
 * }, function(err, key) {
 *   // Because we gave an incomplete key as an argument, `key` will be
 *   // populated with the complete, generated key.
 * });
 *
 * // Save multiple entities at once.
 * transaction.save([
 *   {
 *     key: datastore.key('Company', 123),
 *     data: {
 *       HQ: 'Dallas, TX'
 *     }
 *   },
 *   {
 *     key: datastore.key('Product', 'Computer'),
 *     data: {
 *       vendor: 'Dell'
 *     }
 *   }
 * ], function(err, keys) {});
 * ```
 */
Transaction.prototype.save = function(entities, callback) {
  var isMultipleRequest = Array.isArray(entities);
  entities = isMultipleRequest ? entities : [entities];
  var insertIndexes = [];
  var keys = entities.map(function(entityObject) {
    return entityObject.key;
  });
  var req = {
    mode: MODE_NON_TRANSACTIONAL,
    mutation: entities.reduce(function(acc, entityObject, index) {
      var ent = entity.entityToEntityProto(entityObject.data);
      ent.key = entity.keyToKeyProto(entityObject.key);
      if (entity.isKeyComplete(entityObject.key)) {
        acc.upsert.push(ent);
      } else {
        insertIndexes.push(index);
        acc.insert_auto_id.push(ent);
      }
      return acc;
    }.bind(this), { upsert: [], insert_auto_id: [] })
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  req = new pb.CommitRequest(req);
  var res = pb.CommitResponse;
  this.makeReq('commit', req, res, function(err, resp) {
    if (err || !resp) {
      return callback(err);
    }
    var autoInserted = (resp.mutation_result.insert_auto_id_key || []);
    autoInserted.forEach(function(key, index) {
      keys[insertIndexes[index]] = entity.keyFromKeyProto(key);
    });
    callback(null, isMultipleRequest ? keys : keys[0]);
  });
};

/**
 * Delete all entities identified with the specified key(s) in the current
 * transaction.
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Delete a single entity.
 * transaction.delete(datastore.key('Company', 123), function(err) {});
 *
 * // Delete multiple entities at once.
 * transaction.delete([
 *   datastore.key('Company', 123),
 *   datastore.key('Product', 'Computer')
 * ], function(err) {});
 * ```
 */
Transaction.prototype.delete = function(keys, callback) {
  var isMultipleRequest = Array.isArray(keys);
  keys = isMultipleRequest ? keys : [keys];
  callback = callback || util.noop;

  var req = {
    mode: MODE_NON_TRANSACTIONAL,
    mutation: {
      delete: keys.map(entity.keyToKeyProto)
    }
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  req = new pb.CommitRequest(req);
  var res = pb.CommitResponse;
  this.makeReq('commit', req, res, callback);
};

/**
 * Datastore allows you to query entities by kind, filter them by property
 * filters, and sort them by a property name. Projection and pagination are also
 * supported. If more results are available, a query to retrieve the next page
 * is provided to the callback function.
 *
 * @param {module:datastore/query} query - Query object.
 * @param {function} callback - The callback function.
 *
 * @example
 * ```js
 * // Retrieve 5 companies.
 * transaction.runQuery(queryObject, function(err, entities, nextQuery) {
 *   // `nextQuery` is not null if there are more results.
 *   if (nextQuery) {
 *     transaction.runQuery(nextQuery, function(err, entities, nextQuery) {});
 *   }
 * });
 * ```
 */
Transaction.prototype.runQuery = function(q, callback) {
  callback = callback || util.noop;
  var req = {
    read_options: {
      transaction: this.id
    },
    query: entity.queryToQueryProto(q)
  };
  if (q.namespace) {
    req.partition_id = {
      namespace: q.namespace
    };
  }
  req = new pb.RunQueryRequest(req);
  var res = pb.RunQueryResponse;
  this.makeReq('runQuery', req, res, function(err, resp) {
    if (err || !resp.batch || !resp.batch.entity_result) {
      return callback(err);
    }
    var nextQuery = null;
    if (resp.batch.end_cursor) {
      var cursor = resp.batch.end_cursor.toBase64();
      if (cursor !== q.startVal) {
        nextQuery = q.start(cursor).offset(0);
      }
    }
    callback(null, entity.formatArray(resp.batch.entity_result), nextQuery);
  });
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
 * Make a request to the API endpoint.
 *
 * @todo Handle non-HTTP 200 cases.
 *
 * @param {string} method - Transaction action (allocateIds, commit, etc.).
 * @param {object} req - Request configuration object.
 * @param {function} callbcak - The callback function.
 *
 * @example
 * ```js
 * var deleteRequest = {
 *   MODE: 'NON_TRANSACTIONAL',
 *   mutation: {
 *     delete: [] // datastore key objects.
 *   }
 * };
 * transaction.makeReq('commit', deleteRequest, function(err) {});
 * ```
 */
Transaction.prototype.makeReq = function(method, req, respType, callback) {
  callback = callback || util.noop;
  this.conn.createAuthorizedReq({
    method: 'POST',
    host: GOOGLE_APIS_HOST,
    path: '/datastore/v1beta2/datasets/' + this.datasetId + '/' + method,
    headers: {
      'content-type': 'application/x-protobuf'
    }
  }, function(err, request) {
    if (err) {
      callback(err);
      return;
    }
    var remoteStream = https.request(request, function(resp) {
      var buffer = new Buffer('');
      resp.on('data', function(chunk) {
        buffer = Buffer.concat([buffer, chunk]);
      });
      resp.on('end', function() {
        callback(null, respType.decode(buffer));
      });
    });
    remoteStream.on('error', callback);
    remoteStream.write(req.toBuffer());
    remoteStream.end();
  });
};

module.exports = Transaction;
