// Copyright 2018 Google LLC
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
//   title: Asset History Quickstart
//   description: Batch get history of assets.
//   usage: node getBatchAssetHistory "//storage.googleapis.com/<BUCKET_NAME>"

async function main(assetNames) {
  // [START asset_quickstart]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();

  async function quickstart() {
    const projectId = await client.getProjectId();
    const projectResource = `projects/${projectId}`;
    // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR_BUCKET_NAME].
    // const assetNames = ['ASSET_NAME1', 'ASSET_NAME2', ...];

    const request = {
      parent: projectResource,
      assetNames: assetNames.split(','),
      contentType: 'RESOURCE',
      readTimeWindow: {
        startTime: {
          seconds: Math.floor(new Date().getTime() / 1000),
        },
      },
    };

    // Handle the operation using the promise pattern.
    const result = await client.batchGetAssetsHistory(request);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
    // [END asset_quickstart]
  }
  await quickstart();
}

main(...process.argv.slice(2));
