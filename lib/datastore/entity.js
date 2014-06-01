var entityMeta = {};

var namespaceRegex = kindRegex = fieldNameRegex = new RegExp(/^[A-Za-z]+$/);

var keyFromKeyProto = function(proto) {
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
};

module.exports.keyFromKeyProto = keyFromKeyProto;

module.exports.keyToKeyProto = function(datasetId, key) {
  key.ns = key.ns || 'default';
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
};

module.exports.isKeyComplete = function(key) {
  if (!key.kind) {
    return false;
  }
  if (key.id || key.name) {
    return true;
  }
  return false;
};

function propertyToValue(property) {
  var valueType = Object.keys(property)[0];
  switch (valueType) {
    case 'booleanValue':
      return property[valueType];
    case 'integerValue':
      return parseInt(property[valueType]);
    case 'doubleValue':
      return parseFloat(property[valueType]);
    case 'stringValue':
    case 'blobValue':
      return property[valueType];
    case 'dateTimeValue':
      return new Date(property[valueType]);
    case 'keyValue':
      return keyFromKeyProto(property[valueType]);
    case 'entityValue':
      // TODO(jbd): Should ignore the key?
      return entityFromEntityProto(property[valueType]);
    case 'listValue':
      var l = [];
      for (var i in property[valueType]) {
        l.push(propertyToValue(property[valueType][i]));
      }
      return l;
  }
};

function propertiesToObject(properties) {
  properties = properties || [];
  var obj = {};
  for (var name in properties) {
    obj[name] = propertyToValue(properties[name]);
  }
  return obj;
};

var entityFromEntityProto = function(proto) {
  // TODO(jbd): Use registered metadata if provided.
  return propertiesToObject(proto.properties);
};

module.exports.entityFromEntityProto = entityFromEntityProto;

var primitiveKinds = [
  Object,
  Boolean,
  Number,
  String,
  Date,
  Buffer
];

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

