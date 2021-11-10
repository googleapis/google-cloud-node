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

function main(newConfig) {
  // [START servicemanagement_v1_generated_ServiceManager_GenerateConfigReport_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Service configuration for which we want to generate the report.
   *  For this version of API, the supported types are
   *  google.api.servicemanagement.v1.ConfigRef google.api.servicemanagement.v1.ConfigRef,
   *  google.api.servicemanagement.v1.ConfigSource google.api.servicemanagement.v1.ConfigSource,
   *  and google.api.Service google.api.Service
   */
  // const newConfig = {}
  /**
   *  Optional. Service configuration against which the comparison will be done.
   *  For this version of API, the supported types are
   *  google.api.servicemanagement.v1.ConfigRef google.api.servicemanagement.v1.ConfigRef,
   *  google.api.servicemanagement.v1.ConfigSource google.api.servicemanagement.v1.ConfigSource,
   *  and google.api.Service google.api.Service
   */
  // const oldConfig = {}

  // Imports the Servicemanagement library
  const {ServiceManagerClient} = require('@google-cloud/service-management').v1;

  // Instantiates a client
  const servicemanagementClient = new ServiceManagerClient();

  async function callGenerateConfigReport() {
    // Construct request
    const request = {
      newConfig,
    };

    // Run request
    const response = await servicemanagementClient.generateConfigReport(
      request
    );
    console.log(response);
  }

  callGenerateConfigReport();
  // [END servicemanagement_v1_generated_ServiceManager_GenerateConfigReport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
