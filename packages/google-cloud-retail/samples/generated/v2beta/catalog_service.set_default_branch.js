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

function main() {
  // [START retail_v2beta_generated_CatalogService_SetDefaultBranch_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Full resource name of the catalog, such as
   *  `projects/* /locations/global/catalogs/default_catalog`.
   */
  // const catalog = 'abc123'
  /**
   *  The final component of the resource name of a branch.
   *  This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT
   *  error is returned.
   */
  // const branchId = 'abc123'
  /**
   *  Some note on this request, this can be retrieved by
   *  [CatalogService.GetDefaultBranch][google.cloud.retail.v2beta.CatalogService.GetDefaultBranch]
   *  before next valid default branch set occurs.
   *  This field must be a UTF-8 encoded string with a length limit of 1,000
   *  characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  // const note = 'abc123'

  // Imports the Retail library
  const {CatalogServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new CatalogServiceClient();

  async function setDefaultBranch() {
    // Construct request
    const request = {};

    // Run request
    const response = await retailClient.setDefaultBranch(request);
    console.log(response);
  }

  setDefaultBranch();
  // [END retail_v2beta_generated_CatalogService_SetDefaultBranch_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
