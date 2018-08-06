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

'use strict';

const assert = require('assert');

describe('Query', function() {
  const SCOPE = {};
  const NAMESPACE = 'Namespace';
  const KINDS = 'Kind';

  const Query = require('../src/query.js');
  let query;

  beforeEach(function() {
    query = new Query(SCOPE, NAMESPACE, KINDS);
  });

  describe('instantiation', function() {
    it('should localize the scope', function() {
      assert.strictEqual(query.scope, SCOPE);
    });

    it('should localize the namespace', function() {
      assert.strictEqual(query.namespace, NAMESPACE);
    });

    it('should localize the kind', function() {
      assert.strictEqual(query.kinds, KINDS);
    });

    it('should use null for all falsy namespace values', function() {
      [
        new Query(SCOPE, '', KINDS),
        new Query(SCOPE, null, KINDS),
        new Query(SCOPE, undefined, KINDS),
        new Query(SCOPE, 0, KINDS),
        new Query(SCOPE, KINDS),
      ].forEach(function(query) {
        assert.strictEqual(query.namespace, null);
      });
    });
  });

  describe('filter', function() {
    it('should support filtering', function() {
      const now = new Date();
      const query = new Query(['kind1']).filter('date', '<=', now);
      const filter = query.filters[0];

      assert.strictEqual(filter.name, 'date');
      assert.strictEqual(filter.op, '<=');
      assert.strictEqual(filter.val, now);
    });

    it('should recognize all the different operators', function() {
      const now = new Date();
      const query = new Query(['kind1'])
        .filter('date', '<=', now)
        .filter('name', '=', 'Title')
        .filter('count', '>', 20)
        .filter('size', '<', 10)
        .filter('something', '>=', 11);

      assert.strictEqual(query.filters[0].name, 'date');
      assert.strictEqual(query.filters[0].op, '<=');
      assert.strictEqual(query.filters[0].val, now);

      assert.strictEqual(query.filters[1].name, 'name');
      assert.strictEqual(query.filters[1].op, '=');
      assert.strictEqual(query.filters[1].val, 'Title');

      assert.strictEqual(query.filters[2].name, 'count');
      assert.strictEqual(query.filters[2].op, '>');
      assert.strictEqual(query.filters[2].val, 20);

      assert.strictEqual(query.filters[3].name, 'size');
      assert.strictEqual(query.filters[3].op, '<');
      assert.strictEqual(query.filters[3].val, 10);

      assert.strictEqual(query.filters[4].name, 'something');
      assert.strictEqual(query.filters[4].op, '>=');
      assert.strictEqual(query.filters[4].val, 11);
    });

    it('should remove any whitespace surrounding the filter name', function() {
      const query = new Query(['kind1']).filter('   count    ', '>', 123);

      assert.strictEqual(query.filters[0].name, 'count');
    });

    it('should remove any whitespace surrounding the operator', function() {
      const query = new Query(['kind1']).filter(
        'count',
        '       <        ',
        123
      );

      assert.strictEqual(query.filters[0].op, '<');
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.filter('count', '<', 5);

      assert.strictEqual(query, nextQuery);
    });

    it('should default the operator to "="', function() {
      const query = new Query(['kind1']).filter('name', 'Stephen');
      const filter = query.filters[0];

      assert.strictEqual(filter.name, 'name');
      assert.strictEqual(filter.op, '=');
      assert.strictEqual(filter.val, 'Stephen');
    });
  });

  describe('hasAncestor', function() {
    it('should support ancestor filtering', function() {
      const query = new Query(['kind1']).hasAncestor(['kind2', 123]);

      assert.strictEqual(query.filters[0].name, '__key__');
      assert.strictEqual(query.filters[0].op, 'HAS_ANCESTOR');
      assert.deepStrictEqual(query.filters[0].val, ['kind2', 123]);
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.hasAncestor(['kind2', 123]);

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('order', function() {
    it('should default ordering to ascending', function() {
      const query = new Query(['kind1']).order('name');

      assert.strictEqual(query.orders[0].name, 'name');
      assert.strictEqual(query.orders[0].sign, '+');
    });

    it('should support ascending order', function() {
      const query = new Query(['kind1']).order('name');

      assert.strictEqual(query.orders[0].name, 'name');
      assert.strictEqual(query.orders[0].sign, '+');
    });

    it('should support descending order', function() {
      const query = new Query(['kind1']).order('count', {descending: true});

      assert.strictEqual(query.orders[0].name, 'count');
      assert.strictEqual(query.orders[0].sign, '-');
    });

    it('should support both ascending and descending', function() {
      const query = new Query(['kind1'])
        .order('name')
        .order('count', {descending: true});

      assert.strictEqual(query.orders[0].name, 'name');
      assert.strictEqual(query.orders[0].sign, '+');
      assert.strictEqual(query.orders[1].name, 'count');
      assert.strictEqual(query.orders[1].sign, '-');
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.order('name');

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('groupBy', function() {
    it('should store an array of properties to group by', function() {
      const query = new Query(['kind1']).groupBy(['name', 'size']);

      assert.deepStrictEqual(query.groupByVal, ['name', 'size']);
    });

    it('should convert a single property into an array', function() {
      const query = new Query(['kind1']).groupBy('name');

      assert.deepStrictEqual(query.groupByVal, ['name']);
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.groupBy(['name', 'size']);

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('select', function() {
    it('should store an array of properties to select', function() {
      const query = new Query(['kind1']).select(['name', 'size']);

      assert.deepStrictEqual(query.selectVal, ['name', 'size']);
    });

    it('should convert a single property into an array', function() {
      const query = new Query(['kind1']).select('name');

      assert.deepStrictEqual(query.selectVal, ['name']);
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.select(['name', 'size']);

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('start', function() {
    it('should capture the starting cursor value', function() {
      const query = new Query(['kind1']).start('X');

      assert.strictEqual(query.startVal, 'X');
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.start('X');

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('end', function() {
    it('should capture the ending cursor value', function() {
      const query = new Query(['kind1']).end('Z');

      assert.strictEqual(query.endVal, 'Z');
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.end('Z');

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('limit', function() {
    it('should capture the number of results to limit to', function() {
      const query = new Query(['kind1']).limit(20);

      assert.strictEqual(query.limitVal, 20);
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.limit(20);

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('offset', function() {
    it('should capture the number of results to offset by', function() {
      const query = new Query(['kind1']).offset(100);

      assert.strictEqual(query.offsetVal, 100);
    });

    it('should return the query instance', function() {
      const query = new Query(['kind1']);
      const nextQuery = query.offset(100);

      assert.strictEqual(query, nextQuery);
    });
  });

  describe('run', function() {
    it('should call the parent instance runQuery correctly', function(done) {
      const args = [0, 1, 2];

      query.scope.runQuery = function() {
        assert.strictEqual(this, query.scope);
        assert.strictEqual(arguments[0], query);
        assert.strictEqual(arguments[1], args[0]);
        assert.strictEqual(arguments[2], args[1]);
        assert.strictEqual(arguments[3], args[2]);
        done();
      };

      query.run.apply(query, args);
    });
  });

  describe('runStream', function() {
    it('should call the parent instance runQueryStream correctly', function() {
      const args = [0, 1, 2];
      const runQueryReturnValue = {};

      query.scope.runQueryStream = function() {
        assert.strictEqual(this, query.scope);
        assert.strictEqual(arguments[0], query);
        assert.strictEqual(arguments[1], args[0]);
        assert.strictEqual(arguments[2], args[1]);
        assert.strictEqual(arguments[3], args[2]);
        return runQueryReturnValue;
      };

      const results = query.runStream.apply(query, args);
      assert.strictEqual(results, runQueryReturnValue);
    });
  });
});
