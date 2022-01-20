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

function main() {
  // [START apigeeconnect_v1_generated_Tether_Egress_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Unique identifier for the response. Matches the EgressRequest's id.
   */
  // const id = 'abc123'
  /**
   *  HttpResponse.
   */
  // const httpResponse = {}
  /**
   *  Errors from application when handling the http request.
   */
  // const status = {}
  /**
   *  GCP Project.
   *  Format: `projects/{project_number}`.
   */
  // const project = 'my-project'
  /**
   *  Unique identifier for clients to trace their request/response. Matches the
   *  EgressRequest's trace id
   */
  // const traceId = 'abc123'
  /**
   *  Tether Endpoint.
   */
  // const endpoint = {}
  /**
   *  Name is the full resource path of endpoint.
   *  Format: `projects/{project_number or project_id}/endpoints/{endpoint}`
   */
  // const name = 'abc123'

  // Imports the Apigeeconnect library
  const {TetherClient} = require('@google-cloud/apigee-connect').v1;

  // Instantiates a client
  const apigeeconnectClient = new TetherClient();

  async function callEgress() {
    // Construct request
    const request = {
    };

    // Run request
    const stream = await apigeeconnectClient.egress();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end(); 
  }

  callEgress();
  // [END apigeeconnect_v1_generated_Tether_Egress_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
