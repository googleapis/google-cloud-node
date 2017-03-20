/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module bigtable/mutation
 */

'use strict';

var arrify = require('arrify');
var Int64 = require('node-int64');
var is = require('is');

/**
 * Formats table mutations to be in the expected proto format.
 *
 * @constructor
 * @alias module:bigtable/mutation
 *
 * @example
 * var mutation = new Mutation({
 *   key: 'gwashington',
 *   method: 'insert',
 *   data: {
 *     jadams: 1
 *   }
 * });
 */
function Mutation(mutation) {
  this.key = mutation.key;
  this.method = mutation.method;
  this.data = mutation.data;
}

/**
 * Mutation methods
 *
 * INSERT => setCell
 * DELETE => deleteFrom*
 */
var methods = Mutation.methods = {
  INSERT: 'insert',
  DELETE: 'delete'
};

/**
 * Parses "bytes" returned from proto service.
 *
 * @param {string} bytes - Base64 encoded string.
 * @return {string|number|buffer}
 */
Mutation.convertFromBytes = function(bytes, options) {
  var buf = new Buffer(bytes, 'base64');
  var num = new Int64(buf).toNumber();

  if (!isNaN(num) && isFinite(num)) {
    return num;
  }

  if (options && options.decode === false) {
    return buf;
  }

  return buf.toString();
};

/**
 * Converts data into a buffer for proto service.
 *
 * @param {string} data - The data to be sent.
 * @return {buffer}
 */
Mutation.convertToBytes = function(data) {
  if (data instanceof Buffer) {
    return data;
  }

  if (is.number(data)) {
    return new Int64(data).toBuffer();
  }

  try {
    return new Buffer(data);
  } catch (e) {
    return data;
  }
};

/**
 * Takes date objects and creates a time range.
 *
 * @param {date} start - The start date.
 * @param {date} end - The end date.
 * @return {object}
 */
Mutation.createTimeRange = function(start, end) {
  var range = {};

  if (is.date(start)) {
    range.startTimestampMicros = start.getTime() * 1000;
  }

  if (is.date(end)) {
    range.endTimestampMicros = end.getTime() * 1000;
  }

  return range;
};

/**
 * Formats an `insert` mutation to what the proto service expects.
 *
 * @param {object} data - The entity data.
 * @return {object[]}
 *
 * @example
 * Mutation.encodeSetCell({
 *   follows: {
 *     gwashington: 1,
 *     alincoln: 1
 *   }
 * });
 * // [
 * //   {
 * //     setCell: {
 * //       familyName: 'follows',
 * //       columnQualifier: 'gwashington', // as buffer
 * //       timestampMicros: -1, // -1 means to use the server time
 * //       value: 1 // as buffer
 * //     }
 * //   }, {
 * //     setCell: {
 * //       familyName: 'follows',
 * //       columnQualifier: 'alincoln', // as buffer
 * //       timestampMicros: -1,
 * //       value: 1 // as buffer
 * //     }
 * //   }
 * // ]
 */
Mutation.encodeSetCell = function(data) {
  var mutations = [];

  Object.keys(data).forEach(function(familyName) {
    var family = data[familyName];

    Object.keys(family).forEach(function(cellName) {
      var cell = family[cellName];

      if (!is.object(cell) || cell instanceof Buffer) {
        cell = {
          value: cell
        };
      }

      var timestamp = cell.timestamp;

      if (is.date(timestamp)) {
        timestamp = timestamp.getTime();
      }

      var setCell = {
        familyName: familyName,
        columnQualifier: Mutation.convertToBytes(cellName),
        timestampMicros: timestamp || -1,
        value: Mutation.convertToBytes(cell.value)
      };

      mutations.push({ setCell: setCell });
    });
  });

  return mutations;
};

/**
 * Formats a `delete` mutation to what the proto service expects. Depending
 * on what data is supplied to this method, it will return an object that can
 * will do one of the following:
 *
 * * Delete specific cells from a column.
 * * Delete all cells contained with a specific family.
 * * Delete all cells from an entire rows.
 *
 * @param {object} data - The entry data.
 * @return {object}
 *
 * @example
 * Mutation.encodeDelete([
 *   'follows:gwashington'
 * ]);
 * // {
 * //   deleteFromColumn: {
 * //     familyName: 'follows',
 * //     columnQualifier: 'gwashington', // as buffer
 * //     timeRange: null // optional
 * //   }
 * // }
 *
 * Mutation.encodeDelete([
 *   'follows'
 * ]);
 * // {
 * //   deleteFromFamily: {
 * //     familyName: 'follows'
 * //   }
 * // }
 *
 * Mutation.encodeDelete();
 * // {
 * //   deleteFromRow: {}
 * // }
 *
 * //-
 * // It's also possible to specify a time range when deleting specific columns.
 * //-
 * Mutation.encodeDelete([
 *   {
 *     column: 'follows:gwashington',
 *     time: {
 *       start: new Date('March 21, 2000'),
 *       end: new Date('March 21, 2001')
 *     }
 *   }
 * ]);
 */
Mutation.encodeDelete = function(data) {
  if (!data) {
    return [{
      deleteFromRow: {}
    }];
  }

  return arrify(data).map(function(mutation) {
    if (is.string(mutation)) {
      mutation = {
        column: mutation
      };
    }

    var column = Mutation.parseColumnName(mutation.column);

    if (!column.qualifier) {
      return {
        deleteFromFamily: {
          familyName: column.family
        }
      };
    }

    var timeRange;

    if (mutation.time) {
      timeRange = Mutation.createTimeRange(
        mutation.time.start,
        mutation.time.end
      );
    }

    return {
      deleteFromColumn: {
        familyName: column.family,
        columnQualifier: Mutation.convertToBytes(column.qualifier),
        timeRange: timeRange
      }
    };
  });
};

/**
 * Creates a new Mutation object and returns the proto JSON form.
 *
 * @param {object} entry - The entity data.
 * @return {object}
 */
Mutation.parse = function(mutation) {
  if (!(mutation instanceof Mutation)) {
    mutation = new Mutation(mutation);
  }

  return mutation.toProto();
};

/**
 * Parses a column name into an object.
 *
 * @param {string} column - The column name.
 * @return {object}
 *
 * @example
 * Mutation.parseColumnName('follows:gwashington');
 * // {
 * //  family: 'follows',
 * //  qualifier: 'gwashington'
 * // }
 */
Mutation.parseColumnName = function(column) {
  var parts = column.split(':');

  return {
    family: parts[0],
    qualifier: parts[1]
  };
};

/**
 * Converts the mutation object into proto friendly JSON.
 *
 * return {object}
 */
Mutation.prototype.toProto = function() {
  var mutation = {};

  if (this.key) {
    mutation.rowKey = Mutation.convertToBytes(this.key);
  }

  if (this.method === methods.INSERT) {
    mutation.mutations = Mutation.encodeSetCell(this.data);
  } else if (this.method === methods.DELETE) {
    mutation.mutations = Mutation.encodeDelete(this.data);
  }

  return mutation;
};

module.exports = Mutation;
