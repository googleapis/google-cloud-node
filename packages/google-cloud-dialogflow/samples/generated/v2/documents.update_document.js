// Copyright 2025 Google LLC
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
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(document) {
  // [START dialogflow_v2_generated_Documents_UpdateDocument_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The document to update.
   */
  // const document = {}
  /**
   *  Optional. Not specified means `update all`.
   *  Currently, only `display_name` can be updated, an InvalidArgument will be
   *  returned for attempting to update other fields.
   */
  // const updateMask = {}

  // Imports the Dialogflow library
  const {DocumentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new DocumentsClient();

  async function callUpdateDocument() {
    // Construct request
    const request = {
      document,
    };

    // Run request
    const [operation] = await dialogflowClient.updateDocument(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateDocument();
  // [END dialogflow_v2_generated_Documents_UpdateDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
