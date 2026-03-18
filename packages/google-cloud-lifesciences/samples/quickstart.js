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

'use strict';

async function main(projectId, location, pipeline) {
  // [START nodejs_life_sciences_quickstart]
  // Imports the Google Cloud client library

  const {WorkflowsServiceV2BetaClient} = require('@google-cloud/life-sciences');

  // const pipeline = 'name-of-pipeline', i.e., 1234
  // const projectId = your-project-id
  // const location = your-pipeline-location

  // Creates a client
  const client = new WorkflowsServiceV2BetaClient();

  async function checkPipelineProgress() {
    const status = await client.checkRunPipelineProgress(
      `projects/${projectId}/locations/${location}/operations/${pipeline}`
    );
    console.info(status);
  }
  checkPipelineProgress();
  // [END nodejs_life_sciences_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
