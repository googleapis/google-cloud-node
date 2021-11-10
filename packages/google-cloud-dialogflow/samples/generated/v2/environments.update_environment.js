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

function main(environment, updateMask) {
  // [START dialogflow_v2_generated_Environments_UpdateEnvironment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The environment to update.
   */
  // const environment = {}
  /**
   *  Required. The mask to control which fields get updated.
   */
  // const updateMask = {}
  /**
   *  Optional. This field is used to prevent accidental overwrite of the default
   *  environment, which is an operation that cannot be undone. To confirm that
   *  the caller desires this overwrite, this field must be explicitly set to
   *  true when updating the default environment (environment ID = `-`).
   */
  // const allowLoadToDraftAndDiscardChanges = true

  // Imports the Dialogflow library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EnvironmentsClient();

  async function callUpdateEnvironment() {
    // Construct request
    const request = {
      environment,
      updateMask,
    };

    // Run request
    const response = await dialogflowClient.updateEnvironment(request);
    console.log(response);
  }

  callUpdateEnvironment();
  // [END dialogflow_v2_generated_Environments_UpdateEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
