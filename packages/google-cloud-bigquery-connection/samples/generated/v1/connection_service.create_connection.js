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

function main(parent, connection) {
  // [START bigqueryconnection_v1_generated_ConnectionService_CreateConnection_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource name.
   *  Must be in the format `projects/{project_id}/locations/{location_id}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. Connection id that should be assigned to the created connection.
   */
  // const connectionId = 'abc123'
  /**
   *  Required. Connection to create.
   */
  // const connection = ''

  // Imports the Connection library
  const {ConnectionServiceClient} =
    require('@google-cloud/bigquery-connection').v1;

  // Instantiates a client
  const connectionClient = new ConnectionServiceClient();

  async function createConnection() {
    // Construct request
    const request = {
      parent,
      connection,
    };

    // Run request
    const response = await connectionClient.createConnection(request);
    console.log(response);
  }

  createConnection();
  // [END bigqueryconnection_v1_generated_ConnectionService_CreateConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
