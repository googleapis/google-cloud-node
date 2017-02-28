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

var Configuration = require('./src/configuration.js');
var AuthClient = require('./src/google-apis/auth-client.js');
// Begin error reporting interfaces

var koa = require('./src/interfaces/koa.js');
var hapi = require('./src/interfaces/hapi.js');
var manual = require('./src/interfaces/manual.js');
var express = require('./src/interfaces/express.js');
var restify = require('./src/interfaces/restify');
var messageBuilder = require('./src/interfaces/message-builder.js');
var uncaughtException = require('./src/interfaces/uncaught.js');
var createLogger = require('./src/logger.js');

/**
 * @typedef ConfigurationOptions
 * @type Object
 * @property {String} [projectId] - the projectId of the project deployed
 * @property {String} [keyFilename] - path to a key file to use for an API key
 * @property {String|Number} logLevel - a integer between and including 0-5 or a
 *  decimal representation of an integer including and between 0-5 in String
 *  form
 * @property {String} [key] - API key to use for communication with the service
 * @property {uncaughtHandlingEnum}
 *  [onUncaughtException=uncaughtHandlingEnum.ignore] - one of the uncaught
 *  handling options
 * @property {Object} [serviceContext] - the service context of the application
 * @property {String} [serviceContext.service] - the service the application is
 *  running on
 * @property {String} [serviceContext.version] - the version the hosting
 *  application is currently labelled as
 * @property {Boolean} [ignoreEnvironmentCheck] - flag indicating whether or not
 *  to communicate errors to the Stackdriver service even if NODE_ENV is not set
 *  to production
 */

/**
 * @typedef ApplicationErrorReportingInterface
 * @type Object
 * @property {Object} hapi - The hapi plugin for Stackdriver Error Reporting
 * @property {Function} report - The manual interface to report Errors to the
 *  Stackdriver Error Reporting Service
 * @property {Function} express - The express plugin for Stackdriver Error
 *  Reporting
 * @property {Function} message - Returns a new ErrorMessage class instance
 */

// TODO: Update this documentation
/**
 * The entry point for initializing the Error Reporting Middleware. This
 * function will invoke configuration gathering and attempt to create a API
 * client which will send errors to the Error Reporting Service. Invocation of
 * this function will also return an interface which can be used manually via
 * the `report` function property, with hapi via the `hapi` object property or
 * with express via the `express` function property.
 * @function initConfiguration
 * @param {ConfigurationOptions} initConfiguration - the desired project/error
 *     reporting configuration
 */
function Errors(initConfiguration) {
  if (!(this instanceof Errors)){
    return new Errors(initConfiguration);
  }

  var logger = createLogger(initConfiguration);
  var config = new Configuration(initConfiguration, logger);
  var client = new AuthClient(config, logger);

  // Setup the uncaught exception handler
  uncaughtException(client, config);

  // Build the application interfaces for use by the hosting application
  this.hapi = hapi(client, config);
  this.report = manual(client, config);
  this.express = express(client, config);
  this.restify = restify(client, config);
  this.event = messageBuilder(config);
  this.koa = koa(client, config); 
}

module.exports = Errors;
