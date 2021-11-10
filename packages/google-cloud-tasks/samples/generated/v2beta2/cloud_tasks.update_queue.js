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

function main(queue) {
  // [START cloudtasks_v2beta2_generated_CloudTasks_UpdateQueue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The queue to create or update.
   *  The queue's name google.cloud.tasks.v2beta2.Queue.name  must be specified.
   *  Output only fields cannot be modified using UpdateQueue.
   *  Any value specified for an output only field will be ignored.
   *  The queue's name google.cloud.tasks.v2beta2.Queue.name  cannot be changed.
   */
  // const queue = {}
  /**
   *  A mask used to specify which fields of the queue are being updated.
   *  If empty, then all fields will be updated.
   */
  // const updateMask = {}

  // Imports the Tasks library
  const {CloudTasksClient} = require('@google-cloud/tasks').v2beta2;

  // Instantiates a client
  const tasksClient = new CloudTasksClient();

  async function callUpdateQueue() {
    // Construct request
    const request = {
      queue,
    };

    // Run request
    const response = await tasksClient.updateQueue(request);
    console.log(response);
  }

  callUpdateQueue();
  // [END cloudtasks_v2beta2_generated_CloudTasks_UpdateQueue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
