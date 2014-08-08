/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/*jshint camelcase:false */

'use strict';

var fs = require('fs');
var GAPIToken = require('gapitoken');
var req = require('request');
var pkg = require('../../package.json');
var util = require('./util');

var METADATA_TOKEN_URL =
    'http://metadata/computeMetadata/v1/instance/service-accounts/default/' +
    'token';
var USER_AGENT = 'gcloud-node/' + pkg.version;

/**
 * Token represents an access token
 * @param {string} accessToken  Access token.
 * @param {string} expiry       Expiration datetime.
 */
function Token(accessToken, expiry) {
  this.accessToken = accessToken;
  this.expiry = expiry;
}

/**
 * Returns true if token is expired.
 * @return {Boolean}
 */
Token.prototype.isExpired = function() {
  if (!this.accessToken || !this.expiry) {
    return true;
  }
  return new Date().getTime() - this.expiry.getTime() > 0;
};

/**
 * @param  {Object} opts Options.
 */
function Connection(opts) {
  this.opts = opts || {};

  this.credentials = null;
  this.scopes = opts.scopes || [];
  this.token = null; // existing access token, if exists

  this.isConnecting = false;
  this.waitQueue = [];
}

/**
 * Retrieves a token to authorize the requests.
 * @param  {Function} callback  Callback.
 */
Connection.prototype.connect = function(callback) {
  // TODO(jbd): Connect should be context aware,
  // should not require an email and key, if it's
  // running on Google Compute Engine.
  var that = this;
  this.isConnecting = true;
  // retrieves an access token
  this.fetchToken(function(err, token) {
    if (!err) {
      that.token = token;
    }
    that.isConnecting = false;
    callback(err);
  });
};

/**
 * Fetches a new access token.
 * @param  {Function} callback Callback function.
 */
Connection.prototype.fetchToken = function(callback) {
  var that = this;
  if (!this.opts.keyFilename) {
    // We should be on GCE, try to retrieve token from the metadata server.
    req({
      method: 'get',
      uri: METADATA_TOKEN_URL,
      headers: {
        'X-Google-Metadata-Request': 'True'
      },
      json: true
    }, function(err, res, body) {
      if (err || !body.access_token) {
        // TODO: Provide better context about the error here.
        return callback(err);
      }
      var exp = new Date(body.token_expires * 1000);
      callback(null, new Token(body.access_token, exp));
    });
    return;
  }
  if (!this.credentials) {
    // read key file once and cache the contents.
    fs.readFile(this.opts.keyFilename, function(err, data) {
      if (err) {
        return callback(err);
      }
      that.credentials = JSON.parse(data);
      that.fetchServiceAccountToken_(callback);
    });
    return;
  }
  this.fetchServiceAccountToken_(callback);
};

Connection.prototype.fetchServiceAccountToken_ = function(callback) {
  var gapi = new GAPIToken({
    iss: this.credentials.client_email,
    key: this.credentials.private_key,
    scope: this.scopes.join(' ')
  }, function(err) {
    if (err) {
      return callback(err);
    }
    gapi.getToken(function(err) {
      if (err) {
        return callback(err);
      }
      var exp = new Date(gapi.token_expires * 1000);
      callback(null, new Token(gapi.token, exp));
    });
  });
};

/**
 * Makes an authorized request if the current connection token is
 * still valid. Tries to reconnect and makes a request otherwise.
 * @param  {Object}    Request options.
 * @param  {Function=} callback
 */
Connection.prototype.req = function(reqOpts, callback) {
  var that = this;
  callback = callback || util.noop;
  this.createAuthorizedReq(reqOpts, function(err, authorizedReq) {
    if (err) {
      callback(err);
      return;
    }
    that.requester(authorizedReq, callback);
  });
};

Connection.prototype.createAuthorizedReq = function(reqOpts, callback) {
  var that = this;
  // Add user agent.
  reqOpts.headers = reqOpts.headers || {};

  if (reqOpts.headers['User-Agent']) {
    reqOpts.headers['User-Agent'] += '; ' + USER_AGENT;
  } else {
    reqOpts.headers['User-Agent'] = USER_AGENT;
  }

  if (this.isConnected()) {
    return callback(null, this.authorizeReq(reqOpts));
  }
  if (this.isConnecting) {
    this.waitQueue = this.waitQueue || [];
    this.waitQueue.push({ req: reqOpts, cb: callback });
    return;
  }
  this.connect(function(err) {
    that.waitQueue.push({ req: reqOpts, cb: callback });
    that.waitQueue.forEach(function(v) {
      if (!v.cb) {
        return;
      }

      if (err) {
        v.cb(err);
        return;
      }

      v.cb(null, that.authorizeReq(v.req));
    });
    that.waitQueue = [];
  });
};

/**
 * The default requester.
 */
Connection.prototype.requester = req;

/**
 * Returns true if connection is inited with a valid token
 * that is not expired.
 * @return {Boolean} The status of the connection.
 */
Connection.prototype.isConnected = function() {
  return this.token && !this.token.isExpired();
};

/**
 * Adds authorization header to the specified request.
 * @param  {Object} reqOpts Request options.
 * @return {Object} Authorized request options.
 */
Connection.prototype.authorizeReq = function(reqOpts) {
  // TODO(jbd): Clone the request object.
  reqOpts.headers = reqOpts.headers || {};
  reqOpts.headers.Authorization = 'Bearer ' + this.token.accessToken;
  return reqOpts;
};

module.exports.Token = Token;

module.exports.Connection = Connection;
