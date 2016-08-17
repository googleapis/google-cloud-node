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
 * @module bigtable/filter
 */

'use strict';

var arrify = require('arrify');
var createErrorClass = require('create-error-class');
var extend = require('extend');
var is = require('is');

/**
 * @private
 * @type {module:bigtable/mutation}
 */
var Mutation = require('./mutation.js');

/**
 * @private
 */
var FilterError = createErrorClass('FilterError', function(filter) {
  this.message = 'Unknown filter: ' + filter + '.';
});

/**
 * A filter takes a row as input and produces an alternate view of the row based
 * on specified rules. For example, a row filter might trim down a row to
 * include just the cells from columns matching a given regular expression, or
 * might return all the cells of a row but not their values. More complicated
 * filters can be composed out of these components to express requests such as,
 * "within every column of a particular family, give just the two most recent
 * cells which are older than timestamp X."
 *
 * There are two broad categories of filters (true filters and transformers),
 * as well as two ways to compose simple filters into more complex ones
 * ({module:bigtable/filter#interleave}). They work as follows:
 *
 * True filters alter the input row by excluding some of its cells wholesale
 * from the output row. An example of a true filter is the
 * {module:bigtable/filter#value} filter, which excludes cells whose values
 * don't match the specified pattern. All regex true filters use RE2 syntax
 * (https://github.com/google/re2/wiki/Syntax) and are evaluated as full
 * matches. An important point to keep in mind is that RE2(.) is equivalent by
 * default to RE2([^\n]), meaning that it does not match newlines. When
 * attempting to match an arbitrary byte, you should therefore use the escape
 * sequence '\C', which may need to be further escaped as '\\C' in your client
 * language.
 *
 * Transformers alter the input row by changing the values of some of its
 * cells in the output, without excluding them completely. Currently, the only
 * supported transformer is the {module:bigtable/filter#value} `strip` filter,
 * which replaces every cell's value with the empty string.
 *
 * The total serialized size of a filter message must not
 * exceed 4096 bytes, and filters may not be nested within each other to a depth
 * of more than 20.
 *
 * Use the following table for the various examples found throughout the
 * filter documentation.
 *
 * | Row Key     | follows:gwashington | follows:jadams | follows:tjefferson |
 * | ----------- |:-------------------:|:--------------:|:------------------:|
 * | gwashington |                     | 1              |                    |
 * | tjefferson  | 1                   | 1              |                    |
 * | jadams      | 1                   |                | 1                  |
 *
 * @constructor
 * @alias module:bigtable/filter
 */
function Filter() {
  this.filters_ = [];
}

/**
 * @private
 * @throws TypeError
 *
 * Transforms Arrays into a simple regular expression for matching multiple
 * values.
 *
 * @param {regex|string|string[]} regex - Either a plain regex, a regex in
 *     string form or an array of strings.
 *
 * @return {string}
 *
 * @example
 * var regexString = Filter.convertToRegExpString(['a', 'b', 'c']);
 * // => '(a|b|c)'
 */
Filter.convertToRegExpString = function(regex) {
  if (is.regexp(regex)) {
    return regex.toString().replace(/^\/|\/$/g, '');
  }

  if (is.array(regex)) {
    return '(' + regex.join('|') + ')';
  }

  if (is.string(regex)) {
    return regex;
  }

  if (is.number(regex)) {
    return regex.toString();
  }

  throw new TypeError('Can\'t convert to RegExp String from unknown type.');
};

/**
 * @private
 *
 * Creates a range object. All bounds default to inclusive.
 *
 * @param {?object|string} start - Lower bound value.
 * @param {?object|string} end - Upper bound value.
 * @param {string} key - Key used to create range value keys.
 *
 * @return {object}
 *
 * @example
 * var range = Filter.createRange('value1', 'value2', 'Test');
 * // {
 * //   startTestInclusive: new Buffer('value1'),
 * //   endTestExclusive: new Buffer('value2')
 * // }
 *
 * //-
 * // It's also possible to pass in objects to specify inclusive/exclusive
 * // bounds.
 * //-
 * var upperBound = {
 *   value: 'value3',
 *   inclusive: false
 * };
 *
 * var range = Filter.createRange(upperBound, null, 'Test2');
 * // => {
 * //   startTest2Exclusive: 'value3'
 * // }
 */
