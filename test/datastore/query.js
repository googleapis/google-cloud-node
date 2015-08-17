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

  describe('instantiation', function() {

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

    it('should enable auto pagination by default', function() {
      var query = new Query(['kind1']);
      assert.strictEqual(query.autoPaginateVal, true);
    });

  });

  describe('autoPaginate', function() {

    it('should enable auto pagination', function() {
      var query = new Query(['kind1']).autoPaginate();

      assert.strictEqual(query.autoPaginateVal, true);
    });

    it('should disable auto pagination when false is passed in', function() {
      var query = new Query(['kind1']).autoPaginate(false);

      assert.strictEqual(query.autoPaginateVal, false);
    });

    it('should not disable auto pagination with falsy values', function() {
      var query = new Query(['kind1']).autoPaginate(null);

      assert.strictEqual(query.autoPaginateVal, true);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.autoPaginate(false);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('filter', function() {

    it('should support filtering', function() {
      var now = new Date();
      var query = new Query(['kind1']).filter('date <=', now);
      var filter = query.filters[0];

      assert.equal(filter.name, 'date');
      assert.equal(filter.op, '<=');
      assert.equal(filter.val, now);
    });

    it('should recognize all the different operators', function() {
      var now = new Date();
      var query = new Query(['kind1'])
        .filter('date <=', now)
        .filter('name =', 'Title')
        .filter('count >', 20)
        .filter('size <', 10)
        .filter('something >=', 11);

      assert.equal(query.filters[0].name, 'date');
      assert.equal(query.filters[0].op, '<=');
      assert.strictEqual(query.filters[0].val, now);

      assert.equal(query.filters[1].name, 'name');
      assert.equal(query.filters[1].op, '=');
      assert.equal(query.filters[1].val, 'Title');

      assert.equal(query.filters[2].name, 'count');
      assert.equal(query.filters[2].op, '>');
      assert.strictEqual(query.filters[2].val, 20);

      assert.equal(query.filters[3].name, 'size');
      assert.equal(query.filters[3].op, '<');
      assert.strictEqual(query.filters[3].val, 10);

      assert.equal(query.filters[4].name, 'something');
      assert.equal(query.filters[4].op, '>=');
      assert.strictEqual(query.filters[4].val, 11);
    });

    it('should remove any whitespace surrounding the filter name', function() {
      var query = new Query(['kind1']).filter('   count    >', 123);

      assert.equal(query.filters[0].name, 'count');
    });

    it('should remove any whitespace surrounding the operator', function() {
      var query = new Query(['kind1']).filter('count           <        ', 123);

      assert.equal(query.filters[0].op, '<');
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.filter('count <', 5);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('hasAncestor', function() {

    it('should support ancestor filtering', function() {
      var query = new Query(['kind1']).hasAncestor(['kind2', 123]);

      assert.equal(query.filters[0].name, '__key__');
      assert.equal(query.filters[0].op, 'HAS_ANCESTOR');
      assert.deepEqual(query.filters[0].val, ['kind2', 123]);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.hasAncestor(['kind2', 123]);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('order', function() {

    it('should default ordering to ascending', function() {
      var query = new Query(['kind1']).order('name');

      assert.equal(query.orders[0].name, 'name');
      assert.equal(query.orders[0].sign, '+');
    });

    it('should support ascending order', function() {
      var query = new Query(['kind1']).order('+name');

      assert.equal(query.orders[0].name, 'name');
      assert.equal(query.orders[0].sign, '+');
    });

    it('should support descending order', function() {
      var query = new Query(['kind1']).order('-count');

      assert.equal(query.orders[0].name, 'count');
      assert.equal(query.orders[0].sign, '-');
    });

    it('should support both ascending and descending', function() {
      var query = new Query(['kind1'])
        .order('+name')
        .order('-count');

      assert.equal(query.orders[0].name, 'name');
      assert.equal(query.orders[0].sign, '+');
      assert.equal(query.orders[1].name, 'count');
      assert.equal(query.orders[1].sign, '-');
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.order('name');

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('groupBy', function() {

    it('should store an array of properties to group by', function() {
      var query = new Query(['kind1']).groupBy(['name', 'size']);

      assert.deepEqual(query.groupByVal, ['name', 'size']);
    });

    it('should convert a single property into an array', function() {
      var query = new Query(['kind1']).groupBy('name');

      assert.deepEqual(query.groupByVal, ['name']);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.groupBy(['name', 'size']);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('select', function() {

    it('should store an array of properties to select', function() {
      var query = new Query(['kind1']).select(['name', 'size']);

      assert.deepEqual(query.selectVal, ['name', 'size']);
    });

    it('should convert a single property into an array', function() {
      var query = new Query(['kind1']).select('name');

      assert.deepEqual(query.selectVal, ['name']);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.select(['name', 'size']);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('start', function() {

    it('should capture the starting cursor value', function() {
      var query = new Query(['kind1']).start('X');

      assert.equal(query.startVal, 'X');
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.start('X');

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('end', function() {

    it('should capture the ending cursor value', function() {
      var query = new Query(['kind1']).end('Z');

      assert.equal(query.endVal, 'Z');
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.end('Z');

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('limit', function() {

    it('should capture the number of results to limit to', function() {
      var query = new Query(['kind1']).limit(20);

      assert.strictEqual(query.limitVal, 20);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.limit(20);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('offset', function() {

    it('should capture the number of results to offset by', function() {
      var query = new Query(['kind1']).offset(100);

      assert.strictEqual(query.offsetVal, 100);
    });

    it('should return the query instance', function() {
      var query = new Query(['kind1']);
      var nextQuery = query.offset(100);

      assert.strictEqual(query, nextQuery);
    });

  });

  describe('proto conversion', function() {

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

});
