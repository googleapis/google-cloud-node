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

function main(entityType, featureSpecs) {
  // [START aiplatform_import_feature_values_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   */
  // const avroSource = ''
  /**
   */
  // const bigquerySource = ''
  /**
   */
  // const csvSource = ''
  /**
   *  Source column that holds the Feature timestamp for all Feature
   *  values in each entity.
   */
  // const featureTimeField = 'abc123'
  /**
   *  Single Feature timestamp for all entities being imported. The
   *  timestamp must not have higher than millisecond precision.
   */
  // const featureTime = ''
  /**
   *  Required. The resource name of the EntityType grouping the Features for which values
   *  are being imported. Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entityType}`
   */
  // const entityType = 'abc123'
  /**
   *  Source column that holds entity IDs. If not provided, entity IDs are
   *  extracted from the column named `entity_id`.
   */
  // const entityIdField = 'abc123'
  /**
   *  Required. Specifications defining which Feature values to import from the entity. The
   *  request fails if no feature_specs are provided, and having multiple
   *  feature_specs for one Feature is not allowed.
   */
  // const featureSpecs = 1234
  /**
   *  If set, data will not be imported for online serving. This
   *  is typically used for backfilling, where Feature generation timestamps are
   *  not in the timestamp range needed for online serving.
   */
  // const disableOnlineServing = true
  /**
   *  Specifies the number of workers that are used to write data to the
   *  Featurestore. Consider the online serving capacity that you require to
   *  achieve the desired import throughput without interfering with online
   *  serving. The value must be positive, and less than or equal to 100.
   *  If not set, defaults to using 1 worker. The low count ensures minimal
   *  impact on online serving performance.
   */
  // const workerCount = 1234

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function importFeatureValues() {
    // Construct request
    const request = {
      entityType,
      featureSpecs,
    };

    // Run request
    const [operation] = await aiplatformClient.importFeatureValues(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  importFeatureValues();
  // [END aiplatform_import_feature_values_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
