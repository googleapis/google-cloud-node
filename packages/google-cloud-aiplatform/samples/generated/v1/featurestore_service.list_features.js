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
  // [START aiplatform_v1_generated_FeaturestoreService_ListFeatures_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list Features.
   *  Format:
   *  `projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}`
   */
  // const parent = 'abc123'
  /**
   *  Lists the Features that match the filter expression. The following
   *  filters are supported:
   *  * `value_type`: Supports = and != comparisons.
   *  * `create_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must
   *  be in RFC 3339 format.
   *  * `update_time`: Supports =, !=, <, >, >=, and <= comparisons. Values must
   *  be in RFC 3339 format.
   *  * `labels`: Supports key-value equality as well as key presence.
   *  Examples:
   *  * `value_type = DOUBLE` --> Features whose type is DOUBLE.
   *  * `create_time > \"2020-01-31T15:30:00.000000Z\" OR
   *       update_time > \"2020-01-31T15:30:00.000000Z\"` --> EntityTypes created
   *       or updated after 2020-01-31T15:30:00.000000Z.
   *  * `labels.active = yes AND labels.env = prod` --> Features having both
   *      (active: yes) and (env: prod) labels.
   *  * `labels.env: *` --> Any Feature which has a label with 'env' as the
   *    key.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of Features to return. The service may return fewer
   *  than this value. If unspecified, at most 1000 Features will be returned.
   *  The maximum value is 1000; any value greater than 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  FeaturestoreService.ListFeatures google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures  call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  FeaturestoreService.ListFeatures google.cloud.aiplatform.v1.FeaturestoreService.ListFeatures  must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  A comma-separated list of fields to order by, sorted in ascending order.
   *  Use "desc" after a field name for descending.
   *  Supported fields:
   *    * `feature_id`
   *    * `value_type`
   *    * `create_time`
   *    * `update_time`
   */
  // const orderBy = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = {}
  /**
   *  If set, return the most recent ListFeaturesRequest.latest_stats_count google.cloud.aiplatform.v1.ListFeaturesRequest.latest_stats_count 
   *  of stats for each Feature in response. Valid value is 0, 10. If number of
   *  stats exists < ListFeaturesRequest.latest_stats_count google.cloud.aiplatform.v1.ListFeaturesRequest.latest_stats_count, return all
   *  existing stats.
   */
  // const latestStatsCount = 1234

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function callListFeatures() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listFeaturesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListFeatures();
  // [END aiplatform_v1_generated_FeaturestoreService_ListFeatures_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
