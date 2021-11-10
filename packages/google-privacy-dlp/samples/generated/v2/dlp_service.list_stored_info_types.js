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
  // [START dlp_v2_generated_DlpService_ListStoredInfoTypes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource name.
   *  The format of this value varies depending on the scope of the request
   *  (project or organization) and whether you have specified a processing
   *  location (https://cloud.google.com/dlp/docs/specifying-location):
   *  + Projects scope, location specified:<br/>
   *    `projects/`<var>PROJECT_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Projects scope, no location specified (defaults to global):<br/>
   *    `projects/`<var>PROJECT_ID</var>
   *  + Organizations scope, location specified:<br/>
   *    `organizations/`<var>ORG_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Organizations scope, no location specified (defaults to global):<br/>
   *    `organizations/`<var>ORG_ID</var>
   *  The following example `parent` string specifies a parent project with the
   *  identifier `example-project`, and specifies the `europe-west3` location
   *  for processing data:
   *      parent=projects/example-project/locations/europe-west3
   */
  // const parent = 'abc123'
  /**
   *  Page token to continue retrieval. Comes from previous call
   *  to `ListStoredInfoTypes`.
   */
  // const pageToken = 'abc123'
  /**
   *  Size of the page, can be limited by server. If zero server returns
   *  a page of max size 100.
   */
  // const pageSize = 1234
  /**
   *  Comma separated list of fields to order by,
   *  followed by `asc` or `desc` postfix. This list is case-insensitive,
   *  default sorting order is ascending, redundant space characters are
   *  insignificant.
   *  Example: `name asc, display_name, create_time desc`
   *  Supported fields are:
   *  - `create_time`: corresponds to time the most recent version of the
   *  resource was created.
   *  - `state`: corresponds to the state of the resource.
   *  - `name`: corresponds to resource name.
   *  - `display_name`: corresponds to info type's display name.
   */
  // const orderBy = 'abc123'

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function callListStoredInfoTypes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dlpClient.listStoredInfoTypesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListStoredInfoTypes();
  // [END dlp_v2_generated_DlpService_ListStoredInfoTypes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
