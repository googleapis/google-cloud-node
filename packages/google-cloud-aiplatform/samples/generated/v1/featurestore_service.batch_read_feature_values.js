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

function main(featurestore, destination, entityTypeSpecs) {
  // [START aiplatform_v1_generated_FeaturestoreService_BatchReadFeatureValues_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Each read instance consists of exactly one read timestamp and one or more
   *  entity IDs identifying entities of the corresponding EntityTypes whose
   *  Features are requested.
   *  Each output instance contains Feature values of requested entities
   *  concatenated together as of the read time.
   *  An example read instance may be `foo_entity_id, bar_entity_id,
   *  2020-01-01T10:00:00.123Z`.
   *  An example output instance may be `foo_entity_id, bar_entity_id,
   *  2020-01-01T10:00:00.123Z, foo_entity_feature1_value,
   *  bar_entity_feature2_value`.
   *  Timestamp in each read instance must be millisecond-aligned.
   *  `csv_read_instances` are read instances stored in a plain-text CSV file.
   *  The header should be:
   *      [ENTITY_TYPE_ID1], [ENTITY_TYPE_ID2], ..., timestamp
   *  The columns can be in any order.
   *  Values in the timestamp column must use the RFC 3339 format, e.g.
   *  `2012-07-30T10:43:17.123Z`.
   */
  // const csvReadInstances = ''
  /**
   *  Similar to csv_read_instances, but from BigQuery source.
   */
  // const bigqueryReadInstances = ''
  /**
   *  Required. The resource name of the Featurestore from which to query Feature values.
   *  Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}`
   */
  // const featurestore = 'abc123'
  /**
   *  Required. Specifies output location and format.
   */
  // const destination = ''
  /**
   *  When not empty, the specified fields in the *_read_instances source will be
   *  joined as-is in the output, in addition to those fields from the
   *  Featurestore Entity.
   *  For BigQuery source, the type of the pass-through values will be
   *  automatically inferred. For CSV source, the pass-through values will be
   *  passed as opaque bytes.
   */
  // const passThroughFields = 1234
  /**
   *  Required. Specifies EntityType grouping Features to read values of and settings.
   *  Each EntityType referenced in
   *  [BatchReadFeatureValuesRequest.entity_type_specs] must have a column
   *  specifying entity IDs in the EntityType in
   *  [BatchReadFeatureValuesRequest.request][] .
   */
  // const entityTypeSpecs = 1234

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function batchReadFeatureValues() {
    // Construct request
    const request = {
      featurestore,
      destination,
      entityTypeSpecs,
    };

    // Run request
    const [operation] = await aiplatformClient.batchReadFeatureValues(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  batchReadFeatureValues();
  // [END aiplatform_v1_generated_FeaturestoreService_BatchReadFeatureValues_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
