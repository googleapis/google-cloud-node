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

function main(parent, product, productId) {
  // [START retail_v2beta_generated_ProductService_CreateProduct_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent catalog resource name, such as
   *  `projects/* /locations/global/catalogs/default_catalog/branches/default_branch`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Product google.cloud.retail.v2beta.Product  to create.
   */
  // const product = {}
  /**
   *  Required. The ID to use for the
   *  Product google.cloud.retail.v2beta.Product, which will become the final
   *  component of the Product.name google.cloud.retail.v2beta.Product.name.
   *  If the caller does not have permission to create the
   *  Product google.cloud.retail.v2beta.Product, regardless of whether or not
   *  it exists, a PERMISSION_DENIED error is returned.
   *  This field must be unique among all
   *  Product google.cloud.retail.v2beta.Product s with the same
   *  parent google.cloud.retail.v2beta.CreateProductRequest.parent.
   *  Otherwise, an ALREADY_EXISTS error is returned.
   *  This field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an INVALID_ARGUMENT error is returned.
   */
  // const productId = 'abc123'

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function callCreateProduct() {
    // Construct request
    const request = {
      parent,
      product,
      productId,
    };

    // Run request
    const response = await retailClient.createProduct(request);
    console.log(response);
  }

  callCreateProduct();
  // [END retail_v2beta_generated_ProductService_CreateProduct_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
