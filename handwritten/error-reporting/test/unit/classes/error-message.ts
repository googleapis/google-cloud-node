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

import assert from 'assert';
import {ErrorMessage} from '../../../src/classes/error-message';
import {RequestInformationContainer} from '../../../src/classes/request-information-container';

describe('Instantiating a new ErrorMessage', () => {
  let em: ErrorMessage;
  beforeEach(() => {
    em = new ErrorMessage();
  });

  it('Should have a default service context', () => {
    assert.deepEqual(em.serviceContext, {service: 'node', version: undefined});
  });
  it('Should have a default message', () => {
    assert.strictEqual(em.message, '');
  });
  it('Should have a default http context', () => {
    assert.deepEqual(em.context.httpRequest, {
      method: '',
      url: '',
      userAgent: '',
      referrer: '',
      responseStatusCode: 0,
      remoteIp: '',
    });
  });
  it('Should have a default reportLocation', () => {
    assert.deepEqual(em.context.reportLocation, {
      filePath: '',
      lineNumber: 0,
      functionName: '',
    });
  });
});

describe('Calling against setEventTimeToNow', () => {
  let em: ErrorMessage;
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set the eventTime property', () => {
    em.setEventTimeToNow();
    assert(typeof em.eventTime === 'string');
  });
});

describe('Fuzzing against setServiceContext', () => {
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const DEFAULT_TEST_VALUE = 'DEFAULT';
  const DEFAULT_VERSION_VALUE = undefined;
  const DEFAULT_SERVICE_VALUE = 'node';
  let em: ErrorMessage;
  beforeEach(() => {
    em = new ErrorMessage();
  });

  it('Should set the value for service context', () => {
    em.setServiceContext(AFFIRMATIVE_TEST_VALUE, AFFIRMATIVE_TEST_VALUE);
    assert.deepEqual(
        em.serviceContext, {
          service: AFFIRMATIVE_TEST_VALUE,
          version: AFFIRMATIVE_TEST_VALUE,
        },
        [
          'In the affirmative case the value should be settable to a valid string',
          'and by setting this value this should mutate the instance',
        ].join(' '));
  });
  it('Should set the default values', () => {
    em.setServiceContext(DEFAULT_TEST_VALUE, DEFAULT_TEST_VALUE);
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_TEST_VALUE,
          version: DEFAULT_TEST_VALUE,
        },
        [
          'In resetting to default valid values the instance should reflect the',
          'value update',
        ].join(' '));
  });
  it('Should still set version with affirmative value', () => {
    em.setServiceContext(null!, AFFIRMATIVE_TEST_VALUE);
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_SERVICE_VALUE,
          version: AFFIRMATIVE_TEST_VALUE,
        },
        [
          'Providing only a valid value to the second argument of',
          'setServiceContext should set the service property as an empty string',
          'but set the version property to the affirmative value.',
        ].join(' '));
  });
  it('Should still set service with affirmative value', () => {
    em.setServiceContext(AFFIRMATIVE_TEST_VALUE, null!);
    assert.deepEqual(
        em.serviceContext, {
          service: AFFIRMATIVE_TEST_VALUE,
          version: DEFAULT_VERSION_VALUE,
        },
        [
          'Providing only a valid value to the first argument of',
          'setServiceContext should set the version property as an empty string',
          'but set the service property to the affirmative value.',
        ].join(' '));
  });
  it('Should set default values on both', () => {
    em.setServiceContext(null!, null!);
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_SERVICE_VALUE,
          version: DEFAULT_VERSION_VALUE,
        },
        [
          'Providing null as the value to both arguments should set both',
          'properties as empty strings.',
        ].join(' '));
  });
  it('Should set default values on both', () => {
    em.setServiceContext(2 as {} as string, 1.3 as {} as string);
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_SERVICE_VALUE,
          version: DEFAULT_VERSION_VALUE,
        },
        [
          'Providing numbers as the value to both arguments should set both',
          'properties as empty strings.',
        ].join(' '));
  });
  it('Should set as default', () => {
    em.setServiceContext({test: 'true'} as {} as string, [] as {} as string);
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_SERVICE_VALUE,
          version: DEFAULT_VERSION_VALUE,
        },
        [
          'Providing arrays or objects as the value to both arguments',
          'should set both properties as empty strings.',
        ].join(' '));
  });
  it('Should set as default', () => {
    em.setServiceContext();
    assert.deepEqual(
        em.serviceContext, {
          service: DEFAULT_SERVICE_VALUE,
          version: DEFAULT_VERSION_VALUE,
        },
        'Providing no arguments should set both properties as empty strings');
  });
});

