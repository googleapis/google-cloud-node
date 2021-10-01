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

function main(parent, entityValues) {
  // [START dialogflow_v2_generated_EntityTypes_BatchDeleteEntities_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entity type to delete entries for. Format:
   *  `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The reference `values` of the entities to delete. Note that
   *  these are not fully-qualified names, i.e. they don't start with
   *  `projects/<Project ID>`.
   */
  // const entityValues = 'abc123'
  /**
   *  Optional. The language used to access language-specific data.
   *  If not specified, the agent's default language is used.
   *  For more information, see
   *  [Multilingual intent and entity
   *  data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
   */
  // const languageCode = 'abc123'

  // Imports the Dialogflow library
  const {EntityTypesClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EntityTypesClient();

  async function batchDeleteEntities() {
    // Construct request
    const request = {
      parent,
      entityValues,
    };

    // Run request
    const [operation] = await dialogflowClient.batchDeleteEntities(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  batchDeleteEntities();
  // [END dialogflow_v2_generated_EntityTypes_BatchDeleteEntities_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
