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

function main(tagTemplate) {
  // [START datacatalog_v1beta1_generated_DataCatalog_UpdateTagTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The template to update. The "name" field must be set.
   */
  // const tagTemplate = {}
  /**
   *  The field mask specifies the parts of the template to overwrite.
   *  Allowed fields:
   *    * `display_name`
   *  If absent or empty, all of the allowed fields above will be updated.
   */
  // const updateMask = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callUpdateTagTemplate() {
    // Construct request
    const request = {
      tagTemplate,
    };

    // Run request
    const response = await datacatalogClient.updateTagTemplate(request);
    console.log(response);
  }

  callUpdateTagTemplate();
  // [END datacatalog_v1beta1_generated_DataCatalog_UpdateTagTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
