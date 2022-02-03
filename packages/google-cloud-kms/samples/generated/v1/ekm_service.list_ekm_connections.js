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
  // [START cloudkms_v1_generated_EkmService_ListEkmConnections_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the location associated with the
   *  EkmConnections google.cloud.kms.v1.EkmConnection  to list, in the format
   *  `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Optional limit on the number of
   *  EkmConnections google.cloud.kms.v1.EkmConnection  to include in the
   *  response. Further EkmConnections google.cloud.kms.v1.EkmConnection  can
   *  subsequently be obtained by including the
   *  ListEkmConnectionsResponse.next_page_token google.cloud.kms.v1.ListEkmConnectionsResponse.next_page_token 
   *  in a subsequent request. If unspecified, the server will pick an
   *  appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. Optional pagination token, returned earlier via
   *  ListEkmConnectionsResponse.next_page_token google.cloud.kms.v1.ListEkmConnectionsResponse.next_page_token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Only include resources that match the filter in the response. For
   *  more information, see
   *  Sorting and filtering list
   *  results (https://cloud.google.com/kms/docs/sorting-and-filtering).
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specify how the results should be sorted. If not specified, the
   *  results will be sorted in the default order.  For more information, see
   *  Sorting and filtering list
   *  results (https://cloud.google.com/kms/docs/sorting-and-filtering).
   */
  // const orderBy = 'abc123'

  // Imports the Kms library
  const {EkmServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new EkmServiceClient();

  async function callListEkmConnections() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await kmsClient.listEkmConnectionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEkmConnections();
  // [END cloudkms_v1_generated_EkmService_ListEkmConnections_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
