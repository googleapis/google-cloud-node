/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Big} from 'big.js';
import {PreciseDate} from '@google-cloud/precise-date';
import {GrpcService} from '../src/common-grpc/service';
import {google} from '../protos/protos';
import {GoogleError} from 'google-gax';
import {util} from 'protobufjs';
import * as uuid from 'uuid';
import Long = util.Long;
import {isString} from '../src/helper';
const singer = require('./data/singer');
const music = singer.examples.spanner.music;

describe('codec', () => {
  let codec;

  const sandbox = sinon.createSandbox();

  before(() => {
    codec = proxyquire('../src/codec.js', {
      './common-grpc/service': {GrpcService},
    }).codec;
  });

  beforeEach(() => {
    sandbox.stub(GrpcService, 'encodeValue_').callsFake(value => value);
    sandbox.stub(GrpcService, 'decodeValue_').callsFake(value => value);
  });

  afterEach(() => sandbox.restore());

  describe('SpannerDate', () => {
    describe('instantiation', () => {
      it('should accept date strings', () => {
        const date = new codec.SpannerDate('3-22-1986');
        const json = date.toJSON();

        assert.strictEqual(json, '1986-03-22');
      });

      it('should accept dates before 1000AD', () => {
        const date = new codec.SpannerDate('2-25-985');
        const json = date.toJSON();

        assert.strictEqual(json, '0985-02-25');
      });

      it('should default to the current local date', () => {
        const date = new codec.SpannerDate();
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const expected = new codec.SpannerDate(year, month, day);

        assert.deepStrictEqual(date, expected);
      });

      it('should interpret ISO date strings as local time', () => {
        const date = new codec.SpannerDate('1986-03-22');
        const json = date.toJSON();

        assert.strictEqual(json, '1986-03-22');
      });

      it('should accept y/m/d number values', () => {
        const date = new codec.SpannerDate(1986, 2, 22);
        const json = date.toJSON();

        assert.strictEqual(json, '1986-03-22');
      });

      it('should accept year zero in y/m/d number values', () => {
        const d = new codec.SpannerDate(null!);
        const date = new codec.SpannerDate(0, 2, 22);
        const json = date.toJSON();

        assert.ok(d);
        assert.strictEqual(json, '1900-03-22');
      });

      it('should truncate additional date fields', () => {
        const truncated = new codec.SpannerDate(1986, 2, 22, 4, 8, 10);
        const expected = new codec.SpannerDate(1986, 2, 22);

        assert.deepStrictEqual(truncated, expected);
      });
    });

    describe('toJSON', () => {
      let date: Date;

      beforeEach(() => {
        date = new codec.SpannerDate();
        sandbox.stub(date, 'getFullYear').returns(1999);
        sandbox.stub(date, 'getMonth').returns(11);
        sandbox.stub(date, 'getDate').returns(31);
      });

      it('should return the spanner date string', () => {
        const json = date.toJSON();
        assert.strictEqual(json, '1999-12-31');
      });

      it('should pad single digit months', () => {
        (date.getMonth as sinon.SinonStub).returns(8);
        const json = date.toJSON();
        assert.strictEqual(json, '1999-09-31');
      });

      it('should pad single digit dates', () => {
        (date.getDate as sinon.SinonStub).returns(3);
        const json = date.toJSON();
        assert.strictEqual(json, '1999-12-03');
      });

      it('should pad single digit years', () => {
        (date.getFullYear as sinon.SinonStub).returns(5);
        const json = date.toJSON();
        assert.strictEqual(json, '0005-12-31');
      });

      it('should pad double digit years', () => {
        (date.getFullYear as sinon.SinonStub).returns(52);
        const json = date.toJSON();
        assert.strictEqual(json, '0052-12-31');
      });

      it('should pad triple digit years', () => {
        (date.getFullYear as sinon.SinonStub).returns(954);
        const json = date.toJSON();
        assert.strictEqual(json, '0954-12-31');
      });
    });
  });

  describe('Float', () => {
    it('should store the value', () => {
      const value = 8;
      const float = new codec.Float(value);

      assert.strictEqual(float.value, value);
    });

    it('should return as a float', () => {
      const value = '8.2';
      const float = new codec.Float(value);

      assert.strictEqual(float.valueOf(), Number(value));
      assert.strictEqual(float + 2, Number(value) + 2);
    });
  });

  describe('Float32', () => {
    it('should store the value', () => {
      const value = 8;
      const float32 = new codec.Float32(value);

      assert.strictEqual(float32.value, value);
    });

    it('should return as a float32', () => {
      const value = '8.2';
      const float32 = new codec.Float32(value);

      assert.strictEqual(float32.valueOf(), Number(value));
      assert.strictEqual(float32 + 2, Number(value) + 2);
    });
  });

  describe('Int', () => {
    it('should stringify the value', () => {
      const value = 8;
      const int = new codec.Int(value);

      assert.strictEqual(int.value, '8');
    });

    it('should return as a number', () => {
      const value = 8;
      const int = new codec.Int(value);

      assert.strictEqual(int.valueOf(), 8);
      assert.strictEqual(int + 2, 10);
    });

    it('should throw if number is out of bounds', () => {
      const value = '9223372036854775807';
      const int = new codec.Int(value);

      assert.throws(
        () => {
          int.valueOf();
        },
        new RegExp('Integer ' + value + ' is out of bounds.'),
      );
    });
  });

  describe('PGOid', () => {
    it('should stringify the value', () => {
      const value = 8;
      const oid = new codec.PGOid(value);

      assert.strictEqual(oid.value, '8');
    });

    it('should return as a number', () => {
      const value = 8;
      const oid = new codec.PGOid(value);

      assert.strictEqual(oid.valueOf(), 8);
      assert.strictEqual(oid + 2, 10);
    });

    it('should throw if number is out of bounds', () => {
      const value = '9223372036854775807';
      const oid = new codec.PGOid(value);

      assert.throws(
        () => {
          oid.valueOf();
        },
        new RegExp('PG.OID ' + value + ' is out of bounds.'),
      );
    });
  });

  describe('Numeric', () => {
    it('should store value as a string', () => {
      const value = '8.01911';
      const numeric = new codec.Numeric(value);

      assert.strictEqual(numeric.value, '8.01911');
    });

    it('should return as a Big', () => {
      const value = '8.01911';
      const numeric = new codec.Numeric(value);

      const expected = new Big(value);
      assert.ok(numeric.valueOf().eq(expected));
    });

    it('toJSON', () => {
      const value = '8.01911';
      const numeric = new codec.Numeric(value);

      assert.strictEqual(numeric.toJSON(), value);
    });
  });

  describe('PGNumeric', () => {
    it('should store value as a string', () => {
      const value = '8.01911';
      const pgNumeric = new codec.PGNumeric(value);

      assert.strictEqual(pgNumeric.value, '8.01911');
    });

    it('should store NaN value as a string', () => {
      const value = 'NaN';
      const pgNumeric = new codec.PGNumeric(value);

      assert.strictEqual(pgNumeric.value, 'NaN');
    });

    it('should return as a Big', () => {
      const value = '8.01911';
      const pgNumeric = new codec.PGNumeric(value);

      const expected = new Big(value);
      assert.ok(pgNumeric.valueOf().eq(expected));
    });

    it('should throw an error when trying to return NaN as a Big', () => {
      const value = 'NaN';
      const pgNumeric = new codec.PGNumeric(value);

      assert.throws(() => {
        pgNumeric.valueOf();
      }, new RegExp('NaN cannot be converted to a numeric value'));
    });

    it('toJSON', () => {
      const value = '8.01911';
      const pgNumeric = new codec.PGNumeric(value);

      assert.strictEqual(pgNumeric.toJSON(), value);
    });
  });

  describe('Interval', () => {
    describe('constructor', () => {
      it('should create an Interval instance with correct properties', () => {
        const interval = new codec.Interval(1, 2, BigInt(1000));
        assert.equal(interval.getMonths(), 1);
        assert.equal(interval.getDays(), 2);
        assert.equal(interval.getNanoseconds(), BigInt(1000));
      });

      it('should throw an error if months is not an integer', () => {
        assert.throws(
          () => new codec.Interval(1.5, 2, BigInt(1000)),
          new RegExp('Invalid months: 1.5, months should be an integral value'),
        );
      });

      it('should throw an error if days is not an integer', () => {
        assert.throws(
          () => new codec.Interval(1, 2.5, BigInt(1000)),
          new RegExp('Invalid days: 2.5, days should be an integral value'),
        );
      });

      it('should throw an error if days is not an integer', () => {
        assert.throws(
          () => new codec.Interval(1, 2, null),
          new RegExp(
            'Invalid nanoseconds: null, nanoseconds should be a valid bigint value',
          ),
        );
      });
    });

    describe('fromMonths', () => {
      it('should create an Interval from months', () => {
        const interval = codec.Interval.fromMonths(5);
        assert.equal(interval.getMonths(), 5);
        assert.equal(interval.getDays(), 0);
        assert.equal(interval.getNanoseconds(), BigInt(0));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(() => codec.Interval.fromMonths(undefined), GoogleError);
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromMonths(null), GoogleError);
      });
    });

    describe('fromDays', () => {
      it('should create an Interval from days', () => {
        const interval = codec.Interval.fromDays(10);
        assert.equal(interval.getMonths(), 0);
        assert.equal(interval.getDays(), 10);
        assert.equal(interval.getNanoseconds(), BigInt(0));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(() => codec.Interval.fromDays(undefined), GoogleError);
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromDays(null), GoogleError);
      });
    });

    describe('fromSeconds', () => {
      it('should create an Interval from seconds', () => {
        const interval = codec.Interval.fromSeconds(60);
        assert.equal(interval.getMonths(), 0);
        assert.equal(interval.getDays(), 0);
        assert.equal(interval.getNanoseconds(), BigInt(60 * 1000000000));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(() => codec.Interval.fromSeconds(undefined), GoogleError);
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromSeconds(null), GoogleError);
      });
    });

    describe('fromMilliseconds', () => {
      it('should create an Interval from milliseconds', () => {
        const interval = codec.Interval.fromMilliseconds(1000);
        assert.equal(interval.getMonths(), 0);
        assert.equal(interval.getDays(), 0);
        assert.equal(interval.getNanoseconds(), BigInt(1000 * 1000000));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(
          () => codec.Interval.fromMilliseconds(undefined),
          GoogleError,
        );
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromMilliseconds(null), GoogleError);
      });
    });

    describe('fromMicroseconds', () => {
      it('should create an Interval from microseconds', () => {
        const interval = codec.Interval.fromMicroseconds(1000000);
        assert.equal(interval.getMonths(), 0);
        assert.equal(interval.getDays(), 0);
        assert.equal(interval.getNanoseconds(), BigInt(1000000 * 1000));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(
          () => codec.Interval.fromMicroseconds(undefined),
          GoogleError,
        );
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromMicroseconds(null), GoogleError);
      });
    });

    describe('fromNanoseconds', () => {
      it('should create an Interval from nanoseconds', () => {
        const interval = codec.Interval.fromNanoseconds(BigInt(1000000000));
        assert.equal(interval.getMonths(), 0);
        assert.equal(interval.getDays(), 0);
        assert.equal(interval.getNanoseconds(), BigInt(1000000000));
      });

      it('should throw an error if input is undefined', () => {
        assert.throws(
          () => codec.Interval.fromNanoseconds(undefined),
          GoogleError,
        );
      });

      it('should throw an error if input is null', () => {
        assert.throws(() => codec.Interval.fromNanoseconds(null), GoogleError);
      });
    });

    describe('fromISO8601', () => {
      it('should parse valid ISO8601 strings correctly', () => {
        const testCases = [
          {
            input: 'P1Y2M3DT12H12M6.789000123S',
            expected: new codec.Interval(14, 3, BigInt('43926789000123')),
          },
          {
            input: 'P1Y2M3DT13H-48M6S',
            expected: new codec.Interval(14, 3, BigInt('43926000000000')),
          },
          {
            input: 'P1Y2M3D',
            expected: new codec.Interval(14, 3, BigInt('0')),
          },
          {
            input: 'P1Y2M',
            expected: new codec.Interval(14, 0, BigInt('0')),
          },
          {
            input: 'P1Y',
            expected: new codec.Interval(12, 0, BigInt('0')),
          },
          {
            input: 'P2M',
            expected: new codec.Interval(2, 0, BigInt('0')),
          },
          {
            input: 'P3D',
            expected: new codec.Interval(0, 3, BigInt('0')),
          },
          {
            input: 'PT4H25M6.7890001S',
            expected: new codec.Interval(0, 0, BigInt('15906789000100')),
          },
          {
            input: 'PT4H25M6S',
            expected: new codec.Interval(0, 0, BigInt('15906000000000')),
          },
          {
            input: 'PT4H30S',
            expected: new codec.Interval(0, 0, BigInt('14430000000000')),
          },
          {
            input: 'PT4H1M',
            expected: new codec.Interval(0, 0, BigInt('14460000000000')),
          },
          {
            input: 'PT5M',
            expected: new codec.Interval(0, 0, BigInt('300000000000')),
          },
          {
            input: 'PT6.789S',
            expected: new codec.Interval(0, 0, BigInt('6789000000')),
          },
          {
            input: 'PT0.123S',
            expected: new codec.Interval(0, 0, BigInt('123000000')),
          },
          {
            input: 'PT.000000123S',
            expected: new codec.Interval(0, 0, BigInt('123')),
          },
          {
            input: 'P0Y',
            expected: new codec.Interval(0, 0, BigInt('0')),
          },
          {
            input: 'P-1Y-2M-3DT-12H-12M-6.789000123S',
            expected: new codec.Interval(-14, -3, BigInt('-43926789000123')),
          },
          {
            input: 'P1Y-2M3DT13H-51M6.789S',
            expected: new codec.Interval(10, 3, BigInt('43746789000000')),
          },
          {
            input: 'P-1Y2M-3DT-13H49M-6.789S',
            expected: new codec.Interval(-10, -3, BigInt('-43866789000000')),
          },
          {
            input: 'P1Y2M3DT-4H25M-6.7890001S',
            expected: new codec.Interval(14, 3, BigInt('-12906789000100')),
          },
          {
            input: 'PT100H100M100.5S',
            expected: new codec.Interval(0, 0, BigInt('366100500000000')),
          },
          {
            input: 'P0Y',
            expected: new codec.Interval(0, 0, BigInt('0')),
          },
          {
            input: 'PT12H30M1S',
            expected: new codec.Interval(0, 0, BigInt('45001000000000')),
          },
          {
            input: 'P1Y2M3D',
            expected: new codec.Interval(14, 3, BigInt('0')),
          },
          {
            input: 'P1Y2M3DT12H30M',
            expected: new codec.Interval(14, 3, BigInt('45000000000000')),
          },
          {
            input: 'PT0.123456789S',
            expected: new codec.Interval(0, 0, BigInt('123456789')),
          },
          {
            input: 'PT1H0.5S',
            expected: new codec.Interval(0, 0, BigInt('3600500000000')),
          },
          {
            input: 'P1Y2M3DT12H30M1.23456789S',
            expected: new codec.Interval(14, 3, BigInt('45001234567890')),
          },
          {
            input: 'P1Y2M3DT12H30M1,23456789S',
            expected: new codec.Interval(14, 3, BigInt('45001234567890')),
          },
          {
            input: 'PT.5S',
            expected: new codec.Interval(0, 0, BigInt('500000000')),
          },
          {
            input: 'P-1Y2M3DT12H-30M1.234S',
            expected: new codec.Interval(-10, 3, BigInt('41401234000000')),
          },
          {
            input: 'P1Y-2M3DT-12H30M-1.234S',
            expected: new codec.Interval(10, 3, BigInt('-41401234000000')),
          },
          {
            input: 'PT1.234000S',
            expected: new codec.Interval(0, 0, BigInt('1234000000')),
          },
          {
            input: 'PT1.000S',
            expected: new codec.Interval(0, 0, BigInt('1000000000')),
          },
          {
            input: 'PT87840000H',
            expected: new codec.Interval(0, 0, BigInt('316224000000000000000')),
          },
          {
            input: 'PT-87840000H',
            expected: new codec.Interval(
              0,
              0,
              BigInt('-316224000000000000000'),
            ),
          },
          {
            input: 'P2Y1M15DT87839999H59M59.999999999S',
            expected: new codec.Interval(
              25,
              15,
              BigInt('316223999999999999999'),
            ),
          },
          {
            input: 'P2Y1M15DT-87839999H-59M-59.999999999S',
            expected: new codec.Interval(
              25,
              15,
              BigInt('-316223999999999999999'),
            ),
          },
        ];

        testCases.forEach(({input, expected}) => {
          assert.deepStrictEqual(codec.Interval.fromISO8601(input), expected);
        });
      });

      it('should throw error for invalid ISO8601 strings', () => {
        const invalidStrings = [
          'invalid',
          'P',
          'PT',
          'P1YM',
          'P1Y2M3D4H5M6S', // Missing T
          'P1Y2M3DT4H5M6.S', // Missing decimal value
          'P1Y2M3DT4H5M6.789SS', // Extra S
          'P1Y2M3DT4H5M6.', // Missing value after decimal point
          'P1Y2M3DT4H5M6.ABC', // Non-digit characters after decimal point
          'P1Y2M3', // Missing unit specifier
          'P1Y2M3DT', // Missing time components
          'P-T1H', // Invalid negative sign position
          'PT1H-', // Invalid negative sign position
          'P1Y2M3DT4H5M6.789123456789S', // Too many digits after decimal
          'P1Y2M3DT4H5M6.123.456S', // Multiple decimal points
          'P1Y2M3DT4H5M6.,789S', // Dot and comma both for decimal
          null,
          undefined,
        ];

        invalidStrings.forEach(str => {
          assert.throws(
            () => {
              codec.Interval.fromISO8601(str);
            },
            new RegExp('Invalid ISO8601 duration string'),
            `Expected exception on parsing ${str}`,
          );
        });
      });

      it('should throw error when months is not a safe integer', () => {
        // Assuming Number.MAX_SAFE_INTEGER / 12 is the max safe years
        const maxSafeYears = Math.ceil(Number.MAX_SAFE_INTEGER / 12);
        const invalidISOString = `P${maxSafeYears}Y4M`;
        assert.throws(() => {
          codec.Interval.fromISO8601(invalidISOString);
        }, new RegExp('Total months is outside of the range of safe integer'));
      });
    });

    describe('toISO8601', () => {
      it('should convert Interval to valid ISO8601 strings', () => {
        const testCases = [
          {input: new codec.Interval(0, 0, BigInt(0)), expected: 'P0Y'},
          {
            input: new codec.Interval(14, 3, BigInt(43926789000123)),
            expected: 'P1Y2M3DT12H12M6.789000123S',
          },
          {
            input: new codec.Interval(14, 3, BigInt(14706789000000)),
            expected: 'P1Y2M3DT4H5M6.789S',
          },
          {input: new codec.Interval(14, 3, BigInt(0)), expected: 'P1Y2M3D'},
          {input: new codec.Interval(14, 0, BigInt(0)), expected: 'P1Y2M'},
          {input: new codec.Interval(12, 0, BigInt(0)), expected: 'P1Y'},
          {input: new codec.Interval(2, 0, BigInt(0)), expected: 'P2M'},
          {input: new codec.Interval(0, 3, BigInt(0)), expected: 'P3D'},
          {
            input: new codec.Interval(0, 0, BigInt(15906789000000)),
            expected: 'PT4H25M6.789S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(14430000000000)),
            expected: 'PT4H30S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(300000000000)),
            expected: 'PT5M',
          },
          {
            input: new codec.Interval(0, 0, BigInt(6789000000)),
            expected: 'PT6.789S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(123000000)),
            expected: 'PT0.123S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(123)),
            expected: 'PT0.000000123S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(100000000)),
            expected: 'PT0.100S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(100100000)),
            expected: 'PT0.100100S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(100100100)),
            expected: 'PT0.100100100S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(9)),
            expected: 'PT0.000000009S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(9000)),
            expected: 'PT0.000009S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(9000000)),
            expected: 'PT0.009S',
          },
          {input: new codec.Interval(0, 0, BigInt(0)), expected: 'P0Y'},
          {input: new codec.Interval(0, 0, BigInt(0)), expected: 'P0Y'},
          {input: new codec.Interval(1, 0, BigInt(0)), expected: 'P1M'},
          {input: new codec.Interval(0, 1, BigInt(0)), expected: 'P1D'},
          {
            input: new codec.Interval(0, 0, BigInt(10010)),
            expected: 'PT0.000010010S',
          },
          {
            input: new codec.Interval(-14, -3, BigInt(-43926789000123)),
            expected: 'P-1Y-2M-3DT-12H-12M-6.789000123S',
          },
          {
            input: new codec.Interval(10, 3, BigInt(43746789100000)),
            expected: 'P10M3DT12H9M6.789100S',
          },
          {
            input: new codec.Interval(-10, -3, BigInt(-43866789010000)),
            expected: 'P-10M-3DT-12H-11M-6.789010S',
          },
          {
            input: new codec.Interval(14, 3, BigInt(-12906662400000)),
            expected: 'P1Y2M3DT-3H-35M-6.662400S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(500000000)),
            expected: 'PT0.500S',
          },
          {
            input: new codec.Interval(0, 0, BigInt(-500000000)),
            expected: 'PT-0.500S',
          },
          {
            input: new codec.Interval(0, 0, BigInt('316224000000000000000')),
            expected: 'PT87840000H',
          },
          {
            input: new codec.Interval(0, 0, BigInt('-316224000000000000000')),
            expected: 'PT-87840000H',
          },
          {
            input: new codec.Interval(25, 15, BigInt('316223999999999999999')),
            expected: 'P2Y1M15DT87839999H59M59.999999999S',
          },
          {
            input: new codec.Interval(25, 15, BigInt('-316223999999999999999')),
            expected: 'P2Y1M15DT-87839999H-59M-59.999999999S',
          },
          {input: new codec.Interval(13, 0, BigInt(0)), expected: 'P1Y1M'},
          {
            input: new codec.Interval(0, 0, BigInt(86400000000000)),
            expected: 'PT24H',
          },
          {input: new codec.Interval(0, 31, BigInt(0)), expected: 'P31D'},
          {input: new codec.Interval(-12, 0, BigInt(0)), expected: 'P-1Y'},
        ];

        testCases.forEach(({input, expected}) => {
          assert.equal(input.toISO8601(), expected);
        });
      });
    });

    it('should check equality correctly', () => {
      const interval1 = new codec.Interval(1, 2, BigInt(3));
      const interval2 = new codec.Interval(1, 2, BigInt(3));
      const interval3 = new codec.Interval(-4, -5, BigInt(-6)); // Negative values

      // Test with identical intervals
      assert.equal(interval1.equals(interval2), true);
      assert.equal(interval2.equals(interval1), true);

      // Test with different intervals
      assert.equal(interval1.equals(interval3), false);
      assert.equal(interval3.equals(interval1), false);

      // Test with different values for each field (including negative)
      assert.equal(
        interval1.equals(new codec.Interval(1, 2, BigInt(-4))),
        false,
      );
      assert.equal(
        interval1.equals(new codec.Interval(1, -3, BigInt(3))),
        false,
      );
      assert.equal(
        interval1.equals(new codec.Interval(-2, 2, BigInt(3))),
        false,
      );
      assert.equal(
        interval3.equals(new codec.Interval(-4, -5, BigInt(6))),
        false,
      );
      assert.equal(
        interval3.equals(new codec.Interval(-4, 5, BigInt(-6))),
        false,
      );
      assert.equal(
        interval3.equals(new codec.Interval(4, -5, BigInt(-6))),
        false,
      );

      // Test with null and undefined
      assert.equal(interval1.equals(null), false);
      assert.equal(interval1.equals(undefined), false);

      // Test with an object that is not an Interval
      assert.equal(interval1.equals({} as BigInt), false);
    });

    it('should return the correct value with valueOf()', () => {
      const interval = new codec.Interval(1, 2, BigInt(3));
      assert.equal(interval.valueOf(), interval);
    });

    it('should return the correct JSON representation', () => {
      const interval = new codec.Interval(1, 2, BigInt(3));
      const expectedJson = interval.toISO8601();
      assert.equal(interval.toJSON(), expectedJson);
    });

    describe('ISO8601 roundtrip', () => {
      it('should convert Interval to ISO8601 and back without losing data', () => {
        const testCases = [
          new codec.Interval(14, 3, BigInt('43926789000000')),
          new codec.Interval(12, 0, BigInt(0)),
          new codec.Interval(1, 0, BigInt(0)),
          new codec.Interval(0, 1, BigInt(0)),
          new codec.Interval(0, 0, BigInt(3600000000000)),
          new codec.Interval(0, 0, BigInt(60000000000)),
          new codec.Interval(0, 0, BigInt(1000000000)),
          new codec.Interval(0, 0, BigInt(100000000)),
          new codec.Interval(0, 0, BigInt(0)),
          new codec.Interval(-10, 3, BigInt('43926000000000')),
          new codec.Interval(25, 15, BigInt('86399123456789')),
          new codec.Interval(-25, -15, BigInt('-86399123456789')),
          new codec.Interval(13, 0, BigInt('0')),
          new codec.Interval(0, 0, BigInt('86400000000000')),
          new codec.Interval(0, 31, BigInt('0')),
          new codec.Interval(-12, 0, BigInt('0')),
        ];

        testCases.forEach(interval => {
          const isoString = interval.toISO8601();
          const roundtripInterval = codec.Interval.fromISO8601(isoString);
          assert.deepStrictEqual(roundtripInterval, interval);
        });
      });
    });
  });

  describe('ProtoMessage', () => {
    const protoMessageParams = {
      value: music.SingerInfo.create({
        singerId: new Long(1),
        genre: music.Genre.POP,
        birthDate: 'January',
        nationality: 'Country1',
      }),
      messageFunction: music.SingerInfo,
      fullName: 'examples.spanner.music.SingerInfo',
    };

    it('should store value as buffer', () => {
      const protoMessage = new codec.ProtoMessage(protoMessageParams);
      assert(Buffer.isBuffer(protoMessage.value));
    });

    it('should throw an error when value is not object and protoMessage is not passed', () => {
      assert.throws(
        () => {
          new codec.ProtoMessage({
            value: {
              singerId: 1,
              genre: music.Genre.POP,
              birthDate: 'January',
            },
            fullName: 'examples.spanner.music.SingerInfo',
          });
        },
        new GoogleError(`protoMessageParams cannot be used to construct 
      the ProtoMessage. Pass the serialized buffer of the
       proto message as the value or provide the message object along with the 
       corresponding messageFunction generated by protobufjs-cli.`),
      );
    });

    it('toJSON with messageFunction', () => {
      assert.deepEqual(
        new codec.ProtoMessage(protoMessageParams).toJSON(),
        music.SingerInfo.toObject(protoMessageParams.value),
      );
    });

    it('toJSON without messageFunction', () => {
      const message = new codec.ProtoMessage({
        value: music.SingerInfo.encode(protoMessageParams.value).finish(),
        fullName: 'examples.spanner.music.SingerInfo',
      });
      assert.deepEqual(message.toJSON(), message.value.toString());
    });
  });

  describe('ProtoEnum', () => {
    const enumParams = {
      value: music.Genre.JAZZ,
      enumObject: music.Genre,
      fullName: 'examples.spanner.music.Genre',
    };

    it('should store value as string', () => {
      const protoEnum = new codec.ProtoEnum(enumParams);
      assert(isString(protoEnum.value));
    });

    it('should throw an error when value is non numeric string and enumObject is not passed', () => {
      assert.throws(
        () => {
          new codec.ProtoEnum({
            value: 'POP',
            fullName: 'examples.spanner.music.Genre',
          });
        },
        new GoogleError(`protoEnumParams cannot be used for constructing the
       ProtoEnum. Pass the number as the value or provide the enum string 
       constant as the value along with the corresponding enumObject generated 
       by protobufjs-cli.`),
      );
    });

    it('toJSON with enumObject', () => {
      assert.deepEqual(new codec.ProtoEnum(enumParams).toJSON(), 'JAZZ');
    });

    it('toJSON without enumObject', () => {
      assert.deepEqual(
        new codec.ProtoEnum({
          value: music.Genre.JAZZ,
          fullName: 'examples.spanner.music.Genre',
        }).toJSON(),
        1,
      );
    });
  });

  describe('Struct', () => {
    describe('toJSON', () => {
      it('should covert the struct to JSON', () => {
        const struct = new codec.Struct();
        const options = {};
        const fakeJson = {};

        (sandbox.stub(codec, 'convertFieldsToJson') as sinon.SinonStub)
          .withArgs(struct, options)
          .returns(fakeJson);

        assert.strictEqual(struct.toJSON(options), fakeJson);
      });
    });

    describe('fromArray', () => {
      it('should wrap the array in a struct', () => {
        const fields = [{name: 'name', value: 'value'}];
        const struct = codec.Struct.fromArray(fields);

        assert(struct instanceof codec.Struct);

        fields.forEach((field, i) => {
          assert.strictEqual(struct[i], field);
        });
      });
    });

    describe('fromJSON', () => {
      it('should covert json to a struct', () => {
        const json = {a: 'b', c: 'd'};
        const expected = [
          {name: 'a', value: 'b'},
          {name: 'c', value: 'd'},
        ];
        const struct = codec.Struct.fromJSON(json);

        assert(struct instanceof codec.Struct);

        expected.forEach((field, i) => {
          assert.deepStrictEqual(struct[i], field);
        });
      });
    });
  });

  describe('convertFieldsToJson', () => {
    const ROW = [
      {
        name: 'name',
        value: 'value',
      },
    ];

    it('should not require options', () => {
      assert.doesNotThrow(() => codec.convertFieldsToJson(ROW));
    });

    it('should return serialized rows', () => {
      const json = codec.convertFieldsToJson(ROW);

      assert.deepStrictEqual(json, {name: 'value'});
    });

    it('should not return nameless values by default', () => {
      const row = [
        {
          value: 'value',
        },
      ];

      const json = codec.convertFieldsToJson(row);
      assert.deepStrictEqual(json, {});
    });

    it('should return nameless values when requested', () => {
      const row = [
        {
          value: 'value',
        },
      ];

      const json = codec.convertFieldsToJson(row, {includeNameless: true});
      assert.deepStrictEqual(json, {_0: 'value'});
    });

    describe('structs', () => {
      it('should not wrap structs by default', () => {
        const options = {
          wrapNumbers: false,
          wrapStructs: false,
          includeNameless: false,
        };
        const fakeStructJson = {};

        const struct = new codec.Struct();
        const stub = sandbox.stub(struct, 'toJSON').returns(fakeStructJson);

        const row = [{name: 'Struct', value: struct}];

        const json = codec.convertFieldsToJson(row, options);

        assert.strictEqual(json.Struct, fakeStructJson);
        assert.deepStrictEqual(stub.lastCall.args[0], options);
      });

      it('should wrap structs with option', () => {
        const value = 3.3;

        const expectedStruct = codec.Struct.fromJSON({Number: value});
        const struct = codec.Struct.fromJSON({Number: new codec.Float(value)});

        const row = [{name: 'Struct', value: struct}];

        const json = codec.convertFieldsToJson(row, {wrapStructs: true});
        assert.deepStrictEqual(json.Struct, expectedStruct);
      });
    });

    describe('numbers', () => {
      it('should not wrap numbers by default', () => {
        const row = [
          {
            name: 'Number',
            value: new codec.Int(3),
          },
        ];

        const json = codec.convertFieldsToJson(row);
        assert.strictEqual(typeof json.Number, 'number');
        assert.strictEqual(json.Number, 3);
      });

      it('should wrap numbers with option', () => {
        const int = new codec.Int(3);

        const row = [
          {
            name: 'Number',
            value: int,
          },
        ];

        const json = codec.convertFieldsToJson(row, {wrapNumbers: true});

        assert(json.Number instanceof codec.Int);
        assert.deepStrictEqual(json.Number, int);
      });

      it('should throw an error if number is out of bounds', () => {
        const int = new codec.Int('9223372036854775807');

        const row = [
          {
            name: 'Number',
            value: int,
          },
        ];

        assert.throws(() => {
          codec.convertFieldsToJson(row);
        }, new RegExp('Serializing column "Number" encountered an error'));
      });
    });

    describe('arrays', () => {
      it('should not wrap numbers by default', () => {
        const value = 3;

        const row = [
          {
            name: 'List',
            value: [new codec.Int(value)],
          },
        ];

        const json = codec.convertFieldsToJson(row);
        assert.deepStrictEqual(json.List, [value]);
      });

      it('should wrap numbers with option', () => {
        const value = new codec.Int(3);

        const row = [{name: 'List', value: [value]}];

        const json = codec.convertFieldsToJson(row, {wrapNumbers: true});
        assert.deepStrictEqual(json.List, [value]);
      });

      it('should not wrap structs by default', () => {
        const struct = new codec.Struct();
        const expectedStruct = {a: 'b', c: 'd'};

        sandbox.stub(struct, 'toJSON').returns(expectedStruct);

        const row = [{name: 'List', value: [struct]}];

        const json = codec.convertFieldsToJson(row);
        assert.deepStrictEqual(json.List, [expectedStruct]);
      });

      it('should wrap structs with option', () => {
        const expectedStruct = codec.Struct.fromJSON({a: 'b', c: 'd'});

        const row = [{name: 'List', value: [expectedStruct]}];

        const json = codec.convertFieldsToJson(row, {wrapStructs: true});
        assert.deepStrictEqual(json.List, [expectedStruct]);
      });
    });
  });

  describe('decode', () => {
    // Does not require any special decoding.
    const BYPASS_FIELD = {
      code: 'not-real-code',
    };

    it('should return the same value if not a special type', () => {
      const value = {};

      const decoded = codec.decode(value, BYPASS_FIELD);
      assert.strictEqual(decoded, value);
    });

    it('should return null values as null', () => {
      (GrpcService.decodeValue_ as sinon.SinonStub).returns(null);
      const decoded = codec.decode(null, BYPASS_FIELD);
      assert.strictEqual(decoded, null);
    });

    it('should decode BYTES', () => {
      const expected = Buffer.from('bytes value');
      const encoded = expected.toString('base64');

      const decoded = codec.decode(encoded, {
        code: google.spanner.v1.TypeCode.BYTES,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode ProtoMessage', () => {
      const expected = new codec.ProtoMessage({
        value: music.SingerInfo.create({
          singerId: 1,
          genre: music.Genre.POP,
          birthDate: 'January',
          nationality: 'Country1',
        }),
        messageFunction: music.SingerInfo,
        fullName: 'examples.spanner.music.SingerInfo',
      });
      const encoded = expected.value.toString('base64');

      const decoded = codec.decode(
        encoded,
        {
          code: google.spanner.v1.TypeCode.PROTO,
          protoTypeFqn: 'examples.spanner.music.SingerInfo',
        },
        music.SingerInfo,
      );

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode ProtoEnum', () => {
      const expected = Buffer.from('bytes value');
      const encoded = expected.toString('base64');

      const decoded = codec.decode(encoded, {
        code: google.spanner.v1.TypeCode.BYTES,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode UUID', () => {
      const value = uuid.v4();

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.UUID,
      });

      assert.strictEqual(decoded, value);
    });

    it('should decode FLOAT32', () => {
      const value = 'Infinity';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.FLOAT32,
      });

      assert(decoded instanceof codec.Float32);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode FLOAT64', () => {
      const value = 'Infinity';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.FLOAT64,
      });

      assert(decoded instanceof codec.Float);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode INT64', () => {
      const value = '64';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.INT64,
      });

      assert(decoded instanceof codec.Int);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode NUMERIC', () => {
      const value = '8.01911';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.NUMERIC,
      });

      assert(decoded instanceof codec.Numeric);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode PG NUMERIC', () => {
      const value = '8.01911';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.NUMERIC,
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_NUMERIC,
      });

      assert(decoded instanceof codec.PGNumeric);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode JSON', () => {
      const value = '{"result":true, "count":42}';
      const expected = JSON.parse(value);

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.JSON,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode complex JSON string to object', () => {
      const value =
        '{"boolKey":true,"numberKey":3.14,"stringKey":"test","objectKey":{"innerKey":"inner-value"}}';
      const expected = {
        boolKey: true,
        numberKey: 3.14,
        stringKey: 'test',
        objectKey: {innerKey: 'inner-value'},
      };

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.JSON,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode JSONB', () => {
      const value = '{"result":true, "count":42}';
      const expected = JSON.parse(value);

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.JSON,
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_JSONB,
      });

      assert.deepStrictEqual(decoded.value, expected);
    });

    it('should decode JSONB object to string', () => {
      const value =
        '{"boolKey":true,"numberKey":3.14,"stringKey":"test","objectKey":{"innerKey":"inner-value"}}';
      const expected = JSON.stringify({
        boolKey: true,
        numberKey: 3.14,
        stringKey: 'test',
        objectKey: {innerKey: 'inner-value'},
      });

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.JSON,
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_JSONB,
      });

      assert.deepStrictEqual(decoded.toString(), expected);
    });

    it('should decode PG OID', () => {
      const value = '64';

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.INT64,
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_OID,
      });

      assert(decoded instanceof codec.PGOid);
      assert.strictEqual(decoded.value, value);
    });

    it('should decode TIMESTAMP', () => {
      const value = new Date();
      const expected = new PreciseDate(value.getTime());
      const decoded = codec.decode(value.toJSON(), {
        code: google.spanner.v1.TypeCode.TIMESTAMP,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode DATE', () => {
      const value = new Date();
      const expected = new codec.SpannerDate(value.toISOString());
      const decoded = codec.decode(value.toJSON(), {
        code: google.spanner.v1.TypeCode.DATE,
      });

      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode INTERVAL', () => {
      const value = 'P1Y2M-45DT67H12M6.789045638S';
      const expected = codec.Interval.fromISO8601(value);
      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.INTERVAL,
      });

      assert(decoded instanceof codec.Interval);
      assert.deepStrictEqual(decoded, expected);
    });

    it('should decode ARRAY and inner members', () => {
      const value = ['1'];

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.ARRAY,
        arrayElementType: {
          code: google.spanner.v1.TypeCode.INT64,
        },
      });

      assert(decoded[0] instanceof codec.Int);
    });

    it('should decode object STRUCT value and inner members', () => {
      const value = {
        keys: 1,
        fieldName: '2',
      };

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.STRUCT,
        structType: {
          fields: [
            {
              name: 'keys',
              type: {
                code: google.spanner.v1.TypeCode.JSON,
              },
            },
            {
              name: 'fieldName',
              type: {
                code: google.spanner.v1.TypeCode.INT64,
              },
            },
          ],
        },
      });

      const expectedStruct = new codec.Struct(
        {
          name: 'keys',
          value: value.keys,
        },
        {
          name: 'fieldName',
          value: new codec.Int(value.fieldName),
        },
      );

      assert(decoded instanceof codec.Struct);
      assert.deepStrictEqual(decoded, expectedStruct);
    });

    it('should decode array STRUCT value and inner members', () => {
      const value = ['1', '2'];

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.STRUCT,
        structType: {
          fields: [
            {
              name: 'keys',
              type: {
                code: google.spanner.v1.TypeCode.JSON,
              },
            },
            {
              name: 'fieldName',
              type: {
                code: google.spanner.v1.TypeCode.INT64,
              },
            },
          ],
        },
      });

      const expectedStruct = new codec.Struct(
        {
          name: 'keys',
          value: JSON.parse(value[0]),
        },
        {
          name: 'fieldName',
          value: new codec.Int(value[1]),
        },
      );

      assert(decoded instanceof codec.Struct);
      assert.deepStrictEqual(decoded, expectedStruct);
    });
  });

  describe('encode', () => {
    it('should return the value from the common encoder', () => {
      const value = {};
      const defaultEncodedValue = '{}';

      (GrpcService.encodeValue_ as sinon.SinonStub)
        .withArgs(value)
        .returns(defaultEncodedValue);

      const encoded = codec.encode(value);
      assert.strictEqual(encoded, defaultEncodedValue);
    });

    it('should encode BYTES', () => {
      const value = Buffer.from('bytes value');

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString('base64'));
    });

    it('should encode ProtoMessage', () => {
      const genre = music.Genre.ROCK;
      const singerInfo = music.SingerInfo.create({
        singerId: 1,
        genre: genre,
        birthDate: 'January',
        nationality: 'Country1',
      });

      const protoMessage = new codec.ProtoMessage({
        value: singerInfo,
        messageFunction: music.SingerInfo,
        fullName: 'examples.spanner.music.SingerInfo',
      });

      const encoded = codec.encode(protoMessage);

      assert.strictEqual(
        encoded,
        music.SingerInfo.encode(singerInfo).finish().toString('base64'),
      );
    });

    it('should encode ProtoEnum', () => {
      const genre = music.Genre.ROCK;
      const protoEnum = new codec.ProtoEnum({
        value: genre,
        enumObject: music.Genre,
        fullName: 'examples.spanner.music.Genre',
      });

      const encoded = codec.encode(protoEnum);

      assert.strictEqual(encoded, genre.toString());
    });

    it('should encode structs', () => {
      const value = codec.Struct.fromJSON({a: 'b', c: 'd'});
      const encoded = codec.encode(value);
      assert.deepStrictEqual(encoded, ['b', 'd']);
    });

    it('should stringify Infinity', () => {
      const value = Infinity;
      const encoded = codec.encode(value);
      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify -Infinity', () => {
      const value = -Infinity;

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify NaN', () => {
      const value = NaN;

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify INT64', () => {
      const value = 5;

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toString());
    });

    it('should stringify NUMERIC', () => {
      const value = new codec.Numeric('8.01911');

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.value);
    });

    it('should stringify PG NUMERIC', () => {
      const value = new codec.PGNumeric('8.01911');

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.value);
    });

    it('should encode ARRAY and inner members', () => {
      const value = [5];

      const encoded = codec.encode(value);

      assert.deepStrictEqual(encoded, [
        value.toString(), // (tests that it is stringified)
      ]);
    });

    it('should encode TIMESTAMP', () => {
      const value = new PreciseDate();

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toJSON());
    });

    it('should encode DATE', () => {
      const value = new codec.SpannerDate();

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value.toJSON());
    });

    it('should encode INTERVAL', () => {
      const value = new codec.Interval(17, -20, BigInt(30001));
      const encoded = codec.encode(value);
      assert.strictEqual(encoded, 'P1Y5M-20DT0.000030001S');
    });

    it('should encode INT64', () => {
      const value = new codec.Int(10);

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, '10');
    });

    it('should encode PG OID', () => {
      const value = new codec.PGOid(10);

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, '10');
    });

    it('should encode UUID', () => {
      const value = uuid.v4();

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, value);
    });

    it('should encode FLOAT32', () => {
      const value = new codec.Float32(10);

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, 10);
    });

    it('should encode FLOAT64', () => {
      const value = new codec.Float(10);

      const encoded = codec.encode(value);

      assert.strictEqual(encoded, 10);
    });

    it('should encode JSON', () => {
      const expected = '{"result":true,"count":42}';
      const value = JSON.parse('{"result": true, "count": 42}');

      const encoded = codec.encode(value);

      assert.deepStrictEqual(encoded, expected);
    });

    it('should encode complex object as JSON', () => {
      const value = {
        boolKey: true,
        numberKey: 3.14,
        stringKey: 'test',
        objectKey: {innerKey: 'inner-value'},
      };

      const encoded = codec.encode(value);

      assert.deepStrictEqual(
        encoded,
        '{"boolKey":true,"numberKey":3.14,"stringKey":"test","objectKey":{"innerKey":"inner-value"}}',
      );
    });

    it('should encode deeply-nested object as JSON', () => {
      // Cloud Spanner accepts a nesting level in a JSON string of at most 100.
      // This test ensures that the encoder is able to encode such an object to
      // a JSON string.
      const nesting = 100;
      const value = JSON.parse(
        '{"k": '.repeat(nesting).concat('"v"').concat('}'.repeat(nesting)),
      );

      const encoded = codec.encode(value);

      assert.deepStrictEqual(
        encoded,
        '{"k":'.repeat(nesting).concat('"v"').concat('}'.repeat(nesting)),
      );
    });

    it('should decode deeply-nested object as JSON', () => {
      // Cloud Spanner accepts a nesting level in a JSON string of at most 100.
      // This test ensures that the decoder is able to decode such a string.
      const nesting = 100;
      const value = '{"k": '
        .repeat(nesting)
        .concat('"v"')
        .concat('}'.repeat(nesting));

      const decoded = codec.decode(value, {
        code: google.spanner.v1.TypeCode.JSON,
      });

      assert.deepStrictEqual(
        decoded,
        JSON.parse(
          '{"k":'.repeat(nesting).concat('"v"').concat('}'.repeat(nesting)),
        ),
      );
    });
  });

  describe('getType', () => {
    it('should determine if the value is a boolean', () => {
      assert.deepStrictEqual(codec.getType(true), {type: 'bool'});
    });

    it('should determine if the value is a float', () => {
      assert.deepStrictEqual(codec.getType(NaN), {type: 'float64'});
      assert.deepStrictEqual(codec.getType(Infinity), {type: 'float64'});
      assert.deepStrictEqual(codec.getType(-Infinity), {type: 'float64'});
      assert.deepStrictEqual(codec.getType(2.2), {type: 'float64'});
      assert.deepStrictEqual(codec.getType(new codec.Float(1.1)), {
        type: 'float64',
      });
    });

    it('should determine if the uuid value is string', () => {
      assert.deepStrictEqual(codec.getType(uuid.v4()), {
        type: 'string',
      });
    });

    it('should determine if the uuid value is unspecified when SPANNER_ENABLE_UUID_AS_UNTYPED is true', () => {
      const emitWarningStub = sandbox.stub(process, 'emitWarning');
      try {
        process.env['SPANNER_ENABLE_UUID_AS_UNTYPED'] = 'true';
        assert.deepStrictEqual(codec.getType(uuid.v4()), {
          type: 'unspecified',
        });
        assert.strictEqual(emitWarningStub.calledOnce, true);
        assert.strictEqual(
          emitWarningStub.firstCall.args[0],
          'SPANNER_ENABLE_UUID_AS_UNTYPED environment variable is deprecated and will be removed in a future release.',
        );
      } finally {
        delete process.env['SPANNER_ENABLE_UUID_AS_UNTYPED'];
        emitWarningStub.restore();
      }
    });

    it('should determine if the uuid value is string when SPANNER_ENABLE_UUID_AS_UNTYPED is false', () => {
      try {
        process.env['SPANNER_ENABLE_UUID_AS_UNTYPED'] = 'false';
        assert.deepStrictEqual(codec.getType(uuid.v4()), {
          type: 'string',
        });
      } finally {
        delete process.env['SPANNER_ENABLE_UUID_AS_UNTYPED'];
      }
    });

    it('should determine if the value is a float32', () => {
      assert.deepStrictEqual(codec.getType(new codec.Float32(1.1)), {
        type: 'float32',
      });
    });

    it('should determine if the value is an int', () => {
      assert.deepStrictEqual(codec.getType(1234), {type: 'int64'});
      assert.deepStrictEqual(codec.getType(new codec.Int(1)), {type: 'int64'});
    });

    it('should determine if the value is numeric', () => {
      assert.deepStrictEqual(codec.getType(new codec.Numeric('8.01911')), {
        type: 'numeric',
      });
    });

    it('should determine if the value is a string', () => {
      assert.deepStrictEqual(codec.getType('abc'), {type: 'string'});
    });

    it('should determine if the value is bytes', () => {
      assert.deepStrictEqual(codec.getType(Buffer.from('abc')), {
        type: 'bytes',
      });
    });

    it('should determine if the value is json', () => {
      assert.deepStrictEqual(codec.getType({key: 'value'}), {
        type: 'json',
      });
    });

    it('should determine if the value is a date', () => {
      assert.deepStrictEqual(codec.getType(new codec.SpannerDate()), {
        type: 'date',
      });
    });

    it('should determine if the value is a timestamp', () => {
      assert.deepStrictEqual(codec.getType(new PreciseDate()), {
        type: 'timestamp',
      });
    });

    it('should accept a plain date object as a timestamp', () => {
      assert.deepStrictEqual(codec.getType(new Date()), {type: 'timestamp'});
    });

    it.skip('should determine if the value is a interval', () => {
      assert.deepStrictEqual(
        codec.getType(new codec.Interval(1, 2, BigInt(3))),
        {
          type: 'interval',
        },
      );
    });

    it('should determine if the value is a struct', () => {
      const struct = codec.Struct.fromJSON({a: 'b'});
      const type = codec.getType(struct);

      assert.deepStrictEqual(type, {
        type: 'struct',
        fields: [{name: 'a', type: 'string'}],
      });
    });

    it('should attempt to determine arrays and their values', () => {
      assert.deepStrictEqual(codec.getType([Infinity]), {
        type: 'array',
        child: {
          type: 'float64',
        },
      });
    });

    it('should return unspecified for unknown values', () => {
      assert.deepStrictEqual(codec.getType(null), {type: 'unspecified'});

      assert.deepStrictEqual(codec.getType([null]), {
        type: 'array',
        child: {
          type: 'unspecified',
        },
      });
    });

    it('should determine if the value is a PGNumeric', () => {
      assert.deepStrictEqual(codec.getType(new codec.PGNumeric('7248')), {
        type: 'pgNumeric',
      });
    });

    it('should determine if the value is a PGOid', () => {
      assert.deepStrictEqual(codec.getType(new codec.PGOid(5678)), {
        type: 'pgOid',
      });
    });
  });

  describe('convertToListValue', () => {
    beforeEach(() => {
      sandbox.stub(codec, 'encode').callsFake(value => {
        return {stringValue: value};
      });
    });

    it('should map values to encoded versions', () => {
      const actual = ['hi', 'bye'];
      const expected = {
        values: [{stringValue: 'hi'}, {stringValue: 'bye'}],
      };

      const converted = codec.convertToListValue(actual);
      assert.deepStrictEqual(converted, expected);
    });

    it('should convert a single value to a list value', () => {
      const actual = 'hi';
      const expected = {
        values: [{stringValue: 'hi'}],
      };

      const converted = codec.convertToListValue(actual);
      assert.deepStrictEqual(converted, expected);
    });
  });

  describe('convertMsToProtoTimestamp', () => {
    it('should convert ms to google.protobuf.Timestamp', () => {
      const ms = 5000.00001;
      const expected = {
        nanos: 10,
        seconds: 5,
      };

      const converted = codec.convertMsToProtoTimestamp(ms);
      assert.deepStrictEqual(converted, expected);
    });
  });

  describe('convertProtoTimestampToDate', () => {
    it('should convert google.protobuf.Timestamp to Date', () => {
      const timestamp = {nanos: 10, seconds: 5};

      const expected = new Date(5000.00001);
      const converted = codec.convertProtoTimestampToDate(timestamp);

      assert.deepStrictEqual(converted, expected);
    });
  });

  describe('createTypeObject', () => {
    it('should convert strings to the corresponding type', () => {
      const typeMap = {
        unspecified: {
          code: google.spanner.v1.TypeCode[
            google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED
          ],
        },
        bool: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.BOOL],
        },
        int64: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.INT64],
        },
        uuid: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.UUID],
        },
        float32: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.FLOAT32],
        },
        float64: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.FLOAT64],
        },
        timestamp: {
          code: google.spanner.v1.TypeCode[
            google.spanner.v1.TypeCode.TIMESTAMP
          ],
        },
        date: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.DATE],
        },
        string: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.STRING],
        },
        bytes: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.BYTES],
        },
        interval: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.INTERVAL],
        },
        array: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.ARRAY],
          arrayElementType: {
            code: google.spanner.v1.TypeCode[
              google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED
            ],
          },
        },
        struct: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.STRUCT],
          structType: {fields: []},
        },
      };

      Object.keys(typeMap).forEach(key => {
        const type = codec.createTypeObject(key);
        assert.deepStrictEqual(type, typeMap[key]);
      });
    });

    it('should default to unspecified for unknown types', () => {
      const type = codec.createTypeObject('unicorn');

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[
          google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED
        ],
      });
    });

    it('should set the arrayElementType', () => {
      const type = codec.createTypeObject({
        type: 'array',
        child: 'bool',
      });

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.ARRAY],
        arrayElementType: {
          code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.BOOL],
        },
      });
    });

    it('should set the struct fields', () => {
      const type = codec.createTypeObject({
        type: 'struct',
        fields: [
          {name: 'boolKey', type: 'bool'},
          {name: 'intKey', type: 'int64'},
        ],
      });

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.STRUCT],
        structType: {
          fields: [
            {
              name: 'boolKey',
              type: {
                code: google.spanner.v1.TypeCode[
                  google.spanner.v1.TypeCode.BOOL
                ],
              },
            },
            {
              name: 'intKey',
              type: {
                code: google.spanner.v1.TypeCode[
                  google.spanner.v1.TypeCode.INT64
                ],
              },
            },
          ],
        },
      });
    });

    it('should handle nested structs', () => {
      const type = codec.createTypeObject({
        type: 'struct',
        fields: [
          {
            name: 'nestedStruct',
            type: 'struct',
            fields: [
              {
                type: 'bool',
                name: 'boolKey',
              },
            ],
          },
        ],
      });

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.STRUCT],
        structType: {
          fields: [
            {
              name: 'nestedStruct',
              type: {
                code: google.spanner.v1.TypeCode[
                  google.spanner.v1.TypeCode.STRUCT
                ],
                structType: {
                  fields: [
                    {
                      name: 'boolKey',
                      type: {
                        code: google.spanner.v1.TypeCode[
                          google.spanner.v1.TypeCode.BOOL
                        ],
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      });
    });
    it('should set code and typeAnnotation for pgNumeric string', () => {
      const type = codec.createTypeObject('pgNumeric');

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.NUMERIC],
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_NUMERIC,
      });
    });

    it('should set code and typeAnnotation for pgNumeric friendlyType object', () => {
      const type = codec.createTypeObject({type: 'pgNumeric'});

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.NUMERIC],
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_NUMERIC,
      });
    });

    it('should set code and typeAnnotation for pgOid string', () => {
      const type = codec.createTypeObject('pgOid');

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.INT64],
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_OID,
      });
    });

    it('should set code and typeAnnotation for pgOid friendlyType object', () => {
      const type = codec.createTypeObject({type: 'pgOid'});

      assert.deepStrictEqual(type, {
        code: google.spanner.v1.TypeCode[google.spanner.v1.TypeCode.INT64],
        typeAnnotation: google.spanner.v1.TypeAnnotationCode.PG_OID,
      });
    });
  });
});
