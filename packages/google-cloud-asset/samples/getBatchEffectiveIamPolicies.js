// Copyright 2022 Google LLC
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
//   title: Batch Get Effective Iam Policies
//   description: Batch get effective IAM policies that match a request.
//   usage: node batchGetEffectiveIamPolicies

async function main(assetNames) {
  // [START asset_quickstart_batch_get_effective_iam_policies]
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();

  async function batchGetEffectiveIamPolicies() {
    const projectId = await client.getProjectId();
    const request = {
      scope: `projects/${projectId}`,
      names: assetNames.split(','),
    };

    // Handle the operation using the promise pattern.
    const result = await client.batchGetEffectiveIamPolicies(request);
    // Handle the response.
    console.dir(result, {depth: null});
  }
  // [END asset_quickstart_batch_get_effective_iam_policies]
  batchGetEffectiveIamPolicies();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
