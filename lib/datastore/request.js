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

/**
 * @private
 * @module datastore/request
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
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

function DatastoreRequest() {}

/**
 * Retrieve the entities identified with the specified key(s) in the current
 * transaction. Get operations require a valid key to retrieve the
 * key-identified entity from Datastore.
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Get a single entity.
 * transaction.get(dataset.key(['Company', 123]), function(err, entity) {});
 *
 * // Get multiple entities at once.
 * transaction.get([
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ], function(err, entities) {});
 */
DatastoreRequest.prototype.get = function(keys, callback) {
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
  this.createRequest('lookup', req, res, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var found = entity.formatArray(resp.found);
    if (isMultipleRequest && resp.deferred && resp.deferred.length) {
      // There may be more results. Call `.get` again, and append the results.
      this.get(
          resp.deferred.map(entity.keyFromKeyProto), function (err, entities) {
        if (err) {
          callback(err);
          return;
        }
        if (resp) {
          found = (found || []).concat(entities);
        }
        callback(null, found);
      });
      return;
    }
    callback(null, isMultipleRequest ? found : found[0]);
  }.bind(this));
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
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Save a single entity.
 * transaction.save({
 *   key: dataset.key('Company'),
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
 *     key: dataset.key(['Company', 123]),
 *     data: {
 *       HQ: 'Dallas, TX'
 *     }
 *   },
 *   {
 *     key: dataset.key(['Product', 'Computer']),
 *     data: {
 *       vendor: 'Dell'
 *     }
 *   }
 * ], function(err, keys) {});
 */
DatastoreRequest.prototype.save = function(entities, callback) {
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
  this.createRequest('commit', req, res, function(err, resp) {
    if (err || !resp) {
      callback(err);
      return;
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
 * // These examples work with both a Transaction object and a Dataset object.
 *
 * // Delete a single entity.
 * transaction.delete(dataset.key(['Company', 123]), function(err) {});
 *
 * // Delete multiple entities at once.
 * transaction.delete([
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ], function(err) {});
 */
DatastoreRequest.prototype.delete = function(keys, callback) {
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
  this.createRequest('commit', req, res, callback);
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
 * // Retrieve 5 companies.
 * transaction.runQuery(queryObject, function(err, entities, nextQuery) {
 *   // `nextQuery` is not null if there are more results.
 *   if (nextQuery) {
 *     transaction.runQuery(nextQuery, function(err, entities, nextQuery) {});
 *   }
 * });
 */

DatastoreRequest.prototype.runQuery = function(q, callback) {
  callback = callback || util.noop;
  var req = {
    read_options: {},
    query: entity.queryToQueryProto(q)
  };

  if(this.id) {
    req.read_options.transaction = this.id;
  }

  if (q.namespace) {
    req.partition_id = {
      namespace: q.namespace
    };
  }

  req = new pb.RunQueryRequest(req);
  var res = pb.RunQueryResponse;

  this.createRequest('runQuery', req, res, function(err, resp) {
    if (err || !resp.batch || !resp.batch.entity_result) {
      callback(err);
      return;
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
 * Make a request to the API endpoint.
 *
 * @param {string} method - Transaction action (allocateIds, commit, etc.).
 * @param {object} req - Request configuration object.
 * @param {function} callbcak - The callback function.
 *
 * @example
 * var deleteRequest = {
 *   MODE: 'NON_TRANSACTIONAL',
 *   mutation: {
 *     delete: [] // datastore key objects.
 *   }
 * };
 * transaction.makeReq('commit', deleteRequest, function(err) {});
 */
DatastoreRequest.prototype.createRequest =
  function(method, req, respType, cb) {
  // TODO: Handle non-HTTP 200 cases.
  cb = cb || util.noop;
  this.connection.createAuthorizedReq({
    method: 'POST',
    host: GOOGLE_APIS_HOST,
    path: '/datastore/v1beta2/datasets/' + this.projectId + '/' + method,
    headers: {
      'content-type': 'application/x-protobuf'
    }
  }, function(err, request) {
    if (err) {
      cb(err);
      return;
    }
    var remoteStream = https.request(request, function(resp) {
      var buffer = new Buffer('');
      resp.on('data', function(chunk) {
        buffer = Buffer.concat([buffer, chunk]);
      });
      resp.on('end', function() {
        util.handleResp(null, resp, buffer.toString(), function(err) {
          if (err) {
            cb(err);
            return;
          }
          cb(null, respType.decode(buffer));
        });
      });
    });
    remoteStream.on('error', cb);
    remoteStream.write(req.toBuffer());
    remoteStream.end();
  });
};

module.exports = DatastoreRequest;
