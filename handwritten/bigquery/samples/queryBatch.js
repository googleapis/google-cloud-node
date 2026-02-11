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
  // [START bigquery_query_batch]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryBatch() {
    // Runs a query at batch priority.

    // Create query job configuration. For all options, see
    // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery
    const queryJobConfig = {
      query: `SELECT corpus
              FROM \`bigquery-public-data.samples.shakespeare\` 
              LIMIT 10`,
      useLegacySql: false,
      priority: 'BATCH',
    };

    // Create job configuration. For all options, see
    // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfiguration
    const jobConfig = {
      // Specify a job configuration to set optional job resource properties.
      configuration: {
        query: queryJobConfig,
      },
    };

    // Make API request.
    const [job] = await bigquery.createJob(jobConfig);

    const jobId = job.metadata.id;
    const state = job.metadata.status.state;
    console.log(`Job ${jobId} is currently in state ${state}`);
  }
  // [END bigquery_query_batch]
  queryBatch();
}
main(...process.argv.slice(2));
