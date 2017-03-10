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

/**
 * The constructor for RequestInformationContainer does not take any arugments
 * and is solely meant to allocate several properties on the instance. The
 * constructor will init properties which closely relate to the ErrorMessage
 * context.httpRequest object properties. The properties on the instance should
 * be set through there corresponding setters as these will enforce type
 * validation around input.
 * @class RequestInformationContainer
 * @classdesc RequestInformationContainer is a class which is meant to
 * standardize and contain values corresponding to request information around
 * an error-inducing request. This class is meant to be a temporary container
 * for request information and essentially a standardized interface consumed by
 * the ErrorMessage class itself.
 * @property {String} url - The route/url that the request addressed
 * @property {String} method - The method that the request used
 * @property {String} referrer - The referrer of the request
 * @property {String} userAgent - The user-agent of the requester
 * @property {String} remoteAddress - The IP address of the requester
 * @property {Number} statusCode - The response status code
 */
function RequestInformationContainer() {

  this.url = '';
  this.method = '';
  this.referrer = '';
  this.userAgent = '';
  this.remoteAddress = '';
  this.statusCode = 0;
}

/**
 * Sets the url property on the instance.
 * @chainable
 * @param {String} url - the url of the request
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setUrl = function(url) {

  this.url = isString(url) ? url : '';

  return this;
};

/**
 * Sets the method property on the instance.
 * @chainable
 * @param {String} method - the method of the request
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setMethod = function(method) {

  this.method = isString(method) ? method : '';

  return this;
};

/**
 * Sets the referrer property on the instance.
 * @chainable
 * @param {String} referrer - the referrer of the request
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setReferrer = function(referrer) {

  this.referrer = isString(referrer) ? referrer : '';

  return this;
};

/**
 * Sets the userAgent property on the instance.
 * @chainable
 * @param {String} userAgent - the user agent committing the request
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setUserAgent = function(userAgent) {

  this.userAgent = isString(userAgent) ? userAgent : '';

  return this;
};

/**
 * Sets the remoteAddress property on the instance.
 * @chainable
 * @param {String} remoteIp - the remote IP of the requester
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setRemoteAddress = function(remoteIp) {

  this.remoteAddress = isString(remoteIp) ? remoteIp : '';

  return this;
};

/**
 * Sets the statusCode property on the instance.
 * @chainable
 * @param {Number} statusCode - the status code of the response to the request
 * @returns {this} - returns the instance for chaining
 */
RequestInformationContainer.prototype.setStatusCode = function(statusCode) {

  this.statusCode = isNumber(statusCode) ? statusCode : 0;

  return this;
};

module.exports = RequestInformationContainer;
