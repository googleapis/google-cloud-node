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

function main(parent, featurestore, featurestoreId) {
  // [START aiplatform_v1beta1_generated_FeaturestoreService_CreateFeaturestore_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to create Featurestores.
   *  Format:
   *  `projects/{project}/locations/{location}'`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Featurestore to create.
   */
  // const featurestore = ''
  /**
   *  Required. The ID to use for this Featurestore, which will become the final component
   *  of the Featurestore's resource name.
   *  This value may be up to 60 characters, and valid characters are
   *  `[a-z0-9_]`. The first character cannot be a number.
   *  The value must be unique within the project and location.
   */
  // const featurestoreId = 'abc123'

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function createFeaturestore() {
    // Construct request
    const request = {
      parent,
      featurestore,
      featurestoreId,
    };

    // Run request
    const [operation] = await aiplatformClient.createFeaturestore(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createFeaturestore();
  // [END aiplatform_v1beta1_generated_FeaturestoreService_CreateFeaturestore_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
