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

/*jshint camelcase:false */

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
  var properties = proto.property || [];
  var obj = {};
  for (var i=0; i < properties.length; i++) {
    var name = properties[i].name;
    obj[name] = propertyToValue(properties[i].value);
  }
  return obj;
};

/**
 * Exports entityFromEntityProto.
 * @type {Function}
 */
module.exports.entityFromEntityProto = entityFromEntityProto;

var keyFromKeyProto = function(proto) {
  var path = [];
  if (proto.partition_id && proto.partition_id.namespace) {
    path.push(proto.partition_id.namespace);
  }
  proto.path_element.forEach(function(p) {
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
    path_element: path
  };
  if (namespace) {
    proto.partition_id = {
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
  for (var i = 0; i < proto.path_element.length; i++) {
    if (!proto.path_element[i].kind) {
      return false;
    }
    if (!proto.path_element[i].id && !proto.path_element[i].name) {
      return false;
    }
  }
  return true;
};

function propertyToValue(property) {
  if (property.boolean_value !== null) {
    return property.boolean_value;
  }
  if (property.integer_value !== null) {
    // TODO(jbd): Do we need uint64s and keep Long.js support?
    return parseInt(property.integer_value.toString(), 10)
  }
  if (property.double_value !== null) {
    return property.double_value;
  }
  if (property.string_value !== null) {
    return property.string_value;
  }
  if (property.blob_value !== null) {
    return new Buffer(property.blob_value, 'base64');
  }
  if (property.timestamp_microseconds_value !== null) {
    var microSecs = parseInt(
        property.timestamp_microseconds_value.toString(), 10);
    return new Date(microSecs/1000);
  }
  if (property.key_value !== null) {
    return keyFromKeyProto(property.key_value);
  }
  if (property.entity_value !== null) {
    return entityFromEntityProto(property.entity_value);
  }
  if (property.list_value !== null) {
    var l = [];
    for (var i = 0; i < property.list_value.length; i++) {
      l.push(propertyToValue(property.list_value[i]));
    }
    return l;
  }
}

/**
 * Convert any object to property value.
 */
function valueToProperty(v) {
  var p = {};
  if (v instanceof Boolean || typeof v === 'boolean') {
    p.boolean_value = v;
    return p;
  }
  if (v instanceof Int) {
    p.integer_value = v.get();
    return p;
  }
  if (v instanceof Double) {
    p.double_value = v.get();
    return p;
  }
  if (v instanceof Number || typeof v === 'number') {
    if (v % 1 === 0) {
      p.integer_value = v;
    } else {
      p.double_value = v;
    }
    return p;
  }
  if (v instanceof Date) {
    p.timestamp_microseconds_value = v.getTime() * 1000;
    return p;
  }
  if (v instanceof String || typeof v === 'string') {
    p.string_value = v;
    return p;
  }
  if (v instanceof Buffer) {
    p.blob_value = v;
    return p;
  }
  if (v instanceof Array) {
    p.list_value = v.map(function(item) {
      return valueToProperty(item);
    });
    return p;
  }
  if (v instanceof Key) {
    p.key_value = keyToKeyProto(v);
    return p;
  }
  if (v instanceof Object && Object.keys(v).length > 0) {
    var property = [];
    Object.keys(v).forEach(function(k) {
      property.push({
        name: k,
        value: valueToProperty(v[k])
      });
    });
    p.entity_value = { property: property };
    p.indexed = false;
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
    property: []
  };
  Object.keys(obj).forEach(function(k) {
    ent.property.push({
      name: k,
      value: valueToProperty(obj[k])
    });
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
  query.kind = q.kinds.map(function(k) {
    return { name: k };
  });
  // filters
  if (q.filters.length > 0) {
    var filters = q.filters.map(function(f) {
      var val = {};
      if (f.name === '__key__') {
        val.key_value = keyToKeyProto(f.val);
      } else {
        val = valueToProperty(f.val);
      }
      var property = {
        property: { name: f.name },
        operator: opToOperatorDict[f.op],
        value: val
      };
      return { property_filter: property };
    });
    query.filter = {
      composite_filter: { filter: filters, operator: 'AND' }
    };
  }
  query.order = q.orders.map(function(o) {
    return {
      property:  { name: o.name },
      direction: signToOrderDict[o.sign]
    };
  });
  query.group_by = q.groupByVal.map(function(g) {
    return { name: g };
  });
  // pagination
  if (q.startVal) {
    query.start_cursor = new Buffer(q.startVal, 'base64');
  }
  if (q.endVal) {
    query.end_cursor = new Buffer(q.endVal, 'base64');
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
