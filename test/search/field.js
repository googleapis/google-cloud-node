/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

var Field = require('../../lib/search/field.js');

describe('Field', function() {
  var field;

  function fieldHasValue(field, type, value) {
    return field.values
      .filter(function(value) { return type in value; })
      .some(function(value_) { return value_[type] === value; });
  }

  beforeEach(function() {
    field = new Field();
  });

  describe('instantiation', function() {
    it('should localize an empty values array', function() {
      assert.deepEqual(field.values, []);
    });
  });

  describe('addAtomValue', function() {
    it('should pass value to addTextValue', function(done) {
      var atom = 'text-value';

      field.addTextValue = function(text, options) {
        assert.equal(text, atom);
        assert.equal(options.format, 'ATOM');
        done();
      };

      field.addAtomValue(atom);
    });
  });

  describe('addGeoValue', function() {
    it('should push geo value to values', function() {
      var geoValue = '+lat, -long';

      field.addGeoValue(geoValue);

      assert(fieldHasValue(field, 'geoValue', geoValue));
    });

    it('should parse an object', function() {
      var geoValue = { latitude: 42.3314, longitude: 83.0458 };
      var expectedGeoValue = geoValue.latitude + ', ' + geoValue.longitude;

      field.addGeoValue(geoValue);

      assert(fieldHasValue(field, 'geoValue', expectedGeoValue));
    });
  });

  describe('addHtmlValue', function() {
    it('should pass value to addTextValue', function(done) {
      var html = '<html></html>';

      field.addTextValue = function(text, options) {
        assert.equal(text, html);
        assert.equal(options.format, 'HTML');
        done();
      };

      field.addHtmlValue(html);
    });
  });

  describe('addNumberValue', function() {
    it('should throw if a number is not provided', function() {
      assert.throws(function() {
        field.addNumberValue();
      }, /number must be a number/);

      assert.throws(function() {
        field.addNumberValue(true);
      }, /number must be a number/);

      assert.throws(function() {
        field.addNumberValue(function() {});
      }, /number must be a number/);
    });

    it('should push number value to values', function() {
      field.addNumberValue(8);

      assert(fieldHasValue(field, 'numberValue', 8));
    });
  });

  describe('addTextValue', function() {
    it('should push formatted value to values', function() {
      var text = 'HELLO';

      field.addTextValue(text);

      assert(fieldHasValue(field, 'stringValue', text.toLowerCase()));
      assert(fieldHasValue(field, 'stringFormat', 'TEXT'));
    });

    it('should allow customization of text value', function() {
      var text = 'HELLO';
      var format = 'html';

      field.addTextValue(text, { format: format });

      assert(fieldHasValue(field, 'stringValue', text.toLowerCase()));
      assert(fieldHasValue(field, 'stringFormat', format.toUpperCase()));
    });
  });

  describe('addTimestampValue', function() {
    it('should push timestamp value to values', function() {
      var timestampValue = 'timestamp-value';

      field.addTimestampValue(timestampValue);

      assert(fieldHasValue(field, 'timestampValue', timestampValue));
    });

    it('should parse a date object', function() {
      var date = new Date();

      field.addTimestampValue(date);

      assert(fieldHasValue(field, 'timestampValue', date.toJSON()));
    });
  });
});
