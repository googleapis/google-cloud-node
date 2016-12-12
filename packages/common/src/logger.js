/**
 * Copyright 2014, 2015 Google Inc. All Rights Reserved.
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

var splice = Array.prototype.splice;
var join = Array.prototype.join;
var makeLogger = require('log-driver');

module.exports = {
  /**
   * Factory method that returns a new logger.
   *
   * @param {string=} level Log level for reporting to the console.
   * @param {?string=} prefix to use in log messages.
   */
  create: function(level, prefix) {
    var prefix_ = prefix || '';

    return makeLogger({
      levels: ['error', 'warn', 'info', 'debug', 'silly'],
      level: level || 'error',
      format: function() {
        arguments[0] = arguments[0].toUpperCase();
        splice.call(arguments, 1, 0, ':', prefix_, ':');
        return join.call(arguments, ' ');
      }
    });
  } /* create */

}; /* module.exports */


