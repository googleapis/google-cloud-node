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

function main(parent, pageToken) {
  // [START vmmigration_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of targets.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of targets to return. The service may return
   *  fewer than this value. If unspecified, at most 500 targets will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  Required. A page token, received from a previous `ListTargets` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListTargets` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The filter request.
   */
  // const filter = 'abc123'
  /**
   *  Optional. the order by fields for the result.
   */
  // const orderBy = 'abc123'

  // Imports the Vmmigration library
  const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

  // Instantiates a client
  const vmmigrationClient = new VmMigrationClient();

  async function callListTargetProjects() {
    // Construct request
    const request = {
      parent,
      pageToken,
    };

    // Run request
    const iterable = await vmmigrationClient.listTargetProjectsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListTargetProjects();
  // [END vmmigration_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
