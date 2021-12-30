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

function main(instanceGroupManager, project, region) {
  // [START compute_v1_generated_RegionInstanceGroupManagers_ListPerInstanceConfigs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A filter expression that filters resources listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either `=`, `!=`, `>`, or `<`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ```
   */
  // const filter = 'abc123'
  /**
   *  The name of the managed instance group. It should conform to RFC1035.
   */
  // const instanceGroupManager = 'abc123'
  /**
   *  The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
   */
  // const maxResults = 1234
  /**
   *  Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
   */
  // const orderBy = 'abc123'
  /**
   *  Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  Name of the region scoping this request, should conform to RFC1035.
   */
  // const region = 'us-central1'
  /**
   *  Opt-in for partial success behavior which provides partial results in case of failure. The default value is false.
   */
  // const returnPartialSuccess = true

  // Imports the Compute library
  const {RegionInstanceGroupManagersClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new RegionInstanceGroupManagersClient();

  async function callListPerInstanceConfigs() {
    // Construct request
    const request = {
      instanceGroupManager,
      project,
      region,
    };

    // Run request
    const iterable = await computeClient.listPerInstanceConfigsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPerInstanceConfigs();
  // [END compute_v1_generated_RegionInstanceGroupManagers_ListPerInstanceConfigs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
