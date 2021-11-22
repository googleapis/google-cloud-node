// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent) {
  // [START translate_v3_generated_TranslationService_GetSupportedLanguages_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Project or location to make a call. Must refer to a caller's
   *  project.
   *  Format: `projects/{project-number-or-id}` or
   *  `projects/{project-number-or-id}/locations/{location-id}`.
   *  For global calls, use `projects/{project-number-or-id}/locations/global` or
   *  `projects/{project-number-or-id}`.
   *  Non-global location is required for AutoML models.
   *  Only models within the same region (have same location-id) can be used,
   *  otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The language to use to return localized, human readable names
   *  of supported languages. If missing, then display names are not returned
   *  in a response.
   */
  // const displayLanguageCode = 'abc123'
  /**
   *  Optional. Get supported languages of this model.
   *  The format depends on model type:
   *  - AutoML Translation models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
   *  - General (built-in) models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
   *  Returns languages supported by the specified model.
   *  If missing, we get supported languages of Google general NMT model.
   */
  // const model = 'abc123'

  // Imports the Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate').v3;

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function callGetSupportedLanguages() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await translationClient.getSupportedLanguages(request);
    console.log(response);
  }

  callGetSupportedLanguages();
  // [END translate_v3_generated_TranslationService_GetSupportedLanguages_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
