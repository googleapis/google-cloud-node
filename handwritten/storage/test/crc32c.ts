// Copyright 2022 Google LLC
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
  CRC32C,
  CRC32CValidator,
  CRC32C_EXTENSIONS,
  CRC32C_EXTENSION_TABLE,
  CRC32C_EXCEPTION_MESSAGES,
} from '../src';
import * as assert from 'assert';

const KNOWN_INPUT_TO_CRC32C = {
  /** empty string (i.e. nothing to 'update') */
  '': 'AAAAAA==',
  /** known case #1 - validated from actual GCS object upload + metadata retrieval */
  data: 'rth90Q==',
  /** known case #2 - validated from actual GCS object upload + metadata retrieval */
  'some text\n': 'DkjKuA==',
  /** arbitrary large string */
  ['a'.repeat(2 ** 16)]: 'TpXtPw==',
} as const;

describe('CRC32C', () => {
  describe('instance', () => {
    describe('#constructor', () => {
      it('should initial value to `0`', () => {
        const crc32c = new CRC32C();

        assert.equal(crc32c.valueOf(), 0);
      });

      it('should accept an `initialValue`', () => {
        const initialValue = 123;

        const crc32c = new CRC32C(initialValue);

        assert.equal(crc32c.valueOf(), initialValue);
      });
    });

    describe('#update', () => {
      it('should produce the correct calculation given the input (single buffer)', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();

          const buffer = Buffer.from(input);

          crc32c.update(buffer);

          const result = crc32c.toString();

          assert.equal(
            result,
            expected,
            `Expected '${input}' to produce \`${expected}\` - not \`${result}\``
          );
        }
      });

      it('should produce the correct calculation given the input (multiple buffers)', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();

          for (const char of input) {
            const buffer = Buffer.from(char);

            crc32c.update(buffer);
          }

          const result = crc32c.toString();

          assert.equal(
            result,
            expected,
            `Expected '${input}' to produce \`${expected}\` - not \`${result}\``
          );
        }
      });

      it('should not mutate a provided buffer', () => {
        const crc32c = new CRC32C();

        const value = 'abc';
        const buffer = Buffer.from(value);

        crc32c.update(buffer);

        assert.equal(buffer.toString(), value);
      });
    });

    describe('#validate', () => {
      it('should validate a provided `number`', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          const expectedNumber = Buffer.from(expected, 'base64').readInt32BE();

          const wrongNumber = expectedNumber + 1;

          crc32c.update(Buffer.from(input));

          assert.equal(crc32c.validate(wrongNumber), false);
          assert.equal(crc32c.validate(expectedNumber), true);
        }
      });

      it('should validate a provided `string`', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          const expectedString = expected;

          // Want to test against a string generated in a valid way
          const crc32cForIncorrectString = new CRC32C();
          const wrongStringInput = Buffer.from(input + ' ');
          crc32cForIncorrectString.update(wrongStringInput);
          const wrongString = crc32cForIncorrectString.toString();

          crc32c.update(Buffer.from(input));

          assert.equal(crc32c.validate(wrongString), false);
          assert.equal(crc32c.validate(expectedString), true);
        }
      });

      it('should validate a provided `Buffer`', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          const expectedBuffer = Buffer.from(expected, 'base64');

          // Want to test against a `Buffer` generated in a valid way
          const crc32cForIncorrectString = new CRC32C();
          const wrongBufferInput = Buffer.from(input + ' ');
          crc32cForIncorrectString.update(wrongBufferInput);
          const wrongBuffer = crc32cForIncorrectString.toBuffer();

          crc32c.update(Buffer.from(input));

          assert.equal(crc32c.validate(wrongBuffer), false);
          assert.equal(crc32c.validate(expectedBuffer), true);
        }
      });

      it('should validate a provided `CRC32C`', () => {
        for (const [input] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          const crc32cExpected = new CRC32C();
          const wrongCRC32C = new CRC32C();

          const wrongBufferInput = Buffer.from(input + ' ');

          crc32c.update(Buffer.from(input));
          crc32cExpected.update(Buffer.from(input));
          wrongCRC32C.update(wrongBufferInput);

          assert.equal(crc32c.validate(wrongCRC32C), false);
          assert.equal(crc32c.validate(crc32cExpected), true);
        }
      });

      it('should validate a provided generic `CRC32CValidator`', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          const crc32cExpectedValidator: CRC32CValidator = {
            toString: () => expected,
            update: () => {},
            validate: () => false,
          };
          const wrongCRC32CValidator: CRC32CValidator = {
            toString: () => {
              const crc32c = new CRC32C();
              // Want to test against a `Buffer` generated in a valid way
              const wrongBufferInput = Buffer.from(input + ' ');

              crc32c.update(wrongBufferInput);

              return crc32c.toString();
            },
            update: () => {},
            validate: () => false,
          };

          crc32c.update(Buffer.from(input));

          assert.equal(crc32c.validate(wrongCRC32CValidator), false);
          assert.equal(crc32c.validate(crc32cExpectedValidator), true);
        }
      });
    });

    describe('#toBuffer', () => {
      it('should return a valid 4-byte buffer', () => {
        // At least one of our inputs should produce a negative 32-bit number - to prove we're not using unsigned integers
        // This ensures the internally we're accurately handling unsigned integers
        let atLeastOneWasSigned = false;

        for (const [input] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          crc32c.update(Buffer.from(input));

          const value = crc32c.valueOf();

          if (value < 0) {
            // this is a negative number, thus is definitely signed
            atLeastOneWasSigned = true;
          }

          const buffer = Buffer.alloc(4);
          buffer.writeInt32BE(value);

          assert.equal(crc32c.toBuffer().byteLength, 4);
          assert.equal(Buffer.compare(crc32c.toBuffer(), buffer), 0);
        }

        assert(atLeastOneWasSigned);
      });
    });

    describe('#toJSON', () => {
      it('should return the expected JSON', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          crc32c.update(Buffer.from(input));

          const stringified = JSON.stringify({crc32c});

          assert.equal(crc32c.toJSON(), expected);
          assert.deepStrictEqual(JSON.parse(stringified), {crc32c: expected});
        }
      });
    });

    describe('#toString', () => {
      it('should return the expected string', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          crc32c.update(Buffer.from(input));

          const stringified = `${crc32c}`;

          assert.equal(crc32c.toString(), expected);
          assert.equal(stringified, expected);
        }
      });
    });

    describe('#valueOf', () => {
      it('should return the expected string', () => {
        for (const [input, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
          const crc32c = new CRC32C();
          crc32c.update(Buffer.from(input));

          const expectedNumber = Buffer.from(expected, 'base64').readInt32BE();

          assert.equal(crc32c.valueOf(), expectedNumber);
          assert.equal(+crc32c, expectedNumber);

          // All `CRC32C` values should be safe integers
          assert(Number.isSafeInteger(+crc32c));
        }
      });
    });
  });

  describe('static', () => {
    describe('.CRC32C_EXTENSIONS', () => {
      it('should be the same as the exported object', () => {
        assert.equal(CRC32C.CRC32C_EXTENSIONS, CRC32C_EXTENSIONS);
      });
    });

    describe('.CRC32C_EXTENSION_TABLE', () => {
      it('should be the same as the exported object', () => {
        assert.equal(CRC32C.CRC32C_EXTENSION_TABLE, CRC32C_EXTENSION_TABLE);
      });
    });

    describe('.from', () => {
      describe('`ArrayBuffer`', () => {
        it('should generate from `ArrayBuffer`', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const value = Buffer.from(expected, 'base64').readInt32BE();

            const arrayBufferView = new Int32Array(1);
            const dataView = new DataView(arrayBufferView.buffer);
            dataView.setInt32(0, value, false);

            // Pass an `ArrayBuffer`
            const crc32c = CRC32C.from(arrayBufferView.buffer);

            assert.equal(crc32c.valueOf(), dataView.getInt32(0, false));

            // should not update source object
            crc32c.update(Buffer.from(' '));

            assert.notEqual(crc32c.valueOf(), dataView.getInt32(0, false));
          }
        });

        it('should raise a `RangeError` on invalid buffers', () => {
          for (let i = 0; i < 8; i++) {
            // `Int32Array` with length of 1 are valid
            if (i === 1) continue;

            const arrayBufferView = new Int32Array(i);

            const errorMessage =
              CRC32C_EXCEPTION_MESSAGES.INVALID_INIT_BUFFER_LENGTH(i * 4);
            const expectedError = RangeError(errorMessage);

            assert.throws(
              () => CRC32C.from(arrayBufferView.buffer),
              expectedError
            );
          }
        });
      });

      describe('`ArrayBufferView`', () => {
        it('should generate from `ArrayBufferView`', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const value = Buffer.from(expected, 'base64').readInt32BE();

            const arrayBufferView = new Int32Array(1);
            const dataView = new DataView(arrayBufferView.buffer);
            dataView.setInt32(0, value, false);

            // Pass an `ArrayBufferView`
            const crc32c = CRC32C.from(arrayBufferView);

            assert.equal(crc32c.valueOf(), dataView.getInt32(0, false));

            // should not update source object
            crc32c.update(Buffer.from(' '));

            assert.notEqual(crc32c.valueOf(), dataView.getInt32(0, false));
          }
        });

        it('should raise a `RangeError` on invalid buffers', () => {
          for (let i = 0; i < 8; i++) {
            // `Int32Array` with length of 1 are valid
            if (i === 1) continue;

            const arrayBufferView = new Int32Array(i);

            const errorMessage =
              CRC32C_EXCEPTION_MESSAGES.INVALID_INIT_BUFFER_LENGTH(i * 4);
            const expectedError = RangeError(errorMessage);

            assert.throws(() => CRC32C.from(arrayBufferView), expectedError);
          }
        });
      });

      describe('`Buffer`', () => {
        it('should generate from `Buffer`', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const buffer = Buffer.from(expected, 'base64');

            const crc32c = CRC32C.from(buffer);

            assert.equal(Buffer.compare(crc32c.toBuffer(), buffer), 0);

            // should not update source object
            crc32c.update(Buffer.from(' '));

            assert.notEqual(Buffer.compare(crc32c.toBuffer(), buffer), 0);
          }
        });

        it('should raise a `RangeError` on invalid buffers', () => {
          for (let i = 0; i < 8; i++) {
            // Buffers with length of 4 are valid
            if (i === 4) continue;

            const buffer = Buffer.alloc(i);

            const errorMessage =
              CRC32C_EXCEPTION_MESSAGES.INVALID_INIT_BUFFER_LENGTH(i);
            const expectedError = RangeError(errorMessage);

            assert.throws(() => CRC32C.from(buffer), expectedError);
          }
        });
      });

      describe('`CRC32C`', () => {
        it('should generate from `CRC32C`', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const baseCRC32C = CRC32C.from(expected);
            const crc32c = CRC32C.from(baseCRC32C);

            assert.equal(crc32c.valueOf(), baseCRC32C.valueOf());

            // should not update source object
            crc32c.update(Buffer.from(' '));

            assert.notEqual(crc32c.valueOf(), baseCRC32C.valueOf());
          }
        });
      });

      describe('`CRC32CValidator`', () => {
        it('should generate from `CRC32CValidator`', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const baseCRC32C: CRC32CValidator = {
              toString: () => expected,
              update: () => {},
              validate: () => false,
            };
            const crc32c = CRC32C.from(baseCRC32C);

            assert.equal(crc32c.toString(), baseCRC32C.toString());

            // should not update source object
            crc32c.update(Buffer.from(' '));

            assert.notEqual(crc32c.toString(), baseCRC32C.toString());
          }
        });
      });

      describe('`string`', () => {
        it('should generate from base64-encoded data', () => {
          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const crc32c = CRC32C.from(expected);

            assert.equal(crc32c.toString(), expected);
          }
        });

        it('should raise a `RangeError` on invalid strings', () => {
          for (let i = 0; i < 8; i++) {
            // Buffers with length of 4 are valid
            if (i === 4) continue;

            const string = Buffer.alloc(i).toString('base64');

            const errorMessage =
              CRC32C_EXCEPTION_MESSAGES.INVALID_INIT_BASE64_RANGE(i);
            const expectedError = RangeError(errorMessage);

            assert.throws(() => CRC32C.from(string), expectedError);
          }
        });
      });

      describe('`number`', () => {
        it('should generate from `number`', () => {
          // At least one of our inputs should produce a negative 32-bit number - to prove we're not using unsigned integers
          // This ensures the internally we're accurately handling unsigned integers
          let atLeastOneWasSigned = false;

          for (const [, expected] of Object.entries(KNOWN_INPUT_TO_CRC32C)) {
            const number = Buffer.from(expected, 'base64').readInt32BE();

            const crc32c = CRC32C.from(number);

            if (number < 0) {
              // this is a negative number, thus is definitely signed
              atLeastOneWasSigned = true;
            }

            assert.equal(crc32c.valueOf(), number);
          }

          assert(atLeastOneWasSigned);
        });

        it('should raise a `RangeError` on invalid integers', () => {
          const INVALID_SET = [
            NaN, // not a safe number
            0.5, // not an integer
            2 ** 32 + 1, // too high - out of valid range
            -(2 ** 32) - 1, // too low - out of valid range
          ];

          for (const number of INVALID_SET) {
            const errorMessage =
              CRC32C_EXCEPTION_MESSAGES.INVALID_INIT_INTEGER(number);
            const expectedError = RangeError(errorMessage);

            assert.throws(() => CRC32C.from(number), expectedError);
          }
        });
      });
    });
  });
});
