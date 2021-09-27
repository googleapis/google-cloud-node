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
  // [START eventarc_v1_generated_Eventarc_ListTriggers_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent collection to list triggers on.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of triggers to return on each page.
   *  Note: The service may send fewer.
   */
  // const pageSize = 1234
  /**
   *  The page token; provide the value from the `next_page_token` field in a
   *  previous `ListTriggers` call to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListTriggers` must match
   *  the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  The sorting order of the resources returned. Value should be a comma
   *  separated list of fields. The default sorting oder is ascending. To specify
   *  descending order for a field, append a ` desc` suffix; for example:
   *  `name desc, trigger_id`.
   */
  // const orderBy = 'abc123'

  // Imports the Eventarc library
  const {EventarcClient} = require('@google-cloud/eventarc').v1;

  // Instantiates a client
  const eventarcClient = new EventarcClient();

  async function listTriggers() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await eventarcClient.listTriggersAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listTriggers();
  // [END eventarc_v1_generated_Eventarc_ListTriggers_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
