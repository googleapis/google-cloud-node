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
var isObject = is.object;
var extractFromObject = require('../error-extractors/object.js');
var handleUnknownAsError = require('./unknown.js');

/**
 * Handles routing and validation for parsing an error that has been indicated
 * to be of type object. If the value submitted for err passes a basic check
 * for being of type Object than the input will extracted as such, otherwise the
 * input will be treated as unknown.
 * @function handleObjectAsError
 * @param {Object} err - the error information object to extract from
 * @param {ErrorMessage} errorMessage - the error message instance to marshal
 *  error information into
 * @returns {Undefined} - does not return anything
 */
function handleObjectAsError(err, errorMessage) {

  if (isObject(err)) {

    extractFromObject(err, errorMessage);
  } else {

    handleUnknownAsError(err, errorMessage);
  }
}

module.exports = handleObjectAsError;
