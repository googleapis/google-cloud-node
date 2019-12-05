// Copyright 2019 Google LLC
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

import * as assert from 'assert';
import * as speech from '../src';
import * as fs from 'fs';
import * as path from 'path';
import {google} from '../protos/protos';

describe('SpeechClient TypeScript system test default', () => {
  it('calls recognize', async () => {
    const client = new speech.SpeechClient();

    const languageCode = 'en-US';
    const sampleRateHertz = 44100;
    const encoding =
      google.cloud.speech.v1.RecognitionConfig.AudioEncoding.FLAC;
    const config = {
      languageCode,
      sampleRateHertz,
      encoding,
    };
    const uri = 'gs://gapic-toolkit/hello.flac';
    const audio = {
      uri,
    };
    const request = {
      config,
      audio,
    };
    const [response] = await client.recognize(request);
    assert.strictEqual(
      response.results![0].alternatives![0].transcript,
      'hello'
    );
  });

  it('calls longRunningRecognize', async () => {
    const client = new speech.SpeechClient();

    const languageCode = 'en-US';
    const sampleRateHertz = 44100;
    const encoding =
      google.cloud.speech.v1.RecognitionConfig.AudioEncoding.FLAC;
    const config = {
      languageCode,
      sampleRateHertz,
      encoding,
    };
    const uri = 'gs://gapic-toolkit/hello.flac';
    const audio = {
      uri,
    };
    const request = {
      config,
      audio,
    };
    const [operation] = await client.longRunningRecognize(request);
    const [response] = await operation.promise();
    assert.strictEqual(
      response.results![0].alternatives![0].transcript,
      'hello'
    );
  });

  it('calls streamingRecognize', done => {
    const filename = path.join(
      'system-test',
      'fixtures',
      'streamingRecognize',
      'input.wav'
    );

    const languageCode = 'en-US';
    const sampleRateHertz = 24000;
    const encoding =
      google.cloud.speech.v1.RecognitionConfig.AudioEncoding.LINEAR16;
    const config = {
      languageCode,
      sampleRateHertz,
      encoding,
    };
    const request = {
      config,
      interimResults: false,
    };

    const client = new speech.SpeechClient();
    const stream = client.streamingRecognize(request);
    let gotResponse = false;
    stream.on(
      'data',
      (response: google.cloud.speech.v1.IStreamingRecognizeResponse) => {
        assert.strictEqual(
          response.results![0].alternatives![0].transcript,
          'test of streaming recognize call'
        );
        gotResponse = true;
      }
    );
    stream.on('end', () => {
      assert(gotResponse);
      done();
    });
    stream.on('error', done);
    fs.createReadStream(filename).pipe(stream);
  });
});
