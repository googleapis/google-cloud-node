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

function main(parent) {
  // [START datafusion_v1beta1_generated_DataFusion_ListNamespaces_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The instance to list its namespaces.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value to use if there are additional
   *  results to retrieve for this list request.
   */
  // const pageToken = 'abc123'
  /**
   *  By default, only basic information about a namespace is returned
   *  (e.g. name). When `NAMESPACE_VIEW_FULL` is specified, additional
   *  information associated with a namespace gets returned
   *  (e.g. IAM policy set on the namespace)
   */
  // const view = {}

  // Imports the Datafusion library
  const {DataFusionClient} = require('@google-cloud/data-fusion').v1beta1;

  // Instantiates a client
  const datafusionClient = new DataFusionClient();

  async function callListNamespaces() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datafusionClient.listNamespacesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListNamespaces();
  // [END datafusion_v1beta1_generated_DataFusion_ListNamespaces_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
