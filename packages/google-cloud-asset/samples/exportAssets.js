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

// sample-metadata:
//   title: Export Assets
//   description: Export asserts to specified dump file path.
//   usage: node exportAssets.js <gs://my-bucket/my-assets.txt> <content_type>

async function main(dumpFilePath, contentType) {
  // [START asset_quickstart_export_assets]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const dumpFilePath = 'gs://my-bucket/my-assets.txt';
  // const contentType = 'RESOURCE';

  const {AssetServiceClient} = require('@google-cloud/asset');
  const client = new AssetServiceClient();

  async function exportAssets() {
    const projectId = await client.getProjectId();
    const projectResource = `projects/${projectId}`;

    // TODO(developer): choose the dump file path
    // const dumpFilePath = 'Dump file path, e.g.: gs://<my_bucket>/<my_asset_file>'
    const request = {
      parent: projectResource,
      contentType: contentType,
      outputConfig: {
        gcsDestination: {
          uri: dumpFilePath,
        },
      },
    };

    // Handle the operation using the promise pattern.
    const [operation] = await client.exportAssets(request);

    // Operation#promise starts polling for the completion of the operation.
    const [result] = await operation.promise();

    // Do things with with the response.
    console.log(result);
  }
  exportAssets().catch(err => {
    throw err;
  });
  // [END asset_quickstart_export_assets]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
