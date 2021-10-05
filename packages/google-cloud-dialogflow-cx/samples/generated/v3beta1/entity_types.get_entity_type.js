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
  // [START dialogflow_v3beta1_generated_EntityTypes_GetEntityType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entity type.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/entityTypes/<Entity Type ID>`.
   */
  // const name = 'abc123'
  /**
   *  The language to retrieve the entity type for. The following fields are
   *  language dependent:
   *  *   `EntityType.entities.value`
   *  *   `EntityType.entities.synonyms`
   *  *   `EntityType.excluded_phrases.value`
   *  If not specified, the agent's default language is used.
   *  [Many
   *  languages](https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {EntityTypesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new EntityTypesClient();

  async function getEntityType() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.getEntityType(request);
    console.log(response);
  }

  getEntityType();
  // [END dialogflow_v3beta1_generated_EntityTypes_GetEntityType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
