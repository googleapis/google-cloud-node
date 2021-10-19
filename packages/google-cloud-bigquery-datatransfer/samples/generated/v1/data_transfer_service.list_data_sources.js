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

function main(parent) {
  // [START bigquerydatatransfer_v1_generated_DataTransferService_ListDataSources_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The BigQuery project id for which data sources should be returned.
   *  Must be in the form: `projects/{project_id}` or
   *  `projects/{project_id}/locations/{location_id}
   */
  // const parent = 'abc123'
  /**
   *  Pagination token, which can be used to request a specific page
   *  of `ListDataSourcesRequest` list results. For multiple-page
   *  results, `ListDataSourcesResponse` outputs
   *  a `next_page` token, which can be used as the
   *  `page_token` value to request the next page of list results.
   */
  // const pageToken = 'abc123'
  /**
   *  Page size. The default page size is the maximum value of 1000 results.
   */
  // const pageSize = 1234

  // Imports the Datatransfer library
  const {DataTransferServiceClient} =
    require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function listDataSources() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datatransferClient.listDataSourcesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listDataSources();
  // [END bigquerydatatransfer_v1_generated_DataTransferService_ListDataSources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
