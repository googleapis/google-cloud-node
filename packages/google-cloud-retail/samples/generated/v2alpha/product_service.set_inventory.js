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

function main(inventory) {
  // [START retail_v2alpha_generated_ProductService_SetInventory_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The inventory information to update. The allowable fields to
   *  update are:
   *  * Product.price_info google.cloud.retail.v2alpha.Product.price_info
   *  * Product.availability google.cloud.retail.v2alpha.Product.availability
   *  * Product.available_quantity google.cloud.retail.v2alpha.Product.available_quantity
   *  * Product.fulfillment_info google.cloud.retail.v2alpha.Product.fulfillment_info
   *  The updated inventory fields must be specified in
   *  SetInventoryRequest.set_mask google.cloud.retail.v2alpha.SetInventoryRequest.set_mask.
   *  If SetInventoryRequest.inventory.name   is empty or invalid, an
   *  INVALID_ARGUMENT error is returned.
   *  If the caller does not have permission to update the
   *  Product google.cloud.retail.v2alpha.Product  named in
   *  Product.name google.cloud.retail.v2alpha.Product.name, regardless of
   *  whether or not it exists, a PERMISSION_DENIED error is returned.
   *  If the Product google.cloud.retail.v2alpha.Product  to update does not
   *  have existing inventory information, the provided inventory information
   *  will be inserted.
   *  If the Product google.cloud.retail.v2alpha.Product  to update has
   *  existing inventory information, the provided inventory information will be
   *  merged while respecting the last update time for each inventory field,
   *  using the provided or default value for
   *  SetInventoryRequest.set_time google.cloud.retail.v2alpha.SetInventoryRequest.set_time.
   *  The last update time is recorded for the following inventory fields:
   *  * Product.price_info google.cloud.retail.v2alpha.Product.price_info
   *  * Product.availability google.cloud.retail.v2alpha.Product.availability
   *  * Product.available_quantity google.cloud.retail.v2alpha.Product.available_quantity
   *  * Product.fulfillment_info google.cloud.retail.v2alpha.Product.fulfillment_info
   *  If a full overwrite of inventory information while ignoring timestamps is
   *  needed, UpdateProduct   should be invoked instead.
   */
  // const inventory = {}
  /**
   *  Indicates which inventory fields in the provided
   *  Product google.cloud.retail.v2alpha.Product  to update. If not set or set
   *  with empty paths, all inventory fields will be updated.
   *  If an unsupported or unknown field is provided, an INVALID_ARGUMENT error
   *  is returned and the entire update will be ignored.
   */
  // const setMask = {}
  /**
   *  The time when the request is issued, used to prevent
   *  out-of-order updates on inventory fields with the last update time
   *  recorded. If not provided, the internal system time will be used.
   */
  // const setTime = {}
  /**
   *  If set to true, and the Product google.cloud.retail.v2alpha.Product  with
   *  name Product.name google.cloud.retail.v2alpha.Product.name  is not found,
   *  the inventory update will still be processed and retained for at most 1 day
   *  until the Product google.cloud.retail.v2alpha.Product  is created. If set
   *  to false, a NOT_FOUND error is returned if the
   *  Product google.cloud.retail.v2alpha.Product  is not found.
   */
  // const allowMissing = true

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function callSetInventory() {
    // Construct request
    const request = {
      inventory,
    };

    // Run request
    const [operation] = await retailClient.setInventory(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callSetInventory();
  // [END retail_v2alpha_generated_ProductService_SetInventory_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
