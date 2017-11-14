/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
 * @module common/service
 */

'use strict';

var arrify = require('arrify');
var extend = require('extend');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('./util.js');

var PROJECT_ID_TOKEN = '{{projectId}}';

/**
 * Service is a base class, meant to be inherited from by a "service," like
 * BigQuery or Storage.
 *
 * This handles making authenticated requests by exposing a `makeReq_` function.
 *
 * @constructor
 * @alias module:common/service
 *
 * @param {object} config - Configuration object.
 * @param {string} config.baseUrl - The base URL to make API requests to.
 * @param {string[]} config.scopes - The scopes required for the request.
 * @param {object=} options - [Configuration object](#/docs).
 */
function Service(config, options) {
  options = options || {};

  this.baseUrl = config.baseUrl;
  this.globalInterceptors = arrify(options.interceptors_);
  this.interceptors = [];
  this.packageJson = config.packageJson;
  this.projectId = options.projectId || PROJECT_ID_TOKEN;
  this.projectIdRequired = config.projectIdRequired !== false;
  this.Promise = options.promise || Promise;

  var reqCfg = extend({}, config, {
    projectIdRequired: this.projectIdRequired,
    projectId: this.projectId,
    credentials: options.credentials,
    keyFile: options.keyFilename,
    email: options.email
  });

  this.makeAuthenticatedRequest = util.makeAuthenticatedRequestFactory(reqCfg);
  this.authClient = this.makeAuthenticatedRequest.authClient;
  this.getCredentials = this.makeAuthenticatedRequest.getCredentials;

  var isCloudFunctionEnv = !!process.env.FUNCTION_NAME;

  if (isCloudFunctionEnv) {
    this.interceptors.push({
      request: function(reqOpts) {
        reqOpts.forever = false;
        return reqOpts;
      }
    });
  }
}

/**
 * Get and update the Service's project ID.
 *
 * @param {function} callback - The callback function.
 */
Service.prototype.getProjectId = function(callback) {
  var self = this;

  this.authClient.getProjectId(function(err, projectId) {
    if (err) {
      callback(err);
      return;
    }

    if (self.projectId === PROJECT_ID_TOKEN && projectId) {
      self.projectId = projectId;
    }

    callback(null, self.projectId);
  });
};

/**
 * Make an authenticated API request.
 *
 * @private
 *
 * @param {object} reqOpts - Request options that are passed to `request`.
 * @param {string} reqOpts.uri - A URI relative to the baseUrl.
 * @param {function} callback - The callback function passed to `request`.
 */
Service.prototype.request_ = function(reqOpts, callback) {
  reqOpts = extend(true, {}, reqOpts);

  var isAbsoluteUrl = reqOpts.uri.indexOf('http') === 0;

  var uriComponents = [
    this.baseUrl
  ];

  if (this.projectIdRequired) {
    uriComponents.push('projects');
    uriComponents.push(this.projectId);
  }

  uriComponents.push(reqOpts.uri);

  if (isAbsoluteUrl) {
    uriComponents.splice(0, uriComponents.indexOf(reqOpts.uri));
  }

  reqOpts.uri = uriComponents
    .map(function(uriComponent) {
      var trimSlashesRegex = /^\/*|\/*$/g;
      return uriComponent.replace(trimSlashesRegex, '');
    })
    .join('/')
    // Some URIs have colon separators.
    // Bad: https://.../projects/:list
    // Good: https://.../projects:list
    .replace(/\/:/g, ':');

  // Interceptors should be called in the order they were assigned.
  var combinedInterceptors = [].slice.call(this.globalInterceptors)
    .concat(this.interceptors)
    .concat(arrify(reqOpts.interceptors_));

  var interceptor;

  while ((interceptor = combinedInterceptors.shift()) && interceptor.request) {
    reqOpts = interceptor.request(reqOpts);
  }

  delete reqOpts.interceptors_;

  var pkg = this.packageJson;
  reqOpts.headers = extend({}, reqOpts.headers, {
    'User-Agent': util.getUserAgentFromPackageJson(pkg),
    'x-goog-api-client': `gl-node/${process.versions.node} gccl/${pkg.version}`
  });

  return this.makeAuthenticatedRequest(reqOpts, callback);
};

/**
 * Make an authenticated API request.
 *
 * @private
 *
 * @param {object} reqOpts - Request options that are passed to `request`.
 * @param {string} reqOpts.uri - A URI relative to the baseUrl.
 * @param {function} callback - The callback function passed to `request`.
 */
Service.prototype.request = function(reqOpts, callback) {
  Service.prototype.request_.call(this, reqOpts, callback);
};

/**
 * Make an authenticated API request.
 *
 * @private
 *
 * @param {object} reqOpts - Request options that are passed to `request`.
 * @param {string} reqOpts.uri - A URI relative to the baseUrl.
 */
Service.prototype.requestStream = function(reqOpts) {
  return Service.prototype.request_.call(this, reqOpts);
};

module.exports = Service;
