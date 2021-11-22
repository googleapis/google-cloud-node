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

function main(contents, targetLanguageCode, parent) {
  // [START translate_v3_generated_TranslationService_TranslateText_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The content of the input in string format.
   *  We recommend the total content be less than 30k codepoints. The max length
   *  of this field is 1024.
   *  Use BatchTranslateText for larger text.
   */
  // const contents = 'abc123'
  /**
   *  Optional. The format of the source text, for example, "text/html",
   *   "text/plain". If left blank, the MIME type defaults to "text/html".
   */
  // const mimeType = 'abc123'
  /**
   *  Optional. The BCP-47 language code of the input text if
   *  known, for example, "en-US" or "sr-Latn". Supported language codes are
   *  listed in Language Support. If the source language isn't specified, the API
   *  attempts to identify the source language automatically and returns the
   *  source language within the response.
   */
  // const sourceLanguageCode = 'abc123'
  /**
   *  Required. The BCP-47 language code to use for translation of the input
   *  text, set to one of the language codes listed in Language Support.
   */
  // const targetLanguageCode = 'abc123'
  /**
   *  Required. Project or location to make a call. Must refer to a caller's
   *  project.
   *  Format: `projects/{project-number-or-id}` or
   *  `projects/{project-number-or-id}/locations/{location-id}`.
   *  For global calls, use `projects/{project-number-or-id}/locations/global` or
   *  `projects/{project-number-or-id}`.
   *  Non-global location is required for requests using AutoML models or
   *  custom glossaries.
   *  Models and glossaries must be within the same region (have same
   *  location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The `model` type requested for this translation.
   *  The format depends on model type:
   *  - AutoML Translation models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
   *  - General (built-in) models:
   *    `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
   *  For global (non-regionalized) requests, use `location-id` `global`.
   *  For example,
   *  `projects/{project-number-or-id}/locations/global/models/general/nmt`.
   *  If not provided, the default Google model (NMT) will be used.
   */
  // const model = 'abc123'
  /**
   *  Optional. Glossary to be applied. The glossary must be
   *  within the same region (have the same location-id) as the model, otherwise
   *  an INVALID_ARGUMENT (400) error is returned.
   */
  // const glossaryConfig = {}
  /**
   *  Optional. The labels with user-defined metadata for the request.
   *  Label keys and values can be no longer than 63 characters
   *  (Unicode codepoints), can only contain lowercase letters, numeric
   *  characters, underscores and dashes. International characters are allowed.
   *  Label values are optional. Label keys must start with a letter.
   *  See https://cloud.google.com/translate/docs/advanced/labels for more
   *  information.
   */
  // const labels = 1234

  // Imports the Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate').v3;

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function callTranslateText() {
    // Construct request
    const request = {
      contents,
      targetLanguageCode,
      parent,
    };

    // Run request
    const response = await translationClient.translateText(request);
    console.log(response);
  }

  callTranslateText();
  // [END translate_v3_generated_TranslationService_TranslateText_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
