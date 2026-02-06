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
  // [START bigquery_query_params_arrays]
  // Run a query using array query parameters

  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryParamsArrays() {
    // The SQL query to run
    const sqlQuery = `SELECT name, sum(number) as count
    FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
    WHERE gender = @gender
    AND state IN UNNEST(@states)
    GROUP BY name
    ORDER BY count DESC
    LIMIT 10;`;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
      params: {gender: 'M', states: ['WA', 'WI', 'WV', 'WY']},
    };

    // Run the query
    const [rows] = await bigquery.query(options);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_query_params_arrays]
  queryParamsArrays();
}
main(...process.argv.slice(2));
