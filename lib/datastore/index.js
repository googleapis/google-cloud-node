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

function Transaction(datasetId) {
  this.datasetId = datasetId;

  // the default transaction has no id.
  // if id is not set, run operations non-transactional.
  this.id = null;
  this.isRolledback = false;
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

Transaction.prototype.get = function (key, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.getAll = function(keys, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.put = function(key, obj, callback) {
  throw new Error("not implemented");
};

Transaction.prototype.del = function(key, callback) {
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
  this.id = opts['id'] || '';

  // TODO(jbd): initialize a default transaction
  // TODO(jbd): Validate opts.id.
  this.transaction = null;

  if (this.id.indexOf("s~") < 0 || this.id.indexOf("e~") < 0) {
    this.id = "s~" + this.id;
  }
  // TODO(jbd): initialize a connection
}

/**
 * Initiates a new key.
 * @param  {string} kind      The kind of the key.
 */
Dataset.prototype.key = function(kind) {
  return new Key(this.id, kind);
};

/**
 * Gets the object identified with the provided key.
 * @param  {Key}        key       A non-incomplete key.
 * @param  {Function}   callback  The callback function.
 */
Dataset.prototype.get = function(key, callback) {
  this.transaction.get(key, callback);
};

/**
 * Gets the objects identified with the provided key list.
 * @param  {Array<Key>} keys     A list of non-incomplete keys.
 * @param  {Function}   callback The callback function.
 */
Dataset.prototype.getAll = function(keys, callback) {
  this.transaction.getAll(keys, callback);
};

Dataset.prototype.put = function(key, obj, callback) {
  this.transaction.put(key, obj, callback);
};

Dataset.prototype.del = function(key, callback) {
  this.transaction.del(key, callback);
};

Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

Dataset.prototype.runInTransaction = function(fn) {
  throw new Error("not implemented");
};

Dataset.prototype.allocateIds = function(namespace, key, n, callback) {
  throw new Error("not implemented");
};

module.exports.Key = Key;

module.exports.Dataset = Dataset;
