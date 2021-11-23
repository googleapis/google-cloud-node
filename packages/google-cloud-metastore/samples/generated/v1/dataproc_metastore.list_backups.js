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
  // [START metastore_v1_generated_DataprocMetastore_ListBackups_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the service whose backups to
   *  list, in the following form:
   *  `projects/{project_number}/locations/{location_id}/services/{service_id}/backups`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of backups to return. The response may contain less
   *  than the maximum number. If unspecified, no more than 500 backups are
   *  returned. The maximum value is 1000; values above 1000 are changed to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous DataprocMetastore.ListBackups google.cloud.metastore.v1.DataprocMetastore.ListBackups
   *  call. Provide this token to retrieve the subsequent page.
   *  To retrieve the first page, supply an empty page token.
   *  When paginating, other parameters provided to
   *  DataprocMetastore.ListBackups google.cloud.metastore.v1.DataprocMetastore.ListBackups  must match the call that provided the
   *  page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The filter to apply to list results.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specify the ordering of results as described in Sorting
   *  Order (https://cloud.google.com/apis/design/design_patterns#sorting_order).
   *  If not specified, the results will be sorted in the default order.
   */
  // const orderBy = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} =
    require('@google-cloud/dataproc-metastore').v1;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callListBackups() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await metastoreClient.listBackupsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListBackups();
  // [END metastore_v1_generated_DataprocMetastore_ListBackups_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
