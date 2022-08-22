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
//   title: Analyze Iam Policy
//   description: Analyzes accessible IAM policies that match a request.
//   usage: node analyzeIamPolicy

async function main() {
  // [START asset_quickstart_analyze_iam_policy]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();
  const projectId = await client.getProjectId();

  async function analyzeIamPolicy() {
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
    };

    // Handle the operation using the promise pattern.
    const result = await client.analyzeIamPolicy(request);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  // [END asset_quickstart_analyze_iam_policy]
  analyzeIamPolicy();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
