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

import * as assert from 'assert';
import {RequestInformationContainer} from '../../../src/classes/request-information-container';
import {Fuzzer} from '../../../utils/fuzzer';
import {deepStrictEqual} from '../../util';

describe('RequestInformationContainer', () => {
  const f = new Fuzzer();
  let cbFn, ric: RequestInformationContainer;
  beforeEach(() => {
    ric = new RequestInformationContainer();
  });
  describe('Fuzzing against RequestInformationContainer', () => {
    it('Should return the property as an empty string', () => {
      cbFn = () => {
        deepStrictEqual(ric.url, '');
      };
      f.fuzzFunctionForTypes(ric.setUrl, ['string'], cbFn, ric);
    });
    it('Should return the method property as an empty string', () => {
      cbFn = () => {
        deepStrictEqual(ric.method, '');
      };
      f.fuzzFunctionForTypes(ric.setMethod, ['string'], cbFn, ric);
    });
    it('Should return the referrer property as an empty string', () => {
      cbFn = () => {
        deepStrictEqual(ric.referrer, '');
      };
      f.fuzzFunctionForTypes(ric.setReferrer, ['string'], cbFn, ric);
    });
    it('Should return the userAgent property as an empty string', () => {
      cbFn = () => {
        deepStrictEqual(ric.userAgent, '');
      };
      f.fuzzFunctionForTypes(ric.setUserAgent, ['string'], cbFn, ric);
    });
    it('Should return the property as an empty string', () => {
      cbFn = () => {
        deepStrictEqual(ric.remoteAddress, '');
      };
      f.fuzzFunctionForTypes(ric.setRemoteAddress, ['string'], cbFn, ric);
    });
    it('Should return the default value for statusCode', () => {
      cbFn = () => {
        assert.strictEqual(ric.statusCode, 0);
      };
      f.fuzzFunctionForTypes(ric.setStatusCode, ['number'], cbFn, ric);
    });
  });
  describe('Fuzzing against for positive cases', () => {
    const VALID_STRING_INPUT = 'valid';
    const VALID_NUMBER_INPUT = 500;
    it('Should assign the value to the url property', () => {
      ric.setUrl(VALID_STRING_INPUT);
      assert.strictEqual(ric.url, VALID_STRING_INPUT);
    });
    it('Should assign the value to the method property', () => {
      ric.setMethod(VALID_STRING_INPUT);
      assert.strictEqual(ric.method, VALID_STRING_INPUT);
    });
    it('Should assign the value to the referrer property', () => {
      ric.setReferrer(VALID_STRING_INPUT);
      assert.strictEqual(ric.referrer, VALID_STRING_INPUT);
    });
    it('Should assign the value to the userAgent property', () => {
      ric.setUserAgent(VALID_STRING_INPUT);
      assert.strictEqual(ric.userAgent, VALID_STRING_INPUT);
    });
    it('Should assign the value to remoteAddress property', () => {
      ric.setRemoteAddress(VALID_STRING_INPUT);
      assert.strictEqual(ric.remoteAddress, VALID_STRING_INPUT);
    });
    it('Should assign the value to statusCode property', () => {
      ric.setStatusCode(VALID_NUMBER_INPUT);
      assert.strictEqual(ric.statusCode, VALID_NUMBER_INPUT);
    });
  });
});
