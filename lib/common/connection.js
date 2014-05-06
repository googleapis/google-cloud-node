var GAPIToken = require('gapitoken'),
    async = require('async');

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
  this.privateKey = opts.privateKey;  // contains the contents of a pem file
  this.scopes = opts.scopes || [];
  this.token = null; // existing access token, if exists
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
  // retrieves an access token
  var gapi = new GAPIToken({
    iss: this.email,
    keyFile: this.privateKey,
    scope: this.scopes.join(' ')
  }, function(err) {
    if (err) {
      return callback(err);
    }
    gapi.getToken(function(err, t) {
      if (err) {
        return callback(err);
      }
      that.token = new Token(gapi.token, new Date(gapi.token_expires * 1000));
      callback();
    });
  });
};


/**
 * Makes an authorized request if the current connection token is
 * still valid. Tries to reconnect and makes a request otherwise.
 * @param  {Object}   Request options.
 * @param  {Function} callback
 */
Connection.prototype.req = function(reqOpts, callback) {
  // TODO(jbd): implement
};

/**
 * Returns true if connection is inited with a valid token
 * that is not expired.
 * @return {Boolean} The status of the connection.
 */
Connection.prototype.isConnected = function() {
  return !conn.token || !conn.token.isExpired();
};

module.exports.Connection = Connection;
