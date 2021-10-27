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

function main(product, type, placeIds) {
  // [START retail_v2beta_generated_ProductService_RemoveFulfillmentPlaces_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Full resource name of
   *  [Product][google.cloud.retail.v2beta.Product], such as
   *  `projects/* /locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`.
   *  If the caller does not have permission to access the
   *  [Product][google.cloud.retail.v2beta.Product], regardless of whether or not
   *  it exists, a PERMISSION_DENIED error is returned.
   */
  // const product = 'abc123'
  /**
   *  Required. The fulfillment type, including commonly used types (such as
   *  pickup in store and same day delivery), and custom types.
   *  Supported values:
   *  * "pickup-in-store"
   *  * "ship-to-store"
   *  * "same-day-delivery"
   *  * "next-day-delivery"
   *  * "custom-type-1"
   *  * "custom-type-2"
   *  * "custom-type-3"
   *  * "custom-type-4"
   *  * "custom-type-5"
   *  If this field is set to an invalid value other than these, an
   *  INVALID_ARGUMENT error is returned.
   *  This field directly corresponds to [Product.fulfillment_info.type][].
   */
  // const type = 'abc123'
  /**
   *  Required. The IDs for this
   *  [type][google.cloud.retail.v2beta.RemoveFulfillmentPlacesRequest.type],
   *  such as the store IDs for "pickup-in-store" or the region IDs for
   *  "same-day-delivery", to be removed for this
   *  [type][google.cloud.retail.v2beta.RemoveFulfillmentPlacesRequest.type].
   *  At least 1 value is required, and a maximum of 2000 values are allowed.
   *  Each value must be a string with a length limit of 10 characters, matching
   *  the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an
   *  INVALID_ARGUMENT error is returned.
   */
  // const placeIds = 'abc123'
  /**
   *  The time when the fulfillment updates are issued, used to prevent
   *  out-of-order updates on fulfillment information. If not provided, the
   *  internal system time will be used.
   */
  // const removeTime = ''
  /**
   *  If set to true, and the [Product][google.cloud.retail.v2beta.Product] is
   *  not found, the fulfillment information will still be processed and retained
   *  for at most 1 day and processed once the
   *  [Product][google.cloud.retail.v2beta.Product] is created. If set to false,
   *  a NOT_FOUND error is returned if the
   *  [Product][google.cloud.retail.v2beta.Product] is not found.
   */
  // const allowMissing = true

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function removeFulfillmentPlaces() {
    // Construct request
    const request = {
      product,
      type,
      placeIds,
    };

    // Run request
    const [operation] = await retailClient.removeFulfillmentPlaces(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  removeFulfillmentPlaces();
  // [END retail_v2beta_generated_ProductService_RemoveFulfillmentPlaces_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
