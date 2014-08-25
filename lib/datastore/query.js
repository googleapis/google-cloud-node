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

/**
 * @module datastore/query
 */

'use strict';

var util = require('../common/util.js');

/**
 * Build a Query object. Queries will generally be built with
 * {@linkcode module:datastore/dataset#createQuery} and ran via
 * {@linkcode module:datastore/dataset#runQuery}.
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
 * ```js
 * var query = new Query(['Lion', 'Chimp']);
 * var zooQuery = new Query('zoo', ['Lion', 'Chimp']);
 * ```
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
 * @todo Add filter validation.
 *
 * @param {string} filter - Property + Operator (=, <, >, <=, >=).
 * @param {*} value - Value to compare property to.
 * @return {module:datastore/query}
 *
 * @example
 * ```js
 * // List all companies named Google that have less than 400 employees.
 * var companyQuery = query
 *   .filter('name =', 'Google');
 *   .filter('size <', 400);
 *
 * // To filter by key, use `__key__` for the property name. Filter on keys
 * // stored as properties is not currently supported.
 * var keyQuery = query.filter('__key__ =', datastore.key('Company', 'Google'));
 * ```
 */
Query.prototype.filter = function(filter, value) {
  var q = util.extend(this, new Query());
  filter = filter.trim();
  var fieldName = filter.replace(/[>|<|=|>=|<=]*$/, '').trim();
  var op = filter.substr(fieldName.length, filter.length).trim();
  q.filters = q.filters || [];
  q.filters.push({ name: fieldName, op: op, val: value });
  return q;
};

/**
 * Filter a query by ancestors.
 *
 * *Reference: {@link http://goo.gl/1qfpkZ}*
 *
 * @param {datastore/entity~Key} key - Key object to filter by.
 * @return {module:datastore/query}
 *
 * @example
 * ```js
 * var ancestoryQuery = query.hasAncestor(datastore.key('Parent', 123));
 * ```
 */
Query.prototype.hasAncestor = function(key) {
  var q = util.extend(this, new Query());
  this.filters.push({ name: '__key__', op: 'HAS_ANCESTOR', val: key });
  return q;
};

/**
 * Sort the results by a property name ascendingly or descendingly. By default,
 * an ascending sort order will be used.
 *
 * *Reference: {@link http://goo.gl/mfegFR}*
 *
 * @param {string} property - Optional operator (+, -) and property to order by.
 * @return {module:datastore/query}
 *
 * @example
 * ```js
 * // Sort by size ascendingly.
 * var companiesAscending = companyQuery.order('size');
 *
 * // Sort by size descendingly.
 * var companiesDescending = companyQuery.order('-size');
 * ```
 */
Query.prototype.order = function(property) {
  var q = util.extend(this, new Query());
  var sign = '+';
  if (property[0] === '-' || property[0] === '+') {
    sign = property[0];
    property = property.substr(1);
  }
  q.orders = q.orders || [];
  q.orders.push({ name: property, sign: sign });
  return q;
};

/**
 * Group query results by a list of properties.
 *
 * @param {array} properties - Properties to group by.
 * @return {module:datastore/query}
 *
 * @example
 * ```js
 * var groupedQuery = companyQuery.groupBy(['name', 'size']);
 * ```
 */
Query.prototype.groupBy = function(fieldNames) {
  var fields = util.arrayize(fieldNames);
  var q = util.extend(this, new Query());
  q.groupByVal = fields;
  return q;
};

/**
 * Retrieve only select properties from the matched entities.
 *
 * *Reference: [Projection Queries]{@link http://goo.gl/EfsrJl}*
 *
 * @param  {array} fieldNames - Properties to return from the matched entities.
 * @return {module:datastore/query}
 *
 * @example
 * ```js
 * // Only retrieve the name and size properties.
 * var selectQuery = companyQuery.select(['name', 'size']);
 * ```
 */
Query.prototype.select = function(fieldNames) {
  var q = util.extend(this, new Query());
  q.selectVal = fieldNames;
  return q;
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
 * ```js
 * var cursorToken = 'X';
 *
 * // Retrieve results starting from cursorToken.
 * var startQuery = companyQuery.start(cursorToken);
 * ```
 */
Query.prototype.start = function(start) {
  var q = util.extend(this, new Query());
  q.startVal = start;
  return q;
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
 * ```js
 * var cursorToken = 'X';
 *
 * // Retrieve results limited to the extent of cursorToken.
 * var endQuery = companyQuery.end(cursorToken);
 * ```
 */
Query.prototype.end = function(end) {
  var q = util.extend(this, new Query());
  q.endVal = end;
  return q;
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
 * ```js
 * // Limit the results to 10 entities.
 * var limitQuery = companyQuery.limit(10);
 * ```
 */
Query.prototype.limit = function(n) {
  var q = util.extend(this, new Query());
  q.limitVal = n;
  return q;
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
 * ```js
 * // Start from the 101st result.
 * var offsetQuery = companyQuery.offset(100);
 * ```
 */
Query.prototype.offset = function(n) {
  var q = util.extend(this, new Query());
  q.offsetVal = n;
  return q;
};

module.exports = Query;
