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
var datastore = require('../../lib').datastore;
var Key = require('../../lib/datastore/entity').Key;

describe('Transaction', function() {
  var ds;
  var transaction;

  beforeEach(function() {
    ds = datastore.dataset({ projectId: 'test' });
    transaction = ds.createTransaction_(null, 'test');
  });

  describe('begin', function() {
    it('should begin', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
        assert.equal(method, 'beginTransaction');
        callback(null, 'some-id');
      };
      transaction.begin(done);
    });
  });

  describe('rollback', function() {
    beforeEach(function() {
      transaction.id = 'some-id';
    });

    it('should rollback', function(done) {
      transaction.createRequest_ = function(method, proto, respType, callback) {
        assert.equal(method, 'rollback');
        assert.equal(
          proto.transaction.toBase64(),
          new Buffer(transaction.id).toString('base64'));
        callback();
      };
      transaction.rollback(function() {
        assert.equal(transaction.isFinalized, true);
        done();
      });
    });

    it('should mark as `finalized` when rollback errors', function(done) {
      var error = new Error('rollback error');
      transaction.createRequest_ = function(method, proto, respType, callback) {
       callback(error);
      };
      transaction.rollback(function(err) {
        assert.equal(err, error);
        assert.equal(transaction.isFinalized, true);
        done();
      });
    });
  });

  describe('commit', function() {
    it('should commit', function(done) {
      transaction.id = 'some-id';
      transaction.createRequest_ = function(method, proto, respType, callback) {
        assert.equal(method, 'commit');
        assert.equal(
          proto.transaction.toBase64(),
          new Buffer('some-id').toString('base64'));
        callback();
      };
      transaction.commit(function() {
        assert.equal(transaction.isFinalized, true);
        done();
      });
    });
  });

  describe('finalize', function() {
    it('should be committed if not rolled back', function(done) {
      transaction.createRequest_ = function(method) {
        assert.equal(method, 'commit');
        done();
      };
      transaction.finalize();
    });
  });

  describe('save', function() {
    var key = new Key({
      namespace: null,
      path: ['Kind', 1]
    });

    it('should not set an indexed value by default', function() {
      transaction.createRequest_ = function(method, req) {
        var property = req.mutation.upsert[0].property[0];
        assert.strictEqual(property.value.indexed, null);
      };
      transaction.save({
        key: key,
        data: [{ name: 'name', value: 'value' }]
      }, assert.ifError);
    });

    it('should allow setting the indexed value of a property', function() {
      transaction.createRequest_ = function(method, req) {
        var property = req.mutation.upsert[0].property[0];
        assert.equal(property.name, 'name');
        assert.equal(property.value.string_value, 'value');
        assert.strictEqual(property.value.indexed, false);
      };
      transaction.save({
        key: key,
        data: [{ name: 'name', value: 'value', excludeFromIndexes: true }]
      }, assert.ifError);
    });
  });
});
