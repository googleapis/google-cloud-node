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

function main(projectId, zone, clusterId, maintenancePolicy) {
  // [START container_v1_generated_ClusterManager_SetMaintenancePolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Google Developers Console project ID or project
   *  number (https://support.google.com/cloud/answer/6158840).
   */
  // const projectId = 'abc123'
  /**
   *  Required. The name of the Google Compute Engine
   *  zone (https://cloud.google.com/compute/docs/zones#available) in which the
   *  cluster resides.
   */
  // const zone = 'abc123'
  /**
   *  Required. The name of the cluster to update.
   */
  // const clusterId = 'abc123'
  /**
   *  Required. The maintenance policy to be set for the cluster. An empty field
   *  clears the existing maintenance policy.
   */
  // const maintenancePolicy = {}
  /**
   *  The name (project, location, cluster id) of the cluster to set maintenance
   *  policy.
   *  Specified in the format `projects/* /locations/* /clusters/*`.
   */
  // const name = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callSetMaintenancePolicy() {
    // Construct request
    const request = {
      projectId,
      zone,
      clusterId,
      maintenancePolicy,
    };

    // Run request
    const response = await containerClient.setMaintenancePolicy(request);
    console.log(response);
  }

  callSetMaintenancePolicy();
  // [END container_v1_generated_ClusterManager_SetMaintenancePolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
