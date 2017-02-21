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
  if (is.undefined(value)) {
    value = new Date();
  }

  this.value = new Date(value).toJSON().replace(/T.+/, '');
}

codec.SpannerDate = SpannerDate;

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
      case 'INT64': {
        decoded = new codec.Int(decoded);
        break;
      }
      case 'FLOAT64': {
        decoded = parseFloat(decoded, 10);
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
 * Re-encode after the generic gRPC encoding step.
 *
 * @private
 */
function encode(value) {
  function encodeValue_(encoded) {
    // BYTES
    if (is.defined(encoded.blobValue)) {
      encoded.stringValue = encoded.blobValue.toString('base64');
      delete encoded.blobValue;
    }

    // INT64, Infinity, -Infinity, NaN types are encoded as strings
    if (is.defined(encoded.numberValue)) {
      var value = encoded.numberValue;

      if (is.infinite(value) || Number.isNaN(value) || value % 1 === 0) {
        encoded.stringValue = value.toString();
        delete encoded.numberValue;
      }
    }

    // ARRAY
    if (is.defined(encoded.listValue)) {
      encoded.listValue.values = encoded.listValue.values.map(encodeValue_);
    }

    return encoded;
  }

  // TIMESTAMP
  if (is.date(value)) {
    value = value.toJSON();
  }

  // DATE
  if (value instanceof SpannerDate) {
    value = value.value;
  }

  // INT
  if (value instanceof Int) {
    value = value.value;
  }

  return encodeValue_(commonGrpc.Service.encodeValue_(value));
}

codec.encode = encode;
