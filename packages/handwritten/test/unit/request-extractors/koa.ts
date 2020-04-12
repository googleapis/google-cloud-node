// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Request, Response} from 'koa';
import {describe, it} from 'mocha';

import {koaRequestInformationExtractor} from '../../../src/request-extractors/koa';
import {Fuzzer} from '../../../utils/fuzzer';
import {deepStrictEqual} from '../../util';

describe('koaRequestInformationExtractor', () => {
  describe('Behaviour under invalid input', () => {
    it('Should produce a default value', () => {
      const DEFAULT_RETURN_VALUE = {
        method: '',
        url: '',
        userAgent: '',
        referrer: '',
        statusCode: 0,
        remoteAddress: '',
      };
      const f = new Fuzzer();
      const cbFn = (value: {}) => {
        deepStrictEqual(value, DEFAULT_RETURN_VALUE);
      };
      f.fuzzFunctionForTypes(
        koaRequestInformationExtractor,
        ['object', 'object'],
        cbFn
      );
    });
  });
  describe('Behaviour under valid input', () => {
    it('Should produce the expected value', () => {
      const FULL_REQ_DERIVATION_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        headers: {
          'user-agent': 'Something like Mozilla',
          referrer: 'www.ANOTHER-TEST.com',
        },
        ip: '0.0.0.0',
      };
      const FULL_RES_DERIVATION_VALUE = {
        status: 200,
      };
      const FULL_REQ_EXPECTED_VALUE = {
        method: 'STUB_METHOD',
        url: 'www.TEST-URL.com',
        userAgent: 'Something like Mozilla',
        referrer: 'www.ANOTHER-TEST.com',
        remoteAddress: '0.0.0.0',
        statusCode: 200,
      };
      deepStrictEqual(
        koaRequestInformationExtractor(
          FULL_REQ_DERIVATION_VALUE as Request,
          FULL_RES_DERIVATION_VALUE as Response
        ),
        FULL_REQ_EXPECTED_VALUE
      );
    });
  });
});
