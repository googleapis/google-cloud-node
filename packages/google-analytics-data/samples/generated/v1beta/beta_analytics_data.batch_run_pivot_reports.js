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

function main() {
  // [START analyticsdata_v1beta_generated_BetaAnalyticsData_BatchRunPivotReports_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A Google Analytics GA4 property identifier whose events are tracked.
   *  Specified in the URL path and not the body. To learn more, see [where to
   *  find your Property
   *  ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).
   *  This property must be specified for the batch. The property within
   *  RunPivotReportRequest may either be unspecified or consistent with this
   *  property.
   *  Example: properties/1234
   */
  // const property = 'abc123'
  /**
   *  Individual requests. Each request has a separate pivot report response.
   *  Each batch request is allowed up to 5 requests.
   */
  // const requests = 1234

  // Imports the Data library
  const {BetaAnalyticsDataClient} = require('@google-analytics/data').v1beta;

  // Instantiates a client
  const dataClient = new BetaAnalyticsDataClient();

  async function batchRunPivotReports() {
    // Construct request
    const request = {};

    // Run request
    const response = await dataClient.batchRunPivotReports(request);
    console.log(response);
  }

  batchRunPivotReports();
  // [END analyticsdata_v1beta_generated_BetaAnalyticsData_BatchRunPivotReports_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
