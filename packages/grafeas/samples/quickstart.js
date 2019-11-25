// Copyright 2019 Google LLC
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

/**
 * Lists occurrences for the specified project.
 * @param {string} projectId.
 */
async function main(projectId) {
  // [START grafeas_quickstart]

  // const projectId = 'my-project';

  // instantiate the client.
  const grpc = require('@grpc/grpc-js');
  const {GrafeasClient} = require('@google-cloud/grafeas');
  const client = new GrafeasClient({
    sslCreds: grpc.credentials.createInsecure(), // or any other credentials object.
    servicePath: '0.0.0.0', // overriding the service path.
    port: 8080, // overriding the port.
  });

  // populate the request.
  const formattedName = client.projectPath(projectId);
  const request = {
    parent: formattedName,
  };

  // fetch the list of occurrences.
  const [resp] = await client.listOccurrences(request);
  console.info(resp);
  // [END grafeas_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
