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
var common = require('@google-cloud/common');
var concat = require('concat-stream');
var extend = require('extend');
var grpc = require('grpc');
var is = require('is');
var propAssign = require('prop-assign');
var split = require('split-array-stream');
var streamEvents = require('stream-events');
var through = require('through2');

var v1 = require('./v1');

/**
 * @type {module:datastore/entity}
 * @private
 */
var entity = require('./entity.js');

/**
 * @type {module:datastore/query}
 * @private
 */
var Query = require('./query.js');

/**
 * A map of read consistency values to proto codes.
 *
 * @type {object}
 * @private
 */
var CONSISTENCY_PROTO_CODE = {
  eventual: 2,
  strong: 1
};

/*! Developer Documentation
 *
 * Handles request logic for Datastore.
 *
 * Creates requests to the Datastore endpoint. Designed to be inherited by
 * {module:datastore} and {module:datastore/transaction} objects.
 */
/**
 * Handle logic for Datastore API operations.
 *
 * @constructor
 * @alias module:datastore/request
 * @mixin
 */
function DatastoreRequest() {}

/**
 * Format a user's input to mutation methods. This will create a deep clone of
 * the input, as well as allow users to pass an object in the format of an
 * entity.
 *
 * Both of the following formats can be supplied supported:
 *
 *     datastore.save({
 *       key: datastore.key('Kind'),
 *       data: { foo: 'bar' }
 *     }, function(err) {})
 *
 *     var entity = { foo: 'bar' }
 *     entity[datastore.KEY] = datastore.key('Kind')
 *     datastore.save(entity, function(err) {})
 *
 * @private
 *
 * @resource [#1803]{@link https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1803}
 *
 * @param {object} obj - The user's input object.
 */
DatastoreRequest.prepareEntityObject_ = function(obj) {
  var entityObject = extend(true, {}, obj);

  // Entity objects are also supported.
  if (obj[entity.KEY_SYMBOL]) {
    return {
      key: obj[entity.KEY_SYMBOL],
      data: entityObject
    };
  }

  return entityObject;
};

/**
 * Generate IDs without creating entities.
 *
 * @param {Key} incompleteKey - The key object to complete.
 * @param {number|object} options - Either the number of IDs to allocate or
 *     an options object for further customization of the request.
 * @param {number} options.allocations - How many IDs to allocate.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {array} callback.keys - The generated IDs
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var incompleteKey = datastore.key(['Company']);
 *
 * //-
 * // The following call will create 100 new IDs from the Company kind, which
 * // exists under the default namespace.
 * //-
 * datastore.allocateIds(incompleteKey, 100, function(err, keys) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * var transaction = datastore.transaction();
 *
 * transaction.run(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.allocateIds(incompleteKey, 100, function(err, keys) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 *
 * //-
 * // You may prefer to create IDs from a non-default namespace by providing an
 * // incomplete key with a namespace. Similar to the previous example, the call
 * // below will create 100 new IDs, but from the Company kind that exists under
 * // the "ns-test" namespace.
 * //-
 * var incompleteKey = datastore.key({
 *   namespace: 'ns-test',
 *   path: ['Company']
 * });
 *
 * function callback(err, keys, apiResponse) {}
 *
 * datastore.allocateIds(incompleteKey, 100, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * datastore.allocateIds(incompleteKey, 100).then(function(data) {
 *   var keys = data[0];
 *   var apiResponse = data[1];
 * });
 */
DatastoreRequest.prototype.allocateIds = function(key, options, callback) {
  if (entity.isKeyComplete(key)) {
    throw new Error('An incomplete key should be provided.');
  }

  if (is.number(options)) {
    options = {
      allocations: options
    };
  }

  var incompleteKeys = [];
  incompleteKeys.length = options.allocations;
  incompleteKeys.fill(entity.keyToKeyProto(key));

  this.request_({
    client: 'datastoreClient',
    method: 'allocateIds',
    reqOpts: {
      keys: incompleteKeys
    },
    gaxOpts: options.gaxOptions
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var keys = arrify(resp.keys).map(entity.keyFromKeyProto);

    callback(null, keys, resp);
  });
};

