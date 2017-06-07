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
var isFunction = is.fn;
var ErrorMessage = require('../classes/error-message.js');
var expressRequestInformationExtractor =
    require('../request-extractors/express.js');
var populateErrorMessage = require('../error-router.js');

/**
 * Returns a function that can be used as an express error handling middleware.
 * @function makeExpressHandler
 * @param {AuthClient} client - an inited Auth Client instance
 * @param {NormalizedConfigurationVariables} config  - the environmental
 *  configuration
 * @returns {expressErrorHandler} - a function that can be used as an express
 *  error handling middleware.
 */
function makeExpressHandler(client, config) {
  /**
   * The Express Error Handler function is an interface for the error handler
   * stack into the Express architecture.
   * @function expressErrorHandler
   * @param {Any} err - a error of some type propagated by the express plugin
   *  stack
   * @param {Object} req - an Express request object
   * @param {Object} res - an Express response object
   * @param {Function} next - an Express continuation callback
   * @returns {ErrorMessage} - Returns the ErrorMessage instance
   */
  function expressErrorHandler(err, req, res, next) {
    var ctxService = '';
    var ctxVersion = '';

    if (isObject(config)) {
      ctxService = config.getServiceContext().service;
      ctxVersion = config.getServiceContext().version;
    }

    var em = new ErrorMessage()
                 .consumeRequestInformation(
                     expressRequestInformationExtractor(req, res))
                 .setServiceContext(ctxService, ctxVersion);

    populateErrorMessage(err, em);

    if (isObject(client) && isFunction(client.sendError)) {
      client.sendError(em);
    }

    if (isFunction(next)) {
      next(err);
    }

    return em;
  }

  return expressErrorHandler;
}

module.exports = makeExpressHandler;
