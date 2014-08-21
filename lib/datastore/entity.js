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

/**
 * @module datastore/entity
 */

'use strict';

/**
 * @type {object}
 * @private
 */
var entityMeta = {};

/**
 * Regular expression to verify a field name.
 * @private
 * @const {regexp}
 */
var FIELD_NAME_REGEX = /^[A-Za-z]*$/;

/**
 * Regular expression to verify a Kind.
 * @private
 * @const {regexp}
 */
var KIND_REGEX = /^[A-Za-z]*$/;

/**
 * Regular Expression to verify a namespace.
 * @private
 * @const {regexp}
 */
var NAMESPACE_REGEX = /^[A-Za-z]*$/;

/**
 * Conversion map for query operation -> operation protocol value.
 * @private
 * @const {object}
 */
var OP_TO_OPERATOR = {
  '=':  'EQUAL',
  '>':  'GREATER_THAN',
  '>=': 'GREATER_THAN_OR_EQUAL',
  '<':  'LESS_THAN',
  '<=': 'LESS_THAN_OR_EQUAL',
  'HAS_ANCESTOR': 'HAS_ANCESTOR'
};

/**
 * A list of native objects.
 * @private
 * @const {array}
 */
var PRIMITIVE_KINDS = [
  Object,
  Boolean,
  Number,
  String,
  Date,
  Buffer
];

/**
 * Conversion map for query sign -> order protocol value.
 * @private
 * @const {object}
 */
var SIGN_TO_ORDER = {
  '-': 'DESCENDING',
  '+': 'ASCENDING'
};

/**
 * Build a Datastore Key object.
 *
 * @constructor
 * @param {object} - Configuration object.
 * @param {...*} options.path - Key path.
 * @param {string=} options.namespace - Optional namespace.
 *
 * @example
 * ```js
 * var key = new Key('Company', 123);
 * ```
 */
function Key(options) {
  this.namespace_ = options.namespace;
  this.path_ = options.path;
}

module.exports.Key = Key;

/**
 * Build a Datastore Int object.
 *
 * @constructor
 * @param {number} val - The integer value.
 *
 * @example
 * ```js
 * var anInt = new Int(7);
 * ```
 */
function Int(val) {
  this.val_ = val;
}

/**
 * Retrieve the Integer value.
 *
 * @return {number}
 */
Int.prototype.get = function() {
  return this.val_;
};

module.exports.Int = Int;

/**
 * Build a Datastore Double object.
 *
 * @constructor
 * @param {number} val - The double value.
 *
 * @example
 * ```js
 * var aDouble = new Double(7);
 * ```
 */
function Double(val) {
  this.val_ = val;
}

/**
 * Retrieve the Integer value.
 *
 * @return {number}
 */
Double.prototype.get = function() {
  return this.val_;
};

module.exports.Double = Double;

/**
 * Convert any entity protocol to a plain object.
 *
 * @todo Use registered metadata if provided.
 *
 * @private
 *
 * @param {object} proto - The protocol entity object to convert.
 * @return {object}
 *
 * @example
 * ```js
 * var entity = entityFromEntityProto({
 *   properties: {
 *     name: {
 *       stringValue: 'Burcu Dogan'
 *     }
 *   }
 * });
 *
 * // entity:
 * // {
 * //   name: 'Burcu Dogan'
 * // }
 * ```
 */
function entityFromEntityProto(proto) {
  var properties = proto.property || [];
  return Object.keys(properties).reduce(function(acc, key) {
    var property = properties[key];
    acc[property.name] = propertyToValue(property.value);
    return acc;
  }, {});
}

module.exports.entityFromEntityProto = entityFromEntityProto;

/**
 * Convert a key protocol object to a Key object.
 *
 * @private
 *
 * @param {object} proto - The key protocol object to convert.
 * @return {module:datastore/entity~Key}
 *
 * @example
 * ```js
 * var key = keyFromKeyProto({
 *   partitionId: {
 *     datasetId: 'project-id',
 *     namespace: ''
 *   },
 *   path: [
 *     {
 *       kind: 'Kind',
 *       id: '4790047639339008'
 *     }
 *   ]
 * });
 * ```
 */
function keyFromKeyProto(proto) {
  var keyOptions = {
    path: []
  };
  if (proto.partition_id && proto.partition_id.namespace) {
    keyOptions.namespace = proto.partition_id.namespace;
  }
  proto.path_element.forEach(function(path) {
    keyOptions.path.push(path.kind);
    keyOptions.path.push(Number(path.id) || path.name || null);
  });
  return new Key(keyOptions);
}

