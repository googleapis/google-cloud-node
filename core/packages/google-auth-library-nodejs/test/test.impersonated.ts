/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import * as nock from 'nock';
import {describe, it, afterEach} from 'mocha';
import {Impersonated, JWT, UserRefreshClient} from '../src';
import {CredentialRequest} from '../src/auth/credentials';

const PEM_PATH = './test/fixtures/private.pem';

nock.disableNetConnect();

const url = 'http://example.com';

function createGTokenMock(body: CredentialRequest) {
  return nock('https://oauth2.googleapis.com').post('/token').reply(200, body);
}

function createSampleJWTClient() {
  const jwt = new JWT({
    email: 'foo@serviceaccount.com',
    keyFile: PEM_PATH,
    scopes: ['http://bar', 'http://foo'],
    subject: 'bar@subjectaccount.com',
  });

  return jwt;
}

interface ImpersonatedCredentialRequest {
  delegates: string[];
  scope: string[];
  lifetime: string;
}

describe('impersonated', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should request impersonated credentials on first request', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      nock(url).get('/').reply(200),
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          (body: ImpersonatedCredentialRequest) => {
            assert.strictEqual(body.lifetime, '30s');
            assert.deepStrictEqual(body.delegates, []);
            assert.deepStrictEqual(body.scope, [
              'https://www.googleapis.com/auth/cloud-platform',
            ]);
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty345',
          expireTime: tomorrow.toISOString(),
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    await impersonated.request({url});
    assert.strictEqual(impersonated.credentials.access_token, 'qwerty345');
    assert.strictEqual(
      impersonated.credentials.expiry_date,
      tomorrow.getTime(),
    );
    scopes.forEach(s => s.done());
  });

  it('should inherit a `universeDomain` from the source client', async () => {
    const universeDomain = 'my.universe.com';

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const scopes = [
      nock(url).get('/').reply(200),
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock(`https://iamcredentials.${universeDomain}`)
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          (body: ImpersonatedCredentialRequest) => {
            assert.strictEqual(body.lifetime, '30s');
            assert.deepStrictEqual(body.delegates, []);
            assert.deepStrictEqual(body.scope, [
              'https://www.googleapis.com/auth/cloud-platform',
            ]);
            return true;
          },
        )
        .reply(200, {
          accessToken: 'universe-token',
          expireTime: tomorrow.toISOString(),
        }),
    ];

    const sourceClient = createSampleJWTClient();

    // Use a simple API key for this test. No need to get too fancy.
    sourceClient.apiKey = 'ABC';
    delete sourceClient.subject;

    sourceClient.universeDomain = universeDomain;

    const impersonated = new Impersonated({
      sourceClient,
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    await impersonated.request({url});
    assert.strictEqual(impersonated.credentials.access_token, 'universe-token');

    scopes.forEach(s => s.done());
  });

  it("should throw if an explicit `universeDomain` does not equal the source's `universeDomain`", async () => {
    const universeDomain = 'my.universe.com';
    const otherUniverseDomain = 'not-my.universe.com';

    const sourceClient = createSampleJWTClient();
    sourceClient.universeDomain = otherUniverseDomain;

    assert.throws(() => {
      new Impersonated({
        sourceClient,
        targetPrincipal: 'target@project.iam.gserviceaccount.com',
        lifetime: 30,
        delegates: [],
        targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
        universeDomain,
      });
    }, /does not match/);
  });

  it('should not request impersonated credentials on second request', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      nock(url).get('/').reply(200),
      nock(url).get('/').reply(200),
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          (body: ImpersonatedCredentialRequest) => {
            assert.strictEqual(body.lifetime, '30s');
            assert.deepStrictEqual(body.delegates, []);
            assert.deepStrictEqual(body.scope, [
              'https://www.googleapis.com/auth/cloud-platform',
            ]);
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty345',
          expireTime: tomorrow.toISOString(),
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    await impersonated.request({url});
    await impersonated.request({url});
    assert.strictEqual(impersonated.credentials.access_token, 'qwerty345');
    assert.strictEqual(
      impersonated.credentials.expiry_date,
      tomorrow.getTime(),
    );
    scopes.forEach(s => s.done());
  });

  it('should request impersonated credentials once new credentials expire', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      nock(url).get('/').reply(200),
      nock(url).get('/').reply(200),
      createGTokenMock({
        access_token: 'abc123',
      }),
      createGTokenMock({
        access_token: 'abc456',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          () => {
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty345',
          expireTime: tomorrow.toISOString(),
        }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          () => {
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty456',
          expireTime: tomorrow.toISOString(),
        }),
    ];
    const jwt = createSampleJWTClient();
    const impersonated = new Impersonated({
      sourceClient: jwt,
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    await impersonated.request({url});
    // Force both the wrapped and impersonated client to appear to have
    // expired:
    jwt.credentials.expiry_date = Date.now();
    impersonated.credentials.expiry_date = Date.now();
    await impersonated.request({url});
    assert.strictEqual(impersonated.credentials.access_token, 'qwerty456');
    assert.strictEqual(
      impersonated.credentials.expiry_date,
      tomorrow.getTime(),
    );
    scopes.forEach(s => s.done());
  });

  it('handles authenticating with UserRefreshClient as sourceClient', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      nock(url).get('/').reply(200),
      nock('https://oauth2.googleapis.com').post('/token').reply(200, {
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          (body: ImpersonatedCredentialRequest) => {
            assert.strictEqual(body.lifetime, '30s');
            assert.deepStrictEqual(body.delegates, []);
            assert.deepStrictEqual(body.scope, [
              'https://www.googleapis.com/auth/cloud-platform',
            ]);
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty345',
          expireTime: tomorrow.toISOString(),
        }),
    ];

    const source_client = new UserRefreshClient({
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
      refreshToken: 'REFRESH_TOKEN',
    });
    const impersonated = new Impersonated({
      sourceClient: source_client,
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    await impersonated.request({url});
    assert.strictEqual(impersonated.credentials.access_token, 'qwerty345');
    assert.strictEqual(
      impersonated.credentials.expiry_date,
      tomorrow.getTime(),
    );
    scopes.forEach(s => s.done());
  });

  it('throws meaningful error when context available', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
        )
        .reply(404, {
          error: {
            code: 404,
            message: 'Requested entity was not found.',
            status: 'NOT_FOUND',
          },
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    impersonated.credentials.access_token = 'initial-access-token';
    impersonated.credentials.expiry_date = Date.now() - 10000;
    await assert.rejects(impersonated.request({url}), /NOT_FOUND/);
    scopes.forEach(s => s.done());
  });

  it('handles errors without context', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
        )
        .reply(500),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    impersonated.credentials.access_token = 'initial-access-token';
    impersonated.credentials.expiry_date = Date.now() - 10000;
    await assert.rejects(impersonated.request({url}), /unable to impersonate/);
    scopes.forEach(s => s.done());
  });

  it('handles error authenticating sourceClient', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      nock('https://oauth2.googleapis.com').post('/token').reply(401),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    await assert.rejects(impersonated.request({url}), /unable to impersonate/);
    scopes.forEach(s => s.done());
  });

  it('should populate request headers', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
          (body: ImpersonatedCredentialRequest) => {
            assert.strictEqual(body.lifetime, '30s');
            assert.deepStrictEqual(body.delegates, []);
            assert.deepStrictEqual(body.scope, [
              'https://www.googleapis.com/auth/cloud-platform',
            ]);
            return true;
          },
        )
        .reply(200, {
          accessToken: 'qwerty345',
          expireTime: tomorrow.toISOString(),
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: [],
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    impersonated.credentials.access_token = 'initial-access-token';
    impersonated.credentials.expiry_date = Date.now() - 10000;
    const headers = await impersonated.getRequestHeaders();
    assert.strictEqual(headers.get('authorization'), 'Bearer qwerty345');
    assert.strictEqual(
      impersonated.credentials.expiry_date,
      tomorrow.getTime(),
    );
    scopes.forEach(s => s.done());
  });

  it('should fetch an OpenID Connect ID token w/ `includeEmail` by default', async () => {
    const expectedToken = 'OpenID-Connect-ID-token';
    const expectedAudience = 'sample-audience';
    const expectedDeligates = ['deligate-1', 'deligate-2'];
    const expectedIncludeEmail = true;

    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateIdToken',
          (body: {
            delegates: string[];
            audience: string;
            includeEmail: boolean;
            useEmailAzp: true;
          }) => {
            assert.strictEqual(body.audience, expectedAudience);
            assert.strictEqual(body.includeEmail, expectedIncludeEmail);
            assert.deepStrictEqual(body.delegates, expectedDeligates);
            assert.strictEqual(body.useEmailAzp, true);
            return true;
          },
        )
        .reply(200, {
          token: expectedToken,
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: expectedDeligates,
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const token = await impersonated.fetchIdToken(expectedAudience);

    assert.equal(token, expectedToken);

    scopes.forEach(s => s.done());
  });

  it('should fetch an OpenID Connect ID token with desired options', async () => {
    const expectedToken = 'OpenID-Connect-ID-token';
    const expectedAudience = 'sample-audience';
    const expectedDeligates = ['deligate-1', 'deligate-2'];
    const expectedIncludeEmail = false;

    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateIdToken',
          (body: {
            delegates: string[];
            audience: string;
            includeEmail: boolean;
          }) => {
            assert.strictEqual(body.audience, expectedAudience);
            assert.strictEqual(body.includeEmail, expectedIncludeEmail);
            assert.deepStrictEqual(body.delegates, expectedDeligates);
            return true;
          },
        )
        .reply(200, {
          token: expectedToken,
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: 'target@project.iam.gserviceaccount.com',
      lifetime: 30,
      delegates: expectedDeligates,
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const token = await impersonated.fetchIdToken(expectedAudience, {
      includeEmail: expectedIncludeEmail,
    });

    assert.equal(token, expectedToken);

    scopes.forEach(s => s.done());
  });

  it('should sign a blob', async () => {
    const expectedKeyID = '12345';
    const expectedSignedBlob = 'signed';
    const expectedBlobToSign = 'signme';
    const expectedDeligates = ['deligate-1', 'deligate-2'];
    const email = 'target@project.iam.gserviceaccount.com';

    const scopes = [
      createGTokenMock({
        access_token: 'abc123',
      }),
      nock('https://iamcredentials.googleapis.com')
        .post(
          `/v1/projects/-/serviceAccounts/${email}:signBlob`,
          (body: {delegates: string[]; payload: string}) => {
            assert.strictEqual(
              body.payload,
              Buffer.from(expectedBlobToSign).toString('base64'),
            );
            assert.deepStrictEqual(body.delegates, expectedDeligates);
            return true;
          },
        )
        .reply(200, {
          keyId: expectedKeyID,
          signedBlob: expectedSignedBlob,
        }),
    ];

    const impersonated = new Impersonated({
      sourceClient: createSampleJWTClient(),
      targetPrincipal: email,
      lifetime: 30,
      delegates: expectedDeligates,
      targetScopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const resp = await impersonated.sign(expectedBlobToSign);
    assert.equal(email, impersonated.getTargetPrincipal());
    assert.equal(resp.keyId, expectedKeyID);
    assert.equal(resp.signedBlob, expectedSignedBlob);
    scopes.forEach(s => s.done());
  });
});
