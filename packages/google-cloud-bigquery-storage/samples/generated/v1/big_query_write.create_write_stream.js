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

function main(parent, writeStream) {
  // [START bigquerystorage_v1_generated_BigQueryWrite_CreateWriteStream_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Reference to the table to which the stream belongs, in the format
   *  of `projects/{project}/datasets/{dataset}/tables/{table}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Stream to be created.
   */
  // const writeStream = {}

  // Imports the Storage library
  const {BigQueryWriteClient} = require('@google-cloud/bigquery-storage').v1;

  // Instantiates a client
  const storageClient = new BigQueryWriteClient();

  async function callCreateWriteStream() {
    // Construct request
    const request = {
      parent,
      writeStream,
    };

    // Run request
    const response = await storageClient.createWriteStream(request);
    console.log(response);
  }

  callCreateWriteStream();
  // [END bigquerystorage_v1_generated_BigQueryWrite_CreateWriteStream_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
