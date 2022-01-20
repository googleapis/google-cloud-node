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

function main(name) {
  // [START gameservices_v1_generated_GameServerClustersService_GetGameServerCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the game server cluster to retrieve, in the following form:
   *  `projects/{project}/locations/{location}/realms/{realm-id}/gameServerClusters/{cluster}`.
   */
  // const name = 'abc123'
  /**
   *  Optional. View for the returned GameServerCluster objects. When `FULL` is
   *  specified, the `cluster_state` field is also returned in the
   *  GameServerCluster object, which includes the state of the referenced
   *  Kubernetes cluster such as versions and provider info. The default/unset
   *  value is GAME_SERVER_CLUSTER_VIEW_UNSPECIFIED, same as BASIC, which does
   *  not return the `cluster_state` field.
   */
  // const view = {}

  // Imports the Gaming library
  const {GameServerClustersServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new GameServerClustersServiceClient();

  async function callGetGameServerCluster() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await gamingClient.getGameServerCluster(request);
    console.log(response);
  }

  callGetGameServerCluster();
  // [END gameservices_v1_generated_GameServerClustersService_GetGameServerCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
