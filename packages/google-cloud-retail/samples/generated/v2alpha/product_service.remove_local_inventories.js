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

function main(product, placeIds) {
  // [START retail_v2alpha_generated_ProductService_RemoveLocalInventories_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of
   *  Product google.cloud.retail.v2alpha.Product, such as
   *  `projects/* /locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.
   *  If the caller does not have permission to access the
   *  Product google.cloud.retail.v2alpha.Product, regardless of whether or
   *  not it exists, a PERMISSION_DENIED error is returned.
   */
  // const product = 'abc123'
  /**
   *  Required. A list of place IDs to have their inventory deleted.
   *  At most 3000 place IDs are allowed per request.
   */
  // const placeIds = 'abc123'
  /**
   *  The time when the inventory deletions are issued. Used to prevent
   *  out-of-order updates and deletions on local inventory fields. If not
   *  provided, the internal system time will be used.
   */
  // const removeTime = {}
  /**
   *  If set to true, and the Product google.cloud.retail.v2alpha.Product  is
   *  not found, the local inventory removal request will still be processed and
   *  retained for at most 1 day and processed once the
   *  Product google.cloud.retail.v2alpha.Product  is created. If set to false,
   *  a NOT_FOUND error is returned if the
   *  Product google.cloud.retail.v2alpha.Product  is not found.
   */
  // const allowMissing = true

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function callRemoveLocalInventories() {
    // Construct request
    const request = {
      product,
      placeIds,
    };

    // Run request
    const [operation] = await retailClient.removeLocalInventories(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRemoveLocalInventories();
  // [END retail_v2alpha_generated_ProductService_RemoveLocalInventories_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
