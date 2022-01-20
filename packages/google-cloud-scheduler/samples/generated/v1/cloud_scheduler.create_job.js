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

function main(parent, job) {
  // [START cloudscheduler_v1_generated_CloudScheduler_CreateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location name. For example:
   *  `projects/PROJECT_ID/locations/LOCATION_ID`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The job to add. The user can optionally specify a name for the
   *  job in name google.cloud.scheduler.v1.Job.name. name google.cloud.scheduler.v1.Job.name cannot be the same as an
   *  existing job. If a name is not specified then the system will
   *  generate a random unique name that will be returned
   *  (name google.cloud.scheduler.v1.Job.name) in the response.
   */
  // const job = {}

  // Imports the Scheduler library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const schedulerClient = new CloudSchedulerClient();

  async function callCreateJob() {
    // Construct request
    const request = {
      parent,
      job,
    };

    // Run request
    const response = await schedulerClient.createJob(request);
    console.log(response);
  }

  callCreateJob();
  // [END cloudscheduler_v1_generated_CloudScheduler_CreateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
