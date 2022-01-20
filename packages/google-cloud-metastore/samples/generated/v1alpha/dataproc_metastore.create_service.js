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

function main(parent, serviceId, service) {
  // [START metastore_v1alpha_generated_DataprocMetastore_CreateService_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the location in which to create a metastore
   *  service, in the following form:
   *  `projects/{project_number}/locations/{location_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the metastore service, which is used as the final
   *  component of the metastore service's name.
   *  This value must be between 2 and 63 characters long inclusive, begin with a
   *  letter, end with a letter or number, and consist of alpha-numeric
   *  ASCII characters or hyphens.
   */
  // const serviceId = 'abc123'
  /**
   *  Required. The Metastore service to create. The `name` field is
   *  ignored. The ID of the created metastore service must be provided in
   *  the request's `service_id` field.
   */
  // const service = {}
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
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1alpha;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callCreateService() {
    // Construct request
    const request = {
      parent,
      serviceId,
      service,
    };

    // Run request
    const [operation] = await metastoreClient.createService(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateService();
  // [END metastore_v1alpha_generated_DataprocMetastore_CreateService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
