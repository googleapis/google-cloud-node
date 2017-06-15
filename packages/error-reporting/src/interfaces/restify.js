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
var ErrorMessage = require('../classes/error-message.js');
var expressRequestInformationExtractor =
    require('../request-extractors/express.js');
var populateErrorMessage = require('../populate-error-message.js');

/**
 * The restifyErrorHandler is responsible for taking the captured error, setting
 * the serviceContext property on the corresponding ErrorMessage instance,
 * routing the captured error to the right handler so that it can be correctly
 * marshaled into the ErrorMessage instance and then attempting to send it to
 * the Stackdriver API via the given API client instance.
 * @function restifyErrorHandler
 * @param {AuthClient} client - the API client
 * @param {NormalizedConfigurationVariables} config - the application
 * configuration
 * @param {Any} err - the error being handled
 * @param {ErrorMessage} - the error message instance container
 * @returns {Undefined} - does not return anything
 */
function restifyErrorHandler(client, config, err, em) {
  var svc = config.getServiceContext();
  em.setServiceContext(svc.service, svc.version);

  populateErrorMessage(err, em);

  client.sendError(em);
}

/**
 * The restifyRequestFinishHandler will be called once the response has emitted
 * the `finish` event and is now in its finalized state. This function will
 * attempt to determine whether or not the body of response is an instance of
 * the Error class or its status codes indicate that the response ended in an
 * error state. If either of the preceding are true then the restifyErrorHandler
 * will be called with the error to be routed to the Stackdriver service.
 * @function restifyRequestFinishHandler
 * @param {AuthClient} client - the API client
 * @param {NormalizedConfigurationVariables} config - the application
 *  configuration
 * @param {Object} req - the restify request
 * @param {Object} res - the restify response
 * @returns {Undefined} - does not return anything
 */
function restifyRequestFinishHandler(client, config, req, res) {
  var em;

  if (res._body instanceof Error ||
      res.statusCode > 309 && res.statusCode < 512) {
    em = new ErrorMessage().consumeRequestInformation(
        expressRequestInformationExtractor(req, res));

    restifyErrorHandler(client, config, res._body, em);
  }
}

/**
 * The restifyRequestHandler attaches the restifyRequestFinishHandler to each
 * responses 'finish' event wherein the callback function will determine
 * whether or not the response is an error response or not. The finish event is
 * used since the restify response object will not have any error information
 * contained within it until the downstream request handlers have had the
 * opportunity to deal with the request and create a contextually significant
 * response.
 * @function restifyRequestHandler
 * @param {AuthClient} client - the API client
 * @param {NormalizedConfigurationVariables} config - the application
 *  configuration
 * @param {Object} req - the current request
 * @param {Object} res - the current response
 * @param {Function} next - the callback function to pass the request onto the
 *  downstream request handlers
 * @returns {Any} - the result of the next function
 */
function restifyRequestHandler(client, config, req, res, next) {
  var listener = {};

  if (isObject(res) && isFunction(res.on) && isFunction(res.removeListener)) {

    listener = function() {

      restifyRequestFinishHandler(client, config, req, res);
      res.removeListener('finish', listener);
    };

    res.on('finish', listener);
  }

  return next();
}

/**
 * The serverErrorHandler is the actual function used by the restify error
 * handling stack and should be used as a bound instance with its first two
 * arguments (client & config) bound to it. The serverErrorHandler function must
 * be given the restify server instance as a parameter so that it can listen
 * to the `uncaughtException` event in the restify request handling stack. This
 * event is emitted when an uncaught error is thrown inside a restify request
 * handler. This init function will return the actual request handler function
 * which will attach to outgoing responses, determine if they are instances of
 * errors and then attempt to send this information to the Stackdriver API.
 * @function serverErrorHandler
 * @param {AuthClient} client - the API client
 * @param {NormalizedConfigurationVariables} config - the application
 *  configuration
 * @param {Object} server - the restify server instance
 * @returns {Function} - the actual request error handler
 */
function serverErrorHandler(client, config, server) {

  server.on('uncaughtException', function(req, res, reqConfig, err) {
    var em = new ErrorMessage().consumeRequestInformation(
        expressRequestInformationExtractor(req, res));

    restifyErrorHandler(client, config, err, em);
  });

  return restifyRequestHandler.bind(null, client, config);
}

/**
 * The handler setup function serves to provide a simple interface to init the
 * the restify server error handler by binding the needed client and config
 * variables to the error-handling chain.
 * @function handlerSetup
 * @param {AuthClient} client - the API client
 * @param {NormalizedConfigurationVariables} config - the application
 *  configuration
 * @returns {Function} - returns the serverErrorHandler function for use in the
 *  restify middleware stack
 */
function handlerSetup(client, config) {

  return serverErrorHandler.bind(null, client, config);
}

module.exports = handlerSetup;
