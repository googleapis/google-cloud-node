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

describe('Transaction', function() {
  var ds;
  var transaction;

  beforeEach(function() {
    ds = datastore.dataset({ projectId: 'test' });
    transaction = ds.createTransaction_(null, 'test');
  });

  it('should begin', function(done) {
    transaction.createRequest_ = function(method, proto, respType, callback) {
      assert.equal(method, 'beginTransaction');
      callback(null, 'some-id');
    };
    transaction.begin(done);
  });

  it('should rollback', function(done) {
    transaction.id = 'some-id';
    transaction.createRequest_ = function(method, proto, respType, callback) {
      assert.equal(method, 'rollback');
      assert.equal(
        proto.transaction.toBase64(),
        new Buffer('some-id').toString('base64'));
      callback();
    };
    transaction.rollback(function() {
      assert.equal(transaction.isFinalized, true);
      done();
    });
  });

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

  it('should be committed if not rolled back', function(done) {
    transaction.createRequest_ = function(method) {
      assert.equal(method, 'commit');
      done();
    };
    transaction.finalize();
  });
});
