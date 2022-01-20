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
  // [START accesscontextmanager_v1_generated_AccessContextManager_GetAccessLevel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for the Access Level 
   *  google.identity.accesscontextmanager.v1.AccessLevel.
   *  Format:
   *  `accessPolicies/{policy_id}/accessLevels/{access_level_id}`
   */
  // const name = 'abc123'
  /**
   *  Whether to return `BasicLevels` in the Cloud Common Expression
   *  Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where
   *  Access Levels  google.identity.accesscontextmanager.v1.AccessLevel 
   *  are returned as `BasicLevels` or `CustomLevels` based on how they were
   *  created. If set to CEL, all Access Levels 
   *  google.identity.accesscontextmanager.v1.AccessLevel  are returned as
   *  `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent
   *  `CustomLevels`.
   */
  // const accessLevelFormat = {}

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} = require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callGetAccessLevel() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await accesscontextmanagerClient.getAccessLevel(request);
    console.log(response);
  }

  callGetAccessLevel();
  // [END accesscontextmanager_v1_generated_AccessContextManager_GetAccessLevel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
