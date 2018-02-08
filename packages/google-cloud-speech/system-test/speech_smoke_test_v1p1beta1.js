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

describe('SpeechSmokeTest v1p1beta1', () => {
  it('successfully makes a call to the service', done => {
    const speech = require('../src');

    var client = new speech.v1p1beta1.SpeechClient({
      // optional auth parameters.
    });

    var languageCode = 'en-US';
    var sampleRateHertz = 44100;
    var encoding = 'FLAC';
    var config = {
      languageCode: languageCode,
      sampleRateHertz: sampleRateHertz,
      encoding: encoding,
    };
    var uri = 'gs://gapic-toolkit/hello.flac';
    var audio = {
      uri: uri,
    };
    var request = {
      config: config,
      audio: audio,
    };
    client
      .recognize(request)
      .then(responses => {
        var response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});
