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

function main(account) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_SearchChangeHistoryEvents_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The account resource for which to return change history resources.
   */
  // const account = 'abc123'
  /**
   *  Optional. Resource name for a child property. If set, only return changes
   *  made to this property or its child resources.
   */
  // const property = 'abc123'
  /**
   *  Optional. If set, only return changes if they are for a resource that matches at
   *  least one of these types.
   */
  // const resourceType = 1234
  /**
   *  Optional. If set, only return changes that match one or more of these types of
   *  actions.
   */
  // const action = 1234
  /**
   *  Optional. If set, only return changes if they are made by a user in this list.
   */
  // const actorEmail = 'abc123'
  /**
   *  Optional. If set, only return changes made after this time (inclusive).
   */
  // const earliestChangeTime = {}
  /**
   *  Optional. If set, only return changes made before this time (inclusive).
   */
  // const latestChangeTime = {}
  /**
   *  Optional. The maximum number of ChangeHistoryEvent items to return.
   *  The service may return fewer than this value, even if there are additional
   *  pages. If unspecified, at most 50 items will be returned.
   *  The maximum value is 200 (higher values will be coerced to the maximum).
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `SearchChangeHistoryEvents` call.
   *  Provide this to retrieve the subsequent page. When paginating, all other
   *  parameters provided to `SearchChangeHistoryEvents` must match the call that
   *  provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} =
    require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callSearchChangeHistoryEvents() {
    // Construct request
    const request = {
      account,
    };

    // Run request
    const iterable = await adminClient.searchChangeHistoryEventsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callSearchChangeHistoryEvents();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_SearchChangeHistoryEvents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
