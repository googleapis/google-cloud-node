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
  // [START accesscontextmanager_v1_generated_AccessContextManager_CreateAccessPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Output only. Resource name of the `AccessPolicy`. Format:
   *  `accessPolicies/{access_policy}`
   */
  // const name = 'abc123'
  /**
   *  Required. The parent of this `AccessPolicy` in the Cloud Resource
   *  Hierarchy. Currently immutable once created. Format:
   *  `organizations/{organization_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. Human readable title. Does not affect behavior.
   */
  // const title = 'abc123'
  /**
   *  Output only. Time the `AccessPolicy` was created in UTC.
   */
  // const createTime = {}
  /**
   *  Output only. Time the `AccessPolicy` was updated in UTC.
   */
  // const updateTime = {}
  /**
   *  Output only. An opaque identifier for the current version of the
   *  `AccessPolicy`. This will always be a strongly validated etag, meaning that
   *  two Access Polices will be identical if and only if their etags are
   *  identical. Clients should not expect this to be in any specific format.
   */
  // const etag = 'abc123'

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} =
    require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callCreateAccessPolicy() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await accesscontextmanagerClient.createAccessPolicy(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateAccessPolicy();
  // [END accesscontextmanager_v1_generated_AccessContextManager_CreateAccessPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
