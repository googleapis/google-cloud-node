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

function main(parent, inputConfig) {
  // [START retail_v2_generated_CompletionService_ImportCompletionData_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The catalog which the suggestions dataset belongs to.
   *  Format: `projects/1234/locations/global/catalogs/default_catalog`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The desired input location of the data.
   */
  // const inputConfig = ''
  /**
   *  Pub/Sub topic for receiving notification. If this field is set,
   *  when the import is finished, a notification will be sent to
   *  specified Pub/Sub topic. The message data will be JSON string of a
   *  [Operation][google.longrunning.Operation].
   *  Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.
   */
  // const notificationPubsubTopic = 'abc123'

  // Imports the Retail library
  const {CompletionServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new CompletionServiceClient();

  async function importCompletionData() {
    // Construct request
    const request = {
      parent,
      inputConfig,
    };

    // Run request
    const [operation] = await retailClient.importCompletionData(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  importCompletionData();
  // [END retail_v2_generated_CompletionService_ImportCompletionData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
