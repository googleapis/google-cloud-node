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
  // [START cloudscheduler_v1beta1_generated_CloudScheduler_ListJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location name. For example:
   *  `projects/PROJECT_ID/locations/LOCATION_ID`.
   */
  // const parent = 'abc123'
  /**
   *  Requested page size.
   *  The maximum page size is 500. If unspecified, the page size will
   *  be the maximum. Fewer jobs than requested might be returned,
   *  even if more jobs exist; use next_page_token to determine if more
   *  jobs exist.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results the server will return. To
   *  request the first page results, page_token must be empty. To
   *  request the next page of results, page_token must be the value of
   *  next_page_token google.cloud.scheduler.v1beta1.ListJobsResponse.next_page_token  returned from
   *  the previous call to ListJobs google.cloud.scheduler.v1beta1.CloudScheduler.ListJobs. It is an error to
   *  switch the value of filter google.cloud.scheduler.v1beta1.ListJobsRequest.filter  or
   *  order_by google.cloud.scheduler.v1beta1.ListJobsRequest.order_by  while iterating through pages.
   */
  // const pageToken = 'abc123'

  // Imports the Scheduler library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1beta1;

  // Instantiates a client
  const schedulerClient = new CloudSchedulerClient();

  async function callListJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await schedulerClient.listJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListJobs();
  // [END cloudscheduler_v1beta1_generated_CloudScheduler_ListJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
