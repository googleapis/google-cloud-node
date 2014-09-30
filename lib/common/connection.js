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

var events = require('events');
var extend = require('extend');
var fs = require('fs');
var GAPIToken = require('gapitoken');
var nodeutil = require('util');
var request = require('request');

/** @type {module:common/util} */
var util = require('./util');

/** @const {string} Base URL for outgoing requests. */
var METADATA_TOKEN_URL =
    'http://metadata/computeMetadata/v1/instance/service-accounts/default/' +
    'token';

/** @const {number} Maximum amount of times to attempt refreshing a token. */
var MAX_TOKEN_REFRESH_ATTEMPTS = 1;

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
 * @param {array=} opts.scopes - Scopes required for access.
 * @param {string=} opts.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} opts.credentials - Credentials object.
 * @param {string} opts.credentials.client_email
 * @param {string} opts.credentials.private_key
 *
 * @example
 * var SCOPES = [
 *   'https://www.googleapis.com/auth/datastore',
 *   'https://www.googleapis.com/auth/userinfo.email'
 * ];
 * var conn = new Connection({ scopes: SCOPES });
 */
function Connection(opts) {
  events.EventEmitter.call(this);
  this.setMaxListeners(0);

  opts = opts || {};

  this.credentials = null;
  this.opts = opts;
  this.scopes = opts.scopes || [];
  this.token = null; // existing access token, if exists

  this.isConnecting = false;

  if (opts.credentials) {
    if (opts.credentials.client_email && opts.credentials.private_key) {
      this.credentials = opts.credentials;
    } else {
      throw new Error('A credentials object must contain the following keys: ' +
          'client_email, private_key');
    }
  }
}

nodeutil.inherits(Connection, events.EventEmitter);

/**
 * Retrieve a token to authorize requests.
 *
 * @todo Connect should be context aware, it should not require an email and
 *     key, if it's running on Google Compute Engine.
 *
 * @example
 * conn.connect();
 */
Connection.prototype.connect = function() {
  var that = this;
  this.isConnecting = true;
  // retrieves an access token
  this.fetchToken(function(err, token) {
    that.isConnecting = false;
    if (err) {
      that.emit('connected', err);
      return;
    }
    that.token = token;
    that.emit('connected');
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
  if (!this.opts.keyFilename && !this.credentials) {
    // We should be on GCE, try to retrieve token from the metadata server.
    this.requester({
      method: 'get',
      uri: METADATA_TOKEN_URL,
      headers: {
        'X-Google-Metadata-Request': 'True'
      },
      json: true
    }, function(err, res, body) {
      if (err || !body.access_token) {
        // TODO: Provide better context about the error here.
        callback(err);
        return;
      }
      var exp = new Date(Date.now() + body.expires_in * 1000);
      callback(null, new Token(body.access_token, exp));
    });
    return;
  }
  if (!this.credentials) {
    // read key file once and cache the contents.
    fs.readFile(this.opts.keyFilename, function(err, data) {
      if (err) {
        callback(err);
        return;
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
      callback(err);
      return;
    }
    gapi.getToken(function(err) {
      if (err) {
        callback(err);
        return;
      }
      var exp = new Date(gapi.token_expires * 1000);
      callback(null, new Token(gapi.token, exp));
    });
  });
};

/**
 * Make an authorized request if the current connection token is still valid. If
 * it's not, try to reconnect to the limit specified by
 * MAX_TOKEN_REFRESH_ATTEMPTS. If a valid connection still cannot be made,
 * execute the callback with the API error.
 *
 * @param {object} requestOptions - Request options.
 * @param {function=} callback - The callback function.
 *
 * @example
 * conn.req({}, function(err) {});
 */
Connection.prototype.req = function(requestOptions, callback) {
  var that = this;
  var tokenRefreshAttempts = 0;
  callback = callback || util.noop;
  function onAuthorizedReq(err, authorizedReq) {
    if (err) {
      callback(err);
      return;
    }
    that.requester(authorizedReq, function(err) {
      if (err && err.code === 401 &&
          ++tokenRefreshAttempts <= MAX_TOKEN_REFRESH_ATTEMPTS) {
        // Invalid token. Try to fetch a new one.
        that.token = null;
        that.createAuthorizedReq(requestOptions, onAuthorizedReq);
        return;
      }
      callback.apply(null, util.toArray(arguments));
    });
  }
  this.createAuthorizedReq(requestOptions, onAuthorizedReq);
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
Connection.prototype.createAuthorizedReq = function(requestOptions, callback) {
  var that = this;

  var reqOpts = extend(true, {}, requestOptions, { headers: {} });

  if (reqOpts.headers['User-Agent']) {
    reqOpts.headers['User-Agent'] += '; ' + USER_AGENT;
  } else {
    reqOpts.headers['User-Agent'] = USER_AGENT;
  }

  function onConnected(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, that.authorizeReq(reqOpts));
  }

  if (this.isConnected()) {
    setImmediate(onConnected);
    return;
  }

  this.once('connected', onConnected);

  if (!this.isConnecting) {
    this.connect();
  }
};

/**
 * The default requester.
 */
Connection.prototype.requester = request;

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
  return extend(true, {}, requestOptions, {
    headers: {
      Authorization: 'Bearer ' + this.token.accessToken
    }
  });
};

/**
 * Get the connection's credentials. If a token hasn't been fetched yet, one
 * will be triggered now.
 *
 * @return {object}
 */
Connection.prototype.getCredentials = function(callback) {
  var that = this;
  if (this.credentials) {
    setImmediate(callback, null, that.credentials);
    return;
  }
  this.fetchToken(function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, that.credentials);
  });
};

module.exports.Connection = Connection;
