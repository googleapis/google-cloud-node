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
  projectId = 'my_project_id',
  sourceDatasetId = 'shared_views',
  sourceTableId = 'my_source_table',
  sharedDatasetId = 'shared_views',
  sharedViewId = 'github_analyst_view',
) {
  // [START bigquery_authorized_view_tutorial]
  async function authorizedViewTutorial() {
    // [START bigquery_avt_create_source_dataset]
    const {BigQuery} = require('@google-cloud/bigquery');
    const bigquery = new BigQuery();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = "my_project_id";
    // const sourceDatasetId = "my_source_dataset";
    // const sourceTableId = "my_source_table";
    // const sharedDatasetId = "shared_views";
    // const sharedViewId = "my_view";

    // Make API request to create dataset
    const [sourceDataset] = await bigquery.createDataset(sourceDatasetId);
    console.log(`Source dataset ${sourceDataset.id} created.`);

    const destinationTable = sourceDataset.table(sourceTableId);

    const query = `SELECT commit, author, committer, repo_name
      FROM \`bigquery-public-data.github_repos.commits\`
      LIMIT 1000`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      query: query,
      destination: destinationTable,
    };

    // Make API request to populate a source table
    await bigquery.query(options);
    // [END bigquery_avt_create_source_table]
    // [START bigquery_avt_create_shared_dataset]
    // Create a separate dataset to store your view

    // Make API request to create a new dataset
    const [sharedDataset] = await bigquery.createDataset(sharedDatasetId);

    console.log(`Dataset ${sharedDataset.id} created.`);
    // [END bigquery_avt_create_shared_dataset]
    // [START bigquery_avt_create_view]
    // Create the view in the new dataset

    const viewQuery = `SELECT
    commit, author.name as author,
    committer.name as committer, repo_name
    FROM
    \`${projectId}.${sourceDatasetId}.${sourceTableId}\``;

    const viewOptions = {
      view: {query: viewQuery, useLegacySql: false},
    };

    // Make API request to create the view
    const [view] = await sharedDataset.createTable(sharedViewId, viewOptions);

    const viewId = view.metadata.id;
    console.log(`View ${viewId} created.`);
    // [END bigquery_avt_create_view]
    // [START bigquery_avt_shared_dataset_access]
    // Assign access controls to the dataset containing the view

    // Note to user: This is a group email for testing purposes. Replace with
    // your own group email address when running this code.
    const analyst_group_email = 'example-analyst-group@google.com';

    const analystAccessEntry = {
      role: 'READER',
      groupByEmail: analyst_group_email,
    };

    // Make API request to retrieve dataset metadata
    const [sharedMetadata] = await sharedDataset.getMetadata();

    const sharedAccessEntries = sharedMetadata.access;
    sharedAccessEntries.push(analystAccessEntry);

    sharedMetadata.access = sharedAccessEntries;

    // Make API request to update dataset metadata
    const [updatedSharedMetadata] =
      await sharedDataset.setMetadata(sharedMetadata);

    console.log(`Dataset ${updatedSharedMetadata.id} updated.`);
    // [END bigquery_avt_shared_dataset_access]
    // [START bigquery_avt_source_dataset_access]
    // Authorize the view to access the source dataset

    const viewReference = {
      projectId: projectId,
      datasetId: sharedDatasetId,
      tableId: sharedViewId,
    };

    const datasetAccessEntry = {view: viewReference};

    // Make API request to retrieve source dataset metadata
    const [sourceMetadata] = await sourceDataset.getMetadata();

    const sourceAccessEntries = sourceMetadata.access;
    sourceAccessEntries.push(datasetAccessEntry);

    sourceMetadata.access = sourceAccessEntries;

    // Make API request to update source dataset metadata
    const [updatedSourceMetadata] =
      await sourceDataset.setMetadata(sourceMetadata);

    console.log(`Dataset ${updatedSourceMetadata.id} updated.`);
    // [END bigquery_avt_source_dataset_access]
  }
  // [END bigquery_authorized_view_tutorial]
  authorizedViewTutorial();
}

main(...process.argv.slice(2));
