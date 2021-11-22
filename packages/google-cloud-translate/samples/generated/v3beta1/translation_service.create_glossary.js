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

function main(parent, glossary) {
  // [START translate_v3beta1_generated_TranslationService_CreateGlossary_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project name.
   */
  // const parent = 'abc123'
  /**
   *  Required. The glossary to create.
   */
  // const glossary = {}

  // Imports the Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate').v3beta1;

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  async function callCreateGlossary() {
    // Construct request
    const request = {
      parent,
      glossary,
    };

    // Run request
    const [operation] = await translationClient.createGlossary(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateGlossary();
  // [END translate_v3beta1_generated_TranslationService_CreateGlossary_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
