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

function main(parent, gcpUserAccessBinding) {
  // [START accesscontextmanager_v1_generated_AccessContextManager_CreateGcpUserAccessBinding_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Example: "organizations/256"
   */
  // const parent = 'abc123'
  /**
   *  Required. [GcpUserAccessBinding]
   *  [google.identity.accesscontextmanager.v1.GcpUserAccessBinding]
   */
  // const gcpUserAccessBinding = ''

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} =
    require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function createGcpUserAccessBinding() {
    // Construct request
    const request = {
      parent,
      gcpUserAccessBinding,
    };

    // Run request
    const [operation] =
      await accesscontextmanagerClient.createGcpUserAccessBinding(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createGcpUserAccessBinding();
  // [END accesscontextmanager_v1_generated_AccessContextManager_CreateGcpUserAccessBinding_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
