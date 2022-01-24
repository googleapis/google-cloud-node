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
  // [START appengine_v1_generated_Versions_CreateVersion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the parent resource to create this version under. Example:
   *  `apps/myapp/services/default`.
   */
  // const parent = 'abc123'
  /**
   *  Application deployment configuration.
   */
  // const version = {}

  // Imports the Appengine library
  const {VersionsClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new VersionsClient();

  async function callCreateVersion() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await appengineClient.createVersion(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateVersion();
  // [END appengine_v1_generated_Versions_CreateVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
