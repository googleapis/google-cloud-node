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

// [START samplegen_lro]

const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

/** Calling Long-Running API method */
async function sampleLongRunningRecognize() {
  const client = new SpeechClient();
  const encoding = 'MP3';
  const config = {
    encoding: encoding,
  };
  const uri = 'gs://[BUCKET]/[FILENAME]';
  const audio = {
    uri: uri,
  };
  const request = {
    config: config,
    audio: audio,
  };

  // Create a job whose results you can either wait for now, or get later
  const [operation] = await client.longRunningRecognize(request);

  // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();

  // Your audio has been transcribed.
  console.log(`Transcript: ${response.results[0].alternatives[0].transcript}`);
}

// [END samplegen_lro]
// tslint:disable-next-line:no-any

sampleLongRunningRecognize().catch(console.error);