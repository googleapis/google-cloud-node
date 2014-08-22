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
var entity = require('../../lib/datastore/entity.js');
var datastore = require('../../lib/datastore');

var blogPostMetadata = {
  title: { kind: String, indexed: true },
  tags: { kind: String, multi: true, indexed: true },
  publishedAt: { kind: Date },
  author: { kind: Object, indexed: true },
  isDraft: { kind: Boolean, indexed: true }
};

var entityProto = {
  'property': [{
    'name': 'linkedTo',
    'value': {
        'key_value': {
            'path_element': [{
                'kind': 'Kind',
                'name': 'another'
            }]
        }
    }
  }, {
      'name': 'name',
      'value': {
          'string_value': 'Some name'
      }
  }, {
      'name': 'flagged',
      'value': {
          'boolean_value': false
      }
  }, {
      'name': 'count',
      'value': {
          'integer_value': 5
      }
  }, {
      'name': 'total',
      'value': {
          'double_value': 7.8
      }
  }, {
      'name': 'author',
      'value': {
          'entity_value': {
              'property': [{
                  'name': 'name',
                  'value': {
                      'string_value': 'Burcu Dogan'
                  }
              }]
          },
          'indexed': false
      }
  }, {
      'name': 'list',
      'value': {
          'list_value': [{
              'integer_value': 6
          }, {
              'boolean_value': false
          }]
      }
  }]
};

var queryFilterProto = {
  projection: [],
  kind: [{
    name: 'Kind1'
  }],
  filter: {
    composite_filter: {
      filter: [
        {
          property_filter: {
            property: { name: 'name' },
            operator: 'EQUAL',
            value: { string_value: 'John' }
          }
        },
        {
          property_filter: {
            property: { name: '__key__' },
            operator: 'HAS_ANCESTOR',
            value: {
              key_value: {
                path_element: [{ kind: 'Kind2', name: 'somename' }]
              }
            }
          }
        }
      ],
      operator: 'AND'
    }
  },
  order: [],
  group_by: []
};

describe('registerKind', function() {
  it('should be able to register valid field metadata', function(done) {
    entity.registerKind('namespace', 'kind', blogPostMetadata);
    done();
  });

  it('should set the namespace to "" if zero value or null', function(done) {
    entity.registerKind(null, 'kind', blogPostMetadata);
    var meta = entity.getKind('', 'kind');
    assert.strictEqual(meta, blogPostMetadata);
    done();
  });

  it('should throw an exception if an invalid kind', function(done) {
    assert.throws(function() {
      entity.registerKind(null, '000', blogPostMetadata);
    }, /Kinds should match/);
    done();
  });
});

