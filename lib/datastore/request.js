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

var streamEvents = require('stream-events');
var request = require('request');
var through = require('through2');

/**
 * @type {module:datastore/entity}
 * @private
 */
var entity = require('./entity.js');

/**
 * @type {module:datastore/pb}
 * @private
 */
var pb = require('./pb.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

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
 * var key = dataset.key(['Company', 123]);
 * transaction.get(key, function(err, entity, apiResponse) {});
 *
 * // Get multiple entities at once.
 * transaction.get([
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ], function(err, entities, apiResponse) {});
 */
DatastoreRequest.prototype.get = function(keys, callback) {
  var that = this;

  var isMultipleRequest = Array.isArray(keys);
  keys = isMultipleRequest ? keys : [keys];

  callback = callback || util.noop;

  var req = {
    key: keys.map(entity.keyToKeyProto)
  };

  this.makeReq_('lookup', req, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var found = entity.formatArray(resp.found);

    if (isMultipleRequest && resp.deferred && resp.deferred.length) {
      // There may be more results. Call `.get` again, and append the results.
      that.get(
          resp.deferred.map(entity.keyFromKeyProto), function(err, entities) {
        if (err) {
          callback(err, null, resp);
          return;
        }

        if (resp) {
          found = (found || []).concat(entities);
        }

        callback(null, found, resp);
      });

      return;
    }

    callback(null, isMultipleRequest ? found : found[0], resp);
  });
};

/**
 * Maps to {module:datastore/dataset#save}, forcing the method to be `insert`.
 */
DatastoreRequest.prototype.insert = function(entities, callback) {
  entities = util.arrayize(entities).map(util.propAssign('method', 'insert'));
  this.save(entities, callback);
};

/**
 * Insert or update the specified object(s). If a key is incomplete, its
 * associated object is inserted and the original Key object is updated to
 * contain the generated ID.
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
 * @param {string=} entities.method - Optional method to explicity use for save.
 *     The choices include 'insert', 'update', 'upsert' and 'auto_insert_id'.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Save a single entity.
 * //
 * // Notice that we are providing an incomplete key. After saving, the original
 * // Key object used to save will be updated to contain the path with its
 * // generated ID.
 * //-
 * var key = dataset.key('Company');
 *
 * dataset.save({
 *   key: key,
 *   data: {
 *     rating: '10'
 *   }
 * }, function(err) {});
 *
 * //-
 * // To specify an `excludeFromIndexes` value for a Datastore entity, pass in
 * // an array for the key's data. The above example would then look like:
 * //-
 * dataset.save({
 *   key: dataset.key('Company'),
 *   data: [
 *     {
 *       name: 'rating',
 *       value: '10',
 *       excludeFromIndexes: false
 *     }
 *   ]
 * }, function(err) {});
 *
 * //-
 * // Save multiple entities at once.
 * //-
 * var companyKey = dataset.key(['Company', 123]);
 * var productKey = dataset.key(['Product', 'Computer']);
 *
 * dataset.save([
 *   {
 *     key: companyKey,
 *     data: {
 *       HQ: 'Dallas, TX'
 *     }
 *   },
 *   {
 *     key: productKey,
 *     data: {
 *       vendor: 'Dell'
 *     }
 *   }
 * ], function(err) {});
 *
 * //-
 * // Explicitly attempt to 'insert' a specific entity.
 * //-
 * var userKey = dataset.key(['User', 'chilts']);
 *
 * dataset.save([
 *   {
 *     key: userKey,
 *     method: 'insert', // force the method to 'insert'
 *     data: {
 *       fullName: 'Andrew Chilton'
 *     }
 *   }
 * ], function(err, apiResponse) {});
 */
