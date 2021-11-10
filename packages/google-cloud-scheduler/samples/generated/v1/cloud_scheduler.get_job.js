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

function main(name) {
  // [START cloudscheduler_v1_generated_CloudScheduler_GetJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The job name. For example:
   *  `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   */
  // const name = 'abc123'

  // Imports the Scheduler library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const schedulerClient = new CloudSchedulerClient();

  async function callGetJob() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await schedulerClient.getJob(request);
    console.log(response);
  }

  callGetJob();
  // [END cloudscheduler_v1_generated_CloudScheduler_GetJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
