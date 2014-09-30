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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var async = require('async');
var path = require('path');

var connection = require('../../lib/common/connection.js');
var util = require('../../lib/common/util.js');

describe('Connection', function() {
  var conn;
  var privateKeyFileJson = require('../testdata/privateKeyFile.json');

  beforeEach(function() {
    conn = new connection.Connection({
      keyFilename: path.join(__dirname, '../testdata/privateKeyFile.json')
    });
    conn.requester = function(opts, callback) {
      callback(null);
    };
  });

  it('should use a private key json file', function(done) {
    conn.fetchServiceAccountToken_ = function(callback) {
      callback(null);
    };
    conn.fetchToken(function(err) {
      assert.ifError(err);
      assert.deepEqual(conn.credentials, privateKeyFileJson);
      done();
    });
  });

  describe('credentials object', function() {
    describe('getCredentials', function() {
      it('should expose a method to retrieve credentials', function() {
        var conn = new connection.Connection();
        assert.equal(typeof conn.getCredentials, 'function');
      });

      it('should return credentials object if provided', function(done) {
        var conn = new connection.Connection({
          credentials: privateKeyFileJson
        });
        conn.getCredentials(function(err, credentials) {
          assert.deepEqual(credentials, privateKeyFileJson);
          done();
        });
      });

      it('should fetch token if missing credentials object', function(done) {
        var conn = new connection.Connection();
        conn.fetchToken = function(cb) {
          conn.credentials = privateKeyFileJson;
          cb();
        };
        conn.getCredentials(function(err, credentials) {
          assert.deepEqual(credentials, privateKeyFileJson);
          done();
        });
      });
    });

    it('should accept and assign a complete credentials object', function() {
      var credConnection = new connection.Connection({
        credentials: privateKeyFileJson
      });
      assert.deepEqual(credConnection.credentials, privateKeyFileJson);
    });

    it('should reject an incomplete credentials object', function() {
      assert.throws(function() {
        new connection.Connection({
          credentials: {}
        });
      }, /must contain/);
    });
  });

  describe('Token', function() {
    var tokenNeverExpires = new connection.Token('token', new Date(3000, 0, 0));
    var tokenExpired = new connection.Token('token', new Date(2011, 0, 0));

    describe('GCE', function() {
      var gceConn;
      var metadataResponse = {
        body: {
          access_token: 'y.8',
          expires_in: 60
        }
      };

      beforeEach(function() {
        gceConn = new connection.Connection();
      });

      it('should fetch a token from the metadata server', function() {
        gceConn.requester = function(opts) {
          assert.equal(opts.uri.indexOf('http://metadata/'), 0);
        };
        gceConn.fetchToken();
      });

      it('should build token from the metadata server response', function() {
        gceConn.requester = function(opts, callback) {
          callback(null, metadataResponse, metadataResponse.body);
        };
        gceConn.fetchToken(function(err, token) {
          assert.ifError(err);
          assert(token instanceof connection.Token);
          assert.equal(token.accessToken, metadataResponse.body.access_token);
          var addedMs = metadataResponse.body.expires_in * 1000;
          var tokenDate = new Date(Date.now() + addedMs);
          assert.equal(token.expiry.getTime(), tokenDate.getTime());
        });
      });
    });

    it('should fetch a new token if token expires', function(done) {
      conn.token = tokenExpired;
      conn.fetchToken = function() {
        done();
      };
      conn.req({ uri: 'https://someuri' }, function() {});
    });

    it('should fetch a new token if API returns a 401', function() {
      var fetchTokenCount = 0;
      conn.fetchToken = function(callback) {
        fetchTokenCount++;
        callback(null, tokenNeverExpires);
      };
      conn.requester = function(req, callback) {
        if (fetchTokenCount === 1) {
          callback({ code: 401 });
        } else {
          callback(null);
        }
      };
      conn.req({ uri: 'https://someuri' }, function() {});
      assert.equal(fetchTokenCount, 2);
    });

    it('should try API request 2 times', function(done) {
      // Fail 1: invalid token.
      // -- try to get token --
      // Fail 2: invalid token.
      // -- execute callback with error.
      var error = { code: 401 };
      var requesterCount = 0;
      conn.fetchToken = function(callback) {
        callback(null, tokenNeverExpires);
      };
      conn.requester = function(req, callback) {
        requesterCount++;
        callback(error);
      };
      conn.req({ uri: 'https://someuri' }, function(err) {
        assert.equal(requesterCount, 2);
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should pass all arguments from requester to callback', function(done) {
      var args = [null, 1, 2, 3];
      conn.fetchToken = function(callback) {
        callback(null, tokenNeverExpires);
      };
      conn.requester = function(req, callback) {
        callback.apply(null, args);
      };
      conn.req({ uri: 'https://someuri' }, function() {
        assert.deepEqual(util.toArray(arguments), args);
        done();
      });
    });

    it('should make other requests wait while connecting', function(done) {
      var numTokenFetches = 0;
      var requestedUris = [];
      conn.fetchToken = function(cb) {
        numTokenFetches++;
        setImmediate(function() {
          cb(null, tokenNeverExpires);
        });
      };
      conn.requester = function(opts, callback) {
        requestedUris.push(opts.uri);
        callback(null);
      };
      async.parallel([
        function(next) {
          assert.strictEqual(conn.isConnecting, false);
          conn.req({ uri: '1' }, next);
        },
        function(next) {
          assert.strictEqual(conn.isConnecting, true);
          conn.req({ uri: '2' }, next);
        },
        function(next) {
          conn.req({ uri: '3' }, next);
        }
      ], function(err) {
        assert.ifError(err);
        assert.equal(numTokenFetches, 1);
        assert.equal(conn.token, tokenNeverExpires);
        assert.deepEqual(requestedUris, ['1', '2', '3']);
        done();
      });
    });

    it('should fetch a new token if token is invalid', function(done) {
      conn.token = new connection.Token();
      conn.fetchToken = function() {
        done();
      };
      conn.req({ uri: 'https://someuri' }, function() {});
    });
  });
});
