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

var arrify = require('arrify');
var concat = require('concat-stream');
var format = require('string-format-obj');
var is = require('is');
var propAssign = require('prop-assign');
var request = require('request').defaults({
  pool: {
    maxSockets: Infinity
  }
});
var split = require('split-array-stream');
var through = require('through2');
var extend = require('extend');

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
 * @type {module:datastore/query}
 * @private
 */
var Query = require('./query');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

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
 * // This is how to create a transaction object directly using this Transaction
 * // class. The following transaction object is created for use in the examples
 * // in this file below.
 * var dataset = gcloud.datastore.dataset({ projectId: 'project-id' });
 * var Transaction = require('gcloud/lib/datastore/transaction');
 * var transaction = new Transaction(dataset, 'my-project-id');
 * transaction.id = '1234'; // Give the transaction an ID.
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
 * @resource [Datasets: lookup API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/lookup}
 *
 * @throws {Error} If at least one Key object is not provided.
 *
 * @param {Key|Key[]} keys - Datastore key object(s).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object|object[]} callback.entity - The entity object(s) which match
 *     the provided keys.
 *
 * @example
 * //-
 * // Get a single entity.
 * //-
 * var key = dataset.key(['Company', 123]);
 *
 * dataset.get(key, function(err, entity) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.get(key, function(err, entity) {
 *     done();
 *   });
 * });
 *
 * //-
 * // Get multiple entities at once with a callback.
 * //-
 * var keys = [
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ];
 *
 * dataset.get(keys, function(err, entities) {});
 *
 * //-
 * // Or, get the entities as a readable object stream.
 * //-
 * dataset.get(keys)
 *   .on('error', function(err) {})
 *   .on('data', function(entity) {
 *     // entity is an entity object.
 *   })
 *   .on('end', function() {
 *     // All entities retrieved.
 *   });
 *
 * //-
 * // Here's how you would update the value of an entity with the help of the
 * // `save` method.
 * //-
 * dataset.get(key, function(err, entity) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   entity.data.newValue = true;
 *   dataset.save(entity, function(err) {});
 * });
 */
DatastoreRequest.prototype.get = function(keys, callback) {
  if (is.fn(callback)) {
    // Run this method in stream mode and send the results back to the callback.
    this.get(keys)
      .on('error', callback)
      .pipe(concat(function(results) {
        var isSingleLookup = !is.array(keys);
        callback(null, isSingleLookup ? results[0] : results);
      }));
    return;
  }

  keys = arrify(keys).map(entity.keyToKeyProto);

  if (keys.length === 0) {
    throw new Error('At least one Key object is required.');
  }

  var self = this;
  var stream = through.obj();

  function onApiResponse(err, resp) {
    if (err) {
      stream.destroy(err);
      return;
    }

    var entities = entity.formatArray(resp.found);
    var nextKeys = (resp.deferred || []).map(entity.keyFromKeyProto);

    split(entities, stream, function(streamEnded) {
      if (streamEnded) {
        return;
      }

      if (nextKeys.length > 0) {
        self.get(nextKeys, onApiResponse);
        return;
      }

      stream.push(null);
    });
  }

  this.makeReq_('lookup', { key: keys }, onApiResponse);

  return stream;
};

/**
 * Maps to {module:datastore/dataset#save}, forcing the method to be `insert`.
 */
