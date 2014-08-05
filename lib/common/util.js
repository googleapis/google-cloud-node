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

var util = require('util');

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

module.exports.arrayize = function(input) {
  if (!Array.isArray(input)) {
    return [input];
  }
  return input;
};

module.exports.format = function(templ, args) {
  Object.keys(args).forEach(function(k) {
    templ = templ.replace('{' + k  + '}', args[k]);
  });
  return templ;
};

var noop = function() {};

module.exports.noop = noop;

function ApiError (errorBody) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.errors = errorBody.errors;
  this.code = errorBody.code;
  this.message = errorBody.message;
}

util.inherits(ApiError, Error);

module.exports.handleResp = function(err, resp, body, callback) {
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
};
