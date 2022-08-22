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

// sample-metadata:
//   title: Get Feed
//   description: Get Feed.
//   usage: node getFeed "project/<PROJECT_NUMBER>/feeds/<FEED_ID>"

async function main(feedName) {
  // [START asset_quickstart_get_feed]
  const util = require('util');
  const {AssetServiceClient} = require('@google-cloud/asset');

  const client = new AssetServiceClient();

  async function getFeed() {
    const request = {
      name: feedName,
    };

    // Handle the operation using the promise pattern.
    const result = await client.getFeed(request);
    // Do things with with the response.
    console.log(util.inspect(result, {depth: null}));
  }
  getFeed();
  // [END asset_quickstart_get_feed]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
