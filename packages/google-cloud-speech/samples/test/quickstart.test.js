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

const config = {
  encoding: 'LINEAR16',
  sampleRate: 16000
};

describe(`speech:quickstart`, () => {
  let speechMock, SpeechMock;
  const error = new Error(`error`);
  const fileName = `./resources/audio.raw`;

  before(() => {
    speechMock = {
      recognize: sinon.stub().yields(error)
    };
    SpeechMock = sinon.stub().returns(speechMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/speech': SpeechMock
    });

    assert.equal(SpeechMock.calledOnce, true);
    assert.deepEqual(SpeechMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(speechMock.recognize.calledOnce, true);
    assert.deepEqual(speechMock.recognize.firstCall.args.slice(0, -1), [fileName, config]);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
