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

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Transaction') {
      return;
    }

    promisified = true;
    assert.strictEqual(options, undefined);
    util.promisifyAll(Class, options);
  }
});

function FakeGrpcService() {}

function FakePartialResultStream() {
  this.calledWith_ = arguments;
}

function FakeTransactionRequest(options) {
  this.calledWith_ = arguments;
  this.options = options;
}

var fakeCodec = {
  encode: util.noop
};

describe('Transaction', function() {
  var TransactionCached;
  var Transaction;
  var transaction;

  var SESSION = {
    api: {},
    formattedName_: 'formatted-session-name'
  };

  var ID = 'transaction-id';

  before(function() {
    Transaction = proxyquire('../src/transaction.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      },
      './codec.js': fakeCodec,
      './partial-result-stream.js': FakePartialResultStream,
      './transaction-request.js': FakeTransactionRequest
    });

    TransactionCached = extend({}, Transaction);
  });

  beforeEach(function() {
    FakeGrpcService.objToStruct_ = util.noop;

    SESSION.api = {
      Spanner: {
        beginTransaction: function() {
          return util.noop;
        },
        commit: function() {
          return util.noop;
        },
        executeStreamingSql: function() {
          return util.noop;
        },
        rollback: function() {
          return util.noop;
        }
      }
    };

    extend(Transaction, TransactionCached);
    transaction = new Transaction(SESSION);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the API', function() {
      assert.strictEqual(transaction.api, SESSION.api);
    });

    it('should localize the session', function() {
      assert.strictEqual(transaction.session, SESSION);
    });

    it('should set flag to identify as a Transaction object', function() {
      assert.strictEqual(transaction.transaction, true);
    });

    it('should initialize an empty queue', function() {
      assert.deepEqual(transaction.queuedMutations_, []);
    });

    it('should initialize retries to 0', function() {
      assert.strictEqual(transaction.retries_, 0);
    });

    it('should initialize a null run function', function() {
      assert.strictEqual(transaction.runFn_, null);
    });

    it('should inherit from TransactionRequest', function() {
      var OPTIONS = {};

      transaction = new Transaction(SESSION, OPTIONS);

      assert(transaction instanceof FakeTransactionRequest);
      assert(transaction.calledWith_[0], OPTIONS);
    });
  });

  describe('getRetryDelay_', function() {
    it('should return null if error object has no details', function() {
      var grpcError = {};

      assert.strictEqual(Transaction.getRetryDelay_(grpcError), null);
    });

    it('should return null if it cannot locate the retry info', function() {
      var grpcError = {
        details: []
      };

      assert.strictEqual(Transaction.getRetryDelay_(grpcError), null);
    });

    it('should return the correct retry delay', function() {
      var now = Date.now();

      var grpcError = {
        details: [
          {
            typeUrl: 'type-url/google.rpc.RetryInfo',
            retryDelay: {
              nanos: '100', // string to confirm it is parsed
              seconds: String(now) // string to confirm it is parsed
            }
          }
        ]
      };

      var expectedDelay = now * 1000 + 100 / 1e6;

      assert.strictEqual(Transaction.getRetryDelay_(grpcError), expectedDelay);
    });
  });

  describe('begin', function() {
    var OPTIONS = {
      boundOptions: true,
      returnReadTimestamp: true
    };

    var EXPECTED_REQ_OPTS = {
      options: {
        readOnly: OPTIONS
      }
    };

    it('should make the correct request', function(done) {
      var transaction = new Transaction(SESSION, OPTIONS);

      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, EXPECTED_REQ_OPTS);
        assert.strictEqual(config.method(), util.noop);
        done();
      };

      transaction.begin(assert.ifError);
    });

    it('should not require options', function(done) {
      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, {
          options: {
            readWrite: {}
          }
        });
        done();
      };

      transaction.begin(assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      transaction.request = function(config, callback) {
        callback(error);
      };

      transaction.begin(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('success', function() {
      var API_RESPONSE = {
        id: 'transaction-id'
      };

      beforeEach(function() {
        transaction.request = function(config, callback) {
          callback(null, API_RESPONSE);
        };
      });

      it('should update ID', function(done) {
        transaction.begin(function(err) {
          assert.ifError(err);
          assert.strictEqual(transaction.id, API_RESPONSE.id);
          done();
        });
      });

      it('should update metadata', function(done) {
        transaction.begin(function(err) {
          assert.ifError(err);
          assert.strictEqual(transaction.metadata, API_RESPONSE);
          done();
        });
      });

      it('should execute callback with API response', function(done) {
        transaction.begin(function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('commit', function() {
    var QUEUED_MUTATIONS = [
      {}
    ];

    beforeEach(function() {
      transaction.queuedMutations_ = QUEUED_MUTATIONS;
    });

    it('should make the correct request with an ID', function(done) {
      transaction.id = 'transaction-id';

      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, {
          transactionId: transaction.id,
          mutations: QUEUED_MUTATIONS
        });

        assert.strictEqual(config.method(), util.noop);

        done();
      };

      transaction.commit(assert.ifError);
    });

    it('should make the correct request without an ID', function(done) {
      delete transaction.id;

      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, {
          singleUseTransaction: {
            readWrite: {}
          },
          mutations: QUEUED_MUTATIONS
        });
        done();
      };

      transaction.commit(assert.ifError);
    });

    describe('error', function() {
      var ERROR = new Error('Error.');
      var API_RESPONSE = {};

      beforeEach(function() {
        transaction.request = function(config, callback) {
          callback(ERROR, API_RESPONSE);
        };
      });

      it('should execute callback with error and API response', function(done) {
        transaction.commit(function(err, apiResponse) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });

      describe('aborted', function() {
        var ABORTED_ERROR = {
          code: 10
        };

        var DELAY = 100;

        beforeEach(function() {
          transaction.runFn_ = util.noop;

          transaction.request = function(config, callback) {
            callback(ABORTED_ERROR, API_RESPONSE);
          };
        });

        it('should retry after a delay set by the error', function(done) {
          Transaction.getRetryDelay_ = function(err) {
            assert.strictEqual(err, ABORTED_ERROR);
            return DELAY;
          };

          transaction.retry_ = function(delay) {
            assert.strictEqual(delay, DELAY);
            done();
          };

          transaction.commit(assert.ifError);
        });

        it('should retry after an exponential delay', function(done) {
          Transaction.getRetryDelay_ = function() {
            return false;
          };

          transaction.createRetryDelay_ = function() {
            return DELAY;
          };

          transaction.retry_ = function(delay) {
            assert.strictEqual(delay, DELAY);
            done();
          };

          transaction.commit(assert.ifError);
        });

        it('should execute callback if retry failed', function(done) {
          var error = new Error('Error.');

          transaction.retry_ = function(delay, callback) {
            callback(error);
          };

          transaction.commit(function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });
    });

    describe('success', function() {
      var API_RESPONSE = {};

      beforeEach(function() {
        transaction.request = function(config, callback) {
          callback(null, API_RESPONSE);
        };
      });

      it('should destroy the transaction', function(done) {
        transaction.end = done;
        transaction.commit(assert.ifError);
      });

      it('should execute callback with the API response', function(done) {
        transaction.commit(function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('request', function() {
    it('should make the correct request', function(done) {
      var config = {
        reqOpts: {
          a: 'b',
          c: 'd'
        },
        method: function(reqOpts, callback) {
          var expectedReqOpts = extend({}, config.reqOpts, {
            session: transaction.session.formattedName_
          });

          assert.deepEqual(reqOpts, expectedReqOpts);
          callback(); // done()
        }
      };

      transaction.request(config, done);
    });
  });

  describe('requestStream', function() {
    it('should make the correct request', function() {
      var methodReturnValue = {};

      var config = {
        reqOpts: {
          a: 'b',
          c: 'd'
        },
        method: function(reqOpts) {
          var expectedReqOpts = extend({}, config.reqOpts, {
            session: transaction.session.formattedName_
          });

          assert.deepEqual(reqOpts, expectedReqOpts);

          return methodReturnValue;
        }
      };

      var returnValue = transaction.requestStream(config);
      assert.strictEqual(returnValue, methodReturnValue);
    });
  });

  describe('rollback', function() {
    beforeEach(function() {
      transaction.id = ID;
    });

    it('should throw if a transaction ID is not set', function() {
      delete transaction.id;

      assert.throws(function() {
        transaction.rollback(assert.ifError);
      }, /Transaction ID is unknown, nothing to rollback\./);
    });

    it('should make the correct request', function(done) {
      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, {
          transactionId: transaction.id
        });

        assert.strictEqual(config.method(), util.noop);

        done();
      };

      transaction.rollback(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      transaction.request = function(config, callback) {
        callback(error, apiResponse);
      };

      transaction.end = function() {
        done(new Error('Should not be destroyed.'));
      };

      transaction.rollback(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should destroy the transaction if rollback worked', function(done) {
      var apiResponse = {};

      transaction.request = function(config, callback) {
        callback(null, apiResponse);
      };

      var destroyed = false;
      transaction.end = function() {
        destroyed = true;
      };

      transaction.rollback(function(err, apiResponse_) {
        assert.strictEqual(err, null);
        assert.strictEqual(apiResponse_, apiResponse);
        assert.strictEqual(destroyed, true);
        done();
      });
    });
  });

  describe('run', function() {
    it('should call and collect results from a stream', function(done) {
      var query = {};

      var rows = [{}, {}];

      transaction.runStream = function(query_) {
        assert.strictEqual(query_, query);

        var stream = through.obj();

        setImmediate(function() {
          split(rows, stream, function() {
            stream.end();
          });
        });

        return stream;
      };

      transaction.run(query, function(err, rows_) {
        assert.ifError(err);
        assert.deepEqual(rows_, rows);
        done();
      });
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      transaction.runStream = function() {
        var stream = through.obj();

        setImmediate(function() {
          stream.destroy(error);
        });

        return stream;
      };

      transaction.run({}, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return a promise when callback is not specified', function() {
      var query = {};

      var rows = [{}, {}];

      transaction.runStream = function(query_) {
        assert.strictEqual(query_, query);

        var stream = through.obj();

        setImmediate(function() {
          split(rows, stream, function() {
            stream.end();
          });
        });

        return stream;
      };

      return transaction.run(query).then(function(args) {
        assert.deepEqual(args[0], rows);
      });
    });
  });

  describe('runStream', function() {
    var QUERY = {
      sql: 'SELECT * FROM table',
      a: 'b',
      c: 'd'
    };

    var OPTIONS = {
      timestampBoundOptions: true
    };

    var EXPECTED_REQ_OPTS = extend({}, QUERY, {
      transaction: {
        id: ID
      }
    });

    beforeEach(function() {
      transaction = new Transaction(SESSION, OPTIONS);
      transaction.id = ID;
    });

    it('should accept a query object', function(done) {
      transaction.requestStream = function(options) {
        assert.deepEqual(options.reqOpts, EXPECTED_REQ_OPTS);
        assert.strictEqual(options.method(), util.noop);
        done();
      };

      var stream = transaction.runStream(QUERY, OPTIONS);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    it('should accept a query string', function(done) {
      transaction.requestStream = function(options) {
        assert.deepEqual(options.reqOpts.sql, EXPECTED_REQ_OPTS.sql);
        done();
      };

      var stream = transaction.runStream(QUERY.sql, OPTIONS);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    describe('query parameters', function() {
      beforeEach(function() {
        fakeCodec.encode = function() {};
      });

      it('should encode query parameters', function(done) {
        var query = {
          sql: QUERY,
          params: {
            test: 'value'
          }
        };

        var encodedValue = {};

        fakeCodec.encode = function(field) {
          assert.strictEqual(field, query.params.test);
          return encodedValue;
        };

        transaction.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.params.fields.test, encodedValue);
          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should attempt to guess the parameter types', function(done) {
        var params = {
          unspecified: null,
          bool: true,
          int64: 1234,
          float64: 2.2,
          timestamp: new Date(),
          date: new fakeCodec.SpannerDate(),
          string: 'abc',
          bytes: new Buffer('abc')
        };

        var types = Object.keys(params);

        var query = {
          sql: QUERY,
          params: params
        };

        var getTypeCallCount = 0;

        fakeCodec.getType = function(field) {
          var type = types[getTypeCallCount++];

          assert.strictEqual(params[type], field);
          return type;
        };

        transaction.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            unspecified: {
              code: 0
            },
            bool: {
              code: 1
            },
            int64: {
              code: 2
            },
            float64: {
              code: 3
            },
            timestamp: {
              code: 4
            },
            date: {
              code: 5
            },
            string: {
              code: 6
            },
            bytes: {
              code: 7
            }
          });

          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should not overwrite existing type definitions', function(done) {
        var query = {
          params: {
            test: 123
          },
          types: {
            test: 'string'
          }
        };

        fakeCodec.getType = function() {
          throw new Error('Should not be called');
        };

        transaction.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 6
            }
          });
          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should set type to unspecified for unknown types', function(done) {
        var query = {
          params: {
            test: 'abc'
          },
          types: {
            test: 'unicorn'
          }
        };

        fakeCodec.getType = function() {
          throw new Error('Should not be called');
        };

        transaction.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 0
            }
          });

          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should attempt to guess array types', function(done) {
        var query = {
          params: {
            test: ['abc']
          }
        };

        fakeCodec.getType = function() {
          return {
            type: 'array',
            child: 'string'
          };
        };

        transaction.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 8,
              arrayElementType: {
                code: 6
              }
            }
          });

          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should set the child to unspecified if unsure', function(done) {
        var query = {
          params: {
            test: [null]
          }
        };

        fakeCodec.getType = function() {
          return {
            type: 'array',
            child: 'unicorn'
          };
        };

        transaction.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 8,
              arrayElementType: {
                code: 0
              }
            }
          });

          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });

      it('should delete the type map from the request options', function(done) {
        var query = {
          params: {
            test: 'abc'
          },
          types: {
            test: 'string'
          }
        };

        transaction.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.types, undefined);
          done();
        };

        var stream = transaction.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });
    });

    it('should not require a transaction ID', function(done) {
      delete transaction.id;

      transaction.requestStream = function(options) {
        var expectedReqOpts = extend(true, {}, EXPECTED_REQ_OPTS, {
          transaction: {
            singleUse: {
              readOnly: OPTIONS
            }
          }
        });

        delete expectedReqOpts.transaction.id;

        assert.deepEqual(options.reqOpts, expectedReqOpts);

        done();
      };

      var stream = transaction.runStream(QUERY, OPTIONS);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    it('should not require timestamp bounds', function(done) {
      delete transaction.id;
      delete transaction.options;

      transaction.requestStream = function(options) {
        var expectedReqOpts = extend(true, {}, EXPECTED_REQ_OPTS, {
          transaction: {
            singleUse: {
              readOnly: {}
            }
          }
        });

        delete expectedReqOpts.transaction.id;

        assert.deepEqual(options.reqOpts, expectedReqOpts);

        done();
      };

      var stream = transaction.runStream(QUERY);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    it('should return PartialResultStream', function() {
      var stream = transaction.runStream(QUERY, OPTIONS);
      assert(stream instanceof FakePartialResultStream);
    });

    it('should assign a resumeToken to the request', function(done) {
      var resumeToken = 'resume-token';

      transaction.requestStream = function(options) {
        assert.strictEqual(options.reqOpts.resumeToken, resumeToken);
        done();
      };

      var stream = transaction.runStream(QUERY, OPTIONS);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn(resumeToken);
    });
  });

  describe('createRetryDelay_', function() {
    var MAX_RETRIES = 2;

    it('should return null if equal to the retry limit', function() {
      transaction.retries_ = MAX_RETRIES;

      assert.strictEqual(transaction.createRetryDelay_(), null);
    });

    it('should return null if over the retry limit', function() {
      transaction.retries_ = MAX_RETRIES + 1;

      assert.strictEqual(transaction.createRetryDelay_(), null);
    });


    it('should return exponential retry delay', function() {
      [0, 1].forEach(function(retries) {
        transaction.retries_ = retries;

        var min = (Math.pow(2, retries) * 1000);
        var max = (Math.pow(2, retries) * 1000) + 1000;

        var time = transaction.createRetryDelay_();

        assert(time >= min && time <= max);
      });
    });
  });

  describe('end', function() {
    it('should empty the queue', function() {
      transaction.queuedMutations_ = [{}, {}];

      transaction.end();

      assert.strictEqual(transaction.queuedMutations_.length, 0);
    });

    it('should reset the retry counter', function() {
      transaction.retries_ = 10;

      transaction.end();

      assert.strictEqual(transaction.retries_, 0);
    });

    it('should nullify the run function', function() {
      transaction.runFn_ = function() {};

      transaction.end();

      assert.strictEqual(transaction.runFn_, null);
    });

    it('should delete the ID', function() {
      transaction.id = 'transaction-id';

      transaction.end();

      assert.strictEqual(transaction.id, undefined);
    });
  });

  describe('queue_', function() {
    it('should push a mutation object into the queue array', function() {
      var mutation = {};

      assert.deepEqual(transaction.queuedMutations_, []);

      transaction.queue_(mutation);

      assert.strictEqual(transaction.queuedMutations_[0], mutation);
    });
  });

  describe('retry_', function() {
    var TIMEOUT = 1000;

    it('should increment the retry counter', function() {
      transaction.retries_ = 0;

      transaction.retry_(TIMEOUT);

      assert.strictEqual(transaction.retries_, 1);
    });

    it('should begin the transaction', function(done) {
      transaction.begin = function() {
        done();
      };

      transaction.retry_(TIMEOUT);
    });

    it('should return an error if transaction cannot begin', function(done) {
      var error = new Error('Error.');

      transaction.begin = function(callback) {
        callback(error);
      };

      transaction.retry_(TIMEOUT, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('transaction began successfully', function() {
      beforeEach(function() {
        transaction.runFn_ = function() {};

        transaction.begin = function(callback) {
          callback();
        };
      });

      it('should execute callback without an error', function(done) {
        transaction.retry_(TIMEOUT, done);
      });

      it('should empty queued mutations', function(done) {
        transaction.queuedMutations_ = [{}];

        transaction.retry_(TIMEOUT, function(err) {
          assert.ifError(err);
          assert.deepEqual(transaction.queuedMutations_, []);
          done();
        });
      });

      it('should execute run function after timeout', function(done) {
        var now = Date.now();

        var lowerBoundsForHonoredTimeout = now + TIMEOUT - 100;
        var upperBoundsForHonoredTimeout = now + TIMEOUT + 100;

        transaction.runFn_ = function() {
          var calledAt = Date.now();

          assert(calledAt >= lowerBoundsForHonoredTimeout);
          assert(calledAt <= upperBoundsForHonoredTimeout);

          done();
        };

        transaction.retry_(TIMEOUT, assert.ifError);
      });
    });
  });

  describe('run_', function() {
    it('should set and execute the local run function', function() {
      var runReturnValue = {};

      function runFn() {
        return runReturnValue;
      }

      var returnValue = transaction.run_(runFn);
      assert.strictEqual(returnValue, runReturnValue);

      assert.strictEqual(transaction.runFn_, runFn);
    });
  });
});
