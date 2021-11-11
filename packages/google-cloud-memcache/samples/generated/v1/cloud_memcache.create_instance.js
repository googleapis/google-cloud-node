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

function main(parent, instanceId, instance) {
  // [START memcache_v1_generated_CloudMemcache_CreateInstance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the instance location using the form:
   *      `projects/{project_id}/locations/{location_id}`
   *  where `location_id` refers to a GCP region
   */
  // const parent = 'abc123'
  /**
   *  Required. The logical name of the Memcached instance in the user
   *  project with the following restrictions:
   *  * Must contain only lowercase letters, numbers, and hyphens.
   *  * Must start with a letter.
   *  * Must be between 1-40 characters.
   *  * Must end with a number or a letter.
   *  * Must be unique within the user project / location
   *  If any of the above are not met, will raise an invalid argument error.
   */
  // const instanceId = 'abc123'
  /**
   *  Required. A Memcached Instance
   */
  // const instance = {}

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function callCreateInstance() {
    // Construct request
    const request = {
      parent,
      instanceId,
      instance,
    };

    // Run request
    const [operation] = await memcacheClient.createInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateInstance();
  // [END memcache_v1_generated_CloudMemcache_CreateInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
