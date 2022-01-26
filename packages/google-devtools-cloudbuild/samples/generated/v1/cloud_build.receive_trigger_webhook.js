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

function main() {
  // [START cloudbuild_v1_generated_CloudBuild_ReceiveTriggerWebhook_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the `ReceiveTriggerWebhook` to retrieve.
   *  Format: `projects/{project}/locations/{location}/triggers/{trigger}`
   */
  // const name = 'abc123'
  /**
   *  HTTP request body.
   */
  // const body = {}
  /**
   *  Project in which the specified trigger lives
   */
  // const projectId = 'abc123'
  /**
   *  Name of the trigger to run the payload against
   */
  // const trigger = 'abc123'
  /**
   *  Secret token used for authorization if an OAuth token isn't provided.
   */
  // const secret = 'abc123'

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function callReceiveTriggerWebhook() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await cloudbuildClient.receiveTriggerWebhook(request);
    console.log(response);
  }

  callReceiveTriggerWebhook();
  // [END cloudbuild_v1_generated_CloudBuild_ReceiveTriggerWebhook_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
