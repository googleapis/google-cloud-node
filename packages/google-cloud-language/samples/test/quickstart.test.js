/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const proxyquire = require(`proxyquire`).noCallThru();

describe(`language:quickstart`, () => {
  let languageMock, LanguageMock;
  const error = new Error(`error`);
  const text = 'Hello, world!';

  before(() => {
    languageMock = {
      detectSentiment: sinon.stub().yields(error)
    };
    LanguageMock = sinon.stub().returns(languageMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/language': LanguageMock
    });

    assert.equal(LanguageMock.calledOnce, true);
    assert.deepEqual(LanguageMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(languageMock.detectSentiment.calledOnce, true);
    assert.deepEqual(languageMock.detectSentiment.firstCall.args.slice(0, -1), [text, { verbose: true }]);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
