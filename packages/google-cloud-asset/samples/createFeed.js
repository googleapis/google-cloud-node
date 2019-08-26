/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: Create Feed
//   description: Create Feed.
//   usage: node createFeed <FEED_ID> "//storage.googleapis.com/<BUCKET_NAME>", projects/<PROJECT_ID>/topics/<TOPIC_ID>

async function main(feedId, assetNames, topicName) {
  // [START asset_quickstart_create_feed]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset/src/v1p2beta1');

  const client = new AssetServiceClient();

  async function createFeed() {
    const projectId = await client.getProjectId();
    // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR_BUCKET_NAME].
    // const assetNames = ['ASSET_NAME1', 'ASSET_NAME2', ...];

    const request = {
      parent: `projects/${projectId}`,
      feedId: feedId,
      feed: {
        assetNames: assetNames.split(','),
        feedOutputConfig: {
          pubsubDestination: {
            topic: topicName,
          },
        },
      },
    };

    // Handle the operation using the promise pattern.
    const result = await client.createFeed(request);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
    // [END asset_quickstart_create_feed]
  }
  createFeed();
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
