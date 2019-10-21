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

// DO NOT EDIT! This is a generated sample ("LongRunningPromiseAwait",  "speech_transcribe_async")

// sample-metadata:
//   title: Transcribe Audio File using Long Running Operation (Local File) (LRO)
//   description: Transcribe a long audio file using asynchronous speech recognition
//   usage: node samples/v1/speech_transcribe_async.js [--local_file_path "resources/brooklyn_bridge.raw"]

'use strict';

// [START speech_transcribe_async]

const {SpeechClient} = require('@google-cloud/speech').v1;

const fs = require('fs');
/**
 * Transcribe a long audio file using asynchronous speech recognition
 *
 * @param localFilePath {string} Path to local audio file, e.g. /path/audio.wav
 */
async function sampleLongRunningRecognize(localFilePath) {
  const client = new SpeechClient();
  // const localFilePath = 'resources/brooklyn_bridge.raw';

  // The language of the supplied audio
  const languageCode = 'en-US';

  // Sample rate in Hertz of the audio data sent
  const sampleRateHertz = 16000;

  // Encoding of audio data sent. This sample sets this explicitly.
  // This field is optional for FLAC and WAV audio formats.
  const encoding = 'LINEAR16';
  const config = {
    languageCode: languageCode,
    sampleRateHertz: sampleRateHertz,
    encoding: encoding,
  };
  const content = fs.readFileSync(localFilePath).toString('base64');
  const audio = {
    content: content,
  };
  const request = {
    config: config,
    audio: audio,
  };

  // Create a job whose results you can either wait for now, or get later
  const [operation] = await client.longRunningRecognize(request);

  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();

  for (const result of response.results) {
    // First alternative is the most probable result
    const alternative = result.alternatives[0];
    console.log(`Transcript: ${alternative.transcript}`);
  }
}

// [END speech_transcribe_async]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('local_file_path', {
  default: 'resources/brooklyn_bridge.raw',
  string: true,
}).argv;

sampleLongRunningRecognize(argv.local_file_path).catch(console.error);
