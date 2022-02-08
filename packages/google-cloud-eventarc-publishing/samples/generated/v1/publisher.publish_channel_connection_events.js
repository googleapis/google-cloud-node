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

function main() {
  // [START eventarcpublishing_v1_generated_Publisher_PublishChannelConnectionEvents_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The channel_connection that the events are published from. For example:
   *  `projects/{partner_project_id}/locations/{location}/channelConnections/{channel_connection_id}`.
   */
  // const channelConnection = 'abc123'
  /**
   *  The CloudEvents v1.0 events to publish. No other types are allowed.
   */
  // const events = 1234

  // Imports the Publishing library
  const {PublisherClient} = require('@google-cloud/publishing').v1;

  // Instantiates a client
  const publishingClient = new PublisherClient();

  async function callPublishChannelConnectionEvents() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await publishingClient.publishChannelConnectionEvents(request);
    console.log(response);
  }

  callPublishChannelConnectionEvents();
  // [END eventarcpublishing_v1_generated_Publisher_PublishChannelConnectionEvents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
