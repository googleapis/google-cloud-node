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

function main(resource, destinationParent) {
  // [START cloudasset_v1_generated_AssetService_AnalyzeMove_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the resource to perform the analysis against.
   *  Only GCP Project are supported as of today. Hence, this can only be Project
   *  ID (such as "projects/my-project-id") or a Project Number (such as
   *  "projects/12345").
   */
  // const resource = 'abc123'
  /**
   *  Required. Name of the GCP Folder or Organization to reparent the target
   *  resource. The analysis will be performed against hypothetically moving the
   *  resource to this specified desitination parent. This can only be a Folder
   *  number (such as "folders/123") or an Organization number (such as
   *  "organizations/123").
   */
  // const destinationParent = 'abc123'
  /**
   *  Analysis view indicating what information should be included in the
   *  analysis response. If unspecified, the default view is FULL.
   */
  // const view = {}

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callAnalyzeMove() {
    // Construct request
    const request = {
      resource,
      destinationParent,
    };

    // Run request
    const response = await assetClient.analyzeMove(request);
    console.log(response);
  }

  callAnalyzeMove();
  // [END cloudasset_v1_generated_AssetService_AnalyzeMove_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
