// Copyright 2013 Google LLC
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
import * as fs from 'fs';
import * as jws from 'jws';
import * as sinon from 'sinon';

import {JWTAccess} from '../src';

const keypair = require('keypair');

describe('jwtaccess', () => {
  // Creates a standard JSON credentials object for testing.
  const json = {
    private_key_id: 'key123',
    private_key: 'privatekey',
    client_email: 'hello@youarecool.com',
    client_id: 'client123',
    type: 'service_account',
  };

  const keys = keypair(512 /* bitsize of private key */);
  const testUri = 'http:/example.com/my_test_service';
  const email = 'foo@serviceaccount.com';

  let client: JWTAccess;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    client = new JWTAccess();
  });
  afterEach(() => sandbox.restore());

  function removeBearerFromAuthorizationHeader(headers: Headers): string {
    return (headers.get('authorization') || '').replace('Bearer ', '');
  }

  it('getRequestHeaders should create a signed JWT token as the access token', () => {
    const client = new JWTAccess(email, keys.private);
    const headers = client.getRequestHeaders(testUri);
    assert.notStrictEqual(null, headers, 'an creds object should be present');
    const decoded = jws.decode(removeBearerFromAuthorizationHeader(headers));
    assert(decoded);
    assert.deepStrictEqual(decoded.header, {alg: 'RS256', typ: 'JWT'});
    const payload = decoded.payload;
    assert.strictEqual(email, payload.iss);
    assert.strictEqual(email, payload.sub);
    assert.strictEqual(testUri, payload.aud);
  });

  it('getRequestHeaders should sign with scopes if user supplied scopes', () => {
    const client = new JWTAccess(email, keys.private);
    const headers = client.getRequestHeaders(testUri, undefined, 'myfakescope');
    const decoded = jws.decode(removeBearerFromAuthorizationHeader(headers));
    assert(decoded);
    const payload = decoded.payload;
    assert.strictEqual('myfakescope', payload.scope);
  });

  it('getRequestHeaders should sign with default if user did not supply scopes', () => {
    const client = new JWTAccess(email, keys.private);
    const headers = client.getRequestHeaders(testUri);
    const decoded = jws.decode(removeBearerFromAuthorizationHeader(headers));
    assert(decoded);
    const payload = decoded.payload;
    assert.strictEqual(testUri, payload.aud);
  });

  it('getRequestHeaders should set key id in header when available', () => {
    const client = new JWTAccess(email, keys.private, '101');
    const headers = client.getRequestHeaders(testUri);
    const decoded = jws.decode(removeBearerFromAuthorizationHeader(headers));
    assert(decoded);
    assert.deepStrictEqual(decoded.header, {
      alg: 'RS256',
      typ: 'JWT',
      kid: '101',
    });
  });

  it('getRequestHeaders should not allow overriding with additionalClaims', () => {
    const client = new JWTAccess(email, keys.private);
    const additionalClaims = {iss: 'not-the-email'};
    assert.throws(() => {
      client.getRequestHeaders(testUri, additionalClaims);
    }, /^Error: The 'iss' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.$/);
  });

  it('getRequestHeaders should return a cached token on the second request', () => {
    const client = new JWTAccess(email, keys.private);
    const res = client.getRequestHeaders(testUri);
    const res2 = client.getRequestHeaders(testUri);
    assert.deepStrictEqual(res, res2);
  });

  it('getRequestHeaders should not return cached tokens older than an hour', () => {
    const client = new JWTAccess(email, keys.private);
    const res = client.getRequestHeaders(testUri);
    const realDateNow = Date.now;
    try {
      // go forward in time one hour (plus a little)
      Date.now = () => realDateNow() + 1000 * 60 * 60 + 10;
      const res2 = client.getRequestHeaders(testUri);
      assert.notStrictEqual(res, res2);
    } finally {
      // return date.now to it's normally scheduled programming
      Date.now = realDateNow;
    }
  });

  it('fromJson should error on null json', () => {
    assert.throws(() => {
      // Test verifies invalid parameter tests, which requires cast to any.
      (client as ReturnType<JSON['parse']>).fromJSON(null);
    });
  });

  it('fromJson should error on empty json', () => {
    assert.throws(() => {
      client.fromJSON({});
    });
  });

  it('fromJson should error on missing client_email', () => {
    const j = Object.assign({}, json);
    delete (j as Partial<typeof j>).client_email;
    assert.throws(() => {
      client.fromJSON(j);
    });
  });

  it('fromJson should error on missing private_key', () => {
    const j = Object.assign({}, json);
    delete (j as Partial<typeof j>).private_key;
    assert.throws(() => {
      client.fromJSON(j);
    });
  });

  it('fromJson should create JWT with client_email', () => {
    client.fromJSON(json);
    assert.strictEqual(json.client_email, client.email);
  });

  it('fromJson should create JWT with private_key', () => {
    client.fromJSON(json);
    assert.strictEqual(json.private_key, client.key);
  });

  it('fromJson should create JWT with private_key_id', () => {
    client.fromJSON(json);
    assert.strictEqual(json.private_key_id, client.keyId);
  });

  it('fromStream should error on null stream', done => {
    // Test verifies invalid parameter tests, which requires cast to any.
    (client as ReturnType<JSON['parse']>).fromStream(null, (err: Error) => {
      assert.strictEqual(true, err instanceof Error);
      done();
    });
  });

  it('fromStream should construct a JWT Header instance from a stream', async () => {
    // Read the contents of the file into a json object.
    const fileContents = fs.readFileSync(
      './test/fixtures/private.json',
      'utf-8',
    );
    const json = JSON.parse(fileContents);

    // Now open a stream on the same file.
    const stream = fs.createReadStream('./test/fixtures/private.json');

    // And pass it into the fromStream method.
    await client.fromStream(stream);
    // Ensure that the correct bits were pulled from the stream.
    assert.strictEqual(json.private_key, client.key);
    assert.strictEqual(json.client_email, client.email);
  });

  it('should cache a key with scopes if url & scopes are passed', async () => {
    const client = new JWTAccess(email, keys.private);
    const testUri = 'http:/example.com/my_test_service';
    const scopes = 'scope1';
    const cacheKey = client.getCachedKey(testUri, scopes);
    assert.strictEqual(cacheKey, `${testUri}_${scopes}`);
  });

  it('should cache a key with scopes if url & an array of scopes are passed', async () => {
    const client = new JWTAccess(email, keys.private);
    const testUri = 'http:/example.com/my_test_service';
    const scopes = ['scope1', 'scope2'];
    const cacheKey = client.getCachedKey(testUri, scopes);
    assert.strictEqual(cacheKey, `${testUri}_${scopes.join('_')}`);
  });

  it('should cache a key with a URL if nothing else is passed into cacheKey', async () => {
    const client = new JWTAccess(email, keys.private);
    const testUri = 'http:/example.com/my_test_service';
    const cacheKey = client.getCachedKey(testUri);
    assert.strictEqual(cacheKey, testUri);
  });

  it('should throw an error when caching a key if nothing is passed', async () => {
    const client = new JWTAccess(email, keys.private);
    assert.throws(() => {
      client.getCachedKey();
    }, /Scopes or url must be provided/);
  });
});
