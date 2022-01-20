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

function main(parent, feedId, feed) {
  // [START cloudasset_v1_generated_AssetService_CreateFeed_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project/folder/organization where this feed
   *  should be created in. It can only be an organization number (such as
   *  "organizations/123"), a folder number (such as "folders/123"), a project ID
   *  (such as "projects/my-project-id")", or a project number (such as
   *  "projects/12345").
   */
  // const parent = 'abc123'
  /**
   *  Required. This is the client-assigned asset feed identifier and it needs to
   *  be unique under a specific parent project/folder/organization.
   */
  // const feedId = 'abc123'
  /**
   *  Required. The feed details. The field `name` must be empty and it will be generated
   *  in the format of:
   *  projects/project_number/feeds/feed_id
   *  folders/folder_number/feeds/feed_id
   *  organizations/organization_number/feeds/feed_id
   */
  // const feed = {}

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callCreateFeed() {
    // Construct request
    const request = {
      parent,
      feedId,
      feed,
    };

    // Run request
    const response = await assetClient.createFeed(request);
    console.log(response);
  }

  callCreateFeed();
  // [END cloudasset_v1_generated_AssetService_CreateFeed_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
