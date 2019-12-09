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

// DO NOT EDIT! This is a generated sample ("RequestAsyncPagedAll",  "samplegen_paged")

// sample-metadata:
//   title: List product sets
//   description: List product sets
//   usage: node samples/v1/samplegen_paged.js

'use strict';

// [START samplegen_paged]

const {ProductSearchClient} = require('@google-cloud/vision').v1;

/** List product sets */
function sampleListProductSets() {
  const client = new ProductSearchClient();
  // Iterate over all elements.

  // The project and location where the product sets are contained.
  const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');

  client
    .listProductSets({parent: formattedParent})
    .then(responses => {
      const resources = responses[0];
      for (const resource of resources) {
        // The entity in this iteration represents a product set
        const productSet = resource;
        console.log(`The full name of this product set: ${productSet.name}`);
      }
    })
    .catch(err => {
      console.error(err);
    });
}

// [END samplegen_paged]
// tslint:disable-next-line:no-any

sampleListProductSets();
