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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_query_clustered_table]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryClusteredTable() {
    // Queries a table that has a clustering specification.

    // Create destination table reference
    const dataset = bigquery.dataset(datasetId);
    const destinationTableId = dataset.table(tableId);

    const query = 'SELECT * FROM `bigquery-public-data.samples.shakespeare`';
    const fields = ['corpus'];

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
      destination: destinationTableId,
      clusterFields: fields,
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);

    console.log(`Job ${job.id} started.`);

    // Print the status and statistics
    console.log('Status:');
    console.log(job.metadata.status);
    console.log('\nJob Statistics:');
    console.log(job.metadata.statistics);
  }
  // [END bigquery_query_clustered_table]
  queryClusteredTable();
}
main(...process.argv.slice(2));
