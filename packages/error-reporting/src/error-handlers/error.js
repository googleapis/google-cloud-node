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
var handleUnknownAsError = require('./unknown.js');
var extractFromErrorClass = require('../error-extractors/error.js');

/**
 * Handles routing and validation for parsing an errorMessage that was
 * flagged as an instance of the Error class. This function does not
 * discriminate against regular objects, checking only to see if the err
 * parameter is itself a basic object and has the function property
 * hasOwnProperty. Given that the input passes this basic test the input
 * will undergo extraction by the extractFromErrorClass function, otherwise
 * it will be treated and processed as an unknown.
 * @function handleErrorClassError
 * @param {Error} err - the error instance to extract information from
 * @param {ErrorMessage} errorMessage - the error message to marshal error
 *  information into.
 * @returns {Undefined} - does not return anything
 */
function handleErrorClassError(err, errorMessage) {

  if (err instanceof Error) {

    extractFromErrorClass(err, errorMessage);
  } else {

    handleUnknownAsError(err, errorMessage);
  }
}

module.exports = handleErrorClassError;
