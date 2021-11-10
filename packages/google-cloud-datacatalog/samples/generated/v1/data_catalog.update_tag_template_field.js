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

function main(name, tagTemplateField) {
  // [START datacatalog_v1_generated_DataCatalog_UpdateTagTemplateField_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the tag template field.
   */
  // const name = 'abc123'
  /**
   *  Required. The template to update.
   */
  // const tagTemplateField = {}
  /**
   *  Optional. Names of fields whose values to overwrite on an individual field of a tag
   *  template. The following fields are modifiable:
   *  * `display_name`
   *  * `type.enum_type`
   *  * `is_required`
   *  If this parameter is absent or empty, all modifiable fields
   *  are overwritten. If such fields are non-required and omitted in the request
   *  body, their values are emptied with one exception: when updating an enum
   *  type, the provided values are merged with the existing values. Therefore,
   *  enum values can only be added, existing enum values cannot be deleted or
   *  renamed.
   *  Additionally, updating a template field from optional to required is
   *  *not* allowed.
   */
  // const updateMask = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callUpdateTagTemplateField() {
    // Construct request
    const request = {
      name,
      tagTemplateField,
    };

    // Run request
    const response = await datacatalogClient.updateTagTemplateField(request);
    console.log(response);
  }

  callUpdateTagTemplateField();
  // [END datacatalog_v1_generated_DataCatalog_UpdateTagTemplateField_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
