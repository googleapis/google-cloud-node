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
 * @module common/stream-router
 */

'use strict';

var arrify = require('arrify');
var concat = require('concat-stream');
var extend = require('extend');
var is = require('is');
var split = require('split-array-stream');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('./util.js');

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
  methodNames = arrify(methodNames);

  methodNames.forEach(function(methodName) {
    var originalMethod = Class.prototype[methodName];

    Class.prototype[methodName] = function() {
      var parsedArguments = streamRouter.parseArguments_(arguments);
      return streamRouter.router_(parsedArguments, originalMethod.bind(this));
    };
  });
};

/**
 * Parse a pseudo-array `arguments` for a query and callback.
 *
 * @param {array} args - The original `arguments` pseduo-array that the original
 *     method received.
 */
streamRouter.parseArguments_ = function(args) {
  var query;
  var autoPaginate = true;
  var maxApiCalls = -1;
  var maxResults = -1;
  var callback;

  var firstArgument = args[0];
  var lastArgument = args[args.length - 1];

  if (is.fn(firstArgument)) {
    callback = firstArgument;
  } else {
    query = firstArgument;
  }

  if (is.fn(lastArgument)) {
    callback = lastArgument;
  }

  if (is.object(query)) {
    query = extend(true, {}, query);

    // Check if the user only asked for a certain amount of results.
    if (is.number(query.maxResults)) {
      // `maxResults` is used API-wide.
      maxResults = query.maxResults;
    } else if (is.number(query.pageSize)) {
      // `pageSize` is Pub/Sub's `maxResults`.
      maxResults = query.pageSize;
    }

    if (is.number(query.maxApiCalls)) {
      maxApiCalls = query.maxApiCalls;
      delete query.maxApiCalls;
    }

    if (callback &&
        (maxResults !== -1 || // The user specified a limit.
        query.autoPaginate === false)) {
      autoPaginate = false;
    }
  }

  return {
    query: query || {},
    autoPaginate: autoPaginate,
    maxApiCalls: maxApiCalls,
    maxResults: maxResults,
    callback: callback
  };
};

/**
 * The router accepts a query and callback that were passed to the overwritten
 * method. If there's a callback, simply pass the query and/or callback through
 * to the original method. If there isn't a callback. stream mode is activated.
 *
 * @param {array} parsedArguments - Parsed arguments from the original method
 *     call.
 * @param {object=|string=} parsedArguments.query - Query object. This is most
 *     commonly an object, but to make the API more simple, it can also be a
 *     string in some places.
 * @param {function=} parsedArguments.callback - Callback function.
 * @param {boolean} parsedArguments.autoPaginate - Auto-pagination enabled.
 * @param {boolean} parsedArguments.maxApiCalls - Maximum API calls to make.
 * @param {number} parsedArguments.maxResults - Maximum results to return.
 * @param {function} originalMethod - The cached method that accepts a callback
 *     and returns `nextQuery` to receive more results.
 * @return {undefined|stream}
 */
streamRouter.router_ = function(parsedArguments, originalMethod) {
  var query = parsedArguments.query;
  var callback = parsedArguments.callback;
  var autoPaginate = parsedArguments.autoPaginate;

  if (callback) {
    if (autoPaginate) {
      this.runAsStream_(parsedArguments, originalMethod)
        .on('error', callback)
        .pipe(concat(function(results) {
          callback(null, results);
        }));
    } else {
      originalMethod(query, callback);
    }
  } else {
    return this.runAsStream_(parsedArguments, originalMethod);
  }
};

/**
 * This method simply calls the nextQuery recursively, emitting results to a
 * stream. The stream ends when `nextQuery` is null.
 *
 * `maxResults` will act as a cap for how many results are fetched and emitted
 * to the stream.
 *
 * @param {object=|string=} parsedArguments.query - Query object. This is most
 *     commonly an object, but to make the API more simple, it can also be a
 *     string in some places.
 * @param {function=} parsedArguments.callback - Callback function.
 * @param {boolean} parsedArguments.autoPaginate - Auto-pagination enabled.
 * @param {boolean} parsedArguments.maxApiCalls - Maximum API calls to make.
 * @param {number} parsedArguments.maxResults - Maximum results to return.
 * @param {function} originalMethod - The cached method that accepts a callback
 *     and returns `nextQuery` to receive more results.
 * @return {stream} - Readable object stream.
 */
streamRouter.runAsStream_ = function(parsedArguments, originalMethod) {
  var query = parsedArguments.query;
  var resultsToSend = parsedArguments.maxResults;

  var limiter = util.createLimiter(makeRequest, {
    maxApiCalls: parsedArguments.maxApiCalls
  });

  var stream = limiter.stream;

  stream.once('reading', function() {
    makeRequest(query);
  });

  function makeRequest(query) {
    originalMethod(query, onResultSet);
  }

  function onResultSet(err, results, nextQuery) {
    if (err) {
      stream.destroy(err);
      return;
    }

    if (resultsToSend >= 0 && results.length > resultsToSend) {
      results = results.splice(0, resultsToSend);
    }

    resultsToSend -= results.length;

    split(results, stream, function(streamEnded) {
      if (streamEnded) {
        return;
      }

      if (nextQuery && resultsToSend !== 0) {
        limiter.makeRequest(nextQuery);
        return;
      }

      stream.push(null);
    });
  }

  return limiter.stream;
};

module.exports = streamRouter;
