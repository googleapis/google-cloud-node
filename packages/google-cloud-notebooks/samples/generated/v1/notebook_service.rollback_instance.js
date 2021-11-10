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

function main(name, targetSnapshot) {
  // [START notebooks_v1_generated_NotebookService_RollbackInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format:
   *  `projects/{project_id}/locations/{location}/instances/{instance_id}`
   */
  // const name = 'abc123'
  /**
   *  Required. The snapshot for rollback.
   *  Example: "projects/test-project/global/snapshots/krwlzipynril".
   */
  // const targetSnapshot = 'abc123'

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function callRollbackInstance() {
    // Construct request
    const request = {
      name,
      targetSnapshot,
    };

    // Run request
    const [operation] = await notebooksClient.rollbackInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRollbackInstance();
  // [END notebooks_v1_generated_NotebookService_RollbackInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