DatastoreRequest.prototype.insert = function(entities, callback) {
  entities = arrify(entities).map(propAssign('method', 'insert'));
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
 * @resource [Datasets: commit API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/commit}
 *
 * @borrows {module:datastore/transaction#save} as save
 *
 * @throws {Error} If an unrecognized method is provided.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {string=} entities.method - Optional method to explicity use for save.
 *     The choices include 'insert', 'update', 'upsert' and 'insert_auto_id'.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
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
 * }, function(err) {
 *   console.log(key.path); // [ 'Company', 5669468231434240 ]
 *   console.log(key.namespace); // undefined
 * });
 *
 * //-
 * // Save a single entity using a provided name instead of auto-generated ID.
 * //
 * // Here we are providing a key with name instead of an ID. After saving, the
 * // original Key object used to save will be updated to contain the path with
 * // the name instead of a generated ID.
 * //-
 * var key = dataset.key(['Company', 'donutshack']);
 *
 * dataset.save({
 *   key: key,
 *   data: {
 *     name: 'DonutShack',
 *     rating: 8
 *   }
 * }, function(err) {
 *   console.log(key.path); // ['Company', 'donutshack']
 *   console.log(key.namespace); // undefined
 * });
 *
 * //-
 * // Save a single entity with a provided namespace. Namespaces allow for
 * // multitenancy. To read more about this, see
 * // [the Datastore docs on key concepts](https://goo.gl/M1LUAu).
 * //
 * // Here we are providing a key with namespace.
 * //-
 * var key = dataset.key({
 *   namespace: 'my-namespace',
 *   path: ['Company', 'donutshack']
 * });
 *
 * dataset.save({
 *   key: key,
 *   data: {
 *     name: 'DonutShack',
 *     rating: 8
 *   }
 * }, function(err) {
 *   console.log(key.path); // ['Company', 'donutshack']
 *   console.log(key.namespace); // 'my-namespace'
 * });
 *
 * //-
 * // Save different types of data, including ints, doubles, dates, booleans,
 * // blobs, and lists.
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
 *     name: 'DonutShack', // strings
 *     rating: gcloud.datastore.int(8), // ints
 *     worth: gcloud.datastore.double(123456.78), // doubles
 *     numDonutsServed: 45, // detect number type (int or double)
 *     founded: new Date('Tue May 12 2015 15:30:00 GMT-0400 (EDT)'), // dates
 *     isStartup: true, // booleans
 *     donutEmoji: new Buffer('\uD83C\uDF69'), // buffers
 *     keywords: [ 'donut', 'coffee', 'yum' ] // lists of objects
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
  entities = arrify(entities);

  var insertIndexes = [];

  var mutation = {
    insert: [],
    update: [],
    upsert: [],
    insert_auto_id: []
  };

  // Iterate over the entity objects, build a proto from all keys and values,
  // then place in the correct mutation array (insert, update, etc).
  entities.forEach(function(entityObject, index) {
    entityObject = extend(true, {}, entityObject);

    var entityProto = {};
    var method = entityObject.method;

    if (is.array(entityObject.data)) {
      entityProto.property = entityObject.data.map(function(data) {
        data.value = entity.valueToProperty(data.value);

        if (is.boolean(data.excludeFromIndexes)) {
          var indexed = !data.excludeFromIndexes;

          if (is.array(data.value.list_value)) {
            data.value.list_value =
              data.value.list_value.map(propAssign('indexed', indexed));
          } else {
            data.value.indexed = indexed;
          }

          delete data.excludeFromIndexes;
        }

        return data;
      });
    } else {
      entityProto = entity.entityToEntityProto(entityObject.data);
    }

    entityProto.key = entity.keyToKeyProto(entityObject.key);

    if (method) {
      if (mutation[method]) {
        mutation[method].push(entityProto);

        if (method === 'insert_auto_id') {
          insertIndexes.push(index);
        }
      } else {
        throw new Error('Method ' + method + ' not recognized.');
      }
    } else {
      if (entity.isKeyComplete(entityObject.key)) {
        mutation.upsert.push(entityProto);
      } else {
        insertIndexes.push(index);
        mutation.insert_auto_id.push(entityProto);
      }
    }
  });

  var req = {
    mutation: mutation
  };

  if (this.id) {
    this.requests_.push(req);
    this.requestCallbacks_.push(onCommit);
    return;
  }

  this.makeReq_('commit', req, onCommit);

  function onCommit(err, resp) {
    if (err || !resp) {
      callback(err, resp);
      return;
    }

    var autoInserted = (resp.mutation_result.insert_auto_id_key || []);
    autoInserted.forEach(function(key, index) {
      var id = entity.keyFromKeyProto(key).id;
      entities[insertIndexes[index]].key.id = id;
    });

    callback(null, resp);
  }
};

/**
 * Delete all entities identified with the specified key(s).
 *
 * @resource [Datasets: commit API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/commit#mutation.delete}
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * dataset.delete(dataset.key(['Company', 123]), function(err, apiResp) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.delete(dataset.key(['Company', 123]), function(err, apiResp) {
 *     done();
 *   });
 * });
 *
 * //-
 * // Delete multiple entities at once.
 * //-
 * dataset.delete([
 *   dataset.key(['Company', 123]),
 *   dataset.key(['Product', 'Computer'])
 * ], function(err, apiResponse) {});
 */
