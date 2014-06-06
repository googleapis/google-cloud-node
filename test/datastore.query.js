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

var assert = require('assert'),
  datastore = require('../lib/datastore');

describe('Query', function() {

  var ds = new datastore.Dataset({ projectId: 'my-project-id' });
  it('should be identified by its parent dataset ID', function(done) {
    var q = ds.query(['kind1']);
    assert.equal(q.datasetId, 's~my-project-id');
    done();
  });

  it('should support querying multiple kinds', function(done) {
    var q = ds.query(['kind1', 'kind2']);
    var qNS = ds.queryNS([
      { ns: 'ns1', kind: 'kind1' },
      { ns: 'ns2', kind: 'kind2' }]);

    assert.equal(q.kinds[0].ns, 'default');
    assert.equal(q.kinds[0].kind, 'kind1');
    assert.equal(q.kinds[1].ns, 'default');
    assert.equal(q.kinds[1].kind, 'kind2');

    assert.equal(qNS.kinds[0].ns, 'ns1');
    assert.equal(qNS.kinds[0].kind, 'kind1');
    assert.equal(qNS.kinds[1].ns, 'ns2');
    assert.equal(qNS.kinds[1].kind, 'kind2');
    done();
  });

  it('should support field selection by field name', function(done) {
    var q = ds.query(['kind1']).select(['name', 'title']);
    assert.equal(q.selectVal[0], 'name');
    assert.equal(q.selectVal[1], 'title');
    done();
  });

  it('should support multiple filters', function(done) {
    var now = new Date();
    var q = ds.query(['kind1'])
        .filter('date <=', now)
        .filter('name =', 'Title')
        .filter('count >', 20);
    assert.equal(q.filters[0].name, 'date');
    assert.equal(q.filters[0].op, '<=');
    assert.strictEqual(q.filters[0].val, now);

    assert.equal(q.filters[1].name, 'name');
    assert.equal(q.filters[1].op, '=');
    assert.strictEqual(q.filters[1].val, 'Title');

    assert.equal(q.filters[2].name, 'count');
    assert.equal(q.filters[2].op, '>');
    assert.strictEqual(q.filters[2].val, 20);
    done();
  });

  it('should support ordering asc and desc', function(done) {
    var q = ds.query(['kind1']).order('+name').order('-count');
    assert.equal(q.orders[0].name, 'name');
    assert.equal(q.orders[0].sign, '+');
    assert.equal(q.orders[1].name, 'count');
    assert.equal(q.orders[1].sign, '-');
    done();
  });

  it('should throw error is invalid sort sign is provided', function(done) {
    assert.throws(function() {
      var q = ds.query(['kind1']).order('*name');
    }, /Invalid order pattern/);
    done();
  });

  it('should provide pagination with offset and limit', function(done) {
    var q = ds.query(['kind1']).offset(20).limit(100);
    assert.strictEqual(q.offsetVal, 20);
    assert.strictEqual(q.limitVal, 100);
    done();
  });

  it('should allow page start tokens', function(done) {
     var q = ds.query(['kind1']).start('abc123');
     assert.strictEqual(q.startVal, 'abc123');
     done();
  });

});