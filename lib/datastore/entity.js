var entityMeta = {};

var namespaceRegex = kindRegex = fieldNameRegex = new RegExp(/^[A-Za-z]+$/);

var keyFromKeyProto = function(proto) {
  var key = [];
  if (proto.partitionId.namespace != 'default') {
    key.push(proto.partitionId.namespace);
  }
  proto.path.forEach(function(p) {
    key.push(p.kind);
    key.push(Number(p.id) || p.name || null);
  });
  return key;
};

module.exports.keyFromKeyProto = keyFromKeyProto;

var keyToKeyProto = function(datasetId, key) {
  if (key.length < 2) {
    throw new Error("A key should contain at least a kind and an idenfier.")
  }
  var namespace = 'default', start = 0;
  if (key.length % 2 == 1) {
    // the first item is the namepsace
    namespace = key[0];
    start = 1;
  }
  var path = [];
  for (var i = start; i < (key.length - start); i += 2) {
    var p = { kind: key[i] }, val = key[i+1];
    if (val) {
      // if not numeric, set key name.
      if (isNaN(val)) { p.name = val; }
      else { p.id = val; }
    }
    path.push(p);
  }
  return {
    partitionId: { datasetId: datasetId, namespace: namespace },
    path: path
  };
};

module.exports.keyToKeyProto = keyToKeyProto;

module.exports.isKeyComplete = function(key) {
  var proto = keyToKeyProto(null, key);
  for (var i = 0; i < proto.path.length; i++) {
    if (!proto.path[i].kind) {
      return false;
    }
    if (!proto.path[i].id && !proto.path[i].name) {
      return false;
    }
  }
  return true;
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

