/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

var assert = require('assert');
var merge = require('lodash.merge');
var expressInterface = require('../../src/interfaces/express.js');
var ErrorMessage = require('../../src/classes/error-message.js');
var Fuzzer = require('../../utils/fuzzer.js');
var Configuration = require('../fixtures/configuration.js');
var createLogger = require('../../src/logger.js');

describe('expressInterface', function () {
  describe('Exception handling', function () {
    describe('Given invalid input', function () {
      it('Should not throw errors', function () {
        var f = new Fuzzer();
        assert.doesNotThrow(
          function () {
            f.fuzzFunctionForTypes(
              expressInterface
              , ["object", "object"]
            );
            return;
          }
        );
      });
    });
  });
  describe('Intended behaviour', function () {
    var stubbedConfig = new Configuration({
      serviceContext: {
        service: "a_test_service"
        , version: "a_version"
      }
    }, createLogger({logLevel: 4}));
    stubbedConfig.lacksCredentials = function () {
      return false;
    };
    var client = {
      sendError: function () {
        return;
      } 
    };
    var testError = new Error("This is a test");
    var validBoundHandler = expressInterface(client, stubbedConfig);
    it('Should return the error message', function () {
      var res = validBoundHandler(testError, null, null, null);
      assert.deepEqual(
        res,
        merge(new ErrorMessage().setMessage(testError.stack)
          .setServiceContext(
            stubbedConfig._serviceContext.service,
            stubbedConfig._serviceContext.version),
          {eventTime: res.eventTime}
        )
      );
    });
    describe('Calling back to express builtins', function () {
      it('Should callback to next', function (done) {
        var nextCb = function () {
          done();
        };
        validBoundHandler(testError, null, null, nextCb);
      });
      it('Should callback to sendError', function (done) {
        var sendError = function () {
          done();
        };
        var client = {
          sendError: sendError
        };
        var handler = expressInterface(client, stubbedConfig);
        handler(testError, null, null, function (){return;});
      });
    });
  });
});
