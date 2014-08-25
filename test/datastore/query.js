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

/*global describe, it */

'use strict';

var assert = require('assert');
var datastore = require('../../lib/datastore');
var entity = require('../../lib/datastore/entity.js');
var Query = require('../../lib/datastore/query.js');
var queryProto = require('../testdata/proto_query.json');

describe('Query', function() {
  it('should use null for all falsy namespace values', function() {
    [
      new Query('', 'Kind'),
      new Query(null, 'Kind'),
      new Query(undefined, 'Kind'),
      new Query(0, 'Kind'),
      new Query('Kind')
    ].forEach(function(query) {
      assert.strictEqual(query.namespace, null);
      assert.equal(query.kinds, 'Kind');
    });
  });

  it('should support custom namespaces', function() {
    var query = new Query('ns', ['kind1']);
    assert.equal(query.namespace, 'ns');
  });

  it('should support querying multiple kinds', function() {
    var query = new Query(['kind1', 'kind2']);
    var queryWithNamespace = new Query('ns', ['kind1', 'kind2']);

    assert.strictEqual(query.namespace, null);
    assert.equal(query.kinds[0], 'kind1');
    assert.equal(query.kinds[1], 'kind2');

    assert.equal(queryWithNamespace.namespace, 'ns');
    assert.equal(queryWithNamespace.kinds[0], 'kind1');
    assert.equal(queryWithNamespace.kinds[1], 'kind2');
  });

  it('should support field selection by field name', function() {
    var query = new Query(['kind1'])
        .select(['name', 'title']);
    assert.equal(query.selectVal[0], 'name');
    assert.equal(query.selectVal[1], 'title');
  });

  it('should support ancestor filtering', function() {
    var query = new Query(['kind1'])
        .hasAncestor(['kind2', 123]);
    assert.equal(query.filters[0].name, '__key__');
    assert.equal(query.filters[0].op, 'HAS_ANCESTOR');
    assert.deepEqual(query.filters[0].val, ['kind2', 123]);
  });

  it('should support multiple filters', function() {
    var now = new Date();
    var query = new Query(['kind1'])
        .filter('date <=', now)
        .filter('name =', 'Title')
        .filter('count >', 20);

    assert.equal(query.filters[0].name, 'date');
    assert.equal(query.filters[0].op, '<=');
    assert.strictEqual(query.filters[0].val, now);

    assert.equal(query.filters[1].name, 'name');
    assert.equal(query.filters[1].op, '=');
    assert.equal(query.filters[1].val, 'Title');

    assert.equal(query.filters[2].name, 'count');
    assert.equal(query.filters[2].op, '>');
    assert.strictEqual(query.filters[2].val, 20);
  });

  it('should support ordering asc and desc', function() {
    var query = new Query(['kind1'])
        .order('+name')
        .order('-count');
    assert.equal(query.orders[0].name, 'name');
    assert.equal(query.orders[0].sign, '+');
    assert.equal(query.orders[1].name, 'count');
    assert.equal(query.orders[1].sign, '-');
  });

  it('should default ordering to ascending', function() {
    var query = new Query(['kind1']).order('name');
    assert.equal(query.orders[0].name, 'name');
    assert.equal(query.orders[0].sign, '+');
  });

  it('should provide pagination with offset and limit', function() {
    var query = new Query(['kind1'])
        .offset(20)
        .limit(100);
    assert.strictEqual(query.offsetVal, 20);
    assert.strictEqual(query.limitVal, 100);
  });

  it('should allow page start and end tokens', function() {
    var query = new Query(['kind1'])
        .start('abc123')
        .end('def987');
    assert.equal(query.startVal, 'abc123');
    assert.equal(query.endVal, 'def987');
  });

  it('should be converted to a query proto successfully', function() {
    var query = new Query(['Kind'])
        .select(['name', 'count'])
        .filter('count >=', datastore.int(5))
        .filter('name =', 'Burcu')
        .order('-count')
        .groupBy(['count'])
        .offset(5)
        .limit(10);
    assert.deepEqual(entity.queryToQueryProto(query), queryProto);
  });
});
