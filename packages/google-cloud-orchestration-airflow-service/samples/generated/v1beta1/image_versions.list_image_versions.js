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
  // [START composer_v1beta1_generated_ImageVersions_ListImageVersions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  List ImageVersions in the given project and location, in the form:
   *  "projects/{projectId}/locations/{locationId}"
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of image_versions to return.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous List request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  Whether or not image versions from old releases should be included.
   */
  // const includePastReleases = true

  // Imports the Service library
  const {ImageVersionsClient} =
    require('@google-cloud/orchestration-airflow').v1beta1;

  // Instantiates a client
  const serviceClient = new ImageVersionsClient();

  async function listImageVersions() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await serviceClient.listImageVersionsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listImageVersions();
  // [END composer_v1beta1_generated_ImageVersions_ListImageVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
