var conn = require('../common/connection.js'),
    Query = require('./query.js').Query;

function cloneKey(key) {
  var newKey = new Key(key.datasetId, key.kind);
  newKey.kind = key.kind;
  newKey.keyNS = key.keyNS;
  newKey.keyId = key.keyId;
  newKey.keyName = key.keyName;
  return newKey;
}

/**
 * Key represent an object's identifier key.
 * @param {String} datasetId ID of the dataset.
 * @param {String} namespace Namespace of the key.
 *                           If none provided, "default" is used.
 * @param {String} kind      Kind of the identified object.
 * @param {Number} opt_id    Optional ID. If known, objects unique
 *                           numeric identifier.
 */
function Key(datasetId, kind) {
  this.datasetId = datasetId;
  this.kind = kind;
  this.keyNS = 'default';
  this.keyId = 0;
  this.keyName = null;
}

/**
 * Clones the key and sets a new namespace.
 * @param  {string} namespace Key's namespace.
 * @return {Key}              A new Key object with the
 *                            specified namespace.
 */
Key.prototype.namespace = function(namespace) {
  var key = cloneKey(this);
  key.keyNS = namespace;
  return key;
};

/**
 * Clones the key and sets a new numeric id.
 * @param  {Number} id  Key's numeric identifier.
 * @return {Key}        A new Key object with the specified
 *                      numeric identifier.
 */
Key.prototype.id = function(id) {
  var key = cloneKey(this);
  key.keyId = id || 0;
  key.keyName = null;
  return key;
};

/**
 * Clones the key and sets a new key name.
 * @param  {string} name Key's non numeric identifier.
 * @return {Key}         A new Key object with the specified key name.
 */
Key.prototype.name = function(name) {
  var key = cloneKey(this);
  key.keyId = 0;
  key.keyName = name;
  return key;
};

/**
 * Returns true if key has a valid identifier.
 */
Key.prototype.isComplete = function() {
  return this.datasetId && this.keyNS && this.kind && (this.keyName || this.keyId);
}

function Transaction(conn, datasetId) {
  this.conn = conn;
  this.datasetId = datasetId;
  // the default transaction has no id.
  // if id is not set, run operations non-transactional.
  this.id = null;
  this.isFinalized = false;
}

Transaction.prototype.begin = function(callback) {
  throw new Error("not implemented");
};

Transaction.prototype.rollback = function(callback) {
  throw new Error("not implemented");
};

Transaction.prototype.commit = function(callback) {
  throw new Error("not implemented");
};

Transaction.prototype.finalize = function(callback) {
  throw new Error("not implemented");
};

Transaction.prototype.get = function(keys, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.put = function(keys, objs, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.del = function(keys, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.runQuery = function(q, callback) {
  throw new Error("not implemented");
}

/**
 * Creates a new dataset with the provided options.
 * @param {object} opts             Dataset identifier options.
 * @param {string} opts.id          Dataset ID, this is your project ID
 *                                  from Google Developer Console.
 * @param {string} opts.email       Client email of the service account.
 * @param {string} opts.pemFilepath The path to the pem file.
 */
function Dataset(opts) {
  opts = opts || {};
  var id = opts.id || '';

  if (id.indexOf("s~") < 0 || id.indexOf("e~") < 0) {
    id = "s~" + id;
  }

  this.id = id;
  this.transaction = new Transaction(new conn.Connection({
    email: opts.email,
    privateKey: opts.pemFilePath,
    scopes: []
  }), this.id);
}

/**
 * Initiates a new key.
 * @param  {string} kind The kind of the key.
 */
Dataset.prototype.key = function(kind) {
  return new Key(this.id, kind);
};

/**
 * Creates a query from the current dataset to query the specified
 * kinds.
 * @param  {Array<String>} kinds A list of kinds to query.
 * @return {Query}
 */
Dataset.prototype.query = function(kinds) {
  kinds = kinds.map(function(val) {
    return { ns: 'default', kind: val };
  });
  return new Query(this.id, kinds);
};

/**
 * Creates a query for collections identified with the specified
 * namespace and kinds.
 *
 * Example usage:
 *   ds.queryNs([{ns: 'zoo', kind: 'Animal' }, {ns: 'test', kind: 'Student'}])
 *
 * @param  {Array<object>} kindAndNamespaces
 * @return {Query}
 */
Dataset.prototype.queryNS = function(nsAndKeys) {
  return new Query(this.id, nsAndKeys);
};

/**
 * Gets the object identified with the provided key.
 * @param  {Key}        key       A non-incomplete key.
 * @param  {Function}   callback  The callback function.
 */
Dataset.prototype.get = function(keys, callback) {
  this.transaction.get(keys, callback);
};

Dataset.prototype.put = function(keys, objs, callback) {
  this.transaction.put(keys, obj, callback);
};

Dataset.prototype.del = function(keys, callback) {
  this.transaction.del(key, callback);
};

Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

Dataset.prototype.runInTransaction = function(fn, callback) {
  var t = new Transaction(this.transaction.conn, this.id);
  var done = function() {
    t.finalize(callback);
  };
  t.begin(function(err) {
    if (err){
      return callback(err);
    }
    fn(t, done);
  });
};

Dataset.prototype.allocateIds = function(kind, n, callback) {
  this.allocateIdsNS('default', kind, n, callback);
};

Dataset.prototype.allocateIdsNS = function(namespace, kind, n, callback) {
  throw new Error("not implemented");
};

/**
 * Exports Key.
 * @type {Key}
 */
module.exports.Key = Key;

/**
 * Exports Dataset.
 * @type {Dataset}
 */
module.exports.Dataset = Dataset;
