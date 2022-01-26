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

function main(name, force) {
  // [START datacatalog_v1beta1_generated_DataCatalog_DeleteTagTemplateField_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the tag template field to delete. Example:
   *  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
   */
  // const name = 'abc123'
  /**
   *  Required. Currently, this field must always be set to `true`.
   *  This confirms the deletion of this field from any tags using this field.
   *  `force = false` will be supported in the future.
   */
  // const force = true

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callDeleteTagTemplateField() {
    // Construct request
    const request = {
      name,
      force,
    };

    // Run request
    const response = await datacatalogClient.deleteTagTemplateField(request);
    console.log(response);
  }

  callDeleteTagTemplateField();
  // [END datacatalog_v1beta1_generated_DataCatalog_DeleteTagTemplateField_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
