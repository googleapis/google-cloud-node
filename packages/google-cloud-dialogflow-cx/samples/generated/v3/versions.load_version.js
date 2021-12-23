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

function main(name) {
  // [START dialogflow_v3_generated_Versions_LoadVersion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Version google.cloud.dialogflow.cx.v3.Version  to be loaded to draft flow.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>/versions/<Version ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field is used to prevent accidental overwrite of other agent
   *  resources, which can potentially impact other flow's behavior. If
   *  `allow_override_agent_resources` is false, conflicted agent-level resources
   *  will not be overridden (i.e. intents, entities, webhooks).
   */
  // const allowOverrideAgentResources = true

  // Imports the Cx library
  const {VersionsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new VersionsClient();

  async function callLoadVersion() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await cxClient.loadVersion(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callLoadVersion();
  // [END dialogflow_v3_generated_Versions_LoadVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
