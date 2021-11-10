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

function main(parent, entityTypeNames) {
  // [START dialogflow_v2_generated_EntityTypes_BatchDeleteEntityTypes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the agent to delete all entities types for. Format:
   *  `projects/<Project ID>/agent`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The names entity types to delete. All names must point to the
   *  same agent as `parent`.
   */
  // const entityTypeNames = 'abc123'

  // Imports the Dialogflow library
  const {EntityTypesClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EntityTypesClient();

  async function callBatchDeleteEntityTypes() {
    // Construct request
    const request = {
      parent,
      entityTypeNames,
    };

    // Run request
    const [operation] = await dialogflowClient.batchDeleteEntityTypes(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchDeleteEntityTypes();
  // [END dialogflow_v2_generated_EntityTypes_BatchDeleteEntityTypes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
