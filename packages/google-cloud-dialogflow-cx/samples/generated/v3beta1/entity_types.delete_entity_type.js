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

function main(name) {
  // [START dialogflow_v3beta1_generated_EntityTypes_DeleteEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entity type to delete.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/entityTypes/<Entity Type ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field has no effect for entity type not being used.
   *  For entity types that are used by intents or pages:
   *  *  If `force` is set to false, an error will be returned with message
   *     indicating the referencing resources.
   *  *  If `force` is set to true, Dialogflow will remove the entity type, as
   *     well as any references to the entity type (i.e. Page
   *     parameter google.cloud.dialogflow.cx.v3beta1.Form.Parameter  of the entity type will be changed to
   *     '@sys.any' and intent parameter google.cloud.dialogflow.cx.v3beta1.Intent.Parameter  of the entity type
   *     will be removed).
   */
  // const force = true

  // Imports the Cx library
  const {EntityTypesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new EntityTypesClient();

  async function callDeleteEntityType() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.deleteEntityType(request);
    console.log(response);
  }

  callDeleteEntityType();
  // [END dialogflow_v3beta1_generated_EntityTypes_DeleteEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
