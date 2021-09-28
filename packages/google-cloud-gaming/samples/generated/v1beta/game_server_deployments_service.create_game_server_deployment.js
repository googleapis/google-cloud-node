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

function main(parent, deploymentId, gameServerDeployment) {
  // [START gameservices_v1beta_generated_GameServerDeploymentsService_CreateGameServerDeployment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource name. Uses the form:
   *  `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the game server delpoyment resource to be created.
   */
  // const deploymentId = 'abc123'
  /**
   *  Required. The game server delpoyment resource to be created.
   */
  // const gameServerDeployment = ''

  // Imports the Gaming library
  const {GameServerDeploymentsServiceClient} =
    require('@google-cloud/game-servers').v1beta;

  // Instantiates a client
  const gamingClient = new GameServerDeploymentsServiceClient();

  async function createGameServerDeployment() {
    // Construct request
    const request = {
      parent,
      deploymentId,
      gameServerDeployment,
    };

    // Run request
    const [operation] = await gamingClient.createGameServerDeployment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createGameServerDeployment();
  // [END gameservices_v1beta_generated_GameServerDeploymentsService_CreateGameServerDeployment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
