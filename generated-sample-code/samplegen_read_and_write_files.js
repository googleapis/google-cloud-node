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
//   title: Read binary file into bytes field & write string in response to file
//   description: Read binary file into bytes field & write string in response to file
//   usage: node samples/v1p1beta1/samplegen_read_and_write_files.js

'use strict';

function main() {
  // [START samplegen_read_and_write_files]

  // Imports the client library
  const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

  // Additional imports
  const util = require('util');
  const fs = require('fs');

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function sampleRecognize() {
    const encoding = 'MP3';
    const config = {
      encoding: encoding,
    };

    // The bytes from this file will be read into `content`
    const content = fs.readFileSync('path/to/file.mp3').toString('base64');
    const audio = {
      content: content,
    };

    // Construct request
    const request = {
      config: config,
      audio: audio,
    };

    // Run request
    const [response] = await speechClient.recognize(request);

    // Your audio has been transcribed.
    // Writing audio transcript to transcript.txt for demonstration:
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('transcript.txt', response.results[0].alternatives[0].transcript);
  }
  sampleRecognize();
  // [END samplegen_read_and_write_files]
}

main();