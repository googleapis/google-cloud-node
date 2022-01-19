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
  // [START jobs_v4beta1_generated_ProfileService_ListProfiles_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant under which the profile is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  The filter string specifies the profiles to be enumerated.
   *  Supported operator: =, AND
   *  The field(s) eligible for filtering are:
   *  * `externalId`
   *  * `groupId`
   *  externalId and groupId cannot be specified at the same time. If both
   *  externalId and groupId are provided, the API will return a bad request
   *  error.
   *  Sample Query:
   *  * externalId = "externalId-1"
   *  * groupId = "groupId-1"
   */
  // const filter = 'abc123'
  /**
   *  The token that specifies the current offset (that is, starting result).
   *  Please set the value to ListProfilesResponse.next_page_token google.cloud.talent.v4beta1.ListProfilesResponse.next_page_token  to
   *  continue the list.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of profiles to be returned, at most 100.
   *  Default is 100 unless a positive number smaller than 100 is specified.
   */
  // const pageSize = 1234
  /**
   *  A field mask to specify the profile fields to be listed in response.
   *  All fields are listed if it is unset.
   *  Valid values are:
   *  * name
   */
  // const readMask = {}

  // Imports the Talent library
  const {ProfileServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new ProfileServiceClient();

  async function callListProfiles() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await talentClient.listProfilesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProfiles();
  // [END jobs_v4beta1_generated_ProfileService_ListProfiles_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
