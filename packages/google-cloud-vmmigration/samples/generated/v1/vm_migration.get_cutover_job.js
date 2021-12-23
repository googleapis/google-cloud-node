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
  // [START vmmigration_v1_generated_VmMigration_GetCutoverJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the CutoverJob.
   */
  // const name = 'abc123'

  // Imports the Vmmigration library
  const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

  // Instantiates a client
  const vmmigrationClient = new VmMigrationClient();

  async function callGetCutoverJob() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await vmmigrationClient.getCutoverJob(request);
    console.log(response);
  }

  callGetCutoverJob();
  // [END vmmigration_v1_generated_VmMigration_GetCutoverJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
