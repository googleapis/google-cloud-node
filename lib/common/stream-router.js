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
 * @module common/streamrouter
 */

'use strict';

var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * streamRouter is used to extend `nextQuery`+callback methods with stream
 * functionality.
 *
 * Before:
 *
 *   search.query('done=true', function(err, results, nextQuery) {});
 *
 * After:
 *
 *   search.query('done=true').on('data', function(result) {});
 *
 * Methods to extend should be written to accept callbacks and return a
 * `nextQuery`. All stream logic is handled in `streamRouter.router_`.
 */
var streamRouter = {};

/**
 * Cache the original method, then overwrite it on the Class's prototype.
 *
 * @param {function} Class - The parent class of the methods to extend.
 * @param {array|string} methodNames - Name(s) of the methods to extend.
 */
streamRouter.extend = function(Class, methodNames) {
  methodNames = util.arrayize(methodNames);

  methodNames.forEach(function(methodName) {
    var originalMethod = Class.prototype[methodName];

    Class.prototype[methodName] = function() {
      return streamRouter.router_(arguments, originalMethod.bind(this));
    };
  });
};

/**
 * The router accepts all incoming arguments to the overwritten method. If the
 * last argument is a function, simply pass them through to the original method.
 * If the last argument is not a function, activate stream mode.
 *
 * Stream mode simply calls the nextQuery recursively. The stream ends when
 * `nextQuery` is null.
 *
 * @param {array} args - The original `arguments` pseudo-array as it was
 *     received by the original method.
 * @param {function} originalMethod - The cached method that accepts a callback
 *     and returns `nextQuery` to receive more results.
 * @return {undefined|stream}
 */
streamRouter.router_ = function(args, originalMethod) {
  args = util.toArray(args);
  var callback = args[args.length - 1];
  var isStreamMode = !util.is(callback, 'function');

  if (!isStreamMode) {
    originalMethod.apply(null, args);
    return;
  }

  var stream = streamEvents(through.obj());

  // Results from the API are split apart for the user. If 50 results are
  // returned, we emit 50 data events. While the user is consuming these, they
  // might choose to end the stream early by calling ".end()". We keep track of
  // this state to prevent pushing more results to the stream, ending it again,
  // or making unnecessary API calls.
  var streamEnded = false;
  var _end = stream.end;
  stream.end = function() {
    streamEnded = true;
    _end.apply(this, arguments);
  };

  function onResultSet(err, results, nextQuery) {
    if (err) {
      stream.emit('error', err);
      stream.end();
      return;
    }

    results.forEach(function(result) {
      if (!streamEnded) {
        stream.push(result);
      }
    });

    if (streamEnded) {
      return;
    }

    if (nextQuery) {
      originalMethod(nextQuery, onResultSet);
    } else {
      stream.end();
    }
  }

  stream.once('reading', function() {
    originalMethod.apply(null, args.concat(onResultSet));
  });

  return stream;
};

module.exports = streamRouter;
