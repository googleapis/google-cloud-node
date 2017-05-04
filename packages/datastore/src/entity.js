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
 * @private
 * @module datastore/entity
 */

'use strict';

var arrify = require('arrify');
var createErrorClass = require('create-error-class');
var extend = require('extend');
var is = require('is');

var entity = module.exports;

var InvalidKeyError = createErrorClass('InvalidKey', function(opts) {
  var errorMessages = {
    MISSING_KIND: 'A key should contain at least a kind.',
    MISSING_ANCESTOR_ID: 'Ancestor keys require an id or name.'
  };

  this.message = errorMessages[opts.code];
});

/**
 * A symbol to access the Key object from an entity object.
 *
 * @type {symbol}
 */
entity.KEY_SYMBOL = Symbol('KEY');

/**
 * Build a Datastore Double object. For long doubles, a string can be provided.
 *
 * @constructor
 * @param {number} value - The double value.
 *
 * @example
 * var aDouble = new Double(7.3);
 */
function Double(value) {
  this.value = value;
}

entity.Double = Double;

/**
 * Build a Datastore Int object. For long integers, a string can be provided.
 *
 * @constructor
 * @param {number|string} value - The integer value.
 *
 * @example
 * var anInt = new Int(7);
 */
function Int(value) {
  this.value = value.toString();
}

entity.Int = Int;

/**
 * Build a Datastore Geo Point object.
 *
 * @constructor
 * @param {object} coordinates - Coordinate value.
 * @param {number} coordinates.latitude - Latitudinal value.
 * @param {number} coordinates.longitude - Longitudinal value.
 *
 * @example
 * var coordinates = {
 *   latitude: 40.6894,
 *   longitude: -74.0447
 * };
 *
 * var geoPoint = new GeoPoint(coordinates);
 */
function GeoPoint(coordindates) {
  this.value = coordindates;
}

entity.GeoPoint = GeoPoint;

/**
 * Build a Datastore Key object.
 *
 * @constructor
 * @param {object} - Configuration object.
 * @param {...*} options.path - Key path.
 * @param {string=} options.namespace - Optional namespace.
 *
 * @example
 * var key = new Key({
 *   namespace: 'ns',
 *   path: ['Company', 123]
 * });
 */
function Key(options) {
  this.namespace = options.namespace;

  if (options.path.length % 2 === 0) {
    var identifier = options.path.pop();

    if (is.number(identifier) || identifier instanceof entity.Int) {
      this.id = identifier.value || identifier;
    } else if (is.string(identifier)) {
      this.name = identifier;
    }
  }

  this.kind = options.path.pop();

  if (options.path.length > 0) {
    this.parent = new Key(options);
  }

  // `path` is computed on demand to consider any changes that may have been
  // made to the key.
  Object.defineProperty(this, 'path', {
    enumerable: true,
    get: function() {
      return arrify(this.parent && this.parent.path)
        .concat([this.kind, this.name || this.id]);
    }
  });
}

entity.Key = Key;

/**
 * Convert a protobuf Value message to its native value.
 *
 * @param {object} valueProto - The protobuf Value message to convert.
 * @return {*}
 *
 * @example
 * decodeValueProto({
 *   booleanValue: false
 * });
 * // false
 *
 * decodeValueProto({
 *   stringValue: 'Hi'
 * });
 * // 'Hi'
 *
 * decodeValueProto({
 *   blobValue: new Buffer('68656c6c6f')
 * });
 * // <Buffer 68 65 6c 6c 6f>
 */
function decodeValueProto(valueProto) {
  var valueType = valueProto.value_type;
  var value = valueProto[valueType];

  switch (valueType) {
    case 'arrayValue': {
      return value.values.map(entity.decodeValueProto);
    }

    case 'blobValue': {
      return new Buffer(value, 'base64');
    }

    case 'nullValue': {
      return null;
    }

    case 'doubleValue': {
      return parseFloat(value, 10);
    }

    case 'integerValue': {
      return parseInt(value, 10);
    }

    case 'entityValue': {
      return entity.entityFromEntityProto(value);
    }

    case 'keyValue': {
      return entity.keyFromKeyProto(value);
    }

    case 'timestampValue': {
      var milliseconds = parseInt(value.nanos, 10) / 1e6;
      return new Date(parseInt(value.seconds, 10) * 1000 + milliseconds);
    }

    default: {
      return value;
    }
  }
}

entity.decodeValueProto = decodeValueProto;

/**
 * Convert any native value to a protobuf Value message object.
 *
 * @param {*} value - Native value.
 * @return {object}
 *
 * @example
 * encodeValue('Hi');
 * // {
 * //   stringValue: 'Hi'
 * // }
 */
