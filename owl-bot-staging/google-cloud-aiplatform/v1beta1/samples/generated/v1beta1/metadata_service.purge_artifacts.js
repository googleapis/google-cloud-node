// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, filter) {
  // [START aiplatform_v1beta1_generated_MetadataService_PurgeArtifacts_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The metadata store to purge Artifacts from.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
   */
  // const parent = 'abc123'
  /**
   *  Required. A required filter matching the Artifacts to be purged.
   *  E.g., `update_time <= 2020-11-19T11:30:00-04:00`.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Flag to indicate to actually perform the purge.
   *  If `force` is set to false, the method will return a sample of
   *  Artifact names that would be deleted.
   */
  // const force = true

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callPurgeArtifacts() {
    // Construct request
    const request = {
      parent,
      filter,
    };

    // Run request
    const [operation] = await aiplatformClient.purgeArtifacts(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callPurgeArtifacts();
  // [END aiplatform_v1beta1_generated_MetadataService_PurgeArtifacts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));