/**
 * Retrieve the entities as a readable object stream.
 *
 * @throws {Error} If at least one Key object is not provided.
 *
 * @param {Key|Key[]} keys - Datastore key object(s).
 * @param {object=} options - Optional configuration. See {module:datastore#get}
 *     for a complete list of options.
 *
 * @example
 * var keys = [
 *   datastore.key(['Company', 123]),
 *   datastore.key(['Product', 'Computer'])
 * ];
 *
 * datastore.createReadStream(keys)
 *   .on('error', function(err) {})
 *   .on('data', function(entity) {
 *     // entity is an entity object.
 *   })
 *   .on('end', function() {
 *     // All entities retrieved.
 *   });
 */
DatastoreRequest.prototype.createReadStream = function(keys, options) {
  var self = this;

  options = options || {};

  keys = arrify(keys).map(entity.keyToKeyProto);

  if (keys.length === 0) {
    throw new Error('At least one Key object is required.');
  }

  var stream = streamEvents(through.obj());

  stream.once('reading', function() {
    makeRequest(keys);
  });

  function makeRequest(keys) {
    var reqOpts = {
      keys: keys
    };

    if (options.consistency) {
      var code = CONSISTENCY_PROTO_CODE[options.consistency.toLowerCase()];

      reqOpts.readOptions = {
        readConsistency: code
      };
    }

    self.request_({
      client: 'datastoreClient',
      method: 'lookup',
      reqOpts: reqOpts,
      gaxOpts: options.gaxOptions
    }, function(err, resp) {
      if (err) {
        stream.destroy(err);
        return;
      }

      var entities = entity.formatArray(resp.found);
      var nextKeys = (resp.deferred || [])
        .map(entity.keyFromKeyProto)
        .map(entity.keyToKeyProto);

      split(entities, stream, function(streamEnded) {
        if (streamEnded) {
          return;
        }

        if (nextKeys.length > 0) {
          makeRequest(nextKeys);
          return;
        }

        stream.push(null);
      });
    });
  }

  return stream;
};

/**
 * Delete all entities identified with the specified key(s).
 *
 * @param {Key|Key[]} key - Datastore key object(s).
 * @param {object=} gaxOptions - Request configuration options, outlined here:
 *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var key = datastore.key(['Company', 123]);
 * datastore.delete(key, function(err, apiResp) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * var transaction = datastore.transaction();
 *
 * transaction.run(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.delete(key);
 *
 *   transaction.commit(function(err) {
 *     if (!err) {
 *       // Transaction committed successfully.
 *     }
 *   });
 * });
 *
 * //-
 * // Delete multiple entities at once.
 * //-
 * datastore.delete([
 *   datastore.key(['Company', 123]),
 *   datastore.key(['Product', 'Computer'])
 * ], function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * datastore.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
DatastoreRequest.prototype.delete = function(keys, gaxOptions, callback) {
  if (is.fn(gaxOptions)) {
    callback = gaxOptions;
    gaxOptions = {};
  }

  callback = callback || common.util.noop;

  var reqOpts = {
    mutations: arrify(keys).map(function(key) {
      return {
        delete: entity.keyToKeyProto(key)
      };
    })
  };

  if (this.id) {
    this.requests_.push(reqOpts);
    return;
  }

  this.request_({
    client: 'datastoreClient',
    method: 'commit',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, callback);
};

/**
 * Retrieve the entities identified with the specified key(s) in the current
 * transaction. Get operations require a valid key to retrieve the
 * key-identified entity from Datastore.
 *
 * @throws {Error} If at least one Key object is not provided.
 *
 * @param {Key|Key[]} keys - Datastore key object(s).
 * @param {object=} options - Optional configuration.
 * @param {string} options.consistency - Specify either `strong` or `eventual`.
 *     If not specified, default values are chosen by Datastore for the
 *     operation. Learn more about strong and eventual consistency
 *     [here](https://cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore).
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object|object[]} callback.entity - The entity object(s) which match
 *     the provided keys.
 *
 * @example
 * //-
 * // Get a single entity.
 * //-
 * var key = datastore.key(['Company', 123]);
 *
 * datastore.get(key, function(err, entity) {});
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * var transaction = datastore.transaction();
 *
 * transaction.run(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.get(key, function(err, entity) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 *
 * //-
 * // Get multiple entities at once with a callback.
 * //-
 * var keys = [
 *   datastore.key(['Company', 123]),
 *   datastore.key(['Product', 'Computer'])
 * ];
 *
 * datastore.get(keys, function(err, entities) {});
 *
 * //-
 * // Here's how you would update the value of an entity with the help of the
 * // `save` method.
 * //-
 * datastore.get(key, function(err, entity) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   entity.newValue = true;
 *
 *   datastore.save({
 *     key: key,
 *     data: entity
 *   }, function(err) {});
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * datastore.get(keys).then(function(data) {
 *   var entities = data[0];
 * });
 */
