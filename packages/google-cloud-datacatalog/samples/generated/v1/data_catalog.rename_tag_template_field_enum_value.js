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

function main(name, newEnumValueDisplayName) {
  // [START datacatalog_v1_generated_DataCatalog_RenameTagTemplateFieldEnumValue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the enum field value.
   */
  // const name = 'abc123'
  /**
   *  Required. The new display name of the enum value. For example, `my_new_enum_value`.
   */
  // const newEnumValueDisplayName = 'abc123'

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callRenameTagTemplateFieldEnumValue() {
    // Construct request
    const request = {
      name,
      newEnumValueDisplayName,
    };

    // Run request
    const response = await datacatalogClient.renameTagTemplateFieldEnumValue(request);
    console.log(response);
  }

  callRenameTagTemplateFieldEnumValue();
  // [END datacatalog_v1_generated_DataCatalog_RenameTagTemplateFieldEnumValue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
