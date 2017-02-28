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

'use strict';

var assert = require('assert');
var koaRequestInformationExtractor = require('../../src/request-extractors/koa.js');
var Fuzzer = require('../../utils/fuzzer.js');

describe('koaRequestInformationExtractor', function () {
  describe('Behaviour under invalid input', function () {
    it('Should produce a default value', function () {
      var DEFAULT_RETURN_VALUE = {
        method: '',
        url: '',
        userAgent: '',
        referrer: '',
        statusCode: 0,
        remoteAddress: ''
      };
      var f = new Fuzzer();
      var cbFn = function (value) {
        assert.deepEqual(value, DEFAULT_RETURN_VALUE);
      };
      f.fuzzFunctionForTypes(koaRequestInformationExtractor,
        ['object', 'object'], cbFn);
    });
  });
  describe('Behaviour under valid input', function () {
    it('Should produce the expected value', function () {
      var FULL_REQ_DERIVATION_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        headers: {
          'user-agent': 'Something like Mozilla',
          referrer: 'www.ANOTHER-TEST.com'
        },
        ip: '0.0.0.0'
      };
      var FULL_RES_DERIVATION_VALUE = {
        'status': 200
      };
      var FULL_REQ_EXPECTED_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        userAgent: 'Something like Mozilla',
        referrer: 'www.ANOTHER-TEST.com',
        remoteAddress: '0.0.0.0',
        statusCode: 200
      };
      assert.deepEqual(
        koaRequestInformationExtractor(FULL_REQ_DERIVATION_VALUE, FULL_RES_DERIVATION_VALUE),
        FULL_REQ_EXPECTED_VALUE);
    });
  });
});
