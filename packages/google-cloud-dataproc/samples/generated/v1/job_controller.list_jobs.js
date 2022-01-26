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

function main(projectId, region) {
  // [START dataproc_v1_generated_JobController_ListJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project that the job
   *  belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Optional. The number of results to return in each response.
   */
  // const pageSize = 1234
  /**
   *  Optional. The page token, returned by a previous call, to request the
   *  next page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. If set, the returned jobs list includes only jobs that were
   *  submitted to the named cluster.
   */
  // const clusterName = 'abc123'
  /**
   *  Optional. Specifies enumerated categories of jobs to list.
   *  (default = match ALL jobs).
   *  If `filter` is provided, `jobStateMatcher` will be ignored.
   */
  // const jobStateMatcher = {}
  /**
   *  Optional. A filter constraining the jobs to list. Filters are
   *  case-sensitive and have the following syntax:
   *  field = value  AND field = value   ...
   *  where **field** is `status.state` or `labels.[KEY]`, and `[KEY]` is a label
   *  key. **value** can be `*` to match all values.
   *  `status.state` can be either `ACTIVE` or `NON_ACTIVE`.
   *  Only the logical `AND` operator is supported; space-separated items are
   *  treated as having an implicit `AND` operator.
   *  Example filter:
   *  status.state = ACTIVE AND labels.env = staging AND labels.starred = *
   */
  // const filter = 'abc123'

  // Imports the Dataproc library
  const {JobControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new JobControllerClient();

  async function callListJobs() {
    // Construct request
    const request = {
      projectId,
      region,
    };

    // Run request
    const iterable = await dataprocClient.listJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListJobs();
  // [END dataproc_v1_generated_JobController_ListJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
