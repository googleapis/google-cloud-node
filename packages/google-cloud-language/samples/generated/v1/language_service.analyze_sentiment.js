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

function main(document) {
  // [START language_v1_generated_LanguageService_AnalyzeSentiment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Input document.
   */
  // const document = {}
  /**
   *  The encoding type used by the API to calculate sentence offsets.
   */
  // const encodingType = {}

  // Imports the Language library
  const {LanguageServiceClient} = require('@google-cloud/language').v1;

  // Instantiates a client
  const languageClient = new LanguageServiceClient();

  async function callAnalyzeSentiment() {
    // Construct request
    const request = {
      document,
    };

    // Run request
    const response = await languageClient.analyzeSentiment(request);
    console.log(response);
  }

  callAnalyzeSentiment();
  // [END language_v1_generated_LanguageService_AnalyzeSentiment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