function encodeValue(value) {
  var valueProto = {};

  if (is.boolean(value)) {
    valueProto.booleanValue = value;
    return valueProto;
  }

  if (is.nil(value)) {
    valueProto.nullValue = 0;
    return valueProto;
  }

  if (is.number(value)) {
    if (value % 1 === 0) {
      value = new entity.Int(value);
    } else {
      value = new entity.Double(value);
    }
  }

  if (value instanceof entity.Int) {
    valueProto.integerValue = value.value;
    return valueProto;
  }

  if (value instanceof entity.Double) {
    valueProto.doubleValue = value.value;
    return valueProto;
  }

  if (value instanceof entity.GeoPoint) {
    valueProto.geoPointValue = value.value;
    return valueProto;
  }

  if (value instanceof Date) {
    var seconds = value.getTime() / 1000;

    valueProto.timestampValue = {
      seconds: Math.floor(seconds),
      nanos: value.getMilliseconds() * 1e6
    };

    return valueProto;
  }

  if (is.string(value)) {
    valueProto.stringValue = value;
    return valueProto;
  }

  if (value instanceof Buffer) {
    valueProto.blobValue = value;
    return valueProto;
  }

  if (is.array(value)) {
    valueProto.arrayValue = {
      values: value.map(entity.encodeValue)
    };
    return valueProto;
  }

  if (value instanceof entity.Key) {
    valueProto.keyValue = entity.keyToKeyProto(value);
    return valueProto;
  }

  if (is.object(value)) {
    if (!is.empty(value)) {
      value = extend(true, {}, value);

      for (var prop in value) {
        if (value.hasOwnProperty(prop)) {
          value[prop] = entity.encodeValue(value[prop]);
        }
      }
    }

    valueProto.entityValue = {
      properties: value
    };

    return valueProto;
  }

  throw new Error('Unsupported field value, ' + value + ', was provided.');
}

entity.encodeValue = encodeValue;

/**
 * Convert any entity protocol to a plain object.
 *
 * @todo Use registered metadata if provided.
 *
 * @param {object} entityProto - The protocol entity object to convert.
 * @return {object}
 *
 * @example
 * entityFromEntityProto({
 *   properties: {
 *     map: {
 *       name: {
 *         value: {
 *           value_type: 'stringValue',
 *           stringValue: 'Stephen'
 *         }
 *       }
 *     }
 *   }
 * });
 * // {
 * //   name: 'Stephen'
 * // }
 */
function entityFromEntityProto(entityProto) {
  var entityObject = {};

  var properties = entityProto.properties || {};

  for (var property in properties) {
    var value = properties[property];
    entityObject[property] = entity.decodeValueProto(value);
  }

  return entityObject;
}

entity.entityFromEntityProto = entityFromEntityProto;

/**
 * Convert an entity object to an entity protocol object.
 *
 * @param {object} entityObject - The entity object to convert.
 * @return {object}
 *
 * @example
 * entityToEntityProto({
 *   name: 'Burcu',
 *   legit: true
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
 */
function entityToEntityProto(entityObject) {
  return {
    key: null,

    properties: Object.keys(entityObject).reduce(function(properties, key) {
      properties[key] = entity.encodeValue(entityObject[key]);
      return properties;
    }, {})
  };
}

entity.entityToEntityProto = entityToEntityProto;

/**
 * Convert an API response array to a qualified Key and data object.
 *
 * @param {object[]} results - The response array.
 * @param {object} results.entity - An entity object.
 * @param {object} results.entity.key - The entity's key.
 * @return {object[]}
 *
 * @example
 * request_('runQuery', {}, function(err, response) {
 *   var entityObjects = formatArray(response.batch.entityResults);
 *   // {
 *   //   key: {},
 *   //   data: {
 *   //     fieldName: 'value'
 *   //   }
 *   // }
 *   //
 * });
 */
function formatArray(results) {
  return results.map(function(result) {
    var ent = entity.entityFromEntityProto(result.entity);
    ent[entity.KEY_SYMBOL] = entity.keyFromKeyProto(result.entity.key);
    return ent;
  });
}

entity.formatArray = formatArray;

/**
 * Check if a key is complete.
 *
 * @param {Key} key - The Key object.
 * @return {boolean}
 *
 * @example
 * isKeyComplete(new Key(['Company', 'Google'])); // true
 * isKeyComplete(new Key('Company')); // false
 */
function isKeyComplete(key) {
  var lastPathElement = entity.keyToKeyProto(key).path.pop();
  return !!(lastPathElement.id || lastPathElement.name);
}

entity.isKeyComplete = isKeyComplete;

