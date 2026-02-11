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
  datasetId = 'my_dataset', // Existing dataset
  tableId = 'my_table', // Existing table
) {
  // [START bigquery_relax_column_query_append]
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function relaxColumnQueryAppend() {
    // Change required to null in query append job

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = "my_project"
    // const datasetId = "my_dataset"
    // const tableId = "my_table"

    // Retrieve the destination table and checks the number of required fields.
    const dataset = await bigquery.dataset(datasetId);
    const table = await dataset.table(tableId);
    const [metaData] = await table.getMetadata();

    const requiredFields = metaData.schema.fields.filter(
      ({mode}) => mode === 'REQUIRED',
    ).length;

    console.log(`${requiredFields} fields in the schema are required.`);

    // Create destination table reference
    const tableRef = {
      projectId,
      tableId,
      datasetId,
    };

    /* Configure the query to append the results to a destination table,
     * allowing field relaxation. In this example, the existing table
     * contains 'age' as a required column.
     *
     * For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationQuery
     */
    const queryJobConfig = {
      query: `SELECT age FROM \`${projectId}.${datasetId}.${tableId}\``,
      destinationTable: tableRef,
      schemaUpdateOptions: ['ALLOW_FIELD_RELAXATION'],
      writeDisposition: ['WRITE_APPEND'],
      useLegacySql: false,
    };

    // Configure the job.
    const jobConfig = {
      configuration: {
        query: queryJobConfig,
      },
    };

    // Start the query, passing in the extra configuration.
    const response = await bigquery.createJob(jobConfig);
    const job = response[0];

    // Wait for job to complete.
    await job.getQueryResults(job);

    // Check the updated number of required fields.
    const updatedTable = await dataset.table(tableId);
    const [updatedMetaData] = await updatedTable.getMetadata();

    const updatedRequiredFields = updatedMetaData.schema.fields.filter(
      ({mode}) => mode === 'REQUIRED',
    ).length;

    console.log(
      `${updatedRequiredFields} fields in the schema are now required.`,
    );
  }
  // [END bigquery_relax_column_query_append]
  relaxColumnQueryAppend();
}
main(...process.argv.slice(2));
