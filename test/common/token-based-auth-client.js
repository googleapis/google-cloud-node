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

'use strict';

var assert = require('assert');
var tokenBasedAuthClient = require('../../lib/common/token-based-auth-client');

describe('common/token-based-auth-client', function() {
  var token = 'aToken';
  var authClient;

  beforeEach(function() {
    authClient = tokenBasedAuthClient(token);
  });

  describe('authorizeRequest', function() {
    it('should add Authorization header to request', function(done) {
      var req = {};
      var expected = { headers: {Authorization: 'Bearer ' + token}};

      authClient.authorizeRequest(req, function(err) {
        assert.deepEqual(req, expected);
        done(err);
      });
    });
  });

  describe('getCredentials', function() {
    it('should return object with accessToken', function() {
      var credentials = authClient.getCredentials();

      assert.equal(credentials.accessToken, token);
    });
  });
});
