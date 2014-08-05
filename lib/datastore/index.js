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

'use strict';

var conn = require('../common/connection.js');
var entity = require('./entity.js');
var Query = require('./query.js').Query;
var util = require('../common/util.js');

var DATASTORE_BASE_URL =
    'https://www.googleapis.com/datastore/v1beta2/datasets';
var MODE_NON_TRANSACTIONAL = 'NON_TRANSACTIONAL';
var MODE_TRANSACTIONAL = 'TRANSACTIONAL';
var SCOPES = [
  'https://www.googleapis.com/auth/datastore',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * Transaction represents a Datastore transaction.
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
 * Begins starts a remote transaction and identifies the current
 * transaction instance with the remote transaction's ID.
 */
Transaction.prototype.begin = function(callback) {
  callback = callback || util.noop;
  var that = this;
  this.makeReq('beginTransaction', null, function(err, resp) {
    if (!err) {
      that.id = resp.transaction;
    }
    callback(err);
  });
};

/**
 * Rollback rollsback a transaction remotely and finalizes
 * the current transaction instance.
 */
Transaction.prototype.rollback = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var req = { transaction: this.id };
  this.makeReq('rollback', req, function(err) {
    if (!err) {
      that.isFinalized = true;
    }
    callback(err);
  });
};

/**
 * Commit commits the remote transaction and finalizes the
 * current transaction instance.
 */
Transaction.prototype.commit = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var req = { transaction: this.id };
  this.makeReq('commit', req, function(err) {
    if (!err) {
      that.isFinalized = true;
    }
    callback(err);
  });
};

/**
 * Finalize commits a transaction if it's not finalized yet.
 */
Transaction.prototype.finalize = function(callback) {
  if (!this.isFinalized) {
    return this.commit(callback);
  }
  callback();
};

/**
 * Get retrieves the objects identified with the specified key(s) in the
 * current transaction.
 * @param  {Array}    keys
 * @param  {Function} callback
 */
Transaction.prototype.get = function(keys, callback) {
  var isMultipleRequest = Array.isArray(keys[0]);
  keys = isMultipleRequest ? keys : [keys];
  callback = callback || util.noop;
  var req = {
    keys: keys.map(entity.keyToKeyProto.bind(null, this.id))
  };
  if (this.id) {
    req.transaction = this.id;
  }
  this.makeReq(
      'lookup', req, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var response = entity.formatArray(resp.found);
    callback(null, isMultipleRequest ? response : response[0]);
  });
};

/**
 * Inserts or upates the specified object(s) in the current transaction.
 * If a key is incomplete, its associated object is inserted and
 * generated identifier is returned.
 * @param  {Array<Object>}   entities
 * @param  {Function} callback
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
      ent.key = entity.keyToKeyProto(this.datasetId, entityObject.key);
      if (entity.isKeyComplete(entityObject.key)) {
        acc.upsert.push(ent);
      } else {
        insertIndexes.push(index);
        acc.insertAutoId.push(ent);
      }
      return acc;
    }.bind(this), { upsert: [], insertAutoId: [] })
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  this.makeReq(
      'commit', req, function(err, resp) {
    if (err || !resp) {
      return callback(err);
    }
    (resp.mutationResult.insertAutoIdKeys || []).forEach(function(key, index) {
      keys[insertIndexes[index]] = entity.keyFromKeyProto(key);
    });
    callback(null, isMultipleRequest ? keys : keys[0]);
  });
};

/**
 * Deletes all entities identified with the specified list of key(s)
 * in the current transaction.
 * @param  {Array<Array>}  keys
 * @param  {Function}      callback
 */
