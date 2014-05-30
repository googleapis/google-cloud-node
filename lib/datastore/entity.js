var entityMeta = {};

var namespaceRegex = kindRegex = fieldNameRegex = new RegExp(/^[A-Za-z]+$/);

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

/**
 * Registers a kind and its field meta globally. In order
 * to perform CRUD operations for a kind, you should register
 * it with its field metadata.
 *
 * registerKind('namespace', 'Author', {
 *   name: { kind: STRING, indexed: false },
 *   tags: { kind: STRING, multi: true }, // an array of string elements.
 *   favArticles: { kind: KEY, multi: true }
 *   contact: {
 *     kind: {
 *       telephone: { kind: String },
 *       email: { kind: String }
 *     }
 *   }
 * });
 *
 * @param  {string} namespace  Namespace of the kind.
 * @param  {string} kind       Name of the kind.
 * @param  {object} fieldMeta  Object that contains metadata information
 *                             about the fields.
 */
function registerKind(namespace, kind, fieldMeta) {
  // validate the input and put it to the dictionary
  namespace = namespace || 'default';
  if (!namespaceRegex.test(namespace)) {
    throw new Error('Namespaces should match ' + namespaceRegex);
  }
  if (!kindRegex.test(kind)) {
    throw new Error('Kinds should match ' + kindRegex);
  }

  // TODO(jbd): Validate namespace, kind and fieldMeta.
  Object.keys(fieldMeta).forEach(function(fieldName) {
    validateField(fieldName, fieldMeta[fieldName]);
  });

  if (!entityMeta[namespace]) {
    entityMeta[namespace] = {};
  }
  entityMeta[namespace][kind] = fieldMeta;
}

function getKind(namespace, kind) {
  return entityMeta[namespace] && entityMeta[namespace][kind];
}

function validateField(name, field) {
  if (!fieldNameRegex.test(name)) {
    throw new Error('Field name should match ' + fieldNameRegex);
  }
  if (!field.kind) {
    throw new Error('Provide a kind for field ' + name);
  }
  if (typeof field.kind != 'object' &&
      !primitiveKinds.indexOf(field.kind) < 0) {
    throw new Error('Unknown kind for field ' + name);
  }
  if (typeof field.kind == 'object') {
    Object.keys(field.key).forEach(function(key) {
      validateField(key, field.key[key]);
    });
  }
}

var primitiveKinds = [
  Object,
  Boolean,
  Number,
  String,
  Date,
  Buffer
];

/**
 * Export registerKind.
 * @type {function}
 */
module.exports.registerKind = registerKind;

/**
 * Exports getKind.
 * @type {function}
 */
module.exports.getKind = getKind;

/**
 * Exports Key.
 * @type {Key}
 */
module.exports.Key = Key;
