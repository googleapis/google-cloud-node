// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function quickstart(
  project = 'my-project' // Project to list connections for.
) {
  // [START bigqueryconnection_quickstart]
  // Imports the Google Cloud client library
  const {
    ConnectionServiceClient,
  } = require('@google-cloud/bigquery-connection');

  // Creates a client
  const client = new ConnectionServiceClient();

  // project = 'my-project' // Project to list connections for.

  const parent = `projects/${project}/locations/US`;

  async function listConnections() {
    const [connections] = await client.listConnections({
      parent: parent,
    });

    console.info(`found ${connections.length} connections:`);
    console.info(connections);
  }
  const listConnectionsResponse = listConnections();
  // [END bigqueryconnection_quickstart]
  return listConnectionsResponse;
}

const args = process.argv.slice(2);
quickstart(...args).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