Transaction.prototype.delete = function(keys, callback) {
  var isMultipleRequest = Array.isArray(keys[0]);
  keys = isMultipleRequest ? keys : [keys];
  callback = callback || util.noop;
  var req = {
    mode: MODE_NON_TRANSACTIONAL,
    mutation: {
      delete: keys.map(entity.keyToKeyProto.bind(null, this.id))
    }
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  this.makeReq('commit', req, callback);
};

/**
 * Runs a query in the current transaction. If more results are
 * available, a query to retrieve the next page is provided to
 * the callback function. Example:
 *
 * t.runQuery(q, function(err, entities, nextQuery) {
 *   if (err) return;
 *   // if next page is available, retrieve more results
 *   if (nextQuery) {
 *     t.runQuery(nextQuery, ...);
 *   }
 * });
 * @param  {Query}    q
 * @param  {Function} callback
 */
Transaction.prototype.runQuery = function(q, callback) {
  callback = callback || util.noop;
  var req = {
    readOptions: {
      transaction: this.id
    },
    query: entity.queryToQueryProto(q)
  };
  if (q.namespace) {
    req.partitionId = {
      namespace: q.namespace
    };
  }
  this.makeReq('runQuery', req, function(err, resp) {
    if (err || !resp.batch || !resp.batch.entityResults) {
      return callback(err);
    }
    var nextQuery = null;
    if (resp.batch.endCursor && resp.batch.endCursor !== q.startVal) {
      nextQuery = q.start(resp.batch.endCursor).offset(0);
    }
    callback(null, entity.formatArray(resp.batch.entityResults), nextQuery);
  });
};

Transaction.prototype.mapQuery = function() {
  throw new Error('not yet implemented');
};

/**
 * Makes a request to the API endpoint.
 */
Transaction.prototype.makeReq = function(method, req, callback) {
  // TODO(jbd): Switch to protobuf API.
  // Always pass a value for json to automagically get headers/response parsing.
  req = req || {};
  this.conn.req({
    method: 'POST',
    uri: DATASTORE_BASE_URL + '/' + this.datasetId + '/' + method,
    json: req
  }, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

/**
 * Creates a new dataset with the provided options.
 * @param {object} opts             Dataset identifier options.
 * @param {string} opts.id          Dataset ID, this is your project ID
 *                                  from Google Developers Console.
 * @param {string} opts.keyFilename Path to the JSON key file downloaded from
 *                                  Google Developers Console.
 */
function Dataset(opts) {
  opts = opts || {};
  var id = opts.projectId || '';

  if (id.indexOf('s~') === -1 && id.indexOf('e~') === -1) {
    id = 's~' + id;
  }

  this.id = id;
  this.transaction = new Transaction(new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  }), this.id);
}

/**
 * Creates a query from the current dataset to query the specified
 * kinds.
 *
 * Example usage:
 *   ds.createQuery(['Lion', 'Chimp'])
 *   ds.createQuery('zoo', ['Lion', 'Chimp'])
 *
 * @param  {string=}       ns      Optional namespace to query entities from.
 * @param  {Array<String>} kinds A list of kinds to query.
 * @return {Query}
 */
Dataset.prototype.createQuery = function(ns, kinds) {
  if (!kinds) {
    kinds = ns;
    ns = '';
  }
  kinds = util.arrayize(kinds);
  return new Query(ns, kinds);
};

/**
 * Gets the object identified with the provided key.
 * @param  {Key}        key       A non-incomplete key.
 * @param  {Function}   callback  The callback function.
 */
Dataset.prototype.get = function(key, callback) {
  this.transaction.get(key, callback);
};

Dataset.prototype.save = function(key, obj, callback) {
  this.transaction.save(key, obj, callback);
};

Dataset.prototype.delete = function(key, callback) {
  this.transaction.delete(key, callback);
};

Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

Dataset.prototype.runInTransaction = function(fn, callback) {
  var t = new Transaction(this.transaction.conn, this.id);
  var done = function() {
    t.finalize(callback);
  };
  t.begin(function(err) {
    if (err) {
      return callback(err);
    }
    fn(t, done);
  });
};

Dataset.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.');
  }
  var incompleteKeys = [];
  for (var i = 0; i < n; i++) {
    incompleteKeys.push(entity.keyToKeyProto(this.id, incompleteKey));
  }
  this.transaction.makeReq(
      'allocateIds', { keys: incompleteKeys }, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var keys = [];
    resp.keys.forEach(function(k) {
      keys.push(entity.keyFromKeyProto(k));
    });
    callback(null ,keys);
  });
};

/**
 * Exports Dataset.
 * @type {Dataset}
 */
module.exports.Dataset = Dataset;

/**
 * Exports Transaction.
 * @type {Transaction}
 */
module.exports.Transaction = Transaction;