DatastoreRequest.prototype.get = function(keys, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.createReadStream(keys, options)
    .on('error', callback)
    .pipe(concat(function(results) {
      var isSingleLookup = !is.array(keys);
      callback(null, isSingleLookup ? results[0] : results);
    }));
};

/**
 * Maps to {module:datastore#save}, forcing the method to be `insert`.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 */
DatastoreRequest.prototype.insert = function(entities, callback) {
  entities = arrify(entities)
    .map(DatastoreRequest.prepareEntityObject_)
    .map(propAssign('method', 'insert'));

  this.save(entities, callback);
};

/**
 * Datastore allows you to query entities by kind, filter them by property
 * filters, and sort them by a property name. Projection and pagination are also
 * supported.
 *
 * The query is run, and the results are returned as the second argument to your
 * callback. A third argument may also exist, which is a query object that uses
 * the end cursor from the previous query as the starting cursor for the next
 * query. You can pass that object back to this method to see if more results
 * exist.
 *
 * @param {module:datastore/query} query - Query object.
 * @param {object=} options - Optional configuration.
 * @param {string} options.consistency - Specify either `strong` or `eventual`.
 *     If not specified, default values are chosen by Datastore for the
 *     operation. Learn more about strong and eventual consistency
 *     [here](https://cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore).
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 * @param {function=} callback - The callback function. If omitted, a readable
 *     stream instance is returned.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object[]} callback.entities - A list of entities.
 * @param {object} callback.info - An object useful for pagination.
 * @param {?string} callback.info.endCursor - Use this in a follow-up query to
 *     begin from where these results ended.
 * @param {string} callback.info.moreResults - Datastore responds with one of:
 *
 *     - {module:datastore#MORE_RESULTS_AFTER_LIMIT}: There *may* be more
 *       results after the specified limit.
 *     - {module:datastore#MORE_RESULTS_AFTER_CURSOR}: There *may* be more
 *       results after the specified end cursor.
 *     - {module:datastore#NO_MORE_RESULTS}: There are no more results.
 *
 * @example
 * //-
 * // Where you see `transaction`, assume this is the context that's relevant to
 * // your use, whether that be a Datastore or a Transaction object.
 * //-
 * var query = datastore.createQuery('Lion');
 *
 * datastore.runQuery(query, function(err, entities, info) {
 *   // entities = An array of records.
 *
 *   // Access the Key object for an entity.
 *   var firstEntityKey = entities[0][datastore.KEY];
 * });
 *
 * //-
 * // Or, if you're using a transaction object.
 * //-
 * var transaction = datastore.transaction();
 *
 * transaction.run(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   transaction.runQuery(query, function(err, entities) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 *
 * //-
 * // A keys-only query returns just the keys of the result entities instead of
 * // the entities themselves, at lower latency and cost.
 * //-
 * var keysOnlyQuery = datastore.createQuery('Lion').select('__key__');
 *
 * datastore.runQuery(keysOnlyQuery, function(err, entities) {
 *   var keys = entities.map(function(entity) {
 *     return entity[datastore.KEY];
 *   });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * datastore.runQuery(query).then(function(data) {
 *   var entities = data[0];
 * });
 */
