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

function main(projectId, id) {
  // [START cloudbuild_v1_generated_CloudBuild_CancelBuild_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the `Build` to cancel.
   *  Format: `projects/{project}/locations/{location}/builds/{build}`
   */
  // const name = 'abc123'
  /**
   *  Required. ID of the project.
   */
  // const projectId = 'abc123'
  /**
   *  Required. ID of the build.
   */
  // const id = 'abc123'

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function callCancelBuild() {
    // Construct request
    const request = {
      projectId,
      id,
    };

    // Run request
    const response = await cloudbuildClient.cancelBuild(request);
    console.log(response);
  }

  callCancelBuild();
  // [END cloudbuild_v1_generated_CloudBuild_CancelBuild_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
