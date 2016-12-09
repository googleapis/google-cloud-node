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

var slice = Array.prototype.slice;

module.exports = {
  /** @const {number} */ ERROR: 1,
  /** @const {number} */ WARN: 2,
  /** @const {number} */ INFO: 3,
  /** @const {number} */ DEBUG: 4,
  /** @const {number} */ SILLY: 5,

  /** @const {Array.<?string>} */
  LEVEL_NAMES: [null, 'ERROR', 'WARN ', 'INFO ', 'DEBUG', 'SILLY'],

  /**
   * Factory method that returns a new logger.
   *
   * @param {number=} level Log level for reporting to the console.
   * @param {?string=} prefix to use in log messages.
   */
  create: function(level, prefix) {
    var level_ = level || 0;
    var prefix_ = prefix || '';

    /**
     * Logs any passed in arguments.
     * @private
     */
    var log = function(level, args) {
      if (level_ < level) {
        return;
      }
      args.unshift(module.exports.LEVEL_NAMES[level] + ':' + prefix_ + ':');
      console.log.apply(console, args);
    };

    return {
      error: function() { log(module.exports.ERROR, slice.call(arguments)); },
      warn: function()  { log(module.exports.WARN, slice.call(arguments));  },
      info: function()  { log(module.exports.INFO, slice.call(arguments));  },
      debug: function() { log(module.exports.DEBUG, slice.call(arguments)); },
      silly: function() { log(module.exports.SILLY, slice.call(arguments)); },
    };
  } /* create */

}; /* module.exports */


