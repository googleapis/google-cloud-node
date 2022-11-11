// Copyright 2020 Google LLC
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

/**
 * List of all intents in the specified project.
 * @param {string} projectId The project to be used
 */
function main(projectId = 'YOUR_PROJECT_ID') {
  // [START dialogflow_list_intents]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'The Project ID to use, e.g. 'YOUR_GCP_ID';

  // Imports the Dialogflow library
  const dialogflow = require('@google-cloud/dialogflow');

  // Instantiates clients
  const intentsClient = new dialogflow.IntentsClient();

  async function listIntents() {
    // Construct request

    // The path to identify the agent that owns the intents.
    const projectAgentPath = intentsClient.projectAgentPath(projectId);

    console.log(projectAgentPath);

    const request = {
      parent: projectAgentPath,
    };

    // Send the request for listing intents.
    const [response] = await intentsClient.listIntents(request);
    response.forEach(intent => {
      console.log('====================');
      console.log(`Intent name: ${intent.name}`);
      console.log(`Intent display name: ${intent.displayName}`);
      console.log(`Action: ${intent.action}`);
      console.log(`Root folowup intent: ${intent.rootFollowupIntentName}`);
      console.log(`Parent followup intent: ${intent.parentFollowupIntentName}`);

      console.log('Input contexts:');
      intent.inputContextNames.forEach(inputContextName => {
        console.log(`\tName: ${inputContextName}`);
      });

      console.log('Output contexts:');
      intent.outputContexts.forEach(outputContext => {
        console.log(`\tName: ${outputContext.name}`);
      });
    });
  }

  listIntents();

  // [END dialogflow_list_intents]
}

main(...process.argv.slice(2));