/**
 * Convert a key protocol object to a Key object.
 *
 * @param {object} keyProto - The key protocol object to convert.
 * @return {Key}
 *
 * @example
 * var key = keyFromKeyProto({
 *   partitionId: {
 *     projectId: 'project-id',
 *     namespaceId: ''
 *   },
 *   path: [
 *     {
 *       kind: 'Kind',
 *       id: '4790047639339008'
 *     }
 *   ]
 * });
 */
function keyFromKeyProto(keyProto) {
  var keyOptions = {
    path: []
  };

  if (keyProto.partitionId && keyProto.partitionId.namespaceId) {
    keyOptions.namespace = keyProto.partitionId.namespaceId;
  }

  keyProto.path.forEach(function(path, index) {
    keyOptions.path.push(path.kind);

    var id = path[path.id_type];

    if (path.id_type === 'id') {
      id = new entity.Int(id);
    }

    if (is.defined(id)) {
      keyOptions.path.push(id);
    } else if (index < keyProto.path.length - 1) {
      throw new InvalidKeyError({
        code: 'MISSING_ANCESTOR_ID'
      });
    }
  });

  return new entity.Key(keyOptions);
}

entity.keyFromKeyProto = keyFromKeyProto;

/**
 * Convert a Key object to a key protocol object.
 *
 * @param {Key} key - The Key object to convert.
 * @return {object}
 *
 * @example
 * var keyProto = keyToKeyProto(new Key(['Company', 1]));
 * // {
 * //   path: [
 * //     {
 * //       kind: 'Company',
 * //       id: 1
 * //     }
 * //   ]
 * // }
 */
function keyToKeyProto(key) {
  if (is.undefined(key.kind)) {
    throw new InvalidKeyError({
      code: 'MISSING_KIND'
    });
  }

  var keyProto = {
    path: []
  };

  if (key.namespace) {
    keyProto.partitionId = {
      namespaceId: key.namespace
    };
  }

  var numKeysWalked = 0;

  // Reverse-iterate over the Key objects.
  do {
    if (numKeysWalked > 0 && is.undefined(key.id) && is.undefined(key.name)) {
      // This isn't just an incomplete key. An ancestor key is incomplete.
      throw new InvalidKeyError({
        code: 'MISSING_ANCESTOR_ID'
      });
    }

    var pathElement = {
      kind: key.kind
    };

    if (is.defined(key.id)) {
      pathElement.id = key.id;
    }

    if (is.defined(key.name)) {
      pathElement.name = key.name;
    }

    keyProto.path.unshift(pathElement);
  } while ((key = key.parent) && ++numKeysWalked);

  return keyProto;
}

entity.keyToKeyProto = keyToKeyProto;

/**
 * Convert a query object to a query protocol object.
 *
 * @private
 *
 * @param {object} q - The query object to convert.
 * @return {object}
 *
 * @example
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
 */
function queryToQueryProto(query) {
  var OP_TO_OPERATOR = {
    '=':  'EQUAL',
    '>':  'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '<':  'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    HAS_ANCESTOR: 'HAS_ANCESTOR'
  };

  var SIGN_TO_ORDER = {
    '-': 'DESCENDING',
    '+': 'ASCENDING'
  };

  var queryProto = {
    distinctOn: query.groupByVal.map(function(groupBy) {
      return {
        name: groupBy
      };
    }),

    kind: query.kinds.map(function(kind) {
      return {
        name: kind
      };
    }),

    order: query.orders.map(function(order) {
      return {
        property: {
          name: order.name
        },
        direction: SIGN_TO_ORDER[order.sign]
      };
    }),

    projection: query.selectVal.map(function(select) {
      return {
        property: {
          name: select
        }
      };
    })
  };

  if (query.endVal) {
    queryProto.endCursor = query.endVal;
  }

  if (query.limitVal > 0) {
    queryProto.limit = {
      value: query.limitVal
    };
  }

  if (query.offsetVal > 0) {
    queryProto.offset = query.offsetVal;
  }

  if (query.startVal) {
    queryProto.startCursor = query.startVal;
  }

  if (query.filters.length > 0) {
    var filters = query.filters.map(function(filter) {
      var value = {};

      if (filter.name === '__key__') {
        value.keyValue = entity.keyToKeyProto(filter.val);
      } else {
        value = entity.encodeValue(filter.val);
      }

      return {
        propertyFilter: {
          property: {
            name: filter.name
          },
          op: OP_TO_OPERATOR[filter.op],
          value: value
        }
      };
    });

    queryProto.filter = {
      compositeFilter: {
        filters: filters,
        op: 'AND'
      }
    };
  }

  return queryProto;
}

entity.queryToQueryProto = queryToQueryProto;
