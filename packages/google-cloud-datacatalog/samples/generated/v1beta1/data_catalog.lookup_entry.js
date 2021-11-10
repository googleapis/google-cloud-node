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

function main() {
  // [START datacatalog_v1beta1_generated_DataCatalog_LookupEntry_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The full name of the Google Cloud Platform resource the Data Catalog
   *  entry represents. See:
   *  https://cloud.google.com/apis/design/resource_names#full_resource_name.
   *  Full names are case-sensitive.
   *  Examples:
   *   * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
   *   * //pubsub.googleapis.com/projects/projectId/topics/topicId
   */
  // const linkedResource = 'abc123'
  /**
   *  The SQL name of the entry. SQL names are case-sensitive.
   *  Examples:
   *    * `pubsub.project_id.topic_id`
   *    * ``pubsub.project_id.`topic.id.with.dots` ``
   *    * `bigquery.table.project_id.dataset_id.table_id`
   *    * `bigquery.dataset.project_id.dataset_id`
   *    * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id`
   *  `*_id`s shoud satisfy the standard SQL rules for identifiers.
   *  https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
   */
  // const sqlResource = 'abc123'

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callLookupEntry() {
    // Construct request
    const request = {};

    // Run request
    const response = await datacatalogClient.lookupEntry(request);
    console.log(response);
  }

  callLookupEntry();
  // [END datacatalog_v1beta1_generated_DataCatalog_LookupEntry_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
