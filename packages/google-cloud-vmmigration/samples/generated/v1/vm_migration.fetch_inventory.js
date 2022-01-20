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

function main(source) {
  // [START vmmigration_v1_generated_VmMigration_FetchInventory_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Source.
   */
  // const source = 'abc123'
  /**
   *  If this flag is set to true, the source will be queried instead of using
   *  cached results. Using this flag will make the call slower.
   */
  // const forceRefresh = true

  // Imports the Vmmigration library
  const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

  // Instantiates a client
  const vmmigrationClient = new VmMigrationClient();

  async function callFetchInventory() {
    // Construct request
    const request = {
      source,
    };

    // Run request
    const response = await vmmigrationClient.fetchInventory(request);
    console.log(response);
  }

  callFetchInventory();
  // [END vmmigration_v1_generated_VmMigration_FetchInventory_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
