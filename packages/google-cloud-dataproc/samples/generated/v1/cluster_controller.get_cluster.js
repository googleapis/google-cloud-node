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

function main(projectId, region, clusterName) {
  // [START dataproc_v1_generated_ClusterController_GetCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project that the cluster
   *  belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Required. The cluster name.
   */
  // const clusterName = 'abc123'

  // Imports the Dataproc library
  const {ClusterControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new ClusterControllerClient();

  async function callGetCluster() {
    // Construct request
    const request = {
      projectId,
      region,
      clusterName,
    };

    // Run request
    const response = await dataprocClient.getCluster(request);
    console.log(response);
  }

  callGetCluster();
  // [END dataproc_v1_generated_ClusterController_GetCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
