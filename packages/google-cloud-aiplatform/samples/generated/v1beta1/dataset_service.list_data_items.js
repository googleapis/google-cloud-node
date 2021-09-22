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
  // [START aiplatform_list_data_items_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Dataset to list DataItems from.
   *  Format:
   *  `projects/{project}/locations/{location}/datasets/{dataset}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list filter.
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = ''
  /**
   *  A comma-separated list of fields to order by, sorted in ascending order.
   *  Use "desc" after a field name for descending.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {DatasetServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new DatasetServiceClient();

  async function listDataItems() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listDataItemsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listDataItems();
  // [END aiplatform_list_data_items_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
