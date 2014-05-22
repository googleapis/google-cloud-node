var assert = require('assert'),
    entity = require('../lib/datastore/entity.js');

var blogPostMetadata = {
  title:       { kind: entity.kinds.STRING, indexed: true },
  tags:        { kind: entity.kinds.STRING, multi: true, indexed: true },
  publishedAt: { kind: entity.kinds.DATETIME },
  author:      { kind: entity.kinds.KEY, indexed: true },
  isDraft:     { kind: entity.kinds.BOOL, indexed: true }
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
