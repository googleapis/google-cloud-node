/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
import * as sinon from 'sinon';

import {DateTuple, PreciseDate} from '../src';

class FakeBigInt {
  value: number | string;
  constructor(value: number | string) {
    this.value = value;
  }
}

function bigIntFactory(value: number | string): FakeBigInt {
  return new FakeBigInt(value);
}

// while BigInt can't be used as a constructor, Node 11+ will attempt to read
// members from its prototype chain. We could declare FakeBigInt as a function
// prototype but that seems to be difficult (impossible?) to do in TypeScript.
bigIntFactory.prototype.valueOf = function (): number | string {
  return this.value;
};

class FakeLong {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  toNumber(): number {
    return this.value;
  }
}

describe('PreciseDate', () => {
  const hasNativeBigInt = typeof BigInt === 'function';
  const sandbox = sinon.createSandbox();

  // tslint:disable-next-line variable-name
  let RealBigInt: typeof BigInt;
  let date: PreciseDate;

  const NO_BIG_INT_ERR =
    /BigInt only available in Node >= v10\.7. Consider using getFullTimeString instead\./;

  const SECS = 1547253035;
  const NANOS = 381101032;

  const FULL_ISO_STRING = '2019-01-12T00:30:35.381101032Z';
  const TIME_STRING = `${SECS}${NANOS}`;

  const LOCAL_DATE = new Date(FULL_ISO_STRING);

  const YEAR = LOCAL_DATE.getFullYear();
  const MONTH = LOCAL_DATE.getMonth();
  const DAY = LOCAL_DATE.getDate();
  const HOURS = LOCAL_DATE.getHours();
  const MINUTES = LOCAL_DATE.getMinutes();
  const SECONDS = LOCAL_DATE.getSeconds();
  const MILLISECONDS = 381;
  const MICROSECONDS = 101;
  const NANOSECONDS = 32;
  const PICOSECONDS = 123;

  before(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RealBigInt = (global as any).BigInt;
  });

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).BigInt = bigIntFactory;
    date = new PreciseDate(TIME_STRING);
  });

  after(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).BigInt = RealBigInt;
  });

  afterEach(() => sandbox.restore());

  describe('#constructor()', () => {
    it('should get the precise timestamp for non-(date|number) values', () => {
      const fakeTimestamp = '123456789';
      const setStub = sandbox.stub(PreciseDate.prototype, 'setFullTime');

      sandbox
        .stub(PreciseDate, 'parseFull')
        .withArgs(TIME_STRING)
        .returns(fakeTimestamp);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const date = new PreciseDate(TIME_STRING);
      const [timestamp] = setStub.lastCall.args;
      assert.strictEqual(timestamp, fakeTimestamp);
    });

    it('should accept date fields', () => {
      const timeStub = sandbox.stub(PreciseDate.prototype, 'setTime');
      const microsStub = sandbox.stub(PreciseDate.prototype, 'setMicroseconds');
      const nanosStub = sandbox.stub(PreciseDate.prototype, 'setNanoseconds');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const date = new PreciseDate(
        YEAR,
        MONTH,
        DAY,
        HOURS,
        MINUTES,
        SECONDS,
        MILLISECONDS,
        MICROSECONDS,
        NANOSECONDS,
      );

      const [time] = timeStub.lastCall.args;
      const [micros] = microsStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(time, LOCAL_DATE.getTime());
      assert.strictEqual(micros, MICROSECONDS);
      assert.strictEqual(nanos, NANOSECONDS);
    });

    it('should accept picoseconds in constructor', () => {
      // year, month, date, hours, minutes, seconds, millis, micros, nanos, picos
      const date = new PreciseDate(
        YEAR,
        MONTH,
        DAY,
        HOURS,
        MINUTES,
        SECONDS,
        MILLISECONDS,
        MICROSECONDS,
        NANOSECONDS,
        PICOSECONDS,
      );
      assert.strictEqual(date.getPicoseconds(), PICOSECONDS);
      assert.strictEqual(date.getNanoseconds(), NANOSECONDS);
      assert.strictEqual(date.getMicroseconds(), MICROSECONDS);
      assert.strictEqual(date.getUTCMilliseconds(), MILLISECONDS);
    });
  });

  describe('#getFullTime()', () => {
    beforeEach(() => {
      sandbox.stub(date, 'getFullTimeString').returns(TIME_STRING);
    });

    it('should throw an error if BigInt is unavailable', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any).BigInt;

      assert.throws(() => date.getFullTime(), NO_BIG_INT_ERR);
    });

    it('should return the precise time as a BigInt', () => {
      const expectedTimestamp = new FakeBigInt(TIME_STRING);
      const timestamp = date.getFullTime();
      assert.deepStrictEqual(timestamp, expectedTimestamp);
    });
  });

  describe('#getFullTimeString()', () => {
    it('should return the time as a string', () => {
      const timestamp = date.getFullTimeString();
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should pad the nanoseconds if needed', () => {
      const nanos = 123;
      const expectedTime = `${SECS}000000${nanos}`;

      const date = new PreciseDate({seconds: SECS, nanos});
      const timestamp = date.getFullTimeString();
      assert.strictEqual(timestamp, expectedTime);
    });

    it('should correctly return dates < Unix epoch', () => {
      const expectedTime = `${-SECS + 1}${1e9 - NANOS}`;

      const date = new PreciseDate({seconds: -SECS, nanos: NANOS});
      const timestamp = date.getFullTimeString();
      assert.strictEqual(timestamp, expectedTime);
    });

    it('should correctly return (not so precise) dates < Unix epoch', () => {
      const expectedTime = `-${SECS}000000000`;

      const date = new PreciseDate({seconds: -SECS, nanos: 0});
      const timestamp = date.getFullTimeString();
      assert.strictEqual(timestamp, expectedTime);
    });
  });

  describe('#getMicroseconds()', () => {
    it('should return the microseconds', () => {
      const microseconds = date.getMicroseconds();
      assert.strictEqual(microseconds, MICROSECONDS);
    });
  });

  describe('#getNanoseconds()', () => {
    it('should return the nanoseconds', () => {
      const nanoseconds = date.getNanoseconds();
      assert.strictEqual(nanoseconds, NANOSECONDS);
    });
  });

  describe('#getPicoseconds()', () => {
    it('should return the picoseconds', () => {
      const date = new PreciseDate(TIME_STRING);
      date.setPicoseconds(PICOSECONDS);
      assert.strictEqual(date.getPicoseconds(), PICOSECONDS);
    });
  });

  describe('#setMicroseconds()', () => {
    it('should set the microseconds', () => {
      const micros = 912;
      date.setMicroseconds(micros);
      assert.strictEqual(date.getMicroseconds(), micros);
    });

    it('should return the precise time string', () => {
      const fakeTimestamp = '123456789';
      sandbox.stub(date, 'getFullTimeString').returns(fakeTimestamp);

      const timestamp = date.setMicroseconds(0);
      assert.strictEqual(timestamp, fakeTimestamp);
    });

    it('should update the milliseconds if abs(micros) >= 1000', () => {
      const micros = 8123;
      const expectedMicros = 123;
      const expectedMilliseconds = MILLISECONDS + 8;

      date.setMicroseconds(micros);
      assert.strictEqual(date.getMicroseconds(), expectedMicros);
      assert.strictEqual(date.getUTCMilliseconds(), expectedMilliseconds);
    });

    it('should handle negative values', () => {
      const micros = -541;
      const expectedMicros = micros + 1000;
      const expectedMilliseconds = MILLISECONDS - 1;

      date.setMicroseconds(micros);
      assert.strictEqual(date.getMicroseconds(), expectedMicros);
      assert.strictEqual(date.getUTCMilliseconds(), expectedMilliseconds);
    });
  });

  describe('#setNanoseconds()', () => {
    it('should set the nanoseconds', () => {
      const nanos = 728;
      date.setNanoseconds(nanos);
      assert.strictEqual(date.getNanoseconds(), nanos);
    });

    it('should return the precise time string', () => {
      const fakeTimestamp = '123456789';
      sandbox.stub(date, 'setMicroseconds').returns(fakeTimestamp);

      const timestamp = date.setNanoseconds(0);
      assert.strictEqual(timestamp, fakeTimestamp);
    });

    it('should update the microseconds if nanos >= 1000', () => {
      const nanos = 7831;
      const expectedNanos = 831;
      const expectedMicros = MICROSECONDS + 7;

      date.setNanoseconds(nanos);
      assert.strictEqual(date.getNanoseconds(), expectedNanos);
      assert.strictEqual(date.getMicroseconds(), expectedMicros);
    });

    it('should handle negative values', () => {
      const nanos = -913;
      const expectedNanos = nanos + 1000;
      const expectedMicros = MICROSECONDS - 1;

      date.setNanoseconds(nanos);
      assert.strictEqual(date.getNanoseconds(), expectedNanos);
      assert.strictEqual(date.getMicroseconds(), expectedMicros);
    });
  });

  describe('#setPicoseconds()', () => {
    it('should set picoseconds correctly', () => {
      const date = new PreciseDate(TIME_STRING);
      date.setPicoseconds(999);
      assert.strictEqual(date.getPicoseconds(), 999);
    });

    it('should return the precise time string', () => {
      const fakeTimestamp = '123456789';
      sandbox.stub(date, 'setNanoseconds').returns(fakeTimestamp);

      const timestamp = date.setPicoseconds(0);
      assert.strictEqual(timestamp, fakeTimestamp);
    });

    it('should cascade overflow from setPicoseconds', () => {
      const date = new PreciseDate({seconds: SECS, nanos: 789});
      // 1000 picos = 1 nano
      // Current nanos: 789
      // New nanos should be 790
      date.setPicoseconds(1001);
      assert.strictEqual(date.getPicoseconds(), 1);
      assert.strictEqual(date.getNanoseconds(), 790);
    });

    it('should handle negative picoseconds', () => {
      const date = new PreciseDate({seconds: SECS, nanos: 789});
      // Current: ...789 nanos, 0 picos
      // set -1 pico -> ...788 nanos, 999 picos
      date.setPicoseconds(-1);
      assert.strictEqual(date.getPicoseconds(), 999);
      assert.strictEqual(date.getNanoseconds(), 788);
    });
  });

  describe('#setFullTime()', () => {
    let timeStub: sinon.SinonStub<[number], number>;
    let nanosStub: sinon.SinonStub<[number], string>;

    beforeEach(() => {
      timeStub = sandbox.stub(date, 'setTime');
      nanosStub = sandbox.stub(date, 'setNanoseconds');
    });

    it('should set the correct values', () => {
      date.setFullTime(TIME_STRING);

      const [time] = timeStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(time, SECS * 1000);
      assert.strictEqual(nanos, NANOS);
    });

    it('should return the precise time string', () => {
      nanosStub.returns(TIME_STRING);

      const timestamp = date.setFullTime('0');
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should handle small time values', () => {
      const fakeTime = 1238123;
      date.setFullTime(fakeTime);

      const [time] = timeStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(time, 0);
      assert.strictEqual(nanos, fakeTime);
    });

    it('should handle negative time values', () => {
      const expectedTime = -SECS * 1000;
      const expectedNanos = -NANOS;
      date.setFullTime(`-${TIME_STRING}`);

      const [time] = timeStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(time, expectedTime);
      assert.strictEqual(nanos, expectedNanos);
    });

    it('should handle small negative time values', () => {
      const fakeTime = -123456789;
      date.setFullTime(fakeTime);

      const [time] = timeStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(Math.abs(time), 0);
      assert.strictEqual(nanos, fakeTime);
    });

    (hasNativeBigInt ? it : it.skip)('should accept a BigInt', () => {
      date.setFullTime(RealBigInt(TIME_STRING));

      const [time] = timeStub.lastCall.args;
      const [nanos] = nanosStub.lastCall.args;
      assert.strictEqual(time, SECS * 1000);
      assert.strictEqual(nanos, NANOS);
    });
  });

  describe('#setTime()', () => {
    it('should clear the microseconds and nanoseconds', () => {
      date.setTime(date.getTime());

      assert.strictEqual(date.getMicroseconds(), 0);
      assert.strictEqual(date.getNanoseconds(), 0);
    });

    it('should return the millisecond time', () => {
      const expectedTime = date.getTime();
      const time = date.setTime(expectedTime);

      assert.strictEqual(time, expectedTime);
    });
  });

  describe('#toISOString()', () => {
    it('should include the microseconds and nanoseconds', () => {
      const isoString = date.toISOString();
      assert.strictEqual(isoString, FULL_ISO_STRING);
    });

    it('should format to 12-digit fractional ISO string when picos > 0', () => {
      const PICO_ISO_STRING = '2019-01-12T00:30:35.123456789123Z';
      const date = new PreciseDate(PICO_ISO_STRING);
      assert.strictEqual(date.toISOString(), PICO_ISO_STRING);
    });

    it('should format to 9-digit fractional ISO string when picos == 0', () => {
      const NANO_ISO_STRING = '2019-01-12T00:30:35.123456789Z';
      const date = new PreciseDate(NANO_ISO_STRING);
      assert.strictEqual(date.getPicoseconds(), 0);
      assert.strictEqual(date.toISOString(), NANO_ISO_STRING);
    });
  });

  describe('#toStruct()', () => {
    it('should return the date as a struct', () => {
      const {seconds, nanos} = date.toStruct();
      assert.strictEqual(seconds, SECS);
      assert.strictEqual(nanos, NANOS);
    });

    it('should correctly return dates < Unix epoch', () => {
      const expectedSeconds = -SECS - 1;
      sandbox.stub(date, 'getTime').returns(-SECS * 1000);

      const {seconds, nanos} = date.toStruct();
      assert.strictEqual(seconds, expectedSeconds);
      assert.strictEqual(nanos, NANOS);
    });

    it('should correctly return (not so precise) dates < Unix epoch', () => {
      sandbox.stub(date, 'getTime').returns(-SECS * 1000);

      date.setUTCMilliseconds(0);
      date.setMicroseconds(0);
      date.setNanoseconds(0);

      const {seconds, nanos} = date.toStruct();
      assert.strictEqual(seconds, -SECS);
      assert.strictEqual(nanos, 0);
    });
  });

  describe('#toTuple()', () => {
    it('should return the date as a tuple', () => {
      sandbox.stub(date, 'toStruct').returns({seconds: SECS, nanos: NANOS});

      const [seconds, nanos] = date.toTuple();
      assert.strictEqual(seconds, SECS);
      assert.strictEqual(nanos, NANOS);
    });
  });

  describe('.parseFull()', () => {
    it('should parse a string timestamp', () => {
      const timestamp = PreciseDate.parseFull(TIME_STRING);
      assert.strictEqual(timestamp, TIME_STRING);
    });

    (hasNativeBigInt ? it : it.skip)('should parse a BigInt', () => {
      const bigIntTimestamp = RealBigInt(TIME_STRING);
      const timestamp = PreciseDate.parseFull(bigIntTimestamp);
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should parse a date struct', () => {
      const struct = {seconds: SECS, nanos: NANOS};
      const timestamp = PreciseDate.parseFull(struct);
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should parse a protobuf Timestamp', () => {
      const expectedTimestamp = `${SECS}000000000`;
      const seconds = new FakeLong(SECS);
      const timestamp = PreciseDate.parseFull({seconds});
      assert.strictEqual(timestamp, expectedTimestamp);
    });

    it('should parse a date tuples', () => {
      const tuple: DateTuple = [SECS, NANOS];
      const timestamp = PreciseDate.parseFull(tuple);
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should parse a complete ISO string', () => {
      const timestamp = PreciseDate.parseFull(FULL_ISO_STRING);
      assert.strictEqual(timestamp, TIME_STRING);
    });

    it('should parse a micro precise ISO string', () => {
      const microIsoString = '2019-01-12T00:30:35.381101Z';
      const expectedTimestamp = `${SECS}${MILLISECONDS}${MICROSECONDS}000`;
      const timestamp = PreciseDate.parseFull(microIsoString);
      assert.strictEqual(timestamp, expectedTimestamp);
    });

    it('should get millisecond precision for anything else', () => {
      const date = new Date(FULL_ISO_STRING);
      const expectedTimestamp = `${date.getTime()}000000`;
      const timestamp = PreciseDate.parseFull(date.toISOString());
      assert.strictEqual(timestamp, expectedTimestamp);
    });

    it('should parse 12-digit fractional ISO string', () => {
      const PICO_ISO_STRING = '2019-01-12T00:30:35.123456789123Z';
      const date = new PreciseDate(PICO_ISO_STRING);
      assert.strictEqual(date.getPicoseconds(), 123);
      assert.strictEqual(date.getNanoseconds(), 789);
      assert.strictEqual(date.getMicroseconds(), 456);
      assert.strictEqual(date.getUTCMilliseconds(), 123);
    });
  });

  describe('.fullUTC()', () => {
    it('should throw an error if BigInt is unavailable', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any).BigInt;

      assert.throws(() => PreciseDate.fullUTC(), NO_BIG_INT_ERR);
    });

    it('should accept microseconds and nanoseconds', () => {
      const expectedTimestamp = new FakeBigInt(TIME_STRING);
      const dateFields = [
        YEAR,
        MONTH,
        DAY,
        HOURS,
        MINUTES,
        SECONDS,
        MILLISECONDS,
        MICROSECONDS,
        NANOSECONDS,
      ];

      sandbox
        .stub(PreciseDate, 'fullUTCString')
        .withArgs(...dateFields)
        .returns(TIME_STRING);

      const timestamp = PreciseDate.fullUTC(...dateFields);
      assert.deepStrictEqual(timestamp, expectedTimestamp);
    });
  });

  describe('.fullUTCString()', () => {
    it('should accept microseconds and nanoseconds', () => {
      const utcDate = PreciseDate.fullUTCString(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
        date.getMicroseconds(),
        date.getNanoseconds(),
      );

      assert.deepStrictEqual(utcDate, date.getFullTimeString());
    });
  });
});
