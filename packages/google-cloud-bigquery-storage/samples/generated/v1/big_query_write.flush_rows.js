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

function main(writeStream) {
  // [START bigquerystorage_v1_generated_BigQueryWrite_FlushRows_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The stream that is the target of the flush operation.
   */
  // const writeStream = 'abc123'
  /**
   *  Ending offset of the flush operation. Rows before this offset(including
   *  this offset) will be flushed.
   */
  // const offset = {}

  // Imports the Storage library
  const {BigQueryWriteClient} = require('@google-cloud/bigquery-storage').v1;

  // Instantiates a client
  const storageClient = new BigQueryWriteClient();

  async function callFlushRows() {
    // Construct request
    const request = {
      writeStream,
    };

    // Run request
    const response = await storageClient.flushRows(request);
    console.log(response);
  }

  callFlushRows();
  // [END bigquerystorage_v1_generated_BigQueryWrite_FlushRows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
