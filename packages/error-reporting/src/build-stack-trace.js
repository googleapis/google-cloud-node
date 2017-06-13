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

var is = require('is');

/**
 * Constructs a string representation of the stack trace at the point where
 * this function was invoked.  Note that the stack trace will not include any
 * references to this function itself.
 * @param {String?} message - The message that should appear as the first line
 *   of the stack trace.  This value defaults to the empty string.
 * @param {Number?} numSkip - The number of additional lines to not display
 *   in the stack trace.  That is, the stack trace returned will have the
 *   specified message with the top `numSkip` lines of the stack not displayed.
 *   This value defaults to 0 if it is not defined or is not a number.
 * @returns {String} - A string representation of the stack trace at the point
 *   where this method was invoked.
 */
function buildStackTrace(message, numSkip) {
  var target = {};
  // Build a stack trace without the frames associated with `buildStackTrace`.
  // The stack is located at `target.stack`.
  Error.captureStackTrace(target, buildStackTrace);
  // Ignore the first line, which contains the error message, because we will
  // add our own error message later.
  var fullStack = target.stack.split('\n').slice(1);
  var prefix = message ? message + '\n' : '';
  var realNumSkip = is.number(numSkip) ? numSkip : 0;
  return prefix + fullStack.slice(realNumSkip).join('\n');
}

module.exports = buildStackTrace;
