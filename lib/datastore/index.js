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

var conn = require('../common/connection.js'),
    entity = require('./entity.js'),
    Query = require('./query.js').Query,
    util = require('../common/util.js');

var DATASTORE_BASE_URL = 'https://www.googleapis.com/datastore/v1beta2/datasets',
    SCOPES = [
      'https://www.googleapis.com/auth/datastore',
      'https://www.googleapis.com/auth/userinfo.email'],
    MODE_NON_TRANSACTIONAL = 'NON_TRANSACTIONAL',
    MODE_TRANSACTIONAL = 'TRANSACTIONAL';

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
  var that = this;
  this.makeReq('beginTransaction', null, function(err, resp) {
    if (!err) {
      that.id = resp.transaction;
    }
    callback && callback(err);
  });
};

/**
 * Rollback rollsback a transaction remotely and finalizes
 * the current transaction instance.
 */
Transaction.prototype.rollback = function(callback) {
  var that = this;
  var req = { transaction: this.id };
  this.makeReq('rollback', req, function(err, resp) {
    if (!err) {
      that.isFinalized = true;
    }
    callback && callback(err);
  });
};

/**
 * Commit commits the remote transaction and finalizes the
 * current transaction instance.
 */
Transaction.prototype.commit = function(callback) {
  var that = this;
  var req = { transaction: this.id };
  this.makeReq('commit', req, function(err, resp) {
    if (!err) {
      that.isFinalized = true;
    }
    callback && callback(err);
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
 * Get retrieves the objects identified with the specified key in the
 * current transaction.
 * @param  {Array}    key
 * @param  {Function} callback
 */
Transaction.prototype.get = function(key, callback) {
  this.getAll([key], function(err, keys, objs) {
    if (err || objs.length < 0) {
      return callback(err);
    }
    return callback(null, keys[0], objs[0]);
  });
};

/**
 * Gets all objects identified with the specified list of keys
 * in the current transaction.
 * @param  {Array<Array>}   keys
 * @param  {Function}       callback
 */
Transaction.prototype.getAll = function(keys, callback) {
  keysProto = [];
  keys.forEach(function(k) {
    keysProto.push(entity.keyToKeyProto(this.id, k));
  });
  var req = { keys: keysProto };
  if (this.id) {
    req.transaction = this.id;
  }
  this.makeReq(
      'lookup', req, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var results = [], keys = [];
    resp.found.forEach(function(f) {
      keys.push(entity.keyFromKeyProto(f.entity.key));
      results.push(entity.entityFromEntityProto(f.entity));
    });
    callback && callback(null, keys, results);
  });
};

/**
 * Inserts or updates the specified the object in the current
 * transaction. If the provided key is incomplete, inserts the object
 * and returns the generated identifier.
 * @param  {Array}    key
 * @param  {Object}   obj
 * @param  {Function} callback
 */
Transaction.prototype.save = function(key, obj, callback) {
  this.saveAll([key], [obj], function(err, keys) {
    if (err || !keys) {
      return callback(err);
    }
    if (keys[0]) {
      return callback(err, keys[0]);
    }
    callback();
  });
};

/**
 * Inserts or upates the specified objects in the current transaction.
 * If a key is incomplete, its associated object is inserted and
 * generated identifier is returned.
 * @param  {Array<Array>}   keys
 * @param  {Array<Object>}  objs
 * @param  {Function} callback
 */
Transaction.prototype.saveAll = function(keys, objs, callback) {
  if (keys.length != objs.length) {
    throw new Error('The length of the keys don\'t match the length of the objects');
  }
  var insertIndexes = [];
  var req = {
    mode: MODE_NON_TRANSACTIONAL,
    mutation: {
      upsert: [],
      insertAutoId: []
    }
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  for (var i = 0; i < keys.length; i++) {
    var e = entity.entityToEntityProto(objs[i]);
    e.key = entity.keyToKeyProto(this.datasetId, keys[i]);
    if (entity.isKeyComplete(keys[i])) {
      req.mutation.upsert.push(e);
    } else {
      insertIndexes.push(i);
      req.mutation.insertAutoId.push(e);
    }
  }
  this.makeReq(
      'commit', req, function(err, resp) {
    if (err || !resp) {
      return callback(err);
    }
    resp.mutationResult.insertAutoIdKeys = resp.mutationResult.insertAutoIdKeys || [];
    var i = 0;
    resp.mutationResult.insertAutoIdKeys.forEach(function(item) {
      keys[insertIndexes[i++]] = entity.keyFromKeyProto(item);
    });
    callback(null, keys);
  });
};

/**
 * Deletes the entitiy identified with the specified key in the
 * current transaction.
 * @param  {Array}    key
 * @param  {Function} callback
 */
Transaction.prototype.del = function(key, callback) {
  this.delAll([key], callback);
};

/**
 * Deletes all entities identified with the specified list of keys
 * in the current transaction.
 * @param  {Array<Array>}  keys
 * @param  {Function}      callback
 */
Transaction.prototype.delAll = function(keys, callback) {
  keysProto = [];
  keys.forEach(function(k) {
    keysProto.push(entity.keyToKeyProto(this.id, k));
  });
  var req = {
    mode: MODE_NON_TRANSACTIONAL,
    mutation: {
      'delete': keysProto
    }
  };
  if (this.id) {
    req.transaction = this.id;
    req.mode = MODE_TRANSACTIONAL;
  }
  this.makeReq('commit', req, function(err, resp) {
    callback && callback(err);
  });
};

/**
 * Runs a query in the current transaction. If more results are
 * available, a query to retrieve the next page is provided to
 * the callback function. Example:
 *
 * t.runQuery(q, function(err, keys, objs, nextQuery) {
 *   if (err) return;
 *   // if next page is available, retrieve more results
 *   if (nextQuery) {
 *     t.runQuery(nextQuery, ...);
 *   }
 * });
 * @param  {Query}    q
 * @param  {Function} opt_callback
 */
Transaction.prototype.runQuery = function(q, opt_callback) {
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
      return opt_callback && opt_callback(err);
    }
    var results = resp.batch.entityResults,
        keys = [], objs = [];
    results.forEach(function(r) {
      keys.push(entity.keyFromKeyProto(r.entity.key));
      objs.push(entity.entityFromEntityProto(r.entity));
    });
    var nextQuery = null;
    if (resp.batch.endCursor && resp.batch.endCursor != q.startVal) {
      nextQuery = q.start(resp.batch.endCursor);
    }
    opt_callback && opt_callback(err, keys, objs, nextQuery);
  });
};

