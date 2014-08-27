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

/**
 * @private
 * @module common/connection
 */

'use strict';

var fs = require('fs');
var GAPIToken = require('gapitoken');
var req = require('request');

/** @type {module:common/util} */
var util = require('./util');

/** @const {string} Base URL for outgoing requests. */
var METADATA_TOKEN_URL =
    'http://metadata/computeMetadata/v1/instance/service-accounts/default/' +
    'token';

/** @const {object} gcloud-node's package.json file. */
var PKG = require('../../package.json');

/** @const {string} User agent. */
var USER_AGENT = 'gcloud-node/' + PKG.version;

/**
 * Token represents an access token.
 *
 * @constructor
 * @param {string} accessToken - Access token.
 * @param {date} expiry - Expiration datetime.
 *
 * @example
 * var token = new Token(ACCESS_TOKEN, EXPIRY);
 */
function Token(accessToken, expiry) {
  this.accessToken = accessToken;
  this.expiry = expiry;
}

/**
 * Is this token expired?
 *
 * @return {boolean}
 *
 * @example
 * token.isExpired();
 */
Token.prototype.isExpired = function() {
  if (!this.accessToken || !this.expiry) {
    return true;
  }
  return new Date().getTime() - this.expiry.getTime() > 0;
};

module.exports.Token = Token;

/**
 * Create a connection object.
 *
 * @param {object} opts - Configuration options.
 * @param {array} opts.scopes - Scopes required for access.
 *
 * @example
 * var SCOPES = [
 *   'https://www.googleapis.com/auth/datastore',
 *   'https://www.googleapis.com/auth/userinfo.email'
 * ];
 * var conn = new Connection({ scopes: SCOPES });
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
 * Retrieve a token to authorize requests.
 *
 * @todo Connect should be context aware, it should not require an email and
 *     key, if it's running on Google Compute Engine.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * conn.connect(function(err) {});
 */
Connection.prototype.connect = function(callback) {
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
 * Fetch a new access token.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * conn.fetchToken(function(err) {});
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

/**
 * Fetch a service account token.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * conn.fetchServiceAccountToken_(function(err) {});
 */
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
 * Make an authorized request if the current connection token is still valid. If
 * it's not, try to reconnect.
 *
 * @param {object} requestOptions - Request options.
 * @param {function=} callback - The callback function.
 *
 * @example
 * conn.req({}, function(err) {});
 */
Connection.prototype.req = function(requestOptions, callback) {
  var that = this;
  callback = callback || util.noop;
  this.createAuthorizedReq(requestOptions, function(err, authorizedReq) {
    if (err) {
      callback(err);
      return;
    }
    that.requester(authorizedReq, callback);
  });
};

/**
 * Create an authorized request.
 *
 * @param {object} requestOptions - Request options.
 * @param {function} callback - The callback function.
 *
 * @example
 * conn.createAuthorizedReq({}, function(err) {});
 */
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
 * Get the status of the connection.
 *
 * `true`: connection is inited with a valid token that is not expired.
 *
 * @return {boolean}
 *
 * @example
 * conn.isConnected();
 */
Connection.prototype.isConnected = function() {
  return this.token && !this.token.isExpired();
};

/**
 * Add authorization header to the specified request.
 *
 * @todo Clone the request object.
 *
 * @param {object} requestOptions - Request options.
 * @return {object} Authorized request options.
 */
Connection.prototype.authorizeReq = function(requestOptions) {
  requestOptions.headers = requestOptions.headers || {};
  requestOptions.headers.Authorization = 'Bearer ' + this.token.accessToken;
  return requestOptions;
};

module.exports.Connection = Connection;
