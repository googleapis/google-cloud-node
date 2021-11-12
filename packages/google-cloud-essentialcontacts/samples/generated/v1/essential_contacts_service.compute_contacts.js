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
  // [START essentialcontacts_v1_generated_EssentialContactsService_ComputeContacts_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the resource to compute contacts for.
   *  Format: organizations/{organization_id},
   *  folders/{folder_id} or projects/{project_id}
   */
  // const parent = 'abc123'
  /**
   *  The categories of notifications to compute contacts for. If ALL is included
   *  in this list, contacts subscribed to any notification category will be
   *  returned.
   */
  // const notificationCategories = 1234
  /**
   *  Optional. The maximum number of results to return from this request.
   *  Non-positive values are ignored. The presence of `next_page_token` in the
   *  response indicates that more results might be available.
   *  If not specified, the default page_size is 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. If present, retrieves the next batch of results from the
   *  preceding call to this method. `page_token` must be the value of
   *  `next_page_token` from the previous response. The values of other method
   *  parameters should be identical to those in the previous call.
   */
  // const pageToken = 'abc123'

  // Imports the Essentialcontacts library
  const {EssentialContactsServiceClient} =
    require('@google-cloud/essential-contacts').v1;

  // Instantiates a client
  const essentialcontactsClient = new EssentialContactsServiceClient();

  async function callComputeContacts() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await essentialcontactsClient.computeContactsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callComputeContacts();
  // [END essentialcontacts_v1_generated_EssentialContactsService_ComputeContacts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
