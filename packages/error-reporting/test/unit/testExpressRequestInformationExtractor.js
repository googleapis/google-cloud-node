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
var expressRequestInformationExtractor = require('../../src/request-extractors/express.js');

var Fuzzer = require('../../utils/fuzzer.js');
var extend = require('extend');

describe('Behaviour under varying input',
  function () {
    var f;
    var DEFAULT_RETURN_VALUE = {
      method: '',
      url: '',
      userAgent: '',
      referrer: '',
      statusCode: 0,
      remoteAddress: ''
    };
    beforeEach(function () {f = new Fuzzer();});
    it('Should return a default value given invalid input', function () {
      var cbFn = function (value) {
        assert.deepEqual(value, DEFAULT_RETURN_VALUE);
      };
      f.fuzzFunctionForTypes(expressRequestInformationExtractor,
        ['object', 'object'], cbFn);
    });
    it('Should return valid request object given valid input', function () {
      var FULL_REQ_DERIVATION_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        'user-agent': 'Something like Mozilla',
        referrer: 'www.ANOTHER-TEST.com',
        'x-forwarded-for': '0.0.0.1',
        connection: {
          remoteAddress: '0.0.0.0'
        }
      };
      var FULL_RES_DERIVATION_VALUE = {
        'statusCode': 200
      };
      var FULL_REQ_EXPECTED_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        userAgent: 'Something like Mozilla',
        referrer: 'www.ANOTHER-TEST.com',
        remoteAddress: '0.0.0.1',
        statusCode: 200
      };

      var PARTIAL_REQ_DERIVATION_VALUE = {
        method: 'STUB_METHOD_#2',
        url: 'www.SUPER-TEST.com',
        'user-agent': 'Something like Gecko',
        referrer: 'www.SUPER-ANOTHER-TEST.com',
        connection: {
          remoteAddress: '0.0.2.1'
        }
      };
      var PARTIAL_RES_DERIVATION_VALUE = {
        statusCode: 201
      };
      var PARTIAL_REQ_EXPECTED_VALUE = {
        method: 'STUB_METHOD_#2',
        url: 'www.SUPER-TEST.com',
        userAgent: 'Something like Gecko',
        referrer: 'www.SUPER-ANOTHER-TEST.com',
        remoteAddress: '0.0.2.1',
        statusCode: 201
      };

      var ANOTHER_PARTIAL_REQ_DERIVATION_VALUE = {
        method: 'STUB_METHOD_#2',
        url: 'www.SUPER-TEST.com',
        'user-agent': 'Something like Gecko',
        referrer: 'www.SUPER-ANOTHER-TEST.com'
      };
      var ANOTHER_PARTIAL_RES_DERIVATION_VALUE = {
        statusCode: 201
      };
      var ANOTHER_PARTIAL_REQ_EXPECTED_VALUE = {
        method: 'STUB_METHOD_#2',
        url: 'www.SUPER-TEST.com',
        userAgent: 'Something like Gecko',
        referrer: 'www.SUPER-ANOTHER-TEST.com',
        remoteAddress: '',
        statusCode: 201
      };
      var headerFactory = function (toDeriveFrom) {
        var lrn = extend({}, toDeriveFrom);
        lrn.header = function ( toRet ) {
          if (lrn.hasOwnProperty(toRet)) {
            return lrn[toRet];
          }
          return undefined;
        };
        return lrn;
      };
      var tmpOutput = expressRequestInformationExtractor(
        headerFactory(FULL_REQ_DERIVATION_VALUE),
        FULL_RES_DERIVATION_VALUE
      );
      assert.deepEqual(tmpOutput, FULL_REQ_EXPECTED_VALUE,
        [
          'Given a valid object input for the request parameter and an',
          '\'x-forwarded-for\' parameter the request extractor should return',
          'the expected full req output and the \'x-forwarded-for\' value',
          'as the value for the \'remoteAddress\' property.'
        ].join(' ')
      );
      tmpOutput = expressRequestInformationExtractor(
        headerFactory(PARTIAL_REQ_DERIVATION_VALUE),
        PARTIAL_RES_DERIVATION_VALUE
      );
      assert.deepEqual(
        tmpOutput,
        PARTIAL_REQ_EXPECTED_VALUE,
        [
          'Given a valid object input for the request parameter but sans an',
          '\'x-forwarded-for\' parameter the request extractor should return',
          'the expected parital req output and the remoteAddress value',
          'as the value for the \'remoteAddress\' property.'
        ].join(' ')
      );
      tmpOutput = expressRequestInformationExtractor(
        headerFactory(ANOTHER_PARTIAL_REQ_DERIVATION_VALUE),
        ANOTHER_PARTIAL_RES_DERIVATION_VALUE
      );
      assert.deepEqual(
        tmpOutput,
        ANOTHER_PARTIAL_REQ_EXPECTED_VALUE,
        [
          'Given a valid object input for the request parameter but sans an',
          '\'x-forwarded-for\' parameter or a remoteAddress parameter',
          'the request extractor should return an empty string',
          'as the value for the \'remoteAddress\' property.'
        ].join(' ')
      );
    }
  );
});
