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

'use strict';

var arrify = require('arrify');

/**
 * Build a Query object.
 *
 * **Queries are built with {module:datastore#createQuery} and
 * {@link Transaction#createQuery}.**
 *
 * @see [Datastore Queries]{@link http://goo.gl/Cag0r6}
 *
 * @class
 * @param {Datastore|Rransaction} scope The parent scope the query was created
 *     from.
 * @param {string} [namespace] Namespace to query entities from.
 * @param {string} kind Kind to query.
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const query = datastore.createQuery('AnimalNamespace', 'Lion');
 */
function Query(scope, namespace, kinds) {
  if (!kinds) {
    kinds = namespace;
    namespace = null;
  }

  /**
   * @name Query#scope
   * @type {Datastore|Transaction}
   */
  this.scope = scope;

  /**
   * @name Query#namespace
   * @type {?string}
   */
  this.namespace = namespace || null;
  /**
   * @name Query#kinds
   * @type {string}
   */
  this.kinds = kinds;

  /**
   * @name Query#filters
   * @type {array}
   */
  this.filters = [];
  /**
   * @name Query#orders
   * @type {array}
   */
  this.orders = [];
  /**
   * @name Query#groupByVal
   * @type {array}
   */
  this.groupByVal = [];
  /**
   * @name Query#selectVal
   * @type {array}
   */
  this.selectVal = [];

  // pagination
  /**
   * @name Query#startVal
   * @type {?number}
   */
  this.startVal = null;
  /**
   * @name Query#endVal
   * @type {?number}
   */
  this.endVal = null;
  /**
   * @name Query#limitVal
   * @type {number}
   */
  this.limitVal = -1;
  /**
   * @name Query#offsetVal
   * @type {number}
   */
  this.offsetVal = -1;
}

/**
 * Datastore allows querying on properties. Supported comparison operators
 * are `=`, `<`, `>`, `<=`, and `>=`. "Not equal" and `IN` operators are
 * currently not supported.
 *
 * *To filter by ancestors, see {module:datastore/query#hasAncestor}.*
 *
 * @see [Datastore Filters]{@link https://cloud.google.com/datastore/docs/concepts/queries#datastore-property-filter-nodejs}
 *
 * @param {string} property The field name.
 * @param {string} [operator="="] Operator (=, <, >, <=, >=).
 * @param {*} value Value to compare property to.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const query = datastore.createQuery('Company');
 *
 * //-
 * // List all companies that are located in California.
 * //-
 * const caliQuery = query.filter('state', 'CA');
 *
 * //-
 * // List all companies named Google that have less than 400 employees.
 * //-
 * const companyQuery = query
 *   .filter('name', 'Google')
 *   .filter('size', '<', 400);
 *
 * //-
 * // To filter by key, use `__key__` for the property name. Filter on keys
 * // stored as properties is not currently supported.
 * //-
 * const key = datastore.key(['Company', 'Google']);
 * const keyQuery = query.filter('__key__', key);
 */
Query.prototype.filter = function(property, operator, value) {
  if (arguments.length === 2) {
    value = operator;
    operator = '=';
  }

  this.filters.push({
    name: property.trim(),
    op: operator.trim(),
    val: value,
  });
  return this;
};

/**
 * Filter a query by ancestors.
 *
 * @see [Datastore Ancestor Filters]{@link https://cloud.google.com/datastore/docs/concepts/queries#datastore-ancestor-query-nodejs}
 *
 * @param {Key} key Key object to filter by.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const query = datastore.createQuery('MyKind');
 * const ancestoryQuery = query.hasAncestor(datastore.key(['Parent', 123]));
 */
Query.prototype.hasAncestor = function(key) {
  this.filters.push({name: '__key__', op: 'HAS_ANCESTOR', val: key});
  return this;
};

/**
 * Sort the results by a property name in ascending or descending order. By
 * default, an ascending sort order will be used.
 *
 * @see [Datastore Sort Orders]{@link https://cloud.google.com/datastore/docs/concepts/queries#datastore-ascending-sort-nodejs}
 *
 * @param {string} property The property to order by.
 * @param {object} [options] Options object.
 * @param {boolean} [options.descending=false] Sort the results by a property
 *     name in descending order.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * // Sort by size ascendingly.
 * const companiesAscending = companyQuery.order('size');
 *
 * // Sort by size descendingly.
 * const companiesDescending = companyQuery.order('size', {
 *   descending: true
 * });
 */
Query.prototype.order = function(property, options) {
  var sign = options && options.descending ? '-' : '+';

  this.orders.push({name: property, sign: sign});
  return this;
};

/**
 * Group query results by a list of properties.
 *
 * @param {array} properties Properties to group by.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 * const groupedQuery = companyQuery.groupBy(['name', 'size']);
 */
Query.prototype.groupBy = function(fieldNames) {
  this.groupByVal = arrify(fieldNames);
  return this;
};

