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
import {
  ExecutableError,
  PluggableAuthClient,
  PluggableAuthClientOptions,
} from '../src/auth/pluggable-auth-client';
import {BaseExternalAccountClient} from '../src';
import {
  assertGaxiosResponsePresent,
  getAudience,
  getExpectedExternalAccountMetricsHeaderValue,
  getServiceAccountImpersonationUrl,
  getTokenUrl,
  mockStsTokenExchange,
  saEmail,
} from './externalclienthelper';
import {beforeEach} from 'mocha';
import * as sinon from 'sinon';
import {
  ExecutableResponse,
  ExecutableResponseJson,
  InvalidExpirationTimeFieldError,
} from '../src/auth/executable-response';
import {PluggableAuthHandler} from '../src/auth/pluggable-auth-handler';
import {StsSuccessfulResponse} from '../src/auth/stscredentials';
import {TestUtils} from './utils';

const OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';

describe('PluggableAuthClient', () => {
  const audience = getAudience();
  const pluggableAuthCredentialSource = {
    executable: {
      command: './command -opt',
      output_file: 'output.txt',
      timeout_millis: 10000,
    },
  };
  const pluggableAuthOptions = {
    type: 'external_account',
    audience,
    subject_token_type: SAML_SUBJECT_TOKEN_TYPE,
    token_url: getTokenUrl(),
    credential_source: pluggableAuthCredentialSource,
  };
  const pluggableAuthOptionsOIDC = {
    type: 'external_account',
    audience,
    subject_token_type: OIDC_SUBJECT_TOKEN_TYPE1,
    token_url: getTokenUrl(),
    credential_source: pluggableAuthCredentialSource,
  };
  const pluggableAuthOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    pluggableAuthOptions,
  );
  const pluggableAuthCredentialSourceNoOutput = {
    executable: {
      command: './command -opt',
      timeout_millis: 10000,
    },
  };
  const pluggableAuthOptionsNoOutput = {
    type: 'external_account',
    audience,
    subject_token_type: SAML_SUBJECT_TOKEN_TYPE,
    token_url: getTokenUrl(),
    credential_source: pluggableAuthCredentialSourceNoOutput,
  };
  const pluggableAuthCredentialSourceNoTimeout = {
    executable: {
      command: './command -opt',
      output_file: 'output.txt',
    },
  };
  const pluggableAuthOptionsNoTimeout = {
    type: 'external_account',
    audience,
    subject_token_type: SAML_SUBJECT_TOKEN_TYPE,
    token_url: getTokenUrl(),
    credential_source: pluggableAuthCredentialSourceNoTimeout,
  };

  const sandbox = sinon.createSandbox();
  let clock: sinon.SinonFakeTimers;
  const referenceTime = Date.now();
  let responseJson: ExecutableResponseJson;
  let fileStub: sinon.SinonStub<[], Promise<ExecutableResponse | undefined>>;
  let executableStub: sinon.SinonStub<
    [envMap: Map<string, string>],
    Promise<ExecutableResponse>
  >;

  beforeEach(() => {
    // Set Allow Executables environment variables to 1
    const envVars = Object.assign({}, process.env, {
      GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES: '1',
    });
    sandbox.stub(process, 'env').value(envVars);
    clock = TestUtils.useFakeTimers(sinon, referenceTime);

    responseJson = {
      success: true,
      version: 1,
      token_type: SAML_SUBJECT_TOKEN_TYPE,
      saml_response: 'response',
      expiration_time: referenceTime / 1000 + 10,
    } as ExecutableResponseJson;

    fileStub = sandbox.stub(
      PluggableAuthHandler.prototype,
      'retrieveCachedResponse',
    );

    executableStub = sandbox.stub(
      PluggableAuthHandler.prototype,
      'retrieveResponseFromExecutable',
    );
  });

  afterEach(() => {
    sandbox.restore();
    if (clock) {
      clock.restore();
    }
  });

  it('should be a subclass of ExternalAccountClient', () => {
    assert(PluggableAuthClient.prototype instanceof BaseExternalAccountClient);
  });

  describe('Constructor', () => {
    it('should throw when credential_source is missing executable', () => {
      const expectedError = new Error(
        'No valid Pluggable Auth "credential_source" provided.',
      );
      const invalidCredentialSource = {};
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: invalidCredentialSource,
      };

      assert.throws(() => {
        return new PluggableAuthClient(
          invalidOptions as unknown as PluggableAuthClientOptions,
        );
      }, expectedError);
    });

    it('should throw when credential_source is missing command', () => {
      const expectedError = new Error(
        'No valid Pluggable Auth "credential_source" provided.',
      );
      const invalidCredentialSource = {
        executable: {
          output_file: 'output.txt',
          timeout_mills: 10000,
        },
      };
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: invalidCredentialSource,
      };

      assert.throws(() => {
        return new PluggableAuthClient(
          invalidOptions as unknown as PluggableAuthClientOptions,
        );
      }, expectedError);
    });

    it('should throw when time_millis is below minimum allowed value', () => {
      const expectedError = new Error(
        'Timeout must be between 5000 and 120000 milliseconds.',
      );
      const invalidCredentialSource = {
        executable: {
          command: './command',
          output_file: 'output.txt',
          timeout_millis: -1,
        },
      };
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: invalidCredentialSource,
      };

      assert.throws(() => {
        return new PluggableAuthClient(invalidOptions);
      }, expectedError);
    });

    it('should throw when time_millis is above maximum allowed value', () => {
      const expectedError = new Error(
        'Timeout must be between 5000 and 120000 milliseconds.',
      );
      const invalidCredentialSource = {
        executable: {
          command: './command',
          output_file: 'output.txt',
          timeout_millis: 9000000000,
        },
      };
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: invalidCredentialSource,
      };

      assert.throws(() => {
        return new PluggableAuthClient(invalidOptions);
      }, expectedError);
    });

    it('should set timeout to default when none is provided', () => {
      const client = new PluggableAuthClient(pluggableAuthOptionsNoTimeout);

      assert.equal(client['timeoutMillis'], 30000);
    });
  });

  describe('RetrieveSubjectToken', () => {
    it('should throw when allow executables environment variables is not 1', async () => {
      process.env.GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES = '0';
      const expectedError = new Error(
        'Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.',
      );

      const client = new PluggableAuthClient(pluggableAuthOptions);

      await assert.rejects(client.retrieveSubjectToken(), expectedError);
    });

    it('should return error from child process up the stack', async () => {
      const expectedError = new Error('example error');
      fileStub.throws(new Error('example error'));

      const client = new PluggableAuthClient(pluggableAuthOptions);

      await assert.rejects(client.retrieveSubjectToken(), expectedError);
    });

    it('should return executable SAML response when successful', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.saml_response);
    });

    it('should return executable OIDC response when successful', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptionsOIDC);
      responseJson.id_token = 'subject_token';
      responseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      responseJson.saml_response = undefined;
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.id_token);
    });

    it('should return SAML executable response when successful and no expiration_time', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptionsNoOutput);
      responseJson.expiration_time = undefined;
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.saml_response);
    });

    it('should return OIDC executable response when successful and no expiration_time', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptionsNoOutput);
      responseJson.id_token = 'subject_token';
      responseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      responseJson.saml_response = undefined;
      responseJson.expiration_time = undefined;
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.id_token);
    });

    it('should throw error when version is not supported', async () => {
      responseJson.version = 99999;
      const expectedError = new Error(
        'Version of executable is not currently supported, maximum supported version is 1.',
      );
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));
      const client = new PluggableAuthClient(pluggableAuthOptions);

      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should throw error when response is expired', async () => {
      responseJson.expiration_time = referenceTime / 1000 - 10;
      const expectedError = new Error('Executable response is expired.');
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should call executable when output file returns undefined', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      await client.retrieveSubjectToken();

      sandbox.assert.calledOnce(fileStub);
      sandbox.assert.calledOnce(executableStub);
    });

    it('should return cached file SAML response when successful', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(new ExecutableResponse(responseJson));
      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.saml_response);
    });

    it('should return cached file OIDC response when successful', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptionsOIDC);
      responseJson.id_token = 'subject_token';
      responseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      responseJson.saml_response = undefined;
      fileStub.resolves(new ExecutableResponse(responseJson));
      const subjectToken = client.retrieveSubjectToken();

      assert.equal(await subjectToken, responseJson.id_token);
    });

    it('should reject if error returned from output file stream', async () => {
      const client = new PluggableAuthClient(pluggableAuthOptions);
      const expectedError = new Error('error');
      fileStub.rejects(expectedError);
      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should throw error when response is not successful', async () => {
      responseJson.success = false;
      responseJson.code = '1';
      responseJson.message = 'error';
      const expectedError = new ExecutableError('error', '1');
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should throw error when output file response does not contain expiration_time and output file is specified', async () => {
      responseJson.expiration_time = undefined;
      const expectedError = new InvalidExpirationTimeFieldError(
        'The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.',
      );
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should throw error when executable response does not contain expiration_time and output file is specified', async () => {
      responseJson.expiration_time = undefined;
      const expectedError = new InvalidExpirationTimeFieldError(
        'The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.',
      );
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();

      await assert.rejects(subjectToken, expectedError);
    });

    it('should set envMap correctly when calling executable', async () => {
      const expectedEnvMap = new Map();
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE', audience);
      expectedEnvMap.set(
        'GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE',
        responseJson.token_type,
      );
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0');
      const client = new PluggableAuthClient(pluggableAuthOptionsNoOutput);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();
      await subjectToken;

      sinon.assert.calledOnceWithExactly(executableStub, expectedEnvMap);
    });

    it('should set envMap correctly when calling executable without output file', async () => {
      const expectedEnvMap = new Map();
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE', audience);
      expectedEnvMap.set(
        'GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE',
        responseJson.token_type,
      );
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0');
      expectedEnvMap.set(
        'GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE',
        pluggableAuthCredentialSource.executable.output_file,
      );
      const client = new PluggableAuthClient(pluggableAuthOptions);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();
      await subjectToken;

      sinon.assert.calledOnceWithExactly(executableStub, expectedEnvMap);
    });

    it('should set envMap correctly when calling executable with service account impersonation', async () => {
      const expectedEnvMap = new Map();
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE', audience);
      expectedEnvMap.set(
        'GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE',
        responseJson.token_type,
      );
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE', '0');
      expectedEnvMap.set(
        'GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE',
        pluggableAuthCredentialSource.executable.output_file,
      );
      expectedEnvMap.set('GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL', saEmail);
      const client = new PluggableAuthClient(pluggableAuthOptionsWithSA);
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const subjectToken = client.retrieveSubjectToken();
      await subjectToken;

      sinon.assert.calledOnceWithExactly(executableStub, expectedEnvMap);
    });
  });

  describe('GetAccessToken', () => {
    const stsSuccessfulResponse: StsSuccessfulResponse = {
      access_token: 'ACCESS_TOKEN',
      issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      token_type: 'Bearer',
      expires_in: 3600,
      scope: 'scope1 scope2',
    };

    it('should set x-goog-api-client header correctly', async () => {
      const scope = mockStsTokenExchange(
        [
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              // Subject token loaded from file should be used.
              subject_token: 'subject_token',
              subject_token_type: OIDC_SUBJECT_TOKEN_TYPE1,
            },
          },
        ],
        {
          'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
            'executable',
            false,
            false,
          ),
        },
      );

      const client = new PluggableAuthClient(pluggableAuthOptionsOIDC);
      responseJson.id_token = 'subject_token';
      responseJson.token_type = OIDC_SUBJECT_TOKEN_TYPE1;
      responseJson.saml_response = undefined;
      fileStub.resolves(undefined);
      executableStub.resolves(new ExecutableResponse(responseJson));

      const actualResponse = await client.getAccessToken();

      // Confirm raw GaxiosResponse appended to response.
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: stsSuccessfulResponse.access_token,
      });
      scope.done();
    });
  });
});
