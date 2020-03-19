// Copyright 2020 Google LLC
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
//

'use strict';

async function quickstart() {
  // parent = 'projects/my-project' // Project to list dashboards for.
  // [START media_translation_quickstart]
  // Imports the Google Cloud client library
  const {
    SpeechTranslationServiceClient,
  } = require('@google-cloud/media-translation');

  // Creates a client
  const translate = new SpeechTranslationServiceClient();

  // parent = 'projects/my-project', // Project to list dashboards for.

  // TODO: add an actual sample.
  console.info(translate);

  // [END media_translation_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);
