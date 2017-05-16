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

'use strict';

var assert = require('assert');
var extend = require('extend');
var util = require('@google-cloud/common').util;

var RowBuilder = require('../src/row-builder.js');
var RowBuilderCached = extend({}, RowBuilder);

describe('RowBuilder', function() {
  var rowBuilder;

  var METADATA = {
    rowType: {
      fields: []
    }
  };

  var CHUNKS = [
    {
      metadata: METADATA
    }
  ];

  beforeEach(function() {
    extend(RowBuilder, RowBuilderCached);
    rowBuilder = new RowBuilder(METADATA, CHUNKS);
  });

  describe('acceptance tests', function() {
    var TESTS = require('./data/streaming-read-acceptance-test.json').tests;

    TESTS.forEach(function(test) {
      it('should pass acceptance test: ' + test.name, function() {
        var metadata = JSON.parse(test.chunks[0]).metadata;
        var chunkJson = JSON.parse('[' + test.chunks.join() + ']');
        var builder = new RowBuilder(metadata, chunkJson);

        builder.build();

        assert.deepEqual(builder.rows, test.result.value);
      });
    });
  });

  describe('instantiation', function() {
    it('should localize chunks', function() {
      assert.strictEqual(rowBuilder.chunks, CHUNKS);
    });

    it('should correctly initialize a rows array', function() {
      assert.deepEqual(rowBuilder.rows, [
        []
      ]);
    });

    it('should localize metadata', function() {
      assert.strictEqual(rowBuilder.metadata, CHUNKS[0].metadata);
    });

    it('should localize fields', function() {
      assert.strictEqual(rowBuilder.fields, CHUNKS[0].metadata.rowType.fields);
    });

    it('should return the last row when accessing currentRow', function() {
      var rows = [
        {},
        {}
      ];

      rowBuilder.rows.push(rows[0]);
      assert.strictEqual(rowBuilder.currentRow, rows[0]);

      rowBuilder.rows.push(rows[1]);
      assert.strictEqual(rowBuilder.currentRow, rows[1]);
    });
  });

  describe('getValue', function() {
    it('should do nothing to plain values', function() {
      var value = 'hi';

      assert.strictEqual(RowBuilder.getValue(value), value);
    });

    it('should detect value objects', function() {
      var value = {
        kind: 'stringValue',
        stringValue: 'hi'
      };

      assert.strictEqual(RowBuilder.getValue(value), value.stringValue);
    });

    it('should detect value objects containing arrays', function() {
      var value = {
        kind: 'listValue',
        listValue: {
          values: [{}, {}]
        }
      };

      assert.strictEqual(RowBuilder.getValue(value), value.listValue.values);
    });

    it('should accept null values', function() {
      var value = null;

      assert.strictEqual(RowBuilder.getValue(value), value);
    });
  });

  describe('formatValue', function() {
    it('should iterate an array', function() {
      var field = {
        code: 'ARRAY',
        arrayElementType: 'type'
      };

      var value = [
        {}
      ];

      var formattedValue = RowBuilder.formatValue(field, value);
      assert.strictEqual(formattedValue[0], value[0]);
    });

    it('should return the original value if not an array', function() {
      var field = {
        code: 'NOT_STRUCT_OR_ARRAY' // so it returns original value
      };

      var value = [
        {}
      ];

      var formattedValue = RowBuilder.formatValue(field, value);
      assert.strictEqual(formattedValue[0], value[0]);
    });

    it('should iterate a struct', function() {
      var field = {
        code: 'STRUCT',
        structType: {
          fields: [
            {
              name: 'fieldName',
              type: 'NOT_STRUCT_OR_ARRAY' // so it returns original value
            }
          ]
        }
      };

      var value = [
        {}
      ];

      var formattedValue = RowBuilder.formatValue(field, value);
      assert.deepEqual(formattedValue, {
        fieldName: value[0]
      });
    });
  });

  describe('merge', function() {
    it('should merge arrays', function() {
      var type = {
        code: 'ARRAY',
        arrayElementType: {
          code: 'FLOAT64' // so we break out of the fn w/o more processing
        }
      };

      var head = [
        1,
        2
      ];

      var tail = [
        3,
        4
      ];

      var merged = RowBuilder.merge(type, head, tail);
      assert.deepEqual(merged, [
        [ 1, 2, 3, 4 ]
      ]);
    });

    it('should merge structs', function() {
      var type = {
        code: 'STRUCT',
        structType: {
          fields: [
            {},
            {
              type: {
                code: 'FLOAT64' // so we break out of the fn w/o more processing
              }
            }
          ]
        }
      };

      var head = [
        1,
        2
      ];

      var tail = [
        3,
        4
      ];

      var merged = RowBuilder.merge(type, head, tail);
      assert.deepEqual(merged, [
        [ 1, 2, 3, 4 ]
      ]);
    });

    it('should merge numbers', function() {
      var type = {
        code: 'mergable-type' // any value but float64/array/struct
      };

      var head = 1;
      var tail = 2;

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], 3);
    });

    it('should merge strings', function() {
      var type = {
        code: 'mergable-type' // any value but float64/array/struct
      };

      var head = 'a';
      var tail = 'b';

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], 'ab');
    });

    it('should not merge null head values', function() {
      var type = {
        code: 'mergable-type' // any value but float64/array/struct
      };

      var head = null;
      var tail = 2;

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], head);
      assert.strictEqual(merged[1], tail);
    });

    it('should not merge null tail values', function() {
      var type = {
        code: 'mergable-type' // any value but float64/array/struct
      };

      var head = 1;
      var tail = null;

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], head);
      assert.strictEqual(merged[1], tail);
    });

    it('should not merge floats', function() {
      var type = {
        code: 'FLOAT64' // any value but float64/array/struct
      };

      var head = 1;
      var tail = 2;

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], head);
      assert.strictEqual(merged[1], tail);
    });

    it('should filter out empty strings', function() {
      var type = {
        code: 'mergable-type' // any value but float64/array/struct
      };

      var head = '';
      var tail = 'string';

      var merged = RowBuilder.merge(type, head, tail);
      assert.strictEqual(merged[0], tail);
    });
  });

  describe('append', function() {
    var ROWS = [
      [{}, {}],
      [{}, {}]
    ];

    var ROW_1 = ROWS[0];
    var ROW_2 = ROWS[1];

    beforeEach(function() {
      rowBuilder.fields = [{}, {}]; // matches the # of objects in a row

      rowBuilder.rows = [
        ROW_1 // row 1 is complete
      ];
    });

    it('should create a new row if the last row is complete', function() {
      rowBuilder.append(ROW_2[0]);
      rowBuilder.append(ROW_2[1]);

      assert.strictEqual(rowBuilder.rows[0][0], ROW_1[0]);
      assert.strictEqual(rowBuilder.rows[0][1], ROW_1[1]);

      assert.strictEqual(rowBuilder.rows[1][0], ROW_2[0]);
      assert.strictEqual(rowBuilder.rows[1][1], ROW_2[1]);
    });

    it('should push a value into the current row if incomplete', function() {
      assert.strictEqual(rowBuilder.rows[0][0], ROW_1[0]);
      assert.strictEqual(rowBuilder.rows[0][1], ROW_1[1]);

      assert.strictEqual(rowBuilder.rows[1], undefined);

      rowBuilder.append(ROW_2[0]);

      assert.strictEqual(rowBuilder.rows[1][0], ROW_2[0]);
    });
  });

  describe('build', function() {
    it('should append values from a chunk', function(done) {
      rowBuilder.chunks = [
        {
          values: [
            {}
          ]
        }
      ];

      rowBuilder.append = function(value) {
        assert.strictEqual(this, rowBuilder);
        assert.strictEqual(value, rowBuilder.chunks[0].values[0]);
        done();
      };

      rowBuilder.build();
    });

    it('should merge chunked values', function() {
      rowBuilder.rows = [
        [{}, {}]
      ];

      rowBuilder.fields = [ // length matches the # of values in a row
        {},
        {
          type: {}
        }
      ];

      rowBuilder.chunks = [
        {
          chunkedValue: true,
          values: [
            {}
          ]
        },
        {
          values: [
            {}
          ]
        }
      ];

      var expectedHead = rowBuilder.rows[0][1];
      var expectedTail = rowBuilder.chunks[1].values[0];

      var mergedValues = [
        {
          merged: true
        }
      ];

      RowBuilder.merge = function(type, head, tail) {
        assert.strictEqual(type, rowBuilder.fields[1].type);
        assert.strictEqual(head, expectedHead);
        assert.strictEqual(tail, expectedTail);
        return mergedValues;
      };

      var appended = [];
      rowBuilder.append = function(value) {
        appended.push(value);
      };

      rowBuilder.build();

      assert.strictEqual(appended[0], rowBuilder.chunks[0].values[0]);
      assert.strictEqual(appended[1], mergedValues[0]);
    });
  });

  describe('toJSON', function() {
    beforeEach(function() {
      rowBuilder.build = util.noop;
    });

    it('should run build', function(done) {
      rowBuilder.build = done;
      rowBuilder.toJSON();
    });

    it('should format the values', function() {
      var formattedValue = {
        formatted: true
      };

      rowBuilder.fields = [
        {
          name: 'fieldName',
          type: {}
        }
      ];

      rowBuilder.rows = [
        [
          {}
        ]
      ];

      RowBuilder.formatValue = function(type, value) {
        assert.strictEqual(type, rowBuilder.fields[0].type);
        assert.strictEqual(value, rowBuilder.rows[0][0]);
        return formattedValue;
      };

      var rows = rowBuilder.toJSON();
      var row = rows[0];

      assert.deepEqual(row, [
        {
          name: 'fieldName',
          value: formattedValue
        }
      ]);

      assert.deepEqual(row.toJSON(), {
        fieldName: formattedValue
      });
    });
  });
});
