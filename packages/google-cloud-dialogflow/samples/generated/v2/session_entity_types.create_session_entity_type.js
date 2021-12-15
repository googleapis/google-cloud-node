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

function main(parent, sessionEntityType) {
  // [START dialogflow_v2_generated_SessionEntityTypes_CreateSessionEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The session to create a session entity type for.
   *  Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
   *  `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/
   *  sessions/<Session ID>`.
   *  If `Environment ID` is not specified, we assume default 'draft'
   *  environment. If `User ID` is not specified, we assume default '-' user.
   */
  // const parent = 'abc123'
  /**
   *  Required. The session entity type to create.
   */
  // const sessionEntityType = {}

  // Imports the Dialogflow library
  const {SessionEntityTypesClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new SessionEntityTypesClient();

  async function callCreateSessionEntityType() {
    // Construct request
    const request = {
      parent,
      sessionEntityType,
    };

    // Run request
    const response = await dialogflowClient.createSessionEntityType(request);
    console.log(response);
  }

  callCreateSessionEntityType();
  // [END dialogflow_v2_generated_SessionEntityTypes_CreateSessionEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