Filter.createRange = function(start, end, key) {
  var range = {};

  if (start) {
    extend(range, createBound('start', start, key));
  }

  if (end) {
    extend(range, createBound('end', end, key));
  }

  return range;

  function createBound(boundName, boundData, key) {
    var isInclusive = boundData.inclusive !== false;
    var boundKey = boundName + key + (isInclusive ? 'Closed' : 'Open');
    var bound = {};

    bound[boundKey] = Mutation.convertToBytes(boundData.value || boundData);
    return bound;
  }
};

/**
 * @private
 * @throws FilterError
 *
 * Turns filters into proto friendly format.
 *
 * @param {object[]} filters - The list of filters to be parsed.
 *
 * @return {object}
 *
 * @example
 * var filter = Filter.parse([
 *   {
 *     family: 'my-family',
 *   }, {
 *     column: 'my-column'
 *   }
 * ]);
 * // {
 * //   chain: {
 * //     filters: [
 * //       {
 * //         familyNameRegexFilter: 'my-family'
 * //       },
 * //       {
 * //         columnQualifierRegexFilter: 'my-column'
 * //       }
 * //     ]
 * //   }
 * // }
 */
Filter.parse = function(filters) {
  var filter = new Filter();

  arrify(filters).forEach(function(filterObj) {
    var key = Object.keys(filterObj)[0];

    if (!is.function(filter[key])) {
      throw new FilterError(key);
    }

    filter[key](filterObj[key]);
  });

  return filter.toProto();
};

/**
 * @example
 * //-
 * // Matches all cells, regardless of input. Functionally equivalent to
 * // leaving `filter` unset, but included for completeness.
 * //-
 * var filter = {
 *   all: true
 * };
 *
 * //-
 * // Does not match any cells, regardless of input. Useful for temporarily
 * // disabling just part of a filter.
 * //-
 * var filter = {
 *   all: false
 * };
 */
Filter.prototype.all = function(pass) {
  var filterName = pass ? 'passAllFilter' : 'blockAllFilter';

  this.set(filterName, true);
};

/**
 * Matches only cells from columns whose qualifiers satisfy the given RE2
 * regex.
 *
 * Note that, since column qualifiers can contain arbitrary bytes, the '\C'
 * escape sequence must be used if a true wildcard is desired. The '.'
 * character will not match the new line character '\n', which may be
 * present in a binary qualifier.
 *
 * @example
 * //-
 * // Using the following filter, we would retrieve the `tjefferson` and
 * // `gwashington` columns.
 * //-
 * var filter = [
 *   {
 *     column: /[a-z]+on$/
 *   }
 * ];
 *
 * //-
 * // You can also provide a string (optionally containing regexp characters)
 * // for simple column filters.
 * //-
 * var filter = [
 *   {
 *     column: 'gwashington'
 *   }
 * ];
 *
 * //-
 * // Or you can provide an array of strings if you wish to match against
 * // multiple columns.
 * //-
 * var filter = [
 *   {
 *     column: [
 *       'gwashington',
 *       'tjefferson'
 *     ]
 *   }
 * ];
 *
 * //-
 * // If you wish to use additional column filters, consider using the following
 * // syntax.
 * //-
 * var filter = [
 *   {
 *     column: {
 *       name: 'gwashington'
 *     }
 *   }
 * ];
 *
 *
 * //-
 * // <h4>Column Cell Limits</h4>
 * //
 * // Matches only the most recent number of versions within each column. For
 * // example, if the `versions` is set to 2, this filter would only match
 * // columns updated at the two most recent timestamps.
 * //
 * // If duplicate cells are present, as is possible when using an
 * // {module:bigtable/filter#interleave} filter, each copy of the cell is
 * // counted separately.
 * //-
 * var filter = [
 *   {
 *     column: {
 *       cellLimit: 2
 *     }
 *   }
 * ];
 *
 * //-
 * // <h4>Column Ranges</h4>
 * //
 * // Specifies a contiguous range of columns within a single column family.
 * // The range spans from <column_family>:<start_qualifier> to
 * // <column_family>:<end_qualifier>, where both bounds can be either
 * // inclusive or exclusive. By default both are inclusive.
 * //
 * // When the `start` bound is omitted it is interpreted as an empty string.
 * // When the `end` bound is omitted it is interpreted as Infinity.
 * //-
 * var filter = [
 *   {
 *     column: {
 *       family: 'follows',
 *       start: 'gwashington',
 *       end: 'tjefferson'
 *     }
 *   }
 * ];
 *
 * //-
 * // By default, both the `start` and `end` bounds are inclusive. You can
 * // override these by providing an object explicity stating whether or not it
 * // is `inclusive`.
 * //-
 * var filter = [
 *   {
 *     column: {
 *       family: 'follows',
 *       start: {
 *         value: 'gwashington',
 *         inclusive: false
 *       },
 *       end: {
 *         value: 'jadams',
 *         inclusive: false
 *       }
 *     }
 *   }
 * ];
 */
