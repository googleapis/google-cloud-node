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
  // [START osconfig_v1_generated_OsConfigZonalService_ListOSPolicyAssignmentReports_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name.
   *  Format:
   *  `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/reports`
   *  For `{project}`, either `project-number` or `project-id` can be provided.
   *  For `{instance}`, either `instance-name`, `instance-id`, or `-` can be
   *  provided. If '-' is provided, the response will include
   *  OSPolicyAssignmentReports for all instances in the project/location.
   *  For `{assignment}`, either `assignment-id` or `-` can be provided. If '-'
   *  is provided, the response will include OSPolicyAssignmentReports for all
   *  OSPolicyAssignments in the project/location.
   *  Either {instance} or {assignment} must be `-`.
   *  For example:
   *  `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/-/reports`
   *   returns all reports for the instance
   *  `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/{assignment-id}/reports`
   *   returns all the reports for the given assignment across all instances.
   *  `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/-/reports`
   *   returns all the reports for all assignments across all instances.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of results to return.
   */
  // const pageSize = 1234
  /**
   *  If provided, this field specifies the criteria that must be met by the
   *  `OSPolicyAssignmentReport` API resource that is included in the response.
   */
  // const filter = 'abc123'
  /**
   *  A pagination token returned from a previous call to the
   *  `ListOSPolicyAssignmentReports` method that indicates where this listing
   *  should continue from.
   */
  // const pageToken = 'abc123'

  // Imports the Osconfig library
  const {OsConfigZonalServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigZonalServiceClient();

  async function callListOSPolicyAssignmentReports() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await osconfigClient.listOSPolicyAssignmentReportsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListOSPolicyAssignmentReports();
  // [END osconfig_v1_generated_OsConfigZonalService_ListOSPolicyAssignmentReports_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
