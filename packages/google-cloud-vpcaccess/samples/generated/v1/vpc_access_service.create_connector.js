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

function main(parent, connectorId, connector) {
  // [START vpcaccess_v1_generated_VpcAccessService_CreateConnector_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location in which the configuration should be created,
   *  specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID to use for this connector.
   */
  // const connectorId = 'abc123'
  /**
   *  Required. Resource to create.
   */
  // const connector = {}

  // Imports the Vpcaccess library
  const {VpcAccessServiceClient} = require('@google-cloud/vpc-access').v1;

  // Instantiates a client
  const vpcaccessClient = new VpcAccessServiceClient();

  async function callCreateConnector() {
    // Construct request
    const request = {
      parent,
      connectorId,
      connector,
    };

    // Run request
    const [operation] = await vpcaccessClient.createConnector(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateConnector();
  // [END vpcaccess_v1_generated_VpcAccessService_CreateConnector_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
