// Copyright 2019 Google LLC
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

import {
  ObjectToStructConverter,
  ObjectToStructConverterConfig,
  zuluToDateObj,
} from '../../src/utils/common';
import * as assert from 'assert';
import {describe, it, beforeEach} from 'mocha';
const OPTIONS = {
  maxRetries: 3,
} as ObjectToStructConverterConfig;

describe('ObjectToStructConverter', () => {
  let objectToStructConverter: ObjectToStructConverter;

  beforeEach(() => {
    objectToStructConverter = new ObjectToStructConverter(OPTIONS);
  });

  describe('instantiation', () => {
    it('should not require an options object', () => {
      assert.doesNotThrow(() => {
        new ObjectToStructConverter();
      });
    });

    it('should localize an empty Set for seenObjects', () => {
      assert(objectToStructConverter.seenObjects instanceof Set);
      assert.strictEqual(objectToStructConverter.seenObjects.size, 0);
    });

    it('should localize options', () => {
      const objectToStructConverter = new ObjectToStructConverter({
        removeCircular: true,
        stringify: true,
      });

      assert.strictEqual(objectToStructConverter.removeCircular, true);
      assert.strictEqual(objectToStructConverter.stringify, true);
    });

    it('should set correct defaults', () => {
      assert.strictEqual(objectToStructConverter.removeCircular, false);
      assert.strictEqual(objectToStructConverter.stringify, false);
    });
  });

  describe('convert', () => {
    it('should encode values in an Object', () => {
      const inputValue = {};
      const convertedValue = {};

      objectToStructConverter.encodeValue_ = value => {
        assert.strictEqual(value, inputValue);
        return convertedValue;
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const struct: any = objectToStructConverter.convert({
        a: inputValue,
      });

      assert.strictEqual(struct.fields.a, convertedValue);
    });

    it('should support host objects', () => {
      const hostObject = {hasOwnProperty: null};

      objectToStructConverter.encodeValue_ = () => {};

      assert.doesNotThrow(() => {
        objectToStructConverter.convert(hostObject);
      });
    });

    it('should not include undefined values', done => {
      objectToStructConverter.encodeValue_ = () => {
        done(new Error('Should not be called'));
      };

      const struct = objectToStructConverter.convert({
        a: undefined,
      });

      assert.deepStrictEqual(struct.fields, {});

      done();
    });

    it('should add seen objects to set then empty set', done => {
      const obj = {};
      let objectAdded: {};

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (objectToStructConverter as any).seenObjects = {
        add(obj: {}) {
          objectAdded = obj;
        },
        delete(obj_: {}) {
          assert.strictEqual(obj_, obj);
          assert.strictEqual(objectAdded, obj);
          done();
        },
      };

      objectToStructConverter.convert(obj);
    });
  });

  describe('encodeValue_', () => {
    it('should convert primitive values correctly', () => {
      const buffer = Buffer.from('Value');

      assert.deepStrictEqual(objectToStructConverter.encodeValue_(null), {
        nullValue: 0,
      });

      assert.deepStrictEqual(objectToStructConverter.encodeValue_(1), {
        numberValue: 1,
      });

      assert.deepStrictEqual(objectToStructConverter.encodeValue_('Hi'), {
        stringValue: 'Hi',
      });

      assert.deepStrictEqual(objectToStructConverter.encodeValue_(true), {
        boolValue: true,
      });

      assert.strictEqual(
        objectToStructConverter.encodeValue_(buffer).blobValue.toString(),
        'Value'
      );
    });

    it('should convert arrays', () => {
      const convertedValue = objectToStructConverter.encodeValue_([1, 2, 3]);

      assert.deepStrictEqual(convertedValue.listValue, {
        values: [
          objectToStructConverter.encodeValue_(1),
          objectToStructConverter.encodeValue_(2),
          objectToStructConverter.encodeValue_(3),
        ],
      });
    });

    it('should throw if a type is not recognized', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (objectToStructConverter as any).encodeValue_();
      }, /Value of type undefined not recognized./);
    });

    describe('objects', () => {
      const VALUE: {circularReference?: {}} = {};
      VALUE.circularReference = VALUE;

      it('should convert objects', () => {
        const convertedValue = {};
        objectToStructConverter.convert = value => {
          assert.strictEqual(value, VALUE);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return convertedValue as any;
        };

        assert.deepStrictEqual(objectToStructConverter.encodeValue_(VALUE), {
          structValue: convertedValue,
        });
      });

      describe('circular references', () => {
        it('should throw if circular', () => {
          const errorMessage = [
            'This object contains a circular reference. To automatically',
            'remove it, set the `removeCircular` option to true.',
          ].join(' ');

          objectToStructConverter.seenObjects.add(VALUE);

          assert.throws(() => {
            objectToStructConverter.encodeValue_(VALUE);
          }, new RegExp(errorMessage));
        });

        describe('options.removeCircular', () => {
          let objectToStructConverter: ObjectToStructConverter;

          beforeEach(() => {
            objectToStructConverter = new ObjectToStructConverter({
              removeCircular: true,
            });

            objectToStructConverter.seenObjects.add(VALUE);
          });

          it('should replace circular reference with [Circular]', () => {
            assert.deepStrictEqual(
              objectToStructConverter.encodeValue_(VALUE),
              {stringValue: '[Circular]'}
            );
          });
        });
      });
    });

    describe('options.stringify', () => {
      let objectToStructConverter: ObjectToStructConverter;

      beforeEach(() => {
        objectToStructConverter = new ObjectToStructConverter({
          stringify: true,
        });
      });

      it('should return a string if the value is not recognized', () => {
        const date = new Date();
        assert.deepStrictEqual(objectToStructConverter.encodeValue_(date), {
          stringValue: String(date),
        });
      });
    });
  });
});

describe('zuluToDateObj', () => {
  it('should convert a string timestamp', () => {
    const tests = [
      {
        inputTime: '2020-01-01T00:00:00.11Z',
        expectedSeconds: 1577836800,
        expectedNanos: 110000000,
      },
      {
        inputTime: '2020-01-01T00:00:00Z',
        expectedSeconds: 1577836800,
        expectedNanos: 0,
      },
      {
        inputTime: '2020-01-01T00:00:00.999999999Z',
        expectedSeconds: 1577836800,
        expectedNanos: 999999999,
      },
      {
        inputTime: 'invalid timestamp string',
        expectedSeconds: 0,
        expectedNanos: 0,
      },
    ];

    for (const test of tests) {
      const dateString = test.inputTime;
      const dateObj = zuluToDateObj(dateString);
      assert.deepStrictEqual(dateObj, {
        seconds: test.expectedSeconds,
        nanos: test.expectedNanos,
      });
    }
  });
});
