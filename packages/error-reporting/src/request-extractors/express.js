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
var isFunction = is.fn;
var isObject = is.object;
var RequestInformationContainer =
    require('../classes/request-information-container.js');

/**
 * This function checks for the presence of an `x-forwarded-for` header on the
 * request to check for remote address forwards, if that is header is not
 * present in the request then the function will attempt to extract the remote
 * address from the express request object.
 * @function extractRemoteAddressFromRequest
 * @param {Object} req - the express request object
 * @returns {String} - the remote address or, if one cannot be found, an empty
 *  string
 */
function extractRemoteAddressFromRequest(req) {

  if (typeof req.header('x-forwarded-for') !== 'undefined') {

    return req.header('x-forwarded-for');
  } else if (isObject(req.connection)) {

    return req.connection.remoteAddress;
  }

  return '';
}

/**
 * The expressRequestInformationExtractor is a function which is made to extract
 * request information from a express request object. This function will do a
 * basic check for type and method presence but will not check for the presence
 * of properties on the request object.
 * @function expressRequestInformationExtractor
 * @param {Object} req - the express request object
 * @param {Object} res - the express response object
 * @returns {RequestInformationContainer} - an object containing the request
 *  information in a standardized format
 */
function expressRequestInformationExtractor(req, res) {

  var returnObject = new RequestInformationContainer();

  if (!isObject(req) || !isFunction(req.header) || !isObject(res)) {

    return returnObject;
  }

  returnObject.setMethod(req.method)
      .setUrl(req.url)
      .setUserAgent(req.header('user-agent'))
      .setReferrer(req.header('referrer'))
      .setStatusCode(res.statusCode)
      .setRemoteAddress(extractRemoteAddressFromRequest(req));

  return returnObject;
}

module.exports = expressRequestInformationExtractor;
