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
  // [START datamigration_v1_generated_DataMigrationService_GetConnectionProfile_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the connection profile resource to get.
   */
  // const name = 'abc123'

  // Imports the Clouddms library
  const {DataMigrationServiceClient} = require('@google-cloud/dms').v1;

  // Instantiates a client
  const clouddmsClient = new DataMigrationServiceClient();

  async function callGetConnectionProfile() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await clouddmsClient.getConnectionProfile(request);
    console.log(response);
  }

  callGetConnectionProfile();
  // [END datamigration_v1_generated_DataMigrationService_GetConnectionProfile_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
