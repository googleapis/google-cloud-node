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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_repeated_fields")

// sample-metadata:
//   title: Showing repeated fields (in request and response)
//   description: Showing repeated fields (in request and response)
//   usage: node samples/v1p1beta1/samplegen_repeated_fields.js

'use strict';

function main() {
  // [START samplegen_repeated_fields]

  // Imports the client library
  const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function sampleRecognize() {
    const encoding = 'MP3';

    // A list of strings containing words and phrases "hints"
    const phrasesElement = 'Fox in socks';
    const phrasesElement2 = 'Knox in box';
    const phrases = [phrasesElement, phrasesElement2];
    const speechContextsElement = {
      phrases: phrases,
    };
    const speechContexts = [speechContextsElement];
    const config = {
      encoding: encoding,
      speechContexts: speechContexts,
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

    // Run request
    const [response] = await speechClient.recognize(request);

    // Loop over all transcription results
    for (const result of response.results) {
      // The first "alternative" of each result contains most likely transcription
      const alternative = result.alternatives[0];
      console.log(`Transcription of result: ${alternative.transcript}`);
    }
  }
  sampleRecognize();
  // [END samplegen_repeated_fields]
}

main();