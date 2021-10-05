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

function main(name, connection, updateMask) {
  // [START bigqueryconnection_v1_generated_ConnectionService_UpdateConnection_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the connection to update, for example:
   *  `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
   */
  // const name = 'abc123'
  /**
   *  Required. Connection containing the updated fields.
   */
  // const connection = ''
  /**
   *  Required. Update mask for the connection fields to be updated.
   */
  // const updateMask = ''

  // Imports the Connection library
  const {ConnectionServiceClient} =
    require('@google-cloud/bigquery-connection').v1;

  // Instantiates a client
  const connectionClient = new ConnectionServiceClient();

  async function updateConnection() {
    // Construct request
    const request = {
      name,
      connection,
      updateMask,
    };

    // Run request
    const response = await connectionClient.updateConnection(request);
    console.log(response);
  }

  updateConnection();
  // [END bigqueryconnection_v1_generated_ConnectionService_UpdateConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
