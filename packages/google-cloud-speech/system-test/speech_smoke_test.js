// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

describe('SpeechSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    const speech = require('../src');

    const client = new speech.v1.SpeechClient({
      // optional auth parameters.
    });

    const languageCode = 'en-US';
    const sampleRateHertz = 44100;
    const encoding = 'FLAC';
    const config = {
      languageCode: languageCode,
      sampleRateHertz: sampleRateHertz,
      encoding: encoding,
    };
    const uri = 'gs://gapic-toolkit/hello.flac';
    const audio = {
      uri: uri,
    };
    const request = {
      config: config,
      audio: audio,
    };
    client
      .recognize(request)
      .then(responses => {
        const response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});
