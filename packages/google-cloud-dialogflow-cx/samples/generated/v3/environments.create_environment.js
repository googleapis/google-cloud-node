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

function main(parent, environment) {
  // [START dialogflow_v3_generated_Environments_CreateEnvironment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The [Agent][google.cloud.dialogflow.cx.v3.Agent] to create an [Environment][google.cloud.dialogflow.cx.v3.Environment] for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The environment to create.
   */
  // const environment = ''

  // Imports the Cx library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new EnvironmentsClient();

  async function createEnvironment() {
    // Construct request
    const request = {
      parent,
      environment,
    };

    // Run request
    const [operation] = await cxClient.createEnvironment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createEnvironment();
  // [END dialogflow_v3_generated_Environments_CreateEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
