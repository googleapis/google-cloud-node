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

function main(filter) {
  // [START storagetransfer_v1_generated_StorageTransferService_ListTransferJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A list of query parameters specified as JSON text in the form of:
   *  `{"projectId":"my_project_id",
   *   "jobNames":"jobid1","jobid2",...,
   *   "jobStatuses":"status1","status2",... }`
   *  Since `jobNames` and `jobStatuses` support multiple values, their values
   *  must be specified with array notation. `projectId` is required.
   *  `jobNames` and `jobStatuses` are optional.  The valid values for
   *  `jobStatuses` are case-insensitive:
   *  ENABLED google.storagetransfer.v1.TransferJob.Status.ENABLED,
   *  DISABLED google.storagetransfer.v1.TransferJob.Status.DISABLED, and
   *  DELETED google.storagetransfer.v1.TransferJob.Status.DELETED.
   */
  // const filter = 'abc123'
  /**
   *  The list page size. The max allowed value is 256.
   */
  // const pageSize = 1234
  /**
   *  The list page token.
   */
  // const pageToken = 'abc123'

  // Imports the Storagetransfer library
  const {StorageTransferServiceClient} = require('@google-cloud/storage-transfer').v1;

  // Instantiates a client
  const storagetransferClient = new StorageTransferServiceClient();

  async function callListTransferJobs() {
    // Construct request
    const request = {
      filter,
    };

    // Run request
    const iterable = await storagetransferClient.listTransferJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTransferJobs();
  // [END storagetransfer_v1_generated_StorageTransferService_ListTransferJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
