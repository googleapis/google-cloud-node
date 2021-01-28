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
//   title: Analyze Iam Policy Longrunning and write results to Bigquery
//   description: Analyzes accessible IAM policies that match a request.
//   usage: node analyzeIamPolicyLongrunningBigquery <dataset_id> <table_prefix>

async function main(datasetId, tablePrefix) {
  // [START asset_quickstart_analyze_iam_policy_longrunning_bigquery]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();
  const projectId = await client.getProjectId();

  async function analyzeIamPolicyLongrunningBigquery() {
    // TODO(developer): choose the dataset and table prefix
    // const datasetId = ''
    // const tablePrefix = ''

    const request = {
      analysisQuery: {
        scope: `projects/${projectId}`,
        resourceSelector: {
          fullResourceName: `//cloudresourcemanager.googleapis.com/projects/${projectId}`,
        },
        options: {
          expandGroups: true,
          outputGroupEdges: true,
        },
      },
      outputConfig: {
        bigqueryDestination: {
          dataset: `projects/${projectId}/datasets/${datasetId}`,
          tablePrefix: tablePrefix,
        },
      },
    };

    // Handle the operation using the promise pattern.
    const [operation] = await client.analyzeIamPolicyLongrunning(request);

    // Operation#promise starts polling for the completion of the operation.
    const [result] = await operation.promise();

    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  // [END asset_quickstart_analyze_iam_policy_longrunning_bigquery]
  analyzeIamPolicyLongrunningBigquery();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
