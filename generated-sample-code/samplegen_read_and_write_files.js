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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_read_and_write_files")

// sample-metadata:
//   title: Showing repeated fields (in request and response)
//   description: Showing repeated fields (in request and response)
//   usage: node samples/v1p1beta1/samplegen_read_and_write_files.js

'use strict';

// [START samplegen_read_and_write_files]

const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

const util = require('util');
const fs = require('fs');
/** Showing repeated fields (in request and response) */
function sampleRecognize() {
  const client = new SpeechClient();
  const encoding = 'MP3';
  const config = {
    encoding: encoding,
  };

  // The bytes from this file will be read into `content`
  const content = fs.readFileSync('path/to/file.mp3').toString('base64');
  const audio = {
    content: content,
  };
  const request = {
    config: config,
    audio: audio,
  };
  client.recognize(request)
    .then(responses => {
      const response = responses[0];
      // Your audio has been transcribed.
      // Writing audio transcript to transcript.txt for demonstration:
      const writeFile = util.promisify(fs.writeFile);
      writeFile('transcript.txt', response.results[0].alternatives[0].transcript);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END samplegen_read_and_write_files]
// tslint:disable-next-line:no-any

sampleRecognize();