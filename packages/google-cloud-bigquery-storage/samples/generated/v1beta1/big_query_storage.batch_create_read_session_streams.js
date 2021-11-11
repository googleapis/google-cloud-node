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

function main(session, requestedStreams) {
  // [START bigquerystorage_v1beta1_generated_BigQueryStorage_BatchCreateReadSessionStreams_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Must be a non-expired session obtained from a call to
   *  CreateReadSession. Only the name field needs to be set.
   */
  // const session = {}
  /**
   *  Required. Number of new streams requested. Must be positive.
   *  Number of added streams may be less than this, see CreateReadSessionRequest
   *  for more information.
   */
  // const requestedStreams = 1234

  // Imports the Storage library
  const {BigQueryStorageClient} =
    require('@google-cloud/bigquery-storage').v1beta1;

  // Instantiates a client
  const storageClient = new BigQueryStorageClient();

  async function callBatchCreateReadSessionStreams() {
    // Construct request
    const request = {
      session,
      requestedStreams,
    };

    // Run request
    const response = await storageClient.batchCreateReadSessionStreams(request);
    console.log(response);
  }

  callBatchCreateReadSessionStreams();
  // [END bigquerystorage_v1beta1_generated_BigQueryStorage_BatchCreateReadSessionStreams_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
