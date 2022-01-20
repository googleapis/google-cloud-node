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

function main() {
  // [START gkehub_v1_generated_GkeHub_ListFeatures_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent (project and location) where the Features will be listed.
   *  Specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  When requesting a 'page' of resources, `page_size` specifies number of
   *  resources to return. If unspecified or set to 0, all resources will
   *  be returned.
   */
  // const pageSize = 1234
  /**
   *  Token returned by previous call to `ListFeatures` which
   *  specifies the position in the list from where to continue listing the
   *  resources.
   */
  // const pageToken = 'abc123'
  /**
   *  Lists Features that match the filter expression, following the syntax
   *  outlined in https://google.aip.dev/160.
   *  Examples:
   *    - Feature with the name "servicemesh" in project "foo-proj":
   *        name = "projects/foo-proj/locations/global/features/servicemesh"
   *    - Features that have a label called `foo`:
   *        labels.foo:*
   *    - Features that have a label called `foo` whose value is `bar`:
   *        labels.foo = bar
   */
  // const filter = 'abc123'
  /**
   *  One or more fields to compare and use to sort the output.
   *  See https://google.aip.dev/132#ordering.
   */
  // const orderBy = 'abc123'

  // Imports the Gkehub library
  const {GkeHubClient} = require('@google-cloud/gke-hub').v1;

  // Instantiates a client
  const gkehubClient = new GkeHubClient();

  async function callListFeatures() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await gkehubClient.listFeaturesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListFeatures();
  // [END gkehub_v1_generated_GkeHub_ListFeatures_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
