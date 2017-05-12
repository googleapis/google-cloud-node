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
var events = require('events');
var extend = require('extend');
var is = require('is');
var proxyquire = require('proxyquire');
var through = require('through2');
var util = require('@google-cloud/common').util;

var fakeGenericPool = {
  DefaultEvictor: util.noop,
  Pool: util.noop
};
var originalFakeGenericPool = extend({}, fakeGenericPool);

describe('SessionPool', function() {
  var SessionPoolCached;
  var SessionPool;
  var sessionPool;

  var DATABASE = {};
  var OPTIONS = {};

  before(function() {
    SessionPool = proxyquire('../src/session-pool.js', {
      'generic-pool': fakeGenericPool
    });
    SessionPoolCached = extend({}, SessionPool);
  });

  beforeEach(function() {
    extend(fakeGenericPool, originalFakeGenericPool);
    extend(SessionPool, SessionPoolCached);
    sessionPool = new SessionPool(DATABASE, OPTIONS);
  });

  describe('instantiation', function() {
    it('should be an EventEmitter', function() {
      assert.strictEqual(sessionPool instanceof events.EventEmitter, true);
    });

    it('should not require options', function() {
      assert.doesNotThrow(function() {
        new SessionPool(DATABASE);
      });
    });

    it('should localize the database', function() {
      assert.strictEqual(sessionPool.database, DATABASE);
    });

    it('should initialize pendingAcquires', function() {
      assert.deepEqual(sessionPool.pendingAcquires, []);
    });

    it('should get pool options and create a pool', function(done) {
      var poolOptions = {};

      SessionPool.getPoolOptions_ = function(options) {
        assert.strictEqual(options, OPTIONS);
        return poolOptions;
      };

      SessionPool.createPool_ = function(options) {
        assert.strictEqual(options, poolOptions);
        done();
      };

      new SessionPool(DATABASE, OPTIONS);
    });

    it('should define the factory for the pool', function(done) {
      var sessionPool;

      SessionPool.createPool_ = function(poolOptions, factory) {
        setImmediate(function() {
          var createArgs = [0, 1, 2];
          var createSessionResult = {};

          sessionPool.createSession_ = function() {
            assert.strictEqual(this, sessionPool);
            assert.deepEqual([].slice.call(arguments), createArgs);
            return createSessionResult;
          };

          assert.strictEqual(
            factory.create(createArgs[0], createArgs[1], createArgs[2]),
            createSessionResult
          );

          var deleteCalled = false;

          factory.destroy({
            delete: function() {
              deleteCalled = true;
            }
          });

          assert.strictEqual(deleteCalled, true);

          assert.strictEqual(factory.validate, SessionPool.isSessionActive_);

          done();
        });
      };

      sessionPool = new SessionPool(DATABASE, OPTIONS);
    });

    it('should calculate available value', function() {
      sessionPool.pool = {
        available: 10
      };

      assert.strictEqual(sessionPool.available, sessionPool.pool.available);
    });

    it('should calculate available value when there are writes', function() {
      sessionPool.pool = {
        available: 10
      };

      sessionPool.writePool = {
        available: 5
      };

      assert.strictEqual(
        sessionPool.available,
        sessionPool.pool.available + sessionPool.writePool.available
      );
    });

    describe('options.maxIdle', function() {
      var options = extend({}, OPTIONS, {
        maxIdle: 5
      });

      it('should default to 1', function() {
        assert.strictEqual(sessionPool.maxIdle, 1);
      });

      it('should localize the maxIdle setting', function() {
        var sessionPool = new SessionPool(DATABASE, options);
        assert.strictEqual(sessionPool.maxIdle, options.maxIdle);
      });
    });

    describe('options.fail', function() {
      var options = extend({}, OPTIONS, {
        fail: true
      });

      it('should default to false', function() {
        assert.strictEqual(sessionPool.fail, false);
      });

      it('should localize the fail setting', function() {
        var sessionPool = new SessionPool(DATABASE, options);
        assert.strictEqual(sessionPool.fail, options.fail);
      });
    });

    describe('options.writes', function() {
      var POOL_OPTIONS;
      var MAX = 50;
      var MIN = 25;

      var options = extend({}, OPTIONS, {
        writes: 10
      });

      beforeEach(function() {
        POOL_OPTIONS = {
          max: MAX,
          min: MIN
        };

        SessionPool.getPoolOptions_ = function() {
          return POOL_OPTIONS;
        };
      });

      it('should assign max and min to writePoolOptions', function(done) {
        SessionPool.createPool_ = function(writePoolOptions) {
          SessionPool.createPool_ = util.noop;
          assert.strictEqual(writePoolOptions.max, options.writes);
          assert.strictEqual(writePoolOptions.min, Math.ceil(MIN / 2));
          done();
        };

        new SessionPool(DATABASE, options);
      });

      it('should assign max and min to poolOptions', function(done) {
        SessionPool.createPool_ = function() {
          // First call was for creating a writePool.
          // Wait for the one to create the generic pool.
          SessionPool.createPool_ = function(poolOptions) {
            assert.strictEqual(poolOptions.max, MAX - options.writes);
            assert.strictEqual(poolOptions.min, Math.floor(MIN / 2));
            done();
          };
        };

        new SessionPool(DATABASE, options);
      });

      it('should define the factory for the pool', function(done) {
        var sessionPool;

        SessionPool.createPool_ = function(writePoolOptions, factory) {
          // Ignore the second call to this function for the generic pool.
          SessionPool.createPool_ = util.noop;

          setImmediate(function() {
            var createArgs = [0, 1, 2];
            var createWriteSessionResult = {};

            sessionPool.createWriteSession_ = function() {
              assert.strictEqual(this, sessionPool);
              assert.deepEqual([].slice.call(arguments), createArgs);
              return createWriteSessionResult;
            };

            assert.strictEqual(
              factory.create(createArgs[0], createArgs[1], createArgs[2]),
              createWriteSessionResult
            );

            var deleteCalled = false;

            factory.destroy({
              session: {
                delete: function() {
                  deleteCalled = true;
                }
              }
            });

            assert.strictEqual(deleteCalled, true);

            assert.strictEqual(factory.validate, SessionPool.isSessionActive_);

            done();
          });
        };

        sessionPool = new SessionPool(DATABASE, options);
      });
    });

    describe('acquireTimeout', function() {
      it('should default to 0', function() {
        assert.strictEqual(sessionPool.acquireTimeout, 0);
      });

      it('should localize the fail setting', function() {
        var options = extend({}, OPTIONS, {
          acquireTimeout: 60000
        });

        var sessionPool = new SessionPool(DATABASE, options);
        assert.strictEqual(sessionPool.acquireTimeout, options.acquireTimeout);
      });
    });
  });

  describe('createPool_', function() {
    var POOL_OPTIONS = {};
    var FACTORY = {};

    it('should create a genericPool instance', function(done) {
      fakeGenericPool.Deque = {};
      fakeGenericPool.PriorityQueue = {};

      fakeGenericPool.Pool = function() {
        assert.deepEqual([].slice.call(arguments), [
          SessionPool.SessionEvictor,
          fakeGenericPool.Deque,
          fakeGenericPool.PriorityQueue,
          FACTORY,
          POOL_OPTIONS
        ]);

        done();
      };

      SessionPool.createPool_(POOL_OPTIONS, FACTORY);
    });

    it('should calculate free property', function() {
      var pool = {};

      fakeGenericPool.Pool = function() {
        return pool;
      };

      SessionPool.createPool_(POOL_OPTIONS, FACTORY);

      pool.max = 10;
      pool.borrowed = 4;
      assert.strictEqual(pool.free, 6);

      pool.max = 3;
      pool.borrowed = 1;
      assert.strictEqual(pool.free, 2);
    });

    it('should return the created pool', function() {
      var pool = {};

      fakeGenericPool.Pool = function() {
        return pool;
      };

      var createdPool = SessionPool.createPool_(POOL_OPTIONS, FACTORY);
      assert.strictEqual(createdPool, pool);
    });
  });

  describe('getPoolOptions_', function() {
    it('should return the correct default options', function() {
      assert.deepEqual(SessionPool.getPoolOptions_({}), {
        idleTimeoutMillis: 59 * 60000,
        testOnBorrow: true,
        max: 100,
        min: 0,
        numTestsPerRun: 100
      });
    });

    describe('options.max', function() {
      var OPTIONS = {
        max: 10
      };

      var poolOptions;

      beforeEach(function() {
        poolOptions = SessionPool.getPoolOptions_(OPTIONS);
      });

      it('should set max property', function() {
        assert.strictEqual(poolOptions.max, OPTIONS.max);
      });

      it('should set numTestsPerRun property', function() {
        assert.strictEqual(poolOptions.numTestsPerRun, OPTIONS.max);
      });
    });

    describe('options.fail', function() {
      var OPTIONS = {
        fail: true
      };

      var poolOptions;

      beforeEach(function() {
        poolOptions = SessionPool.getPoolOptions_(OPTIONS);
      });

      it('should set maxWaitingClients property', function() {
        assert.strictEqual(poolOptions.maxWaitingClients, 0);
      });
    });

    describe('options.keepAlive', function() {
      var OPTIONS = {
        keepAlive: 10
      };

      var EXPECTED_IDLE_TIMEOUT_MILLIS = OPTIONS.keepAlive * 60000;

      var poolOptions;

      beforeEach(function() {
        poolOptions = SessionPool.getPoolOptions_(OPTIONS);
      });

      it('should set idleTimeoutMillis property', function() {
        assert.strictEqual(
          poolOptions.idleTimeoutMillis,
          EXPECTED_IDLE_TIMEOUT_MILLIS
        );
      });

      it('should set evictionRunIntervalMillis property', function() {
        assert.strictEqual(
          poolOptions.evictionRunIntervalMillis,
          EXPECTED_IDLE_TIMEOUT_MILLIS
        );
      });
    });
  });

  describe('isSessionActive_', function() {
    it('should return Promise that resolves when dead', function(done) {
      SessionPool.isSessionActive_({ evicted_: false })
        .then(function(isActive) {
          assert.strictEqual(isActive, true);
          done();
        })
        .catch(done);
    });

    it('should return Promise that resolves when not dead', function(done) {
      SessionPool.isSessionActive_({ evicted_: true })
        .then(function(isActive) {
          assert.strictEqual(isActive, false);
          done();
        })
        .catch(done);
    });
  });

  describe('clear', function() {
    beforeEach(function() {
      sessionPool.pool = {
        drain: function() {
          sessionPool.pool.drain.called = true;
          return Promise.resolve();
        },
        clear: function() {
          sessionPool.pool.clear.called = true;
          return Promise.resolve();
        }
      };
    });

    it('should clear the read pool', function() {
      sessionPool.writePool = null;

      return sessionPool.clear().then(function() {
        assert(sessionPool.pool.drain.called);
        assert(sessionPool.pool.clear.called);
      });
    });

    it('should clear the read and write pools', function() {
      sessionPool.writePool = {
        drain: function() {
          sessionPool.writePool.drain.called = true;
          return Promise.resolve();
        },
        clear: function() {
          sessionPool.writePool.clear.called = true;
          return Promise.resolve();
        }
      };

      return sessionPool.clear().then(function() {
        assert(sessionPool.pool.drain.called);
        assert(sessionPool.pool.clear.called);
        assert(sessionPool.writePool.drain.called);
        assert(sessionPool.writePool.clear.called);
      });
    });
  });

  describe('getSession', function() {
    it('should get next available if pool is not free', function(done) {
      sessionPool.pool = {
        free: false
      };

      sessionPool.getNextAvailableSession_ = function(callback) {
        callback(); // done()
      };

      sessionPool.getSession(done);
    });

    it('should acquire from the pool', function(done) {
      var session = {};

      function callback(err, session_) {
        assert.ifError(err);
        assert.strictEqual(session_, session);
        done();
      }

      sessionPool.pool = {
        free: true,
        acquire: function() {
          return Promise.resolve(session);
        }
      };

      sessionPool.getSession(callback);
    });

    it('should return error when it cannot acquire the pool', function(done) {
      var error = new Error('Error.');

      function callback(err) {
        assert.strictEqual(err, error);
        done();
      }

      sessionPool.pool = {
        free: true,
        acquire: function() {
          return Promise.reject(error);
        }
      };

      sessionPool.getSession(callback);
    });

    it('should handle creation errors', function(done) {
      var error = new Error('Error.');
      var destroyed = false;

      sessionPool.pool = {
        free: true,
        acquire: function() {
          return Promise.resolve(error);
        },
        destroy: function(err) {
          assert.strictEqual(err, error);
          destroyed = true;
        }
      };

      sessionPool.getSession(function(err) {
        assert.strictEqual(err, error);
        assert(destroyed);
        done();
      });
    });
  });

  describe('getWriteSession', function() {
    describe('not a write pool', function() {
      it('should get the next available session', function(done) {
        sessionPool.getNextAvailableSession_ = function(options, callback) {
          assert.deepEqual(options, {
            write: true
          });
          callback(); // done()
        };

        sessionPool.getWriteSession(done);
      });
    });

    describe('nothing is free from the write pool', function() {
      it('should get the next available session', function(done) {
        sessionPool.writePool = {
          free: false
        };

        sessionPool.getNextAvailableSession_ = function(options, callback) {
          assert.deepEqual(options, {
            write: true
          });
          callback(); // done()
        };

        sessionPool.getWriteSession(done);
      });
    });

    describe('is a write pool and a slot is free', function() {
      it('should acquire from the pool', function(done) {
        var session = {};

        sessionPool.writePool = {
          free: true,
          acquire: function() {
            return Promise.resolve(session);
          }
        };

        sessionPool.getWriteSession(function(err, session_) {
          assert.ifError(err);
          assert.strictEqual(session_, session);
          done();
        });
      });

      it('should return error when it cannot acquire the pool', function(done) {
        var error = new Error('Error.');

        sessionPool.writePool = {
          free: true,
          acquire: function() {
            return Promise.reject(error);
          }
        };

        sessionPool.getWriteSession(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should handle creation errors', function(done) {
        var error = new Error('Error.');
        var destroyed = false;

        sessionPool.writePool = {
          free: true,
          acquire: function() {
            return Promise.resolve(error);
          },
          destroy: function(err) {
            assert.strictEqual(err, error);
            destroyed = true;
          }
        };

        sessionPool.getSession(function(err) {
          assert.strictEqual(err, error);
          assert(destroyed);
          done();
        });
      });
    });
  });

  describe('release', function() {
    var SESSION = {};

    describe('more available than maxIdle', function() {
      beforeEach(function() {
        // Cannot set `available` directly, i.e. `sessionPool.available = 10`.
        // See the constructor for how `available` is calculated.
        sessionPool.pool = {
          available: 10
        };

        sessionPool.maxIdle = 5;
      });

      describe('write pool', function() {
        var session;

        beforeEach(function() {
          session = extend({}, SESSION, {
            isWriteSession_: true
          });
        });

        it('should destroy from the write pool', function() {
          var returnPromise = Promise.resolve();

          sessionPool.writePool = {
            destroy: function(session_) {
              assert.strictEqual(session_, session);
              return returnPromise;
            }
          };

          var returnVal = sessionPool.release(session);
          assert.strictEqual(returnVal, returnPromise);
        });
      });

      describe('pool', function() {
        var session;

        beforeEach(function() {
          session = extend({}, SESSION, {
            isWriteSession_: false
          });
        });

        it('should destroy from the pool', function() {
          var returnPromise = Promise.resolve();

          sessionPool.pool.destroy = function(session_) {
            assert.strictEqual(session_, session);
            return returnPromise;
          };

          var returnVal = sessionPool.release(session);
          assert.strictEqual(returnVal, returnPromise);
        });
      });
    });

    describe('is a write session', function() {
      var session;

      beforeEach(function() {
        session = extend({}, SESSION, {
          isWriteSession_: true
        });
      });

      it('should release the write session', function() {
        var returnPromise = Promise.resolve();

        sessionPool.releaseWriteSession_ = function(session_) {
          assert.strictEqual(session_, session);
          return returnPromise;
        };

        var returnVal = sessionPool.release(session);
        assert.strictEqual(returnVal, returnPromise);
      });
    });

    it('should destroy from the pool', function() {
      var returnPromise = Promise.resolve();

      sessionPool.pool.release = function(session) {
        assert.strictEqual(session, SESSION);
        return returnPromise;
      };

      var returnVal = sessionPool.release(SESSION);
      assert.strictEqual(returnVal, returnPromise);
    });
  });

  describe('request', function() {
    var CONFIG;
    var SESSION = {
      formattedName_: 'formatted-name'
    };

    beforeEach(function() {
      CONFIG = {
        method: util.noop,
        reqOpts: {}
      };

      sessionPool.getSession = function(callback) {
        callback(null, SESSION);
      };

      sessionPool.release = util.noop;
    });

    it('should return if in the snippet sandbox', function(done) {
      sessionPool.getSession = function() {
        done(new Error('Should not get a session in the sandbox.'));
      };

      global.GCLOUD_SANDBOX_ENV = true;
      var returnValue = sessionPool.request(CONFIG, assert.ifError);
      delete global.GCLOUD_SANDBOX_ENV;

      assert.strictEqual(returnValue, undefined);

      done();
    });

    it('should get a session', function(done) {
      sessionPool.getSession = function() {
        done();
      };

      sessionPool.request(CONFIG, assert.ifError);
    });

    it('should return error if it cannot get a session', function(done) {
      var error = new Error('Error.');

      sessionPool.getSession = function(callback) {
        callback(error);
      };

      sessionPool.request(CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should call the method with the session', function(done) {
      CONFIG.reqOpts = {
        a: 'b'
      };

      CONFIG.method = function(reqOpts) {
        assert.deepEqual(reqOpts, extend({}, CONFIG.reqOpts, {
          session: SESSION.formattedName_
        }));
        done();
      };

      sessionPool.request(CONFIG, assert.ifError);
    });

    it('should release the session after calling the method', function(done) {
      sessionPool.release = function(session) {
        assert.strictEqual(session, SESSION);
        done();
      };

      CONFIG.method = function(reqOpts, callback) {
        callback();
      };

      sessionPool.request(CONFIG, assert.ifError);
    });

    it('should execute the callback with original arguments', function(done) {
      var originalArgs = [
        'a',
        'b',
        'c'
      ];

      CONFIG.method = function(reqOpts, callback) {
        callback.apply(null, originalArgs);
      };

      sessionPool.request(CONFIG, function() {
        var args = [].slice.call(arguments);
        assert.deepEqual(args, originalArgs);
        done();
      });
    });
  });

  describe('requestStream', function() {
    var CONFIG;
    var REQUEST_STREAM;

    beforeEach(function() {
      REQUEST_STREAM = through();

      CONFIG = {
        reqOpts: {},
        method: function() {
          return REQUEST_STREAM;
        }
      };

      sessionPool.getSession = util.noop;
      sessionPool.release = util.noop;
    });

    it('should return if in the snippet sandbox', function(done) {
      sessionPool.getSession = function() {
        done(new Error('Should not get a session in the sandbox.'));
      };

      global.GCLOUD_SANDBOX_ENV = true;
      var returnValue = sessionPool.requestStream(CONFIG);
      delete global.GCLOUD_SANDBOX_ENV;

      assert(returnValue instanceof require('stream'));

      returnValue.emit('reading');

      done();
    });

    it('should get a session when stream opens', function(done) {
      sessionPool.getSession = function() {
        done();
      };

      sessionPool.requestStream(CONFIG)
        .emit('reading');
    });

    describe('could not get session', function() {
      var ERROR = new Error('Error.');

      beforeEach(function() {
        sessionPool.getSession = function(callback) {
          callback(ERROR);
        };
      });

      it('should destroy the stream', function(done) {
        sessionPool.requestStream(CONFIG)
          .on('error', function(err) {
            assert.strictEqual(err, ERROR);
            done();
          })
          .emit('reading');
      });
    });

    describe('session retrieved successfully', function() {
      var SESSION = {
        formattedName_: 'formatted-name'
      };

      beforeEach(function() {
        sessionPool.getSession = function(callback) {
          callback(null, SESSION);
        };
      });

      it('should assign session to request options', function(done) {
        CONFIG.method = function(reqOpts) {
          assert.strictEqual(reqOpts.session, SESSION.formattedName_);
          setImmediate(done);
          return through.obj();
        };

        sessionPool.requestStream(CONFIG)
          .emit('reading');
      });

      it('should make request and pipe to the stream', function(done) {
        var responseData = new Buffer('response-data');

        sessionPool.requestStream(CONFIG)
          .on('data', function(data) {
            assert.strictEqual(data, responseData);
            done();
          });

        REQUEST_STREAM.end(responseData);
      });

      it('should release session when request stream ends', function(done) {
        sessionPool.release = function(session) {
          assert.strictEqual(session, SESSION);
          done();
        };

        sessionPool.requestStream(CONFIG)
          .emit('reading');

        REQUEST_STREAM.end();
      });

      it('should release session when request stream errors', function(done) {
        sessionPool.release = function(session) {
          assert.strictEqual(session, SESSION);
          done();
        };

        sessionPool.requestStream(CONFIG)
          .emit('reading');

        REQUEST_STREAM.emit('error');
      });

      it('should error user stream when request stream errors', function(done) {
        var error = new Error('Error.');

        sessionPool.requestStream(CONFIG)
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          })
          .emit('reading');

        REQUEST_STREAM.destroy(error);
      });
    });

    describe('abort', function() {
      var SESSION;

      beforeEach(function() {
        REQUEST_STREAM.cancel = util.noop;

        SESSION = {
          cancel: util.noop
        };

        sessionPool.getSession = function(callback) {
          callback(null, SESSION);
        };
      });

      it('should release the session', function(done) {
        sessionPool.release = function(session) {
          assert.strictEqual(session, SESSION);
          done();
        };

        var requestStream = sessionPool.requestStream(CONFIG);

        requestStream.emit('reading');

        requestStream.abort();
      });

      it('should not release the session more than once', function() {
        var numTimesReleased = 0;
        sessionPool.release = function(session) {
          numTimesReleased++;
          assert.strictEqual(session, SESSION);
        };

        var requestStream = sessionPool.requestStream(CONFIG);

        requestStream.emit('reading');

        requestStream.abort();
        assert.strictEqual(numTimesReleased, 1);

        requestStream.abort();
        assert.strictEqual(numTimesReleased, 1);
      });

      it('should cancel the request stream', function(done) {
        REQUEST_STREAM.cancel = done;

        var requestStream = sessionPool.requestStream(CONFIG);

        requestStream.emit('reading');

        requestStream.abort();
      });
    });
  });

  describe('createSession_', function() {
    var SESSION;

    beforeEach(function() {
      SESSION = {
        create: function() {
          return Promise.resolve();
        }
      };

      sessionPool.database = {
        session_: function() {
          return SESSION;
        }
      };
    });

    it('should create and return the session', function(done) {
      sessionPool.createSession_()
        .then(function(session_) {
          assert.strictEqual(session_, SESSION);
          done();
        })
        .catch(done);
    });

    it('should return error from creating the session', function() {
      var error = new Error('Error.');

      SESSION.create = function() {
        return Promise.reject(error);
      };

      return sessionPool.createSession_()
        .then(function(err) {
          assert.strictEqual(err, error);
        });
    });
  });

  describe('createTransaction_', function() {
    var SESSION;
    var TRANSACTION;

    beforeEach(function() {
      SESSION = {
        transaction: function() {
          return TRANSACTION;
        }
      };

      TRANSACTION = {
        end: util.noop
      };
    });

    it('should create and return a Transaction', function() {
      var OPTIONS = {};

      SESSION.transaction = function(options) {
        assert.strictEqual(options, OPTIONS);
        return TRANSACTION;
      };

      var transaction = sessionPool.createTransaction_(SESSION, OPTIONS);
      assert.strictEqual(transaction, TRANSACTION);
    });

    it('should release the session when destroyed', function() {
      var destroyed = false;
      var released = false;

      TRANSACTION.end = function() {
        assert.strictEqual(this, TRANSACTION);
        destroyed = true;
      };

      sessionPool.release = function(session) {
        assert.strictEqual(session, SESSION);
        released = true;
      };

      var transaction = sessionPool.createTransaction_(SESSION);
      transaction.end();

      assert.strictEqual(destroyed, true);
      assert.strictEqual(released, true);
    });
  });

  describe('createWriteSession_', function() {
    var SESSION;
    var TRANSACTION;

    beforeEach(function() {
      TRANSACTION = {
        begin: function() {
          return Promise.resolve(SESSION);
        }
      };

      SESSION = {};

      sessionPool.createTransaction_ = function() {
        return TRANSACTION;
      };

      sessionPool.createSession_ = function() {
        return Promise.resolve(SESSION);
      };
    });

    it('should return a session', function(done) {
      sessionPool.createWriteSession_()
        .then(function(session) {
          assert.strictEqual(session, SESSION);
          done();
        })
        .catch(done);
    });

    it('should return error if session cannot be created', function(done) {
      var error = new Error('Error.');

      sessionPool.createSession_ = function() {
        return Promise.reject(error);
      };

      sessionPool.createWriteSession_()
        .then(done)
        .catch(function(err) {
          assert.strictEqual(err, error);
          done();
        });
    });

    it('should create a transaction', function(done) {
      sessionPool.createTransaction_ = function() {
        setImmediate(done);
        return TRANSACTION;
      };

      sessionPool.createWriteSession_()
        .catch(done);
    });

    it('should return error if transaction cannot be created', function(done) {
      var error = new Error('Error.');

      TRANSACTION.begin = function() {
        return Promise.reject(error);
      };

      sessionPool.createWriteSession_()
        .then(done)
        .catch(function(err) {
          assert.strictEqual(err, error);
          done();
        });
    });

    it('should set isWriteSession_ property', function(done) {
      assert.strictEqual(SESSION.isWriteSession_, undefined);

      sessionPool.createWriteSession_()
        .then(function() {
          assert.strictEqual(SESSION.isWriteSession_, true);
          done();
        })
        .catch(done);
    });

    it('should set transaction_ property', function(done) {
      assert.strictEqual(SESSION.transaction_, undefined);

      sessionPool.createWriteSession_()
        .then(function() {
          assert.strictEqual(SESSION.transaction_, TRANSACTION);
          done();
        })
        .catch(done);
    });

    it('should return an error in place of the session', function() {
      var error = new Error('Error.');

      sessionPool.createSession_ = function() {
        return Promise.resolve(error);
      };

      return sessionPool.createWriteSession_()
        .then(function(session) {
          assert.strictEqual(session, error);
        });
    });
  });

  describe('getNextAvailableSession_', function() {
    var OPTIONS = {};

    it('should accept only a callback', function() {
      assert.doesNotThrow(function() {
        sessionPool.getNextAvailableSession_(assert.ifError);
      });
    });

    it('should get a write session if writePool is free', function(done) {
      sessionPool.writePool = {
        free: true
      };

      sessionPool.getWriteSession = function(callback) {
        callback(); // done()
      };

      sessionPool.getNextAvailableSession_(OPTIONS, done);
    });

    describe('need a write session & a read session is free', function() {
      var WRITE_OPTIONS = extend({}, OPTIONS, {
        write: true
      });

      beforeEach(function() {
        sessionPool.pool = {
          free: true
        };
      });

      it('should get a Session', function(done) {
        sessionPool.getSession = function() {
          done();
        };

        sessionPool.getNextAvailableSession_(WRITE_OPTIONS, assert.ifError);
      });

      it('should return error if it cannot get a Session', function(done) {
        var error = new Error('Error.');

        sessionPool.getSession = function(callback) {
          callback(error);
        };

        sessionPool.getNextAvailableSession_(WRITE_OPTIONS, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should create and begin a transaction', function(done) {
        var session = {};

        sessionPool.createTransaction_ = function(session_) {
          assert.strictEqual(session_, session);

          setImmediate(done);

          return {
            begin: util.noop
          };
        };

        sessionPool.getSession = function(callback) {
          callback(null, session);
        };

        sessionPool.getNextAvailableSession_(WRITE_OPTIONS, assert.ifError);
      });

      it('should return error if it cannot create transaction', function(done) {
        var error = new Error('Error.');

        var session = {};

        sessionPool.createTransaction_ = function() {
          return {
            begin: function(callback) {
              callback(error);
            }
          };
        };

        sessionPool.getSession = function(callback) {
          callback(null, session);
        };

        sessionPool.getNextAvailableSession_(WRITE_OPTIONS, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should return session and transaction', function(done) {
        var transaction = {
          begin: function(callback) {
            callback();
          }
        };

        var session = {
          transaction: function() {
            return transaction;
          }
        };

        sessionPool.createTransaction_ = function() {
          return transaction;
        };

        sessionPool.getSession = function(callback) {
          callback(null, session);
        };

        sessionPool.getNextAvailableSession_(WRITE_OPTIONS, function(e, s, t) {
          assert.ifError(e);
          assert.strictEqual(s, session);
          assert.strictEqual(t, transaction);
          done();
        });
      });
    });

    describe('pool is free', function() {
      beforeEach(function() {
        sessionPool.pool = {
          free: true
        };
      });

      it('should get a session', function(done) {
        sessionPool.getSession = function(callback) {
          callback(); // done()
        };

        sessionPool.getNextAvailableSession_(done);
      });
    });

    describe('failure preferred when no sessions are available', function() {
      beforeEach(function() {
        sessionPool.fail = true;
      });

      it('should execute callback with error', function(done) {
        sessionPool.getNextAvailableSession_(function(err) {
          assert.strictEqual(is.error(err), true);
          assert.strictEqual(err.message, 'No sessions available.');
          done();
        });
      });
    });

    describe('polls for next opening', function() {
      it('should poll for the next available session', function(done) {
        sessionPool.pollForSession_ = function(callback) {
          callback(); // done
        };

        sessionPool.getNextAvailableSession_(OPTIONS, done);
      });
    });
  });

  describe('pollForSession_', function() {
    var SET_INTERVAL_ID = 1;

    var setInterval_;
    var clearInterval_;

    beforeEach(function() {
      setInterval_ = global.setInterval;
      clearInterval_ = global.clearInterval;

      global.setInterval = function(cb) {
        global.setInterval.calledWith_ = arguments;
        setImmediate(cb);
        return SET_INTERVAL_ID;
      };
    });

    afterEach(function() {
      global.setInterval = setInterval_;
      global.clearInterval = clearInterval_;
    });

    it('should capture the acquire request', function() {
      var callback = function() {};

      sessionPool.pollForSession_(callback);
      assert.strictEqual(sessionPool.pendingAcquires.length, 1);

      var pendingAcquire = sessionPool.pendingAcquires[0];

      assert.strictEqual(pendingAcquire.callback, callback);
      assert.strictEqual(pendingAcquire.timeout, sessionPool.acquireTimeout);
    });

    it('should bail if it detects an acquire interval exists', function() {
      var callback = function() {};

      sessionPool.acquireIntervalId = SET_INTERVAL_ID;
      sessionPool.pollForSession_(callback);

      assert.strictEqual(global.setInterval.calledWith_, undefined);
    });

    it('should poll for a free session', function() {
      var callback = function() {};

      sessionPool.pollForSession_(callback);

      var intervalArgs = global.setInterval.calledWith_;

      assert.strictEqual(sessionPool.acquireIntervalId, SET_INTERVAL_ID);
      assert.strictEqual(typeof intervalArgs[0], 'function');
      assert.strictEqual(intervalArgs[1], 30000);
    });

    it('should call getNextAvailableSession_ if a read free', function(done) {
      sessionPool.getNextAvailableSession_ = function(callback) {
        callback(); // done
      };

      sessionPool.pool = { free: true };
      sessionPool.pollForSession_(done);
    });

    it('should call getNextAvailableSession_ if a write free', function(done) {
      sessionPool.getNextAvailableSession_ = function(callback) {
        callback(); // done
      };

      sessionPool.pool = { free: false };
      sessionPool.writePool = { free: true };
      sessionPool.pollForSession_(done);
    });

    it('should clear the interval when no pending acquires', function(done) {
      sessionPool.pool = { free: true };

      sessionPool.getNextAvailableSession_ = function() {
        sessionPool.pendingAcquires = [];
      };

      global.clearInterval = function(handle) {
        assert.strictEqual(handle, sessionPool.acquireIntervalId);

        setImmediate(function() {
          assert.strictEqual(sessionPool.acquireIntervalId, null);
          done();
        });
      };

      sessionPool.pollForSession_(assert.ifError);
    });

    it('should not clear the interval when pending acquires', function(done) {
      sessionPool.pool = { free: true };

      sessionPool.getNextAvailableSession_ = function() {
        sessionPool.pendingAcquires = [{}, {}, {}];

        setImmediate(function() {
          assert.strictEqual(sessionPool.acquireIntervalId, SET_INTERVAL_ID);
          done();
        });
      };

      global.clearInterval = function() {
        done(new Error('clearInterval should not be called'));
      };

      sessionPool.pollForSession_(assert.ifError);
    });

    describe('timeouts', function() {
      beforeEach(function() {
        sessionPool.acquireTimeout = 1;
      });

      it('should adjust the acquire request timeoout', function(done) {
        var acquireRequest;

        var callback = function() {
          assert.strictEqual(acquireRequest.timeout, -29999);
          done();
        };

        sessionPool.pollForSession_(callback);
        acquireRequest = sessionPool.pendingAcquires[0];
      });

      it('should remove the acquire request from the queue', function(done) {
        var callback = function() {
          assert.strictEqual(sessionPool.pendingAcquires.length, 0);
          done();
        };

        sessionPool.pollForSession_(callback);
      });

      it('should return an error if a timeout occurs', function(done) {
        var callback = function(err) {
          assert(err instanceof Error);
          assert.strictEqual(err.message,
            'Unable to acquire Session, timeout occurred.');
          done();
        };

        sessionPool.pollForSession_(callback);
      });
    });
  });

  describe('releaseWriteSession_', function() {
    var SESSION;
    var TRANSACTION;

    beforeEach(function() {
      TRANSACTION = {
        begin: function() {
          return Promise.resolve(SESSION);
        }
      };

      SESSION = {};

      sessionPool.createTransaction_ = function() {
        return TRANSACTION;
      };

      sessionPool.writePool = {
        release: util.noop,
        destroy: util.noop
      };
    });

    it('should create and begin a transaction', function(done) {
      var originalBegin = TRANSACTION.begin();

      TRANSACTION.begin = function() {
        setImmediate(done);
        return originalBegin;
      };

      sessionPool.releaseWriteSession_(SESSION)
        .catch(done);
    });

    describe('transaction begins successfully', function() {
      it('should release the session', function(done) {
        sessionPool.writePool.release = function(session) {
          assert.strictEqual(session, SESSION);
          done();
        };

        sessionPool.releaseWriteSession_(SESSION)
          .catch(done);
      });

      it('should return error if the session cannot release', function(done) {
        var error = new Error('Error.');

        sessionPool.writePool.release = function() {
          return Promise.reject(error);
        };

        sessionPool.releaseWriteSession_(SESSION)
          .then(done)
          .catch(function(err) {
            assert.strictEqual(err, error);
            done();
          });
      });
    });

    describe('transaction could not begin', function() {
      beforeEach(function() {
        TRANSACTION.begin = function() {
          return Promise.reject();
        };
      });

      it('should destroy the session', function(done) {
        var originalDestroy = sessionPool.writePool.destroy();

        sessionPool.writePool.destroy = function(session) {
          assert.strictEqual(session, SESSION);
          setImmediate(done);
          return originalDestroy;
        };

        sessionPool.releaseWriteSession_(SESSION)
          .catch(done);
      });

      it('should return error if the session cannot destroy', function(done) {
        var error = new Error('Error.');

        sessionPool.writePool.destroy = function() {
          return Promise.reject(error);
        };

        sessionPool.releaseWriteSession_(SESSION)
          .then(done)
          .catch(function(err) {
            assert.strictEqual(err, error);
            done();
          });
      });
    });
  });
});

describe('SessionEvictor', function() {
  var SessionPool;
  var sessionEvictor;

  var POOL = {};
  var DEFAULT_EVICTOR;

  before(function() {
    SessionPool = proxyquire('../src/session-pool.js', {
      'generic-pool': fakeGenericPool
    });
  });

  beforeEach(function() {
    DEFAULT_EVICTOR = {
      evict: util.noop
    };

    fakeGenericPool.DefaultEvictor = function() {
      return DEFAULT_EVICTOR;
    };

    sessionEvictor = new SessionPool.SessionEvictor(POOL);
  });

  describe('instantiation', function() {
    it('should localize pool', function() {
      assert.strictEqual(sessionEvictor.pool, POOL);
    });

    it('should create a DefaultEvictor', function() {
      assert.strictEqual(sessionEvictor.evictor, DEFAULT_EVICTOR);
    });
  });

  describe('evict', function() {
    var CONFIG = {};
    var AVAILABLE = false;
    var RESOURCE;

    beforeEach(function() {
      RESOURCE = {
        obj: {
          evicted_: false,
          keepAlive: util.noop
        }
      };
    });

    it('should return true if already evicted', function() {
      RESOURCE.obj.evicted_ = true;

      var evictReturnValue = sessionEvictor.evict(CONFIG, RESOURCE, AVAILABLE);
      assert.strictEqual(evictReturnValue, true);
    });

    it('should evict from the DefaultEvictor', function(done) {
      sessionEvictor.evictor.evict = function(config, resource, available) {
        assert.strictEqual(config, CONFIG);
        assert.strictEqual(resource, RESOURCE);
        assert.strictEqual(available, AVAILABLE);
        done();
      };

      sessionEvictor.evict(CONFIG, RESOURCE, AVAILABLE);
    });

    it('should set evicted to true when a session expires', function(done) {
      sessionEvictor.evictor.evict = function() {
        return true;
      };

      RESOURCE.obj.keepAlive = function(callback) {
        callback(new Error('Error.'));

        setImmediate(function() {
          assert.strictEqual(RESOURCE.obj.evicted_, true);
          done();
        });
      };

      sessionEvictor.evict(CONFIG, RESOURCE, AVAILABLE);
    });

    it('should set evicted to false when sessions dont expire', function(done) {
      sessionEvictor.evictor.evict = function() {
        return true;
      };

      RESOURCE.obj.keepAlive = function(callback) {
        callback(null);

        setImmediate(function() {
          assert.strictEqual(RESOURCE.obj.evicted_, false);
          done();
        });
      };

      sessionEvictor.evict(CONFIG, RESOURCE, AVAILABLE);
    });

    it('should return false if still active', function() {
      var evictReturnValue = sessionEvictor.evict(CONFIG, RESOURCE, AVAILABLE);
      assert.strictEqual(evictReturnValue, false);
    });
  });
});
