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
  // [START serviceusage_v1beta1_generated_ServiceUsage_EnableService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the consumer and service to enable the service on.
   *  The `EnableService` and `DisableService` methods currently only support
   *  projects.
   *  Enabling a service requires that the service is public or is shared with
   *  the user enabling the service.
   *  An example name would be:
   *  `projects/123/services/serviceusage.googleapis.com`
   *  where `123` is the project number (not project ID).
   */
  // const name = 'abc123'

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function enableService() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await serviceusageClient.enableService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  enableService();
  // [END serviceusage_v1beta1_generated_ServiceUsage_EnableService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
