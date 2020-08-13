// Copyright 2020 Google LLC
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

/** This application demonstrates the usage of the Analytics Admin API using
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

// [START analytics_admin_quickstart]
// Imports the Google Analytics Admin API client library
const analyticsAdmin = require('@google-analytics/admin');

async function main() {
  // Instantiates a client using default credentials.
  // TODO(developer): uncomment and use the following line in order to
  //  manually set the path to the service account JSON file instead of
  //  using the value from the GOOGLE_APPLICATION_CREDENTIALS environment
  //  variable.
  // const analyticsAdminClient = new analyticsAdmin.AnalyticsAdminServiceClient(
  //     {keyFilename: "your_key_json_file_path"});
  const analyticsAdminClient = new analyticsAdmin.AnalyticsAdminServiceClient();

  // Calls listAccounts() method of the Google Analytics Admin API and prints
  // the response for each account.
  const [accounts] = await analyticsAdminClient.listAccounts();

  console.log('Accounts:');
  accounts.forEach(account => {
    console.log(account);
  });
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

// [END analytics_admin_quickstart]
