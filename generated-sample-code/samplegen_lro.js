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

// DO NOT EDIT! This is a generated sample ("LongRunningPromiseAwait",  "samplegen_lro")

// sample-metadata:
//   title: Calling Long-Running API method
//   description: Calling Long-Running API method
//   usage: node samples/v1p1beta1/samplegen_lro.js

'use strict';

function main() {
  // [START samplegen_lro]

  // Imports the client library
  const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function sampleLongRunningRecognize() {
    const encoding = 'MP3';
    const config = {
      encoding: encoding,
    };
    const uri = 'gs://[BUCKET]/[FILENAME]';
    const audio = {
      uri: uri,
    };

    // Construct request
    const request = {
      config: config,
      audio: audio,
    };

    // Start long-running operation. You can wait for now or get results later.
    const [operation] = await speechClient.longRunningRecognize(request);;

    // Wait for operation to complete.
    const [response] = await operation.promise();

    // Your audio has been transcribed.
    console.log(`Transcript: ${response.results[0].alternatives[0].transcript}`);
  }
  sampleLongRunningRecognize();
  // [END samplegen_lro]
}

main();