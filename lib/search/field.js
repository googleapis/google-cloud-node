/*!
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

/*!
 * @module search/field
 */

'use strict';

var format = require('string-format-obj');
var is = require('is');

/**
 * Create a Field object to easily format a Cloud Search index's field.
 *
 * @constructor
 * @alias module:search/field
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var search = gcloud.search({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var document = search.index('records').document('stephen');
 * var field = document.addField('alias');
 */
function Field() {
  this.values = [];
}

/**
 * An atom value is a string value that is treated as a single token. A query
 * will not match if it includes only a substring rather than the full field
 * value.
 *
 * @param {string} atom - String value.
 *
 * @example
 * field.addAtomValue('ryanseys');
 */
Field.prototype.addAtomValue = function(atom) {
  this.addTextValue(atom, { format: 'ATOM' });
};

/**
 * A geo value is a point on earth with latitude and longitude coordinates.
 *
 * @param {string|object} geo - Coordinate value as a string or object. String
 *     format: `'40.6894, -74.0447'`.
 * @param {number} geo.latitude - Latitudinal value.
 * @param {number} geo.longitude - Longitudinal value.
 *
 * @example
 * var coordinates = '40.6894, -74.0447';
 * field.addGeoValue(coordinates);
 *
 * //-
 * // Use an object.
 * //-
 * var coordinates = {
 *   latitude: 40.6894,
 *   longitude: -74.0447
 * };
 *
 * field.addGeoValue(coordinates);
 */
Field.prototype.addGeoValue = function(geo) {
  if (is.object(geo)) {
    geo = format('{latitude}, {longitude}', geo);
  }

  this.values.push({
    geoValue: geo
  });
};

/**
 * An HTML value is an HTML-formatted string. Text out of markup tags are
 * tokenized and markup tags are considered metadata.
 *
 * @param {string} html - HTML value.
 *
 * @example
 * var html = '<html><head><title>hello, world</title></head></html>';
 * field.addHtmlValue(html);
 */
Field.prototype.addHtmlValue = function(html) {
  this.addTextValue(html, { format: 'HTML' });
};

/**
 * A number value is a double precision floating point value.
 *
 * @throws {error} If a number is not provided.
 *
 * @param {number} number - Number value.
 *
 * @example
 * field.addNumberValue(8);
 */
Field.prototype.addNumberValue = function(number) {
  if (!is.number(number)) {
    throw new Error('number must be a number.');
  }

  this.values.push({
    numberValue: number
  });
};

/**
 * A text value is a string that is tokenized as plain text.
 *
 * @param {string} text - Text value.
 * @param {object=} options - Configuration object.
 * @param {string} options.format - One of `ATOM`, `HTML`, or `TEXT`. (Default:
 *     `TEXT`).
 *
 * @example
 * field.addTextValue('Hello!');
 */
Field.prototype.addTextValue = function(text, options) {
  options = options || {};
  var format = options.format || 'TEXT';

  this.values.push({
    stringValue: text.toLowerCase(),
    stringFormat: format.toUpperCase()
  });
};

/**
 * A timestamp value is a date-time value with millisecond precision.
 *
 * @param {string|date} timestamp - Timestamp value.
 *
 * @example
 * var timestamp = '2014-08-18T21:19:55.000Z';
 * field.addTimestampValue(timestamp);
 *
 * //-
 * // Use a Date object.
 * //-
 * var now = Date.now();
 * field.addTimestampValue(now);
 */
Field.prototype.addTimestampValue = function(timestamp) {
  if (timestamp instanceof Date) {
    timestamp = timestamp.toJSON();
  }

  this.values.push({
    timestampValue: timestamp
  });
};

module.exports = Field;
