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

function main() {
  // [START composer_v1_generated_Environments_DeleteEnvironment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The environment to delete, in the form:
   *  "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
   */
  // const name = 'abc123'

  // Imports the Service library
  const {EnvironmentsClient} = require('@google-cloud/orchestration-airflow').v1;

  // Instantiates a client
  const serviceClient = new EnvironmentsClient();

  async function callDeleteEnvironment() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await serviceClient.deleteEnvironment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteEnvironment();
  // [END composer_v1_generated_Environments_DeleteEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
