/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var RequestInformationContainer = require('../../src/classes/request-information-container.js');
var Fuzzer = require('../../utils/fuzzer.js');

describe('RequestInformationContainer', function() {
  var f = new Fuzzer();
  var cbFn, ric;
  beforeEach(function() {ric = new RequestInformationContainer();});
  describe('Fuzzing against RequestInformationContainer for negative cases', function() {
    it('Should return the RequestInformationContainer.url propertym as an empty string',
      function() {
        cbFn = function() {
          assert.deepEqual(ric.url, '');
        };
        f.fuzzFunctionForTypes(ric.setUrl, ['string'], cbFn, ric);
      }
   );
    it('Should return the method property as an empty string', function() {
      cbFn = function(returnValue) {
        assert.deepEqual(ric.method, '');
      };
      f.fuzzFunctionForTypes(ric.setMethod, ['string'], cbFn, ric);
    });
    it('Should return the referrer property as an empty string', function() {
      cbFn = function(returnValue) {
        assert.deepEqual(ric.referrer, '');
      };
      f.fuzzFunctionForTypes(ric.setReferrer, ['string'], cbFn, ric);
    });
    it('Should return the userAgent property as an empty string', function() {
      cbFn = function(returnValue) {
        assert.deepEqual(ric.userAgent, '');
      };
      f.fuzzFunctionForTypes(ric.setUserAgent, ['string'], cbFn, ric);
    });
    it('Should return the remoteAddress property as an empty string', function() {
      cbFn = function(returnValue) {
        assert.deepEqual(ric.remoteAddress, '');
      };
      f.fuzzFunctionForTypes(ric.setRemoteAddress, ['string'], cbFn, ric);
    });
    it('Should return the default value for statusCode', function() {
      cbFn = function(returnValue) {
        assert.strictEqual(ric.statusCode, 0);
      };
      f.fuzzFunctionForTypes(ric.setStatusCode, ['number'], cbFn, ric);
    });
  });
  describe('Fuzzing against RequestInformationContainer for positive cases', function() {
    var VALID_STRING_INPUT = 'valid';
    var VALID_NUMBER_INPUT = 500;
    it('Should assign the value to the url property', function() {
      ric.setUrl(VALID_STRING_INPUT);
      assert.deepEqual(ric.url, VALID_STRING_INPUT);
    });
    it('Should assign the value to the method property', function() {
      ric.setMethod(VALID_STRING_INPUT);
      assert.deepEqual(ric.method, VALID_STRING_INPUT);
    });
    it('Should assign the value to the referrer property', function() {
      ric.setReferrer(VALID_STRING_INPUT);
      assert.deepEqual(ric.referrer, VALID_STRING_INPUT);
    });
    it('Should assign the value to the userAgent property', function() {
      ric.setUserAgent(VALID_STRING_INPUT);
      assert.deepEqual(ric.userAgent, VALID_STRING_INPUT);
    });
    it('Should assign the value to remoteAddress property', function() {
      ric.setRemoteAddress(VALID_STRING_INPUT);
      assert.deepEqual(ric.remoteAddress, VALID_STRING_INPUT);
    });
    it('Should assign the value to statusCode property', function() {
      ric.setStatusCode(VALID_NUMBER_INPUT);
      assert.deepEqual(ric.statusCode, VALID_NUMBER_INPUT);
    });
  });
});
