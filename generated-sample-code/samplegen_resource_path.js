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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_resource_path")

// sample-metadata:
//   title: Create product set (demonstrate resource paths)
//   description: Create product set (demonstrate resource paths)
//   usage: node samples/v1/samplegen_resource_path.js [--project "[PROJECT ID]"]

'use strict';

function main(project = '[PROJECT ID]') {
  // [START samplegen_resource_path]
  /**
  * TODO(developer): Uncomment these variables before running the sample.
  */
  // const project = '[PROJECT ID]';

  // Imports the client library
  const {ProductSearchClient} = require('@google-cloud/vision').v1;

  // Instantiates a client
  const productSearchClient = new ProductSearchClient();

  async function sampleCreateProductSet() {
    const formattedParent = productSearchClient.locationPath(project, 'us-central1');
    const displayName = '[DISPLAY NAME]';
    const productSet = {
      displayName: displayName,
    };

    // Construct request
    const request = {
      parent: formattedParent,
      productSet: productSet,
    };

    // Run request
    const [response] = await productSearchClient.createProductSet(request);

    // The API response represents the created product set
    const productSet = response;
    console.log(`The full name of the created product set: ${productSet.name}`);
  }
  sampleCreateProductSet();
  // [END samplegen_resource_path]
}

const argv = require(`yargs`)
  .option('project', {
    default: '[PROJECT ID]',
    string: true
  })
  .argv;

main(argv.project);