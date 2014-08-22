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
var ByteBuffer = require('bytebuffer');
var datastore = require('../../lib').datastore;
var mockRespGet = require('../testdata/response_get.json');
var Transaction = require('../../lib/datastore/transaction.js');

describe('Dataset', function() {
  it('should return a key scoped by namespace', function() {
    var ds = new datastore.Dataset({ projectId: 'test', namespace: 'my-ns' });
    var key = ds.key('Company', 1);
    assert.equal(key.namespace_, 'my-ns');
    assert.deepEqual(key.path_, ['Company', 1]);
  });

  it('should allow namespace specification when creating a key', function() {
    var ds = new datastore.Dataset({ projectId: 'test' });
    var key = ds.key({
      namespace: 'custom-ns',
      path: ['Company', 1]
    });
    assert.equal(key.namespace_, 'custom-ns');
    assert.deepEqual(key.path_, ['Company', 1]);
  });

  it('should get by key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.key.length, 1);
      callback(null, mockRespGet);
    };
    ds.get(ds.key('Kind', 123), function(err, entity) {
      var data = entity.data;
      assert.deepEqual(entity.key.path_, ['Kind', 5732568548769792]);
      assert.strictEqual(data.author, 'Silvano');
      assert.strictEqual(data.isDraft, false);
      assert.deepEqual(data.publishedAt, new Date(978336000000));
      done();
    });
  });

  it('should multi get by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.key.length, 1);
      callback(null, mockRespGet);
    };
    var key = ds.key('Kind', 5732568548769792);
    ds.get([key], function(err, entities) {
      var entity = entities[0];
      var data = entity.data;
      assert.deepEqual(entity.key.path_, ['Kind', 5732568548769792]);
      assert.strictEqual(data.author, 'Silvano');
      assert.strictEqual(data.isDraft, false);
      assert.deepEqual(data.publishedAt, new Date(978336000000));
      done();
    });
  });

  it('should delete by key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'commit');
      assert.equal(!!proto.mutation.delete, true);
      callback();
    };
    ds.delete(ds.key('Kind', 123), done);
  });

  it('should multi delete by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.delete.length, 2);
      callback();
    };
    ds.delete([
      ds.key('Kind', 123),
      ds.key('Kind', 345)
    ], done);
  });

  it('should save with incomplete key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.insert_auto_id.length, 1);
      callback();
    };
    var key = ds.key('Kind', null);
    ds.save({ key: key, data: {} }, done);
  });

  it('should save with keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.upsert.length, 2);
      assert.equal(proto.mutation.upsert[0].property[0].name, 'k');
      assert.equal(
        proto.mutation.upsert[0].property[0].value.string_value, 'v');
      callback();
    };
    ds.save([
      { key: ds.key('Kind', 123), data: { k: 'v' } },
      { key: ds.key('Kind', 456), data: { k: 'v' } }
    ], done);
  });

  it('should produce proper allocate IDs req protos', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, typ, callback) {
      assert.equal(method, 'allocateIds');
      assert.equal(proto.key.length, 1);
      assert.deepEqual(proto.key[0], {
        partition_id: null,
        path_element :[{kind:'Kind', name: null, id: null}]
      });
      callback(null, {
        key: [
          { path_element: [{ kind: 'Kind', id: 123 }] }
        ]
      });
    };
    ds.allocateIds(ds.key('Kind', null), 1, function(err, ids) {
      assert.deepEqual(ids[0], ds.key('Kind', 123));
      done();
    });
  });

  it('should throw if trying to allocate IDs with complete keys', function() {
    var ds = new datastore.Dataset({ projectId: 'test' });
    assert.throws(function() {
      ds.allocateIds(ds.key('Kind', 123));
    });
  });

  describe('runInTransaction', function() {
    var ds;
    var transaction;

    beforeEach(function() {
      ds = new datastore.Dataset({ projectId: 'test' });
      ds.createTransaction_ = function() {
        transaction = new Transaction();
        transaction.makeReq = function(method, proto, typ, callback) {
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

  describe('createQuery', function() {
    var ds;
    var dsWithNs;

    beforeEach(function() {
      ds = new datastore.Dataset({ projectId: 'test' });
      dsWithNs = new datastore.Dataset({
        projectId: 'test',
        namespace: 'my-ns'
      });
    });

    it('should not include a namespace on a ns-less dataset', function() {
      var query = ds.createQuery('Kind');
      assert.equal(query.namespace, undefined);
    });

    it('should scope query to namespace', function() {
      var query = dsWithNs.createQuery('Kind');
      assert.equal(query.namespace, 'my-ns');
    });

    it('should allow control over namespace and kinds', function() {
      var queryFromDs = ds.createQuery('my-ns', 'Kind');
      assert.equal(queryFromDs.namespace, 'my-ns');

      var queryFromDsWithNs = dsWithNs.createQuery('Kind');
      assert.equal(queryFromDsWithNs.namespace, 'my-ns');
    });

    it('should allow removal of namespace', function() {
      var query = dsWithNs.createQuery(null, 'Kind');
      assert.strictEqual(query.namespace, null);
    });
  });

  describe('runQuery', function() {
    var ds;
    var query;
    var mockResponse = {
      withResults: {
        batch: { entity_result: mockRespGet.found }
      },
      withResultsAndEndCursor: {
        batch: {
          entity_result: mockRespGet.found,
          end_cursor: new ByteBuffer().writeIString('cursor').flip()
        }
      },
      withoutResults: mockRespGet
    };

    beforeEach(function() {
      ds = new datastore.Dataset({ projectId: 'test' });
      query = ds.createQuery('Kind');
    });

    describe('errors', function() {
      it('should handle upstream errors', function() {
        var upstreamError = new Error('upstream error.');
        ds.transaction.makeReq = function(method, proto, typ, callback) {
          assert.equal(method, 'runQuery');
          callback(upstreamError);
        };

        ds.runQuery(query, function(err) {
          assert.equal(err, upstreamError);
        });
      });

      it('should handle missing results error', function() {
        ds.transaction.makeReq = function(method, proto, typ, callback) {
          assert.equal(method, 'runQuery');
          callback('simulated-error', mockResponse.withoutResults);
        };

        ds.runQuery(query, function(err) {
          assert.equal(err, 'simulated-error');
        });
      });
    });

    it('should execute callback with results', function() {
      ds.transaction.makeReq = function(method, proto, typ, callback) {
        assert.equal(method, 'runQuery');
        callback(null, mockResponse.withResults);
      };

      ds.runQuery(query, function (err, entities) {
        assert.ifError(err);
        assert.deepEqual(entities[0].key.path_, ['Kind', 5732568548769792]);

        var data = entities[0].data;
        assert.strictEqual(data.author, 'Silvano');
        assert.strictEqual(data.isDraft, false);
        assert.deepEqual(data.publishedAt, new Date(978336000000));
      });
    });

    it('should return a new query if results remain', function() {
      ds.transaction.makeReq = function(method, proto, typ, callback) {
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
