// Copyright 2021 Google LLC
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
import {afterEach, describe, it} from 'mocha';
import * as fs from 'fs';
import * as nock from 'nock';
import {createCrypto} from '../src/crypto/crypto';
import {
  IdentityPoolClient,
  IdentityPoolClientOptions,
  SubjectTokenSupplier,
} from '../src/auth/identitypoolclient';
import {StsSuccessfulResponse} from '../src/auth/stscredentials';
import {BaseExternalAccountClient} from '../src/auth/baseexternalclient';
import {
  assertGaxiosResponsePresent,
  getAudience,
  getTokenUrl,
  getServiceAccountImpersonationUrl,
  mockGenerateAccessToken,
  mockStsTokenExchange,
  getExpectedExternalAccountMetricsHeaderValue,
  getMtlsTokenUrl,
} from './externalclienthelper';
import {X509Certificate} from 'crypto';
import {
  CERTIFICATE_CONFIGURATION_ENV_VARIABLE,
  CertificateSourceUnavailableError,
  InvalidConfigurationError,
} from '../src/auth/certificatesubjecttokensupplier';
import * as sinon from 'sinon';
import * as util from '../src/util';

nock.disableNetConnect();

const ONE_HOUR_IN_SECS = 3600;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
function escapeRegExp(str: string): string {
  // $& means the whole matched string.
  return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

describe('IdentityPoolClient', () => {
  const fileSubjectToken = fs.readFileSync(
    './test/fixtures/external-subject-token.txt',
    'utf-8',
  );
  const audience = getAudience();
  const crypto = createCrypto();
  const fileSourcedOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      file: './test/fixtures/external-subject-token.txt',
    },
  };
  const fileSourcedOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    fileSourcedOptions,
  );
  const fileSourcedOptionsWithWorkforceUserProject = Object.assign(
    {},
    fileSourcedOptions,
    {
      workforce_pool_user_project: 'workforce_pool_user_project',
      audience:
        '//iam.googleapis.com/locations/global/workforcePools/pool/providers/oidc',
      subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
    },
  );
  const fileSourcedOptionsWithClientAuthAndWorkforceUserProject = Object.assign(
    {
      client_id: 'CLIENT_ID',
      client_secret: 'SECRET',
    },
    fileSourcedOptionsWithWorkforceUserProject,
  );
  const fileSourcedOptionsWithWorkforceUserProjectAndSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    fileSourcedOptionsWithWorkforceUserProject,
  );
  const basicAuthCreds =
    `${fileSourcedOptionsWithClientAuthAndWorkforceUserProject.client_id}:` +
    `${fileSourcedOptionsWithClientAuthAndWorkforceUserProject.client_secret}`;
  const jsonFileSourcedOptions: IdentityPoolClientOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      file: './test/fixtures/external-subject-token.json',
      format: {
        type: 'json',
        subject_token_field_name: 'access_token',
      },
    },
  };
  const jsonFileSourcedOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    jsonFileSourcedOptions,
  );
  const fileSourcedOptionsNotFound = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      file: './test/fixtures/not-found',
    },
  };
  const metadataBaseUrl = 'http://169.254.169.254';
  const metadataPath =
    '/metadata/identity/oauth2/token?' + 'api-version=2018-02-01&resource=abc';
  const metadataHeaders = {
    Metadata: 'True',
    other: 'some-value',
  };
  const urlSourcedOptions: IdentityPoolClientOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      url: `${metadataBaseUrl}${metadataPath}`,
      headers: metadataHeaders,
    },
  };
  const urlSourcedOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    urlSourcedOptions,
  );
  const jsonRespUrlSourcedOptions: IdentityPoolClientOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      url: `${metadataBaseUrl}${metadataPath}`,
      headers: metadataHeaders,
      format: {
        type: 'json',
        subject_token_field_name: 'access_token',
      },
    },
  };
  const certSubjectToken = JSON.stringify([
    new X509Certificate(
      fs.readFileSync(
        './test/fixtures/external-account-cert/leaf.crt',
        'utf-8',
      ),
    ).raw.toString('base64'),
  ]);
  const certificateSourcedOptions: IdentityPoolClientOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
    token_url: getMtlsTokenUrl(),
    credential_source: {
      certificate: {
        certificate_config_location:
          './test/fixtures/external-account-cert/cert_config.json',
      },
    },
  };
  const jsonRespUrlSourcedOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    jsonRespUrlSourcedOptions,
  );
  const stsSuccessfulResponse: StsSuccessfulResponse = {
    access_token: 'ACCESS_TOKEN',
    issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    token_type: 'Bearer',
    expires_in: ONE_HOUR_IN_SECS,
    scope: 'scope1 scope2',
  };

  afterEach(() => {
    nock.cleanAll();
  });

  it('should be a subclass of BaseExternalAccountClient', () => {
    assert(IdentityPoolClient.prototype instanceof BaseExternalAccountClient);
  });

  describe('Constructor', () => {
    const invalidWorkforceIdentityPoolClientAudiences = [
      '//iam.googleapis.com/locations/global/workloadIdentityPools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcepools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools//providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/providers/oidc',
      '//iam.googleapis.com/locations/global/workloadIdentityPools/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com//locations/global/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/project/123/locations/global/workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/workloadIdentityPools/pool/providers/oidc',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers/',
      '//iam.googleapis.com/locations//workforcePools/pool/providers/oidc',
      '//iam.googleapis.com/locations/workforcePools/pool/providers/oidc',
    ];
    const invalidWorkforceIdentityPoolFileSourceOptions = Object.assign(
      {},
      fileSourcedOptionsWithWorkforceUserProject,
    );
    const expectedWorkforcePoolUserProjectError = new Error(
      'workforcePoolUserProject should not be set for non-workforce pool ' +
        'credentials.',
    );

    it('should throw when neither file or url or certificate sources are provided', () => {
      const expectedError = new Error(
        'No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.',
      );
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: {
          other: 'invalid',
        },
      };

      assert.throws(() => {
        return new IdentityPoolClient(
          invalidOptions as ReturnType<JSON['parse']>,
        );
      }, expectedError);
    });

    it('should throw when more than 1 of file, url or certificate options are provided', () => {
      const expectedError = new Error(
        'No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.',
      );
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: {
          file: 'filesource',
          url: 'urlsource.com',
        },
      };

      assert.throws(
        () =>
          new IdentityPoolClient(invalidOptions as ReturnType<JSON['parse']>),
        expectedError,
      );
    });

    it('should throw on invalid credential_source.format.type', () => {
      const expectedError = new Error('Invalid credential_source format "xml"');
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: {
          file: './test/fixtures/external-subject-token.txt',
          format: {
            type: 'xml',
          },
        },
      };

      assert.throws(() => {
        return new IdentityPoolClient(
          invalidOptions as ReturnType<JSON['parse']>,
        );
      }, expectedError);
    });

    it('should throw on required credential_source.format.subject_token_field_name', () => {
      const expectedError = new Error(
        'Missing subject_token_field_name for JSON credential_source format',
      );
      const invalidOptions: IdentityPoolClientOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: {
          file: './test/fixtures/external-subject-token.txt',
          format: {
            // json formats require the key where the subject_token is located.
            type: 'json',
          },
        },
      };

      assert.throws(() => {
        return new IdentityPoolClient(invalidOptions);
      }, expectedError);
    });

    invalidWorkforceIdentityPoolClientAudiences.forEach(
      invalidWorkforceIdentityPoolClientAudience => {
        it(`should throw given audience ${invalidWorkforceIdentityPoolClientAudience} with user project defined in IdentityPoolClientOptions`, () => {
          invalidWorkforceIdentityPoolFileSourceOptions.audience =
            invalidWorkforceIdentityPoolClientAudience;

          assert.throws(() => {
            return new IdentityPoolClient(
              invalidWorkforceIdentityPoolFileSourceOptions,
            );
          }, expectedWorkforcePoolUserProjectError);
        });
      },
    );

    it('should throw when neither a credential source or a supplier is provided', () => {
      const expectedError = new Error(
        'A credential source or subject token supplier must be specified.',
      );
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
      };

      assert.throws(() => {
        return new IdentityPoolClient(
          invalidOptions as ReturnType<JSON['parse']>,
        );
      }, expectedError);
    });

    it('should throw when both a credential source and a supplier is provided', () => {
      const expectedError = new Error(
        'Only one of credential source or subject token supplier can be specified.',
      );
      const invalidOptions = {
        type: 'external_account',
        audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: getTokenUrl(),
        credential_source: {},
        subject_token_supplier: new TestSubjectTokenSupplier({}),
      };

      assert.throws(() => {
        return new IdentityPoolClient(
          invalidOptions as ReturnType<JSON['parse']>,
        );
      }, expectedError);
    });

    it('should not throw when valid file-sourced options are provided', () => {
      assert.doesNotThrow(() => {
        return new IdentityPoolClient(fileSourcedOptions);
      });
    });

    it('should not throw when valid url-sourced options are provided', () => {
      assert.doesNotThrow(() => {
        return new IdentityPoolClient(urlSourcedOptions);
      });
    });

    it('should not throw when subject token supplier is provided', () => {
      const options = {
        audience: audience,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        subject_token_supplier: new TestSubjectTokenSupplier({}),
      };
      assert.doesNotThrow(() => {
        return new IdentityPoolClient(options);
      });
    });

    it('should not throw on headerless url-sourced options', () => {
      const urlSourcedOptionsNoHeaders = Object.assign({}, urlSourcedOptions);
      urlSourcedOptionsNoHeaders.credential_source = {
        url: urlSourcedOptions.credential_source?.url,
      };
      assert.doesNotThrow(() => {
        return new IdentityPoolClient(urlSourcedOptionsNoHeaders);
      });
    });

    it('should not throw on valid workforce audience configs', () => {
      const validWorkforceIdentityPoolClientAudiences = [
        '//iam.googleapis.com/locations/global/workforcePools/workforcePools/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/workloadPools/providers/oidc',
      ];
      const validWorkforceIdentityPoolFileSourceOptions = Object.assign(
        {},
        fileSourcedOptionsWithWorkforceUserProject,
      );
      for (const validWorkforceIdentityPoolClientAudience of validWorkforceIdentityPoolClientAudiences) {
        validWorkforceIdentityPoolFileSourceOptions.audience =
          validWorkforceIdentityPoolClientAudience;

        assert.doesNotThrow(() => {
          return new IdentityPoolClient(
            validWorkforceIdentityPoolFileSourceOptions,
          );
        });
      }
    });
  });

  describe('for file-sourced subject tokens', () => {
    describe('retrieveSubjectToken()', () => {
      it('should resolve when the text file is found', async () => {
        const client = new IdentityPoolClient(fileSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, fileSubjectToken);
      });

      it('should resolve when the json file is found', async () => {
        const client = new IdentityPoolClient(jsonFileSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, fileSubjectToken);
      });

      it('should reject when the json subject_token_field_name is not found', async () => {
        const expectedError = new Error(
          'Unable to parse the subject_token from the credential_source file',
        );
        const invalidOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          token_url: getTokenUrl(),
          credential_source: {
            file: './test/fixtures/external-subject-token.json',
            format: {
              type: 'json',
              subject_token_field_name: 'non-existent',
            },
          },
        };
        const client = new IdentityPoolClient(invalidOptions);

        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should fail when the file is not found', async () => {
        const invalidFile = fileSourcedOptionsNotFound.credential_source.file;
        const client = new IdentityPoolClient(fileSourcedOptionsNotFound);

        await assert.rejects(
          client.retrieveSubjectToken(),
          new RegExp(
            `The file at ${escapeRegExp(invalidFile)} does not exist, ` +
              'or it is not a file',
          ),
        );
      });

      it('should fail when a folder is specified', async () => {
        const invalidOptions = Object.assign({}, fileSourcedOptions);
        invalidOptions.credential_source = {
          // Specify a folder.
          file: './test/fixtures',
        };
        const invalidFile = fs.realpathSync(
          invalidOptions.credential_source.file,
        );
        const client = new IdentityPoolClient(invalidOptions);

        await assert.rejects(
          client.retrieveSubjectToken(),
          new RegExp(
            `The file at ${escapeRegExp(invalidFile)} does not exist, ` +
              'or it is not a file',
          ),
        );
      });
    });

    describe('getAccessToken()', () => {
      it('should resolve on retrieveSubjectToken success for text format', async () => {
        const scope = mockStsTokenExchange([
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
              subject_token: fileSubjectToken,
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new IdentityPoolClient(fileSourcedOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should resolve with the expected response on workforce configs with client auth', async () => {
        const scope = mockStsTokenExchange(
          [
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience:
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/oidc',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token loaded from file should be used.
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
              },
            },
          ],
          {
            authorization: `Basic ${crypto.encodeBase64StringUtf8(
              basicAuthCreds,
            )}`,
          },
        );

        const client = new IdentityPoolClient(
          fileSourcedOptionsWithClientAuthAndWorkforceUserProject,
        );
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should resolve with the expected response on workforce configs without client auth', async () => {
        const scope = mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience:
                '//iam.googleapis.com/locations/global/workforcePools/pool/providers/oidc',
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              // Subject token loaded from file should be used.
              subject_token: fileSubjectToken,
              subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
              options: JSON.stringify({
                userProject:
                  fileSourcedOptionsWithWorkforceUserProject.workforce_pool_user_project,
              }),
            },
          },
        ]);

        const client = new IdentityPoolClient(
          fileSourcedOptionsWithWorkforceUserProject,
        );
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should not throw if client auth is provided but workforce user project is not', async () => {
        const scope = mockStsTokenExchange(
          [
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience:
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/oidc',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
              },
            },
          ],
          {
            authorization: `Basic ${crypto.encodeBase64StringUtf8(
              basicAuthCreds,
            )}`,
          },
        );
        const fileSourcedOptionsWithClientAuth: IdentityPoolClientOptions =
          Object.assign(
            {},
            fileSourcedOptionsWithClientAuthAndWorkforceUserProject,
          );
        delete fileSourcedOptionsWithClientAuth.workforce_pool_user_project;

        const client = new IdentityPoolClient(fileSourcedOptionsWithClientAuth);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should still pass workforce user project when impersonation and no client auth are used', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience:
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/oidc',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
                options: JSON.stringify({
                  userProject:
                    fileSourcedOptionsWithWorkforceUserProjectAndSA.workforce_pool_user_project,
                }),
              },
            },
          ]),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new IdentityPoolClient(
          fileSourcedOptionsWithWorkforceUserProjectAndSA,
        );
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should handle service account access token for text format', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
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
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new IdentityPoolClient(fileSourcedOptionsWithSA);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should resolve on retrieveSubjectToken success for json format', async () => {
        const scope = mockStsTokenExchange([
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
              subject_token: fileSubjectToken,
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new IdentityPoolClient(jsonFileSourcedOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should handle service account access token for json format', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
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
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new IdentityPoolClient(jsonFileSourcedOptionsWithSA);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should reject with retrieveSubjectToken error', async () => {
        const invalidFile = fileSourcedOptionsNotFound.credential_source.file;
        const client = new IdentityPoolClient(fileSourcedOptionsNotFound);

        await assert.rejects(
          client.getAccessToken(),
          new RegExp(
            `The file at ${invalidFile} does not exist, or it is not a file`,
          ),
        );
      });

      it('should send the correct x-goog-api-client header value', async () => {
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
                subject_token: fileSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ],
          {
            'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
              'file',
              false,
              false,
            ),
          },
        );

        const client = new IdentityPoolClient(fileSourcedOptions);
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

  describe('for url-sourced subject tokens', () => {
    describe('retrieveSubjectToken()', () => {
      it('should resolve on text response success', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scope = nock(metadataBaseUrl, {
          reqheaders: metadataHeaders,
        })
          .get(metadataPath)
          .reply(200, externalSubjectToken);

        const client = new IdentityPoolClient(urlSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, externalSubjectToken);
        scope.done();
      });

      it('should resolve on json response success', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const jsonResponse = {
          access_token: externalSubjectToken,
        };
        const scope = nock(metadataBaseUrl, {
          reqheaders: metadataHeaders,
        })
          .get(metadataPath)
          .reply(200, jsonResponse);

        const client = new IdentityPoolClient(jsonRespUrlSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, externalSubjectToken);
        scope.done();
      });

      it('should reject when the json subject_token_field_name is not found', async () => {
        const expectedError = new Error(
          'Unable to parse the subject_token from the credential_source URL',
        );
        const invalidOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          token_url: getTokenUrl(),
          credential_source: {
            url: `${metadataBaseUrl}${metadataPath}`,
            headers: metadataHeaders,
            format: {
              type: 'json',
              subject_token_field_name: 'non-existent',
            },
          },
        };
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const jsonResponse = {
          access_token: externalSubjectToken,
        };
        const scope = nock(metadataBaseUrl, {
          reqheaders: metadataHeaders,
        })
          .get(metadataPath)
          .reply(200, jsonResponse);
        const client = new IdentityPoolClient(invalidOptions);

        await assert.rejects(client.retrieveSubjectToken(), expectedError);
        scope.done();
      });

      it('should ignore headers when not provided', async () => {
        // Create options without headers.
        const urlSourcedOptionsNoHeaders = Object.assign({}, urlSourcedOptions);
        urlSourcedOptionsNoHeaders.credential_source = {
          url: urlSourcedOptions.credential_source?.url,
        };
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scope = nock(metadataBaseUrl)
          .get(metadataPath)
          .reply(200, externalSubjectToken);

        const client = new IdentityPoolClient(urlSourcedOptionsNoHeaders);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, externalSubjectToken);
        scope.done();
      });

      it('should reject with underlying on non-200 response', async () => {
        const scope = nock(metadataBaseUrl, {
          reqheaders: metadataHeaders,
        })
          .get(metadataPath)
          .reply(404);

        const client = new IdentityPoolClient(urlSourcedOptions);

        await assert.rejects(client.retrieveSubjectToken(), {
          status: 404,
        });
        scope.done();
      });
    });

    describe('getAccessToken()', () => {
      it('should resolve on retrieveSubjectToken success for text format', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );
        scopes.push(
          nock(metadataBaseUrl, {
            reqheaders: metadataHeaders,
          })
            .get(metadataPath)
            .reply(200, externalSubjectToken),
        );

        const client = new IdentityPoolClient(urlSourcedOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should handle service account access token for text format', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          nock(metadataBaseUrl, {
            reqheaders: metadataHeaders,
          })
            .get(metadataPath)
            .reply(200, externalSubjectToken),
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new IdentityPoolClient(urlSourcedOptionsWithSA);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should resolve on retrieveSubjectToken success for json format', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const jsonResponse = {
          access_token: externalSubjectToken,
        };
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );
        scopes.push(
          nock(metadataBaseUrl, {
            reqheaders: metadataHeaders,
          })
            .get(metadataPath)
            .reply(200, jsonResponse),
        );

        const client = new IdentityPoolClient(jsonRespUrlSourcedOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should handle service account access token for json format', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const jsonResponse = {
          access_token: externalSubjectToken,
        };
        const scopes: nock.Scope[] = [];
        scopes.push(
          nock(metadataBaseUrl, {
            reqheaders: metadataHeaders,
          })
            .get(metadataPath)
            .reply(200, jsonResponse),
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new IdentityPoolClient(jsonRespUrlSourcedOptionsWithSA);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should reject with retrieveSubjectToken error', async () => {
        const scope = nock(metadataBaseUrl, {
          reqheaders: metadataHeaders,
        })
          .get(metadataPath)
          .reply(404);

        const client = new IdentityPoolClient(urlSourcedOptions);

        await assert.rejects(client.getAccessToken(), {
          status: 404,
        });
        scope.done();
      });

      it('should send the correct x-goog-api-client header value', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange(
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
                  // Subject token retrieved from url should be used.
                  subject_token: externalSubjectToken,
                  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
              },
            ],
            {
              'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
                'url',
                false,
                false,
              ),
            },
          ),
        );
        scopes.push(
          nock(metadataBaseUrl, {
            reqheaders: metadataHeaders,
          })
            .get(metadataPath)
            .reply(200, externalSubjectToken),
        );

        const client = new IdentityPoolClient(urlSourcedOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scopes.forEach(scope => scope.done());
      });
    });
  });

  describe('for supplier-sourced subject tokens', () => {
    describe('retrieveSubjectToken()', () => {
      it('should resolve when the subject token is returned', async () => {
        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          subject_token_supplier: new TestSubjectTokenSupplier({
            subjectToken: 'TestTokenValue',
          }),
        };
        const client = new IdentityPoolClient(options);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, 'TestTokenValue');
      });

      it('should return when the an error is returned', async () => {
        const expectedError = new Error('Test error from supplier.');
        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          subject_token_supplier: new TestSubjectTokenSupplier({
            error: expectedError,
          }),
        };
        const client = new IdentityPoolClient(options);

        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });
    });

    describe('getAccessToken()', () => {
      it('should resolve on retrieveSubjectToken success', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );

        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          subject_token_supplier: new TestSubjectTokenSupplier({
            subjectToken: externalSubjectToken,
          }),
        };
        const client = new IdentityPoolClient(options);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should handle service account access token', async () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
        };
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                // Subject token retrieved from url should be used.
                subject_token: externalSubjectToken,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          service_account_impersonation_url:
            getServiceAccountImpersonationUrl(),
          subject_token_supplier: new TestSubjectTokenSupplier({
            subjectToken: externalSubjectToken,
          }),
        };
        const client = new IdentityPoolClient(options);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should reject with retrieveSubjectToken error', async () => {
        const expectedError = new Error('Test error from supplier.');
        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          subject_token_supplier: new TestSubjectTokenSupplier({
            error: expectedError,
          }),
        };
        const client = new IdentityPoolClient(options);

        await assert.rejects(client.getAccessToken(), expectedError);
      });

      it('should send the correct x-goog-api-client header value', async () => {
        const externalSubjectToken = 'SUBJECT_TOKEN_1';
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange(
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
                  // Subject token retrieved from url should be used.
                  subject_token: externalSubjectToken,
                  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
              },
            ],
            {
              'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
                'programmatic',
                false,
                false,
              ),
            },
          ),
        );

        const options = {
          audience: audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          subject_token_supplier: new TestSubjectTokenSupplier({
            subjectToken: externalSubjectToken,
          }),
        };
        const client = new IdentityPoolClient(options);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scopes.forEach(scope => scope.done());
      });
    });
  });

  describe('for certificate-sourced subject tokens', () => {
    const orgCertConfigVar =
      process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      // Restore the original value after each test case.
      process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE] = orgCertConfigVar;
      sandbox.restore();
    });

    describe('retrieveSubjectToken()', () => {
      it('should resolve when a valid cert_config file is provided', async () => {
        const client = new IdentityPoolClient(certificateSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, certSubjectToken);
      });

      it('should fail when neither default location is enabled not certificate config location is provided', async () => {
        const expectedError = new InvalidConfigurationError(
          'Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.',
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {},
          },
        };
        assert.throws(() => {
          new IdentityPoolClient(certificateSourcedOptionsWrong);
        }, expectedError);
      });

      it('should fail when default location is enabled and certificate config location is provided', async () => {
        const expectedError = new InvalidConfigurationError(
          'Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.',
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              use_default_certificate_config: true,
              certificate_config_location:
                './test/fixtures/external-account-cert/cert_config.json',
            },
          },
        };
        assert.throws(() => {
          new IdentityPoolClient(certificateSourcedOptionsWrong);
        }, expectedError);
      });

      it('should throw when invalid cert_config path is provided', async () => {
        const overridePath = 'abc/efg';
        const expectedError = new CertificateSourceUnavailableError(
          `Provided certificate config path is invalid: ${overridePath}`,
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: overridePath,
            },
          },
        };
        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should check GOOGLE_API_CERTIFICATE_CONFIG path for file', async () => {
        process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE] =
          './test/fixtures/external-account-cert/cert_config.json';
        const certOptionsEnvVar: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              use_default_certificate_config: true,
            },
          },
        };
        const client = new IdentityPoolClient(certOptionsEnvVar);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, certSubjectToken);
      });

      it('should throw in case default location is enabled and invalid GOOGLE_API_CERTIFICATE_CONFIG path', async () => {
        const wrongPath = 'abc/efg';
        process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE] = wrongPath;
        const wrongCertOptionsEnvVar: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              use_default_certificate_config: true,
            },
          },
        };
        const expectedError = new CertificateSourceUnavailableError(
          `Path from environment variable "${CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${wrongPath}`,
        );
        const client = new IdentityPoolClient(wrongCertOptionsEnvVar);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should access well known certificate config location', async () => {
        const mockPath =
          './test/fixtures/external-account-cert/cert_config.json';
        process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE] = '';
        const certOptionsDefault: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              use_default_certificate_config: true,
            },
          },
        };
        const getLocationStub = sandbox.stub(
          util,
          'getWellKnownCertificateConfigFileLocation',
        );
        getLocationStub.returns(mockPath);
        const client = new IdentityPoolClient(certOptionsDefault);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, certSubjectToken);
      });

      it('should throw in case default location is enabled and well known location is invalid', async () => {
        const wrongPath = 'abc/efg';
        process.env[CERTIFICATE_CONFIGURATION_ENV_VARIABLE] = '';
        const wrongCertOptionsEnvVar: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              use_default_certificate_config: true,
            },
          },
        };
        const expectedError = new CertificateSourceUnavailableError(
          'Could not find certificate configuration file. Searched override path, ' +
            `the "${CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${wrongPath}).`,
        );

        const getLocationStub = sandbox.stub(
          util,
          'getWellKnownCertificateConfigFileLocation',
        );
        getLocationStub.returns(wrongPath);
        const client = new IdentityPoolClient(wrongCertOptionsEnvVar);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw in case cert config has missing key path', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config_missing_key_path.json';
        const expectedError = new InvalidConfigurationError(
          `Certificate config file (${certConfigPath}) is missing required "cert_path" or "key_path" in the workload config.`,
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
            },
          },
        };
        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw in case cert config has missing cert path', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config_missing_cert_path.json';
        const expectedError = new InvalidConfigurationError(
          `Certificate config file (${certConfigPath}) is missing required "cert_path" or "key_path" in the workload config.`,
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
            },
          },
        };

        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw in case cert config is empty or malformed', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config_empty.json';
        const expectedError = new RegExp(
          `Failed to parse certificate config from ${certConfigPath}`,
        );
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
            },
          },
        };

        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw if cert has invalid PEM format', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config_with_malformed_leaf_cert.json';
        const expectedError = new RegExp('Failed to read certificate file');
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
            },
          },
        };

        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw if key has invalid private key format', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config_with_malformed_key.json';
        const expectedError = new RegExp('Failed to read private key file');
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
            },
          },
        };

        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);
        await assert.rejects(client.retrieveSubjectToken(), expectedError);
      });

      it('should throw if trust chain path is invalid', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config.json';
        const certificateSourcedOptionsWrong: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
              trust_chain_path: 'abc/efg',
            },
          },
        };
        const client = new IdentityPoolClient(certificateSourcedOptionsWrong);

        await assert.rejects(
          client.retrieveSubjectToken(),
          CertificateSourceUnavailableError,
        );
      });

      it('should return subject token when leaf cert is on top of trust chain', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config.json';
        const trustChainPath =
          './test/fixtures/external-account-cert/chain_with_leaf_top.pem';
        const certificateSourcedOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
              trust_chain_path: trustChainPath,
            },
          },
        };
        const chainPems = fs.readFileSync(trustChainPath, 'utf8');
        const chainCerts =
          chainPems
            .match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g)
            ?.map(pem => new X509Certificate(pem)) ?? [];
        const expectedSubjectToken = JSON.stringify(
          chainCerts.map(cert => cert.raw.toString('base64')),
        );

        const client = new IdentityPoolClient(certificateSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, expectedSubjectToken);
      });

      it('should throw when leaf cert is in the middle of trust chain', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config.json';
        const trustChainPath =
          './test/fixtures/external-account-cert/chain_with_leaf_middle.pem';
        const certificateSourcedOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
              trust_chain_path: trustChainPath,
            },
          },
        };
        const client = new IdentityPoolClient(certificateSourcedOptions);

        await assert.rejects(
          client.retrieveSubjectToken(),
          new RegExp(
            'Leaf certificate exists in the trust chain but is not the first entry',
          ),
        );
      });

      it('should return subject token when leaf cert is not in trust chain', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config.json';
        const trustChainPath =
          './test/fixtures/external-account-cert/chain_with_no_leaf.pem';
        const certificateSourcedOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
              trust_chain_path: trustChainPath,
            },
          },
        };
        const leafCert = new X509Certificate(
          fs.readFileSync(
            './test/fixtures/external-account-cert/leaf.crt',
            'utf8',
          ),
        );
        const chainPems = fs.readFileSync(trustChainPath, 'utf8');
        const chainCerts =
          chainPems
            .match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g)
            ?.map(pem => new X509Certificate(pem)) ?? [];
        const expectedSubjectToken = JSON.stringify(
          [leafCert, ...chainCerts].map(cert => cert.raw.toString('base64')),
        );

        const client = new IdentityPoolClient(certificateSourcedOptions);
        const subjectToken = await client.retrieveSubjectToken();

        assert.deepEqual(subjectToken, expectedSubjectToken);
      });

      it('should throw when one or more certs in trust chain is malformed', async () => {
        const certConfigPath =
          './test/fixtures/external-account-cert/cert_config.json';
        const trustChainPath =
          './test/fixtures/external-account-cert/chain_with_malformed_cert.pem';
        const certificateSourcedOptions: IdentityPoolClientOptions = {
          type: 'external_account',
          audience,
          subject_token_type: 'urn:ietf:params:oauth:token-type:mtls',
          token_url: getMtlsTokenUrl(),
          credential_source: {
            certificate: {
              certificate_config_location: certConfigPath,
              trust_chain_path: trustChainPath,
            },
          },
        };
        const client = new IdentityPoolClient(certificateSourcedOptions);

        await assert.rejects(
          client.retrieveSubjectToken(),
          new RegExp(
            `Failed to parse certificate at index 0 in trust chain file ${
              trustChainPath
            }`,
          ),
        );
      });
    });
  });
});

interface TestSubjectTokenSupplierOptions {
  subjectToken?: string;
  error?: Error;
}

class TestSubjectTokenSupplier implements SubjectTokenSupplier {
  private readonly subjectToken: string;
  private readonly error?: Error;

  constructor(options: TestSubjectTokenSupplierOptions) {
    this.subjectToken = options.subjectToken ?? '';
    this.error = options.error;
  }

  getSubjectToken(): Promise<string> {
    if (this.error) {
      throw this.error;
    }
    return Promise.resolve(this.subjectToken);
  }
}
