/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

/*!
 * @module spanner/codec
 */

'use strict';

var codec = module.exports;

var commonGrpc = require('@google-cloud/common-grpc');
var is = require('is');

function SpannerDate(value) {
  if (arguments.length > 1) {
    throw new TypeError([
      'The spanner.date function accepts a Date object or a',
      'single argument parseable by Date\'s constructor.'
    ].join(' '));
  }

  if (is.undefined(value)) {
    value = new Date();
  }

  this.value = new Date(value).toJSON().replace(/T.+/, '');
}

codec.SpannerDate = SpannerDate;

function Float(value) {
  this.value = value;
}

Float.prototype.valueOf = function() {
  return parseFloat(this.value);
};

codec.Float = Float;

function Int(value) {
  this.value = value.toString();
}

Int.prototype.valueOf = function() {
  var number = Number(this.value);

  if (number > Number.MAX_SAFE_INTEGER) {
    throw new Error('Integer ' + this.value + ' is out of bounds.');
  }

  return number;
};

codec.Int = Int;

/**
 * Re-decode after the generic gRPC decoding step.
 *
 * @private
 */
function decode(value, field) {
  function decodeValue_(decoded, type) {
    if (is.null(decoded)) {
      return null;
    }

    switch (type.code) {
      case 'BYTES': {
        decoded = new Buffer(decoded, 'base64');
        break;
      }
      case 'FLOAT64': {
        decoded = new codec.Float(decoded);
        break;
      }
      case 'INT64': {
        decoded = new codec.Int(decoded);
        break;
      }
      case 'TIMESTAMP': // falls through
      case 'DATE': {
        decoded = new Date(decoded);
        break;
      }
      case 'ARRAY': {
        decoded = decoded.map(function(value) {
          return decodeValue_(value, type.arrayElementType);
        });
        break;
      }
      case 'STRUCT': {
        var formattedRow = [];
        var serializedRow = {};

        var fields = type.structType.fields;

        fields.forEach(function(field, index) {
          var value = decoded[field.name] || decoded[index];

          var column = {
            name: field.name,
            value: decodeValue_(value, field.type)
          };

          formattedRow.push(column);

          if (column.name) {
            serializedRow[column.name] = column.value;
          }
        });

        Object.defineProperty(formattedRow, 'toJSON', {
          enumerable: false,
          value: function() {
            return serializedRow;
          }
        });

        decoded = formattedRow;

        break;
      }
    }

    return decoded;
  }

  return decodeValue_(commonGrpc.Service.decodeValue_(value), field.type);
}

codec.decode = decode;

/**
 * Encode a value in the format the API expects.
 *
 * @private
 */
function encode(value) {
  function preEncode(value) {
    var numberShouldBeStringified =
      !(value instanceof Float) &&
      is.int(value) ||
      value instanceof Int ||
      is.infinite(value) ||
      Number.isNaN(value);

    if (is.date(value)) {
      value = value.toJSON();
    } else if (value instanceof SpannerDate ||
               value instanceof Float ||
               value instanceof Int) {
      value = value.value;
    } else if (Buffer.isBuffer(value)) {
      value = value.toString('base64');
    } else if (is.array(value)) {
      value = value.map(preEncode);
    } else if (is.object(value) && is.fn(value.hasOwnProperty)) {
      for (var prop in value) {
        if (value.hasOwnProperty(prop)) {
          value[prop] = preEncode(value[prop]);
        }
      }
    }

    if (numberShouldBeStringified) {
      value = value.toString();
    }

    return value;
  }

  return commonGrpc.Service.encodeValue_(preEncode(value));
}

codec.encode = encode;

/**
 * Get the corresponding Spanner data type.
 *
 * @private
 *
 * @param {*} field - The field value.
 * @return {string}
 *
 * @example
 * Database.getType_(NaN);
 * // 'float64'
 */
function getType(field) {
  if (is.bool(field)) {
    return 'bool';
  }

  var isSpecialNumber = is.infinite(field) ||
    (is.number(field) && isNaN(field));

  if (is.decimal(field) || isSpecialNumber || field instanceof Float) {
    return 'float64';
  }

  if (is.number(field) || field instanceof Int) {
    return 'int64';
  }

  if (is.string(field)) {
    return 'string';
  }

  if (Buffer.isBuffer(field)) {
    return 'bytes';
  }

  if (is.date(field)) {
    return 'timestamp';
  }

  if (field instanceof SpannerDate) {
    return 'date';
  }

  if (is.array(field)) {
    var child;

    for (var i = 0; i < field.length; i++) {
      child = field[i];

      if (!is.nil(child)) {
        break;
      }
    }

    return {
      type: 'array',
      child: getType(child)
    };
  }

  return 'unspecified';
}

codec.getType = getType;

/**
 * A list of available Spanner types. The index of said type in Array aligns
 * with the type code that query params require.
 *
 * @private
 */
var TYPES = [
  'unspecified',
  'bool',
  'int64',
  'float64',
  'timestamp',
  'date',
  'string',
  'bytes',
  'array'
];

codec.TYPES = TYPES;
