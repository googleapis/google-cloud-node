var assert = require('assert'),
    datastore = require('../lib/datastore');

describe('Keys', function() {

  var ds = new datastore.Dataset();
  it('should set kind, namespace, ids and names properly', function(done) {
    var keyWithId = ds.key('kind1').namespace('ns1').id(10),
        keyWithName = ds.key('kind2').namespace('ns2').name('key1');

    assert.equal(keyWithId.kind, 'kind1');
    assert.equal(keyWithId.keyNS, 'ns1');
    assert.equal(keyWithId.keyId, 10);
    assert.strictEqual(keyWithId.keyName, null);

    assert.equal(keyWithName.kind, 'kind2');
    assert.equal(keyWithName.keyNS, 'ns2');
    assert.equal(keyWithName.keyId, 0);
    assert.equal(keyWithName.keyName, 'key1');

    done();
  });

  it('should ignore the numeric if a key name is set and vice versa', function(done) {
    var key1 = ds.key('kind1').id(10).name('key1'),
        key2 = ds.key('kind2').name('key2').id(20);
    assert.strictEqual(key1.keyId, 0);
    assert.strictEqual(key1.keyName, 'key1');
    assert.strictEqual(key2.keyId, 20);
    assert.strictEqual(key2.keyName, null);
    done();
  });

  it('should be able to determine incomplete keys', function(done) {
    var keyWithNS = ds.key('kind').namespace('n'),
        key = ds.key('kind');
    assert.ok(!keyWithNS.isComplete());
    assert.ok(!key.isComplete());
    done();
  });

  it('should be able to determine complete keys', function(done) {
    var key = ds.key('kind').id(10),
        keyWithName = ds.key('kind').name('keyName');
    assert.ok(key.isComplete());
    assert.ok(keyWithName.isComplete());
    done();
  });

});

describe('Dataset', function() {

});
