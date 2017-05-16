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

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var split = require('split-array-stream');
var through = require('through2');
var util = require('@google-cloud/common').util;

function FakeGrpcService() {}

function FakePartialResultStream() {
  this.calledWith_ = arguments;
}

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'TransactionRequest') {
      return;
    }

    promisified = true;
    assert.strictEqual(options, undefined);
    util.promisifyAll(Class, options);
  }
});

var fakeCodec = {
  encode: util.noop
};

describe('TransactionRequest', function() {
  var TransactionRequest;
  var transactionRequest;

  before(function() {
    TransactionRequest = proxyquire('../src/transaction-request.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      },
      './codec.js': fakeCodec,
      './partial-result-stream.js': FakePartialResultStream
    });
  });

  beforeEach(function() {
    FakeGrpcService.encodeValue_ = util.noop;
    fakeCodec.encode = util.noop;
    transactionRequest = new TransactionRequest();
    transactionRequest.api = {
      Spanner: {
        commit: function() {
          return util.noop;
        },
        streamingRead: function() {
          return util.noop;
        }
      }
    };
  });

  describe('instantiation', function() {
    it('should localize the transaction options', function() {
      var UNFORMATTED_OPTIONS = {
        b: 'b'
      };

      var FORMATTED_OPTIONS = {
        a: 'a'
      };

      var formatTimestamp = TransactionRequest.formatTimestampOptions_;

      TransactionRequest.formatTimestampOptions_ = function(options) {
        assert.strictEqual(options, UNFORMATTED_OPTIONS);
        return FORMATTED_OPTIONS;
      };

      var transaction = new TransactionRequest(UNFORMATTED_OPTIONS);

      assert.strictEqual(transaction.options, FORMATTED_OPTIONS);
      TransactionRequest.formatTimestampOptions_ = formatTimestamp;
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('formatTimestampOptions_', function() {
    it('should format all the options', function() {
      var options = {
        strong: true,
        minReadTimestamp: new Date('2016-12-04'),
        maxStaleness: 10,
        readTimestamp: new Date('2016-12-05'),
        exactStaleness: 11,
        returnReadTimestamp: true
      };

      var expected = {
        strong: true,
        minReadTimestamp: {
          seconds: 1480809600,
          nanos: 0
        },
        maxStaleness: {
          seconds: 10,
          nanos: 0
        },
        readTimestamp: {
          seconds: 1480896000,
          nanos: 0
        },
        exactStaleness: {
          seconds: 11,
          nanos: 0
        },
        returnReadTimestamp: true
      };

      var formatted = TransactionRequest.formatTimestampOptions_(options);
      assert.deepEqual(formatted, expected);
    });
  });

  describe('fromProtoTimestamp_', function() {
    it('should format into a date object', function() {
      var now = new Date();

      var protoTimestamp = {
        seconds: Math.floor(now.getTime() / 1000),
        nanos: now.getMilliseconds() * 1e6
      };

      var date = TransactionRequest.fromProtoTimestamp_(protoTimestamp);

      assert.deepEqual(date, now);
    });
  });

  describe('createReadStream', function() {
    var TABLE = 'table-name';
    var QUERY = {};

    it('should accept a query object', function(done) {
      var query = {
        a: 'b',
        c: 'd'
      };

      var expectedReqOpts = extend({}, query, {
        table: TABLE
      });

      transactionRequest.requestStream = function(options) {
        assert.deepEqual(options.reqOpts, expectedReqOpts);
        done();
      };

      var stream = transactionRequest.createReadStream(TABLE, query);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    it('should set the transaction id', function(done) {
      var ID = 'abc';

      transactionRequest.transaction = true;
      transactionRequest.id = ID;

      var expectedReqOpts = {
        table: TABLE,
        transaction: {
          id: ID
        }
      };

      transactionRequest.requestStream = function(options) {
        assert.deepEqual(options.reqOpts, expectedReqOpts);
        done();
      };

      var stream = transactionRequest.createReadStream(TABLE, {});
      var makeRequestFn = stream.calledWith_[0];

      makeRequestFn();
    });

    describe('query.keys', function() {
      it('should encode and map input to keySet.keys[].values', function(done) {
        var query = {
          keys: [
            'key',
            ['composite', 'key']
          ]
        };

        var encodedValue = {};
        var numEncodeRequests = 0;

        fakeCodec.encode = function(key) {
          numEncodeRequests++;

          switch (numEncodeRequests) {
            case 1: {
              assert.strictEqual(key, query.keys[0]);
              break;
            }
            case 2: {
              assert.strictEqual(key, query.keys[1][0]);
              break;
            }
            case 3: {
              assert.strictEqual(key, query.keys[1][1]);
              break;
            }
          }

          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          var expectedKeys = [
            {
              values: [
                encodedValue
              ]
            },
            {
              values: [
                encodedValue,
                encodedValue
              ]
            }
          ];

          assert.deepStrictEqual(options.reqOpts.keySet.keys, expectedKeys);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should accept just a key', function(done) {
        var query = 'key';

        var encodedValue = {};
        fakeCodec.encode = function(key) {
          assert.strictEqual(key, query);
          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(
            options.reqOpts.keySet.keys[0].values[0],
            encodedValue
          );
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should accept just an array of keys', function(done) {
        var query = ['key'];

        var encodedValue = {};
        fakeCodec.encode = function(key) {
          assert.strictEqual(key, query[0]);
          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(
            options.reqOpts.keySet.keys[0].values[0],
            encodedValue
          );
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should arrify query.keys', function(done) {
        var query = {
          keys: 'key'
        };

        var encodedValue = {};
        fakeCodec.encode = function(key) {
          assert.strictEqual(key, query.keys);
          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(
            options.reqOpts.keySet.keys[0].values[0],
            encodedValue
          );
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should remove keys property from request object', function(done) {
        var query = {
          keys: ['key']
        };

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.keys, undefined);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });
    });

    describe('query.ranges', function() {
      it('should encode/map the inputs', function(done) {
        var query = {
          ranges: [{
            startOpen: 'key',
            endClosed: ['composite', 'key']
          }]
        };

        var encodedValue = {};
        var numEncodeRequests = 0;

        fakeCodec.encode = function(key) {
          var keys = ['key', 'composite', 'key'];

          assert.strictEqual(key, keys[numEncodeRequests++]);
          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          var expectedRanges = [
            {
              startOpen: {
                values: [encodedValue]
              },
              endClosed: {
                values: [encodedValue, encodedValue]
              }
            }
          ];

          assert.strictEqual(numEncodeRequests, 3);
          assert.deepStrictEqual(options.reqOpts.keySet.ranges, expectedRanges);
          done();
        }

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should arrify query.ranges', function(done) {
        var query = {
          ranges: [{
            startOpen: 'start',
            endClosed: 'end'
          }]
        };

        var encodedValue = {};
        var numEncodeRequests = 0;

        fakeCodec.encode = function(key) {
          assert.strictEqual(key, ['start', 'end'][numEncodeRequests++]);
          return encodedValue;
        };

        transactionRequest.requestStream = function(options) {
          var expectedRanges = [
            {
              startOpen: {
                values: [encodedValue]
              },
              endClosed: {
                values: [encodedValue]
              }
            }
          ];

          assert.strictEqual(numEncodeRequests, 2);
          assert.deepStrictEqual(options.reqOpts.keySet.ranges, expectedRanges);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should remove the ranges property from the query', function(done) {
        var query = {
          ranges: [{
            startOpen: 'start',
            endClosed: 'end'
          }]
        };

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.ranges, undefined);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });
    });

    describe('PartialResultStream', function() {
      it('should return PartialResultStream', function() {
        var stream = transactionRequest.createReadStream(TABLE, QUERY);
        assert(stream instanceof FakePartialResultStream);
      });

      it('should make and return the correct request', function(done) {
        var query = {
          a: 'b'
        };

        var expectedQuery = extend({}, query, {
          table: TABLE,
          resumeToken: undefined
        });

        transactionRequest.requestStream = function(options) {
          assert.deepEqual(options.reqOpts, expectedQuery);
          assert.strictEqual(options.method(), util.noop);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should assign a resumeToken to the request', function(done) {
        var resumeToken = 'resume-token';

        transactionRequest.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.resumeToken, resumeToken);
          done();
        };

        var stream = transactionRequest.createReadStream(TABLE, QUERY);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn(resumeToken);
      });
    });
  });

  describe('deleteRows', function() {
    var TABLE = 'table-name';
    var KEYS = [
      'key',
      ['composite', 'key']
    ];

    var ENCODED_VALUE = {
      encoded: true
    };

    var EXPECTED_MUTATION = {
      delete: {
        table: TABLE,
        keySet: {
          keys: [
            {
              values: [
                ENCODED_VALUE
              ]
            },
            {
              values: [
                ENCODED_VALUE,
                ENCODED_VALUE
              ]
            }
          ]
        }
      }
    };

    beforeEach(function() {
      fakeCodec.encode = function() {
        return ENCODED_VALUE;
      };
    });

    it('should correctly make and return the request', function() {
      var requestReturnValue = {};

      function callback() {}

      var numEncodeRequests = 0;

      fakeCodec.encode = function(key) {
        numEncodeRequests++;

        switch (numEncodeRequests) {
          case 1: {
            assert.strictEqual(key, KEYS[0]);
            break;
          }
          case 2: {
            assert.strictEqual(key, KEYS[1][0]);
            break;
          }
          case 3: {
            assert.strictEqual(key, KEYS[1][1]);
            break;
          }
        }

        return ENCODED_VALUE;
      };

      var expectedReqOpts = {
        singleUseTransaction: {
          readWrite: {}
        },
        mutations: [
          EXPECTED_MUTATION
        ]
      };

      transactionRequest.request = function(options, callback_) {
        assert.deepEqual(options.reqOpts, expectedReqOpts);
        assert.strictEqual(callback_, callback);
        assert.strictEqual(options.method(), util.noop);
        return requestReturnValue;
      };

      var returnValue = transactionRequest.deleteRows(TABLE, KEYS, callback);
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should push the request to the queue if a transaction', function(done) {
      transactionRequest.transaction = true;

      transactionRequest.queue_ = function(mutation) {
        assert.deepEqual(mutation, EXPECTED_MUTATION);
        done();
      };

      transactionRequest.deleteRows(TABLE, KEYS, assert.ifError);
    });

    it('should accept just a key', function(done) {
      transactionRequest.transaction = true;

      var encodedValue = {
        encoded: true
      };
      fakeCodec.encode = function() {
        return encodedValue;
      };

      transactionRequest.queue_ = function(mutation) {
        var expectedSingleMutation = extend(true, {}, EXPECTED_MUTATION);

        // Pop out the second mutation. We're only expecting one.
        expectedSingleMutation.delete.keySet.keys.pop();

        assert.deepEqual(mutation, expectedSingleMutation);

        done();
      };

      transactionRequest.deleteRows(TABLE, KEYS[0], assert.ifError);
    });
  });

  describe('insert', function() {
    it('should call and return mutate_ method', function() {
      var mutateReturnValue = {};

      var table = 'table-name';
      var keyVals = [];
      function callback() {}

      transactionRequest.mutate_ = function(method, table_, keyVals_, cb) {
        assert.strictEqual(method, 'insert');
        assert.strictEqual(table_, table);
        assert.strictEqual(keyVals_, keyVals);
        assert.strictEqual(cb, callback);
        return mutateReturnValue;
      };

      var returnValue = transactionRequest.insert(table, keyVals, callback);
      assert.strictEqual(returnValue, mutateReturnValue);
    });
  });

  describe('read', function() {
    it('should call and collect results from a stream', function(done) {
      var table = 'table-name';
      var keyVals = [];

      var rows = [{}, {}];

      transactionRequest.createReadStream = function(table_, keyVals_) {
        assert.strictEqual(table_, table);
        assert.strictEqual(keyVals_, keyVals);

        var stream = through.obj();

        setImmediate(function() {
          split(rows, stream, function() {
            stream.end();
          });
        });

        return stream;
      };

      transactionRequest.read(table, keyVals, function(err, rows_) {
        assert.ifError(err);
        assert.deepEqual(rows_, rows);
        done();
      });
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      transactionRequest.createReadStream = function() {
        var stream = through.obj();

        setImmediate(function() {
          stream.destroy(error);
        });

        return stream;
      };

      transactionRequest.read('table-name', [], function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('replace', function() {
    it('should call and return mutate_ method', function() {
      var mutateReturnValue = {};

      var table = 'table-name';
      var keyVals = [];
      function callback() {}

      transactionRequest.mutate_ = function(method, table_, keyVals_, cb) {
        assert.strictEqual(method, 'replace');
        assert.strictEqual(table_, table);
        assert.strictEqual(keyVals_, keyVals);
        assert.strictEqual(cb, callback);
        return mutateReturnValue;
      };

      var returnValue = transactionRequest.replace(table, keyVals, callback);
      assert.strictEqual(returnValue, mutateReturnValue);
    });
  });

  describe('update', function() {
    it('should call and return mutate_ method', function() {
      var mutateReturnValue = {};

      var table = 'table-name';
      var keyVals = [];
      function callback() {}

      transactionRequest.mutate_ = function(method, table_, keyVals_, cb) {
        assert.strictEqual(method, 'update');
        assert.strictEqual(table_, table);
        assert.strictEqual(keyVals_, keyVals);
        assert.strictEqual(cb, callback);
        return mutateReturnValue;
      };

      var returnValue = transactionRequest.update(table, keyVals, callback);
      assert.strictEqual(returnValue, mutateReturnValue);
    });
  });

  describe('upsert', function() {
    it('should call and return mutate_ method', function() {
      var mutateReturnValue = {};

      var table = 'table-name';
      var keyVals = [];
      function callback() {}

      transactionRequest.mutate_ = function(method, table_, keyVals_, cb) {
        assert.strictEqual(method, 'insertOrUpdate');
        assert.strictEqual(table_, table);
        assert.strictEqual(keyVals_, keyVals);
        assert.strictEqual(cb, callback);
        return mutateReturnValue;
      };

      var returnValue = transactionRequest.upsert(table, keyVals, callback);
      assert.strictEqual(returnValue, mutateReturnValue);
    });
  });

  describe('mutate_', function() {
    var METHOD = 'methodName';
    var TABLE = 'table-name';
    var KEYVALS = { key: 'value' };

    var ENCODED_VALUE = {
      encoded: true
    };

    var EXPECTED_MUTATION = {};
    EXPECTED_MUTATION[METHOD] = {
      table: TABLE,
      columns: Object.keys(KEYVALS),
      values: [
        [
          ENCODED_VALUE
        ]
      ]
    };

    beforeEach(function() {
      fakeCodec.encode = function() {
        return ENCODED_VALUE;
      };
    });

    it('should correctly make and return the request', function() {
      var requestReturnValue = {};

      function callback() {}

      fakeCodec.encode = function(key) {
        assert.strictEqual(key, KEYVALS[Object.keys(KEYVALS)[0]]);
        return ENCODED_VALUE;
      };

      var expectedReqOpts = {
        singleUseTransaction: {
          readWrite: {}
        },
        mutations: [
          EXPECTED_MUTATION
        ]
      };

      transactionRequest.request = function(options, callback_) {
        assert.deepEqual(options.reqOpts, expectedReqOpts);
        assert.strictEqual(callback_, callback);
        assert.strictEqual(options.method(), util.noop);
        return requestReturnValue;
      };

      var returnValue = transactionRequest.mutate_(
        METHOD,
        TABLE,
        KEYVALS,
        callback
      );
      assert.strictEqual(returnValue, requestReturnValue);
    });

    it('should push the request to the queue if a transaction', function(done) {
      transactionRequest.transaction = true;

      transactionRequest.queue_ = function(mutation) {
        assert.deepEqual(mutation, EXPECTED_MUTATION);
        done();
      };

      transactionRequest.mutate_(METHOD, TABLE, KEYVALS, assert.ifError);
    });

    it('should accept just a key', function(done) {
      transactionRequest.transaction = true;

      transactionRequest.queue_ = function(mutation) {
        assert.deepEqual(mutation, EXPECTED_MUTATION);
        done();
      };

      transactionRequest.mutate_(METHOD, TABLE, KEYVALS, assert.ifError);
    });
  });
});
