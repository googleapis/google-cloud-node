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

/** Google Analytics Data API sample quickstart application.
 This application demonstrates the usage of the Analytics Data API using
 service account credentials.

 Before you start the application, please review the comments starting with
 "TODO(developer)" and update the code to use correct values.

 Usage:
 npm install
 node quickstart.js
 */

function main(propertyId = 'YOUR-GA4-PROPERTY-ID') {
  // [START analyticsdata_quickstart]
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  // propertyId = 'YOUR-GA4-PROPERTY-ID';

  // [START analyticsdata_run_report_initialize]
  // Imports the Google Analytics Data API client library.
  const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();
  // [END analyticsdata_run_report_initialize]

  // Runs a simple report.
  async function runReport() {
    // [START analyticsdata_run_report]
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });
    // [END analyticsdata_run_report]

    // [START analyticsdata_run_report_response]
    console.log('Report result:');
    response.rows.forEach(row => {
      console.log(row.dimensionValues[0], row.metricValues[0]);
    });
    // [END analyticsdata_run_report_response]
  }

  runReport();
  // [END analyticsdata_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
