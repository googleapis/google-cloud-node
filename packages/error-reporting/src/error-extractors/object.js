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
var has = require('lodash.has');
var is = require('is');
var isObject = is.object;

/**
 * Attempts to extract error information given an object as the input for the
 * error. This function will check presence of each property before attempting
 * to access the given property on the object but will not check for type
 * compliance as that is allocated to the instance of the error message itself.
 * @function extractFromObject
 * @param {Object} err - the Object given as the content of the error
 * @param {String} [err.message] - the error message
 * @param {String} [err.user] - the user the error occurred for
 * @param {String} [err.filePath] - the file path and file where the error
 *  occurred at
 * @param {Number} [err.lineNumber] - the line number where the error occurred
 *  at
 * @param {String} [err.functionName] - the function where the error occurred at
 * @param {Object} [err.serviceContext] - the service context object of the
 *  error
 * @param {String} [err.serviceContext.service] - the service the error occurred
 *  on
 * @param {String} [err.serviceContext.version] - the version of the application
 *  that the error occurred on
 * @param {ErrorMessage} errorMessage - the error message instance to marshal
 *  error information into
 * @returns {Undefined} - does not return anything
 */
function extractFromObject(err, errorMessage) {

  if (has(err, 'message')) {

    errorMessage.setMessage(err.message);
  }

  if (has(err, 'user')) {

    errorMessage.setUser(err.user);
  }

  if (has(err, 'filePath')) {

    errorMessage.setFilePath(err.filePath);
  }

  if (has(err, 'lineNumber')) {

    errorMessage.setLineNumber(err.lineNumber);
  }

  if (has(err, 'functionName')) {

    errorMessage.setFunctionName(err.functionName);
  }

  if (has(err, 'serviceContext') && isObject(err.serviceContext)) {

    errorMessage.setServiceContext(err.serviceContext.service,
                                   err.serviceContext.version);
  }
}

module.exports = extractFromObject;
