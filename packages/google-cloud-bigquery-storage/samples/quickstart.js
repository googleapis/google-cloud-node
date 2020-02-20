// Copyright 2020 Google LLC
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

// sample-metadata:
//   title: BigQuery Storage Quickstart
//   description: Read data from a table via read stream.
//   usage: node quickstart.js
async function main() {
  // [START bigquery_storage_quickstart]

  // The read stream contains blocks of Avro-encoded bytes. We use the
  // 'avsc' library to decode these blocks. Install avsc with the following
  // command: npm install avsc
  const avro = require('avsc');

  // See reference documentation at
  // https://cloud.google.com/bigquery/docs/reference/storage
  const bqStorage = require('@google-cloud/bigquery-storage').v1beta1
    .BigQueryStorageClient;

  const client = new bqStorage();

  async function bigqueryStorageQuickstart() {
    // Get current project ID. The read session is created in this project.
    // This project can be different from that which contains the table.
    const myProjectId = await client.getProjectId();

    // This example reads baby name data from the public datasets.
    const projectId = 'bigquery-public-data';
    const datasetId = 'usa_names';
    const tableId = 'usa_1910_current';

    const tableReference = {
      projectId,
      datasetId,
      tableId,
    };

    const parent = `projects/${myProjectId}`;

    /* We limit the output columns to a subset of those allowed in the table,
     * and set a simple filter to only report names from the state of
     * Washington (WA).
     */
    const readOptions = {
      selectedFields: ['name', 'number', 'state'],
      rowRestriction: 'state = "WA"',
    };

    let tableModifiers = null;
    const snapshotSeconds = 0;

    // Set a snapshot time if it's been specified.
    if (snapshotSeconds > 0) {
      tableModifiers = {snapshotTime: {seconds: snapshotSeconds}};
    }

    // API request.
    const request = {
      tableReference,
      parent,
      readOptions,
      tableModifiers,
      // This API can also deliver data serialized in Apache Arrow format.
      // This example leverages Apache Avro.
      format: 'AVRO',
      /* We use a LIQUID strategy in this example because we only read from a
       * single stream. Consider BALANCED if you're consuming multiple streams
       * concurrently and want more consistent stream sizes.
       */
      shardingStrategy: 'LIQUID',
    };

    const [session] = await client.createReadSession(request);

    const schema = JSON.parse(session.avroSchema.schema);

    const avroType = avro.Type.forSchema(schema);

    /* The offset requested must be less than the last
     * row read from ReadRows. Requesting a larger offset is
     * undefined.
     */
    let offset = 0;

    const readRowsRequest = {
      // Optional stream name or offset. Offset requested must be less than the last
      // row read from readRows(). Requesting a larger offset is undefined.
      readPosition: {
        stream: session.streams[0],
        offset,
      },
    };

    const names = new Set();
    const states = {};

    /* We'll use only a single stream for reading data from the table. Because
     * of dynamic sharding, this will yield all the rows in the table. However,
     * if you wanted to fan out multiple readers you could do so by having a
     * reader process each individual stream.
     */
    client
      .readRows(readRowsRequest)
      .on('error', console.error)
      .on('data', function(data) {
        try {
          const decodedData = avroType.decode(
            data.avroRows.serializedBinaryRows
          );

          names.add(decodedData.value.name);

          if (!states[decodedData.value.state]) {
            states[decodedData.value.state] = true;
          }

          offset = decodedData.offset;
        } catch (error) {
          console.log(error);
        }
      })
      .on('end', function() {
        console.log(
          `Got ${names.size} unique names in states: ${Object.keys(states)}`
        );
        console.log(`Last offset: ${offset}`);
      });
  }
  // [END bigquery_storage_quickstart]
  bigqueryStorageQuickstart();
}

main(...process.argv.slice(2));
