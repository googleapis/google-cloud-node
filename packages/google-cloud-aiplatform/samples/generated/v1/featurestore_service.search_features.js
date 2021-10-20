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

function main(location) {
  // [START aiplatform_v1_generated_FeaturestoreService_SearchFeatures_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to search Features.
   *  Format:
   *  `projects/{project}/locations/{location}`
   */
  // const location = 'abc123'
  /**
   *  Query string that is a conjunction of field-restricted queries and/or
   *  field-restricted filters.  Field-restricted queries and filters can be
   *  combined using `AND` to form a conjunction.
   *  A field query is in the form FIELD:QUERY. This implicitly checks if QUERY
   *  exists as a substring within Feature's FIELD. The QUERY
   *  and the FIELD are converted to a sequence of words (i.e. tokens) for
   *  comparison. This is done by:
   *    * Removing leading/trailing whitespace and tokenizing the search value.
   *    Characters that are not one of alphanumeric `[a-zA-Z0-9]`, underscore
   *    `_`, or asterisk `*` are treated as delimiters for tokens. `*` is treated
   *    as a wildcard that matches characters within a token.
   *    * Ignoring case.
   *    * Prepending an asterisk to the first and appending an asterisk to the
   *    last token in QUERY.
   *  A QUERY must be either a singular token or a phrase. A phrase is one or
   *  multiple words enclosed in double quotation marks ("). With phrases, the
   *  order of the words is important. Words in the phrase must be matching in
   *  order and consecutively.
   *  Supported FIELDs for field-restricted queries:
   *  * `feature_id`
   *  * `description`
   *  * `entity_type_id`
   *  Examples:
   *  * `feature_id: foo` --> Matches a Feature with ID containing the substring
   *  `foo` (eg. `foo`, `foofeature`, `barfoo`).
   *  * `feature_id: foo*feature` --> Matches a Feature with ID containing the
   *  substring `foo*feature` (eg. `foobarfeature`).
   *  * `feature_id: foo AND description: bar` --> Matches a Feature with ID
   *  containing the substring `foo` and description containing the substring
   *  `bar`.
   *  Besides field queries, the following exact-match filters are
   *  supported. The exact-match filters do not support wildcards. Unlike
   *  field-restricted queries, exact-match filters are case-sensitive.
   *  * `feature_id`: Supports = comparisons.
   *  * `description`: Supports = comparisons. Multi-token filters should be
   *  enclosed in quotes.
   *  * `entity_type_id`: Supports = comparisons.
   *  * `value_type`: Supports = and != comparisons.
   *  * `labels`: Supports key-value equality as well as key presence.
   *  * `featurestore_id`: Supports = comparisons.
   *  Examples:
   *  * `description = "foo bar"` --> Any Feature with description exactly equal
   *  to `foo bar`
   *  * `value_type = DOUBLE` --> Features whose type is DOUBLE.
   *  * `labels.active = yes AND labels.env = prod` --> Features having both
   *      (active: yes) and (env: prod) labels.
   *  * `labels.env: *` --> Any Feature which has a label with `env` as the
   *    key.
   */
  // const query = 'abc123'
  /**
   *  The maximum number of Features to return. The service may return fewer
   *  than this value. If unspecified, at most 100 Features will be returned.
   *  The maximum value is 100; any value greater than 100 will be coerced to
   *  100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  [FeaturestoreService.SearchFeatures][google.cloud.aiplatform.v1.FeaturestoreService.SearchFeatures] call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  [FeaturestoreService.SearchFeatures][google.cloud.aiplatform.v1.FeaturestoreService.SearchFeatures], except `page_size`, must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Aiplatform library
  const {FeaturestoreServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new FeaturestoreServiceClient();

  async function searchFeatures() {
    // Construct request
    const request = {
      location,
    };

    // Run request
    const iterable = await aiplatformClient.searchFeaturesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchFeatures();
  // [END aiplatform_v1_generated_FeaturestoreService_SearchFeatures_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
