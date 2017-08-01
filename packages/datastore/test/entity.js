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
var deepStrictEqual = require('deep-strict-equal');
assert.deepStrictEqual = assert.deepStrictEqual || function() {
  return assert(deepStrictEqual.apply(this, arguments));
};
var extend = require('extend');

var Datastore = require('../');

describe('entity', function() {
  var entity;

  beforeEach(function() {
    delete require.cache[require.resolve('../src/entity.js')];
    entity = require('../src/entity.js');
  });

  describe('KEY_SYMBOL', function() {
    it('should export the symbol', function() {
      assert.strictEqual(entity.KEY_SYMBOL.toString(), 'Symbol(KEY)');
    });
  });

  describe('Double', function() {
    it('should store the value', function() {
      var value = 8.3;

      var double = new entity.Double(value);
      assert.strictEqual(double.value, value);
    });
  });

  describe('Int', function() {
    it('should store the stringified value', function() {
      var value = 8;

      var int = new entity.Int(value);
      assert.strictEqual(int.value, value.toString());
    });
  });

  describe('GeoPoint', function() {
    it('should store the value', function() {
      var value = {
        latitude: 24,
        longitude: 88
      };

      var geoPoint = new entity.GeoPoint(value);
      assert.strictEqual(geoPoint.value, value);
    });
  });

  describe('Key', function() {
    it('should assign the namespace', function() {
      var namespace = 'NS';
      var key = new entity.Key({ namespace: namespace, path: [] });
      assert.strictEqual(key.namespace, namespace);
    });

    it('should assign the kind', function() {
      var kind = 'kind';
      var key = new entity.Key({ path: [kind] });
      assert.strictEqual(key.kind, kind);
    });

    it('should assign the ID', function() {
      var id = 11;
      var key = new entity.Key({ path: ['Kind', id] });
      assert.strictEqual(key.id, id);
    });

    it('should assign the ID from an Int', function() {
      var id = new entity.Int(11);
      var key = new entity.Key({ path: ['Kind', id] });
      assert.strictEqual(key.id, id.value);
    });

    it('should assign the name', function() {
      var name = 'name';
      var key = new entity.Key({ path: ['Kind', name] });
      assert.strictEqual(key.name, name);
    });

    it('should assign a parent', function() {
      var key = new entity.Key({ path: ['ParentKind', 1, 'Kind', 1] });
      assert(key.parent instanceof entity.Key);
    });

    it('should always compute the correct path', function() {
      var key = new entity.Key({ path: ['ParentKind', 1, 'Kind', 1] });
      assert.deepEqual(key.path, ['ParentKind', 1, 'Kind', 1]);

      key.parent.kind = 'GrandParentKind';
      key.kind = 'ParentKind';

      assert.deepEqual(key.path, ['GrandParentKind', 1, 'ParentKind', 1]);
    });
  });

  describe('decodeValueProto', function() {
    it('should decode arrays', function() {
      var expectedValue = [{}];

      var valueProto = {
        value_type: 'arrayValue',
        arrayValue: {
          values: expectedValue
        }
      };

      var run = false;

      var decodeValueProto = entity.decodeValueProto;
      entity.decodeValueProto = function(valueProto) {
        if (!run) {
          run = true;
          return decodeValueProto.apply(null, arguments);
        }

        assert.strictEqual(valueProto, expectedValue[0]);
        return valueProto;
      };

      assert.deepEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode blobs', function() {
      var expectedValue = new Buffer('Hi');

      var valueProto = {
        value_type: 'blobValue',
        blobValue: expectedValue.toString('base64')
      };

      assert.deepEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode null', function() {
      var expectedValue = null;

      var valueProto = {
        value_type: 'nullValue',
        nullValue: 0
      };

      var decodedValue = entity.decodeValueProto(valueProto);
      assert.deepStrictEqual(decodedValue, expectedValue);
    });

    it('should decode doubles', function() {
      var expectedValue = 8.3;

      var valueProto = {
        value_type: 'doubleValue',
        doubleValue: expectedValue
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode ints', function() {
      var expectedValue = 8;

      var valueProto = {
        value_type: 'integerValue',
        integerValue: expectedValue
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode entities', function() {
      var expectedValue = {};

      var valueProto = {
        value_type: 'entityValue',
        entityValue: expectedValue
      };

      entity.entityFromEntityProto = function(entityProto) {
        assert.strictEqual(entityProto, expectedValue);
        return expectedValue;
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode keys', function() {
      var expectedValue = {};

      var valueProto = {
        value_type: 'keyValue',
        keyValue: expectedValue
      };

      entity.keyFromKeyProto = function(keyProto) {
        assert.strictEqual(keyProto, expectedValue);
        return expectedValue;
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode timestamps', function() {
      var date = new Date();

      var seconds = Math.floor(date.getTime() / 1000);
      var ms = date.getMilliseconds();

      var expectedValue = new Date(seconds * 1000 + ms);

      var valueProto = {
        value_type: 'timestampValue',
        timestampValue: {
          seconds: seconds,
          nanos: ms * 1e6
        }
      };

      assert.deepEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should return the value if no conversions are necessary', function() {
      var expectedValue = false;

      var valueProto = {
        value_type: 'booleanValue',
        booleanValue: expectedValue
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });
  });

  describe('encodeValue', function() {
    it('should encode a boolean', function() {
      var value = true;

      var expectedValueProto = {
        booleanValue: value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode null', function() {
      var value = null;

      var expectedValueProto = {
        nullValue: 0
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an int', function() {
      var value = 8;

      var expectedValueProto = {
        integerValue: value
      };

      entity.Int = function(value_) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an Int object', function() {
      var value = new entity.Int(3);

      var expectedValueProto = {
        integerValue: value.value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a double', function() {
      var value = 8.3;

      var expectedValueProto = {
        doubleValue: value
      };

      entity.Double = function(value_) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Double object', function() {
      var value = new entity.Double(3);

      var expectedValueProto = {
        doubleValue: value.value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a GeoPoint object', function() {
      var value = new entity.GeoPoint();

      var expectedValueProto = {
        geoPointValue: value.value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a date', function() {
      var value = new Date();
      var seconds = value.getTime() / 1000;

      var expectedValueProto = {
        timestampValue: {
          seconds: Math.floor(seconds),
          nanos: value.getMilliseconds() * 1e6
        }
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a string', function() {
      var value = 'Hi';

      var expectedValueProto = {
        stringValue: value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a buffer', function() {
      var value = new Buffer('Hi');

      var expectedValueProto = {
        blobValue: value
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an array', function() {
      var value = [{}];

      var expectedValueProto = {
        arrayValue: {
          values: value
        }
      };

      var run = false;

      var encodeValue = entity.encodeValue;
      entity.encodeValue = function(value_) {
        if (!run) {
          run = true;
          return encodeValue.apply(null, arguments);
        }

        assert.strictEqual(value_, value[0]);
        return value_;
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Key', function() {
      var value = new entity.Key({
        namespace: 'ns',
        path: ['Kind', 1]
      });

      var expectedValueProto = {
        keyValue: value
      };

      entity.keyToKeyProto = function(key) {
        assert.strictEqual(key, value);
        return value;
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an object', function() {
      var value = {
        key: 'value'
      };

      var expectedValueProto = {
        entityValue: {
          properties: {
            key: value.key
          }
        }
      };

      var run = false;

      var encodeValue = entity.encodeValue;
      entity.encodeValue = function(value_) {
        if (!run) {
          run = true;
          return encodeValue.apply(null, arguments);
        }

        assert.strictEqual(value_, value.key);
        return value_;
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should clone an object', function() {
      var value = {
        a: {
          b: {
            obj: true
          }
        }
      };

      var originalValue = extend(true, {}, value);

      var encodedValue = entity.encodeValue(value);

      assert.deepEqual(value, originalValue);
      assert.notStrictEqual(value, encodedValue);
    });

    it('should encode an empty object', function() {
      var value = {};

      var expectedValueProto = {
        entityValue: {
          properties: {}
        }
      };

      assert.deepEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should throw if an invalid value was provided', function() {
      assert.throws(function() {
        entity.encodeValue();
      }, /Unsupported field value/);
    });
  });

  describe('entityFromEntityProto', function() {
    it('should convert entity proto to entity', function() {
      var expectedEntity = {
        name: 'Stephen'
      };

      var entityProto = {
        properties: {
          name: {
            value_type: 'stringValue',
            stringValue: expectedEntity.name
          }
        }
      };

      assert.deepEqual(
        entity.entityFromEntityProto(entityProto),
        expectedEntity
      );
    });
  });

  describe('entityToEntityProto', function() {
    it('should format an entity', function() {
      var value = 'Stephen';

      var entityObject = {
        data: {
          name: value
        }
      };

      var expectedEntityProto = {
        key: null,
        properties: entityObject.data
      };

      entity.encodeValue = function(value_) {
        assert.strictEqual(value_, value);
        return value;
      };

      assert.deepEqual(
        entity.entityToEntityProto(entityObject),
        expectedEntityProto
      );
    });

    it('should respect excludeFromIndexes', function() {
      var value = 'Stephen';

      var entityObject = {
        excludeFromIndexes: [
          'name',
          'entity.name',
          'array[].name',
          'array[].entity.name',
          'array[].entity.array[].name',
          'array[].array[].entity.name'
        ],

        data: {
          name: value,

          entity: {
            name: value
          },

          array: [
            {
              name: value
            },
            {
              entity: {
                name: value,
                array: [
                  {
                    name: value
                  }
                ]
              }
            },
            {
              array: [
                {
                  entity: {
                    name: value
                  }
                }
              ]
            }
          ]
        }
      };

      var expectedEntityProto = {
        key: null,
        properties: {
          name: {
            stringValue: value,
            excludeFromIndexes: true
          },
          entity: {
            entityValue: {
              properties: {
                name: {
                  stringValue: value,
                  excludeFromIndexes: true
                }
              }
            }
          },
          array: {
            arrayValue: {
              values: [
                {
                  entityValue: {
                    properties: {
                      name: {
                        stringValue: value,
                        excludeFromIndexes: true
                      }
                    }
                  }
                },
                {
                  entityValue: {
                    properties: {
                      entity: {
                        entityValue: {
                          properties: {
                            name: {
                              stringValue: value,
                              excludeFromIndexes: true
                            },
                            array: {
                              arrayValue: {
                                values: [
                                  {
                                    entityValue: {
                                      properties: {
                                        name: {
                                          stringValue: value,
                                          excludeFromIndexes: true
                                        }
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                {
                  entityValue: {
                    properties: {
                      array: {
                        arrayValue: {
                          values: [
                            {
                              entityValue: {
                                properties: {
                                  entity: {
                                    entityValue: {
                                      properties: {
                                        name: {
                                          stringValue: value,
                                          excludeFromIndexes: true
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      };

      assert.deepEqual(
        entity.entityToEntityProto(entityObject),
        expectedEntityProto
      );
    });
  });

  describe('formatArray', function() {
    it('should convert protos to key/data entity array', function() {
      var key = {};

      var entityProto = {
        key: key
      };

      var results = [
        {
          entity: entityProto
        }
      ];

      var expectedResults = entityProto;

      entity.keyFromKeyProto = function(key_) {
        assert.strictEqual(key_, key);
        return key;
      };

      entity.entityFromEntityProto = function(entityProto_) {
        assert.strictEqual(entityProto_, entityProto);
        return entityProto;
      };

      var ent = entity.formatArray(results)[0];

      assert.deepEqual(ent, expectedResults);
      assert.strictEqual(ent[entity.KEY_SYMBOL], key);
    });
  });

  describe('isKeyComplete', function() {
    it('should convert key to key proto', function(done) {
      var key = new entity.Key({
        path: ['Kind', 123]
      });

      entity.keyToKeyProto = function(key_) {
        assert.strictEqual(key_, key);
        setImmediate(done);
        return key;
      };

      entity.isKeyComplete(key);
    });

    it('should return true if key has id', function() {
      var key = new entity.Key({
        path: ['Kind', 123]
      });

      assert.strictEqual(entity.isKeyComplete(key), true);
    });

    it('should return true if key has name', function() {
      var key = new entity.Key({
        path: ['Kind', 'name']
      });

      assert.strictEqual(entity.isKeyComplete(key), true);
    });

    it('should return false if key does not have name or ID', function() {
      var key = new entity.Key({
        path: ['Kind']
      });

      assert.strictEqual(entity.isKeyComplete(key), false);
    });
  });

  describe('keyFromKeyProto', function() {
    var NAMESPACE = 'Namespace';

    var keyProto = {
      partitionId: {
        namespaceId: NAMESPACE,
        projectId: 'project-id'
      },
      path: [
        {
          id_type: 'id',
          kind: 'Kind',
          id: '111'
        },
        {
          id_type: 'name',
          kind: 'Kind2',
          name: 'name'
        }
      ]
    };

    it('should set the namespace', function(done) {
      entity.Key = function(keyOptions) {
        assert.strictEqual(keyOptions.namespace, NAMESPACE);
        done();
      };

      entity.keyFromKeyProto(keyProto);
    });

    it('should create a proper Key', function(done) {
      entity.Key = function(keyOptions) {
        assert.deepEqual(keyOptions, {
          namespace: NAMESPACE,
          path: [
            'Kind',
            new entity.Int(111),
            'Kind2',
            'name'
          ]
        });

        done();
      };

      entity.keyFromKeyProto(keyProto);
    });

    it('should return the created Key', function() {
      var expectedValue = {};

      entity.Key = function() {
        return expectedValue;
      };

      assert.strictEqual(entity.keyFromKeyProto(keyProto), expectedValue);
    });

    it('should throw if path is invalid', function(done) {
      var keyProtoInvalid = {
        partitionId: {
          namespaceId: 'Namespace',
          projectId: 'project-id'
        },
        path: [
          {
            kind: 'Kind'
          },
          {
            kind: 'Kind2'
          }
        ]
      };

      try {
        entity.keyFromKeyProto(keyProtoInvalid);
      } catch(e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'Ancestor keys require an id or name.');
        done();
      }
    });
  });

  describe('keyToKeyProto', function() {
    it('should handle hierarchical key definitions', function() {
      var key = new entity.Key({
        path: ['Kind1', 1, 'Kind2', 'name', 'Kind3', new entity.Int(3)]
      });

      var keyProto = entity.keyToKeyProto(key);

      assert.strictEqual(keyProto.partitionId, undefined);

      assert.strictEqual(keyProto.path[0].kind, 'Kind1');
      assert.strictEqual(keyProto.path[0].id, 1);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProto.path[1].kind, 'Kind2');
      assert.strictEqual(keyProto.path[1].id, undefined);
      assert.strictEqual(keyProto.path[1].name, 'name');

      assert.strictEqual(keyProto.path[2].kind, 'Kind3');
      assert.strictEqual(keyProto.path[2].id, new entity.Int(3).value);
      assert.strictEqual(keyProto.path[2].name, undefined);
    });

    it('should detect the namespace of the hierarchical keys', function() {
      var key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 1, 'Kind2', 'name']
      });

      var keyProto = entity.keyToKeyProto(key);

      assert.strictEqual(keyProto.partitionId.namespaceId, 'Namespace');

      assert.strictEqual(keyProto.path[0].kind, 'Kind1');
      assert.strictEqual(keyProto.path[0].id, 1);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProto.path[1].kind, 'Kind2');
      assert.strictEqual(keyProto.path[1].id, undefined);
      assert.strictEqual(keyProto.path[1].name, 'name');
    });

    it('should handle incomplete keys with & without namespaces', function() {
      var incompleteKey = new entity.Key({
        path: ['Kind']
      });

      var incompleteKeyWithNs = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind']
      });

      var keyProto = entity.keyToKeyProto(incompleteKey);
      var keyProtoWithNs = entity.keyToKeyProto(incompleteKeyWithNs);

      assert.strictEqual(keyProto.partitionId, undefined);
      assert.strictEqual(keyProto.path[0].kind, 'Kind');
      assert.strictEqual(keyProto.path[0].id, undefined);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProtoWithNs.partitionId.namespaceId, 'Namespace');
      assert.strictEqual(keyProtoWithNs.path[0].kind, 'Kind');
      assert.strictEqual(keyProtoWithNs.path[0].id, undefined);
      assert.strictEqual(keyProtoWithNs.path[0].name, undefined);
    });

    it('should throw if key contains 0 items', function(done) {
      var key = new entity.Key({
        path: []
      });

      try {
        entity.keyToKeyProto(key);
      } catch(e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'A key should contain at least a kind.');
        done();
      }
    });

    it('should throw if key path contains null ids', function(done) {
      var key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', null, 'Company']
      });

      try {
        entity.keyToKeyProto(key);
      } catch(e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'Ancestor keys require an id or name.');
        done();
      }
    });

    it('should not throw if key is incomplete', function() {
      var key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 123, 'Company', null]
      });

      assert.doesNotThrow(function() {
        entity.keyToKeyProto(key);
      });
    });
  });

  describe('queryToQueryProto', function() {
    var queryProto = {
      distinctOn: [
        {
          name: 'name'
        }
      ],
      kind: [
        {
          name: 'Kind1'
        }
      ],
      order: [
        {
          property: {
            name: 'name'
          },
          direction: 'ASCENDING'
        }
      ],
      projection: [
        {
          property: {
            name: 'name'
          }
        }
      ],
      endCursor: 'end',
      limit: {
        value: 1
      },
      offset: 1,
      startCursor: 'start',
      filter: {
        compositeFilter: {
          filters: [
            {
              propertyFilter: {
                property: {
                  name: 'name'
                },
                op: 'EQUAL',
                value: {
                  stringValue: 'John'
                }
              }
            },
            {
              propertyFilter: {
                property: {
                  name: '__key__'
                },
                op: 'HAS_ANCESTOR',
                value: {
                  keyValue: {
                    path: [
                      {
                        kind: 'Kind2',
                        name: 'somename'
                      }
                    ]
                  }
                }
              }
            }
          ],
          op: 'AND'
        }
      }
    };

    it('should support all configurations of a query', function() {
      var ancestorKey = new entity.Key({
        path: ['Kind2', 'somename']
      });

      var ds = new Datastore({ projectId: 'project-id' });

      var query = ds.createQuery('Kind1')
        .filter('name', 'John')
        .start('start')
        .end('end')
        .groupBy(['name'])
        .order('name')
        .select('name')
        .limit(1)
        .offset(1)
        .hasAncestor(ancestorKey);

      assert.deepEqual(entity.queryToQueryProto(query), queryProto);
    });

    it('should handle buffer start and end values', function() {
      var ds = new Datastore({ projectId: 'project-id' });
      var startVal = new Buffer('start');
      var endVal = new Buffer('end');

      var query = ds.createQuery('Kind1')
        .start(startVal)
        .end(endVal);

      var queryProto = entity.queryToQueryProto(query);
      assert.strictEqual(queryProto.endCursor, endVal);
      assert.strictEqual(queryProto.startCursor, startVal);
    });
  });
});
