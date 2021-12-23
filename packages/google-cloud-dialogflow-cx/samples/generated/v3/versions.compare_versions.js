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

function main(baseVersion, targetVersion) {
  // [START dialogflow_v3_generated_Versions_CompareVersions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the base flow version to compare with the target version. Use
   *  version ID `0` to indicate the draft version of the specified flow.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/
   *  <Agent ID>/flows/<Flow ID>/versions/<Version ID>`.
   */
  // const baseVersion = 'abc123'
  /**
   *  Required. Name of the target flow version to compare with the
   *  base version. Use version ID `0` to indicate the draft version of the
   *  specified flow. Format: `projects/<Project ID>/locations/<Location
   *  ID>/agents/<Agent ID>/flows/<Flow ID>/versions/<Version ID>`.
   */
  // const targetVersion = 'abc123'
  /**
   *  The language to compare the flow versions for.
   *  If not specified, the agent's default language is used.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/docs/reference/language) are
   *  supported. Note: languages must be enabled in the agent before they can be
   *  used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {VersionsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new VersionsClient();

  async function callCompareVersions() {
    // Construct request
    const request = {
      baseVersion,
      targetVersion,
    };

    // Run request
    const response = await cxClient.compareVersions(request);
    console.log(response);
  }

  callCompareVersions();
  // [END dialogflow_v3_generated_Versions_CompareVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
