// Copyright 2016 Google LLC
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
import {beforeEach, describe, it, afterEach} from 'mocha';
import * as Long from 'long';
import * as sinon from 'sinon';

import {IMutateRowRequest, Mutation, IMutation} from '../src/mutation.js';

const sandbox = sinon.createSandbox();

describe('Bigtable/Mutation', () => {
  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    const fakeData = {
      key: 'a',
      method: 'b',
      data: 'c',
    };

    it('should localize all the mutation properties', () => {
      const mutation = new Mutation(fakeData);

      assert.strictEqual(mutation.key, fakeData.key);
      assert.strictEqual(mutation.method, fakeData.method);
      assert.strictEqual(mutation.data, fakeData.data);
    });
  });

  describe('convertFromBytes', () => {
    describe('isPossibleNumber', () => {
      it('should convert a base64 encoded number when true', () => {
        const num = 10;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded, {
          isPossibleNumber: true,
        });

        assert.strictEqual(num, decoded);
      });

      it('should convert a base64 encoded MIN_SAFE_INTEGER number when true', () => {
        const num = Number.MIN_SAFE_INTEGER;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded, {
          isPossibleNumber: true,
        });

        assert.strictEqual(num, decoded);
      });

      it('should convert a base64 encoded MAX_SAFE_INTEGER number when true', () => {
        const num = Number.MAX_SAFE_INTEGER;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded, {
          isPossibleNumber: true,
        });

        assert.strictEqual(num, decoded);
      });

      it('should not convert a base64 encoded smaller than MIN_SAFE_INTEGER number when true', () => {
        const num = Number.MIN_SAFE_INTEGER - 100;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded, {
          isPossibleNumber: true,
        });

        assert.notStrictEqual(num, decoded);
      });

      it('should not convert a base64 encoded larger than MAX_SAFE_INTEGER number when true', () => {
        const num = Number.MAX_SAFE_INTEGER + 100;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded, {
          isPossibleNumber: true,
        });

        assert.notStrictEqual(num, decoded);
      });

      it('should not convert a base64 encoded number when false', () => {
        const num = 10;
        const encoded = Buffer.from(Long.fromNumber(num).toBytesBE()).toString(
          'base64',
        );
        const decoded = Mutation.convertFromBytes(encoded);

        assert.notStrictEqual(num, decoded);
      });
    });

    it('should convert a base64 encoded string', () => {
      const message = 'Hello!';
      const encoded = Buffer.from(message).toString('base64');
      const decoded = Mutation.convertFromBytes(encoded);

      assert.strictEqual(message, decoded);
    });

    it('should allow using a custom encoding scheme', () => {
      const message = 'æ';
      const encoded = Buffer.from(message, 'binary').toString('base64');
      const decoded = Mutation.convertFromBytes(encoded, {
        userOptions: {encoding: 'binary'},
      });

      assert.strictEqual(message, decoded);
    });

    it('should return a buffer if decode is set to false', () => {
      const message = 'Hello!';
      const encoded = Buffer.from(message).toString('base64');
      const userOptions = {decode: false};
      const decoded = Mutation.convertFromBytes(encoded, {
        userOptions,
      });

      assert(decoded instanceof Buffer);
      assert.strictEqual(decoded.toString(), message);
    });

    it('should not create a new Buffer needlessly', function () {
      if (process.platform === 'win32') {
        // stubbing Buffer.from does not work on Windows since sinon 15.1.0
        // TODO(@alexander-fenster): investigate and report or fix
        this.skip();
      }
      const message = 'Hello!';
      const encoded = Buffer.from(message);
      const stub = sandbox.stub(Buffer, 'from');
      const decoded = Mutation.convertFromBytes(encoded);
      assert.strictEqual(stub.called, false);
      assert.strictEqual(decoded.toString(), message);
    });
  });

  describe('convertToBytes', () => {
    it('should not re-wrap buffers', () => {
      const buf = Buffer.from('hello');
      const encoded = Mutation.convertToBytes(buf);

      assert.strictEqual(buf, encoded);
    });

    it('should pack numbers into int64 values', () => {
      const num = 10;
      const encoded = Mutation.convertToBytes(num);
      const decoded = Long.fromBytes(encoded as number[]).toNumber();

      assert.strictEqual(num, decoded);
    });

    it('should wrap the value in a buffer', () => {
      const message = 'Hello!';
      const encoded = Mutation.convertToBytes(message);

      assert(encoded instanceof Buffer);
      assert.strictEqual(encoded.toString(), message);
    });

    it('should simply return the value if it cannot wrap it', () => {
      const message = true;
      const notEncoded = Mutation.convertToBytes(message);

      assert(!(notEncoded instanceof Buffer));
      assert.strictEqual(message, notEncoded);
    });
  });

  describe('createTimeRange', () => {
    it('should create a time range', () => {
      const timestamp = Date.now();
      const dateObj = new Date(timestamp);
      const range = Mutation.createTimeRange(dateObj, dateObj);
      assert.strictEqual(range.startTimestampMicros, timestamp * 1000);
      assert.strictEqual(range.endTimestampMicros, timestamp * 1000);
    });
  });

  describe('encodeSetCell', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let convertCalls: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fakeTime = new Date('2018-1-1') as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const realTimestamp = new Date() as any;

    beforeEach(() => {
      sandbox.stub(global, 'Date').returns(fakeTime);
      convertCalls = [];
      sandbox.stub(Mutation, 'convertToBytes').callsFake(value => {
        convertCalls.push(value);
        return value;
      });
    });

    it('should encode a setCell mutation', () => {
      const fakeMutation = {
        follows: {
          gwashington: 1,
          alincoln: 1,
        },
      };

      const cells = Mutation.encodeSetCell(fakeMutation);

      assert.strictEqual(cells.length, 2);

      assert.deepStrictEqual(cells, [
        {
          setCell: {
            familyName: 'follows',
            columnQualifier: 'gwashington',
            timestampMicros: fakeTime * 1000, // Convert ms to μs
            value: 1,
          },
        },
        {
          setCell: {
            familyName: 'follows',
            columnQualifier: 'alincoln',
            timestampMicros: fakeTime * 1000, // Convert ms to μs
            value: 1,
          },
        },
      ]);

      assert.strictEqual(convertCalls.length, 4);
      assert.deepStrictEqual(convertCalls, ['gwashington', 1, 'alincoln', 1]);
    });

    it('should optionally accept a timestamp', () => {
      const fakeMutation = {
        follows: {
          gwashington: {
            value: 1,
            timestamp: realTimestamp,
          },
        },
      };

      const cells = Mutation.encodeSetCell(fakeMutation);

      assert.deepStrictEqual(cells, [
        {
          setCell: {
            familyName: 'follows',
            columnQualifier: 'gwashington',
            timestampMicros: realTimestamp * 1000, // Convert ms to μs
            value: 1,
          },
        },
      ]);

      assert.strictEqual(convertCalls.length, 2);
      assert.deepStrictEqual(convertCalls, ['gwashington', 1]);
    });

    it('should accept buffers', () => {
      const val = Buffer.from('hello');
      const fakeMutation = {
        follows: {
          gwashington: val,
        },
      };

      const cells = Mutation.encodeSetCell(fakeMutation);

      assert.deepStrictEqual(cells, [
        {
          setCell: {
            familyName: 'follows',
            columnQualifier: 'gwashington',
            timestampMicros: fakeTime * 1000, // Convert ms to μs
            value: val,
          },
        },
      ]);

      assert.strictEqual(convertCalls.length, 2);
      assert.deepStrictEqual(convertCalls, ['gwashington', val]);
    });
  });

  describe('encodeDelete', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let convertCalls: any[] = [];

    beforeEach(() => {
      convertCalls = [];
      sandbox.stub(Mutation, 'convertToBytes').callsFake(value => {
        convertCalls.push(value);
        return value;
      });
    });

    it('should create a delete row mutation', () => {
      const mutation = Mutation.encodeDelete();
      assert.deepStrictEqual(mutation, [
        {
          deleteFromRow: {},
        },
      ]);
    });

    it('should array-ify the input', () => {
      const fakeKey = 'follows';
      const mutation = Mutation.encodeDelete(fakeKey);

      assert.deepStrictEqual(mutation, [
        {
          deleteFromFamily: {
            familyName: fakeKey,
          },
        },
      ]);
    });

    it('should create a delete family mutation', () => {
      const fakeColumnName = {
        family: 'followed',
        qualifier: null,
      };
      sandbox.stub(Mutation, 'parseColumnName').returns(fakeColumnName);
      const mutation = Mutation.encodeDelete(['follows']);
      assert.deepStrictEqual(mutation, [
        {
          deleteFromFamily: {
            familyName: fakeColumnName.family,
          },
        },
      ]);
    });

    it('should create a delete column mutation', () => {
      const mutation = Mutation.encodeDelete(['follows:gwashington']);
      assert.deepStrictEqual(mutation, [
        {
          deleteFromColumn: {
            familyName: 'follows',
            columnQualifier: 'gwashington',
            timeRange: undefined,
          },
        },
      ]);

      assert.strictEqual(convertCalls.length, 1);
      assert.strictEqual(convertCalls[0], 'gwashington');
    });

    it('should optionally accept a timerange for column requests', () => {
      const createTimeRange = Mutation.createTimeRange;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const timeCalls: any[] = [];
      const fakeTimeRange = {a: 'a'};

      const fakeMutationData = {
        column: 'follows:gwashington',
        time: {
          start: 1,
          end: 2,
        },
      };

      Mutation.createTimeRange = (start, end) => {
        timeCalls.push({
          start,
          end,
        });
        return fakeTimeRange;
      };

      const mutation = Mutation.encodeDelete(fakeMutationData);

      assert.deepStrictEqual(mutation, [
        {
          deleteFromColumn: {
            familyName: 'follows',
            columnQualifier: 'gwashington',
            timeRange: fakeTimeRange,
          },
        },
      ]);

      assert.strictEqual(timeCalls.length, 1);
      assert.deepStrictEqual(timeCalls[0], fakeMutationData.time);

      Mutation.createTimeRange = createTimeRange;
    });
  });

  describe('parse', () => {
    let toProtoCalled = false;
    const fakeData = {a: 'a'} as IMutateRowRequest;

    beforeEach(() => {
      sandbox.stub(Mutation.prototype, 'toProto').callsFake(() => {
        toProtoCalled = true;
        return fakeData;
      });
    });

    it('should create a new mutation object and parse it', () => {
      const fakeMutationData = {
        key: 'a',
        method: 'b',
        data: 'c',
      } as Mutation;
      const mutation = Mutation.parse(fakeMutationData);
      assert.strictEqual(toProtoCalled, true);
      assert.strictEqual(mutation, fakeData);
    });

    it('should parse a pre-existing mutation object', () => {
      const data = new Mutation({
        key: 'a',
        method: 'b',
        data: [],
      });

      const mutation = Mutation.parse(data);

      assert.strictEqual(toProtoCalled, true);
      assert.strictEqual(mutation, fakeData);
    });
  });

  describe('parseColumnName', () => {
    it('should parse a column name', () => {
      const parsed = Mutation.parseColumnName('a:b');

      assert.strictEqual(parsed.family, 'a');
      assert.strictEqual(parsed.qualifier, 'b');
    });

    it('should parse a family name', () => {
      const parsed = Mutation.parseColumnName('a');

      assert.strictEqual(parsed.family, 'a');
      assert.strictEqual(parsed.qualifier, undefined);
    });

    it('should parse a qualifier name with colons', () => {
      const parsed = Mutation.parseColumnName('a:b:c');

      assert.strictEqual(parsed.family, 'a');
      assert.strictEqual(parsed.qualifier, 'b:c');
    });
  });

  describe('toProto', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let convertCalls: any[] = [];

    beforeEach(() => {
      sandbox.stub(Mutation, 'convertToBytes').callsFake(value => {
        convertCalls.push(value);
        return value;
      });
      convertCalls = [];
    });

    it('should encode set cell mutations when method is insert', () => {
      const fakeEncoded = [{a: 'a'}];
      const data = {
        key: 'a',
        method: 'insert',
        data: [],
      };
      const mutation = new Mutation(data);
      sandbox.stub(Mutation, 'encodeSetCell').callsFake(_data => {
        assert.strictEqual(_data, data.data);
        return fakeEncoded;
      });
      const mutationProto = mutation.toProto();
      assert.strictEqual(mutationProto.mutations, fakeEncoded);
      assert.strictEqual(mutationProto.rowKey, data.key);
      assert.strictEqual(convertCalls[0], data.key);
    });

    it('should encode delete mutations when method is delete', () => {
      const fakeEncoded = [{b: 'b'}] as {} as IMutation[];
      const data = {
        key: 'b',
        method: 'delete',
        data: [],
      };
      sandbox.stub(Mutation, 'encodeDelete').callsFake(_data => {
        assert.strictEqual(_data, data.data);
        return fakeEncoded;
      });
      const mutation = new Mutation(data).toProto();
      assert.strictEqual(mutation.mutations, fakeEncoded);
      assert.strictEqual(mutation.rowKey, data.key);
      assert.strictEqual(convertCalls[0], data.key);
    });
  });
});
