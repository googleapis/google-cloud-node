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

function main(gameServerCluster, updateMask) {
  // [START gameservices_v1_generated_GameServerClustersService_UpdateGameServerCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The game server cluster to be updated.
   *  Only fields specified in update_mask are updated.
   */
  // const gameServerCluster = {}
  /**
   *  Required. Mask of fields to update. At least one path must be supplied in
   *  this field. For the `FieldMask` definition, see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  // const updateMask = {}

  // Imports the Gaming library
  const {GameServerClustersServiceClient} =
    require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new GameServerClustersServiceClient();

  async function callUpdateGameServerCluster() {
    // Construct request
    const request = {
      gameServerCluster,
      updateMask,
    };

    // Run request
    const [operation] = await gamingClient.updateGameServerCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateGameServerCluster();
  // [END gameservices_v1_generated_GameServerClustersService_UpdateGameServerCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
