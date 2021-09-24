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

function main(parent, importJobId, importJob) {
  // [START kms_v1_generated_KeyManagementService_CreateImportJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The [name][google.cloud.kms.v1.KeyRing.name] of the [KeyRing][google.cloud.kms.v1.KeyRing] associated with the
   *  [ImportJobs][google.cloud.kms.v1.ImportJob].
   */
  // const parent = 'abc123'
  /**
   *  Required. It must be unique within a KeyRing and match the regular
   *  expression `[a-zA-Z0-9_-]{1,63}`
   */
  // const importJobId = 'abc123'
  /**
   *  Required. An [ImportJob][google.cloud.kms.v1.ImportJob] with initial field values.
   */
  // const importJob = ''

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function createImportJob() {
    // Construct request
    const request = {
      parent,
      importJobId,
      importJob,
    };

    // Run request
    const response = await kmsClient.createImportJob(request);
    console.log(response);
  }

  createImportJob();
  // [END kms_v1_generated_KeyManagementService_CreateImportJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
