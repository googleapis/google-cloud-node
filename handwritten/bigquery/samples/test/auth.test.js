// Copyright 2020 Google LLC
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

'use strict';

const sinon = require('sinon');
const {assert} = require('chai');
const proxyquire = require('proxyquire');
const {describe, it, before, afterEach} = require('mocha');

describe('authUserFlow()', () => {
  let readlineMock, generateUrlStub, questionStub, tokenStub, authUserFlow;

  before(async () => {
    questionStub = sinon.stub();

    readlineMock = {
      questionAsync: questionStub,
      close: sinon.stub(),
    };

    generateUrlStub = sinon.stub().returns('https://example.com');
    tokenStub = sinon.stub().returns({tokens: 'tokens'});

    authUserFlow = proxyquire('../auth-user-sample/authUserFlow.js', {
      'google-auth-library': {
        OAuth2Client: sinon.stub().callsFake(() => {
          return {
            generateAuthUrl: generateUrlStub,
            getToken: tokenStub,
          };
        }),
      },
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should exchange code for tokens', async () => {
    const output = await authUserFlow.main.exchangeCode('abc123');
    assert.strictEqual(output, 'tokens');
    sinon.assert.calledWith(tokenStub, 'abc123');
  });

  it('should return project id and credentials', async () => {
    sinon
      .stub(authUserFlow.main, 'getRedirectUrl')
      .returns({refresh_token: 'token'});
    const output = await authUserFlow.main.authFlow('my_project');
    assert.strictEqual(output.projectId, 'my_project');
  });

  it('should get redirect url', async () => {
    const startStub = sinon
      .stub(authUserFlow.main, 'startRl')
      .returns(readlineMock);
    await authUserFlow.main.getRedirectUrl();
    sinon.assert.called(startStub);
    sinon.assert.called(questionStub);
    sinon.assert.called(generateUrlStub);
  });

  it('should run a query', async () => {
    const authFlowStub = sinon.stub(authUserFlow.main, 'authFlow').returns({});
    const output = await authUserFlow.main.query();
    assert.strictEqual(output[0].name, 'William');
    sinon.assert.called(authFlowStub);
  });
});