module.exports.keyFromKeyProto = keyFromKeyProto;

/**
 * Convert a Key object to a key protocol object.
 *
 * @private
 *
 * @param {module:datastore/entity~Key} key - The Key object to convert.
 * @return {object}
 *
 * @example
 * ```js
 * var keyProto = keyToKeyProto(new Key('Company', 1));
 *
 * // keyProto:
 * // {
 * //   path: [
 * //     {
 * //       kind: 'Company',
 * //       id: 1
 * //     }
 * //   ]
 * // }
 * ```
 */
function keyToKeyProto(key) {
  var keyPath = key.path_;
  if (keyPath.length < 2) {
    throw new Error('A key should contain at least a kind and an identifier.');
  }
  var path = [];
  for (var i = 0; i < keyPath.length; i += 2) {
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
  if (key.namespace_) {
    proto.partition_id = {
      namespace: key.namespace_
    };
  }
  return proto;
}

module.exports.keyToKeyProto = keyToKeyProto;

/**
 * Convert an API response array to a qualified Key and data object.
 *
 * @private
 *
 * @param {object[]} results - The response array.
 * @param {object} results.entity - An entity object.
 * @param {object} results.entity.key - The entity's key.
 * @return {object[]}
 *
 * @example
 * ```js
 * makeReq('runQuery', {}, function(err, response) {
 *   var entityObjects = formatArray(response.batch.entityResults);
 *
 *   // entityObjects:
 *   // {
 *   //   key: {module:datastore/entity~Key},
 *   //   data: {
 *   //     fieldName: 'value'
 *   //   }
 *   // }
 *   //
 * });
 * ```
 */
function formatArray(results) {
  return results.map(function(result) {
    return {
      key: keyFromKeyProto(result.entity.key),
      data: entityFromEntityProto(result.entity)
    };
  });
}

module.exports.formatArray = formatArray;

/**
 * Check if a key is complete.
 *
 * @private
 *
 * @param {module:datastore/entity~Key} key - The Key object.
 * @return {boolean}
 *
 * @example
 * ```js
 * isKeyComplete(new Key('Company', 'Google')); // true
 * isKeyComplete(new Key('Company', null)); // false
 * ```
 */
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

/**
 * Convert a protocol property to it's native value.
 *
 * @todo Do we need uint64s and keep Long.js support?
 *
 * @private
 *
 * @param {object} property - The property object to convert.
 * @return {*}
 *
 * @example
 * ```js
 * propertyToValue({
 *   booleanValue: false
 * });
 * // false
 *
 * propertyToValue({
 *   stringValue: 'Hi'
 * });
 * // 'Hi'
 *
 * propertyToValue({
 *   blobValue: 'aGVsbG8='
 * });
 * // <Buffer 68 65 6c 6c 6f>
 * ```
 */
function propertyToValue(property) {
  if (exists(property.integer_value)) {
    return parseInt(property.integer_value.toString(), 10);
  }
  if (exists(property.double_value)) {
    return property.double_value;
  }
  if (exists(property.string_value)) {
    return property.string_value;
  }
  if (exists(property.blob_value)) {
    return new Buffer(property.blob_value, 'base64');
  }
  if (exists(property.timestamp_microseconds_value)) {
    var microSecs = parseInt(
        property.timestamp_microseconds_value.toString(), 10);
    return new Date(microSecs/1000);
  }
  if (exists(property.key_value)) {
    return keyFromKeyProto(property.key_value);
  }
  if (exists(property.entity_value)) {
    return entityFromEntityProto(property.entity_value);
  }
  if (exists(property.boolean_value)) {
    return property.boolean_value;
  }
  if (exists(property.list_value)) {
    var list = [];
    for (var i = 0; i < property.list_value.length; i++) {
      list.push(propertyToValue(property.list_value[i]));
    }
    return list;
  }
}

/**
 * Convert any native value to a property object.
 *
 * @private
 *
 * @param {*} v - Original value.
 * @return {object}
 *
 * @example
 * ```js
 * valueToProperty('Hi');
 * // {
 * //   stringValue: 'Hi'
 * // }
 * ```
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
 * Convert an entity object to an entity protocol object.
 *
 * @private
 *
 * @param {object} entity - The entity object to convert.
 * @return {object}
 *
 * @example
 * ```js
 * entityToEntityProto({
 *   {
 *     name: 'Burcu',
 *     legit: true
 *   }
 * });
 * // {
 * //   key: null,
 * //   properties: {
 * //     name: {
 * //       stringValue: 'Burcu'
 * //     },
 * //     legit: {
 * //       booleanValue: true
 * //     }
 * //   }
 * // }
 * ```
 */
function entityToEntityProto(entity) {
  return {
    key: null,
    property: Object.keys(entity).map(function(key) {
        return {
          name: key,
          value: valueToProperty(entity[key])
        };
      })
  };
}

module.exports.entityToEntityProto = entityToEntityProto;

/**
 * Convert a query object to a query protocol object.
 *
 * @private
 *
 * @param {object} q - The query object to convert.
 * @return {object}
 *
 * @example
 * ```js
 * queryToQueryProto({
 *   namespace: '',
 *   kinds: [
 *     'Kind'
 *   ],
 *   filters: [],
 *   orders: [],
 *   groupByVal: [],
 *   selectVal: [],
 *   startVal: null,
 *   endVal: null,
 *   limitVal: -1,
 *   offsetVal: -1
 * });
 * // {
 * //   projection: [],
 * //   kinds: [
 * //     {
 * //       name: 'Kind'
 * //     }
 * //   ],
 * //   order: [],
 * //   groupBy: []
 * // }
 * ```
 */
function queryToQueryProto(q) {
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
        operator: OP_TO_OPERATOR[f.op],
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
      direction: SIGN_TO_ORDER[o.sign]
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
}

module.exports.queryToQueryProto = queryToQueryProto;

/**
 * Register a kind and its field metadata globally. In order to perform CRUD
 * operations for a kind, you should register it with its field metadata.
 *
 * @private
 *
 * @todo Validate namespace, kind, and fieldMeta.
 *
 * @param {string} namespace - Namespace of the kind.
 * @param {string} kind - Name of the kind.
 * @param {object} fieldMeta - Metadata information about the fields.
 *
 * @example
 * ```js
 * registerKind('namespace', 'Author', {
 *   name: { kind: String, indexed: false },
 *   tags: { kind: String, multi: true }, // an array of string elements.
 *   favArticles: { kind: KEY, multi: true },
 *   contact: {
 *     kind: {
 *       telephone: { kind: String },
 *       email: { kind: String }
 *     }
 *   }
 * });
 * ```
 */
function registerKind(namespace, kind, fieldMeta) {
  // validate the input and put it to the dictionary
  namespace = namespace || '';
  if (!NAMESPACE_REGEX.test(namespace)) {
    throw new Error('Namespaces should match ' + NAMESPACE_REGEX);
  }
  if (!KIND_REGEX.test(kind)) {
    throw new Error('Kinds should match ' + KIND_REGEX);
  }

  Object.keys(fieldMeta).forEach(function(fieldName) {
    validateField(fieldName, fieldMeta[fieldName]);
  });

  if (!entityMeta[namespace]) {
    entityMeta[namespace] = {};
  }
  entityMeta[namespace][kind] = fieldMeta;
}

module.exports.registerKind = registerKind;

/**
 * Get a Kind object.
 *
 * @private
 *
 * @param {string} namespace - The namespace of the kind.
 * @param {string} kind - The Datstore Kind.
 * @return {object}
 */
function getKind(namespace, kind) {
  return entityMeta[namespace] && entityMeta[namespace][kind];
}

module.exports.getKind = getKind;

/**
 * Validate a field.
 *
 * @private
 *
 * @throws Throws an Error if the field doesn't validate.
 *
 * @param {string} name - Field name.
 * @param {object} field - Field metadata object.
 * @param {string} field.key - Field key.
 * @param {*} field.kind - Field Kind.
 *
 * @example
 * ```js
 * validateField('title', {
 *   kind: String
 * });
 * // undefined (no errors thrown.)
 * ```
 */
function validateField(name, field) {
  if (!FIELD_NAME_REGEX.test(name)) {
    throw new Error('Field name should match ' + FIELD_NAME_REGEX);
  }
  if (!field.kind) {
    throw new Error('Provide a kind for field ' + name);
  }
  if (typeof field.kind !== 'object' &&
      PRIMITIVE_KINDS.indexOf(field.kind) === -1) {
    throw new Error('Unknown kind for field ' + name);
  }
  if (typeof field.kind === 'object') {
    Object.keys(field.key).forEach(function(key) {
      validateField(key, field.key[key]);
    });
  }
}

/**
 * Does a value exist?
 *
 * @todo If protobufjs had hasFieldname support, we wouldn't need a utility.
 *     Later address it on Protobuf.js.
 *
 * @private
 *
 * @param {*} value - Value.
 * @return {boolean}
 */
function exists(value) {
  return (value !== null && value !== undefined);
}
