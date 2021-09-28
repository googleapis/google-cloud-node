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

function main(job) {
  // [START jobs_v4_generated_JobService_UpdateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Job to be updated.
   */
  // const job = ''
  /**
   *  Strongly recommended for the best service experience.
   *  If [update_mask][google.cloud.talent.v4.UpdateJobRequest.update_mask] is provided, only the specified fields in
   *  [job][google.cloud.talent.v4.UpdateJobRequest.job] are updated. Otherwise all the fields are updated.
   *  A field mask to restrict the fields that are updated. Only
   *  top level fields of [Job][google.cloud.talent.v4.Job] are supported.
   */
  // const updateMask = ''

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function updateJob() {
    // Construct request
    const request = {
      job,
    };

    // Run request
    const response = await talentClient.updateJob(request);
    console.log(response);
  }

  updateJob();
  // [END jobs_v4_generated_JobService_UpdateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
