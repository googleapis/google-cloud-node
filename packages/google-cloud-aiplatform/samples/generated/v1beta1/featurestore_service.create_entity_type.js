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

function main(parent, entityTypeId) {
  // [START aiplatform_v1beta1_generated_FeaturestoreService_CreateEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Featurestore to create EntityTypes.
   *  Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}`
   */
  // const parent = 'abc123'
  /**
   *  The EntityType to create.
   */
  // const entityType = {}
  /**
   *  Required. The ID to use for the EntityType, which will become the final component of
   *  the EntityType's resource name.
   *  This value may be up to 60 characters, and valid characters are
   *  `[a-z0-9_]`. The first character cannot be a number.
   *  The value must be unique within a featurestore.
   */
  // const entityTypeId = 'abc123'

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function callCreateEntityType() {
    // Construct request
    const request = {
      parent,
      entityTypeId,
    };

    // Run request
    const [operation] = await aiplatformClient.createEntityType(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateEntityType();
  // [END aiplatform_v1beta1_generated_FeaturestoreService_CreateEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
