// Copyright 2026 Google LLC
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
import * as nock from 'nock';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as sinon from 'sinon';
import {GdchClient, GDCH_SERVICE_ACCOUNT_TYPE, GdchCredentialsInput} from '../src/auth/gdchclient';

nock.disableNetConnect();

describe('GdchClient', () => {
  let privateKeyPemSec1: string;
  let privateKeyPemPkcs8: string;
  let publicKeyPem: string;

  beforeEach(() => {
    // Dynamically generate an EC key pair for testing
    const {privateKey: keySec1, publicKey} = crypto.generateKeyPairSync('ec', {
      namedCurve: 'prime256v1',
      privateKeyEncoding: {
        type: 'sec1',
        format: 'pem',
      },
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
    });
    privateKeyPemSec1 = keySec1;
    publicKeyPem = publicKey;

    const {privateKey: keyPkcs8} = crypto.generateKeyPairSync('ec', {
      namedCurve: 'prime256v1',
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
    privateKeyPemPkcs8 = keyPkcs8;
  });

  afterEach(() => {
    nock.cleanAll();
    sinon.restore();
  });

  it('should initialize options properly in constructor', () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      lifetime: 1800,
    });

    assert.strictEqual(client.projectId, 'test-project');
    assert.strictEqual(client.privateKeyId, 'key-id-123');
    assert.strictEqual(client.privateKey, privateKeyPemSec1);
    assert.strictEqual(client.serviceIdentityName, 'sa-name');
    assert.strictEqual(client.tokenServerUri, 'https://token-server.local/token');
    assert.strictEqual(client.apiAudience, 'target-audience');
    assert.strictEqual(client.lifetime, 1800);
    assert.strictEqual(client.credentials.refresh_token, 'gdch-placeholder');
  });

  it('should parse JSON options via fromJSON() correctly', () => {
    const client = new GdchClient();
    const json: GdchCredentialsInput = {
      type: GDCH_SERVICE_ACCOUNT_TYPE,
      format_version: '1',
      project: 'test-project',
      private_key_id: 'key-id-123',
      private_key: privateKeyPemSec1,
      name: 'sa-name',
      token_uri: 'https://token-server.local/token',
      ca_cert_path: '/path/to/ca.crt',
    };

    client.fromJSON(json);

    assert.strictEqual(client.projectId, 'test-project');
    assert.strictEqual(client.privateKeyId, 'key-id-123');
    assert.strictEqual(client.privateKey, privateKeyPemSec1);
    assert.strictEqual(client.serviceIdentityName, 'sa-name');
    assert.strictEqual(client.tokenServerUri, 'https://token-server.local/token');
    assert.strictEqual(client.caCertPath, '/path/to/ca.crt');
  });

  it('fromJSON() should throw error if type is mismatch', () => {
    const client = new GdchClient();
    const json = {
      type: 'invalid_type',
      format_version: '1',
    } as unknown as GdchCredentialsInput;

    assert.throws(() => {
      client.fromJSON(json);
    }, /does not have the "gdch_service_account" type/);
  });

  it('fromJSON() should throw error if format_version is unsupported', () => {
    const client = new GdchClient();
    const json: GdchCredentialsInput = {
      type: GDCH_SERVICE_ACCOUNT_TYPE,
      format_version: '2',
      project: 'p',
      private_key_id: 'k',
      private_key: 'pk',
      name: 'n',
      token_uri: 'uri',
    };

    assert.throws(() => {
      client.fromJSON(json);
    }, /Only format version 1 is supported/);
  });

  it('fromJSON() should throw error on missing mandatory fields', () => {
    const mandatoryFields: Array<keyof GdchCredentialsInput> = [
      'project',
      'private_key_id',
      'private_key',
      'name',
      'token_uri',
    ];

    mandatoryFields.forEach(field => {
      const json: Partial<GdchCredentialsInput> = {
        type: GDCH_SERVICE_ACCOUNT_TYPE,
        format_version: '1',
        project: 'test-project',
        private_key_id: 'key-id-123',
        private_key: privateKeyPemSec1,
        name: 'sa-name',
        token_uri: 'https://token-server.local/token',
      };
      delete json[field];

      const client = new GdchClient();
      assert.throws(() => {
        client.fromJSON(json as GdchCredentialsInput);
      }, new RegExp(`does not contain a ${field === 'project' ? 'project' : field === 'name' ? 'name' : field === 'token_uri' ? 'token_uri' : field} field`));
    });
  });

  it('should create a scoped client with a custom audience via createWithGdchAudience()', () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      lifetime: 1800,
    });

    const scoped = client.createWithGdchAudience('new-audience');

    assert.notStrictEqual(client, scoped);
    assert.strictEqual(scoped.apiAudience, 'new-audience');
    assert.strictEqual(scoped.projectId, 'test-project');
    assert.strictEqual(scoped.privateKey, privateKeyPemSec1);
    assert.strictEqual(scoped.lifetime, 1800);
  });

  it('createWithGdchAudience() should throw error if audience is empty', () => {
    const client = new GdchClient();
    assert.throws(() => {
      client.createWithGdchAudience('');
    }, /Audience cannot be null or empty/);
  });

  it('should request token correctly', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      lifetime: 1800,
    });

    const scope = nock('https://token-server.local')
      .post('/token', (body) => {
        assert.strictEqual(body.audience, 'target-audience');
        assert.strictEqual(body.grant_type, 'urn:ietf:params:oauth:token-type:token-exchange');
        assert.strictEqual(body.requested_token_type, 'urn:ietf:params:oauth:token-type:access_token');
        assert.strictEqual(body.subject_token_type, 'urn:k8s:params:oauth:token-type:serviceaccount');
        assert.ok(body.subject_token);
        return true;
      })
      .reply(200, {
        access_token: 'exchange-token-abc123',
        expires_in: 3600,
      });

    const res = await client.getAccessToken();
    scope.done();

    assert.strictEqual(res.token, 'exchange-token-abc123');
    assert.strictEqual(client.credentials.access_token, 'exchange-token-abc123');
    assert.ok(client.credentials.expiry_date);
  });

  it('should request token with configured timeout and retry settings', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const requestStub = sinon.stub(client.transporter, 'request').resolves({
      data: {
        access_token: 'mocked-token',
        expires_in: 3600,
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    } as any);

    await client.getAccessToken();

    assert.ok(requestStub.calledOnce);
    const requestOpts = requestStub.firstCall.args[0] as any;
    assert.strictEqual(requestOpts.timeout, 10000);
    assert.strictEqual(requestOpts.retry, true);
    assert.deepStrictEqual(requestOpts.retryConfig, {
      httpMethodsToRetry: ['POST'],
      statusCodesToRetry: [[500, 599]],
      noResponseRetries: 3,
    });
  });

  it('should generate assertion signature with correct header and payload properties', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      lifetime: 1800,
    });

    let interceptedAssertion = '';

    const scope = nock('https://token-server.local')
      .post('/token', (body) => {
        interceptedAssertion = body.subject_token;
        return true;
      })
      .reply(200, {
        access_token: 'exchange-token-abc123',
        expires_in: 3600,
      });

    await client.getAccessToken();
    scope.done();

    // Validate assertion signature
    const parts = interceptedAssertion.split('.');
    assert.strictEqual(parts.length, 3);

    const header = JSON.parse(Buffer.from(parts[0], 'base64').toString('utf8'));
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'));

    assert.strictEqual(header.alg, 'ES256');
    assert.strictEqual(header.typ, 'JWT');
    assert.strictEqual(header.kid, 'key-id-123');

    assert.strictEqual(payload.iss, 'system:serviceaccount:test-project:sa-name');
    assert.strictEqual(payload.sub, 'system:serviceaccount:test-project:sa-name');
    assert.strictEqual(payload.aud, 'https://token-server.local/token');
    assert.ok(payload.iat);
    assert.strictEqual(payload.exp, payload.iat + 1800);
  });

  it('should generate assertion signature that can be verified with the public key', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      lifetime: 1800,
    });

    let interceptedAssertion = '';

    const scope = nock('https://token-server.local')
      .post('/token', (body) => {
        interceptedAssertion = body.subject_token;
        return true;
      })
      .reply(200, {
        access_token: 'exchange-token-abc123',
        expires_in: 3600,
      });

    await client.getAccessToken();
    scope.done();

    const parts = interceptedAssertion.split('.');
    assert.strictEqual(parts.length, 3);

    // Verify Signature using the Public Key
    const signingInput = `${parts[0]}.${parts[1]}`;
    const signature = Buffer.from(parts[2], 'base64');

    const verifier = crypto.createVerify('sha256');
    verifier.update(signingInput);
    const signatureValid = verifier.verify(
      {
        key: publicKeyPem,
        dsaEncoding: 'ieee-p1363',
      },
      signature
    );
    assert.ok(signatureValid, 'JWT assertion signature should be valid.');
  });

  it('should perform token exchange successfully with PKCS#8 key', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemPkcs8,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const scope = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'pkcs8-token',
        expires_in: 1800,
      });

    const res = await client.getAccessToken();
    scope.done();

    assert.strictEqual(res.token, 'pkcs8-token');
    assert.strictEqual(client.credentials.access_token, 'pkcs8-token');
  });

  it('should attach custom CA to request agent when ca_cert_path is provided', async () => {
    const caCertPath = '/path/to/custom-ca.pem';
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      caCertPath,
    });

    // Stub fs.promises.readFile to return a mock certificate
    const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
      assert.strictEqual(path, caCertPath);
      return Buffer.from('mock-ca-cert-content');
    });

    const nockScope = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'ca-verified-token',
        expires_in: 3600,
      });

    const res = await client.getAccessToken();
    nockScope.done();
    assert.ok(readFileStub.calledOnce);
    assert.strictEqual(res.token, 'ca-verified-token');
  });

  it('should cache the CA cert agent and not reread the file or recreate the agent for subsequent token refreshes', async () => {
    const caCertPath = '/path/to/custom-ca.pem';
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      caCertPath,
    });

    const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
      assert.strictEqual(path, caCertPath);
      return Buffer.from('mock-ca-cert-content');
    });

    const tokenScope1 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'ca-verified-token-1',
        expires_in: 3600,
      });

    const tokenScope2 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'ca-verified-token-2',
        expires_in: 3600,
      });

    // 1. First token exchange
    const res1 = await client.getAccessToken();
    assert.strictEqual(res1.token, 'ca-verified-token-1');
    tokenScope1.done();

    // Force expiry to trigger second refresh
    client.credentials.expiry_date = 1;

    // 2. Second token exchange
    const res2 = await client.getAccessToken();
    assert.strictEqual(res2.token, 'ca-verified-token-2');
    tokenScope2.done();

    // fs.promises.readFile should only be called once because the agent was cached!
    assert.ok(readFileStub.calledOnce);
  });

  it('should reload the CA cert if caCertPath changes', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      caCertPath: '/path/to/first-ca.pem',
    });

    const tokenScope1 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'exchange-token-abc123',
        expires_in: 3600,
      });

    const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
      return Buffer.from(`content-for-${path}`);
    });

    const tokenScope2 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'exchange-token-xyz789',
        expires_in: 3600,
      });

    // 1. First refresh
    const res1 = await client.getAccessToken();
    assert.strictEqual(res1.token, 'exchange-token-abc123');
    tokenScope1.done();

    // Change the path and force expiry
    client.caCertPath = '/path/to/second-ca.pem';
    client.credentials.expiry_date = 1;

    // 2. Second refresh
    const res2 = await client.getAccessToken();
    assert.strictEqual(res2.token, 'exchange-token-xyz789');
    tokenScope2.done();

    assert.ok(readFileStub.calledTwice);
  });

  it('should reread the CA cert file if CA_CERT_TTL_MS has expired', async () => {
    const caCertPath = '/path/to/custom-ca.pem';
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      caCertPath,
    });

    const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
      assert.strictEqual(path, caCertPath);
      return Buffer.from('mock-ca-cert-content');
    });

    const tokenScope1 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'token-1',
        expires_in: 3600,
      });

    const tokenScope2 = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'token-2',
        expires_in: 3600,
      });

    let nowTime = Date.now();
    const dateNowStub = sinon.stub(Date, 'now').callsFake(() => nowTime);

    try {
      // 1. First token exchange
      const res1 = await client.getAccessToken();
      assert.strictEqual(res1.token, 'token-1');
      tokenScope1.done();
      assert.ok(readFileStub.calledOnce);

      // Force token expiry
      client.credentials.expiry_date = 1;

      // Fast-forward time by 5 minutes and 1 second (300001 ms) to expire the cert cache
      nowTime += 5 * 60 * 1000 + 1;

      // 2. Second token exchange after cert cache expiration
      const res2 = await client.getAccessToken();
      assert.strictEqual(res2.token, 'token-2');
      tokenScope2.done();

      // File should be read a second time!
      assert.ok(readFileStub.calledTwice);
    } finally {
      dateNowStub.restore();
    }
  });

  it('should raise helpful error message if CA cert file is unreadable', async () => {
    const caCertPath = '/path/to/custom-ca.pem';
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
      caCertPath,
    });

    // Stub fs.promises.readFile to throw an error
    const readFileStub = sinon.stub(fs.promises, 'readFile').rejects(new Error('Permission denied'));

    const nockScope = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'ca-verified-token',
        expires_in: 3600,
      });

    await assert.rejects(client.getAccessToken(), (err: Error) => {
      assert.ok(err.message.includes('Error reading certificate file from CA cert path'));
      assert.ok(err.message.includes('Permission denied'));
      return true;
    });
    nock.cleanAll();
    assert.ok(readFileStub.calledOnce);
  });

  it('should throw error if token response does not contain access_token', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const scope = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        expires_in: 3600,
      });

    await assert.rejects(client.getAccessToken(), (err: Error) => {
      assert.ok(err.message.includes('Token response did not contain an access_token.'));
      return true;
    });
    scope.done();
  });

  it('should throw error if token response does not contain expires_in', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const scope = nock('https://token-server.local')
      .post('/token')
      .reply(200, {
        access_token: 'exchange-token-abc123',
      });

    await assert.rejects(client.getAccessToken(), (err: Error) => {
      assert.ok(err.message.includes('Token response did not contain an expires_in field.'));
      return true;
    });
    scope.done();
  });

  it('should raise helpful error message if token exchange fails', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const scope = nock('https://token-server.local')
      .post('/token')
      .reply(400, 'Bad Token Request');

    await assert.rejects(client.getAccessToken(), (err: Error) => {
      assert.ok(err.message.includes('Error getting access token for GDCH service account'));
      assert.ok(err.message.includes('iss: sa-name'));
      return true;
    });
    scope.done();
  });

  it('should redact subject_token in error response on token exchange failure', async () => {
    const client = new GdchClient({
      projectId: 'test-project',
      privateKeyId: 'key-id-123',
      privateKey: privateKeyPemSec1,
      serviceIdentityName: 'sa-name',
      tokenServerUri: 'https://token-server.local/token',
      apiAudience: 'target-audience',
    });

    const scope = nock('https://token-server.local')
      .post('/token')
      .reply(400, 'Bad Request');

    await assert.rejects(client.getAccessToken(), (err: any) => {
      assert.ok(err.message.includes('Error getting access token for GDCH service account'));
      assert.ok(err.config !== undefined);
      assert.ok(err.config.data !== undefined);
      const parsedData = typeof err.config.data === 'string'
        ? JSON.parse(err.config.data)
        : err.config.data;
      assert.strictEqual(parsedData.subject_token, '***REDACTED***');
      return true;
    });
    scope.done();
  });

  describe('requestAsync', () => {
    it('should inject the CA agent for private/local GDCH API requests', async () => {
      const caCertPath = '/path/to/custom-ca.pem';
      const client = new GdchClient({
        projectId: 'test-project',
        privateKeyId: 'key-id-123',
        privateKey: privateKeyPemSec1,
        serviceIdentityName: 'sa-name',
        tokenServerUri: 'https://token-server.local/token',
        apiAudience: 'target-audience',
        caCertPath,
      });

      // Set active mock token to prevent refresh request
      client.credentials = {
        access_token: 'valid-active-mock-token',
        expiry_date: Date.now() + 1000000,
      };

      const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
        assert.strictEqual(path, caCertPath);
        return Buffer.from('mock-ca-cert-content');
      });

      const apiScope = nock('https://api-server.local')
        .get('/data')
        .reply(200, {});

      const opts: any = {
        url: 'https://api-server.local/data',
        method: 'GET',
      };

      const res = await (client as any).requestAsync(opts);
      assert.strictEqual(res.status, 200);
      apiScope.done();

      assert.ok(readFileStub.calledOnce);
      assert.ok(opts.agent !== undefined);
    });

    it('should NOT inject the CA agent for standard public Google API requests', async () => {
      const caCertPath = '/path/to/custom-ca.pem';
      const client = new GdchClient({
        projectId: 'test-project',
        privateKeyId: 'key-id-123',
        privateKey: privateKeyPemSec1,
        serviceIdentityName: 'sa-name',
        tokenServerUri: 'https://token-server.local/token',
        apiAudience: 'target-audience',
        caCertPath,
      });

      // Set active mock token to prevent refresh request
      client.credentials = {
        access_token: 'valid-active-mock-token',
        expiry_date: Date.now() + 1000000,
      };

      const readFileStub = sinon.stub(fs.promises, 'readFile').callsFake(async (path) => {
        return Buffer.from('mock-ca-cert-content');
      });

      const googleScope = nock('https://storage.googleapis.com')
        .get('/bucket/data')
        .reply(200, {});

      const opts: any = {
        url: 'https://storage.googleapis.com/bucket/data',
        method: 'GET',
      };

      const res = await (client as any).requestAsync(opts);
      assert.strictEqual(res.status, 200);
      googleScope.done();

      assert.ok(readFileStub.notCalled);
      assert.strictEqual(opts.agent, undefined);
    });
  });

  describe('serialization and logging safety', () => {
    it('should redact private key, clientSecret, apiKey, and credentials in toJSON() serialization', () => {
      const client = new GdchClient({
        projectId: 'test-project',
        privateKeyId: 'key-id-123',
        privateKey: 'raw-secret-private-key',
        serviceIdentityName: 'sa-name',
        clientSecret: 'raw-client-secret',
        apiKey: 'raw-api-key',
      });
      client._clientSecret = 'raw-internal-client-secret';

      client.credentials = {
        access_token: 'secret-access-token-abc123',
        refresh_token: 'secret-refresh-token-xyz789',
      };

      const serialized = client.toJSON();

      assert.strictEqual(serialized.projectId, 'test-project');
      assert.strictEqual(serialized.privateKeyId, 'key-id-123');
      assert.strictEqual(serialized.privateKey, '***REDACTED***');
      assert.strictEqual(serialized._clientSecret, '***REDACTED***');
      assert.strictEqual(serialized.apiKey, '***REDACTED***');
      assert.strictEqual(serialized.gdchOptions.privateKey, '***REDACTED***');
      assert.strictEqual(serialized.gdchOptions.clientSecret, '***REDACTED***');
      assert.strictEqual(serialized.gdchOptions.apiKey, '***REDACTED***');
      assert.strictEqual(serialized.credentials.access_token, '***REDACTED***');
      assert.strictEqual(serialized.credentials.refresh_token, '***REDACTED***');
    });

    it('should redact private key, clientSecret, apiKey, and credentials in custom inspect console output', () => {
      const client = new GdchClient({
        projectId: 'test-project',
        privateKeyId: 'key-id-123',
        privateKey: 'raw-secret-private-key',
        serviceIdentityName: 'sa-name',
        clientSecret: 'raw-client-secret',
        apiKey: 'raw-api-key',
      });
      client._clientSecret = 'raw-internal-client-secret';

      client.credentials = {
        access_token: 'secret-access-token-abc123',
        refresh_token: 'secret-refresh-token-xyz789',
      };

      const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');
      const inspected = (client as any)[customInspectSymbol]();

      assert.strictEqual(inspected.projectId, 'test-project');
      assert.strictEqual(inspected.privateKey, '***REDACTED***');
      assert.strictEqual(inspected.gdchOptions.privateKey, '***REDACTED***');
      assert.strictEqual(inspected.gdchOptions.clientSecret, '***REDACTED***');
      assert.strictEqual(inspected._clientSecret, '***REDACTED***');
      assert.strictEqual(inspected.apiKey, '***REDACTED***');
      assert.strictEqual(inspected.credentials.access_token, '***REDACTED***');
      assert.strictEqual(inspected.credentials.refresh_token, '***REDACTED***');
    });
  });

  describe('base64UrlEncode', () => {
    it('should correctly encode strings and buffers in base64url format', () => {
      const client = new GdchClient();
      const testCases = [
        {input: 'hello world', expected: 'aGVsbG8gd29ybGQ'},
        {input: 'foo bar baz', expected: 'Zm9vIGJhciBiYXo'},
        {input: 'this is a test', expected: 'dGhpcyBpcyBhIHRlc3Q'},
        {input: 'n>?', expected: 'bj4_'},
        {input: 'n>~', expected: 'bj5-'},
      ];

      for (const tc of testCases) {
        const stringResult = (client as any).base64UrlEncode(tc.input);
        const bufferResult = (client as any).base64UrlEncode(Buffer.from(tc.input));
        assert.strictEqual(stringResult, tc.expected);
        assert.strictEqual(bufferResult, tc.expected);
      }
    });
  });
});
