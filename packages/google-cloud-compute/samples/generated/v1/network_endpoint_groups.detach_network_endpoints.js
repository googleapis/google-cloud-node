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

function main(networkEndpointGroup, networkEndpointGroupsDetachEndpointsRequestResource, project, zone) {
  // [START compute_v1_generated_NetworkEndpointGroups_DetachNetworkEndpoints_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the network endpoint group where you are removing network endpoints. It should comply with RFC1035.
   */
  // const networkEndpointGroup = 'abc123'
  /**
   *  The body resource for this request
   */
  // const networkEndpointGroupsDetachEndpointsRequestResource = {}
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'
  /**
   *  The name of the zone where the network endpoint group is located. It should comply with RFC1035.
   */
  // const zone = 'abc123'

  // Imports the Compute library
  const {NetworkEndpointGroupsClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new NetworkEndpointGroupsClient();

  async function callDetachNetworkEndpoints() {
    // Construct request
    const request = {
      networkEndpointGroup,
      networkEndpointGroupsDetachEndpointsRequestResource,
      project,
      zone,
    };

    // Run request
    const response = await computeClient.detachNetworkEndpoints(request);
    console.log(response);
  }

  callDetachNetworkEndpoints();
  // [END compute_v1_generated_NetworkEndpointGroups_DetachNetworkEndpoints_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
