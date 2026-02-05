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

function main(
  projectId = 'my_project', // GCP Project ID
  datasetId = 'my_dataset', // Existing dataset ID
  tableId = 'my_new_view', // View to be created
) {
  // [START bigquery_ddl_create_view]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function ddlCreateView() {
    // Creates a view via a DDL query

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = "my_project"
    // const datasetId = "my_dataset"
    // const tableId = "my_new_view"

    const query = `
    CREATE VIEW \`${projectId}.${datasetId}.${tableId}\`
    OPTIONS(
        expiration_timestamp=TIMESTAMP_ADD(
            CURRENT_TIMESTAMP(), INTERVAL 48 HOUR),
        friendly_name="new_view",
        description="a view that expires in 2 days",
        labels=[("org_unit", "development")]
    )
    AS SELECT name, state, year, number
        FROM \`bigquery-public-data.usa_names.usa_1910_current\`
        WHERE state LIKE 'W%'`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);

    job.on('complete', metadata => {
      console.log(`Created new view ${tableId} via job ${metadata.id}`);
    });
  }
  // [END bigquery_ddl_create_view]
  ddlCreateView();
}
main(...process.argv.slice(2));
