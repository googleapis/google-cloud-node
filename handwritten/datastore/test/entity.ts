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

import * as assert from 'assert';
import * as extend from 'extend';
import {Datastore} from '../src';

describe('entity', () => {
  let entity;

  beforeEach(() => {
    delete require.cache[require.resolve('../src/entity.js')];
    entity = require('../src/entity.js').entity;
  });

  describe('KEY_SYMBOL', () => {
    it('should export the symbol', () => {
      assert.strictEqual(entity.KEY_SYMBOL.toString(), 'Symbol(KEY)');
    });
  });

  describe('Double', () => {
    it('should store the value', () => {
      const value = 8.3;

      const double = new entity.Double(value);
      assert.strictEqual(double.value, value);
    });
  });

  describe('isDsDouble', () => {
    it('should correctly identify a Double', () => {
      const double = new entity.Double(0.42);
      assert.strictEqual(entity.isDsDouble(double), true);
    });

    it('should correctly identify a homomorphic non-Double', () => {
      const nonDouble = Object.assign({}, new entity.Double(42));
      assert.strictEqual(entity.isDsDouble(nonDouble), false);
    });

    it('should correctly identify a primitive', () => {
      const primitiveDouble = 0.42;
      assert.strictEqual(entity.isDsDouble(primitiveDouble), false);
    });
  });

  describe('Int', () => {
    it('should store the stringified value', () => {
      const value = 8;

      const int = new entity.Int(value);
      assert.strictEqual(int.value, value.toString());
    });
  });

  describe('isDsInt', () => {
    it('should correctly identify an Int', () => {
      const int = new entity.Int(42);
      assert.strictEqual(entity.isDsInt(int), true);
    });

    it('should correctly identify homomorphic non-Int', () => {
      const nonInt = Object.assign({}, new entity.Int(42));
      assert.strictEqual(entity.isDsInt(nonInt), false);
    });

    it('should correctly identify a primitive', () => {
      const primitiveInt = 42;
      assert.strictEqual(entity.isDsInt(primitiveInt), false);
    });
  });

  describe('GeoPoint', () => {
    it('should store the value', () => {
      const value = {
        latitude: 24,
        longitude: 88,
      };

      const geoPoint = new entity.GeoPoint(value);
      assert.strictEqual(geoPoint.value, value);
    });
  });

  describe('isDsGeoPoint', () => {
    it('should correctly identify a GeoPoint', () => {
      const geoPoint = new entity.GeoPoint({latitude: 24, longitude: 88});
      assert.strictEqual(entity.isDsGeoPoint(geoPoint), true);
    });

    it('should correctly identify a homomorphic non-GeoPoint', () => {
      const geoPoint = new entity.GeoPoint({latitude: 24, longitude: 88});
      const nonGeoPoint = Object.assign({}, geoPoint);
      assert.strictEqual(entity.isDsGeoPoint(nonGeoPoint), false);
    });
  });

  describe('Key', () => {
    it('should assign the namespace', () => {
      const namespace = 'NS';
      const key = new entity.Key({namespace, path: []});
      assert.strictEqual(key.namespace, namespace);
    });

    it('should assign the kind', () => {
      const kind = 'kind';
      const key = new entity.Key({path: [kind]});
      assert.strictEqual(key.kind, kind);
    });

    it('should assign the ID', () => {
      const id = 11;
      const key = new entity.Key({path: ['Kind', id]});
      assert.strictEqual(key.id, id);
    });

    it('should assign the ID from an Int', () => {
      const id = new entity.Int(11);
      const key = new entity.Key({path: ['Kind', id]});
      assert.strictEqual(key.id, id.value);
    });

    it('should assign the name', () => {
      const name = 'name';
      const key = new entity.Key({path: ['Kind', name]});
      assert.strictEqual(key.name, name);
    });

    it('should assign a parent', () => {
      const key = new entity.Key({path: ['ParentKind', 1, 'Kind', 1]});
      assert(key.parent instanceof entity.Key);
    });

    it('should not modify input path', () => {
      const inputPath = ['ParentKind', 1, 'Kind', 1];
      const key = new entity.Key({path: inputPath});
      assert.deepStrictEqual(inputPath, ['ParentKind', 1, 'Kind', 1]);
    });

    it('should always compute the correct path', () => {
      const key = new entity.Key({path: ['ParentKind', 1, 'Kind', 1]});
      assert.deepStrictEqual(key.path, ['ParentKind', 1, 'Kind', 1]);

      key.parent.kind = 'GrandParentKind';
      key.kind = 'ParentKind';

      assert.deepStrictEqual(key.path, ['GrandParentKind', 1, 'ParentKind', 1]);
    });
  });

  describe('isDsKey', () => {
    it('should correctly identify a Key', () => {
      const key = new entity.Key({path: ['Kind', 1]});
      assert.strictEqual(entity.isDsKey(key), true);
    });

    it('should correctly identify a homomorphic non-Key', () => {
      const notKey = Object.assign({}, new entity.Key({path: ['Kind', 1]}));
      assert.strictEqual(entity.isDsKey(notKey), false);
    });
  });

  describe('decodeValueProto', () => {
    it('should decode arrays', () => {
      const expectedValue = [{}];

      const valueProto = {
        valueType: 'arrayValue',
        arrayValue: {
          values: expectedValue,
        },
      };

      let run = false;

      const decodeValueProto = entity.decodeValueProto;
      entity.decodeValueProto = (valueProto) => {
        if (!run) {
          run = true;
          return decodeValueProto(valueProto);
        }

        assert.strictEqual(valueProto, expectedValue[0]);
        return valueProto;
      };

      assert.deepStrictEqual(
          entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode blobs', () => {
      const expectedValue = Buffer.from('Hi');

      const valueProto = {
        valueType: 'blobValue',
        blobValue: expectedValue.toString('base64'),
      };

      assert.deepStrictEqual(
          entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode null', () => {
      const expectedValue = null;

      const valueProto = {
        valueType: 'nullValue',
        nullValue: 0,
      };

      const decodedValue = entity.decodeValueProto(valueProto);
      assert.deepStrictEqual(decodedValue, expectedValue);
    });

    it('should decode doubles', () => {
      const expectedValue = 8.3;

      const valueProto = {
        valueType: 'doubleValue',
        doubleValue: expectedValue,
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode ints', () => {
      const expectedValue = 8;

      const valueProto = {
        valueType: 'integerValue',
        integerValue: expectedValue,
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode entities', () => {
      const expectedValue = {};

      const valueProto = {
        valueType: 'entityValue',
        entityValue: expectedValue,
      };

      entity.entityFromEntityProto = (entityProto) => {
        assert.strictEqual(entityProto, expectedValue);
        return expectedValue;
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode keys', () => {
      const expectedValue = {};

      const valueProto = {
        valueType: 'keyValue',
        keyValue: expectedValue,
      };

      entity.keyFromKeyProto = (keyProto) => {
        assert.strictEqual(keyProto, expectedValue);
        return expectedValue;
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should decode timestamps', () => {
      const date = new Date();

      const seconds = Math.floor(date.getTime() / 1000);
      const ms = date.getMilliseconds();

      const expectedValue = new Date(seconds * 1000 + ms);

      const valueProto = {
        valueType: 'timestampValue',
        timestampValue: {
          seconds,
          nanos: ms * 1e6,
        },
      };

      assert.deepStrictEqual(
          entity.decodeValueProto(valueProto), expectedValue);
    });

    it('should return the value if no conversions are necessary', () => {
      const expectedValue = false;

      const valueProto = {
        valueType: 'booleanValue',
        booleanValue: expectedValue,
      };

      assert.strictEqual(entity.decodeValueProto(valueProto), expectedValue);
    });
  });

  describe('encodeValue', () => {
    it('should encode a boolean', () => {
      const value = true;

      const expectedValueProto = {
        booleanValue: value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode null', () => {
      const value = null;

      const expectedValueProto = {
        nullValue: 0,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an int', () => {
      const value = 8;

      const expectedValueProto = {
        integerValue: value,
      };

      entity.Int = function(value_) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an Int object', () => {
      const value = new entity.Int(3);

      const expectedValueProto = {
        integerValue: value.value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a double', () => {
      const value = 8.3;

      const expectedValueProto = {
        doubleValue: value,
      };

      entity.Double = function(value_) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Double object', () => {
      const value = new entity.Double(3);

      const expectedValueProto = {
        doubleValue: value.value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a GeoPoint object', () => {
      const value = new entity.GeoPoint();

      const expectedValueProto = {
        geoPointValue: value.value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a date', () => {
      const value = new Date();
      const seconds = value.getTime() / 1000;

      const expectedValueProto = {
        timestampValue: {
          seconds: Math.floor(seconds),
          nanos: value.getMilliseconds() * 1e6,
        },
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a string', () => {
      const value = 'Hi';

      const expectedValueProto = {
        stringValue: value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a buffer', () => {
      const value = Buffer.from('Hi');

      const expectedValueProto = {
        blobValue: value,
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an array', () => {
      const value = [{}];

      const expectedValueProto = {
        arrayValue: {
          values: value,
        },
      };

      let run = false;

      const encodeValue = entity.encodeValue;
      entity.encodeValue = (value_) => {
        if (!run) {
          run = true;
          return encodeValue(value_);
        }

        assert.strictEqual(value_, value[0]);
        return value_;
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Key', () => {
      const value = new entity.Key({
        namespace: 'ns',
        path: ['Kind', 1],
      });

      const expectedValueProto = {
        keyValue: value,
      };

      entity.keyToKeyProto = (key) => {
        assert.strictEqual(key, value);
        return value;
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should encode an object', () => {
      const value = {
        key: 'value',
      };

      const expectedValueProto = {
        entityValue: {
          properties: {
            key: value.key,
          },
        },
      };

      let run = false;

      const encodeValue = entity.encodeValue;
      entity.encodeValue = (value_) => {
        if (!run) {
          run = true;
          return encodeValue(value_);
        }

        assert.strictEqual(value_, value.key);
        return value_;
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should clone an object', () => {
      const value = {
        a: {
          b: {
            obj: true,
          },
        },
      };

      const originalValue = extend(true, {}, value);

      const encodedValue = entity.encodeValue(value);

      assert.deepStrictEqual(value, originalValue);
      assert.notStrictEqual(value, encodedValue);
    });

    it('should encode an empty object', () => {
      const value = {};

      const expectedValueProto = {
        entityValue: {
          properties: {},
        },
      };

      assert.deepStrictEqual(entity.encodeValue(value), expectedValueProto);
    });

    it('should throw if an invalid value was provided', () => {
      assert.throws(() => {
        entity.encodeValue();
      }, /Unsupported field value/);
    });
  });

  describe('entityFromEntityProto', () => {
    it('should convert entity proto to entity', () => {
      const expectedEntity = {
        name: 'Stephen',
      };

      const entityProto = {
        properties: {
          name: {
            valueType: 'stringValue',
            stringValue: expectedEntity.name,
          },
        },
      };

      assert.deepStrictEqual(
          entity.entityFromEntityProto(entityProto), expectedEntity);
    });
  });

  describe('entityToEntityProto', () => {
    it('should format an entity', () => {
      const value = 'Stephen';

      const entityObject = {
        data: {
          name: value,
        },
      };

      const expectedEntityProto = {
        key: null,
        properties: entityObject.data,
      };

      entity.encodeValue = (value_) => {
        assert.strictEqual(value_, value);
        return value;
      };

      assert.deepStrictEqual(
          entity.entityToEntityProto(entityObject), expectedEntityProto);
    });

    it('should respect excludeFromIndexes', () => {
      const value1 = 'Stephen';
      const value2 = 'Stephen2';
      const value3 = 'Stephen3';
      const value4 = 'Stephen4';
      const value5 = 'Stephen5';
      const value6 = 'Stephen6';
      const value7 = 'Stephen7';
      const value8 = 'Stephen8';
      const value9 = 'Stephen9';
      const value10 = 'Stephen10';
      const value11 = 'Stephen11';
      const value12 = 'Stephen12';
      const value13 = 'something';
      const value14 = 'else';
      const value15 = 'whatever';

      const entityObject = {
        excludeFromIndexes: [
          'name',
          'entity.name',
          'array[]',
          'array[].name',
          'array[].entity.name',
          'array[].entity.array[].name',
          'array[].array[].entity.name',
          'entityExcluded[].name',
          'primitiveExcluded[]',
          'rules[].requirements[].audiences',
          'nestedArrayVariants[].a[].b',
          'alpha[]',
          'omega',
        ],

        data: {
          name: value1,

          entity: {
            name: value2,
          },

          entityExcluded: [
            value3,
            {
              name: value4,
            },
          ],

          primitiveExcluded: [
            value5,
            {
              name: value6,
            },
          ],

          array: [
            value7,
            {
              name: value8,
            },
            {
              entity: {
                name: value9,
                array: [
                  {
                    name: value10,
                  },
                ],
              },
            },
            {
              array: [
                {
                  entity: {
                    name: value11,
                  },
                },
              ],
            },
          ],

          rules: [
            {
              requirements: [
                {
                  audiences: value12,
                },
              ],
            },
            {
              requirements: null,
            },
          ],

          nestedArrayVariants: [
            {
              a: [{b: value13}, {c: value14}],
            },
            {
              a: null,
            },
            {
              a: [value15],
            },
            {
              a: [{b: ['nasty', 'array']}],
            },
          ],

          alpha: ['beta', 'gamma'],

          omega: ['beta', 'gamma'],
        },
      };

      const expectedEntityProto = {
        key: null,
        properties: {
          name: {
            stringValue: value1,
            excludeFromIndexes: true,
          },
          entity: {
            entityValue: {
              properties: {
                name: {
                  stringValue: value2,
                  excludeFromIndexes: true,
                },
              },
            },
          },
          entityExcluded: {
            arrayValue: {
              values: [
                {
                  stringValue: value3,
                },
                {
                  entityValue: {
                    properties: {
                      name: {
                        stringValue: value4,
                        excludeFromIndexes: true,
                      },
                    },
                  },
                },
              ],
            },
          },
          primitiveExcluded: {
            arrayValue: {
              values: [
                {
                  stringValue: value5,
                  excludeFromIndexes: true,
                },
                {
                  entityValue: {
                    properties: {
                      name: {
                        stringValue: value6,
                      },
                    },
                  },
                  excludeFromIndexes: true,
                },
              ],
            },
          },
          array: {
            arrayValue: {
              values: [
                {
                  stringValue: value7,
                  excludeFromIndexes: true,
                },
                {
                  entityValue: {
                    properties: {
                      name: {
                        stringValue: value8,
                        excludeFromIndexes: true,
                      },
                    },
                  },
                  excludeFromIndexes: true,
                },
                {
                  entityValue: {
                    properties: {
                      entity: {
                        entityValue: {
                          properties: {
                            name: {
                              stringValue: value9,
                              excludeFromIndexes: true,
                            },
                            array: {
                              arrayValue: {
                                values: [
                                  {
                                    entityValue: {
                                      properties: {
                                        name: {
                                          stringValue: value10,
                                          excludeFromIndexes: true,
                                        },
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  excludeFromIndexes: true,
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
                                          stringValue: value11,
                                          excludeFromIndexes: true,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                  excludeFromIndexes: true,
                },
              ],
            },
          },
          rules: {
            arrayValue: {
              values: [
                {
                  entityValue: {
                    properties: {
                      requirements: {
                        arrayValue: {
                          values: [
                            {
                              entityValue: {
                                properties: {
                                  audiences: {
                                    stringValue: value12,
                                    excludeFromIndexes: true,
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
                {
                  entityValue: {
                    properties: {
                      requirements: {
                        nullValue: 0,
                      },
                    },
                  },
                },
              ],
            },
          },
          nestedArrayVariants: {
            arrayValue: {
              values: [
                {
                  entityValue: {
                    properties: {
                      a: {
                        arrayValue: {
                          values: [
                            {
                              entityValue: {
                                properties: {
                                  b: {
                                    stringValue: value13,
                                    excludeFromIndexes: true,
                                  },
                                },
                              },
                            },
                            {
                              entityValue: {
                                properties: {
                                  c: {
                                    stringValue: value14,
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
                {
                  entityValue: {
                    properties: {
                      a: {
                        nullValue: 0,
                      },
                    },
                  },
                },
                {
                  entityValue: {
                    properties: {
                      a: {
                        arrayValue: {
                          values: [
                            {
                              stringValue: value15,
                            },
                          ],
                        },
                      },
                    },
                  },
                },
                {
                  entityValue: {
                    properties: {
                      a: {
                        arrayValue: {
                          values: [
                            {
                              entityValue: {
                                properties: {
                                  b: {
                                    // excludeFromIndexes:
                                    // ['nestedArrayVariants[].a[].b'] does not
                                    // apply here,
                                    // To exclude this array (= all its
                                    // elements), we would use
                                    // ['nestedArrayVariants[].a[].b[]']
                                    arrayValue: {
                                      values: [
                                        {
                                          stringValue: 'nasty',
                                        },
                                        {
                                          stringValue: 'array',
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
          alpha: {
            // `excludeFromIndexes: ['alpha[]']` results in exclusion of all
            // array elements
            arrayValue: {
              values: [
                {
                  excludeFromIndexes: true,
                  stringValue: 'beta',
                },
                {
                  excludeFromIndexes: true,
                  stringValue: 'gamma',
                },
              ],
            },
          },
          omega: {
            // `excludeFromIndexes: ['omega']` is not applied, because 'omega'
            // is an array.
            arrayValue: {
              values: [
                {
                  stringValue: 'beta',
                },
                {
                  stringValue: 'gamma',
                },
              ],
            },
          },
        },
      };

      assert.deepStrictEqual(
          entity.entityToEntityProto(entityObject), expectedEntityProto);
    });
  });

  describe('formatArray', () => {
    it('should convert protos to key/data entity array', () => {
      const key = {};

      const entityProto = {
        key,
      };

      const results = [
        {
          entity: entityProto,
        },
      ];

      const expectedResults = entityProto;

      entity.keyFromKeyProto = (key_) => {
        assert.strictEqual(key_, key);
        return key;
      };

      entity.entityFromEntityProto = (entityProto_) => {
        assert.strictEqual(entityProto_, entityProto);
        return entityProto;
      };

      const ent = entity.formatArray(results)[0];

      assert.deepStrictEqual(ent, expectedResults);
      assert.strictEqual(ent[entity.KEY_SYMBOL], key);
    });
  });

  describe('isKeyComplete', () => {
    it('should convert key to key proto', (done) => {
      const key = new entity.Key({
        path: ['Kind', 123],
      });

      entity.keyToKeyProto = (key_) => {
        assert.strictEqual(key_, key);
        setImmediate(done);
        return key;
      };

      entity.isKeyComplete(key);
    });

    it('should return true if key has id', () => {
      const key = new entity.Key({
        path: ['Kind', 123],
      });

      assert.strictEqual(entity.isKeyComplete(key), true);
    });

    it('should return true if key has name', () => {
      const key = new entity.Key({
        path: ['Kind', 'name'],
      });

      assert.strictEqual(entity.isKeyComplete(key), true);
    });

    it('should return false if key does not have name or ID', () => {
      const key = new entity.Key({
        path: ['Kind'],
      });

      assert.strictEqual(entity.isKeyComplete(key), false);
    });
  });

  describe('keyFromKeyProto', () => {
    const NAMESPACE = 'Namespace';

    const keyProto = {
      partitionId: {
        namespaceId: NAMESPACE,
        projectId: 'project-id',
      },
      path: [
        {
          idType: 'id',
          kind: 'Kind',
          id: '111',
        },
        {
          idType: 'name',
          kind: 'Kind2',
          name: 'name',
        },
      ],
    };

    it('should set the namespace', (done) => {
      entity.Key = class {
        constructor(keyOptions) {
          assert.strictEqual(keyOptions.namespace, NAMESPACE);
          done();
        }
      };
      entity.keyFromKeyProto(keyProto);
    });

    it('should create a proper Key', (done) => {
      entity.Key = class {
        constructor(keyOptions) {
          assert.deepStrictEqual(keyOptions, {
            namespace: NAMESPACE,
            path: ['Kind', new entity.Int(111), 'Kind2', 'name'],
          });
          done();
        }
      };
      entity.keyFromKeyProto(keyProto);
    });

    it('should return the created Key', () => {
      const expectedValue = {};

      entity.Key = class {
        constructor() {
          return expectedValue;
        }
      };

      assert.strictEqual(entity.keyFromKeyProto(keyProto), expectedValue);
    });

    it('should throw if path is invalid', (done) => {
      const keyProtoInvalid = {
        partitionId: {
          namespaceId: 'Namespace',
          projectId: 'project-id',
        },
        path: [
          {
            kind: 'Kind',
          },
          {
            kind: 'Kind2',
          },
        ],
      };

      try {
        entity.keyFromKeyProto(keyProtoInvalid);
      } catch (e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'Ancestor keys require an id or name.');
        done();
      }
    });
  });

  describe('keyToKeyProto', () => {
    it('should handle hierarchical key definitions', () => {
      const key = new entity.Key({
        path: ['Kind1', 1, 'Kind2', 'name', 'Kind3', new entity.Int(3)],
      });

      const keyProto = entity.keyToKeyProto(key);

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

    it('should detect the namespace of the hierarchical keys', () => {
      const key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 1, 'Kind2', 'name'],
      });

      const keyProto = entity.keyToKeyProto(key);

      assert.strictEqual(keyProto.partitionId.namespaceId, 'Namespace');

      assert.strictEqual(keyProto.path[0].kind, 'Kind1');
      assert.strictEqual(keyProto.path[0].id, 1);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProto.path[1].kind, 'Kind2');
      assert.strictEqual(keyProto.path[1].id, undefined);
      assert.strictEqual(keyProto.path[1].name, 'name');
    });

    it('should handle incomplete keys with & without namespaces', () => {
      const incompleteKey = new entity.Key({
        path: ['Kind'],
      });

      const incompleteKeyWithNs = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind'],
      });

      const keyProto = entity.keyToKeyProto(incompleteKey);
      const keyProtoWithNs = entity.keyToKeyProto(incompleteKeyWithNs);

      assert.strictEqual(keyProto.partitionId, undefined);
      assert.strictEqual(keyProto.path[0].kind, 'Kind');
      assert.strictEqual(keyProto.path[0].id, undefined);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProtoWithNs.partitionId.namespaceId, 'Namespace');
      assert.strictEqual(keyProtoWithNs.path[0].kind, 'Kind');
      assert.strictEqual(keyProtoWithNs.path[0].id, undefined);
      assert.strictEqual(keyProtoWithNs.path[0].name, undefined);
    });

    it('should throw if key contains 0 items', (done) => {
      const key = new entity.Key({
        path: [],
      });

      try {
        entity.keyToKeyProto(key);
      } catch (e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'A key should contain at least a kind.');
        done();
      }
    });

    it('should throw if key path contains null ids', (done) => {
      const key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', null, 'Company'],
      });

      try {
        entity.keyToKeyProto(key);
      } catch (e) {
        assert.strictEqual(e.name, 'InvalidKey');
        assert.strictEqual(e.message, 'Ancestor keys require an id or name.');
        done();
      }
    });

    it('should not throw if key is incomplete', () => {
      const key = new entity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 123, 'Company', null],
      });

      assert.doesNotThrow(() => {
        entity.keyToKeyProto(key);
      });
    });
  });

  describe('queryToQueryProto', () => {
    const queryProto = {
      distinctOn: [
        {
          name: 'name',
        },
      ],
      kind: [
        {
          name: 'Kind1',
        },
      ],
      order: [
        {
          property: {
            name: 'name',
          },
          direction: 'ASCENDING',
        },
      ],
      projection: [
        {
          property: {
            name: 'name',
          },
        },
      ],
      endCursor: 'end',
      limit: {
        value: 1,
      },
      offset: 1,
      startCursor: 'start',
      filter: {
        compositeFilter: {
          filters: [
            {
              propertyFilter: {
                property: {
                  name: 'name',
                },
                op: 'EQUAL',
                value: {
                  stringValue: 'John',
                },
              },
            },
            {
              propertyFilter: {
                property: {
                  name: '__key__',
                },
                op: 'HAS_ANCESTOR',
                value: {
                  keyValue: {
                    path: [
                      {
                        kind: 'Kind2',
                        name: 'somename',
                      },
                    ],
                  },
                },
              },
            },
          ],
          op: 'AND',
        },
      },
    };

    it('should support all configurations of a query', () => {
      const ancestorKey = new entity.Key({
        path: ['Kind2', 'somename'],
      });

      const ds = new Datastore({projectId: 'project-id'});

      const query = ds.createQuery('Kind1')
                        .filter('name', 'John')
                        .start('start')
                        .end('end')
                        .groupBy(['name'])
                        .order('name')
                        .select('name')
                        .limit(1)
                        .offset(1)
                        .hasAncestor(ancestorKey);

      assert.deepStrictEqual(entity.queryToQueryProto(query), queryProto);
    });

    it('should handle buffer start and end values', () => {
      const ds = new Datastore({projectId: 'project-id'});
      const startVal = Buffer.from('start');
      const endVal = Buffer.from('end');

      const query = ds.createQuery('Kind1').start(startVal).end(endVal);

      const queryProto = entity.queryToQueryProto(query);
      assert.strictEqual(queryProto.endCursor, endVal);
      assert.strictEqual(queryProto.startCursor, startVal);
    });
  });
});
