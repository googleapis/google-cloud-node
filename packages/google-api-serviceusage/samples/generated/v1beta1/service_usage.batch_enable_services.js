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
  // [START serviceusage_v1beta1_generated_ServiceUsage_BatchEnableServices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Parent to enable services on.
   *  An example name would be:
   *  `projects/123`
   *  where `123` is the project number (not project ID).
   *  The `BatchEnableServices` method currently only supports projects.
   */
  // const parent = 'abc123'
  /**
   *  The identifiers of the services to enable on the project.
   *  A valid identifier would be:
   *  serviceusage.googleapis.com
   *  Enabling services requires that each service is public or is shared with
   *  the user enabling the service.
   *  Two or more services must be specified. To enable a single service,
   *  use the `EnableService` method instead.
   *  A single request can enable a maximum of 20 services at a time. If more
   *  than 20 services are specified, the request will fail, and no state changes
   *  will occur.
   */
  // const serviceIds = 'abc123'

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function callBatchEnableServices() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await serviceusageClient.batchEnableServices(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchEnableServices();
  // [END serviceusage_v1beta1_generated_ServiceUsage_BatchEnableServices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
