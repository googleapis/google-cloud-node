var assert = require('assert'),
    entity = require('../lib/datastore/entity.js');

var blogPostMetadata = {
  title:       { kind: String, indexed: true },
  tags:        { kind: String, multi: true, indexed: true },
  publishedAt: { kind: Date },
  author:      { kind: Object, indexed: true },
  isDraft:     { kind: Boolean, indexed: true }
}

describe('registerKind', function() {
  it('should be able to register valid field metadata', function(done) {
    entity.registerKind('namespace', 'kind', blogPostMetadata);
    done();
  });

  it('should set the namespace to be "default" if zero value or null is provided', function(done) {
    entity.registerKind(null, 'kind', blogPostMetadata);
    var meta = entity.getKind('default', 'kind');
    assert.strictEqual(meta, blogPostMetadata);
    done();
  });

  it('should throw an exception if an invalid kind is provided', function(done) {
    assert.throws(function() {
      entity.registerKind(null, '000', blogPostMetadata);
    }, /Kinds should match/);
    done();
  });
});

describe('keyFromKeyProto', function() {
  var protoWithId = {
    partitionId: { namespace: 'Test', datasetId: 'datasetId' },
    path:        [{ kind: 'Kind', id: '111' }]
  };
  var protoWithName = {
    partitionId: { namespace: 'Test', datasetId: 'datasetId' },
    path:        [{ kind: 'Kind', name: 'Name' }]
  };

  it('should convert proto to a key with ID if id is set', function(done) {
    var key = entity.keyFromKeyProto(protoWithId);
    assert.strictEqual(key.ns, 'Test');
    assert.strictEqual(key.kind, 'Kind');
    assert.strictEqual(key.id, '111');
    assert.strictEqual(key.name, undefined);
    done();
  });

  it('should convert proto to a key with name if name is set', function(done) {
    var key = entity.keyFromKeyProto(protoWithName);
    assert.strictEqual(key.ns, 'Test');
    assert.strictEqual(key.kind, 'Kind');
    assert.strictEqual(key.id, undefined);
    assert.strictEqual(key.name, 'Name');
    done();
  });

  it('should not set ns if namespace is default', function(done) {
    var key = entity.keyFromKeyProto({
      partitionId: { namespace: 'default', datasetId: 'datasetId' },
      path:        [{ kind: 'Kind', id: '111' }]
    });
    assert.strictEqual(key.ns, undefined);
    done();
  });

  it('should support incomplete keys', function(done) {
    var key = entity.keyFromKeyProto({
      partitionId: { namespace: 'Test', datasetId: 'datasetId' },
      path:        [{ kind: 'Kind' }]
    });
    assert.strictEqual(key.ns, 'Test');
    assert.strictEqual(key.kind, 'Kind');
    assert.strictEqual(key.id, undefined);
    assert.strictEqual(key.name, undefined);
    done();
  });

});

describe('keyToKeyProto', function() {

  it('should convert a key with ID', function(done) {
    var proto = entity.keyToKeyProto('datasetId', {
      ns: 'Test',
      kind: 'Kind',
      id: '111'
    });
    assert.strictEqual(proto.partitionId.datasetId, 'datasetId');
    assert.strictEqual(proto.partitionId.namespace, 'Test');
    assert.strictEqual(proto.path[0].kind, 'Kind');
    assert.strictEqual(proto.path[0].id, '111');
    assert.strictEqual(proto.path[0].name, undefined);
    done();
  });

  it('should covert a key with name', function(done) {
    var proto = entity.keyToKeyProto('datasetId', {
      ns: 'Test',
      kind: 'Kind',
      name: 'Name'
    });
    assert.strictEqual(proto.partitionId.datasetId, 'datasetId');
    assert.strictEqual(proto.partitionId.namespace, 'Test');
    assert.strictEqual(proto.path[0].kind, 'Kind');
    assert.strictEqual(proto.path[0].id, undefined);
    assert.strictEqual(proto.path[0].name, 'Name');
    done();
  });

  it('should set namesapce to default if none is provided', function(done){
    var proto = entity.keyToKeyProto('datasetId', {
      kind: 'Kind',
      name: 'Name'
    });
    assert.strictEqual(proto.partitionId.namespace, 'default');
    done();
  });

  it('should support incomplete keys', function(done){
    var proto = entity.keyToKeyProto('datasetId', {
      kind: 'Kind'
    });
    assert.strictEqual(proto.partitionId.datasetId, 'datasetId');
    assert.strictEqual(proto.partitionId.namespace, 'default');
    assert.strictEqual(proto.path[0].kind, 'Kind');
    assert.strictEqual(proto.path[0].id, undefined);
    assert.strictEqual(proto.path[0].name, undefined);
    done();
  });

});

describe('isKeyComplete', function() {

  it('should return true if kind and one of the identifiers have non-zero values', function(done) {
    assert.ok(entity.isKeyComplete({ kind: 'Kind', id: '111' }));
    assert.ok(entity.isKeyComplete({ kind: 'Kind', name: 'Name' }));
    assert.strictEqual(entity.isKeyComplete({ kind: 'Kind' }), false);
    assert.strictEqual(entity.isKeyComplete({}), false);
    done();
  });

});

describe('entityFromEntityProto', function() {

  it('should support boolean, integer, double, string, entity and list values', function(done) {
    var obj = entity.entityFromEntityProto(entityProto);
    assert.strictEqual(obj.createdAt.getTime(), new Date('2001-01-01').getTime());
    assert.strictEqual(obj.linkedTo.ns, undefined);
    assert.strictEqual(obj.linkedTo.kind, 'Kind');
    assert.strictEqual(obj.linkedTo.id, '4790047639339008');
    assert.strictEqual(obj.name, 'Name');
    assert.strictEqual(obj.flagged, true);
    assert.strictEqual(obj.count, 5);
    assert.strictEqual(obj.total, 5.42);
    assert.strictEqual(obj.author.name, 'Burcu Dogan');
    assert.strictEqual(obj.list[0], 6);
    assert.strictEqual(obj.list[1], false);
    done();
  });

});

var keyProto = {
  "partitionId":{
     "datasetId":"s~bamboo-shift-xxx",
     "namespace":"default"
  },
  "path":[
     {
        "kind":"Kind",
        "id":"4790047639339008"
     }
  ]
};

var entityProto = {
   "properties":{
      "createdAt":{
         "dateTimeValue":"2001-01-01T00:00:00.000Z"
      },
      "linkedTo": {
         "keyValue": keyProto
      },
      "name":{
         "stringValue":"Name"
      },
      "flagged":{
         "booleanValue":true
      },
      "count":{
         "integerValue":"5"
      },
      "total":{
         "doubleValue": "5.42"
      },
      "author": {
         "entityValue": {
             "properties": {
                "name": { "stringValue": "Burcu Dogan" }
             }
         }
      },
      "list": {
         "listValue": [{ "integerValue": "6" }, { "booleanValue": false }]
      }
   }
};
