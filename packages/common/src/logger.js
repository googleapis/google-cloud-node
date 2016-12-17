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

 'use strict';

/*!
 * @module common/logger
 */

var format = require('string-format-obj');
var is = require('is');
var logDriver = require('log-driver');

/**
 * A list of log levels.
 * @type {Array}
 */
var logLevels = [
  'error',
  'warn',
  'info',
  'debug',
  'silly'
];

/**
 * Create a logger to print output to the console.
 *
 * @param {string=|object=} options - Configuration object. If a string, it is
 *     treated as `options.level`.
 * @param {string=} options.level - The minimum log level that will print to the
 *     console. (Default: `error`)
 * @param {string=} options.tag - A tag to use in log messages.
 */
function logger(options) {
  if (is.string(options)) {
    options = {
      level: options
    };
  }

  options = options || {};

  return logDriver({
    levels: logLevels,

    level: options.level || 'error',

    format: function() {
      var args = [].slice.call(arguments);

      return format('{level}{tag} {message}', {
        level: args.shift().toUpperCase(),
        tag: options.tag ? ':' + options.tag + ':' : '',
        message: args.join(' ')
      });
    }
  });
}

module.exports = logger;
module.exports.logLevels = logLevels;
