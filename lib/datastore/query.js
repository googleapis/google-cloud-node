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

var util = require('../common/util.js');

function Query(namespace, kinds) {
  // TODO(jbd): Add namespace support
  this.namespace = namespace;
  this.kinds = kinds;

  this.filters = [];
  this.orders = [];
  this.groupByVal = [];
  this.selectVal = [];

  // pagination
  this.startVal = null;
  this.limitVal = -1;
  this.offsetVal = -1;
}

Query.prototype.filter = function(filter, value) {
  // TODO(jbd): Add filter validation.
  var q = util.extend(this, new Query());
  filter = filter.trim();
  var fieldName = filter.replace(/[>|<|=|>=|<=]*$/, '').trim(),
      op = filter.substr(fieldName.length, filter.length).trim();
  this.filters = this.filters || [];
  this.filters.push({ name: fieldName, op: op, val: value });
  return q;
};

Query.prototype.order = function(order) {
  var q = util.extend(this, new Query());
  var sign = order[0],
      fieldName = order.substr(1);
  if (sign != '-' && sign != '+' ) {
    throw new Error('Invalid order pattern, either should be "+fieldName" or "-fieldName".')
  }
  q.orders = q.orders || [];
  q.orders.push({ name: fieldName, sign: sign });
  return q;
};

Query.prototype.groupBy = function(fieldNames) {
  var q = util.extend(this, new Query());
  q.groupByVal = fieldNames;
  return q;
};

Query.prototype.select = function(fieldNames) {
  var q = util.extend(this, new Query());
  q.selectVal = fieldNames;
  return q;
};

Query.prototype.start = function(start) {
  var q = util.extend(this, new Query());
  q.startVal = start;
  return q;
}

Query.prototype.limit = function(n) {
  var q = util.extend(this, new Query());
  q.limitVal = n;
  return q;
};

Query.prototype.offset = function(n) {
  var q = util.extend(this, new Query());
  q.offsetVal = n;
  return q;
};

/**
 * Exports Query.
 */
module.exports.Query = Query;