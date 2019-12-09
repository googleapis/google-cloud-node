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

// DO NOT EDIT! This is a generated sample ("Request",  "samplegen_basics")

// sample-metadata:
//   title: This is the sample title
//   description: This is the sample description
//   usage: node samples/v1/samplegen_basics.js [--display_name "This is the default value of the display_name request field"]

'use strict';

// [START samplegen_basics]

const {ProductSearchClient} = require('@google-cloud/vision').v1;

/** This is the sample description */
function sampleCreateProductSet(displayName) {
  const client = new ProductSearchClient();
  // const displayName = 'This is the default value of the display_name request field';

  // The project and location in which the product set should be created.
  const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
  const productSet = {
    displayName: displayName,
  };
  const request = {
    parent: formattedParent,
    productSet: productSet,
  };
  client
    .createProductSet(request)
    .then(responses => {
      const response = responses[0];
      // The API response represents the created product set
      const productSet = response;
      console.log(
        `The full name of the created product set: ${productSet.name}`
      );
    })
    .catch(err => {
      console.error(err);
    });
}

// [END samplegen_basics]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('display_name', {
  default: 'This is the default value of the display_name request field',
  string: true,
}).argv;

sampleCreateProductSet(argv.display_name);
