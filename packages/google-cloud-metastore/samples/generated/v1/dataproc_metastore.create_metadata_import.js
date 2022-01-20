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

function main(parent, metadataImportId, metadataImport) {
  // [START metastore_v1_generated_DataprocMetastore_CreateMetadataImport_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the service in which to create a metastore
   *  import, in the following form:
   *  `projects/{project_number}/locations/{location_id}/services/{service_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the metadata import, which is used as the final component of the
   *  metadata import's name.
   *  This value must be between 1 and 64 characters long, begin with a letter,
   *  end with a letter or number, and consist of alpha-numeric ASCII characters
   *  or hyphens.
   */
  // const metadataImportId = 'abc123'
  /**
   *  Required. The metadata import to create. The `name` field is ignored. The ID of the
   *  created metadata import must be provided in the request's
   *  `metadata_import_id` field.
   */
  // const metadataImport = {}
  /**
   *  Optional. A request ID. Specify a unique request ID to allow the server to ignore the
   *  request if it has completed. The server will ignore subsequent requests
   *  that provide a duplicate request ID for at least 60 minutes after the first
   *  request.
   *  For example, if an initial request times out, followed by another request
   *  with the same request ID, the server ignores the second request to prevent
   *  the creation of duplicate commitments.
   *  The request ID must be a valid
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format)
   *  A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
   */
  // const requestId = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callCreateMetadataImport() {
    // Construct request
    const request = {
      parent,
      metadataImportId,
      metadataImport,
    };

    // Run request
    const [operation] = await metastoreClient.createMetadataImport(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateMetadataImport();
  // [END metastore_v1_generated_DataprocMetastore_CreateMetadataImport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
