// Copyright 2020 Google LLC
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

// sample-metadata:
//   title: Search All Iam Policies
//   description: Search All Iam Policies.
//   usage: node searchAllIamPolicies <SCOPE> <QUERY> <PAGE_SIZE> <PAGE_TOKEN>

async function main(scope, query, pageSize, pageToken) {
  // [START asset_quickstart_search_all_iam_policies]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const scope = '';
  // const query = '';
  // const pageSize = 0;
  // const pageToken = '';

  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();
  const projectId = await client.getProjectId();

  async function searchAllIamPolicies() {
    const request = {
      scope: `projects/${projectId}`,
      query: query,
      pageSize: pageSize,
      pageToken: pageToken,
    };
    const options = {
      autoPaginate: false,
    };

    // Handle the operation using the promise pattern.
    const result = await client.searchAllIamPolicies(request, options);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  // [END asset_quickstart_search_all_iam_policies]
  searchAllIamPolicies();
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
