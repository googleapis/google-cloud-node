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
  // [START serviceusage_v1_generated_ServiceUsage_DisableService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the consumer and service to disable the service on.
   *  The enable and disable methods currently only support projects.
   *  An example name would be:
   *  `projects/123/services/serviceusage.googleapis.com` where `123` is the
   *  project number.
   */
  // const name = 'abc123'
  /**
   *  Indicates if services that are enabled and which depend on this service
   *  should also be disabled. If not set, an error will be generated if any
   *  enabled services depend on the service to be disabled. When set, the
   *  service, and any enabled services that depend on it, will be disabled
   *  together.
   */
  // const disableDependentServices = true
  /**
   *  Defines the behavior for checking service usage when disabling a service.
   */
  // const checkIfServiceHasUsage = ''

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function disableService() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await serviceusageClient.disableService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  disableService();
  // [END serviceusage_v1_generated_ServiceUsage_DisableService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
