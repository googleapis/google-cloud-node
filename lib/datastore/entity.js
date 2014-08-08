/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var entityMeta = {};
var fieldNameRegex = /^[A-Za-z]*$/;
var kindRegex = /^[A-Za-z]*$/;
var namespaceRegex = /^[A-Za-z]*$/;

/**
 * Conversion dict for query operation to operation proto value.
 * @type {Object}
 */
var opToOperatorDict = {
  '=':  'EQUAL',
  '>':  'GREATER_THAN',
  '>=': 'GREATER_THAN_OR_EQUAL',
  '<':  'LESS_THAN',
  '<=': 'LESS_THAN_OR_EQUAL',
  'HAS_ANCESTOR': 'HAS_ANCESTOR'
};

/**
 * Conversion dict for query sign to order proto value.
 * @type {Object}
 */
var signToOrderDict = {
  '-':  'DESCENDING',
  '+':  'ASCENDING'
};

function Key(path) {
  this.path_ = path;
}

module.exports.Key = Key;

function Int(val) {
  this.val_ = val;
}

Int.prototype.get = function() {
  return this.val_;
};

module.exports.Int = Int;

function Double(val) {
  this.val_ = val;
}

Double.prototype.get = function() {
  return this.val_;
};

module.exports.Double = Double;

/**
 * Converts any entity proto to a plain object.
 */
var entityFromEntityProto = function(proto) {
  // TODO(jbd): Use registered metadata if provided.
  return propertiesToObject(proto.properties);
};

/**
 * Exports entityFromEntityProto.
 * @type {Function}
 */
module.exports.entityFromEntityProto = entityFromEntityProto;

var keyFromKeyProto = function(proto) {
  var path = [];
  if (proto.partitionId.namespace) {
    path.push(proto.partitionId.namespace);
  }
  proto.path.forEach(function(p) {
    path.push(p.kind);
    path.push(Number(p.id) || p.name || null);
  });
  return new Key(path);
};

module.exports.keyFromKeyProto = keyFromKeyProto;

var keyToKeyProto = function(key) {
  var keyPath = key.path_;
  if (keyPath.length < 2) {
    throw new Error('A key should contain at least a kind and an identifier.');
  }
  var namespace = null;
  var start = 0;
  if (keyPath.length % 2 === 1) {
    // the first item is the namespace
    namespace = keyPath[0];
    start = 1;
  }
  var path = [];
  for (var i = start; i < (keyPath.length - start); i += 2) {
    var p = { kind: keyPath[i] };
    var val = keyPath[i+1];
    if (val) {
      // if not numeric, set key name.
      if (isNaN(val)) {
        p.name = val;
      } else {
        p.id = val;
      }
    }
    path.push(p);
  }
  var proto = {
    path: path
  };
  if (namespace) {
    proto.partitionId = {
      namespace: namespace
    };
  }
  return proto;
};

module.exports.keyToKeyProto = keyToKeyProto;

module.exports.formatArray = function(results) {
  return results.map(function(result) {
    return {
      key: keyFromKeyProto(result.entity.key),
      data: entityFromEntityProto(result.entity)
    };
  });
};

module.exports.isKeyComplete = function(key) {
  var proto = keyToKeyProto(key);
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
      return new Int(parseInt(property[valueType])).get();
    case 'doubleValue':
      return new Double(parseFloat(property[valueType])).get();
    case 'stringValue':
      return property[valueType];
    case 'blobValue':
      return new Buffer(property[valueType], 'base64');
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
}

function propertiesToObject(properties) {
  properties = properties || [];
  var obj = {};
  for (var name in properties) {
    obj[name] = propertyToValue(properties[name]);
  }
  return obj;
}

/**
 * Convert any object to property value.
 */
function valueToProperty(v) {
  var p = {};
  if (v instanceof Boolean || typeof v === 'boolean') {
    p.booleanValue = v;
    return p;
  }
  if (v instanceof Int) {
    p.integerValue = v.get();
    return p;
  }
  if (v instanceof Double) {
    p.doubleValue = v.get();
    return p;
  }
  if (v instanceof Number || typeof v === 'number') {
    if (v % 1 === 0) {
      p.integerValue = v;
    } else {
      p.doubleValue = v;
    }
    return p;
  }
  if (v instanceof String || typeof v === 'string') {
    p.stringValue = v;
    return p;
  }
  if (v instanceof Date) {
    p.dateTimeValue = v;
    return p;
  }
  if (v instanceof Buffer) {
    p.blobValue = v.toString('base64');
    return p;
  }
  if (v instanceof Array) {
    // TODO: Detect keys?
    p.listValue = v.map(function(item) {
      return valueToProperty(item);
    });
    return p;
  }
  if (v instanceof Key) {
    p.keyValue = keyToKeyProto(v);
    return p;
  }
  if (v instanceof Object && Object.keys(v).length > 0) {
    var properties = {};
    Object.keys(v).forEach(function(k) {
      properties[k] = valueToProperty(v[k]);
    });
    p.entityValue = { properties: properties };
    return p;
  }
  throw new Error('Unsupported field value, ' + v + ', is provided.');
}

/**
 * Converts entity to an entity proto.
 */
var entityToEntityProto = function(obj) {
  var ent = {
    key: null,
    properties: {}
  };
  Object.keys(obj).forEach(function(k) {
    ent.properties[k] = valueToProperty(obj[k]);
  });
  return ent;
};

/**
 * Exports entityToEntityProto.
 * @type {Function}
 */
module.exports.entityToEntityProto = entityToEntityProto;

/**
 * Converts a query to query proto.
 */
var queryToQueryProto = function(q) {
  var query = {};
  query.projection = q.selectVal.map(function(v) {
    return { property: { name: v } };
  });
  query.kinds = q.kinds.map(function(k) {
    return { name: k };
  });
  // filters
  if (q.filters.length > 0) {
    var filters = q.filters.map(function(f) {
      var val = {};
      if (f.name === '__key__') {
        val.keyValue = keyToKeyProto(f.val);
      } else {
        val = valueToProperty(f.val);
      }
      var property = {
        property: { name: f.name },
        operator: opToOperatorDict[f.op],
        value: val
      };
      return { propertyFilter: property };
    });
    query.filter = {
      compositeFilter: { filters: filters, operator: 'AND' }
    };
  }
  query.order = q.orders.map(function(o) {
    return {
      property:  { name: o.name },
      direction: signToOrderDict[o.sign]
    };
  });
  query.groupBy = q.groupByVal.map(function(g) {
    return { name: g };
  });
  // pagination
  if (q.startVal) {
    query.startCursor = q.startVal;
  }
  if (q.endVal) {
    query.endCursor = q.endVal;
  }
  if (q.offsetVal > 0) {
    query.offset = q.offsetVal;
  }
  if (q.limitVal > 0) {
    query.limit = q.limitVal;
  }
  return query;
};

/**
 * Exports queryToQueryProto.
 * @type {Function}
 */
module.exports.queryToQueryProto = queryToQueryProto;

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
  namespace = namespace || '';
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
  if (typeof field.kind !== 'object' &&
      primitiveKinds.indexOf(field.kind) === -1) {
    throw new Error('Unknown kind for field ' + name);
  }
  if (typeof field.kind === 'object') {
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
module.exports.getKind = getKind;
