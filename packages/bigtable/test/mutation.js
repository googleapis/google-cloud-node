/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var Int64 = require('node-int64');
var Mutation = require('../src/mutation.js');
var sinon = require('sinon').sandbox.create();

describe('Bigtable/Mutation', function() {

  afterEach(function() {
    sinon.restore();
  });

  describe('instantiation', function() {
    var fakeData = {
      key: 'a',
      method: 'b',
      data: 'c'
    };

    it('should localize all the mutation properties', function() {
      var mutation = new Mutation(fakeData);

      assert.strictEqual(mutation.key, fakeData.key);
      assert.strictEqual(mutation.method, fakeData.method);
      assert.strictEqual(mutation.data, fakeData.data);
    });
  });

  describe('convertFromBytes', function() {
    it('should convert a base64 encoded number', function() {
      var num = 10;
      var encoded = new Int64(num).toBuffer().toString('base64');
      var decoded = Mutation.convertFromBytes(encoded);

      assert.strictEqual(num, decoded);
    });

    it('should convert a base64 encoded string', function() {
      var message = 'Hello!';
      var encoded = new Buffer(message).toString('base64');
      var decoded = Mutation.convertFromBytes(encoded);

      assert.strictEqual(message, decoded);
    });

    it('should return a buffer if decode is set to false', function() {
      var message = 'Hello!';
      var encoded = new Buffer(message).toString('base64');
      var decoded = Mutation.convertFromBytes(encoded, {
        decode: false
      });

      assert(decoded instanceof Buffer);
      assert.strictEqual(decoded.toString(), message);
    });
  });

  describe('convertToBytes', function() {
    it('should not re-wrap buffers', function() {
      var buf = new Buffer('hello');
      var encoded = Mutation.convertToBytes(buf);

      assert.strictEqual(buf, encoded);
    });

    it('should pack numbers into int64 values', function() {
      var num = 10;
      var encoded = Mutation.convertToBytes(num);
      var decoded = new Int64(encoded).toNumber();

      assert.strictEqual(num, decoded);
    });

    it('should wrap the value in a buffer', function() {
      var message = 'Hello!';
      var encoded = Mutation.convertToBytes(message);

      assert(encoded instanceof Buffer);
      assert.strictEqual(encoded.toString(), message);
    });

    it('should simply return the value if it cannot wrap it', function() {
      var message = true;
      var notEncoded = Mutation.convertToBytes(message);

      assert(!(notEncoded instanceof Buffer));
      assert.strictEqual(message, notEncoded);
    });
  });

  describe('createTimeRange', function() {
    it('should create a time range', function() {
      var timestamp = Date.now();
      var dateObj = new Date(timestamp);
      var range = Mutation.createTimeRange(dateObj, dateObj);

      assert.strictEqual(range.startTimestampMicros, timestamp * 1000);
      assert.strictEqual(range.endTimestampMicros, timestamp * 1000);
    });
  });

  describe('encodeSetCell', function() {
    var convert;
    var convertCalls = [];

    before(function() {
      convert = Mutation.convertToBytes;
      Mutation.convertToBytes = function(value) {
        convertCalls.push(value);
        return value;
      };
    });

    after(function() {
      Mutation.convertToBytes = convert;
    });

    beforeEach(function() {
      convertCalls = [];
    });

    it('should encode a setCell mutation', function() {
      var fakeMutation = {
        follows: {
          gwashington: 1,
          alincoln: 1
        }
      };

      var cells = Mutation.encodeSetCell(fakeMutation);

      assert.strictEqual(cells.length, 2);

      assert.deepEqual(cells, [{
        setCell: {
          familyName: 'follows',
          columnQualifier: 'gwashington',
          timestampMicros: -1,
          value: 1
        }
      }, {
        setCell: {
          familyName: 'follows',
          columnQualifier: 'alincoln',
          timestampMicros: -1,
          value: 1
        }
      }]);

      assert.strictEqual(convertCalls.length, 4);
      assert.deepEqual(convertCalls, ['gwashington', 1, 'alincoln', 1]);
    });

    it('should optionally accept a timestamp', function() {
      var timestamp = Date.now();
      var fakeMutation = {
        follows: {
          gwashington: {
            value: 1,
            timestamp: new Date(timestamp)
          }
        }
      };

      var cells = Mutation.encodeSetCell(fakeMutation);

      assert.deepEqual(cells, [{
        setCell: {
          familyName: 'follows',
          columnQualifier: 'gwashington',
          timestampMicros: timestamp * 1000, // Convert ms to ms
          value: 1
        }
      }]);

      assert.strictEqual(convertCalls.length, 2);
      assert.deepEqual(convertCalls, ['gwashington', 1]);
    });

    it('should accept buffers', function() {
      var val = new Buffer('hello');
      var fakeMutation = {
        follows: {
          gwashington: val
        }
      };

      var cells = Mutation.encodeSetCell(fakeMutation);

      assert.deepEqual(cells, [{
        setCell: {
          familyName: 'follows',
          columnQualifier: 'gwashington',
          timestampMicros: -1,
          value: val
        }
      }]);

      assert.strictEqual(convertCalls.length, 2);
      assert.deepEqual(convertCalls, ['gwashington', val]);
    });
  });

  describe('encodeDelete', function() {
    var convert;
    var convertCalls = [];

    before(function() {
      convert = Mutation.convertToBytes;
      Mutation.convertToBytes = function(value) {
        convertCalls.push(value);
        return value;
      };
    });

    after(function() {
      Mutation.convertToBytes = convert;
    });

    beforeEach(function() {
      convertCalls = [];
    });

    it('should create a delete row mutation', function() {
      var mutation = Mutation.encodeDelete();

      assert.deepEqual(mutation, [{
        deleteFromRow: {}
      }]);
    });

    it('should array-ify the input', function() {
      var fakeKey = 'follows';
      var mutation = Mutation.encodeDelete(fakeKey);

      assert.deepEqual(mutation, [{
        deleteFromFamily: {
          familyName: fakeKey
        }
      }]);
    });

    it('should create a delete family mutation', function() {
      var fakeColumnName = {
        family: 'followed',
        qualifier: null
      };

      sinon.stub(Mutation, 'parseColumnName', function() {
        return fakeColumnName;
      });

      var mutation = Mutation.encodeDelete(['follows']);

      assert.deepEqual(mutation, [{
        deleteFromFamily: {
          familyName: fakeColumnName.family
        }
      }]);
    });

    it('should create a delete column mutation', function() {
      var mutation = Mutation.encodeDelete(['follows:gwashington']);

      assert.deepEqual(mutation, [{
        deleteFromColumn: {
          familyName: 'follows',
          columnQualifier: 'gwashington',
          timeRange: undefined
        }
      }]);

      assert.strictEqual(convertCalls.length, 1);
      assert.strictEqual(convertCalls[0], 'gwashington');
    });

    it('should optionally accept a timerange for column requests', function() {
      var createTimeRange = Mutation.createTimeRange;
      var timeCalls = [];
      var fakeTimeRange = { a: 'a' };

      var fakeMutationData = {
        column: 'follows:gwashington',
        time: {
          start: 1,
          end: 2
        }
      };

      Mutation.createTimeRange = function(start, end) {
        timeCalls.push({
          start: start,
          end: end
        });
        return fakeTimeRange;
      };

      var mutation = Mutation.encodeDelete(fakeMutationData);

      assert.deepEqual(mutation, [{
        deleteFromColumn: {
          familyName: 'follows',
          columnQualifier: 'gwashington',
          timeRange: fakeTimeRange
        }
      }]);

      assert.strictEqual(timeCalls.length, 1);
      assert.deepEqual(timeCalls[0], fakeMutationData.time);

      Mutation.createTimeRange = createTimeRange;
    });
  });

  describe('parse', function() {
    var toProto;
    var toProtoCalled = false;
    var fakeData = { a: 'a' };

    before(function() {
      toProto = Mutation.prototype.toProto;
      Mutation.prototype.toProto = function() {
        toProtoCalled = true;
        return fakeData;
      };
    });

    after(function() {
      Mutation.prototype.toProto = toProto;
    });

    it('should create a new mutation object and parse it', function() {
      var fakeMutationData = {
        key: 'a',
        method: 'b',
        data: 'c'
      };

      var mutation = Mutation.parse(fakeMutationData);

      assert.strictEqual(toProtoCalled, true);
      assert.strictEqual(mutation, fakeData);
    });

    it('should parse a pre-existing mutation object', function() {
      var data = new Mutation({
        key: 'a',
        method: 'b',
        data: []
      });

      var mutation = Mutation.parse(data);

      assert.strictEqual(toProtoCalled, true);
      assert.strictEqual(mutation, fakeData);
    });
  });

  describe('parseColumnName', function() {
    it('should parse a column name', function() {
      var parsed = Mutation.parseColumnName('a:b');

      assert.strictEqual(parsed.family, 'a');
      assert.strictEqual(parsed.qualifier, 'b');
    });

    it('should parse a family name', function() {
      var parsed = Mutation.parseColumnName('a');

      assert.strictEqual(parsed.family, 'a');
      assert.strictEqual(parsed.qualifier, undefined);
    });
  });

  describe('toProto', function() {
    var convert;
    var convertCalls = [];

    before(function() {
      convert = Mutation.convertToBytes;
      Mutation.convertToBytes = function(value) {
        convertCalls.push(value);
        return value;
      };
    });

    after(function() {
      Mutation.convertToBytes = convert;
    });

    beforeEach(function() {
      convertCalls = [];
    });

    it('should encode set cell mutations when method is insert', function() {
      var fakeEncoded = [{ a: 'a' }];
      var data = {
        key: 'a',
        method: 'insert',
        data: []
      };

      var mutation = new Mutation(data);

      Mutation.encodeSetCell = function(_data) {
        assert.strictEqual(_data, data.data);
        return fakeEncoded;
      };

      var mutationProto = mutation.toProto();

      assert.strictEqual(mutationProto.mutations, fakeEncoded);
      assert.strictEqual(mutationProto.rowKey, data.key);
      assert.strictEqual(convertCalls[0], data.key);
    });

    it('should encode delete mutations when method is delete', function() {
      var fakeEncoded = [{ b: 'b' }];
      var data = {
        key: 'b',
        method: 'delete',
        data: []
      };

      Mutation.encodeDelete = function(_data) {
        assert.strictEqual(_data, data.data);
        return fakeEncoded;
      };

      var mutation = new Mutation(data).toProto();

      assert.strictEqual(mutation.mutations, fakeEncoded);
      assert.strictEqual(mutation.rowKey, data.key);
      assert.strictEqual(convertCalls[0], data.key);
    });
  });

});
