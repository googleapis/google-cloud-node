/**
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
var isString = require('is').string;

/**
 * Handles validation of an error which has been indicated to be of type String.
 * This function will create a new instance of the Error class to produce a
 * stack trace for submission to the API and check to confirm that the given
 * value is of type string.
 * @function handleStringAsError
 * @param {String} err - the String indicated as the content of the error
 * @param {ErrorMessage} errorMessage - the error message instance to marshal
 *  error information into.
 * @returns {Undefined} - does not return anything
 */
function handleStringAsError(err, errorMessage) {
  var fauxError = new Error();
  var fullStack = fauxError.stack.split('\n');
  var cleanedStack = fullStack.slice(0, 1).concat(fullStack.slice(4));
  var errChecked = '';

  if (isString(err)) {
    // Replace the generic error message with the user-provided string
    cleanedStack[0] = err;
  }

  errChecked = cleanedStack.join('\n');

  errorMessage.setMessage(errChecked);
}

module.exports = handleStringAsError;
