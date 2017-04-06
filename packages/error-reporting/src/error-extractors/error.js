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
function extractFromErrorClass(err, errorMessage) {

  errorMessage.setMessage(err.stack);

  if (has(err, 'user')) {

    errorMessage.setUser(err.user);
  }

  if (has(err, 'serviceContext') && isObject(err.serviceContext)) {

    errorMessage.setServiceContext(err.serviceContext.service,
                                   err.serviceContext.version);
  }
}

module.exports = extractFromErrorClass;
