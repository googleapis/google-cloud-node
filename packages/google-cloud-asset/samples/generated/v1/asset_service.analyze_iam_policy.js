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

function main(analysisQuery) {
  // [START cloudasset_v1_generated_AssetService_AnalyzeIamPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The request query.
   */
  // const analysisQuery = {}
  /**
   *  Optional. Amount of time executable has to complete.  See JSON representation of
   *  Duration (https://developers.google.com/protocol-buffers/docs/proto3#json).
   *  If this field is set with a value less than the RPC deadline, and the
   *  execution of your query hasn't finished in the specified
   *  execution timeout,  you will get a response with partial result.
   *  Otherwise, your query's execution will continue until the RPC deadline.
   *  If it's not finished until then, you will get a  DEADLINE_EXCEEDED error.
   *  Default is empty.
   */
  // const executionTimeout = {}

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callAnalyzeIamPolicy() {
    // Construct request
    const request = {
      analysisQuery,
    };

    // Run request
    const response = await assetClient.analyzeIamPolicy(request);
    console.log(response);
  }

  callAnalyzeIamPolicy();
  // [END cloudasset_v1_generated_AssetService_AnalyzeIamPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
