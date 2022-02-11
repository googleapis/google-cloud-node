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
  // [START accessapproval_v1_generated_AccessApproval_ListApprovalRequests_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent resource. This may be "projects/{project}",
   *  "folders/{folder}", or "organizations/{organization}".
   */
  // const parent = 'abc123'
  /**
   *  A filter on the type of approval requests to retrieve. Must be one of the
   *  following values:
   *    * not set: Requests that are pending or have active approvals.
   *    * ALL: All requests.
   *    * PENDING: Only pending requests.
   *    * ACTIVE: Only active (i.e. currently approved) requests.
   *    * DISMISSED: Only requests that have been dismissed, or requests that
   *      are not approved and past expiration.
   *    * EXPIRED: Only requests that have been approved, and the approval has
   *      expired.
   *    * HISTORY: Active, dismissed and expired requests.
   */
  // const filter = 'abc123'
  /**
   *  Requested page size.
   */
  // const pageSize = 1234
  /**
   *  A token identifying the page of results to return.
   */
  // const pageToken = 'abc123'

  // Imports the Accessapproval library
  const {AccessApprovalClient} = require('@google-cloud/access-approval').v1;

  // Instantiates a client
  const accessapprovalClient = new AccessApprovalClient();

  async function callListApprovalRequests() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await accessapprovalClient.listApprovalRequestsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListApprovalRequests();
  // [END accessapproval_v1_generated_AccessApproval_ListApprovalRequests_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
