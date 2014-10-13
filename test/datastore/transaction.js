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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var Transaction = require('../../lib/datastore/transaction.js');

describe('Transaction', function() {
  var transaction;
  var TRANSACTION_ID = 'transaction-id';

  beforeEach(function() {
    transaction = new Transaction(null, 'project-id');
  });

  describe('begin', function() {
    it('should begin', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        assert.equal(method, 'beginTransaction');
        done();
      };
      transaction.begin();
    });

    it('should set transaction id', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(null, { transaction: TRANSACTION_ID });
      };
      transaction.begin(function(err) {
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
      transaction.begin(function(err) {
        assert.deepEqual(err, error);
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

    it('should mark as finalized', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback();
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.isFinalized, true);
        done();
      });
    });

    it('should mark as finalized when rollback errors', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(new Error('Error.'));
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.isFinalized, true);
        done();
      });
    });
  });

  describe('commit', function() {
    beforeEach(function() {
      transaction.id = TRANSACTION_ID;
    });

    it('should commit', function(done) {
      transaction.makeReq_ = function(method) {
        assert.equal(method, 'commit');
        done();
      };
      transaction.commit();
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(error);
      };
      transaction.commit(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should mark as finalized', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback();
      };
      transaction.commit(function() {
        assert.strictEqual(transaction.isFinalized, true);
        done();
      });
    });

    it('should not mark as finalized if commit errors', function(done) {
      transaction.makeReq_ = function(method, req, callback) {
        callback = callback || req;
        callback(new Error('Error.'));
      };
      transaction.commit(function() {
        assert.strictEqual(transaction.isFinalized, false);
        done();
      });
    });
  });

  describe('finalize', function() {
    it('should be committed if not finalized', function(done) {
      transaction.isFinalized = false;
      transaction.commit = function () {
        done();
      };
      transaction.finalize();
    });

    it('should execute callback if already finalized', function(done) {
      transaction.isFinalized = true;
      transaction.finalize(done);
    });
  });
});