DatastoreRequest.prototype.runQuery = function(query, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var info;

  this.runQueryStream(query, options)
    .on('error', callback)
    .on('info', function(info_) {
      info = info_;
    })
    .pipe(concat(function(results) {
      callback(null, results, info);
    }));
};

/**
 * Get a list of entities as a readable object stream.
 *
 * See {module:datastore#runQuery} for a list of all available options.
 *
 * @param {module:datastore/query} query - Query object.
 * @param {object=} options - Optional configuration.
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 *
 * @example
 * datastore.runQueryStream(query)
 *   .on('error', console.error)
 *   .on('data', function(entity) {
 *     // Access the Key object for this entity.
 *     var key = entity[datastore.KEY];
 *   })
 *   .on('info', function(info) {})
 *   .on('end', function() {
 *     // All entities retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * datastore.runQueryStream(query)
 *   .on('data', function(entity) {
 *     this.end();
 *   });
 */
DatastoreRequest.prototype.runQueryStream = function(query, options) {
  var self = this;

  options = options || {};

  query = extend(true, new Query(), query);

  var stream = streamEvents(through.obj());

  stream.once('reading', function() {
    makeRequest(query);
  });

  function makeRequest(query) {
    var reqOpts = {
      query: entity.queryToQueryProto(query)
    };

    if (options.consistency) {
      var code = CONSISTENCY_PROTO_CODE[options.consistency.toLowerCase()];
      reqOpts.readOptions = {
        readConsistency: code
      };
    }

    if (query.namespace) {
      reqOpts.partitionId = {
        namespaceId: query.namespace
      };
    }

    self.request_({
      client: 'datastoreClient',
      method: 'runQuery',
      reqOpts: reqOpts,
      gaxOpts: options.gaxOptions
    }, onResultSet);
  }

  function onResultSet(err, resp) {
    if (err) {
      stream.destroy(err);
      return;
    }

    var info = {
      moreResults: resp.batch.moreResults
    };

    if (resp.batch.endCursor) {
      info.endCursor = resp.batch.endCursor;
    }

    var entities = [];

    if (resp.batch.entityResults) {
      entities = entity.formatArray(resp.batch.entityResults);
    }

    // Emit each result right away, then get the rest if necessary.
    split(entities, stream, function(streamEnded) {
      if (streamEnded) {
        return;
      }

      if (resp.batch.moreResults !== 'NOT_FINISHED') {
        stream.emit('info', info);
        stream.push(null);
        return;
      }

      // The query is "NOT_FINISHED". Get the rest of the results.
      var offset = query.offsetVal === -1 ? 0 : query.offsetVal;

      query
        .start(info.endCursor)
        .offset(offset - resp.batch.skippedResults);

      var limit = query.limitVal;
      if (limit && limit > -1) {
        query.limit(limit - resp.batch.entityResults.length);
      }

      makeRequest(query);
    });
  }

  return stream;
};

