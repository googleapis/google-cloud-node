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
 * @module spanner/rowBuilder
 */

'use strict';

var is = require('is');

/**
 * Combine row chunks from multiple `PartialResultSet` API response objects.
 *
 * @private
 */
function RowBuilder(metadata, chunks) {
  this.metadata = metadata;
  this.fields = this.metadata.rowType.fields;
  this.chunks = chunks;

  this.rows = [[]];

  Object.defineProperty(this, 'currentRow', {
    get: function() {
      return this.rows[this.rows.length - 1];
    }
  });
}

/**
 * Extracts value from chunk.
 */
RowBuilder.getValue = function(obj) {
  var value = obj;

  if (obj && obj.kind) {
    value = obj[obj.kind];
  }

  if (value && value.values) {
    value = value.values;
  }

  return value;
};

/**
 * Format a value into the expected structure, e.g. turn struct values into an
 * object.
 */
RowBuilder.formatValue = function(field, value) {
  if (field.code === 'ARRAY') {
    return value.map(function(value) {
      return RowBuilder.formatValue(field.arrayElementType, value);
    });
  }

  if (field.code !== 'STRUCT') {
    return value;
  }

  return field.structType.fields.reduce(function(struct, field, index) {
    struct[field.name] = RowBuilder.formatValue(field.type, value[index]);
    return struct;
  }, {});
};

/**
 * Merge chunk values.
 */
RowBuilder.merge = function(type, head, tail) {
  var code = type.code;

  head = RowBuilder.getValue(head);
  tail = RowBuilder.getValue(tail);

  var isMergeable = !is.nil(head) && !is.nil(tail) && code !== 'FLOAT64';
  var merged = [];
  var mergedItems;

  if (code === 'ARRAY') {
    var arrayType = type.arrayElementType;
    mergedItems = RowBuilder.merge(arrayType, head.pop(), tail.shift());

    merged.push(head.concat(mergedItems).concat(tail));
  } else if (code === 'STRUCT') {
    var structType = type.structType.fields[head.length - 1].type;
    mergedItems = RowBuilder.merge(structType, head.pop(), tail.shift());

    merged.push(head.concat(mergedItems).concat(tail));
  } else if (isMergeable) {
    merged.push(head + tail);
  } else {
    merged.push(head, tail);
  }

  // Filter out empty strings.
  return merged.filter(function(value) {
    return !is.string(value) || value.length;
  });
};

/**
 * Appends element to row.
 */
RowBuilder.prototype.append = function(value) {
  if (this.currentRow.length === this.fields.length) {
    this.rows.push([]);
  }

  this.currentRow.push(value);
};

/**
 * Process chunks.
 */
RowBuilder.prototype.build = function() {
  var self = this;
  var previousChunk;

  this.chunks.forEach(function(chunk) {
    if (previousChunk && previousChunk.chunkedValue) {
      var type = self.fields[self.currentRow.length - 1].type;
      var merged = RowBuilder.merge(
        type,
        self.currentRow.pop(),
        chunk.values.shift()
      );

      merged.forEach(self.append.bind(self));
    }

    chunk.values.map(RowBuilder.getValue)
      .forEach(self.append.bind(self));

    previousChunk = chunk;
  });
};

/**
 * Transforms values into JSON format.
 */
RowBuilder.prototype.toJSON = function() {
  this.build();

  var fields = this.fields;

  return this.rows.map(function(values) {
    var formattedRow = [];
    var serializedRow = {};

    values.forEach(function(value, index) {
      var field = fields[index];

      var column = {
        name: field.name,
        value: RowBuilder.formatValue(field.type, value)
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

    return formattedRow;
  });
};

module.exports = RowBuilder;
