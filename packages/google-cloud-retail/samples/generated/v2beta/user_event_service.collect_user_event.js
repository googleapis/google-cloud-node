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

function main(parent, userEvent) {
  // [START retail_v2beta_generated_UserEventService_CollectUserEvent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent catalog name, such as
   *  `projects/1234/locations/global/catalogs/default_catalog`.
   */
  // const parent = 'abc123'
  /**
   *  Required. URL encoded UserEvent proto with a length limit of 2,000,000
   *  characters.
   */
  // const userEvent = 'abc123'
  /**
   *  The URL including cgi-parameters but excluding the hash fragment with a
   *  length limit of 5,000 characters. This is often more useful than the
   *  referer URL, because many browsers only send the domain for 3rd party
   *  requests.
   */
  // const uri = 'abc123'
  /**
   *  The event timestamp in milliseconds. This prevents browser caching of
   *  otherwise identical get requests. The name is abbreviated to reduce the
   *  payload bytes.
   */
  // const ets = 1234

  // Imports the Retail library
  const {UserEventServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new UserEventServiceClient();

  async function callCollectUserEvent() {
    // Construct request
    const request = {
      parent,
      userEvent,
    };

    // Run request
    const response = await retailClient.collectUserEvent(request);
    console.log(response);
  }

  callCollectUserEvent();
  // [END retail_v2beta_generated_UserEventService_CollectUserEvent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
