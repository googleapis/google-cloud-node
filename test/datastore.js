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

var assert = require('assert'),
    datastore = require('../lib').datastore,
    mockResp_get = require('./testdata/response_get.json');

describe('Transaction', function() {

  it('should begin', function(done) {
    var t = new datastore.Transaction(null, 'test');
    t.makeReq = function(method, proto, callback) {
      assert.equal(method, 'beginTransaction');
      assert.equal(proto, null);
      callback(null, 'some-id');
    };
    t.begin(done);
  });

  it('should rollback', function(done) {
    var t = new datastore.Transaction(null, 'test');
    t.id = 'some-id';
    t.makeReq = function(method, proto, callback) {
      assert.equal(method, 'rollback');
      assert.deepEqual(proto, { transaction: 'some-id' });
      callback();
    };
    t.rollback(function() {
      assert.equal(t.isFinalized, true);
      done();
    });
  });

  it('should commit', function(done) {
    var t = new datastore.Transaction(null, 'test');
    t.id = 'some-id';
    t.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.deepEqual(proto, { transaction: 'some-id' });
      callback();
    };
    t.commit(function() {
      assert.equal(t.isFinalized, true);
      done();
    });
  });

  it('should be committed if not rolled back', function(done) {
    var t = new datastore.Transaction(null, 'test');
    t.isFinalized = false;
    t.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      done();
    };
    t.finalize();
  });

});

describe('Dataset', function() {

  it('should append ~s if ~s or ~e are not presented', function(done) {
    var dsWithNoPrefix = new datastore.Dataset({ projectId: 'test' });
    var dsWithSPrefix = new datastore.Dataset({ projectId: 's~name' });
    var dsWithEPrefix = new datastore.Dataset({ projectId: 'e~name' });
    assert.equal(dsWithNoPrefix.id, 's~test');
    assert.equal(dsWithSPrefix.id, 's~name');
    assert.equal(dsWithEPrefix.id, 'e~name');
    done();
  });

  it('should get by key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.keys.length, 1);
      callback(null, mockResp_get);
    };
    ds.get(['Kind', 123], function(err, key, obj) {
      assert.deepEqual(key, ['Kind', 5732568548769792]);
      assert.strictEqual(obj.name, 'Burcu');
      assert.deepEqual(obj.bytes, new Buffer('hello'));
      assert.strictEqual(obj.done, false);
      assert.deepEqual(obj.total, 6.7);
      assert.strictEqual(obj.createdat.getTime(), 978307200000);
      done();
    });
  });

  it('should multi get by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'lookup');
      assert.equal(proto.keys.length, 1);
      callback(null, mockResp_get);
    };
    ds.getAll([
        ['Kind', 123]], function(err, keys, objs) {
      assert.deepEqual(keys[0], ['Kind', 5732568548769792]);
      assert.strictEqual(objs[0].name, 'Burcu');
      assert.deepEqual(objs[0].bytes, new Buffer('hello'));
      assert.strictEqual(objs[0].done, false);
      assert.deepEqual(objs[0].total, 6.7);
      assert.strictEqual(objs[0].createdat.getTime(), 978307200000);
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
    ds.del(['Kind', 123], done);
  });

  it('should multi delete by keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.delete.length, 2);
      callback();
    };
    ds.delAll([
      ['Kind', 123], ['Kind', 345]
    ], done);
  });

  it('should throw if number of keys dont match the number of objs', function() {
    assert.throws(function() {
      var ds = new datastore.Dataset({ projectId: 'test' });
      ds.saveAll([
        ['Kind', 123], ['Kind', 456]], [{}], function(){});
    }, /The length of the keys/);
  });

  it('should save with incomplete key', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.insertAutoId.length, 1);
      callback();
    };
    ds.save(['Kind', 123, null], {}, done);
  });

  it('should save with keys', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'commit');
      assert.equal(proto.mutation.update.length, 2);
      assert.equal(proto.mutation.update[0].properties.k.stringValue, 'v');
      callback();
    };
    ds.saveAll([
        ['Kind', 123], ['Kind', 456]], [{k: 'v'}, {k: 'v'}], done);
  });

  it('should produce proper allocate IDs req protos', function(done) {
    var ds = new datastore.Dataset({ projectId: 'test' });
    ds.transaction.makeReq = function(method, proto, callback) {
      assert.equal(method, 'allocateIds');
      assert.equal(proto.keys.length, 1);
      assert.deepEqual(proto.keys[0], {
        partitionId:{
          datasetId: 's~test',
          namespace: 'default'
        },
        path :[{kind:'Kind'}]
      });
      callback(null, { keys: [{ partitionId: { datasetId: 's~test', namespace: 'default' }, path :[{kind:'Kind', id: '123'}]}]});
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

});
