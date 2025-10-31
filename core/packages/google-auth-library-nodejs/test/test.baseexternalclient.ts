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
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import * as sinon from 'sinon';
import {createCrypto} from '../src/crypto/crypto';
import {Credentials} from '../src/auth/credentials';
import {StsSuccessfulResponse} from '../src/auth/stscredentials';
import {
  EXPIRATION_TIME_OFFSET,
  BaseExternalAccountClient,
  BaseExternalAccountClientOptions,
} from '../src/auth/baseexternalclient';
import {
  OAuthErrorResponse,
  getErrorFromOAuthErrorResponse,
} from '../src/auth/oauth2common';
import {GaxiosError} from 'gaxios';
import {
  assertGaxiosResponsePresent,
  getAudience,
  getTokenUrl,
  getServiceAccountImpersonationUrl,
  mockCloudResourceManager,
  mockGenerateAccessToken,
  mockStsTokenExchange,
  getExpectedExternalAccountMetricsHeaderValue,
} from './externalclienthelper';
import {DEFAULT_UNIVERSE} from '../src/auth/authclient';
import {TestUtils} from './utils';
nock.disableNetConnect();

interface SampleResponse {
  foo: string;
  bar: number;
}

/** Test class to test abstract class ExternalAccountClient. */
class TestExternalAccountClient extends BaseExternalAccountClient {
  private counter = 0;

  constructor(options: BaseExternalAccountClientOptions) {
    super(options);
    this.credentialSourceType = 'test';
  }

  async retrieveSubjectToken(): Promise<string> {
    // Increment subject_token counter each time this is called.
    return `subject_token_${this.counter++}`;
  }
}

const ONE_HOUR_IN_SECS = 3600;

