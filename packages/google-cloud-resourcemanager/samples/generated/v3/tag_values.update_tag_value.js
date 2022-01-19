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

function main(tagValue) {
  // [START cloudresourcemanager_v3_generated_TagValues_UpdateTagValue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The new definition of the TagValue. Only fields `description` and `etag`
   *  fields can be updated by this request. If the `etag` field is nonempty, it
   *  must match the `etag` field of the existing ControlGroup. Otherwise,
   *  `FAILED_PRECONDITION` will be returned.
   */
  // const tagValue = {}
  /**
   *  Optional. Fields to be updated.
   */
  // const updateMask = {}
  /**
   *  Optional. True to perform validations necessary for updating the resource, but not
   *  actually perform the action.
   */
  // const validateOnly = true

  // Imports the Resourcemanager library
  const {TagValuesClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new TagValuesClient();

  async function callUpdateTagValue() {
    // Construct request
    const request = {
      tagValue,
    };

    // Run request
    const [operation] = await resourcemanagerClient.updateTagValue(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateTagValue();
  // [END cloudresourcemanager_v3_generated_TagValues_UpdateTagValue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
