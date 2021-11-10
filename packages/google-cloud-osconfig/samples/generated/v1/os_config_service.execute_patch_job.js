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

function main(parent, instanceFilter) {
  // [START osconfig_v1_generated_OsConfigService_ExecutePatchJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project in which to run this patch in the form `projects/*`
   */
  // const parent = 'abc123'
  /**
   *  Description of the patch job. Length of the description is limited
   *  to 1024 characters.
   */
  // const description = 'abc123'
  /**
   *  Required. Instances to patch, either explicitly or filtered by some
   *  criteria such as zone or labels.
   */
  // const instanceFilter = {}
  /**
   *  Patch configuration being applied. If omitted, instances are
   *  patched using the default configurations.
   */
  // const patchConfig = {}
  /**
   *  Duration of the patch job. After the duration ends, the patch job
   *  times out.
   */
  // const duration = {}
  /**
   *  If this patch is a dry-run only, instances are contacted but
   *  will do nothing.
   */
  // const dryRun = true
  /**
   *  Display name for this patch job. This does not have to be unique.
   */
  // const displayName = 'abc123'
  /**
   *  Rollout strategy of the patch job.
   */
  // const rollout = {}

  // Imports the Osconfig library
  const {OsConfigServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigServiceClient();

  async function callExecutePatchJob() {
    // Construct request
    const request = {
      parent,
      instanceFilter,
    };

    // Run request
    const response = await osconfigClient.executePatchJob(request);
    console.log(response);
  }

  callExecutePatchJob();
  // [END osconfig_v1_generated_OsConfigService_ExecutePatchJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
