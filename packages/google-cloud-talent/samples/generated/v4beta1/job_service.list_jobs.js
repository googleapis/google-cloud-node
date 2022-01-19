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

function main(parent, filter) {
  // [START jobs_v4beta1_generated_JobService_ListJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant under which the job is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenant/bar". If tenant id is unspecified, a default tenant
   *  is created. For example, "projects/foo".
   */
  // const parent = 'abc123'
  /**
   *  Required. The filter string specifies the jobs to be enumerated.
   *  Supported operator: =, AND
   *  The fields eligible for filtering are:
   *  * `companyName` (Required)
   *  * `requisitionId`
   *  * `status` Available values: OPEN, EXPIRED, ALL. Defaults to
   *  OPEN if no value is specified.
   *  Sample Query:
   *  * companyName = "projects/foo/tenants/bar/companies/baz"
   *  * companyName = "projects/foo/tenants/bar/companies/baz" AND
   *  requisitionId = "req-1"
   *  * companyName = "projects/foo/tenants/bar/companies/baz" AND
   *  status = "EXPIRED"
   */
  // const filter = 'abc123'
  /**
   *  The starting point of a query result.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of jobs to be returned per page of results.
   *  If job_view google.cloud.talent.v4beta1.ListJobsRequest.job_view is set to JobView.JOB_VIEW_ID_ONLY google.cloud.talent.v4beta1.JobView.JOB_VIEW_ID_ONLY, the maximum allowed
   *  page size is 1000. Otherwise, the maximum allowed page size is 100.
   *  Default is 100 if empty or a number < 1 is specified.
   */
  // const pageSize = 1234
  /**
   *  The desired job attributes returned for jobs in the
   *  search response. Defaults to JobView.JOB_VIEW_FULL google.cloud.talent.v4beta1.JobView.JOB_VIEW_FULL  if no value is
   *  specified.
   */
  // const jobView = {}

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function callListJobs() {
    // Construct request
    const request = {
      parent,
      filter,
    };

    // Run request
    const iterable = await talentClient.listJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListJobs();
  // [END jobs_v4beta1_generated_JobService_ListJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
