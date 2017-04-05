/*!
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

var Configuration = require('./configuration.js');
var AuthClient = require('./google-apis/auth-client.js');
// Begin error reporting interfaces

var koa = require('./interfaces/koa.js');
var hapi = require('./interfaces/hapi.js');
var manual = require('./interfaces/manual.js');
var express = require('./interfaces/express.js');
var restify = require('./interfaces/restify');
var messageBuilder = require('./interfaces/message-builder.js');
var uncaughtException = require('./interfaces/uncaught.js');
var createLogger = require('./logger.js');

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
 * @function Errors
 * @param {ConfigurationOptions} initConfiguration - the desired project/error
 *     reporting configuration
 * @constructor
 * @alias module:error-reporting
 */
function Errors(initConfiguration) {
  if (!(this instanceof Errors)) {
    return new Errors(initConfiguration);
  }

  var logger = createLogger(initConfiguration);
  var config = new Configuration(initConfiguration, logger);
  var client = new AuthClient(config, logger);

  // Setup the uncaught exception handler
  uncaughtException(client, config);

  // Build the application interfaces for use by the hosting application
  /**
   * @example
   * // Use to report errors manually like so
   * var errors = require('@google-cloud/error-reporting')();
   * errors.report(new Error('xyz'), function () {
   *  console.log('done!');
   * });
   */
  this.report = manual(client, config);
  /**
   * @example
   * // Use to create and report errors manually with a high-degree
   * // of manual control
   * var errors = require('@google-cloud/error-reporting')();
   * var err = errors.event()
   *  .setMessage('My error message')
   *  .setUser('root@nexus');
   * errors.report(err, function () {
   *  console.log('done!');
   * });
   */
  this.event = messageBuilder(config);
  /**
   * @example
   * var errors = require('@google-cloud/error-reporting')();
   * var server = new hapi.Server();
   * server.connection({ port: 3000 });
   * server.start();
   * // AFTER ALL OTHER ROUTE HANDLERS
   * server.register({register: errors.hapi});
   */
  this.hapi = hapi(client, config);
  /**
   * @example
   * var errors = require('@google-cloud/error-reporting')();
   * var app = express();
   * // AFTER ALL OTHER ROUTE HANDLERS
   * app.use(errors.express);
   * app.listen(3000);
   */
  this.express = express(client, config);
  /**
   * @example
   * var errors = require('@google-cloud/error-reporting')();
   * var server = restify.createServer();
   * // BEFORE ALL OTHER ROUTE HANDLERS
   * server.use(errors.restify(server));
   */
  this.restify = restify(client, config);
  /**
   * @example
   * var errors = require('@google-cloud/error-reporting')();
   * var app = koa();
   * // BEFORE ALL OTHER ROUTE HANDLERS HANDLERS
   * app.use(errors.koa);
   */
  this.koa = koa(client, config);
}

module.exports = Errors;
