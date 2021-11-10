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
  // [START jobs_v4beta1_generated_JobService_BatchDeleteJobs_async]
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
   *  Required. The filter string specifies the jobs to be deleted.
   *  Supported operator: =, AND
   *  The fields eligible for filtering are:
   *  * `companyName` (Required)
   *  * `requisitionId` (Required)
   *  Sample Query: companyName = "projects/foo/companies/bar" AND
   *  requisitionId = "req-1"
   */
  // const filter = 'abc123'

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function callBatchDeleteJobs() {
    // Construct request
    const request = {
      parent,
      filter,
    };

    // Run request
    const response = await talentClient.batchDeleteJobs(request);
    console.log(response);
  }

  callBatchDeleteJobs();
  // [END jobs_v4beta1_generated_JobService_BatchDeleteJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
