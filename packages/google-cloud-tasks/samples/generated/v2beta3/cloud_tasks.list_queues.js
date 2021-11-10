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
  // [START cloudtasks_v2beta3_generated_CloudTasks_ListQueues_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location name.
   *  For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   */
  // const parent = 'abc123'
  /**
   *  `filter` can be used to specify a subset of queues. Any Queue google.cloud.tasks.v2beta3.Queue
   *  field can be used as a filter and several operators as supported.
   *  For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
   *  described in
   *  Stackdriver's Advanced Logs
   *  Filters (https://cloud.google.com/logging/docs/view/advanced_filters).
   *  Sample filter "state: PAUSED".
   *  Note that using filters might cause fewer queues than the
   *  requested page_size to be returned.
   */
  // const filter = 'abc123'
  /**
   *  Requested page size.
   *  The maximum page size is 9800. If unspecified, the page size will
   *  be the maximum. Fewer queues than requested might be returned,
   *  even if more queues exist; use the
   *  next_page_token google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token  in the
   *  response to determine if more queues exist.
   */
  // const pageSize = 1234
  /**
   *  A token identifying the page of results to return.
   *  To request the first page results, page_token must be empty. To
   *  request the next page of results, page_token must be the value of
   *  next_page_token google.cloud.tasks.v2beta3.ListQueuesResponse.next_page_token  returned
   *  from the previous call to ListQueues google.cloud.tasks.v2beta3.CloudTasks.ListQueues
   *  method. It is an error to switch the value of the
   *  filter google.cloud.tasks.v2beta3.ListQueuesRequest.filter  while iterating through pages.
   */
  // const pageToken = 'abc123'
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

  async function callListQueues() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await tasksClient.listQueuesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListQueues();
  // [END cloudtasks_v2beta3_generated_CloudTasks_ListQueues_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
