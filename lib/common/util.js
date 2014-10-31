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
 * @private
 * @module common/util
 */

var extend = require('extend');
var util = require('util');
var uuid = require('node-uuid');

/**
 * Extend a global configuration object with user options provided at the time
 * of sub-module instantiation.
 *
 * Connection details currently come in two ways: `credentials` or
 * `keyFilename`. Because of this, we have a special exception when overriding a
 * global configuration object. If a user provides either to the global
 * configuration, then provides another at submodule instantiation-time, the
 * latter is preferred.
 *
 * @param  {object} globalConfig - The global configuration object.
 * @param  {object} overrides - The instantiation-time configuration object.
 * @return {object}
 *
 * @example
 * // globalConfig = {
 * //   credentials: {...}
 * // }
 * Datastore.prototype.dataset = function(options) {
 *   // options = {
 *   //   keyFilename: 'keyfile.json'
 *   // }
 *   return extendGlobalConfig(this.config, options);
 *   // returns:
 *   //   {
 *   //     keyFilename: 'keyfile.json'
 *   //   }
 * };
 */
function extendGlobalConfig(globalConfig, overrides) {
  var options = extend({}, globalConfig);
  var hasGlobalConnection = options.credentials || options.keyFilename;
  var isOverridingConnection = overrides.credentials || overrides.keyFilename;
  if (hasGlobalConnection && isOverridingConnection) {
    delete options.credentials;
    delete options.keyFilename;
  }
  return extend(true, {}, options, overrides);
}

module.exports.extendGlobalConfig = extendGlobalConfig;

/**
 * Wrap an array around a non-Array object. If given an Array, it is returned.
 *
 * @param {*} input - Non-array object to wrap.
 * @return {array}
 *
 * @example
 * arrayize(2);
 * // [ 2 ]
 *
 * arrayize(['Hi']);
 * // [ 'Hi' ]
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
 * format('This is a {language} ({abbr}) codebase.', {
 *   language: 'JavaScript',
 *   abbr: 'JS'
 * });
 * // 'This is a JavaScript (JS) codebase.'
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
 * function doSomething(callback) {
 *   callback = callback || noop;
 * }
 */
function noop() {}

module.exports.noop = noop;

/**
 * Extend the native Error object.
 *
 * @constructor
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
    // Error from JSON api.
    callback(new ApiError(body.error));
    return;
  }
  if (resp && (resp.statusCode < 200 || resp.statusCode > 299)) {
    // Unknown error. Format according to ApiError standard.
    callback(new ApiError({
      errors: [],
      code: resp.statusCode,
      message: body || 'Error during request.'
    }));
    return;
  }
  callback(null, body, resp);
}

module.exports.handleResp = handleResp;

/**
 * Get the type of a value.
 *
 * @return {string}
 */
function getType(value) {
  if (value instanceof Buffer) {
    return 'buffer';
  }
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
 * is([1, 2, 3], 'array');
 * // true
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
 * function aFunction() {
 *   return toArray(arguments);
 * }
 *
 * aFunction(1, 2, 3);
 * // [1, 2, 3]
 */
function toArray(object) {
  return [].slice.call(object);
}

module.exports.toArray = toArray;

/**
 * Take a Duplexify stream, fetch an authorized connection header, and create an
 * outgoing writable stream.
 *
 * @param {Duplexify} dup - Duplexify stream.
 * @param {object} options - Configuration object.
 * @param {module:common/connection} options.connection - A connection instance,
 *     used to get a token with and send the request through.
 * @param {object} options.metadata - Metadata to send at the head of the
 *     request.
 * @param {object} options.request - Request object, in the format of a standard
 *     Node.js http.request() object.
 * @param {string=} options.request.method - Default: "POST".
 * @param {string=} options.request.qs.uploadType - Default: "multipart".
 * @param {string=} options.streamContentType - Default:
 *     "application/octet-stream".
 * @param {function} onComplete - Callback, executed after the writable Request
 *     stream has completed.
 */
function makeWritableStream(dup, options, onComplete) {
  onComplete = onComplete || noop;

  var boundary = uuid.v4();

  var defaults = {
    method: 'POST',
    qs: {
      uploadType: 'multipart'
    }
  };

  // Extend the provided request object with common defaults.
  //
  // `options.request` takes precedence over the defaults, but not over the
  // headers, as these set up the boundary.
  var request = extend(true, defaults, options.request, {
    headers: {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    }
  });

  // With the provided connection, be sure we have a valid token before
  // attempting to create a request.
  options.connection.createAuthorizedReq(request, function(err, req) {
    if (err) {
      dup.emit('error', err);
      return;
    }

    var streamType = options.streamContentType || 'application/octet-stream';

    var stream = options.connection.requester(req);
    stream.callback = noop;

    // Write the metadata to the request.
    stream.write('--' + boundary + '\n');
    stream.write('Content-Type: application/json\n\n');
    stream.write(JSON.stringify(options.metadata));
    stream.write('\n\n');
    stream.write('--' + boundary + '\n');
    stream.write('Content-Type: ' + streamType + '\n\n');

    // Overwrite the `end` function, so we can close the boundary.
    var oldEndFn = stream.end;
    stream.end = function(data, encoding, callback) {
      data = (data || '') + '\n--' + boundary + '--\n';
      stream.write(data, encoding, callback);
      oldEndFn.apply(this);
    };

    // When the request is complete, parse it. If everything went well, pass the
    // parsed response data to the callback handler.
    stream.on('complete', function(res) {
      handleResp(null, res, res.body, function(err, data) {
        if (err) {
          dup.emit('error', err);
          dup.end();
          return;
        }
        onComplete(data);
      });
    });

    // We have a writable stream - tell Duplexify about it, so it can resume
    // processing incoming data.
    dup.setWritable(stream);

    // Keep part of the stream open to keep Request from closing the conneciton.
    // Reference: http://goo.gl/zZVSif.
    dup.pipe(stream);
  });
}

module.exports.makeWritableStream = makeWritableStream;
