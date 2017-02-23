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
var is = require('is');
var isNumber = is.number;
var isFunction = is.function;

/**
 * Handles routing and validation for parsing an error which has been indicated
 * to be of type Number. This handler will manufacture a new Error to create
 * a stack-trace for submission to the Error API and will attempt to caste the
 * given number to a string for submission to the Error API.
 * @function handleNumberAsError
 * @param {Number} err - the number submitted as content for the error message
 * @param {ErrorMessage} errorMessage - the error messag instance to marshall
 *  error information into.
 * @returns {Undefined} - does not return anything
 */
function handleNumberAsError(err, errorMessage) {
  var fauxError = new Error();
  var errChecked = fauxError.stack;

  if (isNumber(err) && isFunction(err.toString)) {

    errChecked = err.toString();
  }

  errorMessage.setMessage(errChecked);
}

module.exports = handleNumberAsError;
