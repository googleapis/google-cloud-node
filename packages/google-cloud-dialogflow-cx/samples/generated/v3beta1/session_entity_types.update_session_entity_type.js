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

function main(sessionEntityType) {
  // [START dialogflow_v3beta1_generated_SessionEntityTypes_UpdateSessionEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The session entity type to update.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/sessions/<Session ID>/entityTypes/<Entity Type ID>` or
   *  `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/environments/<Environment ID>/sessions/<Session ID>/entityTypes/<Entity
   *  Type ID>`. If `Environment ID` is not specified, we assume default 'draft'
   *  environment.
   */
  // const sessionEntityType = {}
  /**
   *  The mask to control which fields get updated.
   */
  // const updateMask = {}

  // Imports the Cx library
  const {SessionEntityTypesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new SessionEntityTypesClient();

  async function callUpdateSessionEntityType() {
    // Construct request
    const request = {
      sessionEntityType,
    };

    // Run request
    const response = await cxClient.updateSessionEntityType(request);
    console.log(response);
  }

  callUpdateSessionEntityType();
  // [END dialogflow_v3beta1_generated_SessionEntityTypes_UpdateSessionEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
