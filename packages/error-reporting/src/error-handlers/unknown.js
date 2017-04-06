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

/**
 * Handles unknown/unsupported input as the content of the error message. Since
 * the problem-space is not defined for this path the library only attempts to
 * manufacture a stack trace for submission to the API and discards the input
 * that was given as the error content.
 * @function handleUnknownAsError
 * @param {Any} err - the unknown/unsupported input indicated as the content of
 *  the error.
 * @param {ErrorMessage} errorMessage - the error message instance to marshal
 *  error information into.
 * @returns {Undefined} - does not return anything
 */
function handleUnknownAsError(err, errorMessage) {
  var fauxError = new Error();

  errorMessage.setMessage(fauxError.stack);
}

module.exports = handleUnknownAsError;
