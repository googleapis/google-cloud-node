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
  // [START artifactregistry_v1beta2_generated_ArtifactRegistry_ListTags_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the parent resource whose tags will be listed.
   */
  // const parent = 'abc123'
  /**
   *  An expression for filtering the results of the request. Filter rules are
   *  case insensitive. The fields eligible for filtering are:
   *    * `version`
   *   An example of using a filter:
   *    * `version="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"`
   *    --> Tags that are applied to the version `1.0` in package `pkg1`.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of tags to return.
   *  Maximum page size is 10,000.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request, if any.
   */
  // const pageToken = 'abc123'

  // Imports the Artifactregistry library
  const {ArtifactRegistryClient} =
    require('@google-cloud/artifact-registry').v1beta2;

  // Instantiates a client
  const artifactregistryClient = new ArtifactRegistryClient();

  async function callListTags() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await artifactregistryClient.listTagsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListTags();
  // [END artifactregistry_v1beta2_generated_ArtifactRegistry_ListTags_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
