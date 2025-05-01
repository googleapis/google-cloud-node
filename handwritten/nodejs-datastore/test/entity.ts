// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {beforeEach, afterEach, describe, it} from 'mocha';
import * as extend from 'extend';
import * as sinon from 'sinon';
import {Datastore} from '../src';
import {Entity, entity} from '../src/entity';
import {IntegerTypeCastOptions} from '../src/query';
import {PropertyFilter, EntityFilter, and} from '../src/filter';
import {
  entityObject,
  expectedEntityProto,
} from './fixtures/entityObjectAndProto';

export function outOfBoundsError(opts: {
  propertyName?: string;
  integerValue: string | number;
}) {
  return new Error(
    'We attempted to return all of the numeric values, but ' +
      (opts.propertyName ? opts.propertyName + ' ' : '') +
      'value ' +
      opts.integerValue +
      " is out of bounds of 'Number.MAX_SAFE_INTEGER'.\n" +
      "To prevent this error, please consider passing 'options.wrapNumbers=true' or\n" +
      "'options.wrapNumbers' as\n" +
      '{\n' +
      '  integerTypeCastFunction: provide <your_custom_function>\n' +
      '  properties: optionally specify property name(s) to be custom casted\n' +
      '}\n',
  );
}

describe('entity', () => {
  let testEntity: Entity;

  beforeEach(() => {
    delete require.cache[require.resolve('../src/entity.js')];
    testEntity = require('../src/entity.js').entity;
  });

  describe('KEY_SYMBOL', () => {
    it('should export the symbol', () => {
      assert.strictEqual(testEntity.KEY_SYMBOL.toString(), 'Symbol(KEY)');
    });
  });

  describe('Double', () => {
    it('should store the value', () => {
      const value = 8.3;

      const double = new testEntity.Double(value);
      assert.strictEqual(double.value, value);
    });
  });

  describe('isDsDouble', () => {
    it('should correctly identify a Double', () => {
      const double = new testEntity.Double(0.42);
      assert.strictEqual(testEntity.isDsDouble(double), true);
    });

    it('should correctly identify a homomorphic non-Double', () => {
      const nonDouble = Object.assign({}, new testEntity.Double(42));
      assert.strictEqual(testEntity.isDsDouble(nonDouble), false);
    });

    it('should correctly identify a primitive', () => {
      const primitiveDouble = 0.42;
      assert.strictEqual(testEntity.isDsDouble(primitiveDouble), false);
    });
  });

  describe('isDsDoubleLike', () => {
    it('should correctly identify a Double', () => {
      const double = new testEntity.Double(0.42);
      assert.strictEqual(testEntity.isDsDoubleLike(double), true);
    });

    it('should correctly identify a POJO Double', () => {
      const double = new testEntity.Double(0.42);
      const pojoDouble = JSON.parse(JSON.stringify(double));
      assert.strictEqual(testEntity.isDsDoubleLike(pojoDouble), true);
    });
  });

  describe('Int', () => {
    it('should store the stringified value', () => {
      const value = 8;

      const int = new testEntity.Int(value);
      assert.strictEqual(int.value, value.toString());
    });

    it('should store the stringified value from valueProto object', () => {
      const valueProto = {
        valueType: 'integerValue',
        integerValue: 8,
      };
      const int = new testEntity.Int(valueProto);
      assert.strictEqual(int.value, valueProto.integerValue.toString());
    });

    describe('valueOf', () => {
      let valueProto: {};
      beforeEach(() => {
        valueProto = {
          valueType: 'integerValue',
          integerValue: 8,
        };
      });

      describe('integerTypeCastFunction is not provided', () => {
        it('should throw if integerTypeCastOptions is provided but integerTypeCastFunction is not', () => {
          assert.throws(
            () => new testEntity.Int(valueProto, {}).valueOf(),
            /integerTypeCastFunction is not a function or was not provided\./,
          );
        });

        it('should throw if integer value is outside of bounds passing objects', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;
          const smallIntegerValue = Number.MIN_SAFE_INTEGER - 1;

          const valueProto = {
            integerValue: largeIntegerValue,
            propertyName: 'phoneNumber',
          };

          const valueProto2 = {
            integerValue: smallIntegerValue,
            propertyName: 'phoneNumber',
          };

          assert.throws(() => {
            new testEntity.Int(valueProto).valueOf();
          }, outOfBoundsError(valueProto));

          assert.throws(() => {
            new testEntity.Int(valueProto2).valueOf();
          }, outOfBoundsError(valueProto2));
        });

        it('should throw if integer value is outside of bounds passing strings or Numbers', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;
          const smallIntegerValue = Number.MIN_SAFE_INTEGER - 1;

          // should throw when Number is passed
          assert.throws(
            () => {
              new testEntity.Int(largeIntegerValue).valueOf();
            },
            outOfBoundsError({integerValue: largeIntegerValue}),
          );

          // should throw when string is passed
          assert.throws(
            () => {
              new testEntity.Int(smallIntegerValue.toString()).valueOf();
            },
            outOfBoundsError({integerValue: smallIntegerValue}),
          );
        });

        it('should not auto throw on initialization', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;

          const valueProto = {
            valueType: 'integerValue',
            integerValue: largeIntegerValue,
          };

          assert.doesNotThrow(
            () => {
              new testEntity.Int(valueProto);
            },
            new RegExp(`Integer value ${largeIntegerValue} is out of bounds.`),
          );
        });
      });

      describe('integerTypeCastFunction is provided', () => {
        it('should throw if integerTypeCastFunction is not a function', () => {
          assert.throws(
            () =>
              new testEntity.Int(valueProto, {
                integerTypeCastFunction: {},
              }).valueOf(),
            /integerTypeCastFunction is not a function or was not provided\./,
          );
        });

        it('should custom-cast integerValue when integerTypeCastFunction is provided', () => {
          const stub = sinon.stub();

          new testEntity.Int(valueProto, {
            integerTypeCastFunction: stub,
          }).valueOf();
          assert.ok(stub.calledOnce);
        });

        it('should custom-cast integerValue if `properties` specified by user', () => {
          const stub = sinon.stub();
          Object.assign(valueProto, {
            propertyName: 'thisValue',
          });

          new testEntity.Int(valueProto, {
            integerTypeCastFunction: stub,
            properties: 'thisValue',
          }).valueOf();
          assert.ok(stub.calledOnce);
        });

        it('should not custom-cast integerValue if `properties` not specified by user', () => {
          const stub = sinon.stub();

          Object.assign(valueProto, {
            propertyName: 'thisValue',
          });

          new testEntity.Int(valueProto, {
            integerTypeCastFunction: stub,
            properties: 'thatValue',
          }).valueOf();
          assert.ok(stub.notCalled);
        });
      });
    });
  });

  describe('isDsInt', () => {
    it('should correctly identify an Int', () => {
      const int = new testEntity.Int(42);
      assert.strictEqual(testEntity.isDsInt(int), true);
    });

    it('should correctly identify homomorphic non-Int', () => {
      const nonInt = Object.assign({}, new testEntity.Int(42));
      assert.strictEqual(testEntity.isDsInt(nonInt), false);
    });

    it('should correctly identify a primitive', () => {
      const primitiveInt = 42;
      assert.strictEqual(testEntity.isDsInt(primitiveInt), false);
    });
  });

  describe('isDsIntLike', () => {
    it('should correctly identify an Int', () => {
      const int = new testEntity.Int(42);
      assert.strictEqual(testEntity.isDsIntLike(int), true);
    });

    it('should correctly identify a POJO Int', () => {
      const int = new testEntity.Int(42);
      const pojoInt = JSON.parse(JSON.stringify(int));
      assert.strictEqual(testEntity.isDsIntLike(pojoInt), true);
    });
  });

  describe('GeoPoint', () => {
    it('should store the value', () => {
      const value = {
        latitude: 24,
        longitude: 88,
      };

      const geoPoint = new testEntity.GeoPoint(value);
      assert.strictEqual(geoPoint.value, value);
    });
  });

  describe('isDsGeoPoint', () => {
    it('should correctly identify a GeoPoint', () => {
      const geoPoint = new testEntity.GeoPoint({latitude: 24, longitude: 88});
      assert.strictEqual(testEntity.isDsGeoPoint(geoPoint), true);
    });

    it('should correctly identify a homomorphic non-GeoPoint', () => {
      const geoPoint = new testEntity.GeoPoint({latitude: 24, longitude: 88});
      const nonGeoPoint = Object.assign({}, geoPoint);
      assert.strictEqual(testEntity.isDsGeoPoint(nonGeoPoint), false);
    });
  });

  describe('Key', () => {
    it('should assign the namespace', () => {
      const namespace = 'NS';
      const key = new testEntity.Key({namespace, path: []});
      assert.strictEqual(key.namespace, namespace);
    });

    it('should assign the kind', () => {
      const kind = 'kind';
      const key = new testEntity.Key({path: [kind]});
      assert.strictEqual(key.kind, kind);
    });

    it('should assign the ID', () => {
      const id = 11;
      const key = new testEntity.Key({path: ['Kind', id]});
      assert.strictEqual(key.id, id);
    });

    it('should assign the ID from an Int', () => {
      const id = new testEntity.Int(11);
      const key = new testEntity.Key({path: ['Kind', id]});
      assert.strictEqual(key.id, id.value);
    });

    it('should assign the name', () => {
      const name = 'name';
      const key = new testEntity.Key({path: ['Kind', name]});
      assert.strictEqual(key.name, name);
    });

    it('should assign a parent', () => {
      const key = new testEntity.Key({path: ['ParentKind', 1, 'Kind', 1]});
      assert(key.parent instanceof testEntity.Key);
    });

    it('should not modify input path', () => {
      const inputPath = ['ParentKind', 1, 'Kind', 1];
      new testEntity.Key({path: inputPath});
      assert.deepStrictEqual(inputPath, ['ParentKind', 1, 'Kind', 1]);
    });

    it('should always compute the correct path', () => {
      const key = new testEntity.Key({path: ['ParentKind', 1, 'Kind', 1]});
      assert.deepStrictEqual(key.path, ['ParentKind', 1, 'Kind', 1]);

      key.parent.kind = 'GrandParentKind';
      key.kind = 'ParentKind';

      assert.deepStrictEqual(key.path, ['GrandParentKind', 1, 'ParentKind', 1]);
    });

    it('should always compute the correct serialized path', () => {
      const key = new testEntity.Key({
        namespace: 'namespace',
        path: [
          'ParentKind',
          'name',
          'Kind',
          1,
          'SubKind',
          new testEntity.Int('1'),
        ],
      });
      assert.deepStrictEqual(key.serialized, {
        namespace: 'namespace',
        path: [
          'ParentKind',
          'name',
          'Kind',
          new testEntity.Int(1),
          'SubKind',
          new testEntity.Int('1'),
        ],
      });
    });

    it('should allow re-creating a Key from the serialized path', () => {
      const key = new testEntity.Key({
        path: [
          'ParentKind',
          'name',
          'Kind',
          1,
          'SubKind',
          new testEntity.Int('1'),
        ],
      });
      const key2 = new testEntity.Key(key.serialized);
      assert.deepStrictEqual(key.serialized, key2.serialized);
    });

    it('should allow re-creating a Key from the JSON serialized path', () => {
      const key = new testEntity.Key({
        path: [
          'ParentKind',
          'name',
          'Kind',
          1,
          'SubKind',
          new testEntity.Int('1'),
        ],
      });
      const toPOJO = (v: object) => JSON.parse(JSON.stringify(v));
      const key2 = new testEntity.Key(toPOJO(key.serialized));
      assert.deepStrictEqual(key.serialized, key2.serialized);
    });
  });

  describe('isDsKey', () => {
    it('should correctly identify a Key', () => {
      const key = new testEntity.Key({path: ['Kind', 1]});
      assert.strictEqual(testEntity.isDsKey(key), true);
    });

    it('should correctly identify a homomorphic non-Key', () => {
      const notKey = Object.assign({}, new testEntity.Key({path: ['Kind', 1]}));
      assert.strictEqual(testEntity.isDsKey(notKey), false);
    });
  });

  describe('decodeValueProto', () => {
    describe('arrays', () => {
      const intValue = 8;
      const expectedValue = [
        {
          valueType: 'integerValue',
          integerValue: intValue,
        },
      ];
      const valueProto = {
        valueType: 'arrayValue',
        arrayValue: {
          values: expectedValue,
        },
      };

      it('should decode arrays', () => {
        const expectedValue = [{}];

        const valueProto = {
          valueType: 'arrayValue',
          arrayValue: {
            values: expectedValue,
          },
        };

        let run = false;

        const decodeValueProto = testEntity.decodeValueProto;
        testEntity.decodeValueProto = (valueProto: {}) => {
          if (!run) {
            run = true;
            return decodeValueProto(valueProto);
          }

          assert.strictEqual(valueProto, expectedValue[0]);
          return valueProto;
        };

        assert.deepStrictEqual(
          testEntity.decodeValueProto(valueProto),
          expectedValue,
        );
      });

      it('should not wrap numbers by default', () => {
        const decodeValueProto = testEntity.decodeValueProto;
        testEntity.decodeValueProto = (
          valueProto: {},
          wrapNumbers?: boolean | {},
        ) => {
          assert.strictEqual(wrapNumbers, undefined);

          return decodeValueProto(valueProto, wrapNumbers);
        };

        assert.deepStrictEqual(testEntity.decodeValueProto(valueProto), [
          intValue,
        ]);
      });

      it('should wrap numbers with an option', () => {
        const wrapNumbersBoolean = true;
        const wrapNumbersObject = {};
        const decodeValueProto = testEntity.decodeValueProto;
        let run = false;
        testEntity.decodeValueProto = (
          valueProto: {},
          wrapNumbers?: boolean | {},
        ) => {
          if (!run) {
            run = true;
            return decodeValueProto(valueProto, wrapNumbers);
          }

          // verify that `wrapNumbers`param is passed (boolean or object)
          assert.ok(wrapNumbers);
          return valueProto;
        };

        assert.deepStrictEqual(
          testEntity.decodeValueProto(valueProto, wrapNumbersBoolean),
          expectedValue,
        );

        // reset the run flag.
        run = false;
        assert.deepStrictEqual(
          testEntity.decodeValueProto(valueProto, wrapNumbersObject),
          expectedValue,
        );
      });
    });

    describe('entities', () => {
      it('should decode entities', () => {
        const expectedValue = {};

        const valueProto = {
          valueType: 'entityValue',
          entityValue: expectedValue,
        };

        testEntity.entityFromEntityProto = (entityProto: {}) => {
          assert.strictEqual(entityProto, expectedValue);
          return expectedValue;
        };

        assert.strictEqual(
          testEntity.decodeValueProto(valueProto),
          expectedValue,
        );
      });

      it('should not wrap numbers by default', () => {
        const expectedValue = {};

        const valueProto = {
          valueType: 'entityValue',
          entityValue: expectedValue,
        };

        testEntity.entityFromEntityProto = (
          entityProto: {},
          wrapNumbers?: boolean | {},
        ) => {
          assert.strictEqual(wrapNumbers, undefined);
          assert.strictEqual(entityProto, expectedValue);
          return expectedValue;
        };

        assert.strictEqual(
          testEntity.decodeValueProto(valueProto),
          expectedValue,
        );
      });

      it('should wrap numbers with an option', () => {
        const expectedValue = {};
        const wrapNumbersBoolean = true;
        const wrapNumbersObject = {};

        const valueProto = {
          valueType: 'entityValue',
          entityValue: expectedValue,
        };

        testEntity.entityFromEntityProto = (
          entityProto: {},
          wrapNumbers?: boolean | {},
        ) => {
          // verify that `wrapNumbers`param is passed (boolean or object)
          assert.ok(wrapNumbers);
          assert.strictEqual(entityProto, expectedValue);
          return expectedValue;
        };

        assert.strictEqual(
          testEntity.decodeValueProto(valueProto, wrapNumbersBoolean),
          expectedValue,
        );

        assert.strictEqual(
          testEntity.decodeValueProto(valueProto, wrapNumbersObject),
          expectedValue,
        );
      });
    });

    describe('integerValues', () => {
      const valueProto = {
        valueType: 'integerValue',
        integerValue: 8,
      };

      describe('default `wrapNumbers: undefined`', () => {
        it('should not wrap ints by default', () => {
          assert.strictEqual(
            typeof testEntity.decodeValueProto(valueProto),
            'number',
          );
        });

        it('should throw if integer value is outside of bounds', () => {
          const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;
          const smallIntegerValue = Number.MIN_SAFE_INTEGER - 1;

          const valueProto = {
            valueType: 'integerValue',
            integerValue: largeIntegerValue,
            propertyName: 'phoneNumber',
          };

          const valueProto2 = {
            valueType: 'integerValue',
            integerValue: smallIntegerValue,
            propertyName: 'phoneNumber',
          };

          assert.throws(() => {
            testEntity.decodeValueProto(valueProto);
          }, outOfBoundsError(valueProto));

          assert.throws(() => {
            testEntity.decodeValueProto(valueProto2);
          }, outOfBoundsError(valueProto2));
        });
      });

      describe('should wrap ints with option', () => {
        it('should wrap ints with wrapNumbers as boolean', () => {
          const wrapNumbers = true;
          const stub = sinon.spy(testEntity, 'Int');

          testEntity.decodeValueProto(valueProto, wrapNumbers);
          assert.strictEqual(stub.called, true);
        });

        it('should wrap ints with wrapNumbers as object', () => {
          const wrapNumbers = {integerTypeCastFunction: () => {}};
          const stub = sinon.spy(testEntity, 'Int');

          testEntity.decodeValueProto(valueProto, wrapNumbers);
          assert.strictEqual(stub.called, true);
        });

        it('should call #valueOf if integerTypeCastFunction is provided', () => {
          Object.assign(valueProto, {integerValue: Number.MAX_SAFE_INTEGER});
          const takeFirstTen = sinon
            .stub()
            .callsFake((value: string) => value.toString().substr(0, 10));
          const wrapNumbers = {integerTypeCastFunction: takeFirstTen};

          assert.strictEqual(
            testEntity.decodeValueProto(valueProto, wrapNumbers),
            takeFirstTen(Number.MAX_SAFE_INTEGER),
          );
          assert.strictEqual(takeFirstTen.called, true);
        });

        it('should propagate error from typeCastfunction', () => {
          const errorMessage = 'some error from type casting function';
          const error = new Error(errorMessage);
          const stub = sinon.stub().throws(error);
          assert.throws(
            () =>
              testEntity
                .decodeValueProto(valueProto, {
                  integerTypeCastFunction: stub,
                })
                .valueOf(),
            (err: Error) => {
              return new RegExp(
                `integerTypeCastFunction threw an error:\n\n  - ${errorMessage}`,
              ).test(err.message);
            },
          );
        });
      });
    });

    it('should decode blobs', () => {
      const expectedValue = Buffer.from('Hi');

      const valueProto = {
        valueType: 'blobValue',
        blobValue: expectedValue.toString('base64'),
      };

      assert.deepStrictEqual(
        testEntity.decodeValueProto(valueProto),
        expectedValue,
      );
    });

    it('should decode null', () => {
      const expectedValue = null;

      const valueProto = {
        valueType: 'nullValue',
        nullValue: 0,
      };

      const decodedValue = testEntity.decodeValueProto(valueProto);
      assert.deepStrictEqual(decodedValue, expectedValue);
    });

    it('should decode doubles', () => {
      const expectedValue = 8.3;

      const valueProto = {
        valueType: 'doubleValue',
        doubleValue: expectedValue,
      };

      assert.strictEqual(
        testEntity.decodeValueProto(valueProto),
        expectedValue,
      );
    });

    it('should decode keys', () => {
      const expectedValue = {};

      const valueProto = {
        valueType: 'keyValue',
        keyValue: expectedValue,
      };

      testEntity.keyFromKeyProto = (keyProto: {}) => {
        assert.strictEqual(keyProto, expectedValue);
        return expectedValue;
      };

      assert.strictEqual(
        testEntity.decodeValueProto(valueProto),
        expectedValue,
      );
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
        testEntity.decodeValueProto(valueProto),
        expectedValue,
      );
    });

    it('should return the value if no conversions are necessary', () => {
      const expectedValue = false;

      const valueProto = {
        valueType: 'booleanValue',
        booleanValue: expectedValue,
      };

      assert.strictEqual(
        testEntity.decodeValueProto(valueProto),
        expectedValue,
      );
    });
  });

  describe('encodeValue', () => {
    it('should encode a boolean', () => {
      const value = true;

      const expectedValueProto = {
        booleanValue: value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode null', () => {
      const value = null;

      const expectedValueProto = {
        nullValue: 0,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode an int', () => {
      const value = 8;

      const expectedValueProto = {
        integerValue: value,
      };

      testEntity.Int = function (value_: {}) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should emit warning on out of bounce int', done => {
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      const largeIntValue = 9223372036854775807;
      const property = 'largeInt';
      const expectedWarning =
        'IntegerOutOfBoundsWarning: ' +
        "the value for '" +
        property +
        "' property is outside of bounds of a JavaScript Number.\n" +
        "Use 'Datastore.int(<integer_value_as_string>)' to preserve accuracy during the upload.";

      const onWarning = (warning: {message: unknown}) => {
        assert.strictEqual(warning.message, expectedWarning);
        process.removeListener('warning', onWarning);
        done();
      };
      process.on('warning', onWarning);
      testEntity.encodeValue(largeIntValue, property);
    });

    it('should encode an Int object', () => {
      const value = new testEntity.Int(3);

      const expectedValueProto = {
        integerValue: value.value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a double', () => {
      const value = 8.3;

      const expectedValueProto = {
        doubleValue: value,
      };

      testEntity.Double = function (value_: {}) {
        assert.strictEqual(value_, value);
        this.value = value_;
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Double object', () => {
      const value = new testEntity.Double(3);

      const expectedValueProto = {
        doubleValue: value.value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a GeoPoint object', () => {
      const value = new testEntity.GeoPoint();

      const expectedValueProto = {
        geoPointValue: value.value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
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

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a string', () => {
      const value = 'Hi';

      const expectedValueProto = {
        stringValue: value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a buffer', () => {
      const value = Buffer.from('Hi');

      const expectedValueProto = {
        blobValue: value,
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode an array', () => {
      const value = [{}];

      const expectedValueProto = {
        arrayValue: {
          values: value,
        },
      };

      let run = false;

      const encodeValue = testEntity.encodeValue;
      testEntity.encodeValue = (value_: {}) => {
        if (!run) {
          run = true;
          return encodeValue(value_);
        }

        assert.strictEqual(value_, value[0]);
        return value_;
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should encode a Key', () => {
      const value = new testEntity.Key({
        namespace: 'ns',
        path: ['Kind', 1],
      });

      const expectedValueProto = {
        keyValue: value,
      };

      testEntity.keyToKeyProto = (key: {}) => {
        assert.strictEqual(key, value);
        return value;
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
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

      const encodeValue = testEntity.encodeValue;
      testEntity.encodeValue = (value_: {}) => {
        if (!run) {
          run = true;
          return encodeValue(value_);
        }

        assert.strictEqual(value_, value.key);
        return value_;
      };

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
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

      const encodedValue = testEntity.encodeValue(value);

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

      assert.deepStrictEqual(testEntity.encodeValue(value), expectedValueProto);
    });

    it('should throw if an invalid value was provided', () => {
      assert.throws(() => {
        testEntity.encodeValue();
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
        testEntity.entityFromEntityProto(entityProto),
        expectedEntity,
      );
    });

    describe('should pass `wrapNumbers` to decodeValueProto', () => {
      const entityProto = {properties: {number: {}}};
      let decodeValueProtoStub: sinon.SinonStub;
      let wrapNumbers: boolean | IntegerTypeCastOptions | undefined;

      beforeEach(() => {
        decodeValueProtoStub = sinon.stub(testEntity, 'decodeValueProto');
      });

      afterEach(() => {
        decodeValueProtoStub.restore();
      });

      it('should identify entity propertyName', () => {
        testEntity.entityFromEntityProto(entityProto);
        const valueProto = decodeValueProtoStub.getCall(0).args[0];
        assert.strictEqual(valueProto.propertyName, 'number');
      });

      it('should pass `wrapNumbers` to decodeValueProto as undefined by default', () => {
        testEntity.entityFromEntityProto(entityProto);
        wrapNumbers = decodeValueProtoStub.getCall(0).args[1];
        assert.strictEqual(wrapNumbers, undefined);
      });

      it('should pass `wrapNumbers` to decodeValueProto as boolean', () => {
        testEntity.entityFromEntityProto(entityProto, true);
        wrapNumbers = decodeValueProtoStub.getCall(0).args[1];
        assert.strictEqual(typeof wrapNumbers, 'boolean');
      });

      it('should pass `wrapNumbers` to decodeValueProto as IntegerTypeCastOptions', () => {
        const integerTypeCastOptions = {
          integerTypeCastFunction: () => {},
          properties: 'that',
        };

        testEntity.entityFromEntityProto(entityProto, integerTypeCastOptions);
        wrapNumbers = decodeValueProtoStub.getCall(0).args[1];
        assert.strictEqual(wrapNumbers, integerTypeCastOptions);
        assert.deepStrictEqual(wrapNumbers, integerTypeCastOptions);
      });
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

      testEntity.encodeValue = (value_: {}) => {
        assert.strictEqual(value_, value);
        return value;
      };

      assert.deepStrictEqual(
        testEntity.entityToEntityProto(entityObject),
        expectedEntityProto,
      );
    });

    it('should respect excludeFromIndexes', () => {
      assert.deepStrictEqual(
        testEntity.entityToEntityProto(entityObject),
        expectedEntityProto,
      );
    });

    it('should not throw when `null` value is supplied for a field with an entity/array index exclusion', () => {
      const entityObject = {
        excludeFromIndexes: [
          'entityCompletelyExcluded.*',
          'entityPropertyExcluded.name',
          'entityArrayCompletelyExcluded[].*',
          'entityArrayPropertyExcluded[].name',
        ],

        data: {
          entityCompletelyExcluded: null,
          entityPropertyExcluded: null,
          entityArrayCompletelyExcluded: null,
          entityArrayPropertyExcluded: null,
        },
      };

      const expectedEntityProto = {
        key: null,
        properties: {
          entityCompletelyExcluded: {
            nullValue: 0,
            excludeFromIndexes: true,
          },
          entityPropertyExcluded: {
            nullValue: 0,
          },
          entityArrayCompletelyExcluded: {
            nullValue: 0,
          },
          entityArrayPropertyExcluded: {
            nullValue: 0,
          },
        },
      };

      assert.deepStrictEqual(
        testEntity.entityToEntityProto(entityObject),
        expectedEntityProto,
      );
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

      testEntity.keyFromKeyProto = (key_: {}) => {
        assert.strictEqual(key_, key);
        return key;
      };

      testEntity.entityFromEntityProto = (entityProto_: {}) => {
        assert.strictEqual(entityProto_, entityProto);
        return entityProto;
      };

      const ent = testEntity.formatArray(results)[0];

      assert.deepStrictEqual(ent, expectedResults);
    });

    describe('should pass `wrapNumbers` to entityFromEntityProto', () => {
      const results = [{entity: {}}];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let entityFromEntityProtoStub: any;
      let wrapNumbers: boolean | IntegerTypeCastOptions | undefined;

      beforeEach(() => {
        entityFromEntityProtoStub = sinon
          .stub(testEntity, 'entityFromEntityProto')
          .callsFake(() => ({}));
        sinon.stub(testEntity, 'keyFromKeyProto');
      });

      afterEach(() => {
        entityFromEntityProtoStub.restore();
      });

      it('should pass `wrapNumbers` to entityFromEntityProto as undefined by default', () => {
        testEntity.formatArray(results);
        wrapNumbers = entityFromEntityProtoStub.getCall(0).args[1];
        assert.strictEqual(wrapNumbers, undefined);
      });

      it('should pass `wrapNumbers` to entityFromEntityProto as boolean', () => {
        testEntity.formatArray(results, true);
        wrapNumbers = entityFromEntityProtoStub.getCall(0).args[1];
        assert.strictEqual(typeof wrapNumbers, 'boolean');
      });

      it('should pass `wrapNumbers` to entityFromEntityProto as IntegerTypeCastOptions', () => {
        const integerTypeCastOptions = {
          integerTypeCastFunction: () => {},
          properties: 'that',
        };

        testEntity.formatArray(results, integerTypeCastOptions);
        wrapNumbers = entityFromEntityProtoStub.getCall(0).args[1];
        assert.strictEqual(wrapNumbers, integerTypeCastOptions);
        assert.deepStrictEqual(wrapNumbers, integerTypeCastOptions);
      });
    });
  });

  describe('isKeyComplete', () => {
    it('should convert key to key proto', done => {
      const key = new testEntity.Key({
        path: ['Kind', 123],
      });

      testEntity.keyToKeyProto = (key_: {}) => {
        assert.strictEqual(key_, key);
        setImmediate(done);
        return key;
      };

      testEntity.isKeyComplete(key);
    });

    it('should return true if key has id', () => {
      const key = new testEntity.Key({
        path: ['Kind', 123],
      });

      assert.strictEqual(testEntity.isKeyComplete(key), true);
    });

    it('should return true if key has name', () => {
      const key = new testEntity.Key({
        path: ['Kind', 'name'],
      });

      assert.strictEqual(testEntity.isKeyComplete(key), true);
    });

    it('should return false if key does not have name or ID', () => {
      const key = new testEntity.Key({
        path: ['Kind'],
      });

      assert.strictEqual(testEntity.isKeyComplete(key), false);
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

    it('should set the namespace', done => {
      testEntity.Key = class {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(keyOptions: any) {
          assert.strictEqual(keyOptions.namespace, NAMESPACE);
          done();
        }
      };
      testEntity.keyFromKeyProto(keyProto);
    });

    it('should create a proper Key', done => {
      testEntity.Key = class {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(keyOptions: any) {
          assert.deepStrictEqual(keyOptions, {
            namespace: NAMESPACE,
            path: ['Kind', new testEntity.Int(111), 'Kind2', 'name'],
          });
          done();
        }
      };
      testEntity.keyFromKeyProto(keyProto);
    });

    it('should return the created Key', () => {
      const expectedValue = {};

      testEntity.Key = class {
        constructor() {
          return expectedValue;
        }
      };

      assert.strictEqual(testEntity.keyFromKeyProto(keyProto), expectedValue);
    });

    it('should throw if path is invalid', done => {
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
        testEntity.keyFromKeyProto(keyProtoInvalid);
      } catch (e) {
        assert.strictEqual((e as Error).name, 'InvalidKey');
        assert.strictEqual(
          (e as Error).message,
          'Ancestor keys require an id or name.',
        );
        done();
      }
    });
  });

  describe('keyToKeyProto', () => {
    it('should handle hierarchical key definitions', () => {
      const key = new testEntity.Key({
        path: ['Kind1', 1, 'Kind2', 'name', 'Kind3', new testEntity.Int(3)],
      });

      const keyProto = testEntity.keyToKeyProto(key);

      assert.strictEqual(keyProto.partitionId, undefined);

      assert.strictEqual(keyProto.path[0].kind, 'Kind1');
      assert.strictEqual(keyProto.path[0].id, 1);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProto.path[1].kind, 'Kind2');
      assert.strictEqual(keyProto.path[1].id, undefined);
      assert.strictEqual(keyProto.path[1].name, 'name');

      assert.strictEqual(keyProto.path[2].kind, 'Kind3');
      assert.strictEqual(keyProto.path[2].id, new testEntity.Int(3).value);
      assert.strictEqual(keyProto.path[2].name, undefined);
    });

    it('should detect the namespace of the hierarchical keys', () => {
      const key = new testEntity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 1, 'Kind2', 'name'],
      });

      const keyProto = testEntity.keyToKeyProto(key);

      assert.strictEqual(keyProto.partitionId.namespaceId, 'Namespace');

      assert.strictEqual(keyProto.path[0].kind, 'Kind1');
      assert.strictEqual(keyProto.path[0].id, 1);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProto.path[1].kind, 'Kind2');
      assert.strictEqual(keyProto.path[1].id, undefined);
      assert.strictEqual(keyProto.path[1].name, 'name');
    });

    it('should handle incomplete keys with & without namespaces', () => {
      const incompleteKey = new testEntity.Key({
        path: ['Kind'],
      });

      const incompleteKeyWithNs = new testEntity.Key({
        namespace: 'Namespace',
        path: ['Kind'],
      });

      const keyProto = testEntity.keyToKeyProto(incompleteKey);
      const keyProtoWithNs = testEntity.keyToKeyProto(incompleteKeyWithNs);

      assert.strictEqual(keyProto.partitionId, undefined);
      assert.strictEqual(keyProto.path[0].kind, 'Kind');
      assert.strictEqual(keyProto.path[0].id, undefined);
      assert.strictEqual(keyProto.path[0].name, undefined);

      assert.strictEqual(keyProtoWithNs.partitionId.namespaceId, 'Namespace');
      assert.strictEqual(keyProtoWithNs.path[0].kind, 'Kind');
      assert.strictEqual(keyProtoWithNs.path[0].id, undefined);
      assert.strictEqual(keyProtoWithNs.path[0].name, undefined);
    });

    it('should throw if key contains 0 items', done => {
      const key = new testEntity.Key({
        path: [],
      });

      try {
        testEntity.keyToKeyProto(key);
      } catch (e) {
        assert.strictEqual((e as Error).name, 'InvalidKey');
        assert.strictEqual(
          (e as Error).message,
          'A key should contain at least a kind.',
        );
        done();
      }
    });

    it('should throw if key path contains null ids', done => {
      const key = new testEntity.Key({
        namespace: 'Namespace',
        path: ['Kind1', null, 'Company'],
      });

      try {
        testEntity.keyToKeyProto(key);
      } catch (e) {
        assert.strictEqual((e as Error).name, 'InvalidKey');
        assert.strictEqual(
          (e as Error).message,
          'Ancestor keys require an id or name.',
        );
        done();
      }
    });

    it('should not throw if key is incomplete', () => {
      const key = new testEntity.Key({
        namespace: 'Namespace',
        path: ['Kind1', 123, 'Company', null],
      });

      assert.doesNotThrow(() => {
        testEntity.keyToKeyProto(key);
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

      const query = ds
        .createQuery('Kind1')
        .filter(new PropertyFilter('name', '=', 'John'))
        .start('start')
        .end('end')
        .groupBy(['name'])
        .order('name')
        .select('name')
        .limit(1)
        .offset(1)
        .hasAncestor(ancestorKey);

      assert.deepStrictEqual(testEntity.queryToQueryProto(query), queryProto);
    });

    it('should support using __key__ with array as value', () => {
      const keyWithInQuery = {
        distinctOn: [],
        filter: {
          compositeFilter: {
            filters: [
              {
                propertyFilter: {
                  op: 'IN',
                  property: {
                    name: '__key__',
                  },
                  value: {
                    arrayValue: {
                      values: [
                        {
                          keyValue: {
                            path: [
                              {
                                kind: 'Kind1',
                                name: 'key1',
                              },
                            ],
                          },
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
        kind: [
          {
            name: 'Kind1',
          },
        ],
        order: [],
        projection: [],
      };

      const ds = new Datastore({projectId: 'project-id'});

      const query = ds
        .createQuery('Kind1')
        .filter(
          new PropertyFilter('__key__', 'IN', [
            new entity.Key({path: ['Kind1', 'key1']}),
          ]),
        );

      assert.deepStrictEqual(
        testEntity.queryToQueryProto(query),
        keyWithInQuery,
      );
    });

    it('should support the filter method with Filter objects', () => {
      const ancestorKey = new entity.Key({
        path: ['Kind2', 'somename'],
      });

      const ds = new Datastore({projectId: 'project-id'});

      const query = ds
        .createQuery('Kind1')
        .filter(new PropertyFilter('name', '=', 'John'))
        .start('start')
        .end('end')
        .groupBy(['name'])
        .order('name')
        .select('name')
        .limit(1)
        .offset(1)
        .hasAncestor(ancestorKey);
      assert.deepStrictEqual(testEntity.queryToQueryProto(query), queryProto);
    });

    it('should support the filter method with AND', () => {
      const ancestorKey = new entity.Key({
        path: ['Kind2', 'somename'],
      });

      const ds = new Datastore({projectId: 'project-id'});

      const query = ds
        .createQuery('Kind1')
        .filter(
          and([
            new PropertyFilter('name', '=', 'John'),
            new PropertyFilter('__key__', 'HAS_ANCESTOR', ancestorKey),
          ]),
        )
        .start('start')
        .end('end')
        .groupBy(['name'])
        .order('name')
        .select('name')
        .limit(1)
        .offset(1);
      const testFilters = queryProto.filter;
      const computedFilters =
        testEntity.queryToQueryProto(query).filter.compositeFilter.filters[0];
      assert.deepStrictEqual(computedFilters, testFilters);
    });

    it('should handle buffer start and end values', () => {
      const ds = new Datastore({projectId: 'project-id'});
      const startVal = Buffer.from('start');
      const endVal = Buffer.from('end');

      const query = ds.createQuery('Kind1').start(startVal).end(endVal);

      const queryProto = testEntity.queryToQueryProto(query);
      assert.strictEqual(queryProto.endCursor, endVal);
      assert.strictEqual(queryProto.startCursor, startVal);
    });
  });

  describe('UrlSafeKey', () => {
    const PROJECT_ID = 'grass-clump-479';
    const LOCATION_PREFIX = 's~';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let urlSafeKey: any;

    beforeEach(() => {
      urlSafeKey = new testEntity.URLSafeKey();
    });

    describe('convertToBase64_', () => {
      it('should convert buffer to base64 and cleanup', () => {
        const buffer = Buffer.from('Hello World');

        assert.strictEqual(
          urlSafeKey.convertToBase64_(buffer),
          'SGVsbG8gV29ybGQ',
        );
      });
    });

    describe('convertToBuffer_', () => {
      it('should convert encoded url safe key to buffer', () => {
        assert.deepStrictEqual(
          urlSafeKey.convertToBuffer_('aGVsbG8gd29ybGQgZnJvbSBkYXRhc3RvcmU'),
          Buffer.from('hello world from datastore'),
        );
      });
    });

    describe('legacyEncode', () => {
      it('should encode with namespace', () => {
        const kind = 'Task';
        const name = 'sampletask1';
        const key = new testEntity.Key({
          namespace: 'NS',
          path: [kind, name],
        });

        const encodedKey =
          'ahFzfmdyYXNzLWNsdW1wLTQ3OXIVCxIEVGFzayILc2FtcGxldGFzazEMogECTlM';
        assert.strictEqual(
          urlSafeKey.legacyEncode(PROJECT_ID, key, LOCATION_PREFIX),
          encodedKey,
        );
      });

      it('should encode key with single path element string string type', () => {
        const kind = 'Task';
        const name = 'sampletask1';
        const key = new testEntity.Key({
          path: [kind, name],
        });

        const encodedKey =
          'ag9ncmFzcy1jbHVtcC00NzlyFQsSBFRhc2siC3NhbXBsZXRhc2sxDA';
        assert.strictEqual(
          urlSafeKey.legacyEncode(PROJECT_ID, key),
          encodedKey,
        );
      });

      it('should encode key with single path element long int type', () => {
        const kind = 'Task';
        const id = 5754248394440704;
        const key = new testEntity.Key({
          path: [kind, id],
        });

        const encodedKey = 'ag9ncmFzcy1jbHVtcC00NzlyEQsSBFRhc2sYgICA3NWunAoM';
        assert.strictEqual(
          urlSafeKey.legacyEncode(PROJECT_ID, key),
          encodedKey,
        );
      });

      it('should encode key with single path element entity int type', () => {
        const kind = 'Task';
        const id = new testEntity.Int('5754248394440704');
        const key = new testEntity.Key({
          path: [kind, id],
        });

        const encodedKey = 'ag9ncmFzcy1jbHVtcC00NzlyEQsSBFRhc2sYgICA3NWunAoM';
        assert.strictEqual(
          urlSafeKey.legacyEncode(PROJECT_ID, key),
          encodedKey,
        );
      });

      it('should encode key with parent', () => {
        const key = new testEntity.Key({
          path: ['Task', 'sampletask1', 'Task', 'sampletask2'],
        });

        const encodedKey =
          'ahFzfmdyYXNzLWNsdW1wLTQ3OXIqCxIEVGFzayILc2FtcGxldGFzazEMCxIEVGFzayILc2FtcGxldGFzazIM';
        assert.strictEqual(
          urlSafeKey.legacyEncode(PROJECT_ID, key, LOCATION_PREFIX),
          encodedKey,
        );
      });
    });

    describe('legacyDecode', () => {
      it('should decode key with namespace', () => {
        const encodedKey =
          'ahFzfmdyYXNzLWNsdW1wLTQ3OXIVCxIEVGFzayILc2FtcGxldGFzazEMogECTlM';
        const key = urlSafeKey.legacyDecode(encodedKey);
        assert.strictEqual(key.namespace, 'NS');
        assert.deepStrictEqual(key.path, ['Task', 'sampletask1']);
      });

      it('should decode key with single path element string type', () => {
        const encodedKey =
          'ag9ncmFzcy1jbHVtcC00NzlyFQsSBFRhc2siC3NhbXBsZXRhc2sxDA';
        const key = urlSafeKey.legacyDecode(encodedKey);
        assert.strictEqual(key.namespace, undefined);
        assert.deepStrictEqual(key.path, ['Task', 'sampletask1']);
      });

      it('should decode key with single path element long int type', () => {
        const encodedKey =
          'ahFzfmdyYXNzLWNsdW1wLTQ3OXIRCxIEVGFzaxiAgIDc1a6cCgw';
        const key = urlSafeKey.legacyDecode(encodedKey);
        assert.strictEqual(key.namespace, undefined);
        assert.deepStrictEqual(key.path, ['Task', '5754248394440704']);
      });

      it('should decode key with parent path', () => {
        const encodedKey =
          'ahFzfmdyYXNzLWNsdW1wLTQ3OXIqCxIEVGFzayILc2FtcGxldGFzazEMCxIEVGFzayILc2FtcGxldGFzazIM';
        const key = urlSafeKey.legacyDecode(encodedKey);
        assert.strictEqual(key.namespace, undefined);
        assert.deepStrictEqual(key.path, [
          'Task',
          'sampletask1',
          'Task',
          'sampletask2',
        ]);
        assert.strictEqual(key.parent!.name, 'sampletask1');
        assert.deepStrictEqual(key.parent!.path, ['Task', 'sampletask1']);
      });
    });
  });
});
