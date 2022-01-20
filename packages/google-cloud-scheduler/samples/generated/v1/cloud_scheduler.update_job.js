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

function main(job, updateMask) {
  // [START cloudscheduler_v1_generated_CloudScheduler_UpdateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The new job properties. name google.cloud.scheduler.v1.Job.name  must be specified.
   *  Output only fields cannot be modified using UpdateJob.
   *  Any value specified for an output only field will be ignored.
   */
  // const job = {}
  /**
   *  A  mask used to specify which fields of the job are being updated.
   */
  // const updateMask = {}

  // Imports the Scheduler library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const schedulerClient = new CloudSchedulerClient();

  async function callUpdateJob() {
    // Construct request
    const request = {
      job,
      updateMask,
    };

    // Run request
    const response = await schedulerClient.updateJob(request);
    console.log(response);
  }

  callUpdateJob();
  // [END cloudscheduler_v1_generated_CloudScheduler_UpdateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
