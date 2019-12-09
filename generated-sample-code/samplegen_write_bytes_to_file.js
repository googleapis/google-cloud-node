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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_write_bytes_to_file")

// sample-metadata:
//   title: Synthesize an .mp3 file with audio saying the provided phrase
//   description: Synthesize an .mp3 file with audio saying the provided phrase
//   usage: node samples/v1/samplegen_write_bytes_to_file.js

'use strict';

// [START samplegen_write_bytes_to_file]

const {TextToSpeechClient} = require('@google-cloud/text-to-speech').v1;

const util = require('util');
const fs = require('fs');
/** Synthesize an .mp3 file with audio saying the provided phrase */
function sampleSynthesizeSpeech() {
  const client = new TextToSpeechClient();
  const text = 'Hello, world!';
  const input = {
    text: text,
  };
  const languageCode = 'en';
  const voice = {
    languageCode: languageCode,
  };
  const audioEncoding = 'MP3';
  const audioConfig = {
    audioEncoding: audioEncoding,
  };
  const request = {
    input: input,
    voice: voice,
    audioConfig: audioConfig,
  };
  client.synthesizeSpeech(request)
    .then(responses => {
      const response = responses[0];
      console.log(`Writing the synthsized results to output.mp3`);
      const writeFile = util.promisify(fs.writeFile);
      writeFile('output.mp3', response.audioContent, 'binary');
    })
    .catch(err => {
      console.error(err);
    });
}

// [END samplegen_write_bytes_to_file]
// tslint:disable-next-line:no-any

sampleSynthesizeSpeech();