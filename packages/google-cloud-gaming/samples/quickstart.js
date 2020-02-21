// Copyright 2020, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Create a Game Servers realm.
 * @param {string} projectId string project identifier.
 * @param {string} location Compute Engine region.
 */
async function main(projectId, location) {
  // [START game_servers_quickstart]
  const {RealmsServiceClient} = require('@google-cloud/game-servers');

  const client = new RealmsServiceClient();

  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    realmId: 'my-realm',
    realm: {
      // Must use a valid support time zone.
      // See https://cloud.google.com/dataprep/docs/html/Supported-Time-Zone-Values_66194188
      timeZone: 'US/Pacific',
      description: 'My Game Server realm',
    },
  };

  const [operation] = await client.createRealm(request);
  const results = await operation.promise();
  const [realm] = results;

  console.log('Realm created:');

  console.log(`\tRealm name: ${realm.name}`);
  console.log(`\tRealm description: ${realm.description}`);
  console.log(`\tRealm time zone: ${realm.timeZone}`);
  // [END game_servers_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
