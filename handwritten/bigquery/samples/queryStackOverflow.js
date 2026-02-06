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
  // [START bigquery_simple_app_all]
  // [START bigquery_simple_app_deps]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  // [END bigquery_simple_app_deps]

  async function queryStackOverflow() {
    // Queries a public Stack Overflow dataset.

    // [START bigquery_simple_app_client]
    // Create a client
    const bigqueryClient = new BigQuery();
    // [END bigquery_simple_app_client]

    // [START bigquery_simple_app_query]
    // The SQL query to run
    const sqlQuery = `SELECT
      CONCAT(
        'https://stackoverflow.com/questions/',
        CAST(id as STRING)) as url,
      view_count
      FROM \`bigquery-public-data.stackoverflow.posts_questions\`
      WHERE tags like '%google-bigquery%'
      ORDER BY view_count DESC
      LIMIT 10`;

    const options = {
      query: sqlQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    // Run the query
    const [rows] = await bigqueryClient.query(options);
    // [END bigquery_simple_app_query]

    // [START bigquery_simple_app_print]
    console.log('Query Results:');
    rows.forEach(row => {
      const url = row['url'];
      const viewCount = row['view_count'];
      console.log(`url: ${url}, ${viewCount} views`);
    });
    // [END bigquery_simple_app_print]
  }
  queryStackOverflow();
  // [END bigquery_simple_app_all]
}

main(...process.argv.slice(2));
