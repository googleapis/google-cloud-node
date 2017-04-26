/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
var proxyquire = require('proxyquire');

var Configuration = require('../../../src/configuration.js');

function verifyReportedMessage(errToReturn, expectedMessage) {
  class ServiceStub {
    constructor() {
      this.authClient = {
        getToken: function(cb) {
          cb(errToReturn);
        }
      };
    }
  }

  var RequestHandler = proxyquire('../../../src/google-apis/auth-client.js', {
    '@google-cloud/common': {
      Service: ServiceStub
    }
  });

  var message = '';
  var logger = {
    error: function(text) {
      message += text;
    }
  };
  var config = new Configuration({ ignoreEnvironmentCheck: true }, logger);
  new RequestHandler(config, logger);
  assert.strictEqual(message, expectedMessage);
}

describe('RequestHandler', function() {
  it('should issue a warning if it cannot communicate with the API', function() {
    var message = 'Test Error';
    verifyReportedMessage(new Error(message),
      'Unable to find credential information on instance. This library ' +
      'will be unable to communicate with the Stackdriver API to save ' +
      'errors.  Message: ' + message);
  });

  it('should not issue a warning if it can communicate with the API', function() {
    verifyReportedMessage(null, '');
    verifyReportedMessage(undefined, '');
  });
});
