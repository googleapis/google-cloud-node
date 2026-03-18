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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {
  GoogleToken,
  TokenOptions,
  Transporter,
  TokenData,
} from '../../src/gtoken/googleToken';
import {GaxiosOptions, GaxiosResponse} from 'gaxios';
import * as tokenHandler from '../../src/gtoken/tokenHandler';
import * as revokeTokenModule from '../../src/gtoken/revokeToken';

describe('GoogleToken', () => {
  const sandbox = sinon.createSandbox();
  let tokenHandlerStub: sinon.SinonStubbedInstance<tokenHandler.TokenHandler>;
  let revokeTokenStub: sinon.SinonStub;

  beforeEach(() => {
    // Stub the TokenHandler constructor to control its behavior
    tokenHandlerStub = sandbox.createStubInstance(tokenHandler.TokenHandler);
    sandbox.stub(tokenHandler, 'TokenHandler').returns(tokenHandlerStub);
    revokeTokenStub = sandbox.stub(revokeTokenModule, 'revokeToken');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should initialize with default options if none are provided', () => {
    const token: GoogleToken = new GoogleToken();
    const options: TokenOptions = token.googleTokenOptions;
    assert.ok(options.transporter);
    assert.ok(typeof options.transporter.request === 'function');
  });

  it('should initialize with provided options', () => {
    const providedOptions: TokenOptions = {
      keyFile: '/path/to/key.json',
      key: 'fake-key',
      email: 'test@example.com',
      iss: 'test-issuer@example.com',
      sub: 'test-subject@example.com',
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      additionalClaims: {aud: 'https://example.com/audience'},
      eagerRefreshThresholdMillis: 5000,
    };
    const token: GoogleToken = new GoogleToken(providedOptions);
    const options: TokenOptions = token.googleTokenOptions;
    assert.strictEqual(options.keyFile, providedOptions.keyFile);
    assert.strictEqual(options.key, providedOptions.key);
    assert.strictEqual(options.email, providedOptions.email);
    assert.strictEqual(options.iss, providedOptions.iss);
    assert.strictEqual(options.sub, providedOptions.sub);
    assert.strictEqual(options.scope, providedOptions.scope);
    assert.deepStrictEqual(
      options.additionalClaims,
      providedOptions.additionalClaims,
    );
    assert.strictEqual(
      options.eagerRefreshThresholdMillis,
      providedOptions.eagerRefreshThresholdMillis,
    );
    assert.ok(options.transporter);
    assert.ok(typeof options.transporter.request === 'function');
  });

  it('should set iss from email if provided', () => {
    const providedOptions: TokenOptions = {
      email: 'test@example.com',
    };
    const token: GoogleToken = new GoogleToken(providedOptions);
    const options: TokenOptions = token.googleTokenOptions;
    assert.strictEqual(options.iss, 'test@example.com');
  });

  it('should not override iss with email if both are provided', () => {
    const providedOptions: TokenOptions = {
      email: 'test@example.com',
      iss: 'original-issuer@example.com',
    };
    const token: GoogleToken = new GoogleToken(providedOptions);
    const options: TokenOptions = token.googleTokenOptions;
    assert.strictEqual(options.iss, 'original-issuer@example.com');
  });

  it('should convert array of scopes to a space-delimited string', () => {
    const token = new GoogleToken({scope: ['scope1', 'scope2']});
    assert.strictEqual(token.googleTokenOptions.scope, 'scope1 scope2');
  });

  it('should use a custom transporter if provided in options', () => {
    const customTransporter: Transporter = {
      request: async <T>(opts: GaxiosOptions) => {
        const data = 'custom response' as T;
        const res = new Response(JSON.stringify(data));
        return Object.assign(res, {
          data,
          config: opts,
        }) as GaxiosResponse<T>;
      },
    };
    const providedOptions: TokenOptions = {
      email: 'test@example.com',
      transporter: customTransporter,
    };
    const token: GoogleToken = new GoogleToken(providedOptions);
    const options: TokenOptions = token.googleTokenOptions;
    assert.deepStrictEqual(options.email, providedOptions.email);
    assert.strictEqual(options.transporter, customTransporter);
  });

  it('googleTokenOptions should return the internal tokenOptions object', () => {
    const providedOptions: TokenOptions = {email: 'getter@example.com'};
    const token: GoogleToken = new GoogleToken(providedOptions);
    assert.deepStrictEqual(
      token.googleTokenOptions.email,
      providedOptions.email,
    );
  });

  describe('Getters', () => {
    it('should return undefined for token properties if no token is set', () => {
      const token = new GoogleToken();
      assert.strictEqual(token.accessToken, undefined);
      assert.strictEqual(token.idToken, undefined);
      assert.strictEqual(token.tokenType, undefined);
      assert.strictEqual(token.refreshToken, undefined);
    });

    it('should return correct values from the cached token', () => {
      const tokenData: TokenData = {
        access_token: 'access',
        id_token: 'id',
        token_type: 'Bearer',
        refresh_token: 'refresh',
      };
      tokenHandlerStub.token = tokenData;
      const token = new GoogleToken();
      assert.strictEqual(token.accessToken, 'access');
      assert.strictEqual(token.idToken, 'id');
      assert.strictEqual(token.tokenType, 'Bearer');
      assert.strictEqual(token.refreshToken, 'refresh');
    });
  });

  describe('Expiration methods', () => {
    it('should delegate hasExpired to the token handler', () => {
      tokenHandlerStub.hasExpired.returns(true);
      const token = new GoogleToken();
      assert.strictEqual(token.hasExpired(), true);
      assert.ok(tokenHandlerStub.hasExpired.calledOnce);
    });

    it('should delegate isTokenExpiring to the token handler', () => {
      tokenHandlerStub.isTokenExpiring.returns(false);
      const token = new GoogleToken();
      assert.strictEqual(token.isTokenExpiring(), false);
      assert.ok(tokenHandlerStub.isTokenExpiring.calledOnce);
    });
  });

  describe('getToken', () => {
    it('should call tokenHandler.getToken and return a promise', async () => {
      const tokenData: TokenData = {access_token: 'new-token'};
      tokenHandlerStub.getToken.resolves(tokenData);
      const token = new GoogleToken();
      const result = await token.getToken({forceRefresh: true});
      assert.strictEqual(result, tokenData);
      assert.ok(tokenHandlerStub.getToken.calledOnceWith(true));
    });

    it('should work with a callback on success', done => {
      const tokenData: TokenData = {access_token: 'new-token'};
      tokenHandlerStub.getToken.resolves(tokenData);
      const token = new GoogleToken();
      token.getToken((err, result) => {
        assert.ifError(err);
        assert.strictEqual(result, tokenData);
        assert.ok(tokenHandlerStub.getToken.calledOnceWith(false));
        done();
      });
    });

    it('should work with a callback on error', done => {
      const error = new Error('getToken failed');
      tokenHandlerStub.getToken.rejects(error);
      const token = new GoogleToken();
      token.getToken((err, result) => {
        assert.strictEqual(err, error);
        assert.strictEqual(result, undefined);
        done();
      });
    });
  });

  describe('revokeToken', () => {
    it('should call revokeToken and reset the handler', async () => {
      const tokenData: TokenData = {access_token: 'token-to-revoke'};
      tokenHandlerStub.token = tokenData;
      revokeTokenStub.resolves();
      const token = new GoogleToken();
      await token.revokeToken();
      assert.ok(revokeTokenStub.calledOnceWith('token-to-revoke'));
      // Check that a new handler was created (initial creation + reset)
      assert.ok(
        (tokenHandler.TokenHandler as unknown as sinon.SinonStub).calledTwice,
      );
    });

    it('should reject if there is no token to revoke', async () => {
      const token = new GoogleToken();
      await assert.rejects(() => token.revokeToken(), /No token to revoke/);
    });

    it('should work with a callback on success', done => {
      const tokenData: TokenData = {access_token: 'token-to-revoke'};
      tokenHandlerStub.token = tokenData;
      revokeTokenStub.resolves();
      const token = new GoogleToken();
      token.revokeToken(err => {
        assert.ifError(err);
        assert.ok(revokeTokenStub.calledOnce);
        done();
      });
    });

    it('should work with a callback on error', done => {
      const error = new Error('Revoke failed');
      revokeTokenStub.rejects(error);
      tokenHandlerStub.token = {access_token: 'token'};
      const token = new GoogleToken();
      token.revokeToken(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });
});
