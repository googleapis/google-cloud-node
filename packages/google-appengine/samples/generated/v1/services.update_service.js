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
  // [START appengine_v1_generated_Services_UpdateService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the resource to update. Example: `apps/myapp/services/default`.
   */
  // const name = 'abc123'
  /**
   *  A Service resource containing the updated service. Only fields set in the
   *  field mask will be updated.
   */
  // const service = {}
  /**
   *  Standard field mask for the set of fields to be updated.
   */
  // const updateMask = {}
  /**
   *  Set to `true` to gradually shift traffic to one or more versions that you
   *  specify. By default, traffic is shifted immediately.
   *  For gradual traffic migration, the target versions
   *  must be located within instances that are configured for both
   *  warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#InboundServiceType)
   *  and
   *  automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#AutomaticScaling).
   *  You must specify the
   *  `shardBy` (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#ShardBy)
   *  field in the Service resource. Gradual traffic migration is not
   *  supported in the App Engine flexible environment. For examples, see
   *  Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
   */
  // const migrateTraffic = true

  // Imports the Appengine library
  const {ServicesClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new ServicesClient();

  async function callUpdateService() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await appengineClient.updateService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateService();
  // [END appengine_v1_generated_Services_UpdateService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
