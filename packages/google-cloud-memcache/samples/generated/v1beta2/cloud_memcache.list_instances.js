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

function main(parent) {
  // [START memcache_v1beta2_generated_CloudMemcache_ListInstances_async]
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
   *  The maximum number of items to return.
   *  If not specified, a default value of 1000 will be used by the service.
   *  Regardless of the `page_size` value, the response may include a partial
   *  list and a caller should only rely on response's
   *  `next_page_token` google.cloud.memcache.v1beta2.ListInstancesResponse.next_page_token 
   *  to determine if there are more instances left to be queried.
   */
  // const pageSize = 1234
  /**
   *  The `next_page_token` value returned from a previous List request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  List filter. For example, exclude all Memcached instances with name as
   *  my-instance by specifying `"name != my-instance"`.
   */
  // const filter = 'abc123'
  /**
   *  Sort results. Supported values are "name", "name desc" or "" (unsorted).
   */
  // const orderBy = 'abc123'

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1beta2;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function callListInstances() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await memcacheClient.listInstancesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListInstances();
  // [END memcache_v1beta2_generated_CloudMemcache_ListInstances_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
