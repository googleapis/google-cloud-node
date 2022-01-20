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

function main(parent, inputConfig) {
  // [START retail_v2_generated_ProductService_ImportProducts_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required.
   *  `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch`
   *  If no updateMask is specified, requires products.create permission.
   *  If updateMask is specified, requires products.update permission.
   */
  // const parent = 'abc123'
  /**
   *  Unique identifier provided by client, within the ancestor
   *  dataset scope. Ensures idempotency and used for request deduplication.
   *  Server-generated if unspecified. Up to 128 characters long and must match
   *  the pattern: `[a-zA-Z0-9_]+`. This is returned as [Operation.name][] in
   *  ImportMetadata google.cloud.retail.v2.ImportMetadata.
   *  Only supported when
   *  ImportProductsRequest.reconciliation_mode google.cloud.retail.v2.ImportProductsRequest.reconciliation_mode 
   *  is set to `FULL`.
   */
  // const requestId = 'abc123'
  /**
   *  Required. The desired input location of the data.
   */
  // const inputConfig = {}
  /**
   *  The desired location of errors incurred during the Import.
   */
  // const errorsConfig = {}
  /**
   *  Indicates which fields in the provided imported 'products' to update. If
   *  not set, will by default update all fields.
   */
  // const updateMask = {}
  /**
   *  The mode of reconciliation between existing products and the products to be
   *  imported. Defaults to
   *  ReconciliationMode.INCREMENTAL google.cloud.retail.v2.ImportProductsRequest.ReconciliationMode.INCREMENTAL.
   */
  // const reconciliationMode = {}
  /**
   *  Pub/Sub topic for receiving notification. If this field is set,
   *  when the import is finished, a notification will be sent to
   *  specified Pub/Sub topic. The message data will be JSON string of a
   *  Operation google.longrunning.Operation.
   *  Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.
   *  Only supported when
   *  ImportProductsRequest.reconciliation_mode google.cloud.retail.v2.ImportProductsRequest.reconciliation_mode 
   *  is set to `FULL`.
   */
  // const notificationPubsubTopic = 'abc123'

  // Imports the Retail library
  const {ProductServiceClient} = require('@google-cloud/retail').v2;

  // Instantiates a client
  const retailClient = new ProductServiceClient();

  async function callImportProducts() {
    // Construct request
    const request = {
      parent,
      inputConfig,
    };

    // Run request
    const [operation] = await retailClient.importProducts(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportProducts();
  // [END retail_v2_generated_ProductService_ImportProducts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
