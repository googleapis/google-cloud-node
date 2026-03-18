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
import {describe, it, afterEach} from 'mocha';
import * as sinon from 'sinon';
import {revokeToken} from '../../src/gtoken/revokeToken';
import {Transporter} from '../../src/gtoken/tokenOptions';

describe('revokeToken', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call the transporter with the correct URL and options', async () => {
    const accessToken = 'fake-access-token';
    const requestStub = sandbox.stub().resolves();
    const transporter: Transporter = {
      request: requestStub,
    };

    await revokeToken(accessToken, transporter);

    assert.ok(requestStub.calledOnce);
    const expectedUrl = `https://oauth2.googleapis.com/revoke?token=${accessToken}`;
    const expectedOptions = {
      url: expectedUrl,
      retry: true,
    };
    assert.deepStrictEqual(requestStub.firstCall.args[0], expectedOptions);
  });

  it('should propagate errors from the transporter', async () => {
    const accessToken = 'error-token';
    const expectedError = new Error('Transporter failed');
    const requestStub = sandbox.stub().rejects(expectedError);
    const transporter: Transporter = {
      request: requestStub,
    };

    await assert.rejects(revokeToken(accessToken, transporter), expectedError);
  });
});
