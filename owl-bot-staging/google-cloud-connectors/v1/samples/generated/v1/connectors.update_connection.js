// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(connection, updateMask) {
  // [START connectors_v1_generated_Connectors_UpdateConnection_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Connection resource.
   */
  // const connection = {}
  /**
   *  Required. You can modify only the fields listed below.
   *  To lock/unlock a connection:
   *  * `lock_config`
   *  To suspend/resume a connection:
   *  * `suspended`
   *  To update the connection details:
   *  * `description`
   *  * `labels`
   *  * `connector_version`
   *  * `config_variables`
   *  * `auth_config`
   *  * `destination_configs`
   *  * `node_config`
   */
  // const updateMask = {}

  // Imports the Connectors library
  const {ConnectorsClient} = require('@google-cloud/connectors').v1;

  // Instantiates a client
  const connectorsClient = new ConnectorsClient();

  async function callUpdateConnection() {
    // Construct request
    const request = {
      connection,
      updateMask,
    };

    // Run request
    const [operation] = await connectorsClient.updateConnection(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateConnection();
  // [END connectors_v1_generated_Connectors_UpdateConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));