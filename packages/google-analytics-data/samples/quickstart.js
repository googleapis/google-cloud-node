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

/** This application demonstrates the usage of the Analytics Data API using
 service account credentials. For more information on service accounts, see

 https://cloud.google.com/iam/docs/understanding-service-accounts

 The following document provides instructions on setting service account
 credentials for your application:

 https://cloud.google.com/docs/authentication/production

 In a nutshell, you need to:

 1. Create a service account and download the key JSON file.
 https://cloud.google.com/docs/authentication/production#creating_a_service_account

 2. Provide service account credentials using one of the following options:
 - set the GOOGLE_APPLICATION_CREDENTIALS environment variable, the API
 client will use the value of this variable to find the service account key
 JSON file.

 https://cloud.google.com/docs/authentication/production#setting_the_environment_variable

 OR
 - manually pass the path to the service account key JSON file to the API client
 by specifying the keyFilename parameter in the constructor.

 https://cloud.google.com/docs/authentication/production#passing_the_path_to_the_service_account_key_in_code
 */

function main(propertyId = 'YOUR-GA4-PROPERTY-ID') {
  // [START analytics_data_quickstart]
  /**
   * TODO(developer): Uncomment this variable and replace with your GA4
   *   property ID before running the sample.
   */
  // propertyId = 'YOUR-GA4-PROPERTY-ID';

  // Imports the Google Analytics Data API client library.
  const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Creates a client.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a simple report.
  async function runReport() {
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
          name: 'country',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });

    console.log('Report result:');
    console.log(response);
  }

  runReport();
  // [END analytics_data_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