/**
 * Insert or update the specified object(s). If a key is incomplete, its
 * associated object is inserted and the original Key object is updated to
 * contain the generated ID.
 *
 * This method will determine the correct Datastore method to execute (`upsert`,
 * `insert`, or `update`) by using the key(s) provided. For example, if you
 * provide an incomplete key (one without an ID), the request will create a new
 * entity and have its ID automatically assigned. If you provide a complete key,
 * the entity will be updated with the data specified.
 *
 * By default, all properties are indexed. To prevent a property from being
 * included in *all* indexes, you must supply an entity's `data` property as an
 * array. See below for an example.
 *
 * @borrows {module:datastore/transaction#save} as save
 *
 * @throws {Error} If an unrecognized method is provided.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {string=} entities.method - Explicit method to use, either 'insert',
 *     'update', or 'upsert'.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {object=} gaxOptions - Request configuration options, outlined here:
 *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
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
 * var key = datastore.key('Company');
 * var entity = {
 *   key: key,
 *   data: {
 *     rating: '10'
 *   }
 * };
 *
 * datastore.save(entity, function(err) {
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
 * var key = datastore.key(['Company', 'donutshack']);
 * var entity = {
 *   key: key,
 *   data: {
 *     name: 'DonutShack',
 *     rating: 8
 *   }
 * };
 *
 * datastore.save(entity, function(err) {
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
 * var key = datastore.key({
 *   namespace: 'my-namespace',
 *   path: ['Company', 'donutshack']
 * });
 *
 * var entity = {
 *   key: key,
 *   data: {
 *     name: 'DonutShack',
 *     rating: 8
 *   }
 * };
 *
 * datastore.save(entity, function(err) {
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
 * var key = datastore.key('Company');
 * var entity = {
 *   key: key,
 *   data: {
 *     name: 'DonutShack',
 *     rating: datastore.int(10),
 *     worth: datastore.double(123456.78),
 *     location: datastore.geoPoint({
 *       latitude: 40.6894,
 *       longitude: -74.0447
 *     }),
 *     numDonutsServed: 45,
 *     founded: new Date('Tue May 12 2015 15:30:00 GMT-0400 (EDT)'),
 *     isStartup: true,
 *     donutEmoji: new Buffer('\uD83C\uDF69'),
 *     keywords: [
 *       'donut',
 *       'coffee',
 *       'yum'
 *     ]
 *   }
 * };
 *
 * datastore.save(entity, function(err, apiResponse) {});
 *
 * //-
 * // To specify an `excludeFromIndexes` value for a Datastore entity, pass in
 * // an array for the key's data.
 * //-
 * var entity = {
 *   key: datastore.key('Company'),
 *   data: [
 *     {
 *       name: 'rating',
 *       value: 10,
 *       excludeFromIndexes: true
 *     }
 *   ]
 * };
 *
 * datastore.save(entity, function(err, apiResponse) {});
 *
 * //-
 * // Save multiple entities at once.
 * //-
 * var companyKey = datastore.key(['Company', 123]);
 * var productKey = datastore.key(['Product', 'Computer']);
 * var entities = [
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
 * ];
 *
 * datastore.save(entities, function(err, apiResponse) {});
 *
 * //-
 * // Explicitly attempt to 'insert' a specific entity.
 * //-
 * var userKey = datastore.key(['User', 'chilts']);
 * var entity = {
 *   key: userKey,
 *   method: 'insert',
 *   data: {
 *     fullName: 'Andrew Chilton'
 *   }
 * };
 *
 * datastore.save(entity, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * datastore.save(entity).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
DatastoreRequest.prototype.save = function(entities, gaxOptions, callback) {
  entities = arrify(entities);

  if (is.fn(gaxOptions)) {
    callback = gaxOptions;
    gaxOptions = {};
  }

  var insertIndexes = {};
  var mutations = [];
  var methods = {
    insert: true,
    update: true,
    upsert: true
  };

  // Iterate over the entity objects, build a proto from all keys and values,
  // then place in the correct mutation array (insert, update, etc).
  entities
    .map(DatastoreRequest.prepareEntityObject_)
    .forEach(function(entityObject, index) {
      var mutation = {};
      var entityProto = {};
      var method = 'upsert';

      if (entityObject.method) {
        if (methods[entityObject.method]) {
          method = entityObject.method;
        } else {
          throw new Error('Method ' + entityObject.method + ' not recognized.');
        }
      }

      if (!entity.isKeyComplete(entityObject.key)) {
        insertIndexes[index] = true;
      }

      if (is.array(entityObject.data)) {
        entityProto.properties = entityObject.data.reduce(function(acc, data) {
          var value = entity.encodeValue(data.value);

          if (is.boolean(data.excludeFromIndexes)) {
            var excluded = data.excludeFromIndexes;
            var values = value.arrayValue && value.arrayValue.values;

            if (values) {
              values = values.map(propAssign('excludeFromIndexes', excluded));
            } else {
              value.excludeFromIndexes = data.excludeFromIndexes;
            }
          }

          acc[data.name] = value;

          return acc;
        }, {});
      } else {
        entityProto = entity.entityToEntityProto(entityObject.data);
      }

      entityProto.key = entity.keyToKeyProto(entityObject.key);

      mutation[method] = entityProto;
      mutations.push(mutation);
    });

  var reqOpts = {
    mutations: mutations
  };

  function onCommit(err, resp) {
    if (err || !resp) {
      callback(err, resp);
      return;
    }

    arrify(resp.mutationResults).forEach(function(result, index) {
      if (!result.key) {
        return;
      }

      if (insertIndexes[index]) {
        var id = entity.keyFromKeyProto(result.key).id;
        entities[index].key.id = id;
      }
    });

    callback(null, resp);
  }

  if (this.id) {
    this.requests_.push(reqOpts);
    this.requestCallbacks_.push(onCommit);
    return;
  }

  this.request_({
    client: 'datastoreClient',
    method: 'commit',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, onCommit);
};

/**
 * Maps to {module:datastore#save}, forcing the method to be `update`.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 */