describe('keyFromKeyProto', function() {
   var proto = {
    partition_id: { namespace: '', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind', name: 'Name' }]
  };

  var protoH = {
    partition_id: { namespace: 'Test', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind', id: '111' }, { kind: 'Kind2', name: 'name' }]
  };

  var protoHIncomplete = {
    partition_id: { namespace: 'Test', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind' }, { kind: 'Kind2' }]
  };

  it('should handle keys hierarchically', function(done) {
    var key = entity.keyFromKeyProto(protoH);
    assert.deepEqual(key, new entity.Key({
        namespace: 'Test',
        path: [ 'Kind', 111, 'Kind2', 'name' ]
      }));
    done();
  });

  it('should handle incomplete keys hierarchically', function(done) {
    var key = entity.keyFromKeyProto(protoHIncomplete);
    assert.deepEqual(key, new entity.Key({
        namespace: 'Test',
        path: [ 'Kind', null, 'Kind2', null ]
      }));
    done();
  });

  it('should not set namespace if default', function(done) {
    var key = entity.keyFromKeyProto(proto);
    assert.deepEqual(key, new entity.Key({ path: [ 'Kind', 'Name' ] }));
    done();
  });
});

describe('keyToKeyProto', function() {
  it('should handle hierarchical key definitions', function(done) {
    var key = new entity.Key({ path: [ 'Kind1', 1, 'Kind2', 'name' ] });
    var proto = entity.keyToKeyProto(key);
    assert.strictEqual(proto.partition_id, undefined);
    assert.strictEqual(proto.path_element[0].kind, 'Kind1');
    assert.strictEqual(proto.path_element[0].id, 1);
    assert.strictEqual(proto.path_element[0].name, undefined);
    assert.strictEqual(proto.path_element[1].kind, 'Kind2');
    assert.strictEqual(proto.path_element[1].id, undefined);
    assert.strictEqual(proto.path_element[1].name, 'name');
    done();
  });

  it('should detect the namespace of the hierarchical keys', function(done) {
    var key = new entity.Key({
        namespace: 'Namespace',
        path: [ 'Kind1', 1, 'Kind2', 'name' ]
      });
    var proto = entity.keyToKeyProto(key);
    assert.strictEqual(proto.partition_id.namespace, 'Namespace');
    assert.strictEqual(proto.path_element[0].kind, 'Kind1');
    assert.strictEqual(proto.path_element[0].id, 1);
    assert.strictEqual(proto.path_element[0].name, undefined);
    assert.strictEqual(proto.path_element[1].kind, 'Kind2');
    assert.strictEqual(proto.path_element[1].id, undefined);
    assert.strictEqual(proto.path_element[1].name, 'name');
    done();
  });

  it('should handle incomplete keys with & without namespaces', function(done) {
    var key = new entity.Key({ path: [ 'Kind1', null ] });
    var keyWithNS = new entity.Key({
        namespace: 'Namespace',
        path: [ 'Kind1', null ]
      });

    var proto = entity.keyToKeyProto(key);
    var protoWithNS = entity.keyToKeyProto(keyWithNS);

    assert.strictEqual(proto.partition_id, undefined);
    assert.strictEqual(proto.path_element[0].kind, 'Kind1');
    assert.strictEqual(proto.path_element[0].id, undefined);
    assert.strictEqual(proto.path_element[0].name, undefined);

    assert.strictEqual(protoWithNS.partition_id.namespace, 'Namespace');
    assert.strictEqual(protoWithNS.path_element[0].kind, 'Kind1');
    assert.strictEqual(protoWithNS.path_element[0].id, undefined);
    assert.strictEqual(protoWithNS.path_element[0].name, undefined);
    done();
  });

  it('should throw if key contains less than 2 items', function() {
    assert.throws(function() {
      entity.keyToKeyProto(['Kind']);
    });
  });
});

describe('isKeyComplete', function() {
  it('should ret true if kind and an identifier have !0 vals', function(done) {
    [
      { key: new entity.Key({ path: [ 'Kind1', null ] }), expected: false },
      { key: new entity.Key({ path: [ 'Kind1', 3 ] }), expected: true },
      { key: new entity.Key({
          namespace: 'Namespace',
          path: [ 'Kind1', null ]
        }), expected: false },
      { key: new entity.Key({
          namespace: 'Namespace',
          path: [ 'Kind1', 'name' ]
        }), expected: true }
    ].forEach(function(test) {
      assert.strictEqual(entity.isKeyComplete(test.key), test.expected);
    });
    done();
  });
});

describe('entityFromEntityProto', function() {
  it('should support boolean, integer, double, string, entity and list values',
      function(done) {
    var obj = entity.entityFromEntityProto(entityProto);
    assert.deepEqual(obj.linkedTo, new entity.Key({
        path: [ 'Kind', 'another' ]
      }));
    assert.strictEqual(obj.name, 'Some name');
    assert.strictEqual(obj.flagged, false);
    assert.strictEqual(obj.count, 5);
    assert.strictEqual(obj.total, 7.8);
    assert.strictEqual(obj.author.name, 'Burcu Dogan');
    assert.strictEqual(obj.list[0], 6);
    assert.strictEqual(obj.list[1], false);
    done();
  });
});

describe('entityToEntityProto', function() {
  it(
      'should support boolean, integer, double, string, entity and list values',
      function(done) {
    var now = new Date();
    var proto = entity.entityToEntityProto({
      name: 'Burcu',
      desc: 'Description',
      count: new entity.Int(6),
      primitiveCount: 6,
      legit: true,
      date : now,
      bytes: new Buffer('Hello'),
      list: ['a', new entity.Double(54.7)],
      metadata: {
        key1: 'value1',
        key2: 'value2'
      }
    });
    var properties = proto.property;
    assert.equal(properties[0].value.string_value, 'Burcu');
    assert.equal(properties[1].value.string_value, 'Description');
    assert.equal(properties[2].value.integer_value, 6);
    assert.equal(properties[3].value.integer_value, 6);
    assert.equal(properties[4].value.boolean_value, true);
    assert.equal(
      properties[5].value.timestamp_microseconds_value, now.getTime() * 1000);
    assert.deepEqual(properties[6].value.blob_value, new Buffer('Hello'));

    var listValue = properties[7].value.list_value;
    assert.equal(listValue[0].string_value, 'a');
    assert.equal(listValue[1].double_value, 54.7);

    var entityValue = properties[8].value.entity_value;
    assert.equal(entityValue.property[0].value.string_value, 'value1');
    assert.equal(entityValue.property[1].value.string_value, 'value2');
    done();
  });

});

describe('queryToQueryProto', function() {
  it('should support filters and ancestory filtering', function(done) {
    var ds = new datastore.Dataset({ projectId: 'project-id' });
    var q = ds.createQuery('Kind1')
      .filter('name =', 'John')
      .hasAncestor(new entity.Key({ path: [ 'Kind2', 'somename' ] }));
    var proto = entity.queryToQueryProto(q);
    assert.deepEqual(proto, queryFilterProto);
    done();
  });
});
