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
  // [START datacatalog_v1beta1_generated_PolicyTagManager_DeleteTaxonomy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the taxonomy to be deleted. All policy tags in
   *  this taxonomy will also be deleted.
   */
  // const name = 'abc123'

  // Imports the Datacatalog library
  const {PolicyTagManagerClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new PolicyTagManagerClient();

  async function callDeleteTaxonomy() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await datacatalogClient.deleteTaxonomy(request);
    console.log(response);
  }

  callDeleteTaxonomy();
  // [END datacatalog_v1beta1_generated_PolicyTagManager_DeleteTaxonomy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
