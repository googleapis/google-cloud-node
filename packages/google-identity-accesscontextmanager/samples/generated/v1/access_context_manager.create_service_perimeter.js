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

function main(parent, servicePerimeter) {
  // [START accesscontextmanager_v1_generated_AccessContextManager_CreateServicePerimeter_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for the access policy which owns this Service
   *  Perimeter google.identity.accesscontextmanager.v1.ServicePerimeter.
   *  Format: `accessPolicies/{policy_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Service Perimeter 
   *  google.identity.accesscontextmanager.v1.ServicePerimeter  to create.
   *  Syntactic correctness of the Service Perimeter 
   *  google.identity.accesscontextmanager.v1.ServicePerimeter  is a
   *  precondition for creation.
   */
  // const servicePerimeter = {}

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} = require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callCreateServicePerimeter() {
    // Construct request
    const request = {
      parent,
      servicePerimeter,
    };

    // Run request
    const [operation] = await accesscontextmanagerClient.createServicePerimeter(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateServicePerimeter();
  // [END accesscontextmanager_v1_generated_AccessContextManager_CreateServicePerimeter_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