DatastoreRequest.prototype.save = function(entities, callback) {
  entities = util.arrayize(entities);

  var insertIndexes = [];

  var req = {
    mutation: entities.reduce(function(acc, entityObject, index) {
      var ent = {};
      var method = entityObject.method;
      delete entityObject.method;

      if (Array.isArray(entityObject.data)) {
        ent.property = entityObject.data.map(function(data) {
          data.value = entity.valueToProperty(data.value);

          if (util.is(data.excludeFromIndexes, 'boolean')) {
            var indexed = !data.excludeFromIndexes;

            if (util.is(data.value.list_value, 'array')) {
              data.value.list_value =
                data.value.list_value.map(util.propAssign('indexed', indexed));
            } else {
              data.value.indexed = indexed;
            }

            delete data.excludeFromIndexes;
          }

          return data;
        });
      } else {
        ent = entity.entityToEntityProto(entityObject.data);
      }

      ent.key = entity.keyToKeyProto(entityObject.key);

      if (method) {
        switch (method) {
          case 'insert':
            acc.insert.push(ent);
            break;
          case 'update':
            acc.update.push(ent);
            break;
          case 'upsert':
            acc.upsert.push(ent);
            break;
          case 'insert_auto_id':
            insertIndexes.push(index);
            acc.insert_auto_id.push(ent);
            break;
        }
      } else {
        if (entity.isKeyComplete(entityObject.key)) {
          acc.upsert.push(ent);
        } else {
          insertIndexes.push(index);
          acc.insert_auto_id.push(ent);
        }
      }

      return acc;
    }, {
      insert: [],
      update: [],
      upsert: [],
      insert_auto_id: []
    })
  };

  if (this.id) {
    this.requests_.push(req);
    this.requestCallbacks_.push(onCommit);
    return;
  } else {
    this.makeReq_('commit', req, onCommit);
  }

  function onCommit(err, resp) {
    if (err || !resp) {
      callback(err, resp);
      return;
    }

    var autoInserted = (resp.mutation_result.insert_auto_id_key || []);
    autoInserted.forEach(function(key, index) {
      var path = entity.keyFromKeyProto(key).path;
      entities[insertIndexes[index]].key.path = path;
    });

    callback(null, resp);
  }
};

/**
 * Delete all entities identified with the specified key(s).
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 *
 * @example
 * // Delete a single entity.
 * dataset.delete(dataset.key(['Company', 123]), function(err) {});
 *
 * // Delete multiple entities at once.
 * dataset.delete([
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ], function(err, apiResponse) {});
 */
DatastoreRequest.prototype.delete = function(keys, callback) {
  callback = callback || util.noop;

  var req = {
    mutation: {
      delete: util.arrayize(keys).map(entity.keyToKeyProto)
    }
  };

  if (this.id) {
    this.requests_.push(req);
    return;
  }

  this.makeReq_('commit', req, callback);
};

/**
 * Datastore allows you to query entities by kind, filter them by property
 * filters, and sort them by a property name. Projection and pagination are also
 * supported.
 *
 * If you provide a callback, the query is run, and the results are returned as
 * the second argument to your callback. A third argument will also exist, which
 * is the `endCursor` of the previously-run query. You can use this to extend
 * the query you just ran to see if more results exist.
 *
 * You may also omit the callback to this function to trigger streaming mode.
 *
 * See below for examples of both approaches.
 *
 * @param {module:datastore/query} q - Query object.
 * @param {function=} callback - The callback function. If omitted, a readable
 *     stream instance is returned.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
 *
 * // Retrieve 5 companies.
 * transaction.runQuery(query, function(err, entities, endCursor, apiResponse) {
 *   // Use `endCursor` as the starting cursor for your next query.
 *   var nextQuery = query.start(endCursor);
 *   var callback = function(err, entities, endCursor, apiResponse) {};
 *   transaction.runQuery(nextQuery, callback);
 * });
 *
 * //-
 * // If you omit the callback, runQuery will automatically call subsequent
 * // queries until no results remain. Entity objects will be pushed as they are
 * // found.
 * //-
 * transaction.runQuery(queryObject)
 *   .on('data', function (entity) {});
 */
