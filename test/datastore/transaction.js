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
      transaction.createRequest_ = function(method) {
        assert.equal(method, 'beginTransaction');
        done();
      };
      transaction.begin();
    });

    it('should set transaction id', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
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
      transaction.createRequest_ = function(method, proto, respType, callback) {
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
      transaction.createRequest_ = function(method, proto) {
        assert.equal(method, 'rollback');
        assert.equal(
          proto.transaction.toBase64(),
          new Buffer(transaction.id).toString('base64'));
        done();
      };
      transaction.rollback();
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.createRequest_ = function(method, proto, respType, callback) {
        callback(error);
      };
      transaction.rollback(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should mark as finalized', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
        callback();
      };
      transaction.rollback(function() {
        assert.strictEqual(transaction.isFinalized, true);
        done();
      });
    });

    it('should mark as finalized when rollback errors', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
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
      transaction.createRequest_ = function(method, proto) {
        assert.equal(method, 'commit');
        assert.equal(
          proto.transaction.toBase64(),
          new Buffer(transaction.id).toString('base64'));
        done();
      };
      transaction.commit();
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      transaction.createRequest_ = function(method, proto, respType, callback) {
        callback(error);
      };
      transaction.commit(function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should mark as finalized', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
        callback();
      };
      transaction.commit(function() {
        assert.strictEqual(transaction.isFinalized, true);
        done();
      });
    });

    it('should not mark as finalized if commit errors', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
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
