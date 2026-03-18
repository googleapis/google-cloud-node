// Copyright 2022 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {
  ExecutableResponse,
  InvalidSubjectTokenError,
  InvalidTokenTypeFieldError,
  InvalidCodeFieldError,
  InvalidMessageFieldError,
  InvalidSuccessFieldError,
  InvalidVersionFieldError,
  ExecutableResponseJson,
} from '../src/auth/executable-response';
import * as sinon from 'sinon';
import {TestUtils} from './utils';

const SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';
const OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const OIDC_SUBJECT_TOKEN_TYPE2 = 'urn:ietf:params:oauth:token-type:jwt';

describe('ExecutableResponse', () => {
  let clock: sinon.SinonFakeTimers;
  const referenceTime = 1653429377000;

  beforeEach(() => {
    clock = TestUtils.useFakeTimers(sinon, referenceTime);
  });

  afterEach(() => {
    if (clock) {
      clock.restore();
    }
  });

  describe('Constructor', () => {
    it('should throw error when version field is missing', () => {
      const responseJson = {
        success: 'true',
      };
      const expectedError = new InvalidVersionFieldError(
        "Executable response must contain a 'version' field.",
      );

      assert.throws(() => {
        return new ExecutableResponse(
          responseJson as unknown as ExecutableResponseJson,
        );
      }, expectedError);
    });

    it('should throw error when success field is missing', () => {
      const responseJson = {
        version: 1,
      };
      const expectedError = new InvalidSuccessFieldError(
        "Executable response must contain a 'success' field.",
      );

      assert.throws(() => {
        return new ExecutableResponse(
          responseJson as unknown as ExecutableResponseJson,
        );
      }, expectedError);
    });

    it('should throw error when token_type field is missing and success = true', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: 123456,
      };
      const expectedError = new InvalidTokenTypeFieldError(
        "Executable response must contain a 'token_type' field when successful " +
          `and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`,
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should throw error when token_type field is invalid and success = true', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: 123456,
        token_type: 'invalidExample',
      };
      const expectedError = new InvalidTokenTypeFieldError(
        "Executable response must contain a 'token_type' field when successful " +
          `and it must be one of ${OIDC_SUBJECT_TOKEN_TYPE1}, ${OIDC_SUBJECT_TOKEN_TYPE2}, or ${SAML_SUBJECT_TOKEN_TYPE}.`,
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should throw error when id_token field is missing and token_type is OIDC', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: 123456,
        token_type: OIDC_SUBJECT_TOKEN_TYPE1,
        saml_response: 'response',
      };
      const expectedError = new InvalidSubjectTokenError(
        "Executable response must contain a 'id_token' field when token_type=urn:ietf:params:oauth:token-type:id_token or urn:ietf:params:oauth:token-type:jwt.",
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should throw error when saml_response field is missing and token_type is SAML', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: 123456,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        id_token: 'response',
      };
      const expectedError = new InvalidSubjectTokenError(
        "Executable response must contain a 'saml_response' field when token_type=urn:ietf:params:oauth:token-type:saml2.",
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should throw error when code field is missing and success is false', () => {
      const responseJson = {
        success: false,
        version: 1,
        message: 'error message',
      };
      const expectedError = new InvalidCodeFieldError(
        "Executable response must contain a 'code' field when unsuccessful.",
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should throw error when message field is missing and success is false', () => {
      const responseJson = {
        success: false,
        version: 1,
        code: '1',
      };
      const expectedError = new InvalidMessageFieldError(
        "Executable response must contain a 'message' field when unsuccessful.",
      );

      assert.throws(() => {
        return new ExecutableResponse(responseJson);
      }, expectedError);
    });

    it('should should set properties correctly for a successful response with saml', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        expiration_time: 123456,
        saml_response: 'response',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(executableResponse.success, responseJson.success);
      assert.equal(executableResponse.version, responseJson.version);
      assert.equal(executableResponse.tokenType, responseJson.token_type);
      assert.equal(
        executableResponse.expirationTime,
        responseJson.expiration_time,
      );
      assert.equal(executableResponse.subjectToken, responseJson.saml_response);
    });

    it('should should set properties correctly for a successful response with OIDC type 1', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: OIDC_SUBJECT_TOKEN_TYPE1,
        expiration_time: 123456,
        id_token: 'response',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(executableResponse.success, responseJson.success);
      assert.equal(executableResponse.version, responseJson.version);
      assert.equal(executableResponse.tokenType, responseJson.token_type);
      assert.equal(
        executableResponse.expirationTime,
        responseJson.expiration_time,
      );
      assert.equal(executableResponse.subjectToken, responseJson.id_token);
    });

    it('should should set properties correctly for a successful response with OIDC type 2', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: OIDC_SUBJECT_TOKEN_TYPE2,
        expiration_time: 123456,
        id_token: 'response',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(executableResponse.success, responseJson.success);
      assert.equal(executableResponse.version, responseJson.version);
      assert.equal(executableResponse.tokenType, responseJson.token_type);
      assert.equal(
        executableResponse.expirationTime,
        responseJson.expiration_time,
      );
      assert.equal(executableResponse.subjectToken, responseJson.id_token);
    });

    it('should should set properties correctly for unsuccessful response', () => {
      const responseJson = {
        success: false,
        version: 1,
        code: '1',
        message: 'error message',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(executableResponse.success, responseJson.success);
      assert.equal(executableResponse.version, responseJson.version);
      assert.equal(executableResponse.errorCode, responseJson.code);
      assert.equal(executableResponse.errorMessage, responseJson.message);
    });
  });

  describe('isExpired', () => {
    it('should return false if response does not contain expirationTime', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 1,
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(false, executableResponse.isExpired());
    });

    it('should return true if response is expired', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 - 1,
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(true, executableResponse.isExpired());
    });

    it('should return false if response is not expired', () => {
      const responseJson = {
        success: true,
        version: 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
        expiration_time: referenceTime / 1000 + 1,
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(false, executableResponse.isExpired());
    });
  });

  describe('isValid', () => {
    it('should return false if response is not successful', () => {
      const responseJson = {
        success: false,
        version: 1,
        code: '1',
        message: 'error message',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(false, executableResponse.isValid());
    });

    it('should return false if response is successful but expired', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: referenceTime / 1000 - 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(false, executableResponse.isValid());
    });

    it('should return true if response is successful and not expired', () => {
      const responseJson = {
        success: true,
        version: 1,
        expiration_time: referenceTime / 1000 + 1,
        token_type: SAML_SUBJECT_TOKEN_TYPE,
        saml_response: 'response',
      };

      const executableResponse = new ExecutableResponse(responseJson);

      assert.equal(true, executableResponse.isValid());
    });
  });
});
