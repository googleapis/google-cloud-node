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

import * as express from 'express';
import * as is from 'is';

import {ErrorMessage} from '../classes/error-message';
import {Configuration} from '../configuration';
import {RequestHandler} from '../google-apis/auth-client';
import {populateErrorMessage} from '../populate-error-message';
import {expressRequestInformationExtractor} from '../request-extractors/express';

/**
 * Returns a function that can be used as an express error handling middleware.
 * @function makeExpressHandler
 * @param {AuthClient} client - an inited Auth Client instance
 * @param {NormalizedConfigurationVariables} config  - the environmental
 *  configuration
 * @returns {expressErrorHandler} - a function that can be used as an express
 *  error handling middleware.
 */
export function makeExpressHandler(
    client: RequestHandler, config: Configuration) {
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
  function expressErrorHandler(err: {}, req: {}, res: {}, next: Function) {
    let ctxService = '';
    let ctxVersion: string|undefined = '';

    if (is.object(config)) {
      ctxService = config.getServiceContext().service;
      ctxVersion = config.getServiceContext().version;
    }

    const em =
        new ErrorMessage()
            .consumeRequestInformation(expressRequestInformationExtractor(
                req as express.Request, res as express.Response))
            .setServiceContext(ctxService, ctxVersion);

    populateErrorMessage(err, em);

    if (is.object(client) && is.function(client.sendError))
      { client.sendError(em); }

    if (is.function(next))
        { next(err); }

        return em;
  }

  return expressErrorHandler;
}
