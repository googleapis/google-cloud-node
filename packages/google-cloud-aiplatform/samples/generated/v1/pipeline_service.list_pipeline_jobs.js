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
  // [START aiplatform_list_pipeline_jobs_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list the PipelineJobs from.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Lists the PipelineJobs that match the filter expression. The following
   *  fields are supported:
   *  * `pipeline_name`: Supports `=` and `!=` comparisons.
   *  * `create_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *    Values must be in RFC 3339 format.
   *  * `update_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *    Values must be in RFC 3339 format.
   *  * `end_time`: Supports `=`, `!=`, `<`, `>`, `<=`, and `>=` comparisons.
   *    Values must be in RFC 3339 format.
   *  * `labels`: Supports key-value equality and key presence.
   *  Filter expressions can be combined together using logical operators
   *  (`AND` & `OR`).
   *  For example: `pipeline_name="test" AND create_time>"2020-05-18T13:30:00Z"`.
   *  The syntax to define filter expression is based on
   *  https://google.aip.dev/160.
   *  Examples:
   *  * `create_time>"2021-05-18T00:00:00Z" OR
   *    update_time>"2020-05-18T00:00:00Z"` PipelineJobs created or updated
   *    after 2020-05-18 00:00:00 UTC.
   *  * `labels.env = "prod"`
   *    PipelineJobs with label "env" set to "prod".
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained via
   *  [ListPipelineJobsResponse.next_page_token][google.cloud.aiplatform.v1.ListPipelineJobsResponse.next_page_token] of the previous
   *  [PipelineService.ListPipelineJobs][google.cloud.aiplatform.v1.PipelineService.ListPipelineJobs] call.
   */
  // const pageToken = 'abc123'

  // Imports the Aiplatform library
  const {PipelineServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new PipelineServiceClient();

  async function listPipelineJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listPipelineJobsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listPipelineJobs();
  // [END aiplatform_list_pipeline_jobs_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
