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

function main(name) {
  // [START analyticsdata_v1beta_generated_BetaAnalyticsData_GetMetadata_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the metadata to retrieve. This name field is
   *  specified in the URL path and not URL parameters. Property is a numeric
   *  Google Analytics GA4 Property identifier. To learn more, see where to find
   *  your Property
   *  ID (https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).
   *  Example: properties/1234/metadata
   *  Set the Property ID to 0 for dimensions and metrics common to all
   *  properties. In this special mode, this method will not return custom
   *  dimensions and metrics.
   */
  // const name = 'abc123'

  // Imports the Data library
  const {BetaAnalyticsDataClient} = require('@google-analytics/data').v1beta;

  // Instantiates a client
  const dataClient = new BetaAnalyticsDataClient();

  async function callGetMetadata() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dataClient.getMetadata(request);
    console.log(response);
  }

  callGetMetadata();
  // [END analyticsdata_v1beta_generated_BetaAnalyticsData_GetMetadata_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
