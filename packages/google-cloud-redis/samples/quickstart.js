// Copyright 2019 Google LLC
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

// [START redis_quickstart]
/**
 * List instances in a given location.
 * @param {string} project.
 * @param {string} location, e.g., us-east-1.
 */
async function main(projectId, location) {
  const {CloudRedisClient} = require('@google-cloud/redis');
  const client = new CloudRedisClient();
  const formattedParent = client.locationPath(projectId, location);
  const request = {
    parent: formattedParent,
  };
  const resp = (await client.listInstances(request))[0];
  console.info(resp);
}
// [END redis_quickstart]

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
