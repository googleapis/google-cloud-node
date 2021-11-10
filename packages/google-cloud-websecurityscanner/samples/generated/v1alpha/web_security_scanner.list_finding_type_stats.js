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

function main(parent) {
  // [START websecurityscanner_v1alpha_generated_WebSecurityScanner_ListFindingTypeStats_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, which should be a scan run resource name in the
   *  format
   *  'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
   */
  // const parent = 'abc123'

  // Imports the Websecurityscanner library
  const {WebSecurityScannerClient} =
    require('@google-cloud/web-security-scanner').v1alpha;

  // Instantiates a client
  const websecurityscannerClient = new WebSecurityScannerClient();

  async function callListFindingTypeStats() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await websecurityscannerClient.listFindingTypeStats(
      request
    );
    console.log(response);
  }

  callListFindingTypeStats();
  // [END websecurityscanner_v1alpha_generated_WebSecurityScanner_ListFindingTypeStats_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
