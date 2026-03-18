// Copyright 2025 Google LLC
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
import * as sinon from 'sinon';
import {TokenHandler} from '../../src/gtoken/tokenHandler';
import {TokenOptions, Transporter} from '../../src/gtoken/tokenOptions';
import * as getTokenModule from '../../src/gtoken/getToken';
import * as getCredentialsModule from '../../src/gtoken/getCredentials';
import {TokenData} from '../../src/gtoken/getToken';

describe('TokenHandler', () => {
  const sandbox = sinon.createSandbox();
  let getTokenStub: sinon.SinonStub;
  let getCredentialsStub: sinon.SinonStub;
  let transporter: Transporter;

  beforeEach(() => {
    getTokenStub = sandbox.stub(getTokenModule, 'getToken');
    getCredentialsStub = sandbox.stub(getCredentialsModule, 'getCredentials');
    transporter = {request: sandbox.stub()};
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should throw if neither key nor keyFile are provided', async () => {
    const tokenOptions: TokenOptions = {transporter};
    const handler = new TokenHandler(tokenOptions);
    await assert.rejects(handler.getToken(false), /No key or keyFile set/);
  });

  it('should process keyFile and fetch a token', async () => {
    const tokenOptions: TokenOptions = {keyFile: 'key.json', transporter};
    const credentials = {privateKey: 'private-key', clientEmail: 'email'};
    const tokenData: TokenData = {access_token: 'token'};

    getCredentialsStub.resolves(credentials);
    getTokenStub.resolves(tokenData);

    const handler = new TokenHandler(tokenOptions);
    const token = await handler.getToken(false);

    assert.strictEqual(token, tokenData);
    assert.ok(getCredentialsStub.calledOnceWith('key.json'));
    assert.ok(getTokenStub.calledOnce);
    // Check that options were updated
    assert.strictEqual(tokenOptions.key, credentials.privateKey);
    assert.strictEqual(tokenOptions.email, credentials.clientEmail);
  });

  it('should use provided key to fetch a token', async () => {
    const tokenOptions: TokenOptions = {key: 'private-key', transporter};
    const tokenData: TokenData = {access_token: 'token'};
    getTokenStub.resolves(tokenData);

    const handler = new TokenHandler(tokenOptions);
    const token = await handler.getToken(false);

    assert.strictEqual(token, tokenData);
    assert.ok(getCredentialsStub.notCalled);
    assert.ok(getTokenStub.calledOnce);
  });

  it('should return a cached token if it is not expiring', async () => {
    const tokenOptions: TokenOptions = {key: 'private-key', transporter};
    const tokenData: TokenData = {access_token: 'token'};
    getTokenStub.resolves(tokenData);

    const handler = new TokenHandler(tokenOptions);
    handler.token = tokenData;
    handler.tokenExpiresAt = new Date().getTime() + 5000; // Expires in 5 seconds

    const token = await handler.getToken(false);

    assert.strictEqual(token, tokenData);
    assert.ok(getTokenStub.notCalled); // Should not fetch a new one
  });

  it('should fetch a new token if the cached one is expiring', async () => {
    const tokenOptions: TokenOptions = {key: 'private-key', transporter};
    const oldToken: TokenData = {access_token: 'old-token'};
    const newToken: TokenData = {access_token: 'new-token'};
    getTokenStub.resolves(newToken);

    const handler = new TokenHandler(tokenOptions);
    handler.token = oldToken;
    handler.tokenExpiresAt = new Date().getTime() - 1000; // Expired 1 second ago

    const token = await handler.getToken(false);

    assert.strictEqual(token, newToken);
    assert.ok(getTokenStub.calledOnce);
  });

  it('should fetch a new token if forceRefresh is true', async () => {
    const tokenOptions: TokenOptions = {key: 'private-key', transporter};
    const oldToken: TokenData = {access_token: 'old-token'};
    const newToken: TokenData = {access_token: 'new-token'};
    getTokenStub.resolves(newToken);

    const handler = new TokenHandler(tokenOptions);
    handler.token = oldToken;
    handler.tokenExpiresAt = new Date().getTime() + 5000; // Not expired

    const token = await handler.getToken(true); // Force refresh

    assert.strictEqual(token, newToken);
    assert.ok(getTokenStub.calledOnce);
  });

  it('should handle in-flight requests correctly', async () => {
    const tokenOptions: TokenOptions = {key: 'private-key', transporter};
    const tokenData: TokenData = {access_token: 'token'};
    // Make the stub resolve asynchronously to simulate a network request
    getTokenStub.returns(
      new Promise(resolve => setTimeout(() => resolve(tokenData), 50)),
    );

    const handler = new TokenHandler(tokenOptions);

    const [token1, token2] = await Promise.all([
      handler.getToken(false),
      handler.getToken(false),
    ]);

    assert.strictEqual(token1, tokenData);
    assert.strictEqual(token2, tokenData);
    assert.ok(getTokenStub.calledOnce); // Should only be called once for both requests
  });

  describe('isTokenExpiring', () => {
    it('should return true if there is no token', () => {
      const handler = new TokenHandler({transporter});
      assert.strictEqual(handler.isTokenExpiring(), true);
    });

    it('should return true if token is expired', () => {
      const handler = new TokenHandler({transporter});
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() - 1000;
      assert.strictEqual(handler.isTokenExpiring(), true);
    });

    it('should return true if token is within eager refresh threshold', () => {
      const tokenOptions: TokenOptions = {
        eagerRefreshThresholdMillis: 5000,
        transporter,
      };
      const handler = new TokenHandler(tokenOptions);
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() + 3000; // Expires in 3s, which is < 5s threshold
      assert.strictEqual(handler.isTokenExpiring(), true);
    });

    it('should return false if token is not expiring', () => {
      const tokenOptions: TokenOptions = {
        eagerRefreshThresholdMillis: 5000,
        transporter,
      };
      const handler = new TokenHandler(tokenOptions);
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() + 10000; // Expires in 10s
      assert.strictEqual(handler.isTokenExpiring(), false);
    });
  });

  describe('hasExpired', () => {
    it('should return true if there is no token', () => {
      const handler = new TokenHandler({transporter});
      assert.strictEqual(handler.hasExpired(), true);
    });

    it('should return true if token is expired', () => {
      const handler = new TokenHandler({transporter});
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() - 1000;
      assert.strictEqual(handler.hasExpired(), true);
    });

    it('should return false if token is within eager refresh threshold but not expired', () => {
      const tokenOptions: TokenOptions = {
        eagerRefreshThresholdMillis: 5000,
        transporter,
      };
      const handler = new TokenHandler(tokenOptions);
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() + 3000; // Expires in 3s
      assert.strictEqual(handler.hasExpired(), false);
    });

    it('should return false if token is not expired', () => {
      const handler = new TokenHandler({transporter});
      handler.token = {access_token: 'token'};
      handler.tokenExpiresAt = new Date().getTime() + 10000; // Expires in 10s
      assert.strictEqual(handler.hasExpired(), false);
    });
  });
});
