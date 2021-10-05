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

function main(name, scheduleTime) {
  // [START cloudtasks_v2beta2_generated_CloudTasks_CancelLease_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The task name. For example:
   *  `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   */
  // const name = 'abc123'
  /**
   *  Required. The task's current schedule time, available in the
   *  [schedule_time][google.cloud.tasks.v2beta2.Task.schedule_time] returned by
   *  [LeaseTasks][google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks] response or
   *  [RenewLease][google.cloud.tasks.v2beta2.CloudTasks.RenewLease] response. This restriction is
   *  to ensure that your worker currently holds the lease.
   */
  // const scheduleTime = ''
  /**
   *  The response_view specifies which subset of the [Task][google.cloud.tasks.v2beta2.Task] will be
   *  returned.
   *  By default response_view is [BASIC][google.cloud.tasks.v2beta2.Task.View.BASIC]; not all
   *  information is retrieved by default because some data, such as
   *  payloads, might be desirable to return only when needed because
   *  of its large size or because of the sensitivity of data that it
   *  contains.
   *  Authorization for [FULL][google.cloud.tasks.v2beta2.Task.View.FULL] requires
   *  `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *  permission on the [Task][google.cloud.tasks.v2beta2.Task] resource.
   */
  // const responseView = ''

  // Imports the Tasks library
  const {CloudTasksClient} = require('@google-cloud/tasks').v2beta2;

  // Instantiates a client
  const tasksClient = new CloudTasksClient();

  async function cancelLease() {
    // Construct request
    const request = {
      name,
      scheduleTime,
    };

    // Run request
    const response = await tasksClient.cancelLease(request);
    console.log(response);
  }

  cancelLease();
  // [END cloudtasks_v2beta2_generated_CloudTasks_CancelLease_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
