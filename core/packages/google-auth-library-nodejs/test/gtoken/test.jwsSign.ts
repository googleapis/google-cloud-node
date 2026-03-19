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

import * as fs from 'fs';
import * as assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as jws from 'jws';
import {buildPayloadForJwsSign, getJwsSign} from '../../src/gtoken/jwsSign';
import {TokenOptions} from '../../src/gtoken/tokenOptions';

describe('jwsSign', () => {
  const sandbox = sinon.createSandbox();
  const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
  const privateKey = fs.readFileSync('./test/fixtures/private.pem', 'utf-8');
  const FAKE_KEY =
    '-----BEGIN PRIVATE KEY-----\nFAKEKEY\n-----END PRIVATE KEY-----\n';

  afterEach(() => {
    sandbox.restore();
  });

  describe('buildPayloadForJwsSign', () => {
    it('should build a minimal payload', () => {
      const clock = sandbox.useFakeTimers(new Date().getTime());
      const iat = Math.floor(clock.now / 1000);
      const tokenOptions: TokenOptions = {};
      const payload = buildPayloadForJwsSign(tokenOptions);
      assert.deepStrictEqual(payload, {
        iss: undefined,
        scope: undefined,
        aud: GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat,
        sub: undefined,
      });
    });

    it('should include iss, scope, and sub from tokenOptions', () => {
      const clock = sandbox.useFakeTimers(new Date().getTime());
      const iat = Math.floor(clock.now / 1000);
      const tokenOptions: TokenOptions = {
        iss: 'test-issuer',
        scope: 'test-scope',
        sub: 'test-subject',
      };
      const payload = buildPayloadForJwsSign(tokenOptions);
      assert.deepStrictEqual(payload, {
        iss: 'test-issuer',
        scope: 'test-scope',
        aud: GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat,
        sub: 'test-subject',
      });
    });

    it('should include additional claims from tokenOptions', () => {
      const clock = sandbox.useFakeTimers(new Date().getTime());
      const iat = Math.floor(clock.now / 1000);
      const tokenOptions: TokenOptions = {
        additionalClaims: {
          claim1: 'value1',
          claim2: 123,
        },
      };
      const payload = buildPayloadForJwsSign(tokenOptions);
      assert.deepStrictEqual(payload, {
        iss: undefined,
        scope: undefined,
        aud: GOOGLE_TOKEN_URL,
        exp: iat + 3600,
        iat,
        sub: undefined,
        claim1: 'value1',
        claim2: 123,
      });
    });
  });

  describe('getJwsSign', () => {
    it('should return a signed JWS', () => {
      const tokenOptions: TokenOptions = {
        iss: 'test-issuer',
        scope: 'test-scope',
        key: privateKey,
      };
      const signedJws = getJwsSign(tokenOptions);
      const decoded = jws.decode(signedJws);
      assert(decoded);
      assert.strictEqual(typeof decoded.payload, 'string');
      const payload = JSON.parse(decoded.payload as string);
      assert.deepStrictEqual(decoded.header, {alg: 'RS256'});
      assert.strictEqual(payload.iss, 'test-issuer');
      assert.strictEqual(payload.scope, 'test-scope');
      assert.strictEqual(payload.aud, GOOGLE_TOKEN_URL);
    });
  });
});
