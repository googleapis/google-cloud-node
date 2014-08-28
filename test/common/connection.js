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

    it('should fetch a new token if token expires', function(done) {
      conn.token = tokenExpired;
      conn.fetchToken = function() {
        done();
      };
      conn.req({ uri: 'https://someuri' }, function() {});
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
