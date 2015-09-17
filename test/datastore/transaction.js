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
var entity = require('../../lib/datastore/entity.js');
var extend = require('extend');
var mockery = require('mockery');
var util = require('../../lib/common/util.js');

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

  function key(path) {
    return new entity.Key({ path: arrify(path) });
  }

  before(function() {
    mockery.registerMock('./request.js', FakeDatastoreRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    Transaction = require('../../lib/datastore/transaction.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    transaction = new Transaction({
      authenticateReq_: function(req, callback) {
        return callback(null, req);
      }
    }, 'project-id');
  });

  describe('instantiation', function() {
    it('should assign default properties', function() {
      var projectId = 'abc';
      var fakeDataset = {
        apiEndpoint: 'http://localhost:8080',
        makeAuthenticatedRequest_: function fakeMakeAuthenticatedRequest_() {}
      };

      var transaction = new Transaction(fakeDataset, projectId);

      assert.strictEqual(transaction.id, null);
      assert.deepEqual(transaction.apiEndpoint, fakeDataset.apiEndpoint);
      assert.equal(
        transaction.makeAuthenticatedRequest_,
        fakeDataset.makeAuthenticatedRequest_
      );
      assert.equal(transaction.projectId, projectId);
    });
  });

  describe('begin_', function() {
    it('should begin', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        assert.equal(method, 'beginTransaction');
        done();
      };
      transaction.begin_();
    });

    it('should set transaction id', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(null, { transaction: TRANSACTION_ID });
      };
      transaction.begin_(function(err) {
        assert.ifError(err);
        assert.equal(transaction.id, TRANSACTION_ID);
        done();
      });
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(error);
      };
      transaction.begin_(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(null, resp);
      };
      transaction.begin_(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('rollback', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should rollback', function(done) {
      transaction.makeReq_ = function(method) {
        assert.equal(method, 'rollback');
        done();
      };
      transaction.rollback();
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(error);
      };
      transaction.rollback(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(null, resp);
      };
      transaction.rollback(function(err, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should set skipCommit', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback();
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });

    it('should set skipCommit when rollback errors', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(new Error('Error.'));
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.skipCommit, true);
        done();
      });
    });
  });

  describe('commit_', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should commit', function(done) {
      transaction.makeReq_ = function(method) {
        assert.equal(method, 'commit');
        done();
      };
      transaction.commit_();
    });

    it('should skip the commit', function(done) {
      transaction.skipCommit = true;

      // If called, the test will blow up.
      transaction.makeReq_ = done;

      transaction.commit_(done);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(error);
      };
      transaction.commit_(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(null, resp);
      };
      transaction.commit_(function(err, apiResponse) {
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

      transaction.makeReq_ = util.noop;

      transaction.commit_();

      assert.equal(deleteCalled, 1);
      assert.equal(saveCalled, 1);

      assert.equal(args.length, 2);
      assert.deepEqual(args, [
        [deleteArg1, deleteArg2],
        [saveArg1, saveArg2]
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

      transaction.makeReq_ = util.noop;

      transaction.commit_();
      assert.equal(deleteCalled, 0);
      assert.equal(saveCalled, 1);
    });

    it('should send the built request object', function(done) {
      transaction.requests_ = [
        { a: 'b', c: 'd' },
        { e: 'f', g: 'h' }
      ];

      transaction.makeReq_ = function(method, req) {
        var req1 = transaction.requests_[0];
        var req2 = transaction.requests_[1];
        assert.deepEqual(req, extend(req1, req2));
        done();
      };

      transaction.commit_();
    });

    it('should execute the queued callbacks', function() {
      var cb1Called = false;
      var cb2Called = false;

      transaction.requestCallbacks_ = [
        function() { cb1Called = true; },
        function() { cb2Called = true; }
      ];

      transaction.makeReq_ = function(method, req, cb) {
        cb();
      };

      transaction.commit_();

      assert(cb1Called);
      assert(cb2Called);
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
