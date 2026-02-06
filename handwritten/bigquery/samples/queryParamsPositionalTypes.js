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

function main() {
  // [START bigquery_query_params_positional_types]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryParamsPositionalTypes() {
    // Run a query using positional query parameters and provided parameter types.

    // The SQL query to run
    const sqlQuery = `SELECT word, word_count
    FROM \`bigquery-public-data.samples.shakespeare\`
    WHERE word IN UNNEST(?)
    AND corpus = ?
    AND word_count >= ?
    ORDER BY word_count DESC`;

    const queryOptions = {
      query: sqlQuery,
      params: [['and', 'is', 'the', 'moon'], 'romeoandjuliet', 250],
      types: [['STRING'], 'STRING', 'INT64'],
    };

    // Run the query
    const [rows] = await bigquery.query(queryOptions);

    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_query_params_positional_types]
  queryParamsPositionalTypes();
}
main(...process.argv.slice(2));
