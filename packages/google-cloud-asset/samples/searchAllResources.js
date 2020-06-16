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
//   title: Search All Resources
//   description: Search All Resources.
//   usage: node searchAllResources <SCOPE> <QUERY> <ASSET_TYPES> <PAGE_SIZE> <PAGE_TOKEN> <ORDER_BY>

async function main(scope, query, assetTypes, pageSize, pageToken, orderBy) {
  // [START asset_quickstart_search_all_resources]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const scope = '';
  // const query = '';
  // const assetTypes = [];
  // const pageSize = 0;
  // const pageToken = '';
  // const orderBy = '';

  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();
  const projectId = await client.getProjectId();

  async function searchAllResources() {
    const request = {
      scope: `projects/${projectId}`,
      query: query,
      assetTypes: assetTypes,
      pageSize: pageSize,
      pageToken: pageToken,
      orderBy: orderBy,
    };
    const options = {
      autoPaginate: false,
    };

    // Handle the operation using the promise pattern.
    const result = await client.searchAllResources(request, options);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  // [END asset_quickstart_search_all_resources]
  searchAllResources();
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
