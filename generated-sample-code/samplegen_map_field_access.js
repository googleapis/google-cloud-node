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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_map_field_access")

// sample-metadata:
//   title: This sample reads and loops over a map field in the response
//   description: This sample reads and loops over a map field in the response
//   usage: node samples/v1/samplegen_map_field_access.js

'use strict';

// [START samplegen_map_field_access]

const {LanguageServiceClient} = require('@google-cloud/language').v1;

/** This sample reads and loops over a map field in the response */
function sampleAnalyzeEntities() {
  const client = new LanguageServiceClient();
  const type = 'PLAIN_TEXT';
  const language = 'en';

  // The text content to analyze
  const content =
    'Googleplex is at 1600 Amphitheatre Parkway, Mountain View, CA.';
  const document = {
    type: type,
    language: language,
    content: content,
  };
  client
    .analyzeEntities({document: document})
    .then(responses => {
      const response = responses[0];
      for (const entity of response.entities) {
        // Each detected entity has a map of metadata:
        const map = entity.metadata;
        // Access value by key:
        console.log(`URL: ${map['wikipedia_url']}`);
        // Loop over keys and values:
        for (const [key, value] of Object.entries(map)) {
          console.log(`${key}: ${value}`);
        }

        // Loop over just keys:
        for (const theKey of Object.keys(map)) {
          console.log(`Key: ${theKey}`);
        }

        // Loop over just values:
        for (const theValue of Object.values(map)) {
          console.log(`Value: ${theValue}`);
        }
      }
    })
    .catch(err => {
      console.error(err);
    });
}

// [END samplegen_map_field_access]
// tslint:disable-next-line:no-any

sampleAnalyzeEntities();
