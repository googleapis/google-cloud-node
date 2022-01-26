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

function main(parent, tagTemplateId, tagTemplate) {
  // [START datacatalog_v1_generated_DataCatalog_CreateTagTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project and the template location
   *  region (https://cloud.google.com/data-catalog/docs/concepts/regions).
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the tag template to create.
   *  The ID must contain only lowercase letters (a-z), numbers (0-9),
   *  or underscores (_), and must start with a letter or underscore.
   *  The maximum size is 64 bytes when encoded in UTF-8.
   */
  // const tagTemplateId = 'abc123'
  /**
   *  Required. The tag template to create.
   */
  // const tagTemplate = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callCreateTagTemplate() {
    // Construct request
    const request = {
      parent,
      tagTemplateId,
      tagTemplate,
    };

    // Run request
    const response = await datacatalogClient.createTagTemplate(request);
    console.log(response);
  }

  callCreateTagTemplate();
  // [END datacatalog_v1_generated_DataCatalog_CreateTagTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
