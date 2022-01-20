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

function main(masterVersion) {
  // [START container_v1_generated_ClusterManager_UpdateMaster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Kubernetes version to change the master to.
   *  Users may specify either explicit versions offered by Kubernetes Engine or
   *  version aliases, which have the following behavior:
   *  - "latest": picks the highest valid Kubernetes version
   *  - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
   *  - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
   *  - "1.X.Y-gke.N": picks an explicit Kubernetes version
   *  - "-": picks the default Kubernetes version
   */
  // const masterVersion = 'abc123'
  /**
   *  The name (project, location, cluster) of the cluster to update.
   *  Specified in the format `projects/* /locations/* /clusters/*`.
   */
  // const name = 'abc123'

  // Imports the Container library
  const {ClusterManagerClient} = require('@google-cloud/container').v1;

  // Instantiates a client
  const containerClient = new ClusterManagerClient();

  async function callUpdateMaster() {
    // Construct request
    const request = {
      masterVersion,
    };

    // Run request
    const response = await containerClient.updateMaster(request);
    console.log(response);
  }

  callUpdateMaster();
  // [END container_v1_generated_ClusterManager_UpdateMaster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
