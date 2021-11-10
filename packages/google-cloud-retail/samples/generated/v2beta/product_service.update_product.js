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

function main(product) {
  // [START retail_v2beta_generated_ProductService_UpdateProduct_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The product to update/create.
   *  If the caller does not have permission to update the
   *  Product google.cloud.retail.v2beta.Product, regardless of whether or not
   *  it exists, a PERMISSION_DENIED error is returned.
   *  If the Product google.cloud.retail.v2beta.Product  to update does not
   *  exist and
   *  allow_missing google.cloud.retail.v2beta.UpdateProductRequest.allow_missing
   *  is not set, a NOT_FOUND error is returned.
   */
  // const product = {}
  /**
   *  Indicates which fields in the provided
   *  Product google.cloud.retail.v2beta.Product  to update. The immutable and
   *  output only fields are NOT supported. If not set, all supported fields (the
   *  fields that are neither immutable nor output only) are updated.
   *  If an unsupported or unknown field is provided, an INVALID_ARGUMENT error
   *  is returned.
   */
  // const updateMask = {}
  /**
   *  If set to true, and the Product google.cloud.retail.v2beta.Product  is
   *  not found, a new Product google.cloud.retail.v2beta.Product  will be
   *  created. In this situation, `update_mask` is ignored.
   */
  // const allowMissing = true

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function callUpdateProduct() {
    // Construct request
    const request = {
      product,
    };

    // Run request
    const response = await retailClient.updateProduct(request);
    console.log(response);
  }

  callUpdateProduct();
  // [END retail_v2beta_generated_ProductService_UpdateProduct_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
