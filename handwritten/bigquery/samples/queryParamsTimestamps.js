// Copyright 2019 Google LLC
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
  // [START bigquery_query_params_timestamps]
  // Run a query using timestamp parameters

  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryParamsTimestamps() {
    // The SQL query to run
    const sqlQuery = 'SELECT TIMESTAMP_ADD(@ts_value, INTERVAL 1 HOUR);';

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
      params: {ts_value: new Date()},
    };

    // Run the query
    const [rows] = await bigquery.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row.f0_));
  }
  // [END bigquery_query_params_timestamps]
  queryParamsTimestamps();
}
main(...process.argv.slice(2));
