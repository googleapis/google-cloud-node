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

describe(`translate:quickstart`, () => {
  let translateMock, TranslateMock;
  const error = new Error(`error`);

  before(() => {
    translateMock = {
      translate: sinon.stub().yields(error)
    };
    TranslateMock = sinon.stub().returns(translateMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/translate': TranslateMock
    });

    assert.equal(TranslateMock.calledOnce, true);
    assert.deepEqual(TranslateMock.firstCall.args, [{ key: 'YOUR_API_KEY' }]);
    assert.equal(translateMock.translate.calledOnce, true);
    assert.deepEqual(translateMock.translate.firstCall.args.slice(0, -1), ['Hello, world!', 'ru']);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