DatastoreRequest.prototype.update = function(entities, callback) {
  entities = arrify(entities)
    .map(DatastoreRequest.prepareEntityObject_)
    .map(propAssign('method', 'update'));

  this.save(entities, callback);
};

/**
 * Maps to {module:datastore#save}, forcing the method to be `upsert`.
 *
 * @param {object|object[]} entities - Datastore key object(s).
 * @param {Key} entities.key - Datastore key object.
 * @param {object|object[]} entities.data - Data to save with the provided key.
 *     If you provide an array of objects, you must use the explicit syntax:
 *     `name` for the name of the property and `value` for its value. You may
 *     also specify an `excludeFromIndexes` property, set to `true` or `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.apiResponse - The full API response.
 */
DatastoreRequest.prototype.upsert = function(entities, callback) {
  entities = arrify(entities)
    .map(DatastoreRequest.prepareEntityObject_)
    .map(propAssign('method', 'upsert'));

  this.save(entities, callback);
};

/**
 * Make a request to the API endpoint. Properties to indicate a transactional or
 * non-transactional operation are added automatically.
 *
 * @private
 *
 * @param {object} config - Configuration object.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @param {function} callback - The callback function.
 */
DatastoreRequest.prototype.request_ = function(config, callback) {
  var datastore = this.datastore;

  callback = callback || common.util.noop;

  var isTransaction = is.defined(this.id);
  var method = config.method;
  var reqOpts = config.reqOpts || {};

  reqOpts.projectId = this.projectId;

  // Set properties to indicate if we're in a transaction or not.
  if (method === 'commit') {
    if (isTransaction) {
      reqOpts.mode = 'TRANSACTIONAL';
      reqOpts.transaction = this.id;
    } else {
      reqOpts.mode = 'NON_TRANSACTIONAL';
    }
  }

  if (method === 'rollback') {
    reqOpts.transaction = this.id;
  }

  if (isTransaction && (method === 'lookup' || method === 'runQuery')) {
    if (reqOpts.readOptions && reqOpts.readOptions.readConsistency) {
      throw new Error('Read consistency cannot be specified in a transaction.');
    }

    reqOpts.readOptions = {
      transaction: this.id
    };
  }

  datastore.auth.getProjectId(function(err, projectId) {
    if (err) {
      callback(err);
      return;
    }

    var gaxClient = datastore.api[config.client];

    var clientOptions = extend({
      servicePath: datastore.baseUrl_,
      port: datastore.port_
    }, datastore.options);

    if (datastore.customEndpoint_) {
      clientOptions.sslCreds = grpc.credentials.createInsecure();
    }

    if (!gaxClient) {
      // Lazily instantiate client.
      gaxClient = v1(clientOptions)[config.client](clientOptions);
      datastore.api[config.client] = gaxClient;
    }

    reqOpts = extend(true, {}, reqOpts);
    reqOpts = common.util.replaceProjectIdToken(reqOpts, projectId);

    var gaxOpts = extend(true, {}, config.gaxOpts, {
      headers: {
        'google-cloud-resource-prefix': `projects/${projectId}`
      }
    });

    gaxClient[config.method](reqOpts, gaxOpts, callback);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(DatastoreRequest);

module.exports = DatastoreRequest;
