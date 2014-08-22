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

/*jshint strict:false, noarg:false */

/**
 * @module common/util
 */

var util = require('util');

/**
 * Extend a base object with properties from another.
 *
 * @param {object} from - The base object.
 * @param {object} to - The object to extend with.
 * @return {object}
 * ```
 */
function extend(from, to) {
  if (from === null || typeof from !== 'object') {
    return from;
  }
  if (from.constructor !== Object && from.constructor !== Array) {
    return from;
  }
  if (from.constructor === Date || from.constructor === Function ||
      from.constructor === String || from.constructor === Number ||
      from.constructor === Boolean) {
    return new from.constructor(from);
  }
  to = to || new from.constructor();
  for (var name in from) {
    to[name] = to[name] ? extend(from[name], null) : to[name];
  }
  return to;
}

module.exports.extend = extend;

/**
 * Wrap an array around a non-Array object. If given an Array, it is returned.
 *
 * @param {*} input - Non-array object to wrap.
 * @return {array}
 *
 * @example
 * ```js
 * arrayize(2);
 * // [ 2 ]
 *
 * arrayize(['Hi']);
 * // [ 'Hi' ]
 * ```
 */
function arrayize(input) {
  if (!Array.isArray(input)) {
    return [input];
  }
  return input;
}

module.exports.arrayize = arrayize;

/**
 * Format a string with values from the provided object.
 *
 * @param {string} template - String with {} denoted keys. (See example)
 * @param {object} args - Key/value pairs matching the holes in the template.
 * @return {string}
 *
 * @example
 * ```js
 * format('This is a {language} ({abbr}) codebase.', {
 *   language: 'JavaScript',
 *   abbr: 'JS'
 * });
 * // 'This is a JavaScript (JS) codebase.'
 * ```
 */
function format(template, args) {
  return template.replace(/{([^}]*)}/g, function(match, key) {
    return args[key] || match;
  });
}

module.exports.format = format;

/**
 * No op.
 *
 * @example
 * ```js
 * function doSomething(callback) {
 *   callback = callback || noop;
 * }
 * ```
 */
function noop() {}

module.exports.noop = noop;

/**
 * Extend the native Error object.
 *
 * @constructor
 *
 * @private
 *
 * @param {object} errorBody - Error object.
 */
function ApiError(errorBody) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.errors = errorBody.errors;
  this.code = errorBody.code;
  this.message = errorBody.message;
}

util.inherits(ApiError, Error);

/**
 * Uniformly process an API response.
 *
 * @param {*} err - Error value.
 * @param {*} resp - Response value.
 * @param {*} body - Body value.
 * @param {function} callback - The callback function.
 */
function handleResp(err, resp, body, callback) {
  callback = callback || noop;
  if (err) {
    callback(err);
    return;
  }
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch(err) {}
  }
  if (body && body.error) {
    callback(new ApiError(body.error));
    return;
  }
  if (resp && (resp.statusCode < 200 || resp.statusCode > 299)) {
    callback(new Error('error during request, statusCode: ' + resp.statusCode));
    return;
  }
  callback(null, body, resp);
}

module.exports.handleResp = handleResp;

/**
 * Get the type of a value.
 *
 * @private
 *
 * @return {string}
 */
function getType(value) {
  return Object.prototype.toString.call(value).match(/\s(\w+)\]/)[1];
}

/**
 * Check if an object is of the given type.
 *
 * @param {*} value - Value to compare to.
 * @param {string} type - Type to check against object's value.
 * @return {boolean}
 *
 * @example
 * ```js
 * is([1, 2, 3], 'array');
 * // true
 * ```
 */
function is(value, type) {
  return getType(value).toLowerCase() === type.toLowerCase();
}

module.exports.is = is;

/**
 * Convert an object into an array.
 *
 * @param {object} object - Object to convert to an array.
 * @return {array}
 *
 * @example
 * ```js
 * function aFunction() {
 *   return toArray(arguments);
 * }
 *
 * aFunction(1, 2, 3);
 * // [1, 2, 3]
 * ```
 */
function toArray(object) {
  return [].slice.call(object);
}

module.exports.toArray = toArray;