describe('Fuzzing against setMessage', () => {
  let em: ErrorMessage;
  beforeEach(() => {
    em = new ErrorMessage();
  });
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';

  it('Should set the message', () => {
    em.setMessage(AFFIRMATIVE_TEST_VALUE);
    assert(em.message === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setMessage();
    assert(em.message === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setMessage the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setHttpMethod', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set the method', () => {
    em.setHttpMethod(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.method === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setHttpMethod();
    assert(em.context.httpRequest.method === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setHttpMethod the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setUrl', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set url', () => {
    em.setUrl(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.url === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setUrl();
    assert(em.context.httpRequest.url === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setUrl the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setUserAgent', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set userAgent', () => {
    em.setUserAgent(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.userAgent === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setUserAgent();
    assert(em.context.httpRequest.userAgent === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setUserAgent the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setReferrer', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set referrer', () => {
    em.setReferrer(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.referrer === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setReferrer();
    assert(em.context.httpRequest.referrer === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setReferrer the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setResponseStatusCode', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 200;
  const NEGATIVE_TEST_VALUE = 0;
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set responseStatusCode', () => {
    em.setResponseStatusCode(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.responseStatusCode === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setResponseStatusCode();
    assert(em.context.httpRequest.responseStatusCode === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setResponseStatusCode the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setRemoteIp', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set remoteIp', () => {
    em.setRemoteIp(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.httpRequest.remoteIp === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setRemoteIp();
    assert(em.context.httpRequest.remoteIp === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setRemoteIp the property',
      'message should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setUser', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set user', () => {
    em.setUser(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.user === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setUser();
    assert(em.context.user === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setUser the property',
      'user should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setFilePath', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set filePath', () => {
    em.setFilePath(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.reportLocation.filePath === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setFilePath();
    assert(em.context.reportLocation.filePath === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setFilePath the property',
      'filePath should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setLineNumber', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 27;
  const NEGATIVE_TEST_VALUE = 0;
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set lineNumber', () => {
    em.setLineNumber(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.reportLocation.lineNumber === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setLineNumber();
    assert(em.context.reportLocation.lineNumber === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setLineNumber the property',
      'lineNumber should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against setFunctionName', () => {
  let em: ErrorMessage;
  const AFFIRMATIVE_TEST_VALUE = 'VALID_INPUT_AND_TYPE';
  const NEGATIVE_TEST_VALUE = '';
  beforeEach(() => {
    em = new ErrorMessage();
  });
  it('Should set functionName', () => {
    em.setFunctionName(AFFIRMATIVE_TEST_VALUE);
    assert(em.context.reportLocation.functionName === AFFIRMATIVE_TEST_VALUE, [
      'In the affirmative case the value should be settable to a valid string',
      'and by setting this value this should mutate the instance',
    ].join(' '));
  });
  it('Should default', () => {
    em.setFunctionName();
    assert(em.context.reportLocation.functionName === NEGATIVE_TEST_VALUE, [
      'By providing no argument (undefined) to setFunctionName the property',
      'functionName should be set to an empty string on the instance',
    ].join(' '));
  });
});

describe('Fuzzing against consumeRequestInformation', () => {
  const em = new ErrorMessage();
  const A_VALID_STRING = 'A_VALID_STRING';
  const A_VALID_NUMBER = 201;
  const NEGATIVE_STRING_CASE = '';
  const NEGATIVE_NUMBER_CASE = 0;

  const AFFIRMATIVE_TEST_VALUE = {
    method: A_VALID_STRING,
    url: A_VALID_STRING,
    userAgent: A_VALID_STRING,
    referrer: A_VALID_STRING,
    statusCode: A_VALID_NUMBER,
    remoteAddress: A_VALID_STRING,
  };
  const NEGATIVE_TEST_VALUE = {
    method: null,
    url: A_VALID_NUMBER,
    userAgent: {},
    referrer: [],
    statusCode: A_VALID_STRING,
    remoteAddress: undefined,
  };
  it('Should consume the stubbed request object', () => {
    em.consumeRequestInformation(
        AFFIRMATIVE_TEST_VALUE as RequestInformationContainer);
    assert(em.context.httpRequest.method === A_VALID_STRING, [
      'The error messages method, given a valid string, should be',
      'set to that value',
    ].join(' '));
    assert(em.context.httpRequest.url === A_VALID_STRING, [
      'The error messages url, given a valid string, should be',
      'set to that value',
    ].join(' '));
    assert(em.context.httpRequest.userAgent === A_VALID_STRING, [
      'The error messages userAgent, given a valid string, should be',
      'set to that value',
    ].join(' '));
    assert(em.context.httpRequest.referrer === A_VALID_STRING, [
      'The error messages referrer, given a valid string, should be',
      'set to that value',
    ].join(' '));
    assert(em.context.httpRequest.responseStatusCode === A_VALID_NUMBER, [
      'The error messages responseStatusCode, given a valid number, should be',
      'set to that value',
    ].join(' '));
    assert(em.context.httpRequest.remoteIp === A_VALID_STRING, [
      'The error messages remoteAddress, given a valid string, should be',
      'set to that value',
    ].join(' '));
  });
  it('Should default when consuming a malformed request object', () => {
    em.consumeRequestInformation(null!);
    assert(em.context.httpRequest.method === A_VALID_STRING, [
      'The error messages method, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
    assert(em.context.httpRequest.url === A_VALID_STRING, [
      'The error messages url, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
    assert(em.context.httpRequest.userAgent === A_VALID_STRING, [
      'The error messages userAgent, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
    assert(em.context.httpRequest.referrer === A_VALID_STRING, [
      'The error messages referrer, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
    assert(em.context.httpRequest.responseStatusCode === A_VALID_NUMBER, [
      'The error messages responseStatusCode, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
    assert(em.context.httpRequest.remoteIp === A_VALID_STRING, [
      'The error messages remoteAddress, given an invalid type a the top-level',
      'should remain untouched',
    ].join(' '));
  });
  it('Should default when consuming mistyped response object properties', () => {
    em.consumeRequestInformation(
        NEGATIVE_TEST_VALUE as {} as RequestInformationContainer);
    assert(em.context.httpRequest.method === NEGATIVE_STRING_CASE, [
      'The error messages method, given an invalid input should default to',
      'the negative value',
    ].join(' '));
    assert(em.context.httpRequest.url === NEGATIVE_STRING_CASE, [
      'The error messages url, given an invalid input should default to',
      'the negative value',
    ].join(' '));
    assert(em.context.httpRequest.userAgent === NEGATIVE_STRING_CASE, [
      'The error messages userAgent, ggiven an invalid input should default to',
      'the negative value',
    ].join(' '));
    assert(em.context.httpRequest.referrer === NEGATIVE_STRING_CASE, [
      'The error messages referrer, given an invalid input should default to',
      'the negative value',
    ].join(' '));
    assert(em.context.httpRequest.responseStatusCode === NEGATIVE_NUMBER_CASE, [
      'The error messages responseStatusCode, given an invalid input should default to',
      'the negative value',
    ].join(' '));
    assert(em.context.httpRequest.remoteIp === NEGATIVE_STRING_CASE, [
      'The error messages remoteAddress, given an invalid input should default to',
      'the negative value',
    ].join(' '));
  });
  it('Should return the instance on calling consumeRequestInformation', () => {
    assert(
        em.consumeRequestInformation(
            AFFIRMATIVE_TEST_VALUE as RequestInformationContainer)
                instanceof ErrorMessage,
        [
          'Calling consumeRequestInformation with valid input should return',
          'the ErrorMessage instance',
        ].join(' '));
    assert(em.consumeRequestInformation(undefined!) instanceof ErrorMessage, [
      'Calling consumeRequestInformation with invalid input should return',
      'the ErrorMessage instance',
    ].join(' '));
  });
});
