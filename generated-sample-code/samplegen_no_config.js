// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_no_config")

// sample-metadata:
//   title:
//   usage: node samples/v1/samplegen_no_config.js

'use strict';

function main() {

  // Imports the client library
  const {ProductSearchClient} = require('@google-cloud/vision').v1;

  // Instantiates a client
  const productSearchClient = new ProductSearchClient();

  async function sampleCreateProductSet() {
    const formattedParent = productSearchClient.locationPath('[PROJECT]', '[LOCATION]');
    const productSet = {};

    // Construct request
    const request = {
      parent: formattedParent,
      productSet: productSet,
    };

    // Run request
    const [response] = await productSearchClient.createProductSet(request);

    console.log(response);
  }
  sampleCreateProductSet();
}

main();