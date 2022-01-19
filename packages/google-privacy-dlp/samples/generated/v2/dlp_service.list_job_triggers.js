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
  // [START dlp_v2_generated_DlpService_ListJobTriggers_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource name.
   *  The format of this value varies depending on whether you have specified a
   *  processing
   *  location (https://cloud.google.com/dlp/docs/specifying-location):
   *  + Projects scope, location specified:<br/>
   *    `projects/`<var>PROJECT_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Projects scope, no location specified (defaults to global):<br/>
   *    `projects/`<var>PROJECT_ID</var>
   *  The following example `parent` string specifies a parent project with the
   *  identifier `example-project`, and specifies the `europe-west3` location
   *  for processing data:
   *      parent=projects/example-project/locations/europe-west3
   */
  // const parent = 'abc123'
  /**
   *  Page token to continue retrieval. Comes from previous call
   *  to ListJobTriggers. `order_by` field must not
   *  change for subsequent calls.
   */
  // const pageToken = 'abc123'
  /**
   *  Size of the page, can be limited by a server.
   */
  // const pageSize = 1234
  /**
   *  Comma separated list of triggeredJob fields to order by,
   *  followed by `asc` or `desc` postfix. This list is case-insensitive,
   *  default sorting order is ascending, redundant space characters are
   *  insignificant.
   *  Example: `name asc,update_time, create_time desc`
   *  Supported fields are:
   *  - `create_time`: corresponds to time the JobTrigger was created.
   *  - `update_time`: corresponds to time the JobTrigger was last updated.
   *  - `last_run_time`: corresponds to the last time the JobTrigger ran.
   *  - `name`: corresponds to JobTrigger's name.
   *  - `display_name`: corresponds to JobTrigger's display name.
   *  - `status`: corresponds to JobTrigger's status.
   */
  // const orderBy = 'abc123'
  /**
   *  Allows filtering.
   *  Supported syntax:
   *  * Filter expressions are made up of one or more restrictions.
   *  * Restrictions can be combined by `AND` or `OR` logical operators. A
   *  sequence of restrictions implicitly uses `AND`.
   *  * A restriction has the form of `{field} {operator} {value}`.
   *  * Supported fields/values for inspect triggers:
   *      - `status` - HEALTHY|PAUSED|CANCELLED
   *      - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
   *      - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by
   *      quotation marks. Nanoseconds are ignored.
   *      - 'error_count' - Number of errors that have occurred while running.
   *  * The operator must be `=` or `!=` for status and inspected_storage.
   *  Examples:
   *  * inspected_storage = cloud_storage AND status = HEALTHY
   *  * inspected_storage = cloud_storage OR inspected_storage = bigquery
   *  * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY)
   *  * last_run_time > \"2017-12-12T00:00:00+00:00\"
   *  The length of this field should be no more than 500 characters.
   */
  // const filter = 'abc123'
  /**
   *  The type of jobs. Will use `DlpJobType.INSPECT` if not set.
   */
  // const type = {}

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function callListJobTriggers() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dlpClient.listJobTriggersAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListJobTriggers();
  // [END dlp_v2_generated_DlpService_ListJobTriggers_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
