var assert = require('assert'),
    datastore = require('../lib/datastore'),
    mockResp_get = require('./testdata/response_get.json');

describe('Keys', function() {

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
      assert.strictEqual(obj.bytes, 'aGVsbG8=');
      assert.strictEqual(obj.done, false);
      assert.strictEqual(obj.total, 6.7);
      assert.strictEqual(obj.createdat.getTime(), 978307200000);
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
