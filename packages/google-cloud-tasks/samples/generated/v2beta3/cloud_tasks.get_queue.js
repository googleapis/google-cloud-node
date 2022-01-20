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
  // [START cloudtasks_v2beta3_generated_CloudTasks_GetQueue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the queue. For example:
   *  `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   */
  // const name = 'abc123'
  /**
   *  Optional. Read mask is used for a more granular control over what the API returns.
   *  If the mask is not present all fields will be returned except
   *  Queue.stats. Queue.stats will be returned only if it was  explicitly
   *  specified in the mask.
   */
  // const readMask = {}

  // Imports the Tasks library
  const {CloudTasksClient} = require('@google-cloud/tasks').v2beta3;

  // Instantiates a client
  const tasksClient = new CloudTasksClient();

  async function callGetQueue() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await tasksClient.getQueue(request);
    console.log(response);
  }

  callGetQueue();
  // [END cloudtasks_v2beta3_generated_CloudTasks_GetQueue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
