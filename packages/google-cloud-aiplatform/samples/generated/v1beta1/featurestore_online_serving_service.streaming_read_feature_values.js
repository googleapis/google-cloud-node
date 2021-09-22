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

function main(entityType, entityIds, featureSelector) {
  // [START aiplatform_streaming_read_feature_values_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the entities' type.
   *  Value format: `projects/{project}/locations/{location}/featurestores/
   *  {featurestore}/entityTypes/{entityType}`. For example,
   *  for a machine learning model predicting user clicks on a website, an
   *  EntityType ID could be "user".
   */
  // const entityType = 'abc123'
  /**
   *  Required. IDs of entities to read Feature values of. The maximum number of IDs is
   *  100. For example, for a machine learning model predicting user clicks on a
   *  website, an entity ID could be "user_123".
   */
  // const entityIds = 'abc123'
  /**
   *  Required. Selector choosing Features of the target EntityType. Feature IDs will be
   *  deduplicated.
   */
  // const featureSelector = ''

  // Imports the Aiplatform library
  const {FeaturestoreOnlineServingServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreOnlineServingServiceClient();

  async function streamingReadFeatureValues() {
    // Construct request
    const request = {
      entityType,
      entityIds,
      featureSelector,
    };

    // Run request
    const stream = await aiplatformClient.streamingReadFeatureValues(request);
    stream.on('data', response => {
      console.log(response);
    });
    stream.on('error', err => {
      throw err;
    });
    stream.on('end', () => {
      /* API call completed */
    });
  }

  streamingReadFeatureValues();
  // [END aiplatform_streaming_read_feature_values_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
