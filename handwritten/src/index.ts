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

/*!
 * @module error-reporting
 */

import {ErrorMessage} from './classes/error-message';
import {Configuration, ConfigurationOptions, Logger} from './configuration';
import {RequestHandler as AuthClient} from './google-apis/auth-client';
// Begin error reporting interfaces
import * as expressInterface from './interfaces/express';
import * as hapiInterface from './interfaces/hapi';
import * as koaInterface from './interfaces/koa';
import * as koa2Interface from './interfaces/koa2';
import * as manualInterface from './interfaces/manual';
import * as messageBuilderInterface from './interfaces/message-builder';
import * as restifyInterface from './interfaces/restify';
import {createLogger} from './logger';
import * as manualRequestExtractor from './request-extractors/manual';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RestifyRequestHandler = (req: any, res: any, next: Function) => any;

/**
 * @typedef ConfigurationOptions
 * @type {Object}
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
 * @property {String} [reportMode] - flag indicating whether or not
 *  to communicate errors to the Stackdriver service.  Possible values are:
 *  -> 'production' (default)
 *     -> Only report errors if NODE_ENV is set to "production".
 *  -> 'always'
 *     -> Always report errors regardless of the value of NODE_ENV.
 *  -> 'never'
 *     -> Never report errors regardless of the value of NODE_ENV.
 */

/**
 * @typedef Errors
 * @type {Object}
 * @property {Function} report - The manual interface to report Errors to the
 *  Stackdriver Error Reporting Service
 * @property {ErrorMessage} event - Returns a new ErrorMessage class instance
 *  to use to create custom messages
 * @property {Function} express - The express plugin for Stackdriver Error
 *  Reporting
 * @property {Object} hapi - The hapi plugin for Stackdriver Error Reporting
 * @property {Function} koa - The koa plugin for Stackdriver Error Reporting
 * @property {Function} restify - The restify plugin for Stackdriver Error
 *  Reporting
 */

/**
 * This module provides Stackdriver Error Reporting support for Node.js
 * applications.
 * [Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) is
 * a feature of Google Cloud Platform that allows in-depth monitoring and
 * viewing of errors reported by applications running in almost any environment.
 *
 * This is the entry point for initializing the error reporting middleware. This
 * function will invoke configuration gathering and attempt to create a API
 * client which will send errors to the Error Reporting Service.
 *
 * @alias module:error-reporting
 * @constructor
 *
 * @resource [What is Stackdriver Error Reporting]{@link
 * https://cloud.google.com/error-reporting/}
 *
 * @param {ConfigurationOptions} initConfiguration - The desired project/error
 *     reporting configuration.
 */
export class ErrorReporting {
  private _logger!: Logger;
  private _config!: Configuration;
  private _client!: AuthClient;
  // the `err` argument can be anything, including `null` and `undefined`
  report!: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    err: any,
    request?: manualRequestExtractor.Request,
    customMessage?: string,
    callback?: manualInterface.Callback | {} | string
  ) => ErrorMessage;
  event!: () => ErrorMessage;
  hapi!: {
    register: (server: {}, options: {}, next?: Function) => void;
    name: string;
    version?: string;
  };
  express!: (err: {}, req: {}, res: {}, next: Function) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  restify!: (server: any) => RestifyRequestHandler | RestifyRequestHandler[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  koa!: (context: any, next: {}) => IterableIterator<{}>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  koa2!: (context: any, next: Function) => Promise<void>;

  constructor(initConfiguration?: ConfigurationOptions) {
    if (!(this instanceof ErrorReporting)) {
      return new ErrorReporting(initConfiguration);
    }

    this._logger = createLogger(initConfiguration);
    this._config = new Configuration(initConfiguration, this._logger);
    this._client = new AuthClient(this._config, this._logger);

    if (this._config.getReportUnhandledRejections()) {
      process.on('unhandledRejection', reason => {
        this._logger.warn(
          'UnhandledPromiseRejectionWarning: ' +
            'Unhandled promise rejection: ' +
            reason +
            '.  This rejection has been reported to the ' +
            'Google Cloud Platform error-reporting console.'
        );
        this.report(reason);
      });
    }

    // Build the application interfaces for use by the hosting application
    /**
     * @example
     * // Use to report errors manually like so
     * errors.report(new Error('xyz'), function () {
     *  console.log('done!');
     * });
     */
    this.report = manualInterface.handlerSetup(
      this._client,
      this._config,
      this._logger
    );

    /**
     * @example
     * // Use to create and report errors manually with a high-degree
     * // of manual control
     * const err = errors.event()
     *  .setMessage('My error message')
     *  .setUser('root@nexus');
     * errors.report(err, function () {
     *  console.log('done!');
     * });
     */
    this.event = messageBuilderInterface.handlerSetup(this._config);

    /**
     * @example
     * const hapi = require('hapi');
     * const server = new hapi.Server();
     * server.connection({ port: 3000 });
     * server.start();
     * // AFTER ALL OTHER ROUTE HANDLERS
     * server.register({register: errors.hapi});
     */
    this.hapi = hapiInterface.makeHapiPlugin(this._client, this._config);

    /**
     * @example
     * const express = require('express');
     * const app = express();
     * // AFTER ALL OTHER ROUTE HANDLERS
     * app.use(errors.express);
     * app.listen(3000);
     */
    this.express = expressInterface.makeExpressHandler(
      this._client,
      this._config
    );

    /**
     * @example
     * const restify = require('restify');
     * const server = restify.createServer();
     * // BEFORE ALL OTHER ROUTE HANDLERS
     * server.use(errors.restify(server));
     */
    this.restify = restifyInterface.handlerSetup(this._client, this._config);

    /**
     * @example
     * // for Koa@1
     * const koa = require('koa');
     * const app = koa();
     * // BEFORE ALL OTHER ROUTE HANDLERS HANDLERS
     * app.use(errors.koa);
     */
    this.koa = koaInterface.koaErrorHandler(this._client, this._config);

    /**
     * @example
     * // for Koa@2
     * const koa = require('koa');
     * const app = koa();
     * // BEFORE ALL OTHER ROUTE HANDLERS HANDLERS
     * app.use(errors.koa2);
     */
    this.koa2 = koa2Interface.koa2ErrorHandler(this._client, this._config);
  }
}
