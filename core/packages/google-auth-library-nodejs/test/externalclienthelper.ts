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
import * as nock from 'nock';
import {GetAccessTokenResponse} from '../src/auth/authclient';
import {OAuthErrorResponse} from '../src/auth/oauth2common';
import {StsSuccessfulResponse} from '../src/auth/stscredentials';
import {
  IamGenerateAccessTokenResponse,
  ProjectInfo,
} from '../src/auth/baseexternalclient';

import {pkg} from '../src/shared.cjs';

interface CloudRequestError {
  error: {
    code: number;
    message: string;
    status: string;
  };
}

interface NockMockStsToken {
  statusCode: number;
  response: StsSuccessfulResponse | OAuthErrorResponse;
  request: {[key: string]: ReturnType<JSON['parse']>};
}

interface NockMockGenerateAccessToken {
  statusCode: number;
  token: string;
  response: IamGenerateAccessTokenResponse | CloudRequestError;
  scopes: string[];
  lifetime?: number;
}

const defaultLifetime = 3600;
const defaultProjectNumber = '123456';
const poolId = 'POOL_ID';
const providerId = 'PROVIDER_ID';
const baseUrl = 'https://sts.googleapis.com';
const baseMtlsUrl = 'https://sts.mtls.googleapis.com';
const path = '/v1/token';
export const saEmail = 'service-1234@service-name.iam.gserviceaccount.com';
const saBaseUrl = 'https://iamcredentials.googleapis.com';
const saPath = `/v1/projects/-/serviceAccounts/${saEmail}:generateAccessToken`;

export function mockStsTokenExchange(
  nockParams: NockMockStsToken[],
  additionalHeaders?: {[key: string]: string},
  baseURL = baseUrl,
): nock.Scope {
  const headers = Object.assign(
    {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    additionalHeaders || {},
  );
  const scope = nock(baseURL, {reqheaders: headers});
  nockParams.forEach(nockMockStsToken => {
    scope
      .post(path, nockMockStsToken.request)
      .reply(nockMockStsToken.statusCode, nockMockStsToken.response);
  });
  return scope;
}

export function mockGenerateAccessToken(
  nockMockGenerateAccessToken: NockMockGenerateAccessToken,
): nock.Scope {
  const token = nockMockGenerateAccessToken.token;
  const scope = nock(saBaseUrl, {
    reqheaders: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
  });
  scope
    .post(saPath, {
      scope: nockMockGenerateAccessToken.scopes,
      lifetime: (nockMockGenerateAccessToken.lifetime ?? defaultLifetime) + 's',
    })
    .reply(
      nockMockGenerateAccessToken.statusCode,
      nockMockGenerateAccessToken.response,
    );
  return scope;
}

export function getAudience(
  projectNumber: string = defaultProjectNumber,
): string {
  return (
    `//iam.googleapis.com/projects/${projectNumber}` +
    `/locations/global/workloadIdentityPools/${poolId}/` +
    `providers/${providerId}`
  );
}

export function getTokenUrl(): string {
  return `${baseUrl}${path}`;
}

export function getMtlsTokenUrl(): string {
  return `${baseMtlsUrl}${path}`;
}

export function getServiceAccountImpersonationUrl(): string {
  return `${saBaseUrl}${saPath}`;
}

export function assertGaxiosResponsePresent(resp: GetAccessTokenResponse) {
  const gaxiosResponse = resp.res || {};
  assert('data' in gaxiosResponse && 'status' in gaxiosResponse);
}

export function mockCloudResourceManager(
  projectNumber: string,
  accessToken: string,
  statusCode: number,
  response: ProjectInfo | CloudRequestError,
): nock.Scope {
  return nock('https://cloudresourcemanager.googleapis.com', {
    reqheaders: {authorization: `Bearer ${accessToken}`},
  })
    .get(`/v1/projects/${projectNumber}`)
    .reply(statusCode, response);
}

export function getExpectedExternalAccountMetricsHeaderValue(
  expectedSource: string,
  expectedSaImpersonation: boolean,
  expectedConfigLifetime: boolean,
): string {
  const languageVersion = process.version.replace(/^v/, '');
  return `gl-node/${languageVersion} auth/${pkg.version} google-byoid-sdk source/${expectedSource} sa-impersonation/${expectedSaImpersonation} config-lifetime/${expectedConfigLifetime}`;
}
