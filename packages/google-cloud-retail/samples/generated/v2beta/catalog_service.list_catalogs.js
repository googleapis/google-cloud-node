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

function main(parent) {
  // [START retail_v2beta_generated_CatalogService_ListCatalogs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The account resource name with an associated location.
   *  If the caller does not have permission to list
   *  Catalog google.cloud.retail.v2beta.Catalog s under this location,
   *  regardless of whether or not this location exists, a PERMISSION_DENIED
   *  error is returned.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of Catalog google.cloud.retail.v2beta.Catalog s to return.
   *  If unspecified, defaults to 50. The maximum allowed value is 1000. Values
   *  above 1000 will be coerced to 1000.
   *  If this field is negative, an INVALID_ARGUMENT is returned.
   */
  // const pageSize = 1234
  /**
   *  A page token
   *  ListCatalogsResponse.next_page_token google.cloud.retail.v2beta.ListCatalogsResponse.next_page_token,
   *  received from a previous
   *  CatalogService.ListCatalogs google.cloud.retail.v2beta.CatalogService.ListCatalogs 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  CatalogService.ListCatalogs google.cloud.retail.v2beta.CatalogService.ListCatalogs 
   *  must match the call that provided the page token. Otherwise, an
   *  INVALID_ARGUMENT error is returned.
   */
  // const pageToken = 'abc123'

  // Imports the Retail library
  const {CatalogServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new CatalogServiceClient();

  async function callListCatalogs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await retailClient.listCatalogsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListCatalogs();
  // [END retail_v2beta_generated_CatalogService_ListCatalogs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
