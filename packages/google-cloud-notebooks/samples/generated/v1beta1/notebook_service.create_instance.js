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

function main(parent, instanceId, instance) {
  // [START notebooks_v1beta1_generated_NotebookService_CreateInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format:
   *  `parent=projects/{project_id}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. User-defined unique ID of this instance.
   */
  // const instanceId = 'abc123'
  /**
   *  Required. The instance to be created.
   */
  // const instance = ''

  // Imports the Notebooks library
  const {NotebookServiceClient} = require('@google-cloud/notebooks').v1beta1;

  // Instantiates a client
  const notebooksClient = new NotebookServiceClient();

  async function createInstance() {
    // Construct request
    const request = {
      parent,
      instanceId,
      instance,
    };

    // Run request
    const [operation] = await notebooksClient.createInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createInstance();
  // [END notebooks_v1beta1_generated_NotebookService_CreateInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
