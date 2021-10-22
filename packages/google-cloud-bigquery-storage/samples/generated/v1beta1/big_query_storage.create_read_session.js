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

function main(tableReference, parent) {
  // [START bigquerystorage_v1beta1_generated_BigQueryStorage_CreateReadSession_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Reference to the table to read.
   */
  // const tableReference = ''
  /**
   *  Required. String of the form `projects/{project_id}` indicating the
   *  project this ReadSession is associated with. This is the project that will
   *  be billed for usage.
   */
  // const parent = 'abc123'
  /**
   *  Any modifiers to the Table (e.g. snapshot timestamp).
   */
  // const tableModifiers = ''
  /**
   *  Initial number of streams. If unset or 0, we will
   *  provide a value of streams so as to produce reasonable throughput. Must be
   *  non-negative. The number of streams may be lower than the requested number,
   *  depending on the amount parallelism that is reasonable for the table and
   *  the maximum amount of parallelism allowed by the system.
   *  Streams must be read starting from offset 0.
   */
  // const requestedStreams = 1234
  /**
   *  Read options for this session (e.g. column selection, filters).
   */
  // const readOptions = ''
  /**
   *  Data output format. Currently default to Avro.
   */
  // const format = ''
  /**
   *  The strategy to use for distributing data among multiple streams. Currently
   *  defaults to liquid sharding.
   */
  // const shardingStrategy = ''

  // Imports the Storage library
  const {BigQueryStorageClient} =
    require('@google-cloud/bigquery-storage').v1beta1;

  // Instantiates a client
  const storageClient = new BigQueryStorageClient();

  async function createReadSession() {
    // Construct request
    const request = {
      tableReference,
      parent,
    };

    // Run request
    const response = await storageClient.createReadSession(request);
    console.log(response);
  }

  createReadSession();
  // [END bigquerystorage_v1beta1_generated_BigQueryStorage_CreateReadSession_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
