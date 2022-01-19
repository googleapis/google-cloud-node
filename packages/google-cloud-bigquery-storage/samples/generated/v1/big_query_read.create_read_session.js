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

function main(parent, readSession) {
  // [START bigquerystorage_v1_generated_BigQueryRead_CreateReadSession_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The request project that owns the session, in the form of
   *  `projects/{project_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Session to be created.
   */
  // const readSession = {}
  /**
   *  Max initial number of streams. If unset or zero, the server will
   *  provide a value of streams so as to produce reasonable throughput. Must be
   *  non-negative. The number of streams may be lower than the requested number,
   *  depending on the amount parallelism that is reasonable for the table. Error
   *  will be returned if the max count is greater than the current system
   *  max limit of 1,000.
   *  Streams must be read starting from offset 0.
   */
  // const maxStreamCount = 1234

  // Imports the Storage library
  const {BigQueryReadClient} = require('@google-cloud/bigquery-storage').v1;

  // Instantiates a client
  const storageClient = new BigQueryReadClient();

  async function callCreateReadSession() {
    // Construct request
    const request = {
      parent,
      readSession,
    };

    // Run request
    const response = await storageClient.createReadSession(request);
    console.log(response);
  }

  callCreateReadSession();
  // [END bigquerystorage_v1_generated_BigQueryRead_CreateReadSession_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
