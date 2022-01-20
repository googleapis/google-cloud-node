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

function main(analysisQuery, outputConfig) {
  // [START cloudasset_v1_generated_AssetService_AnalyzeIamPolicyLongrunning_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The request query.
   */
  // const analysisQuery = {}
  /**
   *  Required. Output configuration indicating where the results will be output to.
   */
  // const outputConfig = {}

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callAnalyzeIamPolicyLongrunning() {
    // Construct request
    const request = {
      analysisQuery,
      outputConfig,
    };

    // Run request
    const [operation] = await assetClient.analyzeIamPolicyLongrunning(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAnalyzeIamPolicyLongrunning();
  // [END cloudasset_v1_generated_AssetService_AnalyzeIamPolicyLongrunning_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
