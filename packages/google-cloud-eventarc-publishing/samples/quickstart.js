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

const protobufjs = require('protobufjs');
const spec = require('./spec.json');

function main(channelConnection) {
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
  const {PublisherClient} = require('@google-cloud/eventarc-publishing').v1;

  // Instantiates a client
  const publishingClient = new PublisherClient();

  async function callPublishChannelConnectionEvents() {
    const typeName = 'type.googleapis.com/io.cloudevents.v1.CloudEvent'.replace(
      /^.*\//,
      ''
    );
    //console.log(typeName);
    const root = protobufjs.Root.fromJSON(require('./spec.json'));
    const type = root.lookupType(typeName);
    const Any = root.lookupType('google.protobuf.Any');

    const event = type.fromObject({
      // '@type': 'type.googleapis.com/io.cloudevents.v1.CloudEvent',
      id: '12345',
      source: '//weatherco/example',
      specVersion: '1.0',
      //type: 'weatherco.v1.forecast',
      attributes: {
        time: {
          ceTimestamp: new Date('1970-01-01T00:00:01Z'),
        },
        datacontenttype: {
          ceString: 'application/json',
        },
      },
      textData: '{"message": "test message 123"}',
    });

    const message = Any.fromObject({
      typeUrl: typeName,
      value: event,
    });

    const request = {
      channelConnection,
      events: [message],
    };

    // Run request
    const response = await publishingClient.publishChannelConnectionEvents(
      request
    );
    console.log(response);
  }

  callPublishChannelConnectionEvents();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
