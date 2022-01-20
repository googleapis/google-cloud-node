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

function main(parent, servicePerimeters) {
  // [START accesscontextmanager_v1_generated_AccessContextManager_ReplaceServicePerimeters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for the access policy which owns these
   *  Service Perimeters 
   *  google.identity.accesscontextmanager.v1.ServicePerimeter.
   *  Format: `accessPolicies/{policy_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The desired Service Perimeters 
   *  google.identity.accesscontextmanager.v1.ServicePerimeter  that should
   *  replace all existing Service Perimeters 
   *  google.identity.accesscontextmanager.v1.ServicePerimeter  in the
   *  Access Policy 
   *  google.identity.accesscontextmanager.v1.AccessPolicy.
   */
  // const servicePerimeters = 1234
  /**
   *  Optional. The etag for the version of the Access Policy 
   *  google.identity.accesscontextmanager.v1.AccessPolicy  that this
   *  replace operation is to be performed on. If, at the time of replace, the
   *  etag for the Access Policy stored in Access Context Manager is different
   *  from the specified etag, then the replace operation will not be performed
   *  and the call will fail. This field is not required. If etag is not
   *  provided, the operation will be performed as if a valid etag is provided.
   */
  // const etag = 'abc123'

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} = require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function callReplaceServicePerimeters() {
    // Construct request
    const request = {
      parent,
      servicePerimeters,
    };

    // Run request
    const [operation] = await accesscontextmanagerClient.replaceServicePerimeters(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callReplaceServicePerimeters();
  // [END accesscontextmanager_v1_generated_AccessContextManager_ReplaceServicePerimeters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
