/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var arrify = require('arrify');
var assert = require('assert');
var entity = require('../src/entity.js');
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Transaction') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['createQuery', 'delete', 'save']);
  }
});

var DatastoreRequestOverride = {
  delete: util.noop,
  save: util.noop
};

var FakeDatastoreRequest = {
  prototype: {
    delete: function() {
      var args = [].slice.apply(arguments);
      var results = DatastoreRequestOverride.delete.apply(null, args);
      DatastoreRequestOverride.delete = util.noop;
      return results;
    },

    save: function() {
      var args = [].slice.apply(arguments);
      var results = DatastoreRequestOverride.save.apply(null, args);
      DatastoreRequestOverride.save = util.noop;
      return results;
    }
  }
};

describe('Transaction', function() {
  var Transaction;
  var transaction;
  var TRANSACTION_ID = 'transaction-id';
  var PROJECT_ID = 'project-id';
  var NAMESPACE = 'a-namespace';

  var DATASTORE = {
    request: function() {},
    projectId: PROJECT_ID,
    namespace: NAMESPACE
  };

  function key(path) {
    return new entity.Key({ path: arrify(path) });
  }

  before(function() {
    Transaction = proxyquire('../src/transaction.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      './request.js': FakeDatastoreRequest
    });
  });

  beforeEach(function() {
    transaction = new Transaction(DATASTORE);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the datastore instance', function() {
      assert.strictEqual(transaction.datastore, DATASTORE);
    });

    it('should localize the project ID', function() {
      assert.strictEqual(transaction.projectId, PROJECT_ID);
    });

    it('should localize the namespace', function() {
      assert.strictEqual(transaction.namespace, NAMESPACE);
    });

    it('should localize request function', function(done) {
      var transaction;

      var fakeDataset = {
        request: {
          bind: function(context) {
            assert.strictEqual(context, fakeDataset);

            setImmediate(function() {
              assert.strictEqual(transaction.request, fakeDataset.request);
              done();
            });

            return fakeDataset.request;
          }
        }
      };

      transaction = new Transaction(fakeDataset);
    });

    it('should localize default properties', function() {
      assert.deepEqual(transaction.modifiedEntities_, []);
      assert.deepEqual(transaction.requestCallbacks_, []);
      assert.deepEqual(transaction.requests_, []);
    });
  });

  describe('commit', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should commit', function(done) {
      transaction.request_ = function(protoOpts) {
        assert.equal(protoOpts.service, 'Datastore');
        assert.equal(protoOpts.method, 'commit');
        done();
      };
      transaction.commit();
    });

    it('should skip the commit', function(done) {
      transaction.skipCommit = true;

      // If called, the test will blow up.
      transaction.request_ = done;

      transaction.commit(done);
    });

    describe('errors', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      var rollbackError = new Error('Error.');
      var rollbackApiResponse = {};

      beforeEach(function() {
        transaction.rollback = function(callback) {
          callback(rollbackError, rollbackApiResponse);
        };

        transaction.request_ = function(protoOpts, reqOpts, callback) {
          callback = callback || reqOpts;
          callback(error, apiResponse);
        };
      });

      it('should pass the commit error to the callback', function(done) {
        transaction.commit(function(err, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      transaction.request_ = function(protoOpts, reqOpts, callback) {
        callback = callback || reqOpts;
        callback(null, resp);
      };
      transaction.commit(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should group mutations & execute original methods', function() {
      var deleteArg1 = key(['Product', 123]);
      var deleteArg2 = key(['Product', 234]);

      var saveArg1 = { key: key(['Product', 345]), data: '' };
      var saveArg2 = { key: key(['Product', 456]), data: '' };

      // Queue saves & deletes in varying order.
      transaction.delete(deleteArg1);
      transaction.save(saveArg1);
      transaction.delete(deleteArg2);
      transaction.save(saveArg2);

      var args = [];

      var deleteCalled = 0;
      DatastoreRequestOverride.delete = function() {
        args.push(arguments[0]);
        deleteCalled++;
      };

      var saveCalled = 0;
      DatastoreRequestOverride.save = function() {
        args.push(arguments[0]);
        saveCalled++;
      };

      transaction.request_ = util.noop;

      transaction.commit();

      assert.equal(deleteCalled, 1);
      assert.equal(saveCalled, 1);

      assert.equal(args.length, 2);

      // Save arguments must come first.
      assert.deepEqual(args, [
        [saveArg1, saveArg2],
        [deleteArg1, deleteArg2]
      ]);
    });

    it('should honor ordering of mutations (last wins)', function() {
      // The delete should be ignored.
      transaction.delete(key(['Product', 123]));
      transaction.save({ key: key(['Product', 123]), data: '' });

      var deleteCalled = 0;
      DatastoreRequestOverride.delete = function() {
        deleteCalled++;
      };

      var saveCalled = 0;
      DatastoreRequestOverride.save = function() {
        saveCalled++;
      };

      transaction.request_ = util.noop;

      transaction.commit();
      assert.equal(deleteCalled, 0);
      assert.equal(saveCalled, 1);
    });

    it('should send the built request object', function(done) {
      transaction.requests_ = [
        {
          mutations: [
            { a: 'b' },
            { c: 'd' }
          ]
        },
        {
          mutations: [
            { e: 'f' },
            { g: 'h' }
          ]
        }
      ];

      transaction.request_ = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts, {
          mutations: [
            { a: 'b' },
            { c: 'd' },
            { e: 'f' },
            { g: 'h' }
          ]
        });
        done();
      };

      transaction.commit();
    });

    it('should execute the queued callbacks', function() {
      var cb1Called = false;
      var cb2Called = false;

      transaction.requestCallbacks_ = [
        function() { cb1Called = true; },
        function() { cb2Called = true; }
      ];

      transaction.request_ = function(protoOpts, reqOpts, cb) {
        cb();
      };

      transaction.commit();

      assert(cb1Called);
      assert(cb2Called);
    });
  });

  describe('createQuery', function() {
    it('should return query from datastore.createQuery', function() {
      var args = [0, 1, 2, 3];
      var createQueryReturnValue = {};

      transaction.datastore.createQuery = function() {
        assert.strictEqual(this, transaction);
        assert.strictEqual(arguments[0], args[0]);
        assert.strictEqual(arguments[1], args[1]);
        assert.strictEqual(arguments[2], args[2]);
        assert.strictEqual(arguments[3], args[3]);
        return createQueryReturnValue;
      };

      var query = transaction.createQuery.apply(transaction, args);
      assert.strictEqual(query, createQueryReturnValue);
    });
  });

  describe('delete', function() {
    it('should push entities into a queue', function() {
      var keys = [
        key('Product', 123),
        key('Product', 234),
        key('Product', 345)
      ];

      transaction.delete(keys);

      assert.equal(transaction.modifiedEntities_.length, keys.length);

      transaction.modifiedEntities_.forEach(function(queuedEntity) {
        assert.equal(queuedEntity.method, 'delete');
        assert(keys.indexOf(queuedEntity.entity.key) > -1);
        assert.deepEqual(queuedEntity.args, [queuedEntity.entity.key]);
      });
    });
  });

  describe('rollback', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should rollback', function(done) {
      transaction.request_ = function(protoOpts) {
        assert.strictEqual(protoOpts.service, 'Datastore');
        assert.equal(protoOpts.method, 'rollback');
        done();
      };
      transaction.rollback();
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.request_ = function(protoOpts, reqOpts, callback) {
        callback = callback || reqOpts;
        callback(error);
      };
      transaction.rollback(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      transaction.request_ = function(protoOpts, reqOpts, callback) {
        callback = callback || reqOpts;
        callback(null, resp);
      };
      transaction.rollback(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should set skipCommit', function(done) {
      transaction.request_ = function(protoOpts, reqOpts, callback) {
        callback = callback || reqOpts;
        callback();
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });

    it('should set skipCommit when rollback errors', function(done) {
      transaction.request_ = function(protoOpts, reqOpts, callback) {
        callback = callback || reqOpts;
        callback(new Error('Error.'));
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });
  });

  describe('run', function() {
    it('should make the correct API request', function(done) {
      transaction.request_ = function(protoOpts) {
        assert.deepEqual(protoOpts, {
          service: 'Datastore',
          method: 'beginTransaction'
        });

        done();
      };

      transaction.run(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        transaction.request_ = function(protoOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should pass error & API response to callback', function(done) {
        transaction.run(function(err, transaction, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(transaction, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        transaction: TRANSACTION_ID
      };

      beforeEach(function() {
        transaction.request_ = function(protoOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should set transaction id', function(done) {
        delete transaction.id;

        transaction.run(function(err) {
          assert.ifError(err);
          assert.equal(transaction.id, TRANSACTION_ID);
          done();
        });
      });

      it('should exec callback with Transaction & apiResponse', function(done) {
        transaction.run(function(err, transaction_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(transaction_, transaction);
          assert.deepEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('save', function() {
    it('should push entities into a queue', function() {
      var entities = [
        { key: key('Product', 123), data: 123 },
        { key: key('Product', 234), data: 234 },
        { key: key('Product', 345), data: 345 }
      ];

      transaction.save(entities);

      assert.equal(transaction.modifiedEntities_.length, entities.length);

      transaction.modifiedEntities_.forEach(function(queuedEntity) {
        assert.equal(queuedEntity.method, 'save');

        var match = entities.filter(function(ent) {
          return ent.key === queuedEntity.entity.key;
        })[0];

        assert.deepEqual(queuedEntity.args, [match]);
      });
    });
  });
});
