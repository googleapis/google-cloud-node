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

function main(parent) {
  // [START aiplatform_v1_generated_FeatureOnlineStoreAdminService_ListFeatureOnlineStores_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list FeatureOnlineStores.
   *  Format:
   *  `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Lists the FeatureOnlineStores that match the filter expression. The
   *  following fields are supported:
   *  * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *  Values must be
   *    in RFC 3339 format.
   *  * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *  Values must be
   *    in RFC 3339 format.
   *  * `labels`: Supports key-value equality and key presence.
   *  Examples:
   *  * `create_time > "2020-01-01" OR update_time > "2020-01-01"`
   *     FeatureOnlineStores created or updated after 2020-01-01.
   *  * `labels.env = "prod"`
   *     FeatureOnlineStores with label "env" set to "prod".
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of FeatureOnlineStores to return. The service may return
   *  fewer than this value. If unspecified, at most 100 FeatureOnlineStores will
   *  be returned. The maximum value is 100; any value greater than 100 will be
   *  coerced to 100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  FeatureOnlineStoreAdminService.ListFeatureOnlineStores google.cloud.aiplatform.v1.FeatureOnlineStoreAdminService.ListFeatureOnlineStores 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  FeatureOnlineStoreAdminService.ListFeatureOnlineStores google.cloud.aiplatform.v1.FeatureOnlineStoreAdminService.ListFeatureOnlineStores 
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  A comma-separated list of fields to order by, sorted in ascending order.
   *  Use "desc" after a field name for descending.
   *  Supported Fields:
   *    * `create_time`
   *    * `update_time`
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {FeatureOnlineStoreAdminServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new FeatureOnlineStoreAdminServiceClient();

  async function callListFeatureOnlineStores() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.listFeatureOnlineStoresAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListFeatureOnlineStores();
  // [END aiplatform_v1_generated_FeatureOnlineStoreAdminService_ListFeatureOnlineStores_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));