Filter.prototype.column = function(column) {
  if (!is.object(column)) {
    column = {
      name: column
    };
  }

  if (column.name) {
    var name = Filter.convertToRegExpString(column.name);

    name = Mutation.convertToBytes(name);
    this.set('columnQualifierRegexFilter', name);
  }

  if (is.number(column.cellLimit)) {
    this.set('cellsPerColumnLimitFilter', column.cellLimit);
  }

  if (column.start || column.end) {
    var range = Filter.createRange(column.start, column.end, 'Qualifier');

    range.familyName = column.family;
    this.set('columnRangeFilter', range);
  }
};

/**
 * A filter which evaluates one of two possible filters, depending on
 * whether or not a `test` filter outputs any cells from the input row.
 *
 * IMPORTANT NOTE: The `test` filter does not execute atomically with the
 * pass and fail filters, which may lead to inconsistent or unexpected
 * results. Additionally, condition filters have poor performance, especially
 * when filters are set for the fail condition.
 *
 * @example
 * //-
 * // In the following example we're creating a filter that will check if
 * // `gwashington` follows `tjefferson`. If he does, we'll get all of the
 * // `gwashington` data. If he does not, we'll instead return all of the
 * // `tjefferson` data.
 * //-
 * var filter = [
 *   {
 *     condition: {
 *       // If `test` outputs any cells, then `pass` will be evaluated on the
 *       // input row. Otherwise `fail` will be evaluated.
 *       test: [
 *         {
 *           row: 'gwashington'
 *         },
 *         {
 *           family: 'follows'
 *         },
 *         {
 *           column: 'tjefferson'
 *         }
 *       ],
 *
 *       // If omitted, no results will be returned in the true case.
 *       pass: [
 *         {
 *           row: 'gwashington'
 *         }
 *       ],
 *
 *       // If omitted, no results will be returned in the false case.
 *       fail: [
 *         {
 *           row: 'tjefferson'
 *         }
 *       ]
 *     }
 *   }
 * ];
 */
Filter.prototype.condition = function(condition) {
  this.set('condition', {
    predicateFilter: Filter.parse(condition.test),
    trueFilter: Filter.parse(condition.pass),
    falseFilter: Filter.parse(condition.fail)
  });
};

/**
 * Matches only cells from columns whose families satisfy the given RE2
 * regex. For technical reasons, the regex must not contain the ':'
 * character, even if it is not being used as a literal.
 * Note that, since column families cannot contain the new line character
 * '\n', it is sufficient to use '.' as a full wildcard when matching
 * column family names.
 *
 * @example
 * var filter = [
 *   {
 *     family: 'follows'
 *   }
 * ];
 */
Filter.prototype.family = function(family) {
  family = Filter.convertToRegExpString(family);
  this.set('familyNameRegexFilter', family);
};

/**
 * Applies several filters to the data in parallel and combines the results.
 *
 * The elements of "filters" all process a copy of the input row, and the
 * results are pooled, sorted, and combined into a single output row.
 * If multiple cells are produced with the same column and timestamp,
 * they will all appear in the output row in an unspecified mutual order.
 * All interleaved filters are executed atomically.
 *
 * @example
 * //-
 * // In the following example, we're creating a filter that will retrieve
 * // results for entries that were either created between December 17th, 2015
 * // and March 22nd, 2016 or entries that have data for `follows:tjefferson`.
 * //-
 * var filter = [
 *   {
 *     interleave: [
 *       [
 *         {
 *           time: {
 *             start: new Date('December 17, 2015'),
 *             end: new Date('March 22, 2016')
 *           }
 *         }
 *       ],
 *       [
 *         {
 *           family: 'follows'
 *         },
 *         {
 *           column: 'tjefferson'
 *         }
 *       ]
 *     ]
 *   }
 * ];
 */
Filter.prototype.interleave = function(filters) {
  this.set('interleave', {
    filters: filters.map(Filter.parse)
  });
};

