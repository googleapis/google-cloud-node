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

function main(entityType) {
  // [START aiplatform_v1beta1_generated_FeaturestoreService_UpdateEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The EntityType's `name` field is used to identify the EntityType to be
   *  updated.
   *  Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`
   */
  // const entityType = ''
  /**
   *  Field mask is used to specify the fields to be overwritten in the
   *  EntityType resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then only the non-empty fields present in the
   *  request will be overwritten. Set the update_mask to `*` to override all
   *  fields.
   *  Updatable fields:
   *    * `description`
   *    * `labels`
   *    * `monitoring_config.snapshot_analysis.disabled`
   *    * `monitoring_config.snapshot_analysis.monitoring_interval`
   */
  // const updateMask = ''

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function updateEntityType() {
    // Construct request
    const request = {
      entityType,
    };

    // Run request
    const response = await aiplatformClient.updateEntityType(request);
    console.log(response);
  }

  updateEntityType();
  // [END aiplatform_v1beta1_generated_FeaturestoreService_UpdateEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
