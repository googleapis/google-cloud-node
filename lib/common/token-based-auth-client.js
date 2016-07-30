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

/*!
 * @module common/token-based-auth-client
 */

'use strict';

/*
 * creates a simpler auth client that works only with an accessToken
 *
 * @param {string=} accessToken - The accessToken to use
 */
function tokenBasedAuthClient(accessToken) {
  return {
    authorizeRequest: function(reqOpts, done) {
      reqOpts.headers = reqOpts.headers || {};

      reqOpts.headers.Authorization = 'Bearer ' + accessToken;
      done(null, reqOpts);
    },
    getCredentials: function() {
      return {
        accessToken: accessToken
      };
    }
  };
}

module.exports = tokenBasedAuthClient;