/**
 * Applies the given label to all cells in the output row. This allows
 * the client to determine which results were produced from which part of
 * the filter.
 *
 * Values must be at most 15 characters in length, and match the RE2
 * pattern [a-z0-9\\-]+
 *
 * Due to a technical limitation, it is not currently possible to apply
 * multiple labels to a cell. As a result, a chain filter may have no more than
 * one sub-filter which contains a apply label transformer. It is okay for
 * an {module:bigtable/filter#interleave} to contain multiple apply label
 * transformers, as they will be applied to separate copies of the input. This
 * may be relaxed in the future.
 *
 * @example
 * var filter = {
 *   label: 'my-label'
 * };
 */
Filter.prototype.label = function(label) {
  this.set('applyLabelTransformer', label);
};

/**
 * @example
 * //-
 * // Matches only cells from rows whose keys satisfy the given RE2 regex. In
 * // other words, passes through the entire row when the key matches, and
 * // otherwise produces an empty row.
 * //
 * // Note that, since row keys can contain arbitrary bytes, the '\C' escape
 * // sequence must be used if a true wildcard is desired. The '.' character
 * // will not match the new line character '\n', which may be present in a
 * // binary key.
 * //
 * // In the following example we'll use a regular expression to match all
 * // row keys ending with the letters "on", which would then yield
 * // `gwashington` and `tjefferson`.
 * //-
 * var filter = [
 *   {
 *     row: /[a-z]+on$/
 *   }
 * ];
 *
 * //-
 * // You can also provide a string (optionally containing regexp characters)
 * // for simple key filters.
 * //-
 * var filter = [
 *   {
 *     row: 'gwashington'
 *   }
 * ];
 *
 * //-
 * // Or you can provide an array of strings if you wish to match against
 * // multiple keys.
 * //-
 * var filter = [
 *   {
 *     row: [
 *       'gwashington',
 *       'tjefferson'
 *     ]
 *   }
 * ];
 *
 * //-
 * // If you wish to use additional row filters, consider using the following
 * // syntax.
 * //-
 * var filter = [
 *   {
 *     row: {
 *       key: 'gwashington'
 *     }
 *   }
 * ];
 *
 * //-
 * // <h4>Row Samples</h4>
 * //
 * // Matches all cells from a row with probability p, and matches no cells
 * // from the row with probability 1-p.
 * //-
 * var filter = [
 *   {
 *     row: {
 *       sample: 1
 *     }
 *   }
 * ];
 *
 * //-
 * // <h4>Row Cell Offsets</h4>
 * //
 * // Skips the first N cells of each row, matching all subsequent cells.
 * // If duplicate cells are present, as is possible when using an
 * // {module:bigtable/filter#interleave}, each copy of the cell is counted
 * // separately.
 * //-
 * var filter = [
 *   {
 *     row: {
 *       cellOffset: 2
 *     }
 *   }
 * ];
 *
 * //-
 * // <h4>Row Cell Limits</h4>
 * //
 * // Matches only the first N cells of each row.
 * // If duplicate cells are present, as is possible when using an
 * // {module:bigtable/filter#interleave}, each copy of the cell is counted
 * // separately.
 * //-
 * var filter = [
 *   {
 *     row: {
 *       cellLimit: 4
 *     }
 *   }
 * ];
 */
Filter.prototype.row = function(row) {
  if (!is.object(row)) {
    row = {
      key: row
    };
  }

  if (row.key) {
    var key = Filter.convertToRegExpString(row.key);

    key = Mutation.convertToBytes(key);
    this.set('rowKeyRegexFilter', key);
  }

  if (row.sample) {
    this.set('rowSampleFilter', row.sample);
  }

  if (is.number(row.cellOffset)) {
    this.set('cellsPerRowOffsetFilter', row.cellOffset);
  }

  if (is.number(row.cellLimit)) {
    this.set('cellsPerRowLimitFilter', row.cellLimit);
  }
};

/**
 * Stores a filter object.
 *
 * @private
 *
 * @param {string} key - Filter name.
 * @param {*} value - Filter value.
 */
Filter.prototype.set = function(key, value) {
  var filter = {};

  filter[key] = value;
  this.filters_.push(filter);
};

