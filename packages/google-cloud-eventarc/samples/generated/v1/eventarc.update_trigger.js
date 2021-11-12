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

function main(validateOnly) {
  // [START eventarc_v1_generated_Eventarc_UpdateTrigger_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The trigger to be updated.
   */
  // const trigger = {}
  /**
   *  The fields to be updated; only fields explicitly provided will be updated.
   *  If no field mask is provided, all provided fields in the request will be
   *  updated. To update all fields, provide a field mask of "*".
   */
  // const updateMask = {}
  /**
   *  If set to true, and the trigger is not found, a new trigger will be
   *  created. In this situation, `update_mask` is ignored.
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

  async function callUpdateTrigger() {
    // Construct request
    const request = {
      validateOnly,
    };

    // Run request
    const [operation] = await eventarcClient.updateTrigger(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateTrigger();
  // [END eventarc_v1_generated_Eventarc_UpdateTrigger_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
