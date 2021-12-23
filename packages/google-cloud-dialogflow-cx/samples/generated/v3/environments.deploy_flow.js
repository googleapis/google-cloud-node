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

function main(environment, flowVersion) {
  // [START dialogflow_v3_generated_Environments_DeployFlow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The environment to deploy the flow to.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/
   *  environments/<Environment ID>`.
   */
  // const environment = 'abc123'
  /**
   *  Required. The flow version to deploy.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/
   *  flows/<Flow ID>/versions/<Version ID>`.
   */
  // const flowVersion = 'abc123'

  // Imports the Cx library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new EnvironmentsClient();

  async function callDeployFlow() {
    // Construct request
    const request = {
      environment,
      flowVersion,
    };

    // Run request
    const [operation] = await cxClient.deployFlow(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeployFlow();
  // [END dialogflow_v3_generated_Environments_DeployFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
