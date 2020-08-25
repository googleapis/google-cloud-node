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

async function main(projectId = 'my-project', location = 'us', agent = 'foo') {
  // [START dialogflow_cx_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const location = 'us';
  // const agent = 'foo';

  // Imports the Google Cloud Some API library
  const {IntentsClient} = require('@google-cloud/dialogflow-cx');
  const client = new IntentsClient();
  async function listIntents() {
    const parent = client.agentPath(projectId, location, agent);
    console.info(parent);
    // TODO: implement a quickstart that does something useful:
    /*
    const [intents] = await client.listIntents({
      parent,
    });
    console.info(intents);
    */
  }
  listIntents();
  // [END dialogflow_cx_quickstart]
}

main(...process.argv.slice(2));
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
