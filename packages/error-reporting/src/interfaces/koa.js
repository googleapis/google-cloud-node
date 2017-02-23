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
var ErrorMessage = require('../classes/error-message.js');
var koaRequestInformationExtractor = require('../request-extractors/koa.js');
var errorHandlerRouter = require('../error-router.js');

/**
 * The koaErrorHandler should be placed at the beginning of the koa middleware
 * stack and should catch the yield of the output of the request handling chain.
 * The Koa error handler returns the actual error handler which will be used in
 * the request chain handling and this function corresponds to the format given
 * in: https://github.com/koajs/koa/wiki/Error-Handling.
 * @function koaErrorHandler
 * @param {AuthClient} - The API client instance to report errors to Stackdriver
 * @param {NormalizedConfigurationVariables} - The application configuration
 * @returns {Function} - The function used to catch errors yielded by downstream
 *  request handlers.
 */
function koaErrorHandler(client, config) {

  /**
   * The actual error handler for the Koa plugin attempts to yield the results
   * of downstream request handlers and will attempt to catch errors emitted by
   * these handlers.
   * @param {Function} next - the result of the request handlers to yield
   * @returns {Undefined} does not return anything
   */
  return function * (next) {
    var em;
    var svc = config.getServiceContext();

    try {

      yield next;
    } catch (err) {
      if (config.lacksCredentials()) {
        return;
      }

      em = new ErrorMessage()
               .consumeRequestInformation(
                   koaRequestInformationExtractor(this.request, this.response))
               .setServiceContext(svc.service,
                                  svc.version);

      errorHandlerRouter(err, em);

      client.sendError(em);
    }
  };
}

module.exports = koaErrorHandler;
