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
  // [START bigquerystorage_v1_generated_BigQueryWrite_GetWriteStream_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the stream to get, in the form of
   *  `projects/{project}/datasets/{dataset}/tables/{table}/streams/{stream}`.
   */
  // const name = 'abc123'

  // Imports the Storage library
  const {BigQueryWriteClient} = require('@google-cloud/bigquery-storage').v1;

  // Instantiates a client
  const storageClient = new BigQueryWriteClient();

  async function callGetWriteStream() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await storageClient.getWriteStream(request);
    console.log(response);
  }

  callGetWriteStream();
  // [END bigquerystorage_v1_generated_BigQueryWrite_GetWriteStream_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
