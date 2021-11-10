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

function main(name, redisVersion) {
  // [START redis_v1beta1_generated_CloudRedis_UpgradeInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Redis instance resource name using the form:
   *      `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
   *  where `location_id` refers to a GCP region.
   */
  // const name = 'abc123'
  /**
   *  Required. Specifies the target version of Redis software to upgrade to.
   */
  // const redisVersion = 'abc123'

  // Imports the Redis library
  const {CloudRedisClient} = require('@google-cloud/redis').v1beta1;

  // Instantiates a client
  const redisClient = new CloudRedisClient();

  async function callUpgradeInstance() {
    // Construct request
    const request = {
      name,
      redisVersion,
    };

    // Run request
    const [operation] = await redisClient.upgradeInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpgradeInstance();
  // [END redis_v1beta1_generated_CloudRedis_UpgradeInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
