// Copyright 2014 Google LLC
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as child_process from 'child_process';
import * as crypto from 'crypto';
import {CredentialRequest} from '../src/auth/credentials';
import * as fs from 'fs';
import {
  BASE_PATH,
  HEADERS,
  HOST_ADDRESS,
  SECONDARY_HOST_ADDRESS,
  resetIsAvailableCache,
} from 'gcp-metadata';
import * as gcpMetadata from 'gcp-metadata';
import * as nock from 'nock';
import * as os from 'os';
import * as path from 'path';
import * as sinon from 'sinon';

import {
  GoogleAuth,
  JWT,
  UserRefreshClient,
  IdTokenClient,
  ExternalAccountClient,
  OAuth2Client,
  ExternalAccountClientOptions,
  Impersonated,
  IdentityPoolClient,
  PassThroughClient,
  AnyAuthClient,
} from '../src';
import {CredentialBody} from '../src/auth/credentials';
import * as envDetect from '../src/auth/envDetect';
import {Compute} from '../src/auth/computeclient';
import {
  getServiceAccountImpersonationUrl,
  mockCloudResourceManager,
  mockGenerateAccessToken,
  mockStsTokenExchange,
  saEmail,
} from './externalclienthelper';
import {
  BaseExternalAccountClient,
  EXTERNAL_ACCOUNT_TYPE,
} from '../src/auth/baseexternalclient';
import {AuthClient, DEFAULT_UNIVERSE} from '../src/auth/authclient';
import {ExternalAccountAuthorizedUserClient} from '../src/auth/externalAccountAuthorizedUserClient';
import {stringify} from 'querystring';
import {GoogleAuthExceptionMessages} from '../src/auth/googleauth';
import {IMPERSONATED_ACCOUNT_TYPE} from '../src/auth/impersonated';
import {USER_REFRESH_ACCOUNT_TYPE} from '../src/auth/refreshclient';
import {Gaxios, GaxiosError, GaxiosPromise, GaxiosResponse} from 'gaxios';

nock.disableNetConnect();

