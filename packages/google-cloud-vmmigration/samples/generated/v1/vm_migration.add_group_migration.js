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

function main(group) {
  // [START vmmigration_v1_generated_VmMigration_AddGroupMigration_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The full path name of the Group to add to.
   */
  // const group = 'abc123'
  /**
   *  The full path name of the MigratingVm to add.
   */
  // const migratingVm = 'abc123'

  // Imports the Vmmigration library
  const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

  // Instantiates a client
  const vmmigrationClient = new VmMigrationClient();

  async function callAddGroupMigration() {
    // Construct request
    const request = {
      group,
    };

    // Run request
    const [operation] = await vmmigrationClient.addGroupMigration(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAddGroupMigration();
  // [END vmmigration_v1_generated_VmMigration_AddGroupMigration_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
