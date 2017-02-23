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
var handleErrorClassError = require('./error-handlers/error.js');
var handleObjectAsError = require('./error-handlers/object.js');
var handleStringAsError = require('./error-handlers/string.js');
var handleNumberAsError = require('./error-handlers/number.js');
var handleUnknownAsError = require('./error-handlers/unknown.js');

/**
 * The Error handler router is responsible for taking an error of some type and
 * and Error message container, analyzing the type of the error and routing it
 * to the proper handler so that the error information can be marshaled into the
 * the error message container.
 * @function errorHandlerRouter
 * @param {Any} err - the error information to extract from
 * @param {ErrorMessage} em - an instance of ErrorMessage to marshal error
 *  information into
 * @returns {Undefined} - does not return a value
 */
function errorHandlerRouter(err, em) {

  if (err instanceof Error) {

    handleErrorClassError(err, em);

    return;
  }

  switch (typeof err) {
  case 'object':

    handleObjectAsError(err, em);
    break;
  case 'string':

    handleStringAsError(err, em);
    break;
  case 'number':

    handleNumberAsError(err, em);
    break;
  default:

    handleUnknownAsError(err, em);
  }
}

module.exports = errorHandlerRouter;
