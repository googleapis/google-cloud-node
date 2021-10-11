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
  // [START aiplatform_v1beta1_generated_FeaturestoreService_ListFeaturestores_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list Featurestores.
   *  Format:
   *  `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Lists the featurestores that match the filter expression. The following
   *  fields are supported:
   *  * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *  Values must be
   *    in RFC 3339 format.
   *  * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *  Values must be
   *    in RFC 3339 format.
   *  * `online_serving_config.fixed_node_count`: Supports `=`, `!=`, `<`, `>`,
   *  `<=`, and `>=` comparisons.
   *  * `labels`: Supports key-value equality and key presence.
   *  Examples:
   *  * `create_time > "2020-01-01" OR update_time > "2020-01-01"`
   *     Featurestores created or updated after 2020-01-01.
   *  * `labels.env = "prod"`
   *     Featurestores with label "env" set to "prod".
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of Featurestores to return. The service may return fewer
   *  than this value. If unspecified, at most 100 Featurestores will be
   *  returned. The maximum value is 100; any value greater than 100 will be
   *  coerced to 100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  [FeaturestoreService.ListFeaturestores][google.cloud.aiplatform.v1beta1.FeaturestoreService.ListFeaturestores] call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  [FeaturestoreService.ListFeaturestores][google.cloud.aiplatform.v1beta1.FeaturestoreService.ListFeaturestores] must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  A comma-separated list of fields to order by, sorted in ascending order.
   *  Use "desc" after a field name for descending.
   *  Supported Fields:
   *    * `create_time`
   *    * `update_time`
   *    * `online_serving_config.fixed_node_count`
   */
  // const orderBy = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = ''

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function listFeaturestores() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listFeaturestoresAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listFeaturestores();
  // [END aiplatform_v1beta1_generated_FeaturestoreService_ListFeaturestores_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