DatastoreRequest.prototype.runQuery = function(q, callback) {
  var that = this;
  var stream;
  var resultsToSend = q.limitVal;

  var req = {
    read_options: {},
    query: entity.queryToQueryProto(q)
  };

  if (q.namespace) {
    req.partition_id = {
      namespace: q.namespace
    };
  }

  if (!util.is(callback, 'function')) {
    stream = streamEvents(through.obj());
    stream.once('reading', runQuery);
    return stream;
  } else {
    runQuery();
  }

  function runQuery() {
    that.makeReq_('runQuery', req, function(err, resp) {
      if (err) {
        if (stream) {
          stream.emit('error', err, resp);
          stream.end();
        } else {
          callback(err, null, null, resp);
        }
        return;
      }

      var entities = entity.formatArray(resp.batch.entity_result);

      var cursor = '';
      if (resp.batch.end_cursor) {
        cursor = resp.batch.end_cursor.toBase64();
      }

      if (!stream) {
        callback(null, entities, cursor, resp);
        return;
      }

      if (!cursor || entities.length === 0) {
        stream.end();
        return;
      }

      var result;
      while ((result = entities.shift()) && resultsToSend !== 0) {
        stream.push(result);
        resultsToSend--;
      }

      if (resultsToSend === 0) {
        stream.end();
        return;
      }

      req.query = entity.queryToQueryProto(q.start(cursor).offset(0));
      runQuery();
    });
  }
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
 * var callback = function(err, keys, apiResponse) {};
 * transaction.allocateIds(incompleteKey, 100, callback);
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
      callback(err, null, resp);
      return;
    }

    var keys = (resp.key || []).map(entity.keyFromKeyProto);

    callback(null, keys, resp);
  });
};

/**
 * Maps to {module:datastore/dataset#save}, forcing the method to be `update`.
 */
DatastoreRequest.prototype.update = function(entities, callback) {
  entities = util.arrayize(entities).map(util.propAssign('method', 'update'));
  this.save(entities, callback);
};

/**
 * Maps to {module:datastore/dataset#save}, forcing the method to be `upsert`.
 */
DatastoreRequest.prototype.upsert = function(entities, callback) {
  entities = util.arrayize(entities).map(util.propAssign('method', 'upsert'));
  this.save(entities, callback);
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
 * var callback = function(err, result, apiResponse) {};
 * transaction.makeReq('commit', deleteRequest, callback);
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

  var reqOpts = {
    method: 'POST',
    uri: util.format('{apiEndpoint}/{path}/{projectId}/{method}', {
      apiEndpoint: this.apiEndpoint,
      path: 'datastore/v1beta2/datasets',
      projectId: this.projectId,
      method: method
    }),
    headers: {
      'Content-Type': 'application/x-protobuf'
    }
  };

  this.makeAuthorizedRequest_(reqOpts, {
    onAuthorized: function(err, authorizedReqOpts) {
      if (err) {
        callback(err, null); // TODO(ryanseys): What goes as third parameter?
        return;
      }

      authorizedReqOpts.headers = authorizedReqOpts.headers || {};
      authorizedReqOpts.headers['Content-Length'] = pbRequest.length;

      var apiRequest = request(authorizedReqOpts);

      apiRequest.on('error', callback);

      apiRequest.on('response', function(resp) {
        var buffer = new Buffer('');
        resp.on('data', function(chunk) {
          buffer = Buffer.concat([buffer, chunk]);
        });
        resp.on('end', function() {
          util.handleResp(null, resp, buffer.toString(), function(err, result) {
            if (err) {
              callback(err, null, result);
              return;
            }
            callback(null, pbResponse.decode(buffer), result);
          });
        });
      });

      apiRequest.end(pbRequest);
    }
  });
};

module.exports = DatastoreRequest;