/**
 * Retrieve only select properties from the matched entities.
 *
 * Queries that select a subset of properties are called Projection Queries.
 *
 * @see [Projection Queries]{@link https://cloud.google.com/datastore/docs/concepts/projectionqueries}
 *
 * @param {string|string[]} fieldNames Properties to return from the matched
 *     entities.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * // Only retrieve the name property.
 * const selectQuery = companyQuery.select('name');
 *
 * // Only retrieve the name and size properties.
 * const selectQuery = companyQuery.select(['name', 'size']);
 */
Query.prototype.select = function(fieldNames) {
  this.selectVal = arrify(fieldNames);
  return this;
};

/**
 * Set a starting cursor to a query.
 *
 * @see [Query Cursors]{@link https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets}
 *
 * @param {string} cursorToken The starting cursor token.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * const cursorToken = 'X';
 *
 * // Retrieve results starting from cursorToken.
 * const startQuery = companyQuery.start(cursorToken);
 */
Query.prototype.start = function(start) {
  this.startVal = start;
  return this;
};

/**
 * Set an ending cursor to a query.
 *
 * @see [Query Cursors]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Query_cursors}
 *
 * @param {string} cursorToken The ending cursor token.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * const cursorToken = 'X';
 *
 * // Retrieve results limited to the extent of cursorToken.
 * const endQuery = companyQuery.end(cursorToken);
 */
Query.prototype.end = function(end) {
  this.endVal = end;
  return this;
};

/**
 * Set a limit on a query.
 *
 * @see [Query Limits]{@link https://cloud.google.com/datastore/docs/concepts/queries#datastore-limit-nodejs}
 *
 * @param {number} n The number of results to limit the query to.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * // Limit the results to 10 entities.
 * const limitQuery = companyQuery.limit(10);
 */
Query.prototype.limit = function(n) {
  this.limitVal = n;
  return this;
};

/**
 * Set an offset on a query.
 *
 * @see [Query Offsets]{@link https://cloud.google.com/datastore/docs/concepts/queries#datastore-limit-nodejs}
 *
 * @param {number} n The offset to start from after the start cursor.
 * @returns {Query}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const companyQuery = datastore.createQuery('Company');
 *
 * // Start from the 101st result.
 * const offsetQuery = companyQuery.offset(100);
 */
Query.prototype.offset = function(n) {
  this.offsetVal = n;
  return this;
};

/**
 * Run the query.
 *
 * @param {object} [options] Optional configuration.
 * @param {string} [options.consistency] Specify either `strong` or `eventual`.
 *     If not specified, default values are chosen by Datastore for the
 *     operation. Learn more about strong and eventual consistency
 *     [here](https://cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore).
 * @param {function} [callback] The callback function. If omitted, a readable
 *     stream instance is returned.
 * @param {?error} callback.err An error returned while making this request
 * @param {object[]} callback.entities A list of entities.
 * @param {object} callback.info An object useful for pagination.
 * @param {?string} callback.info.endCursor Use this in a follow-up query to
 *     begin from where these results ended.
 * @param {string} callback.info.moreResults Datastore responds with one of:
 *
 *     - {@link Datastore#MORE_RESULTS_AFTER_LIMIT}: There *may* be more
 *       results after the specified limit.
 *     - {@link Datastore#MORE_RESULTS_AFTER_CURSOR}: There *may* be more
 *       results after the specified end cursor.
 *     - {@link Datastore#NO_MORE_RESULTS}: There are no more results.
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const query = datastore.createQuery('Company');
 *
 * query.run(function(err, entities, info) {
 *   // entities = An array of records.
 *
 *   // Access the Key object for an entity.
 *   var firstEntityKey = entities[0][datastore.KEY];
 * });
 *
 * //-
 * // A keys-only query returns just the keys of the result entities instead of
 * // the entities themselves, at lower latency and cost.
 * //-
 * query.select('__key__');
 *
 * query.run(function(err, entities) {
 *   var keys = entities.map(function(entity) {
 *     return entity[datastore.KEY];
 *   });
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * query.run().then(function(data) {
 *   var entities = data[0];
 * });
 */
Query.prototype.run = function() {
  var query = this;
  var args = [query].concat([].slice.call(arguments));

  return this.scope.runQuery.apply(this.scope, args);
};

/**
 * Run the query as a readable object stream.
 *
 * @method Query#runStream
 * @param {object} [options] Optional configuration. See
 *     {@link Query#run} for a complete list of options.
 * @returns {stream}
 *
 * @example
 * const Datastore = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const query = datastore.createQuery('Company');
 *
 * query.runStream()
 *   .on('error', console.error)
 *   .on('data', function (entity) {
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
 * query.runStream()
 *   .on('data', function (entity) {
 *     this.end();
 *   });
 */
Query.prototype.runStream = function() {
  var query = this;
  var args = [query].concat([].slice.call(arguments));

  return this.scope.runQueryStream.apply(this.scope, args);
};

/**
 * Reference to the {@link Query} class.
 * @name module:@google-cloud/datastore.Query
 * @see Query
 */
module.exports = Query;
