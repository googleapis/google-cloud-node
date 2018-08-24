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

import * as extend from 'extend';
import omit = require('lodash.omit');

import {manualRequestInformationExtractor} from '../../../src/request-extractors/manual';
import {Fuzzer} from '../../../utils/fuzzer';
import {deepStrictEqual} from '../../util';

describe('manualRequestInformationExtractor', () => {
  describe('Behaviour given invalid input', () => {
    it('Should return default values', () => {
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
          manualRequestInformationExtractor, ['object'], cbFn);
    });
  });
  describe('Behaviour given valid input', () => {
    const FULL_VALID_INPUT = {
      method: 'GET',
      url: 'http://0.0.0.0/myTestRoute',
      userAgent: 'Something like Gecko',
      referrer: 'www.example.com',
      statusCode: 500,
      remoteAddress: '0.0.0.1',
    };
    it('Should return expected output', () => {
      deepStrictEqual(
          manualRequestInformationExtractor(FULL_VALID_INPUT), FULL_VALID_INPUT,
          [
            'Given a full valid input object these values should be reflected by',
            'the output of the request extraction',
          ].join(' '));
      deepStrictEqual(
          manualRequestInformationExtractor(omit(FULL_VALID_INPUT, 'method')),
          extend({}, FULL_VALID_INPUT, {method: ''}), [
            'Given a full valid input object sans the method property values',
            'should be reflected by the output of the request extraction',
          ].join(' '));
      deepStrictEqual(
          manualRequestInformationExtractor(omit(FULL_VALID_INPUT, 'url')),
          extend({}, FULL_VALID_INPUT, {url: ''}), [
            'Given a valid input sans the url property these values should be',
            'reflected by the output of the request extraction',
          ].join(''));
      deepStrictEqual(
          manualRequestInformationExtractor(
              omit(FULL_VALID_INPUT, 'userAgent')),
          extend({}, FULL_VALID_INPUT, {userAgent: ''}), [
            'Given a full valid input sans the userAgent property these values',
            'should be reflected by the output of the request extraction',
          ].join(''));
      deepStrictEqual(
          manualRequestInformationExtractor(omit(FULL_VALID_INPUT, 'referrer')),
          extend({}, FULL_VALID_INPUT, {referrer: ''}), [
            'Given a full valid input sans the referrer property these values',
            'should be reflected by the output of the request extraction',
          ].join(''));
      deepStrictEqual(
          manualRequestInformationExtractor(
              omit(FULL_VALID_INPUT, 'statusCode')),
          extend({}, FULL_VALID_INPUT, {statusCode: 0}), [
            'Given a full valid input sans the statusCode property these values',
            'should be reflected by the output of the request extraction',
          ].join(''));
      deepStrictEqual(
          manualRequestInformationExtractor(
              omit(FULL_VALID_INPUT, 'remoteAddress')),
          extend({}, FULL_VALID_INPUT, {remoteAddress: ''}), [
            'Given a valid input sans the remoteAddress property these values',
            'should be reflected by the output of the request extraction',
          ].join(''));
    });
  });
});
