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

  it('should perform token exchange successfully with valid assertion signature (SEC1 key)', async () => {
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
        assert.strictEqual(body.audience, 'target-audience');
        assert.strictEqual(body.grant_type, 'urn:ietf:params:oauth:token-type:token-exchange');
        assert.strictEqual(body.requested_token_type, 'urn:ietf:params:oauth:token-type:access_token');
        assert.strictEqual(body.subject_token_type, 'urn:k8s:params:oauth:token-type:serviceaccount');
        assert.ok(body.subject_token);
        interceptedAssertion = body.subject_token;
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
      });

    const res = await client.getAccessToken();
    nockScope.done();
    assert.ok(readFileStub.calledOnce);
    assert.strictEqual(res.token, 'ca-verified-token');
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
});
