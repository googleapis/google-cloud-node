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

  describe('createDeadlineError_', function() {
    it('should augment the error', function() {
      var originalError = {
        code: 10,
        message: 'Transaction aborted.',
        a: 'a',
        b: 'b'
      };

      var expectedError = {
        code: 4,
        message: 'Deadline for Transaction exceeded.',
        a: 'a',
        b: 'b'
      };

      var formattedError = Transaction.createDeadlineError_(originalError);

      assert.deepEqual(expectedError, formattedError);
      assert.notStrictEqual(originalError, formattedError);
    });
  });

  describe('createRetryDelay_', function() {
    it('should return exponential retry delay', function() {
      [0, 1].forEach(function(retries) {
        var min = (Math.pow(2, retries) * 1000);
        var max = (Math.pow(2, retries) * 1000) + 1000;

        var time = Transaction.createRetryDelay_(retries);

        assert(time >= min && time <= max);
      });
    });
  });

  describe('begin', function() {
    var OPTIONS = {
      readOnly: true,
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

      transaction.readOnly = true;
      transaction.request = function(config) {
        assert.deepEqual(config.reqOpts, EXPECTED_REQ_OPTS);
        assert.strictEqual(config.method(), util.noop);
        done();
      };

      transaction.begin(assert.ifError);
    });

    it('should not require options', function(done) {
      transaction.readOnly = false;
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

      it('should set the timestamp if applicable', function(done) {
        var fakeProtoTimestamp = {};
        var fakeDate = new Date();

        transaction.request = function(config, callback) {
          callback(null, extend({
            readTimestamp: fakeProtoTimestamp
          }, API_RESPONSE));
        };

        FakeTransactionRequest.fromProtoTimestamp_ = function(value) {
          assert.strictEqual(value, fakeProtoTimestamp);
          return fakeDate;
        };

        transaction.begin(function(err) {
          assert.ifError(err);
          assert.strictEqual(transaction.readTimestamp, fakeDate);
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

    it('should optionally execute a callback', function(done) {
      transaction.end(done);
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

  describe('request', function() {
    it('should make the correct request', function(done) {
      var config = {
        reqOpts: {
          a: 'b',
          c: 'd',
          gaxOptions: {}
        },
        method: function(reqOpts, gaxOptions) {
          var expectedReqOpts = extend({}, config.reqOpts, {
            session: transaction.session.formattedName_
          });

          delete expectedReqOpts.gaxOptions;

          assert.deepEqual(reqOpts, expectedReqOpts);
          assert.strictEqual(gaxOptions, config.reqOpts.gaxOptions);
          done();
        }
      };

      transaction.request(config, assert.ifError);
    });

    it('should pass the response back to the callback', function(done) {
      var resp = {};

      var config = {
        reqOpts: {},
        method: function(reqOpts, gaxOptions, callback) {
          callback(null, resp);
        }
      };

      transaction.request(config, function(err, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(apiResponse, resp);
        done();
      });
    });

    describe('aborted errors', function() {
      var abortedError = { code: 10 };
      var resp = {};
      var config;

      beforeEach(function() {
        config = {
          method: function(reqOpts, gaxOptions, callback) {
            callback(abortedError, resp);
          }
        };
      });

      it('should retry the txn if abort occurs', function(done) {
        transaction.retry_ = done;

        transaction.shouldRetry_ = function(err) {
          assert.strictEqual(err, abortedError);
          return true;
        };

        transaction.runFn_ = function() {
          done(new Error('Should not have been called.'));
        };

        transaction.request(config, function() {
          done(new Error('Should not have been called.'));
        });
      });

      it('should return a deadline error if not retrying', function(done) {
        transaction.retry_ = function() {
          done(new Error('Should not have been called.'));
        };

        transaction.shouldRetry_ = function(err) {
          assert.strictEqual(err, abortedError);
          return false;
        };

        var createDeadlineError = Transaction.createDeadlineError_;
        var deadlineError = {};

        Transaction.createDeadlineError_ = function(err) {
          assert.strictEqual(err, abortedError);
          return deadlineError;
        };

        transaction.runFn_ = function(err) {
          assert.strictEqual(err, deadlineError);

          Transaction.createDeadlineError_ = createDeadlineError;
          done();
        };

        transaction.request(config, function() {
          done(new Error('Should not have been called.'));
        });
      });

      it('should return the aborted error if no runFn', function(done) {
        transaction.runFn_ = null;

        transaction.request(config, function(err) {
          assert.strictEqual(err, abortedError);
          done();
        });
      });
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

    it('should support gaxOptions', function(done) {
      var fakeGaxOptions = {};

      var fakeReqOpts = {
        a: 'a',
        gaxOptions: fakeGaxOptions
      };

      var config = {
        reqOpts: fakeReqOpts,
        method: function(reqOpts, gaxOptions) {
          assert.strictEqual(reqOpts.gaxOptions, undefined);
          assert.deepEqual(gaxOptions, fakeGaxOptions);
          done();
        }
      };

      transaction.requestStream(config);
    });

    describe('runTransaction mode', function() {
      var fakeStream;

      var config = {
        reqOpts: {},
        method: function() {
          return fakeStream;
        }
      };

      beforeEach(function() {
        fakeStream = through.obj();
        transaction.runFn_ = function() {};
      });

      it('should pipe the request stream to the user stream', function(done) {
        var fakeData = {
          a: 'a'
        };

        transaction.requestStream(config)
          .on('error', done)
          .on('data', function(data) {
            assert.strictEqual(data, fakeData);
            done();
          });

        fakeStream.push(fakeData);
      });

      it('should emit non-abort errors to the user stream', function(done) {
        var error = new Error('ohnoes');
        var userStream = transaction.requestStream(config);

        userStream.destroy = function(err) {
          assert.strictEqual(err, error);
          done();
        };

        fakeStream.emit('error', error);
      });

      it('should retry the transaction', function(done) {
        var error = { code: 10 };
        var stream;

        transaction.shouldRetry_ = function(err) {
          assert.strictEqual(err, error);
          return true;
        };

        transaction.runFn_ = done; // should not be called

        transaction.retry_ = function() {
          assert(stream._destroyed);
          done();
        };

        stream = transaction.requestStream(config);
        stream.on('error', done); // should not be called

        fakeStream.emit('error', error);
      });

      it('should send a deadline error to the runFn', function(done) {
        var error = { code: 10 };
        var stream;

        var deadlineError = {};
        var createDeadlineError = Transaction.createDeadlineError_;

        Transaction.createDeadlineError_ = function(err) {
          assert.strictEqual(err, error);
          return deadlineError;
        };

        transaction.shouldRetry_ = function(err) {
          assert.strictEqual(err, error);
          return false;
        };

        transaction.retry_ = done; // should not be called

        transaction.runFn_ = function(err) {
          assert.strictEqual(err, deadlineError);
          assert(stream._destroyed);

          Transaction.createDeadlineError_ = createDeadlineError;
          done();
        };

        stream = transaction.requestStream(config);
        stream.on('error', done); // should not be called

        fakeStream.emit('error', error);
      });
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

  describe('retry_', function() {
    it('should begin the transaction', function(done) {
      transaction.begin = function() {
        done();
      };

      transaction.retry_();
    });

    it('should return an error if transaction cannot begin', function(done) {
      var error = new Error('Error.');

      transaction.begin = function(callback) {
        callback(error);
      };

      transaction.runFn_ = function(err) {
        assert.strictEqual(err, error);
        done();
      };

      transaction.retry_();
    });

    describe('transaction began successfully', function() {
      beforeEach(function() {
        transaction.runFn_ = function() {};

        transaction.begin = function(callback) {
          callback();
        };
      });

      it('should increment the retry counter', function(done) {
        transaction.retries_ = 0;

        transaction.begin = function(callback) {
          callback(null);
          setImmediate(done);
        };

        transaction.retry_();
        assert.strictEqual(transaction.retries_, 1);
      });

      it('should empty queued mutations', function() {
        transaction.queuedMutations_ = [{}];
        transaction.retry_();

        assert.deepEqual(transaction.queuedMutations_, []);
      });

      it('should execute run function after timeout', function(done) {
        var createRetryDelay = Transaction.createRetryDelay_;
        var fakeDelay = 1123123;

        Transaction.createRetryDelay_ = function(retries) {
          assert.strictEqual(retries, transaction.retries_);
          return fakeDelay;
        };

        var _setTimeout = global.setTimeout;

        global.setTimeout = function(cb, timeout) {
          assert.strictEqual(timeout, fakeDelay);
          cb();
        };

        transaction.runFn_ = function(err, txn) {
          assert.strictEqual(err, null);
          assert.strictEqual(txn, transaction);

          Transaction.createRetryDelay_ = createRetryDelay;
          global.setTimeout = _setTimeout;
          done();
        };

        transaction.retry_();
      });
    });
  });

  describe('shouldRetry_', function() {
    var abortedError = { code: 10 };

    it('should not retry if non-aborted error', function() {
      var shouldRetry = transaction.shouldRetry_({ code: 4});
      assert.strictEqual(shouldRetry, false);
    });

    it('should not retry if runFn is missing', function() {
      transaction.runFn_ = null;

      var shouldRetry = transaction.shouldRetry_(abortedError);
      assert.strictEqual(shouldRetry, false);
    });

    it('should not retry if deadline is exceeded', function() {
      transaction.timeout_ = 1;
      transaction.beginTime_ = Date.now() - 2;

      var shouldRetry = transaction.shouldRetry_(abortedError);
      assert.strictEqual(shouldRetry, false);
    });

    it('should retry if all conditions are met', function() {
      transaction.runFn_ = function() {};
      transaction.timeout_ = 1000;
      transaction.beginTime_ = Date.now() - 2;

      var shouldRetry = transaction.shouldRetry_(abortedError);
      assert.strictEqual(shouldRetry, true);
    });
  });
});
