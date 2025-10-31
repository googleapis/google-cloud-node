// Copyright 2023 Google LLC
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
import {describe, it, afterEach, beforeEach} from 'mocha';
import * as nock from 'nock';
import * as sinon from 'sinon';
import * as qs from 'querystring';
import {assertGaxiosResponsePresent, getAudience} from './externalclienthelper';
import {
  EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE,
  ExternalAccountAuthorizedUserClient,
  ExternalAccountAuthorizedUserClientOptions,
} from '../src/auth/externalAccountAuthorizedUserClient';
import {EXPIRATION_TIME_OFFSET} from '../src/auth/baseexternalclient';
import {GaxiosError, GaxiosResponse} from 'gaxios';
import {
  getErrorFromOAuthErrorResponse,
  OAuthErrorResponse,
} from '../src/auth/oauth2common';
import {DEFAULT_UNIVERSE} from '../src/auth/authclient';
import {TestUtils} from './utils';

nock.disableNetConnect();

describe('ExternalAccountAuthorizedUserClient', () => {
  const BASE_URL = 'https://sts.googleapis.com';
  const REFRESH_PATH = '/v1/oauthtoken';
  const TOKEN_REFRESH_URL = `${BASE_URL}${REFRESH_PATH}`;
  const TOKEN_INFO_URL = `${BASE_URL}/v1/introspect`;

  interface TokenRefreshResponse {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
    res?: GaxiosResponse | null;
  }

  interface NockMockRefreshResponse {
    statusCode: number;
    response: TokenRefreshResponse | OAuthErrorResponse;
    request: ReturnType<JSON['parse']>;
    times?: number;
  }

  function mockStsTokenRefresh(
    url: string,
    path: string,
    nockParams: NockMockRefreshResponse[],
    additionalHeaders?: {[key: string]: string},
  ): nock.Scope {
    const headers = Object.assign(
      {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      additionalHeaders || {},
    );
    const scope = nock(url, {
      reqheaders: headers,
    });

    nockParams.forEach(nockMockStsToken => {
      const times =
        nockMockStsToken.times !== undefined ? nockMockStsToken.times : 1;
      scope
        .post(path, qs.stringify(nockMockStsToken.request))
        .times(times)
        .reply(nockMockStsToken.statusCode, nockMockStsToken.response);
    });
    return scope;
  }

  let clock: sinon.SinonFakeTimers;
  const referenceDate = new Date('2020-08-11T06:55:22.345Z');
  const audience = getAudience();
  const externalAccountAuthorizedUserCredentialOptions = {
    type: EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE,
    audience: audience,
    client_id: 'clientId',
    client_secret: 'clientSecret',
    refresh_token: 'refreshToken',
    token_url: TOKEN_REFRESH_URL,
    token_info_url: TOKEN_INFO_URL,
  } as ExternalAccountAuthorizedUserClientOptions;
  const externalAccountAuthorizedUserCredentialOptionsNoToken = {
    type: EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE,
    audience: audience,
    client_id: 'clientId',
    client_secret: 'clientSecret',
    refresh_token: 'refreshToken',
    token_info_url: TOKEN_INFO_URL,
  } as ExternalAccountAuthorizedUserClientOptions;
  const successfulRefreshResponse = {
    access_token: 'newAccessToken',
    refresh_token: 'newRefreshToken',
    expires_in: 3600,
  };
  const successfulRefreshResponseNoRefreshToken = {
    access_token: 'newAccessToken',
    expires_in: 3600,
  };
  beforeEach(() => {
    clock = TestUtils.useFakeTimers(sinon, referenceDate);
  });

  afterEach(() => {
    nock.cleanAll();
    if (clock) {
      clock.restore();
    }
  });

  describe('Constructor', () => {
    it('should not throw when valid options are provided', () => {
      assert.doesNotThrow(() => {
        return new ExternalAccountAuthorizedUserClient(
          externalAccountAuthorizedUserCredentialOptions,
        );
      });
    });

    it('should set default RefreshOptions', () => {
      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );

      assert(!client.forceRefreshOnFailure);
      assert(client.eagerRefreshThresholdMillis === EXPIRATION_TIME_OFFSET);
    });

    it('should set default token url', async () => {
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptionsNoToken,
      );
      await client.getAccessToken();
      scope.done();
    });

    it('should set universe domain token url', async () => {
      const scope = mockStsTokenRefresh('https://sts.test.com', REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);
      const client = new ExternalAccountAuthorizedUserClient({
        ...externalAccountAuthorizedUserCredentialOptionsNoToken,
        universe_domain: 'test.com',
      });
      await client.getAccessToken();
      scope.done();
    });

    it('should set custom RefreshOptions', () => {
      const refreshOptions = {
        eagerRefreshThresholdMillis: 5000,
        forceRefreshOnFailure: true,
      };
      const client = new ExternalAccountAuthorizedUserClient({
        ...externalAccountAuthorizedUserCredentialOptions,
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

    describe('universeDomain', () => {
      it('should be the default universe if not set', () => {
        const client = new ExternalAccountAuthorizedUserClient(
          externalAccountAuthorizedUserCredentialOptions,
        );

        assert.equal(client.universeDomain, DEFAULT_UNIVERSE);
      });

      it('should be set if provided', () => {
        const universeDomain = 'my-universe.domain.com';
        const client = new ExternalAccountAuthorizedUserClient({
          ...externalAccountAuthorizedUserCredentialOptions,
          universe_domain: universeDomain,
        });

        assert.equal(client.universeDomain, universeDomain);
      });
    });
  });

  describe('getAccessToken()', () => {
    it('should resolve with the expected response', async () => {
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      const actualResponse = await client.getAccessToken();
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: successfulRefreshResponse.access_token,
      });
      scope.done();
    });

    it('should handle refresh errors', async () => {
      const errorResponse: OAuthErrorResponse = {
        error: 'invalid_request',
        error_description: 'Invalid refresh token',
        error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
      };

      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 400,
          response: errorResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      await assert.rejects(
        client.getAccessToken(),
        getErrorFromOAuthErrorResponse(errorResponse),
      );
      scope.done();
    });

    it('should handle and retry on timeout', async () => {
      // we need timers/`setTimeout` for this test
      clock.restore();

      const expectedRequest = {
        grant_type: 'refresh_token',
        refresh_token: 'refreshToken',
      };

      const scope = nock(BASE_URL, {
        reqheaders: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .post(REFRESH_PATH, expectedRequest)
        .replyWithError('ETIMEOUT')
        .post(REFRESH_PATH, expectedRequest)
        .reply(200, successfulRefreshResponse);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );

      const actualResponse = await client.getAccessToken();
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: successfulRefreshResponse.access_token,
      });
      scope.done();
    });

    it('should use the new refresh token', async () => {
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token:
              externalAccountAuthorizedUserCredentialOptions.refresh_token,
          },
        },
        {
          statusCode: 200,
          response: successfulRefreshResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: successfulRefreshResponse.refresh_token,
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      // Get initial access token and new refresh token.
      await client.getAccessToken();
      // Advance clock to force new refresh.
      clock.tick((successfulRefreshResponse.expires_in + 1) * 1000);
      // Refresh access token with new access token.
      const actualResponse = await client.getAccessToken();
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: successfulRefreshResponse.access_token,
      });

      scope.done();
    });

    it('should not call refresh when token is cached', async () => {
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponseNoRefreshToken,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      // Get initial access token and new refresh token.
      await client.getAccessToken();
      // Advance clock to force new refresh.
      clock.tick(
        successfulRefreshResponseNoRefreshToken.expires_in * 1000 -
          client.eagerRefreshThresholdMillis -
          1,
      );
      // Refresh access token with new access token.
      const actualResponse = await client.getAccessToken();
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: successfulRefreshResponse.access_token,
      });

      scope.done();
    });

    it('should refresh when cached token is expired', async () => {
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponseNoRefreshToken,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
          times: 2,
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      // Get initial access token.
      await client.getAccessToken();
      // Advance clock to force new refresh.
      clock.tick(
        successfulRefreshResponseNoRefreshToken.expires_in * 1000 -
          client.eagerRefreshThresholdMillis +
          1,
      );
      // Refresh access token with new access token.
      const actualResponse = await client.getAccessToken();
      assertGaxiosResponsePresent(actualResponse);
      delete actualResponse.res;
      assert.deepStrictEqual(actualResponse, {
        token: successfulRefreshResponse.access_token,
      });

      scope.done();
    });
  });

  describe('getRequestHeaders()', () => {
    it('should inject the authorization headers', async () => {
      const expectedHeaders = new Headers({
        authorization: `Bearer ${successfulRefreshResponseNoRefreshToken.access_token}`,
        'x-goog-user-project': 'quotaProjectId',
      });
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 200,
          response: successfulRefreshResponseNoRefreshToken,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: 'quotaProjectId'},
        externalAccountAuthorizedUserCredentialOptions,
      );
      const client = new ExternalAccountAuthorizedUserClient(
        optionsWithQuotaProjectId,
      );
      const actualHeaders = await client.getRequestHeaders();

      assert.deepStrictEqual(actualHeaders, expectedHeaders);
      scope.done();
    });

    it('should reject when error occurs during token retrieval', async () => {
      const errorResponse: OAuthErrorResponse = {
        error: 'invalid_request',
        error_description: 'Invalid subject token',
        error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
      };
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 400,
          response: errorResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
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
        authorization: `Bearer ${successfulRefreshResponse.access_token}`,
        'x-goog-user-project': quotaProjectId,
      };
      const optionsWithQuotaProjectId = Object.assign(
        {quota_project_id: quotaProjectId},
        externalAccountAuthorizedUserCredentialOptions,
      );
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new ExternalAccountAuthorizedUserClient(
        optionsWithQuotaProjectId,
      );
      const actualResponse = await client.request<Object>({
        url: 'https://example.com/api',
        method: 'POST',
        headers: exampleHeaders,
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
      const scope = mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
        {
          statusCode: 400,
          response: errorResponse,
          request: {
            grant_type: 'refresh_token',
            refresh_token: 'refreshToken',
          },
        },
      ]);

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      await assert.rejects(
        client.request<Object>({
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
        authorization: `Bearer ${successfulRefreshResponse.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      client.request<Object>(
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
        authorization: `Bearer ${successfulRefreshResponse.access_token}`,
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
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(400, errorMessage),
      ];

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      client.request<Object>(
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
      const authHeaders = {
        authorization: `Bearer ${successfulRefreshResponseNoRefreshToken.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const exampleHeaders = {
        custom: 'some-header-value',
        other: 'other-header-value',
      };
      const scopes = [
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
            times: 2,
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(401),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new ExternalAccountAuthorizedUserClient({
        ...externalAccountAuthorizedUserCredentialOptions,
        forceRefreshOnFailure: true,
      });
      const actualResponse = await client.request<Object>({
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
        authorization: `Bearer ${successfulRefreshResponse.access_token}`,
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
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponse,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(401),
      ];

      const client = new ExternalAccountAuthorizedUserClient({
        ...externalAccountAuthorizedUserCredentialOptions,
        forceRefreshOnFailure: false,
      });
      await assert.rejects(
        client.request<Object>({
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
      const authHeaders = {
        authorization: `Bearer ${successfulRefreshResponseNoRefreshToken.access_token}`,
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
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
            times: 2,
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(403),
        nock('https://example.com', {
          reqheaders: Object.assign({}, exampleHeaders, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(403),
      ];

      const client = new ExternalAccountAuthorizedUserClient({
        ...externalAccountAuthorizedUserCredentialOptions,
        forceRefreshOnFailure: true,
      });
      await assert.rejects(
        client.request<Object>({
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

    it('should process headerless HTTP request', async () => {
      const authHeaders = {
        authorization: `Bearer ${successfulRefreshResponse.access_token}`,
      };
      const exampleRequest = {
        key1: 'value1',
        key2: 'value2',
      };
      const exampleResponse = {
        foo: 'a',
        bar: 1,
      };
      const scopes = [
        mockStsTokenRefresh(BASE_URL, REFRESH_PATH, [
          {
            statusCode: 200,
            response: successfulRefreshResponseNoRefreshToken,
            request: {
              grant_type: 'refresh_token',
              refresh_token: 'refreshToken',
            },
          },
        ]),
        nock('https://example.com', {
          reqheaders: Object.assign({}, authHeaders),
        })
          .post('/api', exampleRequest)
          .reply(200, Object.assign({}, exampleResponse)),
      ];

      const client = new ExternalAccountAuthorizedUserClient(
        externalAccountAuthorizedUserCredentialOptions,
      );
      // Send request with no headers.
      const actualResponse = await client.request<Object>({
        url: 'https://example.com/api',
        method: 'POST',
        data: exampleRequest,
      });

      assert.deepStrictEqual(actualResponse.data, exampleResponse);
      scopes.forEach(scope => scope.done());
    });
  });
});
