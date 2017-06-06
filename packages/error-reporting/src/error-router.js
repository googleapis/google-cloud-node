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
var isString = is.string;
var isNumber = is.number;
var isFunction = is.function;

/**
 * The Error handler router is responsible for taking an object of some type and
 * and Error message container, analyzing the type of the object and marshalling
 * the object's information into the error message container.
 * @function errorHandlerRouter
 * @param {Any} ob - the object information to extract from
 * @param {ErrorMessage} em - an instance of ErrorMessage to marshal object
 *  information into
 * @returns {Undefined} - does not return a value
 */
function errorHandlerRouter(ob, em) {
  if (ob === null || ob === undefined) {
    populateFromUnknown(ob, em);
  } else if (ob instanceof Error) {
    populateFromError(ob, em);
  } else if (typeof ob === 'object' && isObject(ob)) {
    populateFromObject(ob, em);
  } else if (typeof ob === 'string' && isString(ob)) {
    populateFromString(ob, em);
  } else if (typeof ob === 'number') {
    populateFromNumber(ob, em);
  } else {
    populateFromUnknown(ob, em);
  }

  return em;
}

/**
 * Extracts error information from an instance of the Error class and marshals
 * that information into the provided instance of error message. This function
 * will check before accessing any part of the error for propety presence but
 * will not check the types of these property values that is instead work that
 * is allocated to the error message instance itself.
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
function populateFromObject(ob, errorMessage) {
  if (has(ob, 'message')) {
    errorMessage.setMessage(ob.message);
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
function populateFromString(ob, errorMessage) {
  var fauxError = new Error();
  var fullStack = fauxError.stack.split('\n');
  var cleanedStack = fullStack.slice(0, 1).concat(fullStack.slice(4));
  var errChecked = '';

  // Replace the generic error message with the user-provided string
  cleanedStack[0] = ob;
  errChecked = cleanedStack.join('\n');

  errorMessage.setMessage(errChecked);
}

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
function populateFromNumber(ob, errorMessage) {
  var fauxError = new Error();
  var errChecked = fauxError.stack;

  if (isNumber(ob) && isFunction(ob.toString)) {
    errChecked = ob.toString();
  }

  errorMessage.setMessage(errChecked);
}

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
function populateFromUnknown(ob, errorMessage) {
  var fauxError = new Error();

  errorMessage.setMessage(fauxError.stack);
}

module.exports = errorHandlerRouter;