DatastoreRequest.prototype.delete = function(keys, callback) {
  callback = callback || util.noop;

  var req = {
    mutation: {
      delete: arrify(keys).map(entity.keyToKeyProto)
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
 * the second argument to your callback. A third argument may also exist, which
 * is a query object that uses the end cursor from the previous query as the
 * starting cursor for the next query. You can pass that object back to this
 * method to see if more results exist.
 *
 * You may also omit the callback to this function to trigger streaming mode.
 *
 * See below for examples of both approaches.
 *
 * @resource [Datasets: runQuery API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/runQuery}
 *
 * @param {module:datastore/query} q - Query object.
 * @param {function=} callback - The callback function. If omitted, a readable
 *     stream instance is returned.
 * @param {?error} callback.err - An error returned while making this request
 *     (may be null).
 * @param {object[]} callback.entities - A list of entity objects which match
 *     the provided keys.
 * @param {?module:datastore/query} callback.nextQuery - If present, run another
 *     query with this object to check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Dataset or a Transaction object.
 * //-
 * var query = dataset.createQuery('Lion');
 *
 * dataset.runQuery(query, function(err, entities) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.runQuery(query, function(err, entities) {
 *     done();
 *   });
 * })
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, call `autoPaginate(false)` on your query.
 * //-
 * var manualPageQuery = dataset.createQuery('Lion').autoPaginate(false);
 *
 * var callback = function(err, entities, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results might exist.
 *     transaction.runQuery(nextQuery, callback);
 *   }
 * };
 *
 * dataset.runQuery(manualPageQuery, callback);
 *
 * //-
 * // If you omit the callback, runQuery will automatically call subsequent
 * // queries until no results remain. Entity objects will be pushed as they are
 * // found.
 * //-
 * dataset.runQuery(query)
 *   .on('error', console.error)
 *   .on('data', function (entity) {})
 *   .on('end', function() {
 *     // All entities retrieved.
 *   });
 *
 * //-
 * // A keys-only query returns just the keys of the result entities instead of
 * // the entities themselves, at lower latency and cost.
 * //-
 * var keysOnlyQuery = dataset.createQuery('Lion').select('__key__');
 *
 * dataset.runQuery(keysOnlyQuery, function(err, entities) {
 *   // entities[].key = Key object
 *   // entities[].data = Empty object
 * });
 */
DatastoreRequest.prototype.runQuery = function(query, callback) {
  var req = {
    read_options: {},
    query: entity.queryToQueryProto(query)
  };

  if (query.namespace) {
    req.partition_id = {
      namespace: query.namespace
    };
  }

  this.makeReq_('runQuery', req, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var entities = entity.formatArray(resp.batch.entity_result);
    var nextQuery = null;

    if (resp.batch.end_cursor && entities.length > 0) {
      var endCursor = resp.batch.end_cursor.toBase64();

      nextQuery = extend(true, new Query(), query);
      nextQuery.start(endCursor).offset(0);
    }

    callback(null, entities, nextQuery, resp);
  });
};

/**
 * Generate IDs without creating entities.
 *
 * @resource [Datasets: allocateIds API Documentation]{@link https://cloud.google.com/datastore/docs/apis/v1beta2/datasets/allocateIds}
 *
 * @param {Key} incompleteKey - The key object to complete.
 * @param {number} n - How many IDs to generate.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {array} callback.keys - The generated IDs
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var incompleteKey = dataset.key(['Company']);
 *
 * // The following call will create 100 new IDs from the Company kind, which
 * // exists under the default namespace.
 * dataset.allocateIds(incompleteKey, 100, function(err, keys) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * dataset.runInTransaction(function(transaction, done) {
 *   transaction.allocateIds(incompleteKey, 100, function(err, keys) {
 *     done();
 *   });
 * });
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
 * dataset.allocateIds(incompleteKey, 100, callback);
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
  entities = arrify(entities).map(propAssign('method', 'update'));
  this.save(entities, callback);
};

/**
 * Maps to {module:datastore/dataset#save}, forcing the method to be `upsert`.
 */
DatastoreRequest.prototype.upsert = function(entities, callback) {
  entities = arrify(entities).map(propAssign('method', 'upsert'));
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
 *
 * var dataset = gcloud.datastore.dataset({ projectId: 'project-id' });
 * var callback = function(err, result, apiResponse) {};
 * var Transaction = require('gcloud/lib/datastore/transaction');
 * var transaction = new Transaction(dataset, 'my-project-id');
 * transaction.makeReq_('commit', deleteRequest, callback);
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

  if (method === 'rollback') {
    body.transaction = this.id;
  }

  if (this.id && (method === 'lookup' || method === 'runQuery')) {
    body.read_options = body.read_options || {};
    body.read_options.transaction = this.id;
  }

  var pbKey = method[0].toUpperCase() + method.substr(1);
  var pbRequest = new pb[pbKey + 'Request'](body).toBuffer();
  var pbResponse = pb[pbKey + 'Response'];

  var reqOpts = {
    method: 'POST',
    uri: format('{apiEndpoint}/{path}/{datasetId}/{method}', {
      apiEndpoint: this.apiEndpoint,
      path: 'datastore/v1beta2/datasets',
      datasetId: this.datasetId,
      method: method
    }),
    body: is.empty(body) ? '' : pbRequest,
    encoding: null,
    headers: {
      'Content-Type': 'application/x-protobuf'
    }
  };

  this.makeAuthenticatedRequest_(reqOpts, {
    onAuthenticated: function(err, authenticatedReqOpts) {
      if (err) {
        callback(err, null);
        return;
      }

      request(authenticatedReqOpts, function(err, resp, body) {
        if (err) {
          callback(err, null);
          return;
        }

        var parsedResp = util.parseHttpRespMessage(resp);

        if (parsedResp.err) {
          callback(parsedResp.err, null, parsedResp.resp);
          return;
        }

        var parsedBody = util.parseHttpRespBody(pbResponse.decode(body));

        if (parsedBody.err) {
          callback(parsedBody.err, null, parsedResp.resp);
          return;
        }

        callback(null, parsedBody.body, resp);
      });
    }
  });
};

/*! Developer Documentation
 *
 * This method can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(DatastoreRequest, 'runQuery');

module.exports = DatastoreRequest;
