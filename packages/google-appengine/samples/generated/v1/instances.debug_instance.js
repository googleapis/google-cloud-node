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
  // [START appengine_v1_generated_Instances_DebugInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the resource requested. Example:
   *  `apps/myapp/services/default/versions/v1/instances/instance-1`.
   */
  // const name = 'abc123'
  /**
   *  Public SSH key to add to the instance. Examples:
   *  * `[USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME]`
   *  * `[USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {"userName":"[USERNAME]","expireOn":"[EXPIRE_TIME]"}`
   *  For more information, see
   *  Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
   */
  // const sshKey = 'abc123'

  // Imports the Appengine library
  const {InstancesClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new InstancesClient();

  async function callDebugInstance() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await appengineClient.debugInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDebugInstance();
  // [END appengine_v1_generated_Instances_DebugInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
