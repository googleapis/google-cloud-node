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
var hapiRequestInformationExtractor = require('../request-extractors/hapi.js');
var errorHandlerRouter = require('../error-router.js');
var packageJson = require('../../package.json');

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
function hapiErrorHandler(req, err, config) {
  var service = '';
  var version = '';

  if (isObject(config)) {
    service = config.getServiceContext().service;
    version = config.getServiceContext().version;
  }

  var em = new ErrorMessage()
               .consumeRequestInformation(hapiRequestInformationExtractor(req))
               .setServiceContext(service, version);

  errorHandlerRouter(err, em);

  return em;
}


/**
 * Creates a Hapi plugin object which can be used to handle errors in Hapi.
 * @param {AuthClient} client - an inited auth client instance
 * @param {NormalizedConfigurationVariables} config - the environmental
 *  configuration
 * @returns {Object} - the actual Hapi plugin
 */
function makeHapiPlugin(client, config) {

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
  function hapiRegisterFunction(server, options, next) {
    if (isObject(server)) {
      if (isFunction(server.on)) {
        server.on('request-error', function(req, err) {
          client.sendError(hapiErrorHandler(req, err, config));
        });
      }

      if (isFunction(server.ext)) {
        server.ext('onPreResponse', function(request, reply) {
          if (isObject(request) && isObject(request.response) &&
              request.response.isBoom) {
            var em = hapiErrorHandler(request,
                                      new Error(request.response.message),
                                      config);
            client.sendError(em);
          }

          if (reply && isFunction(reply.continue)) {
            reply.continue();
          }
        });
      }
    }

    if (isFunction(next)) {
      return next();
    }
  }

  var hapiPlugin = {register: hapiRegisterFunction};

  hapiPlugin.register.attributes = {
    name: packageJson.name,
    version: packageJson.version
  };

  return hapiPlugin;
}

module.exports = makeHapiPlugin;
