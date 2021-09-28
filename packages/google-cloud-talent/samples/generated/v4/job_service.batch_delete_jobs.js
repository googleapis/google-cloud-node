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
  // [START jobs_v4_generated_JobService_BatchDeleteJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant under which the job is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenants/bar".
   *  The parent of all of the jobs specified in `names` must match this field.
   */
  // const parent = 'abc123'
  /**
   *  The names of the jobs to delete.
   *  The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}".
   *  For example, "projects/foo/tenants/bar/jobs/baz".
   *  A maximum of 200 jobs can be deleted in a batch.
   */
  // const names = 'abc123'

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function batchDeleteJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await talentClient.batchDeleteJobs(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  batchDeleteJobs();
  // [END jobs_v4_generated_JobService_BatchDeleteJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
