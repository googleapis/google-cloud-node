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
  // [START asset_quickstart_exportassets]
  const asset = require('@google-cloud/asset');
  const client = new asset.v1beta1.AssetServiceClient({
    // optional auth parameters.
  });

  // Your Google Cloud Platform project ID
  const projectId = process.env.GCLOUD_PROJECT;
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
  // [END asset_quickstart_exportassets]
}

const cli = require('yargs')
  .demand(1)
  .command(
    'export-assets <dumpFilePath>',
    'Export asserts to specified dump file path.',
    {},
    opts => exportAssets(opts.dumpFilePath)
  )
  .example(
    'node $0 export-assets gs://my-bucket/my-assets.txt',
    'Export assets to gs://my-bucket/my-assets.txt.'
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
