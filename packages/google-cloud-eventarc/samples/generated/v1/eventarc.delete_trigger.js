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

function main(name, validateOnly) {
  // [START eventarc_v1_generated_Eventarc_DeleteTrigger_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the trigger to be deleted.
   */
  // const name = 'abc123'
  /**
   *  If provided, the trigger will only be deleted if the etag matches the
   *  current etag on the resource.
   */
  // const etag = 'abc123'
  /**
   *  If set to true, and the trigger is not found, the request will succeed
   *  but no action will be taken on the server.
   */
  // const allowMissing = true
  /**
   *  Required. If set, validate the request and preview the review, but do not actually
   *  post it.
   */
  // const validateOnly = true

  // Imports the Eventarc library
  const {EventarcClient} = require('@google-cloud/eventarc').v1;

  // Instantiates a client
  const eventarcClient = new EventarcClient();

  async function callDeleteTrigger() {
    // Construct request
    const request = {
      name,
      validateOnly,
    };

    // Run request
    const [operation] = await eventarcClient.deleteTrigger(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteTrigger();
  // [END eventarc_v1_generated_Eventarc_DeleteTrigger_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
