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
var mockRespGet = require('../testdata/response_get.json');
var Transaction = require('../../lib/datastore/transaction.js');

describe('Dataset', function() {
  it('should get by key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.keys.length, 1);
      callback(null, mockRespGet);
    };
    ds.get(['Kind', 123], function(err, entity) {
      var properties = entity.data;
      assert.deepEqual(entity.key, ['Kind', 5732568548769792]);
      assert.strictEqual(properties.name, 'Burcu');
      assert.deepEqual(properties.bytes, new Buffer('hello'));
      assert.strictEqual(properties.done, false);
      assert.deepEqual(properties.total, 6.7);
      assert.strictEqual(properties.createdat.getTime(), 978307200000);
      done();
    });
  });

  it('should multi get by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.keys.length, 1);
      callback(null, mockRespGet);
    };
    ds.get([['Kind', 123]], function(err, entities) {
      var entity = entities[0];
      var properties = entity.data;
      assert.deepEqual(entity.key, ['Kind', 5732568548769792]);
      assert.strictEqual(properties.name, 'Burcu');
      assert.deepEqual(properties.bytes, new Buffer('hello'));
      assert.strictEqual(properties.done, false);
      assert.deepEqual(properties.total, 6.7);
      assert.strictEqual(properties.createdat.getTime(), 978307200000);
      done();
    });
  });

  it('should delete by key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(!!proto.mutation.delete, true);
      callback();
    };
    ds.delete(['Kind', 123], done);
  });

  it('should multi delete by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.delete.length, 2);
      callback();
    };
    ds.delete([
      ['Kind', 123],
      ['Kind', 345]
    ], done);
  });

  it('should save with incomplete key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.insertAutoId.length, 1);
      callback();
    };
    ds.save({ key: ['Kind', 123, null], data: {} }, done);
  });

  it('should save with keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.upsert.length, 2);
      assert.equal(proto.mutation.upsert[0].properties.k.stringValue, 'v');
      callback();
    };
    ds.save([
      { key: ['Kind', 123], data: { k: 'v' } },
      { key: ['Kind', 456], data: { k: 'v' } }
    ], done);
  });

  it('should produce proper allocate IDs req protos', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'allocateIds');
      assert.equal(proto.keys.length, 1);
      assert.deepEqual(proto.keys[0], {
        path :[{kind:'Kind'}]
      });
      callback(null, {
        keys: [
          {
            partitionId: { datasetId: 's~test', namespace: '' },
            path: [{ kind: 'Kind', id: '123' }]
          }
        ]
      });
    };
    ds.allocateIds(['Kind', null], 1, function(err, ids) {
      assert.deepEqual(ids[0], ['Kind', 123]);
      done();
    });
  });

  it('should throw if trying to allocate IDs with complete keys', function() {
    var ds = new datastore.Dataset({ projectId: 'test' });
    assert.throws(function() {
      ds.allocateIds(['Kind', 123]);
    });
  });

  describe('runInTransaction', function() {
    var ds;
    var transaction;

    beforeEach(function() {
      ds = new datastore.Dataset({ projectId: 'test' });
      ds.createTransaction = function() {
        transaction = new Transaction();
        transaction.makeReq = function(method, proto, callback) {
          assert.equal(method, 'beginTransaction');
          callback(null, { transaction: '' });
        };
        return transaction;
      };
    });

    it('should begin transaction', function() {
      ds.runInTransaction(function() {}, function() {});
    });

    it('should return transaction object to the callback', function() {
      ds.runInTransaction(function(transactionObject) {
        assert.equal(transactionObject, transaction);
      }, assert.ifError);
    });

    it('should commit the transaction when done', function() {
      ds.runInTransaction(function(t, done) {
        transaction.makeReq = function(method) {
          assert.equal(method, 'commit');
        };
        done();
      }, assert.ifError);
    });
  });

  describe('runQuery', function() {
    var ds;
    var query;
    var mockResponse = {
      withResults: {
        batch: { entityResults: mockRespGet.found }
      },
      withResultsAndEndCursor: {
        batch: { entityResults: mockRespGet.found, endCursor: 'cursor' }
      },
      withoutResults: mockRespGet
    };

    beforeEach(function () {
      ds = new datastore.Dataset({ projectId: 'test' });
      query = ds.createQuery('Kind');
    });

    describe('errors', function() {
      it('should handle upstream errors', function() {
        var upstreamError = new Error('upstream error.');
        ds.transaction.makeReq = function(method, proto, callback) {
          assert.equal(method, 'runQuery');
          callback(upstreamError);
        };

        ds.runQuery(query, function(err) {
          assert.equal(err, upstreamError);
        });
      });

      it('should handle missing results error', function() {
        ds.transaction.makeReq = function(method, proto, callback) {
          assert.equal(method, 'runQuery');
          callback('simulated-error', mockResponse.withoutResults);
        };

        ds.runQuery(query, function(err) {
          assert.equal(err, 'simulated-error');
        });
      });
    });

    it('should execute callback with results', function() {
      ds.transaction.makeReq = function(method, proto, callback) {
        assert.equal(method, 'runQuery');
        callback(null, mockResponse.withResults);
      };

      ds.runQuery(query, function (err, entities) {
        assert.ifError(err);

        var properties = entities[0].data;
        assert.deepEqual(entities[0].key, ['Kind', 5732568548769792]);
        assert.strictEqual(properties.name, 'Burcu');
        assert.deepEqual(properties.bytes, new Buffer('hello'));
        assert.strictEqual(properties.done, false);
        assert.deepEqual(properties.total, 6.7);
      });
    });

    it('should return a new query if results remain', function() {
      ds.transaction.makeReq = function(method, proto, callback) {
        assert.equal(method, 'runQuery');
        callback(null, mockResponse.withResultsAndEndCursor);
      };

      ds.runQuery(query, function(err, entities, nextQuery) {
        assert.ifError(err);
        assert.equal(nextQuery.constructor.name, 'Query');
      });
    });
  });
});
