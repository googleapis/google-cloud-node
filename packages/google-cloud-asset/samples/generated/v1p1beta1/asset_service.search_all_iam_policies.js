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

function main(scope) {
  // [START cloudasset_v1p1beta1_generated_AssetService_SearchAllIamPolicies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative name of an asset. The search is limited to the resources
   *  within the `scope`. The allowed value must be:
   *  * Organization number (such as "organizations/123")
   *  * Folder number(such as "folders/1234")
   *  * Project number (such as "projects/12345")
   *  * Project id (such as "projects/abc")
   */
  // const scope = 'abc123'
  /**
   *  Optional. The query statement.
   *  Examples:
   *  * "policy:myuser@mydomain.com"
   *  * "policy:(myuser@mydomain.com viewer)"
   */
  // const query = 'abc123'
  /**
   *  Optional. The page size for search result pagination. Page size is capped at 500 even
   *  if a larger value is given. If set to zero, server will pick an appropriate
   *  default. Returned results may be fewer than requested. When this happens,
   *  there could be more results as long as `next_page_token` is returned.
   */
  // const pageSize = 1234
  /**
   *  Optional. If present, retrieve the next batch of results from the preceding call to
   *  this method. `page_token` must be the value of `next_page_token` from the
   *  previous response. The values of all other method parameters must be
   *  identical to those in the previous call.
   */
  // const pageToken = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1p1beta1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function searchAllIamPolicies() {
    // Construct request
    const request = {
      scope,
    };

    // Run request
    const iterable = await assetClient.searchAllIamPoliciesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchAllIamPolicies();
  // [END cloudasset_v1p1beta1_generated_AssetService_SearchAllIamPolicies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
