// Copyright 2023 Google LLC
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

function main(region = 'my-region') {
  // [START bigquery_set_client_endpoint]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');

  function setClientEndpoint() {
    // Create a bigquery client pointing to a specific endpoint

    /**
     * TODO(developer): Uncomment the following line of code and fill in your region before running the sample.
     */
    // const region = 'my-region';

    const bigquery = new BigQuery({
      apiEndpoint: `${region}-bigquery.googleapis.com`,
    });

    console.log('API Endpoint:');
    console.log(bigquery.apiEndpoint);
  }
  // [END bigquery_set_client_endpoint]
  setClientEndpoint();
}
main(...process.argv.slice(2));
