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

function main(parent, gameServerClusterId, gameServerCluster) {
  // [START gameservices_v1_generated_GameServerClustersService_PreviewCreateGameServerCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name, in the following form:
   *  `projects/{project}/locations/{location}/realms/{realm}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the game server cluster resource to be created.
   */
  // const gameServerClusterId = 'abc123'
  /**
   *  Required. The game server cluster resource to be created.
   */
  // const gameServerCluster = {}
  /**
   *  Optional. The target timestamp to compute the preview.
   */
  // const previewTime = {}
  /**
   *  Optional. This field is deprecated, preview will always return
   *  KubernetesClusterState.
   */
  // const view = {}

  // Imports the Gaming library
  const {GameServerClustersServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new GameServerClustersServiceClient();

  async function callPreviewCreateGameServerCluster() {
    // Construct request
    const request = {
      parent,
      gameServerClusterId,
      gameServerCluster,
    };

    // Run request
    const response = await gamingClient.previewCreateGameServerCluster(request);
    console.log(response);
  }

  callPreviewCreateGameServerCluster();
  // [END gameservices_v1_generated_GameServerClustersService_PreviewCreateGameServerCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
