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
 * @module datastore/request
 */

'use strict';

var https = require('https');

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
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string} Host to send with API requests.
 * @private
 */
var GOOGLE_APIS_HOST = 'www.googleapis.com';

/**
 * @const {string} Non-transaction mode key.
 * @private
 */
var MODE_NON_TRANSACTIONAL = 'NON_TRANSACTIONAL';

/**
 * @const {string} Transaction mode key.
 * @private
 */
var MODE_TRANSACTIONAL = 'TRANSACTIONAL';

/*! Developer Documentation
 *
 * Handles request logic for Datastore.
 *
 * Creates requests to the Dataset endpoint. Designed to be inherited by
 * datastore.Dataset and datastore.Transaction objects.
 *
 * @example
 * // Inherit in Dataset and Transaction
 * require('util').inherits(Dataset, DatastoreRequest);
 * require('util').inherits(Transaction, DatastoreRequest);
 */
/*
 * Handle logic for Datastore API operations.
 *
 * @constructor
 * @alias module:datastore/request
 * @mixin
 */
function DatastoreRequest() {}

/**
 * Retrieve the entities identified with the specified key(s) in the current
 * transaction. Get operations require a valid key to retrieve the
 * key-identified entity from Datastore.
 *
 * @param {Key|Key[]} keys - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or Transaction object.
 * //-
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
  var req = {
    key: keys.map(entity.keyToKeyProto)
  };
  this.makeReq_('lookup', req, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var found = entity.formatArray(resp.found);
    if (isMultipleRequest && resp.deferred && resp.deferred.length) {
      // There may be more results. Call `.get` again, and append the results.
      this.get(
          resp.deferred.map(entity.keyFromKeyProto), function(err, entities) {
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
 * Insert or update the specified object(s) in the current transaction. If a key
 * is incomplete, its associated object is inserted and its generated identifier
 * is returned to the callback.
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
 * @borrows {module:datastore/transaction#save} as save
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
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
 * // To specify an `excludeFromIndexes` value for a Datastore entity, pass in
 * // an array for the key's data. The above example would then look like:
 * transaction.save({
 *   key: dataset.key('Company'),
 *   data: [
 *     {
 *       name: 'rating',
 *       value: '10',
 *       excludeFromIndexes: false
 *     }
 *   ]
 * }, function(err, key) {});
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
    mutation: entities.reduce(function(acc, entityObject, index) {
      var ent = {};
      if (Array.isArray(entityObject.data)) {
        ent.property = entityObject.data.map(function(data) {
          data.value = entity.valueToProperty(data.value);
          if (util.is(data.excludeFromIndexes, 'boolean')) {
            data.value.indexed = !data.excludeFromIndexes;
            delete data.excludeFromIndexes;
          }
          return data;
        });
      } else {
        ent = entity.entityToEntityProto(entityObject.data);
      }
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
  this.makeReq_('commit', req, function(err, resp) {
    if (err || !resp) {
      callback(err);
      return;
    }
    if (this.id) {
      this.isFinalized = true;
    }
    var autoInserted = (resp.mutation_result.insert_auto_id_key || []);
    autoInserted.forEach(function(key, index) {
      keys[insertIndexes[index]] = entity.keyFromKeyProto(key);
    });
    callback(null, isMultipleRequest ? keys : keys[0]);
  }.bind(this));
};

/**
 * Delete all entities identified with the specified key(s) in the current
 * transaction.
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
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
    mutation: {
      delete: keys.map(entity.keyToKeyProto)
    }
  };
  this.makeReq_('commit', req, function(err) {
    if (!err && this.id) {
      this.isFinalized = true;
    }
    callback.apply(null, util.toArray(arguments));
  }.bind(this));
};

/**
 * Datastore allows you to query entities by kind, filter them by property
 * filters, and sort them by a property name. Projection and pagination are also
 * supported. If more results are available, a query to retrieve the next page
 * is provided to the callback function.
 *
 * @param {module:datastore/query} q - Query object.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
 *
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

  if (q.namespace) {
    req.partition_id = {
      namespace: q.namespace
    };
  }

  this.makeReq_('runQuery', req, function(err, resp) {
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
 * Generate IDs without creating entities.
 *
 * @param {Key} incompleteKey - The key object to complete.
 * @param {number} n - How many IDs to generate.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
 *
 * // The following call will create 100 new IDs from the Company kind, which
 * // exists under the default namespace.
 * transaction.allocateIds(incompleteKey, 100, function(err, keys) {});
 *
 * // You may prefer to create IDs from a non-default namespace by providing an
 * // incomplete key with a namespace. Similar to the previous example, the call
 * // below will create 100 new IDs, but from the Company kind that exists under
 * // the "ns-test" namespace.
 * var incompleteKey = dataset.key({
 *   namespace: 'ns-test',
 *   path: ['Company']
 * });
 * transaction.allocateIds(incompleteKey, 100, function(err, keys) {});
 */
DatastoreRequest.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.');
  }
  var incompleteKeys = [];
  for (var i = 0; i < n; i++) {
    incompleteKeys.push(entity.keyToKeyProto(incompleteKey));
  }
  var req = {
    key: incompleteKeys
  };
  this.makeReq_('allocateIds', req, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var keys = [];
    (resp.key || []).forEach(function(k) {
      keys.push(entity.keyFromKeyProto(k));
    });
    callback(null, keys);
  });
};

/**
 * Make a request to the API endpoint. Properties to indicate a transactional or
 * non-transactional operation are added automatically.
 *
 * @param {string} method - Datastore action (allocateIds, commit, etc.).
 * @param {object=} body - Request configuration object.
 * @param {function} callback - The callback function.
 *
 * @private
 *
 * @example
 * var deleteRequest = {
 *   mutation: {
 *     delete: [] // datastore key objects.
 *   }
 * };
 * transaction.makeReq('commit', deleteRequest, function(err) {});
 */
DatastoreRequest.prototype.makeReq_ = function(method, body, callback) {
  // TODO: Handle non-HTTP 200 cases.
  if (!callback) {
    callback = body;
    body = {};
  }
  callback = callback || util.noop;

  // Set properties to indicate if we're in a transaction or not.
  if (method === 'commit') {
    if (this.id) {
      body.mode = MODE_TRANSACTIONAL;
      body.transaction = this.id;
    } else {
      body.mode = MODE_NON_TRANSACTIONAL;
    }
  }

  if (method === 'lookup' && this.id) {
    body.read_options = body.read_options || {};
    body.read_options.transaction = this.id;
  }

  var pbKey = method[0].toUpperCase() + method.substr(1);
  var pbRequest = new pb[pbKey + 'Request'](body).toBuffer();
  var pbResponse = pb[pbKey + 'Response'];

  this.connection.createAuthorizedReq({
    method: 'POST',
    host: GOOGLE_APIS_HOST,
    path: '/datastore/v1beta2/datasets/' + this.projectId + '/' + method,
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
        util.handleResp(null, resp, buffer.toString(), function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback(null, pbResponse.decode(buffer));
        });
      });
    });
    remoteStream.on('error', callback);
    remoteStream.write(pbRequest);
    remoteStream.end();
  });
};

module.exports = DatastoreRequest;