Transaction.prototype.mapQuery = function(q, mapperFn, opt_callback) {
  throw new Error('not yet implemented');
};

/**
 * Makes a request to the API endpoint.
 */
Transaction.prototype.makeReq = function(method, req, callback) {
  // TODO(jbd): Switch to protobuf API.
  // Always pass a value for json to automagically get headers/response parsing.
  req = req || true;
  this.conn.req({
    method: 'POST',
    uri: DATASTORE_BASE_URL + '/' + this.datasetId + '/' + method,
    json: req
  }, function(err, res, body) {
    if (body && body.error) {
      return callback(body.error, null);
    }
    callback(err, body);
  });
};

/**
 * Creates a new dataset with the provided options.
 * @param {object} opts             Dataset identifier options.
 * @param {string} opts.id          Dataset ID, this is your project ID
 *                                  from Google Developer Console.
 * @param {string} opts.email       Client email of the service account.
 * @param {string} opts.pemFilepath The path to the pem file.
 */
function Dataset(opts) {
  opts = opts || {};
  var id = opts.projectId || '';

  if (id.indexOf("s~") < 0 && id.indexOf("e~") < 0) {
    id = "s~" + id;
  }

  this.id = id;
  this.transaction = new Transaction(new conn.Connection({
    email: opts.email,
    privateKey: opts.pemFilePath,
    scopes: SCOPES
  }), this.id);
}

/**
 * Creates a query from the current dataset to query the specified
 * kinds.
 * @param  {Array<String>} kinds A list of kinds to query.
 * @return {Query}
 */
Dataset.prototype.createQuery = function(kinds) {
  kinds = util.arrayize(kinds);
  return new Query('', kinds);
};

/**
 * Creates a query for collections identified with the specified
 * namespace and kinds.
 *
 * Example usage:
 *   ds.createQueryNS('zoo', ['Lion', 'Chimp'])
 * @param  {string} ns      Namespace to query entities from.
 * @param  {Array<object>}  A list of kinds to query.
 * @return {Query}
 */
Dataset.prototype.createQueryNS = function(ns, kinds) {
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

Dataset.prototype.getAll = function(keys, callback) {
  this.transaction.getAll(keys, callback);
};

Dataset.prototype.save = function(key, obj, callback) {
  this.transaction.save(key, obj, callback);
};

Dataset.prototype.saveAll = function(keys, objs, callback) {
  this.transaction.saveAll(keys, objs, callback);
};

Dataset.prototype.del = function(key, callback) {
  this.transaction.del(key, callback);
};

Dataset.prototype.delAll = function(keys, callback) {
  this.transaction.delAll(keys, callback);
};

Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

Dataset.prototype.runInTransaction = function(fn, callback) {
  var t = new Transaction(this.transaction.conn, this.id);
  var done = function() {
    t.finalize(callback);
  };
  t.begin(function(err, id) {
    if (err) {
      return callback(err);
    }
    fn(t, done);
  });
};

Dataset.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.')
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
