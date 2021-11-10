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

function main(placement, userEvent) {
  // [START retail_v2_generated_PredictionService_Predict_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of the format:
   *  {name=projects/* /locations/global/catalogs/default_catalog/placements/*}
   *  The ID of the Recommendations AI placement. Before you can request
   *  predictions from your model, you must create at least one placement for it.
   *  For more information, see Managing
   *  placements (https://cloud.google.com/retail/recommendations-ai/docs/manage-placements).
   *  The full list of available placements can be seen at
   *  https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
   */
  // const placement = 'abc123'
  /**
   *  Required. Context about the user, what they are looking at and what action
   *  they took to trigger the predict request. Note that this user event detail
   *  won't be ingested to userEvent logs. Thus, a separate userEvent write
   *  request is required for event logging.
   */
  // const userEvent = {}
  /**
   *  Maximum number of results to return per page. Set this property
   *  to the number of prediction results needed. If zero, the service will
   *  choose a reasonable default. The maximum allowed value is 100. Values
   *  above 100 will be coerced to 100.
   */
  // const pageSize = 1234
  /**
   *  The previous PredictResponse.next_page_token.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter for restricting prediction results with a length limit of 5,000
   *  characters. Accepts values for tags and the `filterOutOfStockItems` flag.
   *   * Tag expressions. Restricts predictions to products that match all of the
   *     specified tags. Boolean operators `OR` and `NOT` are supported if the
   *     expression is enclosed in parentheses, and must be separated from the
   *     tag values by a space. `-"tagA"` is also supported and is equivalent to
   *     `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings
   *     with a size limit of 1,000 characters.
   *     Note: "Recently viewed" models don't support tag filtering at the
   *     moment.
   *   * filterOutOfStockItems. Restricts predictions to products that do not
   *   have a
   *     stockState value of OUT_OF_STOCK.
   *  Examples:
   *   * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
   *   * filterOutOfStockItems  tag=(-"promotional")
   *   * filterOutOfStockItems
   *  If your filter blocks all prediction results, nothing will be returned. If
   *  you want generic (unfiltered) popular products to be returned instead, set
   *  `strictFiltering` to false in `PredictRequest.params`.
   */
  // const filter = 'abc123'
  /**
   *  Use validate only mode for this prediction query. If set to true, a
   *  dummy model will be used that returns arbitrary products.
   *  Note that the validate only mode should only be used for testing the API,
   *  or if the model is not ready.
   */
  // const validateOnly = true
  /**
   *  Additional domain specific parameters for the predictions.
   *  Allowed values:
   *  * `returnProduct`: Boolean. If set to true, the associated product
   *     object will be returned in the `results.metadata` field in the
   *     prediction response.
   *  * `returnScore`: Boolean. If set to true, the prediction 'score'
   *     corresponding to each returned product will be set in the
   *     `results.metadata` field in the prediction response. The given
   *     'score' indicates the probability of an product being clicked/purchased
   *     given the user's context and history.
   *  * `strictFiltering`: Boolean. True by default. If set to false, the service
   *     will return generic (unfiltered) popular products instead of empty if
   *     your filter blocks all prediction results.
   *  * `priceRerankLevel`: String. Default empty. If set to be non-empty, then
   *     it needs to be one of {'no-price-reranking', 'low-price-reranking',
   *     'medium-price-reranking', 'high-price-reranking'}. This gives
   *     request-level control and adjusts prediction results based on product
   *     price.
   *  * `diversityLevel`: String. Default empty. If set to be non-empty, then
   *     it needs to be one of {'no-diversity', 'low-diversity',
   *     'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives
   *     request-level control and adjusts prediction results based on product
   *     category.
   */
  // const params = 1234
  /**
   *  The labels applied to a resource must meet the following requirements:
   *  * Each resource can have multiple labels, up to a maximum of 64.
   *  * Each label must be a key-value pair.
   *  * Keys have a minimum length of 1 character and a maximum length of 63
   *    characters, and cannot be empty. Values can be empty, and have a maximum
   *    length of 63 characters.
   *  * Keys and values can contain only lowercase letters, numeric characters,
   *    underscores, and dashes. All characters must use UTF-8 encoding, and
   *    international characters are allowed.
   *  * The key portion of a label must be unique. However, you can use the same
   *    key with multiple resources.
   *  * Keys must start with a lowercase letter or international character.
   *  See Google Cloud
   *  Document (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  for more details.
   */
  // const labels = 1234

  // Imports the Retail library
  const {PredictionServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new PredictionServiceClient();

  async function callPredict() {
    // Construct request
    const request = {
      placement,
      userEvent,
    };

    // Run request
    const response = await retailClient.predict(request);
    console.log(response);
  }

  callPredict();
  // [END retail_v2_generated_PredictionService_Predict_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
