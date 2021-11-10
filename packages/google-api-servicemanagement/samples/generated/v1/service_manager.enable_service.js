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

function main(serviceName, consumerId) {
  // [START servicemanagement_v1_generated_ServiceManager_EnableService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the service to enable. Specifying an unknown service name will
   *  cause the request to fail.
   */
  // const serviceName = 'abc123'
  /**
   *  Required. The identity of consumer resource which service enablement will be
   *  applied to.
   *  The Google Service Management implementation accepts the following
   *  forms:
   *  - "project:<project_id>"
   *  Note: this is made compatible with
   *  google.api.servicecontrol.v1.Operation.consumer_id.
   */
  // const consumerId = 'abc123'

  // Imports the Servicemanagement library
  const {ServiceManagerClient} = require('@google-cloud/service-management').v1;

  // Instantiates a client
  const servicemanagementClient = new ServiceManagerClient();

  async function callEnableService() {
    // Construct request
    const request = {
      serviceName,
      consumerId,
    };

    // Run request
    const [operation] = await servicemanagementClient.enableService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callEnableService();
  // [END servicemanagement_v1_generated_ServiceManager_EnableService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
