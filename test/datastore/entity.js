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

var assert = require('assert');
var entity = require('../../lib/datastore/entity.js');
var datastore = require('../../lib/datastore');
var ByteBuffer = require('bytebuffer');

var entityProto = {
  property: [{
    name: 'linkedTo',
    value: {
      key_value: {
        path_element: [{
          kind: 'Kind',
          name: '123'
        }]
      }
    }
  }, {
    name: 'name',
    value: {
      string_value: 'Some name'
    }
  }, {
    name: 'flagged',
    value: {
      boolean_value: false
    }
  }, {
    name: 'count',
    value: {
      integer_value: 5
    }
  }, {
    name: 'total',
    value: {
      double_value: 7.8
    }
  }, {
    name: 'author',
    value: {
      entity_value: {
        property: [{
          name: 'name',
          value: {
            string_value: 'Burcu Dogan'
          }
        }]
      },
      indexed: false
    }
  }, {
    name: 'list',
    value: {
      list_value: [{
        integer_value: 6
      }, {
        boolean_value: false
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
  end_cursor: new Buffer('end', 'base64'),
  order: [],
  group_by: []
};

describe('keyFromKeyProto', function() {
  var proto = {
    partition_id: { namespace: '', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind', name: 'Name' }]
  };

  var protoH = {
    partition_id: { namespace: 'Test', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind', id: '111' }, { kind: 'Kind2', name: 'name' }]
  };

  var protoIncomplete = {
    partition_id: { namespace: 'Test', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind', id: '111' }, { kind: 'Kind2' }]
  };

  var protoInvalid = {
    partition_id: { namespace: 'Test', dataset_id: 'datasetId' },
    path_element: [{ kind: 'Kind' }, { kind: 'Kind2' }]
  };

  it('should handle keys hierarchically', function() {
    var key = entity.keyFromKeyProto(protoH);
    assert.deepEqual(key, new entity.Key({
      namespace: 'Test',
      path: [ 'Kind', 111, 'Kind2', 'name' ]
    }));
  });

  it('should not set namespace if default', function() {
    var key = entity.keyFromKeyProto(proto);
    assert.deepEqual(key, new entity.Key({ path: [ 'Kind', 'Name' ] }));
  });

  it('should not inject null into path if no id set', function() {
    var key = entity.keyFromKeyProto(protoIncomplete);
    assert.deepEqual(key, new entity.Key({
      namespace: 'Test',
      path: [ 'Kind', 111, 'Kind2' ]
    }));
  });

  it('should throw if path is invalid', function() {
    assert.throws(function() {
      entity.keyFromKeyProto(protoInvalid);
    }, /Invalid key. Ancestor keys require an id or name./);
  });
});

describe('keyToKeyProto', function() {
  it('should handle hierarchical key definitions', function() {
    var key = new entity.Key({ path: [ 'Kind1', 1, 'Kind2', 'name' ] });
    var proto = entity.keyToKeyProto(key);
    assert.strictEqual(proto.partition_id, undefined);
    assert.strictEqual(proto.path_element[0].kind, 'Kind1');
    assert.strictEqual(proto.path_element[0].id, 1);
    assert.strictEqual(proto.path_element[0].name, undefined);
    assert.strictEqual(proto.path_element[1].kind, 'Kind2');
    assert.strictEqual(proto.path_element[1].id, undefined);
    assert.strictEqual(proto.path_element[1].name, 'name');
  });

  it('should detect the namespace of the hierarchical keys', function() {
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
  });

  it('should handle incomplete keys with & without namespaces', function() {
    var key = new entity.Key({ path: [ 'Kind1' ] });
    var keyWithNS = new entity.Key({
      namespace: 'Namespace',
      path: [ 'Kind1' ]
    });
    var keyWithNumericID = new entity.Key({
      path: [ 'Kind1', 234 ]
    });
    var keyWithStringID = new entity.Key({
      path: [ 'Kind1', 'StringId' ]
    });

    var proto = entity.keyToKeyProto(key);
    var protoWithNS = entity.keyToKeyProto(keyWithNS);
    var protoWithNumericID = entity.keyToKeyProto(keyWithNumericID);
    var protoWithStringID = entity.keyToKeyProto(keyWithStringID);

    assert.strictEqual(proto.partition_id, undefined);
    assert.strictEqual(proto.path_element[0].kind, 'Kind1');
    assert.strictEqual(proto.path_element[0].id, undefined);
    assert.strictEqual(proto.path_element[0].name, undefined);

    assert.strictEqual(protoWithNS.partition_id.namespace, 'Namespace');
    assert.strictEqual(protoWithNS.path_element[0].kind, 'Kind1');
    assert.strictEqual(protoWithNS.path_element[0].id, undefined);
    assert.strictEqual(protoWithNS.path_element[0].name, undefined);

    assert.strictEqual(protoWithNumericID.path_element[0].id, 234);
    assert.strictEqual(protoWithStringID.path_element[0].name, 'StringId');
  });

  it('should throw if key contains 0 items', function() {
    assert.throws(function() {
      var key = new entity.Key({ path: [] });
      entity.keyToKeyProto(key);
    }, /A key should contain at least a kind/);
  });

  it('should throw if key path contains null ids', function() {
    assert.throws(function() {
      var key = new entity.Key({
        namespace: 'Namespace',
        path: [ 'Kind1', null, 'Company' ]
      });
      entity.keyToKeyProto(key);
    }, /Invalid key. Ancestor keys require an id or name./);
  });

  it('should not throw if last key path item is null', function() {
    assert.doesNotThrow(function() {
      var key = new entity.Key({
        namespace: 'Namespace',
        path: [ 'Kind1', 123, 'Company', null ]
      });
      entity.keyToKeyProto(key);
    });
  });
});

describe('isKeyComplete', function() {
  it('should ret true if kind and an identifier have !0 vals', function() {
    [
      {
        key: new entity.Key({ path: [ 'Kind1' ] }),
        expected: false
      },
      {
        key: new entity.Key({ path: [ 'Kind1', 3 ] }),
        expected: true
      },
      {
        key: new entity.Key({ namespace: 'NS', path: [ 'Kind1' ] }),
        expected: false
      },
      {
        key: new entity.Key({ namespace: 'NS', path: [ 'Kind1', 'name' ] }),
        expected: true
      }
    ].forEach(function(test) {
      assert.strictEqual(entity.isKeyComplete(test.key), test.expected);
    });
  });

  it('should return false if there is no kind', function() {
    var key = new entity.Key({ path: [ '' ] });

    assert.strictEqual(entity.isKeyComplete(key), false);
  });
});

describe('entityFromEntityProto', function() {
  it('should support bool, int, double, str, entity & list values', function() {
    var obj = entity.entityFromEntityProto(entityProto);
    assert.deepEqual(obj.linkedTo, new entity.Key({ path: [ 'Kind', '123' ]}));
    assert.strictEqual(obj.name, 'Some name');
    assert.strictEqual(obj.flagged, false);
    assert.strictEqual(obj.count, 5);
    assert.strictEqual(obj.total, 7.8);
    assert.strictEqual(obj.author.name, 'Burcu Dogan');
    assert.strictEqual(obj.list[0], 6);
    assert.strictEqual(obj.list[1], false);
  });
});

describe('entityToEntityProto', function() {
  it('should format an entity', function() {
    var val = entity.entityToEntityProto({
      name: 'name'
    });
    var expected = {
      key: null,
      property: [
        {
          name: 'name',
          value: {
            string_value: 'name'
          }
        }
      ]
    };
    assert.deepEqual(val, expected);
  });
});

describe('queryToQueryProto', function() {
  it('should support filters and ancestory filtering', function() {
    var ds = datastore.dataset({ projectId: 'project-id' });
    var q = ds.createQuery('Kind1')
      .filter('name =', 'John')
      .end('end')
      .hasAncestor(new entity.Key({ path: [ 'Kind2', 'somename' ] }));
    var proto = entity.queryToQueryProto(q);
    assert.deepEqual(proto, queryFilterProto);
  });
});

describe('propertyToValue', function() {
  it('should translate a buffer', function() {
    var buffer = new Buffer('010159406940');
    var property = {
      blob_value: ByteBuffer.wrap(buffer)
    };
    var returnedbuffer = entity.propertyToValue(property);
    assert.deepEqual(buffer, returnedbuffer);
  });
});

describe('valueToProperty', function() {
  it('should translate a boolean', function() {
    var val = entity.valueToProperty(true);
    assert.deepEqual(val, {
      boolean_value: true
    });
  });

  it('should translate an int', function() {
    var val1 = entity.valueToProperty(new entity.Int(3));
    var val2 = entity.valueToProperty(3);
    var expected = { integer_value: 3 };
    assert.deepEqual(val1, expected);
    assert.deepEqual(val2, expected);
  });

  it('should translate a double', function() {
    var val1 = entity.valueToProperty(new entity.Double(3.1));
    var val2 = entity.valueToProperty(3.1);
    var expected = { double_value: 3.1 };
    assert.deepEqual(val1, expected);
    assert.deepEqual(val2, expected);
  });

  it('should translate a date', function() {
    var date = new Date();
    var val = entity.valueToProperty(date);
    var expected = {
      timestamp_microseconds_value: date.getTime() * 1000
    };
    assert.deepEqual(val, expected);
  });

  it('should translate a string', function() {
    var val = entity.valueToProperty('Hi');
    var expected = {
      string_value: 'Hi'
    };
    assert.deepEqual(val, expected);
  });

  it('should translate a buffer', function() {
    var buffer = new Buffer('Hi');
    var val = entity.valueToProperty(buffer);
    var expected = {
      blob_value: buffer
    };
    assert.deepEqual(val, expected);
  });

  it('should translate an array', function() {
    var array = [1, '2', true];
    var val = entity.valueToProperty(array);
    var expected = {
      list_value: [
        { integer_value: 1 },
        { string_value: '2' },
        { boolean_value: true }
      ]
    };
    assert.deepEqual(val, expected);
  });

  it('should translate a Key', function() {
    var key = new entity.Key({
      namespace: 'ns',
      path: ['Kind', 3]
    });
    var val = entity.valueToProperty(key);
    var expected = {
      key_value: entity.keyToKeyProto(key)
    };
    assert.deepEqual(val, expected);
  });

  describe('objects', function() {
    it('should translate an object', function() {
      var val = entity.valueToProperty({
        name: 'value'
      });
      var expected = {
        entity_value: {
          property: [
            {
              name: 'name',
              value: {
                string_value: 'value',
              }
            }
          ]
        },
        indexed: false
      };
      assert.deepEqual(val, expected);
    });

    it('should not translate a key-less object', function() {
      assert.throws(function() {
        entity.valueToProperty({});
      }, /Unsupported field value/);
    });
  });
});
