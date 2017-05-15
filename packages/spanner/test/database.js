/*!
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
var extend = require('extend');
var proxyquire = require('proxyquire');
var through = require('through2');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Database') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, [
      'delete',
      'getMetadata',
      'runTransaction',
      'table',
      'updateSchema',
      'session_'
    ]);
  }
});

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
}

function FakePartialResultStream() {
  this.calledWith_ = arguments;
}

function FakeSession() {
  this.calledWith_ = arguments;
}

function FakeSessionPool() {
  this.calledWith_ = arguments;
}

function FakeTable() {
  this.calledWith_ = arguments;
}

function FakeTransactionRequest() {
  this.calledWith_ = arguments;
}

var fakeCodec = {
  encode: util.noop,
  Int: function() {},
  Float: function() {},
  SpannerDate: function() {}
};

describe('Database', function() {
  var Database;
  var DatabaseCached;

  var INSTANCE = {
    api: {},
    formattedName_: 'instance-name'
  };

  var NAME = 'table-name';
  var DATABASE_FORMATTED_NAME = INSTANCE.formattedName_ + '/databases/' + NAME;

  var POOL_OPTIONS = {};

  var database;

  before(function() {
    Database = proxyquire('../src/database.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      },
      './codec.js': fakeCodec,
      './partial-result-stream.js': FakePartialResultStream,
      './session-pool.js': FakeSessionPool,
      './session.js': FakeSession,
      './table.js': FakeTable,
      './transaction-request.js': FakeTransactionRequest
    });
    DatabaseCached = extend({}, Database);
  });

  beforeEach(function() {
    fakeCodec.encode = util.noop;

    INSTANCE.api = {
      Spanner: {
        executeStreamingSql: function() {
          return util.noop;
        }
      },
      Database: {}
    };

    extend(Database, DatabaseCached);
    database = new Database(INSTANCE, NAME, POOL_OPTIONS);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the API', function() {
      assert.strictEqual(database.api, INSTANCE.api);
    });

    it('should format the name', function() {
      var formatName_ = Database.formatName_;
      var formattedName = 'formatted-name';

      Database.formatName_ = function(instanceName, name) {
        Database.formatName_ = formatName_;

        assert.strictEqual(instanceName, INSTANCE.formattedName_);
        assert.strictEqual(name, NAME);

        return formattedName;
      };

      var database = new Database(INSTANCE, NAME);
      assert(database.formattedName_, formattedName);
    });

    it('should create a SessionPool object', function() {
      assert(database.pool_ instanceof FakeSessionPool);
      assert.strictEqual(database.pool_.calledWith_[0], database);
      assert.strictEqual(database.pool_.calledWith_[1], POOL_OPTIONS);
    });

    it('should inherit from ServiceObject', function(done) {
      var database;
      var options = {};

      var instanceInstance = extend({}, INSTANCE, {
        createDatabase: function(name, options_, callback) {
          assert.strictEqual(name, database.formattedName_);
          assert.strictEqual(options_, options);
          callback(); // done()
        }
      });

      database = new Database(instanceInstance, NAME);
      assert(database instanceof FakeGrpcServiceObject);

      var calledWith = database.calledWith_[0];

      assert.strictEqual(calledWith.parent, instanceInstance);
      assert.strictEqual(calledWith.id, NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true
      });

      calledWith.createMethod(null, options, done);
    });
  });

  describe('formatName_', function() {
    it('should return the name if already formatted', function() {
      assert.strictEqual(
        Database.formatName_(INSTANCE.formattedName_, DATABASE_FORMATTED_NAME),
        DATABASE_FORMATTED_NAME
      );
    });

    it('should format the name', function() {
      var formattedName_ = Database.formatName_(INSTANCE.formattedName_, NAME);
      assert.strictEqual(formattedName_, DATABASE_FORMATTED_NAME);
    });
  });

  describe('close', function() {
    describe('success', function() {
      it('should close the database', function(done) {
        database.pool_ = {
          clear: function() {
            return Promise.resolve();
          }
        };

        database.close(done);
      });
    });

    describe('error', function() {
      it('should return the closing error', function(done) {
        var error = new Error('err.');

        database.pool_ = {
          clear: function() {
            return Promise.reject(error);
          }
        };

        database.close(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should provide a default error message', function(done) {
        database.pool_ = {
          clear: function() {
            return Promise.reject();
          }
        };

        database.close(function(err) {
          assert(err instanceof Error);
          assert.strictEqual(err.message,
            'Unable to close database connection.');
          done();
        });
      });
    });
  });

  describe('createTable', function() {
    var TABLE_NAME = 'table-name';
    var SCHEMA = 'CREATE TABLE `' + TABLE_NAME + '`';

    it('should call updateSchema', function(done) {
      database.updateSchema = function(schema) {
        assert.strictEqual(schema, SCHEMA);
        done();
      };

      database.createTable(SCHEMA, assert.ifError);
    });

    describe('error', function() {
      var ERROR = new Error('Error.');
      var API_RESPONSE = {};

      beforeEach(function() {
        database.updateSchema = function(name, callback) {
          callback(ERROR, null, API_RESPONSE);
        };
      });

      it('should execute callback with error & API response', function(done) {
        database.createTable(SCHEMA, function(err, table, op, apiResponse) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(table, null);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', function() {
      var OPERATION = {};
      var API_RESPONSE = {};

      beforeEach(function() {
        database.updateSchema = function(name, callback) {
          callback(null, OPERATION, API_RESPONSE);
        };
      });

      describe('table name parsing', function() {
        it('should recognize an escaped name', function(done) {
          database.table = function(name) {
            assert.strictEqual(name, TABLE_NAME);
            done();
          };

          database.createTable(SCHEMA, assert.ifError);
        });

        it('should recognize a non-escaped name', function(done) {
          database.table = function(name) {
            assert.strictEqual(name, TABLE_NAME);
            done();
          };

          database.createTable('CREATE TABLE ' + TABLE_NAME, assert.ifError);
        });
      });

      it('should exec callback with Table, op & API response', function(done) {
        var tableInstance = {};

        database.table = function(name) {
          assert.strictEqual(name, TABLE_NAME);
          return tableInstance;
        };

        database.createTable(SCHEMA, function(err, table, op, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(table, tableInstance);
          assert.strictEqual(op, OPERATION);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('delete', function() {
    it('should call and return the generated API', function() {
      var generatedReturnValue = {};

      database.api.Database = {
        dropDatabase: function(reqOpts, callback) {
          assert.deepEqual(reqOpts, {
            database: database.formattedName_
          });
          assert.strictEqual(callback, assert.ifError);
          return generatedReturnValue;
        }
      };

      var returnValue = database.delete(assert.ifError);
      assert.strictEqual(returnValue, generatedReturnValue);
    });
  });

  describe('getMetadata', function() {
    it('should call and return the generated API', function() {
      var generatedReturnValue = {};

      database.api.Database = {
        getDatabase: function(reqOpts, callback) {
          assert.deepEqual(reqOpts, {
            name: database.formattedName_
          });
          assert.strictEqual(callback, assert.ifError);
          return generatedReturnValue;
        }
      };

      var returnValue = database.getMetadata(assert.ifError);
      assert.strictEqual(returnValue, generatedReturnValue);
    });
  });

  describe('getSchema', function() {
    it('should call the generated API', function(done) {
      database.api.Database = {
        getDatabaseDdl: function(reqOpts) {
          assert.deepEqual(reqOpts, {
            database: database.formattedName_
          });
          done();
        }
      };

      database.getSchema(assert.ifError);
    });

    describe('error', function() {
      var ARG_1 = {};
      var STATEMENTS_ARG = null;
      var ARG_3 = {};
      var ARG_4 = {};
      var ARG_5 = {};

      beforeEach(function() {
        database.api.Database = {
          getDatabaseDdl: function(reqOpts, callback) {
            callback(ARG_1, STATEMENTS_ARG, ARG_3, ARG_4, ARG_5);
          }
        };
      });

      it('should return the arguments from the generated API', function(done) {
        database.getSchema(function(arg1, arg2, arg3, arg4, arg5) {
          assert.strictEqual(arg1, ARG_1);
          assert.strictEqual(arg2, STATEMENTS_ARG);
          assert.strictEqual(arg3, ARG_3);
          assert.strictEqual(arg4, ARG_4);
          assert.strictEqual(arg5, ARG_5);
          done();
        });
      });
    });

    describe('success', function() {
      var ARG_1 = {};
      var ARG_3 = {};
      var ARG_4 = {};
      var ARG_5 = {};

      var STATEMENTS_ARG = {
        statements: {}
      };

      beforeEach(function() {
        database.api.Database = {
          getDatabaseDdl: function(reqOpts, callback) {
            callback(ARG_1, STATEMENTS_ARG, ARG_3, ARG_4, ARG_5);
          }
        };
      });

      it('should return just the statements property', function(done) {
        database.getSchema(function(arg1, statements, arg3, arg4, arg5) {
          assert.strictEqual(arg1, ARG_1);
          assert.strictEqual(statements, STATEMENTS_ARG.statements);
          assert.strictEqual(arg3, ARG_3);
          assert.strictEqual(arg4, ARG_4);
          assert.strictEqual(arg5, ARG_5);
          done();
        });
      });
    });
  });

  describe('run', function() {
    var QUERY = 'SELECT query FROM query';

    var QUERY_STREAM;

    var ROW_1 = {};
    var ROW_2 = {};
    var ROW_3 = {};

    beforeEach(function() {
      QUERY_STREAM = through.obj();
      QUERY_STREAM.push(ROW_1);
      QUERY_STREAM.push(ROW_2);
      QUERY_STREAM.push(ROW_3);

      database.runStream = function() {
        return QUERY_STREAM;
      };
    });

    it('should correctly call runStream', function(done) {
      database.runStream = function(query, options) {
        assert.strictEqual(query, QUERY);
        assert.strictEqual(options, null);
        setImmediate(done);
        return QUERY_STREAM;
      };

      database.run(QUERY, assert.ifError);
    });

    it('should optionally accept options', function(done) {
      var OPTIONS = {};

      database.runStream = function(query, options) {
        assert.strictEqual(options, OPTIONS);
        setImmediate(done);
        return QUERY_STREAM;
      };

      database.run(QUERY, OPTIONS, assert.ifError);
    });

    it('should return rows from the stream to the callback', function(done) {
      QUERY_STREAM.end();

      database.run(QUERY, function(err, rows) {
        assert.ifError(err);
        assert.deepEqual(rows, [
          ROW_1,
          ROW_2,
          ROW_3
        ]);
        done();
      });
    });

    it('should execute callback with error from stream', function(done) {
      var error = new Error('Error.');

      QUERY_STREAM.destroy(error);

      database.run(QUERY, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('runStream', function() {
    var QUERY = {
      sql: 'SELECT * FROM table',
      a: 'b',
      c: 'd'
    };

    var EXPECTED_REQ_OPTS = extend(QUERY, {
      session: DATABASE_FORMATTED_NAME
    });

    it('should accept a query object', function(done) {
      database.pool_.requestStream = function(options) {
        assert.deepEqual(options.reqOpts, EXPECTED_REQ_OPTS);
        assert.strictEqual(options.method(), util.noop);
        done();
      };

      var stream = database.runStream(QUERY);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    it('should accept a query string', function(done) {
      database.pool_.requestStream = function(options) {
        assert.deepEqual(options.reqOpts.sql, EXPECTED_REQ_OPTS.sql);
        done();
      };

      var stream = database.runStream(QUERY.sql);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });

    describe('query parameters', function() {
      var getType;

      before(function() {
        getType = fakeCodec.getType;
      });

      afterEach(function() {
        fakeCodec.getType = getType;
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

        database.pool_.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.params.fields.test, encodedValue);
          done();
        };

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
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

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 6
            }
          });
          done();
        };

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
          assert.deepEqual(options.reqOpts.paramTypes, {
            test: {
              code: 0
            }
          });

          done();
        };

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
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

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
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

        var stream = database.runStream(query);
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

        database.pool_.requestStream = function(options) {
          assert.strictEqual(options.reqOpts.types, undefined);
          done();
        };

        var stream = database.runStream(query);
        var makeRequestFn = stream.calledWith_[0];
        makeRequestFn();
      });
    });

    it('should return PartialResultStream', function() {
      var stream = database.runStream(QUERY);
      assert(stream instanceof FakePartialResultStream);
    });

    it('should assign a resumeToken to the request', function(done) {
      var resumeToken = 'resume-token';

      database.pool_.requestStream = function(options) {
        assert.strictEqual(options.reqOpts.resumeToken, resumeToken);
        done();
      };

      var stream = database.runStream(QUERY);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn(resumeToken);
    });

    it('should add timestamp options', function(done) {
      var OPTIONS = { a: 'a' };
      var FORMATTED_OPTIONS = { b: 'b' };

      FakeTransactionRequest.formatTimestampOptions_ = function(options) {
        assert.strictEqual(options, OPTIONS);
        return FORMATTED_OPTIONS;
      };

      database.pool_.requestStream = function(options) {
        assert.deepEqual(options.reqOpts.transaction.begin, FORMATTED_OPTIONS);
        done();
      };

      var stream = database.runStream(QUERY, OPTIONS);
      var makeRequestFn = stream.calledWith_[0];
      makeRequestFn();
    });
  });

  describe('runTransaction', function() {
    it('should get a Transaction object', function(done) {
      database.getTransaction_ = function() {
        done();
      };

      database.runTransaction(assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      database.getTransaction_ = function(options, callback) {
        callback(error);
      };

      database.runTransaction(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should run the transaction', function(done) {
      var OPTIONS = {};

      var transaction = {
        run_: function(runFn) {
          runFn();
        }
      };

      database.getTransaction_ = function(options, callback) {
        assert.strictEqual(options, OPTIONS);
        callback(null, transaction);
      };

      database.runTransaction(OPTIONS, function(err, transaction_) {
        assert.strictEqual(err, null);
        assert.strictEqual(transaction_, transaction);
        done();
      });
    });
  });

  describe('table', function() {
    var NAME = 'table-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        database.table();
      }, /A name is required to access a Table object\./);
    });

    it('should return an instance of Tession', function() {
      var table = database.table(NAME);

      assert(table instanceof FakeTable);
      assert.strictEqual(table.calledWith_[0], database);
      assert.strictEqual(table.calledWith_[1], NAME);
    });
  });

  describe('updateSchema', function() {
    var STATEMENTS = [
      'statement-1',
      'statement-2'
    ];

    it('should call and return the generated API', function() {
      var generatedReturnValue = {};

      database.api.Database = {
        updateDatabaseDdl: function(reqOpts, callback) {
          assert.deepEqual(reqOpts, {
            database: database.formattedName_,
            statements: STATEMENTS
          });
          assert.strictEqual(callback, assert.ifError);
          return generatedReturnValue;
        }
      };

      var returnValue = database.updateSchema(STATEMENTS, assert.ifError);
      assert.strictEqual(returnValue, generatedReturnValue);
    });

    it('should arrify a string statement', function(done) {
      database.api.Database = {
        updateDatabaseDdl: function(reqOpts) {
          assert.deepEqual(reqOpts.statements, [STATEMENTS[0]]);
          done();
        }
      };

      database.updateSchema(STATEMENTS[0], assert.ifError);
    });

    it('should accept an object', function(done) {
      var config = {
        statements: STATEMENTS,
        otherConfiguration: {}
      };

      var expectedReqOpts = extend({}, config, {
        database: database.formattedName_
      });

      database.api.Database = {
        updateDatabaseDdl: function(reqOpts) {
          assert.deepEqual(reqOpts, expectedReqOpts);
          done();
        }
      };

      database.updateSchema(config, assert.ifError);
    });
  });

  describe('createSession_', function() {
    var OPTIONS = {};

    it('should call the generated API', function(done) {
      database.api.Spanner = {
        createSession: function(reqOpts, options) {
          assert.deepEqual(reqOpts, {
            database: database.formattedName_
          });

          assert.strictEqual(options, OPTIONS);

          done();
        }
      };

      database.createSession_(OPTIONS, assert.ifError);
    });

    it('should not require options', function(done) {
      database.api.Spanner = {
        createSession: function(reqOpts, options) {
          assert.deepEqual(reqOpts, {
            database: database.formattedName_
          });

          assert.deepEqual(options, {});

          done();
        }
      };

      database.createSession_(assert.ifError);
    });

    describe('error', function() {
      var ERROR = new Error('Error.');
      var API_RESPONSE = {};

      beforeEach(function() {
        database.api.Spanner = {
          createSession: function(reqOpts, options, callback) {
            callback(ERROR, API_RESPONSE);
          }
        };
      });

      it('should execute callback with error & API response', function(done) {
        database.createSession_(function(err, session, apiResponse) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(session, null);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', function() {
      var API_RESPONSE = {
        name: 'session-name'
      };

      beforeEach(function() {
        database.api.Spanner = {
          createSession: function(reqOpts, options, callback) {
            callback(null, API_RESPONSE);
          }
        };
      });

      it('should execute callback with session & API response', function(done) {
        var sessionInstance = {};

        database.session_ = function(name) {
          assert.strictEqual(name, API_RESPONSE.name);
          return sessionInstance;
        };

        database.createSession_(function(err, session, apiResponse) {
          assert.ifError(err);

          assert.strictEqual(session, sessionInstance);
          assert.strictEqual(session.metadata, API_RESPONSE);

          assert.strictEqual(apiResponse, API_RESPONSE);

          done();
        });
      });
    });
  });

  describe('getSession_', function() {
    it('should get a session from the pool', function(done) {
      database.pool_ = {
        getSession: function(callback) {
          callback(); // done()
        }
      };

      database.getSession_(done);
    });
  });

  describe('getTransaction_', function() {
    describe('write mode', function() {
      it('should get a session from the pool', function(done) {
        var error = new Error('Error.');
        var session = {};
        var transaction = {};

        database.pool_ = {
          getWriteSession: function(callback) {
            callback(error, session, transaction);
          }
        };

        database.getTransaction_(function(err, transaction_) {
          assert.strictEqual(err, error);
          assert.strictEqual(transaction_, transaction);
          done();
        });
      });
    });

    describe('readOnly mode', function() {
      var OPTIONS = {
        readOnly: true,
        a: 'a'
      };

      it('should get a session from the pool', function(done) {
        database.pool_ = {
          getSession: function() {
            done();
          }
        };

        database.getTransaction_(OPTIONS, assert.ifError);
      });

      it('should return an error if could not get session', function(done) {
        var error = new Error('err.');

        database.pool_ = {
          getSession: function(callback) {
            callback(error);
          }
        };

        database.getTransaction_(OPTIONS, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should should create a transaction', function(done) {
        var SESSION = {};
        var TRANSACTION = {
          begin: function() {}
        };

        database.pool_ = {
          getSession: function(callback) {
            callback(null, SESSION);
          },
          createTransaction_: function(session, options) {
            assert.strictEqual(session, SESSION);

            var expectedOptions = extend({}, OPTIONS);
            delete expectedOptions.readOnly;

            assert.notStrictEqual(options, OPTIONS);
            assert.deepEqual(options, expectedOptions);

            setImmediate(done);
            return TRANSACTION;
          }
        };

        database.getTransaction_(OPTIONS, assert.ifError);
      });

      it('should begin a transaction', function(done) {
        var SESSION = {};
        var TRANSACTION = {
          begin: function(callback) {
            callback(null);
          }
        };

        database.pool_ = {
          getSession: function(callback) {
            callback(null, SESSION);
          },
          createTransaction_: function() {
            return TRANSACTION;
          }
        };

        database.getTransaction_(OPTIONS, function(err, transaction) {
          assert.ifError(err);
          assert.strictEqual(transaction, TRANSACTION);
          done();
        });
      });

      it('should return an error if transaction cannot begin', function(done) {
        var error = new Error('err');

        var SESSION = {};
        var TRANSACTION = {
          begin: function(callback) {
            callback(error);
          }
        };

        database.pool_ = {
          getSession: function(callback) {
            callback(null, SESSION);
          },
          createTransaction_: function() {
            return TRANSACTION;
          }
        };

        database.getTransaction_(OPTIONS, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });
  });

  describe('session_', function() {
    var NAME = 'session-name';

    it('should return an instance of Session', function() {
      var session = database.session_(NAME);

      assert(session instanceof FakeSession);
      assert.strictEqual(session.calledWith_[0], database);
      assert.strictEqual(session.calledWith_[1], NAME);
    });
  });
});
