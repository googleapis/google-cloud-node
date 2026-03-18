// Copyright 2017 Google LLC
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

// [START gke_list_cluster]
async function main() {
  // [START container_quickstart]
  const container = require('@google-cloud/container');

  // Create the Cluster Manager Client
  const client = new container.v1.ClusterManagerClient();

  async function quickstart() {
    const zone = 'us-central1-a';
    const projectId = await client.getProjectId();
    const request = {
      projectId: projectId,
      zone: zone,
    };

    const [response] = await client.listClusters(request);
    console.log('Clusters: ', response);
  }
  quickstart();
  // [END container_quickstart]
}

main().catch(console.error);
// [END gke_list_cluster]
