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
var isFunction = is.function;
var isArray = is.array;
var RequestInformationContainer =
    require('../classes/request-information-container.js');

/**
 * The koaRequestInformationExtractor attempts to extract information from a Koa
 * request/reponse set and marshal it into a RequestInformationContainer
 * instance.
 * @function koaRequestInformationExtractor
 * @param {Object} req - the Koa request object
 * @param {Object} res - the Koa response object
 * @returns {RequestInformationContainer} - returns a request information
 *  container instance that may be in its initial state
 */
function koaRequestInformationExtractor(req, res) {

  var returnObject = new RequestInformationContainer();

  if (!isObject(req) || !isObject(res) || isFunction(req) || isFunction(res) ||
      isArray(req) || isArray(res) || !isObject(req.headers)) {

    return returnObject;
  }

  returnObject.setMethod(req.method)
      .setUrl(req.url)
      .setUserAgent(req.headers['user-agent'])
      .setReferrer(req.headers.referrer)
      .setStatusCode(res.status)
      .setRemoteAddress(req.ip);

  return returnObject;
}

module.exports = koaRequestInformationExtractor;
