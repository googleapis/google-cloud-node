/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

const SRC_ROOT = __dirname;

/**
 * Constructs a string representation of the stack trace at the point where
 * this function was invoked.  Note that the stack trace will not include any
 * references to frames specific to this error-reporting library itself.
 * @param {String?} message - The message that should appear as the first line
 *   of the stack trace.  This value defaults to the empty string.
 * @returns {String} - A string representation of the stack trace at the point
 *   where this method was invoked.
 */
function buildStackTrace(message) {
  var target = {};
  // Build a stack trace without the frames associated with `buildStackTrace`.
  // The stack is located at `target.stack`.
  Error.captureStackTrace(target, buildStackTrace);
  var prefix = message ? message + '\n' : '';
  return prefix + target.stack.split('\n').slice(1).filter(function(line) {
    // Filter out all frames that are specific to the error-reporting library
    return !line || line.indexOf(SRC_ROOT) === -1;
  }).join('\n');
}

module.exports = buildStackTrace;
