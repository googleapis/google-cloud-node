var entityMeta = {};

var namespaceRegex = kindRegex = fieldNameRegex = new RegExp(/^[A-Za-z]+$/);

module.exports.keyFromKeyProto = function(proto) {
  var path = proto.path[0];
  var key = {};
  if (proto.partitionId.namespace != 'default') {
    key.ns = proto.partitionId.namespace;
  }
  key.kind = path.kind;
  if (path.id) {
    key.id = path.id;
  }
  if (path.name) {
    key.name = path.name;
  }
  return key;
}

module.exports.keyToKeyProto = function(datasetId, key) {
  var p = { kind: key.kind };
  if (key.id) {
    p.id = key.id;
  }
  if (key.name) {
    p.name = key.name;
  }
  return {
    partitionId: { datasetId: datasetId, namespace: key.ns },
    path: [p]
  };
}

module.exports.isKeyComplete = function(key) {
  return key.kind && (key.id || key.name);
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
module.exports.getKind = getKind

