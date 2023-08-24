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
  // [START datastream_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent that owns the collection of connection profiles.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of connection profiles to return.
   *  If unspecified, at most 50 connection profiles will be returned.
   *  The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Page token received from a previous `ListConnectionProfiles` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListConnectionProfiles`
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter request.
   */
  // const filter = 'abc123'
  /**
   *  Order by fields for the result.
   */
  // const orderBy = 'abc123'

  // Imports the Datastream library
  const {DatastreamClient} = require('@google-cloud/datastream').v1;

  // Instantiates a client
  const datastreamClient = new DatastreamClient();

  async function listConnectionProfiles() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datastreamClient.listConnectionProfilesAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listConnectionProfiles();
  // [END datastream_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
