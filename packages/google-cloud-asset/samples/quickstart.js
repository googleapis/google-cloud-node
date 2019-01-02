/**
 * Copyright 2018, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

async function exportAssets(dumpFilePath) {
  // [START asset_quickstart_export_assets]
  const asset = require('@google-cloud/asset');
  const client = new asset.v1beta1.AssetServiceClient({
    // optional auth parameters.
  });

  // Your Google Cloud Platform project ID
  const projectId = await client.getProjectId();
  console.log(projectId);
  const projectResource = client.projectPath(projectId);

  // var dumpFilePath = 'Dump file path, e.g.: gs://<my_bucket>/<my_asset_file>'
  const outputConfig = {
    gcsDestination: {
      uri: dumpFilePath,
    },
  };
  const request = {
    parent: projectResource,
    outputConfig: outputConfig,
  };

  // Handle the operation using the promise pattern.
  const [operation] = await client.exportAssets(request);
  // Operation#promise starts polling for the completion of the operation.
  const [result] = await operation.promise();
  // Do things with with the response.
  console.log(result);
  // [END asset_quickstart_export_assets]
}

async function batchGetAssetsHistory(assetNames) {
  // [START asset_quickstart_batch_get_assets_history]
  const util = require('util');
  const asset = require('@google-cloud/asset');
  const client = new asset.v1beta1.AssetServiceClient({
    // optional auth parameters.
  });

  // Your Google Cloud Platform project ID
  const projectId = await client.getProjectId();
  const projectResource = client.projectPath(projectId);
  // Your asset names, such as //storage.googleapis.com/[YOUR_BUCKET_NAME].
  // var assetNames = ['ASSET_NAME1', 'ASSET_NAME2', ...];

  const contentType = 'RESOURCE';
  const readTimeWindow = {
    startTime: {
      seconds: Math.floor(new Date().getTime() / 1000),
    },
  };

  const request = {
    parent: projectResource,
    assetNames: assetNames,
    contentType: contentType,
    readTimeWindow: readTimeWindow,
  };

  // Handle the operation using the promise pattern.
  const result = await client.batchGetAssetsHistory(request);
  // Do things with with the response.
  console.log(util.inspect(result, {depth: null}));
  // [END asset_quickstart_batch_get_assets_history]
}

const cli = require('yargs')
  .demand(1)
  .command(
    'export-assets <dumpFilePath>',
    'Export asserts to specified dump file path.',
    {},
    opts => exportAssets(opts.dumpFilePath)
  )
  .command(
    'batch-get-history <assetNames>',
    'Batch get history of assets.',
    {},
    opts => {
      const assetNameList = opts.assetNames.split(',');
      batchGetAssetsHistory(assetNameList);
    }
  )
  .example(
    'node $0 export-assets gs://my-bucket/my-assets.txt',
    'Export assets to gs://my-bucket/my-assets.txt.'
  )
  .example(
    'node $0 batch-get-history "//storage.googleapis.com/<BUCKET_NAME>,"',
    'Batch get history of assets //storage.googleapis.com/<BUCKET_NAME> etc.'
  )
  .wrap(10)
  .recommendCommands()
  .epilogue(
    'https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview'
  )
  .help()
  .strict();

if (module === require.main) {
  cli.parse(process.argv.slice(2));
}
