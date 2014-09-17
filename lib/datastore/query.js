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

var extend = require('extend');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Build a Query object.
 *
 * **Queries should be built with
 * {@linkcode module:datastore/dataset#createQuery} and run via
 * {@linkcode module:datastore/dataset#runQuery}.**
 *
 * *Reference: {@link http://goo.gl/Cag0r6}*
 *
 * @constructor
 * @alias module:datastore/query
 *
 * @param {string=} namespace - Namespace to query entities from.
 * @param {string[]} kinds - Kinds to query.
 *
 * @example
 * // If your dataset was scoped to a namespace at initialization, your query
 * // will likewise be scoped to that namespace.
 * dataset.createQuery(['Lion', 'Chimp']);
 *
 * // However, you may override the namespace per query.
 * dataset.createQuery('AnimalNamespace', ['Lion', 'Chimp']);
 *
 * // You may also remove the namespace altogether.
 * dataset.createQuery(null, ['Lion', 'Chimp']);
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
  this.startVal = null;
  this.endVal = null;
  this.limitVal = -1;
  this.offsetVal = -1;
}

/**
 * Datastore allows querying on properties. Supported comparison operators
 * are `=`, `<`, `>`, `<=`, and `>=`. "Not equal" and `IN` operators are
 * currently not supported.
 *
 * *To filter by ancestors, see {@linkcode module:datastore/query#hasAncestor}.*
 *
 * *Reference: {@link http://goo.gl/ENCx7e}*
 *
 * @param {string} filter - Property + Operator (=, <, >, <=, >=).
 * @param {*} value - Value to compare property to.
 * @return {module:datastore/query}
 *
 * @example
 * // List all companies named Google that have less than 400 employees.
 * var companyQuery = query
 *   .filter('name =', 'Google');
 *   .filter('size <', 400);
 *
 * // To filter by key, use `__key__` for the property name. Filter on keys
 * // stored as properties is not currently supported.
 * var keyQuery = query.filter('__key__ =', dataset.key(['Company', 'Google']));
 */
Query.prototype.filter = function(filter, value) {
  // TODO: Add filter validation.
  var query = extend(new Query(), this);
  filter = filter.trim();
  var fieldName = filter.replace(/[>|<|=|>=|<=]*$/, '').trim();
  var op = filter.substr(fieldName.length, filter.length).trim();
  query.filters = query.filters || [];
  query.filters.push({
    name: fieldName,
    op: op,
    val: value
  });
  return query;
};

/**
 * Filter a query by ancestors.
 *
 * *Reference: {@link http://goo.gl/1qfpkZ}*
 *
 * @param {Key} key - Key object to filter by.
 * @return {module:datastore/query}
 *
 * @example
 * var ancestoryQuery = query.hasAncestor(dataset.key(['Parent', 123]));
 */
Query.prototype.hasAncestor = function(key) {
  var query = extend(new Query(), this);
  query.filters.push({ name: '__key__', op: 'HAS_ANCESTOR', val: key });
  return query;
};

/**
 * Sort the results by a property name in ascending or descending order. By
 * default, an ascending sort order will be used.
 *
 * *Reference: {@link http://goo.gl/mfegFR}*
 *
 * @param {string} property - Optional operator (+, -) and property to order by.
 * @return {module:datastore/query}
 *
 * @example
 * // Sort by size ascendingly.
 * var companiesAscending = companyQuery.order('size');
 *
 * // Sort by size descendingly.
 * var companiesDescending = companyQuery.order('-size');
 */
Query.prototype.order = function(property) {
  var query = extend(new Query(), this);
  var sign = '+';
  if (property[0] === '-' || property[0] === '+') {
    sign = property[0];
    property = property.substr(1);
  }
  query.orders = query.orders || [];
  query.orders.push({ name: property, sign: sign });
  return query;
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
  var query = extend(new Query(), this);
  query.groupByVal = util.arrayize(fieldNames);
  return query;
};

/**
 * Retrieve only select properties from the matched entities.
 *
 * *Reference: [Projection Queries]{@link http://goo.gl/EfsrJl}*
 *
 * @param {array} fieldNames - Properties to return from the matched entities.
 * @return {module:datastore/query}
 *
 * @example
 * // Only retrieve the name and size properties.
 * var selectQuery = companyQuery.select(['name', 'size']);
 */
Query.prototype.select = function(fieldNames) {
  var query = extend(new Query(), this);
  query.selectVal = fieldNames;
  return query;
};

/**
 * Set a starting cursor to a query.
 *
 * *Reference: {@link http://goo.gl/WuTGRI}*
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
  var query = extend(new Query(), this);
  query.startVal = start;
  return query;
};

/**
 * Set an ending cursor to a query.
 *
 * *Reference: {@link http://goo.gl/WuTGRI}*
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
  var query = extend(new Query(), this);
  query.endVal = end;
  return query;
};

/**
 * Set a limit on a query.
 *
 * *Reference: {@link http://goo.gl/f0VZ0n}*
 *
 * @param {number} n - The number of results to limit the query to.
 * @return {module:datastore/query}
 *
 * @example
 * // Limit the results to 10 entities.
 * var limitQuery = companyQuery.limit(10);
 */
Query.prototype.limit = function(n) {
  var query = extend(new Query(), this);
  query.limitVal = n;
  return query;
};

/**
 * Set an offset on a query.
 *
 * *Reference: {@link http://goo.gl/f0VZ0n}*
 *
 * @param {number} n - The offset to start from after the start cursor.
 * @return {module:datastore/query}
 *
 * @example
 * // Start from the 101st result.
 * var offsetQuery = companyQuery.offset(100);
 */
Query.prototype.offset = function(n) {
  var query = extend(new Query(), this);
  query.offsetVal = n;
  return query;
};

module.exports = Query;
