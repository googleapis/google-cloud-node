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

function main(parent, realmId, realm) {
  // [START gameservices_v1_generated_RealmsService_CreateRealm_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, in the following form:
   *  `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the realm resource to be created.
   */
  // const realmId = 'abc123'
  /**
   *  Required. The realm resource to be created.
   */
  // const realm = ''

  // Imports the Gaming library
  const {RealmsServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new RealmsServiceClient();

  async function createRealm() {
    // Construct request
    const request = {
      parent,
      realmId,
      realm,
    };

    // Run request
    const [operation] = await gamingClient.createRealm(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createRealm();
  // [END gameservices_v1_generated_RealmsService_CreateRealm_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
