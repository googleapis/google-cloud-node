var assert = require('assert'),
    datastore = require('../lib/datastore');

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

});
