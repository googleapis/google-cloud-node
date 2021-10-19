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

function main(parent, namespaceId, namespace) {
  // [START servicedirectory_v1_generated_RegistrationService_CreateNamespace_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project and location the namespace
   *  will be created in.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Resource ID must be 1-63 characters long, and comply with
   *  <a href="https://www.ietf.org/rfc/rfc1035.txt" target="_blank">RFC1035</a>.
   *  Specifically, the name must be 1-63 characters long and match the regular
   *  expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first
   *  character must be a lowercase letter, and all following characters must
   *  be a dash, lowercase letter, or digit, except the last character, which
   *  cannot be a dash.
   */
  // const namespaceId = 'abc123'
  /**
   *  Required. A namespace with initial fields set.
   */
  // const namespace = ''

  // Imports the Servicedirectory library
  const {RegistrationServiceClient} =
    require('@google-cloud/service-directory').v1;

  // Instantiates a client
  const servicedirectoryClient = new RegistrationServiceClient();

  async function createNamespace() {
    // Construct request
    const request = {
      parent,
      namespaceId,
      namespace,
    };

    // Run request
    const response = await servicedirectoryClient.createNamespace(request);
    console.log(response);
  }

  createNamespace();
  // [END servicedirectory_v1_generated_RegistrationService_CreateNamespace_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
