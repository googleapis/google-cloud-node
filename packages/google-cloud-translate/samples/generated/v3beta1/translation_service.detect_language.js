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
  // [START translate_v3beta1_generated_TranslationService_DetectLanguage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Project or location to make a call. Must refer to a caller's
   *  project.
   *  Format: `projects/{project-number-or-id}/locations/{location-id}` or
   *  `projects/{project-number-or-id}`.
   *  For global calls, use `projects/{project-number-or-id}/locations/global` or
   *  `projects/{project-number-or-id}`.
   *  Only models within the same region (has same location-id) can be used.
   *  Otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The language detection model to be used.
   *  Format:
   *  `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/{model-id}`
   *  Only one language detection model is currently supported:
   *  `projects/{project-number-or-id}/locations/{location-id}/models/language-detection/default`.
   *  If not specified, the default model is used.
   */
  // const model = 'abc123'
  /**
   *  The content of the input stored as a string.
   */
  // const content = 'abc123'
  /**
   *  Optional. The format of the source text, for example, "text/html",
   *  "text/plain". If left blank, the MIME type defaults to "text/html".
   */
  // const mimeType = 'abc123'
  /**
   *  Optional. The labels with user-defined metadata for the request.
   *  Label keys and values can be no longer than 63 characters
   *  (Unicode codepoints), can only contain lowercase letters, numeric
   *  characters, underscores and dashes. International characters are allowed.
   *  Label values are optional. Label keys must start with a letter.
   *  See https://cloud.google.com/translate/docs/labels for more information.
   */
  // const labels = 1234

  // Imports the Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function callDetectLanguage() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await translationClient.detectLanguage(request);
    console.log(response);
  }

  callDetectLanguage();
  // [END translate_v3beta1_generated_TranslationService_DetectLanguage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
