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
//   title: Export Assets To BigQuery
//   description: Export asserts to specified BigQuery table.
//   usage: node exportAssetsBigquery.js <projects/project_id/datasets/dataset_id> <table_name>

async function main(dataSet, table) {
  // [START asset_quickstart_export_assets_bigquery]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const dataSet = 'projects/project_id/datasets/dataset_id';
  // const table = 'mytable';

  const {AssetServiceClient} = require('@google-cloud/asset');
  const client = new AssetServiceClient();

  async function exportAssetsBigquery() {
    const projectId = await client.getProjectId();
    const projectResource = client.projectPath(projectId);
    const dataset = dataSet;

    const request = {
      parent: projectResource,
      outputConfig: {
        bigqueryDestination: {
          dataset: `projects/${projectId}/${dataset}`,
          table: table,
          force: true,
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

  exportAssetsBigquery();
  // [END asset_quickstart_export_assets_bigquery]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
