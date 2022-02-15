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

function main(serviceName, filter) {
  // [START servicemanagement_v1_generated_ServiceManager_ListServiceRollouts_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the service.  See the overview (/service-management/overview)
   *  for naming requirements.  For example: `example.googleapis.com`.
   */
  // const serviceName = 'abc123'
  /**
   *  The token of the page to retrieve.
   */
  // const pageToken = 'abc123'
  /**
   *  The max number of items to include in the response list. Page size is 50
   *  if not specified. Maximum value is 100.
   */
  // const pageSize = 1234
  /**
   *  Required. Use `filter` to return subset of rollouts.
   *  The following filters are supported:
   *    -- To limit the results to only those in
   *       status (google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',
   *       use filter='status=SUCCESS'
   *    -- To limit the results to those in
   *       status (google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'
   *       or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
   */
  // const filter = 'abc123'

  // Imports the Servicemanagement library
  const {ServiceManagerClient} = require('@google-cloud/service-management').v1;

  // Instantiates a client
  const servicemanagementClient = new ServiceManagerClient();

  async function callListServiceRollouts() {
    // Construct request
    const request = {
      serviceName,
      filter,
    };

    // Run request
    const iterable = await servicemanagementClient.listServiceRolloutsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListServiceRollouts();
  // [END servicemanagement_v1_generated_ServiceManager_ListServiceRollouts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
