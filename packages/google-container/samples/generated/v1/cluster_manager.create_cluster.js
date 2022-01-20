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

function main(cluster) {
  // [START container_v1_generated_ClusterManager_CreateCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A cluster
   *  resource (https://cloud.google.com/container-engine/reference/rest/v1/projects.locations.clusters)
   */
  // const cluster = {}
  /**
   *  The parent (project and location) where the cluster will be created.
   *  Specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callCreateCluster() {
    // Construct request
    const request = {
      cluster,
    };

    // Run request
    const response = await containerClient.createCluster(request);
    console.log(response);
  }

  callCreateCluster();
  // [END container_v1_generated_ClusterManager_CreateCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
