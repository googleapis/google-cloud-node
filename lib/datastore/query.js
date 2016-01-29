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
 * @module datastore/query
 */

'use strict';

var arrify = require('arrify');

/**
 * Build a Query object.
 *
 * **Queries should be built with
 * {module:datastore/dataset#createQuery} and run via
 * {module:datastore/dataset#runQuery}.**
 *
 * @resource [Datastore Queries]{@link http://goo.gl/Cag0r6}
 *
 * @constructor
 * @alias module:datastore/query
 *
 * @param {string=} namespace - Namespace to query entities from.
 * @param {string} kind - Kind to query.
 *
 * @example
 * var dataset = gcloud.datastore.dataset({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * // If your dataset was scoped to a namespace at initialization, your query
 * // will likewise be scoped to that namespace.
 * var query = dataset.createQuery('Lion');
 *
 * // However, you may override the namespace per query.
 * var query = dataset.createQuery('AnimalNamespace', 'Lion');
 *
 * // You may also remove the namespace altogether.
 * var query = dataset.createQuery(null, 'Lion');
 */
function Query(namespace, kinds) {
  if (!kinds) {
    kinds = namespace;
    namespace = null;
  }

  this.namespace = namespace || null;
  this.kinds = kinds;

  this.filters = [];
  this.orders = [];
  this.groupByVal = [];
  this.selectVal = [];

  // pagination
  this.autoPaginateVal = true;
  this.startVal = null;
  this.endVal = null;
  this.limitVal = -1;
  this.offsetVal = -1;
}

/**
 * @param {boolean=} autoPaginateVal - Have pagination handled automatically.
 *     Default: true.
 * @return {module:datastore/query}
 *
 * @example
 * // Retrieve a list of people related to person "1234",
 * // disabling auto pagination
 * var query = dataset.createQuery('Person')
 *   .hasAncestor(dataset.key(['Person', 1234]))
 *   .autoPaginate(false);
 *
 * var callback = function(err, entities, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results might exist, so we'll manually fetch them
 *     dataset.runQuery(nextQuery, callback);
 *   }
 * };
 *
 * dataset.runQuery(query, callback);
 */
Query.prototype.autoPaginate = function(autoPaginateVal) {
  this.autoPaginateVal = autoPaginateVal !== false;
  return this;
};

/**
 * Datastore allows querying on properties. Supported comparison operators
 * are `=`, `<`, `>`, `<=`, and `>=`. "Not equal" and `IN` operators are
 * currently not supported.
 *
 * *To filter by ancestors, see {module:datastore/query#hasAncestor}.*
 *
 * @resource [Datastore Filters]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Filters}
 *
 * @param {string} property - The field name.
 * @param {string=} operator - Operator (=, <, >, <=, >=). Default: `=`.
 * @param {*} value - Value to compare property to.
 * @return {module:datastore/query}
 *
 * @example
 * //-
 * // List all companies that are located in California.
 * //-
 * var caliQuery = query.filter('state', 'CA');
 *
 * //-
 * // List all companies named Google that have less than 400 employees.
 * //-
 * var companyQuery = query
 *   .filter('name', '=', 'Google')
 *   .filter('size', '<', 400);
 *
 * //-
 * // To filter by key, use `__key__` for the property name. Filter on keys
 * // stored as properties is not currently supported.
 * //-
 * var key = dataset.key(['Company', 'Google']);
 * var keyQuery = query.filter('__key__', '=', key);
 */
Query.prototype.filter = function(property, operator, value) {
  if (arguments.length === 2) {
    value = operator;
    operator = '=';
  }

  // TODO: Add filter validation.
  this.filters.push({
    name: property.trim(),
    op: operator.trim(),
    val: value
  });
  return this;
};

/**
 * Filter a query by ancestors.
 *
 * @resource [Datastore Ancestor Filters]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Ancestor_filters}
 *
 * @param {Key} key - Key object to filter by.
 * @return {module:datastore/query}
 *
 * @example
 * var ancestoryQuery = query.hasAncestor(dataset.key(['Parent', 123]));
 */
Query.prototype.hasAncestor = function(key) {
  this.filters.push({ name: '__key__', op: 'HAS_ANCESTOR', val: key });
  return this;
};

/**
 * Sort the results by a property name in ascending or descending order. By
 * default, an ascending sort order will be used.
 *
 * @resource [Datastore Sort Orders]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Sort_orders}
 *
 * @param {string} property - The property to order by.
 * @param {object=} options - Options object.
 * @param {boolean} options.descending - Sort the results by a property name
 *     in descending order. Default: `false`.
 * @return {module:datastore/query}
 *
 * @example
 * // Sort by size ascendingly.
 * var companiesAscending = companyQuery.order('size');
 *
 * // Sort by size descendingly.
 * var companiesDescending = companyQuery.order('size', {
 *   descending: true
 * });
 */
Query.prototype.order = function(property, options) {
  var sign = options && options.descending ? '-' : '+';

  this.orders.push({ name: property, sign: sign });
  return this;
};

/**
 * Group query results by a list of properties.
 *
 * @param {array} properties - Properties to group by.
 * @return {module:datastore/query}
 *
 * @example
 * var groupedQuery = companyQuery.groupBy(['name', 'size']);
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
 * @resource [Projection Queries]{@link https://cloud.google.com/datastore/docs/concepts/projectionqueries}
 *
 * @param {string|string[]} fieldNames - Properties to return from the matched
 *     entities.
 * @return {module:datastore/query}
 *
 * @example
 * // Only retrieve the name property.
 * var selectQuery = companyQuery.select('name');
 *
 * // Only retrieve the name and size properties.
 * var selectQuery = companyQuery.select(['name', 'size']);
 */
Query.prototype.select = function(fieldNames) {
  this.selectVal = arrify(fieldNames);
  return this;
};

/**
 * Set a starting cursor to a query.
 *
 * @resource [Query Cursors]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Query_cursors}
 *
 * @param {string} cursorToken - The starting cursor token.
 * @return {module:datastore/query}
 *
 * @example
 * var cursorToken = 'X';
 *
 * // Retrieve results starting from cursorToken.
 * var startQuery = companyQuery.start(cursorToken);
 */
Query.prototype.start = function(start) {
  this.startVal = start;
  return this;
};

/**
 * Set an ending cursor to a query.
 *
 * @resource [Query Cursors]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Query_cursors}
 *
 * @param {string} cursorToken - The ending cursor token.
 * @return {module:datastore/query}
 *
 * @example
 * var cursorToken = 'X';
 *
 * // Retrieve results limited to the extent of cursorToken.
 * var endQuery = companyQuery.end(cursorToken);
 */
Query.prototype.end = function(end) {
  this.endVal = end;
  return this;
};

/**
 * Set a limit on a query.
 *
 * @resource [Query Limits]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Retrieving_results}
 *
 * @param {number} n - The number of results to limit the query to.
 * @return {module:datastore/query}
 *
 * @example
 * // Limit the results to 10 entities.
 * var limitQuery = companyQuery.limit(10);
 */
Query.prototype.limit = function(n) {
  this.limitVal = n;
  return this;
};

/**
 * Set an offset on a query.
 *
 * @resource [Query Offsets]{@link https://cloud.google.com/datastore/docs/concepts/queries#Datastore_Retrieving_results}
 *
 * @param {number} n - The offset to start from after the start cursor.
 * @return {module:datastore/query}
 *
 * @example
 * // Start from the 101st result.
 * var offsetQuery = companyQuery.offset(100);
 */
Query.prototype.offset = function(n) {
  this.offsetVal = n;
  return this;
};

module.exports = Query;
