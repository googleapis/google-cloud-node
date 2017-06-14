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
var buildStackTrace = require('./build-stack-trace.js');

/**
 * The Error handler router is responsible for taking an object of some type and
 * and Error message container, analyzing the type of the object and marshalling
 * the object's information into the error message container.
 * @function populateErrorMessage
 * @param {Any} ob - the object information to extract from
 * @param {ErrorMessage} em - an instance of ErrorMessage to marshal object
 *  information into
 * @returns {Undefined} - does not return a value
 */
function populateErrorMessage(ob, em) {
  if (ob === null || ob === undefined) {
    em.setMessage(buildStackTrace('' + ob, 3));
  } else if (ob.stack) {
    populateFromError(ob, em);
  } else if (typeof ob === 'object' && isObject(ob)) {
    populateFromObject(ob, em);
  } else {
    em.setMessage(buildStackTrace(ob.toString(), 3));
  }

  return em;
}

/**
 * Extracts error information from an instance of the Error class and marshals
 * that information into the provided instance of error message. This function
 * will check before accessing any part of the error for propety presence but
 * will not check the types of these property values that is instead work that
 * is allocated to the error message instance itself.
 * @function populateFromError
 * @param {Error} err - the error instance
 * @param {ErrorMessage} errorMessage - the error message instance to have the
 *  error information marshaled into
 * @returns {Undefined} - does not return anything
 */
function populateFromError(err, errorMessage) {
  errorMessage.setMessage(err.stack);

  if (has(err, 'user')) {
    errorMessage.setUser(err.user);
  }

  if (has(err, 'serviceContext') && isObject(err.serviceContext)) {
    errorMessage.setServiceContext(err.serviceContext.service,
                                   err.serviceContext.version);
  }
}

/**
 * Attempts to extract error information given an object as the input for the
 * error. This function will check presence of each property before attempting
 * to access the given property on the object but will not check for type
 * compliance as that is allocated to the instance of the error message itself.
 * @function populateFromObject
 * @param {Object} ob - the Object given as the content of the error
 * @param {String} [ob.message] - the error message
 * @param {String} [ob.user] - the user the error occurred for
 * @param {String} [ob.filePath] - the file path and file where the error
 *  occurred at
 * @param {Number} [ob.lineNumber] - the line number where the error occurred
 *  at
 * @param {String} [ob.functionName] - the function where the error occurred at
 * @param {Object} [ob.serviceContext] - the service context object of the
 *  error
 * @param {String} [ob.serviceContext.service] - the service the error occurred
 *  on
 * @param {String} [ob.serviceContext.version] - the version of the application
 *  that the error occurred on
 * @param {ErrorMessage} errorMessage - the error message instance to marshal
 *  error information into
 * @returns {Undefined} - does not return anything
 */
function populateFromObject(ob, errorMessage) {
  if (has(ob, 'message')) {
    errorMessage.setMessage(ob.message);
  } else {
    errorMessage.setMessage(buildStackTrace('' + ob, 3));
  }

  if (has(ob, 'user')) {
    errorMessage.setUser(ob.user);
  }

  if (has(ob, 'filePath')) {
    errorMessage.setFilePath(ob.filePath);
  }

  if (has(ob, 'lineNumber')) {
    errorMessage.setLineNumber(ob.lineNumber);
  }

  if (has(ob, 'functionName')) {
    errorMessage.setFunctionName(ob.functionName);
  }

  if (has(ob, 'serviceContext') && isObject(ob.serviceContext)) {
    errorMessage.setServiceContext(ob.serviceContext.service,
                                   ob.serviceContext.version);
  }
}

module.exports = populateErrorMessage;
