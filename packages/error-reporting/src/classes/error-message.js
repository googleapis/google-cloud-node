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
var isString = is.string;
var isNumber = is.number;
var isObject = is.object;

/**
 * The constructor for ErrorMessage takes no arguments and is solely meant to
 * to instantiate properties on the instance. Each property should be externally
 * set using the corresponding set function with the exception of eventTime
 * which can be set externally but does not need to be since it is inited to
 * an ISO-8601 compliant time string.
 * @type {Object}
 * @class ErrorMessage
 * @classdesc ErrorMessage is a class which is meant to store and control-for
 *  Stackdriver Error API submittable values. Meant to be JSON string-ifiable
 *  representation of the final values which will be submitted to the Error API
 *  this class enforces type-checking on every setter function and will write
 *  default type-friendly values to instance properties if given values which
 *  are type-incompatible to expectations. These type-friendly default
 *  substitutions will occur silently and no errors will be thrown on attempted
 *  invalid input under the premise that during misassignment some error
 *  information sent to the Error API is better than no error information
 *  due to the Error library failing under invalid input.
 * @property {String} eventTime - an ISO-8601 compliant string representing when
 *  the error was created
 * @property {Object} serviceContext - The service information for the error
 * @property {String} serviceContext.service - The service that the error was
 *  was produced on
 * @property {String|Undefined} serviceContext.version - The service version 
 *  that the error was produced on
 * @property {String} message - The error message
 * @property {Object} context - the request, user and report context
 * @property {Object} context.httpRequest - the request context
 * @property {String} context.httpRequest.method - the request method (e.g. GET)
 * @property {String} context.httpRequest.url - the request url or path
 * @property {String} context.httpRequest.userAgent - the requesting user-agent
 * @property {String} context.httpRequest.referrer - the request referrer
 * @property {Number} context.httpRequest.responseStatusCode - the request
 *  status-code
 * @property {String} context.httpRequest.remoteIp - the requesting remote ip
 * @property {String} context.user - the vm instances user
 * @property {Object} context.reportLocation - the report context
 * @property {String} context.reportLocation.filePath - the file path of the
 *  report site
 * @property {Number} context.reportLocation.lineNumber - the line number of the
 *  report site
 * @property {String} context.reportLocation.functionName - the function name of
 *  the report site
 */
function ErrorMessage() {

  this.eventTime = (new Date()).toISOString();
  this.serviceContext = {service : 'node', version : undefined};
  this.message = '';
  this.context = {
    httpRequest : {
      method : '',
      url : '',
      userAgent : '',
      referrer : '',
      responseStatusCode : 0,
      remoteIp : ''
    },
    user : '',
    reportLocation : {filePath : '', lineNumber : 0, functionName : ''}
  };
}

/**
 * Sets the eventTime property on the instance to an ISO-8601 compliant string
 * representing the current time at invocation.
 * @function setEventTimeToNow
 * @chainable
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setEventTimeToNow = function() {

  this.eventTime = (new Date()).toISOString();

  return this;
};

/**
 * Sets the serviceContext property on the instance and its two constituent
 * properties: service and version.
 * @function setServiceContext
 * @chainable
 * @param {String} service - the service the error was reported on
 * @param {String|Undefined} version - the version the service was on when the 
 *  error was reported
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setServiceContext = function(service, version) {

  this.serviceContext.service = isString(service) ? service : 'node';
  this.serviceContext.version = isString(version) ? version : undefined;

  return this;
};

/**
 * Sets the message property on the instance.
 * @chainable
 * @param {String} message - the error message
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setMessage = function(message) {

  this.message = isString(message) ? message : '';

  return this;
};

/**
 * Sets the context.httpRequest.method property on the instance.
 * @chainable
 * @param {String} method - the HTTP method on the request which caused the
 *  errors instantiation
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setHttpMethod = function(method) {

  this.context.httpRequest.method = isString(method) ? method : '';

  return this;
};

/**
 * Sets the context.httpRequest.url property on the instance.
 * @chainable
 * @param {String} url - the requests target url
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setUrl = function(url) {

  this.context.httpRequest.url = isString(url) ? url : '';

  return this;
};

/**
 * Sets the context.httpRequest.userAgent property on the instance.
 * @chainable
 * @param {String} userAgent - the requests user-agent
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setUserAgent = function(userAgent) {

  this.context.httpRequest.userAgent = isString(userAgent) ? userAgent : '';

  return this;
};

/**
 * Sets the context.httpRequest.referrer property on the instance.
 * @chainable
 * @param {String} referrer - the requests referrer
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setReferrer = function(referrer) {

  this.context.httpRequest.referrer = isString(referrer) ? referrer : '';

  return this;
};

/**
 * Sets the context.httpRequest.responseStatusCode property on the instance.
 * @chainable
 * @param {Number} responseStatusCode - the response status code
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setResponseStatusCode = function(responseStatusCode) {

  this.context.httpRequest.responseStatusCode =
      isNumber(responseStatusCode) ? responseStatusCode : 0;

  return this;
};

/**
 * Sets the context.httpRequest.remoteIp property on the instance
 * @chainable
 * @param {String} remoteIp - the requesters remote IP
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setRemoteIp = function(remoteIp) {

  this.context.httpRequest.remoteIp = isString(remoteIp) ? remoteIp : '';

  return this;
};

/**
 * Sets the context.user property on the instance
 * @chainable
 * @param {String} user - the vm instances user
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setUser = function(user) {

  this.context.user = isString(user) ? user : '';

  return this;
};

/**
 * Sets the context.reportLocation.filePath property on the instance
 * @chainable
 * @param {String} filePath - the vm instances filePath
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setFilePath = function(filePath) {

  this.context.reportLocation.filePath = isString(filePath) ? filePath : '';

  return this;
};

/**
 * Sets the context.reportLocation.lineNumber property on the instance
 * @chainable
 * @param {Number} lineNumber - the line number of the report context
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setLineNumber = function(lineNumber) {

  this.context.reportLocation.lineNumber =
      isNumber(lineNumber) ? lineNumber : 0;

  return this;
};

/**
 * Sets the context.reportLocation.functionName property on the instance
 * @chainable
 * @param {String} functionName - the function name of the report context
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.setFunctionName = function(functionName) {

  this.context.reportLocation.functionName =
      isString(functionName) ? functionName : '';

  return this;
};

/**
 * Consumes the standard object created by the requestInformationExtractors
 * and assigns the properties of the object onto the instance.
 * @chainable
 * @param {Object} requestInformation - the standardized object created by the
 *  information extractors
 * @returns {this} - returns the instance for chaining
 */
ErrorMessage.prototype.consumeRequestInformation = function(
    requestInformation) {

  if (!isObject(requestInformation)) {

    return this;
  }

  this.setHttpMethod(requestInformation.method)
      .setUrl(requestInformation.url)
      .setUserAgent(requestInformation.userAgent)
      .setReferrer(requestInformation.referrer)
      .setResponseStatusCode(requestInformation.statusCode)
      .setRemoteIp(requestInformation.remoteAddress);

  return this;
};

module.exports = ErrorMessage;
