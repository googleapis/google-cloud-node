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
/*jshint unused:false*/

'use strict';
const common = require('@google-cloud/common');
const pkg = require('../../package.json');
var logger = require('../logger.js');
var is = require('is');
var isFunction = is.fn;
var isString = is.string;

/* @const {Array<String>} list of scopes needed to work with the errors api. */
var SCOPES = ['https://www.googleapis.com/auth/cloud-platform'];

/* @const {String} Base Error Reporting API */
var API = 'https://clouderrorreporting.googleapis.com/v1beta1';

/**
 * The RequestHandler constructor initializes several properties on the
 * RequestHandler instance and create a new request factory for requesting
 * against the Error Reporting API.
 * @param {Configuration} config - The configuration instance
 * @param {Object} logger - the logger instance
 * @class RequestHandler
 * @classdesc The RequestHandler class provides a centralized way of managing a
 * pool of ongoing requests and routing there callback execution to the right
 * handlers. The RequestHandler relies on the diag-common request factory
 * and therefore only manages the routing of execution to the proper callback
 * and does not do any queueing/batching. The RequestHandler instance has
 * several properties: the projectId property is used to create a correct url
 * for interacting with the API and key property can be optionally provided a
 * value which can be used in place of default application authentication. The
 * shouldReportErrors property will dictate whether or not the handler instance
 * will attempt to send payloads to the API. If it is false the handler will
 * immediately call back to the completion callback with a constant error value.
 * @property {Function} _request - a npm.im/request style request function that
 *  provides the transport layer for requesting against the Error Reporting API.
 *  It includes retry and authorization logic.
 * @property {String} _projectId - the project id used to uniquely identify and
 *  address the correct project in the Error Reporting API
 * @property {Object} _logger - the instance-cached logger instance
 */
class RequestHandler extends common.Service {
  /**
   * Returns a query-string request object if a string key is given, otherwise
   * will return null.
   * @param {String|Null} [key] - the API key used to authenticate against the
   *  service in place of application default credentials.
   * @returns {Object|Null} api key query string object for use with request or
   *  null in case no api key is given
   * @static
   */
  static manufactureQueryString(key) {
    if (isString(key)) {
      return {key: key};
    }
    return null;
  }

  /**
   * No-operation stub function for user callback substitution
   * @param {Error|Null} err - the error
   * @param {Object|Null} response - the response object
   * @param {Any} body - the response body
   * @returns {Null}
   * @static
   */
  static noOp(err, response, body) {
    return null;
  }
  /**
   * @constructor
   * @param {Configuration} config - an instance of the Configuration class
   * @param {Logger} logger - an instance of logger
   */
  constructor(config, logger) {
    var pid = config.getProjectId();
    // If an API key is provided, do not try to authenticate.
    var tryAuthenticate = !config.getKey();
    super({
      packageJson: pkg,
      baseUrl: API,
      scopes: SCOPES,
      projectId: pid !== null ? pid : undefined,
      projectIdRequired: true,
      customEndpoint: !tryAuthenticate
    }, config);
    this._config = config;
    this._logger = logger;

    var that = this;
    if (tryAuthenticate) {
      this.authClient.getToken(function(err, token) {
        if (err) {
          that._logger.error([
            'Unable to find credential information on instance. This library',
            'will be unable to communicate with the Stackdriver API to save',
            'errors.  Message: ' + err.message
          ].join(' '));
        }
      });
    } else {
      this.request({
        uri: 'events:report',
        qs: RequestHandler.manufactureQueryString(this._config.getKey()),
        method: 'POST',
        json: {}
      }, (err, body, response) => {
        if (err && err.message !== 'Message cannot be empty.') {
          this._logger.error([
            'Encountered an error while attempting to validate the provided',
            'API key'
          ].join(' '), err);
        }
      });
      that._logger.info('API key provided; skipping OAuth2 token request.');
    }
  }
  /**
   * Creates a request options object given the value of the error message and
   * will callback to the user supplied callback if given one. If a callback is
   * not given then the request will execute and silently dissipate.
   * @function sendError
   * @param {ErrorMessage} payload - the ErrorMessage instance to JSON.stringify
   *  for submission to the service
   * @param {RequestHandler~requestCallback} [userCb] - function called when the
   *  request has succeeded or failed.
   * @returns {Undefined} - does not return anything
   * @instance
   */
  sendError(errorMessage, userCb) {
    var self = this;
    var cb = isFunction(userCb) ? userCb : RequestHandler.noOp;
    if (this._config.getShouldReportErrorsToAPI()) {
      this.request({
        uri: 'events:report',
        qs: RequestHandler.manufactureQueryString(this._config.getKey()),
        method: 'POST',
        json: errorMessage
      }, (err, body, response) => {
        if (err) {
          this._logger.error([
            'Encountered an error while attempting to transmit an error to',
            'the Stackdriver Error Reporting API.'
          ].join(' '), err);
        }
        cb(err, response, body);
      });
    } else {
      cb(new Error([
        'Stackdriver error reporting client has not been configured to send',
        'errors, please check the NODE_ENV environment variable and make sure',
        'it is set to "production" or set the ignoreEnvironmentCheck property',
        'to true in the runtime configuration object'
      ].join(' ')), null, null);
    }
  }
}

/**
 * The requestCallback callback function is called on completion of an API
 * request whether that completion is success or failure. The request can either
 * fail by reaching the max number of retries or encountering an unrecoverable
 * response from the API. The first parameter to any invocation of the
 * requestCallback function type will be the applicable error if one was
 * generated during the request-response transaction. If an error was not
 * generated during the transaction then the first parameter will be of type
 * Null. The second parameter is the entire response from the transaction, this
 * is an object that as well as containing the body of the response from the
 * transaction will also include transaction information. The third parameter is
 * the body of the response, this can be an object, a string or any type given
 * by the response object.
 * @callback RequestHandler~requestCallback cb - The function that will be
 *  invoked once the transaction has completed
 * @param {Error|Null} err - The error, if applicable, generated during the
 *  transaction
 * @param {Object|Undefined|Null} response - The response, if applicable,
 *  received during the transaction
 * @param {Any} body - The response body if applicable
 */

module.exports = RequestHandler;