/**
 * This filter is meant for advanced use only. Hook for introspection into the
 * filter. Outputs all cells directly to the output of the read rather than to
 * any parent filter.
 *
 * Despite being excluded by the qualifier filter, a copy of every cell that
 * reaches the sink is present in the final result.
 *
 * As with an {module:bigtable/filter#interleave} filter, duplicate cells are
 * possible, and appear in an unspecified mutual order.
 *
 * Cannot be used within {module:bigtable/filter#condition} filter.
 *
 * @example
 * //-
 * // Using the following filter, a copy of every cell that reaches the sink is
 * // present in the final result, despite being excluded by the qualifier
 * // filter
 * //-
 * var filter = [
 *   {
 *     family: 'follows'
 *   },
 *   {
 *     interleave: [
 *       [
 *         {
 *           all: true
 *         }
 *       ],
 *       [
 *         {
 *           label: 'prezzy'
 *         },
 *         {
 *           sink: true
 *         }
 *       ]
 *     ]
 *   },
 *   {
 *     column: 'gwashington'
 *   }
 * ];
 *
 * //-
 * // As with an {module:bigtable/filter#interleave} filter, duplicate cells
 * // are possible, and appear in an unspecified mutual order. In this case we
 * // have a duplicates with multiple `gwashington` columns because one copy
 * // passed through the {module:bigtable/filter#all} filter while the other was
 * // passed through the {module:bigtable/filter#label} and sink. Note that one
 * // copy has label "prezzy" while the other does not.
 * //-
 */
Filter.prototype.sink = function(sink) {
  this.set('sink', sink);
};

/**
 * Matches only cells with timestamps within the given range.
 *
 * @example
 * var filter = [
 *   {
 *     time: {
 *       start: new Date('December 17, 2006 03:24:00'),
 *       end: new Date()
 *     }
 *   }
 * ];
 */
Filter.prototype.time = function(time) {
  var range = Mutation.createTimeRange(time.start, time.end);
  this.set('timestampRangeFilter', range);
};

/**
 * @private
 * If we detect multiple filters, we'll assume it's a chain filter and the
 * execution of the filters will be the order in which they were specified.
 */
Filter.prototype.toProto = function() {
  if (!this.filters_.length) {
    return null;
  }

  if (this.filters_.length === 1) {
    return this.filters_[0];
  }

  return {
    chain: {
      filters: this.filters_
    }
  };
};

/**
 * Matches only cells with values that satisfy the given regular expression.
 * Note that, since cell values can contain arbitrary bytes, the '\C' escape
 * sequence must be used if a true wildcard is desired. The '.' character
 * will not match the new line character '\n', which may be present in a
 * binary value.
 *
 * @example
 * var filter = [
 *   {
 *     value: /[0-9]/
 *   }
 * ];
 *
 * //-
 * // You can also provide a string (optionally containing regexp characters)
 * // for value filters.
 * //-
 * var filter = [
 *   {
 *     value: '1'
 *   }
 * ];
 *
 * //-
 * // Or you can provide an array of strings if you wish to match against
 * // multiple values.
 * //-
 * var filter = [
 *   {
 *     value: ['1', '9']
 *   }
 * ];
 *
 * //-
 * // <h4>Value Ranges</h4>
 * //
 * // Specifies a contigous range of values.
 * //
 * // When the `start` bound is omitted it is interpreted as an empty string.
 * // When the `end` bound is omitted it is interpreted as Infinity.
 * //-
 * var filter = [
 *   {
 *     value: {
 *       start: '1',
 *       end: '9'
 *     }
 *   }
 * ];
 *
 * //-
 * // By default, both the `start` and `end` bounds are inclusive. You can
 * // override these by providing an object explicity stating whether or not it
 * // is `inclusive`.
 * //-
 * var filter = [
 *   {
 *     value: {
 *       start: {
 *         value: '1',
 *         inclusive: false
 *       },
 *       end: {
 *         value: '9',
 *         inclusive: false
 *       }
 *     }
 *   }
 * ];
 *
 * //-
 * // <h4>Strip Values</h4>
 * //
 * // Replaces each cell's value with an emtpy string.
 * //-
 * var filter = [
 *   {
 *     value: {
 *       strip: true
 *     }
 *   }
 * ];
 */
Filter.prototype.value = function(value) {
  if (!is.object(value)) {
    value = {
      value: value
    };
  }

  if (value.value) {
    var valueReg = Filter.convertToRegExpString(value.value);

    valueReg = Mutation.convertToBytes(valueReg);
    this.set('valueRegexFilter', valueReg);
  }

  if (value.start || value.end) {
    var range = Filter.createRange(value.start, value.end, 'Value');

    this.set('valueRangeFilter', range);
  }

  if (value.strip) {
    this.set('stripValueTransformer', value.strip);
  }
};

module.exports = Filter;
module.exports.FilterError = FilterError;
