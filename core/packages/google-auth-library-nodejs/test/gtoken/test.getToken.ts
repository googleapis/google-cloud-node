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
import * as fs from 'fs';
import {describe, it, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {GaxiosError, GaxiosOptionsPrepared} from 'gaxios';
import {getToken, TokenData} from '../../src/gtoken/getToken';
import * as jws from '../../src/gtoken/jwsSign';
import {Transporter, TokenOptions} from '../../src/gtoken/tokenOptions';

const privateKey = fs.readFileSync('./test/fixtures/private.pem', 'utf-8');

describe('getToken', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should return token data on success', async () => {
    const fakeTokenData = {
      access_token: 'fake-access-token',
      expires_in: 3600,
      token_type: 'Bearer',
    };
    const requestStub = sandbox.stub().resolves({data: fakeTokenData});
    const transporter: Transporter = {
      request: requestStub,
    };
    const tokenOptions: TokenOptions = {
      iss: 'test@example.com',
      key: privateKey,
      transporter,
    };

    const token = await getToken(tokenOptions);

    assert.deepStrictEqual(token, fakeTokenData);
    assert.ok(requestStub.calledOnce);
  });

  it('should return all fields of token data on success', async () => {
    const fakeTokenData: TokenData = {
      access_token: 'fake-access-token',
      expires_in: 3600,
      token_type: 'Bearer',
      refresh_token: 'fake-refresh-token',
      id_token: 'fake-id-token',
    };
    const requestStub = sandbox.stub().resolves({data: fakeTokenData});
    const transporter: Transporter = {
      request: requestStub,
    };
    const tokenOptions: TokenOptions = {
      iss: 'test@example.com',
      key: privateKey,
      transporter,
    };

    const token = await getToken(tokenOptions);

    assert.deepStrictEqual(token, fakeTokenData);
    assert.strictEqual(token.refresh_token, fakeTokenData.refresh_token);
    assert.strictEqual(token.id_token, fakeTokenData.id_token);
    assert.ok(requestStub.calledOnce);
  });

  it('should throw a generic error if the request fails', async () => {
    const expectedError = new Error('Request failed');
    const requestStub = sandbox.stub().rejects(expectedError);
    const transporter: Transporter = {
      request: requestStub,
    };
    const tokenOptions: TokenOptions = {
      iss: 'test@example.com',
      key: privateKey,
      transporter,
    };

    await assert.rejects(getToken(tokenOptions), expectedError);
  });

  it('should format the error message if error details are available', async () => {
    const errorInfo = {
      error: 'invalid_grant',
      error_description: 'Invalid JWT signature.',
    };

    // Create a new error object for each rejection to avoid mutation issues.
    const requestStub = sandbox.stub().callsFake(() => {
      throw new GaxiosError(
        'Request failed with status code 400',
        {} as GaxiosOptionsPrepared,
        {
          data: errorInfo,
        } as any,
      );
    });
    const transporter: Transporter = {
      request: requestStub,
    };
    const tokenOptions: TokenOptions = {
      iss: 'test@example.com',
      key: privateKey,
      transporter,
    };

    try {
      await getToken(tokenOptions);
      assert.fail('Expected to throw');
    } catch (err: any) {
      assert.strictEqual(err.message, 'Request failed with status code 400');
    }
  });

  it('should generate correct request options', () => {
    // This is a private function, but we can test it through getToken
    const jwsStub = sandbox.stub(jws, 'getJwsSign').returns('fake-jws-sign');
    const requestStub = sandbox.stub().resolves({data: {}});
    const transporter: Transporter = {
      request: requestStub,
    };
    const tokenOptions: TokenOptions = {
      transporter,
    };

    void getToken(tokenOptions);

    const gaxiosOpts = requestStub.firstCall.args[0];
    assert.strictEqual(gaxiosOpts.method, 'POST');
    assert.strictEqual(gaxiosOpts.url, 'https://oauth2.googleapis.com/token');
    assert.ok(jwsStub.calledOnce);
  });
});
