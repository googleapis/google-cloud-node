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

function main(parent, environmentId, environment) {
  // [START notebooks_v1beta1_generated_NotebookService_CreateEnvironment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format: `projects/{project_id}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. User-defined unique ID of this environment. The `environment_id`
   *  must be 1 to 63 characters long and contain only lowercase letters, numeric
   *  characters, and dashes. The first character must be a lowercase letter and
   *  the last character cannot be a dash.
   */
  // const environmentId = 'abc123'
  /**
   *  Required. The environment to be created.
   */
  // const environment = ''

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1beta1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function createEnvironment() {
    // Construct request
    const request = {
      parent,
      environmentId,
      environment,
    };

    // Run request
    const [operation] = await notebooksClient.createEnvironment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createEnvironment();
  // [END notebooks_v1beta1_generated_NotebookService_CreateEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
