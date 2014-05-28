var GAPIToken = require('gapitoken'),
  async = require('async'),
  req = require('request');

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
 * @param  {Object} opts Options. { email, privateKey, scopes }
 */
function Connection(opts) {
  this.email = opts.email; // client email for the service account
  this.privateKey = opts.privateKey; // contains the contents of a pem file
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
  var gapi = new GAPIToken({
    iss: this.email,
    keyFile: this.privateKey,
    scope: this.scopes.join(' ')
  }, function(err) {
    if (err) {
      that.isConnecting = false;
      return callback(err);
    }
    gapi.getToken(function(err, t) {
      that.isConnecting = false;
      if (err) {
        return callback(err);
      }
      var exp = new Date(gapi.token_expires * 1000);
      that.token = new Token(gapi.token, exp);
      callback();
    });
  });
};

/**
 * Makes an authorized request if the current connection token is
 * still valid. Tries to reconnect and makes a request otherwise.
 * @param  {Object}    Request options.
 * @param  {Function=} opt_callback
 */
Connection.prototype.req = function(reqOpts, opt_callback) {
  var that = this;
  if (this.isConnected()) {
    this.requester(that.authorizeReq(reqOpts), opt_callback);
    return;
  }
  if (this.isConnecting) {
    this.waitQueue = this.waitQueue || [];
    this.waitQueue.push({ req: reqOpts, cb: opt_callback });
    return;
  }
  this.connect(function(err) {
    that.waitQueue.push({ req: reqOpts, cb: opt_callback });
    that.waitQueue.forEach(function(v) {
      if (err) {
        v.cb && v.cb(err);
      } else {
        that.requester(that.authorizeReq(v.req), v.cb);
      }
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
  reqOpts.headers['Authorization'] = 'Bearer ' + this.token.accessToken;
  return reqOpts;
};

module.exports.Connection = Connection;
