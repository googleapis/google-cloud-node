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
  // [START aiplatform_v1beta1_generated_EndpointService_ListEndpoints_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location from which to list the Endpoints.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. An expression for filtering the results of the request. For field names
   *  both snake_case and camelCase are supported.
   *    * `endpoint` supports = and !=. `endpoint` represents the Endpoint ID,
   *      i.e. the last segment of the Endpoint's resource name google.cloud.aiplatform.v1beta1.Endpoint.name.
   *    * `display_name` supports = and, !=
   *    * `labels` supports general map functions that is:
   *      * `labels.key=value` - key:value equality
   *      * `labels.key:* or labels:key - key existence
   *      * A key including a space must be quoted. `labels."a key"`.
   *  Some examples:
   *    * `endpoint=1`
   *    * `displayName="myDisplayName"`
   *    * `labels.myKey="myValue"`
   */
  // const filter = 'abc123'
  /**
   *  Optional. The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  Optional. The standard list page token.
   *  Typically obtained via
   *  ListEndpointsResponse.next_page_token google.cloud.aiplatform.v1beta1.ListEndpointsResponse.next_page_token  of the previous
   *  EndpointService.ListEndpoints google.cloud.aiplatform.v1beta1.EndpointService.ListEndpoints  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Mask specifying which fields to read.
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {EndpointServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new EndpointServiceClient();

  async function callListEndpoints() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listEndpointsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListEndpoints();
  // [END aiplatform_v1beta1_generated_EndpointService_ListEndpoints_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
