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

function main(resource, permissions) {
  // [START securitycenter_v1_generated_SecurityCenter_TestIamPermissions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  REQUIRED: The resource for which the policy detail is being requested.
   *  See the operation documentation for the appropriate value for this field.
   */
  // const resource = 'abc123'
  /**
   *  The set of permissions to check for the `resource`. Permissions with
   *  wildcards (such as '*' or 'storage.*') are not allowed. For more
   *  information see
   *  [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  // const permissions = 'abc123'

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function testIamPermissions() {
    // Construct request
    const request = {
      resource,
      permissions,
    };

    // Run request
    const response = await securitycenterClient.testIamPermissions(request);
    console.log(response);
  }

  testIamPermissions();
  // [END securitycenter_v1_generated_SecurityCenter_TestIamPermissions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
