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

function main(parent, clientEvent) {
  // [START jobs_v4_generated_EventService_CreateClientEvent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the tenant under which the event is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  Required. Events issued when end user interacts with customer's application that
   *  uses Cloud Talent Solution.
   */
  // const clientEvent = {}

  // Imports the Talent library
  const {EventServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new EventServiceClient();

  async function callCreateClientEvent() {
    // Construct request
    const request = {
      parent,
      clientEvent,
    };

    // Run request
    const response = await talentClient.createClientEvent(request);
    console.log(response);
  }

  callCreateClientEvent();
  // [END jobs_v4_generated_EventService_CreateClientEvent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
