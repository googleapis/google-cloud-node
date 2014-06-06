var datastore = require('./datastore');
datastore.Int = require('./datastore/entity.js').Int;
datastore.Double = require('./datastore/entity.js').Double;

module.exports = {
  datastore: datastore,
  storage: require('./storage')
};
