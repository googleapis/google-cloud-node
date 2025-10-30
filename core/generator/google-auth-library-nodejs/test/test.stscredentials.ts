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
import {createCrypto} from '../src/crypto/crypto';
import {
  StsCredentials,
  StsCredentialsOptions,
  StsSuccessfulResponse,
} from '../src/auth/stscredentials';
import {
  ClientAuthentication,
  OAuthErrorResponse,
  getErrorFromOAuthErrorResponse,
} from '../src/auth/oauth2common';

nock.disableNetConnect();

describe('StsCredentials', () => {
  const crypto = createCrypto();
  const baseUrl = 'https://example.com';
  const path = '/token.oauth2';
  const tokenExchangeEndpoint = `${baseUrl}${path}`;
  const basicAuth: ClientAuthentication = {
    confidentialClientType: 'basic',
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  };
  const requestBodyAuth: ClientAuthentication = {
    confidentialClientType: 'request-body',
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  };
  // Full STS credentials options, useful to test that all supported
  // parameters are handled correctly.
  const stsCredentialsOptions: StsCredentialsOptions = {
    grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
    resource: 'https://api.example.com/',
    audience: 'urn:example:cooperation-context',
    scope: ['scope1', 'scope2'],
    requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
    subjectToken: 'HEADER.SUBJECT_TOKEN_PAYLOAD.SIGNATURE',
    subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
    actingParty: {
      actorToken: 'HEADER.ACTOR_TOKEN_PAYLOAD.SIGNATURE',
      actorTokenType: 'urn:ietf:params:oauth:token-type:jwt',
    },
  };
  // Partial STS credentials options, useful to test that optional unspecified
  // parameters are handled correctly.
  const partialStsCredentialsOptions: StsCredentialsOptions = {
    grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
    audience: 'urn:example:cooperation-context',
    requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
    subjectToken: 'HEADER.SUBJECT_TOKEN_PAYLOAD.SIGNATURE',
    subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
  };
  const stsSuccessfulResponse: StsSuccessfulResponse = {
    access_token: 'ACCESS_TOKEN',
    issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    token_type: 'Bearer',
    expires_in: 3600,
    scope: 'scope1 scope2',
  };
  const errorResponse: OAuthErrorResponse = {
    error: 'invalid_request',
    error_description: 'Invalid subject token',
    error_uri: 'https://tools.ietf.org/html/rfc6749#section-5.2',
  };

  function assertGaxiosResponsePresent(resp: StsSuccessfulResponse) {
    const gaxiosResponse = resp.res || {};
    assert('data' in gaxiosResponse && 'status' in gaxiosResponse);
  }

  function mockStsTokenExchange(
    statusCode = 200,
    response: StsSuccessfulResponse | OAuthErrorResponse,
    request: ReturnType<JSON['parse']>,
    additionalHeaders?: {[key: string]: string},
  ): nock.Scope {
    const headers = Object.assign(
      {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      additionalHeaders || {},
    );
    return nock(baseUrl)
      .post(path, request, {
        reqheaders: headers,
      })
      .reply(statusCode, response);
  }

  afterEach(() => {
    nock.cleanAll();
  });

  describe('exchangeToken()', () => {
    const additionalHeaders = {
      'x-client-version': '0.1.2',
    };
    const options = {
      additional: {
        'non-standard': ['options'],
        other: 'some-value',
      },
    };
    const expectedRequest = {
      grant_type: stsCredentialsOptions.grantType,
      resource: stsCredentialsOptions.resource,
      audience: stsCredentialsOptions.audience,
      scope: stsCredentialsOptions.scope?.join(' '),
      requested_token_type: stsCredentialsOptions.requestedTokenType,
      subject_token: stsCredentialsOptions.subjectToken,
      subject_token_type: stsCredentialsOptions.subjectTokenType,
      actor_token: stsCredentialsOptions.actingParty?.actorToken,
      actor_token_type: stsCredentialsOptions.actingParty?.actorTokenType,
      options: JSON.stringify(options),
    };
    const expectedPartialRequest = {
      grant_type: stsCredentialsOptions.grantType,
      audience: stsCredentialsOptions.audience,
      requested_token_type: stsCredentialsOptions.requestedTokenType,
      subject_token: stsCredentialsOptions.subjectToken,
      subject_token_type: stsCredentialsOptions.subjectTokenType,
    };
    const expectedRequestWithCreds = Object.assign({}, expectedRequest, {
      client_id: requestBodyAuth.clientId,
      client_secret: requestBodyAuth.clientSecret,
    });
    const expectedPartialRequestWithCreds = Object.assign(
      {},
      expectedPartialRequest,
      {
        client_id: requestBodyAuth.clientId,
        client_secret: requestBodyAuth.clientSecret,
      },
    );

    describe('without client authentication', () => {
      it('should handle successful full request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedRequest,
          additionalHeaders,
        );
        const stsCredentials = new StsCredentials(tokenExchangeEndpoint);

        const resp = await stsCredentials.exchangeToken(
          stsCredentialsOptions,
          additionalHeaders,
          options,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle successful partial request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedPartialRequest,
        );
        const stsCredentials = new StsCredentials(tokenExchangeEndpoint);

        const resp = await stsCredentials.exchangeToken(
          partialStsCredentialsOptions,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle non-200 response', async () => {
        const scope = mockStsTokenExchange(
          400,
          errorResponse,
          expectedRequest,
          additionalHeaders,
        );
        const expectedError = getErrorFromOAuthErrorResponse(errorResponse);
        const stsCredentials = new StsCredentials(tokenExchangeEndpoint);

        await assert.rejects(
          stsCredentials.exchangeToken(
            stsCredentialsOptions,
            additionalHeaders,
            options,
          ),
          expectedError,
        );
        scope.done();
      });

      it('should handle and retry on timeout', async () => {
        const scope = nock(baseUrl)
          .post(
            path,
            {...expectedRequest},
            {
              reqheaders: {
                'content-type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              },
            },
          )
          .replyWithError('ETIMEDOUT')
          .post(
            path,
            {...expectedRequest},
            {
              reqheaders: {
                'content-type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              },
            },
          )
          .reply(200, stsSuccessfulResponse);
        const stsCredentials = new StsCredentials(tokenExchangeEndpoint);

        const resp = await stsCredentials.exchangeToken(
          stsCredentialsOptions,
          additionalHeaders,
          options,
        );

        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });
    });

    describe('with basic client authentication', () => {
      const creds = `${basicAuth.clientId}:${basicAuth.clientSecret}`;
      it('should handle successful full request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedRequest,
          Object.assign(
            {
              authorization: `Basic ${crypto.encodeBase64StringUtf8(creds)}`,
            },
            additionalHeaders,
          ),
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          basicAuth,
        );

        const resp = await stsCredentials.exchangeToken(
          stsCredentialsOptions,
          additionalHeaders,
          options,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle successful partial request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedPartialRequest,
          {
            authorization: `Basic ${crypto.encodeBase64StringUtf8(creds)}`,
          },
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          basicAuth,
        );

        const resp = await stsCredentials.exchangeToken(
          partialStsCredentialsOptions,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle non-200 response', async () => {
        const expectedError = getErrorFromOAuthErrorResponse(errorResponse);
        const scope = mockStsTokenExchange(
          400,
          errorResponse,
          expectedRequest,
          Object.assign(
            {
              authorization: `Basic ${crypto.encodeBase64StringUtf8(creds)}`,
            },
            additionalHeaders,
          ),
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          basicAuth,
        );

        await assert.rejects(
          stsCredentials.exchangeToken(
            stsCredentialsOptions,
            additionalHeaders,
            options,
          ),
          expectedError,
        );
        scope.done();
      });
    });

    describe('with request-body client authentication', () => {
      it('should handle successful full request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedRequestWithCreds,
          additionalHeaders,
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          requestBodyAuth,
        );

        const resp = await stsCredentials.exchangeToken(
          stsCredentialsOptions,
          additionalHeaders,
          options,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle successful partial request', async () => {
        const scope = mockStsTokenExchange(
          200,
          stsSuccessfulResponse,
          expectedPartialRequestWithCreds,
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          requestBodyAuth,
        );

        const resp = await stsCredentials.exchangeToken(
          partialStsCredentialsOptions,
        );

        // Confirm raw GaxiosResponse appended to response.
        assertGaxiosResponsePresent(resp);
        delete resp.res;
        assert.deepStrictEqual(resp, stsSuccessfulResponse);
        scope.done();
      });

      it('should handle non-200 response', async () => {
        const expectedError = getErrorFromOAuthErrorResponse(errorResponse);
        const scope = mockStsTokenExchange(
          400,
          errorResponse,
          expectedRequestWithCreds,
          additionalHeaders,
        );
        const stsCredentials = new StsCredentials(
          tokenExchangeEndpoint,
          requestBodyAuth,
        );

        await assert.rejects(
          stsCredentials.exchangeToken(
            stsCredentialsOptions,
            additionalHeaders,
            options,
          ),
          expectedError,
        );
        scope.done();
      });
    });
  });
});
