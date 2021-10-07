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
  // [START datastream_v1alpha1_generated_Datastream_FetchStaticIps_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name resource of the Response type. Must be in the
   *  format `projects/* /locations/*`.
   */
  // const name = 'abc123'
  /**
   *  Maximum number of Ips to return, will likely not be specified.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListStaticIps` call.
   *  will likely not be specified.
   */
  // const pageToken = 'abc123'

  // Imports the Datastream library
  const {DatastreamClient} = require('@google-cloud/datastream').v1alpha1;

  // Instantiates a client
  const datastreamClient = new DatastreamClient();

  async function fetchStaticIps() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const iterable = await datastreamClient.fetchStaticIpsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  fetchStaticIps();
  // [END datastream_v1alpha1_generated_Datastream_FetchStaticIps_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
