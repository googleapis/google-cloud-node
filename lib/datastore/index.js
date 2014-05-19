/**
 * Key represent an object's identifier key.
 * @param {String} datasetId ID of the dataset.
 * @param {String} namespace Namespace of the key.
 *                           If none provided, "default" is used.
 * @param {String} kind      Kind of the identified object.
 * @param {Number} opt_id    Optional ID. If known, objects unique
 *                           numeric identifier.
 */
function Key(datasetId, namespace, kind, opt_id) {
  this.datasetId = datasetId;
  this.namespace = namespace || 'default';
  this.kind = kind;
  this.id = opt_id || 0;
}

/**
 * Returns true if numeric identifier is known.
 */
Key.prototype.isIncomplete() {
  return this.id && this.datasetId && this.namespace && this.kind;
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
  this.id = opts['id'];
  if this.id.indexOf("s~") < 0 || this.id.indexOf("e~") < 0 {
    this.id = "s~" + this.id;
  } 
  // TODO(jbd): initialize a connection
  // TODO(jbd): initialize a default transaction

/**
 * Initiates a new key.
 * @param  {string} namespace The namespace of the key. If none provided,
 *                            "default" is used.
 * @param  {string} kind      The kind of the key.
 * @param  {number} opt_id    If known, the unique numeric identifier
 *                            of the key. If none provided, returned
 *                            key will be incomplete.
 * @return {Key}              A new key.
 */
Dataset.prototype.key = function(namespace, kind, opt_id) {
  return Key(this.id, namespace, kind, opt_id);
};

/**
 * Gets the object identified with the provided key.
 * @param  {Key}        key       A non-incomplete key.
 * @param  {Function}   callback  The callback function.
 */
Dataset.prototype.get = function(key, callback) {
  throw new Error("not implemented");
};

/**
 * Gets the objects identified with the provided key list.
 * @param  {Array<Key>} keys     A list of non-incomplete keys.
 * @param  {Function}   callback The callback function.
 */
Dataset.prototype.getAll = function(keys, callback) {
  throw new Error("not implemented");
};

Dataset.prototype.put = function(key, obj, callback) {
  throw new Error("not implemented");
};

Dataset.prototype.del = function(key, callback) {
  throw new Error("not implemented");
};

Dataset.prototype.runQuery = function(q, callback) {
  throw new Error("not implemented");
};

Dataset.prototype.runInTransaction = function(fn) {
  throw new Error("not implemented");
};

Dataset.prototype.allocateIds = function(namespace, key, n, callback) {
  throw new Error("not implemented");
};

module.exports = {
  Dataset: Dataset
};
