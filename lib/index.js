var datastore = require('./datastore'),
    entity = require('./datastore/entity.js');

datastore.Int = function(val) {
  return new entity.Int(val);
};

datastore.Double = function(val) {
  return new entity.Double(val);
};

module.exports = {
  datastore: datastore,
  storage: require('./storage')
};
