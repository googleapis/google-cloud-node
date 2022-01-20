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

function main(updateMask, metadataImport) {
  // [START metastore_v1beta_generated_DataprocMetastore_UpdateMetadataImport_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A field mask used to specify the fields to be overwritten in the
   *  metadata import resource by the update.
   *  Fields specified in the `update_mask` are relative to the resource (not
   *  to the full request). A field is overwritten if it is in the mask.
   */
  // const updateMask = {}
  /**
   *  Required. The metadata import to update. The server only merges fields
   *  in the import if they are specified in `update_mask`.
   *  The metadata import's `name` field is used to identify the metastore
   *  import to be updated.
   */
  // const metadataImport = {}
  /**
   *  Optional. A request ID. Specify a unique request ID to allow the server to
   *  ignore the request if it has completed. The server will ignore subsequent
   *  requests that provide a duplicate request ID for at least 60 minutes after
   *  the first request.
   *  For example, if an initial request times out, followed by another request
   *  with the same request ID, the server ignores the second request to prevent
   *  the creation of duplicate commitments.
   *  The request ID must be a valid
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format)
   *  A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
   */
  // const requestId = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1beta;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callUpdateMetadataImport() {
    // Construct request
    const request = {
      updateMask,
      metadataImport,
    };

    // Run request
    const [operation] = await metastoreClient.updateMetadataImport(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateMetadataImport();
  // [END metastore_v1beta_generated_DataprocMetastore_UpdateMetadataImport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
