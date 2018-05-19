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

import boom from 'boom';
import is from 'is';

const isObject = is.object;
const isFunction = is.fn;
import {ErrorMessage} from '../classes/error-message';
import {hapiRequestInformationExtractor} from '../request-extractors/hapi';
import {populateErrorMessage} from '../populate-error-message';
const packageJson = require('../../../package.json');

import {RequestHandler} from '../google-apis/auth-client';
import {Configuration} from '../configuration';
import hapi from 'hapi';

/**
 * The Hapi error handler function serves simply to create an error message
 * and begin that error message on the path of correct population.
 * @function hapiErrorHandler
 * @param {Object} req - The Hapi request object
 * @param {Any} err - The error input
 * @param {Object} config - the env configuration
 * @returns {ErrorMessage} - a partially or fully populated instance of
 *  ErrorMessage
 */
function hapiErrorHandler(err: {}, req?: hapi.Request, config?: Configuration) {
  let service = '';
  let version: string|undefined = '';

  if (isObject(config)) {
    service = config!.getServiceContext().service;
    version = config!.getServiceContext().version;
  }

  const em =
      new ErrorMessage()
          .consumeRequestInformation(hapiRequestInformationExtractor(req))
          .setServiceContext(service, version);

  populateErrorMessage(err, em);

  return em;
}

/**
 * Creates a Hapi plugin object which can be used to handle errors in Hapi.
 * @param {AuthClient} client - an inited auth client instance
 * @param {NormalizedConfigurationVariables} config - the environmental
 *  configuration
 * @returns {Object} - the actual Hapi plugin
 */
export function makeHapiPlugin(client: RequestHandler, config: Configuration) {
  /**
   * The register function serves to attach the hapiErrorHandler to specific
   * points in the hapi request-response lifecycle. Namely: it attaches to the
   * 'request-error' event in Hapi which is emitted when a plugin or receiver
   * throws an error while executing and the 'onPreResponse' event to intercept
   * error code carrying requests before they are sent back to the client so
   * that the errors can be logged to the Error Reporting API.
   * @function hapiRegisterFunction
   * @param {Hapi.Server} server - A Hapi server instance
   * @param {Object} options - The server configuration options object
   * @param {Function} next - The Hapi callback to move execution to the next
   *  plugin
   * @returns {Undefined} - returns the execution of the next callback
   */
  function hapiRegisterFunction(
      server: any,  // tslint:disable-line:no-any
      options: {}, next?: Function) {
    if (server) {
      if (server.events && server.events.on) {
        // Hapi 17 is being used
        server.events.on(
            'log', (event: {error?: {}; channel: string;}, tags: {}) => {
              if (event.error && event.channel === 'app') {
                client.sendError(hapiErrorHandler(event.error));
              }
            });

        server.events.on(
            'request',
            (request: hapi.Request, event: {error?: {}; channel: string;},
             tags: {}) => {
              if (event.error && event.channel === 'error') {
                client.sendError(hapiErrorHandler(event.error, request));
              }
            });
      } else {
        if (isFunction(server.on)) {
          server.on('request-error', (req: hapi.Request, err: {}) => {
            client.sendError(hapiErrorHandler(err, req, config));
          });
        }

        if (isFunction(server.ext)) {
          server.ext(
              'onPreResponse',
              (request: hapi.Request,
               reply: any) => {  // tslint:disable-line:no-any
                if (isObject(request) && request.response &&
                    (request.response as boom).isBoom) {
                  // Cast to {} is necessary, as@types/hapi@16 incorrectly types
                  // response as 'Response | null' instead of 'Response | Boom |
                  // null'.
                  const boom = request.response as {} as Error;
                  const em = hapiErrorHandler(
                      new Error(boom.message), request, config);
                  client.sendError(em);
                }

                if (reply && isFunction(reply.continue)) {
                  reply.continue();
                }
              });
        }
      }
    }

    if (isFunction(next)) {
      return next!();
    }
  }

  const hapiPlugin = {
    register: hapiRegisterFunction,
    name: packageJson.name,
    version: packageJson.version
  };

  (hapiPlugin.register as {} as {attributes: {}}).attributes = {
    name: packageJson.name,
    version: packageJson.version,
  };

  return hapiPlugin;
}