describe('googleauth', () => {
  const isWindows = process.platform === 'win32';

  const tokenPath = `${BASE_PATH}/instance/service-accounts/default/token`;
  const host = HOST_ADDRESS;
  const instancePath = `${BASE_PATH}/instance`;
  const svcAccountPath = `${instancePath}/service-accounts/default/email`;
  const universeDomainPath = `${BASE_PATH}/universe/universe-domain`;
  const API_KEY = 'test-123';
  const PEM_PATH = './test/fixtures/private.pem';
  const STUB_PROJECT = 'my-awesome-project';
  const ENDPOINT = '/events:report';
  const RESPONSE_BODY = 'RESPONSE_BODY';
  const BASE_URL = [
    'https://clouderrorreporting.googleapis.com/v1beta1/projects',
    STUB_PROJECT,
  ].join('/');

  const privateJSON = require('../../test/fixtures/private.json');
  const private2JSON = require('../../test/fixtures/private2.json');
  const refreshJSON = require('../../test/fixtures/refresh.json');
  const externalAccountJSON = require('../../test/fixtures/external-account-cred.json');
  const externalAccountAuthorizedUserJSON = require('../../test/fixtures/external-account-authorized-user-cred.json');
  const privateKey = fs.readFileSync('./test/fixtures/private.pem', 'utf-8');
  const wellKnownPathWindows = path.join(
    'C:',
    'fake',
    'home',
    'gcloud',
    'application_default_credentials.json',
  );
  const wellKnownPathLinux = path.join(
    '/',
    'fake',
    'user',
    '.config',
    'gcloud',
    'application_default_credentials.json',
  );
  function createGTokenMock(body: CredentialRequest) {
    return nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, body);
  }

  describe('googleauth', () => {
    let auth: GoogleAuth;
    const sandbox = sinon.createSandbox();
    let osStub: sinon.SinonStub<[], NodeJS.Platform>;
    let exposeWindowsWellKnownFile: boolean;
    let exposeLinuxWellKnownFile: boolean;
    let createLinuxWellKnownStream: Function;
    let createWindowsWellKnownStream: Function;
    beforeEach(() => {
      resetIsAvailableCache();
      auth = new GoogleAuth();
      exposeWindowsWellKnownFile = false;
      exposeLinuxWellKnownFile = false;
      createLinuxWellKnownStream = () => {
        throw new Error();
      };
      createWindowsWellKnownStream = () => {
        throw new Error();
      };
      const envVars = Object.assign({}, process.env, {
        GCLOUD_PROJECT: undefined,
        GOOGLE_APPLICATION_CREDENTIALS: undefined,
        google_application_credentials: undefined,
        GOOGLE_CLOUD_QUOTA_PROJECT: undefined,
        HOME: path.join('/', 'fake', 'user'),
      });
      sandbox.stub(process, 'env').value(envVars);
      osStub = sandbox.stub(os, 'platform').returns('linux');
      sandbox
        .stub(fs, 'existsSync')
        .callThrough()
        .withArgs(wellKnownPathLinux)
        .callsFake(() => exposeLinuxWellKnownFile)
        .withArgs(wellKnownPathWindows)
        .callsFake(() => exposeWindowsWellKnownFile);

      sandbox
        .stub(fs, 'createReadStream')
        .callThrough()
        .withArgs(wellKnownPathLinux)
        .callsFake(() => createLinuxWellKnownStream())
        .withArgs(wellKnownPathWindows)
        .callsFake(() => createWindowsWellKnownStream());

      sandbox
        .stub(fs, 'realpathSync')
        .callThrough()
        .withArgs(wellKnownPathLinux)
        .returnsArg(0)
        .withArgs(wellKnownPathWindows)
        .returnsArg(0);

      sandbox
        .stub(child_process, 'exec')
        .callThrough()
        .withArgs('gcloud config config-helper --format json', sinon.match.func)
        .callsArgWith(1, null, '', null);

      const fakeStat = {isFile: () => true} as fs.Stats;
      sandbox
        .stub(fs, 'lstatSync')
        .callThrough()
        .withArgs(wellKnownPathLinux)
        .returns(fakeStat)
        .withArgs(wellKnownPathWindows)
        .returns(fakeStat);
    });

    afterEach(() => {
      nock.cleanAll();
      sandbox.restore();
    });

    function mockWindows() {
      osStub.returns('win32');
      process.env.HOME = '';
      process.env.APPDATA = path.join('C:', 'fake', 'home');
    }

    function mockWindowsWellKnownFile() {
      exposeWindowsWellKnownFile = true;
      createWindowsWellKnownStream = () =>
        fs.createReadStream('./test/fixtures/private2.json');
    }

    function mockLinuxWellKnownFile(
      filePath = './test/fixtures/private2.json',
    ) {
      exposeLinuxWellKnownFile = true;
      createLinuxWellKnownStream = () => fs.createReadStream(filePath);
    }

    function nockIsGCE(opts = {universeDomain: 'my-universe.com'}) {
      const primary = nock(host).get(instancePath).reply(200, {}, HEADERS);
      const secondary = nock(SECONDARY_HOST_ADDRESS)
        .get(instancePath)
        .reply(200, {}, HEADERS);
      const universeDomain = nock(HOST_ADDRESS)
        .get(universeDomainPath)
        .reply(200, opts.universeDomain, HEADERS);

      return {
        done: () => {
          return Promise.allSettled([
            (async () => primary.done())(),
            (async () => secondary.done())(),
            (async () => universeDomain.done())(),
          ]);
        },
      };
    }

    function nockNotGCE() {
      const primary = nock(host)
        .get(instancePath)
        .replyWithError({code: 'ENOTFOUND'});
      const secondary = nock(SECONDARY_HOST_ADDRESS)
        .get(instancePath)
        .replyWithError({code: 'ENOTFOUND'});
      return {
        done: () => {
          try {
            primary.done();
            secondary.done();
          } catch (_err) {
            // secondary can sometimes complete prior to primary.
          }
        },
      };
    }

    function createGetProjectIdNock(projectId = 'not-real') {
      return nock(host)
        .get(`${BASE_PATH}/project/project-id`)
        .reply(200, projectId, HEADERS);
    }

    // Creates a standard JSON auth object for testing.
    function createJwtJSON() {
      return {
        private_key_id: 'key123',
        private_key: 'privatekey',
        client_email: 'hello@youarecool.com',
        client_id: 'client123',
        type: 'service_account',
      };
    }

    // Pretend that we're GCE, and mock an access token.
    function mockGCE() {
      const scope1 = nockIsGCE();
      const auth = new GoogleAuth();
      sinon
        .stub(auth as ReturnType<JSON['parse']>, 'getDefaultServiceProjectId')
        .resolves();
      const scope2 = nock(HOST_ADDRESS)
        .get(tokenPath)
        .reply(200, {access_token: 'abc123', expires_in: 10000}, HEADERS);
      return {auth, scopes: [scope1, scope2]};
    }

    // Intercepts the specified environment variable, returning the specified
    // value.
    function mockEnvVar(name: string, value = '') {
      const envVars = Object.assign({}, process.env, {[name]: value});
      return sandbox.stub(process, 'env').value(envVars);
    }

    describe('types', () => {
      it('should be type-compatible with itself by default', () => {
        class CustomAuthClient extends AuthClient {
          request<T>(): GaxiosPromise<T> {
            throw new Error('Method not implemented.');
          }
          getRequestHeaders(): Promise<Headers> {
            throw new Error('Method not implemented.');
          }
          getAccessToken(): Promise<{
            token?: string | null;
            res?: GaxiosResponse | null;
          }> {
            throw new Error('Method not implemented.');
          }
        }

        // default > default
        const defaultToDefault: GoogleAuth = new GoogleAuth();

        // Explicit > default
        const explicitToDefault: GoogleAuth =
          new GoogleAuth<PassThroughClient>();

        // custom > default
        const customToDefault: GoogleAuth = new GoogleAuth<CustomAuthClient>();

        // AnyAuthClient > default
        const anyToDefault: GoogleAuth = new GoogleAuth<AnyAuthClient>();

        // default > AnyAuthClient
        const defaultToAny: GoogleAuth<AnyAuthClient> = new GoogleAuth();

        // AuthClient > AnyAuthClient
        const baseClientToAny: GoogleAuth<AnyAuthClient> =
          new GoogleAuth<AuthClient>();

        assert(defaultToDefault);
        assert(explicitToDefault);
        assert(customToDefault);
        assert(anyToDefault);
        assert(defaultToAny);
        assert(baseClientToAny);
      });
    });

    it('should accept and use an `AuthClient`', async () => {
      const customRequestHeaders = new Headers({
        'my-unique': 'header',
      });

      // Using a custom `AuthClient` to ensure any `AuthClient` would work
      class MyAuthClient extends AuthClient {
        async getAccessToken() {
          return {token: '', res: undefined};
        }

        async getRequestHeaders() {
          return Gaxios.mergeHeaders({...customRequestHeaders});
        }

        request = OAuth2Client.prototype.request.bind(this);
      }

      const authClient = new MyAuthClient();

      const auth = new GoogleAuth({authClient});

      assert.equal(auth.cachedCredential, authClient);
      assert.equal(await auth.getClient(), authClient);
      assert.deepEqual(await auth.getRequestHeaders(''), customRequestHeaders);
    });

    it('should accept and use an `apiKey`', async () => {
      const apiKey = 'myKey';
      const auth = new GoogleAuth({apiKey});
      const client = await auth.getClient();

      assert.equal(client.apiKey, apiKey);
      assert.deepEqual(
        await auth.getRequestHeaders(),
        new Headers({
          'X-Goog-Api-Key': apiKey,
        }),
      );
    });

    it('should not accept both an `apiKey` and `credentials`', async () => {
      const apiKey = 'myKey';
      assert.throws(
        () =>
          new GoogleAuth({
            credentials: {},
            // API key should supported via `clientOptions`
            clientOptions: {apiKey},
          }),
        new RangeError(GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS),
      );
    });

    it('fromJSON should support the instantiated named export', () => {
      const result = auth.fromJSON(createJwtJSON());
      assert(result);
    });

    it('fromJson should error on null json', () => {
      const auth = new GoogleAuth();
      assert.throws(() => {
        // Test verifies invalid parameter tests, which requires cast to any.
        (auth as ReturnType<JSON['parse']>).fromJSON(null);
      });
    });

    it('fromJson should not overwrite previous client configuration', async () => {
      const auth = new GoogleAuth({
        keyFilename: './test/fixtures/private.json',
      });
      auth.fromJSON({
        client_email: 'batman@example.com',
        private_key: 'abc123',
      });
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.email, 'hello@youarecool.com');
    });

    it('should make a request with the api key', async () => {
      const scope = nock(BASE_URL)
        .post(ENDPOINT)
        .reply(function () {
          assert.strictEqual(this.req.headers['x-goog-api-key'], API_KEY);
          return [200, RESPONSE_BODY];
        });
      const client = auth.fromAPIKey(API_KEY);
      const res = await client.request({
        url: BASE_URL + ENDPOINT,
        method: 'POST',
        data: {test: true},
      });
      assert.strictEqual(RESPONSE_BODY, res.data);
      scope.done();
    });

    it('should put the api key in the headers', async () => {
      const client = auth.fromAPIKey(API_KEY);
      const headers = await client.getRequestHeaders();
      assert.strictEqual(headers.get('X-Goog-Api-Key'), API_KEY);
    });

    it('should make a request while preserving original parameters', async () => {
      const OTHER_QS_PARAM = {test: 'abc'};
      const scope = nock(BASE_URL)
        .post(ENDPOINT)
        .query({test: OTHER_QS_PARAM.test})
        .reply(function (uri) {
          assert.strictEqual(this.req.headers['x-goog-api-key'], API_KEY);
          assert(uri.indexOf('test=' + OTHER_QS_PARAM.test) > -1);
          return [200, RESPONSE_BODY];
        });
      const client = auth.fromAPIKey(API_KEY);
      const res = await client.request({
        url: BASE_URL + ENDPOINT,
        method: 'POST',
        data: {test: true},
        params: OTHER_QS_PARAM,
      });
      assert.strictEqual(RESPONSE_BODY, res.data);
      scope.done();
    });

    it('should make client with eagerRetryThresholdMillis set', () => {
      const client = auth.fromAPIKey(API_KEY, {
        eagerRefreshThresholdMillis: 100,
      });
      assert.strictEqual(100, client.eagerRefreshThresholdMillis);
    });

    it('fromJSON should error on empty json', () => {
      const auth = new GoogleAuth();
      assert.throws(() => {
        auth.fromJSON({});
      });
    });

    it('fromJSON should error on missing client_email', () => {
      const json = createJwtJSON();
      delete (json as Partial<typeof json>).client_email;
      assert.throws(() => {
        auth.fromJSON(json);
      });
    });

    it('fromJSON should error on missing private_key', () => {
      const json = createJwtJSON();
      delete (json as Partial<typeof json>).private_key;
      assert.throws(() => {
        auth.fromJSON(json);
      });
    });

    it('fromJSON should create JWT with client_email', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(json.client_email, (result as JWT).email);
    });

    it('fromJSON should create JWT with private_key', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(json.private_key, (result as JWT).key);
    });

    it('fromJSON should set useJWTAccessWithScope with private key', () => {
      auth.useJWTAccessWithScope = true;
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.ok((result as JWT).useJWTAccessWithScope);
    });

    it('fromJSON should set default service path with private key', () => {
      auth.defaultServicePath = 'a/b/c';
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual((result as JWT).defaultServicePath, 'a/b/c');
    });

    it('fromJSON should create JWT with null scopes', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(undefined, (result as JWT).scopes);
    });
    it('fromJSON should set useJWTAccessWithScope with private key', () => {
      auth.useJWTAccessWithScope = true;
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.ok((result as JWT).useJWTAccessWithScope);
    });

    it('fromJSON should set default service path with private key', () => {
      auth.defaultServicePath = 'a/b/c';
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual((result as JWT).defaultServicePath, 'a/b/c');
    });

    it('fromJSON should create JWT with null subject', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(undefined, (result as JWT).subject);
    });

    it('fromJSON should create JWT with null keyFile', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(undefined, (result as JWT).keyFile);
    });

    it('fromJSON should create JWT which eagerRefreshThresholdMillisset when this is set for GoogleAuth', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json, {eagerRefreshThresholdMillis: 5000});
      assert.strictEqual(5000, (result as JWT).eagerRefreshThresholdMillis);
    });

    it('fromJSON should create JWT with 5min as value for eagerRefreshThresholdMillis', () => {
      const json = createJwtJSON();
      const result = auth.fromJSON(json);
      assert.strictEqual(300000, (result as JWT).eagerRefreshThresholdMillis);
    });

    it('fromStream should error on null stream', done => {
      // Test verifies invalid parameter tests, which requires cast to any.
      (auth as ReturnType<JSON['parse']>).fromStream(null, (err: Error) => {
        assert.strictEqual(true, err instanceof Error);
        done();
      });
    });

    it('fromStream should read the stream and create a jwt', async () => {
      const stream = fs.createReadStream('./test/fixtures/private.json');
      const res = await auth.fromStream(stream);
      const jwt = res as JWT;
      // Ensure that the correct bits were pulled from the stream.
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
    });

    it('fromStream should read the stream and create a jwt with eager refresh', async () => {
      const stream = fs.createReadStream('./test/fixtures/private.json');
      const auth = new GoogleAuth();
      const result = await auth.fromStream(stream, {
        eagerRefreshThresholdMillis: 1000 * 60 * 60,
      });
      const jwt = result as JWT;
      // Ensure that the correct bits were pulled from the stream.
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
      assert.strictEqual(1000 * 60 * 60, jwt.eagerRefreshThresholdMillis);
    });

    it('should read another stream and create a UserRefreshClient', async () => {
      const stream = fs.createReadStream('./test/fixtures/refresh.json');
      const auth = new GoogleAuth();
      const res = await auth.fromStream(stream);
      // Ensure that the correct bits were pulled from the stream.
      const rc = res as UserRefreshClient;
      assert.strictEqual(refreshJSON.client_id, rc._clientId);
      assert.strictEqual(refreshJSON.client_secret, rc._clientSecret);
      assert.strictEqual(refreshJSON.refresh_token, rc._refreshToken);
    });

    it('should read another stream and create a UserRefreshClient with eager refresh', async () => {
      const stream = fs.createReadStream('./test/fixtures/refresh.json');
      const auth = new GoogleAuth();
      const result = await auth.fromStream(stream, {
        eagerRefreshThresholdMillis: 100,
      });
      // Ensure that the correct bits were pulled from the stream.
      const rc = result as UserRefreshClient;
      assert.strictEqual(refreshJSON.client_id, rc._clientId);
      assert.strictEqual(refreshJSON.client_secret, rc._clientSecret);
      assert.strictEqual(refreshJSON.refresh_token, rc._refreshToken);
      assert.strictEqual(100, rc.eagerRefreshThresholdMillis);
    });

    it('getApplicationCredentialsFromFilePath should not error on valid symlink', async () => {
      if (isWindows) {
        // git does not create symlinks on Windows
        return;
      }
      await auth._getApplicationCredentialsFromFilePath(
        './test/fixtures/goodlink',
      );
    });

    it('getApplicationCredentialsFromFilePath should error on invalid symlink', async () => {
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath('./test/fixtures/badlink'),
      );
    });

    it('getApplicationCredentialsFromFilePath should error on valid link to invalid data', async () => {
      if (isWindows) {
        // git does not create symlinks on Windows
        return;
      }
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath(
          './test/fixtures/emptylink',
        ),
      );
    });

    it('getApplicationCredentialsFromFilePath should error on null file path', async () => {
      try {
        // Test verifies invalid parameter tests, which requires cast to any.
        await (
          auth as ReturnType<JSON['parse']>
        )._getApplicationCredentialsFromFilePath(null);
      } catch (e) {
        return;
      }
      assert.fail('failed to throw');
    });

    it('getApplicationCredentialsFromFilePath should error on empty file path', async () => {
      try {
        await auth._getApplicationCredentialsFromFilePath('');
      } catch (e) {
        return;
      }
      assert.fail('failed to throw');
    });

    it('getApplicationCredentialsFromFilePath should error on non-string file path', async () => {
      try {
        // Test verifies invalid parameter tests, which requires cast to any.
        await auth._getApplicationCredentialsFromFilePath(
          2 as ReturnType<JSON['parse']>,
        );
      } catch (e) {
        return;
      }
      assert.fail('failed to throw');
    });

    it('getApplicationCredentialsFromFilePath should error on invalid file path', async () => {
      try {
        await auth._getApplicationCredentialsFromFilePath(
          './nonexistantfile.json',
        );
      } catch (e) {
        return;
      }
      assert.fail('failed to throw');
    });

    it('getApplicationCredentialsFromFilePath should error on directory', async () => {
      // Make sure that the following path actually does point to a directory.
      const directory = './test/fixtures';
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath(directory),
      );
    });

    it('getApplicationCredentialsFromFilePath should handle errors thrown from createReadStream', async () => {
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath('./does/not/exist.json'),
        /ENOENT: no such file or directory/,
      );
    });

    it('getApplicationCredentialsFromFilePath should handle errors thrown from fromStream', async () => {
      sandbox.stub(auth, 'fromStream').throws('🤮');
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath(
          './test/fixtures/private.json',
        ),
        /🤮/,
      );
    });

    it('getApplicationCredentialsFromFilePath should handle errors passed from fromStream', async () => {
      // Set up a mock to return an error from the fromStream method.
      sandbox.stub(auth, 'fromStream').throws('🤮');
      await assert.rejects(
        auth._getApplicationCredentialsFromFilePath(
          './test/fixtures/private.json',
        ),
        /🤮/,
      );
    });

    it('getApplicationCredentialsFromFilePath should correctly read the file and create a valid JWT', async () => {
      const result = await auth._getApplicationCredentialsFromFilePath(
        './test/fixtures/private.json',
      );
      assert(result);
      const jwt = result as JWT;
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
    });

    it('getApplicationCredentialsFromFilePath should correctly read the file and create a valid JWT with eager refresh', async () => {
      const result = await auth._getApplicationCredentialsFromFilePath(
        './test/fixtures/private.json',
        {eagerRefreshThresholdMillis: 7000},
      );
      assert(result);
      const jwt = result as JWT;
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
      assert.strictEqual(7000, jwt.eagerRefreshThresholdMillis);
    });

    it('tryGetApplicationCredentialsFromEnvironmentVariable should return null when env const is not set', async () => {
      // Set up a mock to return a null path string.
      mockEnvVar('GOOGLE_APPLICATION_CREDENTIALS');
      const client =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      assert.strictEqual(client, null);
    });

    it('tryGetApplicationCredentialsFromEnvironmentVariable should return null when env const is empty string', async () => {
      // Set up a mock to return an empty path string.
      mockEnvVar('GOOGLE_APPLICATION_CREDENTIALS');
      const client =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      assert.strictEqual(client, null);
    });

    it('tryGetApplicationCredentialsFromEnvironmentVariable should handle invalid environment variable', async () => {
      // Set up a mock to return a path to an invalid file.
      mockEnvVar('GOOGLE_APPLICATION_CREDENTIALS', './nonexistantfile.json');
      try {
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      } catch (e) {
        return;
      }
      assert.fail('failed to throw');
    });

    it('tryGetApplicationCredentialsFromEnvironmentVariable should handle valid environment variable', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );
      const result =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      const jwt = result as JWT;
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
    });

    it('tryGetApplicationCredentialsFromEnvironmentVariable should handle valid environment variable when there is eager refresh set', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );
      const result =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable({
          eagerRefreshThresholdMillis: 60 * 60 * 1000,
        });
      const jwt = result as JWT;
      assert.strictEqual(privateJSON.private_key, jwt.key);
      assert.strictEqual(privateJSON.client_email, jwt.email);
      assert.strictEqual(undefined, jwt.keyFile);
      assert.strictEqual(undefined, jwt.subject);
      assert.strictEqual(undefined, jwt.scope);
      assert.strictEqual(60 * 60 * 1000, jwt.eagerRefreshThresholdMillis);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should build the correct directory for Windows', async () => {
      mockWindows();
      mockWindowsWellKnownFile();
      const result =
        (await auth._tryGetApplicationCredentialsFromWellKnownFile()) as JWT;
      assert.ok(result);
      assert.strictEqual(result.email, private2JSON.client_email);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should build the correct directory for non-Windows', async () => {
      mockLinuxWellKnownFile();
      const client =
        (await auth._tryGetApplicationCredentialsFromWellKnownFile()) as JWT;
      assert.strictEqual(client.email, private2JSON.client_email);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should fail on Windows when APPDATA is not defined', async () => {
      mockWindows();
      mockEnvVar('APPDATA');
      mockWindowsWellKnownFile();
      const result =
        await auth._tryGetApplicationCredentialsFromWellKnownFile();
      assert.strictEqual(null, result);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should fail on non-Windows when HOME is not defined', async () => {
      mockEnvVar('HOME');
      mockLinuxWellKnownFile();
      const result =
        await auth._tryGetApplicationCredentialsFromWellKnownFile();
      assert.strictEqual(null, result);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should fail on Windows when file does not exist', async () => {
      mockWindows();
      const result =
        await auth._tryGetApplicationCredentialsFromWellKnownFile();
      assert.strictEqual(null, result);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should fail on non-Windows when file does not exist', async () => {
      const result =
        await auth._tryGetApplicationCredentialsFromWellKnownFile();
      assert.strictEqual(null, result);
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should pass along a failure on Windows', async () => {
      mockWindows();
      mockWindowsWellKnownFile();
      sandbox
        .stub(auth, '_getApplicationCredentialsFromFilePath')
        .rejects('🤮');
      await assert.rejects(
        auth._tryGetApplicationCredentialsFromWellKnownFile(),
        /🤮/,
      );
    });

    it('_tryGetApplicationCredentialsFromWellKnownFile should pass along a failure on non-Windows', async () => {
      mockLinuxWellKnownFile();
      sandbox
        .stub(auth, '_getApplicationCredentialsFromFilePath')
        .rejects('🤮');
      await assert.rejects(
        auth._tryGetApplicationCredentialsFromWellKnownFile(),
        /🤮/,
      );
    });

    it('getProjectId should return a new projectId the first time and a cached projectId the second time', async () => {
      mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);

      // Ask for credentials, the first time.
      const projectIdPromise = auth.getProjectId();
      const projectId = await projectIdPromise;
      assert.strictEqual(projectId, STUB_PROJECT);

      // Null out all the private functions that make this method work
      const anyd = auth as ReturnType<JSON['parse']>;
      anyd.getProductionProjectId = null;
      anyd.getFileProjectId = null;
      anyd.getDefaultServiceProjectId = null;
      anyd.getGCEProjectId = null;

      // Ask for projectId again, from the same auth instance. If it isn't
      // cached, this will crash.
      const projectId2 = await auth.getProjectId();

      // Make sure we get the original cached projectId back
      assert.strictEqual(STUB_PROJECT, projectId2);

      // Now create a second GoogleAuth instance, and ask for projectId.
      // We should get a new projectId instance this time.
      const auth2 = new GoogleAuth();

      const getProjectIdPromise = auth2.getProjectId();
      assert.notStrictEqual(getProjectIdPromise, projectIdPromise);
    });

    it('getProjectId should use GCLOUD_PROJECT environment variable when it is set', async () => {
      mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use `gcloud_project` environment variable when it is set', async () => {
      process.env.gcloud_project = STUB_PROJECT;
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use GOOGLE_CLOUD_PROJECT environment variable when it is set', async () => {
      process.env.GOOGLE_CLOUD_PROJECT = STUB_PROJECT;
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use `google_cloud_project` environment variable when it is set', async () => {
      process.env['google_cloud_project'] = STUB_PROJECT;
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use `keyFilename` when it is available', async () => {
      const auth = new GoogleAuth({
        keyFilename: './test/fixtures/private2.json',
      });
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use GOOGLE_APPLICATION_CREDENTIALS file when it is available', async () => {
      process.env.GOOGLE_APPLICATION_CREDENTIALS =
        './test/fixtures/private2.json';
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use `google_application_credentials` file when it is available', async () => {
      process.env['google_application_credentials'] =
        './test/fixtures/private2.json';
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should prefer configured projectId', async () => {
      mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);
      mockEnvVar('GOOGLE_CLOUD_PROJECT', STUB_PROJECT);
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private2.json',
      );
      const PROJECT_ID = 'configured-project-id-should-be-preferred';
      const auth = new GoogleAuth({projectId: PROJECT_ID});
      const projectId = await auth.getProjectId();
      assert.strictEqual(projectId, PROJECT_ID);
    });

    it('getProjectId should use Cloud SDK when it is available and env vars are not set', async () => {
      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is set up to point to private2.json
      // * Running on GCE is set to true.
      const stdout = JSON.stringify({
        configuration: {properties: {core: {project: STUB_PROJECT}}},
      });

      (child_process.exec as unknown as sinon.SinonStub).restore();
      const stub = sandbox
        .stub(child_process, 'exec')
        .callsArgWith(1, null, stdout, null);
      const projectId = await auth.getProjectId();
      assert(stub.calledOnce);
      assert.strictEqual(projectId, STUB_PROJECT);
    });

    it('getProjectId should use GCE when well-known file and env const are not set', async () => {
      const scope = createGetProjectIdNock(STUB_PROJECT);
      const projectId = await auth.getProjectId();
      const stub = child_process.exec as unknown as sinon.SinonStub;
      stub.restore();
      assert(stub.calledOnce);
      assert.strictEqual(projectId, STUB_PROJECT);
      scope.done();
    });

    it('getApplicationDefault should return a new credential the first time and a cached credential the second time', async () => {
      // Create a function which will set up a GoogleAuth instance to match
      // on an environment variable json file, but not on anything else.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private2.json',
      );

      // Ask for credentials, the first time.
      const result = await auth.getApplicationDefault();
      assert.notStrictEqual(null, result);

      // Capture the returned credential.
      const cachedCredential = result.credential;

      // Make sure our special test bit is not set yet, indicating that
      // this is a new credentials instance.
      // Test verifies invalid parameter tests, which requires cast to any.
      assert.strictEqual(
        undefined,
        (cachedCredential as ReturnType<JSON['parse']>).specialTestBit,
      );

      // Now set the special test bit.
      // Test verifies invalid parameter tests, which requires cast to any.
      (cachedCredential as ReturnType<JSON['parse']>).specialTestBit = 'monkey';

      // Ask for credentials again, from the same auth instance. We expect
      // a cached instance this time.
      const result2 = (await auth.getApplicationDefault()).credential;
      assert.notStrictEqual(null, result2);

      // Make sure the special test bit is set on the credentials we got
      // back, indicating that we got cached credentials. Also make sure
      // the object instance is the same.
      // Test verifies invalid parameter tests, which requires cast to
      // any.
      assert.strictEqual(
        'monkey',
        (result2 as ReturnType<JSON['parse']>).specialTestBit,
      );
      assert.strictEqual(cachedCredential, result2);

      // Now create a second GoogleAuth instance, and ask for
      // credentials. We should get a new credentials instance this time.
      const auth2 = new GoogleAuth();
      const result3 = (await auth2.getApplicationDefault()).credential;
      assert.notStrictEqual(null, result3);

      // Make sure we get a new (non-cached) credential instance back.
      // Test verifies invalid parameter tests, which requires cast to
      // any.
      assert.strictEqual(
        undefined,
        (result3 as ReturnType<JSON['parse']>).specialTestBit,
      );
      assert.notStrictEqual(cachedCredential, result3);
    });

    it('getApplicationDefault should cache the credential when using GCE', async () => {
      const scopes = [nockIsGCE(), createGetProjectIdNock()];

      // Ask for credentials, the first time.
      const result = await auth.getApplicationDefault();
      scopes.forEach(x => x.done());
      assert.notStrictEqual(null, result);

      // Capture the returned credential.
      const cachedCredential = result.credential;
      // Ask for credentials again, from the same auth instance. We expect
      // a cached instance this time.
      const result2 = (await auth.getApplicationDefault()).credential;
      assert.notStrictEqual(null, result2);

      // Make sure it's the same object
      assert.strictEqual(cachedCredential, result2);
    });

    it('getApplicationDefault should use environment variable when it is set', async () => {
      // Set up the creds.
      // * Environment variable is set up to point to private.json
      // * Well-known file is set up to point to private2.json
      // * Running on GCE is set to true.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private2.json',
      );
      mockWindows();
      mockWindowsWellKnownFile();
      nockIsGCE();

      const res = await auth.getApplicationDefault();
      const client = res.credential as JWT;
      assert.strictEqual(private2JSON.private_key, client.key);
      assert.strictEqual(private2JSON.client_email, client.email);
      assert.strictEqual(undefined, client.keyFile);
      assert.strictEqual(undefined, client.subject);
      assert.strictEqual(undefined, client.scope);
    });

    it('should use well-known file when it is available and env const is not set', async () => {
      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is set up to point to private2.json
      mockLinuxWellKnownFile();

      const res = await auth.getApplicationDefault();
      const client = res.credential as JWT;
      assert.strictEqual(private2JSON.private_key, client.key);
      assert.strictEqual(private2JSON.client_email, client.email);
      assert.strictEqual(undefined, client.keyFile);
      assert.strictEqual(undefined, client.subject);
      assert.strictEqual(undefined, client.scope);
    });

    it('explicitly set quota project should not be overriden by environment value', async () => {
      mockLinuxWellKnownFile(
        './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
      );
      mockEnvVar('GOOGLE_CLOUD_QUOTA_PROJECT', 'quota_from_env');
      let result = await auth.getApplicationDefault();
      let client = result.credential as JWT;
      assert.strictEqual('quota_from_env', client.quotaProjectId);

      client.quotaProjectId = 'explicit_quota';
      result = await auth.getApplicationDefault();
      client = result.credential as JWT;
      assert.strictEqual('explicit_quota', client.quotaProjectId);
    });

    it('getApplicationDefault should use quota project id from file if environment variable is empty', async () => {
      mockLinuxWellKnownFile(
        './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
      );
      mockEnvVar('GOOGLE_CLOUD_QUOTA_PROJECT', '');
      const result = await auth.getApplicationDefault();
      const client = result.credential as JWT;
      assert.strictEqual('my-quota-project', client.quotaProjectId);
    });

    it('getApplicationDefault should use quota project id from file if environment variable is not set', async () => {
      mockLinuxWellKnownFile(
        './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
      );
      const result = await auth.getApplicationDefault();
      const client = result.credential as JWT;
      assert.strictEqual('my-quota-project', client.quotaProjectId);
    });

    it('getApplicationDefault should use GCE when well-known file and env const are not set', async () => {
      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is not set.
      // * Running on GCE is set to true.
      const scopes = [nockIsGCE(), createGetProjectIdNock()];
      const res = await auth.getApplicationDefault();
      scopes.forEach(x => x.done());
      // This indicates that we got a ComputeClient instance back, rather than
      // a JWTClient.
      assert.strictEqual(
        'compute-placeholder',
        (res.credential as OAuth2Client).credentials.refresh_token,
      );
    });

    it('getApplicationDefault should report GCE error when checking for GCE fails', async () => {
      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is not set.
      // * Running on GCE is set to true.
      mockWindows();
      const e = new Error('abc');

      sandbox.stub(auth, '_checkIsGCE').rejects(e);
      await assert.rejects(auth.getApplicationDefault(), e);
    });

    it('getApplicationDefault should also get project ID', async () => {
      // Set up the creds.
      // * Environment variable is set up to point to private.json
      // * Well-known file is set up to point to private2.json
      // * Running on GCE is set to true.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private2.json',
      );
      mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);
      mockWindows();
      mockGCE();
      mockWindowsWellKnownFile();

      const res = await auth.getApplicationDefault();
      const client = res.credential as JWT;
      assert.strictEqual(private2JSON.private_key, client.key);
      assert.strictEqual(private2JSON.client_email, client.email);
      assert.strictEqual(res.projectId, STUB_PROJECT);
      assert.strictEqual(undefined, client.keyFile);
      assert.strictEqual(undefined, client.subject);
      assert.strictEqual(undefined, client.scope);
    });

    it("_checkIsGCE should be equalivalent should use GCP metadata's checks", async () => {
      nockNotGCE();

      const expected = await (gcpMetadata.getGCPResidency() ||
        gcpMetadata.isAvailable());

      assert.strict.notEqual(auth.isGCE, true);
      await auth._checkIsGCE();
      assert.strictEqual(auth.isGCE, expected);
    });

    it('getCredentials should get metadata from the server when running on GCE', async () => {
      const clientEmail = 'test-creds@test-creds.iam.gserviceaccount.com';
      const scopes = [
        nockIsGCE(),
        createGetProjectIdNock(),
        nock(host).get(svcAccountPath).reply(200, clientEmail, HEADERS),
      ];
      await auth._checkIsGCE();
      assert.strictEqual(true, auth.isGCE);
      const body = await auth.getCredentials();
      assert.ok(body);
      assert.strictEqual(body.client_email, clientEmail);
      assert.strictEqual(body.private_key, undefined);
      scopes.forEach(s => s.done());
    });

    it('getCredentials should handle valid environment variable', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );
      const result =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      assert(result);
      const jwt = result as JWT;
      const body = await auth.getCredentials();
      assert.notStrictEqual(null, body);
      assert.strictEqual(jwt.email, body.client_email);
      assert.strictEqual(jwt.key, body.private_key);
    });

    it('getCredentials should call getClient to load credentials', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );

      const spy = sinon.spy(auth, 'getClient');
      const body = await auth.getCredentials();

      const result =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (!(result instanceof JWT)) {
        throw new assert.AssertionError({
          message: 'Credentials are not a JWT object',
        });
      }

      assert.notStrictEqual(null, body);
      assert(spy.calledOnce);
      assert.strictEqual(result.email, body!.client_email);
      assert.strictEqual(result.key, body!.private_key);
    });

    it('getCredentials should handle valid file path', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockWindows();
      auth._checkIsGCE = () => Promise.resolve(true);
      mockWindowsWellKnownFile();
      const result = await auth.getApplicationDefault();
      assert(result);
      const jwt = result.credential as JWT;
      const body = await auth.getCredentials();
      assert.notStrictEqual(null, body);
      assert.strictEqual(jwt.email, body!.client_email);
      assert.strictEqual(jwt.key, body!.private_key);
    });

    it('getCredentials should return error when env const is not set', async () => {
      // Set up a mock to return a null path string
      const client =
        await auth._tryGetApplicationCredentialsFromEnvironmentVariable();
      assert.strictEqual(null, client);
      await assert.rejects(auth.getCredentials());
    });

    it('should use jsonContent if available', async () => {
      const json = createJwtJSON();
      const auth = new GoogleAuth({credentials: json});
      // We know this returned a cached result if a nock scope isn't required
      const body = await auth.getCredentials();
      assert.notStrictEqual(body, null);
      assert.strictEqual(body!.client_email, 'hello@youarecool.com');
    });

    it('should accept keyFilename to get a client', async () => {
      const auth = new GoogleAuth({
        keyFilename: './test/fixtures/private.json',
      });
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.email, 'hello@youarecool.com');
    });

    it('should error when invalid keyFilename passed to getClient', async () => {
      const auth = new GoogleAuth({keyFilename: './funky/fresh.json'});
      await assert.rejects(
        auth.getClient(),
        /ENOENT: no such file or directory/,
      );
    });

    it('should accept credentials to get a client', async () => {
      const auth = new GoogleAuth({credentials: privateJSON});
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.email, 'hello@youarecool.com');
    });

    it('should prefer credentials over keyFilename', async () => {
      const credentials: CredentialBody = Object.assign({}, privateJSON, {
        client_email: 'hello@butiamcooler.com',
      });
      const auth = new GoogleAuth({
        credentials,
        keyFilename: './test/fixtures/private.json',
      });
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.email, credentials.client_email);
    });

    it('should allow passing scopes to get a client', async () => {
      const scopes = ['http://examples.com/is/a/scope'];
      const keyFilename = './test/fixtures/private.json';
      const auth = new GoogleAuth({scopes, keyFilename});
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.scopes, scopes);
    });

    it('should allow passing a scope to get a client', async () => {
      const scopes = 'http://examples.com/is/a/scope';
      const keyFilename = './test/fixtures/private.json';
      const auth = new GoogleAuth({scopes, keyFilename});
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.scopes, scopes);
    });

    it('should allow passing a scope to get a Compute client', async () => {
      const scopes = ['http://examples.com/is/a/scope'];
      const nockScopes = [nockIsGCE(), createGetProjectIdNock()];
      const auth = new GoogleAuth({scopes});
      const client = (await auth.getClient()) as Compute;
      assert.strictEqual(client.scopes, scopes);
      nockScopes.forEach(x => x.done());
    });

    it('should get an access token', async () => {
      const {auth, scopes} = mockGCE();
      scopes.push(createGetProjectIdNock());
      const token = await auth.getAccessToken();
      scopes.forEach(s => s.done());
      assert.strictEqual(token, 'abc123');
    });

    it('should get request headers', async () => {
      const {auth, scopes} = mockGCE();
      scopes.push(createGetProjectIdNock());
      const headers = await auth.getRequestHeaders();
      scopes.forEach(s => s.done());
      assert.deepStrictEqual(
        headers,
        new Headers({authorization: 'Bearer abc123'}),
      );
    });

    it('should authorize the request', async () => {
      const {auth, scopes} = mockGCE();
      scopes.push(createGetProjectIdNock());
      const opts = await auth.authorizeRequest({url: 'http://example.com'});
      scopes.forEach(s => s.done());
      assert.deepStrictEqual(
        opts.headers,
        new Headers({authorization: 'Bearer abc123'}),
      );
    });

    it('should get the current environment if GCE', async () => {
      envDetect.clear();
      const {auth} = mockGCE();
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.COMPUTE_ENGINE);
    });

    it('should get the current environment if GKE', async () => {
      envDetect.clear();
      const {auth} = mockGCE();
      const scope = nock(host)
        .get(`${instancePath}/attributes/cluster-name`)
        .reply(200, {}, HEADERS);
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.KUBERNETES_ENGINE);
      scope.done();
    });

    it('should cache prior call to getEnv(), when GCE', async () => {
      envDetect.clear();
      const {auth} = mockGCE();
      auth.getEnv().catch(console.error);
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.COMPUTE_ENGINE);
    });

    it('should cache prior call to getEnv(), when GKE', async () => {
      envDetect.clear();
      const {auth} = mockGCE();
      const scope = nock(host)
        .get(`${instancePath}/attributes/cluster-name`)
        .reply(200, {}, HEADERS);
      auth.getEnv().catch(console.error);
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.KUBERNETES_ENGINE);
      scope.done();
    });

    it('should get the current environment if GCF 8 and below', async () => {
      envDetect.clear();
      mockEnvVar('FUNCTION_NAME', 'DOGGY');
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.CLOUD_FUNCTIONS);
    });

    it('should get the current environment if GCF 10 and up', async () => {
      envDetect.clear();
      mockEnvVar('FUNCTION_TARGET', 'KITTY');
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.CLOUD_FUNCTIONS);
    });

    it('should get the current environment if GAE', async () => {
      envDetect.clear();
      mockEnvVar('GAE_SERVICE', 'KITTY');
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.APP_ENGINE);
    });

    it('should get the current environment if Cloud Run', async () => {
      envDetect.clear();
      mockEnvVar('K_CONFIGURATION', 'KITTY');
      const {auth} = mockGCE();
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.CLOUD_RUN);
    });

    it('should get the current environment if Cloud Run Jobs', async () => {
      envDetect.clear();
      mockEnvVar('CLOUD_RUN_JOB', 'KITTY');
      const {auth} = mockGCE();
      const env = await auth.getEnv();
      assert.strictEqual(env, envDetect.GCPEnv.CLOUD_RUN_JOBS);
    });

    it('should make the request via `#fetch`', async () => {
      const url = 'http://example.com';
      const {auth, scopes} = mockGCE();
      scopes.push(createGetProjectIdNock());
      const data = {breakfast: 'coffee'};
      scopes.push(nock(url).get('/').reply(200, data));
      const res = await auth.fetch(url);
      scopes.forEach(s => s.done());
      assert.deepStrictEqual(res.data, data);
    });

    it('should make the request via `#request`', async () => {
      const url = 'http://example.com';
      const {auth, scopes} = mockGCE();
      scopes.push(createGetProjectIdNock());
      const data = {breakfast: 'coffee'};
      scopes.push(nock(url).get('/').reply(200, data));
      const res = await auth.request({url});
      scopes.forEach(s => s.done());
      assert.deepStrictEqual(res.data, data);
    });

    it('sign should use the private key for JWT clients', async () => {
      const data = 'abc123';
      const auth = new GoogleAuth({
        credentials: {
          client_email: 'google@auth.library',
          private_key: privateKey,
        },
        universeDomain: DEFAULT_UNIVERSE,
      });
      const value = await auth.sign(data);
      const sign = crypto.createSign('RSA-SHA256');
      sign.update(data);
      const computed = sign.sign(privateKey, 'base64');
      assert.strictEqual(value, computed);
    });

    it('sign should hit the IAM endpoint if no projectId nor private_key is available', async () => {
      const {auth, scopes} = mockGCE();

      sinon
        .stub(
          auth as unknown as {getProjectIdAsync: () => Promise<string | null>},
          'getProjectIdAsync',
        )
        .resolves();

      const universe = await auth.getUniverseDomain();

      const email = 'google@auth.library';
      const iamUri = `https://iamcredentials.${universe}`;
      const iamPath = `/v1/projects/-/serviceAccounts/${email}:signBlob`;
      const signedBlob = 'erutangis';
      const data = 'abc123';
      scopes.push(
        nock(iamUri).post(iamPath).reply(200, {signedBlob}),
        nock(host).get(svcAccountPath).reply(200, email, HEADERS),
      );
      const value = await auth.sign(data);
      scopes.forEach(x => x.done());
      assert.strictEqual(value, signedBlob);
    });

    it('should pass options to the JWT constructor via constructor', async () => {
      const apiKey = 'my-api-key';
      const subject = 'science!';
      const auth = new GoogleAuth({
        keyFilename: './test/fixtures/private.json',
        clientOptions: {apiKey, subject},
      });
      const client = (await auth.getClient()) as JWT;
      assert.strictEqual(client.apiKey, apiKey);
      assert.strictEqual(client.subject, subject);
    });

    it('should throw if getProjectId cannot find a projectId', async () => {
      sinon
        .stub(auth as ReturnType<JSON['parse']>, 'getDefaultServiceProjectId')
        .resolves();
      await assert.rejects(
        auth.getProjectId(),
        /Unable to detect a Project Id in the current environment/,
      );
    });

    it('getRequestHeaders populates x-goog-user-project with quota_project if present', async () => {
      const tokenReq = mockApplicationDefaultCredentials(
        './test/fixtures/config-with-quota',
      );
      const auth = new GoogleAuth();
      const headers = await auth.getRequestHeaders();
      assert.strictEqual(
        headers.get('x-goog-user-project'),
        'my-quota-project',
      );
      tokenReq.done();
    });

    it('getRequestHeaders does not populate x-goog-user-project if quota_project is not present', async () => {
      const tokenReq = mockApplicationDefaultCredentials(
        './test/fixtures/config-no-quota',
      );
      const auth = new GoogleAuth();
      const headers = await auth.getRequestHeaders();
      assert.strictEqual(headers.get('x-goog-user-project'), null);
      tokenReq.done();
    });

    it('getRequestHeaders populates x-goog-user-project when called on returned client', async () => {
      const tokenReq = mockApplicationDefaultCredentials(
        './test/fixtures/config-with-quota',
      );
      const auth = new GoogleAuth();
      const client = await auth.getClient();
      assert(client instanceof UserRefreshClient);
      const headers = await client.getRequestHeaders();
      assert.strictEqual(
        headers.get('x-goog-user-project'),
        'my-quota-project',
      );
      tokenReq.done();
    });

    it('populates x-goog-user-project when request is made', async () => {
      const tokenReq = mockApplicationDefaultCredentials(
        './test/fixtures/config-with-quota',
      );
      const auth = new GoogleAuth();
      const client = await auth.getClient();
      assert(client instanceof UserRefreshClient);
      const apiReq = nock(BASE_URL)
        .post(ENDPOINT)
        .reply(function () {
          assert.strictEqual(
            this.req.headers['x-goog-user-project'],
            'my-quota-project',
          );
          return [200, RESPONSE_BODY];
        });
      const res = await client.request({
        url: BASE_URL + ENDPOINT,
        method: 'POST',
        data: {test: true},
      });
      assert.strictEqual(RESPONSE_BODY, res.data);
      tokenReq.done();
      apiReq.done();
    });

    it('should return a Compute client for getIdTokenClient', async () => {
      const nockScopes = [nockIsGCE(), createGetProjectIdNock()];
      const auth = new GoogleAuth();
      const client = await auth.getIdTokenClient('a-target-audience');
      assert(client instanceof IdTokenClient);
      assert(client.idTokenProvider instanceof Compute);
      nockScopes.forEach(s => s.done());
    });

    it('should return a JWT client for getIdTokenClient', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );

      const auth = new GoogleAuth();
      const client = await auth.getIdTokenClient('a-target-audience');
      assert(client instanceof IdTokenClient);
      assert(client.idTokenProvider instanceof JWT);
    });

    it('should return a UserRefreshClient client for getIdTokenClient', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/refresh.json',
      );
      mockEnvVar('GOOGLE_CLOUD_PROJECT', 'some-project-id');

      const client = await auth.getIdTokenClient('a-target-audience');
      assert(client instanceof IdTokenClient);
      assert(client.idTokenProvider instanceof UserRefreshClient);
    });

    it('should properly use `UserRefreshClient` client for `getIdTokenClient`', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/refresh.json',
      );
      mockEnvVar('GOOGLE_CLOUD_PROJECT', 'some-project-id');

      // Assert `UserRefreshClient`
      const baseClient = await auth.getClient();
      assert(baseClient instanceof UserRefreshClient);

      // Setup variables
      const idTokenPayload = Buffer.from(JSON.stringify({exp: 100})).toString(
        'base64',
      );
      const testIdToken = `TEST.${idTokenPayload}.TOKEN`;
      const targetAudience = 'a-target-audience';
      const tokenEndpoint = new URL(baseClient.endpoints.oauth2TokenUrl);
      const expectedTokenRequestBody = stringify({
        client_id: baseClient._clientId,
        client_secret: baseClient._clientSecret,
        grant_type: 'refresh_token',
        refresh_token: baseClient._refreshToken,
        target_audience: targetAudience,
      });
      const url = new URL('https://my-protected-endpoint.a.app');
      const expectedRes = {hello: true};

      // Setup mock endpoints
      nock(tokenEndpoint.origin)
        .post(tokenEndpoint.pathname, expectedTokenRequestBody)
        .reply(200, {id_token: testIdToken});
      nock(url.origin, {
        reqheaders: {
          authorization: `Bearer ${testIdToken}`,
        },
      })
        .get(url.pathname)
        .reply(200, expectedRes);

      // Make assertions
      const client = await auth.getIdTokenClient(targetAudience);
      assert(client instanceof IdTokenClient);
      assert(client.idTokenProvider instanceof UserRefreshClient);

      const res = await client.request({url});
      assert.deepStrictEqual(res.data, expectedRes);
    });

    it('should call getClient for getIdTokenClient', async () => {
      // Set up a mock to return path to a valid credentials file.
      mockEnvVar(
        'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json',
      );

      const spy = sinon.spy(auth, 'getClient');
      const client = await auth.getIdTokenClient('a-target-audience');
      assert(client instanceof IdTokenClient);
      assert(spy.calledOnce);
    });

    describe('getUniverseDomain', () => {
      it('should prefer `universeDomain` > metadata service when available', async () => {
        const universeDomain = 'my.universe.com';
        const auth = new GoogleAuth({universeDomain});

        assert.equal(await auth.getUniverseDomain(), universeDomain);
      });

      it('should prefer `clientOptions` > metadata service when available', async () => {
        const universeDomain = 'my.universe.com';
        const auth = new GoogleAuth({clientOptions: {universeDomain}});

        assert.equal(await auth.getUniverseDomain(), universeDomain);
      });

      it('should get the universe from ADC', async () => {
        mockEnvVar(
          'GOOGLE_APPLICATION_CREDENTIALS',
          './test/fixtures/private2.json',
        );
        const {universe_domain} = JSON.parse(
          fs.readFileSync('./test/fixtures/private2.json', 'utf-8'),
        );

        assert(universe_domain);
        assert.notEqual(universe_domain, DEFAULT_UNIVERSE);
        assert.equal(await auth.getUniverseDomain(), universe_domain);
      });
    });

    function mockApplicationDefaultCredentials(path: string) {
      // Fake a home directory in our fixtures path.
      mockEnvVar('GCLOUD_PROJECT', 'my-fake-project');
      mockEnvVar('HOME', path);
      mockEnvVar('APPDATA', `${path}/.config`);
      // The first time auth.getClient() is called /token endpoint is used to
      // fetch a JWT.
      return nock('https://oauth2.googleapis.com')
        .post('/token')
        .reply(200, {});
    }
    describe('for impersonated types', () => {
      describe('source clients', () => {
        it('should support a variety of source clients', async () => {
          const serviceAccountImpersonationURLBase =
            'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/test@test-project.iam.gserviceaccount.com:generateToken';
          const samples: {
            creds: {
              type: typeof IMPERSONATED_ACCOUNT_TYPE;
              service_account_impersonation_url: string;
              source_credentials: {};
            };
            expectedSource: typeof AuthClient;
          }[] = [
            // USER_TO_SERVICE_ACCOUNT_JSON
            {
              creds: {
                type: IMPERSONATED_ACCOUNT_TYPE,
                service_account_impersonation_url: new URL(
                  './test@test-project.iam.gserviceaccount.com:generateAccessToken',
                  serviceAccountImpersonationURLBase,
                ).toString(),
                source_credentials: {
                  client_id: 'client',
                  client_secret: 'secret',
                  refresh_token: 'refreshToken',
                  type: USER_REFRESH_ACCOUNT_TYPE,
                },
              },
              expectedSource: UserRefreshClient,
            },
            // SERVICE_ACCOUNT_TO_SERVICE_ACCOUNT_JSON
            {
              creds: {
                type: IMPERSONATED_ACCOUNT_TYPE,
                service_account_impersonation_url: new URL(
                  './test@test-project.iam.gserviceaccount.com:generateIdToken',
                  serviceAccountImpersonationURLBase,
                ).toString(),
                source_credentials: {
                  type: 'service_account',
                  client_email: 'google@auth.library',
                  private_key: privateKey,
                },
              },
              expectedSource: JWT,
            },
            // EXTERNAL_ACCOUNT_TO_SERVICE_ACCOUNT_JSON
            {
              creds: {
                type: IMPERSONATED_ACCOUNT_TYPE,
                service_account_impersonation_url: new URL(
                  './test@test-project.iam.gserviceaccount.com:generateIdToken',
                  serviceAccountImpersonationURLBase,
                ).toString(),
                source_credentials: {
                  type: EXTERNAL_ACCOUNT_TYPE,
                  audience: 'audience',
                  subject_token_type: 'access_token',
                  token_url: 'https://sts.googleapis.com/v1/token',
                  credential_source: {url: 'https://example.com/token'},
                },
              },
              expectedSource: IdentityPoolClient,
            },
          ];

          const auth = new GoogleAuth();
          for (const {creds, expectedSource} of samples) {
            const client = auth.fromJSON(creds);

            assert(client instanceof Impersonated);

            // This is a private prop - we will refactor/remove in the future
            assert(
              (client as unknown as {sourceClient: {}}).sourceClient instanceof
                expectedSource,
            );
          }
        });
      });

      describe('for impersonated credentials signing', () => {
        const now = new Date().getTime();
        const saSuccessResponse = {
          accessToken: 'SA_ACCESS_TOKEN',
          expireTime: new Date(now + 3600 * 1000).toISOString(),
        };

        it('should use IAMCredentials signBlob endpoint when impersonation is used', async () => {
          // Set up a mock to return path to a valid credentials file.
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/impersonated_application_default_credentials.json',
          );

          // Set up a mock to explicity return the Project ID, as needed for impersonated ADC
          mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);

          const auth = new GoogleAuth({
            universeDomain: DEFAULT_UNIVERSE,
          });
          const client = await auth.getClient();

          const email = 'target@project.iam.gserviceaccount.com';
          const iamUri = 'https://iamcredentials.googleapis.com';
          const iamPath = `/v1/projects/-/serviceAccounts/${email}:signBlob`;
          const signedBlob = 'erutangis';
          const keyId = '12345';
          const data = 'abc123';
          const scopes = [
            nock('https://oauth2.googleapis.com').post('/token').reply(200, {
              access_token: saSuccessResponse.accessToken,
            }),
            nock(iamUri)
              .post(
                iamPath,
                {
                  delegates: [],
                  payload: Buffer.from(data, 'utf-8').toString('base64'),
                },
                {
                  reqheaders: {
                    authorization: `Bearer ${saSuccessResponse.accessToken}`,
                    'content-type': 'application/json',
                  },
                },
              )
              .reply(200, {keyId: keyId, signedBlob: signedBlob}),
          ];

          const signed = await auth.sign(data);

          scopes.forEach(x => x.done());
          assert(client instanceof Impersonated);
          assert.strictEqual(signed, signedBlob);
        });
      });
    });

    describe('for external_account types', () => {
      let fromJsonSpy: sinon.SinonSpy<
        [ExternalAccountClientOptions],
        BaseExternalAccountClient | null
      >;
      const stsSuccessfulResponse = {
        access_token: 'ACCESS_TOKEN',
        issued_token_type: 'urn:ietf:params:oauth:token-type:access_token',
        token_type: 'Bearer',
        expires_in: 3600,
        scope: 'scope1 scope2',
      };
      const now = new Date().getTime();
      const saSuccessResponse = {
        accessToken: 'SA_ACCESS_TOKEN',
        expireTime: new Date(now + 3600 * 1000).toISOString(),
      };
      const fileSubjectToken = fs.readFileSync(
        externalAccountJSON.credential_source.file,
        'utf-8',
      );
      // Project number should match the project number in externalAccountJSON.
      const projectNumber = '123456';
      const projectId = 'my-proj-id';
      const projectInfoResponse = {
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
      const refreshOptions = {
        eagerRefreshThresholdMillis: 5000,
        forceRefreshOnFailure: true,
      };
      const defaultScopes = ['http://examples.com/is/a/default/scope'];
      const userScopes = ['http://examples.com/is/a/scope'];

      /**
       * @return A copy of the external account JSON auth object for testing.
       */
      function createExternalAccountJSON() {
        const credentialSourceCopy = Object.assign(
          {},
          externalAccountJSON.credential_source,
        );
        const jsonCopy = Object.assign({}, externalAccountJSON);
        jsonCopy.credential_source = credentialSourceCopy;
        return jsonCopy;
      }

      /**
       * Creates mock HTTP handlers for retrieving access tokens and
       * optional ones for retrieving the project ID via cloud resource
       * manager.
       * @param mockProjectIdRetrieval Whether to mock project ID retrieval.
       * @param expectedScopes The list of expected scopes.
       * @param mockServiceAccountImpersonation Whether to mock IAMCredentials
       *   GenerateAccessToken.
       * @return The list of nock.Scope corresponding to the mocked HTTP
       *   requests.
       */
      function mockGetAccessTokenAndProjectId(
        mockProjectIdRetrieval = true,
        expectedScopes = ['https://www.googleapis.com/auth/cloud-platform'],
        mockServiceAccountImpersonation = false,
      ): nock.Scope[] {
        const stsScopes = mockServiceAccountImpersonation
          ? 'https://www.googleapis.com/auth/cloud-platform'
          : expectedScopes.join(' ');
        const scopes = [
          mockStsTokenExchange([
            {
              statusCode: 200,
              response: stsSuccessfulResponse,
              request: {
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                audience: externalAccountJSON.audience,
                scope: stsScopes,
                requested_token_type:
                  'urn:ietf:params:oauth:token-type:access_token',
                subject_token: fileSubjectToken,
                subject_token_type: externalAccountJSON.subject_token_type,
              },
            },
          ]),
        ];
        if (mockServiceAccountImpersonation) {
          scopes.push(
            mockGenerateAccessToken({
              statusCode: 200,
              response: saSuccessResponse,
              token: stsSuccessfulResponse.access_token,
              scopes: expectedScopes,
            }),
          );
        }

        if (mockProjectIdRetrieval) {
          scopes.push(
            mockCloudResourceManager(
              projectNumber,
              stsSuccessfulResponse.access_token,
              200,
              projectInfoResponse,
            ),
          );
        }

        return scopes;
      }

      /**
       * Asserts that the provided client was initialized with the expected
       * JSON object and RefreshOptions.
       * @param actualClient The actual client to assert.
       * @param json The expected JSON object that the client should be
       *   initialized with.
       */
      function assertExternalAccountClientInitialized(
        actualClient: AuthClient,
        json: ExternalAccountClientOptions,
      ) {
        // Confirm expected client is initialized.
        assert(fromJsonSpy.calledOnceWithExactly(json));
        assert(fromJsonSpy.returned(actualClient as BaseExternalAccountClient));
      }

      beforeEach(() => {
        // Listen to external account initializations.
        // This is useful to confirm that a GoogleAuth returned client is
        // an external account initialized with the expected parameters.
        fromJsonSpy = sinon.spy(ExternalAccountClient, 'fromJSON');
      });

      afterEach(() => {
        fromJsonSpy.restore();
      });

      describe('fromJSON()', () => {
        it('should create the expected BaseExternalAccountClient', () => {
          const json = createExternalAccountJSON();
          const result = auth.fromJSON(json);

          assertExternalAccountClientInitialized(result, json);
        });

        it('should honor defaultScopes when no user scopes are available', () => {
          const json = createExternalAccountJSON();
          auth.defaultScopes = defaultScopes;
          const result = auth.fromJSON(json);

          assertExternalAccountClientInitialized(result, json);
          assert.strictEqual(
            (result as BaseExternalAccountClient).scopes,
            defaultScopes,
          );
        });

        it('should prefer user scopes over defaultScopes', () => {
          const json = createExternalAccountJSON();
          const auth = new GoogleAuth({scopes: userScopes});
          auth.defaultScopes = defaultScopes;
          const result = auth.fromJSON(json);

          assertExternalAccountClientInitialized(result, json);
          assert.strictEqual(
            (result as BaseExternalAccountClient).scopes,
            userScopes,
          );
        });

        it('should create client with custom RefreshOptions', () => {
          const json = createExternalAccountJSON();
          const result = auth.fromJSON(json, refreshOptions);

          assertExternalAccountClientInitialized(result, {
            ...json,
            ...refreshOptions,
          });
        });

        it('should throw on invalid json', () => {
          const invalidJson = createExternalAccountJSON();
          delete invalidJson.credential_source;
          const auth = new GoogleAuth();

          assert.throws(() => {
            auth.fromJSON(invalidJson);
          });
        });
      });

      describe('fromStream()', () => {
        it('should read the stream and create a client', async () => {
          const stream = fs.createReadStream(
            './test/fixtures/external-account-cred.json',
          );
          const actualClient = await auth.fromStream(stream);

          assertExternalAccountClientInitialized(
            actualClient,
            createExternalAccountJSON(),
          );
        });

        it('should include provided RefreshOptions in client', async () => {
          const stream = fs.createReadStream(
            './test/fixtures/external-account-cred.json',
          );
          const auth = new GoogleAuth();
          const result = await auth.fromStream(stream, refreshOptions);

          assertExternalAccountClientInitialized(result, {
            ...createExternalAccountJSON(),
            ...refreshOptions,
          });
        });
      });

      describe('getApplicationDefault()', () => {
        it('should use environment variable when it is set', async () => {
          const scopes = mockGetAccessTokenAndProjectId();
          // Environment variable is set up to point to
          // external-account-cred.json
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-cred.json',
          );

          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          // Project ID should also be set.
          assert.deepEqual(client.projectId, projectId);
          scopes.forEach(s => s.done());
        });

        it('should use defaultScopes for environment variable ADC', async () => {
          const scopes = mockGetAccessTokenAndProjectId(true, defaultScopes);
          // Environment variable is set up to point to
          // external-account-cred.json
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-cred.json',
          );

          const auth = new GoogleAuth();
          auth.defaultScopes = defaultScopes;
          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          assert.strictEqual(
            (client as BaseExternalAccountClient).scopes,
            defaultScopes,
          );
          scopes.forEach(s => s.done());
        });

        it('should prefer user scopes over defaultScopes for environment variable ADC', async () => {
          const scopes = mockGetAccessTokenAndProjectId(true, userScopes);
          // Environment variable is set up to point to
          // external-account-cred.json
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-cred.json',
          );

          const auth = new GoogleAuth({scopes: userScopes});
          auth.defaultScopes = defaultScopes;
          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          assert.strictEqual(
            (client as BaseExternalAccountClient).scopes,
            userScopes,
          );
          scopes.forEach(s => s.done());
        });

        it('should use well-known file when it is available and env const is not set', async () => {
          // Set up the creds.
          // * Environment variable is not set.
          // * Well-known file is set up to point to external-account-cred.json
          mockLinuxWellKnownFile('./test/fixtures/external-account-cred.json');
          const scopes = mockGetAccessTokenAndProjectId();

          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          assert.deepEqual(client.projectId, projectId);
          scopes.forEach(s => s.done());
        });

        it('should use defaultScopes for well-known file ADC', async () => {
          // Set up the creds.
          // * Environment variable is not set.
          // * Well-known file is set up to point to external-account-cred.json
          mockLinuxWellKnownFile('./test/fixtures/external-account-cred.json');
          const scopes = mockGetAccessTokenAndProjectId(true, defaultScopes);

          const auth = new GoogleAuth();
          auth.defaultScopes = defaultScopes;
          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          assert.strictEqual(
            (client as BaseExternalAccountClient).scopes,
            defaultScopes,
          );
          scopes.forEach(s => s.done());
        });

        it('should prefer user scopes over defaultScopes for well-known file ADC', async () => {
          // Set up the creds.
          // * Environment variable is not set.
          // * Well-known file is set up to point to external-account-cred.json
          mockLinuxWellKnownFile('./test/fixtures/external-account-cred.json');
          const scopes = mockGetAccessTokenAndProjectId(true, userScopes);

          const auth = new GoogleAuth({scopes: userScopes});
          auth.defaultScopes = defaultScopes;
          const res = await auth.getApplicationDefault();
          const client = res.credential;

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          assert.strictEqual(
            (client as BaseExternalAccountClient).scopes,
            userScopes,
          );
          scopes.forEach(s => s.done());
        });

        it('should return `null` for `projectId` when on cannot be found', async () => {
          // Environment variable is set up to point to external-account-cred.json
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-cred.json',
          );

          const auth = new GoogleAuth();

          sandbox
            .stub(
              auth as {} as {
                getProjectIdAsync: Promise<string | null>;
              },
              'getProjectIdAsync',
            )
            .resolves(null);

          const res = await auth.getApplicationDefault();

          assert.equal(res.projectId, null);
        });
      });

      describe('getApplicationCredentialsFromFilePath()', () => {
        it('should correctly read the file and create a valid client', async () => {
          const actualClient =
            await auth._getApplicationCredentialsFromFilePath(
              './test/fixtures/external-account-cred.json',
            );

          assertExternalAccountClientInitialized(
            actualClient,
            createExternalAccountJSON(),
          );
        });

        it('should include provided RefreshOptions in client', async () => {
          const result = await auth._getApplicationCredentialsFromFilePath(
            './test/fixtures/external-account-cred.json',
            refreshOptions,
          );

          assertExternalAccountClientInitialized(result, {
            ...createExternalAccountJSON(),
            ...refreshOptions,
          });
        });
      });

      describe('getProjectId()', () => {
        it('should get projectId from cloud resource manager', async () => {
          const scopes = mockGetAccessTokenAndProjectId();
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({keyFilename});
          const actualProjectId = await auth.getProjectId();

          assert.deepEqual(actualProjectId, projectId);
          scopes.forEach(s => s.done());
        });

        it('should prioritize explicitly provided projectId', async () => {
          const explicitProjectId = 'my-explictly-specified-project-id';
          const auth = new GoogleAuth({
            credentials: createExternalAccountJSON(),
            projectId: explicitProjectId,
          });
          const actualProjectId = await auth.getProjectId();

          assert.deepEqual(actualProjectId, explicitProjectId);
        });

        it('should reject when client.getProjectId() fails', async () => {
          const scopes = mockGetAccessTokenAndProjectId(false);
          scopes.push(
            mockCloudResourceManager(
              projectNumber,
              stsSuccessfulResponse.access_token,
              403,
              {
                error: {
                  code: 403,
                  message: 'The caller does not have permission',
                  status: 'PERMISSION_DENIED',
                },
              },
            ),
          );
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({keyFilename});

          await assert.rejects(auth.getProjectId(), GaxiosError);
          scopes.forEach(s => s.done());
        });

        it('should reject on invalid external_account client', async () => {
          const invalidOptions = createExternalAccountJSON();
          invalidOptions.credential_source.file = 'invalid';
          const auth = new GoogleAuth({credentials: invalidOptions});

          await assert.rejects(
            auth.getProjectId(),
            /The file at invalid does not exist, or it is not a file/,
          );
        });

        it('should reject when projectId not determinable', async () => {
          const json = createExternalAccountJSON();
          json.audience = 'identitynamespace:1f12345:my_provider';
          const auth = new GoogleAuth({credentials: json});

          await assert.rejects(
            auth.getProjectId(),
            /Unable to detect a Project Id in the current environment/,
          );
        });
      });

      it('tryGetApplicationCredentialsFromEnvironmentVariable() should resolve', async () => {
        // Set up a mock to return path to a valid credentials file.
        mockEnvVar(
          'GOOGLE_APPLICATION_CREDENTIALS',
          './test/fixtures/external-account-cred.json',
        );
        const result =
          await auth._tryGetApplicationCredentialsFromEnvironmentVariable(
            refreshOptions,
          );

        assert(result);
        assertExternalAccountClientInitialized(result as AuthClient, {
          ...createExternalAccountJSON(),
          ...refreshOptions,
        });
      });

      it('tryGetApplicationCredentialsFromWellKnownFile() should resolve', async () => {
        // Set up a mock to return path to a valid credentials file.
        mockLinuxWellKnownFile('./test/fixtures/external-account-cred.json');
        const result =
          await auth._tryGetApplicationCredentialsFromWellKnownFile(
            refreshOptions,
          );

        assert(result);
        assertExternalAccountClientInitialized(result as AuthClient, {
          ...createExternalAccountJSON(),
          ...refreshOptions,
        });
      });

      it('getApplicationCredentialsFromFilePath() should resolve', async () => {
        const result = await auth._getApplicationCredentialsFromFilePath(
          './test/fixtures/external-account-cred.json',
          refreshOptions,
        );

        assertExternalAccountClientInitialized(result, {
          ...createExternalAccountJSON(),
          ...refreshOptions,
        });
      });

      describe('getClient()', () => {
        it('should initialize from credentials', async () => {
          const auth = new GoogleAuth({
            credentials: createExternalAccountJSON(),
          });
          const actualClient = await auth.getClient();

          assertExternalAccountClientInitialized(
            actualClient,
            createExternalAccountJSON(),
          );
        });

        it('should initialize from keyFileName', async () => {
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({keyFilename});
          const actualClient = await auth.getClient();

          assertExternalAccountClientInitialized(
            actualClient,
            createExternalAccountJSON(),
          );
        });

        it('should initialize from ADC', async () => {
          const scopes = mockGetAccessTokenAndProjectId();
          // Set up a mock to return path to a valid credentials file.
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-cred.json',
          );
          const auth = new GoogleAuth();
          const client = await auth.getClient();

          assertExternalAccountClientInitialized(
            client,
            createExternalAccountJSON(),
          );
          scopes.forEach(s => s.done());
        });

        it('should initialize from impersonated ADC', async () => {
          // Set up a mock to return path to a valid credentials file.
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/impersonated_application_default_credentials.json',
          );

          // Set up a mock to explicity return the Project ID, as needed for impersonated ADC
          mockEnvVar('GCLOUD_PROJECT', STUB_PROJECT);

          const auth = new GoogleAuth();
          const client = await auth.getClient();

          assert(client instanceof Impersonated);

          // Check if targetPrincipal gets extracted and used correctly
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);

          const scopes = [
            nock('https://oauth2.googleapis.com').post('/token').reply(200, {
              access_token: 'abc123',
            }),
            nock('https://iamcredentials.googleapis.com')
              .post(
                '/v1/projects/-/serviceAccounts/target@project.iam.gserviceaccount.com:generateAccessToken',
              )
              .reply(200, {
                accessToken: 'qwerty345',
                expireTime: tomorrow.toISOString(),
              }),
          ];

          await client.refreshAccessToken();
          scopes.forEach(s => s.done());
          assert.strictEqual(client.credentials.access_token, 'qwerty345');
        });

        it('should allow use defaultScopes when no scopes are available', async () => {
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({keyFilename});
          // Set defaultScopes on Auth instance. This should be set on the
          // underlying client.
          auth.defaultScopes = defaultScopes;
          const client = (await auth.getClient()) as BaseExternalAccountClient;

          assert.strictEqual(client.scopes, defaultScopes);
        });

        it('should prefer user scopes over defaultScopes', async () => {
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({scopes: userScopes, keyFilename});
          // Set defaultScopes on Auth instance. User scopes should be used.
          auth.defaultScopes = defaultScopes;
          const client = (await auth.getClient()) as BaseExternalAccountClient;

          assert.strictEqual(client.scopes, userScopes);
        });

        it('should allow passing scopes to get a client', async () => {
          const scopes = ['http://examples.com/is/a/scope'];
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({scopes, keyFilename});
          const client = (await auth.getClient()) as BaseExternalAccountClient;

          assert.strictEqual(client.scopes, scopes);
        });

        it('should allow passing a scope to get a client', async () => {
          const scopes = 'http://examples.com/is/a/scope';
          const keyFilename = './test/fixtures/external-account-cred.json';
          const auth = new GoogleAuth({scopes, keyFilename});
          const client = (await auth.getClient()) as BaseExternalAccountClient;

          assert.strictEqual(client.scopes, scopes);
        });
      });

      describe('sign()', () => {
        it('should reject when no impersonation is used', async () => {
          const auth = new GoogleAuth({
            credentials: createExternalAccountJSON(),
            universeDomain: DEFAULT_UNIVERSE,
          });

          await assert.rejects(
            auth.sign('abc123'),
            /Cannot sign data without `client_email`/,
          );
        });

        it('should use IAMCredentials endpoint when impersonation is used', async () => {
          const scopes = mockGetAccessTokenAndProjectId(
            false,
            ['https://www.googleapis.com/auth/cloud-platform'],
            true,
          );
          const email = saEmail;
          const configWithImpersonation = createExternalAccountJSON();
          configWithImpersonation.service_account_impersonation_url =
            getServiceAccountImpersonationUrl();
          const iamUri = 'https://iamcredentials.googleapis.com';
          const iamPath = `/v1/projects/-/serviceAccounts/${email}:signBlob`;
          const signedBlob = 'erutangis';
          const data = 'abc123';
          scopes.push(
            nock(iamUri)
              .post(
                iamPath,
                {
                  payload: Buffer.from(data, 'utf-8').toString('base64'),
                },
                {
                  reqheaders: {
                    authorization: `Bearer ${saSuccessResponse.accessToken}`,
                    'content-type': 'application/json',
                  },
                },
              )
              .reply(200, {signedBlob}),
          );
          const auth = new GoogleAuth({
            credentials: configWithImpersonation,
            universeDomain: DEFAULT_UNIVERSE,
          });

          const value = await auth.sign(data);

          scopes.forEach(x => x.done());
          assert.strictEqual(value, signedBlob);
        });
      });

      it('getIdTokenClient() should reject', async () => {
        const auth = new GoogleAuth({
          credentials: createExternalAccountJSON(),
          universeDomain: DEFAULT_UNIVERSE,
        });

        await assert.rejects(
          auth.getIdTokenClient('a-target-audience'),
          /Cannot fetch ID token in this environment/,
        );
      });

      it('getAccessToken() should get an access token', async () => {
        const scopes = mockGetAccessTokenAndProjectId(false);
        const keyFilename = './test/fixtures/external-account-cred.json';
        const auth = new GoogleAuth({keyFilename});
        const token = await auth.getAccessToken();

        assert.strictEqual(token, stsSuccessfulResponse.access_token);
        scopes.forEach(s => s.done());
      });

      it('getRequestHeaders() should inject authorization header', async () => {
        const scopes = mockGetAccessTokenAndProjectId(false);
        const keyFilename = './test/fixtures/external-account-cred.json';
        const auth = new GoogleAuth({keyFilename});
        const headers = await auth.getRequestHeaders();

        assert.deepStrictEqual(
          headers,
          new Headers({
            authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
          }),
        );
        scopes.forEach(s => s.done());
      });

      it('authorizeRequest() should authorize the request', async () => {
        const scopes = mockGetAccessTokenAndProjectId(false);
        const keyFilename = './test/fixtures/external-account-cred.json';
        const auth = new GoogleAuth({keyFilename});
        const opts = await auth.authorizeRequest({url: 'http://example.com'});

        assert.deepStrictEqual(
          opts.headers,
          new Headers({
            authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
          }),
        );
        scopes.forEach(s => s.done());
      });

      it('#fetch() should make the request with auth header', async () => {
        const url = 'http://example.com';
        const data = {breakfast: 'coffee'};
        const keyFilename = './test/fixtures/external-account-cred.json';
        const scopes = mockGetAccessTokenAndProjectId(false);
        scopes.push(
          nock(url)
            .get('/', undefined, {
              reqheaders: {
                authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
              },
            })
            .reply(200, data),
        );

        const auth = new GoogleAuth({keyFilename});
        const res = await auth.fetch(url);

        assert.deepStrictEqual(res.data, data);
        scopes.forEach(s => s.done());
      });

      it('#request() should make the request with auth header', async () => {
        const url = 'http://example.com';
        const data = {breakfast: 'coffee'};
        const keyFilename = './test/fixtures/external-account-cred.json';
        const scopes = mockGetAccessTokenAndProjectId(false);
        scopes.push(
          nock(url)
            .get('/', undefined, {
              reqheaders: {
                authorization: `Bearer ${stsSuccessfulResponse.access_token}`,
              },
            })
            .reply(200, data),
        );

        const auth = new GoogleAuth({keyFilename});
        const res = await auth.request({url});

        assert.deepStrictEqual(res.data, data);
        scopes.forEach(s => s.done());
      });

      describe('getCredentials()', () => {
        it('getCredentials() should return the service account email for external accounts', async () => {
          // Set up a mock to return path to a valid credentials file.
          const email = saEmail;
          const configWithImpersonation = createExternalAccountJSON();
          configWithImpersonation.service_account_impersonation_url =
            getServiceAccountImpersonationUrl();
          const auth = new GoogleAuth({credentials: configWithImpersonation});
          const body = await auth.getCredentials();
          assert.notStrictEqual(null, body);
          assert.strictEqual(email, body.client_email);
        });
      });
    });

    describe('for impersonated_account types', () => {
      const userScopes = ['https://www.googleapis.com/auth/user.scope'];
      const defaultScopes = ['https://www.googleapis.com/auth/default.scope'];
      const jsonScopes = ['https://www.googleapis.com/auth/drive'];

      function mockGenerateAccessToken(
        expectedScopes: string[],
        serviceAccountEmail = 'service-account-email@project-name.iam.gserviceaccount.com',
      ) {
        nock('https://oauth2.googleapis.com').post('/token').reply(200, {
          access_token: 'source-token',
        });
        const scope = nock('https://iamcredentials.googleapis.com')
          .post(
            `/v1/projects/-/serviceAccounts/${serviceAccountEmail}:generateAccessToken`,
            (body: {scope: string[]}) => {
              assert.deepStrictEqual(body.scope, expectedScopes);
              return true;
            },
          )
          .reply(200, {
            accessToken: 'impersonated-token',
            expireTime: new Date(Date.now() + 3600 * 1000).toISOString(),
          });
        return scope;
      }

      it('should load scopes from the JSON file', async () => {
        const scope = mockGenerateAccessToken(jsonScopes);
        const auth = new GoogleAuth({
          keyFilename: './test/fixtures/impersonated-with-scopes.json',
        });
        const client = (await auth.getClient()) as Impersonated;
        await client.getRequestHeaders();
        scope.done();
      });

      it('should prefer user scopes over JSON scopes', async () => {
        const scope = mockGenerateAccessToken(userScopes);
        const auth = new GoogleAuth({
          keyFilename: './test/fixtures/impersonated-with-scopes.json',
          scopes: userScopes,
        });
        const client = (await auth.getClient()) as Impersonated;
        await client.getRequestHeaders();
        scope.done();
      });

      it('should prefer JSON scopes over default scopes', async () => {
        const scope = mockGenerateAccessToken(jsonScopes);
        const auth = new GoogleAuth({
          keyFilename: './test/fixtures/impersonated-with-scopes.json',
        });
        auth.defaultScopes = defaultScopes;
        const client = (await auth.getClient()) as Impersonated;
        await client.getRequestHeaders();
        scope.done();
      });

      it('should use user scopes when JSON has no scopes', async () => {
        const scope = mockGenerateAccessToken(
          userScopes,
          'target@project.iam.gserviceaccount.com',
        );
        const auth = new GoogleAuth({
          keyFilename:
            './test/fixtures/impersonated_application_default_credentials.json',
          scopes: userScopes,
        });
        const client = (await auth.getClient()) as Impersonated;
        await client.getRequestHeaders();
        scope.done();
      });

      it('should fall back to default scopes when no other scopes are present', async () => {
        const scope = mockGenerateAccessToken(
          defaultScopes,
          'target@project.iam.gserviceaccount.com',
        );
        const auth = new GoogleAuth({
          keyFilename:
            './test/fixtures/impersonated_application_default_credentials.json',
        });
        auth.defaultScopes = defaultScopes;
        const client = (await auth.getClient()) as Impersonated;
        await client.getRequestHeaders();
        scope.done();
      });
    });

    describe('for external_account_authorized_user types', () => {
      /**
       * @return A copy of the external account authorized user JSON auth object
       *   for testing.
       */
      function createExternalAccountAuthorizedUserJson() {
        return Object.assign({}, externalAccountAuthorizedUserJSON);
      }

      describe('fromJSON()', () => {
        it('should create the expected BaseExternalAccountClient', () => {
          const json = createExternalAccountAuthorizedUserJson();
          const result = auth.fromJSON(json);
          assert(result instanceof ExternalAccountAuthorizedUserClient);
        });
      });

      describe('fromStream()', () => {
        it('should read the stream and create a client', async () => {
          const stream = fs.createReadStream(
            './test/fixtures/external-account-authorized-user-cred.json',
          );
          const actualClient = await auth.fromStream(stream);

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });
      });

      describe('getApplicationDefault()', () => {
        it('should use environment variable when it is set', async () => {
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-authorized-user-cred.json',
          );

          const res = await auth.getApplicationDefault();
          const actualClient = res.credential;

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });

        it('should use well-known file when it is available and env const is not set', async () => {
          mockLinuxWellKnownFile(
            './test/fixtures/external-account-authorized-user-cred.json',
          );

          const res = await auth.getApplicationDefault();
          const actualClient = res.credential;

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });
      });

      describe('getApplicationCredentialsFromFilePath()', () => {
        it('should correctly read the file and create a valid client', async () => {
          const actualClient =
            await auth._getApplicationCredentialsFromFilePath(
              './test/fixtures/external-account-authorized-user-cred.json',
            );

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });
      });

      describe('getClient()', () => {
        it('should initialize from credentials', async () => {
          const auth = new GoogleAuth({
            credentials: createExternalAccountAuthorizedUserJson(),
          });
          const actualClient = await auth.getClient();

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });

        it('should initialize from keyFileName', async () => {
          const keyFilename =
            './test/fixtures/external-account-authorized-user-cred.json';
          const auth = new GoogleAuth({keyFilename});
          const actualClient = await auth.getClient();

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });

        it('should initialize from ADC', async () => {
          // Set up a mock to return path to a valid credentials file.
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-authorized-user-cred.json',
          );
          const auth = new GoogleAuth();
          const actualClient = await auth.getClient();

          assert(actualClient instanceof ExternalAccountAuthorizedUserClient);
        });

        it('should return the same instance for concurrent requests', async () => {
          // Set up a mock to return path to a valid credentials file.
          mockEnvVar(
            'GOOGLE_APPLICATION_CREDENTIALS',
            './test/fixtures/external-account-authorized-user-cred.json',
          );
          const auth = new GoogleAuth();

          let client: AuthClient | null = null;
          const getClientCalls = await Promise.all([
            auth.getClient(),
            auth.getClient(),
            auth.getClient(),
          ]);

          for (const resClient of getClientCalls) {
            if (!client) client = resClient;

            assert(client === resClient);
          }
        });
      });

      describe('sign()', () => {
        it('should reject', async () => {
          const auth = new GoogleAuth({
            credentials: createExternalAccountAuthorizedUserJson(),
            universeDomain: DEFAULT_UNIVERSE,
          });

          await assert.rejects(
            auth.sign('abc123'),
            /Cannot sign data without `client_email`/,
          );
        });
      });
    });
  });

  // Allows a client to be instantiated from a certificate,
  // See: https://github.com/googleapis/google-auth-library-nodejs/issues/808
  it('allows client to be instantiated from PEM key file', async () => {
    const auth = new GoogleAuth({
      keyFile: PEM_PATH,
      clientOptions: {
        scopes: 'http://foo',
        email: 'foo@serviceaccount.com',
        subject: 'bar@subjectaccount.com',
      },
    });
    const jwt = await auth.getClient();
    const scope = createGTokenMock({access_token: 'initial-access-token'});
    const headers = await jwt.getRequestHeaders();
    assert.deepStrictEqual(
      headers.get('authorization'),
      'Bearer initial-access-token',
    );
    scope.done();
    assert.strictEqual('http://foo', (jwt as JWT).gtoken!.scope);
  });

  // Allows a client to be instantiated from a certificate,
  // See: https://github.com/googleapis/google-auth-library-nodejs/issues/808
  it('allows client to be instantiated from PEM key file', async () => {
    const auth = new GoogleAuth({
      keyFile: PEM_PATH,
      clientOptions: {
        scopes: 'http://foo',
        email: 'foo@serviceaccount.com',
        subject: 'bar@subjectaccount.com',
      },
    });
    const jwt = await auth.getClient();
    const scope = createGTokenMock({access_token: 'initial-access-token'});
    const headers = await jwt.getRequestHeaders();
    assert.deepStrictEqual(
      headers.get('authorization'),
      'Bearer initial-access-token',
    );
    scope.done();
    assert.strictEqual('http://foo', (jwt as JWT).gtoken!.scope);
  });

  // Allows a client to be instantiated from a certificate,
  // See: https://github.com/googleapis/google-auth-library-nodejs/issues/808
  it('allows client to be instantiated from PEM key file', async () => {
    const auth = new GoogleAuth({
      keyFile: PEM_PATH,
      clientOptions: {
        scopes: 'http://foo',
        email: 'foo@serviceaccount.com',
        subject: 'bar@subjectaccount.com',
      },
    });
    const jwt = await auth.getClient();
    const scope = createGTokenMock({access_token: 'initial-access-token'});
    const headers = await jwt.getRequestHeaders();
    assert.deepStrictEqual(
      headers.get('authorization'),
      'Bearer initial-access-token',
    );
    scope.done();
    assert.strictEqual('http://foo', (jwt as JWT).gtoken!.scope);
  });
});