describe('BaseExternalAccountClient', () => {
  let clock: sinon.SinonFakeTimers;
  const crypto = createCrypto();
  const audience = getAudience();
  const externalAccountOptions = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      file: '/var/run/secrets/goog.id/token',
    },
  };
  const externalAccountOptionsNoUrl = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    credential_source: {
      file: '/var/run/secrets/goog.id/token',
    },
  };
  const externalAccountOptionsWithCreds = {
    type: 'external_account',
    audience,
    subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
    token_url: getTokenUrl(),
    credential_source: {
      file: '/var/run/secrets/goog.id/token',
    },
    client_id: 'CLIENT_ID',
    client_secret: 'SECRET',
  };
  const externalAccountOptionsWorkforceUserProject = Object.assign(
    {},
    externalAccountOptions,
    {
      workforce_pool_user_project: 'workforce_pool_user_project',
      audience:
        '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
      subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
    },
  );
  const externalAccountOptionsWithClientAuthAndWorkforceUserProject =
    Object.assign(
      {
        client_id: 'CLIENT_ID',
        client_secret: 'SECRET',
      },
      externalAccountOptionsWorkforceUserProject,
    );
  const basicAuthCreds =
    `${externalAccountOptionsWithCreds.client_id}:` +
    `${externalAccountOptionsWithCreds.client_secret}`;
  const stsSuccessfulResponse: StsSuccessfulResponse = {
    access_token: 'ACCESS_TOKEN',
    issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    token_type: 'Bearer',
    expires_in: ONE_HOUR_IN_SECS,
    scope: 'scope1 scope2',
  };
  const externalAccountOptionsWithSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    externalAccountOptions,
  );
  const externalAccountOptionsWithCredsAndSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    externalAccountOptionsWithCreds,
  );
  const externalAccountOptionsWithWorkforceUserProjectAndSA = Object.assign(
    {
      service_account_impersonation_url: getServiceAccountImpersonationUrl(),
    },
    externalAccountOptionsWorkforceUserProject,
  );
  const indeterminableProjectIdAudiences = [
    // Legacy K8s audience format.
    'identitynamespace:1f12345:my_provider',
    // Unrealistic audiences.
    '//iam.googleapis.com/projects',
    '//iam.googleapis.com/projects/',
    '//iam.googleapis.com/project/123456',
    '//iam.googleapis.com/projects//123456',
    '//iam.googleapis.com/prefix_projects/123456',
    '//iam.googleapis.com/projects_suffix/123456',
  ];

  afterEach(() => {
    nock.cleanAll();
    if (clock) {
      clock.restore();
    }
  });

  describe('Constructor', () => {
    it('should throw on invalid type', () => {
      const expectedError = new Error(
        'Expected "external_account" type but received "invalid"',
      );
      const invalidOptions = Object.assign({}, externalAccountOptions);
      invalidOptions.type = 'invalid';

      assert.throws(() => {
        return new TestExternalAccountClient(invalidOptions);
      }, expectedError);
    });

    const invalidWorkforceAudiences = [
      '//iam.googleapis.com/locations/global/workloadIdentityPools/pool/providers/provider',
      '//iam.googleapis.com/locations/global/workforcepools/pool/providers/provider',
      '//iam.googleapis.com/locations/global/workforcePools//providers/provider',
      '//iam.googleapis.com/locations/global/workforcePools/providers/provider',
      '//iam.googleapis.com/locations/global/workloadIdentityPools/workforcePools/pool/providers/provider',
      '//iam.googleapis.com//locations/global/workforcePools/pool/providers/provider',
      '//iam.googleapis.com/project/123/locations/global/workforcePools/pool/providers/provider',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers',
      '//iam.googleapis.com/locations/global/workforcePools/workloadIdentityPools/pool/providers/provider',
      '//iam.googleapis.com/locations/global/workforcePools/pool/providers/',
      '//iam.googleapis.com/locations//workforcePools/pool/providers/provider',
      '//iam.googleapis.com/locations/workforcePools/pool/providers/provider',
      '//iamAgoogleapisAcom/locations/global/workforcePools/workloadPools/providers/oidc',
    ];
    const invalidExternalAccountOptionsWorkforceUserProject = Object.assign(
      {},
      externalAccountOptionsWorkforceUserProject,
    );
    const expectedWorkforcePoolUserProjectError = new Error(
      'workforcePoolUserProject should not be set for non-workforce pool ' +
        'credentials.',
    );

    invalidWorkforceAudiences.forEach(invalidWorkforceAudience => {
      it(`should throw given audience ${invalidWorkforceAudience} with user project defined in options`, () => {
        invalidExternalAccountOptionsWorkforceUserProject.audience =
          invalidWorkforceAudience;

        assert.throws(() => {
          return new TestExternalAccountClient(
            invalidExternalAccountOptionsWorkforceUserProject,
          );
        }, expectedWorkforcePoolUserProjectError);
      });
    });

    it('should not throw on valid workforce audience configs', () => {
      const validWorkforceAudiences = [
        '//iam.googleapis.com/locations/global/workforcePools/workforcePools/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
        '//iam.googleapis.com/locations/global/workforcePools/workloadPools/providers/oidc',
      ];
      const validExternalAccountOptionsWorkforceUserProject = Object.assign(
        {},
        externalAccountOptionsWorkforceUserProject,
      );
      for (const validWorkforceAudience of validWorkforceAudiences) {
        validExternalAccountOptionsWorkforceUserProject.audience =
          validWorkforceAudience;

        assert.doesNotThrow(() => {
          return new TestExternalAccountClient(
            validExternalAccountOptionsWorkforceUserProject,
          );
        });
      }
    });

    it('should not throw on valid options', () => {
      assert.doesNotThrow(() => {
        return new TestExternalAccountClient(externalAccountOptions);
      });
    });

    it('should set default RefreshOptions', () => {
      const client = new TestExternalAccountClient(externalAccountOptions);

      assert(!client.forceRefreshOnFailure);
      assert(client.eagerRefreshThresholdMillis === EXPIRATION_TIME_OFFSET);
    });

    it('should set custom RefreshOptions', () => {
      const refreshOptions = {
        eagerRefreshThresholdMillis: 5000,
        forceRefreshOnFailure: true,
      };
      const client = new TestExternalAccountClient({
        ...externalAccountOptions,
        ...refreshOptions,
      });

      assert.strictEqual(
        client.forceRefreshOnFailure,
        refreshOptions.forceRefreshOnFailure,
      );
      assert.strictEqual(
        client.eagerRefreshThresholdMillis,
        refreshOptions.eagerRefreshThresholdMillis,
      );
    });

    it('should set default token url', async () => {
      const client = new TestExternalAccountClient(externalAccountOptionsNoUrl);
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
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      await client.getAccessToken();

      scope.done();
    });

    it('should set universe domain on default token url', async () => {
      const options: BaseExternalAccountClientOptions = {
        ...externalAccountOptionsNoUrl,
        universe_domain: 'test.com',
      };

      const client = new TestExternalAccountClient(options);

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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ],
        {},
        'https://sts.test.com',
      );

      await client.getAccessToken();

      scope.done();
    });

    it('should not duplicate access token requests for concurrent requests', async () => {
      const client = new TestExternalAccountClient(externalAccountOptionsNoUrl);
      const RESPONSE_A = {
        access_token: 'ACCESS_TOKEN',
        issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
        token_type: 'Bearer',
        expires_in: ONE_HOUR_IN_SECS,
        scope: 'scope1 scope2',
      };

      const RESPONSE_B = {
        ...RESPONSE_A,
        access_token: 'ACCESS_TOKEN_2',
      };

      const scope = mockStsTokenExchange([
        {
          statusCode: 200,
          response: RESPONSE_A,
          request: {
            grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
            audience,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            requested_token_type:
              'urn:ietf:params:oauth:token-type:access_token',
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
        {
          statusCode: 200,
          response: RESPONSE_B,
          request: {
            grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
            audience,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            requested_token_type:
              'urn:ietf:params:oauth:token-type:access_token',
            subject_token: 'subject_token_1',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      // simulate 5 concurrent requests
      const calls = [
        client.getAccessToken(),
        client.getAccessToken(),
        client.getAccessToken(),
        client.getAccessToken(),
        client.getAccessToken(),
      ];

      for (const {token} of await Promise.all(calls)) {
        assert.strictEqual(token, RESPONSE_A.access_token);
      }

      // this should be handled in a second request as the above were all awaited and we're forcing an expiration
      client.eagerRefreshThresholdMillis = RESPONSE_A.expires_in * 1000;
      assert((await client.getAccessToken()).token, RESPONSE_B.access_token);

      scope.done();
    });
  });

  describe('projectNumber', () => {
    it('should return null for workforce pools with workforce_pool_user_project', () => {
      const options = Object.assign(
        {},
        externalAccountOptionsWorkforceUserProject,
      );
      const client = new TestExternalAccountClient(options);

      assert(client.projectNumber === null);
    });

    it('should be set if determinable', () => {
      const projectNumber = 'my-proj-number';
      const options = Object.assign({}, externalAccountOptions);
      options.audience = getAudience(projectNumber);
      const client = new TestExternalAccountClient(options);

      assert.equal(client.projectNumber, projectNumber);
    });

    indeterminableProjectIdAudiences.forEach(audience => {
      it(`should resolve with null on audience=${audience}`, async () => {
        const modifiedOptions = Object.assign({}, externalAccountOptions);
        modifiedOptions.audience = audience;
        const client = new TestExternalAccountClient(modifiedOptions);

        assert(client.projectNumber === null);
      });
    });
  });

  describe('universeDomain', () => {
    it('should be the default universe if not set', () => {
      const client = new TestExternalAccountClient(externalAccountOptions);

      assert.equal(client.universeDomain, DEFAULT_UNIVERSE);
    });

    it('should be set if provided', () => {
      const universeDomain = 'my-universe.domain.com';
      const options: BaseExternalAccountClientOptions = {
        ...externalAccountOptions,
        universe_domain: universeDomain,
      };

      const client = new TestExternalAccountClient(options);

      assert.equal(client.universeDomain, universeDomain);
    });
  });

  describe('getServiceAccountEmail()', () => {
    it('should return the service account email when impersonation is used', () => {
      const saEmail = 'service-1234@service-name.iam.gserviceaccount.com';
      const saBaseUrl = 'https://iamcredentials.googleapis.com';
      const saPath = `/v1/projects/-/serviceAccounts/${saEmail}:generateAccessToken`;
      const options: BaseExternalAccountClientOptions = Object.assign(
        {},
        externalAccountOptions,
      );
      options.service_account_impersonation_url = `${saBaseUrl}${saPath}`;
      const client = new TestExternalAccountClient(options);

      assert.strictEqual(client.getServiceAccountEmail(), saEmail);
    });

    it('should return null when impersonation is not used', () => {
      const options: BaseExternalAccountClientOptions = Object.assign(
        {},
        externalAccountOptions,
      );
      delete options.service_account_impersonation_url;
      const client = new TestExternalAccountClient(options);

      assert(client.getServiceAccountEmail() === null);
    });

    it('should return null when impersonation url is malformed', () => {
      const saBaseUrl = 'https://iamcredentials.googleapis.com';
      // Malformed path (missing the service account email).
      const saPath = '/v1/projects/-/serviceAccounts/:generateAccessToken';
      const options: BaseExternalAccountClientOptions = Object.assign(
        {},
        externalAccountOptions,
      );
      options.service_account_impersonation_url = `${saBaseUrl}${saPath}`;
      const client = new TestExternalAccountClient(options);

      assert(client.getServiceAccountEmail() === null);
    });
  });

  describe('getProjectId()', () => {
    it('should resolve for workforce pools when workforce_pool_user_project is provided', async () => {
      const options = Object.assign(
        {},
        externalAccountOptionsWorkforceUserProject,
      );
      const projectNumber = options.workforce_pool_user_project;
      const projectId = 'my-proj-id';
      const response = {
        projectNumber,
        projectId,
        lifecycleState: 'ACTIVE',
        name: 'project-name',
        createTime: '2018-11-06T04:42:54.109Z',
        parent: {
          type: 'folder',
          id: '12345678901',
        },
      };
      const scopes = [
        mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience:
                '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
              options: JSON.stringify({
                userProject: options.workforce_pool_user_project,
              }),
            },
          },
        ]),
        mockCloudResourceManager(
          options.workforce_pool_user_project,
          stsSuccessfulResponse.access_token,
          200,
          response,
        ),
      ];

      const client = new TestExternalAccountClient(options);
      const actualProjectId = await client.getProjectId();

      assert.strictEqual(actualProjectId, projectId);
      assert.strictEqual(client.projectId, projectId);

      // Next call should return cached result.
      const cachedProjectId = await client.getProjectId();

      assert.strictEqual(cachedProjectId, projectId);
      scopes.forEach(scope => scope.done());
    });

    it('should resolve with projectId when determinable', async () => {
      const projectNumber = 'my-proj-number';
      const projectId = 'my-proj-id';
      const response = {
        projectNumber,
        projectId,
        lifecycleState: 'ACTIVE',
        name: 'project-name',
        createTime: '2018-11-06T04:42:54.109Z',
        parent: {
          type: 'folder',
          id: '12345678901',
        },
      };
      const options = Object.assign({}, externalAccountOptions);
      options.audience = getAudience(projectNumber);
      const scopes = [
        mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience: options.audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        mockCloudResourceManager(
          projectNumber,
          stsSuccessfulResponse.access_token,
          200,
          response,
        ),
      ];
      const client = new TestExternalAccountClient(options);

      const actualProjectId = await client.getProjectId();

      assert.strictEqual(actualProjectId, projectId);
      assert.strictEqual(client.projectId, projectId);

      // Next call should return cached result.
      const cachedProjectId = await client.getProjectId();

      assert.strictEqual(cachedProjectId, projectId);
      scopes.forEach(scope => scope.done());
    });

    it('should reject on request error', async () => {
      const projectNumber = 'my-proj-number';
      const response = {
        error: {
          code: 403,
          message: 'The caller does not have permission',
          status: 'PERMISSION_DENIED',
        },
      };
      const options = Object.assign({}, externalAccountOptions);
      options.audience = getAudience(projectNumber);
      const scopes = [
        mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience: options.audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        mockCloudResourceManager(
          projectNumber,
          stsSuccessfulResponse.access_token,
          403,
          response,
        ),
      ];
      const client = new TestExternalAccountClient(options);

      await assert.rejects(client.getProjectId(), GaxiosError);
      assert.strictEqual(client.projectId, null);
      scopes.forEach(scope => scope.done());
    });

    indeterminableProjectIdAudiences.forEach(audience => {
      it(`should resolve with null on audience=${audience}`, async () => {
        const modifiedOptions = Object.assign({}, externalAccountOptions);
        modifiedOptions.audience = audience;
        const client = new TestExternalAccountClient(modifiedOptions);

        const actualProjectId = await client.getProjectId();
        assert(actualProjectId === null);
        assert(client.projectId === null);
      });
    });
  });

  describe('getAccessToken()', () => {
    describe('without service account impersonation', () => {
      it('should resolve with the expected response', async () => {
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(externalAccountOptions);
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should use client auth over passing the workforce user project when both are provided', async () => {
        const scope = mockStsTokenExchange(
          [
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience:
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_0',
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

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithClientAuthAndWorkforceUserProject,
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

      it('should pass the workforce user project on workforce configs when client auth is not provided ', async () => {
        const scope = mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience:
                '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
              options: JSON.stringify({
                userProject:
                  externalAccountOptionsWorkforceUserProject.workforce_pool_user_project,
              }),
            },
          },
        ]);

        const client = new TestExternalAccountClient(
          externalAccountOptionsWorkforceUserProject,
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
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_0',
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
        const externalAccountOptionsWithClientAuth: BaseExternalAccountClientOptions =
          Object.assign(
            {},
            externalAccountOptionsWithClientAuthAndWorkforceUserProject,
          );
        delete externalAccountOptionsWithClientAuth.workforce_pool_user_project;

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithClientAuth,
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

      it('should return credential with no expiry date if STS response does not return one', async () => {
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        const emittedEvents: Credentials[] = [];
        delete stsSuccessfulResponse2.expires_in;

        const scope = mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse2,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithCreds,
        );
        // Listen to tokens events. On every event, push to list of
        // emittedEvents.
        client.on('tokens', tokens => {
          emittedEvents.push(tokens);
        });
        const actualResponse = await client.getAccessToken();

        // tokens event should be triggered once with expected event.
        assert.strictEqual(emittedEvents.length, 1);
        assert.deepStrictEqual(emittedEvents[0], {
          refresh_token: null,
          expiry_date: undefined,
          access_token: stsSuccessfulResponse.access_token,
          token_type: 'Bearer',
          id_token: null,
        });

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse2.access_token,
        });
        assert.deepStrictEqual(client.credentials.expiry_date, undefined);
        assert.deepStrictEqual(
          client.credentials.access_token,
          stsSuccessfulResponse2.access_token,
        );
        scope.done();
      });

      it('should handle underlying token exchange errors', async () => {
        const errorResponse: OAuthErrorResponse = {
          error: 'invalid_request',
          error_description: 'Invalid subject token',
          error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
        };
        const scope = mockStsTokenExchange([
          {
            statusCode: 400,
            response: errorResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_1',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(externalAccountOptions);
        await assert.rejects(
          client.getAccessToken(),
          getErrorFromOAuthErrorResponse(errorResponse),
        );
        // Next try should succeed.
        const actualResponse = await client.getAccessToken();
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should use explicit scopes array when provided', async () => {
        const scope = mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'scope1 scope2',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(externalAccountOptions);
        client.scopes = ['scope1', 'scope2'];
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should use explicit scopes string when provided', async () => {
        const scope = mockStsTokenExchange([
          {
            statusCode: 200,
            response: stsSuccessfulResponse,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'scope1',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(externalAccountOptions);
        client.scopes = 'scope1';
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });
        scope.done();
      });

      it('should force refresh when cached credential is expired', async () => {
        clock = TestUtils.useFakeTimers(sinon);
        const emittedEvents: Credentials[] = [];
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
        // Use different expiration time for second token to confirm tokens
        // event calculates the credentials expiry_date correctly.
        stsSuccessfulResponse2.expires_in = 1600;
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
          {
            statusCode: 200,
            response: stsSuccessfulResponse2,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_1',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        const client = new TestExternalAccountClient(externalAccountOptions);
        // Listen to tokens events. On every event, push to list of
        // emittedEvents.
        client.on('tokens', tokens => {
          emittedEvents.push(tokens);
        });
        const actualResponse = await client.getAccessToken();

        // tokens event should be triggered once with expected event.
        assert.strictEqual(emittedEvents.length, 1);
        assert.deepStrictEqual(emittedEvents[0], {
          refresh_token: null,
          expiry_date: new Date().getTime() + ONE_HOUR_IN_SECS * 1000,
          access_token: stsSuccessfulResponse.access_token,
          token_type: 'Bearer',
          id_token: null,
        });
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });

        // Try again. Cached credential should be returned.
        clock.tick(ONE_HOUR_IN_SECS * 1000 - EXPIRATION_TIME_OFFSET - 1);
        const actualCachedResponse = await client.getAccessToken();

        // No new event should be triggered since the cached access token is
        // returned.
        assert.strictEqual(emittedEvents.length, 1);
        delete actualCachedResponse.res;
        assert.deepStrictEqual(actualCachedResponse, {
          token: stsSuccessfulResponse.access_token,
        });

        // Simulate credential is expired.
        clock.tick(1);
        const actualNewCredResponse = await client.getAccessToken();

        // tokens event should be triggered again with the expected event.
        assert.strictEqual(emittedEvents.length, 2);
        assert.deepStrictEqual(emittedEvents[1], {
          refresh_token: null,
          // Second expiration time should be used.
          expiry_date:
            new Date().getTime() + stsSuccessfulResponse2.expires_in * 1000,
          access_token: stsSuccessfulResponse2.access_token,
          token_type: 'Bearer',
          id_token: null,
        });
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualNewCredResponse);
        delete actualNewCredResponse.res;
        assert.deepStrictEqual(actualNewCredResponse, {
          token: stsSuccessfulResponse2.access_token,
        });

        scope.done();
      });

      it('should respect provided eagerRefreshThresholdMillis', async () => {
        clock = TestUtils.useFakeTimers(sinon);

        const customThresh = 10 * 1000;
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
          {
            statusCode: 200,
            response: stsSuccessfulResponse2,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_1',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]);

        // Override 5min threshold with 10 second threshold.
        const client = new TestExternalAccountClient({
          ...externalAccountOptions,
          eagerRefreshThresholdMillis: customThresh,
        });
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: stsSuccessfulResponse.access_token,
        });

        // Try again. Cached credential should be returned.
        clock.tick(ONE_HOUR_IN_SECS * 1000 - customThresh - 1);
        const actualCachedResponse = await client.getAccessToken();

        delete actualCachedResponse.res;
        assert.deepStrictEqual(actualCachedResponse, {
          token: stsSuccessfulResponse.access_token,
        });

        // Simulate credential is expired.
        // As current time is equal to expirationTime - customThresh,
        // refresh should be triggered.
        clock.tick(1);
        const actualNewCredResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualNewCredResponse);
        delete actualNewCredResponse.res;
        assert.deepStrictEqual(actualNewCredResponse, {
          token: stsSuccessfulResponse2.access_token,
        });

        scope.done();
      });

      it('should apply basic auth when credentials are provided', async () => {
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ],
          {
            authorization: `Basic ${crypto.encodeBase64StringUtf8(
              basicAuthCreds,
            )}`,
          },
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithCreds,
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

      it('should send the correct x-goog-api-client header', async () => {
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ],
          {
            'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
              'test',
              false,
              false,
            ),
          },
        );

        const client = new TestExternalAccountClient(externalAccountOptions);
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

    describe('with service account impersonation', () => {
      const now = new Date().getTime();
      const saSuccessResponse = {
        accessToken: 'SA_ACCESS_TOKEN',
        expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
      };
      const saErrorResponse = {
        error: {
          code: 400,
          message: 'Request contains an invalid argument',
          status: 'INVALID_ARGUMENT',
        },
      };

      it('should resolve with the expected response', async () => {
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
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

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSA,
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

      it('should handle underlying GenerateAccessToken errors', async () => {
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
            {
              statusCode: 200,
              response: stsSuccessfulResponse2,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_1',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: saErrorResponse.error.code,
            response: saErrorResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse2.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSA,
        );
        await assert.rejects(client.getAccessToken(), GaxiosError);
        // Next try should succeed.
        const actualResponse = await client.getAccessToken();
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should use explicit scopes array when provided', async () => {
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['scope1', 'scope2'],
          }),
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSA,
        );
        // These scopes should be used for the iamcredentials call.
        // https://www.googleapis.com/auth/cloud-platform should be used for the
        // STS token exchange request.
        client.scopes = ['scope1', 'scope2'];
        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });
        scopes.forEach(scope => scope.done());
      });

      it('should force refresh when cached credential is expired', async () => {
        clock = TestUtils.useFakeTimers(sinon);
        const emittedEvents: Credentials[] = [];
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
        saSuccessResponse.expireTime = new Date(
          ONE_HOUR_IN_SECS * 1000,
        ).toISOString();
        const saSuccessResponse2 = Object.assign({}, saSuccessResponse);
        saSuccessResponse2.accessToken = 'SA_ACCESS_TOKEN2';
        const customExpirationInSecs = 1600;
        saSuccessResponse2.expireTime = new Date(
          (ONE_HOUR_IN_SECS + customExpirationInSecs) * 1000,
        ).toISOString();
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
            {
              statusCode: 200,
              response: stsSuccessfulResponse2,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_1',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
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
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse2,
            token: stsSuccessfulResponse2.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSA,
        );
        // Listen to tokens events. On every event, push to list of
        // emittedEvents.
        client.on('tokens', tokens => {
          emittedEvents.push(tokens);
        });
        const actualResponse = await client.getAccessToken();

        // tokens event should be triggered once with expected event.
        assert.strictEqual(emittedEvents.length, 1);
        assert.deepStrictEqual(emittedEvents[0], {
          refresh_token: null,
          expiry_date: ONE_HOUR_IN_SECS * 1000,
          access_token: saSuccessResponse.accessToken,
          token_type: 'Bearer',
          id_token: null,
        });
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });

        // Try again. Cached credential should be returned.
        clock.tick(ONE_HOUR_IN_SECS * 1000 - EXPIRATION_TIME_OFFSET - 1);
        const actualCachedResponse = await client.getAccessToken();

        // No new event should be triggered since the cached access token is
        // returned.
        assert.strictEqual(emittedEvents.length, 1);
        delete actualCachedResponse.res;
        assert.deepStrictEqual(actualCachedResponse, {
          token: saSuccessResponse.accessToken,
        });

        // Simulate credential is expired.
        clock.tick(1);
        const actualNewCredResponse = await client.getAccessToken();

        // tokens event should be triggered again with the expected event.
        assert.strictEqual(emittedEvents.length, 2);
        assert.deepStrictEqual(emittedEvents[1], {
          refresh_token: null,
          // Second expiration time should be used.
          expiry_date: (ONE_HOUR_IN_SECS + customExpirationInSecs) * 1000,
          access_token: saSuccessResponse2.accessToken,
          token_type: 'Bearer',
          id_token: null,
        });
        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualNewCredResponse);
        delete actualNewCredResponse.res;
        assert.deepStrictEqual(actualNewCredResponse, {
          token: saSuccessResponse2.accessToken,
        });

        scopes.forEach(scope => scope.done());
      });

      it('should respect provided eagerRefreshThresholdMillis', async () => {
        clock = TestUtils.useFakeTimers(sinon);
        const customThresh = 10 * 1000;
        const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
        stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
        saSuccessResponse.expireTime = new Date(
          ONE_HOUR_IN_SECS * 1000,
        ).toISOString();
        const saSuccessResponse2 = Object.assign({}, saSuccessResponse);
        saSuccessResponse2.accessToken = 'SA_ACCESS_TOKEN2';
        saSuccessResponse2.expireTime = new Date(
          2 * ONE_HOUR_IN_SECS * 1000,
        ).toISOString();

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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
            {
              statusCode: 200,
              response: stsSuccessfulResponse2,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience,
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_1',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
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
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse2,
            token: stsSuccessfulResponse2.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        // Override 5min threshold with 10 second threshold.
        const client = new TestExternalAccountClient({
          ...externalAccountOptionsWithSA,
          eagerRefreshThresholdMillis: customThresh,
        });

        const actualResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualResponse);
        delete actualResponse.res;
        assert.deepStrictEqual(actualResponse, {
          token: saSuccessResponse.accessToken,
        });

        // Try again. Cached credential should be returned.
        clock.tick(ONE_HOUR_IN_SECS * 1000 - customThresh - 1);
        const actualCachedResponse = await client.getAccessToken();

        delete actualCachedResponse.res;
        assert.deepStrictEqual(actualCachedResponse, {
          token: saSuccessResponse.accessToken,
        });

        // Simulate credential is expired.
        // As current time is equal to expirationTime - customThresh,
        // refresh should be triggered.
        clock.tick(1);
        const actualNewCredResponse = await client.getAccessToken();

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(actualNewCredResponse);
        delete actualNewCredResponse.res;
        assert.deepStrictEqual(actualNewCredResponse, {
          token: saSuccessResponse2.accessToken,
        });

        scopes.forEach(scope => scope.done());
      });

      it('should apply basic auth when credentials are provided', async () => {
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
                  subject_token: 'subject_token_0',
                  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
              },
            ],
            {
              authorization: `Basic ${crypto.encodeBase64StringUtf8(
                basicAuthCreds,
              )}`,
            },
          ),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithCredsAndSA,
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

      it('should still pass workforce user project when no client auth is used', async () => {
        const scopes: nock.Scope[] = [];
        scopes.push(
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience:
                  '//iam.googleapis.com/locations/global/workforcePools/pool/providers/provider',
                scope: 'https://www.googleapis.com/auth/cloud-platform',
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
                options: JSON.stringify({
                  userProject:
                    externalAccountOptionsWithWorkforceUserProjectAndSA.workforce_pool_user_project,
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

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithWorkforceUserProjectAndSA,
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

      it('should use provided token lifespan', async () => {
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
                subject_token: 'subject_token_0',
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
              },
            },
          ]),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            lifetime: 2800,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const externalAccountOptionsWithSATokenLifespan = Object.assign(
          {
            service_account_impersonation: {
              token_lifetime_seconds: 2800,
            },
          },
          externalAccountOptionsWithSA,
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSATokenLifespan,
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

      it('should send correct x-goog-api-client header', async () => {
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
                  subject_token: 'subject_token_0',
                  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
              },
            ],
            {
              'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
                'test',
                true,
                false,
              ),
            },
          ),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSA,
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

      it('should set correct x-goog-api-client header for custom token lifetime', async () => {
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
                  subject_token: 'subject_token_0',
                  subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                },
              },
            ],
            {
              'x-goog-api-client': getExpectedExternalAccountMetricsHeaderValue(
                'test',
                true,
                true,
              ),
            },
          ),
        );
        scopes.push(
          mockGenerateAccessToken({
            statusCode: 200,
            response: saSuccessResponse,
            token: stsSuccessfulResponse.access_token,
            lifetime: 2800,
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          }),
        );

        const externalAccountOptionsWithSATokenLifespan = Object.assign(
          {
            service_account_impersonation: {
              token_lifetime_seconds: 2800,
            },
          },
          externalAccountOptionsWithSA,
        );

        const client = new TestExternalAccountClient(
          externalAccountOptionsWithSATokenLifespan,
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
    });
  });

  describe('getRequestHeaders()', () => {
    it('should inject the authorization headers', async () => {
      const expectedHeaders = new Headers({
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      });
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
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      const client = new TestExternalAccountClient(externalAccountOptions);
      const actualHeaders = await client.getRequestHeaders();

      assert.deepStrictEqual(actualHeaders, expectedHeaders);
      scope.done();
    });

    it('should inject service account access token in headers', async () => {
      const now = new Date().getTime();
      const saSuccessResponse = {
        accessToken: 'SA_ACCESS_TOKEN',
        expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
      };
      const expectedHeaders = new Headers({
        authorization: `Bearer ${saSuccessResponse.accessToken}`,
      });
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
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

      const client = new TestExternalAccountClient(
        externalAccountOptionsWithSA,
      );
      const actualHeaders = await client.getRequestHeaders();

      assert.deepStrictEqual(actualHeaders, expectedHeaders);
      scopes.forEach(scope => scope.done());
    });

    it('should inject the authorization and metadata headers', async () => {
      const quotaProjectId = 'QUOTA_PROJECT_ID';
      const expectedHeaders = new Headers({
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
        'x-goog-user-project': quotaProjectId,
      });
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
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: quotaProjectId},
        externalAccountOptions,
      );
      const client = new TestExternalAccountClient(optionsWithQuotaProjectId);
      const actualHeaders = await client.getRequestHeaders();

      assert.deepStrictEqual(expectedHeaders, actualHeaders);
      scope.done();
    });

    it('should reject when error occurs during token retrieval', async () => {
      const errorResponse: OAuthErrorResponse = {
        error: 'invalid_request',
        error_description: 'Invalid subject token',
        error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
      };
      const scope = mockStsTokenExchange([
        {
          statusCode: 400,
          response: errorResponse,
          request: {
            grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
            audience,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            requested_token_type:
              'urn:ietf:params:oauth:token-type:access_token',
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      const client = new TestExternalAccountClient(externalAccountOptions);
      await assert.rejects(
        client.getRequestHeaders(),
        getErrorFromOAuthErrorResponse(errorResponse),
      );
      scope.done();
    });
  });

  describe('request()', () => {
    it('should process HTTP request with authorization header', async () => {
      const quotaProjectId = 'QUOTA_PROJECT_ID';
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
        'x-goog-user-project': quotaProjectId,
      };
      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: quotaProjectId},
        externalAccountOptions,
      );
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse: SampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new TestExternalAccountClient(optionsWithQuotaProjectId);
      const actualResponse = await client.request<SampleResponse>({
        url: 'https://example.com/api',
        method: 'POST',
        headers: exampleHeaders,
        data: exampleRequest,
      });

      assert.deepStrictEqual(actualResponse.data, exampleResponse);
      scopes.forEach(scope => scope.done());
    });

    it('should inject service account access token in headers', async () => {
      const now = new Date().getTime();
      const saSuccessResponse = {
        accessToken: 'SA_ACCESS_TOKEN',
        expireTime: new Date(now + ONE_HOUR_IN_SECS * 1000).toISOString(),
      };
      const quotaProjectId = 'QUOTA_PROJECT_ID';
      const authHeaders = {
        authorization: `Bearer ${saSuccessResponse.accessToken}`,
        'x-goog-user-project': quotaProjectId,
      };
      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: quotaProjectId},
        externalAccountOptionsWithSA,
      );
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse: SampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
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
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new TestExternalAccountClient(optionsWithQuotaProjectId);
      const actualResponse = await client.request<SampleResponse>({
        url: 'https://example.com/api',
        method: 'POST',
        headers: exampleHeaders,
        data: exampleRequest,
      });

      assert.deepStrictEqual(actualResponse.data, exampleResponse);
      scopes.forEach(scope => scope.done());
    });

    it('should process headerless HTTP request', async () => {
      const quotaProjectId = 'QUOTA_PROJECT_ID';
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
        'x-goog-user-project': quotaProjectId,
      };
      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: quotaProjectId},
        externalAccountOptions,
      );
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse: SampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new TestExternalAccountClient(optionsWithQuotaProjectId);
      // Send request with no headers.
      const actualResponse = await client.request<SampleResponse>({
        url: 'https://example.com/api',
        method: 'POST',
        data: exampleRequest,
      });

      assert.deepStrictEqual(actualResponse.data, exampleResponse);
      scopes.forEach(scope => scope.done());
    });

    it('should reject when error occurs during token retrieval', async () => {
      const errorResponse: OAuthErrorResponse = {
        error: 'invalid_request',
        error_description: 'Invalid subject token',
        error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const scope = mockStsTokenExchange([
        {
          statusCode: 400,
          response: errorResponse,
          request: {
            grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
            audience,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            requested_token_type:
              'urn:ietf:params:oauth:token-type:access_token',
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      const client = new TestExternalAccountClient(externalAccountOptions);
      await assert.rejects(
        client.request<SampleResponse>({
          url: 'https://example.com/api',
          method: 'POST',
          data: exampleRequest,
        }),
        getErrorFromOAuthErrorResponse(errorResponse),
      );
      scope.done();
    });

    it('should trigger callback on success when provided', done => {
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse: SampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new TestExternalAccountClient(externalAccountOptions);
      client.request<SampleResponse>(
        {
          url: 'https://example.com/api',
          method: 'POST',
          headers: exampleHeaders,
          data: exampleRequest,
        },
        (err, result) => {
          assert.strictEqual(err, null);
          assert.deepStrictEqual(result?.data, exampleResponse);
          scopes.forEach(scope => scope.done());
          done();
        },
      );
    });

    it('should trigger callback on error when provided', done => {
      const errorMessage = 'Bad Request';
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(400, errorMessage),
      ];

      const client = new TestExternalAccountClient(externalAccountOptions);
      client.request<SampleResponse>(
        {
          url: 'https://example.com/api',
          method: 'POST',
          headers: exampleHeaders,
          data: exampleRequest,
        },
        err => {
          assert(err instanceof GaxiosError);
          assert.equal(err.status, 400);

          scopes.forEach(scope => scope.done());
          done();
        },
      );
    });

    it('should retry on 401 on forceRefreshOnFailure=true', async () => {
      const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
      stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      };
      const authHeaders2 = {
        authorization: `Bearer ${stsSuccessfulResponse2.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse: SampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
          {
            statusCode: 200,
            response: stsSuccessfulResponse2,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_1',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(401),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders2),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new TestExternalAccountClient({
        ...externalAccountOptions,
        forceRefreshOnFailure: true,
      });
      const actualResponse = await client.request<SampleResponse>({
        url: 'https://example.com/api',
        method: 'POST',
        headers: exampleHeaders,
        data: exampleRequest,
      });

      assert.deepStrictEqual(actualResponse.data, exampleResponse);
      scopes.forEach(scope => scope.done());
    });

    it('should not retry on 401 on forceRefreshOnFailure=false', async () => {
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(401),
      ];

      const client = new TestExternalAccountClient(externalAccountOptions);
      await assert.rejects(
        client.request<SampleResponse>({
          url: 'https://example.com/api',
          method: 'POST',
          headers: exampleHeaders,
          data: exampleRequest,
        }),
        {
          status: 401,
        },
      );

      scopes.forEach(scope => scope.done());
    });

    it('should not retry more than once', async () => {
      const stsSuccessfulResponse2 = Object.assign({}, stsSuccessfulResponse);
      stsSuccessfulResponse2.access_token = 'ACCESS_TOKEN2';
      const authHeaders = {
        authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
      };
      const authHeaders2 = {
        authorization: `Bearer ${stsSuccessfulResponse2.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
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
              subject_token: 'subject_token_0',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
          {
            statusCode: 200,
            response: stsSuccessfulResponse2,
            request: {
              grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
              audience,
              scope: 'https://www.googleapis.com/auth/cloud-platform',
              requested_token_type:
                'urn:ietf:params:oauth:token-type:access_token',
              subject_token: 'subject_token_1',
              subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(403),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders2),
        })
          .post('/api', exampleRequest)
          .reply(403),
      ];

      const client = new TestExternalAccountClient({
        ...externalAccountOptions,
        forceRefreshOnFailure: true,
      });
      await assert.rejects(
        client.request<SampleResponse>({
          url: 'https://example.com/api',
          method: 'POST',
          headers: exampleHeaders,
          data: exampleRequest,
        }),
        {
          status: 403,
        },
      );

      scopes.forEach(scope => scope.done());
    });
  });

  describe('setCredentials()', () => {
    it('should allow injection of GCP access tokens directly', async () => {
      clock = TestUtils.useFakeTimers(sinon);
      const credentials = {
        access_token: 'INJECTED_ACCESS_TOKEN',
        // Simulate token expires in 10mins.
        expiry_date: new Date().getTime() + 10 * 60 * 1000,
      };
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
            subject_token: 'subject_token_0',
            subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
          },
        },
      ]);

      const client = new TestExternalAccountClient(externalAccountOptions);
      client.setCredentials(credentials);

      clock.tick(10 * 60 * 1000 - EXPIRATION_TIME_OFFSET - 1);
      const tokenResponse = await client.getAccessToken();
      assert.deepStrictEqual(tokenResponse.token, credentials.access_token);

      // Simulate token expired.
      clock.tick(1);
      const refreshedTokenResponse = await client.getAccessToken();
      assert.deepStrictEqual(
        refreshedTokenResponse.token,
        stsSuccessfulResponse.access_token,
      );

      scope.done();
    });

    it('should not expire injected creds with no expiry_date', async () => {
      clock = TestUtils.useFakeTimers(sinon);
      const credentials = {
        access_token: 'INJECTED_ACCESS_TOKEN',
      };

      const client = new TestExternalAccountClient(externalAccountOptions);
      client.setCredentials(credentials);

      const tokenResponse = await client.getAccessToken();
      assert.deepStrictEqual(tokenResponse.token, credentials.access_token);

      clock.tick(ONE_HOUR_IN_SECS);
      const unexpiredTokenResponse = await client.getAccessToken();
      assert.deepStrictEqual(
        unexpiredTokenResponse.token,
        credentials.access_token,
      );
    });
  });
});
